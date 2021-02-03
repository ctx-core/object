import type { assign_fn_type } from './call_assign';
/**
 * Assigns to obj array of keys the return value of function in key_a1_fn_a2.
 */
export declare function assign_fn_key_a1<I extends unknown = unknown>(obj: Record<string, I>, ...key_a1_fn_a2: fn_key_a1_tuple_type<I>[]): Record<string, I>;
export declare type fn_key_a1_tuple_type<I> = [string[], assign_fn_type<I>];
export { assign_fn_key_a1 as assign__key_a1__fn };