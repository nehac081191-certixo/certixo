const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.auditPlan.upsert({
        where: { id: 'seed-plan-2026' },
        update: {},
        create: {
            id: 'seed-plan-2026',
            framework: 'SOC2',
            auditType: 'TypeII',
            startDate: '2026-01-01',
            endDate: '2026-12-31',
            status: 'ready',
            currentStep: 'EXPORT',
            scope: {
                inScope: ["AWS Production", "Certixo App", "Customer Database"],
                outOfScope: ["Local Office"],
                regions: ["US-EAST-1"],
                environments: ["Production"],
                dataTypes: ["PII", "Audit Logs"],
                assumptions: ["Network is encrypted in transit"],
                openQuestions: []
            },
            systems: [
                { name: "AWS", category: "cloud", purpose: "Hosting", dataTypes: ["All"], ownerRole: "CTO", evidenceSources: ["Config", "IAM"], inScope: true }
            ],
            risks: [
                { title: "Unauthorized DB Access", severity: "high", likelihood: "low", rationale: "PII exposure risk", suggestedControls: ["MFA", "Rotation"], evidenceNeeded: ["Logs"] }
            ],
            evidencePlan: [
                { category: "Cloud", evidenceItem: "IAM Policy Review", sourceSystem: "AWS", collectionMethod: "auto", frequency: "monthly", ownerRole: "Security Lead" },
                { category: "HR", evidenceItem: "Background Checks", sourceSystem: "Checkr", collectionMethod: "manual", frequency: "monthly", ownerRole: "Ops Manager" }
            ],
            timeline: [],
            tasks: [],
            auditorPack: { pbcIndexGenerated: true, exportFormats: ["pdf", "zip"] }
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
