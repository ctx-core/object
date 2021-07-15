import { keys } from './keys.js'
/**
 * Ensures that the keys in `rest_ctx_a` are added to obj
 *   only if the key is not defined on obj (== null).
 * The order of precedence is from left to right.
 * @example
 * obj = {baz: 99}
 * ensure(obj, {foo: 1, baz: 4}, {foo: 2, bar: 3}) // {baz:99, foo: 1, bar: 3}
 */
export function ensure<I extends unknown = unknown>(obj: I, ...rest_ctx_a: Partial<I>[]) {
	if (!obj) return
	for (let i = 0; i < rest_ctx_a.length; i++) {
		const rest = rest_ctx_a[i]
		const rest_ctx_key_a = keys(rest || {})
		for (let j = 0; j < rest_ctx_key_a.length; j++) {
			const key = rest_ctx_key_a[j]
			if ((obj as any)[key] == null) {
				(obj as any)[key] = (rest as any)[key]
			}
		}
	}
	return obj
}
