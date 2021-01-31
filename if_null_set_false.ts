/**
 * Sets obj values to false when `== null`.
 */
export function if_null_set_false<I extends unknown = unknown>(obj: I, ...key_a1: string[]) {
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if ((obj as any)[key] == null) (obj as any)[key] = false
	}
	return obj
}
export {
	if_null_set_false as set__false__if__null
}