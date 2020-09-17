export declare function ensure_refresh<T = unknown>(obj: ensure_refresh_obj_type<T>, ...refresh_ctx_a1: refresh_ctx_type<T>[]): T;
export declare const ensure__refresh: typeof ensure_refresh;
export declare type refresh_ctx_type<T> = {
    key: string;
    ensure: (obj: ensure_refresh_obj_type<T>) => T;
    refresh: (obj: ensure_refresh_obj_type<T>, val: T) => void;
};
export declare type ensure_refresh_obj_type<T> = Record<string, T>;
