import type { nullish } from '@ctx-core/function'
/**
 * Returns obj with zipped val_a
 */
export function zip_h_<Val extends unknown = unknown>(
	key_a:string[], val_a?:Val[]
):Record<string, Val|nullish> {
	const zip_h:Record<string, Val|nullish> = {}
	if (key_a) {
		for (let i = 0; i < key_a.length; i++) {
			zip_h[key_a[i]] = val_a?.[i]
		}
	}
	return zip_h
}
export {
	zip_h_ as zip_ctx_,
	zip_h_ as _zip_ctx,
	zip_h_ as _ctx__zip,
}
