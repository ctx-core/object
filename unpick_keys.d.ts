/**
 * Does not include keys on `keys_o` from `rec`
 */
export declare function unpick_keys<I extends unknown = unknown>(rec: Record<string, I>, keys_o: Record<string, unknown>): Record<string, I>;
export { unpick_keys as unpick__keys };
