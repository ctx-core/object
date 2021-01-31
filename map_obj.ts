/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export function map_obj<I extends unknown = unknown, O = I>(
	in_obj:Record<string, I>,
	fn:map_obj_fn_type<I, O>
) {
	const obj = {} as Record<string, unknown>
	for (let key in in_obj) {
		obj[key] = fn(in_obj[key] as I, key)
	}
	return obj as O
}
export interface map_obj_obj_type<O = unknown> extends Record<string, O> {}
export type map_obj_fn_type<I, O = unknown> = (in_obj: I, key: string)=>O
export {
	map_obj as map__obj
}
