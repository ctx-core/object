import { assign } from './assign'
import { _be, _be_opts_T } from './_be'
export const rc_set_h_symbol:unique symbol = Symbol('rc_set_h')
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export function _rc_be</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
/*@formatter:off*/>(
	key:Key,
	_val:(this: _val_this_T, ctx:Ctx, key:Key, opts?:_be_opts_T)=>Out,
):RcBe<Ctx, Key, Out> {
	return (ctx:Ctx, opts?:_rc_be_opts_T)=>{
		const destroy_cb_a1:rc_be_destroy_T[] = []
		const _val_this:_val_this_T = {
			on_destroy,
			onDestroy: on_destroy,
		}
		const be = _be<Ctx, Key, Out>(
			key,
			(ctx, key, opts)=>
				_val.apply(_val_this, [ctx, key, opts]) as Out
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
				for (const destroy_cb of destroy_cb_a1) {
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
			destroy_cb_a1.push(...in_destroy_cb_a1)
		}
	}
}
export type set_h_symbol_T = Record<string|symbol, Set<any>>
export type _val_this_on_destroy_T = (...destroy_a1:rc_be_destroy_T[])=>void
export interface _val_this_T {
	on_destroy:_val_this_on_destroy_T
	onDestroy:_val_this_on_destroy_T
}
export interface _rc_be_opts_T extends _be_opts_T {
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
	(ctx:Ctx, opts?:_be_opts_T)=>RcBe_return_T<Out>
export type RcB</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
/*@formatter:off*/> =
	RcBe<Ctx, Key, Out>
export {
	_rc_be as _rc_b
}
