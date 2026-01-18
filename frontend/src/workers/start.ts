import { startWorker } from '../lib/integrations/queue';

console.log('🚀 Starting Institutional Sync Worker...');
const worker = startWorker();
console.log('✅ Worker Active. Listening for discovery jobs.');

process.on('SIGTERM', async () => {
    console.log('Shutting down worker...');
    await worker.close();
    process.exit(0);
});
