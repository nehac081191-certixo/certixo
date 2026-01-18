import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || "";
    const provider = searchParams.get("provider");
    const env = searchParams.get("env");

    const assets = await prisma.asset.findMany({
        where: {
            AND: [
                {
                    OR: [
                        { name: { contains: q, mode: 'insensitive' } },
                        { externalId: { contains: q, mode: 'insensitive' } },
                        { type: { contains: q, mode: 'insensitive' } }
                    ]
                },
                provider ? { provider } : {},
                env ? { environment: env } : {}
            ]
        },
        include: { integration: { select: { displayName: true } } },
        orderBy: { updatedAt: 'desc' }
    });

    return NextResponse.json(assets);
}
