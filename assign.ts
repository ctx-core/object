/**
 * Object.assign
 */
export function assign<I = object>(obj: I, ...arg_a1:Partial<I>[]) {
	return Object.assign(obj as unknown as object, ...arg_a1) as I
}
