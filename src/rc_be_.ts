import { assign } from './assign'
import { be_, be__opts_T } from './be_'
export const rc_set_h_symbol:unique symbol = Symbol('rc_set_h')
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export function rc_be_</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/>(
	key:Key,
	val_:(this: val__this_T, ctx:Ctx, key:Key, opts?:be__opts_T)=>Out,
):(ctx:Ctx, opts?:be__opts_T)=>RcBe_return_T<Out> /* Duplicated to avoid error TS2742 */ {
	return (ctx:Ctx, opts?:rc_be__opts_I)=>{
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
		let rc_set_h:set_h_symbol_T = (ctx as any)[rc_set_h_symbol]
		if (!rc_set_h) {
			rc_set_h = {}
			;(ctx as any)[rc_set_h_symbol] = rc_set_h
		}
		let rc_set:Set<any> = rc_set_h[key as string]
		if (!rc_set) {
			rc_set = new Set()
			assign(rc_set_h, { [key]: rc_set })
		}
		const owner = opts?.owner || {}
		rc_set.add(owner)
		let destroy = ()=>{
			rc_set.delete(owner)
			if (!rc_set.size) {
				for (const destroy_cb of destroy_cb_a) {
					destroy_cb()
				}
				delete (ctx as any)[key]
			}
		}
		return {
			value: be(ctx, opts),
			destroy,
		}
		function on_destroy(...in_destroy_cb_a1:rc_be_destroy_T[]) {
			destroy_cb_a.push(...in_destroy_cb_a1)
		}
	}
}
export type set_h_symbol_T = Record<string|symbol, Set<any>>
export type val__this_on_destroy_T = (...destroy_a1:rc_be_destroy_T[])=>void
export interface val__this_T {
	on_destroy:val__this_on_destroy_T
	onDestroy:val__this_on_destroy_T
}
export interface rc_be__opts_I extends be__opts_T {
	owner?:object
}
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
	(ctx:Ctx, opts?:be__opts_T)=>RcBe_return_T<Out>
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
