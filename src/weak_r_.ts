import { assign } from './assign.js'
import type { keyof_T } from './keyof_T.js'
const { get } = Reflect
const add_strong_sym = Symbol('add_strong')
const delete_strong_sym = Symbol('delete_strong')
export function weak_r_<Ctx extends object = object>(back_ctx = {}):Ctx {
	const strong_set = new Set<string|symbol>()
	assign(back_ctx, {
		[add_strong_sym](key:string|symbol):void {
			strong_set.add(key)
		},
		[delete_strong_sym](key:string|symbol):void {
			strong_set.delete(key)
		}
	})
	if (typeof window === 'undefined' || typeof window.WeakRef !== 'undefined') {
		const proxy_ctx = new Proxy(back_ctx, {
			getOwnPropertyDescriptor(back_ctx, prop) {
				let value = get(back_ctx, prop)
				if (value?.deref && !strong_set.has(prop)) {
					value = value.deref()
				}
				return (
					value === undefined
					? undefined
					: {
							configurable: true,
							enumerable: true,
							value,
							writable: true,
						}
				)
			},
			get(back_ctx, prop) {
				const uw_val = get(back_ctx, prop)
				return (
					(uw_val?.deref && !strong_set.has(prop))
					? uw_val.deref()
					: uw_val
				)
			},
			set(back_ctx, prop, val) {
				const t = typeof val
				assign(back_ctx, {
					[prop]:
						(t === 'object' || t === 'function') && !strong_set.has(prop)
						? new WeakRef(val)
						: val
				})
				return true
			}
		}) as Ctx
		return proxy_ctx
	}
	return back_ctx as Ctx
}
export function ref_strong<Ctx extends weak_r_T>(
	ctx:Ctx, prop:keyof_T
):void {
	ctx[add_strong_sym](prop)
}
export function set_strong<Ctx extends weak_r_T, Val extends unknown = unknown>(
	ctx:Ctx, prop:keyof_T, val:Val
):void {
  ref_strong<Ctx>(ctx, prop)
	if (val !== undefined) {
		assign(ctx, { [prop]: val })
	}
}
export function ref_weak<Ctx extends weak_r_T>(
	ctx:Ctx, prop:keyof_T
):void {
	ctx[delete_strong_sym](prop)
}
export function unset_weak<Ctx extends weak_r_T>(
	ctx:Ctx, prop:keyof_T
):void {
  ref_weak<Ctx>(ctx, prop)
	delete (ctx as any)[prop]
}
export interface weak_r_T {
	[add_strong_sym](prop:keyof_T, key?:any):void
	[delete_strong_sym](prop:keyof_T):void
}
export {
	weak_r_ as weak_ctx_,
}
