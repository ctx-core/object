/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export function map_obj<In extends unknown = unknown, Out = In>(
	in_obj:Record<string, In>,
	fn:map_obj_fn_T<In, Out>
) {
	const obj = {} as Record<string, unknown>
	for (let key in in_obj) {
		obj[key] = fn(in_obj[key] as In, key) as Out|null
	}
	return obj as Record<string, Out|null>
}
export type map_obj_fn_T<Val extends unknown = unknown, Out = Val> =
	(in_obj:Val, key:string)=>Out
export {
	map_obj as map__obj
}
