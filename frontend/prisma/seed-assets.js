const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding Asset Inventory...');

    // 1. Create Integrations
    const aws = await prisma.integration.create({
        data: {
            provider: 'AWS',
            displayName: 'AWS Global Production',
            config: { region: 'us-east-1', accountId: '123456789012' },
            status: 'CONNECTED',
            healthStatus: 'Healthy',
            syncSchedule: '0 * * * *'
        }
    });

    const snow = await prisma.integration.create({
        data: {
            provider: 'SERVICENOW',
            displayName: 'ITSM ServiceNow',
            config: { instanceUrl: 'https://dev123.service-now.com' },
            status: 'CONNECTED',
            healthStatus: 'Healthy'
        }
    });

    // 2. Create Sample Assets
    await prisma.asset.create({
        data: {
            integrationId: aws.id,
            externalId: 'i-0987654321fedcba0',
            name: 'core-database-primary',
            type: 'EC2 Instance',
            provider: 'AWS',
            owner: 'DBA Team',
            environment: 'Production',
            dataClassification: 'Restricted',
            encryptionStatus: true,
            tags: ['App:Marketplace', 'Compliance:PCI'],
            rawPayload: { instanceType: 'm5.xlarge', state: 'running' }
        }
    });

    await prisma.asset.create({
        data: {
            integrationId: aws.id,
            externalId: 'arn:aws:s3:::evidence-storage-prod',
            name: 'evidence-storage-prod',
            type: 'S3 Bucket',
            provider: 'AWS',
            owner: 'SecOps',
            environment: 'Production',
            dataClassification: 'Restricted',
            encryptionStatus: true,
            tags: ['Compliance:SOC2'],
            rawPayload: { bucketName: 'evidence-storage-prod', logging: 'enabled' }
        }
    });

    await prisma.asset.create({
        data: {
            integrationId: snow.id,
            externalId: 'SN-CI-10029',
            name: 'HR-PORTAL-WEB-02',
            type: 'CMDB:Server',
            provider: 'SERVICENOW',
            owner: 'HR IT',
            environment: 'Production',
            dataClassification: 'Restricted',
            encryptionStatus: false,
            tags: ['Source:ServiceNow'],
            rawPayload: { serial: 'XYZ-99', rack: 'B-12' }
        }
    });

    console.log('✅ Seed complete.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
