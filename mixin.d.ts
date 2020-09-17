/**
 * Mixin properties from source_a1 into target
 * @example
 * mixin(obj, {
 *		get foo() {
 *			return 'bar'
 *		}
 *	})
 */
export declare function mixin<T = unknown, S = T>(target: T, ...source_a1: S[]): T;
