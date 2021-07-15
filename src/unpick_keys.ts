import { unpick } from './unpick.js'
import { keys } from './keys.js'
/**
 * Does not include keys on `keys_obj` from `rec`
 */
export function unpick_keys<I extends object = object, KEYS_OBJ extends object = object>(
	rec:I, keys_obj:KEYS_OBJ
) {
	return unpick<I>(rec, ...keys(keys_obj)) as Partial<I>
}
export {
	unpick_keys as unpick__keys
}
