import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('website-only deployment has no executable backend or paid resources', async () => {
    const config = JSON.parse(await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
    for (const name of ['main', 'containers', 'durable_objects', 'kv_namespaces', 'r2_buckets']) {
        assert.equal(config[name], undefined, `${name} must stay out of the static deployment`);
    }
    assert.equal(config.assets.directory, './dist');
    assert.equal(config.assets.not_found_handling, 'single-page-application');
});

test('production API calls stop locally while the backend is deferred', async () => {
    const source = await readFile(new URL('../src/lib/api.js', import.meta.url), 'utf8');
    const code = source.replaceAll('import.meta.env', '({DEV:false,VITE_BACKEND_ENABLED:"false"})');
    const api = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
    assert.equal(api.BACKEND_ENABLED, false);
    assert.equal(api.API_BASE, '');
    await assert.rejects(api.listPosts(), { status: 503 });
    await assert.rejects(api.adminLogin('admin', 'unused'), { status: 503 });
    await assert.rejects(api.sendChatMessage({ message: 'hello' }), { status: 503 });
});

test('ordinary local development retains the Python backend', async () => {
    const source = await readFile(new URL('../src/lib/api.js', import.meta.url), 'utf8');
    const code = source.replaceAll('import.meta.env', '({DEV:true})');
    const api = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
    assert.equal(api.BACKEND_ENABLED, true);
    assert.equal(api.API_BASE, 'http://localhost:8000');
});
