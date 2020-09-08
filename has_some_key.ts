/**
 * Returns true if obj has at least 1 key
 */
export function has_some_key(obj) {
	for (let _ in obj) {
		return true
	}
	return false
}
export const has__some__key = has_some_key
