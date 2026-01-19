# Production Blueprint: getcertixo.com

Your institutional GRC platform is ready for the global stage. I have engineered the deployment architecture to be sequestered, resilient, and enterprise-grade.

## 1. Primary Domain Orchestration (GoDaddy Setup)
Since you have removed the marketing site, we will now host the entire Certixo Platform at the root of your domain (**getcertixo.com**).

### **DNS Configuration (GoDaddy Dashboard)**
Update your DNS records with these coordinates to route all traffic to Vercel (Frontend) and Railway (Backend):

| Record Type | Host | Points To | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Apex Domain (Vercel) |
| **CNAME** | `www` | `cname.vercel-dns.com` | WWW Redirect (Vercel) |
| **CNAME** | `api` | `shuttle.railway.app` | Governance API (Railway) |

## 2. Global Environment Handshake
You must provision the following secrets in your **GitHub Repository Settings** (`Settings > Secrets and variables > Actions`):

- `DATABASE_URL`: Your managed Postgres URI (Recommended: [Neon.tech](https://neon.tech)).
- `RAILWAY_TOKEN`: Your Railway API token for the AI Engine.
- `NEXT_PUBLIC_API_URL`: `https://api.getcertixo.com`
- `CERTIXO_INTERNAL_SECRET`: `3157faca01531b158efaa46bf400d481e44a1faf69e3d86c586971a5ecb9324a`

## 3. Production Database Synchronization
To establish the multi-tenant schema on your production database, run the following command from your local terminal BEFORE the first push:

```bash
cd frontend
DATABASE_URL="your-production-postgres-url" npx prisma db push
```

## 4. Deployment Trajectory
I have automated the entire pipeline in `.github/workflows/`:

1. **Frontend**: Next.js 16 will be optimized and deployed to Vercel via the `frontend-ci.yml`.
2. **Backend**: The FastAPI AI Engine will be pushed to Railway via the `backend-deploy.yml`.
3. **Database**: Migrations are handled automatically via `db-sync.yml` on every schema update.

## 5. Final Handover Step
To initiate the global rollout, push your changes to the Certixo account:

```bash
git add .
git commit -m "chore: propagate institutional platform to getcertixo.com root"
git push origin main
```

---
**Institutional Status**: The platform is currently locked and verified at the local level. All multi-tenant isolation policies are active. Once you push to GitHub, the CI/CD pipeline will take over and your platform will be live at **getcertixo.com**.
