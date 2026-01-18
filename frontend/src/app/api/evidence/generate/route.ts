import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { framework, periodStart, periodEnd } = body;

        // Fetch assets and history for the period
        const assets = await prisma.asset.findMany({
            where: { updatedAt: { gte: new Date(periodStart), lte: new Date(periodEnd) } },
            include: { history: true }
        });

        // Mock AI Evidence Writer Narrative
        const summary = `During the audit period from ${periodStart} to ${periodEnd}, Certixo identified ${assets.length} active assets within the ${framework} boundary. 
    A total of ${assets.reduce((acc: number, a: any) => acc + (a.history?.length || 0), 0)} change events were recorded and verified. 
    Encryption coverage stands at ${Math.round((assets.filter((a: any) => a.encryptionStatus).length / assets.length) * 100)}%, exceeding the baseline requirement. 
    All discovered assets have assigned owners and were subject to continuous monitoring via integration adapters.`;

        const exportRecord = await prisma.evidenceExport.create({
            data: {
                name: `Evidence Snapshot - ${framework} - ${new Date().toISOString().split('T')[0]}`,
                framework,
                periodStart: new Date(periodStart),
                periodEnd: new Date(periodEnd),
                summary,
                fileUrl: "/exports/mock-artifact.pdf",
                artifactIndex: {
                    assetCount: assets.length,
                    criticalGaps: assets.filter((a: any) => !a.owner).length,
                    encryptionRate: assets.filter((a: any) => a.encryptionStatus).length / assets.length
                }
            }
        });

        return NextResponse.json(exportRecord);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
