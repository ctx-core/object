/**
 * Performs a deep clone of the value
 * @returns {*}
 */
export function deep_clone(obj: unknown) {
	if (obj === undefined) return obj
	return JSON.parse(JSON.stringify(obj))
}
export const clone__deep = deep_clone
