import type { rc_be__val__T } from './rc_be_'
import { rc_be_ } from './rc_be_'
export function rc_be</*@formatter:on*/
	Ctx extends object = Record<string, unknown>,
	Key extends keyof Ctx = keyof Ctx,
	Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>
	/*@formatter:off*/>(
	ctx:Ctx, key:Key, val_:rc_be__val__T<Ctx, Key, Out>,
):Out {
	return rc_be_<Ctx, Key, Out>(key, val_)(ctx) as Out
}
export {
	rc_be as rc_b,
}
