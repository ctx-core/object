import type { assign_fn_type } from './call_assign'
/**
 * Assigns to obj array of keys the return value of function in key_a1_fn_a2.
 */
export function assign_fn_key_a1<I extends unknown = unknown>(
	obj:Record<string, I>,
	...key_a1_fn_a2:fn_key_a1_tuple_type<I>[]
) {
	for (let i = 0; i < key_a1_fn_a2.length; i++) {
		const [key_a1, fn] = key_a1_fn_a2[i]
		for (let j = 0; j < key_a1.length; j += 1) {
			const key = key_a1[j]
			obj[key] = fn(obj[key], obj, key)
		}
	}
	return obj
}
export type fn_key_a1_tuple_type<I> = [string[], assign_fn_type<I>]
export {
	assign_fn_key_a1 as assign__key_a1__fn
}
