/**
 * Returns boolean of `obj` is an object
 */
export function isObject(obj: unknown) {
	return !!(obj && toString.call(obj) === '[object Object]')
}
export const _is_Object = isObject
export const _is__Object = isObject
