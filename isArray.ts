export const native_isArray = Array.isArray
/**
 * Is the argument an Array?
 */
export function isArray(obj: unknown) {
	return native_isArray ? native_isArray(obj) : toString.call(obj) === '[object Array]'
}
