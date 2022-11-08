/**
 * Ensures that the keys in `rest_ctx_a` are added to obj
 *   only if the key is not defined on obj (== null).
 * The order of precedence is from left to right.
 * @example
 * obj = {baz: 99}
 * ensure(obj, {foo: 1, baz: 4}, {foo: 2, bar: 3}) // {baz:99, foo: 1, bar: 3}
 */
export declare function ensure<I extends unknown = unknown>(obj:I, ...rest_ctx_a:Partial<I>[]):I|undefined
