# Backend Production Setup: Python FastAPI

This guide helps you deploy the Python backend for Certixo.

## 1. Hosting Choice: Railway.app (Recommended)
Railway is the easiest platform for this stack as it handles Dockerfiles automatically.

### Steps:
1. **Create Project**: Sign in to [Railway](https://railway.app) and create a new project.
2. **Connect GitHub**: Import the `certixo` repository.
3. **Environment Variables**: Add the following:
   - `OPENAI_API_KEY`: Your OpenAI Key.
   - `DATABASE_URL`: The PostgreSQL connection string (Railway can provision this for you in 1 click).
   - `REDIS_URL`: The Redis connection string (Railway can also provision this).
4. **Networking**: Ensure the port is set to `8000`.

## 2. Infrastructure (PostgreSQL & Redis)
In the same Railway project:
- Click **New** -> **Database** -> **PostgreSQL**.
- Click **New** -> **Database** -> **Redis**.

The `DATABASE_URL` and `REDIS_URL` will be automatically available to the Python service if you "link" them in the Railway UI.

## 3. Custom Domain
1. Go to your Python service settings in Railway.
2. Under "Domains", click "Custom Domain".
3. Enter `api.getcertixo.com`.
4. Update your DNS settings at your domain registrar (GoDaddy/Namecheap) with the provided CNAME value.

---

### Important: Database Migrations
Since you use Prisma on the frontend and SQLAlchemy on the backend, ensure your Postgres database is initialized.
1. Run `npx prisma db push` from your local machine to the production database once to create the tables.
   `DATABASE_URL=your_prod_url npx prisma db push`
