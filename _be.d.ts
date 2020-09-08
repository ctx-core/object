export declare const global_ctx: {};
export declare type Be<T> = (ctx?: any, opts?: any) => T;
export declare type B<T> = Be<T>;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 * @param key
 * @param _val
 */
export declare function _be<T>(key: string | symbol, _val: (ctx?: any, key?: (string | symbol), opts?: any) => (void | T)): (ctx?: any, opts?: any) => T;
export declare const _b: typeof _be;