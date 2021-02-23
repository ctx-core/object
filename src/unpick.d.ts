/**
 * Does not include `key_a1` from `obj`
 */
export declare function unpick<obj_T extends object = object>(obj: obj_T, ...key_a1: string[]): Partial<obj_T>;
export declare function maybe_unpick<I extends object = object>(obj: I, ...key_a1: string[]): void | Partial<I>;
