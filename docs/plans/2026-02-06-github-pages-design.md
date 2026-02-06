# GitHub Pages Deployment Design

**Goal:** Automatically build the Vite site and publish it to GitHub Pages on every push to the default branch.

**Architecture:** Use the official GitHub Pages Actions flow. A single workflow runs on push to `main`, installs dependencies, runs the Vite build, uploads `dist/` as a Pages artifact, and deploys via `actions/deploy-pages`. The site is intended to serve from the root path (`/`), which matches the requirement for a custom domain at `web.podslink.net`. If a custom domain is desired in-repo later, we can add a `public/CNAME` file, but domain binding is out of scope for this change.

**Components:**
- `.github/workflows/pages.yml` defines the build and deploy pipeline.
- `vite.config.ts` uses the default base (`/`) for root deployment.
- `package-lock.json` enables deterministic `npm ci` in CI.

**Data flow:** Commit to `main` -> Actions workflow -> `npm ci` -> `npm run build` -> `dist/` artifact upload -> GitHub Pages deploy.

**Error handling:** If install or build fails, the workflow stops and Pages is not updated. Errors are visible in the Actions tab, and the previous successful Pages deployment remains live.

**Testing strategy:** The workflow runs `npm run build` as the verification step. There are no existing test scripts in this project, so no additional checks are added. If tests are introduced later, we can insert them before the build step.

**Security/permissions:** The workflow uses the minimum required permissions for Pages (`pages: write`, `id-token: write`, `contents: read`).
