import { unpick } from './unpick'
import { keys } from './keys'
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