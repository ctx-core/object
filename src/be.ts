import type { be_opts_T } from './be_'
import { be_ } from './be_'
export function be</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/>(
	ctx:Ctx, key:Key, val_:(ctx:Ctx, key:Key, opts?:be_opts_T)=>Out,
):Out {
	return be_<Ctx, Key, Out>(key, val_)(ctx)
}
export {
	be as b,
}
