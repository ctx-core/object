/**
 * Sets obj values to false when `== null`.
 */
export function if_null_set_false(obj, ...key_a1) {
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if (obj[key] == null) obj[key] = false
	}
	return obj
}
export const set__false__if__null = if_null_set_false
