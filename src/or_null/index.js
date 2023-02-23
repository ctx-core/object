/**
 * return the `value` if not null or `or_value`
 * @param {import('./index.d.ts').or_null__opts_T}opts
 * @returns {unknown}
 */
export function or_null(opts = {}) {
	const { value, or_value, nor_value } = opts
	return value == null ? or_value : nor_value || value
}
export { or_null as or__null }
