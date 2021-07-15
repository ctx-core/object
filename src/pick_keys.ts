import { pick } from './pick.js'
import { keys } from './keys.js'
/**
 * Picks the keys on `in_key_obj` from `obj`
 */
export function pick_keys<I extends object = object, KEYS_OBJ extends object = object>(
	obj:I, in_key_obj:KEYS_OBJ
) {
	return pick(obj, ...keys(in_key_obj)) as Partial<I>
}
export {
	pick_keys as pick__keys
}
