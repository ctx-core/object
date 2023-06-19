export declare const pending_symbol:unique symbol
export declare function globalThis__be_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	val_:be__val__T<Val, ctx_T>,
	be__params?:be__params_T
):Be<Val, ctx_T>
export declare function globalThis__be_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id:string,
	val_:be__val__T<Val, ctx_T>,
	be__params?:be__params_T
):Be<Val, ctx_T>
/**
 * Auto-memoization function for the Ctx.
 *
 * Returns a function to ensure that a member id is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	val_:be__val__T<Val, ctx_T>,
	be__params?:be__params_T
):Be<Val, ctx_T>
export declare function be_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	id:string,
	val_:be__val__T<Val, MapCtx>,
	be__params?:be__params_T
):Be<Val, ctx_T>
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
export declare function be__is_source_(be:Be<any>):(map_ctx:MapCtx, ctx:Ctx)=>boolean
export declare function source__map_ctx_(ctx:Ctx, is_source_:is_source__T):MapCtx
export declare function be__set<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	be:Be<Val>,
	ctx:Ctx,
	val:Val
):void
export declare function ctx__set<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	ctx:Ctx,
	be_OR_id:Be<Val>|string|symbol,
	val:Val,
	is_source_?:is_source__T
):void
export declare function be__delete<
	Val extends NonNullable<unknown>
>(
	be:Be<Val>,
	ctx:Ctx
):void
export declare function ctx__delete<
	Val extends NonNullable<unknown>
>(
	ctx:Ctx,
	be_OR_id:Be<Val>|string|symbol,
	is_source_?:is_source__T
):void
export declare function be__val_<
	Val extends NonNullable<unknown>
>(be_OR_id:Be<Val>|string, ctx:Ctx):Val|unknown|null
export declare type MapCtx = Map<Be<any>|string|symbol, unknown>
export interface NestedMapCtx extends Array<NestedMapCtx|MapCtx> {
}
export type Ctx = MapCtx|NestedMapCtx
export declare type Be<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = (ctx:ctx_T, params?:be_params_T)=>Val
export declare type B<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = Be<Val, ctx_T>
export declare type be__return_T<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = Be<Val, ctx_T>
export declare type be_T<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = Be<Val, ctx_T>
export declare type be__val__T<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = (ctx:ctx_T, be:Be<Val, ctx_T>, params?:be_params_T)=>Val
export interface be__params_T {
	is_source_?:is_source__T
	expired_?:expired__T
	be_?:typeof be_
}
export type be__opts_T = be__params_T
export interface be_params_T {
	force?:boolean
}
export type be_opts_T = be_params_T
export type is_source__T = (map_ctx:MapCtx, ctx:Ctx)=>boolean
export type expired__T = (ctx:Ctx)=>boolean
