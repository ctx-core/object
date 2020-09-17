/**
 * Assigns function calls into obj
 */
export declare function call_assign<T = unknown>(obj: T, ...assign_fn_h_a1: Record<string, assign_fn_type<T>>[]): T;
export declare const assign__call: typeof call_assign;
export declare type assign_fn_type<T = unknown> = (value: T[keyof T], obj?: T, key?: string) => T[keyof T];
