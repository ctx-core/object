import { assign_fn_key_a } from './assign_fn_key_a';
import { clone } from './clone';
/**
 * Assigns to cloned obj array of keys the return value of function in key_a_fn_a2.
 */
export function clone_assign_fn_key_a(obj, ...key_a_fn_a2) {
    return assign_fn_key_a(clone(obj), ...key_a_fn_a2);
}
export { clone_assign_fn_key_a as clone_assign_fn_key_a1, clone_assign_fn_key_a as clone__assign__key_a1__fn, };
//# sourceMappingURL=src/clone_assign_fn_key_a.js.map