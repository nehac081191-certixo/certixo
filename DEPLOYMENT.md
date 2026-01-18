# Deployment Blueprint: getcertixo.com

This document outlines the path to taking Certixo V3 from local development to a production-ready environment on your domain **getcertixo.com**.

## 1. Stack Architecture (Production)
| Component | Technology | Recommended Host |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 | **Vercel** (Best for Next.js) |
| **Backend API** | FastAPI (Python) | **Railway / Render / Fly.io** |
| **Database** | PostgreSQL | **Neon.tech / Supabase** |
| **Queue/Redis** | BullMQ / Redis | **Upstash** (Serverless) |
| **Workers** | Node.js | **Railway** (Background Worker) |

## 2. Pre-Deployment Checklist

### A. Environment Variables Setup
You will need to create new "Production" versions of your secrets.
**Frontend (.env.production)**:
- `DATABASE_URL`: Your managed Postgres URL (from Neon/Supabase).
- `BACKEND_URL`: `https://api.getcertixo.com`
- `NEXTAUTH_SECRET`: Generate a new random hash.

**Backend (.env)**:
- `DATABASE_URL`: Same as above.
- `OPENAI_API_KEY`: Your production API key.
- `REDIS_URL`: Your Upstash Redis URL.

### B. Database Migration
1. Export your local data (if needed).
2. Update `schema.prisma`.
3. Run `npx prisma db push` against the *production* database URL.

## 3. Deployment Steps

### Step 1: Push to GitHub
If you haven't already, initialize a Git repository and push your code to a private GitHub repository.

### Step 2: Deploy Backend (Railway/Render)
1. Connect your GitHub repo.
2. Set the "Root Directory" to `/backend`.
3. Add your Environment Variables.
4. Railway will automatically detect the `requirements.txt` and `main:app`.

### Step 3: Deploy Frontend (Vercel)
1. Connect your GitHub repo.
2. Set the "Root Directory" to `/frontend`.
3. Add Environment Variables. Vercel will handle the build and SSL automatically.

### Step 5: Automate with GitHub Actions
I have added three workflows to your repo in `.github/workflows/`:
1.  **frontend-ci.yml**: Tests and builds the Next.js app on every push.
2.  **backend-deploy.yml**: Automatically pushes the AI Engine to Railway.
3.  **db-sync.yml**: Updates your production database schema whenever you change `schema.prisma`.

#### Required GitHub Secrets:
Go to **Settings > Secrets and variables > Actions** in your GitHub repo and add:
- `DATABASE_URL`: Your production Postgres URL.
- `RAILWAY_TOKEN`: Your Railway API token (get this from Railway Settings).
- `NEXT_PUBLIC_API_URL`: `https://api.getcertixo.com`

---

**Next Steps**:
1. Run `git add . && git commit -m "feat: automated deployment" && git push`.
2. Go to the "Actions" tab in GitHub to watch your first automated build!
