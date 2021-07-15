import type { andand_key_T, nullish } from '@ctx-core/function'
import { map_obj_andand } from './map_obj_andand.js'
/**
 * Returns function to
 * map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function map_obj_andand_<In extends unknown = unknown, Out = In>(
	...key_a:andand_key_T<In>[]
):(obj:Record<string, In>)=>Record<string, Out|nullish> {
	return (obj:Record<string, In>)=>map_obj_andand<In, Out>(obj, ...key_a)
}
export {
	map_obj_andand_ as _map_obj_andand,
	map_obj_andand_ as _map__obj__andand,
	map_obj_andand_ as _fn__map__obj__andand,
}
