import type { rc_be__val__T } from './rc_be_';
export declare function rc_be</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>>(ctx: Ctx, key: Key, val_: rc_be__val__T<Ctx, Key, Out>): Out;
export { rc_be as rc_b, };
