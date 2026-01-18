import { IntegrationAdapter, AssetNormalization } from "../types";

export const CSVAdapter: IntegrationAdapter = {
    async testConnection() {
        return { success: true };
    },

    async fetchAssets(config: any): Promise<AssetNormalization[]> {
        const rawContent = config.csvData || "";
        // Simple line parser for mock
        const lines = rawContent.split("\n").filter((l: string) => l.trim());
        return lines.map((line: string, idx: number) => {
            const [id, name, type, owner] = line.split(",");
            return {
                externalId: id || `CSV-${idx}`,
                name: name || "Unknown Item",
                type: type || "General Asset",
                owner: owner || "Unassigned",
                environment: "Bulk Import",
                encryptionStatus: false,
                tags: ["CSV Import"],
                rawPayload: { originalLine: line }
            };
        });
    }
};
