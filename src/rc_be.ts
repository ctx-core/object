import type { rc_be__val__T } from './rc_be_.js'
import type { Ctx } from './be_.js'
import { rc_be_ } from './rc_be_.js'
export function rc_be<Out extends NonNullable<unknown>>(
	ctx:Ctx, val_:rc_be__val__T<Out>,
):Out
export function rc_be<Out extends NonNullable<unknown>>(
	ctx:Ctx, key:string, val_:rc_be__val__T<Out>,
):Out
export function rc_be<Out extends NonNullable<unknown>>(
	ctx:Ctx, key_or_val:string|rc_be__val__T<Out>, val_?:rc_be__val__T<Out>,
):Out {
	return (
		val_
		? rc_be_<Out>(key_or_val as string, val_)(ctx)
		: rc_be_<Out>(key_or_val as rc_be__val__T<Out>)(ctx)
	) as Out
}
export {
	rc_be as rc_b,
}
