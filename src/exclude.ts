/**
 * Exclude keys from obj
 */
export function exclude<I extends unknown = unknown, O = I>(obj: I, ...key_: string[]) {
	if (!obj) return
	const out = {} as O
	const exclude = new Set(key_)
	for (let key in obj) {
		if (!exclude.has(key)) {
			(out as any)[key] = obj[key]
		}
	}
	return out
}
