import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    try {
        const { path } = await params;
        const targetPath = path.join('/');

        let body = {};
        try {
            const text = await req.text();
            if (text) {
                body = JSON.parse(text);
            }
        } catch (e) {
            // No body or invalid JSON
        }

        // Proxy to Python Backend
        const backendRes = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/${targetPath}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Internal-Secret': process.env.CERTIXO_INTERNAL_SECRET || ''
            },
            body: JSON.stringify(body)
        });

        if (backendRes.ok) {
            const result = await backendRes.json();
            return NextResponse.json(result);
        }

        const errorData = await backendRes.json();
        return NextResponse.json({ error: errorData.detail || "AI Orchestration failed" }, { status: backendRes.status });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
