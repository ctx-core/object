/**
 * Returns boolean of `obj` is an object
 * @param obj
 * @returns {*|boolean}
 */
export function isObject(obj) {
	return obj && toString.call(obj) === '[object Object]'
}
export const _is_Object = isObject
export const _is__Object = isObject
