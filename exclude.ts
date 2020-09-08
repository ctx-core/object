/**
 * Exclude keys from obj
 */
export function exclude(obj, ...key_a1) {
	if (!obj) return
	const out = {}
	const exclude = new Set(key_a1)
	for (let key in obj) {
		if (!exclude.has(key)) {
			out[key] = obj[key]
		}
	}
	return out
}
