/**
 * New `obj` without `key_a` keys.
 */
export function omit<I extends unknown = unknown>(obj:I, ...key_a:string[]) {
	if (!obj) return
	let memo = {} as I
	for (const key in obj) {
		if (!~key_a.indexOf(key)) {
			memo[key] = obj[key]
		}
	}
	return memo
}
