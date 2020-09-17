import type { assign_fn_type } from './call_assign'
/**
 * Assigns to obj array of keys the return value of function in key_a1_fn_a2.
 */
export function assign_fn_key_a1<T = unknown>(obj: T, ...key_a1_fn_a2:fn_key_a1_tuple_type<T>[]) {
	for (let i = 0; i < key_a1_fn_a2.length; i++) {
		const [key_a1, fn] = key_a1_fn_a2[i]
		for (let j = 0; j < key_a1.length; j += 1) {
			const key = key_a1[j]
			obj[key] = fn(obj[key], obj, key)
		}
	}
	return obj
}
export const assign__key_a1__fn = assign_fn_key_a1
export type fn_key_a1_tuple_type<T = unknown> = [string[], assign_fn_type<T>]
