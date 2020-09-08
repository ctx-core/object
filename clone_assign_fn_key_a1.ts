import { assign_fn_key_a1, fn_key_a1_tuple_type } from './assign_fn_key_a1'
import { clone } from './clone'
/**
 * Assigns to cloned obj array of keys the return value of function in key_a1_fn_a2.
 */
export function clone_assign_fn_key_a1(obj, ...key_a1_fn_a2:fn_key_a1_tuple_type[]) {
	return assign_fn_key_a1(clone(obj), ...key_a1_fn_a2)
}
export const clone__assign__key_a1__fn = clone_assign_fn_key_a1
