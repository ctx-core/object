/**
 * Returns obj with  zipped value_a1
 */
export function zip_ctx_<T extends unknown = unknown>(key_: string[], value_a1?: T[keyof T][]) {
	const zip_ctx = {} as T
	if (key_) {
		for (let i = 0; i < key_.length; i++) {
			(zip_ctx as any)[key_[i]] = value_a1 && value_a1[i]
		}
	}
	return zip_ctx
}
export {
	zip_ctx_ as _zip_ctx,
	zip_ctx_ as _ctx__zip,
}
