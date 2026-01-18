# Certixo

Certixo is an AI-first Compliance Automation Platform built for the Indian market, inspired by Scrut Automation and Sprinto.

## Vision
Enable organizations to achieve, manage, and continuously maintain compliance with global standards through automation, evidence intelligence, and real-time visibility.

## MVP Scope (90 Days)
- **Frameworks**: ISO 27001, SOC 2
- **Core Features**: Control Engine, Automated Evidence Collection (AI), Policy Management.
- **AI Integration**: Document Analysis, RAG-based Copilot.

## Tech Stack
- **Frontend**: Next.js (React), TailwindCSS, Chart.js (planned)
- **Backend**: Python (FastAPI), SQLAlchemy (SQLite for MVP)
- **AI**: OpenAI API

## Workflow
See [.agent/workflows/certixo_mvp_plan.md](.agent/workflows/certixo_mvp_plan.md) for the detailed build roadmap.

## Setup
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```
