import get = Reflect.get
import { assign } from './assign'
import { _be, _be_opts_T } from './_be'
export const rc_set_h_symbol = Symbol('rc_set_h')
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export function _rc_be<Output extends unknown = unknown, Ctx extends object = object>(
	key:string|symbol,
	_val:(ctx:Ctx, key:(string|symbol), opts?:_rc_be_opts_T)=>(void|Output),
):RcBe<Output, Ctx> {
	return (ctx:Ctx, opts?:_rc_be_opts_T)=>{
		const be = _be<Output, Ctx>(key, _val)
		let rc_set_h:Record<string|symbol, Set<any>> = get(ctx, rc_set_h_symbol)
		if (!rc_set_h) {
			rc_set_h = {}
		}
		let rc_set:Set<any> = get(rc_set_h, key)
		if (!rc_set) {
			rc_set = new Set()
			assign(rc_set_h, { [key]: rc_set })
		}
		const owner = opts?.owner || {}
		rc_set.add(owner)
		let destroy = ()=>{
			rc_set.delete(owner)
			if (!rc_set.size) {
				delete ctx[key]
			}
		}
		return {
			value: be(ctx, opts),
			destroy,
		}
	}
}
export interface _rc_be_opts_T extends _be_opts_T {
	owner?:object
}
export type rc_be_unsubscribe_T = ()=>void
export interface RcBe_return_T<Output extends unknown = unknown> {
	value:Output
	destroy:rc_be_unsubscribe_T
}
export type RcBe<Output extends unknown = unknown, Ctx extends object = object> =
	(ctx:Ctx, opts?:_be_opts_T)=>RcBe_return_T<Output>
export type RcB<Output extends unknown = unknown, Ctx extends object = object> = RcBe<Output, Ctx>
export {
	_rc_be as _rc_b
}
