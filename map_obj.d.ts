/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export declare function map_obj<T = any, U = T>(in_obj: Record<string, T>, fn: map_obj_fn_type<T, U>): U;
export declare const map__obj: typeof map_obj;
export declare type map_obj_obj_type<U = any> = Record<string, U>;
export declare type map_obj_fn_type<T = any, U = T> = (T: any, string: any) => U;
