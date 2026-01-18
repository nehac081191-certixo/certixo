import { IntegrationAdapter, AssetNormalization } from "../types";

export const ServiceNowAdapter: IntegrationAdapter = {
    async testConnection(config: any) {
        if (!config.instanceUrl || !config.basicAuth) {
            return { success: false, message: "ServiceNow Instance URL and Auth required." };
        }
        return { success: true };
    },

    async fetchAssets(config: any): Promise<AssetNormalization[]> {
        // Mocked SNOW Table API cmdb_ci_server
        const mockData = [
            {
                sys_id: "sn-990011",
                display_name: "LDAP-CONTROLLER-01",
                category: "Server",
                assigned_to: "IT Infrastructure",
                install_status: "Installed",
                operational_status: "Operational",
                u_encryption_verified: "yes"
            }
        ];

        return mockData.map(sn => ({
            externalId: sn.sys_id,
            name: sn.display_name,
            type: `CMDB:${sn.category}`,
            owner: sn.assigned_to,
            environment: "Production", // Default if mapping missing
            dataClassification: "Restricted",
            encryptionStatus: sn.u_encryption_verified === "yes",
            tags: ["ServiceNow", `Status:${sn.operational_status}`],
            rawPayload: sn
        }));
    }
};
