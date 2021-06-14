import type { be_opts_T } from './be_';
export declare const rc_set_h_symbol: unique symbol;
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export declare function rc_be_</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>>(key: Key, val_: rc_be__val__T<Ctx, Key, Out>): (ctx: Ctx, opts?: rc_be_opts_T) => RcBe_return_T<Out>;
export declare type set_h_symbol_T = Record<string | symbol, Set<any>>;
export declare type val__this_on_destroy_T = (...destroy_a: rc_be_destroy_T[]) => void;
export interface val__this_T {
    on_destroy: val__this_on_destroy_T;
    onDestroy: val__this_on_destroy_T;
}
export interface rc_be_opts_T extends be_opts_T {
    owner?: object;
}
export declare type rc_be__val__T</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = (this: val__this_T, ctx: Ctx, key: Key, opts?: rc_be_opts_T) => Out;
export declare type rc_be_destroy_T = () => void;
export interface RcBe_return_T<Out extends unknown = unknown> {
    value: Out;
    destroy: rc_be_destroy_T;
}
export declare type RcBe</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = (ctx: Ctx, opts?: be_opts_T) => RcBe_return_T<Out>;
export declare type RcB</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>> = RcBe<Ctx, Key, Out>;
export { rc_be_ as _rc_be, rc_be_ as _rc_b, };
