export declare const pending_symbol: unique symbol;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export declare function _be<Output extends unknown = unknown, Ctx extends object = object>(key: string | symbol, _val: (ctx: Ctx, key: (string | symbol), opts?: _be_opts_T) => (void | Output)): Be<Output, Ctx>;
export declare type Be<Output extends unknown = unknown, Ctx extends object = object> = (ctx: Ctx, opts?: _be_opts_T) => Output;
export declare type B<Output extends unknown = unknown, Ctx extends object = object> = Be<Output, Ctx>;
export declare type be_T<Output extends unknown = unknown, Ctx extends object = object> = Be<Output, Ctx>;
export interface _be_opts_T {
    force?: boolean;
}
export { _be as _b, };
