import { map_obj_andand } from '../map_obj_andand/index.js'
/**
 * Returns function to
 * map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 * @param {import('@ctx-core/function').andand_key_T}key_a
 * @returns {(obj:object)=>object}
 * @private
 */
export function map_obj_andand_(...key_a) {
	return (obj)=>map_obj_andand(obj, ...key_a)
}
export {
	map_obj_andand_ as _map_obj_andand,
	map_obj_andand_ as _map__obj__andand,
	map_obj_andand_ as _fn__map__obj__andand,
}
