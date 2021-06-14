/**
 * Mixin properties from source_a into target
 * @example
 * mixin(obj, {
 *		get foo() {
 *			return 'bar'
 *		}
 *	})
 */
export declare function mixin<I extends unknown = unknown, O = I>(target: I, ...source_a: O[]): I;
