---
description: Comprehensive implementation plan for Certixo MVP based on the PRD.
---

# Certixo MVP Implementation Plan

Based on the [Certixo PRD](../README.md), this workflow guides the development of the MVP Features (90 Days Scope).

## Phase 1: Core Data Models & Control Engine (The "Brain")
The current system has "Documents" and "Integrations". We need to implement the concept of **Frameworks** and **Controls**.

1. **Database Schema Update**
   - Create `Framework` model (e.g., ISO 27001, SOC 2).
   - Create `Control` model (Specific requirements, e.g., "Access Review").
   - Create `FrameworkControl` association (Many-to-Many).
   - Update `AuditLog` (Evidence) to link to specific `Controls` instead of just generic categories.

2. **Seeding Framework Data**
   - Create a script to seed standard ISO 27001 and SOC 2 controls (using AI generated JSONs or static mocks).

## Phase 2: Evidence Engine Enhancements (The "Proof")
PRD Section 6.3 & 12.2.C (AI Evidence Intelligence)

1. **Evidence-to-Control Mapping**
   - Update UI to allow selecting a specific *Control* when uploading a document.
   - Update `FileUploader` to pass `control_id`.
   
2. **AI Validation Logic Update**
   - Modify `ai_service.py` to use the *Control Description* as the ground truth for validation.
   - Example Prompt: "Does this document satisfy the requirements of Control [X]: '[Description]'?"

## Phase 3: Policy Management (The "Rules")
PRD Section 6.4

1. **Policy Templates**
   - Create a library of markdown templates for common policies (Access Policy, privacy Policy).
   - Build a "Policy Editor" in the frontend.

## Phase 4: Integrations & Continuous Monitoring
PRD Section 6.3 & 12.2.D

1. **Deep Integrations**
   - Expand the current mocked Integrations to actually fetch data (or better simulate specific JSON outputs).
   - Implement "Drift Detection": If an integration status changes (e.g., MFA disabled), create a generic Alert.

## Phase 5: AI Copilot (The "Assistant")
PRD Section 12.2.A

1. **RAG System**
   - Index uploaded documents and framework texts.
   - Build `ChatInterface` component.
   - API: `/chat` endpoint.

---

## Immediate Next Step: Execute Phase 1

1. Run the database migration for `Framework` and `Control`.
2. Seed the DB with SOC 2 Controls.
