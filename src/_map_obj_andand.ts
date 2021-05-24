import type { andand_key_T } from '@ctx-core/function'
import { map_obj_andand } from './map_obj_andand'
/**
 * Returns function to
 * map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function _map_obj_andand<In extends unknown = unknown, Out = In>(...key_a1:andand_key_T<In>[]) {
	return (obj:Record<string, In>)=>map_obj_andand<In, Out>(obj, ...key_a1)
}
export { _map_obj_andand as _map__obj__andand, _map_obj_andand as _fn__map__obj__andand, }
