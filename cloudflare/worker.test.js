import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

// Exercise the Worker boundaries without a Docker engine. Only the Cloudflare
// runtime's Container and namespace are replaced; routing uses real Requests.
class TestContainer {
    constructor(ctx) { this.ctx = ctx; }
    async fetch(request) { return this.ctx.backend(request); }
}
globalThis.__orionContainerTest = {
    Container: TestContainer,
    getContainer: (namespace, name) => { assert.equal(name, 'orion-api'); return namespace; },
};
const source = (await readFile(new URL('./worker.js', import.meta.url), 'utf8'))
    .replace("import { Container, getContainer } from '@cloudflare/containers';",
        'const { Container, getContainer } = globalThis.__orionContainerTest;');
const { default: worker, OrionBackend } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);

test('static routes stay on assets; API and MCP requests reach the backend with auth and body', async () => {
    let backendCalls = 0;
    const env = {
        ASSETS: { fetch: async () => new Response('frontend') },
        BACKEND: { fetch: async (request) => {
            backendCalls++;
            assert.equal(request.headers.get('Authorization'), 'Bearer test-token');
            assert.equal(request.headers.get('X-Forwarded-For'), '192.0.2.1');
            assert.equal(await request.text(), 'test-body');
            return new Response('backend', { status: 201 });
        } },
    };
    for (const path of ['/', '/admin', '/blog/example', '/assets/example.html']) {
        assert.equal(await (await worker.fetch(new Request(`https://example.com${path}`), env)).text(), 'frontend');
    }
    assert.equal(backendCalls, 0);
    for (const path of ['/api/blogs', '/mcp/', '/healthz', '/openapi.json']) {
        const response = await worker.fetch(new Request(`https://example.com${path}`, {
            method: 'POST', body: 'test-body',
            headers: { Authorization: 'Bearer test-token', 'CF-Connecting-IP': '192.0.2.1' },
        }), env);
        assert.equal(response.status, 201);
    }
    assert.equal(backendCalls, 4);
});

test('only successful authenticated key rotations persist and survive a new container', async () => {
    const stored = new Map();
    let pending;
    let status = 401;
    const record = { key: 'test-generated-key', createdAt: '2026-10-29', rotatedAt: '2026-10-29' };
    const ctx = {
        storage: { get: async key => stored.get(key), put: async (key, value) => stored.set(key, value) },
        blockConcurrencyWhile: callback => (pending = callback()),
        backend: async () => Response.json(record, { status }),
    };
    const env = { ADMIN_USERNAME: 'admin', ADMIN_PASSWORD: 'test-password' };
    const backend = new OrionBackend(ctx, env);
    await pending;
    const request = () => new Request('https://example.com/api/admin/mcp-key/rotate', { method: 'POST' });
    await backend.fetch(request());
    assert.equal(stored.size, 0);
    status = 200;
    await backend.fetch(request());
    assert.deepEqual(stored.get('mcp-key'), record);
    const restarted = new OrionBackend(ctx, env);
    await pending;
    assert.deepEqual(JSON.parse(restarted.envVars.MCP_KEY_RECORD_JSON), record);
    const unconfigured = new OrionBackend(ctx, {});
    await pending;
    assert.equal((await unconfigured.fetch(request())).status, 503);
});
