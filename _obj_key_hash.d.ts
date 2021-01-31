/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export declare function _obj_key_hash<T extends unknown = unknown>(obj: T, key: string): Record<string, T[keyof T]>;
export { _obj_key_hash as _hash__key__obj };
