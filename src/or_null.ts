/**
 * return the `value` if not null or `or_value`
 */
export function or_null(opts:opts_or = {}) {
	const {
		value,
		or_value,
		nor_value
	} = opts
	return value == null ? or_value : (nor_value || value)
}
export interface opts_or {
	value?:any
	or_value?:any
	nor_value?:any
}
export {
	or_null as or__null
}