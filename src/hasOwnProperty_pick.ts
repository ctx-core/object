/**
 * Returns object with picked values,
 * not including including inherited property values (i.e. if hasOwnProperty is false).
 */
export function hasOwnProperty_pick<I extends unknown = unknown, O = I>(obj: I, ...key_a: string[]) {
	if (!obj) return
	let memo = {} as O
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		if ((obj as any).hasOwnProperty(key)) (memo as any)[key] = (obj as any)[key]
	}
	return memo
}
export {
	hasOwnProperty_pick as pick__hasOwnProperty
}
