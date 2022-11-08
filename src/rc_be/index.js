import { rc_be_ } from '../rc_be_/index.js'
export function rc_be(ctx, key_or_val, val_) {
	return val_ ? rc_be_(key_or_val, val_)(ctx) : rc_be_(key_or_val)(ctx)
}
export { rc_be as rc_b, }
