import { fn_key_a1_tuple_type } from './assign_fn_key_a1';
/**
 * Assigns to cloned obj array of keys the return value of function in key_a1_fn_a2.
 */
export declare function clone_assign_fn_key_a1<I extends object = object>(obj: Record<string, I>, ...key_a1_fn_a2: fn_key_a1_tuple_type<I>[]): Record<string, I>;
export { clone_assign_fn_key_a1 as clone__assign__key_a1__fn };
