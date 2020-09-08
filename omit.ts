/**
 * New `obj` without `key_a1` keys.
 */
export function omit(obj, ...key_a1:string[]) {
	if (!obj) return
	let memo = {}
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if (!(key in obj)) {
			memo[key] = obj[key]
		}
	}
	return memo
}
