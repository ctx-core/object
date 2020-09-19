export declare const global_ctx: object;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export declare function _be<O extends object>(key: string | symbol, _val: (ctx?: object, key?: (string | symbol), opts?: _be_opts_type) => (void | O)): (ctx?: object, opts?: _be_opts_type) => O;
export declare const _b: typeof _be;
export declare type Be<O> = (ctx: object, opts?: _be_opts_type) => O;
export declare type B<O> = Be<O>;
export declare type _be_opts_type = {
    force?: boolean;
};
