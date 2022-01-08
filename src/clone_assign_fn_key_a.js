import { assign_fn_key_a } from './assign_fn_key_a.js'
import { clone } from './clone.js'
/**
 * Assigns to cloned obj array of keys the return value of function in key_a_fn_aa.
 */ export function clone_assign_fn_key_a(obj, ...key_a_fn_aa) {
	return assign_fn_key_a(clone(obj), ...key_a_fn_aa)
}
export { clone_assign_fn_key_a as clone_assign_fn_key_a1, clone_assign_fn_key_a as clone__assign__key_a1__fn, }

