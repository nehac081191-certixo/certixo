import { IntegrationAdapter, AssetNormalization } from "../types";

export const SAPAdapter: IntegrationAdapter = {
    async testConnection(config: any) {
        if (!config.endpoint) return { success: false, message: "SAP OData endpoint missing." };
        return { success: true };
    },

    async fetchAssets(config: any): Promise<AssetNormalization[]> {
        // Mocked SAP ERP Asset Registry (e.g. S/4HANA OData)
        const mockData = [
            {
                AssetID: "ERP-2026-X1",
                Description: "Global HQ Network Router",
                AssetClass: "Hardware",
                CostCenter: "CC-900-HQ",
                InServiceDate: "2024-01-01",
                SafetyCritical: true
            }
        ];

        return mockData.map(asset => ({
            externalId: asset.AssetID,
            name: asset.Description,
            type: `ERP:${asset.AssetClass}`,
            owner: asset.CostCenter,
            environment: "Corporate",
            dataClassification: asset.SafetyCritical ? "Restricted" : "Internal",
            encryptionStatus: false, // Physical asset usually
            tags: ["SAP", "ERP", "Capitalized"],
            rawPayload: asset
        }));
    }
};
