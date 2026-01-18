
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AuditPlanScalarFieldEnum = {
  id: 'id',
  framework: 'framework',
  auditType: 'auditType',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  currentStep: 'currentStep',
  scope: 'scope',
  systems: 'systems',
  risks: 'risks',
  evidencePlan: 'evidencePlan',
  timeline: 'timeline',
  tasks: 'tasks',
  auditorPack: 'auditorPack',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastAiRefinementAt: 'lastAiRefinementAt'
};

exports.Prisma.IntegrationScalarFieldEnum = {
  id: 'id',
  provider: 'provider',
  displayName: 'displayName',
  config: 'config',
  status: 'status',
  healthStatus: 'healthStatus',
  lastSyncAt: 'lastSyncAt',
  errorLogs: 'errorLogs',
  syncSchedule: 'syncSchedule',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SyncRunScalarFieldEnum = {
  id: 'id',
  integrationId: 'integrationId',
  status: 'status',
  startedAt: 'startedAt',
  endedAt: 'endedAt',
  assetsSynced: 'assetsSynced',
  errorMessage: 'errorMessage',
  rawPayloadPath: 'rawPayloadPath'
};

exports.Prisma.AssetScalarFieldEnum = {
  id: 'id',
  integrationId: 'integrationId',
  externalId: 'externalId',
  name: 'name',
  type: 'type',
  provider: 'provider',
  owner: 'owner',
  environment: 'environment',
  dataClassification: 'dataClassification',
  encryptionStatus: 'encryptionStatus',
  encryptionSignals: 'encryptionSignals',
  status: 'status',
  tags: 'tags',
  rawPayload: 'rawPayload',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AssetChangeScalarFieldEnum = {
  id: 'id',
  assetId: 'assetId',
  changeType: 'changeType',
  diff: 'diff',
  timestamp: 'timestamp'
};

exports.Prisma.EvidenceTaskScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  status: 'status',
  assignee: 'assignee',
  department: 'department',
  framework: 'framework',
  dueDate: 'dueDate',
  auditPlanId: 'auditPlanId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PolicyScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  category: 'category',
  status: 'status',
  version: 'version',
  owner: 'owner',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EvidenceExportScalarFieldEnum = {
  id: 'id',
  name: 'name',
  framework: 'framework',
  periodStart: 'periodStart',
  periodEnd: 'periodEnd',
  fileUrl: 'fileUrl',
  summary: 'summary',
  artifactIndex: 'artifactIndex',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AuditFramework = exports.$Enums.AuditFramework = {
  SOC2: 'SOC2',
  ISO27001: 'ISO27001',
  HIPAA: 'HIPAA',
  PCI: 'PCI'
};

exports.AuditType = exports.$Enums.AuditType = {
  TypeI: 'TypeI',
  TypeII: 'TypeII',
  Surveillance: 'Surveillance',
  Internal: 'Internal'
};

exports.AuditStatus = exports.$Enums.AuditStatus = {
  draft: 'draft',
  in_progress: 'in_progress',
  ready: 'ready',
  exported: 'exported'
};

exports.WizardStep = exports.$Enums.WizardStep = {
  CONTEXT: 'CONTEXT',
  SCOPE: 'SCOPE',
  SYSTEMS: 'SYSTEMS',
  RISKS: 'RISKS',
  EVIDENCE_PLAN: 'EVIDENCE_PLAN',
  TIMELINE: 'TIMELINE',
  OWNERS_TASKS: 'OWNERS_TASKS',
  EXPORT: 'EXPORT'
};

exports.IntegrationProvider = exports.$Enums.IntegrationProvider = {
  AWS: 'AWS',
  SERVICENOW: 'SERVICENOW',
  SAP_ERP: 'SAP_ERP',
  CSV: 'CSV'
};

exports.IntegrationStatus = exports.$Enums.IntegrationStatus = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
  SYNCING: 'SYNCING'
};

exports.SyncStatus = exports.$Enums.SyncStatus = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  IN_PROGRESS: 'IN_PROGRESS'
};

exports.Prisma.ModelName = {
  AuditPlan: 'AuditPlan',
  Integration: 'Integration',
  SyncRun: 'SyncRun',
  Asset: 'Asset',
  AssetChange: 'AssetChange',
  EvidenceTask: 'EvidenceTask',
  Policy: 'Policy',
  EvidenceExport: 'EvidenceExport'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
