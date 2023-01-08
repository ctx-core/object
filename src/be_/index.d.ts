export declare const pending_symbol:unique symbol
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_<Out extends NonNullable<unknown>, ctx_T extends Ctx = Ctx>(
	val_:be__val__T<Out, ctx_T>, be__opts?:be__opts_T<Out>
):Be<Out, ctx_T>
export declare function be_<Out extends NonNullable<unknown>, ctx_T extends Ctx = Ctx>(
	key:string, val_:be__val__T<Out, ctx_T>, be__opts?:be__opts_T<Out>
):Be<Out, ctx_T>
export function ctx__delete<Out extends NonNullable<unknown>>(argv__ctx:Ctx, be:Be<Out>):void
export declare type MapCtx = Map<Be<any>|string|symbol, unknown>
export interface NestedMapCtx extends Array<NestedMapCtx|MapCtx> {}
export type Ctx = MapCtx|NestedMapCtx
export declare type Be<Out extends NonNullable<unknown>, ctx_T extends Ctx = Ctx> =
	(ctx:ctx_T, opts?:be_opts_T)=>Out
export declare type B<Out extends NonNullable<unknown>, ctx_T extends Ctx = Ctx> = Be<Out, ctx_T>
export declare type be__val__T<Out extends NonNullable<unknown>, ctx_T extends Ctx = Ctx> =
	(ctx:ctx_T, key:Be<Out, ctx_T>, opts?:be_opts_T)=>Out
export interface be__opts_T<Out extends NonNullable<unknown>> {
	is_source_?(map_ctx:MapCtx, ctx:Ctx):boolean
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
