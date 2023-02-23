export declare const pending_symbol:unique symbol
/**
 * Returns a function to ensure that a member label is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export declare function be_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	val_:be__val__T<Val, ctx_T>,
	be__opts?:be__opts_T<Val>
):Be<Val, ctx_T>
export declare function be_<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	label:string,
	val_:be__val__T<Val, ctx_T>,
	be__opts?:be__opts_T<Val>
):Be<Val, ctx_T>
export {
	be_ as _be,
	be_ as b_,
	be_ as _b,
}
export declare function be__set<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
>(
	be:Be<Val>,
	ctx:Ctx, val:Val
):MapCtx
export {
	be__set as ctx__set,
}
export declare function be__delete<
	Val extends NonNullable<unknown>
>(
	be:Be<Val>,
	argv__ctx:Ctx
):void
export {
	be__delete as ctx__delete,
}
export declare function be__val_<
	Val extends NonNullable<unknown>
>(be_or_label:Be<Val>|string, ctx:Ctx):Val|unknown|null
export declare type MapCtx = Map<Be<any>|string|symbol, unknown>
export interface NestedMapCtx extends Array<NestedMapCtx|MapCtx> {}
export type Ctx = MapCtx|NestedMapCtx
export declare type Be<
	Val extends NonNullable<unknown>,
	ctx_T extends Ctx = Ctx
> = (ctx:ctx_T, opts?:be_opts_T)=>Val
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
> = (ctx:ctx_T, label:Be<Val, ctx_T>, opts?:be_opts_T)=>Val
export interface be__opts_T<
	Val extends NonNullable<unknown>
> {
	is_source_?:is_source__T
}
export interface be_opts_T {
	force?:boolean
}
export type be__label__value__Map_T = Map<Be<NonNullable<unknown>>, unknown>
export type is_source__T = (map_ctx:MapCtx, ctx:Ctx)=>boolean
