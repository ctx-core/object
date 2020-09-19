import { unpick } from './unpick'
import { keys } from './keys'
/**
 * Does not include keys on `keys_o` from `rec`
 */
export function unpick_keys<I>(
	rec:Record<string, I>,
	keys_o:Record<string, unknown>
) {
	return unpick<I>(rec, ...keys(keys_o))
}
export const unpick__keys = unpick_keys
