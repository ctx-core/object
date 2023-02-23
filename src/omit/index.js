/**
 * New `obj` without `key_a` keys.
 * @param {object}obj
 * @param {string}key_a
 * @returns {object|undefined}
 */
export function omit(obj, ...key_a) {
	if (!obj) return
	let memo = {}
	for (const key in obj) {
		if (!~key_a.indexOf(key)) {
			memo[key] = obj[key]
		}
	}
	return memo
}
