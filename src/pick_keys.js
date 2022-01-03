import { keys } from './keys.js';
import { pick } from './pick.js';
/**
 * Picks the keys on `in_key_obj` from `obj`
 */ export function pick_keys(obj, in_key_obj) {
    return pick(obj, ...keys(in_key_obj));
}
export { pick_keys as pick__keys };

