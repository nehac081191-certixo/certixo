import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const plan = await prisma.auditPlan.findUnique({
            where: { id }
        });

        if (!plan) return NextResponse.json({ error: "Plan not found" }, { status: 404 });

        return NextResponse.json(plan);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const body = await req.json();

        // Whitelist updateable fields
        const { framework, auditType, startDate, endDate, status, currentStep, scope, systems, risks, evidencePlan, timeline, tasks } = body;

        const updated = await prisma.auditPlan.update({
            where: { id },
            data: {
                framework,
                auditType,
                startDate,
                endDate,
                status,
                currentStep,
                scope,
                systems,
                risks,
                evidencePlan,
                timeline,
                tasks,
                lastAiRefinementAt: new Date()
            }
        });

        return NextResponse.json(updated);
    } catch (error: any) {
        console.error("PATCH /api/audit-plans error:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
