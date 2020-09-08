/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export function map_obj<T = any, U = T>(in_obj:Record<string, T>, fn:map_obj_fn_type<T, U>) {
	const obj = {}
	for (let key in in_obj) {
		obj[key] = fn(in_obj[key] as T, key)
	}
	return obj as U
}
export const map__obj = map_obj
export type map_obj_obj_type<U = any> = Record<string, U>
export type map_obj_fn_type<T = any, U = T> = (T, string)=>U
