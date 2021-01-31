import { pick } from './pick'
import { keys } from './keys'
/**
 * Picks the keys on `in_key_obj` from `obj`
 */
export function pick_keys(obj: object, in_key_obj: object) {
	return pick(obj, ...keys(in_key_obj))
}
export {
	pick_keys as pick__keys
}