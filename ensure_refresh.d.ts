/**
 * `ensure` `obj[key]` is present or call `ensure(obj)`. Then call `refresh(obj, obj[key])`.
 */
export declare function ensure_refresh<T = unknown>(obj: ensure_refresh_obj_type<T>, ...refresh_ctx_a1: refresh_ctx_type<T>[]): T | undefined;
export interface refresh_ctx_type<T> {
    key: string;
    ensure: (obj: ensure_refresh_obj_type<T>) => T;
    refresh: (obj: ensure_refresh_obj_type<T>, val: T) => void;
}
export interface ensure_refresh_obj_type<T> extends Record<string, T> {
}
export { ensure_refresh as ensure__refresh };
