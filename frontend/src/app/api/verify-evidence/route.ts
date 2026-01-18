import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        // Proxy to Python Backend
        const backendRes = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/analyze`, {
            method: 'POST',
            headers: {
                'X-Internal-Secret': process.env.CERTIXO_INTERNAL_SECRET || ''
            },
            body: formData
        });

        if (backendRes.ok) {
            const result = await backendRes.json();
            return NextResponse.json(result);
        }

        const errorData = await backendRes.json();
        return NextResponse.json({ error: errorData.detail || "Verification failed" }, { status: backendRes.status });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
