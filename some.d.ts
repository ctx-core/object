import type { maybe } from '@ctx-core/function';
/**
 * Returns true when some of the key/value pairs cause the fn to be truthy.
 * @example
 * some({foo: 9, bar: 10}, (value, key) => value === 10) // returns true
 * some({baz: 11, quux: 12}, (value, key) => value === 10) // returns false
 */
export declare function some<I extends unknown>(obj: Record<string, I>, compare_some: (obj: I, key: string) => unknown): maybe<boolean>;
