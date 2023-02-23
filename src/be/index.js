import { be_ } from '../be_/index.js'
/**
 * @param {import('../be_').Ctx}ctx
 * @param {string}key
 * @param {import('../be_').be__val__T}val_
 * @returns {NonNullable<unknown>}
 */
export function be(ctx, key, val_) {
	return be_(key, val_)(ctx)
}
export { be as b, }
