/**
 * Exclude keys from obj
 */
export function exclude<I = unknown, O = I>(obj: I, ...key_a1: string[]) {
	if (!obj) return
	const out = {} as O
	const exclude = new Set(key_a1)
	for (let key in obj) {
		if (!exclude.has(key)) {
			(out as any)[key] = obj[key]
		}
	}
	return out
}
