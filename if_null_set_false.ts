/**
 * Sets obj values to false when `== null`.
 */
export function if_null_set_false<T = unknown>(obj: T, ...key_a1: string[]) {
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if ((obj as any)[key] == null) (obj as any)[key] = false
	}
	return obj
}
export const set__false__if__null = if_null_set_false
