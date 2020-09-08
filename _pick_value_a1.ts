/**
 * Returns an array of objects with [pick](#pick) applied.
 */
export function _pick_value_a1(obj, ...key_a1) {
	if (!obj) return
	let value_a1 = []
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		value_a1.push(obj[key])
	}
	return value_a1
}
export const _a1__value__pick = _pick_value_a1
