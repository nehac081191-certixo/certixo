import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { IntegrationRegistry } from "@/lib/integrations/registry";

export async function GET() {
    const integrations = await prisma.integration.findMany({
        include: { _count: { select: { assets: true } } },
        orderBy: { updatedAt: 'desc' }
    });
    return NextResponse.json(integrations);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { provider, displayName, config } = body;

        if (!IntegrationRegistry[provider]) {
            return NextResponse.json({ error: "Unsupported provider" }, { status: 400 });
        }

        const test = await IntegrationRegistry[provider].testConnection(config);
        if (!test.success) {
            return NextResponse.json({ error: test.message }, { status: 400 });
        }

        const integration = await prisma.integration.create({
            data: {
                provider,
                displayName,
                config,
                status: "CONNECTED"
            }
        });

        return NextResponse.json(integration);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
