/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export function map_obj<I = unknown, O = I>(in_obj:Record<string, I>, fn:map_obj_fn_type<I, O>) {
	const obj = {} as O
	for (let key in in_obj) {
		obj[key] = fn(in_obj[key] as I, key)
	}
	return obj
}
export const map__obj = map_obj
export type map_obj_obj_type<O = unknown> = Record<string, O>
export type map_obj_fn_type<I = unknown, O = I> = (in_obj: I, key: string)=>O
