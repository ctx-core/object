/**
 * Returns object with picked values,
 * not including including inherited property values (i.e. if hasOwnProperty is false).
 */
export function hasOwnProperty_pick(obj, ...key_a) {
	if (!obj) return
	let memo = {}
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		if (obj.hasOwnProperty(key)) memo[key] = obj[key]
	}
	return memo
}
export { hasOwnProperty_pick as pick__hasOwnProperty }
