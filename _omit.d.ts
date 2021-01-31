/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a1`
 */
export declare function _omit<T extends unknown = unknown>(...in_key_a1: string[]): (obj: T, ...fn_key_a1: string[]) => T | undefined;
