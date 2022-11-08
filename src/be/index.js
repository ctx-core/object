import { be_ } from '../be_/index.js'
export function be(ctx, key, val_) {
	return be_(key, val_)(ctx)
}
export { be as b, }
