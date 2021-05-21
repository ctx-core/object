export declare const pending_symbol: unique symbol;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export declare function _be<Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx>(key: Key, _val: (ctx: Ctx, key: Key, opts?: _be_opts_T) => (void | Ctx[Key])): Be<Ctx, Key>;
export declare type Be<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> = (ctx: Ctx, opts?: _be_opts_T) => NonNullable<Ctx[Key]>;
export declare type B<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> = Be<Ctx, Key>;
export declare type be_T<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> = Be<Ctx, Key>;
export interface _be_opts_T {
    force?: boolean;
}
export { _be as _b, };
