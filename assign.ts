/**
 * Object.assign
 */
export function assign<I extends object = object>(obj: I, ...arg_a1:unknown[]) {
	return Object.assign(obj, ...arg_a1) as I
}
