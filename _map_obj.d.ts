import { map_obj_fn_type, map_obj_obj_type } from './map_obj';
/**
 * Returns function to map `obj` to `fn` returning object with values.
 */
export declare function _map_obj<T extends unknown = unknown, U = T>(fn: map_obj_fn_type<T, U>): (obj: map_obj_obj_type<T>) => U;
export { _map_obj as _map__obj, _map_obj as _fn__map__obj };
