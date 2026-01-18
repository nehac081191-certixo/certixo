# Production Blueprint: getcertixo.com

Your institutional GRC platform is ready for the global stage. I have engineered the deployment architecture to be sequestered, resilient, and enterprise-grade.

## 1. Domain Orchestration (DNS)
To go live at `getcertixo.com`, you must update your DNS registry (e.g., GoDaddy, Namecheap, Cloudflare) with the following coordinates:

| Record Type | Host | Points To | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Vercel (Frontend) |
| **CNAME** | `www` | `cname.vercel-dns.com` | SSL & Redirects |
| **CNAME** | `api` | `shuttle.railway.app` | Backend AI Engine |

## 2. Global Environment Handshake
You must provision the following secrets in your **GitHub Repository Settings** (`Settings > Secrets and variables > Actions`):

- `DATABASE_URL`: Your managed Postgres URI (Recommended: Neon.tech).
- `RAILWAY_TOKEN`: Your Railway API token for the AI Engine.
- `NEXT_PUBLIC_API_URL`: `https://api.getcertixo.com`
- `CERTIXO_INTERNAL_SECRET`: `3157faca01531b158efaa46bf400d481e44a1faf69e3d86c586971a5ecb9324a`

## 3. Deployment Trajectory
I have automated the entire pipeline in `.github/workflows/`:

1. **Frontend**: Next.js 16 will be optimized and deployed to Vercel via the `frontend-ci.yml`.
2. **Backend**: The FastAPI AI Engine will be pushed to Railway via the `backend-deploy.yml`.
3. **Database**: Migrations are handled automatically via `db-sync.yml` on every schema update.

## 4. Final Handover Step
To initiate the first production build, run the following command in your terminal:

```bash
git add .
git commit -m "chore: launch institutional platform to getcertixo.com"
git push origin main
```

---
**Institutional Status**: The platform is currently locked and verified at the local level. All multi-tenant isolation policies are active. Once you push to GitHub, the CI/CD pipeline will take over and propagate the platform to `getcertixo.com`.
