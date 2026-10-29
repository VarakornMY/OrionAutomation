# Move Orion from Vercel to Cloudflare

The React frontend runs on **Workers Static Assets**. The existing FastAPI app
runs in a **Cloudflare Container** behind the same Worker. Google Drive continues
to store posts and images. Cloudflare Containers require the **Workers Paid** plan
(separate from the domain's Cloudflare plan).

`wrangler.jsonc` serves `dist`, handles React Router paths such as `/admin` and
`/blog`, and routes `/api/*`, `/mcp/*`, `/healthz`, and API documentation to Python.
This explicit configuration avoids Wrangler's Vite auto-configuration error;
Vite 5 can still build the frontend.

## 1. Configure Cloudflare Workers Builds

Open the `orionautomation` Worker, then **Settings > Builds**:

- Root directory: the directory containing `package.json`, `wrangler.jsonc`, and
  `Dockerfile`. Use `OrionAutomation` only if the connected repository contains
  that parent folder; otherwise use the repository root.
- Build command: `npm run build`
- Deploy command: `npm run deploy` (the existing `npx wrangler deploy` also works)
- Node.js: 22 or newer. The existing Node.js 24 environment is suitable.

Wrangler builds and uploads the Python image during deployment. Workers Builds
supports Dockerfile builds. Manual deployment and local container preview need
a running Docker engine.

Remove any old `VITE_API_URL` build variable pointing at Vercel or localhost.
Production uses same-origin `/api` requests by default; ordinary local Vite
development still uses `http://localhost:8000`.

## 2. Add backend runtime secrets

Add these under the Worker's **Settings > Variables and Secrets** as encrypted
runtime secrets, or use the interactive CLI commands below. These are not build
variables and must not have a `VITE_` prefix.

| Secret | Value |
| --- | --- |
| `ADMIN_USERNAME` | Your current CMS username |
| `ADMIN_PASSWORD` | Your current CMS password |
| `GEMINI_KEY` | Your Gemini API key |
| `GOOGLE_SERVICE_ACCOUNT_JSON_CONTENT` | The entire Google service-account JSON file, not its local Windows path |
| `DRIVE_POSTS_FOLDER_ID` | Your existing Google Drive posts folder ID |
| `DRIVE_IMAGES_FOLDER_ID` | Optional; defaults to the posts folder |
| `MCP_ALLOWED_HOSTS` | Optional comma-separated extra exact hostnames for MCP, e.g. your `orionautomation.<account>.workers.dev` hostname |

```powershell
npx wrangler secret put ADMIN_USERNAME
npx wrangler secret put ADMIN_PASSWORD
npx wrangler secret put GEMINI_KEY
npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_JSON_CONTENT
npx wrangler secret put DRIVE_POSTS_FOLDER_ID
```

Use the same Google Drive folders and share them with the service account.
Local development can continue using the `GOOGLE_SERVICE_ACCOUNT_JSON` file
path. The container uses the JSON-content secret instead. `.dockerignore`
excludes environment files and local MCP keys from the image.

After the first deployment, generate a new MCP key in `/admin` and update your
automation clients to use `https://orionautomation.xyz/mcp/`. The old local MCP
key file is not uploaded. Future generated keys are saved in Durable Object
storage and restored when the container sleeps, restarts, or is redeployed.
Keep the Worker name, Durable Object binding, class, and instance name stable
to preserve that storage. The naked and `www` production domains are already
allowed by MCP; add the exact workers.dev hostname through `MCP_ALLOWED_HOSTS`
if you want to test MCP before connecting the custom domain.

## 3. Commit, deploy, and verify

Commit the new configuration, Dockerfile, Worker, Python changes, and npm
lockfile, then push to the Cloudflare production branch. The first container
deployment can take several minutes to provision.

Verify on the Cloudflare hostname:

1. `/` loads, and refreshing `/admin` or `/blog` renders the application.
2. `/healthz` returns `{"ok":true}`.
3. `/api/blogs` returns your published posts from Google Drive.
4. Sign in to `/admin`, check the post list and images, and send a chatbot message.
5. Generate the MCP key, connect a client to `/mcp/`, then confirm the key still
   works after the container has slept and restarted.

Once verified, attach `orionautomation.xyz` and `www.orionautomation.xyz` to the
Worker and remove their old Vercel DNS routing during the domain cutover.

## Local checks

```powershell
npm ci
npm run build
npm run test:cloudflare
.venv/Scripts/python.exe -m unittest backend.test_cloudflare -v
npm run deploy:check
npm run preview:cloudflare
```

The dry run validates Worker bundling/configuration without publishing or
building the container image. It does not verify the image or Google credentials.
To validate the image separately, run `docker build -t orion-backend:check .`.
For a full local preview,
start Docker and create a gitignored `.dev.vars` with the runtime secret values.
Run `npm run preview:cloudflare` and use the URL printed by Wrangler.

To publish manually, authenticate with Cloudflare and run `npm run build`
followed by `npm run deploy`.

Reference: [Workers assets](https://developers.cloudflare.com/workers/static-assets/),
[Containers deployment](https://developers.cloudflare.com/containers/guides/deploy/),
[Containers pricing](https://developers.cloudflare.com/containers/platform/pricing/).
