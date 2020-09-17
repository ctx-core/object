/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export declare function _obj_key_hash<T = unknown>(obj: T, key: string): Record<string, T[keyof T]>;
export declare const _hash__key__obj: typeof _obj_key_hash;
