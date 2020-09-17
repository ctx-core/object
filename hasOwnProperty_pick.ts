/**
 * Returns object with picked values,
 * not including including inherited property values (i.e. if hasOwnProperty is false).
 */
export function hasOwnProperty_pick<T = unknown, M = T>(obj: T, ...key_a1: string[]) {
	if (!obj) return
	let memo = {} as M
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if ((obj as any).hasOwnProperty(key)) (memo as any)[key] = (obj as any)[key]
	}
	return memo
}
export const pick__hasOwnProperty = hasOwnProperty_pick
