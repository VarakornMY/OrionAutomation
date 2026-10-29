import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');

// The server bundle is a build tool only. Cloudflare receives dist/, which
// contains HTML, CSS, JavaScript and images; it has no running server.
process.env.NODE_ENV = 'production';
await build({
    root,
    logLevel: 'warn',
    ssr: { noExternal: ['react-helmet-async'] },
    build: { ssr: 'src/prerender.jsx', outDir: 'dist-ssr', emptyOutDir: true },
});
const { publicRoutes, renderPage } = await import(pathToFileURL(resolve(root, 'dist-ssr/prerender.js')).href);
const template = await readFile(resolve(output, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
    throw new Error('Prerender expected the client build to contain an empty root element.');
}

// Keep Vite's asset links, analytics, viewport and favicon. The page component
// supplies its own title, description, canonical, social metadata and schema.
const base = template
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b(?=[^>]*(?:\bname=["'](?:description|keywords|robots)["']|\bproperty=["'](?:og:|twitter:)[^"']*["']))[^>]*>/gi, '')
    .replace(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi, '');

for (const path of publicRoutes) {
    const { body, head } = renderPage(path);
    const html = base.replace('</head>', () => `${head}\n</head>`)
        .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
    // Flat .html files retain clean URLs without forcing trailing slashes.
    const file = resolve(output, path === '/' ? 'index.html' : `${path.slice(1)}.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
}
console.log(`Prerendered ${publicRoutes.length} public business pages.`);
