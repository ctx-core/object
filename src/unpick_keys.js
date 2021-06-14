import { unpick } from './unpick';
import { keys } from './keys';
/**
 * Does not include keys on `keys_obj` from `rec`
 */
export function unpick_keys(rec, keys_obj) {
    return unpick(rec, ...keys(keys_obj));
}
export { unpick_keys as unpick__keys };
//# sourceMappingURL=src/unpick_keys.js.map