export declare const pending_symbol: unique symbol;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>>(key: Key, val_: be__val__T<Ctx, Key, Out>): (ctx: Ctx, opts?: be_opts_T) => Out;
export declare type Be</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = (ctx: Ctx, opts?: be_opts_T) => Out;
export declare type B</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = Be<Ctx, Key, Out>;
export declare type be_T</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = Be<Ctx, Key, Out>;
export declare type be__val__T</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = (ctx: Ctx, key: Key, opts?: be_opts_T) => Out;
export interface be_opts_T {
    force?: boolean;
}
export { be_ as _be, be_ as b_, be_ as _b, };
