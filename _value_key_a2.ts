/**
 * Returns Array of `[value, key]` in `obj`
 */
export function _value_key_a2(obj) {
	const value_key_a2 = []
	for (let key in obj) {
		value_key_a2.push([obj[key], key])
	}
	return value_key_a2
}
export const _a2__key__value = _value_key_a2
