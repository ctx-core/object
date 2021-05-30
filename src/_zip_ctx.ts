/**
 * Returns obj with  zipped value_a1
 */
export function _zip_ctx<T extends unknown = unknown>(key_: string[], value_a1?: T[keyof T][]) {
	const zip_ctx = {} as T
	if (key_) {
		for (let i = 0; i < key_.length; i++) {
			(zip_ctx as any)[key_[i]] = value_a1 && value_a1[i]
		}
	}
	return zip_ctx
}
export {
	_zip_ctx as _ctx__zip
}
