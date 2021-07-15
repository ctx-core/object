/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export function obj_key_r_</*@formatter:off*/
	T extends unknown = unknown
/*@formatter:on*/>(obj:T, key:string) {
	const obj_key_hash = {} as Record<string, T[keyof T]>
	for (let attr_key in obj) {
		obj_key_hash[attr_key] = ((obj as any)[attr_key] && (obj as any)[attr_key])[key]
	}
	return obj_key_hash
}
export {
	obj_key_r_ as obj_key_h_,
	obj_key_r_ as _obj_key_hash,
	obj_key_r_ as _hash__key__obj,
}
