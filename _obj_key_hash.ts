/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export function _obj_key_hash<T = unknown>(obj: T, key: string) {
	const obj_key_hash = {} as Record<string, T[keyof T]>
	for (let attr_key in obj) {
		obj_key_hash[attr_key] = ((obj as any)[attr_key] && (obj as any)[attr_key])[key]
	}
	return obj_key_hash
}
export const _hash__key__obj = _obj_key_hash
