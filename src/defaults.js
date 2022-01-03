import { clone } from './clone.js';
/**
 * Returns the obj with default values. If `obj[key] == null`, use `default[key]`
 */ export function defaults(obj, ...defaults_a) {
    const defaults1 = clone(...defaults_a);
    for(let key in obj){
        if (obj[key] == null) obj[key] = defaults1[key];
    }
    return obj;
}

