import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { AuditPlanSchema } from "@/lib/validations/audit";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        // Validate core context
        AuditPlanSchema.parse({
            framework: body.framework,
            auditType: body.auditType,
            startDate: body.startDate,
            endDate: body.endDate
        });

        const plan = await prisma.auditPlan.create({
            data: {
                framework: body.framework,
                auditType: body.auditType,
                startDate: body.startDate,
                endDate: body.endDate,
                status: "draft",
                currentStep: "CONTEXT",
                scope: body.scope || { inScope: [], outOfScope: [], regions: [], environments: [], dataTypes: [], assumptions: [], openQuestions: [] },
                systems: body.systems || [],
                risks: body.risks || [],
                evidencePlan: body.evidencePlan || [],
                timeline: body.timeline || [],
                tasks: body.tasks || [],
            },
        });

        return NextResponse.json(plan);
    } catch (error: any) {
        console.error("POST /api/audit-plans error:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function GET() {
    try {
        const plans = await prisma.auditPlan.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(plans);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
