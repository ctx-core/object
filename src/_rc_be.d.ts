import { _be_opts_T } from './_be';
export declare const rc_set_h_symbol: unique symbol;
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export declare function _rc_be<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx>(key: Key, _val: (this: _val_this_T, ctx: Ctx, key: Key, opts?: _rc_be_opts_T) => (void | Ctx[Key])): RcBe<Ctx, Key>;
export declare type set_h_symbol_T = Record<string | symbol, Set<any>>;
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
export declare type RcBe<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> = (ctx: Ctx, opts?: _be_opts_T) => RcBe_return_T<Ctx[Key]>;
export declare type RcB<Ctx extends object = object, Key extends keyof Ctx = keyof Ctx> = RcBe<Ctx, Key>;
export { _rc_be as _rc_b };
