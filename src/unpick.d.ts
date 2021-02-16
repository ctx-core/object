/**
 * Does not include `key_a1` from `obj`
 */
export declare function unpick<I extends object = object>(obj: I, ...key_a1: string[]): Partial<I>;
export declare function maybe_unpick<I extends object = object>(obj: I, ...key_a1: string[]): void | Partial<I>;
