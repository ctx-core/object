declare const add_strong_sym: unique symbol;
declare const delete_strong_sym: unique symbol;
export declare function weak_r_<Ctx extends object = object>(back_ctx?: {}): Ctx;
export declare function ref_strong<Ctx extends weak_r_T>(ctx: Ctx, prop: string | symbol): void;
export declare function set_strong<Ctx extends weak_r_T, Val extends unknown = unknown>(ctx: Ctx, prop: string | symbol, val: Val): void;
export declare function ref_weak<Ctx extends weak_r_T>(ctx: Ctx, prop: string | symbol): void;
export declare function unset_weak<Ctx extends weak_r_T>(ctx: Ctx, prop: string | symbol): void;
export interface weak_r_T {
    [add_strong_sym](prop: string | symbol, key?: any): void;
    [delete_strong_sym](prop: string | symbol): void;
}
export { weak_r_ as weak_ctx_, };
