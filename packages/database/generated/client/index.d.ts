
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
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model UserSocialAccount
 * 
 */
export type UserSocialAccount = $Result.DefaultSelection<Prisma.$UserSocialAccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

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
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSocialAccount`: Exposes CRUD operations for the **UserSocialAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSocialAccounts
    * const userSocialAccounts = await prisma.userSocialAccount.findMany()
    * ```
    */
  get userSocialAccount(): Prisma.UserSocialAccountDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    UserSession: 'UserSession',
    UserSocialAccount: 'UserSocialAccount'
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
      modelProps: "user" | "userSession" | "userSocialAccount"
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
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      UserSocialAccount: {
        payload: Prisma.$UserSocialAccountPayload<ExtArgs>
        fields: Prisma.UserSocialAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSocialAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSocialAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>
          }
          findFirst: {
            args: Prisma.UserSocialAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSocialAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>
          }
          findMany: {
            args: Prisma.UserSocialAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>[]
          }
          create: {
            args: Prisma.UserSocialAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>
          }
          createMany: {
            args: Prisma.UserSocialAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSocialAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>[]
          }
          delete: {
            args: Prisma.UserSocialAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>
          }
          update: {
            args: Prisma.UserSocialAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>
          }
          deleteMany: {
            args: Prisma.UserSocialAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSocialAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSocialAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>[]
          }
          upsert: {
            args: Prisma.UserSocialAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSocialAccountPayload>
          }
          aggregate: {
            args: Prisma.UserSocialAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSocialAccount>
          }
          groupBy: {
            args: Prisma.UserSocialAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSocialAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSocialAccountCountArgs<ExtArgs>
            result: $Utils.Optional<UserSocialAccountCountAggregateOutputType> | number
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
    userSession?: UserSessionOmit
    userSocialAccount?: UserSocialAccountOmit
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
    userSessions: number
    userSocialAccounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSessions?: boolean | UserCountOutputTypeCountUserSessionsArgs
    userSocialAccounts?: boolean | UserCountOutputTypeCountUserSocialAccountsArgs
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
  export type UserCountOutputTypeCountUserSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSocialAccountWhereInput
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
    userId: string | null
    email: string | null
    phone: string | null
    password: string | null
    name: string | null
    userRole: $Enums.UserRole | null
    userStatus: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    profilePicture: string | null
    otpEnabled: boolean | null
    otpEnabledAt: Date | null
    otpStatusChangeToken: string | null
    otpStatusChangeTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    phone: string | null
    password: string | null
    name: string | null
    userRole: $Enums.UserRole | null
    userStatus: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    profilePicture: string | null
    otpEnabled: boolean | null
    otpEnabledAt: Date | null
    otpStatusChangeToken: string | null
    otpStatusChangeTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    phone: number
    password: number
    name: number
    userRole: number
    userStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    resetToken: number
    resetTokenExpiry: number
    profilePicture: number
    otpEnabled: number
    otpEnabledAt: number
    otpStatusChangeToken: number
    otpStatusChangeTokenExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    phone?: true
    password?: true
    name?: true
    userRole?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    profilePicture?: true
    otpEnabled?: true
    otpEnabledAt?: true
    otpStatusChangeToken?: true
    otpStatusChangeTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    phone?: true
    password?: true
    name?: true
    userRole?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    profilePicture?: true
    otpEnabled?: true
    otpEnabledAt?: true
    otpStatusChangeToken?: true
    otpStatusChangeTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    phone?: true
    password?: true
    name?: true
    userRole?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    profilePicture?: true
    otpEnabled?: true
    otpEnabledAt?: true
    otpStatusChangeToken?: true
    otpStatusChangeTokenExpiry?: true
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
    userId: string
    email: string
    phone: string | null
    password: string
    name: string | null
    userRole: $Enums.UserRole
    userStatus: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    profilePicture: string | null
    otpEnabled: boolean
    otpEnabledAt: Date | null
    otpStatusChangeToken: string | null
    otpStatusChangeTokenExpiry: Date | null
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
    userId?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    userRole?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
    otpEnabled?: boolean
    otpEnabledAt?: boolean
    otpStatusChangeToken?: boolean
    otpStatusChangeTokenExpiry?: boolean
    userSessions?: boolean | User$userSessionsArgs<ExtArgs>
    userSocialAccounts?: boolean | User$userSocialAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    userRole?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
    otpEnabled?: boolean
    otpEnabledAt?: boolean
    otpStatusChangeToken?: boolean
    otpStatusChangeTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    userRole?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
    otpEnabled?: boolean
    otpEnabledAt?: boolean
    otpStatusChangeToken?: boolean
    otpStatusChangeTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    userRole?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
    otpEnabled?: boolean
    otpEnabledAt?: boolean
    otpStatusChangeToken?: boolean
    otpStatusChangeTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "phone" | "password" | "name" | "userRole" | "userStatus" | "createdAt" | "updatedAt" | "deletedAt" | "resetToken" | "resetTokenExpiry" | "profilePicture" | "otpEnabled" | "otpEnabledAt" | "otpStatusChangeToken" | "otpStatusChangeTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSessions?: boolean | User$userSessionsArgs<ExtArgs>
    userSocialAccounts?: boolean | User$userSocialAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userSessions: Prisma.$UserSessionPayload<ExtArgs>[]
      userSocialAccounts: Prisma.$UserSocialAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      phone: string | null
      password: string
      name: string | null
      userRole: $Enums.UserRole
      userStatus: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      profilePicture: string | null
      otpEnabled: boolean
      otpEnabledAt: Date | null
      otpStatusChangeToken: string | null
      otpStatusChangeTokenExpiry: Date | null
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    userSessions<T extends User$userSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSocialAccounts<T extends User$userSocialAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSocialAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userRole: FieldRef<"User", 'UserRole'>
    readonly userStatus: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly otpEnabled: FieldRef<"User", 'Boolean'>
    readonly otpEnabledAt: FieldRef<"User", 'DateTime'>
    readonly otpStatusChangeToken: FieldRef<"User", 'String'>
    readonly otpStatusChangeTokenExpiry: FieldRef<"User", 'DateTime'>
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
   * User.userSessions
   */
  export type User$userSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * User.userSocialAccounts
   */
  export type User$userSocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    where?: UserSocialAccountWhereInput
    orderBy?: UserSocialAccountOrderByWithRelationInput | UserSocialAccountOrderByWithRelationInput[]
    cursor?: UserSocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSocialAccountScalarFieldEnum | UserSocialAccountScalarFieldEnum[]
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
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    sessionId: string | null
    userId: string | null
    sessionToken: string | null
    sessionExpiry: Date | null
    sessionAgent: string | null
    otpNeeded: boolean | null
    otpToken: string | null
    otpTokenExpiry: Date | null
    ip: string | null
    os: string | null
    device: string | null
    browser: string | null
    city: string | null
    state: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    sessionId: string | null
    userId: string | null
    sessionToken: string | null
    sessionExpiry: Date | null
    sessionAgent: string | null
    otpNeeded: boolean | null
    otpToken: string | null
    otpTokenExpiry: Date | null
    ip: string | null
    os: string | null
    device: string | null
    browser: string | null
    city: string | null
    state: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    sessionId: number
    userId: number
    sessionToken: number
    sessionExpiry: number
    sessionAgent: number
    otpNeeded: number
    otpToken: number
    otpTokenExpiry: number
    ip: number
    os: number
    device: number
    browser: number
    city: number
    state: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    sessionId?: true
    userId?: true
    sessionToken?: true
    sessionExpiry?: true
    sessionAgent?: true
    otpNeeded?: true
    otpToken?: true
    otpTokenExpiry?: true
    ip?: true
    os?: true
    device?: true
    browser?: true
    city?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSessionMaxAggregateInputType = {
    sessionId?: true
    userId?: true
    sessionToken?: true
    sessionExpiry?: true
    sessionAgent?: true
    otpNeeded?: true
    otpToken?: true
    otpTokenExpiry?: true
    ip?: true
    os?: true
    device?: true
    browser?: true
    city?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSessionCountAggregateInputType = {
    sessionId?: true
    userId?: true
    sessionToken?: true
    sessionExpiry?: true
    sessionAgent?: true
    otpNeeded?: true
    otpToken?: true
    otpTokenExpiry?: true
    ip?: true
    os?: true
    device?: true
    browser?: true
    city?: true
    state?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    sessionId: string
    userId: string
    sessionToken: string
    sessionExpiry: Date
    sessionAgent: string
    otpNeeded: boolean
    otpToken: string | null
    otpTokenExpiry: Date | null
    ip: string | null
    os: string | null
    device: string | null
    browser: string | null
    city: string | null
    state: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    userId?: boolean
    sessionToken?: boolean
    sessionExpiry?: boolean
    sessionAgent?: boolean
    otpNeeded?: boolean
    otpToken?: boolean
    otpTokenExpiry?: boolean
    ip?: boolean
    os?: boolean
    device?: boolean
    browser?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    userId?: boolean
    sessionToken?: boolean
    sessionExpiry?: boolean
    sessionAgent?: boolean
    otpNeeded?: boolean
    otpToken?: boolean
    otpTokenExpiry?: boolean
    ip?: boolean
    os?: boolean
    device?: boolean
    browser?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    userId?: boolean
    sessionToken?: boolean
    sessionExpiry?: boolean
    sessionAgent?: boolean
    otpNeeded?: boolean
    otpToken?: boolean
    otpTokenExpiry?: boolean
    ip?: boolean
    os?: boolean
    device?: boolean
    browser?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    sessionId?: boolean
    userId?: boolean
    sessionToken?: boolean
    sessionExpiry?: boolean
    sessionAgent?: boolean
    otpNeeded?: boolean
    otpToken?: boolean
    otpTokenExpiry?: boolean
    ip?: boolean
    os?: boolean
    device?: boolean
    browser?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionId" | "userId" | "sessionToken" | "sessionExpiry" | "sessionAgent" | "otpNeeded" | "otpToken" | "otpTokenExpiry" | "ip" | "os" | "device" | "browser" | "city" | "state" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionId: string
      userId: string
      sessionToken: string
      sessionExpiry: Date
      sessionAgent: string
      otpNeeded: boolean
      otpToken: string | null
      otpTokenExpiry: Date | null
      ip: string | null
      os: string | null
      device: string | null
      browser: string | null
      city: string | null
      state: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `sessionId`
     * const userSessionWithSessionIdOnly = await prisma.userSession.findMany({ select: { sessionId: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `sessionId`
     * const userSessionWithSessionIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { sessionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `sessionId`
     * const userSessionWithSessionIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { sessionId: true },
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
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
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
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSession model
   */ 
  interface UserSessionFieldRefs {
    readonly sessionId: FieldRef<"UserSession", 'String'>
    readonly userId: FieldRef<"UserSession", 'String'>
    readonly sessionToken: FieldRef<"UserSession", 'String'>
    readonly sessionExpiry: FieldRef<"UserSession", 'DateTime'>
    readonly sessionAgent: FieldRef<"UserSession", 'String'>
    readonly otpNeeded: FieldRef<"UserSession", 'Boolean'>
    readonly otpToken: FieldRef<"UserSession", 'String'>
    readonly otpTokenExpiry: FieldRef<"UserSession", 'DateTime'>
    readonly ip: FieldRef<"UserSession", 'String'>
    readonly os: FieldRef<"UserSession", 'String'>
    readonly device: FieldRef<"UserSession", 'String'>
    readonly browser: FieldRef<"UserSession", 'String'>
    readonly city: FieldRef<"UserSession", 'String'>
    readonly state: FieldRef<"UserSession", 'String'>
    readonly country: FieldRef<"UserSession", 'String'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model UserSocialAccount
   */

  export type AggregateUserSocialAccount = {
    _count: UserSocialAccountCountAggregateOutputType | null
    _min: UserSocialAccountMinAggregateOutputType | null
    _max: UserSocialAccountMaxAggregateOutputType | null
  }

  export type UserSocialAccountMinAggregateOutputType = {
    userSocialAccountId: string | null
    userId: string | null
    provider: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    profilePicture: string | null
    profileUrl: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSocialAccountMaxAggregateOutputType = {
    userSocialAccountId: string | null
    userId: string | null
    provider: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    profilePicture: string | null
    profileUrl: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSocialAccountCountAggregateOutputType = {
    userSocialAccountId: number
    userId: number
    provider: number
    providerId: number
    accessToken: number
    refreshToken: number
    tokenExpiry: number
    profilePicture: number
    profileUrl: number
    scopes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSocialAccountMinAggregateInputType = {
    userSocialAccountId?: true
    userId?: true
    provider?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    profilePicture?: true
    profileUrl?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSocialAccountMaxAggregateInputType = {
    userSocialAccountId?: true
    userId?: true
    provider?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    profilePicture?: true
    profileUrl?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSocialAccountCountAggregateInputType = {
    userSocialAccountId?: true
    userId?: true
    provider?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    profilePicture?: true
    profileUrl?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSocialAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSocialAccount to aggregate.
     */
    where?: UserSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialAccounts to fetch.
     */
    orderBy?: UserSocialAccountOrderByWithRelationInput | UserSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSocialAccounts
    **/
    _count?: true | UserSocialAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSocialAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSocialAccountMaxAggregateInputType
  }

  export type GetUserSocialAccountAggregateType<T extends UserSocialAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSocialAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSocialAccount[P]>
      : GetScalarType<T[P], AggregateUserSocialAccount[P]>
  }




  export type UserSocialAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSocialAccountWhereInput
    orderBy?: UserSocialAccountOrderByWithAggregationInput | UserSocialAccountOrderByWithAggregationInput[]
    by: UserSocialAccountScalarFieldEnum[] | UserSocialAccountScalarFieldEnum
    having?: UserSocialAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSocialAccountCountAggregateInputType | true
    _min?: UserSocialAccountMinAggregateInputType
    _max?: UserSocialAccountMaxAggregateInputType
  }

  export type UserSocialAccountGroupByOutputType = {
    userSocialAccountId: string
    userId: string
    provider: string
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    profilePicture: string | null
    profileUrl: string | null
    scopes: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSocialAccountCountAggregateOutputType | null
    _min: UserSocialAccountMinAggregateOutputType | null
    _max: UserSocialAccountMaxAggregateOutputType | null
  }

  type GetUserSocialAccountGroupByPayload<T extends UserSocialAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSocialAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSocialAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSocialAccountGroupByOutputType[P]>
            : GetScalarType<T[P], UserSocialAccountGroupByOutputType[P]>
        }
      >
    >


  export type UserSocialAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSocialAccountId?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    profilePicture?: boolean
    profileUrl?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSocialAccount"]>

  export type UserSocialAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSocialAccountId?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    profilePicture?: boolean
    profileUrl?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSocialAccount"]>

  export type UserSocialAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userSocialAccountId?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    profilePicture?: boolean
    profileUrl?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSocialAccount"]>

  export type UserSocialAccountSelectScalar = {
    userSocialAccountId?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    profilePicture?: boolean
    profileUrl?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSocialAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userSocialAccountId" | "userId" | "provider" | "providerId" | "accessToken" | "refreshToken" | "tokenExpiry" | "profilePicture" | "profileUrl" | "scopes" | "createdAt" | "updatedAt", ExtArgs["result"]["userSocialAccount"]>
  export type UserSocialAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSocialAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSocialAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSocialAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSocialAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userSocialAccountId: string
      userId: string
      provider: string
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      tokenExpiry: Date | null
      profilePicture: string | null
      profileUrl: string | null
      scopes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSocialAccount"]>
    composites: {}
  }

  type UserSocialAccountGetPayload<S extends boolean | null | undefined | UserSocialAccountDefaultArgs> = $Result.GetResult<Prisma.$UserSocialAccountPayload, S>

  type UserSocialAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSocialAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSocialAccountCountAggregateInputType | true
    }

  export interface UserSocialAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSocialAccount'], meta: { name: 'UserSocialAccount' } }
    /**
     * Find zero or one UserSocialAccount that matches the filter.
     * @param {UserSocialAccountFindUniqueArgs} args - Arguments to find a UserSocialAccount
     * @example
     * // Get one UserSocialAccount
     * const userSocialAccount = await prisma.userSocialAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSocialAccountFindUniqueArgs>(args: SelectSubset<T, UserSocialAccountFindUniqueArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSocialAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSocialAccountFindUniqueOrThrowArgs} args - Arguments to find a UserSocialAccount
     * @example
     * // Get one UserSocialAccount
     * const userSocialAccount = await prisma.userSocialAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSocialAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSocialAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSocialAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountFindFirstArgs} args - Arguments to find a UserSocialAccount
     * @example
     * // Get one UserSocialAccount
     * const userSocialAccount = await prisma.userSocialAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSocialAccountFindFirstArgs>(args?: SelectSubset<T, UserSocialAccountFindFirstArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSocialAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountFindFirstOrThrowArgs} args - Arguments to find a UserSocialAccount
     * @example
     * // Get one UserSocialAccount
     * const userSocialAccount = await prisma.userSocialAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSocialAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSocialAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSocialAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSocialAccounts
     * const userSocialAccounts = await prisma.userSocialAccount.findMany()
     * 
     * // Get first 10 UserSocialAccounts
     * const userSocialAccounts = await prisma.userSocialAccount.findMany({ take: 10 })
     * 
     * // Only select the `userSocialAccountId`
     * const userSocialAccountWithUserSocialAccountIdOnly = await prisma.userSocialAccount.findMany({ select: { userSocialAccountId: true } })
     * 
     */
    findMany<T extends UserSocialAccountFindManyArgs>(args?: SelectSubset<T, UserSocialAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSocialAccount.
     * @param {UserSocialAccountCreateArgs} args - Arguments to create a UserSocialAccount.
     * @example
     * // Create one UserSocialAccount
     * const UserSocialAccount = await prisma.userSocialAccount.create({
     *   data: {
     *     // ... data to create a UserSocialAccount
     *   }
     * })
     * 
     */
    create<T extends UserSocialAccountCreateArgs>(args: SelectSubset<T, UserSocialAccountCreateArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSocialAccounts.
     * @param {UserSocialAccountCreateManyArgs} args - Arguments to create many UserSocialAccounts.
     * @example
     * // Create many UserSocialAccounts
     * const userSocialAccount = await prisma.userSocialAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSocialAccountCreateManyArgs>(args?: SelectSubset<T, UserSocialAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSocialAccounts and returns the data saved in the database.
     * @param {UserSocialAccountCreateManyAndReturnArgs} args - Arguments to create many UserSocialAccounts.
     * @example
     * // Create many UserSocialAccounts
     * const userSocialAccount = await prisma.userSocialAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSocialAccounts and only return the `userSocialAccountId`
     * const userSocialAccountWithUserSocialAccountIdOnly = await prisma.userSocialAccount.createManyAndReturn({
     *   select: { userSocialAccountId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSocialAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSocialAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSocialAccount.
     * @param {UserSocialAccountDeleteArgs} args - Arguments to delete one UserSocialAccount.
     * @example
     * // Delete one UserSocialAccount
     * const UserSocialAccount = await prisma.userSocialAccount.delete({
     *   where: {
     *     // ... filter to delete one UserSocialAccount
     *   }
     * })
     * 
     */
    delete<T extends UserSocialAccountDeleteArgs>(args: SelectSubset<T, UserSocialAccountDeleteArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSocialAccount.
     * @param {UserSocialAccountUpdateArgs} args - Arguments to update one UserSocialAccount.
     * @example
     * // Update one UserSocialAccount
     * const userSocialAccount = await prisma.userSocialAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSocialAccountUpdateArgs>(args: SelectSubset<T, UserSocialAccountUpdateArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSocialAccounts.
     * @param {UserSocialAccountDeleteManyArgs} args - Arguments to filter UserSocialAccounts to delete.
     * @example
     * // Delete a few UserSocialAccounts
     * const { count } = await prisma.userSocialAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSocialAccountDeleteManyArgs>(args?: SelectSubset<T, UserSocialAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSocialAccounts
     * const userSocialAccount = await prisma.userSocialAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSocialAccountUpdateManyArgs>(args: SelectSubset<T, UserSocialAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSocialAccounts and returns the data updated in the database.
     * @param {UserSocialAccountUpdateManyAndReturnArgs} args - Arguments to update many UserSocialAccounts.
     * @example
     * // Update many UserSocialAccounts
     * const userSocialAccount = await prisma.userSocialAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSocialAccounts and only return the `userSocialAccountId`
     * const userSocialAccountWithUserSocialAccountIdOnly = await prisma.userSocialAccount.updateManyAndReturn({
     *   select: { userSocialAccountId: true },
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
    updateManyAndReturn<T extends UserSocialAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSocialAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSocialAccount.
     * @param {UserSocialAccountUpsertArgs} args - Arguments to update or create a UserSocialAccount.
     * @example
     * // Update or create a UserSocialAccount
     * const userSocialAccount = await prisma.userSocialAccount.upsert({
     *   create: {
     *     // ... data to create a UserSocialAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSocialAccount we want to update
     *   }
     * })
     */
    upsert<T extends UserSocialAccountUpsertArgs>(args: SelectSubset<T, UserSocialAccountUpsertArgs<ExtArgs>>): Prisma__UserSocialAccountClient<$Result.GetResult<Prisma.$UserSocialAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountCountArgs} args - Arguments to filter UserSocialAccounts to count.
     * @example
     * // Count the number of UserSocialAccounts
     * const count = await prisma.userSocialAccount.count({
     *   where: {
     *     // ... the filter for the UserSocialAccounts we want to count
     *   }
     * })
    **/
    count<T extends UserSocialAccountCountArgs>(
      args?: Subset<T, UserSocialAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSocialAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSocialAccountAggregateArgs>(args: Subset<T, UserSocialAccountAggregateArgs>): Prisma.PrismaPromise<GetUserSocialAccountAggregateType<T>>

    /**
     * Group by UserSocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSocialAccountGroupByArgs} args - Group by arguments.
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
      T extends UserSocialAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSocialAccountGroupByArgs['orderBy'] }
        : { orderBy?: UserSocialAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSocialAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSocialAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSocialAccount model
   */
  readonly fields: UserSocialAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSocialAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSocialAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSocialAccount model
   */ 
  interface UserSocialAccountFieldRefs {
    readonly userSocialAccountId: FieldRef<"UserSocialAccount", 'String'>
    readonly userId: FieldRef<"UserSocialAccount", 'String'>
    readonly provider: FieldRef<"UserSocialAccount", 'String'>
    readonly providerId: FieldRef<"UserSocialAccount", 'String'>
    readonly accessToken: FieldRef<"UserSocialAccount", 'String'>
    readonly refreshToken: FieldRef<"UserSocialAccount", 'String'>
    readonly tokenExpiry: FieldRef<"UserSocialAccount", 'DateTime'>
    readonly profilePicture: FieldRef<"UserSocialAccount", 'String'>
    readonly profileUrl: FieldRef<"UserSocialAccount", 'String'>
    readonly scopes: FieldRef<"UserSocialAccount", 'String'>
    readonly createdAt: FieldRef<"UserSocialAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSocialAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSocialAccount findUnique
   */
  export type UserSocialAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialAccount to fetch.
     */
    where: UserSocialAccountWhereUniqueInput
  }

  /**
   * UserSocialAccount findUniqueOrThrow
   */
  export type UserSocialAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialAccount to fetch.
     */
    where: UserSocialAccountWhereUniqueInput
  }

  /**
   * UserSocialAccount findFirst
   */
  export type UserSocialAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialAccount to fetch.
     */
    where?: UserSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialAccounts to fetch.
     */
    orderBy?: UserSocialAccountOrderByWithRelationInput | UserSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSocialAccounts.
     */
    cursor?: UserSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSocialAccounts.
     */
    distinct?: UserSocialAccountScalarFieldEnum | UserSocialAccountScalarFieldEnum[]
  }

  /**
   * UserSocialAccount findFirstOrThrow
   */
  export type UserSocialAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialAccount to fetch.
     */
    where?: UserSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialAccounts to fetch.
     */
    orderBy?: UserSocialAccountOrderByWithRelationInput | UserSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSocialAccounts.
     */
    cursor?: UserSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSocialAccounts.
     */
    distinct?: UserSocialAccountScalarFieldEnum | UserSocialAccountScalarFieldEnum[]
  }

  /**
   * UserSocialAccount findMany
   */
  export type UserSocialAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which UserSocialAccounts to fetch.
     */
    where?: UserSocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSocialAccounts to fetch.
     */
    orderBy?: UserSocialAccountOrderByWithRelationInput | UserSocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSocialAccounts.
     */
    cursor?: UserSocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSocialAccounts.
     */
    skip?: number
    distinct?: UserSocialAccountScalarFieldEnum | UserSocialAccountScalarFieldEnum[]
  }

  /**
   * UserSocialAccount create
   */
  export type UserSocialAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSocialAccount.
     */
    data: XOR<UserSocialAccountCreateInput, UserSocialAccountUncheckedCreateInput>
  }

  /**
   * UserSocialAccount createMany
   */
  export type UserSocialAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSocialAccounts.
     */
    data: UserSocialAccountCreateManyInput | UserSocialAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSocialAccount createManyAndReturn
   */
  export type UserSocialAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * The data used to create many UserSocialAccounts.
     */
    data: UserSocialAccountCreateManyInput | UserSocialAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSocialAccount update
   */
  export type UserSocialAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSocialAccount.
     */
    data: XOR<UserSocialAccountUpdateInput, UserSocialAccountUncheckedUpdateInput>
    /**
     * Choose, which UserSocialAccount to update.
     */
    where: UserSocialAccountWhereUniqueInput
  }

  /**
   * UserSocialAccount updateMany
   */
  export type UserSocialAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSocialAccounts.
     */
    data: XOR<UserSocialAccountUpdateManyMutationInput, UserSocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which UserSocialAccounts to update
     */
    where?: UserSocialAccountWhereInput
    /**
     * Limit how many UserSocialAccounts to update.
     */
    limit?: number
  }

  /**
   * UserSocialAccount updateManyAndReturn
   */
  export type UserSocialAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * The data used to update UserSocialAccounts.
     */
    data: XOR<UserSocialAccountUpdateManyMutationInput, UserSocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which UserSocialAccounts to update
     */
    where?: UserSocialAccountWhereInput
    /**
     * Limit how many UserSocialAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSocialAccount upsert
   */
  export type UserSocialAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSocialAccount to update in case it exists.
     */
    where: UserSocialAccountWhereUniqueInput
    /**
     * In case the UserSocialAccount found by the `where` argument doesn't exist, create a new UserSocialAccount with this data.
     */
    create: XOR<UserSocialAccountCreateInput, UserSocialAccountUncheckedCreateInput>
    /**
     * In case the UserSocialAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSocialAccountUpdateInput, UserSocialAccountUncheckedUpdateInput>
  }

  /**
   * UserSocialAccount delete
   */
  export type UserSocialAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
    /**
     * Filter which UserSocialAccount to delete.
     */
    where: UserSocialAccountWhereUniqueInput
  }

  /**
   * UserSocialAccount deleteMany
   */
  export type UserSocialAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSocialAccounts to delete
     */
    where?: UserSocialAccountWhereInput
    /**
     * Limit how many UserSocialAccounts to delete.
     */
    limit?: number
  }

  /**
   * UserSocialAccount without action
   */
  export type UserSocialAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSocialAccount
     */
    select?: UserSocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSocialAccount
     */
    omit?: UserSocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSocialAccountInclude<ExtArgs> | null
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
    userId: 'userId',
    email: 'email',
    phone: 'phone',
    password: 'password',
    name: 'name',
    userRole: 'userRole',
    userStatus: 'userStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    profilePicture: 'profilePicture',
    otpEnabled: 'otpEnabled',
    otpEnabledAt: 'otpEnabledAt',
    otpStatusChangeToken: 'otpStatusChangeToken',
    otpStatusChangeTokenExpiry: 'otpStatusChangeTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    sessionId: 'sessionId',
    userId: 'userId',
    sessionToken: 'sessionToken',
    sessionExpiry: 'sessionExpiry',
    sessionAgent: 'sessionAgent',
    otpNeeded: 'otpNeeded',
    otpToken: 'otpToken',
    otpTokenExpiry: 'otpTokenExpiry',
    ip: 'ip',
    os: 'os',
    device: 'device',
    browser: 'browser',
    city: 'city',
    state: 'state',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const UserSocialAccountScalarFieldEnum: {
    userSocialAccountId: 'userSocialAccountId',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiry: 'tokenExpiry',
    profilePicture: 'profilePicture',
    profileUrl: 'profileUrl',
    scopes: 'scopes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSocialAccountScalarFieldEnum = (typeof UserSocialAccountScalarFieldEnum)[keyof typeof UserSocialAccountScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    userRole?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    userStatus?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    otpEnabled?: BoolFilter<"User"> | boolean
    otpEnabledAt?: DateTimeNullableFilter<"User"> | Date | string | null
    otpStatusChangeToken?: StringNullableFilter<"User"> | string | null
    otpStatusChangeTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    userSessions?: UserSessionListRelationFilter
    userSocialAccounts?: UserSocialAccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    userRole?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    otpEnabled?: SortOrder
    otpEnabledAt?: SortOrderInput | SortOrder
    otpStatusChangeToken?: SortOrderInput | SortOrder
    otpStatusChangeTokenExpiry?: SortOrderInput | SortOrder
    userSessions?: UserSessionOrderByRelationAggregateInput
    userSocialAccounts?: UserSocialAccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    userRole?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    userStatus?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    otpEnabled?: BoolFilter<"User"> | boolean
    otpEnabledAt?: DateTimeNullableFilter<"User"> | Date | string | null
    otpStatusChangeToken?: StringNullableFilter<"User"> | string | null
    otpStatusChangeTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    userSessions?: UserSessionListRelationFilter
    userSocialAccounts?: UserSocialAccountListRelationFilter
  }, "userId" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    userRole?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    otpEnabled?: SortOrder
    otpEnabledAt?: SortOrderInput | SortOrder
    otpStatusChangeToken?: SortOrderInput | SortOrder
    otpStatusChangeTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    userRole?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    userStatus?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    otpEnabledAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    otpStatusChangeToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpStatusChangeTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    sessionId?: StringFilter<"UserSession"> | string
    userId?: StringFilter<"UserSession"> | string
    sessionToken?: StringFilter<"UserSession"> | string
    sessionExpiry?: DateTimeFilter<"UserSession"> | Date | string
    sessionAgent?: StringFilter<"UserSession"> | string
    otpNeeded?: BoolFilter<"UserSession"> | boolean
    otpToken?: StringNullableFilter<"UserSession"> | string | null
    otpTokenExpiry?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    ip?: StringNullableFilter<"UserSession"> | string | null
    os?: StringNullableFilter<"UserSession"> | string | null
    device?: StringNullableFilter<"UserSession"> | string | null
    browser?: StringNullableFilter<"UserSession"> | string | null
    city?: StringNullableFilter<"UserSession"> | string | null
    state?: StringNullableFilter<"UserSession"> | string | null
    country?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    sessionExpiry?: SortOrder
    sessionAgent?: SortOrder
    otpNeeded?: SortOrder
    otpToken?: SortOrderInput | SortOrder
    otpTokenExpiry?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    sessionId?: string
    sessionToken?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    userId?: StringFilter<"UserSession"> | string
    sessionExpiry?: DateTimeFilter<"UserSession"> | Date | string
    sessionAgent?: StringFilter<"UserSession"> | string
    otpNeeded?: BoolFilter<"UserSession"> | boolean
    otpToken?: StringNullableFilter<"UserSession"> | string | null
    otpTokenExpiry?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    ip?: StringNullableFilter<"UserSession"> | string | null
    os?: StringNullableFilter<"UserSession"> | string | null
    device?: StringNullableFilter<"UserSession"> | string | null
    browser?: StringNullableFilter<"UserSession"> | string | null
    city?: StringNullableFilter<"UserSession"> | string | null
    state?: StringNullableFilter<"UserSession"> | string | null
    country?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionId" | "sessionToken">

  export type UserSessionOrderByWithAggregationInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    sessionExpiry?: SortOrder
    sessionAgent?: SortOrder
    otpNeeded?: SortOrder
    otpToken?: SortOrderInput | SortOrder
    otpTokenExpiry?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    sessionId?: StringWithAggregatesFilter<"UserSession"> | string
    userId?: StringWithAggregatesFilter<"UserSession"> | string
    sessionToken?: StringWithAggregatesFilter<"UserSession"> | string
    sessionExpiry?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    sessionAgent?: StringWithAggregatesFilter<"UserSession"> | string
    otpNeeded?: BoolWithAggregatesFilter<"UserSession"> | boolean
    otpToken?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    otpTokenExpiry?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
    ip?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    os?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    device?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    browser?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    city?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    state?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    country?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
  }

  export type UserSocialAccountWhereInput = {
    AND?: UserSocialAccountWhereInput | UserSocialAccountWhereInput[]
    OR?: UserSocialAccountWhereInput[]
    NOT?: UserSocialAccountWhereInput | UserSocialAccountWhereInput[]
    userSocialAccountId?: StringFilter<"UserSocialAccount"> | string
    userId?: StringFilter<"UserSocialAccount"> | string
    provider?: StringFilter<"UserSocialAccount"> | string
    providerId?: StringFilter<"UserSocialAccount"> | string
    accessToken?: StringNullableFilter<"UserSocialAccount"> | string | null
    refreshToken?: StringNullableFilter<"UserSocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"UserSocialAccount"> | Date | string | null
    profilePicture?: StringNullableFilter<"UserSocialAccount"> | string | null
    profileUrl?: StringNullableFilter<"UserSocialAccount"> | string | null
    scopes?: StringNullableFilter<"UserSocialAccount"> | string | null
    createdAt?: DateTimeFilter<"UserSocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"UserSocialAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSocialAccountOrderByWithRelationInput = {
    userSocialAccountId?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSocialAccountWhereUniqueInput = Prisma.AtLeast<{
    userSocialAccountId?: string
    providerId?: string
    AND?: UserSocialAccountWhereInput | UserSocialAccountWhereInput[]
    OR?: UserSocialAccountWhereInput[]
    NOT?: UserSocialAccountWhereInput | UserSocialAccountWhereInput[]
    userId?: StringFilter<"UserSocialAccount"> | string
    provider?: StringFilter<"UserSocialAccount"> | string
    accessToken?: StringNullableFilter<"UserSocialAccount"> | string | null
    refreshToken?: StringNullableFilter<"UserSocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"UserSocialAccount"> | Date | string | null
    profilePicture?: StringNullableFilter<"UserSocialAccount"> | string | null
    profileUrl?: StringNullableFilter<"UserSocialAccount"> | string | null
    scopes?: StringNullableFilter<"UserSocialAccount"> | string | null
    createdAt?: DateTimeFilter<"UserSocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"UserSocialAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userSocialAccountId" | "providerId">

  export type UserSocialAccountOrderByWithAggregationInput = {
    userSocialAccountId?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSocialAccountCountOrderByAggregateInput
    _max?: UserSocialAccountMaxOrderByAggregateInput
    _min?: UserSocialAccountMinOrderByAggregateInput
  }

  export type UserSocialAccountScalarWhereWithAggregatesInput = {
    AND?: UserSocialAccountScalarWhereWithAggregatesInput | UserSocialAccountScalarWhereWithAggregatesInput[]
    OR?: UserSocialAccountScalarWhereWithAggregatesInput[]
    NOT?: UserSocialAccountScalarWhereWithAggregatesInput | UserSocialAccountScalarWhereWithAggregatesInput[]
    userSocialAccountId?: StringWithAggregatesFilter<"UserSocialAccount"> | string
    userId?: StringWithAggregatesFilter<"UserSocialAccount"> | string
    provider?: StringWithAggregatesFilter<"UserSocialAccount"> | string
    providerId?: StringWithAggregatesFilter<"UserSocialAccount"> | string
    accessToken?: StringNullableWithAggregatesFilter<"UserSocialAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"UserSocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableWithAggregatesFilter<"UserSocialAccount"> | Date | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"UserSocialAccount"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"UserSocialAccount"> | string | null
    scopes?: StringNullableWithAggregatesFilter<"UserSocialAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSocialAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSocialAccount"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
    userSessions?: UserSessionCreateNestedManyWithoutUserInput
    userSocialAccounts?: UserSocialAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
    userSessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    userSocialAccounts?: UserSocialAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSessions?: UserSessionUpdateManyWithoutUserNestedInput
    userSocialAccounts?: UserSocialAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    userSocialAccounts?: UserSocialAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateInput = {
    sessionId?: string
    sessionToken: string
    sessionExpiry: Date | string
    sessionAgent: string
    otpNeeded?: boolean
    otpToken?: string | null
    otpTokenExpiry?: Date | string | null
    ip?: string | null
    os?: string | null
    device?: string | null
    browser?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    sessionId?: string
    userId: string
    sessionToken: string
    sessionExpiry: Date | string
    sessionAgent: string
    otpNeeded?: boolean
    otpToken?: string | null
    otpTokenExpiry?: Date | string | null
    ip?: string | null
    os?: string | null
    device?: string | null
    browser?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSessionUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionCreateManyInput = {
    sessionId?: string
    userId: string
    sessionToken: string
    sessionExpiry: Date | string
    sessionAgent: string
    otpNeeded?: boolean
    otpToken?: string | null
    otpTokenExpiry?: Date | string | null
    ip?: string | null
    os?: string | null
    device?: string | null
    browser?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSessionUpdateManyMutationInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateManyInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSocialAccountCreateInput = {
    userSocialAccountId?: string
    provider: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    profilePicture?: string | null
    profileUrl?: string | null
    scopes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSocialAccountsInput
  }

  export type UserSocialAccountUncheckedCreateInput = {
    userSocialAccountId?: string
    userId: string
    provider: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    profilePicture?: string | null
    profileUrl?: string | null
    scopes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSocialAccountUpdateInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSocialAccountsNestedInput
  }

  export type UserSocialAccountUncheckedUpdateInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSocialAccountCreateManyInput = {
    userSocialAccountId?: string
    userId: string
    provider: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    profilePicture?: string | null
    profileUrl?: string | null
    scopes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSocialAccountUpdateManyMutationInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSocialAccountUncheckedUpdateManyInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type UserSocialAccountListRelationFilter = {
    every?: UserSocialAccountWhereInput
    some?: UserSocialAccountWhereInput
    none?: UserSocialAccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSocialAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userRole?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    profilePicture?: SortOrder
    otpEnabled?: SortOrder
    otpEnabledAt?: SortOrder
    otpStatusChangeToken?: SortOrder
    otpStatusChangeTokenExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userRole?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    profilePicture?: SortOrder
    otpEnabled?: SortOrder
    otpEnabledAt?: SortOrder
    otpStatusChangeToken?: SortOrder
    otpStatusChangeTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    name?: SortOrder
    userRole?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    profilePicture?: SortOrder
    otpEnabled?: SortOrder
    otpEnabledAt?: SortOrder
    otpStatusChangeToken?: SortOrder
    otpStatusChangeTokenExpiry?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSessionCountOrderByAggregateInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    sessionExpiry?: SortOrder
    sessionAgent?: SortOrder
    otpNeeded?: SortOrder
    otpToken?: SortOrder
    otpTokenExpiry?: SortOrder
    ip?: SortOrder
    os?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    sessionExpiry?: SortOrder
    sessionAgent?: SortOrder
    otpNeeded?: SortOrder
    otpToken?: SortOrder
    otpTokenExpiry?: SortOrder
    ip?: SortOrder
    os?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    sessionExpiry?: SortOrder
    sessionAgent?: SortOrder
    otpNeeded?: SortOrder
    otpToken?: SortOrder
    otpTokenExpiry?: SortOrder
    ip?: SortOrder
    os?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSocialAccountCountOrderByAggregateInput = {
    userSocialAccountId?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    profilePicture?: SortOrder
    profileUrl?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSocialAccountMaxOrderByAggregateInput = {
    userSocialAccountId?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    profilePicture?: SortOrder
    profileUrl?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSocialAccountMinOrderByAggregateInput = {
    userSocialAccountId?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    profilePicture?: SortOrder
    profileUrl?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type UserSocialAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSocialAccountCreateWithoutUserInput, UserSocialAccountUncheckedCreateWithoutUserInput> | UserSocialAccountCreateWithoutUserInput[] | UserSocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSocialAccountCreateOrConnectWithoutUserInput | UserSocialAccountCreateOrConnectWithoutUserInput[]
    createMany?: UserSocialAccountCreateManyUserInputEnvelope
    connect?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type UserSocialAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSocialAccountCreateWithoutUserInput, UserSocialAccountUncheckedCreateWithoutUserInput> | UserSocialAccountCreateWithoutUserInput[] | UserSocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSocialAccountCreateOrConnectWithoutUserInput | UserSocialAccountCreateOrConnectWithoutUserInput[]
    createMany?: UserSocialAccountCreateManyUserInputEnvelope
    connect?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
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

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type UserSocialAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSocialAccountCreateWithoutUserInput, UserSocialAccountUncheckedCreateWithoutUserInput> | UserSocialAccountCreateWithoutUserInput[] | UserSocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSocialAccountCreateOrConnectWithoutUserInput | UserSocialAccountCreateOrConnectWithoutUserInput[]
    upsert?: UserSocialAccountUpsertWithWhereUniqueWithoutUserInput | UserSocialAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSocialAccountCreateManyUserInputEnvelope
    set?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    disconnect?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    delete?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    connect?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    update?: UserSocialAccountUpdateWithWhereUniqueWithoutUserInput | UserSocialAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSocialAccountUpdateManyWithWhereWithoutUserInput | UserSocialAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSocialAccountScalarWhereInput | UserSocialAccountScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type UserSocialAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSocialAccountCreateWithoutUserInput, UserSocialAccountUncheckedCreateWithoutUserInput> | UserSocialAccountCreateWithoutUserInput[] | UserSocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSocialAccountCreateOrConnectWithoutUserInput | UserSocialAccountCreateOrConnectWithoutUserInput[]
    upsert?: UserSocialAccountUpsertWithWhereUniqueWithoutUserInput | UserSocialAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSocialAccountCreateManyUserInputEnvelope
    set?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    disconnect?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    delete?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    connect?: UserSocialAccountWhereUniqueInput | UserSocialAccountWhereUniqueInput[]
    update?: UserSocialAccountUpdateWithWhereUniqueWithoutUserInput | UserSocialAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSocialAccountUpdateManyWithWhereWithoutUserInput | UserSocialAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSocialAccountScalarWhereInput | UserSocialAccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSessionsInput = {
    create?: XOR<UserCreateWithoutUserSessionsInput, UserUncheckedCreateWithoutUserSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSessionsNestedInput = {
    create?: XOR<UserCreateWithoutUserSessionsInput, UserUncheckedCreateWithoutUserSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionsInput
    upsert?: UserUpsertWithoutUserSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSessionsInput, UserUpdateWithoutUserSessionsInput>, UserUncheckedUpdateWithoutUserSessionsInput>
  }

  export type UserCreateNestedOneWithoutUserSocialAccountsInput = {
    create?: XOR<UserCreateWithoutUserSocialAccountsInput, UserUncheckedCreateWithoutUserSocialAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSocialAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSocialAccountsNestedInput = {
    create?: XOR<UserCreateWithoutUserSocialAccountsInput, UserUncheckedCreateWithoutUserSocialAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSocialAccountsInput
    upsert?: UserUpsertWithoutUserSocialAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSocialAccountsInput, UserUpdateWithoutUserSocialAccountsInput>, UserUncheckedUpdateWithoutUserSocialAccountsInput>
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserSessionCreateWithoutUserInput = {
    sessionId?: string
    sessionToken: string
    sessionExpiry: Date | string
    sessionAgent: string
    otpNeeded?: boolean
    otpToken?: string | null
    otpTokenExpiry?: Date | string | null
    ip?: string | null
    os?: string | null
    device?: string | null
    browser?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    sessionId?: string
    sessionToken: string
    sessionExpiry: Date | string
    sessionAgent: string
    otpNeeded?: boolean
    otpToken?: string | null
    otpTokenExpiry?: Date | string | null
    ip?: string | null
    os?: string | null
    device?: string | null
    browser?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionCreateManyUserInputEnvelope = {
    data: UserSessionCreateManyUserInput | UserSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSocialAccountCreateWithoutUserInput = {
    userSocialAccountId?: string
    provider: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    profilePicture?: string | null
    profileUrl?: string | null
    scopes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSocialAccountUncheckedCreateWithoutUserInput = {
    userSocialAccountId?: string
    provider: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    profilePicture?: string | null
    profileUrl?: string | null
    scopes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSocialAccountCreateOrConnectWithoutUserInput = {
    where: UserSocialAccountWhereUniqueInput
    create: XOR<UserSocialAccountCreateWithoutUserInput, UserSocialAccountUncheckedCreateWithoutUserInput>
  }

  export type UserSocialAccountCreateManyUserInputEnvelope = {
    data: UserSocialAccountCreateManyUserInput | UserSocialAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    sessionId?: StringFilter<"UserSession"> | string
    userId?: StringFilter<"UserSession"> | string
    sessionToken?: StringFilter<"UserSession"> | string
    sessionExpiry?: DateTimeFilter<"UserSession"> | Date | string
    sessionAgent?: StringFilter<"UserSession"> | string
    otpNeeded?: BoolFilter<"UserSession"> | boolean
    otpToken?: StringNullableFilter<"UserSession"> | string | null
    otpTokenExpiry?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    ip?: StringNullableFilter<"UserSession"> | string | null
    os?: StringNullableFilter<"UserSession"> | string | null
    device?: StringNullableFilter<"UserSession"> | string | null
    browser?: StringNullableFilter<"UserSession"> | string | null
    city?: StringNullableFilter<"UserSession"> | string | null
    state?: StringNullableFilter<"UserSession"> | string | null
    country?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
  }

  export type UserSocialAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSocialAccountWhereUniqueInput
    update: XOR<UserSocialAccountUpdateWithoutUserInput, UserSocialAccountUncheckedUpdateWithoutUserInput>
    create: XOR<UserSocialAccountCreateWithoutUserInput, UserSocialAccountUncheckedCreateWithoutUserInput>
  }

  export type UserSocialAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSocialAccountWhereUniqueInput
    data: XOR<UserSocialAccountUpdateWithoutUserInput, UserSocialAccountUncheckedUpdateWithoutUserInput>
  }

  export type UserSocialAccountUpdateManyWithWhereWithoutUserInput = {
    where: UserSocialAccountScalarWhereInput
    data: XOR<UserSocialAccountUpdateManyMutationInput, UserSocialAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSocialAccountScalarWhereInput = {
    AND?: UserSocialAccountScalarWhereInput | UserSocialAccountScalarWhereInput[]
    OR?: UserSocialAccountScalarWhereInput[]
    NOT?: UserSocialAccountScalarWhereInput | UserSocialAccountScalarWhereInput[]
    userSocialAccountId?: StringFilter<"UserSocialAccount"> | string
    userId?: StringFilter<"UserSocialAccount"> | string
    provider?: StringFilter<"UserSocialAccount"> | string
    providerId?: StringFilter<"UserSocialAccount"> | string
    accessToken?: StringNullableFilter<"UserSocialAccount"> | string | null
    refreshToken?: StringNullableFilter<"UserSocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"UserSocialAccount"> | Date | string | null
    profilePicture?: StringNullableFilter<"UserSocialAccount"> | string | null
    profileUrl?: StringNullableFilter<"UserSocialAccount"> | string | null
    scopes?: StringNullableFilter<"UserSocialAccount"> | string | null
    createdAt?: DateTimeFilter<"UserSocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"UserSocialAccount"> | Date | string
  }

  export type UserCreateWithoutUserSessionsInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
    userSocialAccounts?: UserSocialAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSessionsInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
    userSocialAccounts?: UserSocialAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSessionsInput, UserUncheckedCreateWithoutUserSessionsInput>
  }

  export type UserUpsertWithoutUserSessionsInput = {
    update: XOR<UserUpdateWithoutUserSessionsInput, UserUncheckedUpdateWithoutUserSessionsInput>
    create: XOR<UserCreateWithoutUserSessionsInput, UserUncheckedCreateWithoutUserSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSessionsInput, UserUncheckedUpdateWithoutUserSessionsInput>
  }

  export type UserUpdateWithoutUserSessionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSocialAccounts?: UserSocialAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSessionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSocialAccounts?: UserSocialAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserSocialAccountsInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
    userSessions?: UserSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSocialAccountsInput = {
    userId?: string
    email: string
    phone?: string | null
    password: string
    name?: string | null
    userRole?: $Enums.UserRole
    userStatus?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    otpEnabled?: boolean
    otpEnabledAt?: Date | string | null
    otpStatusChangeToken?: string | null
    otpStatusChangeTokenExpiry?: Date | string | null
    userSessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSocialAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSocialAccountsInput, UserUncheckedCreateWithoutUserSocialAccountsInput>
  }

  export type UserUpsertWithoutUserSocialAccountsInput = {
    update: XOR<UserUpdateWithoutUserSocialAccountsInput, UserUncheckedUpdateWithoutUserSocialAccountsInput>
    create: XOR<UserCreateWithoutUserSocialAccountsInput, UserUncheckedCreateWithoutUserSocialAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSocialAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSocialAccountsInput, UserUncheckedUpdateWithoutUserSocialAccountsInput>
  }

  export type UserUpdateWithoutUserSocialAccountsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSessions?: UserSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSocialAccountsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    userStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    otpEnabled?: BoolFieldUpdateOperationsInput | boolean
    otpEnabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpStatusChangeToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpStatusChangeTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSessionCreateManyUserInput = {
    sessionId?: string
    sessionToken: string
    sessionExpiry: Date | string
    sessionAgent: string
    otpNeeded?: boolean
    otpToken?: string | null
    otpTokenExpiry?: Date | string | null
    ip?: string | null
    os?: string | null
    device?: string | null
    browser?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSocialAccountCreateManyUserInput = {
    userSocialAccountId?: string
    provider: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    profilePicture?: string | null
    profileUrl?: string | null
    scopes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSessionUpdateWithoutUserInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    sessionExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAgent?: StringFieldUpdateOperationsInput | string
    otpNeeded?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    otpTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSocialAccountUpdateWithoutUserInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSocialAccountUncheckedUpdateWithoutUserInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSocialAccountUncheckedUpdateManyWithoutUserInput = {
    userSocialAccountId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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