import { AWSAdapter } from "./aws/adapter";
import { ServiceNowAdapter } from "./servicenow/adapter";
import { SAPAdapter } from "./sap/adapter";
import { CSVAdapter } from "./csv/adapter";
import { IntegrationAdapter } from "./types";

export const IntegrationRegistry: Record<string, IntegrationAdapter> = {
    AWS: AWSAdapter,
    SERVICENOW: ServiceNowAdapter,
    SAP_ERP: SAPAdapter,
    CSV: CSVAdapter
};
