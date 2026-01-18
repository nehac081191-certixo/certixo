
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuditPlan
 * 
 */
export type AuditPlan = $Result.DefaultSelection<Prisma.$AuditPlanPayload>
/**
 * Model Integration
 * 
 */
export type Integration = $Result.DefaultSelection<Prisma.$IntegrationPayload>
/**
 * Model SyncRun
 * 
 */
export type SyncRun = $Result.DefaultSelection<Prisma.$SyncRunPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model AssetChange
 * 
 */
export type AssetChange = $Result.DefaultSelection<Prisma.$AssetChangePayload>
/**
 * Model EvidenceTask
 * 
 */
export type EvidenceTask = $Result.DefaultSelection<Prisma.$EvidenceTaskPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model EvidenceExport
 * 
 */
export type EvidenceExport = $Result.DefaultSelection<Prisma.$EvidenceExportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuditFramework: {
  SOC2: 'SOC2',
  ISO27001: 'ISO27001',
  HIPAA: 'HIPAA',
  PCI: 'PCI'
};

export type AuditFramework = (typeof AuditFramework)[keyof typeof AuditFramework]


export const AuditType: {
  TypeI: 'TypeI',
  TypeII: 'TypeII',
  Surveillance: 'Surveillance',
  Internal: 'Internal'
};

export type AuditType = (typeof AuditType)[keyof typeof AuditType]


export const AuditStatus: {
  draft: 'draft',
  in_progress: 'in_progress',
  ready: 'ready',
  exported: 'exported'
};

export type AuditStatus = (typeof AuditStatus)[keyof typeof AuditStatus]


export const WizardStep: {
  CONTEXT: 'CONTEXT',
  SCOPE: 'SCOPE',
  SYSTEMS: 'SYSTEMS',
  RISKS: 'RISKS',
  EVIDENCE_PLAN: 'EVIDENCE_PLAN',
  TIMELINE: 'TIMELINE',
  OWNERS_TASKS: 'OWNERS_TASKS',
  EXPORT: 'EXPORT'
};

export type WizardStep = (typeof WizardStep)[keyof typeof WizardStep]


export const IntegrationProvider: {
  AWS: 'AWS',
  SERVICENOW: 'SERVICENOW',
  SAP_ERP: 'SAP_ERP',
  CSV: 'CSV'
};

export type IntegrationProvider = (typeof IntegrationProvider)[keyof typeof IntegrationProvider]


export const IntegrationStatus: {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
  SYNCING: 'SYNCING'
};

export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus]


export const SyncStatus: {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus]

}

export type AuditFramework = $Enums.AuditFramework

export const AuditFramework: typeof $Enums.AuditFramework

export type AuditType = $Enums.AuditType

export const AuditType: typeof $Enums.AuditType

export type AuditStatus = $Enums.AuditStatus

export const AuditStatus: typeof $Enums.AuditStatus

export type WizardStep = $Enums.WizardStep

export const WizardStep: typeof $Enums.WizardStep

export type IntegrationProvider = $Enums.IntegrationProvider

export const IntegrationProvider: typeof $Enums.IntegrationProvider

export type IntegrationStatus = $Enums.IntegrationStatus

export const IntegrationStatus: typeof $Enums.IntegrationStatus

export type SyncStatus = $Enums.SyncStatus

export const SyncStatus: typeof $Enums.SyncStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuditPlans
 * const auditPlans = await prisma.auditPlan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AuditPlans
   * const auditPlans = await prisma.auditPlan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.auditPlan`: Exposes CRUD operations for the **AuditPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditPlans
    * const auditPlans = await prisma.auditPlan.findMany()
    * ```
    */
  get auditPlan(): Prisma.AuditPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integration`: Exposes CRUD operations for the **Integration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integration.findMany()
    * ```
    */
  get integration(): Prisma.IntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncRun`: Exposes CRUD operations for the **SyncRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncRuns
    * const syncRuns = await prisma.syncRun.findMany()
    * ```
    */
  get syncRun(): Prisma.SyncRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetChange`: Exposes CRUD operations for the **AssetChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetChanges
    * const assetChanges = await prisma.assetChange.findMany()
    * ```
    */
  get assetChange(): Prisma.AssetChangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evidenceTask`: Exposes CRUD operations for the **EvidenceTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvidenceTasks
    * const evidenceTasks = await prisma.evidenceTask.findMany()
    * ```
    */
  get evidenceTask(): Prisma.EvidenceTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evidenceExport`: Exposes CRUD operations for the **EvidenceExport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvidenceExports
    * const evidenceExports = await prisma.evidenceExport.findMany()
    * ```
    */
  get evidenceExport(): Prisma.EvidenceExportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AuditPlan: 'AuditPlan',
    Integration: 'Integration',
    SyncRun: 'SyncRun',
    Asset: 'Asset',
    AssetChange: 'AssetChange',
    EvidenceTask: 'EvidenceTask',
    Policy: 'Policy',
    EvidenceExport: 'EvidenceExport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "auditPlan" | "integration" | "syncRun" | "asset" | "assetChange" | "evidenceTask" | "policy" | "evidenceExport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuditPlan: {
        payload: Prisma.$AuditPlanPayload<ExtArgs>
        fields: Prisma.AuditPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>
          }
          findFirst: {
            args: Prisma.AuditPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>
          }
          findMany: {
            args: Prisma.AuditPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>[]
          }
          create: {
            args: Prisma.AuditPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>
          }
          createMany: {
            args: Prisma.AuditPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>[]
          }
          delete: {
            args: Prisma.AuditPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>
          }
          update: {
            args: Prisma.AuditPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>
          }
          deleteMany: {
            args: Prisma.AuditPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>[]
          }
          upsert: {
            args: Prisma.AuditPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPlanPayload>
          }
          aggregate: {
            args: Prisma.AuditPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditPlan>
          }
          groupBy: {
            args: Prisma.AuditPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditPlanCountArgs<ExtArgs>
            result: $Utils.Optional<AuditPlanCountAggregateOutputType> | number
          }
        }
      }
      Integration: {
        payload: Prisma.$IntegrationPayload<ExtArgs>
        fields: Prisma.IntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findFirst: {
            args: Prisma.IntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findMany: {
            args: Prisma.IntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          create: {
            args: Prisma.IntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          createMany: {
            args: Prisma.IntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          delete: {
            args: Prisma.IntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          update: {
            args: Prisma.IntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          aggregate: {
            args: Prisma.IntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegration>
          }
          groupBy: {
            args: Prisma.IntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationCountAggregateOutputType> | number
          }
        }
      }
      SyncRun: {
        payload: Prisma.$SyncRunPayload<ExtArgs>
        fields: Prisma.SyncRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          findFirst: {
            args: Prisma.SyncRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          findMany: {
            args: Prisma.SyncRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          create: {
            args: Prisma.SyncRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          createMany: {
            args: Prisma.SyncRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          delete: {
            args: Prisma.SyncRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          update: {
            args: Prisma.SyncRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          deleteMany: {
            args: Prisma.SyncRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>[]
          }
          upsert: {
            args: Prisma.SyncRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncRunPayload>
          }
          aggregate: {
            args: Prisma.SyncRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncRun>
          }
          groupBy: {
            args: Prisma.SyncRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncRunCountArgs<ExtArgs>
            result: $Utils.Optional<SyncRunCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      AssetChange: {
        payload: Prisma.$AssetChangePayload<ExtArgs>
        fields: Prisma.AssetChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>
          }
          findFirst: {
            args: Prisma.AssetChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>
          }
          findMany: {
            args: Prisma.AssetChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>[]
          }
          create: {
            args: Prisma.AssetChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>
          }
          createMany: {
            args: Prisma.AssetChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>[]
          }
          delete: {
            args: Prisma.AssetChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>
          }
          update: {
            args: Prisma.AssetChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>
          }
          deleteMany: {
            args: Prisma.AssetChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetChangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>[]
          }
          upsert: {
            args: Prisma.AssetChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetChangePayload>
          }
          aggregate: {
            args: Prisma.AssetChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetChange>
          }
          groupBy: {
            args: Prisma.AssetChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetChangeCountArgs<ExtArgs>
            result: $Utils.Optional<AssetChangeCountAggregateOutputType> | number
          }
        }
      }
      EvidenceTask: {
        payload: Prisma.$EvidenceTaskPayload<ExtArgs>
        fields: Prisma.EvidenceTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>
          }
          findFirst: {
            args: Prisma.EvidenceTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>
          }
          findMany: {
            args: Prisma.EvidenceTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>[]
          }
          create: {
            args: Prisma.EvidenceTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>
          }
          createMany: {
            args: Prisma.EvidenceTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvidenceTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>[]
          }
          delete: {
            args: Prisma.EvidenceTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>
          }
          update: {
            args: Prisma.EvidenceTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>
          }
          deleteMany: {
            args: Prisma.EvidenceTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvidenceTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>[]
          }
          upsert: {
            args: Prisma.EvidenceTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceTaskPayload>
          }
          aggregate: {
            args: Prisma.EvidenceTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvidenceTask>
          }
          groupBy: {
            args: Prisma.EvidenceTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvidenceTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvidenceTaskCountArgs<ExtArgs>
            result: $Utils.Optional<EvidenceTaskCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      EvidenceExport: {
        payload: Prisma.$EvidenceExportPayload<ExtArgs>
        fields: Prisma.EvidenceExportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceExportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceExportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>
          }
          findFirst: {
            args: Prisma.EvidenceExportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceExportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>
          }
          findMany: {
            args: Prisma.EvidenceExportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>[]
          }
          create: {
            args: Prisma.EvidenceExportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>
          }
          createMany: {
            args: Prisma.EvidenceExportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvidenceExportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>[]
          }
          delete: {
            args: Prisma.EvidenceExportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>
          }
          update: {
            args: Prisma.EvidenceExportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>
          }
          deleteMany: {
            args: Prisma.EvidenceExportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceExportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvidenceExportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>[]
          }
          upsert: {
            args: Prisma.EvidenceExportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidenceExportPayload>
          }
          aggregate: {
            args: Prisma.EvidenceExportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvidenceExport>
          }
          groupBy: {
            args: Prisma.EvidenceExportGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvidenceExportGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvidenceExportCountArgs<ExtArgs>
            result: $Utils.Optional<EvidenceExportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auditPlan?: AuditPlanOmit
    integration?: IntegrationOmit
    syncRun?: SyncRunOmit
    asset?: AssetOmit
    assetChange?: AssetChangeOmit
    evidenceTask?: EvidenceTaskOmit
    policy?: PolicyOmit
    evidenceExport?: EvidenceExportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuditPlanCountOutputType
   */

  export type AuditPlanCountOutputType = {
    evidenceTasks: number
  }

  export type AuditPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidenceTasks?: boolean | AuditPlanCountOutputTypeCountEvidenceTasksArgs
  }

  // Custom InputTypes
  /**
   * AuditPlanCountOutputType without action
   */
  export type AuditPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlanCountOutputType
     */
    select?: AuditPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditPlanCountOutputType without action
   */
  export type AuditPlanCountOutputTypeCountEvidenceTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceTaskWhereInput
  }


  /**
   * Count Type IntegrationCountOutputType
   */

  export type IntegrationCountOutputType = {
    syncRuns: number
    assets: number
  }

  export type IntegrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syncRuns?: boolean | IntegrationCountOutputTypeCountSyncRunsArgs
    assets?: boolean | IntegrationCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * IntegrationCountOutputType without action
   */
  export type IntegrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationCountOutputType
     */
    select?: IntegrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntegrationCountOutputType without action
   */
  export type IntegrationCountOutputTypeCountSyncRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncRunWhereInput
  }

  /**
   * IntegrationCountOutputType without action
   */
  export type IntegrationCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    history: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | AssetCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetChangeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuditPlan
   */

  export type AggregateAuditPlan = {
    _count: AuditPlanCountAggregateOutputType | null
    _min: AuditPlanMinAggregateOutputType | null
    _max: AuditPlanMaxAggregateOutputType | null
  }

  export type AuditPlanMinAggregateOutputType = {
    id: string | null
    framework: $Enums.AuditFramework | null
    auditType: $Enums.AuditType | null
    startDate: string | null
    endDate: string | null
    status: $Enums.AuditStatus | null
    currentStep: $Enums.WizardStep | null
    createdAt: Date | null
    updatedAt: Date | null
    lastAiRefinementAt: Date | null
  }

  export type AuditPlanMaxAggregateOutputType = {
    id: string | null
    framework: $Enums.AuditFramework | null
    auditType: $Enums.AuditType | null
    startDate: string | null
    endDate: string | null
    status: $Enums.AuditStatus | null
    currentStep: $Enums.WizardStep | null
    createdAt: Date | null
    updatedAt: Date | null
    lastAiRefinementAt: Date | null
  }

  export type AuditPlanCountAggregateOutputType = {
    id: number
    framework: number
    auditType: number
    startDate: number
    endDate: number
    status: number
    currentStep: number
    scope: number
    systems: number
    risks: number
    evidencePlan: number
    timeline: number
    tasks: number
    auditorPack: number
    createdAt: number
    updatedAt: number
    lastAiRefinementAt: number
    _all: number
  }


  export type AuditPlanMinAggregateInputType = {
    id?: true
    framework?: true
    auditType?: true
    startDate?: true
    endDate?: true
    status?: true
    currentStep?: true
    createdAt?: true
    updatedAt?: true
    lastAiRefinementAt?: true
  }

  export type AuditPlanMaxAggregateInputType = {
    id?: true
    framework?: true
    auditType?: true
    startDate?: true
    endDate?: true
    status?: true
    currentStep?: true
    createdAt?: true
    updatedAt?: true
    lastAiRefinementAt?: true
  }

  export type AuditPlanCountAggregateInputType = {
    id?: true
    framework?: true
    auditType?: true
    startDate?: true
    endDate?: true
    status?: true
    currentStep?: true
    scope?: true
    systems?: true
    risks?: true
    evidencePlan?: true
    timeline?: true
    tasks?: true
    auditorPack?: true
    createdAt?: true
    updatedAt?: true
    lastAiRefinementAt?: true
    _all?: true
  }

  export type AuditPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditPlan to aggregate.
     */
    where?: AuditPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditPlans to fetch.
     */
    orderBy?: AuditPlanOrderByWithRelationInput | AuditPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditPlans
    **/
    _count?: true | AuditPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditPlanMaxAggregateInputType
  }

  export type GetAuditPlanAggregateType<T extends AuditPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditPlan[P]>
      : GetScalarType<T[P], AggregateAuditPlan[P]>
  }




  export type AuditPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditPlanWhereInput
    orderBy?: AuditPlanOrderByWithAggregationInput | AuditPlanOrderByWithAggregationInput[]
    by: AuditPlanScalarFieldEnum[] | AuditPlanScalarFieldEnum
    having?: AuditPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditPlanCountAggregateInputType | true
    _min?: AuditPlanMinAggregateInputType
    _max?: AuditPlanMaxAggregateInputType
  }

  export type AuditPlanGroupByOutputType = {
    id: string
    framework: $Enums.AuditFramework
    auditType: $Enums.AuditType
    startDate: string
    endDate: string
    status: $Enums.AuditStatus
    currentStep: $Enums.WizardStep
    scope: JsonValue | null
    systems: JsonValue | null
    risks: JsonValue | null
    evidencePlan: JsonValue | null
    timeline: JsonValue | null
    tasks: JsonValue | null
    auditorPack: JsonValue | null
    createdAt: Date
    updatedAt: Date
    lastAiRefinementAt: Date | null
    _count: AuditPlanCountAggregateOutputType | null
    _min: AuditPlanMinAggregateOutputType | null
    _max: AuditPlanMaxAggregateOutputType | null
  }

  type GetAuditPlanGroupByPayload<T extends AuditPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditPlanGroupByOutputType[P]>
            : GetScalarType<T[P], AuditPlanGroupByOutputType[P]>
        }
      >
    >


  export type AuditPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    framework?: boolean
    auditType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    currentStep?: boolean
    scope?: boolean
    systems?: boolean
    risks?: boolean
    evidencePlan?: boolean
    timeline?: boolean
    tasks?: boolean
    auditorPack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastAiRefinementAt?: boolean
    evidenceTasks?: boolean | AuditPlan$evidenceTasksArgs<ExtArgs>
    _count?: boolean | AuditPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditPlan"]>

  export type AuditPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    framework?: boolean
    auditType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    currentStep?: boolean
    scope?: boolean
    systems?: boolean
    risks?: boolean
    evidencePlan?: boolean
    timeline?: boolean
    tasks?: boolean
    auditorPack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastAiRefinementAt?: boolean
  }, ExtArgs["result"]["auditPlan"]>

  export type AuditPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    framework?: boolean
    auditType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    currentStep?: boolean
    scope?: boolean
    systems?: boolean
    risks?: boolean
    evidencePlan?: boolean
    timeline?: boolean
    tasks?: boolean
    auditorPack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastAiRefinementAt?: boolean
  }, ExtArgs["result"]["auditPlan"]>

  export type AuditPlanSelectScalar = {
    id?: boolean
    framework?: boolean
    auditType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    currentStep?: boolean
    scope?: boolean
    systems?: boolean
    risks?: boolean
    evidencePlan?: boolean
    timeline?: boolean
    tasks?: boolean
    auditorPack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastAiRefinementAt?: boolean
  }

  export type AuditPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "framework" | "auditType" | "startDate" | "endDate" | "status" | "currentStep" | "scope" | "systems" | "risks" | "evidencePlan" | "timeline" | "tasks" | "auditorPack" | "createdAt" | "updatedAt" | "lastAiRefinementAt", ExtArgs["result"]["auditPlan"]>
  export type AuditPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidenceTasks?: boolean | AuditPlan$evidenceTasksArgs<ExtArgs>
    _count?: boolean | AuditPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuditPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuditPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditPlan"
    objects: {
      evidenceTasks: Prisma.$EvidenceTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      framework: $Enums.AuditFramework
      auditType: $Enums.AuditType
      startDate: string
      endDate: string
      status: $Enums.AuditStatus
      currentStep: $Enums.WizardStep
      scope: Prisma.JsonValue | null
      systems: Prisma.JsonValue | null
      risks: Prisma.JsonValue | null
      evidencePlan: Prisma.JsonValue | null
      timeline: Prisma.JsonValue | null
      tasks: Prisma.JsonValue | null
      auditorPack: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      lastAiRefinementAt: Date | null
    }, ExtArgs["result"]["auditPlan"]>
    composites: {}
  }

  type AuditPlanGetPayload<S extends boolean | null | undefined | AuditPlanDefaultArgs> = $Result.GetResult<Prisma.$AuditPlanPayload, S>

  type AuditPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditPlanCountAggregateInputType | true
    }

  export interface AuditPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditPlan'], meta: { name: 'AuditPlan' } }
    /**
     * Find zero or one AuditPlan that matches the filter.
     * @param {AuditPlanFindUniqueArgs} args - Arguments to find a AuditPlan
     * @example
     * // Get one AuditPlan
     * const auditPlan = await prisma.auditPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditPlanFindUniqueArgs>(args: SelectSubset<T, AuditPlanFindUniqueArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AuditPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditPlanFindUniqueOrThrowArgs} args - Arguments to find a AuditPlan
     * @example
     * // Get one AuditPlan
     * const auditPlan = await prisma.auditPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AuditPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanFindFirstArgs} args - Arguments to find a AuditPlan
     * @example
     * // Get one AuditPlan
     * const auditPlan = await prisma.auditPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditPlanFindFirstArgs>(args?: SelectSubset<T, AuditPlanFindFirstArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AuditPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanFindFirstOrThrowArgs} args - Arguments to find a AuditPlan
     * @example
     * // Get one AuditPlan
     * const auditPlan = await prisma.auditPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AuditPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditPlans
     * const auditPlans = await prisma.auditPlan.findMany()
     * 
     * // Get first 10 AuditPlans
     * const auditPlans = await prisma.auditPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditPlanWithIdOnly = await prisma.auditPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditPlanFindManyArgs>(args?: SelectSubset<T, AuditPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AuditPlan.
     * @param {AuditPlanCreateArgs} args - Arguments to create a AuditPlan.
     * @example
     * // Create one AuditPlan
     * const AuditPlan = await prisma.auditPlan.create({
     *   data: {
     *     // ... data to create a AuditPlan
     *   }
     * })
     * 
     */
    create<T extends AuditPlanCreateArgs>(args: SelectSubset<T, AuditPlanCreateArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AuditPlans.
     * @param {AuditPlanCreateManyArgs} args - Arguments to create many AuditPlans.
     * @example
     * // Create many AuditPlans
     * const auditPlan = await prisma.auditPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditPlanCreateManyArgs>(args?: SelectSubset<T, AuditPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditPlans and returns the data saved in the database.
     * @param {AuditPlanCreateManyAndReturnArgs} args - Arguments to create many AuditPlans.
     * @example
     * // Create many AuditPlans
     * const auditPlan = await prisma.auditPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditPlans and only return the `id`
     * const auditPlanWithIdOnly = await prisma.auditPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AuditPlan.
     * @param {AuditPlanDeleteArgs} args - Arguments to delete one AuditPlan.
     * @example
     * // Delete one AuditPlan
     * const AuditPlan = await prisma.auditPlan.delete({
     *   where: {
     *     // ... filter to delete one AuditPlan
     *   }
     * })
     * 
     */
    delete<T extends AuditPlanDeleteArgs>(args: SelectSubset<T, AuditPlanDeleteArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AuditPlan.
     * @param {AuditPlanUpdateArgs} args - Arguments to update one AuditPlan.
     * @example
     * // Update one AuditPlan
     * const auditPlan = await prisma.auditPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditPlanUpdateArgs>(args: SelectSubset<T, AuditPlanUpdateArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AuditPlans.
     * @param {AuditPlanDeleteManyArgs} args - Arguments to filter AuditPlans to delete.
     * @example
     * // Delete a few AuditPlans
     * const { count } = await prisma.auditPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditPlanDeleteManyArgs>(args?: SelectSubset<T, AuditPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditPlans
     * const auditPlan = await prisma.auditPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditPlanUpdateManyArgs>(args: SelectSubset<T, AuditPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditPlans and returns the data updated in the database.
     * @param {AuditPlanUpdateManyAndReturnArgs} args - Arguments to update many AuditPlans.
     * @example
     * // Update many AuditPlans
     * const auditPlan = await prisma.auditPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditPlans and only return the `id`
     * const auditPlanWithIdOnly = await prisma.auditPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AuditPlan.
     * @param {AuditPlanUpsertArgs} args - Arguments to update or create a AuditPlan.
     * @example
     * // Update or create a AuditPlan
     * const auditPlan = await prisma.auditPlan.upsert({
     *   create: {
     *     // ... data to create a AuditPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditPlan we want to update
     *   }
     * })
     */
    upsert<T extends AuditPlanUpsertArgs>(args: SelectSubset<T, AuditPlanUpsertArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AuditPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanCountArgs} args - Arguments to filter AuditPlans to count.
     * @example
     * // Count the number of AuditPlans
     * const count = await prisma.auditPlan.count({
     *   where: {
     *     // ... the filter for the AuditPlans we want to count
     *   }
     * })
    **/
    count<T extends AuditPlanCountArgs>(
      args?: Subset<T, AuditPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditPlanAggregateArgs>(args: Subset<T, AuditPlanAggregateArgs>): Prisma.PrismaPromise<GetAuditPlanAggregateType<T>>

    /**
     * Group by AuditPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditPlanGroupByArgs['orderBy'] }
        : { orderBy?: AuditPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditPlan model
   */
  readonly fields: AuditPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evidenceTasks<T extends AuditPlan$evidenceTasksArgs<ExtArgs> = {}>(args?: Subset<T, AuditPlan$evidenceTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditPlan model
   */ 
  interface AuditPlanFieldRefs {
    readonly id: FieldRef<"AuditPlan", 'String'>
    readonly framework: FieldRef<"AuditPlan", 'AuditFramework'>
    readonly auditType: FieldRef<"AuditPlan", 'AuditType'>
    readonly startDate: FieldRef<"AuditPlan", 'String'>
    readonly endDate: FieldRef<"AuditPlan", 'String'>
    readonly status: FieldRef<"AuditPlan", 'AuditStatus'>
    readonly currentStep: FieldRef<"AuditPlan", 'WizardStep'>
    readonly scope: FieldRef<"AuditPlan", 'Json'>
    readonly systems: FieldRef<"AuditPlan", 'Json'>
    readonly risks: FieldRef<"AuditPlan", 'Json'>
    readonly evidencePlan: FieldRef<"AuditPlan", 'Json'>
    readonly timeline: FieldRef<"AuditPlan", 'Json'>
    readonly tasks: FieldRef<"AuditPlan", 'Json'>
    readonly auditorPack: FieldRef<"AuditPlan", 'Json'>
    readonly createdAt: FieldRef<"AuditPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"AuditPlan", 'DateTime'>
    readonly lastAiRefinementAt: FieldRef<"AuditPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditPlan findUnique
   */
  export type AuditPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * Filter, which AuditPlan to fetch.
     */
    where: AuditPlanWhereUniqueInput
  }

  /**
   * AuditPlan findUniqueOrThrow
   */
  export type AuditPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * Filter, which AuditPlan to fetch.
     */
    where: AuditPlanWhereUniqueInput
  }

  /**
   * AuditPlan findFirst
   */
  export type AuditPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * Filter, which AuditPlan to fetch.
     */
    where?: AuditPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditPlans to fetch.
     */
    orderBy?: AuditPlanOrderByWithRelationInput | AuditPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditPlans.
     */
    cursor?: AuditPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditPlans.
     */
    distinct?: AuditPlanScalarFieldEnum | AuditPlanScalarFieldEnum[]
  }

  /**
   * AuditPlan findFirstOrThrow
   */
  export type AuditPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * Filter, which AuditPlan to fetch.
     */
    where?: AuditPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditPlans to fetch.
     */
    orderBy?: AuditPlanOrderByWithRelationInput | AuditPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditPlans.
     */
    cursor?: AuditPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditPlans.
     */
    distinct?: AuditPlanScalarFieldEnum | AuditPlanScalarFieldEnum[]
  }

  /**
   * AuditPlan findMany
   */
  export type AuditPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * Filter, which AuditPlans to fetch.
     */
    where?: AuditPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditPlans to fetch.
     */
    orderBy?: AuditPlanOrderByWithRelationInput | AuditPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditPlans.
     */
    cursor?: AuditPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditPlans.
     */
    skip?: number
    distinct?: AuditPlanScalarFieldEnum | AuditPlanScalarFieldEnum[]
  }

  /**
   * AuditPlan create
   */
  export type AuditPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditPlan.
     */
    data: XOR<AuditPlanCreateInput, AuditPlanUncheckedCreateInput>
  }

  /**
   * AuditPlan createMany
   */
  export type AuditPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditPlans.
     */
    data: AuditPlanCreateManyInput | AuditPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditPlan createManyAndReturn
   */
  export type AuditPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * The data used to create many AuditPlans.
     */
    data: AuditPlanCreateManyInput | AuditPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditPlan update
   */
  export type AuditPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditPlan.
     */
    data: XOR<AuditPlanUpdateInput, AuditPlanUncheckedUpdateInput>
    /**
     * Choose, which AuditPlan to update.
     */
    where: AuditPlanWhereUniqueInput
  }

  /**
   * AuditPlan updateMany
   */
  export type AuditPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditPlans.
     */
    data: XOR<AuditPlanUpdateManyMutationInput, AuditPlanUncheckedUpdateManyInput>
    /**
     * Filter which AuditPlans to update
     */
    where?: AuditPlanWhereInput
  }

  /**
   * AuditPlan updateManyAndReturn
   */
  export type AuditPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * The data used to update AuditPlans.
     */
    data: XOR<AuditPlanUpdateManyMutationInput, AuditPlanUncheckedUpdateManyInput>
    /**
     * Filter which AuditPlans to update
     */
    where?: AuditPlanWhereInput
  }

  /**
   * AuditPlan upsert
   */
  export type AuditPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditPlan to update in case it exists.
     */
    where: AuditPlanWhereUniqueInput
    /**
     * In case the AuditPlan found by the `where` argument doesn't exist, create a new AuditPlan with this data.
     */
    create: XOR<AuditPlanCreateInput, AuditPlanUncheckedCreateInput>
    /**
     * In case the AuditPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditPlanUpdateInput, AuditPlanUncheckedUpdateInput>
  }

  /**
   * AuditPlan delete
   */
  export type AuditPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    /**
     * Filter which AuditPlan to delete.
     */
    where: AuditPlanWhereUniqueInput
  }

  /**
   * AuditPlan deleteMany
   */
  export type AuditPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditPlans to delete
     */
    where?: AuditPlanWhereInput
  }

  /**
   * AuditPlan.evidenceTasks
   */
  export type AuditPlan$evidenceTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    where?: EvidenceTaskWhereInput
    orderBy?: EvidenceTaskOrderByWithRelationInput | EvidenceTaskOrderByWithRelationInput[]
    cursor?: EvidenceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceTaskScalarFieldEnum | EvidenceTaskScalarFieldEnum[]
  }

  /**
   * AuditPlan without action
   */
  export type AuditPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
  }


  /**
   * Model Integration
   */

  export type AggregateIntegration = {
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  export type IntegrationMinAggregateOutputType = {
    id: string | null
    provider: $Enums.IntegrationProvider | null
    displayName: string | null
    status: $Enums.IntegrationStatus | null
    healthStatus: string | null
    lastSyncAt: Date | null
    errorLogs: string | null
    syncSchedule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.IntegrationProvider | null
    displayName: string | null
    status: $Enums.IntegrationStatus | null
    healthStatus: string | null
    lastSyncAt: Date | null
    errorLogs: string | null
    syncSchedule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationCountAggregateOutputType = {
    id: number
    provider: number
    displayName: number
    config: number
    status: number
    healthStatus: number
    lastSyncAt: number
    errorLogs: number
    syncSchedule: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationMinAggregateInputType = {
    id?: true
    provider?: true
    displayName?: true
    status?: true
    healthStatus?: true
    lastSyncAt?: true
    errorLogs?: true
    syncSchedule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationMaxAggregateInputType = {
    id?: true
    provider?: true
    displayName?: true
    status?: true
    healthStatus?: true
    lastSyncAt?: true
    errorLogs?: true
    syncSchedule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationCountAggregateInputType = {
    id?: true
    provider?: true
    displayName?: true
    config?: true
    status?: true
    healthStatus?: true
    lastSyncAt?: true
    errorLogs?: true
    syncSchedule?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integration to aggregate.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationMaxAggregateInputType
  }

  export type GetIntegrationAggregateType<T extends IntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegration[P]>
      : GetScalarType<T[P], AggregateIntegration[P]>
  }




  export type IntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithAggregationInput | IntegrationOrderByWithAggregationInput[]
    by: IntegrationScalarFieldEnum[] | IntegrationScalarFieldEnum
    having?: IntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationCountAggregateInputType | true
    _min?: IntegrationMinAggregateInputType
    _max?: IntegrationMaxAggregateInputType
  }

  export type IntegrationGroupByOutputType = {
    id: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonValue
    status: $Enums.IntegrationStatus
    healthStatus: string
    lastSyncAt: Date | null
    errorLogs: string | null
    syncSchedule: string
    createdAt: Date
    updatedAt: Date
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    displayName?: boolean
    config?: boolean
    status?: boolean
    healthStatus?: boolean
    lastSyncAt?: boolean
    errorLogs?: boolean
    syncSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncRuns?: boolean | Integration$syncRunsArgs<ExtArgs>
    assets?: boolean | Integration$assetsArgs<ExtArgs>
    _count?: boolean | IntegrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    displayName?: boolean
    config?: boolean
    status?: boolean
    healthStatus?: boolean
    lastSyncAt?: boolean
    errorLogs?: boolean
    syncSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    displayName?: boolean
    config?: boolean
    status?: boolean
    healthStatus?: boolean
    lastSyncAt?: boolean
    errorLogs?: boolean
    syncSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectScalar = {
    id?: boolean
    provider?: boolean
    displayName?: boolean
    config?: boolean
    status?: boolean
    healthStatus?: boolean
    lastSyncAt?: boolean
    errorLogs?: boolean
    syncSchedule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "displayName" | "config" | "status" | "healthStatus" | "lastSyncAt" | "errorLogs" | "syncSchedule" | "createdAt" | "updatedAt", ExtArgs["result"]["integration"]>
  export type IntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syncRuns?: boolean | Integration$syncRunsArgs<ExtArgs>
    assets?: boolean | Integration$assetsArgs<ExtArgs>
    _count?: boolean | IntegrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IntegrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IntegrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integration"
    objects: {
      syncRuns: Prisma.$SyncRunPayload<ExtArgs>[]
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.IntegrationProvider
      displayName: string
      config: Prisma.JsonValue
      status: $Enums.IntegrationStatus
      healthStatus: string
      lastSyncAt: Date | null
      errorLogs: string | null
      syncSchedule: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integration"]>
    composites: {}
  }

  type IntegrationGetPayload<S extends boolean | null | undefined | IntegrationDefaultArgs> = $Result.GetResult<Prisma.$IntegrationPayload, S>

  type IntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationCountAggregateInputType | true
    }

  export interface IntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integration'], meta: { name: 'Integration' } }
    /**
     * Find zero or one Integration that matches the filter.
     * @param {IntegrationFindUniqueArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationFindUniqueArgs>(args: SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Integration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationFindUniqueOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Integration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationFindFirstArgs>(args?: SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Integration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integration.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationWithIdOnly = await prisma.integration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationFindManyArgs>(args?: SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Integration.
     * @param {IntegrationCreateArgs} args - Arguments to create a Integration.
     * @example
     * // Create one Integration
     * const Integration = await prisma.integration.create({
     *   data: {
     *     // ... data to create a Integration
     *   }
     * })
     * 
     */
    create<T extends IntegrationCreateArgs>(args: SelectSubset<T, IntegrationCreateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Integrations.
     * @param {IntegrationCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationCreateManyArgs>(args?: SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrations and returns the data saved in the database.
     * @param {IntegrationCreateManyAndReturnArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Integration.
     * @param {IntegrationDeleteArgs} args - Arguments to delete one Integration.
     * @example
     * // Delete one Integration
     * const Integration = await prisma.integration.delete({
     *   where: {
     *     // ... filter to delete one Integration
     *   }
     * })
     * 
     */
    delete<T extends IntegrationDeleteArgs>(args: SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Integration.
     * @param {IntegrationUpdateArgs} args - Arguments to update one Integration.
     * @example
     * // Update one Integration
     * const integration = await prisma.integration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationUpdateArgs>(args: SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationDeleteManyArgs>(args?: SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationUpdateManyArgs>(args: SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations and returns the data updated in the database.
     * @param {IntegrationUpdateManyAndReturnArgs} args - Arguments to update many Integrations.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Integration.
     * @param {IntegrationUpsertArgs} args - Arguments to update or create a Integration.
     * @example
     * // Update or create a Integration
     * const integration = await prisma.integration.upsert({
     *   create: {
     *     // ... data to create a Integration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integration we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationUpsertArgs>(args: SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integration.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationCountArgs>(
      args?: Subset<T, IntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationAggregateArgs>(args: Subset<T, IntegrationAggregateArgs>): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>

    /**
     * Group by Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integration model
   */
  readonly fields: IntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    syncRuns<T extends Integration$syncRunsArgs<ExtArgs> = {}>(args?: Subset<T, Integration$syncRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    assets<T extends Integration$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Integration$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Integration model
   */ 
  interface IntegrationFieldRefs {
    readonly id: FieldRef<"Integration", 'String'>
    readonly provider: FieldRef<"Integration", 'IntegrationProvider'>
    readonly displayName: FieldRef<"Integration", 'String'>
    readonly config: FieldRef<"Integration", 'Json'>
    readonly status: FieldRef<"Integration", 'IntegrationStatus'>
    readonly healthStatus: FieldRef<"Integration", 'String'>
    readonly lastSyncAt: FieldRef<"Integration", 'DateTime'>
    readonly errorLogs: FieldRef<"Integration", 'String'>
    readonly syncSchedule: FieldRef<"Integration", 'String'>
    readonly createdAt: FieldRef<"Integration", 'DateTime'>
    readonly updatedAt: FieldRef<"Integration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Integration findUnique
   */
  export type IntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findUniqueOrThrow
   */
  export type IntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findFirst
   */
  export type IntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findFirstOrThrow
   */
  export type IntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findMany
   */
  export type IntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration create
   */
  export type IntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Integration.
     */
    data: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
  }

  /**
   * Integration createMany
   */
  export type IntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integration createManyAndReturn
   */
  export type IntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integration update
   */
  export type IntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Integration.
     */
    data: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
    /**
     * Choose, which Integration to update.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration updateMany
   */
  export type IntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
  }

  /**
   * Integration updateManyAndReturn
   */
  export type IntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
  }

  /**
   * Integration upsert
   */
  export type IntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Integration to update in case it exists.
     */
    where: IntegrationWhereUniqueInput
    /**
     * In case the Integration found by the `where` argument doesn't exist, create a new Integration with this data.
     */
    create: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
    /**
     * In case the Integration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
  }

  /**
   * Integration delete
   */
  export type IntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter which Integration to delete.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration deleteMany
   */
  export type IntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationWhereInput
  }

  /**
   * Integration.syncRuns
   */
  export type Integration$syncRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    where?: SyncRunWhereInput
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    cursor?: SyncRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * Integration.assets
   */
  export type Integration$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Integration without action
   */
  export type IntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
  }


  /**
   * Model SyncRun
   */

  export type AggregateSyncRun = {
    _count: SyncRunCountAggregateOutputType | null
    _avg: SyncRunAvgAggregateOutputType | null
    _sum: SyncRunSumAggregateOutputType | null
    _min: SyncRunMinAggregateOutputType | null
    _max: SyncRunMaxAggregateOutputType | null
  }

  export type SyncRunAvgAggregateOutputType = {
    assetsSynced: number | null
  }

  export type SyncRunSumAggregateOutputType = {
    assetsSynced: number | null
  }

  export type SyncRunMinAggregateOutputType = {
    id: string | null
    integrationId: string | null
    status: $Enums.SyncStatus | null
    startedAt: Date | null
    endedAt: Date | null
    assetsSynced: number | null
    errorMessage: string | null
    rawPayloadPath: string | null
  }

  export type SyncRunMaxAggregateOutputType = {
    id: string | null
    integrationId: string | null
    status: $Enums.SyncStatus | null
    startedAt: Date | null
    endedAt: Date | null
    assetsSynced: number | null
    errorMessage: string | null
    rawPayloadPath: string | null
  }

  export type SyncRunCountAggregateOutputType = {
    id: number
    integrationId: number
    status: number
    startedAt: number
    endedAt: number
    assetsSynced: number
    errorMessage: number
    rawPayloadPath: number
    _all: number
  }


  export type SyncRunAvgAggregateInputType = {
    assetsSynced?: true
  }

  export type SyncRunSumAggregateInputType = {
    assetsSynced?: true
  }

  export type SyncRunMinAggregateInputType = {
    id?: true
    integrationId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    assetsSynced?: true
    errorMessage?: true
    rawPayloadPath?: true
  }

  export type SyncRunMaxAggregateInputType = {
    id?: true
    integrationId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    assetsSynced?: true
    errorMessage?: true
    rawPayloadPath?: true
  }

  export type SyncRunCountAggregateInputType = {
    id?: true
    integrationId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    assetsSynced?: true
    errorMessage?: true
    rawPayloadPath?: true
    _all?: true
  }

  export type SyncRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncRun to aggregate.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncRuns
    **/
    _count?: true | SyncRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncRunMaxAggregateInputType
  }

  export type GetSyncRunAggregateType<T extends SyncRunAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncRun[P]>
      : GetScalarType<T[P], AggregateSyncRun[P]>
  }




  export type SyncRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncRunWhereInput
    orderBy?: SyncRunOrderByWithAggregationInput | SyncRunOrderByWithAggregationInput[]
    by: SyncRunScalarFieldEnum[] | SyncRunScalarFieldEnum
    having?: SyncRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncRunCountAggregateInputType | true
    _avg?: SyncRunAvgAggregateInputType
    _sum?: SyncRunSumAggregateInputType
    _min?: SyncRunMinAggregateInputType
    _max?: SyncRunMaxAggregateInputType
  }

  export type SyncRunGroupByOutputType = {
    id: string
    integrationId: string
    status: $Enums.SyncStatus
    startedAt: Date
    endedAt: Date | null
    assetsSynced: number
    errorMessage: string | null
    rawPayloadPath: string | null
    _count: SyncRunCountAggregateOutputType | null
    _avg: SyncRunAvgAggregateOutputType | null
    _sum: SyncRunSumAggregateOutputType | null
    _min: SyncRunMinAggregateOutputType | null
    _max: SyncRunMaxAggregateOutputType | null
  }

  type GetSyncRunGroupByPayload<T extends SyncRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncRunGroupByOutputType[P]>
            : GetScalarType<T[P], SyncRunGroupByOutputType[P]>
        }
      >
    >


  export type SyncRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    assetsSynced?: boolean
    errorMessage?: boolean
    rawPayloadPath?: boolean
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    assetsSynced?: boolean
    errorMessage?: boolean
    rawPayloadPath?: boolean
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    assetsSynced?: boolean
    errorMessage?: boolean
    rawPayloadPath?: boolean
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncRun"]>

  export type SyncRunSelectScalar = {
    id?: boolean
    integrationId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    assetsSynced?: boolean
    errorMessage?: boolean
    rawPayloadPath?: boolean
  }

  export type SyncRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "integrationId" | "status" | "startedAt" | "endedAt" | "assetsSynced" | "errorMessage" | "rawPayloadPath", ExtArgs["result"]["syncRun"]>
  export type SyncRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }
  export type SyncRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }
  export type SyncRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }

  export type $SyncRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncRun"
    objects: {
      integration: Prisma.$IntegrationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      integrationId: string
      status: $Enums.SyncStatus
      startedAt: Date
      endedAt: Date | null
      assetsSynced: number
      errorMessage: string | null
      rawPayloadPath: string | null
    }, ExtArgs["result"]["syncRun"]>
    composites: {}
  }

  type SyncRunGetPayload<S extends boolean | null | undefined | SyncRunDefaultArgs> = $Result.GetResult<Prisma.$SyncRunPayload, S>

  type SyncRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncRunCountAggregateInputType | true
    }

  export interface SyncRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncRun'], meta: { name: 'SyncRun' } }
    /**
     * Find zero or one SyncRun that matches the filter.
     * @param {SyncRunFindUniqueArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncRunFindUniqueArgs>(args: SelectSubset<T, SyncRunFindUniqueArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SyncRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncRunFindUniqueOrThrowArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncRunFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SyncRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindFirstArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncRunFindFirstArgs>(args?: SelectSubset<T, SyncRunFindFirstArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SyncRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindFirstOrThrowArgs} args - Arguments to find a SyncRun
     * @example
     * // Get one SyncRun
     * const syncRun = await prisma.syncRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncRunFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SyncRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncRuns
     * const syncRuns = await prisma.syncRun.findMany()
     * 
     * // Get first 10 SyncRuns
     * const syncRuns = await prisma.syncRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncRunFindManyArgs>(args?: SelectSubset<T, SyncRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SyncRun.
     * @param {SyncRunCreateArgs} args - Arguments to create a SyncRun.
     * @example
     * // Create one SyncRun
     * const SyncRun = await prisma.syncRun.create({
     *   data: {
     *     // ... data to create a SyncRun
     *   }
     * })
     * 
     */
    create<T extends SyncRunCreateArgs>(args: SelectSubset<T, SyncRunCreateArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SyncRuns.
     * @param {SyncRunCreateManyArgs} args - Arguments to create many SyncRuns.
     * @example
     * // Create many SyncRuns
     * const syncRun = await prisma.syncRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncRunCreateManyArgs>(args?: SelectSubset<T, SyncRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncRuns and returns the data saved in the database.
     * @param {SyncRunCreateManyAndReturnArgs} args - Arguments to create many SyncRuns.
     * @example
     * // Create many SyncRuns
     * const syncRun = await prisma.syncRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncRuns and only return the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncRunCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SyncRun.
     * @param {SyncRunDeleteArgs} args - Arguments to delete one SyncRun.
     * @example
     * // Delete one SyncRun
     * const SyncRun = await prisma.syncRun.delete({
     *   where: {
     *     // ... filter to delete one SyncRun
     *   }
     * })
     * 
     */
    delete<T extends SyncRunDeleteArgs>(args: SelectSubset<T, SyncRunDeleteArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SyncRun.
     * @param {SyncRunUpdateArgs} args - Arguments to update one SyncRun.
     * @example
     * // Update one SyncRun
     * const syncRun = await prisma.syncRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncRunUpdateArgs>(args: SelectSubset<T, SyncRunUpdateArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SyncRuns.
     * @param {SyncRunDeleteManyArgs} args - Arguments to filter SyncRuns to delete.
     * @example
     * // Delete a few SyncRuns
     * const { count } = await prisma.syncRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncRunDeleteManyArgs>(args?: SelectSubset<T, SyncRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncRuns
     * const syncRun = await prisma.syncRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncRunUpdateManyArgs>(args: SelectSubset<T, SyncRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncRuns and returns the data updated in the database.
     * @param {SyncRunUpdateManyAndReturnArgs} args - Arguments to update many SyncRuns.
     * @example
     * // Update many SyncRuns
     * const syncRun = await prisma.syncRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncRuns and only return the `id`
     * const syncRunWithIdOnly = await prisma.syncRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyncRunUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SyncRun.
     * @param {SyncRunUpsertArgs} args - Arguments to update or create a SyncRun.
     * @example
     * // Update or create a SyncRun
     * const syncRun = await prisma.syncRun.upsert({
     *   create: {
     *     // ... data to create a SyncRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncRun we want to update
     *   }
     * })
     */
    upsert<T extends SyncRunUpsertArgs>(args: SelectSubset<T, SyncRunUpsertArgs<ExtArgs>>): Prisma__SyncRunClient<$Result.GetResult<Prisma.$SyncRunPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SyncRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunCountArgs} args - Arguments to filter SyncRuns to count.
     * @example
     * // Count the number of SyncRuns
     * const count = await prisma.syncRun.count({
     *   where: {
     *     // ... the filter for the SyncRuns we want to count
     *   }
     * })
    **/
    count<T extends SyncRunCountArgs>(
      args?: Subset<T, SyncRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncRunAggregateArgs>(args: Subset<T, SyncRunAggregateArgs>): Prisma.PrismaPromise<GetSyncRunAggregateType<T>>

    /**
     * Group by SyncRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncRunGroupByArgs['orderBy'] }
        : { orderBy?: SyncRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncRun model
   */
  readonly fields: SyncRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integration<T extends IntegrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationDefaultArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncRun model
   */ 
  interface SyncRunFieldRefs {
    readonly id: FieldRef<"SyncRun", 'String'>
    readonly integrationId: FieldRef<"SyncRun", 'String'>
    readonly status: FieldRef<"SyncRun", 'SyncStatus'>
    readonly startedAt: FieldRef<"SyncRun", 'DateTime'>
    readonly endedAt: FieldRef<"SyncRun", 'DateTime'>
    readonly assetsSynced: FieldRef<"SyncRun", 'Int'>
    readonly errorMessage: FieldRef<"SyncRun", 'String'>
    readonly rawPayloadPath: FieldRef<"SyncRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SyncRun findUnique
   */
  export type SyncRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun findUniqueOrThrow
   */
  export type SyncRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun findFirst
   */
  export type SyncRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncRuns.
     */
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun findFirstOrThrow
   */
  export type SyncRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRun to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncRuns.
     */
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun findMany
   */
  export type SyncRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter, which SyncRuns to fetch.
     */
    where?: SyncRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncRuns to fetch.
     */
    orderBy?: SyncRunOrderByWithRelationInput | SyncRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncRuns.
     */
    cursor?: SyncRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncRuns.
     */
    skip?: number
    distinct?: SyncRunScalarFieldEnum | SyncRunScalarFieldEnum[]
  }

  /**
   * SyncRun create
   */
  export type SyncRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncRun.
     */
    data: XOR<SyncRunCreateInput, SyncRunUncheckedCreateInput>
  }

  /**
   * SyncRun createMany
   */
  export type SyncRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncRuns.
     */
    data: SyncRunCreateManyInput | SyncRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncRun createManyAndReturn
   */
  export type SyncRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * The data used to create many SyncRuns.
     */
    data: SyncRunCreateManyInput | SyncRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncRun update
   */
  export type SyncRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncRun.
     */
    data: XOR<SyncRunUpdateInput, SyncRunUncheckedUpdateInput>
    /**
     * Choose, which SyncRun to update.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun updateMany
   */
  export type SyncRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncRuns.
     */
    data: XOR<SyncRunUpdateManyMutationInput, SyncRunUncheckedUpdateManyInput>
    /**
     * Filter which SyncRuns to update
     */
    where?: SyncRunWhereInput
  }

  /**
   * SyncRun updateManyAndReturn
   */
  export type SyncRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * The data used to update SyncRuns.
     */
    data: XOR<SyncRunUpdateManyMutationInput, SyncRunUncheckedUpdateManyInput>
    /**
     * Filter which SyncRuns to update
     */
    where?: SyncRunWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncRun upsert
   */
  export type SyncRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncRun to update in case it exists.
     */
    where: SyncRunWhereUniqueInput
    /**
     * In case the SyncRun found by the `where` argument doesn't exist, create a new SyncRun with this data.
     */
    create: XOR<SyncRunCreateInput, SyncRunUncheckedCreateInput>
    /**
     * In case the SyncRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncRunUpdateInput, SyncRunUncheckedUpdateInput>
  }

  /**
   * SyncRun delete
   */
  export type SyncRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
    /**
     * Filter which SyncRun to delete.
     */
    where: SyncRunWhereUniqueInput
  }

  /**
   * SyncRun deleteMany
   */
  export type SyncRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncRuns to delete
     */
    where?: SyncRunWhereInput
  }

  /**
   * SyncRun without action
   */
  export type SyncRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncRun
     */
    select?: SyncRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncRun
     */
    omit?: SyncRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncRunInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    integrationId: string | null
    externalId: string | null
    name: string | null
    type: string | null
    provider: string | null
    owner: string | null
    environment: string | null
    dataClassification: string | null
    encryptionStatus: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    integrationId: string | null
    externalId: string | null
    name: string | null
    type: string | null
    provider: string | null
    owner: string | null
    environment: string | null
    dataClassification: string | null
    encryptionStatus: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    integrationId: number
    externalId: number
    name: number
    type: number
    provider: number
    owner: number
    environment: number
    dataClassification: number
    encryptionStatus: number
    encryptionSignals: number
    status: number
    tags: number
    rawPayload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    id?: true
    integrationId?: true
    externalId?: true
    name?: true
    type?: true
    provider?: true
    owner?: true
    environment?: true
    dataClassification?: true
    encryptionStatus?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    integrationId?: true
    externalId?: true
    name?: true
    type?: true
    provider?: true
    owner?: true
    environment?: true
    dataClassification?: true
    encryptionStatus?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    integrationId?: true
    externalId?: true
    name?: true
    type?: true
    provider?: true
    owner?: true
    environment?: true
    dataClassification?: true
    encryptionStatus?: true
    encryptionSignals?: true
    status?: true
    tags?: true
    rawPayload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    integrationId: string
    externalId: string
    name: string
    type: string
    provider: string
    owner: string | null
    environment: string | null
    dataClassification: string | null
    encryptionStatus: boolean
    encryptionSignals: JsonValue | null
    status: string
    tags: string[]
    rawPayload: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    type?: boolean
    provider?: boolean
    owner?: boolean
    environment?: boolean
    dataClassification?: boolean
    encryptionStatus?: boolean
    encryptionSignals?: boolean
    status?: boolean
    tags?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
    history?: boolean | Asset$historyArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    type?: boolean
    provider?: boolean
    owner?: boolean
    environment?: boolean
    dataClassification?: boolean
    encryptionStatus?: boolean
    encryptionSignals?: boolean
    status?: boolean
    tags?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    type?: boolean
    provider?: boolean
    owner?: boolean
    environment?: boolean
    dataClassification?: boolean
    encryptionStatus?: boolean
    encryptionSignals?: boolean
    status?: boolean
    tags?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    type?: boolean
    provider?: boolean
    owner?: boolean
    environment?: boolean
    dataClassification?: boolean
    encryptionStatus?: boolean
    encryptionSignals?: boolean
    status?: boolean
    tags?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "integrationId" | "externalId" | "name" | "type" | "provider" | "owner" | "environment" | "dataClassification" | "encryptionStatus" | "encryptionSignals" | "status" | "tags" | "rawPayload" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
    history?: boolean | Asset$historyArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      integration: Prisma.$IntegrationPayload<ExtArgs>
      history: Prisma.$AssetChangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      integrationId: string
      externalId: string
      name: string
      type: string
      provider: string
      owner: string | null
      environment: string | null
      dataClassification: string | null
      encryptionStatus: boolean
      encryptionSignals: Prisma.JsonValue | null
      status: string
      tags: string[]
      rawPayload: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integration<T extends IntegrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationDefaultArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    history<T extends Asset$historyArgs<ExtArgs> = {}>(args?: Subset<T, Asset$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */ 
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly integrationId: FieldRef<"Asset", 'String'>
    readonly externalId: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly type: FieldRef<"Asset", 'String'>
    readonly provider: FieldRef<"Asset", 'String'>
    readonly owner: FieldRef<"Asset", 'String'>
    readonly environment: FieldRef<"Asset", 'String'>
    readonly dataClassification: FieldRef<"Asset", 'String'>
    readonly encryptionStatus: FieldRef<"Asset", 'Boolean'>
    readonly encryptionSignals: FieldRef<"Asset", 'Json'>
    readonly status: FieldRef<"Asset", 'String'>
    readonly tags: FieldRef<"Asset", 'String[]'>
    readonly rawPayload: FieldRef<"Asset", 'Json'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
  }

  /**
   * Asset.history
   */
  export type Asset$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    where?: AssetChangeWhereInput
    orderBy?: AssetChangeOrderByWithRelationInput | AssetChangeOrderByWithRelationInput[]
    cursor?: AssetChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetChangeScalarFieldEnum | AssetChangeScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model AssetChange
   */

  export type AggregateAssetChange = {
    _count: AssetChangeCountAggregateOutputType | null
    _min: AssetChangeMinAggregateOutputType | null
    _max: AssetChangeMaxAggregateOutputType | null
  }

  export type AssetChangeMinAggregateOutputType = {
    id: string | null
    assetId: string | null
    changeType: string | null
    timestamp: Date | null
  }

  export type AssetChangeMaxAggregateOutputType = {
    id: string | null
    assetId: string | null
    changeType: string | null
    timestamp: Date | null
  }

  export type AssetChangeCountAggregateOutputType = {
    id: number
    assetId: number
    changeType: number
    diff: number
    timestamp: number
    _all: number
  }


  export type AssetChangeMinAggregateInputType = {
    id?: true
    assetId?: true
    changeType?: true
    timestamp?: true
  }

  export type AssetChangeMaxAggregateInputType = {
    id?: true
    assetId?: true
    changeType?: true
    timestamp?: true
  }

  export type AssetChangeCountAggregateInputType = {
    id?: true
    assetId?: true
    changeType?: true
    diff?: true
    timestamp?: true
    _all?: true
  }

  export type AssetChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetChange to aggregate.
     */
    where?: AssetChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetChanges to fetch.
     */
    orderBy?: AssetChangeOrderByWithRelationInput | AssetChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetChanges
    **/
    _count?: true | AssetChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetChangeMaxAggregateInputType
  }

  export type GetAssetChangeAggregateType<T extends AssetChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetChange[P]>
      : GetScalarType<T[P], AggregateAssetChange[P]>
  }




  export type AssetChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetChangeWhereInput
    orderBy?: AssetChangeOrderByWithAggregationInput | AssetChangeOrderByWithAggregationInput[]
    by: AssetChangeScalarFieldEnum[] | AssetChangeScalarFieldEnum
    having?: AssetChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetChangeCountAggregateInputType | true
    _min?: AssetChangeMinAggregateInputType
    _max?: AssetChangeMaxAggregateInputType
  }

  export type AssetChangeGroupByOutputType = {
    id: string
    assetId: string
    changeType: string
    diff: JsonValue
    timestamp: Date
    _count: AssetChangeCountAggregateOutputType | null
    _min: AssetChangeMinAggregateOutputType | null
    _max: AssetChangeMaxAggregateOutputType | null
  }

  type GetAssetChangeGroupByPayload<T extends AssetChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetChangeGroupByOutputType[P]>
            : GetScalarType<T[P], AssetChangeGroupByOutputType[P]>
        }
      >
    >


  export type AssetChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    changeType?: boolean
    diff?: boolean
    timestamp?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetChange"]>

  export type AssetChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    changeType?: boolean
    diff?: boolean
    timestamp?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetChange"]>

  export type AssetChangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetId?: boolean
    changeType?: boolean
    diff?: boolean
    timestamp?: boolean
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetChange"]>

  export type AssetChangeSelectScalar = {
    id?: boolean
    assetId?: boolean
    changeType?: boolean
    diff?: boolean
    timestamp?: boolean
  }

  export type AssetChangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetId" | "changeType" | "diff" | "timestamp", ExtArgs["result"]["assetChange"]>
  export type AssetChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type AssetChangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type AssetChangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $AssetChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetChange"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetId: string
      changeType: string
      diff: Prisma.JsonValue
      timestamp: Date
    }, ExtArgs["result"]["assetChange"]>
    composites: {}
  }

  type AssetChangeGetPayload<S extends boolean | null | undefined | AssetChangeDefaultArgs> = $Result.GetResult<Prisma.$AssetChangePayload, S>

  type AssetChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetChangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetChangeCountAggregateInputType | true
    }

  export interface AssetChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetChange'], meta: { name: 'AssetChange' } }
    /**
     * Find zero or one AssetChange that matches the filter.
     * @param {AssetChangeFindUniqueArgs} args - Arguments to find a AssetChange
     * @example
     * // Get one AssetChange
     * const assetChange = await prisma.assetChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetChangeFindUniqueArgs>(args: SelectSubset<T, AssetChangeFindUniqueArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AssetChange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetChangeFindUniqueOrThrowArgs} args - Arguments to find a AssetChange
     * @example
     * // Get one AssetChange
     * const assetChange = await prisma.assetChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AssetChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeFindFirstArgs} args - Arguments to find a AssetChange
     * @example
     * // Get one AssetChange
     * const assetChange = await prisma.assetChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetChangeFindFirstArgs>(args?: SelectSubset<T, AssetChangeFindFirstArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AssetChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeFindFirstOrThrowArgs} args - Arguments to find a AssetChange
     * @example
     * // Get one AssetChange
     * const assetChange = await prisma.assetChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AssetChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetChanges
     * const assetChanges = await prisma.assetChange.findMany()
     * 
     * // Get first 10 AssetChanges
     * const assetChanges = await prisma.assetChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetChangeWithIdOnly = await prisma.assetChange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetChangeFindManyArgs>(args?: SelectSubset<T, AssetChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AssetChange.
     * @param {AssetChangeCreateArgs} args - Arguments to create a AssetChange.
     * @example
     * // Create one AssetChange
     * const AssetChange = await prisma.assetChange.create({
     *   data: {
     *     // ... data to create a AssetChange
     *   }
     * })
     * 
     */
    create<T extends AssetChangeCreateArgs>(args: SelectSubset<T, AssetChangeCreateArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AssetChanges.
     * @param {AssetChangeCreateManyArgs} args - Arguments to create many AssetChanges.
     * @example
     * // Create many AssetChanges
     * const assetChange = await prisma.assetChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetChangeCreateManyArgs>(args?: SelectSubset<T, AssetChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetChanges and returns the data saved in the database.
     * @param {AssetChangeCreateManyAndReturnArgs} args - Arguments to create many AssetChanges.
     * @example
     * // Create many AssetChanges
     * const assetChange = await prisma.assetChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetChanges and only return the `id`
     * const assetChangeWithIdOnly = await prisma.assetChange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AssetChange.
     * @param {AssetChangeDeleteArgs} args - Arguments to delete one AssetChange.
     * @example
     * // Delete one AssetChange
     * const AssetChange = await prisma.assetChange.delete({
     *   where: {
     *     // ... filter to delete one AssetChange
     *   }
     * })
     * 
     */
    delete<T extends AssetChangeDeleteArgs>(args: SelectSubset<T, AssetChangeDeleteArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AssetChange.
     * @param {AssetChangeUpdateArgs} args - Arguments to update one AssetChange.
     * @example
     * // Update one AssetChange
     * const assetChange = await prisma.assetChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetChangeUpdateArgs>(args: SelectSubset<T, AssetChangeUpdateArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AssetChanges.
     * @param {AssetChangeDeleteManyArgs} args - Arguments to filter AssetChanges to delete.
     * @example
     * // Delete a few AssetChanges
     * const { count } = await prisma.assetChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetChangeDeleteManyArgs>(args?: SelectSubset<T, AssetChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetChanges
     * const assetChange = await prisma.assetChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetChangeUpdateManyArgs>(args: SelectSubset<T, AssetChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetChanges and returns the data updated in the database.
     * @param {AssetChangeUpdateManyAndReturnArgs} args - Arguments to update many AssetChanges.
     * @example
     * // Update many AssetChanges
     * const assetChange = await prisma.assetChange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssetChanges and only return the `id`
     * const assetChangeWithIdOnly = await prisma.assetChange.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetChangeUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetChangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AssetChange.
     * @param {AssetChangeUpsertArgs} args - Arguments to update or create a AssetChange.
     * @example
     * // Update or create a AssetChange
     * const assetChange = await prisma.assetChange.upsert({
     *   create: {
     *     // ... data to create a AssetChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetChange we want to update
     *   }
     * })
     */
    upsert<T extends AssetChangeUpsertArgs>(args: SelectSubset<T, AssetChangeUpsertArgs<ExtArgs>>): Prisma__AssetChangeClient<$Result.GetResult<Prisma.$AssetChangePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AssetChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeCountArgs} args - Arguments to filter AssetChanges to count.
     * @example
     * // Count the number of AssetChanges
     * const count = await prisma.assetChange.count({
     *   where: {
     *     // ... the filter for the AssetChanges we want to count
     *   }
     * })
    **/
    count<T extends AssetChangeCountArgs>(
      args?: Subset<T, AssetChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetChangeAggregateArgs>(args: Subset<T, AssetChangeAggregateArgs>): Prisma.PrismaPromise<GetAssetChangeAggregateType<T>>

    /**
     * Group by AssetChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetChangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetChangeGroupByArgs['orderBy'] }
        : { orderBy?: AssetChangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetChange model
   */
  readonly fields: AssetChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetChange model
   */ 
  interface AssetChangeFieldRefs {
    readonly id: FieldRef<"AssetChange", 'String'>
    readonly assetId: FieldRef<"AssetChange", 'String'>
    readonly changeType: FieldRef<"AssetChange", 'String'>
    readonly diff: FieldRef<"AssetChange", 'Json'>
    readonly timestamp: FieldRef<"AssetChange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssetChange findUnique
   */
  export type AssetChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * Filter, which AssetChange to fetch.
     */
    where: AssetChangeWhereUniqueInput
  }

  /**
   * AssetChange findUniqueOrThrow
   */
  export type AssetChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * Filter, which AssetChange to fetch.
     */
    where: AssetChangeWhereUniqueInput
  }

  /**
   * AssetChange findFirst
   */
  export type AssetChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * Filter, which AssetChange to fetch.
     */
    where?: AssetChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetChanges to fetch.
     */
    orderBy?: AssetChangeOrderByWithRelationInput | AssetChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetChanges.
     */
    cursor?: AssetChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetChanges.
     */
    distinct?: AssetChangeScalarFieldEnum | AssetChangeScalarFieldEnum[]
  }

  /**
   * AssetChange findFirstOrThrow
   */
  export type AssetChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * Filter, which AssetChange to fetch.
     */
    where?: AssetChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetChanges to fetch.
     */
    orderBy?: AssetChangeOrderByWithRelationInput | AssetChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetChanges.
     */
    cursor?: AssetChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetChanges.
     */
    distinct?: AssetChangeScalarFieldEnum | AssetChangeScalarFieldEnum[]
  }

  /**
   * AssetChange findMany
   */
  export type AssetChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * Filter, which AssetChanges to fetch.
     */
    where?: AssetChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetChanges to fetch.
     */
    orderBy?: AssetChangeOrderByWithRelationInput | AssetChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetChanges.
     */
    cursor?: AssetChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetChanges.
     */
    skip?: number
    distinct?: AssetChangeScalarFieldEnum | AssetChangeScalarFieldEnum[]
  }

  /**
   * AssetChange create
   */
  export type AssetChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetChange.
     */
    data: XOR<AssetChangeCreateInput, AssetChangeUncheckedCreateInput>
  }

  /**
   * AssetChange createMany
   */
  export type AssetChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetChanges.
     */
    data: AssetChangeCreateManyInput | AssetChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetChange createManyAndReturn
   */
  export type AssetChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * The data used to create many AssetChanges.
     */
    data: AssetChangeCreateManyInput | AssetChangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetChange update
   */
  export type AssetChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetChange.
     */
    data: XOR<AssetChangeUpdateInput, AssetChangeUncheckedUpdateInput>
    /**
     * Choose, which AssetChange to update.
     */
    where: AssetChangeWhereUniqueInput
  }

  /**
   * AssetChange updateMany
   */
  export type AssetChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetChanges.
     */
    data: XOR<AssetChangeUpdateManyMutationInput, AssetChangeUncheckedUpdateManyInput>
    /**
     * Filter which AssetChanges to update
     */
    where?: AssetChangeWhereInput
  }

  /**
   * AssetChange updateManyAndReturn
   */
  export type AssetChangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * The data used to update AssetChanges.
     */
    data: XOR<AssetChangeUpdateManyMutationInput, AssetChangeUncheckedUpdateManyInput>
    /**
     * Filter which AssetChanges to update
     */
    where?: AssetChangeWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssetChange upsert
   */
  export type AssetChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetChange to update in case it exists.
     */
    where: AssetChangeWhereUniqueInput
    /**
     * In case the AssetChange found by the `where` argument doesn't exist, create a new AssetChange with this data.
     */
    create: XOR<AssetChangeCreateInput, AssetChangeUncheckedCreateInput>
    /**
     * In case the AssetChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetChangeUpdateInput, AssetChangeUncheckedUpdateInput>
  }

  /**
   * AssetChange delete
   */
  export type AssetChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
    /**
     * Filter which AssetChange to delete.
     */
    where: AssetChangeWhereUniqueInput
  }

  /**
   * AssetChange deleteMany
   */
  export type AssetChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetChanges to delete
     */
    where?: AssetChangeWhereInput
  }

  /**
   * AssetChange without action
   */
  export type AssetChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetChange
     */
    select?: AssetChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetChange
     */
    omit?: AssetChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetChangeInclude<ExtArgs> | null
  }


  /**
   * Model EvidenceTask
   */

  export type AggregateEvidenceTask = {
    _count: EvidenceTaskCountAggregateOutputType | null
    _min: EvidenceTaskMinAggregateOutputType | null
    _max: EvidenceTaskMaxAggregateOutputType | null
  }

  export type EvidenceTaskMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    assignee: string | null
    department: string | null
    framework: string | null
    dueDate: Date | null
    auditPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvidenceTaskMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    assignee: string | null
    department: string | null
    framework: string | null
    dueDate: Date | null
    auditPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvidenceTaskCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    assignee: number
    department: number
    framework: number
    dueDate: number
    auditPlanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EvidenceTaskMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    assignee?: true
    department?: true
    framework?: true
    dueDate?: true
    auditPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvidenceTaskMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    assignee?: true
    department?: true
    framework?: true
    dueDate?: true
    auditPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvidenceTaskCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    assignee?: true
    department?: true
    framework?: true
    dueDate?: true
    auditPlanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EvidenceTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvidenceTask to aggregate.
     */
    where?: EvidenceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceTasks to fetch.
     */
    orderBy?: EvidenceTaskOrderByWithRelationInput | EvidenceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvidenceTasks
    **/
    _count?: true | EvidenceTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceTaskMaxAggregateInputType
  }

  export type GetEvidenceTaskAggregateType<T extends EvidenceTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidenceTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidenceTask[P]>
      : GetScalarType<T[P], AggregateEvidenceTask[P]>
  }




  export type EvidenceTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceTaskWhereInput
    orderBy?: EvidenceTaskOrderByWithAggregationInput | EvidenceTaskOrderByWithAggregationInput[]
    by: EvidenceTaskScalarFieldEnum[] | EvidenceTaskScalarFieldEnum
    having?: EvidenceTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceTaskCountAggregateInputType | true
    _min?: EvidenceTaskMinAggregateInputType
    _max?: EvidenceTaskMaxAggregateInputType
  }

  export type EvidenceTaskGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: string
    assignee: string | null
    department: string | null
    framework: string | null
    dueDate: Date | null
    auditPlanId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EvidenceTaskCountAggregateOutputType | null
    _min: EvidenceTaskMinAggregateOutputType | null
    _max: EvidenceTaskMaxAggregateOutputType | null
  }

  type GetEvidenceTaskGroupByPayload<T extends EvidenceTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceTaskGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceTaskGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    assignee?: boolean
    department?: boolean
    framework?: boolean
    dueDate?: boolean
    auditPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditPlan?: boolean | EvidenceTask$auditPlanArgs<ExtArgs>
  }, ExtArgs["result"]["evidenceTask"]>

  export type EvidenceTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    assignee?: boolean
    department?: boolean
    framework?: boolean
    dueDate?: boolean
    auditPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditPlan?: boolean | EvidenceTask$auditPlanArgs<ExtArgs>
  }, ExtArgs["result"]["evidenceTask"]>

  export type EvidenceTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    assignee?: boolean
    department?: boolean
    framework?: boolean
    dueDate?: boolean
    auditPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditPlan?: boolean | EvidenceTask$auditPlanArgs<ExtArgs>
  }, ExtArgs["result"]["evidenceTask"]>

  export type EvidenceTaskSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    assignee?: boolean
    department?: boolean
    framework?: boolean
    dueDate?: boolean
    auditPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EvidenceTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "assignee" | "department" | "framework" | "dueDate" | "auditPlanId" | "createdAt" | "updatedAt", ExtArgs["result"]["evidenceTask"]>
  export type EvidenceTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditPlan?: boolean | EvidenceTask$auditPlanArgs<ExtArgs>
  }
  export type EvidenceTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditPlan?: boolean | EvidenceTask$auditPlanArgs<ExtArgs>
  }
  export type EvidenceTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditPlan?: boolean | EvidenceTask$auditPlanArgs<ExtArgs>
  }

  export type $EvidenceTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvidenceTask"
    objects: {
      auditPlan: Prisma.$AuditPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: string
      assignee: string | null
      department: string | null
      framework: string | null
      dueDate: Date | null
      auditPlanId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evidenceTask"]>
    composites: {}
  }

  type EvidenceTaskGetPayload<S extends boolean | null | undefined | EvidenceTaskDefaultArgs> = $Result.GetResult<Prisma.$EvidenceTaskPayload, S>

  type EvidenceTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvidenceTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvidenceTaskCountAggregateInputType | true
    }

  export interface EvidenceTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvidenceTask'], meta: { name: 'EvidenceTask' } }
    /**
     * Find zero or one EvidenceTask that matches the filter.
     * @param {EvidenceTaskFindUniqueArgs} args - Arguments to find a EvidenceTask
     * @example
     * // Get one EvidenceTask
     * const evidenceTask = await prisma.evidenceTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvidenceTaskFindUniqueArgs>(args: SelectSubset<T, EvidenceTaskFindUniqueArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EvidenceTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvidenceTaskFindUniqueOrThrowArgs} args - Arguments to find a EvidenceTask
     * @example
     * // Get one EvidenceTask
     * const evidenceTask = await prisma.evidenceTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvidenceTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, EvidenceTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EvidenceTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskFindFirstArgs} args - Arguments to find a EvidenceTask
     * @example
     * // Get one EvidenceTask
     * const evidenceTask = await prisma.evidenceTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvidenceTaskFindFirstArgs>(args?: SelectSubset<T, EvidenceTaskFindFirstArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EvidenceTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskFindFirstOrThrowArgs} args - Arguments to find a EvidenceTask
     * @example
     * // Get one EvidenceTask
     * const evidenceTask = await prisma.evidenceTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvidenceTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, EvidenceTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EvidenceTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvidenceTasks
     * const evidenceTasks = await prisma.evidenceTask.findMany()
     * 
     * // Get first 10 EvidenceTasks
     * const evidenceTasks = await prisma.evidenceTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceTaskWithIdOnly = await prisma.evidenceTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvidenceTaskFindManyArgs>(args?: SelectSubset<T, EvidenceTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EvidenceTask.
     * @param {EvidenceTaskCreateArgs} args - Arguments to create a EvidenceTask.
     * @example
     * // Create one EvidenceTask
     * const EvidenceTask = await prisma.evidenceTask.create({
     *   data: {
     *     // ... data to create a EvidenceTask
     *   }
     * })
     * 
     */
    create<T extends EvidenceTaskCreateArgs>(args: SelectSubset<T, EvidenceTaskCreateArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EvidenceTasks.
     * @param {EvidenceTaskCreateManyArgs} args - Arguments to create many EvidenceTasks.
     * @example
     * // Create many EvidenceTasks
     * const evidenceTask = await prisma.evidenceTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvidenceTaskCreateManyArgs>(args?: SelectSubset<T, EvidenceTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvidenceTasks and returns the data saved in the database.
     * @param {EvidenceTaskCreateManyAndReturnArgs} args - Arguments to create many EvidenceTasks.
     * @example
     * // Create many EvidenceTasks
     * const evidenceTask = await prisma.evidenceTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvidenceTasks and only return the `id`
     * const evidenceTaskWithIdOnly = await prisma.evidenceTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvidenceTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, EvidenceTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EvidenceTask.
     * @param {EvidenceTaskDeleteArgs} args - Arguments to delete one EvidenceTask.
     * @example
     * // Delete one EvidenceTask
     * const EvidenceTask = await prisma.evidenceTask.delete({
     *   where: {
     *     // ... filter to delete one EvidenceTask
     *   }
     * })
     * 
     */
    delete<T extends EvidenceTaskDeleteArgs>(args: SelectSubset<T, EvidenceTaskDeleteArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EvidenceTask.
     * @param {EvidenceTaskUpdateArgs} args - Arguments to update one EvidenceTask.
     * @example
     * // Update one EvidenceTask
     * const evidenceTask = await prisma.evidenceTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvidenceTaskUpdateArgs>(args: SelectSubset<T, EvidenceTaskUpdateArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EvidenceTasks.
     * @param {EvidenceTaskDeleteManyArgs} args - Arguments to filter EvidenceTasks to delete.
     * @example
     * // Delete a few EvidenceTasks
     * const { count } = await prisma.evidenceTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvidenceTaskDeleteManyArgs>(args?: SelectSubset<T, EvidenceTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvidenceTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvidenceTasks
     * const evidenceTask = await prisma.evidenceTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvidenceTaskUpdateManyArgs>(args: SelectSubset<T, EvidenceTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvidenceTasks and returns the data updated in the database.
     * @param {EvidenceTaskUpdateManyAndReturnArgs} args - Arguments to update many EvidenceTasks.
     * @example
     * // Update many EvidenceTasks
     * const evidenceTask = await prisma.evidenceTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvidenceTasks and only return the `id`
     * const evidenceTaskWithIdOnly = await prisma.evidenceTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvidenceTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, EvidenceTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EvidenceTask.
     * @param {EvidenceTaskUpsertArgs} args - Arguments to update or create a EvidenceTask.
     * @example
     * // Update or create a EvidenceTask
     * const evidenceTask = await prisma.evidenceTask.upsert({
     *   create: {
     *     // ... data to create a EvidenceTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvidenceTask we want to update
     *   }
     * })
     */
    upsert<T extends EvidenceTaskUpsertArgs>(args: SelectSubset<T, EvidenceTaskUpsertArgs<ExtArgs>>): Prisma__EvidenceTaskClient<$Result.GetResult<Prisma.$EvidenceTaskPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EvidenceTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskCountArgs} args - Arguments to filter EvidenceTasks to count.
     * @example
     * // Count the number of EvidenceTasks
     * const count = await prisma.evidenceTask.count({
     *   where: {
     *     // ... the filter for the EvidenceTasks we want to count
     *   }
     * })
    **/
    count<T extends EvidenceTaskCountArgs>(
      args?: Subset<T, EvidenceTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvidenceTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvidenceTaskAggregateArgs>(args: Subset<T, EvidenceTaskAggregateArgs>): Prisma.PrismaPromise<GetEvidenceTaskAggregateType<T>>

    /**
     * Group by EvidenceTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvidenceTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceTaskGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvidenceTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvidenceTask model
   */
  readonly fields: EvidenceTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvidenceTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditPlan<T extends EvidenceTask$auditPlanArgs<ExtArgs> = {}>(args?: Subset<T, EvidenceTask$auditPlanArgs<ExtArgs>>): Prisma__AuditPlanClient<$Result.GetResult<Prisma.$AuditPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvidenceTask model
   */ 
  interface EvidenceTaskFieldRefs {
    readonly id: FieldRef<"EvidenceTask", 'String'>
    readonly name: FieldRef<"EvidenceTask", 'String'>
    readonly description: FieldRef<"EvidenceTask", 'String'>
    readonly status: FieldRef<"EvidenceTask", 'String'>
    readonly assignee: FieldRef<"EvidenceTask", 'String'>
    readonly department: FieldRef<"EvidenceTask", 'String'>
    readonly framework: FieldRef<"EvidenceTask", 'String'>
    readonly dueDate: FieldRef<"EvidenceTask", 'DateTime'>
    readonly auditPlanId: FieldRef<"EvidenceTask", 'String'>
    readonly createdAt: FieldRef<"EvidenceTask", 'DateTime'>
    readonly updatedAt: FieldRef<"EvidenceTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvidenceTask findUnique
   */
  export type EvidenceTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * Filter, which EvidenceTask to fetch.
     */
    where: EvidenceTaskWhereUniqueInput
  }

  /**
   * EvidenceTask findUniqueOrThrow
   */
  export type EvidenceTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * Filter, which EvidenceTask to fetch.
     */
    where: EvidenceTaskWhereUniqueInput
  }

  /**
   * EvidenceTask findFirst
   */
  export type EvidenceTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * Filter, which EvidenceTask to fetch.
     */
    where?: EvidenceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceTasks to fetch.
     */
    orderBy?: EvidenceTaskOrderByWithRelationInput | EvidenceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvidenceTasks.
     */
    cursor?: EvidenceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvidenceTasks.
     */
    distinct?: EvidenceTaskScalarFieldEnum | EvidenceTaskScalarFieldEnum[]
  }

  /**
   * EvidenceTask findFirstOrThrow
   */
  export type EvidenceTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * Filter, which EvidenceTask to fetch.
     */
    where?: EvidenceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceTasks to fetch.
     */
    orderBy?: EvidenceTaskOrderByWithRelationInput | EvidenceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvidenceTasks.
     */
    cursor?: EvidenceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvidenceTasks.
     */
    distinct?: EvidenceTaskScalarFieldEnum | EvidenceTaskScalarFieldEnum[]
  }

  /**
   * EvidenceTask findMany
   */
  export type EvidenceTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * Filter, which EvidenceTasks to fetch.
     */
    where?: EvidenceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceTasks to fetch.
     */
    orderBy?: EvidenceTaskOrderByWithRelationInput | EvidenceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvidenceTasks.
     */
    cursor?: EvidenceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceTasks.
     */
    skip?: number
    distinct?: EvidenceTaskScalarFieldEnum | EvidenceTaskScalarFieldEnum[]
  }

  /**
   * EvidenceTask create
   */
  export type EvidenceTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a EvidenceTask.
     */
    data: XOR<EvidenceTaskCreateInput, EvidenceTaskUncheckedCreateInput>
  }

  /**
   * EvidenceTask createMany
   */
  export type EvidenceTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvidenceTasks.
     */
    data: EvidenceTaskCreateManyInput | EvidenceTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvidenceTask createManyAndReturn
   */
  export type EvidenceTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * The data used to create many EvidenceTasks.
     */
    data: EvidenceTaskCreateManyInput | EvidenceTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvidenceTask update
   */
  export type EvidenceTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a EvidenceTask.
     */
    data: XOR<EvidenceTaskUpdateInput, EvidenceTaskUncheckedUpdateInput>
    /**
     * Choose, which EvidenceTask to update.
     */
    where: EvidenceTaskWhereUniqueInput
  }

  /**
   * EvidenceTask updateMany
   */
  export type EvidenceTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvidenceTasks.
     */
    data: XOR<EvidenceTaskUpdateManyMutationInput, EvidenceTaskUncheckedUpdateManyInput>
    /**
     * Filter which EvidenceTasks to update
     */
    where?: EvidenceTaskWhereInput
  }

  /**
   * EvidenceTask updateManyAndReturn
   */
  export type EvidenceTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * The data used to update EvidenceTasks.
     */
    data: XOR<EvidenceTaskUpdateManyMutationInput, EvidenceTaskUncheckedUpdateManyInput>
    /**
     * Filter which EvidenceTasks to update
     */
    where?: EvidenceTaskWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvidenceTask upsert
   */
  export type EvidenceTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the EvidenceTask to update in case it exists.
     */
    where: EvidenceTaskWhereUniqueInput
    /**
     * In case the EvidenceTask found by the `where` argument doesn't exist, create a new EvidenceTask with this data.
     */
    create: XOR<EvidenceTaskCreateInput, EvidenceTaskUncheckedCreateInput>
    /**
     * In case the EvidenceTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceTaskUpdateInput, EvidenceTaskUncheckedUpdateInput>
  }

  /**
   * EvidenceTask delete
   */
  export type EvidenceTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
    /**
     * Filter which EvidenceTask to delete.
     */
    where: EvidenceTaskWhereUniqueInput
  }

  /**
   * EvidenceTask deleteMany
   */
  export type EvidenceTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvidenceTasks to delete
     */
    where?: EvidenceTaskWhereInput
  }

  /**
   * EvidenceTask.auditPlan
   */
  export type EvidenceTask$auditPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditPlan
     */
    select?: AuditPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditPlan
     */
    omit?: AuditPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditPlanInclude<ExtArgs> | null
    where?: AuditPlanWhereInput
  }

  /**
   * EvidenceTask without action
   */
  export type EvidenceTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceTask
     */
    select?: EvidenceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceTask
     */
    omit?: EvidenceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceTaskInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    version: number | null
  }

  export type PolicySumAggregateOutputType = {
    version: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    status: string | null
    version: number | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    status: string | null
    version: number | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    status: number
    version: number
    owner: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    version?: true
  }

  export type PolicySumAggregateInputType = {
    version?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    status?: true
    version?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    status?: true
    version?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    status?: true
    version?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    title: string
    content: string
    category: string
    status: string
    version: number
    owner: string | null
    createdAt: Date
    updatedAt: Date
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "status" | "version" | "owner" | "createdAt" | "updatedAt", ExtArgs["result"]["policy"]>

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      category: string
      status: string
      version: number
      owner: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policy model
   */ 
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'String'>
    readonly title: FieldRef<"Policy", 'String'>
    readonly content: FieldRef<"Policy", 'String'>
    readonly category: FieldRef<"Policy", 'String'>
    readonly status: FieldRef<"Policy", 'String'>
    readonly version: FieldRef<"Policy", 'Int'>
    readonly owner: FieldRef<"Policy", 'String'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
    readonly updatedAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
  }


  /**
   * Model EvidenceExport
   */

  export type AggregateEvidenceExport = {
    _count: EvidenceExportCountAggregateOutputType | null
    _min: EvidenceExportMinAggregateOutputType | null
    _max: EvidenceExportMaxAggregateOutputType | null
  }

  export type EvidenceExportMinAggregateOutputType = {
    id: string | null
    name: string | null
    framework: $Enums.AuditFramework | null
    periodStart: Date | null
    periodEnd: Date | null
    fileUrl: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type EvidenceExportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    framework: $Enums.AuditFramework | null
    periodStart: Date | null
    periodEnd: Date | null
    fileUrl: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type EvidenceExportCountAggregateOutputType = {
    id: number
    name: number
    framework: number
    periodStart: number
    periodEnd: number
    fileUrl: number
    summary: number
    artifactIndex: number
    createdAt: number
    _all: number
  }


  export type EvidenceExportMinAggregateInputType = {
    id?: true
    name?: true
    framework?: true
    periodStart?: true
    periodEnd?: true
    fileUrl?: true
    summary?: true
    createdAt?: true
  }

  export type EvidenceExportMaxAggregateInputType = {
    id?: true
    name?: true
    framework?: true
    periodStart?: true
    periodEnd?: true
    fileUrl?: true
    summary?: true
    createdAt?: true
  }

  export type EvidenceExportCountAggregateInputType = {
    id?: true
    name?: true
    framework?: true
    periodStart?: true
    periodEnd?: true
    fileUrl?: true
    summary?: true
    artifactIndex?: true
    createdAt?: true
    _all?: true
  }

  export type EvidenceExportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvidenceExport to aggregate.
     */
    where?: EvidenceExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceExports to fetch.
     */
    orderBy?: EvidenceExportOrderByWithRelationInput | EvidenceExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceExports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceExports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvidenceExports
    **/
    _count?: true | EvidenceExportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceExportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceExportMaxAggregateInputType
  }

  export type GetEvidenceExportAggregateType<T extends EvidenceExportAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidenceExport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidenceExport[P]>
      : GetScalarType<T[P], AggregateEvidenceExport[P]>
  }




  export type EvidenceExportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceExportWhereInput
    orderBy?: EvidenceExportOrderByWithAggregationInput | EvidenceExportOrderByWithAggregationInput[]
    by: EvidenceExportScalarFieldEnum[] | EvidenceExportScalarFieldEnum
    having?: EvidenceExportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceExportCountAggregateInputType | true
    _min?: EvidenceExportMinAggregateInputType
    _max?: EvidenceExportMaxAggregateInputType
  }

  export type EvidenceExportGroupByOutputType = {
    id: string
    name: string
    framework: $Enums.AuditFramework
    periodStart: Date
    periodEnd: Date
    fileUrl: string
    summary: string | null
    artifactIndex: JsonValue | null
    createdAt: Date
    _count: EvidenceExportCountAggregateOutputType | null
    _min: EvidenceExportMinAggregateOutputType | null
    _max: EvidenceExportMaxAggregateOutputType | null
  }

  type GetEvidenceExportGroupByPayload<T extends EvidenceExportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceExportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceExportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceExportGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceExportGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceExportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    framework?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    summary?: boolean
    artifactIndex?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evidenceExport"]>

  export type EvidenceExportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    framework?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    summary?: boolean
    artifactIndex?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evidenceExport"]>

  export type EvidenceExportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    framework?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    summary?: boolean
    artifactIndex?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evidenceExport"]>

  export type EvidenceExportSelectScalar = {
    id?: boolean
    name?: boolean
    framework?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    fileUrl?: boolean
    summary?: boolean
    artifactIndex?: boolean
    createdAt?: boolean
  }

  export type EvidenceExportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "framework" | "periodStart" | "periodEnd" | "fileUrl" | "summary" | "artifactIndex" | "createdAt", ExtArgs["result"]["evidenceExport"]>

  export type $EvidenceExportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvidenceExport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      framework: $Enums.AuditFramework
      periodStart: Date
      periodEnd: Date
      fileUrl: string
      summary: string | null
      artifactIndex: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["evidenceExport"]>
    composites: {}
  }

  type EvidenceExportGetPayload<S extends boolean | null | undefined | EvidenceExportDefaultArgs> = $Result.GetResult<Prisma.$EvidenceExportPayload, S>

  type EvidenceExportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvidenceExportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvidenceExportCountAggregateInputType | true
    }

  export interface EvidenceExportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvidenceExport'], meta: { name: 'EvidenceExport' } }
    /**
     * Find zero or one EvidenceExport that matches the filter.
     * @param {EvidenceExportFindUniqueArgs} args - Arguments to find a EvidenceExport
     * @example
     * // Get one EvidenceExport
     * const evidenceExport = await prisma.evidenceExport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvidenceExportFindUniqueArgs>(args: SelectSubset<T, EvidenceExportFindUniqueArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EvidenceExport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvidenceExportFindUniqueOrThrowArgs} args - Arguments to find a EvidenceExport
     * @example
     * // Get one EvidenceExport
     * const evidenceExport = await prisma.evidenceExport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvidenceExportFindUniqueOrThrowArgs>(args: SelectSubset<T, EvidenceExportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EvidenceExport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportFindFirstArgs} args - Arguments to find a EvidenceExport
     * @example
     * // Get one EvidenceExport
     * const evidenceExport = await prisma.evidenceExport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvidenceExportFindFirstArgs>(args?: SelectSubset<T, EvidenceExportFindFirstArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EvidenceExport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportFindFirstOrThrowArgs} args - Arguments to find a EvidenceExport
     * @example
     * // Get one EvidenceExport
     * const evidenceExport = await prisma.evidenceExport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvidenceExportFindFirstOrThrowArgs>(args?: SelectSubset<T, EvidenceExportFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EvidenceExports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvidenceExports
     * const evidenceExports = await prisma.evidenceExport.findMany()
     * 
     * // Get first 10 EvidenceExports
     * const evidenceExports = await prisma.evidenceExport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceExportWithIdOnly = await prisma.evidenceExport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvidenceExportFindManyArgs>(args?: SelectSubset<T, EvidenceExportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EvidenceExport.
     * @param {EvidenceExportCreateArgs} args - Arguments to create a EvidenceExport.
     * @example
     * // Create one EvidenceExport
     * const EvidenceExport = await prisma.evidenceExport.create({
     *   data: {
     *     // ... data to create a EvidenceExport
     *   }
     * })
     * 
     */
    create<T extends EvidenceExportCreateArgs>(args: SelectSubset<T, EvidenceExportCreateArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EvidenceExports.
     * @param {EvidenceExportCreateManyArgs} args - Arguments to create many EvidenceExports.
     * @example
     * // Create many EvidenceExports
     * const evidenceExport = await prisma.evidenceExport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvidenceExportCreateManyArgs>(args?: SelectSubset<T, EvidenceExportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvidenceExports and returns the data saved in the database.
     * @param {EvidenceExportCreateManyAndReturnArgs} args - Arguments to create many EvidenceExports.
     * @example
     * // Create many EvidenceExports
     * const evidenceExport = await prisma.evidenceExport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvidenceExports and only return the `id`
     * const evidenceExportWithIdOnly = await prisma.evidenceExport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvidenceExportCreateManyAndReturnArgs>(args?: SelectSubset<T, EvidenceExportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EvidenceExport.
     * @param {EvidenceExportDeleteArgs} args - Arguments to delete one EvidenceExport.
     * @example
     * // Delete one EvidenceExport
     * const EvidenceExport = await prisma.evidenceExport.delete({
     *   where: {
     *     // ... filter to delete one EvidenceExport
     *   }
     * })
     * 
     */
    delete<T extends EvidenceExportDeleteArgs>(args: SelectSubset<T, EvidenceExportDeleteArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EvidenceExport.
     * @param {EvidenceExportUpdateArgs} args - Arguments to update one EvidenceExport.
     * @example
     * // Update one EvidenceExport
     * const evidenceExport = await prisma.evidenceExport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvidenceExportUpdateArgs>(args: SelectSubset<T, EvidenceExportUpdateArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EvidenceExports.
     * @param {EvidenceExportDeleteManyArgs} args - Arguments to filter EvidenceExports to delete.
     * @example
     * // Delete a few EvidenceExports
     * const { count } = await prisma.evidenceExport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvidenceExportDeleteManyArgs>(args?: SelectSubset<T, EvidenceExportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvidenceExports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvidenceExports
     * const evidenceExport = await prisma.evidenceExport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvidenceExportUpdateManyArgs>(args: SelectSubset<T, EvidenceExportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvidenceExports and returns the data updated in the database.
     * @param {EvidenceExportUpdateManyAndReturnArgs} args - Arguments to update many EvidenceExports.
     * @example
     * // Update many EvidenceExports
     * const evidenceExport = await prisma.evidenceExport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvidenceExports and only return the `id`
     * const evidenceExportWithIdOnly = await prisma.evidenceExport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvidenceExportUpdateManyAndReturnArgs>(args: SelectSubset<T, EvidenceExportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EvidenceExport.
     * @param {EvidenceExportUpsertArgs} args - Arguments to update or create a EvidenceExport.
     * @example
     * // Update or create a EvidenceExport
     * const evidenceExport = await prisma.evidenceExport.upsert({
     *   create: {
     *     // ... data to create a EvidenceExport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvidenceExport we want to update
     *   }
     * })
     */
    upsert<T extends EvidenceExportUpsertArgs>(args: SelectSubset<T, EvidenceExportUpsertArgs<ExtArgs>>): Prisma__EvidenceExportClient<$Result.GetResult<Prisma.$EvidenceExportPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EvidenceExports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportCountArgs} args - Arguments to filter EvidenceExports to count.
     * @example
     * // Count the number of EvidenceExports
     * const count = await prisma.evidenceExport.count({
     *   where: {
     *     // ... the filter for the EvidenceExports we want to count
     *   }
     * })
    **/
    count<T extends EvidenceExportCountArgs>(
      args?: Subset<T, EvidenceExportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceExportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvidenceExport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvidenceExportAggregateArgs>(args: Subset<T, EvidenceExportAggregateArgs>): Prisma.PrismaPromise<GetEvidenceExportAggregateType<T>>

    /**
     * Group by EvidenceExport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceExportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvidenceExportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceExportGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceExportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvidenceExportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceExportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvidenceExport model
   */
  readonly fields: EvidenceExportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvidenceExport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceExportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvidenceExport model
   */ 
  interface EvidenceExportFieldRefs {
    readonly id: FieldRef<"EvidenceExport", 'String'>
    readonly name: FieldRef<"EvidenceExport", 'String'>
    readonly framework: FieldRef<"EvidenceExport", 'AuditFramework'>
    readonly periodStart: FieldRef<"EvidenceExport", 'DateTime'>
    readonly periodEnd: FieldRef<"EvidenceExport", 'DateTime'>
    readonly fileUrl: FieldRef<"EvidenceExport", 'String'>
    readonly summary: FieldRef<"EvidenceExport", 'String'>
    readonly artifactIndex: FieldRef<"EvidenceExport", 'Json'>
    readonly createdAt: FieldRef<"EvidenceExport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvidenceExport findUnique
   */
  export type EvidenceExportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * Filter, which EvidenceExport to fetch.
     */
    where: EvidenceExportWhereUniqueInput
  }

  /**
   * EvidenceExport findUniqueOrThrow
   */
  export type EvidenceExportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * Filter, which EvidenceExport to fetch.
     */
    where: EvidenceExportWhereUniqueInput
  }

  /**
   * EvidenceExport findFirst
   */
  export type EvidenceExportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * Filter, which EvidenceExport to fetch.
     */
    where?: EvidenceExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceExports to fetch.
     */
    orderBy?: EvidenceExportOrderByWithRelationInput | EvidenceExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvidenceExports.
     */
    cursor?: EvidenceExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceExports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceExports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvidenceExports.
     */
    distinct?: EvidenceExportScalarFieldEnum | EvidenceExportScalarFieldEnum[]
  }

  /**
   * EvidenceExport findFirstOrThrow
   */
  export type EvidenceExportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * Filter, which EvidenceExport to fetch.
     */
    where?: EvidenceExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceExports to fetch.
     */
    orderBy?: EvidenceExportOrderByWithRelationInput | EvidenceExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvidenceExports.
     */
    cursor?: EvidenceExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceExports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceExports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvidenceExports.
     */
    distinct?: EvidenceExportScalarFieldEnum | EvidenceExportScalarFieldEnum[]
  }

  /**
   * EvidenceExport findMany
   */
  export type EvidenceExportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * Filter, which EvidenceExports to fetch.
     */
    where?: EvidenceExportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvidenceExports to fetch.
     */
    orderBy?: EvidenceExportOrderByWithRelationInput | EvidenceExportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvidenceExports.
     */
    cursor?: EvidenceExportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvidenceExports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvidenceExports.
     */
    skip?: number
    distinct?: EvidenceExportScalarFieldEnum | EvidenceExportScalarFieldEnum[]
  }

  /**
   * EvidenceExport create
   */
  export type EvidenceExportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * The data needed to create a EvidenceExport.
     */
    data: XOR<EvidenceExportCreateInput, EvidenceExportUncheckedCreateInput>
  }

  /**
   * EvidenceExport createMany
   */
  export type EvidenceExportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvidenceExports.
     */
    data: EvidenceExportCreateManyInput | EvidenceExportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvidenceExport createManyAndReturn
   */
  export type EvidenceExportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * The data used to create many EvidenceExports.
     */
    data: EvidenceExportCreateManyInput | EvidenceExportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvidenceExport update
   */
  export type EvidenceExportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * The data needed to update a EvidenceExport.
     */
    data: XOR<EvidenceExportUpdateInput, EvidenceExportUncheckedUpdateInput>
    /**
     * Choose, which EvidenceExport to update.
     */
    where: EvidenceExportWhereUniqueInput
  }

  /**
   * EvidenceExport updateMany
   */
  export type EvidenceExportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvidenceExports.
     */
    data: XOR<EvidenceExportUpdateManyMutationInput, EvidenceExportUncheckedUpdateManyInput>
    /**
     * Filter which EvidenceExports to update
     */
    where?: EvidenceExportWhereInput
  }

  /**
   * EvidenceExport updateManyAndReturn
   */
  export type EvidenceExportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * The data used to update EvidenceExports.
     */
    data: XOR<EvidenceExportUpdateManyMutationInput, EvidenceExportUncheckedUpdateManyInput>
    /**
     * Filter which EvidenceExports to update
     */
    where?: EvidenceExportWhereInput
  }

  /**
   * EvidenceExport upsert
   */
  export type EvidenceExportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * The filter to search for the EvidenceExport to update in case it exists.
     */
    where: EvidenceExportWhereUniqueInput
    /**
     * In case the EvidenceExport found by the `where` argument doesn't exist, create a new EvidenceExport with this data.
     */
    create: XOR<EvidenceExportCreateInput, EvidenceExportUncheckedCreateInput>
    /**
     * In case the EvidenceExport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceExportUpdateInput, EvidenceExportUncheckedUpdateInput>
  }

  /**
   * EvidenceExport delete
   */
  export type EvidenceExportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
    /**
     * Filter which EvidenceExport to delete.
     */
    where: EvidenceExportWhereUniqueInput
  }

  /**
   * EvidenceExport deleteMany
   */
  export type EvidenceExportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvidenceExports to delete
     */
    where?: EvidenceExportWhereInput
  }

  /**
   * EvidenceExport without action
   */
  export type EvidenceExportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvidenceExport
     */
    select?: EvidenceExportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvidenceExport
     */
    omit?: EvidenceExportOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuditPlanScalarFieldEnum: {
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

  export type AuditPlanScalarFieldEnum = (typeof AuditPlanScalarFieldEnum)[keyof typeof AuditPlanScalarFieldEnum]


  export const IntegrationScalarFieldEnum: {
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

  export type IntegrationScalarFieldEnum = (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum]


  export const SyncRunScalarFieldEnum: {
    id: 'id',
    integrationId: 'integrationId',
    status: 'status',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    assetsSynced: 'assetsSynced',
    errorMessage: 'errorMessage',
    rawPayloadPath: 'rawPayloadPath'
  };

  export type SyncRunScalarFieldEnum = (typeof SyncRunScalarFieldEnum)[keyof typeof SyncRunScalarFieldEnum]


  export const AssetScalarFieldEnum: {
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

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AssetChangeScalarFieldEnum: {
    id: 'id',
    assetId: 'assetId',
    changeType: 'changeType',
    diff: 'diff',
    timestamp: 'timestamp'
  };

  export type AssetChangeScalarFieldEnum = (typeof AssetChangeScalarFieldEnum)[keyof typeof AssetChangeScalarFieldEnum]


  export const EvidenceTaskScalarFieldEnum: {
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

  export type EvidenceTaskScalarFieldEnum = (typeof EvidenceTaskScalarFieldEnum)[keyof typeof EvidenceTaskScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
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

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const EvidenceExportScalarFieldEnum: {
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

  export type EvidenceExportScalarFieldEnum = (typeof EvidenceExportScalarFieldEnum)[keyof typeof EvidenceExportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AuditFramework'
   */
  export type EnumAuditFrameworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditFramework'>
    


  /**
   * Reference to a field of type 'AuditFramework[]'
   */
  export type ListEnumAuditFrameworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditFramework[]'>
    


  /**
   * Reference to a field of type 'AuditType'
   */
  export type EnumAuditTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditType'>
    


  /**
   * Reference to a field of type 'AuditType[]'
   */
  export type ListEnumAuditTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditType[]'>
    


  /**
   * Reference to a field of type 'AuditStatus'
   */
  export type EnumAuditStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditStatus'>
    


  /**
   * Reference to a field of type 'AuditStatus[]'
   */
  export type ListEnumAuditStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditStatus[]'>
    


  /**
   * Reference to a field of type 'WizardStep'
   */
  export type EnumWizardStepFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WizardStep'>
    


  /**
   * Reference to a field of type 'WizardStep[]'
   */
  export type ListEnumWizardStepFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WizardStep[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'IntegrationProvider'
   */
  export type EnumIntegrationProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationProvider'>
    


  /**
   * Reference to a field of type 'IntegrationProvider[]'
   */
  export type ListEnumIntegrationProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationProvider[]'>
    


  /**
   * Reference to a field of type 'IntegrationStatus'
   */
  export type EnumIntegrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationStatus'>
    


  /**
   * Reference to a field of type 'IntegrationStatus[]'
   */
  export type ListEnumIntegrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationStatus[]'>
    


  /**
   * Reference to a field of type 'SyncStatus'
   */
  export type EnumSyncStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SyncStatus'>
    


  /**
   * Reference to a field of type 'SyncStatus[]'
   */
  export type ListEnumSyncStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SyncStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuditPlanWhereInput = {
    AND?: AuditPlanWhereInput | AuditPlanWhereInput[]
    OR?: AuditPlanWhereInput[]
    NOT?: AuditPlanWhereInput | AuditPlanWhereInput[]
    id?: StringFilter<"AuditPlan"> | string
    framework?: EnumAuditFrameworkFilter<"AuditPlan"> | $Enums.AuditFramework
    auditType?: EnumAuditTypeFilter<"AuditPlan"> | $Enums.AuditType
    startDate?: StringFilter<"AuditPlan"> | string
    endDate?: StringFilter<"AuditPlan"> | string
    status?: EnumAuditStatusFilter<"AuditPlan"> | $Enums.AuditStatus
    currentStep?: EnumWizardStepFilter<"AuditPlan"> | $Enums.WizardStep
    scope?: JsonNullableFilter<"AuditPlan">
    systems?: JsonNullableFilter<"AuditPlan">
    risks?: JsonNullableFilter<"AuditPlan">
    evidencePlan?: JsonNullableFilter<"AuditPlan">
    timeline?: JsonNullableFilter<"AuditPlan">
    tasks?: JsonNullableFilter<"AuditPlan">
    auditorPack?: JsonNullableFilter<"AuditPlan">
    createdAt?: DateTimeFilter<"AuditPlan"> | Date | string
    updatedAt?: DateTimeFilter<"AuditPlan"> | Date | string
    lastAiRefinementAt?: DateTimeNullableFilter<"AuditPlan"> | Date | string | null
    evidenceTasks?: EvidenceTaskListRelationFilter
  }

  export type AuditPlanOrderByWithRelationInput = {
    id?: SortOrder
    framework?: SortOrder
    auditType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    scope?: SortOrderInput | SortOrder
    systems?: SortOrderInput | SortOrder
    risks?: SortOrderInput | SortOrder
    evidencePlan?: SortOrderInput | SortOrder
    timeline?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    auditorPack?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastAiRefinementAt?: SortOrderInput | SortOrder
    evidenceTasks?: EvidenceTaskOrderByRelationAggregateInput
  }

  export type AuditPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditPlanWhereInput | AuditPlanWhereInput[]
    OR?: AuditPlanWhereInput[]
    NOT?: AuditPlanWhereInput | AuditPlanWhereInput[]
    framework?: EnumAuditFrameworkFilter<"AuditPlan"> | $Enums.AuditFramework
    auditType?: EnumAuditTypeFilter<"AuditPlan"> | $Enums.AuditType
    startDate?: StringFilter<"AuditPlan"> | string
    endDate?: StringFilter<"AuditPlan"> | string
    status?: EnumAuditStatusFilter<"AuditPlan"> | $Enums.AuditStatus
    currentStep?: EnumWizardStepFilter<"AuditPlan"> | $Enums.WizardStep
    scope?: JsonNullableFilter<"AuditPlan">
    systems?: JsonNullableFilter<"AuditPlan">
    risks?: JsonNullableFilter<"AuditPlan">
    evidencePlan?: JsonNullableFilter<"AuditPlan">
    timeline?: JsonNullableFilter<"AuditPlan">
    tasks?: JsonNullableFilter<"AuditPlan">
    auditorPack?: JsonNullableFilter<"AuditPlan">
    createdAt?: DateTimeFilter<"AuditPlan"> | Date | string
    updatedAt?: DateTimeFilter<"AuditPlan"> | Date | string
    lastAiRefinementAt?: DateTimeNullableFilter<"AuditPlan"> | Date | string | null
    evidenceTasks?: EvidenceTaskListRelationFilter
  }, "id">

  export type AuditPlanOrderByWithAggregationInput = {
    id?: SortOrder
    framework?: SortOrder
    auditType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    scope?: SortOrderInput | SortOrder
    systems?: SortOrderInput | SortOrder
    risks?: SortOrderInput | SortOrder
    evidencePlan?: SortOrderInput | SortOrder
    timeline?: SortOrderInput | SortOrder
    tasks?: SortOrderInput | SortOrder
    auditorPack?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastAiRefinementAt?: SortOrderInput | SortOrder
    _count?: AuditPlanCountOrderByAggregateInput
    _max?: AuditPlanMaxOrderByAggregateInput
    _min?: AuditPlanMinOrderByAggregateInput
  }

  export type AuditPlanScalarWhereWithAggregatesInput = {
    AND?: AuditPlanScalarWhereWithAggregatesInput | AuditPlanScalarWhereWithAggregatesInput[]
    OR?: AuditPlanScalarWhereWithAggregatesInput[]
    NOT?: AuditPlanScalarWhereWithAggregatesInput | AuditPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditPlan"> | string
    framework?: EnumAuditFrameworkWithAggregatesFilter<"AuditPlan"> | $Enums.AuditFramework
    auditType?: EnumAuditTypeWithAggregatesFilter<"AuditPlan"> | $Enums.AuditType
    startDate?: StringWithAggregatesFilter<"AuditPlan"> | string
    endDate?: StringWithAggregatesFilter<"AuditPlan"> | string
    status?: EnumAuditStatusWithAggregatesFilter<"AuditPlan"> | $Enums.AuditStatus
    currentStep?: EnumWizardStepWithAggregatesFilter<"AuditPlan"> | $Enums.WizardStep
    scope?: JsonNullableWithAggregatesFilter<"AuditPlan">
    systems?: JsonNullableWithAggregatesFilter<"AuditPlan">
    risks?: JsonNullableWithAggregatesFilter<"AuditPlan">
    evidencePlan?: JsonNullableWithAggregatesFilter<"AuditPlan">
    timeline?: JsonNullableWithAggregatesFilter<"AuditPlan">
    tasks?: JsonNullableWithAggregatesFilter<"AuditPlan">
    auditorPack?: JsonNullableWithAggregatesFilter<"AuditPlan">
    createdAt?: DateTimeWithAggregatesFilter<"AuditPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuditPlan"> | Date | string
    lastAiRefinementAt?: DateTimeNullableWithAggregatesFilter<"AuditPlan"> | Date | string | null
  }

  export type IntegrationWhereInput = {
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    id?: StringFilter<"Integration"> | string
    provider?: EnumIntegrationProviderFilter<"Integration"> | $Enums.IntegrationProvider
    displayName?: StringFilter<"Integration"> | string
    config?: JsonFilter<"Integration">
    status?: EnumIntegrationStatusFilter<"Integration"> | $Enums.IntegrationStatus
    healthStatus?: StringFilter<"Integration"> | string
    lastSyncAt?: DateTimeNullableFilter<"Integration"> | Date | string | null
    errorLogs?: StringNullableFilter<"Integration"> | string | null
    syncSchedule?: StringFilter<"Integration"> | string
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    syncRuns?: SyncRunListRelationFilter
    assets?: AssetListRelationFilter
  }

  export type IntegrationOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    config?: SortOrder
    status?: SortOrder
    healthStatus?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    errorLogs?: SortOrderInput | SortOrder
    syncSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncRuns?: SyncRunOrderByRelationAggregateInput
    assets?: AssetOrderByRelationAggregateInput
  }

  export type IntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    provider?: EnumIntegrationProviderFilter<"Integration"> | $Enums.IntegrationProvider
    displayName?: StringFilter<"Integration"> | string
    config?: JsonFilter<"Integration">
    status?: EnumIntegrationStatusFilter<"Integration"> | $Enums.IntegrationStatus
    healthStatus?: StringFilter<"Integration"> | string
    lastSyncAt?: DateTimeNullableFilter<"Integration"> | Date | string | null
    errorLogs?: StringNullableFilter<"Integration"> | string | null
    syncSchedule?: StringFilter<"Integration"> | string
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    syncRuns?: SyncRunListRelationFilter
    assets?: AssetListRelationFilter
  }, "id">

  export type IntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    config?: SortOrder
    status?: SortOrder
    healthStatus?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    errorLogs?: SortOrderInput | SortOrder
    syncSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationCountOrderByAggregateInput
    _max?: IntegrationMaxOrderByAggregateInput
    _min?: IntegrationMinOrderByAggregateInput
  }

  export type IntegrationScalarWhereWithAggregatesInput = {
    AND?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    OR?: IntegrationScalarWhereWithAggregatesInput[]
    NOT?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Integration"> | string
    provider?: EnumIntegrationProviderWithAggregatesFilter<"Integration"> | $Enums.IntegrationProvider
    displayName?: StringWithAggregatesFilter<"Integration"> | string
    config?: JsonWithAggregatesFilter<"Integration">
    status?: EnumIntegrationStatusWithAggregatesFilter<"Integration"> | $Enums.IntegrationStatus
    healthStatus?: StringWithAggregatesFilter<"Integration"> | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"Integration"> | Date | string | null
    errorLogs?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    syncSchedule?: StringWithAggregatesFilter<"Integration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
  }

  export type SyncRunWhereInput = {
    AND?: SyncRunWhereInput | SyncRunWhereInput[]
    OR?: SyncRunWhereInput[]
    NOT?: SyncRunWhereInput | SyncRunWhereInput[]
    id?: StringFilter<"SyncRun"> | string
    integrationId?: StringFilter<"SyncRun"> | string
    status?: EnumSyncStatusFilter<"SyncRun"> | $Enums.SyncStatus
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    endedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    assetsSynced?: IntFilter<"SyncRun"> | number
    errorMessage?: StringNullableFilter<"SyncRun"> | string | null
    rawPayloadPath?: StringNullableFilter<"SyncRun"> | string | null
    integration?: XOR<IntegrationScalarRelationFilter, IntegrationWhereInput>
  }

  export type SyncRunOrderByWithRelationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    assetsSynced?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    rawPayloadPath?: SortOrderInput | SortOrder
    integration?: IntegrationOrderByWithRelationInput
  }

  export type SyncRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncRunWhereInput | SyncRunWhereInput[]
    OR?: SyncRunWhereInput[]
    NOT?: SyncRunWhereInput | SyncRunWhereInput[]
    integrationId?: StringFilter<"SyncRun"> | string
    status?: EnumSyncStatusFilter<"SyncRun"> | $Enums.SyncStatus
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    endedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    assetsSynced?: IntFilter<"SyncRun"> | number
    errorMessage?: StringNullableFilter<"SyncRun"> | string | null
    rawPayloadPath?: StringNullableFilter<"SyncRun"> | string | null
    integration?: XOR<IntegrationScalarRelationFilter, IntegrationWhereInput>
  }, "id">

  export type SyncRunOrderByWithAggregationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    assetsSynced?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    rawPayloadPath?: SortOrderInput | SortOrder
    _count?: SyncRunCountOrderByAggregateInput
    _avg?: SyncRunAvgOrderByAggregateInput
    _max?: SyncRunMaxOrderByAggregateInput
    _min?: SyncRunMinOrderByAggregateInput
    _sum?: SyncRunSumOrderByAggregateInput
  }

  export type SyncRunScalarWhereWithAggregatesInput = {
    AND?: SyncRunScalarWhereWithAggregatesInput | SyncRunScalarWhereWithAggregatesInput[]
    OR?: SyncRunScalarWhereWithAggregatesInput[]
    NOT?: SyncRunScalarWhereWithAggregatesInput | SyncRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncRun"> | string
    integrationId?: StringWithAggregatesFilter<"SyncRun"> | string
    status?: EnumSyncStatusWithAggregatesFilter<"SyncRun"> | $Enums.SyncStatus
    startedAt?: DateTimeWithAggregatesFilter<"SyncRun"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"SyncRun"> | Date | string | null
    assetsSynced?: IntWithAggregatesFilter<"SyncRun"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"SyncRun"> | string | null
    rawPayloadPath?: StringNullableWithAggregatesFilter<"SyncRun"> | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    integrationId?: StringFilter<"Asset"> | string
    externalId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    provider?: StringFilter<"Asset"> | string
    owner?: StringNullableFilter<"Asset"> | string | null
    environment?: StringNullableFilter<"Asset"> | string | null
    dataClassification?: StringNullableFilter<"Asset"> | string | null
    encryptionStatus?: BoolFilter<"Asset"> | boolean
    encryptionSignals?: JsonNullableFilter<"Asset">
    status?: StringFilter<"Asset"> | string
    tags?: StringNullableListFilter<"Asset">
    rawPayload?: JsonNullableFilter<"Asset">
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    integration?: XOR<IntegrationScalarRelationFilter, IntegrationWhereInput>
    history?: AssetChangeListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    owner?: SortOrderInput | SortOrder
    environment?: SortOrderInput | SortOrder
    dataClassification?: SortOrderInput | SortOrder
    encryptionStatus?: SortOrder
    encryptionSignals?: SortOrderInput | SortOrder
    status?: SortOrder
    tags?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    integration?: IntegrationOrderByWithRelationInput
    history?: AssetChangeOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    integrationId_externalId?: AssetIntegrationIdExternalIdCompoundUniqueInput
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    integrationId?: StringFilter<"Asset"> | string
    externalId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    provider?: StringFilter<"Asset"> | string
    owner?: StringNullableFilter<"Asset"> | string | null
    environment?: StringNullableFilter<"Asset"> | string | null
    dataClassification?: StringNullableFilter<"Asset"> | string | null
    encryptionStatus?: BoolFilter<"Asset"> | boolean
    encryptionSignals?: JsonNullableFilter<"Asset">
    status?: StringFilter<"Asset"> | string
    tags?: StringNullableListFilter<"Asset">
    rawPayload?: JsonNullableFilter<"Asset">
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    integration?: XOR<IntegrationScalarRelationFilter, IntegrationWhereInput>
    history?: AssetChangeListRelationFilter
  }, "id" | "integrationId_externalId">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    owner?: SortOrderInput | SortOrder
    environment?: SortOrderInput | SortOrder
    dataClassification?: SortOrderInput | SortOrder
    encryptionStatus?: SortOrder
    encryptionSignals?: SortOrderInput | SortOrder
    status?: SortOrder
    tags?: SortOrder
    rawPayload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    integrationId?: StringWithAggregatesFilter<"Asset"> | string
    externalId?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    type?: StringWithAggregatesFilter<"Asset"> | string
    provider?: StringWithAggregatesFilter<"Asset"> | string
    owner?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    environment?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    dataClassification?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    encryptionStatus?: BoolWithAggregatesFilter<"Asset"> | boolean
    encryptionSignals?: JsonNullableWithAggregatesFilter<"Asset">
    status?: StringWithAggregatesFilter<"Asset"> | string
    tags?: StringNullableListFilter<"Asset">
    rawPayload?: JsonNullableWithAggregatesFilter<"Asset">
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type AssetChangeWhereInput = {
    AND?: AssetChangeWhereInput | AssetChangeWhereInput[]
    OR?: AssetChangeWhereInput[]
    NOT?: AssetChangeWhereInput | AssetChangeWhereInput[]
    id?: StringFilter<"AssetChange"> | string
    assetId?: StringFilter<"AssetChange"> | string
    changeType?: StringFilter<"AssetChange"> | string
    diff?: JsonFilter<"AssetChange">
    timestamp?: DateTimeFilter<"AssetChange"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }

  export type AssetChangeOrderByWithRelationInput = {
    id?: SortOrder
    assetId?: SortOrder
    changeType?: SortOrder
    diff?: SortOrder
    timestamp?: SortOrder
    asset?: AssetOrderByWithRelationInput
  }

  export type AssetChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetChangeWhereInput | AssetChangeWhereInput[]
    OR?: AssetChangeWhereInput[]
    NOT?: AssetChangeWhereInput | AssetChangeWhereInput[]
    assetId?: StringFilter<"AssetChange"> | string
    changeType?: StringFilter<"AssetChange"> | string
    diff?: JsonFilter<"AssetChange">
    timestamp?: DateTimeFilter<"AssetChange"> | Date | string
    asset?: XOR<AssetScalarRelationFilter, AssetWhereInput>
  }, "id">

  export type AssetChangeOrderByWithAggregationInput = {
    id?: SortOrder
    assetId?: SortOrder
    changeType?: SortOrder
    diff?: SortOrder
    timestamp?: SortOrder
    _count?: AssetChangeCountOrderByAggregateInput
    _max?: AssetChangeMaxOrderByAggregateInput
    _min?: AssetChangeMinOrderByAggregateInput
  }

  export type AssetChangeScalarWhereWithAggregatesInput = {
    AND?: AssetChangeScalarWhereWithAggregatesInput | AssetChangeScalarWhereWithAggregatesInput[]
    OR?: AssetChangeScalarWhereWithAggregatesInput[]
    NOT?: AssetChangeScalarWhereWithAggregatesInput | AssetChangeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetChange"> | string
    assetId?: StringWithAggregatesFilter<"AssetChange"> | string
    changeType?: StringWithAggregatesFilter<"AssetChange"> | string
    diff?: JsonWithAggregatesFilter<"AssetChange">
    timestamp?: DateTimeWithAggregatesFilter<"AssetChange"> | Date | string
  }

  export type EvidenceTaskWhereInput = {
    AND?: EvidenceTaskWhereInput | EvidenceTaskWhereInput[]
    OR?: EvidenceTaskWhereInput[]
    NOT?: EvidenceTaskWhereInput | EvidenceTaskWhereInput[]
    id?: StringFilter<"EvidenceTask"> | string
    name?: StringFilter<"EvidenceTask"> | string
    description?: StringNullableFilter<"EvidenceTask"> | string | null
    status?: StringFilter<"EvidenceTask"> | string
    assignee?: StringNullableFilter<"EvidenceTask"> | string | null
    department?: StringNullableFilter<"EvidenceTask"> | string | null
    framework?: StringNullableFilter<"EvidenceTask"> | string | null
    dueDate?: DateTimeNullableFilter<"EvidenceTask"> | Date | string | null
    auditPlanId?: StringNullableFilter<"EvidenceTask"> | string | null
    createdAt?: DateTimeFilter<"EvidenceTask"> | Date | string
    updatedAt?: DateTimeFilter<"EvidenceTask"> | Date | string
    auditPlan?: XOR<AuditPlanNullableScalarRelationFilter, AuditPlanWhereInput> | null
  }

  export type EvidenceTaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    assignee?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    framework?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    auditPlanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditPlan?: AuditPlanOrderByWithRelationInput
  }

  export type EvidenceTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvidenceTaskWhereInput | EvidenceTaskWhereInput[]
    OR?: EvidenceTaskWhereInput[]
    NOT?: EvidenceTaskWhereInput | EvidenceTaskWhereInput[]
    name?: StringFilter<"EvidenceTask"> | string
    description?: StringNullableFilter<"EvidenceTask"> | string | null
    status?: StringFilter<"EvidenceTask"> | string
    assignee?: StringNullableFilter<"EvidenceTask"> | string | null
    department?: StringNullableFilter<"EvidenceTask"> | string | null
    framework?: StringNullableFilter<"EvidenceTask"> | string | null
    dueDate?: DateTimeNullableFilter<"EvidenceTask"> | Date | string | null
    auditPlanId?: StringNullableFilter<"EvidenceTask"> | string | null
    createdAt?: DateTimeFilter<"EvidenceTask"> | Date | string
    updatedAt?: DateTimeFilter<"EvidenceTask"> | Date | string
    auditPlan?: XOR<AuditPlanNullableScalarRelationFilter, AuditPlanWhereInput> | null
  }, "id">

  export type EvidenceTaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    assignee?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    framework?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    auditPlanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EvidenceTaskCountOrderByAggregateInput
    _max?: EvidenceTaskMaxOrderByAggregateInput
    _min?: EvidenceTaskMinOrderByAggregateInput
  }

  export type EvidenceTaskScalarWhereWithAggregatesInput = {
    AND?: EvidenceTaskScalarWhereWithAggregatesInput | EvidenceTaskScalarWhereWithAggregatesInput[]
    OR?: EvidenceTaskScalarWhereWithAggregatesInput[]
    NOT?: EvidenceTaskScalarWhereWithAggregatesInput | EvidenceTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvidenceTask"> | string
    name?: StringWithAggregatesFilter<"EvidenceTask"> | string
    description?: StringNullableWithAggregatesFilter<"EvidenceTask"> | string | null
    status?: StringWithAggregatesFilter<"EvidenceTask"> | string
    assignee?: StringNullableWithAggregatesFilter<"EvidenceTask"> | string | null
    department?: StringNullableWithAggregatesFilter<"EvidenceTask"> | string | null
    framework?: StringNullableWithAggregatesFilter<"EvidenceTask"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"EvidenceTask"> | Date | string | null
    auditPlanId?: StringNullableWithAggregatesFilter<"EvidenceTask"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EvidenceTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EvidenceTask"> | Date | string
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: StringFilter<"Policy"> | string
    title?: StringFilter<"Policy"> | string
    content?: StringFilter<"Policy"> | string
    category?: StringFilter<"Policy"> | string
    status?: StringFilter<"Policy"> | string
    version?: IntFilter<"Policy"> | number
    owner?: StringNullableFilter<"Policy"> | string | null
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    owner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    title?: StringFilter<"Policy"> | string
    content?: StringFilter<"Policy"> | string
    category?: StringFilter<"Policy"> | string
    status?: StringFilter<"Policy"> | string
    version?: IntFilter<"Policy"> | number
    owner?: StringNullableFilter<"Policy"> | string | null
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }, "id">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    owner?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Policy"> | string
    title?: StringWithAggregatesFilter<"Policy"> | string
    content?: StringWithAggregatesFilter<"Policy"> | string
    category?: StringWithAggregatesFilter<"Policy"> | string
    status?: StringWithAggregatesFilter<"Policy"> | string
    version?: IntWithAggregatesFilter<"Policy"> | number
    owner?: StringNullableWithAggregatesFilter<"Policy"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type EvidenceExportWhereInput = {
    AND?: EvidenceExportWhereInput | EvidenceExportWhereInput[]
    OR?: EvidenceExportWhereInput[]
    NOT?: EvidenceExportWhereInput | EvidenceExportWhereInput[]
    id?: StringFilter<"EvidenceExport"> | string
    name?: StringFilter<"EvidenceExport"> | string
    framework?: EnumAuditFrameworkFilter<"EvidenceExport"> | $Enums.AuditFramework
    periodStart?: DateTimeFilter<"EvidenceExport"> | Date | string
    periodEnd?: DateTimeFilter<"EvidenceExport"> | Date | string
    fileUrl?: StringFilter<"EvidenceExport"> | string
    summary?: StringNullableFilter<"EvidenceExport"> | string | null
    artifactIndex?: JsonNullableFilter<"EvidenceExport">
    createdAt?: DateTimeFilter<"EvidenceExport"> | Date | string
  }

  export type EvidenceExportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    framework?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    summary?: SortOrderInput | SortOrder
    artifactIndex?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceExportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvidenceExportWhereInput | EvidenceExportWhereInput[]
    OR?: EvidenceExportWhereInput[]
    NOT?: EvidenceExportWhereInput | EvidenceExportWhereInput[]
    name?: StringFilter<"EvidenceExport"> | string
    framework?: EnumAuditFrameworkFilter<"EvidenceExport"> | $Enums.AuditFramework
    periodStart?: DateTimeFilter<"EvidenceExport"> | Date | string
    periodEnd?: DateTimeFilter<"EvidenceExport"> | Date | string
    fileUrl?: StringFilter<"EvidenceExport"> | string
    summary?: StringNullableFilter<"EvidenceExport"> | string | null
    artifactIndex?: JsonNullableFilter<"EvidenceExport">
    createdAt?: DateTimeFilter<"EvidenceExport"> | Date | string
  }, "id">

  export type EvidenceExportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    framework?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    summary?: SortOrderInput | SortOrder
    artifactIndex?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EvidenceExportCountOrderByAggregateInput
    _max?: EvidenceExportMaxOrderByAggregateInput
    _min?: EvidenceExportMinOrderByAggregateInput
  }

  export type EvidenceExportScalarWhereWithAggregatesInput = {
    AND?: EvidenceExportScalarWhereWithAggregatesInput | EvidenceExportScalarWhereWithAggregatesInput[]
    OR?: EvidenceExportScalarWhereWithAggregatesInput[]
    NOT?: EvidenceExportScalarWhereWithAggregatesInput | EvidenceExportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvidenceExport"> | string
    name?: StringWithAggregatesFilter<"EvidenceExport"> | string
    framework?: EnumAuditFrameworkWithAggregatesFilter<"EvidenceExport"> | $Enums.AuditFramework
    periodStart?: DateTimeWithAggregatesFilter<"EvidenceExport"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"EvidenceExport"> | Date | string
    fileUrl?: StringWithAggregatesFilter<"EvidenceExport"> | string
    summary?: StringNullableWithAggregatesFilter<"EvidenceExport"> | string | null
    artifactIndex?: JsonNullableWithAggregatesFilter<"EvidenceExport">
    createdAt?: DateTimeWithAggregatesFilter<"EvidenceExport"> | Date | string
  }

  export type AuditPlanCreateInput = {
    id?: string
    framework?: $Enums.AuditFramework
    auditType?: $Enums.AuditType
    startDate: string
    endDate: string
    status?: $Enums.AuditStatus
    currentStep?: $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAiRefinementAt?: Date | string | null
    evidenceTasks?: EvidenceTaskCreateNestedManyWithoutAuditPlanInput
  }

  export type AuditPlanUncheckedCreateInput = {
    id?: string
    framework?: $Enums.AuditFramework
    auditType?: $Enums.AuditType
    startDate: string
    endDate: string
    status?: $Enums.AuditStatus
    currentStep?: $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAiRefinementAt?: Date | string | null
    evidenceTasks?: EvidenceTaskUncheckedCreateNestedManyWithoutAuditPlanInput
  }

  export type AuditPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    auditType?: EnumAuditTypeFieldUpdateOperationsInput | $Enums.AuditType
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    status?: EnumAuditStatusFieldUpdateOperationsInput | $Enums.AuditStatus
    currentStep?: EnumWizardStepFieldUpdateOperationsInput | $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAiRefinementAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceTasks?: EvidenceTaskUpdateManyWithoutAuditPlanNestedInput
  }

  export type AuditPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    auditType?: EnumAuditTypeFieldUpdateOperationsInput | $Enums.AuditType
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    status?: EnumAuditStatusFieldUpdateOperationsInput | $Enums.AuditStatus
    currentStep?: EnumWizardStepFieldUpdateOperationsInput | $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAiRefinementAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evidenceTasks?: EvidenceTaskUncheckedUpdateManyWithoutAuditPlanNestedInput
  }

  export type AuditPlanCreateManyInput = {
    id?: string
    framework?: $Enums.AuditFramework
    auditType?: $Enums.AuditType
    startDate: string
    endDate: string
    status?: $Enums.AuditStatus
    currentStep?: $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAiRefinementAt?: Date | string | null
  }

  export type AuditPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    auditType?: EnumAuditTypeFieldUpdateOperationsInput | $Enums.AuditType
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    status?: EnumAuditStatusFieldUpdateOperationsInput | $Enums.AuditStatus
    currentStep?: EnumWizardStepFieldUpdateOperationsInput | $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAiRefinementAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    auditType?: EnumAuditTypeFieldUpdateOperationsInput | $Enums.AuditType
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    status?: EnumAuditStatusFieldUpdateOperationsInput | $Enums.AuditStatus
    currentStep?: EnumWizardStepFieldUpdateOperationsInput | $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAiRefinementAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntegrationCreateInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    syncRuns?: SyncRunCreateNestedManyWithoutIntegrationInput
    assets?: AssetCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUncheckedCreateInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    syncRuns?: SyncRunUncheckedCreateNestedManyWithoutIntegrationInput
    assets?: AssetUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncRuns?: SyncRunUpdateManyWithoutIntegrationNestedInput
    assets?: AssetUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncRuns?: SyncRunUncheckedUpdateManyWithoutIntegrationNestedInput
    assets?: AssetUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationCreateManyInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncRunCreateInput = {
    id?: string
    status: $Enums.SyncStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    assetsSynced?: number
    errorMessage?: string | null
    rawPayloadPath?: string | null
    integration: IntegrationCreateNestedOneWithoutSyncRunsInput
  }

  export type SyncRunUncheckedCreateInput = {
    id?: string
    integrationId: string
    status: $Enums.SyncStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    assetsSynced?: number
    errorMessage?: string | null
    rawPayloadPath?: string | null
  }

  export type SyncRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
    integration?: IntegrationUpdateOneRequiredWithoutSyncRunsNestedInput
  }

  export type SyncRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunCreateManyInput = {
    id?: string
    integrationId: string
    status: $Enums.SyncStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    assetsSynced?: number
    errorMessage?: string | null
    rawPayloadPath?: string | null
  }

  export type SyncRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateInput = {
    id?: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationCreateNestedOneWithoutAssetsInput
    history?: AssetChangeCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    integrationId: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: AssetChangeUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationUpdateOneRequiredWithoutAssetsNestedInput
    history?: AssetChangeUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: AssetChangeUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: string
    integrationId: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetChangeCreateInput = {
    id?: string
    changeType: string
    diff: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    asset: AssetCreateNestedOneWithoutHistoryInput
  }

  export type AssetChangeUncheckedCreateInput = {
    id?: string
    assetId: string
    changeType: string
    diff: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AssetChangeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type AssetChangeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetChangeCreateManyInput = {
    id?: string
    assetId: string
    changeType: string
    diff: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AssetChangeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetChangeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetId?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceTaskCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    assignee?: string | null
    department?: string | null
    framework?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditPlan?: AuditPlanCreateNestedOneWithoutEvidenceTasksInput
  }

  export type EvidenceTaskUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    assignee?: string | null
    department?: string | null
    framework?: string | null
    dueDate?: Date | string | null
    auditPlanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvidenceTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditPlan?: AuditPlanUpdateOneWithoutEvidenceTasksNestedInput
  }

  export type EvidenceTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceTaskCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    assignee?: string | null
    department?: string | null
    framework?: string | null
    dueDate?: Date | string | null
    auditPlanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvidenceTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateInput = {
    id?: string
    title: string
    content: string
    category?: string
    status?: string
    version?: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    category?: string
    status?: string
    version?: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateManyInput = {
    id?: string
    title: string
    content: string
    category?: string
    status?: string
    version?: number
    owner?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceExportCreateInput = {
    id?: string
    name: string
    framework: $Enums.AuditFramework
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl: string
    summary?: string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvidenceExportUncheckedCreateInput = {
    id?: string
    name: string
    framework: $Enums.AuditFramework
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl: string
    summary?: string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvidenceExportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceExportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceExportCreateManyInput = {
    id?: string
    name: string
    framework: $Enums.AuditFramework
    periodStart: Date | string
    periodEnd: Date | string
    fileUrl: string
    summary?: string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvidenceExportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceExportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    artifactIndex?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAuditFrameworkFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditFramework | EnumAuditFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditFrameworkFilter<$PrismaModel> | $Enums.AuditFramework
  }

  export type EnumAuditTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditType | EnumAuditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTypeFilter<$PrismaModel> | $Enums.AuditType
  }

  export type EnumAuditStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditStatus | EnumAuditStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditStatusFilter<$PrismaModel> | $Enums.AuditStatus
  }

  export type EnumWizardStepFilter<$PrismaModel = never> = {
    equals?: $Enums.WizardStep | EnumWizardStepFieldRefInput<$PrismaModel>
    in?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    not?: NestedEnumWizardStepFilter<$PrismaModel> | $Enums.WizardStep
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EvidenceTaskListRelationFilter = {
    every?: EvidenceTaskWhereInput
    some?: EvidenceTaskWhereInput
    none?: EvidenceTaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EvidenceTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditPlanCountOrderByAggregateInput = {
    id?: SortOrder
    framework?: SortOrder
    auditType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    scope?: SortOrder
    systems?: SortOrder
    risks?: SortOrder
    evidencePlan?: SortOrder
    timeline?: SortOrder
    tasks?: SortOrder
    auditorPack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastAiRefinementAt?: SortOrder
  }

  export type AuditPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    framework?: SortOrder
    auditType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastAiRefinementAt?: SortOrder
  }

  export type AuditPlanMinOrderByAggregateInput = {
    id?: SortOrder
    framework?: SortOrder
    auditType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastAiRefinementAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAuditFrameworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditFramework | EnumAuditFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditFrameworkWithAggregatesFilter<$PrismaModel> | $Enums.AuditFramework
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditFrameworkFilter<$PrismaModel>
    _max?: NestedEnumAuditFrameworkFilter<$PrismaModel>
  }

  export type EnumAuditTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditType | EnumAuditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditTypeFilter<$PrismaModel>
  }

  export type EnumAuditStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditStatus | EnumAuditStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuditStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditStatusFilter<$PrismaModel>
    _max?: NestedEnumAuditStatusFilter<$PrismaModel>
  }

  export type EnumWizardStepWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WizardStep | EnumWizardStepFieldRefInput<$PrismaModel>
    in?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    not?: NestedEnumWizardStepWithAggregatesFilter<$PrismaModel> | $Enums.WizardStep
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWizardStepFilter<$PrismaModel>
    _max?: NestedEnumWizardStepFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumIntegrationProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderFilter<$PrismaModel> | $Enums.IntegrationProvider
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumIntegrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationStatus | EnumIntegrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationStatusFilter<$PrismaModel> | $Enums.IntegrationStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SyncRunListRelationFilter = {
    every?: SyncRunWhereInput
    some?: SyncRunWhereInput
    none?: SyncRunWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type SyncRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    config?: SortOrder
    status?: SortOrder
    healthStatus?: SortOrder
    lastSyncAt?: SortOrder
    errorLogs?: SortOrder
    syncSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    status?: SortOrder
    healthStatus?: SortOrder
    lastSyncAt?: SortOrder
    errorLogs?: SortOrder
    syncSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    displayName?: SortOrder
    status?: SortOrder
    healthStatus?: SortOrder
    lastSyncAt?: SortOrder
    errorLogs?: SortOrder
    syncSchedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIntegrationProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationProviderFilter<$PrismaModel>
    _max?: NestedEnumIntegrationProviderFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumIntegrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationStatus | EnumIntegrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationStatusFilter<$PrismaModel>
    _max?: NestedEnumIntegrationStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSyncStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusFilter<$PrismaModel> | $Enums.SyncStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntegrationScalarRelationFilter = {
    is?: IntegrationWhereInput
    isNot?: IntegrationWhereInput
  }

  export type SyncRunCountOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    assetsSynced?: SortOrder
    errorMessage?: SortOrder
    rawPayloadPath?: SortOrder
  }

  export type SyncRunAvgOrderByAggregateInput = {
    assetsSynced?: SortOrder
  }

  export type SyncRunMaxOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    assetsSynced?: SortOrder
    errorMessage?: SortOrder
    rawPayloadPath?: SortOrder
  }

  export type SyncRunMinOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    assetsSynced?: SortOrder
    errorMessage?: SortOrder
    rawPayloadPath?: SortOrder
  }

  export type SyncRunSumOrderByAggregateInput = {
    assetsSynced?: SortOrder
  }

  export type EnumSyncStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusWithAggregatesFilter<$PrismaModel> | $Enums.SyncStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSyncStatusFilter<$PrismaModel>
    _max?: NestedEnumSyncStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AssetChangeListRelationFilter = {
    every?: AssetChangeWhereInput
    some?: AssetChangeWhereInput
    none?: AssetChangeWhereInput
  }

  export type AssetChangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetIntegrationIdExternalIdCompoundUniqueInput = {
    integrationId: string
    externalId: string
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    owner?: SortOrder
    environment?: SortOrder
    dataClassification?: SortOrder
    encryptionStatus?: SortOrder
    encryptionSignals?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    owner?: SortOrder
    environment?: SortOrder
    dataClassification?: SortOrder
    encryptionStatus?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    owner?: SortOrder
    environment?: SortOrder
    dataClassification?: SortOrder
    encryptionStatus?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AssetScalarRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type AssetChangeCountOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    changeType?: SortOrder
    diff?: SortOrder
    timestamp?: SortOrder
  }

  export type AssetChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    changeType?: SortOrder
    timestamp?: SortOrder
  }

  export type AssetChangeMinOrderByAggregateInput = {
    id?: SortOrder
    assetId?: SortOrder
    changeType?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditPlanNullableScalarRelationFilter = {
    is?: AuditPlanWhereInput | null
    isNot?: AuditPlanWhereInput | null
  }

  export type EvidenceTaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    assignee?: SortOrder
    department?: SortOrder
    framework?: SortOrder
    dueDate?: SortOrder
    auditPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvidenceTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    assignee?: SortOrder
    department?: SortOrder
    framework?: SortOrder
    dueDate?: SortOrder
    auditPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvidenceTaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    assignee?: SortOrder
    department?: SortOrder
    framework?: SortOrder
    dueDate?: SortOrder
    auditPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type EvidenceExportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    framework?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    summary?: SortOrder
    artifactIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceExportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    framework?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceExportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    framework?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    fileUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceTaskCreateNestedManyWithoutAuditPlanInput = {
    create?: XOR<EvidenceTaskCreateWithoutAuditPlanInput, EvidenceTaskUncheckedCreateWithoutAuditPlanInput> | EvidenceTaskCreateWithoutAuditPlanInput[] | EvidenceTaskUncheckedCreateWithoutAuditPlanInput[]
    connectOrCreate?: EvidenceTaskCreateOrConnectWithoutAuditPlanInput | EvidenceTaskCreateOrConnectWithoutAuditPlanInput[]
    createMany?: EvidenceTaskCreateManyAuditPlanInputEnvelope
    connect?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
  }

  export type EvidenceTaskUncheckedCreateNestedManyWithoutAuditPlanInput = {
    create?: XOR<EvidenceTaskCreateWithoutAuditPlanInput, EvidenceTaskUncheckedCreateWithoutAuditPlanInput> | EvidenceTaskCreateWithoutAuditPlanInput[] | EvidenceTaskUncheckedCreateWithoutAuditPlanInput[]
    connectOrCreate?: EvidenceTaskCreateOrConnectWithoutAuditPlanInput | EvidenceTaskCreateOrConnectWithoutAuditPlanInput[]
    createMany?: EvidenceTaskCreateManyAuditPlanInputEnvelope
    connect?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAuditFrameworkFieldUpdateOperationsInput = {
    set?: $Enums.AuditFramework
  }

  export type EnumAuditTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditType
  }

  export type EnumAuditStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuditStatus
  }

  export type EnumWizardStepFieldUpdateOperationsInput = {
    set?: $Enums.WizardStep
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EvidenceTaskUpdateManyWithoutAuditPlanNestedInput = {
    create?: XOR<EvidenceTaskCreateWithoutAuditPlanInput, EvidenceTaskUncheckedCreateWithoutAuditPlanInput> | EvidenceTaskCreateWithoutAuditPlanInput[] | EvidenceTaskUncheckedCreateWithoutAuditPlanInput[]
    connectOrCreate?: EvidenceTaskCreateOrConnectWithoutAuditPlanInput | EvidenceTaskCreateOrConnectWithoutAuditPlanInput[]
    upsert?: EvidenceTaskUpsertWithWhereUniqueWithoutAuditPlanInput | EvidenceTaskUpsertWithWhereUniqueWithoutAuditPlanInput[]
    createMany?: EvidenceTaskCreateManyAuditPlanInputEnvelope
    set?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    disconnect?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    delete?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    connect?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    update?: EvidenceTaskUpdateWithWhereUniqueWithoutAuditPlanInput | EvidenceTaskUpdateWithWhereUniqueWithoutAuditPlanInput[]
    updateMany?: EvidenceTaskUpdateManyWithWhereWithoutAuditPlanInput | EvidenceTaskUpdateManyWithWhereWithoutAuditPlanInput[]
    deleteMany?: EvidenceTaskScalarWhereInput | EvidenceTaskScalarWhereInput[]
  }

  export type EvidenceTaskUncheckedUpdateManyWithoutAuditPlanNestedInput = {
    create?: XOR<EvidenceTaskCreateWithoutAuditPlanInput, EvidenceTaskUncheckedCreateWithoutAuditPlanInput> | EvidenceTaskCreateWithoutAuditPlanInput[] | EvidenceTaskUncheckedCreateWithoutAuditPlanInput[]
    connectOrCreate?: EvidenceTaskCreateOrConnectWithoutAuditPlanInput | EvidenceTaskCreateOrConnectWithoutAuditPlanInput[]
    upsert?: EvidenceTaskUpsertWithWhereUniqueWithoutAuditPlanInput | EvidenceTaskUpsertWithWhereUniqueWithoutAuditPlanInput[]
    createMany?: EvidenceTaskCreateManyAuditPlanInputEnvelope
    set?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    disconnect?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    delete?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    connect?: EvidenceTaskWhereUniqueInput | EvidenceTaskWhereUniqueInput[]
    update?: EvidenceTaskUpdateWithWhereUniqueWithoutAuditPlanInput | EvidenceTaskUpdateWithWhereUniqueWithoutAuditPlanInput[]
    updateMany?: EvidenceTaskUpdateManyWithWhereWithoutAuditPlanInput | EvidenceTaskUpdateManyWithWhereWithoutAuditPlanInput[]
    deleteMany?: EvidenceTaskScalarWhereInput | EvidenceTaskScalarWhereInput[]
  }

  export type SyncRunCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<SyncRunCreateWithoutIntegrationInput, SyncRunUncheckedCreateWithoutIntegrationInput> | SyncRunCreateWithoutIntegrationInput[] | SyncRunUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutIntegrationInput | SyncRunCreateOrConnectWithoutIntegrationInput[]
    createMany?: SyncRunCreateManyIntegrationInputEnvelope
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
  }

  export type AssetCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<AssetCreateWithoutIntegrationInput, AssetUncheckedCreateWithoutIntegrationInput> | AssetCreateWithoutIntegrationInput[] | AssetUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutIntegrationInput | AssetCreateOrConnectWithoutIntegrationInput[]
    createMany?: AssetCreateManyIntegrationInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type SyncRunUncheckedCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<SyncRunCreateWithoutIntegrationInput, SyncRunUncheckedCreateWithoutIntegrationInput> | SyncRunCreateWithoutIntegrationInput[] | SyncRunUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutIntegrationInput | SyncRunCreateOrConnectWithoutIntegrationInput[]
    createMany?: SyncRunCreateManyIntegrationInputEnvelope
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<AssetCreateWithoutIntegrationInput, AssetUncheckedCreateWithoutIntegrationInput> | AssetCreateWithoutIntegrationInput[] | AssetUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutIntegrationInput | AssetCreateOrConnectWithoutIntegrationInput[]
    createMany?: AssetCreateManyIntegrationInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type EnumIntegrationProviderFieldUpdateOperationsInput = {
    set?: $Enums.IntegrationProvider
  }

  export type EnumIntegrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.IntegrationStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SyncRunUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<SyncRunCreateWithoutIntegrationInput, SyncRunUncheckedCreateWithoutIntegrationInput> | SyncRunCreateWithoutIntegrationInput[] | SyncRunUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutIntegrationInput | SyncRunCreateOrConnectWithoutIntegrationInput[]
    upsert?: SyncRunUpsertWithWhereUniqueWithoutIntegrationInput | SyncRunUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: SyncRunCreateManyIntegrationInputEnvelope
    set?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    disconnect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    delete?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    update?: SyncRunUpdateWithWhereUniqueWithoutIntegrationInput | SyncRunUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: SyncRunUpdateManyWithWhereWithoutIntegrationInput | SyncRunUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
  }

  export type AssetUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<AssetCreateWithoutIntegrationInput, AssetUncheckedCreateWithoutIntegrationInput> | AssetCreateWithoutIntegrationInput[] | AssetUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutIntegrationInput | AssetCreateOrConnectWithoutIntegrationInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutIntegrationInput | AssetUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: AssetCreateManyIntegrationInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutIntegrationInput | AssetUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutIntegrationInput | AssetUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type SyncRunUncheckedUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<SyncRunCreateWithoutIntegrationInput, SyncRunUncheckedCreateWithoutIntegrationInput> | SyncRunCreateWithoutIntegrationInput[] | SyncRunUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: SyncRunCreateOrConnectWithoutIntegrationInput | SyncRunCreateOrConnectWithoutIntegrationInput[]
    upsert?: SyncRunUpsertWithWhereUniqueWithoutIntegrationInput | SyncRunUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: SyncRunCreateManyIntegrationInputEnvelope
    set?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    disconnect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    delete?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    connect?: SyncRunWhereUniqueInput | SyncRunWhereUniqueInput[]
    update?: SyncRunUpdateWithWhereUniqueWithoutIntegrationInput | SyncRunUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: SyncRunUpdateManyWithWhereWithoutIntegrationInput | SyncRunUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<AssetCreateWithoutIntegrationInput, AssetUncheckedCreateWithoutIntegrationInput> | AssetCreateWithoutIntegrationInput[] | AssetUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutIntegrationInput | AssetCreateOrConnectWithoutIntegrationInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutIntegrationInput | AssetUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: AssetCreateManyIntegrationInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutIntegrationInput | AssetUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutIntegrationInput | AssetUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type IntegrationCreateNestedOneWithoutSyncRunsInput = {
    create?: XOR<IntegrationCreateWithoutSyncRunsInput, IntegrationUncheckedCreateWithoutSyncRunsInput>
    connectOrCreate?: IntegrationCreateOrConnectWithoutSyncRunsInput
    connect?: IntegrationWhereUniqueInput
  }

  export type EnumSyncStatusFieldUpdateOperationsInput = {
    set?: $Enums.SyncStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntegrationUpdateOneRequiredWithoutSyncRunsNestedInput = {
    create?: XOR<IntegrationCreateWithoutSyncRunsInput, IntegrationUncheckedCreateWithoutSyncRunsInput>
    connectOrCreate?: IntegrationCreateOrConnectWithoutSyncRunsInput
    upsert?: IntegrationUpsertWithoutSyncRunsInput
    connect?: IntegrationWhereUniqueInput
    update?: XOR<XOR<IntegrationUpdateToOneWithWhereWithoutSyncRunsInput, IntegrationUpdateWithoutSyncRunsInput>, IntegrationUncheckedUpdateWithoutSyncRunsInput>
  }

  export type AssetCreatetagsInput = {
    set: string[]
  }

  export type IntegrationCreateNestedOneWithoutAssetsInput = {
    create?: XOR<IntegrationCreateWithoutAssetsInput, IntegrationUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: IntegrationCreateOrConnectWithoutAssetsInput
    connect?: IntegrationWhereUniqueInput
  }

  export type AssetChangeCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetChangeCreateWithoutAssetInput, AssetChangeUncheckedCreateWithoutAssetInput> | AssetChangeCreateWithoutAssetInput[] | AssetChangeUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetChangeCreateOrConnectWithoutAssetInput | AssetChangeCreateOrConnectWithoutAssetInput[]
    createMany?: AssetChangeCreateManyAssetInputEnvelope
    connect?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
  }

  export type AssetChangeUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<AssetChangeCreateWithoutAssetInput, AssetChangeUncheckedCreateWithoutAssetInput> | AssetChangeCreateWithoutAssetInput[] | AssetChangeUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetChangeCreateOrConnectWithoutAssetInput | AssetChangeCreateOrConnectWithoutAssetInput[]
    createMany?: AssetChangeCreateManyAssetInputEnvelope
    connect?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssetUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntegrationUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<IntegrationCreateWithoutAssetsInput, IntegrationUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: IntegrationCreateOrConnectWithoutAssetsInput
    upsert?: IntegrationUpsertWithoutAssetsInput
    connect?: IntegrationWhereUniqueInput
    update?: XOR<XOR<IntegrationUpdateToOneWithWhereWithoutAssetsInput, IntegrationUpdateWithoutAssetsInput>, IntegrationUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetChangeUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetChangeCreateWithoutAssetInput, AssetChangeUncheckedCreateWithoutAssetInput> | AssetChangeCreateWithoutAssetInput[] | AssetChangeUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetChangeCreateOrConnectWithoutAssetInput | AssetChangeCreateOrConnectWithoutAssetInput[]
    upsert?: AssetChangeUpsertWithWhereUniqueWithoutAssetInput | AssetChangeUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetChangeCreateManyAssetInputEnvelope
    set?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    disconnect?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    delete?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    connect?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    update?: AssetChangeUpdateWithWhereUniqueWithoutAssetInput | AssetChangeUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetChangeUpdateManyWithWhereWithoutAssetInput | AssetChangeUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetChangeScalarWhereInput | AssetChangeScalarWhereInput[]
  }

  export type AssetChangeUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<AssetChangeCreateWithoutAssetInput, AssetChangeUncheckedCreateWithoutAssetInput> | AssetChangeCreateWithoutAssetInput[] | AssetChangeUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: AssetChangeCreateOrConnectWithoutAssetInput | AssetChangeCreateOrConnectWithoutAssetInput[]
    upsert?: AssetChangeUpsertWithWhereUniqueWithoutAssetInput | AssetChangeUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: AssetChangeCreateManyAssetInputEnvelope
    set?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    disconnect?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    delete?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    connect?: AssetChangeWhereUniqueInput | AssetChangeWhereUniqueInput[]
    update?: AssetChangeUpdateWithWhereUniqueWithoutAssetInput | AssetChangeUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: AssetChangeUpdateManyWithWhereWithoutAssetInput | AssetChangeUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: AssetChangeScalarWhereInput | AssetChangeScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutHistoryInput = {
    create?: XOR<AssetCreateWithoutHistoryInput, AssetUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHistoryInput
    connect?: AssetWhereUniqueInput
  }

  export type AssetUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<AssetCreateWithoutHistoryInput, AssetUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AssetCreateOrConnectWithoutHistoryInput
    upsert?: AssetUpsertWithoutHistoryInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutHistoryInput, AssetUpdateWithoutHistoryInput>, AssetUncheckedUpdateWithoutHistoryInput>
  }

  export type AuditPlanCreateNestedOneWithoutEvidenceTasksInput = {
    create?: XOR<AuditPlanCreateWithoutEvidenceTasksInput, AuditPlanUncheckedCreateWithoutEvidenceTasksInput>
    connectOrCreate?: AuditPlanCreateOrConnectWithoutEvidenceTasksInput
    connect?: AuditPlanWhereUniqueInput
  }

  export type AuditPlanUpdateOneWithoutEvidenceTasksNestedInput = {
    create?: XOR<AuditPlanCreateWithoutEvidenceTasksInput, AuditPlanUncheckedCreateWithoutEvidenceTasksInput>
    connectOrCreate?: AuditPlanCreateOrConnectWithoutEvidenceTasksInput
    upsert?: AuditPlanUpsertWithoutEvidenceTasksInput
    disconnect?: AuditPlanWhereInput | boolean
    delete?: AuditPlanWhereInput | boolean
    connect?: AuditPlanWhereUniqueInput
    update?: XOR<XOR<AuditPlanUpdateToOneWithWhereWithoutEvidenceTasksInput, AuditPlanUpdateWithoutEvidenceTasksInput>, AuditPlanUncheckedUpdateWithoutEvidenceTasksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAuditFrameworkFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditFramework | EnumAuditFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditFrameworkFilter<$PrismaModel> | $Enums.AuditFramework
  }

  export type NestedEnumAuditTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditType | EnumAuditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTypeFilter<$PrismaModel> | $Enums.AuditType
  }

  export type NestedEnumAuditStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditStatus | EnumAuditStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditStatusFilter<$PrismaModel> | $Enums.AuditStatus
  }

  export type NestedEnumWizardStepFilter<$PrismaModel = never> = {
    equals?: $Enums.WizardStep | EnumWizardStepFieldRefInput<$PrismaModel>
    in?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    not?: NestedEnumWizardStepFilter<$PrismaModel> | $Enums.WizardStep
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAuditFrameworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditFramework | EnumAuditFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditFramework[] | ListEnumAuditFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditFrameworkWithAggregatesFilter<$PrismaModel> | $Enums.AuditFramework
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditFrameworkFilter<$PrismaModel>
    _max?: NestedEnumAuditFrameworkFilter<$PrismaModel>
  }

  export type NestedEnumAuditTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditType | EnumAuditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditType[] | ListEnumAuditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuditStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditStatus | EnumAuditStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditStatus[] | ListEnumAuditStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuditStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditStatusFilter<$PrismaModel>
    _max?: NestedEnumAuditStatusFilter<$PrismaModel>
  }

  export type NestedEnumWizardStepWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WizardStep | EnumWizardStepFieldRefInput<$PrismaModel>
    in?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    notIn?: $Enums.WizardStep[] | ListEnumWizardStepFieldRefInput<$PrismaModel>
    not?: NestedEnumWizardStepWithAggregatesFilter<$PrismaModel> | $Enums.WizardStep
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWizardStepFilter<$PrismaModel>
    _max?: NestedEnumWizardStepFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumIntegrationProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderFilter<$PrismaModel> | $Enums.IntegrationProvider
  }

  export type NestedEnumIntegrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationStatus | EnumIntegrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationStatusFilter<$PrismaModel> | $Enums.IntegrationStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumIntegrationProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationProvider | EnumIntegrationProviderFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationProvider[] | ListEnumIntegrationProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationProviderWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationProviderFilter<$PrismaModel>
    _max?: NestedEnumIntegrationProviderFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumIntegrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationStatus | EnumIntegrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationStatus[] | ListEnumIntegrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationStatusFilter<$PrismaModel>
    _max?: NestedEnumIntegrationStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSyncStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusFilter<$PrismaModel> | $Enums.SyncStatus
  }

  export type NestedEnumSyncStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusWithAggregatesFilter<$PrismaModel> | $Enums.SyncStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSyncStatusFilter<$PrismaModel>
    _max?: NestedEnumSyncStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EvidenceTaskCreateWithoutAuditPlanInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    assignee?: string | null
    department?: string | null
    framework?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvidenceTaskUncheckedCreateWithoutAuditPlanInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    assignee?: string | null
    department?: string | null
    framework?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvidenceTaskCreateOrConnectWithoutAuditPlanInput = {
    where: EvidenceTaskWhereUniqueInput
    create: XOR<EvidenceTaskCreateWithoutAuditPlanInput, EvidenceTaskUncheckedCreateWithoutAuditPlanInput>
  }

  export type EvidenceTaskCreateManyAuditPlanInputEnvelope = {
    data: EvidenceTaskCreateManyAuditPlanInput | EvidenceTaskCreateManyAuditPlanInput[]
    skipDuplicates?: boolean
  }

  export type EvidenceTaskUpsertWithWhereUniqueWithoutAuditPlanInput = {
    where: EvidenceTaskWhereUniqueInput
    update: XOR<EvidenceTaskUpdateWithoutAuditPlanInput, EvidenceTaskUncheckedUpdateWithoutAuditPlanInput>
    create: XOR<EvidenceTaskCreateWithoutAuditPlanInput, EvidenceTaskUncheckedCreateWithoutAuditPlanInput>
  }

  export type EvidenceTaskUpdateWithWhereUniqueWithoutAuditPlanInput = {
    where: EvidenceTaskWhereUniqueInput
    data: XOR<EvidenceTaskUpdateWithoutAuditPlanInput, EvidenceTaskUncheckedUpdateWithoutAuditPlanInput>
  }

  export type EvidenceTaskUpdateManyWithWhereWithoutAuditPlanInput = {
    where: EvidenceTaskScalarWhereInput
    data: XOR<EvidenceTaskUpdateManyMutationInput, EvidenceTaskUncheckedUpdateManyWithoutAuditPlanInput>
  }

  export type EvidenceTaskScalarWhereInput = {
    AND?: EvidenceTaskScalarWhereInput | EvidenceTaskScalarWhereInput[]
    OR?: EvidenceTaskScalarWhereInput[]
    NOT?: EvidenceTaskScalarWhereInput | EvidenceTaskScalarWhereInput[]
    id?: StringFilter<"EvidenceTask"> | string
    name?: StringFilter<"EvidenceTask"> | string
    description?: StringNullableFilter<"EvidenceTask"> | string | null
    status?: StringFilter<"EvidenceTask"> | string
    assignee?: StringNullableFilter<"EvidenceTask"> | string | null
    department?: StringNullableFilter<"EvidenceTask"> | string | null
    framework?: StringNullableFilter<"EvidenceTask"> | string | null
    dueDate?: DateTimeNullableFilter<"EvidenceTask"> | Date | string | null
    auditPlanId?: StringNullableFilter<"EvidenceTask"> | string | null
    createdAt?: DateTimeFilter<"EvidenceTask"> | Date | string
    updatedAt?: DateTimeFilter<"EvidenceTask"> | Date | string
  }

  export type SyncRunCreateWithoutIntegrationInput = {
    id?: string
    status: $Enums.SyncStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    assetsSynced?: number
    errorMessage?: string | null
    rawPayloadPath?: string | null
  }

  export type SyncRunUncheckedCreateWithoutIntegrationInput = {
    id?: string
    status: $Enums.SyncStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    assetsSynced?: number
    errorMessage?: string | null
    rawPayloadPath?: string | null
  }

  export type SyncRunCreateOrConnectWithoutIntegrationInput = {
    where: SyncRunWhereUniqueInput
    create: XOR<SyncRunCreateWithoutIntegrationInput, SyncRunUncheckedCreateWithoutIntegrationInput>
  }

  export type SyncRunCreateManyIntegrationInputEnvelope = {
    data: SyncRunCreateManyIntegrationInput | SyncRunCreateManyIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type AssetCreateWithoutIntegrationInput = {
    id?: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: AssetChangeCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutIntegrationInput = {
    id?: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: AssetChangeUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutIntegrationInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutIntegrationInput, AssetUncheckedCreateWithoutIntegrationInput>
  }

  export type AssetCreateManyIntegrationInputEnvelope = {
    data: AssetCreateManyIntegrationInput | AssetCreateManyIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type SyncRunUpsertWithWhereUniqueWithoutIntegrationInput = {
    where: SyncRunWhereUniqueInput
    update: XOR<SyncRunUpdateWithoutIntegrationInput, SyncRunUncheckedUpdateWithoutIntegrationInput>
    create: XOR<SyncRunCreateWithoutIntegrationInput, SyncRunUncheckedCreateWithoutIntegrationInput>
  }

  export type SyncRunUpdateWithWhereUniqueWithoutIntegrationInput = {
    where: SyncRunWhereUniqueInput
    data: XOR<SyncRunUpdateWithoutIntegrationInput, SyncRunUncheckedUpdateWithoutIntegrationInput>
  }

  export type SyncRunUpdateManyWithWhereWithoutIntegrationInput = {
    where: SyncRunScalarWhereInput
    data: XOR<SyncRunUpdateManyMutationInput, SyncRunUncheckedUpdateManyWithoutIntegrationInput>
  }

  export type SyncRunScalarWhereInput = {
    AND?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
    OR?: SyncRunScalarWhereInput[]
    NOT?: SyncRunScalarWhereInput | SyncRunScalarWhereInput[]
    id?: StringFilter<"SyncRun"> | string
    integrationId?: StringFilter<"SyncRun"> | string
    status?: EnumSyncStatusFilter<"SyncRun"> | $Enums.SyncStatus
    startedAt?: DateTimeFilter<"SyncRun"> | Date | string
    endedAt?: DateTimeNullableFilter<"SyncRun"> | Date | string | null
    assetsSynced?: IntFilter<"SyncRun"> | number
    errorMessage?: StringNullableFilter<"SyncRun"> | string | null
    rawPayloadPath?: StringNullableFilter<"SyncRun"> | string | null
  }

  export type AssetUpsertWithWhereUniqueWithoutIntegrationInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutIntegrationInput, AssetUncheckedUpdateWithoutIntegrationInput>
    create: XOR<AssetCreateWithoutIntegrationInput, AssetUncheckedCreateWithoutIntegrationInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutIntegrationInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutIntegrationInput, AssetUncheckedUpdateWithoutIntegrationInput>
  }

  export type AssetUpdateManyWithWhereWithoutIntegrationInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutIntegrationInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: StringFilter<"Asset"> | string
    integrationId?: StringFilter<"Asset"> | string
    externalId?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    type?: StringFilter<"Asset"> | string
    provider?: StringFilter<"Asset"> | string
    owner?: StringNullableFilter<"Asset"> | string | null
    environment?: StringNullableFilter<"Asset"> | string | null
    dataClassification?: StringNullableFilter<"Asset"> | string | null
    encryptionStatus?: BoolFilter<"Asset"> | boolean
    encryptionSignals?: JsonNullableFilter<"Asset">
    status?: StringFilter<"Asset"> | string
    tags?: StringNullableListFilter<"Asset">
    rawPayload?: JsonNullableFilter<"Asset">
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
  }

  export type IntegrationCreateWithoutSyncRunsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUncheckedCreateWithoutSyncRunsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationCreateOrConnectWithoutSyncRunsInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutSyncRunsInput, IntegrationUncheckedCreateWithoutSyncRunsInput>
  }

  export type IntegrationUpsertWithoutSyncRunsInput = {
    update: XOR<IntegrationUpdateWithoutSyncRunsInput, IntegrationUncheckedUpdateWithoutSyncRunsInput>
    create: XOR<IntegrationCreateWithoutSyncRunsInput, IntegrationUncheckedCreateWithoutSyncRunsInput>
    where?: IntegrationWhereInput
  }

  export type IntegrationUpdateToOneWithWhereWithoutSyncRunsInput = {
    where?: IntegrationWhereInput
    data: XOR<IntegrationUpdateWithoutSyncRunsInput, IntegrationUncheckedUpdateWithoutSyncRunsInput>
  }

  export type IntegrationUpdateWithoutSyncRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutSyncRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationCreateWithoutAssetsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    syncRuns?: SyncRunCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUncheckedCreateWithoutAssetsInput = {
    id?: string
    provider: $Enums.IntegrationProvider
    displayName: string
    config: JsonNullValueInput | InputJsonValue
    status?: $Enums.IntegrationStatus
    healthStatus?: string
    lastSyncAt?: Date | string | null
    errorLogs?: string | null
    syncSchedule?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    syncRuns?: SyncRunUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationCreateOrConnectWithoutAssetsInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutAssetsInput, IntegrationUncheckedCreateWithoutAssetsInput>
  }

  export type AssetChangeCreateWithoutAssetInput = {
    id?: string
    changeType: string
    diff: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AssetChangeUncheckedCreateWithoutAssetInput = {
    id?: string
    changeType: string
    diff: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AssetChangeCreateOrConnectWithoutAssetInput = {
    where: AssetChangeWhereUniqueInput
    create: XOR<AssetChangeCreateWithoutAssetInput, AssetChangeUncheckedCreateWithoutAssetInput>
  }

  export type AssetChangeCreateManyAssetInputEnvelope = {
    data: AssetChangeCreateManyAssetInput | AssetChangeCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationUpsertWithoutAssetsInput = {
    update: XOR<IntegrationUpdateWithoutAssetsInput, IntegrationUncheckedUpdateWithoutAssetsInput>
    create: XOR<IntegrationCreateWithoutAssetsInput, IntegrationUncheckedCreateWithoutAssetsInput>
    where?: IntegrationWhereInput
  }

  export type IntegrationUpdateToOneWithWhereWithoutAssetsInput = {
    where?: IntegrationWhereInput
    data: XOR<IntegrationUpdateWithoutAssetsInput, IntegrationUncheckedUpdateWithoutAssetsInput>
  }

  export type IntegrationUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncRuns?: SyncRunUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumIntegrationProviderFieldUpdateOperationsInput | $Enums.IntegrationProvider
    displayName?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    status?: EnumIntegrationStatusFieldUpdateOperationsInput | $Enums.IntegrationStatus
    healthStatus?: StringFieldUpdateOperationsInput | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLogs?: NullableStringFieldUpdateOperationsInput | string | null
    syncSchedule?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncRuns?: SyncRunUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type AssetChangeUpsertWithWhereUniqueWithoutAssetInput = {
    where: AssetChangeWhereUniqueInput
    update: XOR<AssetChangeUpdateWithoutAssetInput, AssetChangeUncheckedUpdateWithoutAssetInput>
    create: XOR<AssetChangeCreateWithoutAssetInput, AssetChangeUncheckedCreateWithoutAssetInput>
  }

  export type AssetChangeUpdateWithWhereUniqueWithoutAssetInput = {
    where: AssetChangeWhereUniqueInput
    data: XOR<AssetChangeUpdateWithoutAssetInput, AssetChangeUncheckedUpdateWithoutAssetInput>
  }

  export type AssetChangeUpdateManyWithWhereWithoutAssetInput = {
    where: AssetChangeScalarWhereInput
    data: XOR<AssetChangeUpdateManyMutationInput, AssetChangeUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetChangeScalarWhereInput = {
    AND?: AssetChangeScalarWhereInput | AssetChangeScalarWhereInput[]
    OR?: AssetChangeScalarWhereInput[]
    NOT?: AssetChangeScalarWhereInput | AssetChangeScalarWhereInput[]
    id?: StringFilter<"AssetChange"> | string
    assetId?: StringFilter<"AssetChange"> | string
    changeType?: StringFilter<"AssetChange"> | string
    diff?: JsonFilter<"AssetChange">
    timestamp?: DateTimeFilter<"AssetChange"> | Date | string
  }

  export type AssetCreateWithoutHistoryInput = {
    id?: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutHistoryInput = {
    id?: string
    integrationId: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssetCreateOrConnectWithoutHistoryInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutHistoryInput, AssetUncheckedCreateWithoutHistoryInput>
  }

  export type AssetUpsertWithoutHistoryInput = {
    update: XOR<AssetUpdateWithoutHistoryInput, AssetUncheckedUpdateWithoutHistoryInput>
    create: XOR<AssetCreateWithoutHistoryInput, AssetUncheckedCreateWithoutHistoryInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutHistoryInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutHistoryInput, AssetUncheckedUpdateWithoutHistoryInput>
  }

  export type AssetUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditPlanCreateWithoutEvidenceTasksInput = {
    id?: string
    framework?: $Enums.AuditFramework
    auditType?: $Enums.AuditType
    startDate: string
    endDate: string
    status?: $Enums.AuditStatus
    currentStep?: $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAiRefinementAt?: Date | string | null
  }

  export type AuditPlanUncheckedCreateWithoutEvidenceTasksInput = {
    id?: string
    framework?: $Enums.AuditFramework
    auditType?: $Enums.AuditType
    startDate: string
    endDate: string
    status?: $Enums.AuditStatus
    currentStep?: $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    lastAiRefinementAt?: Date | string | null
  }

  export type AuditPlanCreateOrConnectWithoutEvidenceTasksInput = {
    where: AuditPlanWhereUniqueInput
    create: XOR<AuditPlanCreateWithoutEvidenceTasksInput, AuditPlanUncheckedCreateWithoutEvidenceTasksInput>
  }

  export type AuditPlanUpsertWithoutEvidenceTasksInput = {
    update: XOR<AuditPlanUpdateWithoutEvidenceTasksInput, AuditPlanUncheckedUpdateWithoutEvidenceTasksInput>
    create: XOR<AuditPlanCreateWithoutEvidenceTasksInput, AuditPlanUncheckedCreateWithoutEvidenceTasksInput>
    where?: AuditPlanWhereInput
  }

  export type AuditPlanUpdateToOneWithWhereWithoutEvidenceTasksInput = {
    where?: AuditPlanWhereInput
    data: XOR<AuditPlanUpdateWithoutEvidenceTasksInput, AuditPlanUncheckedUpdateWithoutEvidenceTasksInput>
  }

  export type AuditPlanUpdateWithoutEvidenceTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    auditType?: EnumAuditTypeFieldUpdateOperationsInput | $Enums.AuditType
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    status?: EnumAuditStatusFieldUpdateOperationsInput | $Enums.AuditStatus
    currentStep?: EnumWizardStepFieldUpdateOperationsInput | $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAiRefinementAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditPlanUncheckedUpdateWithoutEvidenceTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: EnumAuditFrameworkFieldUpdateOperationsInput | $Enums.AuditFramework
    auditType?: EnumAuditTypeFieldUpdateOperationsInput | $Enums.AuditType
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    status?: EnumAuditStatusFieldUpdateOperationsInput | $Enums.AuditStatus
    currentStep?: EnumWizardStepFieldUpdateOperationsInput | $Enums.WizardStep
    scope?: NullableJsonNullValueInput | InputJsonValue
    systems?: NullableJsonNullValueInput | InputJsonValue
    risks?: NullableJsonNullValueInput | InputJsonValue
    evidencePlan?: NullableJsonNullValueInput | InputJsonValue
    timeline?: NullableJsonNullValueInput | InputJsonValue
    tasks?: NullableJsonNullValueInput | InputJsonValue
    auditorPack?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAiRefinementAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvidenceTaskCreateManyAuditPlanInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    assignee?: string | null
    department?: string | null
    framework?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvidenceTaskUpdateWithoutAuditPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceTaskUncheckedUpdateWithoutAuditPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceTaskUncheckedUpdateManyWithoutAuditPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncRunCreateManyIntegrationInput = {
    id?: string
    status: $Enums.SyncStatus
    startedAt?: Date | string
    endedAt?: Date | string | null
    assetsSynced?: number
    errorMessage?: string | null
    rawPayloadPath?: string | null
  }

  export type AssetCreateManyIntegrationInput = {
    id?: string
    externalId: string
    name: string
    type: string
    provider: string
    owner?: string | null
    environment?: string | null
    dataClassification?: string | null
    encryptionStatus?: boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    tags?: AssetCreatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncRunUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunUncheckedUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncRunUncheckedUpdateManyWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assetsSynced?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayloadPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: AssetChangeUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: AssetChangeUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: NullableStringFieldUpdateOperationsInput | string | null
    dataClassification?: NullableStringFieldUpdateOperationsInput | string | null
    encryptionStatus?: BoolFieldUpdateOperationsInput | boolean
    encryptionSignals?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    tags?: AssetUpdatetagsInput | string[]
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetChangeCreateManyAssetInput = {
    id?: string
    changeType: string
    diff: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AssetChangeUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetChangeUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetChangeUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    diff?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}