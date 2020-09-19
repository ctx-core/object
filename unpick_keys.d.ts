/**
 * Does not include keys on `keys_o` from `rec`
 */
export declare function unpick_keys<I>(rec: Record<string, I>, keys_o: Record<string, unknown>): import("@ctx-core/function").maybe<Record<string, I>, import("@ctx-core/function").falsy>;
export declare const unpick__keys: typeof unpick_keys;
