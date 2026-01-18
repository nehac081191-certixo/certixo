import prisma from "@/lib/db";
import { IntegrationRegistry } from "./registry";
import { AssetNormalization } from "./types";

export async function runSync(integrationId: string) {
    const integration = await prisma.integration.findUnique({
        where: { id: integrationId }
    });

    if (!integration) throw new Error("Integration not found");

    const run = await prisma.syncRun.create({
        data: {
            integrationId,
            status: "IN_PROGRESS"
        }
    });

    try {
        const adapter = IntegrationRegistry[integration.provider];
        const normalizedAssets = await adapter.fetchAssets(integration.config);

        let syncedCount = 0;

        for (const data of normalizedAssets) {
            // De-duplication using [integrationId, externalId] unique constraint
            const existing = await prisma.asset.findUnique({
                where: {
                    integrationId_externalId: {
                        integrationId,
                        externalId: data.externalId
                    }
                },
                include: { history: { take: 1, orderBy: { timestamp: 'desc' } } }
            });

            if (existing) {
                // Check for changes (Basic diff)
                const hasChanged = existing.name !== data.name ||
                    existing.owner !== data.owner ||
                    existing.encryptionStatus !== data.encryptionStatus;

                if (hasChanged) {
                    await prisma.$transaction([
                        prisma.asset.update({
                            where: { id: existing.id },
                            data: {
                                name: data.name,
                                type: data.type,
                                owner: data.owner,
                                environment: data.environment,
                                dataClassification: data.dataClassification,
                                encryptionStatus: data.encryptionStatus,
                                encryptionSignals: data.encryptionSignals,
                                tags: data.tags,
                                rawPayload: data.rawPayload
                            }
                        }),
                        prisma.assetChange.create({
                            data: {
                                assetId: existing.id,
                                changeType: "UPDATE",
                                diff: {
                                    prev: { name: existing.name, owner: existing.owner, enc: existing.encryptionStatus },
                                    next: { name: data.name, owner: data.owner, enc: data.encryptionStatus }
                                }
                            }
                        })
                    ]);
                }
            } else {
                // Create new
                const newAsset = await prisma.asset.create({
                    data: {
                        integrationId,
                        externalId: data.externalId,
                        name: data.name,
                        type: data.type,
                        provider: integration.provider,
                        owner: data.owner,
                        environment: data.environment,
                        dataClassification: data.dataClassification,
                        encryptionStatus: data.encryptionStatus,
                        encryptionSignals: data.encryptionSignals,
                        tags: data.tags,
                        rawPayload: data.rawPayload
                    }
                });

                await prisma.assetChange.create({
                    data: {
                        assetId: newAsset.id,
                        changeType: "CREATE",
                        diff: { full: data }
                    }
                });
            }
            syncedCount++;
        }

        await prisma.syncRun.update({
            where: { id: run.id },
            data: {
                status: "SUCCESS",
                endedAt: new Date(),
                assetsSynced: syncedCount
            }
        });

        await prisma.integration.update({
            where: { id: integrationId },
            data: { lastSyncAt: new Date(), status: "CONNECTED" }
        });

    } catch (error: any) {
        await prisma.syncRun.update({
            where: { id: run.id },
            data: {
                status: "FAILED",
                endedAt: new Date(),
                errorMessage: error.message
            }
        });

        await prisma.integration.update({
            where: { id: integrationId },
            data: { status: "ERROR" }
        });
    }
}
