/**
 * New `obj` without `key_a1` keys.
 */
export function omit<I extends unknown = unknown>(obj:I, ...key_a1:string[]) {
	if (!obj) return
	let memo = {} as I
	for (const key in obj) {
		if (!~key_a1.indexOf(key)) {
			memo[key] = obj[key]
		}
	}
	return memo
}
