export type AssetNormalization = {
    externalId: string;
    name: string;
    type: string;
    owner?: string;
    environment?: string;
    dataClassification?: string;
    encryptionStatus: boolean;
    encryptionSignals?: any;
    tags: string[];
    rawPayload: any;
};

export interface IntegrationAdapter {
    testConnection(config: any): Promise<{ success: boolean; message?: string }>;
    fetchAssets(config: any): Promise<AssetNormalization[]>;
}
