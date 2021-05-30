/**
 * New `obj` with only `key_` keys.
 */
export function pick<I extends object = object>(obj:I, ...key_:string[]):Partial<I> {
	const memo = {} as Partial<I>
	for (let i = 0; i < key_.length; i++) {
		const key = key_[i]
		if (key in obj) {
			(memo as any)[key] = (obj as any)[key]
		}
	}
	return memo
}
export function maybe_pick<I extends object = object>(obj:I, ...key_:string[]):void|Partial<I> {
	if (!obj) return
	return pick<I>(obj, ...key_)
}
