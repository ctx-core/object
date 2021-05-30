import { assign_fn_key_a, fn_key_a_tuple_T } from './assign_fn_key_a'
import { clone } from './clone'
/**
 * Assigns to cloned obj array of keys the return value of function in key_a1_fn_a2.
 */
export function clone_assign_fn_key_a1<I extends object = object>(
	obj:Record<string, I>,
	...key_a1_fn_a2:fn_key_a_tuple_T<I>[]
) {
	return assign_fn_key_a(clone<Record<string, I>>(obj), ...key_a1_fn_a2)
}
export {
	clone_assign_fn_key_a1 as clone__assign__key_a1__fn
}
