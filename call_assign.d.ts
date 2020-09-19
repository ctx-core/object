/**
 * Assigns function calls into obj
 */
export declare function call_assign<I>(obj: Record<string, I>, ...assign_fn_h_a1: Record<string, assign_fn_type<I>>[]): Record<string, I>;
export declare const assign__call: typeof call_assign;
export declare type assign_fn_type<I> = (value: I, obj?: Record<string, I>, key?: string) => I;
