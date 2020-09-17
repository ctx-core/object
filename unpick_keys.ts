import { unpick } from './unpick'
import { keys } from './keys'
/**
 * Does not include keys on `keys_obj` from `obj`
 * @param {*} obj
 * @param {*} keys_obj
 */
export function unpick_keys(obj: unknown, keys_obj: unknown ) {
	return unpick(obj, ...keys(keys_obj))
}
export const unpick__keys = unpick_keys
