import { NextRequest, NextResponse } from "next/server";
import { syncQueue } from "@/lib/integrations/queue";

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        // Push the sync job to the BullMQ queue
        await syncQueue.add('sync-integration', { integrationId: id }, {
            removeOnComplete: true,
            attempts: 3,
            backoff: { type: 'exponential', delay: 1000 }
        });

        return NextResponse.json({ message: "Sync job queued for background execution" }, { status: 202 });
    } catch (error: any) {
        console.error("Queue submission error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
