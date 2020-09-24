/**
 * Does not include keys on `keys_o` from `rec`
 */
export declare function unpick_keys<I extends unknown>(rec: Record<string, I>, keys_o: Record<string, unknown>): Record<string, I>;
export declare const unpick__keys: typeof unpick_keys;
