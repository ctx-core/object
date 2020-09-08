/**
 * `ensure` `obj[key]` is present or call `ctx__refresh.init`. Then call `ctx__refresh.refresh`.
 *
 * - if `!obj[key]` `ctx__refresh.ensure(obj)`
 * - `a1__ctx__refresh.refresh(obj, obj[key])`
 */
import { clone } from './clone'
export function ensure_refresh<T = any>(obj:ensure_refresh_obj_type<T>, ...refresh_ctx_a1:refresh_ctx_type<T>[]) {
	if (!obj) return
	const ctx__refresh = clone(...refresh_ctx_a1)
	const {
		key, ensure, refresh
	} = ctx__refresh
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
}
export type ensure_refresh_obj_type<T> = Record<string, T>
