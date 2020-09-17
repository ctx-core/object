/**
 * Returns the obj with default values. If `obj[key] == null`, use `default[key]`
 */
export declare function defaults<T = unknown>(obj: T, ...defaults_a1: Partial<T>[]): T;
