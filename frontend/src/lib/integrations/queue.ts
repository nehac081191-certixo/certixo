import { Queue, Worker, Job } from 'bullmq';
import IORedis from 'ioredis';
import { runSync } from './sync-service';

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: null,
}) as any;

export const syncQueue = new Queue('asset-sync', { connection });

// This would typically run in a separate process
export const startWorker = () => {
    const worker = new Worker(
        'asset-sync',
        async (job: Job) => {
            console.log(`[Worker] Starting sync for integration: ${job.data.integrationId}`);
            await runSync(job.data.integrationId);
            console.log(`[Worker] Finished sync for integration: ${job.data.integrationId}`);
        },
        { connection }
    );

    worker.on('completed', (job) => {
        console.log(`[Worker] Job ${job.id} completed`);
    });

    worker.on('failed', (job, err) => {
        console.error(`[Worker] Job ${job?.id} failed: ${err.message}`);
    });

    return worker;
};
