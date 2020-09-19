import type { maybe_undefined } from '@ctx-core/function'
/**
 * New `obj` with only `key_a1` keys.
 */
export function pick<I>(obj:I, ...key_a1:string[]) {
	let memo = {} as I
	for (let i = 0; i < key_a1.length; i++) {
		const key = key_a1[i]
		if (key in obj) {
			(memo as any)[key] = (obj as any)[key]
		}
	}
	return memo
}
export function maybe_pick<I>(obj:I, ...key_a1:string[]): maybe_undefined<I> {
	if (!obj) return
	return pick<I>(obj, ...key_a1)
}
