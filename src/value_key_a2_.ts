/**
 * Returns Array of `[value, key]` in `obj`
 */
export function value_key_a2_<I extends unknown = unknown>(obj:I) {
	const value_key_a2 = [] as [I[keyof I], string][]
	for (let key in obj) {
		value_key_a2.push([obj[key], key])
	}
	return value_key_a2
}
export {
	value_key_a2_ as _a2__key__value
}
