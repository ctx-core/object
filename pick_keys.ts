import { pick } from './pick'
import { keys } from './keys'
/**
 * Picks the keys on `in_key_obj` from `obj`
 */
export function pick_keys(obj: unknown, in_key_obj: unknown) {
	return pick(obj, ...keys(in_key_obj))
}
export const pick__keys = pick_keys
