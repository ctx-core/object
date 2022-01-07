/**
 * Returns obj with keys in `key_` having `clear_value`.
 */ export function clear_ctx_(key_, clear_value) {
	const clear_ctx = {}
	for (let i = 0; i < key_.length; i++) {
		const key = key_[i]
		clear_ctx[key] = clear_value
	}
	return clear_ctx
}
export { clear_ctx_ as _clear_ctx, clear_ctx_ as _ctx__clear, }

