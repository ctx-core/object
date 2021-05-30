import { map_obj_fn_T, map_obj } from './map_obj'
/**
 * Returns function to map `obj` to `fn` returning object with values.
 */
export function map_obj_<In extends unknown = unknown, Out = In>(fn:map_obj_fn_T<In, Out>) {
	return (obj:Record<string, In>)=>map_obj<In, Out>(obj, fn)
}
export {
	map_obj_ as _map_obj,
	map_obj_ as _map__obj,
	map_obj_ as _fn__map__obj,
}
