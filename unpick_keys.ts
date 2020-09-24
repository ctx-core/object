import { unpick } from './unpick'
import { keys } from './keys'
/**
 * Does not include keys on `keys_o` from `rec`
 */
export function unpick_keys<I extends unknown = unknown>(
	rec:Record<string, I>,
	keys_o:Record<string, unknown>
) {
	return unpick<I>(rec, ...keys(keys_o)) as Record<string, I>
}
export const unpick__keys = unpick_keys
