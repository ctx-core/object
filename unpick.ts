import { keys } from './keys'
/**
 * Does not include `key_a1` from `obj`
 */
export function unpick<T = unknown>(obj: T, ...key_a1: string[]) {
	if (!obj) return
	let memo = {} as T
	const obj_key_a1 = keys(obj)
	for (let i = 0; i < obj_key_a1.length; i++) {
		const key = obj_key_a1[i]
		if (key_a1.indexOf(key) === -1) (memo as any)[key] = (obj as any)[key] as T[keyof T]
	}
	return memo
}
