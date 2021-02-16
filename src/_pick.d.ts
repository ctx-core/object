/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a1`
 */
export declare function _pick<I extends object = object>(...in_key_a1: string[]): (obj: I, ...fn_key_a1: string[]) => Partial<I>;
