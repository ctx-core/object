import { clone } from './clone';
/**
 * Returns the obj with default values. If `obj[key] == null`, use `default[key]`
 */
export function defaults(obj, ...defaults_a) {
    const defaults = clone(...defaults_a);
    for (let key in obj) {
        if (obj[key] == null)
            obj[key] = defaults[key];
    }
    return obj;
}
//# sourceMappingURL=src/defaults.js.map