/**
 * New `obj` with only `key_a1` keys.
 */
export declare function pick<I extends object = object>(obj: I, ...key_a1: string[]): Partial<I>;
export declare function maybe_pick<I extends object = object>(obj: I, ...key_a1: string[]): void | Partial<I>;
