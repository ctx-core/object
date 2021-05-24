export declare const pending_symbol: unique symbol;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export declare function _be</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>>(key: Key, _val: (ctx: Ctx, key: Key, opts?: _be_opts_T) => Out): (ctx: Ctx, opts?: _be_opts_T) => Out;
export declare type Be</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = (ctx: Ctx, opts?: _be_opts_T) => Out;
export declare type B</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = Be<Ctx, Key, Out>;
export declare type be_T</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = Be<Ctx, Key, Out>;
export interface _be_opts_T {
    force?: boolean;
}
export { _be as _b, };
