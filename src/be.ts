import type { Ctx } from './be_.js'
import { be_, be__val__T } from './be_.js'
export function be<Out extends NonNullable<unknown>>(
	ctx:Ctx, key:string, val_:be__val__T<Out>,
):Out {
	return be_<Out>(key, val_)(ctx)
}
export {
	be as b,
}
