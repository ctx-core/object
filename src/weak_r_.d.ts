import type { keyof_T } from './keyof_T.js'
declare const add_strong_sym:unique symbol
declare const delete_strong_sym:unique symbol
export declare function weak_r_<Ctx extends object = object>(back_ctx?:{}):Ctx;
export declare function ref_strong<Ctx extends weak_r_T>(ctx:Ctx, prop:keyof_T):void;
export declare function set_strong<Ctx extends weak_r_T, Val extends unknown = unknown>(ctx:Ctx, prop:keyof_T, val:Val):void;
export declare function ref_weak<Ctx extends weak_r_T>(ctx:Ctx, prop:keyof_T):void;
export declare function unset_weak<Ctx extends weak_r_T>(ctx:Ctx, prop:keyof_T):void;
export interface weak_r_T {
	[add_strong_sym](prop:keyof_T, key?:any):void;
	[delete_strong_sym](prop:keyof_T):void;
}
export { weak_r_ as weak_ctx_, }
