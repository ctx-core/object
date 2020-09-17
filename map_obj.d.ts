/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export declare function map_obj<I = unknown, O = I>(in_obj: Record<string, I>, fn: map_obj_fn_type<I, O>): O;
export declare const map__obj: typeof map_obj;
export declare type map_obj_obj_type<O = unknown> = Record<string, O>;
export declare type map_obj_fn_type<I = unknown, O = I> = (in_obj: I, key: string) => O;
