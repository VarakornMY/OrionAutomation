# Cloudflare website-only deployment

The public website deploys to Workers Static Assets. There is no executable
Worker backend, Container, Durable Object binding, database, or paid AI call in
the production deployment. Cloudflare documents static asset requests as free
and unlimited: https://developers.cloudflare.com/workers/platform/pricing/

The Python backend is deferred at the user's request. Its files remain in the
repository for future work; `wrangler.jsonc` does not reference or deploy them.
Do not add a Container or upgrade the account to deploy this website.

## Build settings

- Worker: `orionautomation`
- Repository root: the directory containing `package.json` and `wrangler.jsonc`
- Build: `npm run build`
- Deploy: `npm run deploy` (or `npx wrangler deploy`)

`assets.not_found_handling` serves `index.html` for React Router navigation.
The generated site is served at https://orionautomation.varakornm0403.workers.dev.
No backend runtime secrets are needed for this deployment.

## Deferred features

`.env.production` disables production API calls. Blog pages use the existing
bundled articles. The chatbot widget is hidden until a backend is deployed.
Admin operations report that the backend is not deployed. Local `npm run dev`
still connects to Python at http://localhost:8000.

Do not enable `VITE_BACKEND_ENABLED` in a production build until a backend has
been deliberately configured. A separately hosted backend can later use
`VITE_API_URL`, followed by rebuilding and verifying its endpoints.

## Verification and manual deployment

```powershell
npm run test:cloudflare
npm run build
npm run deploy:check
npm run deploy
```

The dry run must show `No bindings found` and must not build a Docker image.
After deployment, verify the home, services, portfolio and blog URLs, and test
refreshing a nested route. Custom-domain routing is separate from deployment;
use the workers.dev address to confirm the website first.
