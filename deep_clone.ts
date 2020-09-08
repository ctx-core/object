/**
 * Performs a deep clone of the value
 * @returns {*}
 */
export function deep_clone(obj: any) {
	if (obj === undefined) return obj
	return JSON.parse(JSON.stringify(obj))
}
export const clone__deep = deep_clone
