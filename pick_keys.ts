import { pick } from './pick'
import { keys } from './keys'
/**
 * Picks the keys on `in_key_obj` from `obj`
 */
export function pick_keys(obj, in_key_obj) {
	return pick(obj, ...keys(in_key_obj))
}
export const pick__keys = pick_keys
