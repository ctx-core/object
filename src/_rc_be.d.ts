import { _be_opts_T } from './_be';
export declare const rc_set_h_symbol: unique symbol;
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export declare function _rc_be<Output extends unknown = unknown, Ctx extends object = object>(key: string | symbol, _val: (this: _val_this_T, ctx: Ctx, key: (string | symbol), opts?: _rc_be_opts_T) => (void | Output)): RcBe<Output, Ctx>;
export declare type _val_this_on_destroy_T = (...destroy_a1: rc_be_destroy_T[]) => void;
export interface _val_this_T {
    on_destroy: _val_this_on_destroy_T;
    onDestroy: _val_this_on_destroy_T;
}
export interface _rc_be_opts_T extends _be_opts_T {
    owner?: object;
}
export declare type rc_be_destroy_T = () => void;
export interface RcBe_return_T<Output extends unknown = unknown> {
    value: Output;
    destroy: rc_be_destroy_T;
}
export declare type RcBe<Output extends unknown = unknown, Ctx extends object = object> = (ctx: Ctx, opts?: _be_opts_T) => RcBe_return_T<Output>;
export declare type RcB<Output extends unknown = unknown, Ctx extends object = object> = RcBe<Output, Ctx>;
export { _rc_be as _rc_b };
