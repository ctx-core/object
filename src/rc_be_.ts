import type { Be, be__val__T, be_opts_T, Ctx } from './be_.js'
import { be_ } from './be_.js'
export const be_m_set_key:unique symbol = Symbol('be_m_set')
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export function rc_be_<Out extends NonNullable<unknown>>(
	val_:rc_be__val__T<Out>,
):rc_be__return_T<Out>
export function rc_be_<Out extends NonNullable<unknown>>(
	key:string,
	val_:rc_be__val__T<Out>,
):rc_be__return_T<Out>
export function rc_be_<Out extends NonNullable<unknown>>(
	key_or_val:string|rc_be__val__T<Out>,
	arg_val_?:rc_be__val__T<Out>,
):rc_be__return_T<Out> {
	return (ctx:Ctx, opts?:rc_be_opts_T)=>{
		const ctx_any = ctx as any
		const destroy_cb_a:rc_be_destroy_T[] = []
		const val_this:val_this_T = {
			on_destroy,
			onDestroy: on_destroy,
		}
		const val_ = arg_val_ ? arg_val_ : key_or_val as be__val__T<Out>
		const key = arg_val_ ? key_or_val as string : null
		const be:Be<Out> =
			arg_val_
			? be_<Out>(val_)
			: be_<Out>(
				key!,
				(ctx, be, opts)=>
					arg_val_!.call(val_this, ctx, be, opts) as Out
			)
		let be_m_set:be_m_set_T<Out> = ctx_any[be_m_set_key]
		if (!be_m_set) {
			be_m_set = new Map<Be<Out>, Set<any>>()
			ctx_any[be_m_set_key] = be_m_set
		}
		let rc_set:Set<any>|undefined = be_m_set.get(be)
		if (!rc_set) {
			rc_set = new Set()
			be_m_set.set(be, rc_set)
		}
		const owner = opts?.owner || {}
		rc_set.add(owner)
		let destroy = ()=>{
			rc_set!.delete(owner)
			if (!rc_set!.size) {
				for (const destroy_cb of destroy_cb_a) {
					destroy_cb()
				}
				ctx.delete(be)
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
export type rc_be__return_T<Out extends NonNullable<unknown>> = (ctx:Ctx, opts?:rc_be_opts_T)=>RcBe_return_T<Out>
export type be_m_set_T<Out extends NonNullable<unknown>> = Map<Be<Out>, Set<any>>
export type val_this_on_destroy_T = (...destroy_a:rc_be_destroy_T[])=>void
export interface val_this_T {
	on_destroy:val_this_on_destroy_T
	onDestroy:val_this_on_destroy_T
}
export interface rc_be_opts_T extends be_opts_T {
	owner?:object
}
export type rc_be__val__T<Out extends NonNullable<unknown>> =
	(this:val_this_T, ctx:Ctx, key:Be<Out>, opts?:rc_be_opts_T)=>Out
export type rc_be_destroy_T = ()=>void
export interface RcBe_return_T<Out extends unknown = unknown> {
	value:Out
	destroy:rc_be_destroy_T
}
export type RcBe<Out extends NonNullable<unknown>> =
	(ctx:Ctx, opts?:be_opts_T)=>RcBe_return_T<Out>
export type RcB<Out extends NonNullable<unknown>> =
	RcBe<Out>
export {
	rc_be_ as _rc_be,
	rc_be_ as _rc_b,
}
