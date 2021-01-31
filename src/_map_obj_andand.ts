import { map_obj_andand } from './map_obj_andand'
import type { map_obj_obj_type } from './map_obj'
/**
 * Returns function to
 * map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function _map_obj_andand<I extends unknown = unknown, O = I>(...key_a1: string[]) {
	return (obj: map_obj_obj_type<I>)=>map_obj_andand<I, O>(obj, ...key_a1)
}
export {
	_map_obj_andand as _map__obj__andand,
	_map_obj_andand as _fn__map__obj__andand,
}