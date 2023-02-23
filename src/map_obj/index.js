/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 * @param {object}in_obj
 * @param {import('./index.d.ts').map_obj_fn_T}fn
 * @returns {object}
 */
export function map_obj(in_obj, fn) {
	const obj = {}
	for (let key in in_obj) {
		obj[key] = fn(in_obj[key], key)
	}
	return obj
}
export { map_obj as map__obj }
