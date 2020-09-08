/**
 * Returns obj with  zipped value_a1
 */
export function _zip_ctx(key_a1, value_a1) {
	const ctx__zip = {}
	if (key_a1) {
		for (let i = 0; i < key_a1.length; i++) {
			ctx__zip[key_a1[i]] = value_a1 && value_a1[i]
		}
	}
	return ctx__zip
}
export const _ctx__zip = _zip_ctx
