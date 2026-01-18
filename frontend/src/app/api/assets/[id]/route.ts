import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const asset = await prisma.asset.findUnique({
        where: { id },
        include: {
            integration: true,
            history: { orderBy: { timestamp: 'desc' } }
        }
    });

    if (!asset) return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    return NextResponse.json(asset);
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const body = await req.json();
        const { owner, environment, dataClassification, tags } = body;

        const updated = await prisma.asset.update({
            where: { id },
            data: { owner, environment, dataClassification, tags }
        });

        return NextResponse.json(updated);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
