/**
 * Returns obj with keys in `key_a1` having `clear_value`.
 */
export function _clear_ctx<V = unknown>(key_a1: string[], clear_value: V) {
	const clear_ctx = {} as Record<string, V>
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		clear_ctx[key] = clear_value
	}
	return clear_ctx
}
export const _ctx__clear = _clear_ctx
