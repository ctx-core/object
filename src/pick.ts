/**
 * New `obj` with only `key_a1` keys.
 */
export function pick<I extends object = object>(obj:I, ...key_a1:string[]):Partial<I> {
	const memo = {} as Partial<I>
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if (key in obj) {
			(memo as any)[key] = (obj as any)[key]
		}
	}
	return memo
}
export function maybe_pick<I extends object = object>(obj:I, ...key_a1:string[]):void|Partial<I> {
	if (!obj) return
	return pick<I>(obj, ...key_a1)
}
