import { map_obj } from './map_obj.js';
/**
 * Returns function to map `obj` to `fn` returning object with values.
 */ export function map_obj_(fn) {
    return (obj)=>map_obj(obj, fn)
    ;
}
export { map_obj_ as _map_obj, map_obj_ as _map__obj, map_obj_ as _fn__map__obj,  };

