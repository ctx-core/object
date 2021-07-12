import { assign_fn_key_a, fn_key_a_tuple_T } from './assign_fn_key_a'
import { clone } from './clone'
/**
 * Assigns to cloned obj array of keys the return value of function in key_a_fn_aa.
 */
export function clone_assign_fn_key_a<I extends object = object>(
	obj:Record<string, I>,
	...key_a_fn_aa:fn_key_a_tuple_T<I>[]
) {
	return assign_fn_key_a(clone<Record<string, I>>(obj), ...key_a_fn_aa)
}
export {
	clone_assign_fn_key_a as clone_assign_fn_key_a1,
	clone_assign_fn_key_a as clone__assign__key_a1__fn,
}
