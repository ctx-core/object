/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export declare function map_obj<I extends unknown = unknown, O = I>(in_obj: Record<string, I>, fn: map_obj_fn_type<I, O>): O;
export interface map_obj_obj_type<O = unknown> extends Record<string, O> {
}
export declare type map_obj_fn_type<I, O = unknown> = (in_obj: I, key: string) => O;
export { map_obj as map__obj };
