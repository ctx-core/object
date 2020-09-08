/**
 * Returns obj with keys in `key_a1` having `clear_value`.
 */
export function _clear_ctx(key_a1, clear_value) {
	const ctx__clear = {}
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		ctx__clear[key] = clear_value
	}
	return ctx__clear
}
export const _ctx__clear = _clear_ctx
