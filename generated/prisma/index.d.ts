
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
 * Model Seller
 * 
 */
export type Seller = $Result.DefaultSelection<Prisma.$SellerPayload>
/**
 * Model CategoryMapping
 * 
 */
export type CategoryMapping = $Result.DefaultSelection<Prisma.$CategoryMappingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sellers
 * const sellers = await prisma.seller.findMany()
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
   * // Fetch zero or more Sellers
   * const sellers = await prisma.seller.findMany()
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
   * `prisma.seller`: Exposes CRUD operations for the **Seller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.seller.findMany()
    * ```
    */
  get seller(): Prisma.SellerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryMapping`: Exposes CRUD operations for the **CategoryMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryMappings
    * const categoryMappings = await prisma.categoryMapping.findMany()
    * ```
    */
  get categoryMapping(): Prisma.CategoryMappingDelegate<ExtArgs, ClientOptions>;
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
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Seller: 'Seller',
    CategoryMapping: 'CategoryMapping'
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
      modelProps: "seller" | "categoryMapping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Seller: {
        payload: Prisma.$SellerPayload<ExtArgs>
        fields: Prisma.SellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findFirst: {
            args: Prisma.SellerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          findMany: {
            args: Prisma.SellerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          create: {
            args: Prisma.SellerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          createMany: {
            args: Prisma.SellerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          delete: {
            args: Prisma.SellerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          update: {
            args: Prisma.SellerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          deleteMany: {
            args: Prisma.SellerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>[]
          }
          upsert: {
            args: Prisma.SellerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerPayload>
          }
          aggregate: {
            args: Prisma.SellerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeller>
          }
          groupBy: {
            args: Prisma.SellerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerCountArgs<ExtArgs>
            result: $Utils.Optional<SellerCountAggregateOutputType> | number
          }
        }
      }
      CategoryMapping: {
        payload: Prisma.$CategoryMappingPayload<ExtArgs>
        fields: Prisma.CategoryMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>
          }
          findFirst: {
            args: Prisma.CategoryMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>
          }
          findMany: {
            args: Prisma.CategoryMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>[]
          }
          create: {
            args: Prisma.CategoryMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>
          }
          createMany: {
            args: Prisma.CategoryMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>[]
          }
          delete: {
            args: Prisma.CategoryMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>
          }
          update: {
            args: Prisma.CategoryMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>
          }
          deleteMany: {
            args: Prisma.CategoryMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>[]
          }
          upsert: {
            args: Prisma.CategoryMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMappingPayload>
          }
          aggregate: {
            args: Prisma.CategoryMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryMapping>
          }
          groupBy: {
            args: Prisma.CategoryMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryMappingCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryMappingCountAggregateOutputType> | number
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
    seller?: SellerOmit
    categoryMapping?: CategoryMappingOmit
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
   * Models
   */

  /**
   * Model Seller
   */

  export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null
    _avg: SellerAvgAggregateOutputType | null
    _sum: SellerSumAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  export type SellerAvgAggregateOutputType = {
    id: number | null
    primaryCategoryId: number | null
    primarySubCategoryId: number | null
    estimateSales: number | null
    avgPrice: number | null
    percentFba: number | null
    numberReviewsLifetime: number | null
    numberReviews30Days: number | null
    numberWinningBrands: number | null
    numberAsins: number | null
    numberTopAsins: number | null
    numBrands1000: number | null
    moMGrowth: number | null
    threeMonthGrowth: number | null
    sixMonthGrowth: number | null
    yearGrowth: number | null
    moMGrowthCount: number | null
    sixMonthGrowthCount: number | null
  }

  export type SellerSumAggregateOutputType = {
    id: number | null
    primaryCategoryId: number | null
    primarySubCategoryId: number | null
    estimateSales: number | null
    avgPrice: number | null
    percentFba: number | null
    numberReviewsLifetime: number | null
    numberReviews30Days: number | null
    numberWinningBrands: number | null
    numberAsins: number | null
    numberTopAsins: number | null
    numBrands1000: number | null
    moMGrowth: number | null
    threeMonthGrowth: number | null
    sixMonthGrowth: number | null
    yearGrowth: number | null
    moMGrowthCount: number | null
    sixMonthGrowthCount: number | null
  }

  export type SellerMinAggregateOutputType = {
    id: number | null
    sellerEmails: string | null
    note: string | null
    collectionExcluded: string | null
    name: string | null
    primaryCategoryId: number | null
    primaryCategoryIdString: string | null
    primarySubCategoryId: number | null
    stateFromMerchant: string | null
    whoIsRecord: string | null
    legalName: string | null
    disposition: string | null
    marketplace: string | null
    qualifiedBrands: string | null
    brandOwnership: string | null
    singleBrand: string | null
    brandNameMatch: string | null
    closeBrand: string | null
    checkedForEmails: string | null
    haveEmails: string | null
    email: string | null
    contactedDate: string | null
    contacted: string | null
    profilingStatus: string | null
    confirmedEmail: string | null
    phone: string | null
    confirmedPhone: string | null
    confirmedRealWorldName: string | null
    lastUpdated: string | null
    dateUpdated: string | null
    primaryCategory: string | null
    primarySubCategory: string | null
    businessName: string | null
    amazonSellerId: string | null
    estimateSales: number | null
    avgPrice: number | null
    percentFba: number | null
    numberReviewsLifetime: number | null
    numberReviews30Days: number | null
    numberWinningBrands: number | null
    numberAsins: number | null
    numberTopAsins: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    numBrands1000: number | null
    moMGrowth: number | null
    threeMonthGrowth: number | null
    sixMonthGrowth: number | null
    yearGrowth: number | null
    moMGrowthCount: number | null
    sixMonthGrowthCount: number | null
    isSuspended: string | null
    lastSuspendedDate: string | null
    startedSellingDate: string | null
    dateScraped: Date | null
  }

  export type SellerMaxAggregateOutputType = {
    id: number | null
    sellerEmails: string | null
    note: string | null
    collectionExcluded: string | null
    name: string | null
    primaryCategoryId: number | null
    primaryCategoryIdString: string | null
    primarySubCategoryId: number | null
    stateFromMerchant: string | null
    whoIsRecord: string | null
    legalName: string | null
    disposition: string | null
    marketplace: string | null
    qualifiedBrands: string | null
    brandOwnership: string | null
    singleBrand: string | null
    brandNameMatch: string | null
    closeBrand: string | null
    checkedForEmails: string | null
    haveEmails: string | null
    email: string | null
    contactedDate: string | null
    contacted: string | null
    profilingStatus: string | null
    confirmedEmail: string | null
    phone: string | null
    confirmedPhone: string | null
    confirmedRealWorldName: string | null
    lastUpdated: string | null
    dateUpdated: string | null
    primaryCategory: string | null
    primarySubCategory: string | null
    businessName: string | null
    amazonSellerId: string | null
    estimateSales: number | null
    avgPrice: number | null
    percentFba: number | null
    numberReviewsLifetime: number | null
    numberReviews30Days: number | null
    numberWinningBrands: number | null
    numberAsins: number | null
    numberTopAsins: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    numBrands1000: number | null
    moMGrowth: number | null
    threeMonthGrowth: number | null
    sixMonthGrowth: number | null
    yearGrowth: number | null
    moMGrowthCount: number | null
    sixMonthGrowthCount: number | null
    isSuspended: string | null
    lastSuspendedDate: string | null
    startedSellingDate: string | null
    dateScraped: Date | null
  }

  export type SellerCountAggregateOutputType = {
    id: number
    sellerEmails: number
    note: number
    collectionExcluded: number
    name: number
    primaryCategoryId: number
    primaryCategoryIdString: number
    primarySubCategoryId: number
    stateFromMerchant: number
    whoIsRecord: number
    legalName: number
    disposition: number
    marketplace: number
    qualifiedBrands: number
    brandOwnership: number
    singleBrand: number
    brandNameMatch: number
    closeBrand: number
    checkedForEmails: number
    haveEmails: number
    email: number
    contactedDate: number
    contacted: number
    profilingStatus: number
    confirmedEmail: number
    phone: number
    confirmedPhone: number
    confirmedRealWorldName: number
    lastUpdated: number
    dateUpdated: number
    primaryCategory: number
    primarySubCategory: number
    businessName: number
    amazonSellerId: number
    estimateSales: number
    avgPrice: number
    percentFba: number
    numberReviewsLifetime: number
    numberReviews30Days: number
    numberWinningBrands: number
    numberAsins: number
    numberTopAsins: number
    street: number
    city: number
    state: number
    country: number
    zipCode: number
    numBrands1000: number
    moMGrowth: number
    threeMonthGrowth: number
    sixMonthGrowth: number
    yearGrowth: number
    moMGrowthCount: number
    sixMonthGrowthCount: number
    isSuspended: number
    lastSuspendedDate: number
    startedSellingDate: number
    dateScraped: number
    _all: number
  }


  export type SellerAvgAggregateInputType = {
    id?: true
    primaryCategoryId?: true
    primarySubCategoryId?: true
    estimateSales?: true
    avgPrice?: true
    percentFba?: true
    numberReviewsLifetime?: true
    numberReviews30Days?: true
    numberWinningBrands?: true
    numberAsins?: true
    numberTopAsins?: true
    numBrands1000?: true
    moMGrowth?: true
    threeMonthGrowth?: true
    sixMonthGrowth?: true
    yearGrowth?: true
    moMGrowthCount?: true
    sixMonthGrowthCount?: true
  }

  export type SellerSumAggregateInputType = {
    id?: true
    primaryCategoryId?: true
    primarySubCategoryId?: true
    estimateSales?: true
    avgPrice?: true
    percentFba?: true
    numberReviewsLifetime?: true
    numberReviews30Days?: true
    numberWinningBrands?: true
    numberAsins?: true
    numberTopAsins?: true
    numBrands1000?: true
    moMGrowth?: true
    threeMonthGrowth?: true
    sixMonthGrowth?: true
    yearGrowth?: true
    moMGrowthCount?: true
    sixMonthGrowthCount?: true
  }

  export type SellerMinAggregateInputType = {
    id?: true
    sellerEmails?: true
    note?: true
    collectionExcluded?: true
    name?: true
    primaryCategoryId?: true
    primaryCategoryIdString?: true
    primarySubCategoryId?: true
    stateFromMerchant?: true
    whoIsRecord?: true
    legalName?: true
    disposition?: true
    marketplace?: true
    qualifiedBrands?: true
    brandOwnership?: true
    singleBrand?: true
    brandNameMatch?: true
    closeBrand?: true
    checkedForEmails?: true
    haveEmails?: true
    email?: true
    contactedDate?: true
    contacted?: true
    profilingStatus?: true
    confirmedEmail?: true
    phone?: true
    confirmedPhone?: true
    confirmedRealWorldName?: true
    lastUpdated?: true
    dateUpdated?: true
    primaryCategory?: true
    primarySubCategory?: true
    businessName?: true
    amazonSellerId?: true
    estimateSales?: true
    avgPrice?: true
    percentFba?: true
    numberReviewsLifetime?: true
    numberReviews30Days?: true
    numberWinningBrands?: true
    numberAsins?: true
    numberTopAsins?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    numBrands1000?: true
    moMGrowth?: true
    threeMonthGrowth?: true
    sixMonthGrowth?: true
    yearGrowth?: true
    moMGrowthCount?: true
    sixMonthGrowthCount?: true
    isSuspended?: true
    lastSuspendedDate?: true
    startedSellingDate?: true
    dateScraped?: true
  }

  export type SellerMaxAggregateInputType = {
    id?: true
    sellerEmails?: true
    note?: true
    collectionExcluded?: true
    name?: true
    primaryCategoryId?: true
    primaryCategoryIdString?: true
    primarySubCategoryId?: true
    stateFromMerchant?: true
    whoIsRecord?: true
    legalName?: true
    disposition?: true
    marketplace?: true
    qualifiedBrands?: true
    brandOwnership?: true
    singleBrand?: true
    brandNameMatch?: true
    closeBrand?: true
    checkedForEmails?: true
    haveEmails?: true
    email?: true
    contactedDate?: true
    contacted?: true
    profilingStatus?: true
    confirmedEmail?: true
    phone?: true
    confirmedPhone?: true
    confirmedRealWorldName?: true
    lastUpdated?: true
    dateUpdated?: true
    primaryCategory?: true
    primarySubCategory?: true
    businessName?: true
    amazonSellerId?: true
    estimateSales?: true
    avgPrice?: true
    percentFba?: true
    numberReviewsLifetime?: true
    numberReviews30Days?: true
    numberWinningBrands?: true
    numberAsins?: true
    numberTopAsins?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    numBrands1000?: true
    moMGrowth?: true
    threeMonthGrowth?: true
    sixMonthGrowth?: true
    yearGrowth?: true
    moMGrowthCount?: true
    sixMonthGrowthCount?: true
    isSuspended?: true
    lastSuspendedDate?: true
    startedSellingDate?: true
    dateScraped?: true
  }

  export type SellerCountAggregateInputType = {
    id?: true
    sellerEmails?: true
    note?: true
    collectionExcluded?: true
    name?: true
    primaryCategoryId?: true
    primaryCategoryIdString?: true
    primarySubCategoryId?: true
    stateFromMerchant?: true
    whoIsRecord?: true
    legalName?: true
    disposition?: true
    marketplace?: true
    qualifiedBrands?: true
    brandOwnership?: true
    singleBrand?: true
    brandNameMatch?: true
    closeBrand?: true
    checkedForEmails?: true
    haveEmails?: true
    email?: true
    contactedDate?: true
    contacted?: true
    profilingStatus?: true
    confirmedEmail?: true
    phone?: true
    confirmedPhone?: true
    confirmedRealWorldName?: true
    lastUpdated?: true
    dateUpdated?: true
    primaryCategory?: true
    primarySubCategory?: true
    businessName?: true
    amazonSellerId?: true
    estimateSales?: true
    avgPrice?: true
    percentFba?: true
    numberReviewsLifetime?: true
    numberReviews30Days?: true
    numberWinningBrands?: true
    numberAsins?: true
    numberTopAsins?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    numBrands1000?: true
    moMGrowth?: true
    threeMonthGrowth?: true
    sixMonthGrowth?: true
    yearGrowth?: true
    moMGrowthCount?: true
    sixMonthGrowthCount?: true
    isSuspended?: true
    lastSuspendedDate?: true
    startedSellingDate?: true
    dateScraped?: true
    _all?: true
  }

  export type SellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seller to aggregate.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sellers
    **/
    _count?: true | SellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerMaxAggregateInputType
  }

  export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeller[P]>
      : GetScalarType<T[P], AggregateSeller[P]>
  }




  export type SellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerWhereInput
    orderBy?: SellerOrderByWithAggregationInput | SellerOrderByWithAggregationInput[]
    by: SellerScalarFieldEnum[] | SellerScalarFieldEnum
    having?: SellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerCountAggregateInputType | true
    _avg?: SellerAvgAggregateInputType
    _sum?: SellerSumAggregateInputType
    _min?: SellerMinAggregateInputType
    _max?: SellerMaxAggregateInputType
  }

  export type SellerGroupByOutputType = {
    id: number
    sellerEmails: string | null
    note: string | null
    collectionExcluded: string | null
    name: string | null
    primaryCategoryId: number | null
    primaryCategoryIdString: string | null
    primarySubCategoryId: number | null
    stateFromMerchant: string | null
    whoIsRecord: string | null
    legalName: string | null
    disposition: string | null
    marketplace: string
    qualifiedBrands: string | null
    brandOwnership: string | null
    singleBrand: string | null
    brandNameMatch: string | null
    closeBrand: string | null
    checkedForEmails: string | null
    haveEmails: string | null
    email: string | null
    contactedDate: string | null
    contacted: string | null
    profilingStatus: string | null
    confirmedEmail: string | null
    phone: string | null
    confirmedPhone: string | null
    confirmedRealWorldName: string | null
    lastUpdated: string | null
    dateUpdated: string | null
    primaryCategory: string | null
    primarySubCategory: string | null
    businessName: string | null
    amazonSellerId: string | null
    estimateSales: number | null
    avgPrice: number | null
    percentFba: number | null
    numberReviewsLifetime: number | null
    numberReviews30Days: number | null
    numberWinningBrands: number | null
    numberAsins: number | null
    numberTopAsins: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    numBrands1000: number | null
    moMGrowth: number | null
    threeMonthGrowth: number | null
    sixMonthGrowth: number | null
    yearGrowth: number | null
    moMGrowthCount: number | null
    sixMonthGrowthCount: number | null
    isSuspended: string | null
    lastSuspendedDate: string | null
    startedSellingDate: string | null
    dateScraped: Date
    _count: SellerCountAggregateOutputType | null
    _avg: SellerAvgAggregateOutputType | null
    _sum: SellerSumAggregateOutputType | null
    _min: SellerMinAggregateOutputType | null
    _max: SellerMaxAggregateOutputType | null
  }

  type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerGroupByOutputType[P]>
            : GetScalarType<T[P], SellerGroupByOutputType[P]>
        }
      >
    >


  export type SellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerEmails?: boolean
    note?: boolean
    collectionExcluded?: boolean
    name?: boolean
    primaryCategoryId?: boolean
    primaryCategoryIdString?: boolean
    primarySubCategoryId?: boolean
    stateFromMerchant?: boolean
    whoIsRecord?: boolean
    legalName?: boolean
    disposition?: boolean
    marketplace?: boolean
    qualifiedBrands?: boolean
    brandOwnership?: boolean
    singleBrand?: boolean
    brandNameMatch?: boolean
    closeBrand?: boolean
    checkedForEmails?: boolean
    haveEmails?: boolean
    email?: boolean
    contactedDate?: boolean
    contacted?: boolean
    profilingStatus?: boolean
    confirmedEmail?: boolean
    phone?: boolean
    confirmedPhone?: boolean
    confirmedRealWorldName?: boolean
    lastUpdated?: boolean
    dateUpdated?: boolean
    primaryCategory?: boolean
    primarySubCategory?: boolean
    businessName?: boolean
    amazonSellerId?: boolean
    estimateSales?: boolean
    avgPrice?: boolean
    percentFba?: boolean
    numberReviewsLifetime?: boolean
    numberReviews30Days?: boolean
    numberWinningBrands?: boolean
    numberAsins?: boolean
    numberTopAsins?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    numBrands1000?: boolean
    moMGrowth?: boolean
    threeMonthGrowth?: boolean
    sixMonthGrowth?: boolean
    yearGrowth?: boolean
    moMGrowthCount?: boolean
    sixMonthGrowthCount?: boolean
    isSuspended?: boolean
    lastSuspendedDate?: boolean
    startedSellingDate?: boolean
    dateScraped?: boolean
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerEmails?: boolean
    note?: boolean
    collectionExcluded?: boolean
    name?: boolean
    primaryCategoryId?: boolean
    primaryCategoryIdString?: boolean
    primarySubCategoryId?: boolean
    stateFromMerchant?: boolean
    whoIsRecord?: boolean
    legalName?: boolean
    disposition?: boolean
    marketplace?: boolean
    qualifiedBrands?: boolean
    brandOwnership?: boolean
    singleBrand?: boolean
    brandNameMatch?: boolean
    closeBrand?: boolean
    checkedForEmails?: boolean
    haveEmails?: boolean
    email?: boolean
    contactedDate?: boolean
    contacted?: boolean
    profilingStatus?: boolean
    confirmedEmail?: boolean
    phone?: boolean
    confirmedPhone?: boolean
    confirmedRealWorldName?: boolean
    lastUpdated?: boolean
    dateUpdated?: boolean
    primaryCategory?: boolean
    primarySubCategory?: boolean
    businessName?: boolean
    amazonSellerId?: boolean
    estimateSales?: boolean
    avgPrice?: boolean
    percentFba?: boolean
    numberReviewsLifetime?: boolean
    numberReviews30Days?: boolean
    numberWinningBrands?: boolean
    numberAsins?: boolean
    numberTopAsins?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    numBrands1000?: boolean
    moMGrowth?: boolean
    threeMonthGrowth?: boolean
    sixMonthGrowth?: boolean
    yearGrowth?: boolean
    moMGrowthCount?: boolean
    sixMonthGrowthCount?: boolean
    isSuspended?: boolean
    lastSuspendedDate?: boolean
    startedSellingDate?: boolean
    dateScraped?: boolean
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerEmails?: boolean
    note?: boolean
    collectionExcluded?: boolean
    name?: boolean
    primaryCategoryId?: boolean
    primaryCategoryIdString?: boolean
    primarySubCategoryId?: boolean
    stateFromMerchant?: boolean
    whoIsRecord?: boolean
    legalName?: boolean
    disposition?: boolean
    marketplace?: boolean
    qualifiedBrands?: boolean
    brandOwnership?: boolean
    singleBrand?: boolean
    brandNameMatch?: boolean
    closeBrand?: boolean
    checkedForEmails?: boolean
    haveEmails?: boolean
    email?: boolean
    contactedDate?: boolean
    contacted?: boolean
    profilingStatus?: boolean
    confirmedEmail?: boolean
    phone?: boolean
    confirmedPhone?: boolean
    confirmedRealWorldName?: boolean
    lastUpdated?: boolean
    dateUpdated?: boolean
    primaryCategory?: boolean
    primarySubCategory?: boolean
    businessName?: boolean
    amazonSellerId?: boolean
    estimateSales?: boolean
    avgPrice?: boolean
    percentFba?: boolean
    numberReviewsLifetime?: boolean
    numberReviews30Days?: boolean
    numberWinningBrands?: boolean
    numberAsins?: boolean
    numberTopAsins?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    numBrands1000?: boolean
    moMGrowth?: boolean
    threeMonthGrowth?: boolean
    sixMonthGrowth?: boolean
    yearGrowth?: boolean
    moMGrowthCount?: boolean
    sixMonthGrowthCount?: boolean
    isSuspended?: boolean
    lastSuspendedDate?: boolean
    startedSellingDate?: boolean
    dateScraped?: boolean
  }, ExtArgs["result"]["seller"]>

  export type SellerSelectScalar = {
    id?: boolean
    sellerEmails?: boolean
    note?: boolean
    collectionExcluded?: boolean
    name?: boolean
    primaryCategoryId?: boolean
    primaryCategoryIdString?: boolean
    primarySubCategoryId?: boolean
    stateFromMerchant?: boolean
    whoIsRecord?: boolean
    legalName?: boolean
    disposition?: boolean
    marketplace?: boolean
    qualifiedBrands?: boolean
    brandOwnership?: boolean
    singleBrand?: boolean
    brandNameMatch?: boolean
    closeBrand?: boolean
    checkedForEmails?: boolean
    haveEmails?: boolean
    email?: boolean
    contactedDate?: boolean
    contacted?: boolean
    profilingStatus?: boolean
    confirmedEmail?: boolean
    phone?: boolean
    confirmedPhone?: boolean
    confirmedRealWorldName?: boolean
    lastUpdated?: boolean
    dateUpdated?: boolean
    primaryCategory?: boolean
    primarySubCategory?: boolean
    businessName?: boolean
    amazonSellerId?: boolean
    estimateSales?: boolean
    avgPrice?: boolean
    percentFba?: boolean
    numberReviewsLifetime?: boolean
    numberReviews30Days?: boolean
    numberWinningBrands?: boolean
    numberAsins?: boolean
    numberTopAsins?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    numBrands1000?: boolean
    moMGrowth?: boolean
    threeMonthGrowth?: boolean
    sixMonthGrowth?: boolean
    yearGrowth?: boolean
    moMGrowthCount?: boolean
    sixMonthGrowthCount?: boolean
    isSuspended?: boolean
    lastSuspendedDate?: boolean
    startedSellingDate?: boolean
    dateScraped?: boolean
  }

  export type SellerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellerEmails" | "note" | "collectionExcluded" | "name" | "primaryCategoryId" | "primaryCategoryIdString" | "primarySubCategoryId" | "stateFromMerchant" | "whoIsRecord" | "legalName" | "disposition" | "marketplace" | "qualifiedBrands" | "brandOwnership" | "singleBrand" | "brandNameMatch" | "closeBrand" | "checkedForEmails" | "haveEmails" | "email" | "contactedDate" | "contacted" | "profilingStatus" | "confirmedEmail" | "phone" | "confirmedPhone" | "confirmedRealWorldName" | "lastUpdated" | "dateUpdated" | "primaryCategory" | "primarySubCategory" | "businessName" | "amazonSellerId" | "estimateSales" | "avgPrice" | "percentFba" | "numberReviewsLifetime" | "numberReviews30Days" | "numberWinningBrands" | "numberAsins" | "numberTopAsins" | "street" | "city" | "state" | "country" | "zipCode" | "numBrands1000" | "moMGrowth" | "threeMonthGrowth" | "sixMonthGrowth" | "yearGrowth" | "moMGrowthCount" | "sixMonthGrowthCount" | "isSuspended" | "lastSuspendedDate" | "startedSellingDate" | "dateScraped", ExtArgs["result"]["seller"]>

  export type $SellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seller"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sellerEmails: string | null
      note: string | null
      collectionExcluded: string | null
      name: string | null
      primaryCategoryId: number | null
      primaryCategoryIdString: string | null
      primarySubCategoryId: number | null
      stateFromMerchant: string | null
      whoIsRecord: string | null
      legalName: string | null
      disposition: string | null
      marketplace: string
      qualifiedBrands: string | null
      brandOwnership: string | null
      singleBrand: string | null
      brandNameMatch: string | null
      closeBrand: string | null
      checkedForEmails: string | null
      haveEmails: string | null
      email: string | null
      contactedDate: string | null
      contacted: string | null
      profilingStatus: string | null
      confirmedEmail: string | null
      phone: string | null
      confirmedPhone: string | null
      confirmedRealWorldName: string | null
      lastUpdated: string | null
      dateUpdated: string | null
      primaryCategory: string | null
      primarySubCategory: string | null
      businessName: string | null
      amazonSellerId: string | null
      estimateSales: number | null
      avgPrice: number | null
      percentFba: number | null
      numberReviewsLifetime: number | null
      numberReviews30Days: number | null
      numberWinningBrands: number | null
      numberAsins: number | null
      numberTopAsins: number | null
      street: string | null
      city: string | null
      state: string | null
      country: string | null
      zipCode: string | null
      numBrands1000: number | null
      moMGrowth: number | null
      threeMonthGrowth: number | null
      sixMonthGrowth: number | null
      yearGrowth: number | null
      moMGrowthCount: number | null
      sixMonthGrowthCount: number | null
      isSuspended: string | null
      lastSuspendedDate: string | null
      startedSellingDate: string | null
      dateScraped: Date
    }, ExtArgs["result"]["seller"]>
    composites: {}
  }

  type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = $Result.GetResult<Prisma.$SellerPayload, S>

  type SellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerCountAggregateInputType | true
    }

  export interface SellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seller'], meta: { name: 'Seller' } }
    /**
     * Find zero or one Seller that matches the filter.
     * @param {SellerFindUniqueArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerFindUniqueArgs>(args: SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seller that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerFindUniqueOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerFindFirstArgs>(args?: SelectSubset<T, SellerFindFirstArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindFirstOrThrowArgs} args - Arguments to find a Seller
     * @example
     * // Get one Seller
     * const seller = await prisma.seller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.seller.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.seller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerWithIdOnly = await prisma.seller.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerFindManyArgs>(args?: SelectSubset<T, SellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seller.
     * @param {SellerCreateArgs} args - Arguments to create a Seller.
     * @example
     * // Create one Seller
     * const Seller = await prisma.seller.create({
     *   data: {
     *     // ... data to create a Seller
     *   }
     * })
     * 
     */
    create<T extends SellerCreateArgs>(args: SelectSubset<T, SellerCreateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sellers.
     * @param {SellerCreateManyArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerCreateManyArgs>(args?: SelectSubset<T, SellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sellers and returns the data saved in the database.
     * @param {SellerCreateManyAndReturnArgs} args - Arguments to create many Sellers.
     * @example
     * // Create many Sellers
     * const seller = await prisma.seller.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seller.
     * @param {SellerDeleteArgs} args - Arguments to delete one Seller.
     * @example
     * // Delete one Seller
     * const Seller = await prisma.seller.delete({
     *   where: {
     *     // ... filter to delete one Seller
     *   }
     * })
     * 
     */
    delete<T extends SellerDeleteArgs>(args: SelectSubset<T, SellerDeleteArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seller.
     * @param {SellerUpdateArgs} args - Arguments to update one Seller.
     * @example
     * // Update one Seller
     * const seller = await prisma.seller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerUpdateArgs>(args: SelectSubset<T, SellerUpdateArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sellers.
     * @param {SellerDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.seller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerDeleteManyArgs>(args?: SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerUpdateManyArgs>(args: SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers and returns the data updated in the database.
     * @param {SellerUpdateManyAndReturnArgs} args - Arguments to update many Sellers.
     * @example
     * // Update many Sellers
     * const seller = await prisma.seller.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sellers and only return the `id`
     * const sellerWithIdOnly = await prisma.seller.updateManyAndReturn({
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
    updateManyAndReturn<T extends SellerUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seller.
     * @param {SellerUpsertArgs} args - Arguments to update or create a Seller.
     * @example
     * // Update or create a Seller
     * const seller = await prisma.seller.upsert({
     *   create: {
     *     // ... data to create a Seller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seller we want to update
     *   }
     * })
     */
    upsert<T extends SellerUpsertArgs>(args: SelectSubset<T, SellerUpsertArgs<ExtArgs>>): Prisma__SellerClient<$Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.seller.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends SellerCountArgs>(
      args?: Subset<T, SellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerAggregateArgs>(args: Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>

    /**
     * Group by Seller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerGroupByArgs} args - Group by arguments.
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
      T extends SellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerGroupByArgs['orderBy'] }
        : { orderBy?: SellerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seller model
   */
  readonly fields: SellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Seller model
   */
  interface SellerFieldRefs {
    readonly id: FieldRef<"Seller", 'Int'>
    readonly sellerEmails: FieldRef<"Seller", 'String'>
    readonly note: FieldRef<"Seller", 'String'>
    readonly collectionExcluded: FieldRef<"Seller", 'String'>
    readonly name: FieldRef<"Seller", 'String'>
    readonly primaryCategoryId: FieldRef<"Seller", 'Int'>
    readonly primaryCategoryIdString: FieldRef<"Seller", 'String'>
    readonly primarySubCategoryId: FieldRef<"Seller", 'Int'>
    readonly stateFromMerchant: FieldRef<"Seller", 'String'>
    readonly whoIsRecord: FieldRef<"Seller", 'String'>
    readonly legalName: FieldRef<"Seller", 'String'>
    readonly disposition: FieldRef<"Seller", 'String'>
    readonly marketplace: FieldRef<"Seller", 'String'>
    readonly qualifiedBrands: FieldRef<"Seller", 'String'>
    readonly brandOwnership: FieldRef<"Seller", 'String'>
    readonly singleBrand: FieldRef<"Seller", 'String'>
    readonly brandNameMatch: FieldRef<"Seller", 'String'>
    readonly closeBrand: FieldRef<"Seller", 'String'>
    readonly checkedForEmails: FieldRef<"Seller", 'String'>
    readonly haveEmails: FieldRef<"Seller", 'String'>
    readonly email: FieldRef<"Seller", 'String'>
    readonly contactedDate: FieldRef<"Seller", 'String'>
    readonly contacted: FieldRef<"Seller", 'String'>
    readonly profilingStatus: FieldRef<"Seller", 'String'>
    readonly confirmedEmail: FieldRef<"Seller", 'String'>
    readonly phone: FieldRef<"Seller", 'String'>
    readonly confirmedPhone: FieldRef<"Seller", 'String'>
    readonly confirmedRealWorldName: FieldRef<"Seller", 'String'>
    readonly lastUpdated: FieldRef<"Seller", 'String'>
    readonly dateUpdated: FieldRef<"Seller", 'String'>
    readonly primaryCategory: FieldRef<"Seller", 'String'>
    readonly primarySubCategory: FieldRef<"Seller", 'String'>
    readonly businessName: FieldRef<"Seller", 'String'>
    readonly amazonSellerId: FieldRef<"Seller", 'String'>
    readonly estimateSales: FieldRef<"Seller", 'Float'>
    readonly avgPrice: FieldRef<"Seller", 'Float'>
    readonly percentFba: FieldRef<"Seller", 'Float'>
    readonly numberReviewsLifetime: FieldRef<"Seller", 'Int'>
    readonly numberReviews30Days: FieldRef<"Seller", 'Int'>
    readonly numberWinningBrands: FieldRef<"Seller", 'Int'>
    readonly numberAsins: FieldRef<"Seller", 'Int'>
    readonly numberTopAsins: FieldRef<"Seller", 'Int'>
    readonly street: FieldRef<"Seller", 'String'>
    readonly city: FieldRef<"Seller", 'String'>
    readonly state: FieldRef<"Seller", 'String'>
    readonly country: FieldRef<"Seller", 'String'>
    readonly zipCode: FieldRef<"Seller", 'String'>
    readonly numBrands1000: FieldRef<"Seller", 'Int'>
    readonly moMGrowth: FieldRef<"Seller", 'Float'>
    readonly threeMonthGrowth: FieldRef<"Seller", 'Float'>
    readonly sixMonthGrowth: FieldRef<"Seller", 'Float'>
    readonly yearGrowth: FieldRef<"Seller", 'Float'>
    readonly moMGrowthCount: FieldRef<"Seller", 'Int'>
    readonly sixMonthGrowthCount: FieldRef<"Seller", 'Int'>
    readonly isSuspended: FieldRef<"Seller", 'String'>
    readonly lastSuspendedDate: FieldRef<"Seller", 'String'>
    readonly startedSellingDate: FieldRef<"Seller", 'String'>
    readonly dateScraped: FieldRef<"Seller", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seller findUnique
   */
  export type SellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findUniqueOrThrow
   */
  export type SellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller findFirst
   */
  export type SellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findFirstOrThrow
   */
  export type SellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Filter, which Seller to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sellers.
     */
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller findMany
   */
  export type SellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Filter, which Sellers to fetch.
     */
    where?: SellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sellers to fetch.
     */
    orderBy?: SellerOrderByWithRelationInput | SellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sellers.
     */
    cursor?: SellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sellers.
     */
    skip?: number
    distinct?: SellerScalarFieldEnum | SellerScalarFieldEnum[]
  }

  /**
   * Seller create
   */
  export type SellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data needed to create a Seller.
     */
    data: XOR<SellerCreateInput, SellerUncheckedCreateInput>
  }

  /**
   * Seller createMany
   */
  export type SellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seller createManyAndReturn
   */
  export type SellerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to create many Sellers.
     */
    data: SellerCreateManyInput | SellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seller update
   */
  export type SellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data needed to update a Seller.
     */
    data: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
    /**
     * Choose, which Seller to update.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller updateMany
   */
  export type SellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
  }

  /**
   * Seller updateManyAndReturn
   */
  export type SellerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The data used to update Sellers.
     */
    data: XOR<SellerUpdateManyMutationInput, SellerUncheckedUpdateManyInput>
    /**
     * Filter which Sellers to update
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to update.
     */
    limit?: number
  }

  /**
   * Seller upsert
   */
  export type SellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * The filter to search for the Seller to update in case it exists.
     */
    where: SellerWhereUniqueInput
    /**
     * In case the Seller found by the `where` argument doesn't exist, create a new Seller with this data.
     */
    create: XOR<SellerCreateInput, SellerUncheckedCreateInput>
    /**
     * In case the Seller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerUpdateInput, SellerUncheckedUpdateInput>
  }

  /**
   * Seller delete
   */
  export type SellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
    /**
     * Filter which Seller to delete.
     */
    where: SellerWhereUniqueInput
  }

  /**
   * Seller deleteMany
   */
  export type SellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sellers to delete
     */
    where?: SellerWhereInput
    /**
     * Limit how many Sellers to delete.
     */
    limit?: number
  }

  /**
   * Seller without action
   */
  export type SellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seller
     */
    select?: SellerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seller
     */
    omit?: SellerOmit<ExtArgs> | null
  }


  /**
   * Model CategoryMapping
   */

  export type AggregateCategoryMapping = {
    _count: CategoryMappingCountAggregateOutputType | null
    _avg: CategoryMappingAvgAggregateOutputType | null
    _sum: CategoryMappingSumAggregateOutputType | null
    _min: CategoryMappingMinAggregateOutputType | null
    _max: CategoryMappingMaxAggregateOutputType | null
  }

  export type CategoryMappingAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type CategoryMappingSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type CategoryMappingMinAggregateOutputType = {
    id: number | null
    marketplace: string | null
    categoryId: number | null
    categoryString: string | null
  }

  export type CategoryMappingMaxAggregateOutputType = {
    id: number | null
    marketplace: string | null
    categoryId: number | null
    categoryString: string | null
  }

  export type CategoryMappingCountAggregateOutputType = {
    id: number
    marketplace: number
    categoryId: number
    categoryString: number
    _all: number
  }


  export type CategoryMappingAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type CategoryMappingSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type CategoryMappingMinAggregateInputType = {
    id?: true
    marketplace?: true
    categoryId?: true
    categoryString?: true
  }

  export type CategoryMappingMaxAggregateInputType = {
    id?: true
    marketplace?: true
    categoryId?: true
    categoryString?: true
  }

  export type CategoryMappingCountAggregateInputType = {
    id?: true
    marketplace?: true
    categoryId?: true
    categoryString?: true
    _all?: true
  }

  export type CategoryMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryMapping to aggregate.
     */
    where?: CategoryMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMappings to fetch.
     */
    orderBy?: CategoryMappingOrderByWithRelationInput | CategoryMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryMappings
    **/
    _count?: true | CategoryMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMappingMaxAggregateInputType
  }

  export type GetCategoryMappingAggregateType<T extends CategoryMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryMapping[P]>
      : GetScalarType<T[P], AggregateCategoryMapping[P]>
  }




  export type CategoryMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryMappingWhereInput
    orderBy?: CategoryMappingOrderByWithAggregationInput | CategoryMappingOrderByWithAggregationInput[]
    by: CategoryMappingScalarFieldEnum[] | CategoryMappingScalarFieldEnum
    having?: CategoryMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryMappingCountAggregateInputType | true
    _avg?: CategoryMappingAvgAggregateInputType
    _sum?: CategoryMappingSumAggregateInputType
    _min?: CategoryMappingMinAggregateInputType
    _max?: CategoryMappingMaxAggregateInputType
  }

  export type CategoryMappingGroupByOutputType = {
    id: number
    marketplace: string
    categoryId: number
    categoryString: string
    _count: CategoryMappingCountAggregateOutputType | null
    _avg: CategoryMappingAvgAggregateOutputType | null
    _sum: CategoryMappingSumAggregateOutputType | null
    _min: CategoryMappingMinAggregateOutputType | null
    _max: CategoryMappingMaxAggregateOutputType | null
  }

  type GetCategoryMappingGroupByPayload<T extends CategoryMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryMappingGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryMappingGroupByOutputType[P]>
        }
      >
    >


  export type CategoryMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    categoryId?: boolean
    categoryString?: boolean
  }, ExtArgs["result"]["categoryMapping"]>

  export type CategoryMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    categoryId?: boolean
    categoryString?: boolean
  }, ExtArgs["result"]["categoryMapping"]>

  export type CategoryMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    categoryId?: boolean
    categoryString?: boolean
  }, ExtArgs["result"]["categoryMapping"]>

  export type CategoryMappingSelectScalar = {
    id?: boolean
    marketplace?: boolean
    categoryId?: boolean
    categoryString?: boolean
  }

  export type CategoryMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketplace" | "categoryId" | "categoryString", ExtArgs["result"]["categoryMapping"]>

  export type $CategoryMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryMapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marketplace: string
      categoryId: number
      categoryString: string
    }, ExtArgs["result"]["categoryMapping"]>
    composites: {}
  }

  type CategoryMappingGetPayload<S extends boolean | null | undefined | CategoryMappingDefaultArgs> = $Result.GetResult<Prisma.$CategoryMappingPayload, S>

  type CategoryMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryMappingCountAggregateInputType | true
    }

  export interface CategoryMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryMapping'], meta: { name: 'CategoryMapping' } }
    /**
     * Find zero or one CategoryMapping that matches the filter.
     * @param {CategoryMappingFindUniqueArgs} args - Arguments to find a CategoryMapping
     * @example
     * // Get one CategoryMapping
     * const categoryMapping = await prisma.categoryMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryMappingFindUniqueArgs>(args: SelectSubset<T, CategoryMappingFindUniqueArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryMappingFindUniqueOrThrowArgs} args - Arguments to find a CategoryMapping
     * @example
     * // Get one CategoryMapping
     * const categoryMapping = await prisma.categoryMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingFindFirstArgs} args - Arguments to find a CategoryMapping
     * @example
     * // Get one CategoryMapping
     * const categoryMapping = await prisma.categoryMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryMappingFindFirstArgs>(args?: SelectSubset<T, CategoryMappingFindFirstArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingFindFirstOrThrowArgs} args - Arguments to find a CategoryMapping
     * @example
     * // Get one CategoryMapping
     * const categoryMapping = await prisma.categoryMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryMappings
     * const categoryMappings = await prisma.categoryMapping.findMany()
     * 
     * // Get first 10 CategoryMappings
     * const categoryMappings = await prisma.categoryMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryMappingWithIdOnly = await prisma.categoryMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryMappingFindManyArgs>(args?: SelectSubset<T, CategoryMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryMapping.
     * @param {CategoryMappingCreateArgs} args - Arguments to create a CategoryMapping.
     * @example
     * // Create one CategoryMapping
     * const CategoryMapping = await prisma.categoryMapping.create({
     *   data: {
     *     // ... data to create a CategoryMapping
     *   }
     * })
     * 
     */
    create<T extends CategoryMappingCreateArgs>(args: SelectSubset<T, CategoryMappingCreateArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryMappings.
     * @param {CategoryMappingCreateManyArgs} args - Arguments to create many CategoryMappings.
     * @example
     * // Create many CategoryMappings
     * const categoryMapping = await prisma.categoryMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryMappingCreateManyArgs>(args?: SelectSubset<T, CategoryMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryMappings and returns the data saved in the database.
     * @param {CategoryMappingCreateManyAndReturnArgs} args - Arguments to create many CategoryMappings.
     * @example
     * // Create many CategoryMappings
     * const categoryMapping = await prisma.categoryMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryMappings and only return the `id`
     * const categoryMappingWithIdOnly = await prisma.categoryMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryMapping.
     * @param {CategoryMappingDeleteArgs} args - Arguments to delete one CategoryMapping.
     * @example
     * // Delete one CategoryMapping
     * const CategoryMapping = await prisma.categoryMapping.delete({
     *   where: {
     *     // ... filter to delete one CategoryMapping
     *   }
     * })
     * 
     */
    delete<T extends CategoryMappingDeleteArgs>(args: SelectSubset<T, CategoryMappingDeleteArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryMapping.
     * @param {CategoryMappingUpdateArgs} args - Arguments to update one CategoryMapping.
     * @example
     * // Update one CategoryMapping
     * const categoryMapping = await prisma.categoryMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryMappingUpdateArgs>(args: SelectSubset<T, CategoryMappingUpdateArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryMappings.
     * @param {CategoryMappingDeleteManyArgs} args - Arguments to filter CategoryMappings to delete.
     * @example
     * // Delete a few CategoryMappings
     * const { count } = await prisma.categoryMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryMappingDeleteManyArgs>(args?: SelectSubset<T, CategoryMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryMappings
     * const categoryMapping = await prisma.categoryMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryMappingUpdateManyArgs>(args: SelectSubset<T, CategoryMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryMappings and returns the data updated in the database.
     * @param {CategoryMappingUpdateManyAndReturnArgs} args - Arguments to update many CategoryMappings.
     * @example
     * // Update many CategoryMappings
     * const categoryMapping = await prisma.categoryMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryMappings and only return the `id`
     * const categoryMappingWithIdOnly = await prisma.categoryMapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryMapping.
     * @param {CategoryMappingUpsertArgs} args - Arguments to update or create a CategoryMapping.
     * @example
     * // Update or create a CategoryMapping
     * const categoryMapping = await prisma.categoryMapping.upsert({
     *   create: {
     *     // ... data to create a CategoryMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryMapping we want to update
     *   }
     * })
     */
    upsert<T extends CategoryMappingUpsertArgs>(args: SelectSubset<T, CategoryMappingUpsertArgs<ExtArgs>>): Prisma__CategoryMappingClient<$Result.GetResult<Prisma.$CategoryMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingCountArgs} args - Arguments to filter CategoryMappings to count.
     * @example
     * // Count the number of CategoryMappings
     * const count = await prisma.categoryMapping.count({
     *   where: {
     *     // ... the filter for the CategoryMappings we want to count
     *   }
     * })
    **/
    count<T extends CategoryMappingCountArgs>(
      args?: Subset<T, CategoryMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryMappingAggregateArgs>(args: Subset<T, CategoryMappingAggregateArgs>): Prisma.PrismaPromise<GetCategoryMappingAggregateType<T>>

    /**
     * Group by CategoryMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMappingGroupByArgs} args - Group by arguments.
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
      T extends CategoryMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryMappingGroupByArgs['orderBy'] }
        : { orderBy?: CategoryMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryMapping model
   */
  readonly fields: CategoryMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CategoryMapping model
   */
  interface CategoryMappingFieldRefs {
    readonly id: FieldRef<"CategoryMapping", 'Int'>
    readonly marketplace: FieldRef<"CategoryMapping", 'String'>
    readonly categoryId: FieldRef<"CategoryMapping", 'Int'>
    readonly categoryString: FieldRef<"CategoryMapping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryMapping findUnique
   */
  export type CategoryMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * Filter, which CategoryMapping to fetch.
     */
    where: CategoryMappingWhereUniqueInput
  }

  /**
   * CategoryMapping findUniqueOrThrow
   */
  export type CategoryMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * Filter, which CategoryMapping to fetch.
     */
    where: CategoryMappingWhereUniqueInput
  }

  /**
   * CategoryMapping findFirst
   */
  export type CategoryMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * Filter, which CategoryMapping to fetch.
     */
    where?: CategoryMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMappings to fetch.
     */
    orderBy?: CategoryMappingOrderByWithRelationInput | CategoryMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryMappings.
     */
    cursor?: CategoryMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryMappings.
     */
    distinct?: CategoryMappingScalarFieldEnum | CategoryMappingScalarFieldEnum[]
  }

  /**
   * CategoryMapping findFirstOrThrow
   */
  export type CategoryMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * Filter, which CategoryMapping to fetch.
     */
    where?: CategoryMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMappings to fetch.
     */
    orderBy?: CategoryMappingOrderByWithRelationInput | CategoryMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryMappings.
     */
    cursor?: CategoryMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryMappings.
     */
    distinct?: CategoryMappingScalarFieldEnum | CategoryMappingScalarFieldEnum[]
  }

  /**
   * CategoryMapping findMany
   */
  export type CategoryMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * Filter, which CategoryMappings to fetch.
     */
    where?: CategoryMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMappings to fetch.
     */
    orderBy?: CategoryMappingOrderByWithRelationInput | CategoryMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryMappings.
     */
    cursor?: CategoryMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMappings.
     */
    skip?: number
    distinct?: CategoryMappingScalarFieldEnum | CategoryMappingScalarFieldEnum[]
  }

  /**
   * CategoryMapping create
   */
  export type CategoryMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * The data needed to create a CategoryMapping.
     */
    data: XOR<CategoryMappingCreateInput, CategoryMappingUncheckedCreateInput>
  }

  /**
   * CategoryMapping createMany
   */
  export type CategoryMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryMappings.
     */
    data: CategoryMappingCreateManyInput | CategoryMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryMapping createManyAndReturn
   */
  export type CategoryMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryMappings.
     */
    data: CategoryMappingCreateManyInput | CategoryMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryMapping update
   */
  export type CategoryMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * The data needed to update a CategoryMapping.
     */
    data: XOR<CategoryMappingUpdateInput, CategoryMappingUncheckedUpdateInput>
    /**
     * Choose, which CategoryMapping to update.
     */
    where: CategoryMappingWhereUniqueInput
  }

  /**
   * CategoryMapping updateMany
   */
  export type CategoryMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryMappings.
     */
    data: XOR<CategoryMappingUpdateManyMutationInput, CategoryMappingUncheckedUpdateManyInput>
    /**
     * Filter which CategoryMappings to update
     */
    where?: CategoryMappingWhereInput
    /**
     * Limit how many CategoryMappings to update.
     */
    limit?: number
  }

  /**
   * CategoryMapping updateManyAndReturn
   */
  export type CategoryMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * The data used to update CategoryMappings.
     */
    data: XOR<CategoryMappingUpdateManyMutationInput, CategoryMappingUncheckedUpdateManyInput>
    /**
     * Filter which CategoryMappings to update
     */
    where?: CategoryMappingWhereInput
    /**
     * Limit how many CategoryMappings to update.
     */
    limit?: number
  }

  /**
   * CategoryMapping upsert
   */
  export type CategoryMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * The filter to search for the CategoryMapping to update in case it exists.
     */
    where: CategoryMappingWhereUniqueInput
    /**
     * In case the CategoryMapping found by the `where` argument doesn't exist, create a new CategoryMapping with this data.
     */
    create: XOR<CategoryMappingCreateInput, CategoryMappingUncheckedCreateInput>
    /**
     * In case the CategoryMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryMappingUpdateInput, CategoryMappingUncheckedUpdateInput>
  }

  /**
   * CategoryMapping delete
   */
  export type CategoryMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
    /**
     * Filter which CategoryMapping to delete.
     */
    where: CategoryMappingWhereUniqueInput
  }

  /**
   * CategoryMapping deleteMany
   */
  export type CategoryMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryMappings to delete
     */
    where?: CategoryMappingWhereInput
    /**
     * Limit how many CategoryMappings to delete.
     */
    limit?: number
  }

  /**
   * CategoryMapping without action
   */
  export type CategoryMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMapping
     */
    select?: CategoryMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMapping
     */
    omit?: CategoryMappingOmit<ExtArgs> | null
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


  export const SellerScalarFieldEnum: {
    id: 'id',
    sellerEmails: 'sellerEmails',
    note: 'note',
    collectionExcluded: 'collectionExcluded',
    name: 'name',
    primaryCategoryId: 'primaryCategoryId',
    primaryCategoryIdString: 'primaryCategoryIdString',
    primarySubCategoryId: 'primarySubCategoryId',
    stateFromMerchant: 'stateFromMerchant',
    whoIsRecord: 'whoIsRecord',
    legalName: 'legalName',
    disposition: 'disposition',
    marketplace: 'marketplace',
    qualifiedBrands: 'qualifiedBrands',
    brandOwnership: 'brandOwnership',
    singleBrand: 'singleBrand',
    brandNameMatch: 'brandNameMatch',
    closeBrand: 'closeBrand',
    checkedForEmails: 'checkedForEmails',
    haveEmails: 'haveEmails',
    email: 'email',
    contactedDate: 'contactedDate',
    contacted: 'contacted',
    profilingStatus: 'profilingStatus',
    confirmedEmail: 'confirmedEmail',
    phone: 'phone',
    confirmedPhone: 'confirmedPhone',
    confirmedRealWorldName: 'confirmedRealWorldName',
    lastUpdated: 'lastUpdated',
    dateUpdated: 'dateUpdated',
    primaryCategory: 'primaryCategory',
    primarySubCategory: 'primarySubCategory',
    businessName: 'businessName',
    amazonSellerId: 'amazonSellerId',
    estimateSales: 'estimateSales',
    avgPrice: 'avgPrice',
    percentFba: 'percentFba',
    numberReviewsLifetime: 'numberReviewsLifetime',
    numberReviews30Days: 'numberReviews30Days',
    numberWinningBrands: 'numberWinningBrands',
    numberAsins: 'numberAsins',
    numberTopAsins: 'numberTopAsins',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    zipCode: 'zipCode',
    numBrands1000: 'numBrands1000',
    moMGrowth: 'moMGrowth',
    threeMonthGrowth: 'threeMonthGrowth',
    sixMonthGrowth: 'sixMonthGrowth',
    yearGrowth: 'yearGrowth',
    moMGrowthCount: 'moMGrowthCount',
    sixMonthGrowthCount: 'sixMonthGrowthCount',
    isSuspended: 'isSuspended',
    lastSuspendedDate: 'lastSuspendedDate',
    startedSellingDate: 'startedSellingDate',
    dateScraped: 'dateScraped'
  };

  export type SellerScalarFieldEnum = (typeof SellerScalarFieldEnum)[keyof typeof SellerScalarFieldEnum]


  export const CategoryMappingScalarFieldEnum: {
    id: 'id',
    marketplace: 'marketplace',
    categoryId: 'categoryId',
    categoryString: 'categoryString'
  };

  export type CategoryMappingScalarFieldEnum = (typeof CategoryMappingScalarFieldEnum)[keyof typeof CategoryMappingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type SellerWhereInput = {
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    id?: IntFilter<"Seller"> | number
    sellerEmails?: StringNullableFilter<"Seller"> | string | null
    note?: StringNullableFilter<"Seller"> | string | null
    collectionExcluded?: StringNullableFilter<"Seller"> | string | null
    name?: StringNullableFilter<"Seller"> | string | null
    primaryCategoryId?: IntNullableFilter<"Seller"> | number | null
    primaryCategoryIdString?: StringNullableFilter<"Seller"> | string | null
    primarySubCategoryId?: IntNullableFilter<"Seller"> | number | null
    stateFromMerchant?: StringNullableFilter<"Seller"> | string | null
    whoIsRecord?: StringNullableFilter<"Seller"> | string | null
    legalName?: StringNullableFilter<"Seller"> | string | null
    disposition?: StringNullableFilter<"Seller"> | string | null
    marketplace?: StringFilter<"Seller"> | string
    qualifiedBrands?: StringNullableFilter<"Seller"> | string | null
    brandOwnership?: StringNullableFilter<"Seller"> | string | null
    singleBrand?: StringNullableFilter<"Seller"> | string | null
    brandNameMatch?: StringNullableFilter<"Seller"> | string | null
    closeBrand?: StringNullableFilter<"Seller"> | string | null
    checkedForEmails?: StringNullableFilter<"Seller"> | string | null
    haveEmails?: StringNullableFilter<"Seller"> | string | null
    email?: StringNullableFilter<"Seller"> | string | null
    contactedDate?: StringNullableFilter<"Seller"> | string | null
    contacted?: StringNullableFilter<"Seller"> | string | null
    profilingStatus?: StringNullableFilter<"Seller"> | string | null
    confirmedEmail?: StringNullableFilter<"Seller"> | string | null
    phone?: StringNullableFilter<"Seller"> | string | null
    confirmedPhone?: StringNullableFilter<"Seller"> | string | null
    confirmedRealWorldName?: StringNullableFilter<"Seller"> | string | null
    lastUpdated?: StringNullableFilter<"Seller"> | string | null
    dateUpdated?: StringNullableFilter<"Seller"> | string | null
    primaryCategory?: StringNullableFilter<"Seller"> | string | null
    primarySubCategory?: StringNullableFilter<"Seller"> | string | null
    businessName?: StringNullableFilter<"Seller"> | string | null
    amazonSellerId?: StringNullableFilter<"Seller"> | string | null
    estimateSales?: FloatNullableFilter<"Seller"> | number | null
    avgPrice?: FloatNullableFilter<"Seller"> | number | null
    percentFba?: FloatNullableFilter<"Seller"> | number | null
    numberReviewsLifetime?: IntNullableFilter<"Seller"> | number | null
    numberReviews30Days?: IntNullableFilter<"Seller"> | number | null
    numberWinningBrands?: IntNullableFilter<"Seller"> | number | null
    numberAsins?: IntNullableFilter<"Seller"> | number | null
    numberTopAsins?: IntNullableFilter<"Seller"> | number | null
    street?: StringNullableFilter<"Seller"> | string | null
    city?: StringNullableFilter<"Seller"> | string | null
    state?: StringNullableFilter<"Seller"> | string | null
    country?: StringNullableFilter<"Seller"> | string | null
    zipCode?: StringNullableFilter<"Seller"> | string | null
    numBrands1000?: IntNullableFilter<"Seller"> | number | null
    moMGrowth?: FloatNullableFilter<"Seller"> | number | null
    threeMonthGrowth?: FloatNullableFilter<"Seller"> | number | null
    sixMonthGrowth?: FloatNullableFilter<"Seller"> | number | null
    yearGrowth?: FloatNullableFilter<"Seller"> | number | null
    moMGrowthCount?: IntNullableFilter<"Seller"> | number | null
    sixMonthGrowthCount?: IntNullableFilter<"Seller"> | number | null
    isSuspended?: StringNullableFilter<"Seller"> | string | null
    lastSuspendedDate?: StringNullableFilter<"Seller"> | string | null
    startedSellingDate?: StringNullableFilter<"Seller"> | string | null
    dateScraped?: DateTimeFilter<"Seller"> | Date | string
  }

  export type SellerOrderByWithRelationInput = {
    id?: SortOrder
    sellerEmails?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    collectionExcluded?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    primaryCategoryId?: SortOrderInput | SortOrder
    primaryCategoryIdString?: SortOrderInput | SortOrder
    primarySubCategoryId?: SortOrderInput | SortOrder
    stateFromMerchant?: SortOrderInput | SortOrder
    whoIsRecord?: SortOrderInput | SortOrder
    legalName?: SortOrderInput | SortOrder
    disposition?: SortOrderInput | SortOrder
    marketplace?: SortOrder
    qualifiedBrands?: SortOrderInput | SortOrder
    brandOwnership?: SortOrderInput | SortOrder
    singleBrand?: SortOrderInput | SortOrder
    brandNameMatch?: SortOrderInput | SortOrder
    closeBrand?: SortOrderInput | SortOrder
    checkedForEmails?: SortOrderInput | SortOrder
    haveEmails?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contactedDate?: SortOrderInput | SortOrder
    contacted?: SortOrderInput | SortOrder
    profilingStatus?: SortOrderInput | SortOrder
    confirmedEmail?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    confirmedPhone?: SortOrderInput | SortOrder
    confirmedRealWorldName?: SortOrderInput | SortOrder
    lastUpdated?: SortOrderInput | SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    primaryCategory?: SortOrderInput | SortOrder
    primarySubCategory?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    amazonSellerId?: SortOrderInput | SortOrder
    estimateSales?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    percentFba?: SortOrderInput | SortOrder
    numberReviewsLifetime?: SortOrderInput | SortOrder
    numberReviews30Days?: SortOrderInput | SortOrder
    numberWinningBrands?: SortOrderInput | SortOrder
    numberAsins?: SortOrderInput | SortOrder
    numberTopAsins?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    numBrands1000?: SortOrderInput | SortOrder
    moMGrowth?: SortOrderInput | SortOrder
    threeMonthGrowth?: SortOrderInput | SortOrder
    sixMonthGrowth?: SortOrderInput | SortOrder
    yearGrowth?: SortOrderInput | SortOrder
    moMGrowthCount?: SortOrderInput | SortOrder
    sixMonthGrowthCount?: SortOrderInput | SortOrder
    isSuspended?: SortOrderInput | SortOrder
    lastSuspendedDate?: SortOrderInput | SortOrder
    startedSellingDate?: SortOrderInput | SortOrder
    dateScraped?: SortOrder
  }

  export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SellerWhereInput | SellerWhereInput[]
    OR?: SellerWhereInput[]
    NOT?: SellerWhereInput | SellerWhereInput[]
    sellerEmails?: StringNullableFilter<"Seller"> | string | null
    note?: StringNullableFilter<"Seller"> | string | null
    collectionExcluded?: StringNullableFilter<"Seller"> | string | null
    name?: StringNullableFilter<"Seller"> | string | null
    primaryCategoryId?: IntNullableFilter<"Seller"> | number | null
    primaryCategoryIdString?: StringNullableFilter<"Seller"> | string | null
    primarySubCategoryId?: IntNullableFilter<"Seller"> | number | null
    stateFromMerchant?: StringNullableFilter<"Seller"> | string | null
    whoIsRecord?: StringNullableFilter<"Seller"> | string | null
    legalName?: StringNullableFilter<"Seller"> | string | null
    disposition?: StringNullableFilter<"Seller"> | string | null
    marketplace?: StringFilter<"Seller"> | string
    qualifiedBrands?: StringNullableFilter<"Seller"> | string | null
    brandOwnership?: StringNullableFilter<"Seller"> | string | null
    singleBrand?: StringNullableFilter<"Seller"> | string | null
    brandNameMatch?: StringNullableFilter<"Seller"> | string | null
    closeBrand?: StringNullableFilter<"Seller"> | string | null
    checkedForEmails?: StringNullableFilter<"Seller"> | string | null
    haveEmails?: StringNullableFilter<"Seller"> | string | null
    email?: StringNullableFilter<"Seller"> | string | null
    contactedDate?: StringNullableFilter<"Seller"> | string | null
    contacted?: StringNullableFilter<"Seller"> | string | null
    profilingStatus?: StringNullableFilter<"Seller"> | string | null
    confirmedEmail?: StringNullableFilter<"Seller"> | string | null
    phone?: StringNullableFilter<"Seller"> | string | null
    confirmedPhone?: StringNullableFilter<"Seller"> | string | null
    confirmedRealWorldName?: StringNullableFilter<"Seller"> | string | null
    lastUpdated?: StringNullableFilter<"Seller"> | string | null
    dateUpdated?: StringNullableFilter<"Seller"> | string | null
    primaryCategory?: StringNullableFilter<"Seller"> | string | null
    primarySubCategory?: StringNullableFilter<"Seller"> | string | null
    businessName?: StringNullableFilter<"Seller"> | string | null
    amazonSellerId?: StringNullableFilter<"Seller"> | string | null
    estimateSales?: FloatNullableFilter<"Seller"> | number | null
    avgPrice?: FloatNullableFilter<"Seller"> | number | null
    percentFba?: FloatNullableFilter<"Seller"> | number | null
    numberReviewsLifetime?: IntNullableFilter<"Seller"> | number | null
    numberReviews30Days?: IntNullableFilter<"Seller"> | number | null
    numberWinningBrands?: IntNullableFilter<"Seller"> | number | null
    numberAsins?: IntNullableFilter<"Seller"> | number | null
    numberTopAsins?: IntNullableFilter<"Seller"> | number | null
    street?: StringNullableFilter<"Seller"> | string | null
    city?: StringNullableFilter<"Seller"> | string | null
    state?: StringNullableFilter<"Seller"> | string | null
    country?: StringNullableFilter<"Seller"> | string | null
    zipCode?: StringNullableFilter<"Seller"> | string | null
    numBrands1000?: IntNullableFilter<"Seller"> | number | null
    moMGrowth?: FloatNullableFilter<"Seller"> | number | null
    threeMonthGrowth?: FloatNullableFilter<"Seller"> | number | null
    sixMonthGrowth?: FloatNullableFilter<"Seller"> | number | null
    yearGrowth?: FloatNullableFilter<"Seller"> | number | null
    moMGrowthCount?: IntNullableFilter<"Seller"> | number | null
    sixMonthGrowthCount?: IntNullableFilter<"Seller"> | number | null
    isSuspended?: StringNullableFilter<"Seller"> | string | null
    lastSuspendedDate?: StringNullableFilter<"Seller"> | string | null
    startedSellingDate?: StringNullableFilter<"Seller"> | string | null
    dateScraped?: DateTimeFilter<"Seller"> | Date | string
  }, "id">

  export type SellerOrderByWithAggregationInput = {
    id?: SortOrder
    sellerEmails?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    collectionExcluded?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    primaryCategoryId?: SortOrderInput | SortOrder
    primaryCategoryIdString?: SortOrderInput | SortOrder
    primarySubCategoryId?: SortOrderInput | SortOrder
    stateFromMerchant?: SortOrderInput | SortOrder
    whoIsRecord?: SortOrderInput | SortOrder
    legalName?: SortOrderInput | SortOrder
    disposition?: SortOrderInput | SortOrder
    marketplace?: SortOrder
    qualifiedBrands?: SortOrderInput | SortOrder
    brandOwnership?: SortOrderInput | SortOrder
    singleBrand?: SortOrderInput | SortOrder
    brandNameMatch?: SortOrderInput | SortOrder
    closeBrand?: SortOrderInput | SortOrder
    checkedForEmails?: SortOrderInput | SortOrder
    haveEmails?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contactedDate?: SortOrderInput | SortOrder
    contacted?: SortOrderInput | SortOrder
    profilingStatus?: SortOrderInput | SortOrder
    confirmedEmail?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    confirmedPhone?: SortOrderInput | SortOrder
    confirmedRealWorldName?: SortOrderInput | SortOrder
    lastUpdated?: SortOrderInput | SortOrder
    dateUpdated?: SortOrderInput | SortOrder
    primaryCategory?: SortOrderInput | SortOrder
    primarySubCategory?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    amazonSellerId?: SortOrderInput | SortOrder
    estimateSales?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    percentFba?: SortOrderInput | SortOrder
    numberReviewsLifetime?: SortOrderInput | SortOrder
    numberReviews30Days?: SortOrderInput | SortOrder
    numberWinningBrands?: SortOrderInput | SortOrder
    numberAsins?: SortOrderInput | SortOrder
    numberTopAsins?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    numBrands1000?: SortOrderInput | SortOrder
    moMGrowth?: SortOrderInput | SortOrder
    threeMonthGrowth?: SortOrderInput | SortOrder
    sixMonthGrowth?: SortOrderInput | SortOrder
    yearGrowth?: SortOrderInput | SortOrder
    moMGrowthCount?: SortOrderInput | SortOrder
    sixMonthGrowthCount?: SortOrderInput | SortOrder
    isSuspended?: SortOrderInput | SortOrder
    lastSuspendedDate?: SortOrderInput | SortOrder
    startedSellingDate?: SortOrderInput | SortOrder
    dateScraped?: SortOrder
    _count?: SellerCountOrderByAggregateInput
    _avg?: SellerAvgOrderByAggregateInput
    _max?: SellerMaxOrderByAggregateInput
    _min?: SellerMinOrderByAggregateInput
    _sum?: SellerSumOrderByAggregateInput
  }

  export type SellerScalarWhereWithAggregatesInput = {
    AND?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    OR?: SellerScalarWhereWithAggregatesInput[]
    NOT?: SellerScalarWhereWithAggregatesInput | SellerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seller"> | number
    sellerEmails?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    note?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    collectionExcluded?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    name?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    primaryCategoryId?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    primaryCategoryIdString?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    primarySubCategoryId?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    stateFromMerchant?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    whoIsRecord?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    legalName?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    disposition?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    marketplace?: StringWithAggregatesFilter<"Seller"> | string
    qualifiedBrands?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    brandOwnership?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    singleBrand?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    brandNameMatch?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    closeBrand?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    checkedForEmails?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    haveEmails?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    email?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    contactedDate?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    contacted?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    profilingStatus?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    confirmedEmail?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    confirmedPhone?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    confirmedRealWorldName?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    lastUpdated?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    dateUpdated?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    primaryCategory?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    primarySubCategory?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    businessName?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    amazonSellerId?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    estimateSales?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    avgPrice?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    percentFba?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    numberReviewsLifetime?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    numberReviews30Days?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    numberWinningBrands?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    numberAsins?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    numberTopAsins?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    street?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    city?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    state?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    country?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    numBrands1000?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    moMGrowth?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    threeMonthGrowth?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    sixMonthGrowth?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    yearGrowth?: FloatNullableWithAggregatesFilter<"Seller"> | number | null
    moMGrowthCount?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    sixMonthGrowthCount?: IntNullableWithAggregatesFilter<"Seller"> | number | null
    isSuspended?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    lastSuspendedDate?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    startedSellingDate?: StringNullableWithAggregatesFilter<"Seller"> | string | null
    dateScraped?: DateTimeWithAggregatesFilter<"Seller"> | Date | string
  }

  export type CategoryMappingWhereInput = {
    AND?: CategoryMappingWhereInput | CategoryMappingWhereInput[]
    OR?: CategoryMappingWhereInput[]
    NOT?: CategoryMappingWhereInput | CategoryMappingWhereInput[]
    id?: IntFilter<"CategoryMapping"> | number
    marketplace?: StringFilter<"CategoryMapping"> | string
    categoryId?: IntFilter<"CategoryMapping"> | number
    categoryString?: StringFilter<"CategoryMapping"> | string
  }

  export type CategoryMappingOrderByWithRelationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    categoryId?: SortOrder
    categoryString?: SortOrder
  }

  export type CategoryMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    marketplace_categoryId?: CategoryMappingMarketplaceCategoryIdCompoundUniqueInput
    AND?: CategoryMappingWhereInput | CategoryMappingWhereInput[]
    OR?: CategoryMappingWhereInput[]
    NOT?: CategoryMappingWhereInput | CategoryMappingWhereInput[]
    marketplace?: StringFilter<"CategoryMapping"> | string
    categoryId?: IntFilter<"CategoryMapping"> | number
    categoryString?: StringFilter<"CategoryMapping"> | string
  }, "id" | "marketplace_categoryId">

  export type CategoryMappingOrderByWithAggregationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    categoryId?: SortOrder
    categoryString?: SortOrder
    _count?: CategoryMappingCountOrderByAggregateInput
    _avg?: CategoryMappingAvgOrderByAggregateInput
    _max?: CategoryMappingMaxOrderByAggregateInput
    _min?: CategoryMappingMinOrderByAggregateInput
    _sum?: CategoryMappingSumOrderByAggregateInput
  }

  export type CategoryMappingScalarWhereWithAggregatesInput = {
    AND?: CategoryMappingScalarWhereWithAggregatesInput | CategoryMappingScalarWhereWithAggregatesInput[]
    OR?: CategoryMappingScalarWhereWithAggregatesInput[]
    NOT?: CategoryMappingScalarWhereWithAggregatesInput | CategoryMappingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryMapping"> | number
    marketplace?: StringWithAggregatesFilter<"CategoryMapping"> | string
    categoryId?: IntWithAggregatesFilter<"CategoryMapping"> | number
    categoryString?: StringWithAggregatesFilter<"CategoryMapping"> | string
  }

  export type SellerCreateInput = {
    sellerEmails?: string | null
    note?: string | null
    collectionExcluded?: string | null
    name?: string | null
    primaryCategoryId?: number | null
    primaryCategoryIdString?: string | null
    primarySubCategoryId?: number | null
    stateFromMerchant?: string | null
    whoIsRecord?: string | null
    legalName?: string | null
    disposition?: string | null
    marketplace: string
    qualifiedBrands?: string | null
    brandOwnership?: string | null
    singleBrand?: string | null
    brandNameMatch?: string | null
    closeBrand?: string | null
    checkedForEmails?: string | null
    haveEmails?: string | null
    email?: string | null
    contactedDate?: string | null
    contacted?: string | null
    profilingStatus?: string | null
    confirmedEmail?: string | null
    phone?: string | null
    confirmedPhone?: string | null
    confirmedRealWorldName?: string | null
    lastUpdated?: string | null
    dateUpdated?: string | null
    primaryCategory?: string | null
    primarySubCategory?: string | null
    businessName?: string | null
    amazonSellerId?: string | null
    estimateSales?: number | null
    avgPrice?: number | null
    percentFba?: number | null
    numberReviewsLifetime?: number | null
    numberReviews30Days?: number | null
    numberWinningBrands?: number | null
    numberAsins?: number | null
    numberTopAsins?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    numBrands1000?: number | null
    moMGrowth?: number | null
    threeMonthGrowth?: number | null
    sixMonthGrowth?: number | null
    yearGrowth?: number | null
    moMGrowthCount?: number | null
    sixMonthGrowthCount?: number | null
    isSuspended?: string | null
    lastSuspendedDate?: string | null
    startedSellingDate?: string | null
    dateScraped?: Date | string
  }

  export type SellerUncheckedCreateInput = {
    id?: number
    sellerEmails?: string | null
    note?: string | null
    collectionExcluded?: string | null
    name?: string | null
    primaryCategoryId?: number | null
    primaryCategoryIdString?: string | null
    primarySubCategoryId?: number | null
    stateFromMerchant?: string | null
    whoIsRecord?: string | null
    legalName?: string | null
    disposition?: string | null
    marketplace: string
    qualifiedBrands?: string | null
    brandOwnership?: string | null
    singleBrand?: string | null
    brandNameMatch?: string | null
    closeBrand?: string | null
    checkedForEmails?: string | null
    haveEmails?: string | null
    email?: string | null
    contactedDate?: string | null
    contacted?: string | null
    profilingStatus?: string | null
    confirmedEmail?: string | null
    phone?: string | null
    confirmedPhone?: string | null
    confirmedRealWorldName?: string | null
    lastUpdated?: string | null
    dateUpdated?: string | null
    primaryCategory?: string | null
    primarySubCategory?: string | null
    businessName?: string | null
    amazonSellerId?: string | null
    estimateSales?: number | null
    avgPrice?: number | null
    percentFba?: number | null
    numberReviewsLifetime?: number | null
    numberReviews30Days?: number | null
    numberWinningBrands?: number | null
    numberAsins?: number | null
    numberTopAsins?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    numBrands1000?: number | null
    moMGrowth?: number | null
    threeMonthGrowth?: number | null
    sixMonthGrowth?: number | null
    yearGrowth?: number | null
    moMGrowthCount?: number | null
    sixMonthGrowthCount?: number | null
    isSuspended?: string | null
    lastSuspendedDate?: string | null
    startedSellingDate?: string | null
    dateScraped?: Date | string
  }

  export type SellerUpdateInput = {
    sellerEmails?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    collectionExcluded?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    primaryCategoryIdString?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateFromMerchant?: NullableStringFieldUpdateOperationsInput | string | null
    whoIsRecord?: NullableStringFieldUpdateOperationsInput | string | null
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    marketplace?: StringFieldUpdateOperationsInput | string
    qualifiedBrands?: NullableStringFieldUpdateOperationsInput | string | null
    brandOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    singleBrand?: NullableStringFieldUpdateOperationsInput | string | null
    brandNameMatch?: NullableStringFieldUpdateOperationsInput | string | null
    closeBrand?: NullableStringFieldUpdateOperationsInput | string | null
    checkedForEmails?: NullableStringFieldUpdateOperationsInput | string | null
    haveEmails?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactedDate?: NullableStringFieldUpdateOperationsInput | string | null
    contacted?: NullableStringFieldUpdateOperationsInput | string | null
    profilingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedPhone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedRealWorldName?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    dateUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    amazonSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    estimateSales?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    percentFba?: NullableFloatFieldUpdateOperationsInput | number | null
    numberReviewsLifetime?: NullableIntFieldUpdateOperationsInput | number | null
    numberReviews30Days?: NullableIntFieldUpdateOperationsInput | number | null
    numberWinningBrands?: NullableIntFieldUpdateOperationsInput | number | null
    numberAsins?: NullableIntFieldUpdateOperationsInput | number | null
    numberTopAsins?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    numBrands1000?: NullableIntFieldUpdateOperationsInput | number | null
    moMGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    threeMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    sixMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    yearGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    moMGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    sixMonthGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    isSuspended?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuspendedDate?: NullableStringFieldUpdateOperationsInput | string | null
    startedSellingDate?: NullableStringFieldUpdateOperationsInput | string | null
    dateScraped?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellerEmails?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    collectionExcluded?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    primaryCategoryIdString?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateFromMerchant?: NullableStringFieldUpdateOperationsInput | string | null
    whoIsRecord?: NullableStringFieldUpdateOperationsInput | string | null
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    marketplace?: StringFieldUpdateOperationsInput | string
    qualifiedBrands?: NullableStringFieldUpdateOperationsInput | string | null
    brandOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    singleBrand?: NullableStringFieldUpdateOperationsInput | string | null
    brandNameMatch?: NullableStringFieldUpdateOperationsInput | string | null
    closeBrand?: NullableStringFieldUpdateOperationsInput | string | null
    checkedForEmails?: NullableStringFieldUpdateOperationsInput | string | null
    haveEmails?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactedDate?: NullableStringFieldUpdateOperationsInput | string | null
    contacted?: NullableStringFieldUpdateOperationsInput | string | null
    profilingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedPhone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedRealWorldName?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    dateUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    amazonSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    estimateSales?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    percentFba?: NullableFloatFieldUpdateOperationsInput | number | null
    numberReviewsLifetime?: NullableIntFieldUpdateOperationsInput | number | null
    numberReviews30Days?: NullableIntFieldUpdateOperationsInput | number | null
    numberWinningBrands?: NullableIntFieldUpdateOperationsInput | number | null
    numberAsins?: NullableIntFieldUpdateOperationsInput | number | null
    numberTopAsins?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    numBrands1000?: NullableIntFieldUpdateOperationsInput | number | null
    moMGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    threeMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    sixMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    yearGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    moMGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    sixMonthGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    isSuspended?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuspendedDate?: NullableStringFieldUpdateOperationsInput | string | null
    startedSellingDate?: NullableStringFieldUpdateOperationsInput | string | null
    dateScraped?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerCreateManyInput = {
    id?: number
    sellerEmails?: string | null
    note?: string | null
    collectionExcluded?: string | null
    name?: string | null
    primaryCategoryId?: number | null
    primaryCategoryIdString?: string | null
    primarySubCategoryId?: number | null
    stateFromMerchant?: string | null
    whoIsRecord?: string | null
    legalName?: string | null
    disposition?: string | null
    marketplace: string
    qualifiedBrands?: string | null
    brandOwnership?: string | null
    singleBrand?: string | null
    brandNameMatch?: string | null
    closeBrand?: string | null
    checkedForEmails?: string | null
    haveEmails?: string | null
    email?: string | null
    contactedDate?: string | null
    contacted?: string | null
    profilingStatus?: string | null
    confirmedEmail?: string | null
    phone?: string | null
    confirmedPhone?: string | null
    confirmedRealWorldName?: string | null
    lastUpdated?: string | null
    dateUpdated?: string | null
    primaryCategory?: string | null
    primarySubCategory?: string | null
    businessName?: string | null
    amazonSellerId?: string | null
    estimateSales?: number | null
    avgPrice?: number | null
    percentFba?: number | null
    numberReviewsLifetime?: number | null
    numberReviews30Days?: number | null
    numberWinningBrands?: number | null
    numberAsins?: number | null
    numberTopAsins?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    zipCode?: string | null
    numBrands1000?: number | null
    moMGrowth?: number | null
    threeMonthGrowth?: number | null
    sixMonthGrowth?: number | null
    yearGrowth?: number | null
    moMGrowthCount?: number | null
    sixMonthGrowthCount?: number | null
    isSuspended?: string | null
    lastSuspendedDate?: string | null
    startedSellingDate?: string | null
    dateScraped?: Date | string
  }

  export type SellerUpdateManyMutationInput = {
    sellerEmails?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    collectionExcluded?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    primaryCategoryIdString?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateFromMerchant?: NullableStringFieldUpdateOperationsInput | string | null
    whoIsRecord?: NullableStringFieldUpdateOperationsInput | string | null
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    marketplace?: StringFieldUpdateOperationsInput | string
    qualifiedBrands?: NullableStringFieldUpdateOperationsInput | string | null
    brandOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    singleBrand?: NullableStringFieldUpdateOperationsInput | string | null
    brandNameMatch?: NullableStringFieldUpdateOperationsInput | string | null
    closeBrand?: NullableStringFieldUpdateOperationsInput | string | null
    checkedForEmails?: NullableStringFieldUpdateOperationsInput | string | null
    haveEmails?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactedDate?: NullableStringFieldUpdateOperationsInput | string | null
    contacted?: NullableStringFieldUpdateOperationsInput | string | null
    profilingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedPhone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedRealWorldName?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    dateUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    amazonSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    estimateSales?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    percentFba?: NullableFloatFieldUpdateOperationsInput | number | null
    numberReviewsLifetime?: NullableIntFieldUpdateOperationsInput | number | null
    numberReviews30Days?: NullableIntFieldUpdateOperationsInput | number | null
    numberWinningBrands?: NullableIntFieldUpdateOperationsInput | number | null
    numberAsins?: NullableIntFieldUpdateOperationsInput | number | null
    numberTopAsins?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    numBrands1000?: NullableIntFieldUpdateOperationsInput | number | null
    moMGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    threeMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    sixMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    yearGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    moMGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    sixMonthGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    isSuspended?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuspendedDate?: NullableStringFieldUpdateOperationsInput | string | null
    startedSellingDate?: NullableStringFieldUpdateOperationsInput | string | null
    dateScraped?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellerEmails?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    collectionExcluded?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    primaryCategoryIdString?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateFromMerchant?: NullableStringFieldUpdateOperationsInput | string | null
    whoIsRecord?: NullableStringFieldUpdateOperationsInput | string | null
    legalName?: NullableStringFieldUpdateOperationsInput | string | null
    disposition?: NullableStringFieldUpdateOperationsInput | string | null
    marketplace?: StringFieldUpdateOperationsInput | string
    qualifiedBrands?: NullableStringFieldUpdateOperationsInput | string | null
    brandOwnership?: NullableStringFieldUpdateOperationsInput | string | null
    singleBrand?: NullableStringFieldUpdateOperationsInput | string | null
    brandNameMatch?: NullableStringFieldUpdateOperationsInput | string | null
    closeBrand?: NullableStringFieldUpdateOperationsInput | string | null
    checkedForEmails?: NullableStringFieldUpdateOperationsInput | string | null
    haveEmails?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactedDate?: NullableStringFieldUpdateOperationsInput | string | null
    contacted?: NullableStringFieldUpdateOperationsInput | string | null
    profilingStatus?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedPhone?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedRealWorldName?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    dateUpdated?: NullableStringFieldUpdateOperationsInput | string | null
    primaryCategory?: NullableStringFieldUpdateOperationsInput | string | null
    primarySubCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    amazonSellerId?: NullableStringFieldUpdateOperationsInput | string | null
    estimateSales?: NullableFloatFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    percentFba?: NullableFloatFieldUpdateOperationsInput | number | null
    numberReviewsLifetime?: NullableIntFieldUpdateOperationsInput | number | null
    numberReviews30Days?: NullableIntFieldUpdateOperationsInput | number | null
    numberWinningBrands?: NullableIntFieldUpdateOperationsInput | number | null
    numberAsins?: NullableIntFieldUpdateOperationsInput | number | null
    numberTopAsins?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    numBrands1000?: NullableIntFieldUpdateOperationsInput | number | null
    moMGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    threeMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    sixMonthGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    yearGrowth?: NullableFloatFieldUpdateOperationsInput | number | null
    moMGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    sixMonthGrowthCount?: NullableIntFieldUpdateOperationsInput | number | null
    isSuspended?: NullableStringFieldUpdateOperationsInput | string | null
    lastSuspendedDate?: NullableStringFieldUpdateOperationsInput | string | null
    startedSellingDate?: NullableStringFieldUpdateOperationsInput | string | null
    dateScraped?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryMappingCreateInput = {
    marketplace: string
    categoryId: number
    categoryString: string
  }

  export type CategoryMappingUncheckedCreateInput = {
    id?: number
    marketplace: string
    categoryId: number
    categoryString: string
  }

  export type CategoryMappingUpdateInput = {
    marketplace?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryString?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryMappingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryString?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryMappingCreateManyInput = {
    id?: number
    marketplace: string
    categoryId: number
    categoryString: string
  }

  export type CategoryMappingUpdateManyMutationInput = {
    marketplace?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryString?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryMappingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryString?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SellerCountOrderByAggregateInput = {
    id?: SortOrder
    sellerEmails?: SortOrder
    note?: SortOrder
    collectionExcluded?: SortOrder
    name?: SortOrder
    primaryCategoryId?: SortOrder
    primaryCategoryIdString?: SortOrder
    primarySubCategoryId?: SortOrder
    stateFromMerchant?: SortOrder
    whoIsRecord?: SortOrder
    legalName?: SortOrder
    disposition?: SortOrder
    marketplace?: SortOrder
    qualifiedBrands?: SortOrder
    brandOwnership?: SortOrder
    singleBrand?: SortOrder
    brandNameMatch?: SortOrder
    closeBrand?: SortOrder
    checkedForEmails?: SortOrder
    haveEmails?: SortOrder
    email?: SortOrder
    contactedDate?: SortOrder
    contacted?: SortOrder
    profilingStatus?: SortOrder
    confirmedEmail?: SortOrder
    phone?: SortOrder
    confirmedPhone?: SortOrder
    confirmedRealWorldName?: SortOrder
    lastUpdated?: SortOrder
    dateUpdated?: SortOrder
    primaryCategory?: SortOrder
    primarySubCategory?: SortOrder
    businessName?: SortOrder
    amazonSellerId?: SortOrder
    estimateSales?: SortOrder
    avgPrice?: SortOrder
    percentFba?: SortOrder
    numberReviewsLifetime?: SortOrder
    numberReviews30Days?: SortOrder
    numberWinningBrands?: SortOrder
    numberAsins?: SortOrder
    numberTopAsins?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    numBrands1000?: SortOrder
    moMGrowth?: SortOrder
    threeMonthGrowth?: SortOrder
    sixMonthGrowth?: SortOrder
    yearGrowth?: SortOrder
    moMGrowthCount?: SortOrder
    sixMonthGrowthCount?: SortOrder
    isSuspended?: SortOrder
    lastSuspendedDate?: SortOrder
    startedSellingDate?: SortOrder
    dateScraped?: SortOrder
  }

  export type SellerAvgOrderByAggregateInput = {
    id?: SortOrder
    primaryCategoryId?: SortOrder
    primarySubCategoryId?: SortOrder
    estimateSales?: SortOrder
    avgPrice?: SortOrder
    percentFba?: SortOrder
    numberReviewsLifetime?: SortOrder
    numberReviews30Days?: SortOrder
    numberWinningBrands?: SortOrder
    numberAsins?: SortOrder
    numberTopAsins?: SortOrder
    numBrands1000?: SortOrder
    moMGrowth?: SortOrder
    threeMonthGrowth?: SortOrder
    sixMonthGrowth?: SortOrder
    yearGrowth?: SortOrder
    moMGrowthCount?: SortOrder
    sixMonthGrowthCount?: SortOrder
  }

  export type SellerMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerEmails?: SortOrder
    note?: SortOrder
    collectionExcluded?: SortOrder
    name?: SortOrder
    primaryCategoryId?: SortOrder
    primaryCategoryIdString?: SortOrder
    primarySubCategoryId?: SortOrder
    stateFromMerchant?: SortOrder
    whoIsRecord?: SortOrder
    legalName?: SortOrder
    disposition?: SortOrder
    marketplace?: SortOrder
    qualifiedBrands?: SortOrder
    brandOwnership?: SortOrder
    singleBrand?: SortOrder
    brandNameMatch?: SortOrder
    closeBrand?: SortOrder
    checkedForEmails?: SortOrder
    haveEmails?: SortOrder
    email?: SortOrder
    contactedDate?: SortOrder
    contacted?: SortOrder
    profilingStatus?: SortOrder
    confirmedEmail?: SortOrder
    phone?: SortOrder
    confirmedPhone?: SortOrder
    confirmedRealWorldName?: SortOrder
    lastUpdated?: SortOrder
    dateUpdated?: SortOrder
    primaryCategory?: SortOrder
    primarySubCategory?: SortOrder
    businessName?: SortOrder
    amazonSellerId?: SortOrder
    estimateSales?: SortOrder
    avgPrice?: SortOrder
    percentFba?: SortOrder
    numberReviewsLifetime?: SortOrder
    numberReviews30Days?: SortOrder
    numberWinningBrands?: SortOrder
    numberAsins?: SortOrder
    numberTopAsins?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    numBrands1000?: SortOrder
    moMGrowth?: SortOrder
    threeMonthGrowth?: SortOrder
    sixMonthGrowth?: SortOrder
    yearGrowth?: SortOrder
    moMGrowthCount?: SortOrder
    sixMonthGrowthCount?: SortOrder
    isSuspended?: SortOrder
    lastSuspendedDate?: SortOrder
    startedSellingDate?: SortOrder
    dateScraped?: SortOrder
  }

  export type SellerMinOrderByAggregateInput = {
    id?: SortOrder
    sellerEmails?: SortOrder
    note?: SortOrder
    collectionExcluded?: SortOrder
    name?: SortOrder
    primaryCategoryId?: SortOrder
    primaryCategoryIdString?: SortOrder
    primarySubCategoryId?: SortOrder
    stateFromMerchant?: SortOrder
    whoIsRecord?: SortOrder
    legalName?: SortOrder
    disposition?: SortOrder
    marketplace?: SortOrder
    qualifiedBrands?: SortOrder
    brandOwnership?: SortOrder
    singleBrand?: SortOrder
    brandNameMatch?: SortOrder
    closeBrand?: SortOrder
    checkedForEmails?: SortOrder
    haveEmails?: SortOrder
    email?: SortOrder
    contactedDate?: SortOrder
    contacted?: SortOrder
    profilingStatus?: SortOrder
    confirmedEmail?: SortOrder
    phone?: SortOrder
    confirmedPhone?: SortOrder
    confirmedRealWorldName?: SortOrder
    lastUpdated?: SortOrder
    dateUpdated?: SortOrder
    primaryCategory?: SortOrder
    primarySubCategory?: SortOrder
    businessName?: SortOrder
    amazonSellerId?: SortOrder
    estimateSales?: SortOrder
    avgPrice?: SortOrder
    percentFba?: SortOrder
    numberReviewsLifetime?: SortOrder
    numberReviews30Days?: SortOrder
    numberWinningBrands?: SortOrder
    numberAsins?: SortOrder
    numberTopAsins?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    numBrands1000?: SortOrder
    moMGrowth?: SortOrder
    threeMonthGrowth?: SortOrder
    sixMonthGrowth?: SortOrder
    yearGrowth?: SortOrder
    moMGrowthCount?: SortOrder
    sixMonthGrowthCount?: SortOrder
    isSuspended?: SortOrder
    lastSuspendedDate?: SortOrder
    startedSellingDate?: SortOrder
    dateScraped?: SortOrder
  }

  export type SellerSumOrderByAggregateInput = {
    id?: SortOrder
    primaryCategoryId?: SortOrder
    primarySubCategoryId?: SortOrder
    estimateSales?: SortOrder
    avgPrice?: SortOrder
    percentFba?: SortOrder
    numberReviewsLifetime?: SortOrder
    numberReviews30Days?: SortOrder
    numberWinningBrands?: SortOrder
    numberAsins?: SortOrder
    numberTopAsins?: SortOrder
    numBrands1000?: SortOrder
    moMGrowth?: SortOrder
    threeMonthGrowth?: SortOrder
    sixMonthGrowth?: SortOrder
    yearGrowth?: SortOrder
    moMGrowthCount?: SortOrder
    sixMonthGrowthCount?: SortOrder
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

  export type CategoryMappingMarketplaceCategoryIdCompoundUniqueInput = {
    marketplace: string
    categoryId: number
  }

  export type CategoryMappingCountOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    categoryId?: SortOrder
    categoryString?: SortOrder
  }

  export type CategoryMappingAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    categoryId?: SortOrder
    categoryString?: SortOrder
  }

  export type CategoryMappingMinOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    categoryId?: SortOrder
    categoryString?: SortOrder
  }

  export type CategoryMappingSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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