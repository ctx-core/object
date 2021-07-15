import { clone } from './clone.js'
/**
 * `ensure` `obj[key]` is present or call `ensure(obj)`. Then call `refresh(obj, obj[key])`.
 */
export function ensure_refresh<I extends unknown = unknown>(
	obj:ensure_refresh_obj_type<I>, ...refresh_ctx_a:refresh_ctx_T<I>[]
) {
	if (!obj) return
	const refresh_ctx = clone(...refresh_ctx_a)
	const {
		key, ensure, refresh
	} = refresh_ctx
	if (!obj[key]) {
		obj[key] = ensure(obj)
	}
	refresh(obj, obj[key])
	return obj[key]
}
export interface refresh_ctx_T<T> {
	key:string
	ensure:(obj:ensure_refresh_obj_type<T>)=>T
	refresh:(obj:ensure_refresh_obj_type<T>, val:T)=>void
}
export interface ensure_refresh_obj_type<T> extends Record<string, T> {}
export {
	ensure_refresh as ensure__refresh
}
