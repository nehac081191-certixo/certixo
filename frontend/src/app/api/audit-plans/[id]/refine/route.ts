import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await req.json();
    const { step, currentData, instruction } = body;

    try {
        // Proxy to Python Backend for real AI synthesis
        const backendRes = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/ai-auditor/refine-step`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Internal-Secret': process.env.CERTIXO_INTERNAL_SECRET || ''
            },
            body: JSON.stringify({ step, currentData, instruction })
        });

        if (backendRes.ok) {
            const result = await backendRes.json();
            return NextResponse.json(result);
        }

        // Fallback or Error handling
        return NextResponse.json({
            error: "Failed to connect to AI Engine",
            summary: "Manual orchestration required due to AI latency.",
            plan_patch: {},
            questions: [],
            warnings: ["AI Synthesis currently offline"],
            next_step_recommended: step
        }, { status: 502 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
