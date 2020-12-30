export declare const pending_symbol: unique symbol;
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export declare function _be<O extends unknown = unknown, C extends object = object>(key: string | symbol, _val: (ctx: C, key: (string | symbol), opts?: _be_opts_type) => (void | O)): be_type<O, C>;
export declare type Be<O> = (ctx: object, opts?: _be_opts_type) => O;
export interface _be_opts_type {
    force?: boolean;
}
export declare type B<O> = Be<O>;
export declare type be_type<O extends unknown = unknown, C extends object = object> = (ctx: C, opts?: _be_opts_type) => O;
export { _be as _b, };
