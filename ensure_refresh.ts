/**
 * `ensure` `obj[key]` is present or call `ensure(obj)`. Then call `refresh(obj, obj[key])`.
 */
import { clone } from './clone'
export function ensure_refresh<T = unknown>(obj:ensure_refresh_obj_type<T>, ...refresh_ctx_a1:refresh_ctx_type<T>[]) {
	if (!obj) return
	const refresh_ctx = clone(...refresh_ctx_a1)
	const {
		key, ensure, refresh
	} = refresh_ctx
	if (!obj[key]) {
		obj[key] = ensure(obj)
	}
	refresh(obj, obj[key])
	return obj[key]
}
export const ensure__refresh = ensure_refresh
export type refresh_ctx_type<T> = {
	key:string
	ensure:(obj:ensure_refresh_obj_type<T>)=>T
	refresh: (obj:ensure_refresh_obj_type<T>, val: T) => void
}
export type ensure_refresh_obj_type<T> = Record<string, T>
