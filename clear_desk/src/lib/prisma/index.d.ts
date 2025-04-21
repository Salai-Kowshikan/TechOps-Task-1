
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
 * Model admin
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model complaint_responses
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type complaint_responses = $Result.DefaultSelection<Prisma.$complaint_responsesPayload>
/**
 * Model complaints
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type complaints = $Result.DefaultSelection<Prisma.$complaintsPayload>
/**
 * Model users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaint_responses`: Exposes CRUD operations for the **complaint_responses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaint_responses
    * const complaint_responses = await prisma.complaint_responses.findMany()
    * ```
    */
  get complaint_responses(): Prisma.complaint_responsesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaints`: Exposes CRUD operations for the **complaints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaints
    * const complaints = await prisma.complaints.findMany()
    * ```
    */
  get complaints(): Prisma.complaintsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    admin: 'admin',
    complaint_responses: 'complaint_responses',
    complaints: 'complaints',
    users: 'users'
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
      modelProps: "admin" | "complaint_responses" | "complaints" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      complaint_responses: {
        payload: Prisma.$complaint_responsesPayload<ExtArgs>
        fields: Prisma.complaint_responsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.complaint_responsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.complaint_responsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>
          }
          findFirst: {
            args: Prisma.complaint_responsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.complaint_responsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>
          }
          findMany: {
            args: Prisma.complaint_responsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>[]
          }
          create: {
            args: Prisma.complaint_responsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>
          }
          createMany: {
            args: Prisma.complaint_responsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.complaint_responsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>[]
          }
          delete: {
            args: Prisma.complaint_responsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>
          }
          update: {
            args: Prisma.complaint_responsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>
          }
          deleteMany: {
            args: Prisma.complaint_responsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.complaint_responsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.complaint_responsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>[]
          }
          upsert: {
            args: Prisma.complaint_responsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaint_responsesPayload>
          }
          aggregate: {
            args: Prisma.Complaint_responsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaint_responses>
          }
          groupBy: {
            args: Prisma.complaint_responsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Complaint_responsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.complaint_responsesCountArgs<ExtArgs>
            result: $Utils.Optional<Complaint_responsesCountAggregateOutputType> | number
          }
        }
      }
      complaints: {
        payload: Prisma.$complaintsPayload<ExtArgs>
        fields: Prisma.complaintsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.complaintsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.complaintsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>
          }
          findFirst: {
            args: Prisma.complaintsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.complaintsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>
          }
          findMany: {
            args: Prisma.complaintsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>[]
          }
          create: {
            args: Prisma.complaintsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>
          }
          createMany: {
            args: Prisma.complaintsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.complaintsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>[]
          }
          delete: {
            args: Prisma.complaintsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>
          }
          update: {
            args: Prisma.complaintsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>
          }
          deleteMany: {
            args: Prisma.complaintsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.complaintsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.complaintsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>[]
          }
          upsert: {
            args: Prisma.complaintsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintsPayload>
          }
          aggregate: {
            args: Prisma.ComplaintsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaints>
          }
          groupBy: {
            args: Prisma.complaintsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintsGroupByOutputType>[]
          }
          count: {
            args: Prisma.complaintsCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    admin?: adminOmit
    complaint_responses?: complaint_responsesOmit
    complaints?: complaintsOmit
    users?: usersOmit
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
   * Count Type ComplaintsCountOutputType
   */

  export type ComplaintsCountOutputType = {
    complaint_responses: number
  }

  export type ComplaintsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaint_responses?: boolean | ComplaintsCountOutputTypeCountComplaint_responsesArgs
  }

  // Custom InputTypes
  /**
   * ComplaintsCountOutputType without action
   */
  export type ComplaintsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintsCountOutputType
     */
    select?: ComplaintsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplaintsCountOutputType without action
   */
  export type ComplaintsCountOutputTypeCountComplaint_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: complaint_responsesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    complaints: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | UsersCountOutputTypeCountComplaintsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: complaintsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    ph_number: string | null
    email: string | null
    password: string | null
    token: string | null
    is_admin: boolean | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    ph_number: string | null
    email: string | null
    password: string | null
    token: string | null
    is_admin: boolean | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    ph_number: number
    email: number
    password: number
    token: number
    is_admin: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    ph_number?: true
    email?: true
    password?: true
    token?: true
    is_admin?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    ph_number?: true
    email?: true
    password?: true
    token?: true
    is_admin?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    ph_number?: true
    email?: true
    password?: true
    token?: true
    is_admin?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    ph_number: string
    email: string
    password: string | null
    token: string | null
    is_admin: boolean
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    is_admin?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    is_admin?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "ph_number" | "email" | "password" | "token" | "is_admin", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
      ph_number: string
      email: string
      password: string | null
      token: string | null
      is_admin: boolean
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
    readonly name: FieldRef<"admin", 'String'>
    readonly ph_number: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly token: FieldRef<"admin", 'String'>
    readonly is_admin: FieldRef<"admin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model complaint_responses
   */

  export type AggregateComplaint_responses = {
    _count: Complaint_responsesCountAggregateOutputType | null
    _min: Complaint_responsesMinAggregateOutputType | null
    _max: Complaint_responsesMaxAggregateOutputType | null
  }

  export type Complaint_responsesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    complaint_id: string | null
  }

  export type Complaint_responsesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    complaint_id: string | null
  }

  export type Complaint_responsesCountAggregateOutputType = {
    id: number
    created_at: number
    complaint_id: number
    responses: number
    _all: number
  }


  export type Complaint_responsesMinAggregateInputType = {
    id?: true
    created_at?: true
    complaint_id?: true
  }

  export type Complaint_responsesMaxAggregateInputType = {
    id?: true
    created_at?: true
    complaint_id?: true
  }

  export type Complaint_responsesCountAggregateInputType = {
    id?: true
    created_at?: true
    complaint_id?: true
    responses?: true
    _all?: true
  }

  export type Complaint_responsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which complaint_responses to aggregate.
     */
    where?: complaint_responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaint_responses to fetch.
     */
    orderBy?: complaint_responsesOrderByWithRelationInput | complaint_responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: complaint_responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaint_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaint_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned complaint_responses
    **/
    _count?: true | Complaint_responsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Complaint_responsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Complaint_responsesMaxAggregateInputType
  }

  export type GetComplaint_responsesAggregateType<T extends Complaint_responsesAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaint_responses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaint_responses[P]>
      : GetScalarType<T[P], AggregateComplaint_responses[P]>
  }




  export type complaint_responsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: complaint_responsesWhereInput
    orderBy?: complaint_responsesOrderByWithAggregationInput | complaint_responsesOrderByWithAggregationInput[]
    by: Complaint_responsesScalarFieldEnum[] | Complaint_responsesScalarFieldEnum
    having?: complaint_responsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Complaint_responsesCountAggregateInputType | true
    _min?: Complaint_responsesMinAggregateInputType
    _max?: Complaint_responsesMaxAggregateInputType
  }

  export type Complaint_responsesGroupByOutputType = {
    id: string
    created_at: Date
    complaint_id: string | null
    responses: JsonValue[]
    _count: Complaint_responsesCountAggregateOutputType | null
    _min: Complaint_responsesMinAggregateOutputType | null
    _max: Complaint_responsesMaxAggregateOutputType | null
  }

  type GetComplaint_responsesGroupByPayload<T extends complaint_responsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Complaint_responsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Complaint_responsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Complaint_responsesGroupByOutputType[P]>
            : GetScalarType<T[P], Complaint_responsesGroupByOutputType[P]>
        }
      >
    >


  export type complaint_responsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    complaint_id?: boolean
    responses?: boolean
    complaints?: boolean | complaint_responses$complaintsArgs<ExtArgs>
  }, ExtArgs["result"]["complaint_responses"]>

  export type complaint_responsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    complaint_id?: boolean
    responses?: boolean
    complaints?: boolean | complaint_responses$complaintsArgs<ExtArgs>
  }, ExtArgs["result"]["complaint_responses"]>

  export type complaint_responsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    complaint_id?: boolean
    responses?: boolean
    complaints?: boolean | complaint_responses$complaintsArgs<ExtArgs>
  }, ExtArgs["result"]["complaint_responses"]>

  export type complaint_responsesSelectScalar = {
    id?: boolean
    created_at?: boolean
    complaint_id?: boolean
    responses?: boolean
  }

  export type complaint_responsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "complaint_id" | "responses", ExtArgs["result"]["complaint_responses"]>
  export type complaint_responsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | complaint_responses$complaintsArgs<ExtArgs>
  }
  export type complaint_responsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | complaint_responses$complaintsArgs<ExtArgs>
  }
  export type complaint_responsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | complaint_responses$complaintsArgs<ExtArgs>
  }

  export type $complaint_responsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "complaint_responses"
    objects: {
      complaints: Prisma.$complaintsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      complaint_id: string | null
      responses: Prisma.JsonValue[]
    }, ExtArgs["result"]["complaint_responses"]>
    composites: {}
  }

  type complaint_responsesGetPayload<S extends boolean | null | undefined | complaint_responsesDefaultArgs> = $Result.GetResult<Prisma.$complaint_responsesPayload, S>

  type complaint_responsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<complaint_responsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Complaint_responsesCountAggregateInputType | true
    }

  export interface complaint_responsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['complaint_responses'], meta: { name: 'complaint_responses' } }
    /**
     * Find zero or one Complaint_responses that matches the filter.
     * @param {complaint_responsesFindUniqueArgs} args - Arguments to find a Complaint_responses
     * @example
     * // Get one Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends complaint_responsesFindUniqueArgs>(args: SelectSubset<T, complaint_responsesFindUniqueArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaint_responses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {complaint_responsesFindUniqueOrThrowArgs} args - Arguments to find a Complaint_responses
     * @example
     * // Get one Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends complaint_responsesFindUniqueOrThrowArgs>(args: SelectSubset<T, complaint_responsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint_responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaint_responsesFindFirstArgs} args - Arguments to find a Complaint_responses
     * @example
     * // Get one Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends complaint_responsesFindFirstArgs>(args?: SelectSubset<T, complaint_responsesFindFirstArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint_responses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaint_responsesFindFirstOrThrowArgs} args - Arguments to find a Complaint_responses
     * @example
     * // Get one Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends complaint_responsesFindFirstOrThrowArgs>(args?: SelectSubset<T, complaint_responsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaint_responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaint_responsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.findMany()
     * 
     * // Get first 10 Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complaint_responsesWithIdOnly = await prisma.complaint_responses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends complaint_responsesFindManyArgs>(args?: SelectSubset<T, complaint_responsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaint_responses.
     * @param {complaint_responsesCreateArgs} args - Arguments to create a Complaint_responses.
     * @example
     * // Create one Complaint_responses
     * const Complaint_responses = await prisma.complaint_responses.create({
     *   data: {
     *     // ... data to create a Complaint_responses
     *   }
     * })
     * 
     */
    create<T extends complaint_responsesCreateArgs>(args: SelectSubset<T, complaint_responsesCreateArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaint_responses.
     * @param {complaint_responsesCreateManyArgs} args - Arguments to create many Complaint_responses.
     * @example
     * // Create many Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends complaint_responsesCreateManyArgs>(args?: SelectSubset<T, complaint_responsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complaint_responses and returns the data saved in the database.
     * @param {complaint_responsesCreateManyAndReturnArgs} args - Arguments to create many Complaint_responses.
     * @example
     * // Create many Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complaint_responses and only return the `id`
     * const complaint_responsesWithIdOnly = await prisma.complaint_responses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends complaint_responsesCreateManyAndReturnArgs>(args?: SelectSubset<T, complaint_responsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complaint_responses.
     * @param {complaint_responsesDeleteArgs} args - Arguments to delete one Complaint_responses.
     * @example
     * // Delete one Complaint_responses
     * const Complaint_responses = await prisma.complaint_responses.delete({
     *   where: {
     *     // ... filter to delete one Complaint_responses
     *   }
     * })
     * 
     */
    delete<T extends complaint_responsesDeleteArgs>(args: SelectSubset<T, complaint_responsesDeleteArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaint_responses.
     * @param {complaint_responsesUpdateArgs} args - Arguments to update one Complaint_responses.
     * @example
     * // Update one Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends complaint_responsesUpdateArgs>(args: SelectSubset<T, complaint_responsesUpdateArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaint_responses.
     * @param {complaint_responsesDeleteManyArgs} args - Arguments to filter Complaint_responses to delete.
     * @example
     * // Delete a few Complaint_responses
     * const { count } = await prisma.complaint_responses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends complaint_responsesDeleteManyArgs>(args?: SelectSubset<T, complaint_responsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaint_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaint_responsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends complaint_responsesUpdateManyArgs>(args: SelectSubset<T, complaint_responsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaint_responses and returns the data updated in the database.
     * @param {complaint_responsesUpdateManyAndReturnArgs} args - Arguments to update many Complaint_responses.
     * @example
     * // Update many Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complaint_responses and only return the `id`
     * const complaint_responsesWithIdOnly = await prisma.complaint_responses.updateManyAndReturn({
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
    updateManyAndReturn<T extends complaint_responsesUpdateManyAndReturnArgs>(args: SelectSubset<T, complaint_responsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complaint_responses.
     * @param {complaint_responsesUpsertArgs} args - Arguments to update or create a Complaint_responses.
     * @example
     * // Update or create a Complaint_responses
     * const complaint_responses = await prisma.complaint_responses.upsert({
     *   create: {
     *     // ... data to create a Complaint_responses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaint_responses we want to update
     *   }
     * })
     */
    upsert<T extends complaint_responsesUpsertArgs>(args: SelectSubset<T, complaint_responsesUpsertArgs<ExtArgs>>): Prisma__complaint_responsesClient<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaint_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaint_responsesCountArgs} args - Arguments to filter Complaint_responses to count.
     * @example
     * // Count the number of Complaint_responses
     * const count = await prisma.complaint_responses.count({
     *   where: {
     *     // ... the filter for the Complaint_responses we want to count
     *   }
     * })
    **/
    count<T extends complaint_responsesCountArgs>(
      args?: Subset<T, complaint_responsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Complaint_responsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaint_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Complaint_responsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Complaint_responsesAggregateArgs>(args: Subset<T, Complaint_responsesAggregateArgs>): Prisma.PrismaPromise<GetComplaint_responsesAggregateType<T>>

    /**
     * Group by Complaint_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaint_responsesGroupByArgs} args - Group by arguments.
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
      T extends complaint_responsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: complaint_responsesGroupByArgs['orderBy'] }
        : { orderBy?: complaint_responsesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, complaint_responsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaint_responsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the complaint_responses model
   */
  readonly fields: complaint_responsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for complaint_responses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__complaint_responsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complaints<T extends complaint_responses$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, complaint_responses$complaintsArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the complaint_responses model
   */
  interface complaint_responsesFieldRefs {
    readonly id: FieldRef<"complaint_responses", 'String'>
    readonly created_at: FieldRef<"complaint_responses", 'DateTime'>
    readonly complaint_id: FieldRef<"complaint_responses", 'String'>
    readonly responses: FieldRef<"complaint_responses", 'Json[]'>
  }
    

  // Custom InputTypes
  /**
   * complaint_responses findUnique
   */
  export type complaint_responsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * Filter, which complaint_responses to fetch.
     */
    where: complaint_responsesWhereUniqueInput
  }

  /**
   * complaint_responses findUniqueOrThrow
   */
  export type complaint_responsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * Filter, which complaint_responses to fetch.
     */
    where: complaint_responsesWhereUniqueInput
  }

  /**
   * complaint_responses findFirst
   */
  export type complaint_responsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * Filter, which complaint_responses to fetch.
     */
    where?: complaint_responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaint_responses to fetch.
     */
    orderBy?: complaint_responsesOrderByWithRelationInput | complaint_responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for complaint_responses.
     */
    cursor?: complaint_responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaint_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaint_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of complaint_responses.
     */
    distinct?: Complaint_responsesScalarFieldEnum | Complaint_responsesScalarFieldEnum[]
  }

  /**
   * complaint_responses findFirstOrThrow
   */
  export type complaint_responsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * Filter, which complaint_responses to fetch.
     */
    where?: complaint_responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaint_responses to fetch.
     */
    orderBy?: complaint_responsesOrderByWithRelationInput | complaint_responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for complaint_responses.
     */
    cursor?: complaint_responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaint_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaint_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of complaint_responses.
     */
    distinct?: Complaint_responsesScalarFieldEnum | Complaint_responsesScalarFieldEnum[]
  }

  /**
   * complaint_responses findMany
   */
  export type complaint_responsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * Filter, which complaint_responses to fetch.
     */
    where?: complaint_responsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaint_responses to fetch.
     */
    orderBy?: complaint_responsesOrderByWithRelationInput | complaint_responsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing complaint_responses.
     */
    cursor?: complaint_responsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaint_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaint_responses.
     */
    skip?: number
    distinct?: Complaint_responsesScalarFieldEnum | Complaint_responsesScalarFieldEnum[]
  }

  /**
   * complaint_responses create
   */
  export type complaint_responsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * The data needed to create a complaint_responses.
     */
    data?: XOR<complaint_responsesCreateInput, complaint_responsesUncheckedCreateInput>
  }

  /**
   * complaint_responses createMany
   */
  export type complaint_responsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many complaint_responses.
     */
    data: complaint_responsesCreateManyInput | complaint_responsesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * complaint_responses createManyAndReturn
   */
  export type complaint_responsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * The data used to create many complaint_responses.
     */
    data: complaint_responsesCreateManyInput | complaint_responsesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * complaint_responses update
   */
  export type complaint_responsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * The data needed to update a complaint_responses.
     */
    data: XOR<complaint_responsesUpdateInput, complaint_responsesUncheckedUpdateInput>
    /**
     * Choose, which complaint_responses to update.
     */
    where: complaint_responsesWhereUniqueInput
  }

  /**
   * complaint_responses updateMany
   */
  export type complaint_responsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update complaint_responses.
     */
    data: XOR<complaint_responsesUpdateManyMutationInput, complaint_responsesUncheckedUpdateManyInput>
    /**
     * Filter which complaint_responses to update
     */
    where?: complaint_responsesWhereInput
    /**
     * Limit how many complaint_responses to update.
     */
    limit?: number
  }

  /**
   * complaint_responses updateManyAndReturn
   */
  export type complaint_responsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * The data used to update complaint_responses.
     */
    data: XOR<complaint_responsesUpdateManyMutationInput, complaint_responsesUncheckedUpdateManyInput>
    /**
     * Filter which complaint_responses to update
     */
    where?: complaint_responsesWhereInput
    /**
     * Limit how many complaint_responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * complaint_responses upsert
   */
  export type complaint_responsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * The filter to search for the complaint_responses to update in case it exists.
     */
    where: complaint_responsesWhereUniqueInput
    /**
     * In case the complaint_responses found by the `where` argument doesn't exist, create a new complaint_responses with this data.
     */
    create: XOR<complaint_responsesCreateInput, complaint_responsesUncheckedCreateInput>
    /**
     * In case the complaint_responses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<complaint_responsesUpdateInput, complaint_responsesUncheckedUpdateInput>
  }

  /**
   * complaint_responses delete
   */
  export type complaint_responsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    /**
     * Filter which complaint_responses to delete.
     */
    where: complaint_responsesWhereUniqueInput
  }

  /**
   * complaint_responses deleteMany
   */
  export type complaint_responsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which complaint_responses to delete
     */
    where?: complaint_responsesWhereInput
    /**
     * Limit how many complaint_responses to delete.
     */
    limit?: number
  }

  /**
   * complaint_responses.complaints
   */
  export type complaint_responses$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    where?: complaintsWhereInput
  }

  /**
   * complaint_responses without action
   */
  export type complaint_responsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
  }


  /**
   * Model complaints
   */

  export type AggregateComplaints = {
    _count: ComplaintsCountAggregateOutputType | null
    _min: ComplaintsMinAggregateOutputType | null
    _max: ComplaintsMaxAggregateOutputType | null
  }

  export type ComplaintsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    title: string | null
    description: string | null
    category: string | null
    status: string | null
    user_id: string | null
  }

  export type ComplaintsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    title: string | null
    description: string | null
    category: string | null
    status: string | null
    user_id: string | null
  }

  export type ComplaintsCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    description: number
    image_url: number
    category: number
    status: number
    user_id: number
    _all: number
  }


  export type ComplaintsMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    category?: true
    status?: true
    user_id?: true
  }

  export type ComplaintsMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    category?: true
    status?: true
    user_id?: true
  }

  export type ComplaintsCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    image_url?: true
    category?: true
    status?: true
    user_id?: true
    _all?: true
  }

  export type ComplaintsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which complaints to aggregate.
     */
    where?: complaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintsOrderByWithRelationInput | complaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: complaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned complaints
    **/
    _count?: true | ComplaintsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintsMaxAggregateInputType
  }

  export type GetComplaintsAggregateType<T extends ComplaintsAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaints[P]>
      : GetScalarType<T[P], AggregateComplaints[P]>
  }




  export type complaintsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: complaintsWhereInput
    orderBy?: complaintsOrderByWithAggregationInput | complaintsOrderByWithAggregationInput[]
    by: ComplaintsScalarFieldEnum[] | ComplaintsScalarFieldEnum
    having?: complaintsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintsCountAggregateInputType | true
    _min?: ComplaintsMinAggregateInputType
    _max?: ComplaintsMaxAggregateInputType
  }

  export type ComplaintsGroupByOutputType = {
    id: string
    created_at: Date
    title: string
    description: string | null
    image_url: string[]
    category: string
    status: string
    user_id: string | null
    _count: ComplaintsCountAggregateOutputType | null
    _min: ComplaintsMinAggregateOutputType | null
    _max: ComplaintsMaxAggregateOutputType | null
  }

  type GetComplaintsGroupByPayload<T extends complaintsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintsGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintsGroupByOutputType[P]>
        }
      >
    >


  export type complaintsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    category?: boolean
    status?: boolean
    user_id?: boolean
    complaint_responses?: boolean | complaints$complaint_responsesArgs<ExtArgs>
    users?: boolean | complaints$usersArgs<ExtArgs>
    _count?: boolean | ComplaintsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complaints"]>

  export type complaintsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    category?: boolean
    status?: boolean
    user_id?: boolean
    users?: boolean | complaints$usersArgs<ExtArgs>
  }, ExtArgs["result"]["complaints"]>

  export type complaintsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    category?: boolean
    status?: boolean
    user_id?: boolean
    users?: boolean | complaints$usersArgs<ExtArgs>
  }, ExtArgs["result"]["complaints"]>

  export type complaintsSelectScalar = {
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    category?: boolean
    status?: boolean
    user_id?: boolean
  }

  export type complaintsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "title" | "description" | "image_url" | "category" | "status" | "user_id", ExtArgs["result"]["complaints"]>
  export type complaintsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaint_responses?: boolean | complaints$complaint_responsesArgs<ExtArgs>
    users?: boolean | complaints$usersArgs<ExtArgs>
    _count?: boolean | ComplaintsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type complaintsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | complaints$usersArgs<ExtArgs>
  }
  export type complaintsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | complaints$usersArgs<ExtArgs>
  }

  export type $complaintsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "complaints"
    objects: {
      complaint_responses: Prisma.$complaint_responsesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      title: string
      description: string | null
      image_url: string[]
      category: string
      status: string
      user_id: string | null
    }, ExtArgs["result"]["complaints"]>
    composites: {}
  }

  type complaintsGetPayload<S extends boolean | null | undefined | complaintsDefaultArgs> = $Result.GetResult<Prisma.$complaintsPayload, S>

  type complaintsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<complaintsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintsCountAggregateInputType | true
    }

  export interface complaintsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['complaints'], meta: { name: 'complaints' } }
    /**
     * Find zero or one Complaints that matches the filter.
     * @param {complaintsFindUniqueArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends complaintsFindUniqueArgs>(args: SelectSubset<T, complaintsFindUniqueArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {complaintsFindUniqueOrThrowArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends complaintsFindUniqueOrThrowArgs>(args: SelectSubset<T, complaintsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintsFindFirstArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends complaintsFindFirstArgs>(args?: SelectSubset<T, complaintsFindFirstArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintsFindFirstOrThrowArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends complaintsFindFirstOrThrowArgs>(args?: SelectSubset<T, complaintsFindFirstOrThrowArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaints
     * const complaints = await prisma.complaints.findMany()
     * 
     * // Get first 10 Complaints
     * const complaints = await prisma.complaints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complaintsWithIdOnly = await prisma.complaints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends complaintsFindManyArgs>(args?: SelectSubset<T, complaintsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaints.
     * @param {complaintsCreateArgs} args - Arguments to create a Complaints.
     * @example
     * // Create one Complaints
     * const Complaints = await prisma.complaints.create({
     *   data: {
     *     // ... data to create a Complaints
     *   }
     * })
     * 
     */
    create<T extends complaintsCreateArgs>(args: SelectSubset<T, complaintsCreateArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaints.
     * @param {complaintsCreateManyArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaints = await prisma.complaints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends complaintsCreateManyArgs>(args?: SelectSubset<T, complaintsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complaints and returns the data saved in the database.
     * @param {complaintsCreateManyAndReturnArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaints = await prisma.complaints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complaints and only return the `id`
     * const complaintsWithIdOnly = await prisma.complaints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends complaintsCreateManyAndReturnArgs>(args?: SelectSubset<T, complaintsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complaints.
     * @param {complaintsDeleteArgs} args - Arguments to delete one Complaints.
     * @example
     * // Delete one Complaints
     * const Complaints = await prisma.complaints.delete({
     *   where: {
     *     // ... filter to delete one Complaints
     *   }
     * })
     * 
     */
    delete<T extends complaintsDeleteArgs>(args: SelectSubset<T, complaintsDeleteArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaints.
     * @param {complaintsUpdateArgs} args - Arguments to update one Complaints.
     * @example
     * // Update one Complaints
     * const complaints = await prisma.complaints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends complaintsUpdateArgs>(args: SelectSubset<T, complaintsUpdateArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaints.
     * @param {complaintsDeleteManyArgs} args - Arguments to filter Complaints to delete.
     * @example
     * // Delete a few Complaints
     * const { count } = await prisma.complaints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends complaintsDeleteManyArgs>(args?: SelectSubset<T, complaintsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaints
     * const complaints = await prisma.complaints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends complaintsUpdateManyArgs>(args: SelectSubset<T, complaintsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints and returns the data updated in the database.
     * @param {complaintsUpdateManyAndReturnArgs} args - Arguments to update many Complaints.
     * @example
     * // Update many Complaints
     * const complaints = await prisma.complaints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complaints and only return the `id`
     * const complaintsWithIdOnly = await prisma.complaints.updateManyAndReturn({
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
    updateManyAndReturn<T extends complaintsUpdateManyAndReturnArgs>(args: SelectSubset<T, complaintsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complaints.
     * @param {complaintsUpsertArgs} args - Arguments to update or create a Complaints.
     * @example
     * // Update or create a Complaints
     * const complaints = await prisma.complaints.upsert({
     *   create: {
     *     // ... data to create a Complaints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaints we want to update
     *   }
     * })
     */
    upsert<T extends complaintsUpsertArgs>(args: SelectSubset<T, complaintsUpsertArgs<ExtArgs>>): Prisma__complaintsClient<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintsCountArgs} args - Arguments to filter Complaints to count.
     * @example
     * // Count the number of Complaints
     * const count = await prisma.complaints.count({
     *   where: {
     *     // ... the filter for the Complaints we want to count
     *   }
     * })
    **/
    count<T extends complaintsCountArgs>(
      args?: Subset<T, complaintsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplaintsAggregateArgs>(args: Subset<T, ComplaintsAggregateArgs>): Prisma.PrismaPromise<GetComplaintsAggregateType<T>>

    /**
     * Group by Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintsGroupByArgs} args - Group by arguments.
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
      T extends complaintsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: complaintsGroupByArgs['orderBy'] }
        : { orderBy?: complaintsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, complaintsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the complaints model
   */
  readonly fields: complaintsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for complaints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__complaintsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complaint_responses<T extends complaints$complaint_responsesArgs<ExtArgs> = {}>(args?: Subset<T, complaints$complaint_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaint_responsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends complaints$usersArgs<ExtArgs> = {}>(args?: Subset<T, complaints$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the complaints model
   */
  interface complaintsFieldRefs {
    readonly id: FieldRef<"complaints", 'String'>
    readonly created_at: FieldRef<"complaints", 'DateTime'>
    readonly title: FieldRef<"complaints", 'String'>
    readonly description: FieldRef<"complaints", 'String'>
    readonly image_url: FieldRef<"complaints", 'String[]'>
    readonly category: FieldRef<"complaints", 'String'>
    readonly status: FieldRef<"complaints", 'String'>
    readonly user_id: FieldRef<"complaints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * complaints findUnique
   */
  export type complaintsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * Filter, which complaints to fetch.
     */
    where: complaintsWhereUniqueInput
  }

  /**
   * complaints findUniqueOrThrow
   */
  export type complaintsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * Filter, which complaints to fetch.
     */
    where: complaintsWhereUniqueInput
  }

  /**
   * complaints findFirst
   */
  export type complaintsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * Filter, which complaints to fetch.
     */
    where?: complaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintsOrderByWithRelationInput | complaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for complaints.
     */
    cursor?: complaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of complaints.
     */
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * complaints findFirstOrThrow
   */
  export type complaintsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * Filter, which complaints to fetch.
     */
    where?: complaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintsOrderByWithRelationInput | complaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for complaints.
     */
    cursor?: complaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of complaints.
     */
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * complaints findMany
   */
  export type complaintsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * Filter, which complaints to fetch.
     */
    where?: complaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintsOrderByWithRelationInput | complaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing complaints.
     */
    cursor?: complaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * complaints create
   */
  export type complaintsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * The data needed to create a complaints.
     */
    data: XOR<complaintsCreateInput, complaintsUncheckedCreateInput>
  }

  /**
   * complaints createMany
   */
  export type complaintsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many complaints.
     */
    data: complaintsCreateManyInput | complaintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * complaints createManyAndReturn
   */
  export type complaintsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * The data used to create many complaints.
     */
    data: complaintsCreateManyInput | complaintsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * complaints update
   */
  export type complaintsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * The data needed to update a complaints.
     */
    data: XOR<complaintsUpdateInput, complaintsUncheckedUpdateInput>
    /**
     * Choose, which complaints to update.
     */
    where: complaintsWhereUniqueInput
  }

  /**
   * complaints updateMany
   */
  export type complaintsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update complaints.
     */
    data: XOR<complaintsUpdateManyMutationInput, complaintsUncheckedUpdateManyInput>
    /**
     * Filter which complaints to update
     */
    where?: complaintsWhereInput
    /**
     * Limit how many complaints to update.
     */
    limit?: number
  }

  /**
   * complaints updateManyAndReturn
   */
  export type complaintsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * The data used to update complaints.
     */
    data: XOR<complaintsUpdateManyMutationInput, complaintsUncheckedUpdateManyInput>
    /**
     * Filter which complaints to update
     */
    where?: complaintsWhereInput
    /**
     * Limit how many complaints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * complaints upsert
   */
  export type complaintsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * The filter to search for the complaints to update in case it exists.
     */
    where: complaintsWhereUniqueInput
    /**
     * In case the complaints found by the `where` argument doesn't exist, create a new complaints with this data.
     */
    create: XOR<complaintsCreateInput, complaintsUncheckedCreateInput>
    /**
     * In case the complaints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<complaintsUpdateInput, complaintsUncheckedUpdateInput>
  }

  /**
   * complaints delete
   */
  export type complaintsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    /**
     * Filter which complaints to delete.
     */
    where: complaintsWhereUniqueInput
  }

  /**
   * complaints deleteMany
   */
  export type complaintsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which complaints to delete
     */
    where?: complaintsWhereInput
    /**
     * Limit how many complaints to delete.
     */
    limit?: number
  }

  /**
   * complaints.complaint_responses
   */
  export type complaints$complaint_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint_responses
     */
    select?: complaint_responsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint_responses
     */
    omit?: complaint_responsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaint_responsesInclude<ExtArgs> | null
    where?: complaint_responsesWhereInput
    orderBy?: complaint_responsesOrderByWithRelationInput | complaint_responsesOrderByWithRelationInput[]
    cursor?: complaint_responsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Complaint_responsesScalarFieldEnum | Complaint_responsesScalarFieldEnum[]
  }

  /**
   * complaints.users
   */
  export type complaints$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * complaints without action
   */
  export type complaintsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    ph_number: string | null
    email: string | null
    password: string | null
    token: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    ph_number: string | null
    email: string | null
    password: string | null
    token: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    ph_number: number
    email: number
    password: number
    token: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    ph_number?: true
    email?: true
    password?: true
    token?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    ph_number?: true
    email?: true
    password?: true
    token?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    ph_number?: true
    email?: true
    password?: true
    token?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    ph_number: string
    email: string
    password: string | null
    token: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    complaints?: boolean | users$complaintsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    ph_number?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "ph_number" | "email" | "password" | "token", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | users$complaintsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      complaints: Prisma.$complaintsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
      ph_number: string
      email: string
      password: string | null
      token: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complaints<T extends users$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, users$complaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly name: FieldRef<"users", 'String'>
    readonly ph_number: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly token: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.complaints
   */
  export type users$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaints
     */
    select?: complaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaints
     */
    omit?: complaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: complaintsInclude<ExtArgs> | null
    where?: complaintsWhereInput
    orderBy?: complaintsOrderByWithRelationInput | complaintsOrderByWithRelationInput[]
    cursor?: complaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    ph_number: 'ph_number',
    email: 'email',
    password: 'password',
    token: 'token',
    is_admin: 'is_admin'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Complaint_responsesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    complaint_id: 'complaint_id',
    responses: 'responses'
  };

  export type Complaint_responsesScalarFieldEnum = (typeof Complaint_responsesScalarFieldEnum)[keyof typeof Complaint_responsesScalarFieldEnum]


  export const ComplaintsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    category: 'category',
    status: 'status',
    user_id: 'user_id'
  };

  export type ComplaintsScalarFieldEnum = (typeof ComplaintsScalarFieldEnum)[keyof typeof ComplaintsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    ph_number: 'ph_number',
    email: 'email',
    password: 'password',
    token: 'token'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: UuidFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
    name?: StringFilter<"admin"> | string
    ph_number?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringNullableFilter<"admin"> | string | null
    token?: StringNullableFilter<"admin"> | string | null
    is_admin?: BoolFilter<"admin"> | boolean
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    is_admin?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    created_at?: DateTimeFilter<"admin"> | Date | string
    name?: StringFilter<"admin"> | string
    ph_number?: StringFilter<"admin"> | string
    password?: StringNullableFilter<"admin"> | string | null
    token?: StringNullableFilter<"admin"> | string | null
    is_admin?: BoolFilter<"admin"> | boolean
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    name?: StringWithAggregatesFilter<"admin"> | string
    ph_number?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringNullableWithAggregatesFilter<"admin"> | string | null
    token?: StringNullableWithAggregatesFilter<"admin"> | string | null
    is_admin?: BoolWithAggregatesFilter<"admin"> | boolean
  }

  export type complaint_responsesWhereInput = {
    AND?: complaint_responsesWhereInput | complaint_responsesWhereInput[]
    OR?: complaint_responsesWhereInput[]
    NOT?: complaint_responsesWhereInput | complaint_responsesWhereInput[]
    id?: UuidFilter<"complaint_responses"> | string
    created_at?: DateTimeFilter<"complaint_responses"> | Date | string
    complaint_id?: UuidNullableFilter<"complaint_responses"> | string | null
    responses?: JsonNullableListFilter<"complaint_responses">
    complaints?: XOR<ComplaintsNullableScalarRelationFilter, complaintsWhereInput> | null
  }

  export type complaint_responsesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    complaint_id?: SortOrderInput | SortOrder
    responses?: SortOrder
    complaints?: complaintsOrderByWithRelationInput
  }

  export type complaint_responsesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: complaint_responsesWhereInput | complaint_responsesWhereInput[]
    OR?: complaint_responsesWhereInput[]
    NOT?: complaint_responsesWhereInput | complaint_responsesWhereInput[]
    created_at?: DateTimeFilter<"complaint_responses"> | Date | string
    complaint_id?: UuidNullableFilter<"complaint_responses"> | string | null
    responses?: JsonNullableListFilter<"complaint_responses">
    complaints?: XOR<ComplaintsNullableScalarRelationFilter, complaintsWhereInput> | null
  }, "id">

  export type complaint_responsesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    complaint_id?: SortOrderInput | SortOrder
    responses?: SortOrder
    _count?: complaint_responsesCountOrderByAggregateInput
    _max?: complaint_responsesMaxOrderByAggregateInput
    _min?: complaint_responsesMinOrderByAggregateInput
  }

  export type complaint_responsesScalarWhereWithAggregatesInput = {
    AND?: complaint_responsesScalarWhereWithAggregatesInput | complaint_responsesScalarWhereWithAggregatesInput[]
    OR?: complaint_responsesScalarWhereWithAggregatesInput[]
    NOT?: complaint_responsesScalarWhereWithAggregatesInput | complaint_responsesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"complaint_responses"> | string
    created_at?: DateTimeWithAggregatesFilter<"complaint_responses"> | Date | string
    complaint_id?: UuidNullableWithAggregatesFilter<"complaint_responses"> | string | null
    responses?: JsonNullableListFilter<"complaint_responses">
  }

  export type complaintsWhereInput = {
    AND?: complaintsWhereInput | complaintsWhereInput[]
    OR?: complaintsWhereInput[]
    NOT?: complaintsWhereInput | complaintsWhereInput[]
    id?: UuidFilter<"complaints"> | string
    created_at?: DateTimeFilter<"complaints"> | Date | string
    title?: StringFilter<"complaints"> | string
    description?: StringNullableFilter<"complaints"> | string | null
    image_url?: StringNullableListFilter<"complaints">
    category?: StringFilter<"complaints"> | string
    status?: StringFilter<"complaints"> | string
    user_id?: UuidNullableFilter<"complaints"> | string | null
    complaint_responses?: Complaint_responsesListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type complaintsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    category?: SortOrder
    status?: SortOrder
    user_id?: SortOrderInput | SortOrder
    complaint_responses?: complaint_responsesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type complaintsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: complaintsWhereInput | complaintsWhereInput[]
    OR?: complaintsWhereInput[]
    NOT?: complaintsWhereInput | complaintsWhereInput[]
    created_at?: DateTimeFilter<"complaints"> | Date | string
    title?: StringFilter<"complaints"> | string
    description?: StringNullableFilter<"complaints"> | string | null
    image_url?: StringNullableListFilter<"complaints">
    category?: StringFilter<"complaints"> | string
    status?: StringFilter<"complaints"> | string
    user_id?: UuidNullableFilter<"complaints"> | string | null
    complaint_responses?: Complaint_responsesListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type complaintsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    category?: SortOrder
    status?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: complaintsCountOrderByAggregateInput
    _max?: complaintsMaxOrderByAggregateInput
    _min?: complaintsMinOrderByAggregateInput
  }

  export type complaintsScalarWhereWithAggregatesInput = {
    AND?: complaintsScalarWhereWithAggregatesInput | complaintsScalarWhereWithAggregatesInput[]
    OR?: complaintsScalarWhereWithAggregatesInput[]
    NOT?: complaintsScalarWhereWithAggregatesInput | complaintsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"complaints"> | string
    created_at?: DateTimeWithAggregatesFilter<"complaints"> | Date | string
    title?: StringWithAggregatesFilter<"complaints"> | string
    description?: StringNullableWithAggregatesFilter<"complaints"> | string | null
    image_url?: StringNullableListFilter<"complaints">
    category?: StringWithAggregatesFilter<"complaints"> | string
    status?: StringWithAggregatesFilter<"complaints"> | string
    user_id?: UuidNullableWithAggregatesFilter<"complaints"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    name?: StringFilter<"users"> | string
    ph_number?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    token?: StringNullableFilter<"users"> | string | null
    complaints?: ComplaintsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    complaints?: complaintsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
    name?: StringFilter<"users"> | string
    ph_number?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    token?: StringNullableFilter<"users"> | string | null
    complaints?: ComplaintsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    name?: StringWithAggregatesFilter<"users"> | string
    ph_number?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    token?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type adminCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
    is_admin?: boolean
  }

  export type adminUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
    is_admin?: boolean
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
    is_admin?: boolean
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type complaint_responsesCreateInput = {
    id?: string
    created_at?: Date | string
    responses?: complaint_responsesCreateresponsesInput | InputJsonValue[]
    complaints?: complaintsCreateNestedOneWithoutComplaint_responsesInput
  }

  export type complaint_responsesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    complaint_id?: string | null
    responses?: complaint_responsesCreateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
    complaints?: complaintsUpdateOneWithoutComplaint_responsesNestedInput
  }

  export type complaint_responsesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint_id?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesCreateManyInput = {
    id?: string
    created_at?: Date | string
    complaint_id?: string | null
    responses?: complaint_responsesCreateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    complaint_id?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
  }

  export type complaintsCreateInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    complaint_responses?: complaint_responsesCreateNestedManyWithoutComplaintsInput
    users?: usersCreateNestedOneWithoutComplaintsInput
  }

  export type complaintsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    user_id?: string | null
    complaint_responses?: complaint_responsesUncheckedCreateNestedManyWithoutComplaintsInput
  }

  export type complaintsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    complaint_responses?: complaint_responsesUpdateManyWithoutComplaintsNestedInput
    users?: usersUpdateOneWithoutComplaintsNestedInput
  }

  export type complaintsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    complaint_responses?: complaint_responsesUncheckedUpdateManyWithoutComplaintsNestedInput
  }

  export type complaintsCreateManyInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    user_id?: string | null
  }

  export type complaintsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type complaintsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
    complaints?: complaintsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
    complaints?: complaintsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    complaints?: complaintsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    complaints?: complaintsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    is_admin?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    is_admin?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    is_admin?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ComplaintsNullableScalarRelationFilter = {
    is?: complaintsWhereInput | null
    isNot?: complaintsWhereInput | null
  }

  export type complaint_responsesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    complaint_id?: SortOrder
    responses?: SortOrder
  }

  export type complaint_responsesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    complaint_id?: SortOrder
  }

  export type complaint_responsesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    complaint_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Complaint_responsesListRelationFilter = {
    every?: complaint_responsesWhereInput
    some?: complaint_responsesWhereInput
    none?: complaint_responsesWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type complaint_responsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type complaintsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    category?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type complaintsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type complaintsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type ComplaintsListRelationFilter = {
    every?: complaintsWhereInput
    some?: complaintsWhereInput
    none?: complaintsWhereInput
  }

  export type complaintsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    ph_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type complaint_responsesCreateresponsesInput = {
    set: InputJsonValue[]
  }

  export type complaintsCreateNestedOneWithoutComplaint_responsesInput = {
    create?: XOR<complaintsCreateWithoutComplaint_responsesInput, complaintsUncheckedCreateWithoutComplaint_responsesInput>
    connectOrCreate?: complaintsCreateOrConnectWithoutComplaint_responsesInput
    connect?: complaintsWhereUniqueInput
  }

  export type complaint_responsesUpdateresponsesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type complaintsUpdateOneWithoutComplaint_responsesNestedInput = {
    create?: XOR<complaintsCreateWithoutComplaint_responsesInput, complaintsUncheckedCreateWithoutComplaint_responsesInput>
    connectOrCreate?: complaintsCreateOrConnectWithoutComplaint_responsesInput
    upsert?: complaintsUpsertWithoutComplaint_responsesInput
    disconnect?: complaintsWhereInput | boolean
    delete?: complaintsWhereInput | boolean
    connect?: complaintsWhereUniqueInput
    update?: XOR<XOR<complaintsUpdateToOneWithWhereWithoutComplaint_responsesInput, complaintsUpdateWithoutComplaint_responsesInput>, complaintsUncheckedUpdateWithoutComplaint_responsesInput>
  }

  export type complaintsCreateimage_urlInput = {
    set: string[]
  }

  export type complaint_responsesCreateNestedManyWithoutComplaintsInput = {
    create?: XOR<complaint_responsesCreateWithoutComplaintsInput, complaint_responsesUncheckedCreateWithoutComplaintsInput> | complaint_responsesCreateWithoutComplaintsInput[] | complaint_responsesUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: complaint_responsesCreateOrConnectWithoutComplaintsInput | complaint_responsesCreateOrConnectWithoutComplaintsInput[]
    createMany?: complaint_responsesCreateManyComplaintsInputEnvelope
    connect?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<usersCreateWithoutComplaintsInput, usersUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: usersCreateOrConnectWithoutComplaintsInput
    connect?: usersWhereUniqueInput
  }

  export type complaint_responsesUncheckedCreateNestedManyWithoutComplaintsInput = {
    create?: XOR<complaint_responsesCreateWithoutComplaintsInput, complaint_responsesUncheckedCreateWithoutComplaintsInput> | complaint_responsesCreateWithoutComplaintsInput[] | complaint_responsesUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: complaint_responsesCreateOrConnectWithoutComplaintsInput | complaint_responsesCreateOrConnectWithoutComplaintsInput[]
    createMany?: complaint_responsesCreateManyComplaintsInputEnvelope
    connect?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
  }

  export type complaintsUpdateimage_urlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type complaint_responsesUpdateManyWithoutComplaintsNestedInput = {
    create?: XOR<complaint_responsesCreateWithoutComplaintsInput, complaint_responsesUncheckedCreateWithoutComplaintsInput> | complaint_responsesCreateWithoutComplaintsInput[] | complaint_responsesUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: complaint_responsesCreateOrConnectWithoutComplaintsInput | complaint_responsesCreateOrConnectWithoutComplaintsInput[]
    upsert?: complaint_responsesUpsertWithWhereUniqueWithoutComplaintsInput | complaint_responsesUpsertWithWhereUniqueWithoutComplaintsInput[]
    createMany?: complaint_responsesCreateManyComplaintsInputEnvelope
    set?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    disconnect?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    delete?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    connect?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    update?: complaint_responsesUpdateWithWhereUniqueWithoutComplaintsInput | complaint_responsesUpdateWithWhereUniqueWithoutComplaintsInput[]
    updateMany?: complaint_responsesUpdateManyWithWhereWithoutComplaintsInput | complaint_responsesUpdateManyWithWhereWithoutComplaintsInput[]
    deleteMany?: complaint_responsesScalarWhereInput | complaint_responsesScalarWhereInput[]
  }

  export type usersUpdateOneWithoutComplaintsNestedInput = {
    create?: XOR<usersCreateWithoutComplaintsInput, usersUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: usersCreateOrConnectWithoutComplaintsInput
    upsert?: usersUpsertWithoutComplaintsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutComplaintsInput, usersUpdateWithoutComplaintsInput>, usersUncheckedUpdateWithoutComplaintsInput>
  }

  export type complaint_responsesUncheckedUpdateManyWithoutComplaintsNestedInput = {
    create?: XOR<complaint_responsesCreateWithoutComplaintsInput, complaint_responsesUncheckedCreateWithoutComplaintsInput> | complaint_responsesCreateWithoutComplaintsInput[] | complaint_responsesUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: complaint_responsesCreateOrConnectWithoutComplaintsInput | complaint_responsesCreateOrConnectWithoutComplaintsInput[]
    upsert?: complaint_responsesUpsertWithWhereUniqueWithoutComplaintsInput | complaint_responsesUpsertWithWhereUniqueWithoutComplaintsInput[]
    createMany?: complaint_responsesCreateManyComplaintsInputEnvelope
    set?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    disconnect?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    delete?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    connect?: complaint_responsesWhereUniqueInput | complaint_responsesWhereUniqueInput[]
    update?: complaint_responsesUpdateWithWhereUniqueWithoutComplaintsInput | complaint_responsesUpdateWithWhereUniqueWithoutComplaintsInput[]
    updateMany?: complaint_responsesUpdateManyWithWhereWithoutComplaintsInput | complaint_responsesUpdateManyWithWhereWithoutComplaintsInput[]
    deleteMany?: complaint_responsesScalarWhereInput | complaint_responsesScalarWhereInput[]
  }

  export type complaintsCreateNestedManyWithoutUsersInput = {
    create?: XOR<complaintsCreateWithoutUsersInput, complaintsUncheckedCreateWithoutUsersInput> | complaintsCreateWithoutUsersInput[] | complaintsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: complaintsCreateOrConnectWithoutUsersInput | complaintsCreateOrConnectWithoutUsersInput[]
    createMany?: complaintsCreateManyUsersInputEnvelope
    connect?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
  }

  export type complaintsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<complaintsCreateWithoutUsersInput, complaintsUncheckedCreateWithoutUsersInput> | complaintsCreateWithoutUsersInput[] | complaintsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: complaintsCreateOrConnectWithoutUsersInput | complaintsCreateOrConnectWithoutUsersInput[]
    createMany?: complaintsCreateManyUsersInputEnvelope
    connect?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
  }

  export type complaintsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<complaintsCreateWithoutUsersInput, complaintsUncheckedCreateWithoutUsersInput> | complaintsCreateWithoutUsersInput[] | complaintsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: complaintsCreateOrConnectWithoutUsersInput | complaintsCreateOrConnectWithoutUsersInput[]
    upsert?: complaintsUpsertWithWhereUniqueWithoutUsersInput | complaintsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: complaintsCreateManyUsersInputEnvelope
    set?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    disconnect?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    delete?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    connect?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    update?: complaintsUpdateWithWhereUniqueWithoutUsersInput | complaintsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: complaintsUpdateManyWithWhereWithoutUsersInput | complaintsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: complaintsScalarWhereInput | complaintsScalarWhereInput[]
  }

  export type complaintsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<complaintsCreateWithoutUsersInput, complaintsUncheckedCreateWithoutUsersInput> | complaintsCreateWithoutUsersInput[] | complaintsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: complaintsCreateOrConnectWithoutUsersInput | complaintsCreateOrConnectWithoutUsersInput[]
    upsert?: complaintsUpsertWithWhereUniqueWithoutUsersInput | complaintsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: complaintsCreateManyUsersInputEnvelope
    set?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    disconnect?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    delete?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    connect?: complaintsWhereUniqueInput | complaintsWhereUniqueInput[]
    update?: complaintsUpdateWithWhereUniqueWithoutUsersInput | complaintsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: complaintsUpdateManyWithWhereWithoutUsersInput | complaintsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: complaintsScalarWhereInput | complaintsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type complaintsCreateWithoutComplaint_responsesInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    users?: usersCreateNestedOneWithoutComplaintsInput
  }

  export type complaintsUncheckedCreateWithoutComplaint_responsesInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    user_id?: string | null
  }

  export type complaintsCreateOrConnectWithoutComplaint_responsesInput = {
    where: complaintsWhereUniqueInput
    create: XOR<complaintsCreateWithoutComplaint_responsesInput, complaintsUncheckedCreateWithoutComplaint_responsesInput>
  }

  export type complaintsUpsertWithoutComplaint_responsesInput = {
    update: XOR<complaintsUpdateWithoutComplaint_responsesInput, complaintsUncheckedUpdateWithoutComplaint_responsesInput>
    create: XOR<complaintsCreateWithoutComplaint_responsesInput, complaintsUncheckedCreateWithoutComplaint_responsesInput>
    where?: complaintsWhereInput
  }

  export type complaintsUpdateToOneWithWhereWithoutComplaint_responsesInput = {
    where?: complaintsWhereInput
    data: XOR<complaintsUpdateWithoutComplaint_responsesInput, complaintsUncheckedUpdateWithoutComplaint_responsesInput>
  }

  export type complaintsUpdateWithoutComplaint_responsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutComplaintsNestedInput
  }

  export type complaintsUncheckedUpdateWithoutComplaint_responsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type complaint_responsesCreateWithoutComplaintsInput = {
    id?: string
    created_at?: Date | string
    responses?: complaint_responsesCreateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUncheckedCreateWithoutComplaintsInput = {
    id?: string
    created_at?: Date | string
    responses?: complaint_responsesCreateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesCreateOrConnectWithoutComplaintsInput = {
    where: complaint_responsesWhereUniqueInput
    create: XOR<complaint_responsesCreateWithoutComplaintsInput, complaint_responsesUncheckedCreateWithoutComplaintsInput>
  }

  export type complaint_responsesCreateManyComplaintsInputEnvelope = {
    data: complaint_responsesCreateManyComplaintsInput | complaint_responsesCreateManyComplaintsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutComplaintsInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
  }

  export type usersUncheckedCreateWithoutComplaintsInput = {
    id?: string
    created_at?: Date | string
    name: string
    ph_number: string
    email: string
    password?: string | null
    token?: string | null
  }

  export type usersCreateOrConnectWithoutComplaintsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutComplaintsInput, usersUncheckedCreateWithoutComplaintsInput>
  }

  export type complaint_responsesUpsertWithWhereUniqueWithoutComplaintsInput = {
    where: complaint_responsesWhereUniqueInput
    update: XOR<complaint_responsesUpdateWithoutComplaintsInput, complaint_responsesUncheckedUpdateWithoutComplaintsInput>
    create: XOR<complaint_responsesCreateWithoutComplaintsInput, complaint_responsesUncheckedCreateWithoutComplaintsInput>
  }

  export type complaint_responsesUpdateWithWhereUniqueWithoutComplaintsInput = {
    where: complaint_responsesWhereUniqueInput
    data: XOR<complaint_responsesUpdateWithoutComplaintsInput, complaint_responsesUncheckedUpdateWithoutComplaintsInput>
  }

  export type complaint_responsesUpdateManyWithWhereWithoutComplaintsInput = {
    where: complaint_responsesScalarWhereInput
    data: XOR<complaint_responsesUpdateManyMutationInput, complaint_responsesUncheckedUpdateManyWithoutComplaintsInput>
  }

  export type complaint_responsesScalarWhereInput = {
    AND?: complaint_responsesScalarWhereInput | complaint_responsesScalarWhereInput[]
    OR?: complaint_responsesScalarWhereInput[]
    NOT?: complaint_responsesScalarWhereInput | complaint_responsesScalarWhereInput[]
    id?: UuidFilter<"complaint_responses"> | string
    created_at?: DateTimeFilter<"complaint_responses"> | Date | string
    complaint_id?: UuidNullableFilter<"complaint_responses"> | string | null
    responses?: JsonNullableListFilter<"complaint_responses">
  }

  export type usersUpsertWithoutComplaintsInput = {
    update: XOR<usersUpdateWithoutComplaintsInput, usersUncheckedUpdateWithoutComplaintsInput>
    create: XOR<usersCreateWithoutComplaintsInput, usersUncheckedCreateWithoutComplaintsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutComplaintsInput, usersUncheckedUpdateWithoutComplaintsInput>
  }

  export type usersUpdateWithoutComplaintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutComplaintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ph_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type complaintsCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    complaint_responses?: complaint_responsesCreateNestedManyWithoutComplaintsInput
  }

  export type complaintsUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
    complaint_responses?: complaint_responsesUncheckedCreateNestedManyWithoutComplaintsInput
  }

  export type complaintsCreateOrConnectWithoutUsersInput = {
    where: complaintsWhereUniqueInput
    create: XOR<complaintsCreateWithoutUsersInput, complaintsUncheckedCreateWithoutUsersInput>
  }

  export type complaintsCreateManyUsersInputEnvelope = {
    data: complaintsCreateManyUsersInput | complaintsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type complaintsUpsertWithWhereUniqueWithoutUsersInput = {
    where: complaintsWhereUniqueInput
    update: XOR<complaintsUpdateWithoutUsersInput, complaintsUncheckedUpdateWithoutUsersInput>
    create: XOR<complaintsCreateWithoutUsersInput, complaintsUncheckedCreateWithoutUsersInput>
  }

  export type complaintsUpdateWithWhereUniqueWithoutUsersInput = {
    where: complaintsWhereUniqueInput
    data: XOR<complaintsUpdateWithoutUsersInput, complaintsUncheckedUpdateWithoutUsersInput>
  }

  export type complaintsUpdateManyWithWhereWithoutUsersInput = {
    where: complaintsScalarWhereInput
    data: XOR<complaintsUpdateManyMutationInput, complaintsUncheckedUpdateManyWithoutUsersInput>
  }

  export type complaintsScalarWhereInput = {
    AND?: complaintsScalarWhereInput | complaintsScalarWhereInput[]
    OR?: complaintsScalarWhereInput[]
    NOT?: complaintsScalarWhereInput | complaintsScalarWhereInput[]
    id?: UuidFilter<"complaints"> | string
    created_at?: DateTimeFilter<"complaints"> | Date | string
    title?: StringFilter<"complaints"> | string
    description?: StringNullableFilter<"complaints"> | string | null
    image_url?: StringNullableListFilter<"complaints">
    category?: StringFilter<"complaints"> | string
    status?: StringFilter<"complaints"> | string
    user_id?: UuidNullableFilter<"complaints"> | string | null
  }

  export type complaint_responsesCreateManyComplaintsInput = {
    id?: string
    created_at?: Date | string
    responses?: complaint_responsesCreateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUpdateWithoutComplaintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUncheckedUpdateWithoutComplaintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
  }

  export type complaint_responsesUncheckedUpdateManyWithoutComplaintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: complaint_responsesUpdateresponsesInput | InputJsonValue[]
  }

  export type complaintsCreateManyUsersInput = {
    id?: string
    created_at?: Date | string
    title: string
    description?: string | null
    image_url?: complaintsCreateimage_urlInput | string[]
    category: string
    status: string
  }

  export type complaintsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    complaint_responses?: complaint_responsesUpdateManyWithoutComplaintsNestedInput
  }

  export type complaintsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    complaint_responses?: complaint_responsesUncheckedUpdateManyWithoutComplaintsNestedInput
  }

  export type complaintsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: complaintsUpdateimage_urlInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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