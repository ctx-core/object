/**
 * Assigns function calls into obj
 */
export declare function call_assign<I extends unknown = unknown>(obj: Record<string, I>, ...assign_fn_h_a1: Record<string, assign_fn_type<I>>[]): Record<string, I>;
export declare type assign_fn_type<I extends unknown = unknown> = (value: I, obj?: Record<string, I>, key?: string) => I;
export { call_assign as assign__call };
