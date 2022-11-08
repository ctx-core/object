import { one_andand_ } from '@ctx-core/function'
import { map_obj } from '../map_obj/index.js'
/**
 * Map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function map_obj_andand(obj, ...key_a) {
	return map_obj(obj, one_andand_(...key_a))
}
export { map_obj_andand as map__obj__andand }
