/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export function _obj_key_hash(obj, key) {
	const obj_key_hash = {}
	for (let attr_key in obj) {
		obj_key_hash[attr_key] = (obj[attr_key] && obj[attr_key])[key]
	}
	return obj_key_hash
}
export const _hash__key__obj = _obj_key_hash
