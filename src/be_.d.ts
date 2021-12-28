export declare const pending_symbol: unique symbol;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_<Out extends NonNullable<unknown>>(val_: be__val__T<Out>): be__return_T<Out>;
export declare function be_<Out extends NonNullable<unknown>>(key: string, val_: be__val__T<Out>): be__return_T<Out>;
export declare type Ctx = Map<Be<unknown> | string, unknown>;
export declare type be__return_T<Out extends NonNullable<unknown>> = (ctx: Ctx, opts?: be_opts_T) => Out;
export declare type Be<Out extends NonNullable<unknown>> = (ctx: Ctx, opts?: be_opts_T) => Out;
export declare type B<Out extends NonNullable<unknown>> = Be<Out>;
export declare type be_T<Out extends NonNullable<unknown>> = Be<Out>;
export declare type be__val__T<Out extends NonNullable<unknown>> = (ctx: Ctx, key: Be<Out>, opts?: be_opts_T) => Out;
export interface be_opts_T {
    force?: boolean;
}
export { be_ as _be, be_ as b_, be_ as _b, };
