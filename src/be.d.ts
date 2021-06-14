import type { be_opts_T } from './be_';
export declare function be</*@formatter:on*/ Ctx extends object = Record<string, unknown>, Key extends keyof Ctx = keyof Ctx, Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>>(ctx: Ctx, key: Key, val_: (ctx: Ctx, key: Key, opts?: be_opts_T) => Out): Out;
export { be as b, };
