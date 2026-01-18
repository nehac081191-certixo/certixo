import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const asset = await prisma.asset.findUnique({
        where: { id }
    });

    if (!asset) return NextResponse.json({ error: "Asset not found" }, { status: 404 });

    // AI Gap Analysis Logic (Simulated Institutional Logic)
    const gaps = [];

    if (!asset.owner || asset.owner === 'Unassigned') {
        gaps.push({
            field: 'owner',
            severity: 'HIGH',
            message: 'Asset has no assigned institutional owner. Ownership is mandatory for SOC 2 CC6.1.',
            recommendation: 'Assign to the relevant Department Head or Infrastructure Lead.'
        });
    }

    if (!asset.dataClassification) {
        gaps.push({
            field: 'dataClassification',
            severity: 'MEDIUM',
            message: 'Missing data classification label.',
            recommendation: 'Analyze raw payload to determine if PII/PHI is present.'
        });
    }

    if (!asset.encryptionStatus && asset.type.includes('S3') || asset.type.includes('Database')) {
        gaps.push({
            field: 'encryptionStatus',
            severity: 'CRITICAL',
            message: 'Data-at-rest encryption signals not detected in provider payload.',
            recommendation: 'Enable AES-256 or KMS encryption on the provider side and resync.'
        });
    }

    if (!asset.environment) {
        gaps.push({
            field: 'environment',
            severity: 'LOW',
            message: 'Environment tag missing (Prod/Staging/Dev).',
            recommendation: 'Set environment to ensure proper control scoping.'
        });
    }

    return NextResponse.json({
        assetId: id,
        gaps,
        readinessScore: Math.max(0, 100 - (gaps.length * 15)),
        analysisTimestamp: new Date().toISOString()
    });
}
