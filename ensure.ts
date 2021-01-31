import { keys } from './keys'
/**
 * Ensures that the keys in `rest_ctx_a1` are added to obj
 *   only if the key is not defined on obj (== null).
 * The order of precedence is from left to right.
 * @example
 * obj = {baz: 99}
 * ensure(obj, {foo: 1, baz: 4}, {foo: 2, bar: 3}) // {baz:99, foo: 1, bar: 3}
 */
export function ensure<I extends unknown = unknown>(obj: I, ...rest_ctx_a1: Partial<I>[]) {
	if (!obj) return
	for (let i = 0; i < rest_ctx_a1.length; i++) {
		const rest = rest_ctx_a1[i]
		const rest_ctx_key_a1 = keys(rest || {})
		for (let j = 0; j < rest_ctx_key_a1.length; j++) {
			const key = rest_ctx_key_a1[j]
			if ((obj as any)[key] == null) {
				(obj as any)[key] = (rest as any)[key]
			}
		}
	}
	return obj
}
