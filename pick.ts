/**
 * New `obj` with only `key_a1` keys.
 */
export function pick<T = unknown>(obj:T, ...key_a1:string[]) {
	if (!obj) return
	let memo = {} as T
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if (key in obj) {
			(memo as any)[key] = (obj as any)[key]
		}
	}
	return memo
}
