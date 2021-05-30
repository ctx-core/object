/**
 * Returns an array of objects with [pick](#pick) applied.
 */
export function pick_value_a_<I extends unknown = unknown>(obj: Record<string, I>, ...key_: string[]) {
	if (!obj) return
	let value_a = [] as I[]
	for (let i = 0; i < key_.length; i++) {
		const key = key_[i]
		value_a.push(obj[key])
	}
	return value_a
}
export {
	pick_value_a_ as _pick_value_a1,
	pick_value_a_ as _a1__value__pick,
}
