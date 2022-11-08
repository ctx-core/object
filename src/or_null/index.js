/**
 * return the `value` if not null or `or_value`
 */
export function or_null(opts = {}) {
	const { value, or_value, nor_value } = opts
	return value == null ? or_value : nor_value || value
}
export { or_null as or__null }
