export declare const pending_symbol:unique symbol
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_<Out extends NonNullable<unknown>>(
	val_:be__val__T<Out>, be__opts?:be__opts_T<Out>
):Be<Out>
export declare function be_<Out extends NonNullable<unknown>>(
	key:string, val_:be__val__T<Out>, be__opts?:be__opts_T<Out>
):Be<Out>
export declare type MapCtx = Map<Be<any>|string|symbol, unknown>
declare type MapCtx1 = MapCtx|MapCtx[]
declare type MapCtx2 = MapCtx1|MapCtx1[]
declare type MapCtx3 = MapCtx2|MapCtx2[]
declare type MapCtx4 = MapCtx3|MapCtx3[]
declare type MapCtx5 = MapCtx4|MapCtx4[]
declare type MapCtx6 = MapCtx5|MapCtx5[]
declare type MapCtx7 = MapCtx6|MapCtx6[]
declare type MapCtx8 = MapCtx7|MapCtx7[]
declare type MapCtx9 = MapCtx8|MapCtx8[]
export declare type Ctx = MapCtx9
export declare type Be<Out extends NonNullable<unknown>> = (ctx:Ctx, opts?:be_opts_T)=>Out
export declare type B<Out extends NonNullable<unknown>> = Be<Out>
export declare type be__val__T<Out extends NonNullable<unknown>> = (ctx:Ctx, key:Be<Out>, opts?:be_opts_T)=>Out
export interface be__opts_T<Out extends NonNullable<unknown>> {
	is_ctx_?(map_ctx:MapCtx, ctx:Ctx):boolean
}
export interface be_opts_T {
	force?:boolean
}
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
	Be as be__return_T,
	Be as be_T,
}
