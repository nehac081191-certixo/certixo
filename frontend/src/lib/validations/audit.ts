import { z } from "zod";

export const AuditFrameworkEnum = z.enum(["SOC2", "ISO27001", "HIPAA", "PCI"]);
export const AuditTypeEnum = z.enum(["TypeI", "TypeII", "Surveillance", "Internal"]);
export const AuditStatusEnum = z.enum(["draft", "in_progress", "ready", "exported"]);

export const ScopeSchema = z.object({
    inScope: z.array(z.string()).min(1),
    outOfScope: z.array(z.string()),
    regions: z.array(z.string()),
    environments: z.array(z.string()),
    dataTypes: z.array(z.string()),
    assumptions: z.array(z.string()),
    openQuestions: z.array(z.string()),
});

export const SystemSchema = z.object({
    name: z.string(),
    category: z.enum(["identity", "cloud", "ci_cd", "observability", "storage", "issue_tracking", "other"]),
    purpose: z.string(),
    dataTypes: z.array(z.string()),
    ownerRole: z.string(),
    evidenceSources: z.array(z.string()),
    inScope: z.boolean(),
});

export const RiskSchema = z.object({
    title: z.string(),
    severity: z.enum(["low", "medium", "high", "critical"]),
    likelihood: z.enum(["low", "medium", "high"]),
    rationale: z.string(),
    suggestedControls: z.array(z.string()),
    evidenceNeeded: z.array(z.string()),
});

export const EvidenceItemSchema = z.object({
    category: z.string(),
    evidenceItem: z.string(),
    sourceSystem: z.string(),
    collectionMethod: z.enum(["auto", "manual"]),
    frequency: z.enum(["one_time", "weekly", "monthly", "quarterly", "on_change"]),
    ownerRole: z.string(),
    dueDate: z.string().optional(),
});

export const AuditPlanSchema = z.object({
    framework: AuditFrameworkEnum,
    auditType: AuditTypeEnum,
    startDate: z.string(),
    endDate: z.string(),
});

// --- ASSET INVENTORY SCHEMAS ---

export const IntegrationSchema = z.object({
    provider: z.enum(["AWS", "SERVICENOW", "SAP_ERP", "CSV"]),
    displayName: z.string().min(3),
    config: z.record(z.string(), z.any()),
});

export const AssetUpdateSchema = z.object({
    owner: z.string().optional(),
    environment: z.string().optional(),
    dataClassification: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

export const EvidenceGenerateSchema = z.object({
    framework: AuditFrameworkEnum,
    periodStart: z.string(),
    periodEnd: z.string(),
});
