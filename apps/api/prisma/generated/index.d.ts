
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model ClientsOnSEs
 * 
 */
export type ClientsOnSEs = $Result.DefaultSelection<Prisma.$ClientsOnSEsPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model Node
 * 
 */
export type Node = $Result.DefaultSelection<Prisma.$NodePayload>
/**
 * Model ExecutionLog
 * 
 */
export type ExecutionLog = $Result.DefaultSelection<Prisma.$ExecutionLogPayload>
/**
 * Model Exception
 * 
 */
export type Exception = $Result.DefaultSelection<Prisma.$ExceptionPayload>
/**
 * Model Credential
 * 
 */
export type Credential = $Result.DefaultSelection<Prisma.$CredentialPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model DocumentLink
 * 
 */
export type DocumentLink = $Result.DefaultSelection<Prisma.$DocumentLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SE: 'SE',
  CLIENT: 'CLIENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PlanCadence: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  ANNUALLY: 'ANNUALLY'
};

export type PlanCadence = (typeof PlanCadence)[keyof typeof PlanCadence]


export const ExceptionSeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type ExceptionSeverity = (typeof ExceptionSeverity)[keyof typeof ExceptionSeverity]


export const WorkflowStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DRAFT: 'DRAFT'
};

export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus]


export const ExceptionStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type ExceptionStatus = (typeof ExceptionStatus)[keyof typeof ExceptionStatus]


export const InvoiceStatus: {
  DRAFT: 'DRAFT',
  ISSUED: 'ISSUED',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const CredentialService: {
  SLACK: 'SLACK',
  GITHUB: 'GITHUB',
  SALESFORCE: 'SALESFORCE',
  JIRA: 'JIRA',
  AWS: 'AWS'
};

export type CredentialService = (typeof CredentialService)[keyof typeof CredentialService]


export const CredentialStatus: {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  EXPIRED: 'EXPIRED',
  INVALID: 'INVALID'
};

export type CredentialStatus = (typeof CredentialStatus)[keyof typeof CredentialStatus]


export const DocumentType: {
  SURVEY: 'SURVEY',
  ADA_PROPOSAL: 'ADA_PROPOSAL',
  CONTRACT: 'CONTRACT',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PlanCadence = $Enums.PlanCadence

export const PlanCadence: typeof $Enums.PlanCadence

export type ExceptionSeverity = $Enums.ExceptionSeverity

export const ExceptionSeverity: typeof $Enums.ExceptionSeverity

export type WorkflowStatus = $Enums.WorkflowStatus

export const WorkflowStatus: typeof $Enums.WorkflowStatus

export type ExceptionStatus = $Enums.ExceptionStatus

export const ExceptionStatus: typeof $Enums.ExceptionStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type CredentialService = $Enums.CredentialService

export const CredentialService: typeof $Enums.CredentialService

export type CredentialStatus = $Enums.CredentialStatus

export const CredentialStatus: typeof $Enums.CredentialStatus

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientsOnSEs`: Exposes CRUD operations for the **ClientsOnSEs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientsOnSEs
    * const clientsOnSEs = await prisma.clientsOnSEs.findMany()
    * ```
    */
  get clientsOnSEs(): Prisma.ClientsOnSEsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionLog`: Exposes CRUD operations for the **ExecutionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionLogs
    * const executionLogs = await prisma.executionLog.findMany()
    * ```
    */
  get executionLog(): Prisma.ExecutionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exception`: Exposes CRUD operations for the **Exception** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exceptions
    * const exceptions = await prisma.exception.findMany()
    * ```
    */
  get exception(): Prisma.ExceptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credential`: Exposes CRUD operations for the **Credential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credential.findMany()
    * ```
    */
  get credential(): Prisma.CredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentLink`: Exposes CRUD operations for the **DocumentLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentLinks
    * const documentLinks = await prisma.documentLink.findMany()
    * ```
    */
  get documentLink(): Prisma.DocumentLinkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Client: 'Client',
    ClientsOnSEs: 'ClientsOnSEs',
    Department: 'Department',
    Workflow: 'Workflow',
    Node: 'Node',
    ExecutionLog: 'ExecutionLog',
    Exception: 'Exception',
    Credential: 'Credential',
    Plan: 'Plan',
    Subscription: 'Subscription',
    Invoice: 'Invoice',
    DocumentLink: 'DocumentLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "clientsOnSEs" | "department" | "workflow" | "node" | "executionLog" | "exception" | "credential" | "plan" | "subscription" | "invoice" | "documentLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      ClientsOnSEs: {
        payload: Prisma.$ClientsOnSEsPayload<ExtArgs>
        fields: Prisma.ClientsOnSEsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsOnSEsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsOnSEsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>
          }
          findFirst: {
            args: Prisma.ClientsOnSEsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsOnSEsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>
          }
          findMany: {
            args: Prisma.ClientsOnSEsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>[]
          }
          create: {
            args: Prisma.ClientsOnSEsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>
          }
          createMany: {
            args: Prisma.ClientsOnSEsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientsOnSEsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>[]
          }
          delete: {
            args: Prisma.ClientsOnSEsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>
          }
          update: {
            args: Prisma.ClientsOnSEsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsOnSEsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsOnSEsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientsOnSEsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>[]
          }
          upsert: {
            args: Prisma.ClientsOnSEsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsOnSEsPayload>
          }
          aggregate: {
            args: Prisma.ClientsOnSEsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientsOnSEs>
          }
          groupBy: {
            args: Prisma.ClientsOnSEsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsOnSEsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsOnSEsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsOnSEsCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      Node: {
        payload: Prisma.$NodePayload<ExtArgs>
        fields: Prisma.NodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findFirst: {
            args: Prisma.NodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findMany: {
            args: Prisma.NodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          create: {
            args: Prisma.NodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          createMany: {
            args: Prisma.NodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          delete: {
            args: Prisma.NodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          update: {
            args: Prisma.NodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          deleteMany: {
            args: Prisma.NodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          upsert: {
            args: Prisma.NodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          aggregate: {
            args: Prisma.NodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNode>
          }
          groupBy: {
            args: Prisma.NodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCountAggregateOutputType> | number
          }
        }
      }
      ExecutionLog: {
        payload: Prisma.$ExecutionLogPayload<ExtArgs>
        fields: Prisma.ExecutionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findFirst: {
            args: Prisma.ExecutionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findMany: {
            args: Prisma.ExecutionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          create: {
            args: Prisma.ExecutionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          createMany: {
            args: Prisma.ExecutionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          delete: {
            args: Prisma.ExecutionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          update: {
            args: Prisma.ExecutionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          aggregate: {
            args: Prisma.ExecutionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionLog>
          }
          groupBy: {
            args: Prisma.ExecutionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogCountAggregateOutputType> | number
          }
        }
      }
      Exception: {
        payload: Prisma.$ExceptionPayload<ExtArgs>
        fields: Prisma.ExceptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExceptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExceptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          findFirst: {
            args: Prisma.ExceptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExceptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          findMany: {
            args: Prisma.ExceptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>[]
          }
          create: {
            args: Prisma.ExceptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          createMany: {
            args: Prisma.ExceptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExceptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>[]
          }
          delete: {
            args: Prisma.ExceptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          update: {
            args: Prisma.ExceptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          deleteMany: {
            args: Prisma.ExceptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExceptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExceptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>[]
          }
          upsert: {
            args: Prisma.ExceptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          aggregate: {
            args: Prisma.ExceptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateException>
          }
          groupBy: {
            args: Prisma.ExceptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExceptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExceptionCountArgs<ExtArgs>
            result: $Utils.Optional<ExceptionCountAggregateOutputType> | number
          }
        }
      }
      Credential: {
        payload: Prisma.$CredentialPayload<ExtArgs>
        fields: Prisma.CredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findFirst: {
            args: Prisma.CredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findMany: {
            args: Prisma.CredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          create: {
            args: Prisma.CredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          createMany: {
            args: Prisma.CredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          delete: {
            args: Prisma.CredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          update: {
            args: Prisma.CredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          deleteMany: {
            args: Prisma.CredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          upsert: {
            args: Prisma.CredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          aggregate: {
            args: Prisma.CredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredential>
          }
          groupBy: {
            args: Prisma.CredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      DocumentLink: {
        payload: Prisma.$DocumentLinkPayload<ExtArgs>
        fields: Prisma.DocumentLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>
          }
          findFirst: {
            args: Prisma.DocumentLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>
          }
          findMany: {
            args: Prisma.DocumentLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>[]
          }
          create: {
            args: Prisma.DocumentLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>
          }
          createMany: {
            args: Prisma.DocumentLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>[]
          }
          delete: {
            args: Prisma.DocumentLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>
          }
          update: {
            args: Prisma.DocumentLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>
          }
          deleteMany: {
            args: Prisma.DocumentLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>[]
          }
          upsert: {
            args: Prisma.DocumentLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentLinkPayload>
          }
          aggregate: {
            args: Prisma.DocumentLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentLink>
          }
          groupBy: {
            args: Prisma.DocumentLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentLinkCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentLinkCountAggregateOutputType> | number
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
    user?: UserOmit
    client?: ClientOmit
    clientsOnSEs?: ClientsOnSEsOmit
    department?: DepartmentOmit
    workflow?: WorkflowOmit
    node?: NodeOmit
    executionLog?: ExecutionLogOmit
    exception?: ExceptionOmit
    credential?: CredentialOmit
    plan?: PlanOmit
    subscription?: SubscriptionOmit
    invoice?: InvoiceOmit
    documentLink?: DocumentLinkOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedClients: number
    notifiedExceptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedClients?: boolean | UserCountOutputTypeCountAssignedClientsArgs
    notifiedExceptions?: boolean | UserCountOutputTypeCountNotifiedExceptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsOnSEsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotifiedExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    users: number
    departments: number
    workflows: number
    credentials: number
    documents: number
    assignedSEs: number
    subscriptions: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ClientCountOutputTypeCountUsersArgs
    departments?: boolean | ClientCountOutputTypeCountDepartmentsArgs
    workflows?: boolean | ClientCountOutputTypeCountWorkflowsArgs
    credentials?: boolean | ClientCountOutputTypeCountCredentialsArgs
    documents?: boolean | ClientCountOutputTypeCountDocumentsArgs
    assignedSEs?: boolean | ClientCountOutputTypeCountAssignedSEsArgs
    subscriptions?: boolean | ClientCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentLinkWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAssignedSEsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsOnSEsWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    workflows: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflows?: boolean | DepartmentCountOutputTypeCountWorkflowsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    nodes: number
    logs: number
    exceptions: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | WorkflowCountOutputTypeCountNodesArgs
    logs?: boolean | WorkflowCountOutputTypeCountLogsArgs
    exceptions?: boolean | WorkflowCountOutputTypeCountExceptionsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionWhereInput
  }


  /**
   * Count Type NodeCountOutputType
   */

  export type NodeCountOutputType = {
    logs: number
  }

  export type NodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | NodeCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeCountOutputType
     */
    select?: NodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }


  /**
   * Count Type ExceptionCountOutputType
   */

  export type ExceptionCountOutputType = {
    notifiedUsers: number
    logs: number
  }

  export type ExceptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifiedUsers?: boolean | ExceptionCountOutputTypeCountNotifiedUsersArgs
    logs?: boolean | ExceptionCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ExceptionCountOutputType without action
   */
  export type ExceptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionCountOutputType
     */
    select?: ExceptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExceptionCountOutputType without action
   */
  export type ExceptionCountOutputTypeCountNotifiedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ExceptionCountOutputType without action
   */
  export type ExceptionCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    invoices: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | SubscriptionCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: $Enums.UserRole | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: $Enums.UserRole | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    role: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    role: $Enums.UserRole
    password: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    clientId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | User$clientArgs<ExtArgs>
    assignedClients?: boolean | User$assignedClientsArgs<ExtArgs>
    notifiedExceptions?: boolean | User$notifiedExceptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | User$clientArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | User$clientArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "role" | "password" | "isActive" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | User$clientArgs<ExtArgs>
    assignedClients?: boolean | User$assignedClientsArgs<ExtArgs>
    notifiedExceptions?: boolean | User$notifiedExceptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | User$clientArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | User$clientArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      assignedClients: Prisma.$ClientsOnSEsPayload<ExtArgs>[]
      notifiedExceptions: Prisma.$ExceptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      role: $Enums.UserRole
      password: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      clientId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends User$clientArgs<ExtArgs> = {}>(args?: Subset<T, User$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedClients<T extends User$assignedClientsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifiedExceptions<T extends User$notifiedExceptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$notifiedExceptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly clientId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.client
   */
  export type User$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * User.assignedClients
   */
  export type User$assignedClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    where?: ClientsOnSEsWhereInput
    orderBy?: ClientsOnSEsOrderByWithRelationInput | ClientsOnSEsOrderByWithRelationInput[]
    cursor?: ClientsOnSEsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsOnSEsScalarFieldEnum | ClientsOnSEsScalarFieldEnum[]
  }

  /**
   * User.notifiedExceptions
   */
  export type User$notifiedExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    where?: ExceptionWhereInput
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    cursor?: ExceptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    url: string | null
    contractStart: Date | null
    contractEnd: Date | null
    active: boolean | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    url: string | null
    contractStart: Date | null
    contractEnd: Date | null
    active: boolean | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    url: number
    contractStart: number
    contractEnd: number
    active: number
    createdAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    url?: true
    contractStart?: true
    contractEnd?: true
    active?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    url?: true
    contractStart?: true
    contractEnd?: true
    active?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    url?: true
    contractStart?: true
    contractEnd?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    url: string | null
    contractStart: Date | null
    contractEnd: Date | null
    active: boolean
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    contractStart?: boolean
    contractEnd?: boolean
    active?: boolean
    createdAt?: boolean
    users?: boolean | Client$usersArgs<ExtArgs>
    departments?: boolean | Client$departmentsArgs<ExtArgs>
    workflows?: boolean | Client$workflowsArgs<ExtArgs>
    credentials?: boolean | Client$credentialsArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    assignedSEs?: boolean | Client$assignedSEsArgs<ExtArgs>
    subscriptions?: boolean | Client$subscriptionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    contractStart?: boolean
    contractEnd?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    contractStart?: boolean
    contractEnd?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    url?: boolean
    contractStart?: boolean
    contractEnd?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "contractStart" | "contractEnd" | "active" | "createdAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Client$usersArgs<ExtArgs>
    departments?: boolean | Client$departmentsArgs<ExtArgs>
    workflows?: boolean | Client$workflowsArgs<ExtArgs>
    credentials?: boolean | Client$credentialsArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    assignedSEs?: boolean | Client$assignedSEsArgs<ExtArgs>
    subscriptions?: boolean | Client$subscriptionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
      credentials: Prisma.$CredentialPayload<ExtArgs>[]
      documents: Prisma.$DocumentLinkPayload<ExtArgs>[]
      assignedSEs: Prisma.$ClientsOnSEsPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string | null
      contractStart: Date | null
      contractEnd: Date | null
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Client$usersArgs<ExtArgs> = {}>(args?: Subset<T, Client$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departments<T extends Client$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflows<T extends Client$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, Client$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credentials<T extends Client$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, Client$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Client$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedSEs<T extends Client$assignedSEsArgs<ExtArgs> = {}>(args?: Subset<T, Client$assignedSEsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Client$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Client$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly url: FieldRef<"Client", 'String'>
    readonly contractStart: FieldRef<"Client", 'DateTime'>
    readonly contractEnd: FieldRef<"Client", 'DateTime'>
    readonly active: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data?: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.users
   */
  export type Client$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Client.departments
   */
  export type Client$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Client.workflows
   */
  export type Client$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Client.credentials
   */
  export type Client$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    cursor?: CredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Client.documents
   */
  export type Client$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    where?: DocumentLinkWhereInput
    orderBy?: DocumentLinkOrderByWithRelationInput | DocumentLinkOrderByWithRelationInput[]
    cursor?: DocumentLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentLinkScalarFieldEnum | DocumentLinkScalarFieldEnum[]
  }

  /**
   * Client.assignedSEs
   */
  export type Client$assignedSEsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    where?: ClientsOnSEsWhereInput
    orderBy?: ClientsOnSEsOrderByWithRelationInput | ClientsOnSEsOrderByWithRelationInput[]
    cursor?: ClientsOnSEsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsOnSEsScalarFieldEnum | ClientsOnSEsScalarFieldEnum[]
  }

  /**
   * Client.subscriptions
   */
  export type Client$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model ClientsOnSEs
   */

  export type AggregateClientsOnSEs = {
    _count: ClientsOnSEsCountAggregateOutputType | null
    _min: ClientsOnSEsMinAggregateOutputType | null
    _max: ClientsOnSEsMaxAggregateOutputType | null
  }

  export type ClientsOnSEsMinAggregateOutputType = {
    clientId: string | null
    seId: string | null
    assignedAt: Date | null
  }

  export type ClientsOnSEsMaxAggregateOutputType = {
    clientId: string | null
    seId: string | null
    assignedAt: Date | null
  }

  export type ClientsOnSEsCountAggregateOutputType = {
    clientId: number
    seId: number
    assignedAt: number
    _all: number
  }


  export type ClientsOnSEsMinAggregateInputType = {
    clientId?: true
    seId?: true
    assignedAt?: true
  }

  export type ClientsOnSEsMaxAggregateInputType = {
    clientId?: true
    seId?: true
    assignedAt?: true
  }

  export type ClientsOnSEsCountAggregateInputType = {
    clientId?: true
    seId?: true
    assignedAt?: true
    _all?: true
  }

  export type ClientsOnSEsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientsOnSEs to aggregate.
     */
    where?: ClientsOnSEsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientsOnSEs to fetch.
     */
    orderBy?: ClientsOnSEsOrderByWithRelationInput | ClientsOnSEsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsOnSEsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientsOnSEs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientsOnSEs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientsOnSEs
    **/
    _count?: true | ClientsOnSEsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsOnSEsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsOnSEsMaxAggregateInputType
  }

  export type GetClientsOnSEsAggregateType<T extends ClientsOnSEsAggregateArgs> = {
        [P in keyof T & keyof AggregateClientsOnSEs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientsOnSEs[P]>
      : GetScalarType<T[P], AggregateClientsOnSEs[P]>
  }




  export type ClientsOnSEsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsOnSEsWhereInput
    orderBy?: ClientsOnSEsOrderByWithAggregationInput | ClientsOnSEsOrderByWithAggregationInput[]
    by: ClientsOnSEsScalarFieldEnum[] | ClientsOnSEsScalarFieldEnum
    having?: ClientsOnSEsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsOnSEsCountAggregateInputType | true
    _min?: ClientsOnSEsMinAggregateInputType
    _max?: ClientsOnSEsMaxAggregateInputType
  }

  export type ClientsOnSEsGroupByOutputType = {
    clientId: string
    seId: string
    assignedAt: Date
    _count: ClientsOnSEsCountAggregateOutputType | null
    _min: ClientsOnSEsMinAggregateOutputType | null
    _max: ClientsOnSEsMaxAggregateOutputType | null
  }

  type GetClientsOnSEsGroupByPayload<T extends ClientsOnSEsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsOnSEsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsOnSEsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsOnSEsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsOnSEsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsOnSEsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    seId?: boolean
    assignedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    se?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientsOnSEs"]>

  export type ClientsOnSEsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    seId?: boolean
    assignedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    se?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientsOnSEs"]>

  export type ClientsOnSEsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    seId?: boolean
    assignedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    se?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientsOnSEs"]>

  export type ClientsOnSEsSelectScalar = {
    clientId?: boolean
    seId?: boolean
    assignedAt?: boolean
  }

  export type ClientsOnSEsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clientId" | "seId" | "assignedAt", ExtArgs["result"]["clientsOnSEs"]>
  export type ClientsOnSEsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    se?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientsOnSEsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    se?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientsOnSEsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    se?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientsOnSEsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientsOnSEs"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      se: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      clientId: string
      seId: string
      assignedAt: Date
    }, ExtArgs["result"]["clientsOnSEs"]>
    composites: {}
  }

  type ClientsOnSEsGetPayload<S extends boolean | null | undefined | ClientsOnSEsDefaultArgs> = $Result.GetResult<Prisma.$ClientsOnSEsPayload, S>

  type ClientsOnSEsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsOnSEsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsOnSEsCountAggregateInputType | true
    }

  export interface ClientsOnSEsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientsOnSEs'], meta: { name: 'ClientsOnSEs' } }
    /**
     * Find zero or one ClientsOnSEs that matches the filter.
     * @param {ClientsOnSEsFindUniqueArgs} args - Arguments to find a ClientsOnSEs
     * @example
     * // Get one ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsOnSEsFindUniqueArgs>(args: SelectSubset<T, ClientsOnSEsFindUniqueArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientsOnSEs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsOnSEsFindUniqueOrThrowArgs} args - Arguments to find a ClientsOnSEs
     * @example
     * // Get one ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsOnSEsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsOnSEsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientsOnSEs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsFindFirstArgs} args - Arguments to find a ClientsOnSEs
     * @example
     * // Get one ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsOnSEsFindFirstArgs>(args?: SelectSubset<T, ClientsOnSEsFindFirstArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientsOnSEs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsFindFirstOrThrowArgs} args - Arguments to find a ClientsOnSEs
     * @example
     * // Get one ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsOnSEsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsOnSEsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientsOnSEs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.findMany()
     * 
     * // Get first 10 ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.findMany({ take: 10 })
     * 
     * // Only select the `clientId`
     * const clientsOnSEsWithClientIdOnly = await prisma.clientsOnSEs.findMany({ select: { clientId: true } })
     * 
     */
    findMany<T extends ClientsOnSEsFindManyArgs>(args?: SelectSubset<T, ClientsOnSEsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientsOnSEs.
     * @param {ClientsOnSEsCreateArgs} args - Arguments to create a ClientsOnSEs.
     * @example
     * // Create one ClientsOnSEs
     * const ClientsOnSEs = await prisma.clientsOnSEs.create({
     *   data: {
     *     // ... data to create a ClientsOnSEs
     *   }
     * })
     * 
     */
    create<T extends ClientsOnSEsCreateArgs>(args: SelectSubset<T, ClientsOnSEsCreateArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientsOnSEs.
     * @param {ClientsOnSEsCreateManyArgs} args - Arguments to create many ClientsOnSEs.
     * @example
     * // Create many ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsOnSEsCreateManyArgs>(args?: SelectSubset<T, ClientsOnSEsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientsOnSEs and returns the data saved in the database.
     * @param {ClientsOnSEsCreateManyAndReturnArgs} args - Arguments to create many ClientsOnSEs.
     * @example
     * // Create many ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientsOnSEs and only return the `clientId`
     * const clientsOnSEsWithClientIdOnly = await prisma.clientsOnSEs.createManyAndReturn({
     *   select: { clientId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientsOnSEsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientsOnSEsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientsOnSEs.
     * @param {ClientsOnSEsDeleteArgs} args - Arguments to delete one ClientsOnSEs.
     * @example
     * // Delete one ClientsOnSEs
     * const ClientsOnSEs = await prisma.clientsOnSEs.delete({
     *   where: {
     *     // ... filter to delete one ClientsOnSEs
     *   }
     * })
     * 
     */
    delete<T extends ClientsOnSEsDeleteArgs>(args: SelectSubset<T, ClientsOnSEsDeleteArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientsOnSEs.
     * @param {ClientsOnSEsUpdateArgs} args - Arguments to update one ClientsOnSEs.
     * @example
     * // Update one ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsOnSEsUpdateArgs>(args: SelectSubset<T, ClientsOnSEsUpdateArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientsOnSEs.
     * @param {ClientsOnSEsDeleteManyArgs} args - Arguments to filter ClientsOnSEs to delete.
     * @example
     * // Delete a few ClientsOnSEs
     * const { count } = await prisma.clientsOnSEs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsOnSEsDeleteManyArgs>(args?: SelectSubset<T, ClientsOnSEsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientsOnSEs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsOnSEsUpdateManyArgs>(args: SelectSubset<T, ClientsOnSEsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientsOnSEs and returns the data updated in the database.
     * @param {ClientsOnSEsUpdateManyAndReturnArgs} args - Arguments to update many ClientsOnSEs.
     * @example
     * // Update many ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientsOnSEs and only return the `clientId`
     * const clientsOnSEsWithClientIdOnly = await prisma.clientsOnSEs.updateManyAndReturn({
     *   select: { clientId: true },
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
    updateManyAndReturn<T extends ClientsOnSEsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientsOnSEsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientsOnSEs.
     * @param {ClientsOnSEsUpsertArgs} args - Arguments to update or create a ClientsOnSEs.
     * @example
     * // Update or create a ClientsOnSEs
     * const clientsOnSEs = await prisma.clientsOnSEs.upsert({
     *   create: {
     *     // ... data to create a ClientsOnSEs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientsOnSEs we want to update
     *   }
     * })
     */
    upsert<T extends ClientsOnSEsUpsertArgs>(args: SelectSubset<T, ClientsOnSEsUpsertArgs<ExtArgs>>): Prisma__ClientsOnSEsClient<$Result.GetResult<Prisma.$ClientsOnSEsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientsOnSEs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsCountArgs} args - Arguments to filter ClientsOnSEs to count.
     * @example
     * // Count the number of ClientsOnSEs
     * const count = await prisma.clientsOnSEs.count({
     *   where: {
     *     // ... the filter for the ClientsOnSEs we want to count
     *   }
     * })
    **/
    count<T extends ClientsOnSEsCountArgs>(
      args?: Subset<T, ClientsOnSEsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsOnSEsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientsOnSEs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientsOnSEsAggregateArgs>(args: Subset<T, ClientsOnSEsAggregateArgs>): Prisma.PrismaPromise<GetClientsOnSEsAggregateType<T>>

    /**
     * Group by ClientsOnSEs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsOnSEsGroupByArgs} args - Group by arguments.
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
      T extends ClientsOnSEsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsOnSEsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsOnSEsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientsOnSEsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsOnSEsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientsOnSEs model
   */
  readonly fields: ClientsOnSEsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientsOnSEs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsOnSEsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    se<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClientsOnSEs model
   */
  interface ClientsOnSEsFieldRefs {
    readonly clientId: FieldRef<"ClientsOnSEs", 'String'>
    readonly seId: FieldRef<"ClientsOnSEs", 'String'>
    readonly assignedAt: FieldRef<"ClientsOnSEs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientsOnSEs findUnique
   */
  export type ClientsOnSEsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * Filter, which ClientsOnSEs to fetch.
     */
    where: ClientsOnSEsWhereUniqueInput
  }

  /**
   * ClientsOnSEs findUniqueOrThrow
   */
  export type ClientsOnSEsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * Filter, which ClientsOnSEs to fetch.
     */
    where: ClientsOnSEsWhereUniqueInput
  }

  /**
   * ClientsOnSEs findFirst
   */
  export type ClientsOnSEsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * Filter, which ClientsOnSEs to fetch.
     */
    where?: ClientsOnSEsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientsOnSEs to fetch.
     */
    orderBy?: ClientsOnSEsOrderByWithRelationInput | ClientsOnSEsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientsOnSEs.
     */
    cursor?: ClientsOnSEsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientsOnSEs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientsOnSEs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientsOnSEs.
     */
    distinct?: ClientsOnSEsScalarFieldEnum | ClientsOnSEsScalarFieldEnum[]
  }

  /**
   * ClientsOnSEs findFirstOrThrow
   */
  export type ClientsOnSEsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * Filter, which ClientsOnSEs to fetch.
     */
    where?: ClientsOnSEsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientsOnSEs to fetch.
     */
    orderBy?: ClientsOnSEsOrderByWithRelationInput | ClientsOnSEsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientsOnSEs.
     */
    cursor?: ClientsOnSEsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientsOnSEs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientsOnSEs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientsOnSEs.
     */
    distinct?: ClientsOnSEsScalarFieldEnum | ClientsOnSEsScalarFieldEnum[]
  }

  /**
   * ClientsOnSEs findMany
   */
  export type ClientsOnSEsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * Filter, which ClientsOnSEs to fetch.
     */
    where?: ClientsOnSEsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientsOnSEs to fetch.
     */
    orderBy?: ClientsOnSEsOrderByWithRelationInput | ClientsOnSEsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientsOnSEs.
     */
    cursor?: ClientsOnSEsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientsOnSEs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientsOnSEs.
     */
    skip?: number
    distinct?: ClientsOnSEsScalarFieldEnum | ClientsOnSEsScalarFieldEnum[]
  }

  /**
   * ClientsOnSEs create
   */
  export type ClientsOnSEsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientsOnSEs.
     */
    data: XOR<ClientsOnSEsCreateInput, ClientsOnSEsUncheckedCreateInput>
  }

  /**
   * ClientsOnSEs createMany
   */
  export type ClientsOnSEsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientsOnSEs.
     */
    data: ClientsOnSEsCreateManyInput | ClientsOnSEsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientsOnSEs createManyAndReturn
   */
  export type ClientsOnSEsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * The data used to create many ClientsOnSEs.
     */
    data: ClientsOnSEsCreateManyInput | ClientsOnSEsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientsOnSEs update
   */
  export type ClientsOnSEsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientsOnSEs.
     */
    data: XOR<ClientsOnSEsUpdateInput, ClientsOnSEsUncheckedUpdateInput>
    /**
     * Choose, which ClientsOnSEs to update.
     */
    where: ClientsOnSEsWhereUniqueInput
  }

  /**
   * ClientsOnSEs updateMany
   */
  export type ClientsOnSEsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientsOnSEs.
     */
    data: XOR<ClientsOnSEsUpdateManyMutationInput, ClientsOnSEsUncheckedUpdateManyInput>
    /**
     * Filter which ClientsOnSEs to update
     */
    where?: ClientsOnSEsWhereInput
    /**
     * Limit how many ClientsOnSEs to update.
     */
    limit?: number
  }

  /**
   * ClientsOnSEs updateManyAndReturn
   */
  export type ClientsOnSEsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * The data used to update ClientsOnSEs.
     */
    data: XOR<ClientsOnSEsUpdateManyMutationInput, ClientsOnSEsUncheckedUpdateManyInput>
    /**
     * Filter which ClientsOnSEs to update
     */
    where?: ClientsOnSEsWhereInput
    /**
     * Limit how many ClientsOnSEs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientsOnSEs upsert
   */
  export type ClientsOnSEsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientsOnSEs to update in case it exists.
     */
    where: ClientsOnSEsWhereUniqueInput
    /**
     * In case the ClientsOnSEs found by the `where` argument doesn't exist, create a new ClientsOnSEs with this data.
     */
    create: XOR<ClientsOnSEsCreateInput, ClientsOnSEsUncheckedCreateInput>
    /**
     * In case the ClientsOnSEs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsOnSEsUpdateInput, ClientsOnSEsUncheckedUpdateInput>
  }

  /**
   * ClientsOnSEs delete
   */
  export type ClientsOnSEsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
    /**
     * Filter which ClientsOnSEs to delete.
     */
    where: ClientsOnSEsWhereUniqueInput
  }

  /**
   * ClientsOnSEs deleteMany
   */
  export type ClientsOnSEsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientsOnSEs to delete
     */
    where?: ClientsOnSEsWhereInput
    /**
     * Limit how many ClientsOnSEs to delete.
     */
    limit?: number
  }

  /**
   * ClientsOnSEs without action
   */
  export type ClientsOnSEsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsOnSEs
     */
    select?: ClientsOnSEsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientsOnSEs
     */
    omit?: ClientsOnSEsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsOnSEsInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    clientId: string | null
    createdAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    clientId: string | null
    createdAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    clientId: number
    createdAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    clientId?: true
    createdAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    clientId?: true
    createdAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    clientId?: true
    createdAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    clientId: string
    createdAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clientId?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    workflows?: boolean | Department$workflowsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clientId?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clientId?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    clientId?: boolean
    createdAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "clientId" | "createdAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    workflows?: boolean | Department$workflowsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      clientId: string
      createdAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflows<T extends Department$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, Department$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly clientId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.workflows
   */
  export type Department$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    departmentId: string | null
    clientId: string | null
    active: boolean | null
    status: $Enums.WorkflowStatus | null
    createdAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    departmentId: string | null
    clientId: string | null
    active: boolean | null
    status: $Enums.WorkflowStatus | null
    createdAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    description: number
    departmentId: number
    clientId: number
    active: number
    status: number
    createdAt: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    departmentId?: true
    clientId?: true
    active?: true
    status?: true
    createdAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    departmentId?: true
    clientId?: true
    active?: true
    status?: true
    createdAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    departmentId?: true
    clientId?: true
    active?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    name: string
    description: string | null
    departmentId: string
    clientId: string
    active: boolean
    status: $Enums.WorkflowStatus
    createdAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    departmentId?: boolean
    clientId?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    nodes?: boolean | Workflow$nodesArgs<ExtArgs>
    logs?: boolean | Workflow$logsArgs<ExtArgs>
    exceptions?: boolean | Workflow$exceptionsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    departmentId?: boolean
    clientId?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    departmentId?: boolean
    clientId?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    departmentId?: boolean
    clientId?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "departmentId" | "clientId" | "active" | "status" | "createdAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    nodes?: boolean | Workflow$nodesArgs<ExtArgs>
    logs?: boolean | Workflow$logsArgs<ExtArgs>
    exceptions?: boolean | Workflow$exceptionsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      nodes: Prisma.$NodePayload<ExtArgs>[]
      logs: Prisma.$ExecutionLogPayload<ExtArgs>[]
      exceptions: Prisma.$ExceptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      departmentId: string
      clientId: string
      active: boolean
      status: $Enums.WorkflowStatus
      createdAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends Workflow$nodesArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Workflow$logsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exceptions<T extends Workflow$exceptionsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$exceptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly departmentId: FieldRef<"Workflow", 'String'>
    readonly clientId: FieldRef<"Workflow", 'String'>
    readonly active: FieldRef<"Workflow", 'Boolean'>
    readonly status: FieldRef<"Workflow", 'WorkflowStatus'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.nodes
   */
  export type Workflow$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Workflow.logs
   */
  export type Workflow$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * Workflow.exceptions
   */
  export type Workflow$exceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    where?: ExceptionWhereInput
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    cursor?: ExceptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model Node
   */

  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    workflowId: string | null
    createdAt: Date | null
  }

  export type NodeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    workflowId: string | null
    createdAt: Date | null
  }

  export type NodeCountAggregateOutputType = {
    id: number
    name: number
    type: number
    config: number
    workflowId: number
    createdAt: number
    _all: number
  }


  export type NodeMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    workflowId?: true
    createdAt?: true
  }

  export type NodeMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    workflowId?: true
    createdAt?: true
  }

  export type NodeCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    config?: true
    workflowId?: true
    createdAt?: true
    _all?: true
  }

  export type NodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithAggregationInput | NodeOrderByWithAggregationInput[]
    by: NodeScalarFieldEnum[] | NodeScalarFieldEnum
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }

  export type NodeGroupByOutputType = {
    id: string
    name: string
    type: string
    config: JsonValue | null
    workflowId: string
    createdAt: Date
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    workflowId?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    logs?: boolean | Node$logsArgs<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    workflowId?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    workflowId?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    workflowId?: boolean
    createdAt?: boolean
  }

  export type NodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "config" | "workflowId" | "createdAt", ExtArgs["result"]["node"]>
  export type NodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    logs?: boolean | Node$logsArgs<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type NodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $NodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Node"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      logs: Prisma.$ExecutionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      config: Prisma.JsonValue | null
      workflowId: string
      createdAt: Date
    }, ExtArgs["result"]["node"]>
    composites: {}
  }

  type NodeGetPayload<S extends boolean | null | undefined | NodeDefaultArgs> = $Result.GetResult<Prisma.$NodePayload, S>

  type NodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Node'], meta: { name: 'Node' } }
    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeFindUniqueArgs>(args: SelectSubset<T, NodeFindUniqueArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Node that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeFindFirstArgs>(args?: SelectSubset<T, NodeFindFirstArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeWithIdOnly = await prisma.node.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeFindManyArgs>(args?: SelectSubset<T, NodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
     */
    create<T extends NodeCreateArgs>(args: SelectSubset<T, NodeCreateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nodes.
     * @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCreateManyArgs>(args?: SelectSubset<T, NodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodeCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
     */
    delete<T extends NodeDeleteArgs>(args: SelectSubset<T, NodeDeleteArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeUpdateArgs>(args: SelectSubset<T, NodeUpdateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeDeleteManyArgs>(args?: SelectSubset<T, NodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeUpdateManyArgs>(args: SelectSubset<T, NodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes and returns the data updated in the database.
     * @param {NodeUpdateManyAndReturnArgs} args - Arguments to update many Nodes.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.updateManyAndReturn({
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
    updateManyAndReturn<T extends NodeUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
     */
    upsert<T extends NodeUpsertArgs>(args: SelectSubset<T, NodeUpsertArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
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
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Node model
   */
  readonly fields: NodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends Node$logsArgs<ExtArgs> = {}>(args?: Subset<T, Node$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Node model
   */
  interface NodeFieldRefs {
    readonly id: FieldRef<"Node", 'String'>
    readonly name: FieldRef<"Node", 'String'>
    readonly type: FieldRef<"Node", 'String'>
    readonly config: FieldRef<"Node", 'Json'>
    readonly workflowId: FieldRef<"Node", 'String'>
    readonly createdAt: FieldRef<"Node", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Node findUnique
   */
  export type NodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findFirst
   */
  export type NodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findMany
   */
  export type NodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node create
   */
  export type NodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }

  /**
   * Node createMany
   */
  export type NodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Node createManyAndReturn
   */
  export type NodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node update
   */
  export type NodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
  }

  /**
   * Node updateManyAndReturn
   */
  export type NodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node upsert
   */
  export type NodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }

  /**
   * Node delete
   */
  export type NodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to delete.
     */
    limit?: number
  }

  /**
   * Node.logs
   */
  export type Node$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * Node without action
   */
  export type NodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionLog
   */

  export type AggregateExecutionLog = {
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  export type ExecutionLogMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    nodeId: string | null
    status: string | null
    timestamp: Date | null
    log: string | null
    exceptionId: string | null
  }

  export type ExecutionLogMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    nodeId: string | null
    status: string | null
    timestamp: Date | null
    log: string | null
    exceptionId: string | null
  }

  export type ExecutionLogCountAggregateOutputType = {
    id: number
    workflowId: number
    nodeId: number
    status: number
    timestamp: number
    log: number
    exceptionId: number
    _all: number
  }


  export type ExecutionLogMinAggregateInputType = {
    id?: true
    workflowId?: true
    nodeId?: true
    status?: true
    timestamp?: true
    log?: true
    exceptionId?: true
  }

  export type ExecutionLogMaxAggregateInputType = {
    id?: true
    workflowId?: true
    nodeId?: true
    status?: true
    timestamp?: true
    log?: true
    exceptionId?: true
  }

  export type ExecutionLogCountAggregateInputType = {
    id?: true
    workflowId?: true
    nodeId?: true
    status?: true
    timestamp?: true
    log?: true
    exceptionId?: true
    _all?: true
  }

  export type ExecutionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLog to aggregate.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionLogs
    **/
    _count?: true | ExecutionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type GetExecutionLogAggregateType<T extends ExecutionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionLog[P]>
      : GetScalarType<T[P], AggregateExecutionLog[P]>
  }




  export type ExecutionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithAggregationInput | ExecutionLogOrderByWithAggregationInput[]
    by: ExecutionLogScalarFieldEnum[] | ExecutionLogScalarFieldEnum
    having?: ExecutionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionLogCountAggregateInputType | true
    _min?: ExecutionLogMinAggregateInputType
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type ExecutionLogGroupByOutputType = {
    id: string
    workflowId: string
    nodeId: string | null
    status: string
    timestamp: Date
    log: string | null
    exceptionId: string | null
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  type GetExecutionLogGroupByPayload<T extends ExecutionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    nodeId?: boolean
    status?: boolean
    timestamp?: boolean
    log?: boolean
    exceptionId?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    node?: boolean | ExecutionLog$nodeArgs<ExtArgs>
    exception?: boolean | ExecutionLog$exceptionArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    nodeId?: boolean
    status?: boolean
    timestamp?: boolean
    log?: boolean
    exceptionId?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    node?: boolean | ExecutionLog$nodeArgs<ExtArgs>
    exception?: boolean | ExecutionLog$exceptionArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    nodeId?: boolean
    status?: boolean
    timestamp?: boolean
    log?: boolean
    exceptionId?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    node?: boolean | ExecutionLog$nodeArgs<ExtArgs>
    exception?: boolean | ExecutionLog$exceptionArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectScalar = {
    id?: boolean
    workflowId?: boolean
    nodeId?: boolean
    status?: boolean
    timestamp?: boolean
    log?: boolean
    exceptionId?: boolean
  }

  export type ExecutionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "nodeId" | "status" | "timestamp" | "log" | "exceptionId", ExtArgs["result"]["executionLog"]>
  export type ExecutionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    node?: boolean | ExecutionLog$nodeArgs<ExtArgs>
    exception?: boolean | ExecutionLog$exceptionArgs<ExtArgs>
  }
  export type ExecutionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    node?: boolean | ExecutionLog$nodeArgs<ExtArgs>
    exception?: boolean | ExecutionLog$exceptionArgs<ExtArgs>
  }
  export type ExecutionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    node?: boolean | ExecutionLog$nodeArgs<ExtArgs>
    exception?: boolean | ExecutionLog$exceptionArgs<ExtArgs>
  }

  export type $ExecutionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionLog"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      node: Prisma.$NodePayload<ExtArgs> | null
      exception: Prisma.$ExceptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      nodeId: string | null
      status: string
      timestamp: Date
      log: string | null
      exceptionId: string | null
    }, ExtArgs["result"]["executionLog"]>
    composites: {}
  }

  type ExecutionLogGetPayload<S extends boolean | null | undefined | ExecutionLogDefaultArgs> = $Result.GetResult<Prisma.$ExecutionLogPayload, S>

  type ExecutionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionLogCountAggregateInputType | true
    }

  export interface ExecutionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionLog'], meta: { name: 'ExecutionLog' } }
    /**
     * Find zero or one ExecutionLog that matches the filter.
     * @param {ExecutionLogFindUniqueArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionLogFindUniqueArgs>(args: SelectSubset<T, ExecutionLogFindUniqueArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionLogFindUniqueOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionLogFindFirstArgs>(args?: SelectSubset<T, ExecutionLogFindFirstArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany()
     * 
     * // Get first 10 ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionLogFindManyArgs>(args?: SelectSubset<T, ExecutionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionLog.
     * @param {ExecutionLogCreateArgs} args - Arguments to create a ExecutionLog.
     * @example
     * // Create one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.create({
     *   data: {
     *     // ... data to create a ExecutionLog
     *   }
     * })
     * 
     */
    create<T extends ExecutionLogCreateArgs>(args: SelectSubset<T, ExecutionLogCreateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionLogs.
     * @param {ExecutionLogCreateManyArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionLogCreateManyArgs>(args?: SelectSubset<T, ExecutionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionLogs and returns the data saved in the database.
     * @param {ExecutionLogCreateManyAndReturnArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionLog.
     * @param {ExecutionLogDeleteArgs} args - Arguments to delete one ExecutionLog.
     * @example
     * // Delete one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.delete({
     *   where: {
     *     // ... filter to delete one ExecutionLog
     *   }
     * })
     * 
     */
    delete<T extends ExecutionLogDeleteArgs>(args: SelectSubset<T, ExecutionLogDeleteArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionLog.
     * @param {ExecutionLogUpdateArgs} args - Arguments to update one ExecutionLog.
     * @example
     * // Update one ExecutionLog
     * const executionLog = await prisma.executionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionLogUpdateArgs>(args: SelectSubset<T, ExecutionLogUpdateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionLogs.
     * @param {ExecutionLogDeleteManyArgs} args - Arguments to filter ExecutionLogs to delete.
     * @example
     * // Delete a few ExecutionLogs
     * const { count } = await prisma.executionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionLogDeleteManyArgs>(args?: SelectSubset<T, ExecutionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionLogUpdateManyArgs>(args: SelectSubset<T, ExecutionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs and returns the data updated in the database.
     * @param {ExecutionLogUpdateManyAndReturnArgs} args - Arguments to update many ExecutionLogs.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExecutionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionLog.
     * @param {ExecutionLogUpsertArgs} args - Arguments to update or create a ExecutionLog.
     * @example
     * // Update or create a ExecutionLog
     * const executionLog = await prisma.executionLog.upsert({
     *   create: {
     *     // ... data to create a ExecutionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionLog we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionLogUpsertArgs>(args: SelectSubset<T, ExecutionLogUpsertArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogCountArgs} args - Arguments to filter ExecutionLogs to count.
     * @example
     * // Count the number of ExecutionLogs
     * const count = await prisma.executionLog.count({
     *   where: {
     *     // ... the filter for the ExecutionLogs we want to count
     *   }
     * })
    **/
    count<T extends ExecutionLogCountArgs>(
      args?: Subset<T, ExecutionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionLogAggregateArgs>(args: Subset<T, ExecutionLogAggregateArgs>): Prisma.PrismaPromise<GetExecutionLogAggregateType<T>>

    /**
     * Group by ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogGroupByArgs} args - Group by arguments.
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
      T extends ExecutionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionLogGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionLog model
   */
  readonly fields: ExecutionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    node<T extends ExecutionLog$nodeArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionLog$nodeArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exception<T extends ExecutionLog$exceptionArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionLog$exceptionArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExecutionLog model
   */
  interface ExecutionLogFieldRefs {
    readonly id: FieldRef<"ExecutionLog", 'String'>
    readonly workflowId: FieldRef<"ExecutionLog", 'String'>
    readonly nodeId: FieldRef<"ExecutionLog", 'String'>
    readonly status: FieldRef<"ExecutionLog", 'String'>
    readonly timestamp: FieldRef<"ExecutionLog", 'DateTime'>
    readonly log: FieldRef<"ExecutionLog", 'String'>
    readonly exceptionId: FieldRef<"ExecutionLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionLog findUnique
   */
  export type ExecutionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findUniqueOrThrow
   */
  export type ExecutionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findFirst
   */
  export type ExecutionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findFirstOrThrow
   */
  export type ExecutionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findMany
   */
  export type ExecutionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLogs to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog create
   */
  export type ExecutionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionLog.
     */
    data: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
  }

  /**
   * ExecutionLog createMany
   */
  export type ExecutionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionLog createManyAndReturn
   */
  export type ExecutionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog update
   */
  export type ExecutionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionLog.
     */
    data: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
    /**
     * Choose, which ExecutionLog to update.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog updateMany
   */
  export type ExecutionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to update.
     */
    limit?: number
  }

  /**
   * ExecutionLog updateManyAndReturn
   */
  export type ExecutionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog upsert
   */
  export type ExecutionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionLog to update in case it exists.
     */
    where: ExecutionLogWhereUniqueInput
    /**
     * In case the ExecutionLog found by the `where` argument doesn't exist, create a new ExecutionLog with this data.
     */
    create: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
    /**
     * In case the ExecutionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
  }

  /**
   * ExecutionLog delete
   */
  export type ExecutionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter which ExecutionLog to delete.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog deleteMany
   */
  export type ExecutionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLogs to delete
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to delete.
     */
    limit?: number
  }

  /**
   * ExecutionLog.node
   */
  export type ExecutionLog$nodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
  }

  /**
   * ExecutionLog.exception
   */
  export type ExecutionLog$exceptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    where?: ExceptionWhereInput
  }

  /**
   * ExecutionLog without action
   */
  export type ExecutionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
  }


  /**
   * Model Exception
   */

  export type AggregateException = {
    _count: ExceptionCountAggregateOutputType | null
    _min: ExceptionMinAggregateOutputType | null
    _max: ExceptionMaxAggregateOutputType | null
  }

  export type ExceptionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: string | null
    severity: $Enums.ExceptionSeverity | null
    remedy: string | null
    status: $Enums.ExceptionStatus | null
    timestamp: Date | null
  }

  export type ExceptionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: string | null
    severity: $Enums.ExceptionSeverity | null
    remedy: string | null
    status: $Enums.ExceptionStatus | null
    timestamp: Date | null
  }

  export type ExceptionCountAggregateOutputType = {
    id: number
    workflowId: number
    type: number
    severity: number
    remedy: number
    status: number
    timestamp: number
    _all: number
  }


  export type ExceptionMinAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    severity?: true
    remedy?: true
    status?: true
    timestamp?: true
  }

  export type ExceptionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    severity?: true
    remedy?: true
    status?: true
    timestamp?: true
  }

  export type ExceptionCountAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    severity?: true
    remedy?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type ExceptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exception to aggregate.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exceptions
    **/
    _count?: true | ExceptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExceptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExceptionMaxAggregateInputType
  }

  export type GetExceptionAggregateType<T extends ExceptionAggregateArgs> = {
        [P in keyof T & keyof AggregateException]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateException[P]>
      : GetScalarType<T[P], AggregateException[P]>
  }




  export type ExceptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionWhereInput
    orderBy?: ExceptionOrderByWithAggregationInput | ExceptionOrderByWithAggregationInput[]
    by: ExceptionScalarFieldEnum[] | ExceptionScalarFieldEnum
    having?: ExceptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExceptionCountAggregateInputType | true
    _min?: ExceptionMinAggregateInputType
    _max?: ExceptionMaxAggregateInputType
  }

  export type ExceptionGroupByOutputType = {
    id: string
    workflowId: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy: string | null
    status: $Enums.ExceptionStatus
    timestamp: Date
    _count: ExceptionCountAggregateOutputType | null
    _min: ExceptionMinAggregateOutputType | null
    _max: ExceptionMaxAggregateOutputType | null
  }

  type GetExceptionGroupByPayload<T extends ExceptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExceptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExceptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExceptionGroupByOutputType[P]>
            : GetScalarType<T[P], ExceptionGroupByOutputType[P]>
        }
      >
    >


  export type ExceptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    severity?: boolean
    remedy?: boolean
    status?: boolean
    timestamp?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    notifiedUsers?: boolean | Exception$notifiedUsersArgs<ExtArgs>
    logs?: boolean | Exception$logsArgs<ExtArgs>
    _count?: boolean | ExceptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exception"]>

  export type ExceptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    severity?: boolean
    remedy?: boolean
    status?: boolean
    timestamp?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exception"]>

  export type ExceptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    severity?: boolean
    remedy?: boolean
    status?: boolean
    timestamp?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exception"]>

  export type ExceptionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    type?: boolean
    severity?: boolean
    remedy?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type ExceptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "type" | "severity" | "remedy" | "status" | "timestamp", ExtArgs["result"]["exception"]>
  export type ExceptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    notifiedUsers?: boolean | Exception$notifiedUsersArgs<ExtArgs>
    logs?: boolean | Exception$logsArgs<ExtArgs>
    _count?: boolean | ExceptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExceptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type ExceptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $ExceptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exception"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      notifiedUsers: Prisma.$UserPayload<ExtArgs>[]
      logs: Prisma.$ExecutionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      type: string
      severity: $Enums.ExceptionSeverity
      remedy: string | null
      status: $Enums.ExceptionStatus
      timestamp: Date
    }, ExtArgs["result"]["exception"]>
    composites: {}
  }

  type ExceptionGetPayload<S extends boolean | null | undefined | ExceptionDefaultArgs> = $Result.GetResult<Prisma.$ExceptionPayload, S>

  type ExceptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExceptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExceptionCountAggregateInputType | true
    }

  export interface ExceptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exception'], meta: { name: 'Exception' } }
    /**
     * Find zero or one Exception that matches the filter.
     * @param {ExceptionFindUniqueArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExceptionFindUniqueArgs>(args: SelectSubset<T, ExceptionFindUniqueArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exception that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExceptionFindUniqueOrThrowArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExceptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExceptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exception that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionFindFirstArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExceptionFindFirstArgs>(args?: SelectSubset<T, ExceptionFindFirstArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exception that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionFindFirstOrThrowArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExceptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExceptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exceptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exceptions
     * const exceptions = await prisma.exception.findMany()
     * 
     * // Get first 10 Exceptions
     * const exceptions = await prisma.exception.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exceptionWithIdOnly = await prisma.exception.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExceptionFindManyArgs>(args?: SelectSubset<T, ExceptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exception.
     * @param {ExceptionCreateArgs} args - Arguments to create a Exception.
     * @example
     * // Create one Exception
     * const Exception = await prisma.exception.create({
     *   data: {
     *     // ... data to create a Exception
     *   }
     * })
     * 
     */
    create<T extends ExceptionCreateArgs>(args: SelectSubset<T, ExceptionCreateArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exceptions.
     * @param {ExceptionCreateManyArgs} args - Arguments to create many Exceptions.
     * @example
     * // Create many Exceptions
     * const exception = await prisma.exception.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExceptionCreateManyArgs>(args?: SelectSubset<T, ExceptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exceptions and returns the data saved in the database.
     * @param {ExceptionCreateManyAndReturnArgs} args - Arguments to create many Exceptions.
     * @example
     * // Create many Exceptions
     * const exception = await prisma.exception.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exceptions and only return the `id`
     * const exceptionWithIdOnly = await prisma.exception.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExceptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExceptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exception.
     * @param {ExceptionDeleteArgs} args - Arguments to delete one Exception.
     * @example
     * // Delete one Exception
     * const Exception = await prisma.exception.delete({
     *   where: {
     *     // ... filter to delete one Exception
     *   }
     * })
     * 
     */
    delete<T extends ExceptionDeleteArgs>(args: SelectSubset<T, ExceptionDeleteArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exception.
     * @param {ExceptionUpdateArgs} args - Arguments to update one Exception.
     * @example
     * // Update one Exception
     * const exception = await prisma.exception.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExceptionUpdateArgs>(args: SelectSubset<T, ExceptionUpdateArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exceptions.
     * @param {ExceptionDeleteManyArgs} args - Arguments to filter Exceptions to delete.
     * @example
     * // Delete a few Exceptions
     * const { count } = await prisma.exception.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExceptionDeleteManyArgs>(args?: SelectSubset<T, ExceptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exceptions
     * const exception = await prisma.exception.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExceptionUpdateManyArgs>(args: SelectSubset<T, ExceptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exceptions and returns the data updated in the database.
     * @param {ExceptionUpdateManyAndReturnArgs} args - Arguments to update many Exceptions.
     * @example
     * // Update many Exceptions
     * const exception = await prisma.exception.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exceptions and only return the `id`
     * const exceptionWithIdOnly = await prisma.exception.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExceptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExceptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exception.
     * @param {ExceptionUpsertArgs} args - Arguments to update or create a Exception.
     * @example
     * // Update or create a Exception
     * const exception = await prisma.exception.upsert({
     *   create: {
     *     // ... data to create a Exception
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exception we want to update
     *   }
     * })
     */
    upsert<T extends ExceptionUpsertArgs>(args: SelectSubset<T, ExceptionUpsertArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionCountArgs} args - Arguments to filter Exceptions to count.
     * @example
     * // Count the number of Exceptions
     * const count = await prisma.exception.count({
     *   where: {
     *     // ... the filter for the Exceptions we want to count
     *   }
     * })
    **/
    count<T extends ExceptionCountArgs>(
      args?: Subset<T, ExceptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExceptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exception.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExceptionAggregateArgs>(args: Subset<T, ExceptionAggregateArgs>): Prisma.PrismaPromise<GetExceptionAggregateType<T>>

    /**
     * Group by Exception.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionGroupByArgs} args - Group by arguments.
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
      T extends ExceptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExceptionGroupByArgs['orderBy'] }
        : { orderBy?: ExceptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExceptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExceptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exception model
   */
  readonly fields: ExceptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exception.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExceptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifiedUsers<T extends Exception$notifiedUsersArgs<ExtArgs> = {}>(args?: Subset<T, Exception$notifiedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Exception$logsArgs<ExtArgs> = {}>(args?: Subset<T, Exception$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exception model
   */
  interface ExceptionFieldRefs {
    readonly id: FieldRef<"Exception", 'String'>
    readonly workflowId: FieldRef<"Exception", 'String'>
    readonly type: FieldRef<"Exception", 'String'>
    readonly severity: FieldRef<"Exception", 'ExceptionSeverity'>
    readonly remedy: FieldRef<"Exception", 'String'>
    readonly status: FieldRef<"Exception", 'ExceptionStatus'>
    readonly timestamp: FieldRef<"Exception", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exception findUnique
   */
  export type ExceptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where: ExceptionWhereUniqueInput
  }

  /**
   * Exception findUniqueOrThrow
   */
  export type ExceptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where: ExceptionWhereUniqueInput
  }

  /**
   * Exception findFirst
   */
  export type ExceptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exceptions.
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exceptions.
     */
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }

  /**
   * Exception findFirstOrThrow
   */
  export type ExceptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exceptions.
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exceptions.
     */
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }

  /**
   * Exception findMany
   */
  export type ExceptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exceptions to fetch.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exceptions.
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }

  /**
   * Exception create
   */
  export type ExceptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Exception.
     */
    data: XOR<ExceptionCreateInput, ExceptionUncheckedCreateInput>
  }

  /**
   * Exception createMany
   */
  export type ExceptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exceptions.
     */
    data: ExceptionCreateManyInput | ExceptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exception createManyAndReturn
   */
  export type ExceptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * The data used to create many Exceptions.
     */
    data: ExceptionCreateManyInput | ExceptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exception update
   */
  export type ExceptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Exception.
     */
    data: XOR<ExceptionUpdateInput, ExceptionUncheckedUpdateInput>
    /**
     * Choose, which Exception to update.
     */
    where: ExceptionWhereUniqueInput
  }

  /**
   * Exception updateMany
   */
  export type ExceptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exceptions.
     */
    data: XOR<ExceptionUpdateManyMutationInput, ExceptionUncheckedUpdateManyInput>
    /**
     * Filter which Exceptions to update
     */
    where?: ExceptionWhereInput
    /**
     * Limit how many Exceptions to update.
     */
    limit?: number
  }

  /**
   * Exception updateManyAndReturn
   */
  export type ExceptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * The data used to update Exceptions.
     */
    data: XOR<ExceptionUpdateManyMutationInput, ExceptionUncheckedUpdateManyInput>
    /**
     * Filter which Exceptions to update
     */
    where?: ExceptionWhereInput
    /**
     * Limit how many Exceptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exception upsert
   */
  export type ExceptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Exception to update in case it exists.
     */
    where: ExceptionWhereUniqueInput
    /**
     * In case the Exception found by the `where` argument doesn't exist, create a new Exception with this data.
     */
    create: XOR<ExceptionCreateInput, ExceptionUncheckedCreateInput>
    /**
     * In case the Exception was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExceptionUpdateInput, ExceptionUncheckedUpdateInput>
  }

  /**
   * Exception delete
   */
  export type ExceptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter which Exception to delete.
     */
    where: ExceptionWhereUniqueInput
  }

  /**
   * Exception deleteMany
   */
  export type ExceptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exceptions to delete
     */
    where?: ExceptionWhereInput
    /**
     * Limit how many Exceptions to delete.
     */
    limit?: number
  }

  /**
   * Exception.notifiedUsers
   */
  export type Exception$notifiedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Exception.logs
   */
  export type Exception$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * Exception without action
   */
  export type ExceptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exception
     */
    omit?: ExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionInclude<ExtArgs> | null
  }


  /**
   * Model Credential
   */

  export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    service: $Enums.CredentialService | null
    status: $Enums.CredentialStatus | null
    createdAt: Date | null
  }

  export type CredentialMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    service: $Enums.CredentialService | null
    status: $Enums.CredentialStatus | null
    createdAt: Date | null
  }

  export type CredentialCountAggregateOutputType = {
    id: number
    clientId: number
    service: number
    status: number
    config: number
    createdAt: number
    _all: number
  }


  export type CredentialMinAggregateInputType = {
    id?: true
    clientId?: true
    service?: true
    status?: true
    createdAt?: true
  }

  export type CredentialMaxAggregateInputType = {
    id?: true
    clientId?: true
    service?: true
    status?: true
    createdAt?: true
  }

  export type CredentialCountAggregateInputType = {
    id?: true
    clientId?: true
    service?: true
    status?: true
    config?: true
    createdAt?: true
    _all?: true
  }

  export type CredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credential to aggregate.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type CredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithAggregationInput | CredentialOrderByWithAggregationInput[]
    by: CredentialScalarFieldEnum[] | CredentialScalarFieldEnum
    having?: CredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }

  export type CredentialGroupByOutputType = {
    id: string
    clientId: string
    service: $Enums.CredentialService
    status: $Enums.CredentialStatus
    config: JsonValue | null
    createdAt: Date
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends CredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type CredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    service?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    service?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    service?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectScalar = {
    id?: boolean
    clientId?: boolean
    service?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
  }

  export type CredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "service" | "status" | "config" | "createdAt", ExtArgs["result"]["credential"]>
  export type CredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type CredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type CredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $CredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credential"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      service: $Enums.CredentialService
      status: $Enums.CredentialStatus
      config: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["credential"]>
    composites: {}
  }

  type CredentialGetPayload<S extends boolean | null | undefined | CredentialDefaultArgs> = $Result.GetResult<Prisma.$CredentialPayload, S>

  type CredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialCountAggregateInputType | true
    }

  export interface CredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credential'], meta: { name: 'Credential' } }
    /**
     * Find zero or one Credential that matches the filter.
     * @param {CredentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialFindUniqueArgs>(args: SelectSubset<T, CredentialFindUniqueArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialFindFirstArgs>(args?: SelectSubset<T, CredentialFindFirstArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialWithIdOnly = await prisma.credential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialFindManyArgs>(args?: SelectSubset<T, CredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credential.
     * @param {CredentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
     */
    create<T extends CredentialCreateArgs>(args: SelectSubset<T, CredentialCreateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {CredentialCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialCreateManyArgs>(args?: SelectSubset<T, CredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credential.
     * @param {CredentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
     */
    delete<T extends CredentialDeleteArgs>(args: SelectSubset<T, CredentialDeleteArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credential.
     * @param {CredentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialUpdateArgs>(args: SelectSubset<T, CredentialUpdateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialDeleteManyArgs>(args?: SelectSubset<T, CredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialUpdateManyArgs>(args: SelectSubset<T, CredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {CredentialUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.updateManyAndReturn({
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
    updateManyAndReturn<T extends CredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credential.
     * @param {CredentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
     */
    upsert<T extends CredentialUpsertArgs>(args: SelectSubset<T, CredentialUpsertArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialCountArgs>(
      args?: Subset<T, CredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): Prisma.PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialGroupByArgs} args - Group by arguments.
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
      T extends CredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialGroupByArgs['orderBy'] }
        : { orderBy?: CredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credential model
   */
  readonly fields: CredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Credential model
   */
  interface CredentialFieldRefs {
    readonly id: FieldRef<"Credential", 'String'>
    readonly clientId: FieldRef<"Credential", 'String'>
    readonly service: FieldRef<"Credential", 'CredentialService'>
    readonly status: FieldRef<"Credential", 'CredentialStatus'>
    readonly config: FieldRef<"Credential", 'Json'>
    readonly createdAt: FieldRef<"Credential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credential findUnique
   */
  export type CredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findUniqueOrThrow
   */
  export type CredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findFirst
   */
  export type CredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findFirstOrThrow
   */
  export type CredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findMany
   */
  export type CredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential create
   */
  export type CredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a Credential.
     */
    data: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
  }

  /**
   * Credential createMany
   */
  export type CredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credential createManyAndReturn
   */
  export type CredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credential update
   */
  export type CredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a Credential.
     */
    data: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
    /**
     * Choose, which Credential to update.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential updateMany
   */
  export type CredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credential updateManyAndReturn
   */
  export type CredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credential upsert
   */
  export type CredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the Credential to update in case it exists.
     */
    where: CredentialWhereUniqueInput
    /**
     * In case the Credential found by the `where` argument doesn't exist, create a new Credential with this data.
     */
    create: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
    /**
     * In case the Credential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
  }

  /**
   * Credential delete
   */
  export type CredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter which Credential to delete.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential deleteMany
   */
  export type CredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to delete.
     */
    limit?: number
  }

  /**
   * Credential without action
   */
  export type CredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    pricePerCredit: number | null
    contractLength: number | null
    setupFee: number | null
    cap: number | null
    overageCost: number | null
    creditsPerPeriod: number | null
    prepaymentPercentage: number | null
  }

  export type PlanSumAggregateOutputType = {
    pricePerCredit: number | null
    contractLength: number | null
    setupFee: number | null
    cap: number | null
    overageCost: number | null
    creditsPerPeriod: number | null
    prepaymentPercentage: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pricePerCredit: number | null
    contractLength: number | null
    cadence: $Enums.PlanCadence | null
    setupFee: number | null
    cap: number | null
    overageCost: number | null
    usageApi: string | null
    creditsPerPeriod: number | null
    prepaymentPercentage: number | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pricePerCredit: number | null
    contractLength: number | null
    cadence: $Enums.PlanCadence | null
    setupFee: number | null
    cap: number | null
    overageCost: number | null
    usageApi: string | null
    creditsPerPeriod: number | null
    prepaymentPercentage: number | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    pricePerCredit: number
    contractLength: number
    cadence: number
    setupFee: number
    cap: number
    overageCost: number
    usageApi: number
    creditsPerPeriod: number
    prepaymentPercentage: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    pricePerCredit?: true
    contractLength?: true
    setupFee?: true
    cap?: true
    overageCost?: true
    creditsPerPeriod?: true
    prepaymentPercentage?: true
  }

  export type PlanSumAggregateInputType = {
    pricePerCredit?: true
    contractLength?: true
    setupFee?: true
    cap?: true
    overageCost?: true
    creditsPerPeriod?: true
    prepaymentPercentage?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerCredit?: true
    contractLength?: true
    cadence?: true
    setupFee?: true
    cap?: true
    overageCost?: true
    usageApi?: true
    creditsPerPeriod?: true
    prepaymentPercentage?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerCredit?: true
    contractLength?: true
    cadence?: true
    setupFee?: true
    cap?: true
    overageCost?: true
    usageApi?: true
    creditsPerPeriod?: true
    prepaymentPercentage?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pricePerCredit?: true
    contractLength?: true
    cadence?: true
    setupFee?: true
    cap?: true
    overageCost?: true
    usageApi?: true
    creditsPerPeriod?: true
    prepaymentPercentage?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    description: string | null
    pricePerCredit: number
    contractLength: number
    cadence: $Enums.PlanCadence
    setupFee: number | null
    cap: number | null
    overageCost: number | null
    usageApi: string | null
    creditsPerPeriod: number | null
    prepaymentPercentage: number | null
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerCredit?: boolean
    contractLength?: boolean
    cadence?: boolean
    setupFee?: boolean
    cap?: boolean
    overageCost?: boolean
    usageApi?: boolean
    creditsPerPeriod?: boolean
    prepaymentPercentage?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerCredit?: boolean
    contractLength?: boolean
    cadence?: boolean
    setupFee?: boolean
    cap?: boolean
    overageCost?: boolean
    usageApi?: boolean
    creditsPerPeriod?: boolean
    prepaymentPercentage?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerCredit?: boolean
    contractLength?: boolean
    cadence?: boolean
    setupFee?: boolean
    cap?: boolean
    overageCost?: boolean
    usageApi?: boolean
    creditsPerPeriod?: boolean
    prepaymentPercentage?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    pricePerCredit?: boolean
    contractLength?: boolean
    cadence?: boolean
    setupFee?: boolean
    cap?: boolean
    overageCost?: boolean
    usageApi?: boolean
    creditsPerPeriod?: boolean
    prepaymentPercentage?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "pricePerCredit" | "contractLength" | "cadence" | "setupFee" | "cap" | "overageCost" | "usageApi" | "creditsPerPeriod" | "prepaymentPercentage", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      pricePerCredit: number
      contractLength: number
      cadence: $Enums.PlanCadence
      setupFee: number | null
      cap: number | null
      overageCost: number | null
      usageApi: string | null
      creditsPerPeriod: number | null
      prepaymentPercentage: number | null
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly pricePerCredit: FieldRef<"Plan", 'Float'>
    readonly contractLength: FieldRef<"Plan", 'Int'>
    readonly cadence: FieldRef<"Plan", 'PlanCadence'>
    readonly setupFee: FieldRef<"Plan", 'Float'>
    readonly cap: FieldRef<"Plan", 'Int'>
    readonly overageCost: FieldRef<"Plan", 'Float'>
    readonly usageApi: FieldRef<"Plan", 'String'>
    readonly creditsPerPeriod: FieldRef<"Plan", 'Int'>
    readonly prepaymentPercentage: FieldRef<"Plan", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    planId: string | null
    status: string | null
    createdAt: Date | null
    billedToDate: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    planId: string | null
    status: string | null
    createdAt: Date | null
    billedToDate: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    clientId: number
    planId: number
    status: number
    createdAt: number
    billedToDate: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    clientId?: true
    planId?: true
    status?: true
    createdAt?: true
    billedToDate?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    clientId?: true
    planId?: true
    status?: true
    createdAt?: true
    billedToDate?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    clientId?: true
    planId?: true
    status?: true
    createdAt?: true
    billedToDate?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    clientId: string
    planId: string
    status: string
    createdAt: Date
    billedToDate: Date | null
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    billedToDate?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    invoices?: boolean | Subscription$invoicesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    billedToDate?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    billedToDate?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    clientId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    billedToDate?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "planId" | "status" | "createdAt" | "billedToDate", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    invoices?: boolean | Subscription$invoicesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      planId: string
      status: string
      createdAt: Date
      billedToDate: Date | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Subscription$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly clientId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly billedToDate: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.invoices
   */
  export type Subscription$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    issueDate: Date | null
    dueDate: Date | null
    amount: number | null
    status: $Enums.InvoiceStatus | null
    paymentMethod: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    issueDate: Date | null
    dueDate: Date | null
    amount: number | null
    status: $Enums.InvoiceStatus | null
    paymentMethod: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    subscriptionId: number
    issueDate: number
    dueDate: number
    amount: number
    status: number
    paymentMethod: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    issueDate?: true
    dueDate?: true
    amount?: true
    status?: true
    paymentMethod?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    issueDate?: true
    dueDate?: true
    amount?: true
    status?: true
    paymentMethod?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    issueDate?: true
    dueDate?: true
    amount?: true
    status?: true
    paymentMethod?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    subscriptionId: string
    issueDate: Date
    dueDate: Date
    amount: number
    status: $Enums.InvoiceStatus
    paymentMethod: string | null
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    issueDate?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    issueDate?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    issueDate?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    issueDate?: boolean
    dueDate?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "issueDate" | "dueDate" | "amount" | "status" | "paymentMethod", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      issueDate: Date
      dueDate: Date
      amount: number
      status: $Enums.InvoiceStatus
      paymentMethod: string | null
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly subscriptionId: FieldRef<"Invoice", 'String'>
    readonly issueDate: FieldRef<"Invoice", 'DateTime'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly paymentMethod: FieldRef<"Invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model DocumentLink
   */

  export type AggregateDocumentLink = {
    _count: DocumentLinkCountAggregateOutputType | null
    _min: DocumentLinkMinAggregateOutputType | null
    _max: DocumentLinkMaxAggregateOutputType | null
  }

  export type DocumentLinkMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    type: $Enums.DocumentType | null
    url: string | null
    createdAt: Date | null
  }

  export type DocumentLinkMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    type: $Enums.DocumentType | null
    url: string | null
    createdAt: Date | null
  }

  export type DocumentLinkCountAggregateOutputType = {
    id: number
    clientId: number
    type: number
    url: number
    createdAt: number
    _all: number
  }


  export type DocumentLinkMinAggregateInputType = {
    id?: true
    clientId?: true
    type?: true
    url?: true
    createdAt?: true
  }

  export type DocumentLinkMaxAggregateInputType = {
    id?: true
    clientId?: true
    type?: true
    url?: true
    createdAt?: true
  }

  export type DocumentLinkCountAggregateInputType = {
    id?: true
    clientId?: true
    type?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentLink to aggregate.
     */
    where?: DocumentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLinks to fetch.
     */
    orderBy?: DocumentLinkOrderByWithRelationInput | DocumentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentLinks
    **/
    _count?: true | DocumentLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentLinkMaxAggregateInputType
  }

  export type GetDocumentLinkAggregateType<T extends DocumentLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentLink[P]>
      : GetScalarType<T[P], AggregateDocumentLink[P]>
  }




  export type DocumentLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentLinkWhereInput
    orderBy?: DocumentLinkOrderByWithAggregationInput | DocumentLinkOrderByWithAggregationInput[]
    by: DocumentLinkScalarFieldEnum[] | DocumentLinkScalarFieldEnum
    having?: DocumentLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentLinkCountAggregateInputType | true
    _min?: DocumentLinkMinAggregateInputType
    _max?: DocumentLinkMaxAggregateInputType
  }

  export type DocumentLinkGroupByOutputType = {
    id: string
    clientId: string
    type: $Enums.DocumentType
    url: string
    createdAt: Date
    _count: DocumentLinkCountAggregateOutputType | null
    _min: DocumentLinkMinAggregateOutputType | null
    _max: DocumentLinkMaxAggregateOutputType | null
  }

  type GetDocumentLinkGroupByPayload<T extends DocumentLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentLinkGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentLinkGroupByOutputType[P]>
        }
      >
    >


  export type DocumentLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentLink"]>

  export type DocumentLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentLink"]>

  export type DocumentLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentLink"]>

  export type DocumentLinkSelectScalar = {
    id?: boolean
    clientId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type DocumentLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "type" | "url" | "createdAt", ExtArgs["result"]["documentLink"]>
  export type DocumentLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DocumentLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DocumentLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DocumentLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentLink"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      type: $Enums.DocumentType
      url: string
      createdAt: Date
    }, ExtArgs["result"]["documentLink"]>
    composites: {}
  }

  type DocumentLinkGetPayload<S extends boolean | null | undefined | DocumentLinkDefaultArgs> = $Result.GetResult<Prisma.$DocumentLinkPayload, S>

  type DocumentLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentLinkCountAggregateInputType | true
    }

  export interface DocumentLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentLink'], meta: { name: 'DocumentLink' } }
    /**
     * Find zero or one DocumentLink that matches the filter.
     * @param {DocumentLinkFindUniqueArgs} args - Arguments to find a DocumentLink
     * @example
     * // Get one DocumentLink
     * const documentLink = await prisma.documentLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentLinkFindUniqueArgs>(args: SelectSubset<T, DocumentLinkFindUniqueArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentLinkFindUniqueOrThrowArgs} args - Arguments to find a DocumentLink
     * @example
     * // Get one DocumentLink
     * const documentLink = await prisma.documentLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkFindFirstArgs} args - Arguments to find a DocumentLink
     * @example
     * // Get one DocumentLink
     * const documentLink = await prisma.documentLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentLinkFindFirstArgs>(args?: SelectSubset<T, DocumentLinkFindFirstArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkFindFirstOrThrowArgs} args - Arguments to find a DocumentLink
     * @example
     * // Get one DocumentLink
     * const documentLink = await prisma.documentLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentLinks
     * const documentLinks = await prisma.documentLink.findMany()
     * 
     * // Get first 10 DocumentLinks
     * const documentLinks = await prisma.documentLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentLinkWithIdOnly = await prisma.documentLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentLinkFindManyArgs>(args?: SelectSubset<T, DocumentLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentLink.
     * @param {DocumentLinkCreateArgs} args - Arguments to create a DocumentLink.
     * @example
     * // Create one DocumentLink
     * const DocumentLink = await prisma.documentLink.create({
     *   data: {
     *     // ... data to create a DocumentLink
     *   }
     * })
     * 
     */
    create<T extends DocumentLinkCreateArgs>(args: SelectSubset<T, DocumentLinkCreateArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentLinks.
     * @param {DocumentLinkCreateManyArgs} args - Arguments to create many DocumentLinks.
     * @example
     * // Create many DocumentLinks
     * const documentLink = await prisma.documentLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentLinkCreateManyArgs>(args?: SelectSubset<T, DocumentLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentLinks and returns the data saved in the database.
     * @param {DocumentLinkCreateManyAndReturnArgs} args - Arguments to create many DocumentLinks.
     * @example
     * // Create many DocumentLinks
     * const documentLink = await prisma.documentLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentLinks and only return the `id`
     * const documentLinkWithIdOnly = await prisma.documentLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentLink.
     * @param {DocumentLinkDeleteArgs} args - Arguments to delete one DocumentLink.
     * @example
     * // Delete one DocumentLink
     * const DocumentLink = await prisma.documentLink.delete({
     *   where: {
     *     // ... filter to delete one DocumentLink
     *   }
     * })
     * 
     */
    delete<T extends DocumentLinkDeleteArgs>(args: SelectSubset<T, DocumentLinkDeleteArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentLink.
     * @param {DocumentLinkUpdateArgs} args - Arguments to update one DocumentLink.
     * @example
     * // Update one DocumentLink
     * const documentLink = await prisma.documentLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentLinkUpdateArgs>(args: SelectSubset<T, DocumentLinkUpdateArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentLinks.
     * @param {DocumentLinkDeleteManyArgs} args - Arguments to filter DocumentLinks to delete.
     * @example
     * // Delete a few DocumentLinks
     * const { count } = await prisma.documentLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentLinkDeleteManyArgs>(args?: SelectSubset<T, DocumentLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentLinks
     * const documentLink = await prisma.documentLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentLinkUpdateManyArgs>(args: SelectSubset<T, DocumentLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentLinks and returns the data updated in the database.
     * @param {DocumentLinkUpdateManyAndReturnArgs} args - Arguments to update many DocumentLinks.
     * @example
     * // Update many DocumentLinks
     * const documentLink = await prisma.documentLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentLinks and only return the `id`
     * const documentLinkWithIdOnly = await prisma.documentLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentLink.
     * @param {DocumentLinkUpsertArgs} args - Arguments to update or create a DocumentLink.
     * @example
     * // Update or create a DocumentLink
     * const documentLink = await prisma.documentLink.upsert({
     *   create: {
     *     // ... data to create a DocumentLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentLink we want to update
     *   }
     * })
     */
    upsert<T extends DocumentLinkUpsertArgs>(args: SelectSubset<T, DocumentLinkUpsertArgs<ExtArgs>>): Prisma__DocumentLinkClient<$Result.GetResult<Prisma.$DocumentLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkCountArgs} args - Arguments to filter DocumentLinks to count.
     * @example
     * // Count the number of DocumentLinks
     * const count = await prisma.documentLink.count({
     *   where: {
     *     // ... the filter for the DocumentLinks we want to count
     *   }
     * })
    **/
    count<T extends DocumentLinkCountArgs>(
      args?: Subset<T, DocumentLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentLinkAggregateArgs>(args: Subset<T, DocumentLinkAggregateArgs>): Prisma.PrismaPromise<GetDocumentLinkAggregateType<T>>

    /**
     * Group by DocumentLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentLinkGroupByArgs} args - Group by arguments.
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
      T extends DocumentLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentLinkGroupByArgs['orderBy'] }
        : { orderBy?: DocumentLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentLink model
   */
  readonly fields: DocumentLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentLink model
   */
  interface DocumentLinkFieldRefs {
    readonly id: FieldRef<"DocumentLink", 'String'>
    readonly clientId: FieldRef<"DocumentLink", 'String'>
    readonly type: FieldRef<"DocumentLink", 'DocumentType'>
    readonly url: FieldRef<"DocumentLink", 'String'>
    readonly createdAt: FieldRef<"DocumentLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentLink findUnique
   */
  export type DocumentLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentLink to fetch.
     */
    where: DocumentLinkWhereUniqueInput
  }

  /**
   * DocumentLink findUniqueOrThrow
   */
  export type DocumentLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentLink to fetch.
     */
    where: DocumentLinkWhereUniqueInput
  }

  /**
   * DocumentLink findFirst
   */
  export type DocumentLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentLink to fetch.
     */
    where?: DocumentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLinks to fetch.
     */
    orderBy?: DocumentLinkOrderByWithRelationInput | DocumentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentLinks.
     */
    cursor?: DocumentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentLinks.
     */
    distinct?: DocumentLinkScalarFieldEnum | DocumentLinkScalarFieldEnum[]
  }

  /**
   * DocumentLink findFirstOrThrow
   */
  export type DocumentLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentLink to fetch.
     */
    where?: DocumentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLinks to fetch.
     */
    orderBy?: DocumentLinkOrderByWithRelationInput | DocumentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentLinks.
     */
    cursor?: DocumentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentLinks.
     */
    distinct?: DocumentLinkScalarFieldEnum | DocumentLinkScalarFieldEnum[]
  }

  /**
   * DocumentLink findMany
   */
  export type DocumentLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocumentLinks to fetch.
     */
    where?: DocumentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLinks to fetch.
     */
    orderBy?: DocumentLinkOrderByWithRelationInput | DocumentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentLinks.
     */
    cursor?: DocumentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLinks.
     */
    skip?: number
    distinct?: DocumentLinkScalarFieldEnum | DocumentLinkScalarFieldEnum[]
  }

  /**
   * DocumentLink create
   */
  export type DocumentLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentLink.
     */
    data: XOR<DocumentLinkCreateInput, DocumentLinkUncheckedCreateInput>
  }

  /**
   * DocumentLink createMany
   */
  export type DocumentLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentLinks.
     */
    data: DocumentLinkCreateManyInput | DocumentLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentLink createManyAndReturn
   */
  export type DocumentLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentLinks.
     */
    data: DocumentLinkCreateManyInput | DocumentLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentLink update
   */
  export type DocumentLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentLink.
     */
    data: XOR<DocumentLinkUpdateInput, DocumentLinkUncheckedUpdateInput>
    /**
     * Choose, which DocumentLink to update.
     */
    where: DocumentLinkWhereUniqueInput
  }

  /**
   * DocumentLink updateMany
   */
  export type DocumentLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentLinks.
     */
    data: XOR<DocumentLinkUpdateManyMutationInput, DocumentLinkUncheckedUpdateManyInput>
    /**
     * Filter which DocumentLinks to update
     */
    where?: DocumentLinkWhereInput
    /**
     * Limit how many DocumentLinks to update.
     */
    limit?: number
  }

  /**
   * DocumentLink updateManyAndReturn
   */
  export type DocumentLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * The data used to update DocumentLinks.
     */
    data: XOR<DocumentLinkUpdateManyMutationInput, DocumentLinkUncheckedUpdateManyInput>
    /**
     * Filter which DocumentLinks to update
     */
    where?: DocumentLinkWhereInput
    /**
     * Limit how many DocumentLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentLink upsert
   */
  export type DocumentLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentLink to update in case it exists.
     */
    where: DocumentLinkWhereUniqueInput
    /**
     * In case the DocumentLink found by the `where` argument doesn't exist, create a new DocumentLink with this data.
     */
    create: XOR<DocumentLinkCreateInput, DocumentLinkUncheckedCreateInput>
    /**
     * In case the DocumentLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentLinkUpdateInput, DocumentLinkUncheckedUpdateInput>
  }

  /**
   * DocumentLink delete
   */
  export type DocumentLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
    /**
     * Filter which DocumentLink to delete.
     */
    where: DocumentLinkWhereUniqueInput
  }

  /**
   * DocumentLink deleteMany
   */
  export type DocumentLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentLinks to delete
     */
    where?: DocumentLinkWhereInput
    /**
     * Limit how many DocumentLinks to delete.
     */
    limit?: number
  }

  /**
   * DocumentLink without action
   */
  export type DocumentLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentLink
     */
    select?: DocumentLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentLink
     */
    omit?: DocumentLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentLinkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    url: 'url',
    contractStart: 'contractStart',
    contractEnd: 'contractEnd',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ClientsOnSEsScalarFieldEnum: {
    clientId: 'clientId',
    seId: 'seId',
    assignedAt: 'assignedAt'
  };

  export type ClientsOnSEsScalarFieldEnum = (typeof ClientsOnSEsScalarFieldEnum)[keyof typeof ClientsOnSEsScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    clientId: 'clientId',
    createdAt: 'createdAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    departmentId: 'departmentId',
    clientId: 'clientId',
    active: 'active',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    config: 'config',
    workflowId: 'workflowId',
    createdAt: 'createdAt'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const ExecutionLogScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    nodeId: 'nodeId',
    status: 'status',
    timestamp: 'timestamp',
    log: 'log',
    exceptionId: 'exceptionId'
  };

  export type ExecutionLogScalarFieldEnum = (typeof ExecutionLogScalarFieldEnum)[keyof typeof ExecutionLogScalarFieldEnum]


  export const ExceptionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    type: 'type',
    severity: 'severity',
    remedy: 'remedy',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type ExceptionScalarFieldEnum = (typeof ExceptionScalarFieldEnum)[keyof typeof ExceptionScalarFieldEnum]


  export const CredentialScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    service: 'service',
    status: 'status',
    config: 'config',
    createdAt: 'createdAt'
  };

  export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    pricePerCredit: 'pricePerCredit',
    contractLength: 'contractLength',
    cadence: 'cadence',
    setupFee: 'setupFee',
    cap: 'cap',
    overageCost: 'overageCost',
    usageApi: 'usageApi',
    creditsPerPeriod: 'creditsPerPeriod',
    prepaymentPercentage: 'prepaymentPercentage'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    planId: 'planId',
    status: 'status',
    createdAt: 'createdAt',
    billedToDate: 'billedToDate'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    amount: 'amount',
    status: 'status',
    paymentMethod: 'paymentMethod'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const DocumentLinkScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    type: 'type',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type DocumentLinkScalarFieldEnum = (typeof DocumentLinkScalarFieldEnum)[keyof typeof DocumentLinkScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WorkflowStatus'
   */
  export type EnumWorkflowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowStatus'>
    


  /**
   * Reference to a field of type 'WorkflowStatus[]'
   */
  export type ListEnumWorkflowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ExceptionSeverity'
   */
  export type EnumExceptionSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExceptionSeverity'>
    


  /**
   * Reference to a field of type 'ExceptionSeverity[]'
   */
  export type ListEnumExceptionSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExceptionSeverity[]'>
    


  /**
   * Reference to a field of type 'ExceptionStatus'
   */
  export type EnumExceptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExceptionStatus'>
    


  /**
   * Reference to a field of type 'ExceptionStatus[]'
   */
  export type ListEnumExceptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExceptionStatus[]'>
    


  /**
   * Reference to a field of type 'CredentialService'
   */
  export type EnumCredentialServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CredentialService'>
    


  /**
   * Reference to a field of type 'CredentialService[]'
   */
  export type ListEnumCredentialServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CredentialService[]'>
    


  /**
   * Reference to a field of type 'CredentialStatus'
   */
  export type EnumCredentialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CredentialStatus'>
    


  /**
   * Reference to a field of type 'CredentialStatus[]'
   */
  export type ListEnumCredentialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CredentialStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PlanCadence'
   */
  export type EnumPlanCadenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanCadence'>
    


  /**
   * Reference to a field of type 'PlanCadence[]'
   */
  export type ListEnumPlanCadenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanCadence[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientId?: StringNullableFilter<"User"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    assignedClients?: ClientsOnSEsListRelationFilter
    notifiedExceptions?: ExceptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    assignedClients?: ClientsOnSEsOrderByRelationAggregateInput
    notifiedExceptions?: ExceptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientId?: StringNullableFilter<"User"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    assignedClients?: ClientsOnSEsListRelationFilter
    notifiedExceptions?: ExceptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    clientId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    url?: StringNullableFilter<"Client"> | string | null
    contractStart?: DateTimeNullableFilter<"Client"> | Date | string | null
    contractEnd?: DateTimeNullableFilter<"Client"> | Date | string | null
    active?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    users?: UserListRelationFilter
    departments?: DepartmentListRelationFilter
    workflows?: WorkflowListRelationFilter
    credentials?: CredentialListRelationFilter
    documents?: DocumentLinkListRelationFilter
    assignedSEs?: ClientsOnSEsListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    contractStart?: SortOrderInput | SortOrder
    contractEnd?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    departments?: DepartmentOrderByRelationAggregateInput
    workflows?: WorkflowOrderByRelationAggregateInput
    credentials?: CredentialOrderByRelationAggregateInput
    documents?: DocumentLinkOrderByRelationAggregateInput
    assignedSEs?: ClientsOnSEsOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    url?: StringNullableFilter<"Client"> | string | null
    contractStart?: DateTimeNullableFilter<"Client"> | Date | string | null
    contractEnd?: DateTimeNullableFilter<"Client"> | Date | string | null
    active?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    users?: UserListRelationFilter
    departments?: DepartmentListRelationFilter
    workflows?: WorkflowListRelationFilter
    credentials?: CredentialListRelationFilter
    documents?: DocumentLinkListRelationFilter
    assignedSEs?: ClientsOnSEsListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    contractStart?: SortOrderInput | SortOrder
    contractEnd?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    url?: StringNullableWithAggregatesFilter<"Client"> | string | null
    contractStart?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    contractEnd?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    active?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type ClientsOnSEsWhereInput = {
    AND?: ClientsOnSEsWhereInput | ClientsOnSEsWhereInput[]
    OR?: ClientsOnSEsWhereInput[]
    NOT?: ClientsOnSEsWhereInput | ClientsOnSEsWhereInput[]
    clientId?: StringFilter<"ClientsOnSEs"> | string
    seId?: StringFilter<"ClientsOnSEs"> | string
    assignedAt?: DateTimeFilter<"ClientsOnSEs"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    se?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClientsOnSEsOrderByWithRelationInput = {
    clientId?: SortOrder
    seId?: SortOrder
    assignedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    se?: UserOrderByWithRelationInput
  }

  export type ClientsOnSEsWhereUniqueInput = Prisma.AtLeast<{
    clientId_seId?: ClientsOnSEsClientIdSeIdCompoundUniqueInput
    AND?: ClientsOnSEsWhereInput | ClientsOnSEsWhereInput[]
    OR?: ClientsOnSEsWhereInput[]
    NOT?: ClientsOnSEsWhereInput | ClientsOnSEsWhereInput[]
    clientId?: StringFilter<"ClientsOnSEs"> | string
    seId?: StringFilter<"ClientsOnSEs"> | string
    assignedAt?: DateTimeFilter<"ClientsOnSEs"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    se?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "clientId_seId">

  export type ClientsOnSEsOrderByWithAggregationInput = {
    clientId?: SortOrder
    seId?: SortOrder
    assignedAt?: SortOrder
    _count?: ClientsOnSEsCountOrderByAggregateInput
    _max?: ClientsOnSEsMaxOrderByAggregateInput
    _min?: ClientsOnSEsMinOrderByAggregateInput
  }

  export type ClientsOnSEsScalarWhereWithAggregatesInput = {
    AND?: ClientsOnSEsScalarWhereWithAggregatesInput | ClientsOnSEsScalarWhereWithAggregatesInput[]
    OR?: ClientsOnSEsScalarWhereWithAggregatesInput[]
    NOT?: ClientsOnSEsScalarWhereWithAggregatesInput | ClientsOnSEsScalarWhereWithAggregatesInput[]
    clientId?: StringWithAggregatesFilter<"ClientsOnSEs"> | string
    seId?: StringWithAggregatesFilter<"ClientsOnSEs"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"ClientsOnSEs"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    clientId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    workflows?: WorkflowListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    workflows?: WorkflowOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    clientId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    workflows?: WorkflowListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    clientId?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    departmentId?: StringFilter<"Workflow"> | string
    clientId?: StringFilter<"Workflow"> | string
    active?: BoolFilter<"Workflow"> | boolean
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    nodes?: NodeListRelationFilter
    logs?: ExecutionLogListRelationFilter
    exceptions?: ExceptionListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    clientId?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    nodes?: NodeOrderByRelationAggregateInput
    logs?: ExecutionLogOrderByRelationAggregateInput
    exceptions?: ExceptionOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    departmentId?: StringFilter<"Workflow"> | string
    clientId?: StringFilter<"Workflow"> | string
    active?: BoolFilter<"Workflow"> | boolean
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    nodes?: NodeListRelationFilter
    logs?: ExecutionLogListRelationFilter
    exceptions?: ExceptionListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    clientId?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    departmentId?: StringWithAggregatesFilter<"Workflow"> | string
    clientId?: StringWithAggregatesFilter<"Workflow"> | string
    active?: BoolWithAggregatesFilter<"Workflow"> | boolean
    status?: EnumWorkflowStatusWithAggregatesFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type NodeWhereInput = {
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    id?: StringFilter<"Node"> | string
    name?: StringFilter<"Node"> | string
    type?: StringFilter<"Node"> | string
    config?: JsonNullableFilter<"Node">
    workflowId?: StringFilter<"Node"> | string
    createdAt?: DateTimeFilter<"Node"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    logs?: ExecutionLogListRelationFilter
  }

  export type NodeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    config?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    logs?: ExecutionLogOrderByRelationAggregateInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    name?: StringFilter<"Node"> | string
    type?: StringFilter<"Node"> | string
    config?: JsonNullableFilter<"Node">
    workflowId?: StringFilter<"Node"> | string
    createdAt?: DateTimeFilter<"Node"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    logs?: ExecutionLogListRelationFilter
  }, "id">

  export type NodeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    config?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    OR?: NodeScalarWhereWithAggregatesInput[]
    NOT?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Node"> | string
    name?: StringWithAggregatesFilter<"Node"> | string
    type?: StringWithAggregatesFilter<"Node"> | string
    config?: JsonNullableWithAggregatesFilter<"Node">
    workflowId?: StringWithAggregatesFilter<"Node"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
  }

  export type ExecutionLogWhereInput = {
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    workflowId?: StringFilter<"ExecutionLog"> | string
    nodeId?: StringNullableFilter<"ExecutionLog"> | string | null
    status?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    log?: StringNullableFilter<"ExecutionLog"> | string | null
    exceptionId?: StringNullableFilter<"ExecutionLog"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    node?: XOR<NodeNullableScalarRelationFilter, NodeWhereInput> | null
    exception?: XOR<ExceptionNullableScalarRelationFilter, ExceptionWhereInput> | null
  }

  export type ExecutionLogOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    nodeId?: SortOrderInput | SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    log?: SortOrderInput | SortOrder
    exceptionId?: SortOrderInput | SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    node?: NodeOrderByWithRelationInput
    exception?: ExceptionOrderByWithRelationInput
  }

  export type ExecutionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    workflowId?: StringFilter<"ExecutionLog"> | string
    nodeId?: StringNullableFilter<"ExecutionLog"> | string | null
    status?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    log?: StringNullableFilter<"ExecutionLog"> | string | null
    exceptionId?: StringNullableFilter<"ExecutionLog"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    node?: XOR<NodeNullableScalarRelationFilter, NodeWhereInput> | null
    exception?: XOR<ExceptionNullableScalarRelationFilter, ExceptionWhereInput> | null
  }, "id">

  export type ExecutionLogOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    nodeId?: SortOrderInput | SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    log?: SortOrderInput | SortOrder
    exceptionId?: SortOrderInput | SortOrder
    _count?: ExecutionLogCountOrderByAggregateInput
    _max?: ExecutionLogMaxOrderByAggregateInput
    _min?: ExecutionLogMinOrderByAggregateInput
  }

  export type ExecutionLogScalarWhereWithAggregatesInput = {
    AND?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    OR?: ExecutionLogScalarWhereWithAggregatesInput[]
    NOT?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionLog"> | string
    workflowId?: StringWithAggregatesFilter<"ExecutionLog"> | string
    nodeId?: StringNullableWithAggregatesFilter<"ExecutionLog"> | string | null
    status?: StringWithAggregatesFilter<"ExecutionLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ExecutionLog"> | Date | string
    log?: StringNullableWithAggregatesFilter<"ExecutionLog"> | string | null
    exceptionId?: StringNullableWithAggregatesFilter<"ExecutionLog"> | string | null
  }

  export type ExceptionWhereInput = {
    AND?: ExceptionWhereInput | ExceptionWhereInput[]
    OR?: ExceptionWhereInput[]
    NOT?: ExceptionWhereInput | ExceptionWhereInput[]
    id?: StringFilter<"Exception"> | string
    workflowId?: StringFilter<"Exception"> | string
    type?: StringFilter<"Exception"> | string
    severity?: EnumExceptionSeverityFilter<"Exception"> | $Enums.ExceptionSeverity
    remedy?: StringNullableFilter<"Exception"> | string | null
    status?: EnumExceptionStatusFilter<"Exception"> | $Enums.ExceptionStatus
    timestamp?: DateTimeFilter<"Exception"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    notifiedUsers?: UserListRelationFilter
    logs?: ExecutionLogListRelationFilter
  }

  export type ExceptionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    remedy?: SortOrderInput | SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    notifiedUsers?: UserOrderByRelationAggregateInput
    logs?: ExecutionLogOrderByRelationAggregateInput
  }

  export type ExceptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExceptionWhereInput | ExceptionWhereInput[]
    OR?: ExceptionWhereInput[]
    NOT?: ExceptionWhereInput | ExceptionWhereInput[]
    workflowId?: StringFilter<"Exception"> | string
    type?: StringFilter<"Exception"> | string
    severity?: EnumExceptionSeverityFilter<"Exception"> | $Enums.ExceptionSeverity
    remedy?: StringNullableFilter<"Exception"> | string | null
    status?: EnumExceptionStatusFilter<"Exception"> | $Enums.ExceptionStatus
    timestamp?: DateTimeFilter<"Exception"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    notifiedUsers?: UserListRelationFilter
    logs?: ExecutionLogListRelationFilter
  }, "id">

  export type ExceptionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    remedy?: SortOrderInput | SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    _count?: ExceptionCountOrderByAggregateInput
    _max?: ExceptionMaxOrderByAggregateInput
    _min?: ExceptionMinOrderByAggregateInput
  }

  export type ExceptionScalarWhereWithAggregatesInput = {
    AND?: ExceptionScalarWhereWithAggregatesInput | ExceptionScalarWhereWithAggregatesInput[]
    OR?: ExceptionScalarWhereWithAggregatesInput[]
    NOT?: ExceptionScalarWhereWithAggregatesInput | ExceptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exception"> | string
    workflowId?: StringWithAggregatesFilter<"Exception"> | string
    type?: StringWithAggregatesFilter<"Exception"> | string
    severity?: EnumExceptionSeverityWithAggregatesFilter<"Exception"> | $Enums.ExceptionSeverity
    remedy?: StringNullableWithAggregatesFilter<"Exception"> | string | null
    status?: EnumExceptionStatusWithAggregatesFilter<"Exception"> | $Enums.ExceptionStatus
    timestamp?: DateTimeWithAggregatesFilter<"Exception"> | Date | string
  }

  export type CredentialWhereInput = {
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    id?: StringFilter<"Credential"> | string
    clientId?: StringFilter<"Credential"> | string
    service?: EnumCredentialServiceFilter<"Credential"> | $Enums.CredentialService
    status?: EnumCredentialStatusFilter<"Credential"> | $Enums.CredentialStatus
    config?: JsonNullableFilter<"Credential">
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type CredentialOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    service?: SortOrder
    status?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type CredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    clientId?: StringFilter<"Credential"> | string
    service?: EnumCredentialServiceFilter<"Credential"> | $Enums.CredentialService
    status?: EnumCredentialStatusFilter<"Credential"> | $Enums.CredentialStatus
    config?: JsonNullableFilter<"Credential">
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type CredentialOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    service?: SortOrder
    status?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CredentialCountOrderByAggregateInput
    _max?: CredentialMaxOrderByAggregateInput
    _min?: CredentialMinOrderByAggregateInput
  }

  export type CredentialScalarWhereWithAggregatesInput = {
    AND?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    OR?: CredentialScalarWhereWithAggregatesInput[]
    NOT?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credential"> | string
    clientId?: StringWithAggregatesFilter<"Credential"> | string
    service?: EnumCredentialServiceWithAggregatesFilter<"Credential"> | $Enums.CredentialService
    status?: EnumCredentialStatusWithAggregatesFilter<"Credential"> | $Enums.CredentialStatus
    config?: JsonNullableWithAggregatesFilter<"Credential">
    createdAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    pricePerCredit?: FloatFilter<"Plan"> | number
    contractLength?: IntFilter<"Plan"> | number
    cadence?: EnumPlanCadenceFilter<"Plan"> | $Enums.PlanCadence
    setupFee?: FloatNullableFilter<"Plan"> | number | null
    cap?: IntNullableFilter<"Plan"> | number | null
    overageCost?: FloatNullableFilter<"Plan"> | number | null
    usageApi?: StringNullableFilter<"Plan"> | string | null
    creditsPerPeriod?: IntNullableFilter<"Plan"> | number | null
    prepaymentPercentage?: FloatNullableFilter<"Plan"> | number | null
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    cadence?: SortOrder
    setupFee?: SortOrderInput | SortOrder
    cap?: SortOrderInput | SortOrder
    overageCost?: SortOrderInput | SortOrder
    usageApi?: SortOrderInput | SortOrder
    creditsPerPeriod?: SortOrderInput | SortOrder
    prepaymentPercentage?: SortOrderInput | SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    pricePerCredit?: FloatFilter<"Plan"> | number
    contractLength?: IntFilter<"Plan"> | number
    cadence?: EnumPlanCadenceFilter<"Plan"> | $Enums.PlanCadence
    setupFee?: FloatNullableFilter<"Plan"> | number | null
    cap?: IntNullableFilter<"Plan"> | number | null
    overageCost?: FloatNullableFilter<"Plan"> | number | null
    usageApi?: StringNullableFilter<"Plan"> | string | null
    creditsPerPeriod?: IntNullableFilter<"Plan"> | number | null
    prepaymentPercentage?: FloatNullableFilter<"Plan"> | number | null
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    cadence?: SortOrder
    setupFee?: SortOrderInput | SortOrder
    cap?: SortOrderInput | SortOrder
    overageCost?: SortOrderInput | SortOrder
    usageApi?: SortOrderInput | SortOrder
    creditsPerPeriod?: SortOrderInput | SortOrder
    prepaymentPercentage?: SortOrderInput | SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    pricePerCredit?: FloatWithAggregatesFilter<"Plan"> | number
    contractLength?: IntWithAggregatesFilter<"Plan"> | number
    cadence?: EnumPlanCadenceWithAggregatesFilter<"Plan"> | $Enums.PlanCadence
    setupFee?: FloatNullableWithAggregatesFilter<"Plan"> | number | null
    cap?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    overageCost?: FloatNullableWithAggregatesFilter<"Plan"> | number | null
    usageApi?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    creditsPerPeriod?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    prepaymentPercentage?: FloatNullableWithAggregatesFilter<"Plan"> | number | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    clientId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    billedToDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    invoices?: InvoiceListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    billedToDate?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    clientId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    billedToDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    invoices?: InvoiceListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    billedToDate?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    clientId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    billedToDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    subscriptionId?: StringFilter<"Invoice"> | string
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    amount?: FloatFilter<"Invoice"> | number
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    paymentMethod?: StringNullableFilter<"Invoice"> | string | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    subscriptionId?: StringFilter<"Invoice"> | string
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    amount?: FloatFilter<"Invoice"> | number
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    paymentMethod?: StringNullableFilter<"Invoice"> | string | null
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    subscriptionId?: StringWithAggregatesFilter<"Invoice"> | string
    issueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
  }

  export type DocumentLinkWhereInput = {
    AND?: DocumentLinkWhereInput | DocumentLinkWhereInput[]
    OR?: DocumentLinkWhereInput[]
    NOT?: DocumentLinkWhereInput | DocumentLinkWhereInput[]
    id?: StringFilter<"DocumentLink"> | string
    clientId?: StringFilter<"DocumentLink"> | string
    type?: EnumDocumentTypeFilter<"DocumentLink"> | $Enums.DocumentType
    url?: StringFilter<"DocumentLink"> | string
    createdAt?: DateTimeFilter<"DocumentLink"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type DocumentLinkOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type DocumentLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentLinkWhereInput | DocumentLinkWhereInput[]
    OR?: DocumentLinkWhereInput[]
    NOT?: DocumentLinkWhereInput | DocumentLinkWhereInput[]
    clientId?: StringFilter<"DocumentLink"> | string
    type?: EnumDocumentTypeFilter<"DocumentLink"> | $Enums.DocumentType
    url?: StringFilter<"DocumentLink"> | string
    createdAt?: DateTimeFilter<"DocumentLink"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type DocumentLinkOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: DocumentLinkCountOrderByAggregateInput
    _max?: DocumentLinkMaxOrderByAggregateInput
    _min?: DocumentLinkMinOrderByAggregateInput
  }

  export type DocumentLinkScalarWhereWithAggregatesInput = {
    AND?: DocumentLinkScalarWhereWithAggregatesInput | DocumentLinkScalarWhereWithAggregatesInput[]
    OR?: DocumentLinkScalarWhereWithAggregatesInput[]
    NOT?: DocumentLinkScalarWhereWithAggregatesInput | DocumentLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentLink"> | string
    clientId?: StringWithAggregatesFilter<"DocumentLink"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"DocumentLink"> | $Enums.DocumentType
    url?: StringWithAggregatesFilter<"DocumentLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DocumentLink"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUsersInput
    assignedClients?: ClientsOnSEsCreateNestedManyWithoutSeInput
    notifiedExceptions?: ExceptionCreateNestedManyWithoutNotifiedUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    assignedClients?: ClientsOnSEsUncheckedCreateNestedManyWithoutSeInput
    notifiedExceptions?: ExceptionUncheckedCreateNestedManyWithoutNotifiedUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUsersNestedInput
    assignedClients?: ClientsOnSEsUpdateManyWithoutSeNestedInput
    notifiedExceptions?: ExceptionUpdateManyWithoutNotifiedUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedClients?: ClientsOnSEsUncheckedUpdateManyWithoutSeNestedInput
    notifiedExceptions?: ExceptionUncheckedUpdateManyWithoutNotifiedUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    departments?: DepartmentCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsOnSEsCreateInput = {
    assignedAt?: Date | string
    client: ClientCreateNestedOneWithoutAssignedSEsInput
    se: UserCreateNestedOneWithoutAssignedClientsInput
  }

  export type ClientsOnSEsUncheckedCreateInput = {
    clientId: string
    seId: string
    assignedAt?: Date | string
  }

  export type ClientsOnSEsUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAssignedSEsNestedInput
    se?: UserUpdateOneRequiredWithoutAssignedClientsNestedInput
  }

  export type ClientsOnSEsUncheckedUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    seId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsOnSEsCreateManyInput = {
    clientId: string
    seId: string
    assignedAt?: Date | string
  }

  export type ClientsOnSEsUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsOnSEsUncheckedUpdateManyInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    seId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutDepartmentsInput
    workflows?: WorkflowCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    clientId: string
    createdAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDepartmentsNestedInput
    workflows?: WorkflowUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    clientId: string
    createdAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutWorkflowsInput
    client: ClientCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutWorkflowsNestedInput
    client?: ClientUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutNodesInput
    logs?: ExecutionLogCreateNestedManyWithoutNodeInput
  }

  export type NodeUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    workflowId: string
    createdAt?: Date | string
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutNodeInput
  }

  export type NodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodesNestedInput
    logs?: ExecutionLogUpdateManyWithoutNodeNestedInput
  }

  export type NodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ExecutionLogUncheckedUpdateManyWithoutNodeNestedInput
  }

  export type NodeCreateManyInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    workflowId: string
    createdAt?: Date | string
  }

  export type NodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogCreateInput = {
    id?: string
    status: string
    timestamp?: Date | string
    log?: string | null
    workflow: WorkflowCreateNestedOneWithoutLogsInput
    node?: NodeCreateNestedOneWithoutLogsInput
    exception?: ExceptionCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateInput = {
    id?: string
    workflowId: string
    nodeId?: string | null
    status: string
    timestamp?: Date | string
    log?: string | null
    exceptionId?: string | null
  }

  export type ExecutionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutLogsNestedInput
    node?: NodeUpdateOneWithoutLogsNestedInput
    exception?: ExceptionUpdateOneWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    exceptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogCreateManyInput = {
    id?: string
    workflowId: string
    nodeId?: string | null
    status: string
    timestamp?: Date | string
    log?: string | null
    exceptionId?: string | null
  }

  export type ExecutionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    exceptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExceptionCreateInput = {
    id?: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    workflow: WorkflowCreateNestedOneWithoutExceptionsInput
    notifiedUsers?: UserCreateNestedManyWithoutNotifiedExceptionsInput
    logs?: ExecutionLogCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateInput = {
    id?: string
    workflowId: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    notifiedUsers?: UserUncheckedCreateNestedManyWithoutNotifiedExceptionsInput
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutExceptionsNestedInput
    notifiedUsers?: UserUpdateManyWithoutNotifiedExceptionsNestedInput
    logs?: ExecutionLogUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedUsers?: UserUncheckedUpdateManyWithoutNotifiedExceptionsNestedInput
    logs?: ExecutionLogUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionCreateManyInput = {
    id?: string
    workflowId: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
  }

  export type ExceptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExceptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateInput = {
    id?: string
    service: $Enums.CredentialService
    status?: $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialUncheckedCreateInput = {
    id?: string
    clientId: string
    service: $Enums.CredentialService
    status?: $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type CredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateManyInput = {
    id?: string
    clientId: string
    service: $Enums.CredentialService
    status?: $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    pricePerCredit: number
    contractLength: number
    cadence: $Enums.PlanCadence
    setupFee?: number | null
    cap?: number | null
    overageCost?: number | null
    usageApi?: string | null
    creditsPerPeriod?: number | null
    prepaymentPercentage?: number | null
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    pricePerCredit: number
    contractLength: number
    cadence: $Enums.PlanCadence
    setupFee?: number | null
    cap?: number | null
    overageCost?: number | null
    usageApi?: string | null
    creditsPerPeriod?: number | null
    prepaymentPercentage?: number | null
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerCredit?: FloatFieldUpdateOperationsInput | number
    contractLength?: IntFieldUpdateOperationsInput | number
    cadence?: EnumPlanCadenceFieldUpdateOperationsInput | $Enums.PlanCadence
    setupFee?: NullableFloatFieldUpdateOperationsInput | number | null
    cap?: NullableIntFieldUpdateOperationsInput | number | null
    overageCost?: NullableFloatFieldUpdateOperationsInput | number | null
    usageApi?: NullableStringFieldUpdateOperationsInput | string | null
    creditsPerPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    prepaymentPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerCredit?: FloatFieldUpdateOperationsInput | number
    contractLength?: IntFieldUpdateOperationsInput | number
    cadence?: EnumPlanCadenceFieldUpdateOperationsInput | $Enums.PlanCadence
    setupFee?: NullableFloatFieldUpdateOperationsInput | number | null
    cap?: NullableIntFieldUpdateOperationsInput | number | null
    overageCost?: NullableFloatFieldUpdateOperationsInput | number | null
    usageApi?: NullableStringFieldUpdateOperationsInput | string | null
    creditsPerPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    prepaymentPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    pricePerCredit: number
    contractLength: number
    cadence: $Enums.PlanCadence
    setupFee?: number | null
    cap?: number | null
    overageCost?: number | null
    usageApi?: string | null
    creditsPerPeriod?: number | null
    prepaymentPercentage?: number | null
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerCredit?: FloatFieldUpdateOperationsInput | number
    contractLength?: IntFieldUpdateOperationsInput | number
    cadence?: EnumPlanCadenceFieldUpdateOperationsInput | $Enums.PlanCadence
    setupFee?: NullableFloatFieldUpdateOperationsInput | number | null
    cap?: NullableIntFieldUpdateOperationsInput | number | null
    overageCost?: NullableFloatFieldUpdateOperationsInput | number | null
    usageApi?: NullableStringFieldUpdateOperationsInput | string | null
    creditsPerPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    prepaymentPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerCredit?: FloatFieldUpdateOperationsInput | number
    contractLength?: IntFieldUpdateOperationsInput | number
    cadence?: EnumPlanCadenceFieldUpdateOperationsInput | $Enums.PlanCadence
    setupFee?: NullableFloatFieldUpdateOperationsInput | number | null
    cap?: NullableIntFieldUpdateOperationsInput | number | null
    overageCost?: NullableFloatFieldUpdateOperationsInput | number | null
    usageApi?: NullableStringFieldUpdateOperationsInput | string | null
    creditsPerPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    prepaymentPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    client: ClientCreateNestedOneWithoutSubscriptionsInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    invoices?: InvoiceCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    clientId: string
    planId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    invoices?: InvoiceUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    clientId: string
    planId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceCreateInput = {
    id?: string
    issueDate: Date | string
    dueDate: Date | string
    amount: number
    status?: $Enums.InvoiceStatus
    paymentMethod?: string | null
    subscription: SubscriptionCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    issueDate: Date | string
    dueDate: Date | string
    amount: number
    status?: $Enums.InvoiceStatus
    paymentMethod?: string | null
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: SubscriptionUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateManyInput = {
    id?: string
    subscriptionId: string
    issueDate: Date | string
    dueDate: Date | string
    amount: number
    status?: $Enums.InvoiceStatus
    paymentMethod?: string | null
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentLinkCreateInput = {
    id?: string
    type: $Enums.DocumentType
    url: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentLinkUncheckedCreateInput = {
    id?: string
    clientId: string
    type: $Enums.DocumentType
    url: string
    createdAt?: Date | string
  }

  export type DocumentLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentLinkCreateManyInput = {
    id?: string
    clientId: string
    type: $Enums.DocumentType
    url: string
    createdAt?: Date | string
  }

  export type DocumentLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ClientsOnSEsListRelationFilter = {
    every?: ClientsOnSEsWhereInput
    some?: ClientsOnSEsWhereInput
    none?: ClientsOnSEsWhereInput
  }

  export type ExceptionListRelationFilter = {
    every?: ExceptionWhereInput
    some?: ExceptionWhereInput
    none?: ExceptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientsOnSEsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExceptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type CredentialListRelationFilter = {
    every?: CredentialWhereInput
    some?: CredentialWhereInput
    none?: CredentialWhereInput
  }

  export type DocumentLinkListRelationFilter = {
    every?: DocumentLinkWhereInput
    some?: DocumentLinkWhereInput
    none?: DocumentLinkWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CredentialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    contractStart?: SortOrder
    contractEnd?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    contractStart?: SortOrder
    contractEnd?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    contractStart?: SortOrder
    contractEnd?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClientsOnSEsClientIdSeIdCompoundUniqueInput = {
    clientId: string
    seId: string
  }

  export type ClientsOnSEsCountOrderByAggregateInput = {
    clientId?: SortOrder
    seId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ClientsOnSEsMaxOrderByAggregateInput = {
    clientId?: SortOrder
    seId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ClientsOnSEsMinOrderByAggregateInput = {
    clientId?: SortOrder
    seId?: SortOrder
    assignedAt?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowStatusFilter<$PrismaModel> | $Enums.WorkflowStatus
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type NodeListRelationFilter = {
    every?: NodeWhereInput
    some?: NodeWhereInput
    none?: NodeWhereInput
  }

  export type ExecutionLogListRelationFilter = {
    every?: ExecutionLogWhereInput
    some?: ExecutionLogWhereInput
    none?: ExecutionLogWhereInput
  }

  export type NodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    departmentId?: SortOrder
    clientId?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    departmentId?: SortOrder
    clientId?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    departmentId?: SortOrder
    clientId?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowStatusFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type NodeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    config?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    workflowId?: SortOrder
    createdAt?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type NodeNullableScalarRelationFilter = {
    is?: NodeWhereInput | null
    isNot?: NodeWhereInput | null
  }

  export type ExceptionNullableScalarRelationFilter = {
    is?: ExceptionWhereInput | null
    isNot?: ExceptionWhereInput | null
  }

  export type ExecutionLogCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    nodeId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    log?: SortOrder
    exceptionId?: SortOrder
  }

  export type ExecutionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    nodeId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    log?: SortOrder
    exceptionId?: SortOrder
  }

  export type ExecutionLogMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    nodeId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    log?: SortOrder
    exceptionId?: SortOrder
  }

  export type EnumExceptionSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionSeverity | EnumExceptionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionSeverityFilter<$PrismaModel> | $Enums.ExceptionSeverity
  }

  export type EnumExceptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionStatus | EnumExceptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionStatusFilter<$PrismaModel> | $Enums.ExceptionStatus
  }

  export type ExceptionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    remedy?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type ExceptionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    remedy?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type ExceptionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    remedy?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumExceptionSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionSeverity | EnumExceptionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionSeverityWithAggregatesFilter<$PrismaModel> | $Enums.ExceptionSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExceptionSeverityFilter<$PrismaModel>
    _max?: NestedEnumExceptionSeverityFilter<$PrismaModel>
  }

  export type EnumExceptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionStatus | EnumExceptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExceptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExceptionStatusFilter<$PrismaModel>
    _max?: NestedEnumExceptionStatusFilter<$PrismaModel>
  }

  export type EnumCredentialServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialService | EnumCredentialServiceFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialServiceFilter<$PrismaModel> | $Enums.CredentialService
  }

  export type EnumCredentialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialStatus | EnumCredentialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialStatusFilter<$PrismaModel> | $Enums.CredentialStatus
  }

  export type CredentialCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    service?: SortOrder
    status?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type CredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    service?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CredentialMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    service?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCredentialServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialService | EnumCredentialServiceFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialServiceWithAggregatesFilter<$PrismaModel> | $Enums.CredentialService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCredentialServiceFilter<$PrismaModel>
    _max?: NestedEnumCredentialServiceFilter<$PrismaModel>
  }

  export type EnumCredentialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialStatus | EnumCredentialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialStatusWithAggregatesFilter<$PrismaModel> | $Enums.CredentialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCredentialStatusFilter<$PrismaModel>
    _max?: NestedEnumCredentialStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumPlanCadenceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCadence | EnumPlanCadenceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanCadenceFilter<$PrismaModel> | $Enums.PlanCadence
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    cadence?: SortOrder
    setupFee?: SortOrder
    cap?: SortOrder
    overageCost?: SortOrder
    usageApi?: SortOrder
    creditsPerPeriod?: SortOrder
    prepaymentPercentage?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    setupFee?: SortOrder
    cap?: SortOrder
    overageCost?: SortOrder
    creditsPerPeriod?: SortOrder
    prepaymentPercentage?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    cadence?: SortOrder
    setupFee?: SortOrder
    cap?: SortOrder
    overageCost?: SortOrder
    usageApi?: SortOrder
    creditsPerPeriod?: SortOrder
    prepaymentPercentage?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    cadence?: SortOrder
    setupFee?: SortOrder
    cap?: SortOrder
    overageCost?: SortOrder
    usageApi?: SortOrder
    creditsPerPeriod?: SortOrder
    prepaymentPercentage?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    pricePerCredit?: SortOrder
    contractLength?: SortOrder
    setupFee?: SortOrder
    cap?: SortOrder
    overageCost?: SortOrder
    creditsPerPeriod?: SortOrder
    prepaymentPercentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumPlanCadenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCadence | EnumPlanCadenceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanCadenceWithAggregatesFilter<$PrismaModel> | $Enums.PlanCadence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanCadenceFilter<$PrismaModel>
    _max?: NestedEnumPlanCadenceFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    billedToDate?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    billedToDate?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    billedToDate?: SortOrder
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type DocumentLinkCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentLinkMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type ClientCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientsOnSEsCreateNestedManyWithoutSeInput = {
    create?: XOR<ClientsOnSEsCreateWithoutSeInput, ClientsOnSEsUncheckedCreateWithoutSeInput> | ClientsOnSEsCreateWithoutSeInput[] | ClientsOnSEsUncheckedCreateWithoutSeInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutSeInput | ClientsOnSEsCreateOrConnectWithoutSeInput[]
    createMany?: ClientsOnSEsCreateManySeInputEnvelope
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
  }

  export type ExceptionCreateNestedManyWithoutNotifiedUsersInput = {
    create?: XOR<ExceptionCreateWithoutNotifiedUsersInput, ExceptionUncheckedCreateWithoutNotifiedUsersInput> | ExceptionCreateWithoutNotifiedUsersInput[] | ExceptionUncheckedCreateWithoutNotifiedUsersInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutNotifiedUsersInput | ExceptionCreateOrConnectWithoutNotifiedUsersInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
  }

  export type ClientsOnSEsUncheckedCreateNestedManyWithoutSeInput = {
    create?: XOR<ClientsOnSEsCreateWithoutSeInput, ClientsOnSEsUncheckedCreateWithoutSeInput> | ClientsOnSEsCreateWithoutSeInput[] | ClientsOnSEsUncheckedCreateWithoutSeInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutSeInput | ClientsOnSEsCreateOrConnectWithoutSeInput[]
    createMany?: ClientsOnSEsCreateManySeInputEnvelope
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
  }

  export type ExceptionUncheckedCreateNestedManyWithoutNotifiedUsersInput = {
    create?: XOR<ExceptionCreateWithoutNotifiedUsersInput, ExceptionUncheckedCreateWithoutNotifiedUsersInput> | ExceptionCreateWithoutNotifiedUsersInput[] | ExceptionUncheckedCreateWithoutNotifiedUsersInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutNotifiedUsersInput | ExceptionCreateOrConnectWithoutNotifiedUsersInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput
    upsert?: ClientUpsertWithoutUsersInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUsersInput, ClientUpdateWithoutUsersInput>, ClientUncheckedUpdateWithoutUsersInput>
  }

  export type ClientsOnSEsUpdateManyWithoutSeNestedInput = {
    create?: XOR<ClientsOnSEsCreateWithoutSeInput, ClientsOnSEsUncheckedCreateWithoutSeInput> | ClientsOnSEsCreateWithoutSeInput[] | ClientsOnSEsUncheckedCreateWithoutSeInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutSeInput | ClientsOnSEsCreateOrConnectWithoutSeInput[]
    upsert?: ClientsOnSEsUpsertWithWhereUniqueWithoutSeInput | ClientsOnSEsUpsertWithWhereUniqueWithoutSeInput[]
    createMany?: ClientsOnSEsCreateManySeInputEnvelope
    set?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    disconnect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    delete?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    update?: ClientsOnSEsUpdateWithWhereUniqueWithoutSeInput | ClientsOnSEsUpdateWithWhereUniqueWithoutSeInput[]
    updateMany?: ClientsOnSEsUpdateManyWithWhereWithoutSeInput | ClientsOnSEsUpdateManyWithWhereWithoutSeInput[]
    deleteMany?: ClientsOnSEsScalarWhereInput | ClientsOnSEsScalarWhereInput[]
  }

  export type ExceptionUpdateManyWithoutNotifiedUsersNestedInput = {
    create?: XOR<ExceptionCreateWithoutNotifiedUsersInput, ExceptionUncheckedCreateWithoutNotifiedUsersInput> | ExceptionCreateWithoutNotifiedUsersInput[] | ExceptionUncheckedCreateWithoutNotifiedUsersInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutNotifiedUsersInput | ExceptionCreateOrConnectWithoutNotifiedUsersInput[]
    upsert?: ExceptionUpsertWithWhereUniqueWithoutNotifiedUsersInput | ExceptionUpsertWithWhereUniqueWithoutNotifiedUsersInput[]
    set?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    disconnect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    delete?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    update?: ExceptionUpdateWithWhereUniqueWithoutNotifiedUsersInput | ExceptionUpdateWithWhereUniqueWithoutNotifiedUsersInput[]
    updateMany?: ExceptionUpdateManyWithWhereWithoutNotifiedUsersInput | ExceptionUpdateManyWithWhereWithoutNotifiedUsersInput[]
    deleteMany?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
  }

  export type ClientsOnSEsUncheckedUpdateManyWithoutSeNestedInput = {
    create?: XOR<ClientsOnSEsCreateWithoutSeInput, ClientsOnSEsUncheckedCreateWithoutSeInput> | ClientsOnSEsCreateWithoutSeInput[] | ClientsOnSEsUncheckedCreateWithoutSeInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutSeInput | ClientsOnSEsCreateOrConnectWithoutSeInput[]
    upsert?: ClientsOnSEsUpsertWithWhereUniqueWithoutSeInput | ClientsOnSEsUpsertWithWhereUniqueWithoutSeInput[]
    createMany?: ClientsOnSEsCreateManySeInputEnvelope
    set?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    disconnect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    delete?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    update?: ClientsOnSEsUpdateWithWhereUniqueWithoutSeInput | ClientsOnSEsUpdateWithWhereUniqueWithoutSeInput[]
    updateMany?: ClientsOnSEsUpdateManyWithWhereWithoutSeInput | ClientsOnSEsUpdateManyWithWhereWithoutSeInput[]
    deleteMany?: ClientsOnSEsScalarWhereInput | ClientsOnSEsScalarWhereInput[]
  }

  export type ExceptionUncheckedUpdateManyWithoutNotifiedUsersNestedInput = {
    create?: XOR<ExceptionCreateWithoutNotifiedUsersInput, ExceptionUncheckedCreateWithoutNotifiedUsersInput> | ExceptionCreateWithoutNotifiedUsersInput[] | ExceptionUncheckedCreateWithoutNotifiedUsersInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutNotifiedUsersInput | ExceptionCreateOrConnectWithoutNotifiedUsersInput[]
    upsert?: ExceptionUpsertWithWhereUniqueWithoutNotifiedUsersInput | ExceptionUpsertWithWhereUniqueWithoutNotifiedUsersInput[]
    set?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    disconnect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    delete?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    update?: ExceptionUpdateWithWhereUniqueWithoutNotifiedUsersInput | ExceptionUpdateWithWhereUniqueWithoutNotifiedUsersInput[]
    updateMany?: ExceptionUpdateManyWithWhereWithoutNotifiedUsersInput | ExceptionUpdateManyWithWhereWithoutNotifiedUsersInput[]
    deleteMany?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutClientInput = {
    create?: XOR<DepartmentCreateWithoutClientInput, DepartmentUncheckedCreateWithoutClientInput> | DepartmentCreateWithoutClientInput[] | DepartmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutClientInput | DepartmentCreateOrConnectWithoutClientInput[]
    createMany?: DepartmentCreateManyClientInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type WorkflowCreateNestedManyWithoutClientInput = {
    create?: XOR<WorkflowCreateWithoutClientInput, WorkflowUncheckedCreateWithoutClientInput> | WorkflowCreateWithoutClientInput[] | WorkflowUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutClientInput | WorkflowCreateOrConnectWithoutClientInput[]
    createMany?: WorkflowCreateManyClientInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type CredentialCreateNestedManyWithoutClientInput = {
    create?: XOR<CredentialCreateWithoutClientInput, CredentialUncheckedCreateWithoutClientInput> | CredentialCreateWithoutClientInput[] | CredentialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutClientInput | CredentialCreateOrConnectWithoutClientInput[]
    createMany?: CredentialCreateManyClientInputEnvelope
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
  }

  export type DocumentLinkCreateNestedManyWithoutClientInput = {
    create?: XOR<DocumentLinkCreateWithoutClientInput, DocumentLinkUncheckedCreateWithoutClientInput> | DocumentLinkCreateWithoutClientInput[] | DocumentLinkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentLinkCreateOrConnectWithoutClientInput | DocumentLinkCreateOrConnectWithoutClientInput[]
    createMany?: DocumentLinkCreateManyClientInputEnvelope
    connect?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
  }

  export type ClientsOnSEsCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientsOnSEsCreateWithoutClientInput, ClientsOnSEsUncheckedCreateWithoutClientInput> | ClientsOnSEsCreateWithoutClientInput[] | ClientsOnSEsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutClientInput | ClientsOnSEsCreateOrConnectWithoutClientInput[]
    createMany?: ClientsOnSEsCreateManyClientInputEnvelope
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutClientInput = {
    create?: XOR<SubscriptionCreateWithoutClientInput, SubscriptionUncheckedCreateWithoutClientInput> | SubscriptionCreateWithoutClientInput[] | SubscriptionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClientInput | SubscriptionCreateOrConnectWithoutClientInput[]
    createMany?: SubscriptionCreateManyClientInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DepartmentCreateWithoutClientInput, DepartmentUncheckedCreateWithoutClientInput> | DepartmentCreateWithoutClientInput[] | DepartmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutClientInput | DepartmentCreateOrConnectWithoutClientInput[]
    createMany?: DepartmentCreateManyClientInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<WorkflowCreateWithoutClientInput, WorkflowUncheckedCreateWithoutClientInput> | WorkflowCreateWithoutClientInput[] | WorkflowUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutClientInput | WorkflowCreateOrConnectWithoutClientInput[]
    createMany?: WorkflowCreateManyClientInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type CredentialUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CredentialCreateWithoutClientInput, CredentialUncheckedCreateWithoutClientInput> | CredentialCreateWithoutClientInput[] | CredentialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutClientInput | CredentialCreateOrConnectWithoutClientInput[]
    createMany?: CredentialCreateManyClientInputEnvelope
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
  }

  export type DocumentLinkUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DocumentLinkCreateWithoutClientInput, DocumentLinkUncheckedCreateWithoutClientInput> | DocumentLinkCreateWithoutClientInput[] | DocumentLinkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentLinkCreateOrConnectWithoutClientInput | DocumentLinkCreateOrConnectWithoutClientInput[]
    createMany?: DocumentLinkCreateManyClientInputEnvelope
    connect?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
  }

  export type ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientsOnSEsCreateWithoutClientInput, ClientsOnSEsUncheckedCreateWithoutClientInput> | ClientsOnSEsCreateWithoutClientInput[] | ClientsOnSEsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutClientInput | ClientsOnSEsCreateOrConnectWithoutClientInput[]
    createMany?: ClientsOnSEsCreateManyClientInputEnvelope
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SubscriptionCreateWithoutClientInput, SubscriptionUncheckedCreateWithoutClientInput> | SubscriptionCreateWithoutClientInput[] | SubscriptionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClientInput | SubscriptionCreateOrConnectWithoutClientInput[]
    createMany?: SubscriptionCreateManyClientInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientInput | UserUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientInput | UserUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientInput | UserUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<DepartmentCreateWithoutClientInput, DepartmentUncheckedCreateWithoutClientInput> | DepartmentCreateWithoutClientInput[] | DepartmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutClientInput | DepartmentCreateOrConnectWithoutClientInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutClientInput | DepartmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DepartmentCreateManyClientInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutClientInput | DepartmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutClientInput | DepartmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type WorkflowUpdateManyWithoutClientNestedInput = {
    create?: XOR<WorkflowCreateWithoutClientInput, WorkflowUncheckedCreateWithoutClientInput> | WorkflowCreateWithoutClientInput[] | WorkflowUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutClientInput | WorkflowCreateOrConnectWithoutClientInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutClientInput | WorkflowUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: WorkflowCreateManyClientInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutClientInput | WorkflowUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutClientInput | WorkflowUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type CredentialUpdateManyWithoutClientNestedInput = {
    create?: XOR<CredentialCreateWithoutClientInput, CredentialUncheckedCreateWithoutClientInput> | CredentialCreateWithoutClientInput[] | CredentialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutClientInput | CredentialCreateOrConnectWithoutClientInput[]
    upsert?: CredentialUpsertWithWhereUniqueWithoutClientInput | CredentialUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CredentialCreateManyClientInputEnvelope
    set?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    disconnect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    delete?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    update?: CredentialUpdateWithWhereUniqueWithoutClientInput | CredentialUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CredentialUpdateManyWithWhereWithoutClientInput | CredentialUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
  }

  export type DocumentLinkUpdateManyWithoutClientNestedInput = {
    create?: XOR<DocumentLinkCreateWithoutClientInput, DocumentLinkUncheckedCreateWithoutClientInput> | DocumentLinkCreateWithoutClientInput[] | DocumentLinkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentLinkCreateOrConnectWithoutClientInput | DocumentLinkCreateOrConnectWithoutClientInput[]
    upsert?: DocumentLinkUpsertWithWhereUniqueWithoutClientInput | DocumentLinkUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DocumentLinkCreateManyClientInputEnvelope
    set?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    disconnect?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    delete?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    connect?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    update?: DocumentLinkUpdateWithWhereUniqueWithoutClientInput | DocumentLinkUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DocumentLinkUpdateManyWithWhereWithoutClientInput | DocumentLinkUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DocumentLinkScalarWhereInput | DocumentLinkScalarWhereInput[]
  }

  export type ClientsOnSEsUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientsOnSEsCreateWithoutClientInput, ClientsOnSEsUncheckedCreateWithoutClientInput> | ClientsOnSEsCreateWithoutClientInput[] | ClientsOnSEsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutClientInput | ClientsOnSEsCreateOrConnectWithoutClientInput[]
    upsert?: ClientsOnSEsUpsertWithWhereUniqueWithoutClientInput | ClientsOnSEsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientsOnSEsCreateManyClientInputEnvelope
    set?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    disconnect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    delete?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    update?: ClientsOnSEsUpdateWithWhereUniqueWithoutClientInput | ClientsOnSEsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientsOnSEsUpdateManyWithWhereWithoutClientInput | ClientsOnSEsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientsOnSEsScalarWhereInput | ClientsOnSEsScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutClientNestedInput = {
    create?: XOR<SubscriptionCreateWithoutClientInput, SubscriptionUncheckedCreateWithoutClientInput> | SubscriptionCreateWithoutClientInput[] | SubscriptionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClientInput | SubscriptionCreateOrConnectWithoutClientInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutClientInput | SubscriptionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SubscriptionCreateManyClientInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutClientInput | SubscriptionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutClientInput | SubscriptionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientInput | UserUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientInput | UserUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientInput | UserUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DepartmentCreateWithoutClientInput, DepartmentUncheckedCreateWithoutClientInput> | DepartmentCreateWithoutClientInput[] | DepartmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutClientInput | DepartmentCreateOrConnectWithoutClientInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutClientInput | DepartmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DepartmentCreateManyClientInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutClientInput | DepartmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutClientInput | DepartmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<WorkflowCreateWithoutClientInput, WorkflowUncheckedCreateWithoutClientInput> | WorkflowCreateWithoutClientInput[] | WorkflowUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutClientInput | WorkflowCreateOrConnectWithoutClientInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutClientInput | WorkflowUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: WorkflowCreateManyClientInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutClientInput | WorkflowUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutClientInput | WorkflowUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type CredentialUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CredentialCreateWithoutClientInput, CredentialUncheckedCreateWithoutClientInput> | CredentialCreateWithoutClientInput[] | CredentialUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutClientInput | CredentialCreateOrConnectWithoutClientInput[]
    upsert?: CredentialUpsertWithWhereUniqueWithoutClientInput | CredentialUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CredentialCreateManyClientInputEnvelope
    set?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    disconnect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    delete?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    update?: CredentialUpdateWithWhereUniqueWithoutClientInput | CredentialUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CredentialUpdateManyWithWhereWithoutClientInput | CredentialUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
  }

  export type DocumentLinkUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DocumentLinkCreateWithoutClientInput, DocumentLinkUncheckedCreateWithoutClientInput> | DocumentLinkCreateWithoutClientInput[] | DocumentLinkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentLinkCreateOrConnectWithoutClientInput | DocumentLinkCreateOrConnectWithoutClientInput[]
    upsert?: DocumentLinkUpsertWithWhereUniqueWithoutClientInput | DocumentLinkUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DocumentLinkCreateManyClientInputEnvelope
    set?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    disconnect?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    delete?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    connect?: DocumentLinkWhereUniqueInput | DocumentLinkWhereUniqueInput[]
    update?: DocumentLinkUpdateWithWhereUniqueWithoutClientInput | DocumentLinkUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DocumentLinkUpdateManyWithWhereWithoutClientInput | DocumentLinkUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DocumentLinkScalarWhereInput | DocumentLinkScalarWhereInput[]
  }

  export type ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientsOnSEsCreateWithoutClientInput, ClientsOnSEsUncheckedCreateWithoutClientInput> | ClientsOnSEsCreateWithoutClientInput[] | ClientsOnSEsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientsOnSEsCreateOrConnectWithoutClientInput | ClientsOnSEsCreateOrConnectWithoutClientInput[]
    upsert?: ClientsOnSEsUpsertWithWhereUniqueWithoutClientInput | ClientsOnSEsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientsOnSEsCreateManyClientInputEnvelope
    set?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    disconnect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    delete?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    connect?: ClientsOnSEsWhereUniqueInput | ClientsOnSEsWhereUniqueInput[]
    update?: ClientsOnSEsUpdateWithWhereUniqueWithoutClientInput | ClientsOnSEsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientsOnSEsUpdateManyWithWhereWithoutClientInput | ClientsOnSEsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientsOnSEsScalarWhereInput | ClientsOnSEsScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SubscriptionCreateWithoutClientInput, SubscriptionUncheckedCreateWithoutClientInput> | SubscriptionCreateWithoutClientInput[] | SubscriptionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutClientInput | SubscriptionCreateOrConnectWithoutClientInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutClientInput | SubscriptionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SubscriptionCreateManyClientInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutClientInput | SubscriptionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutClientInput | SubscriptionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAssignedSEsInput = {
    create?: XOR<ClientCreateWithoutAssignedSEsInput, ClientUncheckedCreateWithoutAssignedSEsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAssignedSEsInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedClientsInput = {
    create?: XOR<UserCreateWithoutAssignedClientsInput, UserUncheckedCreateWithoutAssignedClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutAssignedSEsNestedInput = {
    create?: XOR<ClientCreateWithoutAssignedSEsInput, ClientUncheckedCreateWithoutAssignedSEsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAssignedSEsInput
    upsert?: ClientUpsertWithoutAssignedSEsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAssignedSEsInput, ClientUpdateWithoutAssignedSEsInput>, ClientUncheckedUpdateWithoutAssignedSEsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedClientsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedClientsInput, UserUncheckedCreateWithoutAssignedClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedClientsInput
    upsert?: UserUpsertWithoutAssignedClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedClientsInput, UserUpdateWithoutAssignedClientsInput>, UserUncheckedUpdateWithoutAssignedClientsInput>
  }

  export type ClientCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<ClientCreateWithoutDepartmentsInput, ClientUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDepartmentsInput
    connect?: ClientWhereUniqueInput
  }

  export type WorkflowCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<WorkflowCreateWithoutDepartmentInput, WorkflowUncheckedCreateWithoutDepartmentInput> | WorkflowCreateWithoutDepartmentInput[] | WorkflowUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutDepartmentInput | WorkflowCreateOrConnectWithoutDepartmentInput[]
    createMany?: WorkflowCreateManyDepartmentInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<WorkflowCreateWithoutDepartmentInput, WorkflowUncheckedCreateWithoutDepartmentInput> | WorkflowCreateWithoutDepartmentInput[] | WorkflowUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutDepartmentInput | WorkflowCreateOrConnectWithoutDepartmentInput[]
    createMany?: WorkflowCreateManyDepartmentInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<ClientCreateWithoutDepartmentsInput, ClientUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDepartmentsInput
    upsert?: ClientUpsertWithoutDepartmentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDepartmentsInput, ClientUpdateWithoutDepartmentsInput>, ClientUncheckedUpdateWithoutDepartmentsInput>
  }

  export type WorkflowUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<WorkflowCreateWithoutDepartmentInput, WorkflowUncheckedCreateWithoutDepartmentInput> | WorkflowCreateWithoutDepartmentInput[] | WorkflowUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutDepartmentInput | WorkflowCreateOrConnectWithoutDepartmentInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutDepartmentInput | WorkflowUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: WorkflowCreateManyDepartmentInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutDepartmentInput | WorkflowUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutDepartmentInput | WorkflowUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<WorkflowCreateWithoutDepartmentInput, WorkflowUncheckedCreateWithoutDepartmentInput> | WorkflowCreateWithoutDepartmentInput[] | WorkflowUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutDepartmentInput | WorkflowCreateOrConnectWithoutDepartmentInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutDepartmentInput | WorkflowUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: WorkflowCreateManyDepartmentInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutDepartmentInput | WorkflowUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutDepartmentInput | WorkflowUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<DepartmentCreateWithoutWorkflowsInput, DepartmentUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutWorkflowsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<ClientCreateWithoutWorkflowsInput, ClientUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutWorkflowsInput
    connect?: ClientWhereUniqueInput
  }

  export type NodeCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type ExecutionLogCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type ExceptionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExceptionCreateWithoutWorkflowInput, ExceptionUncheckedCreateWithoutWorkflowInput> | ExceptionCreateWithoutWorkflowInput[] | ExceptionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutWorkflowInput | ExceptionCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExceptionCreateManyWorkflowInputEnvelope
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
  }

  export type NodeUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type ExceptionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExceptionCreateWithoutWorkflowInput, ExceptionUncheckedCreateWithoutWorkflowInput> | ExceptionCreateWithoutWorkflowInput[] | ExceptionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutWorkflowInput | ExceptionCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExceptionCreateManyWorkflowInputEnvelope
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
  }

  export type EnumWorkflowStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowStatus
  }

  export type DepartmentUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<DepartmentCreateWithoutWorkflowsInput, DepartmentUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutWorkflowsInput
    upsert?: DepartmentUpsertWithoutWorkflowsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutWorkflowsInput, DepartmentUpdateWithoutWorkflowsInput>, DepartmentUncheckedUpdateWithoutWorkflowsInput>
  }

  export type ClientUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<ClientCreateWithoutWorkflowsInput, ClientUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutWorkflowsInput
    upsert?: ClientUpsertWithoutWorkflowsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutWorkflowsInput, ClientUpdateWithoutWorkflowsInput>, ClientUncheckedUpdateWithoutWorkflowsInput>
  }

  export type NodeUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutWorkflowInput | NodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutWorkflowInput | NodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutWorkflowInput | NodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type ExecutionLogUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutWorkflowInput | ExecutionLogUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExceptionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExceptionCreateWithoutWorkflowInput, ExceptionUncheckedCreateWithoutWorkflowInput> | ExceptionCreateWithoutWorkflowInput[] | ExceptionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutWorkflowInput | ExceptionCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExceptionUpsertWithWhereUniqueWithoutWorkflowInput | ExceptionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExceptionCreateManyWorkflowInputEnvelope
    set?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    disconnect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    delete?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    update?: ExceptionUpdateWithWhereUniqueWithoutWorkflowInput | ExceptionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExceptionUpdateManyWithWhereWithoutWorkflowInput | ExceptionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
  }

  export type NodeUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutWorkflowInput | NodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutWorkflowInput | NodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutWorkflowInput | NodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput> | ExecutionLogCreateWithoutWorkflowInput[] | ExecutionLogUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutWorkflowInput | ExecutionLogCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionLogCreateManyWorkflowInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutWorkflowInput | ExecutionLogUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExceptionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExceptionCreateWithoutWorkflowInput, ExceptionUncheckedCreateWithoutWorkflowInput> | ExceptionCreateWithoutWorkflowInput[] | ExceptionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutWorkflowInput | ExceptionCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExceptionUpsertWithWhereUniqueWithoutWorkflowInput | ExceptionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExceptionCreateManyWorkflowInputEnvelope
    set?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    disconnect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    delete?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    update?: ExceptionUpdateWithWhereUniqueWithoutWorkflowInput | ExceptionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExceptionUpdateManyWithWhereWithoutWorkflowInput | ExceptionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutNodesInput = {
    create?: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodesInput
    connect?: WorkflowWhereUniqueInput
  }

  export type ExecutionLogCreateNestedManyWithoutNodeInput = {
    create?: XOR<ExecutionLogCreateWithoutNodeInput, ExecutionLogUncheckedCreateWithoutNodeInput> | ExecutionLogCreateWithoutNodeInput[] | ExecutionLogUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutNodeInput | ExecutionLogCreateOrConnectWithoutNodeInput[]
    createMany?: ExecutionLogCreateManyNodeInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutNodeInput = {
    create?: XOR<ExecutionLogCreateWithoutNodeInput, ExecutionLogUncheckedCreateWithoutNodeInput> | ExecutionLogCreateWithoutNodeInput[] | ExecutionLogUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutNodeInput | ExecutionLogCreateOrConnectWithoutNodeInput[]
    createMany?: ExecutionLogCreateManyNodeInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type WorkflowUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodesInput
    upsert?: WorkflowUpsertWithoutNodesInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutNodesInput, WorkflowUpdateWithoutNodesInput>, WorkflowUncheckedUpdateWithoutNodesInput>
  }

  export type ExecutionLogUpdateManyWithoutNodeNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutNodeInput, ExecutionLogUncheckedCreateWithoutNodeInput> | ExecutionLogCreateWithoutNodeInput[] | ExecutionLogUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutNodeInput | ExecutionLogCreateOrConnectWithoutNodeInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutNodeInput | ExecutionLogUpsertWithWhereUniqueWithoutNodeInput[]
    createMany?: ExecutionLogCreateManyNodeInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutNodeInput | ExecutionLogUpdateWithWhereUniqueWithoutNodeInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutNodeInput | ExecutionLogUpdateManyWithWhereWithoutNodeInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutNodeNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutNodeInput, ExecutionLogUncheckedCreateWithoutNodeInput> | ExecutionLogCreateWithoutNodeInput[] | ExecutionLogUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutNodeInput | ExecutionLogCreateOrConnectWithoutNodeInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutNodeInput | ExecutionLogUpsertWithWhereUniqueWithoutNodeInput[]
    createMany?: ExecutionLogCreateManyNodeInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutNodeInput | ExecutionLogUpdateWithWhereUniqueWithoutNodeInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutNodeInput | ExecutionLogUpdateManyWithWhereWithoutNodeInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutLogsInput = {
    create?: XOR<WorkflowCreateWithoutLogsInput, WorkflowUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutLogsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type NodeCreateNestedOneWithoutLogsInput = {
    create?: XOR<NodeCreateWithoutLogsInput, NodeUncheckedCreateWithoutLogsInput>
    connectOrCreate?: NodeCreateOrConnectWithoutLogsInput
    connect?: NodeWhereUniqueInput
  }

  export type ExceptionCreateNestedOneWithoutLogsInput = {
    create?: XOR<ExceptionCreateWithoutLogsInput, ExceptionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExceptionCreateOrConnectWithoutLogsInput
    connect?: ExceptionWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<WorkflowCreateWithoutLogsInput, WorkflowUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutLogsInput
    upsert?: WorkflowUpsertWithoutLogsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutLogsInput, WorkflowUpdateWithoutLogsInput>, WorkflowUncheckedUpdateWithoutLogsInput>
  }

  export type NodeUpdateOneWithoutLogsNestedInput = {
    create?: XOR<NodeCreateWithoutLogsInput, NodeUncheckedCreateWithoutLogsInput>
    connectOrCreate?: NodeCreateOrConnectWithoutLogsInput
    upsert?: NodeUpsertWithoutLogsInput
    disconnect?: NodeWhereInput | boolean
    delete?: NodeWhereInput | boolean
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutLogsInput, NodeUpdateWithoutLogsInput>, NodeUncheckedUpdateWithoutLogsInput>
  }

  export type ExceptionUpdateOneWithoutLogsNestedInput = {
    create?: XOR<ExceptionCreateWithoutLogsInput, ExceptionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExceptionCreateOrConnectWithoutLogsInput
    upsert?: ExceptionUpsertWithoutLogsInput
    disconnect?: ExceptionWhereInput | boolean
    delete?: ExceptionWhereInput | boolean
    connect?: ExceptionWhereUniqueInput
    update?: XOR<XOR<ExceptionUpdateToOneWithWhereWithoutLogsInput, ExceptionUpdateWithoutLogsInput>, ExceptionUncheckedUpdateWithoutLogsInput>
  }

  export type WorkflowCreateNestedOneWithoutExceptionsInput = {
    create?: XOR<WorkflowCreateWithoutExceptionsInput, WorkflowUncheckedCreateWithoutExceptionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExceptionsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutNotifiedExceptionsInput = {
    create?: XOR<UserCreateWithoutNotifiedExceptionsInput, UserUncheckedCreateWithoutNotifiedExceptionsInput> | UserCreateWithoutNotifiedExceptionsInput[] | UserUncheckedCreateWithoutNotifiedExceptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutNotifiedExceptionsInput | UserCreateOrConnectWithoutNotifiedExceptionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExecutionLogCreateNestedManyWithoutExceptionInput = {
    create?: XOR<ExecutionLogCreateWithoutExceptionInput, ExecutionLogUncheckedCreateWithoutExceptionInput> | ExecutionLogCreateWithoutExceptionInput[] | ExecutionLogUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExceptionInput | ExecutionLogCreateOrConnectWithoutExceptionInput[]
    createMany?: ExecutionLogCreateManyExceptionInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutNotifiedExceptionsInput = {
    create?: XOR<UserCreateWithoutNotifiedExceptionsInput, UserUncheckedCreateWithoutNotifiedExceptionsInput> | UserCreateWithoutNotifiedExceptionsInput[] | UserUncheckedCreateWithoutNotifiedExceptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutNotifiedExceptionsInput | UserCreateOrConnectWithoutNotifiedExceptionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutExceptionInput = {
    create?: XOR<ExecutionLogCreateWithoutExceptionInput, ExecutionLogUncheckedCreateWithoutExceptionInput> | ExecutionLogCreateWithoutExceptionInput[] | ExecutionLogUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExceptionInput | ExecutionLogCreateOrConnectWithoutExceptionInput[]
    createMany?: ExecutionLogCreateManyExceptionInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type EnumExceptionSeverityFieldUpdateOperationsInput = {
    set?: $Enums.ExceptionSeverity
  }

  export type EnumExceptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExceptionStatus
  }

  export type WorkflowUpdateOneRequiredWithoutExceptionsNestedInput = {
    create?: XOR<WorkflowCreateWithoutExceptionsInput, WorkflowUncheckedCreateWithoutExceptionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExceptionsInput
    upsert?: WorkflowUpsertWithoutExceptionsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutExceptionsInput, WorkflowUpdateWithoutExceptionsInput>, WorkflowUncheckedUpdateWithoutExceptionsInput>
  }

  export type UserUpdateManyWithoutNotifiedExceptionsNestedInput = {
    create?: XOR<UserCreateWithoutNotifiedExceptionsInput, UserUncheckedCreateWithoutNotifiedExceptionsInput> | UserCreateWithoutNotifiedExceptionsInput[] | UserUncheckedCreateWithoutNotifiedExceptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutNotifiedExceptionsInput | UserCreateOrConnectWithoutNotifiedExceptionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutNotifiedExceptionsInput | UserUpsertWithWhereUniqueWithoutNotifiedExceptionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutNotifiedExceptionsInput | UserUpdateWithWhereUniqueWithoutNotifiedExceptionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutNotifiedExceptionsInput | UserUpdateManyWithWhereWithoutNotifiedExceptionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExecutionLogUpdateManyWithoutExceptionNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutExceptionInput, ExecutionLogUncheckedCreateWithoutExceptionInput> | ExecutionLogCreateWithoutExceptionInput[] | ExecutionLogUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExceptionInput | ExecutionLogCreateOrConnectWithoutExceptionInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutExceptionInput | ExecutionLogUpsertWithWhereUniqueWithoutExceptionInput[]
    createMany?: ExecutionLogCreateManyExceptionInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutExceptionInput | ExecutionLogUpdateWithWhereUniqueWithoutExceptionInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutExceptionInput | ExecutionLogUpdateManyWithWhereWithoutExceptionInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutNotifiedExceptionsNestedInput = {
    create?: XOR<UserCreateWithoutNotifiedExceptionsInput, UserUncheckedCreateWithoutNotifiedExceptionsInput> | UserCreateWithoutNotifiedExceptionsInput[] | UserUncheckedCreateWithoutNotifiedExceptionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutNotifiedExceptionsInput | UserCreateOrConnectWithoutNotifiedExceptionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutNotifiedExceptionsInput | UserUpsertWithWhereUniqueWithoutNotifiedExceptionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutNotifiedExceptionsInput | UserUpdateWithWhereUniqueWithoutNotifiedExceptionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutNotifiedExceptionsInput | UserUpdateManyWithWhereWithoutNotifiedExceptionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutExceptionNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutExceptionInput, ExecutionLogUncheckedCreateWithoutExceptionInput> | ExecutionLogCreateWithoutExceptionInput[] | ExecutionLogUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExceptionInput | ExecutionLogCreateOrConnectWithoutExceptionInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutExceptionInput | ExecutionLogUpsertWithWhereUniqueWithoutExceptionInput[]
    createMany?: ExecutionLogCreateManyExceptionInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutExceptionInput | ExecutionLogUpdateWithWhereUniqueWithoutExceptionInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutExceptionInput | ExecutionLogUpdateManyWithWhereWithoutExceptionInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<ClientCreateWithoutCredentialsInput, ClientUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCredentialsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumCredentialServiceFieldUpdateOperationsInput = {
    set?: $Enums.CredentialService
  }

  export type EnumCredentialStatusFieldUpdateOperationsInput = {
    set?: $Enums.CredentialStatus
  }

  export type ClientUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<ClientCreateWithoutCredentialsInput, ClientUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCredentialsInput
    upsert?: ClientUpsertWithoutCredentialsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCredentialsInput, ClientUpdateWithoutCredentialsInput>, ClientUncheckedUpdateWithoutCredentialsInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPlanCadenceFieldUpdateOperationsInput = {
    set?: $Enums.PlanCadence
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<ClientCreateWithoutSubscriptionsInput, ClientUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSubscriptionsInput
    connect?: ClientWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<ClientCreateWithoutSubscriptionsInput, ClientUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSubscriptionsInput
    upsert?: ClientUpsertWithoutSubscriptionsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSubscriptionsInput, ClientUpdateWithoutSubscriptionsInput>, ClientUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type InvoiceUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput | InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput | InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSubscriptionInput | InvoiceUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput | InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput | InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSubscriptionInput | InvoiceUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInvoicesInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type SubscriptionUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInvoicesInput
    upsert?: SubscriptionUpsertWithoutInvoicesInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutInvoicesInput, SubscriptionUpdateWithoutInvoicesInput>, SubscriptionUncheckedUpdateWithoutInvoicesInput>
  }

  export type ClientCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type ClientUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    upsert?: ClientUpsertWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDocumentsInput, ClientUpdateWithoutDocumentsInput>, ClientUncheckedUpdateWithoutDocumentsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowStatusFilter<$PrismaModel> | $Enums.WorkflowStatus
  }

  export type NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowStatus[] | ListEnumWorkflowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowStatusFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
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

  export type NestedEnumExceptionSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionSeverity | EnumExceptionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionSeverityFilter<$PrismaModel> | $Enums.ExceptionSeverity
  }

  export type NestedEnumExceptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionStatus | EnumExceptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionStatusFilter<$PrismaModel> | $Enums.ExceptionStatus
  }

  export type NestedEnumExceptionSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionSeverity | EnumExceptionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionSeverity[] | ListEnumExceptionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionSeverityWithAggregatesFilter<$PrismaModel> | $Enums.ExceptionSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExceptionSeverityFilter<$PrismaModel>
    _max?: NestedEnumExceptionSeverityFilter<$PrismaModel>
  }

  export type NestedEnumExceptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionStatus | EnumExceptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExceptionStatus[] | ListEnumExceptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExceptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExceptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExceptionStatusFilter<$PrismaModel>
    _max?: NestedEnumExceptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumCredentialServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialService | EnumCredentialServiceFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialServiceFilter<$PrismaModel> | $Enums.CredentialService
  }

  export type NestedEnumCredentialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialStatus | EnumCredentialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialStatusFilter<$PrismaModel> | $Enums.CredentialStatus
  }

  export type NestedEnumCredentialServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialService | EnumCredentialServiceFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialService[] | ListEnumCredentialServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialServiceWithAggregatesFilter<$PrismaModel> | $Enums.CredentialService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCredentialServiceFilter<$PrismaModel>
    _max?: NestedEnumCredentialServiceFilter<$PrismaModel>
  }

  export type NestedEnumCredentialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialStatus | EnumCredentialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CredentialStatus[] | ListEnumCredentialStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCredentialStatusWithAggregatesFilter<$PrismaModel> | $Enums.CredentialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCredentialStatusFilter<$PrismaModel>
    _max?: NestedEnumCredentialStatusFilter<$PrismaModel>
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

  export type NestedEnumPlanCadenceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCadence | EnumPlanCadenceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanCadenceFilter<$PrismaModel> | $Enums.PlanCadence
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumPlanCadenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCadence | EnumPlanCadenceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanCadence[] | ListEnumPlanCadenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanCadenceWithAggregatesFilter<$PrismaModel> | $Enums.PlanCadence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanCadenceFilter<$PrismaModel>
    _max?: NestedEnumPlanCadenceFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type ClientCreateWithoutUsersInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUsersInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUsersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
  }

  export type ClientsOnSEsCreateWithoutSeInput = {
    assignedAt?: Date | string
    client: ClientCreateNestedOneWithoutAssignedSEsInput
  }

  export type ClientsOnSEsUncheckedCreateWithoutSeInput = {
    clientId: string
    assignedAt?: Date | string
  }

  export type ClientsOnSEsCreateOrConnectWithoutSeInput = {
    where: ClientsOnSEsWhereUniqueInput
    create: XOR<ClientsOnSEsCreateWithoutSeInput, ClientsOnSEsUncheckedCreateWithoutSeInput>
  }

  export type ClientsOnSEsCreateManySeInputEnvelope = {
    data: ClientsOnSEsCreateManySeInput | ClientsOnSEsCreateManySeInput[]
    skipDuplicates?: boolean
  }

  export type ExceptionCreateWithoutNotifiedUsersInput = {
    id?: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    workflow: WorkflowCreateNestedOneWithoutExceptionsInput
    logs?: ExecutionLogCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateWithoutNotifiedUsersInput = {
    id?: string
    workflowId: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionCreateOrConnectWithoutNotifiedUsersInput = {
    where: ExceptionWhereUniqueInput
    create: XOR<ExceptionCreateWithoutNotifiedUsersInput, ExceptionUncheckedCreateWithoutNotifiedUsersInput>
  }

  export type ClientUpsertWithoutUsersInput = {
    update: XOR<ClientUpdateWithoutUsersInput, ClientUncheckedUpdateWithoutUsersInput>
    create: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutUsersInput, ClientUncheckedUpdateWithoutUsersInput>
  }

  export type ClientUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsOnSEsUpsertWithWhereUniqueWithoutSeInput = {
    where: ClientsOnSEsWhereUniqueInput
    update: XOR<ClientsOnSEsUpdateWithoutSeInput, ClientsOnSEsUncheckedUpdateWithoutSeInput>
    create: XOR<ClientsOnSEsCreateWithoutSeInput, ClientsOnSEsUncheckedCreateWithoutSeInput>
  }

  export type ClientsOnSEsUpdateWithWhereUniqueWithoutSeInput = {
    where: ClientsOnSEsWhereUniqueInput
    data: XOR<ClientsOnSEsUpdateWithoutSeInput, ClientsOnSEsUncheckedUpdateWithoutSeInput>
  }

  export type ClientsOnSEsUpdateManyWithWhereWithoutSeInput = {
    where: ClientsOnSEsScalarWhereInput
    data: XOR<ClientsOnSEsUpdateManyMutationInput, ClientsOnSEsUncheckedUpdateManyWithoutSeInput>
  }

  export type ClientsOnSEsScalarWhereInput = {
    AND?: ClientsOnSEsScalarWhereInput | ClientsOnSEsScalarWhereInput[]
    OR?: ClientsOnSEsScalarWhereInput[]
    NOT?: ClientsOnSEsScalarWhereInput | ClientsOnSEsScalarWhereInput[]
    clientId?: StringFilter<"ClientsOnSEs"> | string
    seId?: StringFilter<"ClientsOnSEs"> | string
    assignedAt?: DateTimeFilter<"ClientsOnSEs"> | Date | string
  }

  export type ExceptionUpsertWithWhereUniqueWithoutNotifiedUsersInput = {
    where: ExceptionWhereUniqueInput
    update: XOR<ExceptionUpdateWithoutNotifiedUsersInput, ExceptionUncheckedUpdateWithoutNotifiedUsersInput>
    create: XOR<ExceptionCreateWithoutNotifiedUsersInput, ExceptionUncheckedCreateWithoutNotifiedUsersInput>
  }

  export type ExceptionUpdateWithWhereUniqueWithoutNotifiedUsersInput = {
    where: ExceptionWhereUniqueInput
    data: XOR<ExceptionUpdateWithoutNotifiedUsersInput, ExceptionUncheckedUpdateWithoutNotifiedUsersInput>
  }

  export type ExceptionUpdateManyWithWhereWithoutNotifiedUsersInput = {
    where: ExceptionScalarWhereInput
    data: XOR<ExceptionUpdateManyMutationInput, ExceptionUncheckedUpdateManyWithoutNotifiedUsersInput>
  }

  export type ExceptionScalarWhereInput = {
    AND?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
    OR?: ExceptionScalarWhereInput[]
    NOT?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
    id?: StringFilter<"Exception"> | string
    workflowId?: StringFilter<"Exception"> | string
    type?: StringFilter<"Exception"> | string
    severity?: EnumExceptionSeverityFilter<"Exception"> | $Enums.ExceptionSeverity
    remedy?: StringNullableFilter<"Exception"> | string | null
    status?: EnumExceptionStatusFilter<"Exception"> | $Enums.ExceptionStatus
    timestamp?: DateTimeFilter<"Exception"> | Date | string
  }

  export type UserCreateWithoutClientInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedClients?: ClientsOnSEsCreateNestedManyWithoutSeInput
    notifiedExceptions?: ExceptionCreateNestedManyWithoutNotifiedUsersInput
  }

  export type UserUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedClients?: ClientsOnSEsUncheckedCreateNestedManyWithoutSeInput
    notifiedExceptions?: ExceptionUncheckedCreateNestedManyWithoutNotifiedUsersInput
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type UserCreateManyClientInputEnvelope = {
    data: UserCreateManyClientInput | UserCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutClientInput = {
    id?: string
    name: string
    createdAt?: Date | string
    workflows?: WorkflowCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    createdAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutClientInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutClientInput, DepartmentUncheckedCreateWithoutClientInput>
  }

  export type DepartmentCreateManyClientInputEnvelope = {
    data: DepartmentCreateManyClientInput | DepartmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowCreateWithoutClientInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutClientInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutClientInput, WorkflowUncheckedCreateWithoutClientInput>
  }

  export type WorkflowCreateManyClientInputEnvelope = {
    data: WorkflowCreateManyClientInput | WorkflowCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CredentialCreateWithoutClientInput = {
    id?: string
    service: $Enums.CredentialService
    status?: $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CredentialUncheckedCreateWithoutClientInput = {
    id?: string
    service: $Enums.CredentialService
    status?: $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CredentialCreateOrConnectWithoutClientInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutClientInput, CredentialUncheckedCreateWithoutClientInput>
  }

  export type CredentialCreateManyClientInputEnvelope = {
    data: CredentialCreateManyClientInput | CredentialCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DocumentLinkCreateWithoutClientInput = {
    id?: string
    type: $Enums.DocumentType
    url: string
    createdAt?: Date | string
  }

  export type DocumentLinkUncheckedCreateWithoutClientInput = {
    id?: string
    type: $Enums.DocumentType
    url: string
    createdAt?: Date | string
  }

  export type DocumentLinkCreateOrConnectWithoutClientInput = {
    where: DocumentLinkWhereUniqueInput
    create: XOR<DocumentLinkCreateWithoutClientInput, DocumentLinkUncheckedCreateWithoutClientInput>
  }

  export type DocumentLinkCreateManyClientInputEnvelope = {
    data: DocumentLinkCreateManyClientInput | DocumentLinkCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientsOnSEsCreateWithoutClientInput = {
    assignedAt?: Date | string
    se: UserCreateNestedOneWithoutAssignedClientsInput
  }

  export type ClientsOnSEsUncheckedCreateWithoutClientInput = {
    seId: string
    assignedAt?: Date | string
  }

  export type ClientsOnSEsCreateOrConnectWithoutClientInput = {
    where: ClientsOnSEsWhereUniqueInput
    create: XOR<ClientsOnSEsCreateWithoutClientInput, ClientsOnSEsUncheckedCreateWithoutClientInput>
  }

  export type ClientsOnSEsCreateManyClientInputEnvelope = {
    data: ClientsOnSEsCreateManyClientInput | ClientsOnSEsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutClientInput = {
    id?: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    invoices?: InvoiceCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutClientInput = {
    id?: string
    planId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutClientInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutClientInput, SubscriptionUncheckedCreateWithoutClientInput>
  }

  export type SubscriptionCreateManyClientInputEnvelope = {
    data: SubscriptionCreateManyClientInput | SubscriptionCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutClientInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClientInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
  }

  export type UserUpdateManyWithWhereWithoutClientInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClientInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientId?: StringNullableFilter<"User"> | string | null
  }

  export type DepartmentUpsertWithWhereUniqueWithoutClientInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutClientInput, DepartmentUncheckedUpdateWithoutClientInput>
    create: XOR<DepartmentCreateWithoutClientInput, DepartmentUncheckedCreateWithoutClientInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutClientInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutClientInput, DepartmentUncheckedUpdateWithoutClientInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutClientInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutClientInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    clientId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type WorkflowUpsertWithWhereUniqueWithoutClientInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutClientInput, WorkflowUncheckedUpdateWithoutClientInput>
    create: XOR<WorkflowCreateWithoutClientInput, WorkflowUncheckedCreateWithoutClientInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutClientInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutClientInput, WorkflowUncheckedUpdateWithoutClientInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutClientInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutClientInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    departmentId?: StringFilter<"Workflow"> | string
    clientId?: StringFilter<"Workflow"> | string
    active?: BoolFilter<"Workflow"> | boolean
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type CredentialUpsertWithWhereUniqueWithoutClientInput = {
    where: CredentialWhereUniqueInput
    update: XOR<CredentialUpdateWithoutClientInput, CredentialUncheckedUpdateWithoutClientInput>
    create: XOR<CredentialCreateWithoutClientInput, CredentialUncheckedCreateWithoutClientInput>
  }

  export type CredentialUpdateWithWhereUniqueWithoutClientInput = {
    where: CredentialWhereUniqueInput
    data: XOR<CredentialUpdateWithoutClientInput, CredentialUncheckedUpdateWithoutClientInput>
  }

  export type CredentialUpdateManyWithWhereWithoutClientInput = {
    where: CredentialScalarWhereInput
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyWithoutClientInput>
  }

  export type CredentialScalarWhereInput = {
    AND?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
    OR?: CredentialScalarWhereInput[]
    NOT?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
    id?: StringFilter<"Credential"> | string
    clientId?: StringFilter<"Credential"> | string
    service?: EnumCredentialServiceFilter<"Credential"> | $Enums.CredentialService
    status?: EnumCredentialStatusFilter<"Credential"> | $Enums.CredentialStatus
    config?: JsonNullableFilter<"Credential">
    createdAt?: DateTimeFilter<"Credential"> | Date | string
  }

  export type DocumentLinkUpsertWithWhereUniqueWithoutClientInput = {
    where: DocumentLinkWhereUniqueInput
    update: XOR<DocumentLinkUpdateWithoutClientInput, DocumentLinkUncheckedUpdateWithoutClientInput>
    create: XOR<DocumentLinkCreateWithoutClientInput, DocumentLinkUncheckedCreateWithoutClientInput>
  }

  export type DocumentLinkUpdateWithWhereUniqueWithoutClientInput = {
    where: DocumentLinkWhereUniqueInput
    data: XOR<DocumentLinkUpdateWithoutClientInput, DocumentLinkUncheckedUpdateWithoutClientInput>
  }

  export type DocumentLinkUpdateManyWithWhereWithoutClientInput = {
    where: DocumentLinkScalarWhereInput
    data: XOR<DocumentLinkUpdateManyMutationInput, DocumentLinkUncheckedUpdateManyWithoutClientInput>
  }

  export type DocumentLinkScalarWhereInput = {
    AND?: DocumentLinkScalarWhereInput | DocumentLinkScalarWhereInput[]
    OR?: DocumentLinkScalarWhereInput[]
    NOT?: DocumentLinkScalarWhereInput | DocumentLinkScalarWhereInput[]
    id?: StringFilter<"DocumentLink"> | string
    clientId?: StringFilter<"DocumentLink"> | string
    type?: EnumDocumentTypeFilter<"DocumentLink"> | $Enums.DocumentType
    url?: StringFilter<"DocumentLink"> | string
    createdAt?: DateTimeFilter<"DocumentLink"> | Date | string
  }

  export type ClientsOnSEsUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientsOnSEsWhereUniqueInput
    update: XOR<ClientsOnSEsUpdateWithoutClientInput, ClientsOnSEsUncheckedUpdateWithoutClientInput>
    create: XOR<ClientsOnSEsCreateWithoutClientInput, ClientsOnSEsUncheckedCreateWithoutClientInput>
  }

  export type ClientsOnSEsUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientsOnSEsWhereUniqueInput
    data: XOR<ClientsOnSEsUpdateWithoutClientInput, ClientsOnSEsUncheckedUpdateWithoutClientInput>
  }

  export type ClientsOnSEsUpdateManyWithWhereWithoutClientInput = {
    where: ClientsOnSEsScalarWhereInput
    data: XOR<ClientsOnSEsUpdateManyMutationInput, ClientsOnSEsUncheckedUpdateManyWithoutClientInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutClientInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutClientInput, SubscriptionUncheckedUpdateWithoutClientInput>
    create: XOR<SubscriptionCreateWithoutClientInput, SubscriptionUncheckedCreateWithoutClientInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutClientInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutClientInput, SubscriptionUncheckedUpdateWithoutClientInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutClientInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutClientInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    clientId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    billedToDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
  }

  export type ClientCreateWithoutAssignedSEsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    departments?: DepartmentCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAssignedSEsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAssignedSEsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAssignedSEsInput, ClientUncheckedCreateWithoutAssignedSEsInput>
  }

  export type UserCreateWithoutAssignedClientsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUsersInput
    notifiedExceptions?: ExceptionCreateNestedManyWithoutNotifiedUsersInput
  }

  export type UserUncheckedCreateWithoutAssignedClientsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    notifiedExceptions?: ExceptionUncheckedCreateNestedManyWithoutNotifiedUsersInput
  }

  export type UserCreateOrConnectWithoutAssignedClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedClientsInput, UserUncheckedCreateWithoutAssignedClientsInput>
  }

  export type ClientUpsertWithoutAssignedSEsInput = {
    update: XOR<ClientUpdateWithoutAssignedSEsInput, ClientUncheckedUpdateWithoutAssignedSEsInput>
    create: XOR<ClientCreateWithoutAssignedSEsInput, ClientUncheckedCreateWithoutAssignedSEsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAssignedSEsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAssignedSEsInput, ClientUncheckedUpdateWithoutAssignedSEsInput>
  }

  export type ClientUpdateWithoutAssignedSEsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAssignedSEsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutAssignedClientsInput = {
    update: XOR<UserUpdateWithoutAssignedClientsInput, UserUncheckedUpdateWithoutAssignedClientsInput>
    create: XOR<UserCreateWithoutAssignedClientsInput, UserUncheckedCreateWithoutAssignedClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedClientsInput, UserUncheckedUpdateWithoutAssignedClientsInput>
  }

  export type UserUpdateWithoutAssignedClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUsersNestedInput
    notifiedExceptions?: ExceptionUpdateManyWithoutNotifiedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    notifiedExceptions?: ExceptionUncheckedUpdateManyWithoutNotifiedUsersNestedInput
  }

  export type ClientCreateWithoutDepartmentsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDepartmentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDepartmentsInput, ClientUncheckedCreateWithoutDepartmentsInput>
  }

  export type WorkflowCreateWithoutDepartmentInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    description?: string | null
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutDepartmentInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutDepartmentInput, WorkflowUncheckedCreateWithoutDepartmentInput>
  }

  export type WorkflowCreateManyDepartmentInputEnvelope = {
    data: WorkflowCreateManyDepartmentInput | WorkflowCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutDepartmentsInput = {
    update: XOR<ClientUpdateWithoutDepartmentsInput, ClientUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<ClientCreateWithoutDepartmentsInput, ClientUncheckedCreateWithoutDepartmentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDepartmentsInput, ClientUncheckedUpdateWithoutDepartmentsInput>
  }

  export type ClientUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type WorkflowUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutDepartmentInput, WorkflowUncheckedUpdateWithoutDepartmentInput>
    create: XOR<WorkflowCreateWithoutDepartmentInput, WorkflowUncheckedCreateWithoutDepartmentInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutDepartmentInput, WorkflowUncheckedUpdateWithoutDepartmentInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutDepartmentInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DepartmentCreateWithoutWorkflowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    name: string
    clientId: string
    createdAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutWorkflowsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutWorkflowsInput, DepartmentUncheckedCreateWithoutWorkflowsInput>
  }

  export type ClientCreateWithoutWorkflowsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    departments?: DepartmentCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutWorkflowsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutWorkflowsInput, ClientUncheckedCreateWithoutWorkflowsInput>
  }

  export type NodeCreateWithoutWorkflowInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    logs?: ExecutionLogCreateNestedManyWithoutNodeInput
  }

  export type NodeUncheckedCreateWithoutWorkflowInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutNodeInput
  }

  export type NodeCreateOrConnectWithoutWorkflowInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput>
  }

  export type NodeCreateManyWorkflowInputEnvelope = {
    data: NodeCreateManyWorkflowInput | NodeCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionLogCreateWithoutWorkflowInput = {
    id?: string
    status: string
    timestamp?: Date | string
    log?: string | null
    node?: NodeCreateNestedOneWithoutLogsInput
    exception?: ExceptionCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateWithoutWorkflowInput = {
    id?: string
    nodeId?: string | null
    status: string
    timestamp?: Date | string
    log?: string | null
    exceptionId?: string | null
  }

  export type ExecutionLogCreateOrConnectWithoutWorkflowInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionLogCreateManyWorkflowInputEnvelope = {
    data: ExecutionLogCreateManyWorkflowInput | ExecutionLogCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type ExceptionCreateWithoutWorkflowInput = {
    id?: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    notifiedUsers?: UserCreateNestedManyWithoutNotifiedExceptionsInput
    logs?: ExecutionLogCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    notifiedUsers?: UserUncheckedCreateNestedManyWithoutNotifiedExceptionsInput
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionCreateOrConnectWithoutWorkflowInput = {
    where: ExceptionWhereUniqueInput
    create: XOR<ExceptionCreateWithoutWorkflowInput, ExceptionUncheckedCreateWithoutWorkflowInput>
  }

  export type ExceptionCreateManyWorkflowInputEnvelope = {
    data: ExceptionCreateManyWorkflowInput | ExceptionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutWorkflowsInput = {
    update: XOR<DepartmentUpdateWithoutWorkflowsInput, DepartmentUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<DepartmentCreateWithoutWorkflowsInput, DepartmentUncheckedCreateWithoutWorkflowsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutWorkflowsInput, DepartmentUncheckedUpdateWithoutWorkflowsInput>
  }

  export type DepartmentUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpsertWithoutWorkflowsInput = {
    update: XOR<ClientUpdateWithoutWorkflowsInput, ClientUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<ClientCreateWithoutWorkflowsInput, ClientUncheckedCreateWithoutWorkflowsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutWorkflowsInput, ClientUncheckedUpdateWithoutWorkflowsInput>
  }

  export type ClientUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type NodeUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutWorkflowInput, NodeUncheckedUpdateWithoutWorkflowInput>
    create: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutWorkflowInput, NodeUncheckedUpdateWithoutWorkflowInput>
  }

  export type NodeUpdateManyWithWhereWithoutWorkflowInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type NodeScalarWhereInput = {
    AND?: NodeScalarWhereInput | NodeScalarWhereInput[]
    OR?: NodeScalarWhereInput[]
    NOT?: NodeScalarWhereInput | NodeScalarWhereInput[]
    id?: StringFilter<"Node"> | string
    name?: StringFilter<"Node"> | string
    type?: StringFilter<"Node"> | string
    config?: JsonNullableFilter<"Node">
    workflowId?: StringFilter<"Node"> | string
    createdAt?: DateTimeFilter<"Node"> | Date | string
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutWorkflowInput, ExecutionLogUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ExecutionLogCreateWithoutWorkflowInput, ExecutionLogUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutWorkflowInput, ExecutionLogUncheckedUpdateWithoutWorkflowInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutWorkflowInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type ExecutionLogScalarWhereInput = {
    AND?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    OR?: ExecutionLogScalarWhereInput[]
    NOT?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    workflowId?: StringFilter<"ExecutionLog"> | string
    nodeId?: StringNullableFilter<"ExecutionLog"> | string | null
    status?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    log?: StringNullableFilter<"ExecutionLog"> | string | null
    exceptionId?: StringNullableFilter<"ExecutionLog"> | string | null
  }

  export type ExceptionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ExceptionWhereUniqueInput
    update: XOR<ExceptionUpdateWithoutWorkflowInput, ExceptionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ExceptionCreateWithoutWorkflowInput, ExceptionUncheckedCreateWithoutWorkflowInput>
  }

  export type ExceptionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ExceptionWhereUniqueInput
    data: XOR<ExceptionUpdateWithoutWorkflowInput, ExceptionUncheckedUpdateWithoutWorkflowInput>
  }

  export type ExceptionUpdateManyWithWhereWithoutWorkflowInput = {
    where: ExceptionScalarWhereInput
    data: XOR<ExceptionUpdateManyMutationInput, ExceptionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowCreateWithoutNodesInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutWorkflowsInput
    client: ClientCreateNestedOneWithoutWorkflowsInput
    logs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutNodesInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutNodesInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
  }

  export type ExecutionLogCreateWithoutNodeInput = {
    id?: string
    status: string
    timestamp?: Date | string
    log?: string | null
    workflow: WorkflowCreateNestedOneWithoutLogsInput
    exception?: ExceptionCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateWithoutNodeInput = {
    id?: string
    workflowId: string
    status: string
    timestamp?: Date | string
    log?: string | null
    exceptionId?: string | null
  }

  export type ExecutionLogCreateOrConnectWithoutNodeInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutNodeInput, ExecutionLogUncheckedCreateWithoutNodeInput>
  }

  export type ExecutionLogCreateManyNodeInputEnvelope = {
    data: ExecutionLogCreateManyNodeInput | ExecutionLogCreateManyNodeInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutNodesInput = {
    update: XOR<WorkflowUpdateWithoutNodesInput, WorkflowUncheckedUpdateWithoutNodesInput>
    create: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutNodesInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutNodesInput, WorkflowUncheckedUpdateWithoutNodesInput>
  }

  export type WorkflowUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutWorkflowsNestedInput
    client?: ClientUpdateOneRequiredWithoutWorkflowsNestedInput
    logs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutNodeInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutNodeInput, ExecutionLogUncheckedUpdateWithoutNodeInput>
    create: XOR<ExecutionLogCreateWithoutNodeInput, ExecutionLogUncheckedCreateWithoutNodeInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutNodeInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutNodeInput, ExecutionLogUncheckedUpdateWithoutNodeInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutNodeInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutNodeInput>
  }

  export type WorkflowCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutWorkflowsInput
    client: ClientCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    exceptions?: ExceptionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutLogsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutLogsInput, WorkflowUncheckedCreateWithoutLogsInput>
  }

  export type NodeCreateWithoutLogsInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutNodesInput
  }

  export type NodeUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    workflowId: string
    createdAt?: Date | string
  }

  export type NodeCreateOrConnectWithoutLogsInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutLogsInput, NodeUncheckedCreateWithoutLogsInput>
  }

  export type ExceptionCreateWithoutLogsInput = {
    id?: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    workflow: WorkflowCreateNestedOneWithoutExceptionsInput
    notifiedUsers?: UserCreateNestedManyWithoutNotifiedExceptionsInput
  }

  export type ExceptionUncheckedCreateWithoutLogsInput = {
    id?: string
    workflowId: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
    notifiedUsers?: UserUncheckedCreateNestedManyWithoutNotifiedExceptionsInput
  }

  export type ExceptionCreateOrConnectWithoutLogsInput = {
    where: ExceptionWhereUniqueInput
    create: XOR<ExceptionCreateWithoutLogsInput, ExceptionUncheckedCreateWithoutLogsInput>
  }

  export type WorkflowUpsertWithoutLogsInput = {
    update: XOR<WorkflowUpdateWithoutLogsInput, WorkflowUncheckedUpdateWithoutLogsInput>
    create: XOR<WorkflowCreateWithoutLogsInput, WorkflowUncheckedCreateWithoutLogsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutLogsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutLogsInput, WorkflowUncheckedUpdateWithoutLogsInput>
  }

  export type WorkflowUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutWorkflowsNestedInput
    client?: ClientUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type NodeUpsertWithoutLogsInput = {
    update: XOR<NodeUpdateWithoutLogsInput, NodeUncheckedUpdateWithoutLogsInput>
    create: XOR<NodeCreateWithoutLogsInput, NodeUncheckedCreateWithoutLogsInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutLogsInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutLogsInput, NodeUncheckedUpdateWithoutLogsInput>
  }

  export type NodeUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodesNestedInput
  }

  export type NodeUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExceptionUpsertWithoutLogsInput = {
    update: XOR<ExceptionUpdateWithoutLogsInput, ExceptionUncheckedUpdateWithoutLogsInput>
    create: XOR<ExceptionCreateWithoutLogsInput, ExceptionUncheckedCreateWithoutLogsInput>
    where?: ExceptionWhereInput
  }

  export type ExceptionUpdateToOneWithWhereWithoutLogsInput = {
    where?: ExceptionWhereInput
    data: XOR<ExceptionUpdateWithoutLogsInput, ExceptionUncheckedUpdateWithoutLogsInput>
  }

  export type ExceptionUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutExceptionsNestedInput
    notifiedUsers?: UserUpdateManyWithoutNotifiedExceptionsNestedInput
  }

  export type ExceptionUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedUsers?: UserUncheckedUpdateManyWithoutNotifiedExceptionsNestedInput
  }

  export type WorkflowCreateWithoutExceptionsInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutWorkflowsInput
    client: ClientCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutExceptionsInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutExceptionsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutExceptionsInput, WorkflowUncheckedCreateWithoutExceptionsInput>
  }

  export type UserCreateWithoutNotifiedExceptionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutUsersInput
    assignedClients?: ClientsOnSEsCreateNestedManyWithoutSeInput
  }

  export type UserUncheckedCreateWithoutNotifiedExceptionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    assignedClients?: ClientsOnSEsUncheckedCreateNestedManyWithoutSeInput
  }

  export type UserCreateOrConnectWithoutNotifiedExceptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotifiedExceptionsInput, UserUncheckedCreateWithoutNotifiedExceptionsInput>
  }

  export type ExecutionLogCreateWithoutExceptionInput = {
    id?: string
    status: string
    timestamp?: Date | string
    log?: string | null
    workflow: WorkflowCreateNestedOneWithoutLogsInput
    node?: NodeCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateWithoutExceptionInput = {
    id?: string
    workflowId: string
    nodeId?: string | null
    status: string
    timestamp?: Date | string
    log?: string | null
  }

  export type ExecutionLogCreateOrConnectWithoutExceptionInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutExceptionInput, ExecutionLogUncheckedCreateWithoutExceptionInput>
  }

  export type ExecutionLogCreateManyExceptionInputEnvelope = {
    data: ExecutionLogCreateManyExceptionInput | ExecutionLogCreateManyExceptionInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutExceptionsInput = {
    update: XOR<WorkflowUpdateWithoutExceptionsInput, WorkflowUncheckedUpdateWithoutExceptionsInput>
    create: XOR<WorkflowCreateWithoutExceptionsInput, WorkflowUncheckedCreateWithoutExceptionsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutExceptionsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutExceptionsInput, WorkflowUncheckedUpdateWithoutExceptionsInput>
  }

  export type WorkflowUpdateWithoutExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutWorkflowsNestedInput
    client?: ClientUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutNotifiedExceptionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutNotifiedExceptionsInput, UserUncheckedUpdateWithoutNotifiedExceptionsInput>
    create: XOR<UserCreateWithoutNotifiedExceptionsInput, UserUncheckedCreateWithoutNotifiedExceptionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutNotifiedExceptionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutNotifiedExceptionsInput, UserUncheckedUpdateWithoutNotifiedExceptionsInput>
  }

  export type UserUpdateManyWithWhereWithoutNotifiedExceptionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutNotifiedExceptionsInput>
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutExceptionInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutExceptionInput, ExecutionLogUncheckedUpdateWithoutExceptionInput>
    create: XOR<ExecutionLogCreateWithoutExceptionInput, ExecutionLogUncheckedCreateWithoutExceptionInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutExceptionInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutExceptionInput, ExecutionLogUncheckedUpdateWithoutExceptionInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutExceptionInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutExceptionInput>
  }

  export type ClientCreateWithoutCredentialsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    departments?: DepartmentCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCredentialsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCredentialsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCredentialsInput, ClientUncheckedCreateWithoutCredentialsInput>
  }

  export type ClientUpsertWithoutCredentialsInput = {
    update: XOR<ClientUpdateWithoutCredentialsInput, ClientUncheckedUpdateWithoutCredentialsInput>
    create: XOR<ClientCreateWithoutCredentialsInput, ClientUncheckedCreateWithoutCredentialsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCredentialsInput, ClientUncheckedUpdateWithoutCredentialsInput>
  }

  export type ClientUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    client: ClientCreateNestedOneWithoutSubscriptionsInput
    invoices?: InvoiceCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    clientId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type ClientCreateWithoutSubscriptionsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    departments?: DepartmentCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    documents?: DocumentLinkCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    documents?: DocumentLinkUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSubscriptionsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSubscriptionsInput, ClientUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description?: string | null
    pricePerCredit: number
    contractLength: number
    cadence: $Enums.PlanCadence
    setupFee?: number | null
    cap?: number | null
    overageCost?: number | null
    usageApi?: string | null
    creditsPerPeriod?: number | null
    prepaymentPercentage?: number | null
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    description?: string | null
    pricePerCredit: number
    contractLength: number
    cadence: $Enums.PlanCadence
    setupFee?: number | null
    cap?: number | null
    overageCost?: number | null
    usageApi?: string | null
    creditsPerPeriod?: number | null
    prepaymentPercentage?: number | null
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type InvoiceCreateWithoutSubscriptionInput = {
    id?: string
    issueDate: Date | string
    dueDate: Date | string
    amount: number
    status?: $Enums.InvoiceStatus
    paymentMethod?: string | null
  }

  export type InvoiceUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    issueDate: Date | string
    dueDate: Date | string
    amount: number
    status?: $Enums.InvoiceStatus
    paymentMethod?: string | null
  }

  export type InvoiceCreateOrConnectWithoutSubscriptionInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput>
  }

  export type InvoiceCreateManySubscriptionInputEnvelope = {
    data: InvoiceCreateManySubscriptionInput | InvoiceCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutSubscriptionsInput = {
    update: XOR<ClientUpdateWithoutSubscriptionsInput, ClientUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<ClientCreateWithoutSubscriptionsInput, ClientUncheckedCreateWithoutSubscriptionsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSubscriptionsInput, ClientUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ClientUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    documents?: DocumentLinkUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerCredit?: FloatFieldUpdateOperationsInput | number
    contractLength?: IntFieldUpdateOperationsInput | number
    cadence?: EnumPlanCadenceFieldUpdateOperationsInput | $Enums.PlanCadence
    setupFee?: NullableFloatFieldUpdateOperationsInput | number | null
    cap?: NullableIntFieldUpdateOperationsInput | number | null
    overageCost?: NullableFloatFieldUpdateOperationsInput | number | null
    usageApi?: NullableStringFieldUpdateOperationsInput | string | null
    creditsPerPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    prepaymentPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerCredit?: FloatFieldUpdateOperationsInput | number
    contractLength?: IntFieldUpdateOperationsInput | number
    cadence?: EnumPlanCadenceFieldUpdateOperationsInput | $Enums.PlanCadence
    setupFee?: NullableFloatFieldUpdateOperationsInput | number | null
    cap?: NullableIntFieldUpdateOperationsInput | number | null
    overageCost?: NullableFloatFieldUpdateOperationsInput | number | null
    usageApi?: NullableStringFieldUpdateOperationsInput | string | null
    creditsPerPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    prepaymentPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutSubscriptionInput, InvoiceUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutSubscriptionInput, InvoiceUncheckedUpdateWithoutSubscriptionInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutSubscriptionInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    subscriptionId?: StringFilter<"Invoice"> | string
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    amount?: FloatFilter<"Invoice"> | number
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    paymentMethod?: StringNullableFilter<"Invoice"> | string | null
  }

  export type SubscriptionCreateWithoutInvoicesInput = {
    id?: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
    client: ClientCreateNestedOneWithoutSubscriptionsInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutInvoicesInput = {
    id?: string
    clientId: string
    planId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
  }

  export type SubscriptionCreateOrConnectWithoutInvoicesInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
  }

  export type SubscriptionUpsertWithoutInvoicesInput = {
    update: XOR<SubscriptionUpdateWithoutInvoicesInput, SubscriptionUncheckedUpdateWithoutInvoicesInput>
    create: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutInvoicesInput, SubscriptionUncheckedUpdateWithoutInvoicesInput>
  }

  export type SubscriptionUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientCreateWithoutDocumentsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutClientInput
    departments?: DepartmentCreateNestedManyWithoutClientInput
    workflows?: WorkflowCreateNestedManyWithoutClientInput
    credentials?: CredentialCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDocumentsInput = {
    id?: string
    url?: string | null
    contractStart?: Date | string | null
    contractEnd?: Date | string | null
    active?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutClientInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutClientInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutClientInput
    assignedSEs?: ClientsOnSEsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDocumentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
  }

  export type ClientUpsertWithoutDocumentsInput = {
    update: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type ClientUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutClientNestedInput
    departments?: DepartmentUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUpdateManyWithoutClientNestedInput
    credentials?: CredentialUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    contractStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutClientNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutClientNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutClientNestedInput
    assignedSEs?: ClientsOnSEsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsOnSEsCreateManySeInput = {
    clientId: string
    assignedAt?: Date | string
  }

  export type ClientsOnSEsUpdateWithoutSeInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAssignedSEsNestedInput
  }

  export type ClientsOnSEsUncheckedUpdateWithoutSeInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsOnSEsUncheckedUpdateManyWithoutSeInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExceptionUpdateWithoutNotifiedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutExceptionsNestedInput
    logs?: ExecutionLogUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateWithoutNotifiedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ExecutionLogUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateManyWithoutNotifiedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyClientInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role: $Enums.UserRole
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateManyClientInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type WorkflowCreateManyClientInput = {
    id?: string
    name: string
    description?: string | null
    departmentId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
  }

  export type CredentialCreateManyClientInput = {
    id?: string
    service: $Enums.CredentialService
    status?: $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentLinkCreateManyClientInput = {
    id?: string
    type: $Enums.DocumentType
    url: string
    createdAt?: Date | string
  }

  export type ClientsOnSEsCreateManyClientInput = {
    seId: string
    assignedAt?: Date | string
  }

  export type SubscriptionCreateManyClientInput = {
    id?: string
    planId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
  }

  export type UserUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedClients?: ClientsOnSEsUpdateManyWithoutSeNestedInput
    notifiedExceptions?: ExceptionUpdateManyWithoutNotifiedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedClients?: ClientsOnSEsUncheckedUpdateManyWithoutSeNestedInput
    notifiedExceptions?: ExceptionUncheckedUpdateManyWithoutNotifiedUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: EnumCredentialServiceFieldUpdateOperationsInput | $Enums.CredentialService
    status?: EnumCredentialStatusFieldUpdateOperationsInput | $Enums.CredentialStatus
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentLinkUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentLinkUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentLinkUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsOnSEsUpdateWithoutClientInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    se?: UserUpdateOneRequiredWithoutAssignedClientsNestedInput
  }

  export type ClientsOnSEsUncheckedUpdateWithoutClientInput = {
    seId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientsOnSEsUncheckedUpdateManyWithoutClientInput = {
    seId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    invoices?: InvoiceUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowCreateManyDepartmentInput = {
    id?: string
    name: string
    description?: string | null
    clientId: string
    active?: boolean
    status?: $Enums.WorkflowStatus
    createdAt?: Date | string
  }

  export type WorkflowUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    logs?: ExecutionLogUncheckedUpdateManyWithoutWorkflowNestedInput
    exceptions?: ExceptionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateManyWorkflowInput = {
    id?: string
    name: string
    type: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ExecutionLogCreateManyWorkflowInput = {
    id?: string
    nodeId?: string | null
    status: string
    timestamp?: Date | string
    log?: string | null
    exceptionId?: string | null
  }

  export type ExceptionCreateManyWorkflowInput = {
    id?: string
    type: string
    severity: $Enums.ExceptionSeverity
    remedy?: string | null
    status?: $Enums.ExceptionStatus
    timestamp?: Date | string
  }

  export type NodeUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ExecutionLogUpdateManyWithoutNodeNestedInput
  }

  export type NodeUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: ExecutionLogUncheckedUpdateManyWithoutNodeNestedInput
  }

  export type NodeUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    node?: NodeUpdateOneWithoutLogsNestedInput
    exception?: ExceptionUpdateOneWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    exceptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    exceptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExceptionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedUsers?: UserUpdateManyWithoutNotifiedExceptionsNestedInput
    logs?: ExecutionLogUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedUsers?: UserUncheckedUpdateManyWithoutNotifiedExceptionsNestedInput
    logs?: ExecutionLogUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumExceptionSeverityFieldUpdateOperationsInput | $Enums.ExceptionSeverity
    remedy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExceptionStatusFieldUpdateOperationsInput | $Enums.ExceptionStatus
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogCreateManyNodeInput = {
    id?: string
    workflowId: string
    status: string
    timestamp?: Date | string
    log?: string | null
    exceptionId?: string | null
  }

  export type ExecutionLogUpdateWithoutNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutLogsNestedInput
    exception?: ExceptionUpdateOneWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateWithoutNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    exceptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogUncheckedUpdateManyWithoutNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    exceptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogCreateManyExceptionInput = {
    id?: string
    workflowId: string
    nodeId?: string | null
    status: string
    timestamp?: Date | string
    log?: string | null
  }

  export type UserUpdateWithoutNotifiedExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutUsersNestedInput
    assignedClients?: ClientsOnSEsUpdateManyWithoutSeNestedInput
  }

  export type UserUncheckedUpdateWithoutNotifiedExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedClients?: ClientsOnSEsUncheckedUpdateManyWithoutSeNestedInput
  }

  export type UserUncheckedUpdateManyWithoutNotifiedExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogUpdateWithoutExceptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutLogsNestedInput
    node?: NodeUpdateOneWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateWithoutExceptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogUncheckedUpdateManyWithoutExceptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    clientId: string
    status: string
    createdAt?: Date | string
    billedToDate?: Date | string | null
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutSubscriptionsNestedInput
    invoices?: InvoiceUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invoices?: InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvoiceCreateManySubscriptionInput = {
    id?: string
    issueDate: Date | string
    dueDate: Date | string
    amount: number
    status?: $Enums.InvoiceStatus
    paymentMethod?: string | null
  }

  export type InvoiceUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
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