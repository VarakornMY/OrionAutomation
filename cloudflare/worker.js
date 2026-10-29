import { Container, getContainer } from '@cloudflare/containers';

export class OrionBackend extends Container {
    defaultPort = 8000;
    sleepAfter = '10m';

    constructor(ctx, env) {
        super(ctx, env);
        this.envVars = {};
        for (const name of [
            'GEMINI_KEY', 'ADMIN_USERNAME', 'ADMIN_PASSWORD',
            'GOOGLE_SERVICE_ACCOUNT_JSON_CONTENT',
            'DRIVE_POSTS_FOLDER_ID', 'DRIVE_IMAGES_FOLDER_ID',
            'MCP_ALLOWED_HOSTS',
        ]) {
            if (env[name]) this.envVars[name] = env[name];
        }
        // The container filesystem is temporary. Restore the CMS-generated MCP
        // key from this instance's durable storage before starting Python.
        ctx.blockConcurrencyWhile(async () => {
            const record = await ctx.storage.get('mcp-key');
            if (record) this.envVars.MCP_KEY_RECORD_JSON = JSON.stringify(record);
        });
    }

    async fetch(request) {
        if (!this.envVars.ADMIN_PASSWORD || !this.envVars.ADMIN_USERNAME) {
            return Response.json({ detail: 'Configure ADMIN_USERNAME and ADMIN_PASSWORD Worker secrets.' }, { status: 503 });
        }
        const url = new URL(request.url);
        if (request.method === 'POST' && url.pathname === '/api/admin/mcp-key/rotate') {
            // Serialize rotations and persist before returning a successful key
            // to the admin. Only the authenticated Python endpoint creates keys.
            return this.ctx.blockConcurrencyWhile(async () => {
                const response = await super.fetch(request);
                if (response.ok) {
                    const record = await response.clone().json();
                    await this.ctx.storage.put('mcp-key', record);
                    this.envVars.MCP_KEY_RECORD_JSON = JSON.stringify(record);
                }
                return response;
            });
        }
        return super.fetch(request);
    }
}

export default {
    async fetch(request, env) {
        const path = new URL(request.url).pathname;
        if (path === '/api' || path.startsWith('/api/') ||
            path === '/mcp' || path.startsWith('/mcp/') ||
            ['/healthz', '/docs', '/docs/oauth2-redirect', '/redoc', '/openapi.json'].includes(path)) {
            // A stable instance keeps the existing in-process chat rate limiter
            // and MCP sessions together. Static files never wake the container.
            const headers = new Headers(request.headers);
            const clientIp = request.headers.get('CF-Connecting-IP');
            if (clientIp) headers.set('X-Forwarded-For', clientIp);
            headers.set('X-Forwarded-Proto', new URL(request.url).protocol.slice(0, -1));
            return getContainer(env.BACKEND, 'orion-api').fetch(new Request(request, { headers }));
        }
        return env.ASSETS.fetch(request);
    },
};
