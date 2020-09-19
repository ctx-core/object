import type { assign_fn_type } from './call_assign';
/**
 * Assigns to obj array of keys the return value of function in key_a1_fn_a2.
 */
export declare function assign_fn_key_a1<I>(obj: Record<string, I>, ...key_a1_fn_a2: fn_key_a1_tuple_type<I>[]): Record<string, I>;
export declare const assign__key_a1__fn: typeof assign_fn_key_a1;
export declare type fn_key_a1_tuple_type<I> = [string[], assign_fn_type<I>];
