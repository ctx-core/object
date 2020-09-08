import { map_obj_fn_type, map_obj, map_obj_obj_type } from './map_obj'
/**
 * Returns function to map `obj` to `fn` returning object with values.
 */
export function _map_obj<T = any, U = T>(fn:map_obj_fn_type<T, U>) {
	return (obj: map_obj_obj_type<T>)=>map_obj(obj, fn)
}
export const _map__obj = _map_obj
export const _fn__map__obj = _map__obj
