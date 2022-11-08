import { keys } from '../keys/index.js'
import { unpick } from '../unpick/index.js'
/**
 * Does not include keys on `keys_obj` from `rec`
 */
export function unpick_keys(rec, keys_obj) {
	return unpick(rec, ...keys(keys_obj))
}
export { unpick_keys as unpick__keys }
