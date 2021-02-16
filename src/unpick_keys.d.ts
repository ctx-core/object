/**
 * Does not include keys on `keys_obj` from `rec`
 */
export declare function unpick_keys<I extends object = object, KEYS_OBJ extends object = object>(rec: I, keys_obj: KEYS_OBJ): Partial<I>;
export { unpick_keys as unpick__keys };
