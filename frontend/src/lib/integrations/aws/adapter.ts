import { IntegrationAdapter, AssetNormalization } from "../types";

export const AWSAdapter: IntegrationAdapter = {
    async testConnection(config: any) {
        // Simulate AWS STS GetCallerIdentity
        if (!config.accessKeyId || !config.secretAccessKey) {
            return { success: false, message: "Invalid AWS credentials." };
        }
        return { success: true };
    },

    async fetchAssets(config: any): Promise<AssetNormalization[]> {
        // Mocked AWS SDK response for EC2, RDS, S3
        const mockData = [
            {
                id: "i-0a1b2c3d4e5f6g7h8",
                name: "production-api-server",
                type: "EC2 Instance",
                tags: { Project: "Certixo", Env: "Prod", Owner: "CloudOps" },
                attributes: { encryption: true, volume_id: "vol-99" }
            },
            {
                id: "arn:aws:s3:::customer-pii-vault",
                name: "customer-pii-vault",
                type: "S3 Bucket",
                tags: { Compliance: "SOC2", DataClass: "Restricted" },
                attributes: { server_side_encryption: "AES256" }
            }
        ];

        return mockData.map(aws => ({
            externalId: aws.id,
            name: aws.name,
            type: aws.type,
            owner: aws.tags.Owner || "Unassigned",
            environment: aws.tags.Env || "Discovery",
            dataClassification: aws.tags.DataClass || "Internal",
            encryptionStatus: !!aws.attributes.encryption || !!aws.attributes.server_side_encryption,
            encryptionSignals: aws.attributes,
            tags: Object.entries(aws.tags).map(([k, v]) => `${k}:${v}`),
            rawPayload: aws
        }));
    }
};
