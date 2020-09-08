import { unpick } from './unpick'
import { keys } from './keys'
/**
 * Does not include keys on `obj__keys` from `obj`
 * @param {*} obj
 * @param {*} obj__keys
 */
export function unpick_keys(obj, obj__keys) {
	return unpick(obj, ...keys(obj__keys))
}
export const unpick__keys = unpick_keys
