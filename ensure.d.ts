/**
 * Ensures that the keys in `rest_ctx_a1` are added to obj
 *   only if the key is not defined on obj (== null).
 * The order of precedence is from left to right.
 * @example
 * obj = {baz: 99}
 * ensure(obj, {foo: 1, baz: 4}, {foo: 2, bar: 3}) // {baz:99, foo: 1, bar: 3}
 */
export declare function ensure<T = unknown>(obj: T, ...rest_ctx_a1: Partial<T>[]): T | undefined;
