import { assign } from './assign.js'
import type { be_opts_T } from './be_.js'
import { be_ } from './be_.js'
export const rc_set_r_symbol:unique symbol = Symbol('rc_set_r')
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export function rc_be_</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/>(
	key:Key, val_:rc_be__val__T<Ctx, Key, Out>,
):(ctx:Ctx, opts?:rc_be_opts_T)=>RcBe_return_T<Out> /* Duplicated to avoid error TS2742 */ {
	return (ctx:Ctx, opts?:rc_be_opts_T)=>{
		const ctx_any = ctx as any
		const destroy_cb_a:rc_be_destroy_T[] = []
		const val__this:val__this_T = {
			on_destroy,
			onDestroy: on_destroy,
		}
		const be = be_<Ctx, Key, Out>(
			key,
			(ctx, key, opts)=>
				val_.apply(val__this, [ctx, key, opts]) as Out
		)
		let rc_set_r:set_h_symbol_T = ctx_any[rc_set_r_symbol]
		if (!rc_set_r) {
			rc_set_r = {}
			ctx_any[rc_set_r_symbol] = rc_set_r
		}
		let rc_set:Set<any> = rc_set_r[key as string]
		if (!rc_set) {
			rc_set = new Set()
			assign(rc_set_r, { [key]: rc_set })
		}
		const owner = opts?.owner || {}
		rc_set.add(owner)
		let destroy = ()=>{
			rc_set.delete(owner)
			if (!rc_set.size) {
				for (const destroy_cb of destroy_cb_a) {
					destroy_cb()
				}
				delete ctx_any[key]
			}
		}
		return {
			value: be(ctx, opts),
			destroy,
		}
		function on_destroy(...in_destroy_cb_a:rc_be_destroy_T[]) {
			destroy_cb_a.push(...in_destroy_cb_a)
		}
	}
}
export type set_h_symbol_T = Record<string|symbol, Set<any>>
export type val__this_on_destroy_T = (...destroy_a:rc_be_destroy_T[])=>void
export interface val__this_T {
	on_destroy:val__this_on_destroy_T
	onDestroy:val__this_on_destroy_T
}
export interface rc_be_opts_T extends be_opts_T {
	owner?:object
}
export type rc_be__val__T</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> =
	(this: val__this_T, ctx:Ctx, key:Key, opts?:rc_be_opts_T)=>Out
export type rc_be_destroy_T = ()=>void
export interface RcBe_return_T<Out extends unknown = unknown> {
	value:Out
	destroy:rc_be_destroy_T
}
export type RcBe</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> =
	(ctx:Ctx, opts?:be_opts_T)=>RcBe_return_T<Out>
export type RcB</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/> =
	RcBe<Ctx, Key, Out>
export {
	rc_be_ as _rc_be,
	rc_be_ as _rc_b,
}
