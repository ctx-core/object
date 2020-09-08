import { _andand } from '@ctx-core/function'
import { map_obj, map_obj_obj_type } from './map_obj'
/**
 * Map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function map_obj_andand<T = any, U = T>(obj:map_obj_obj_type<T>, ...key_a1: string[]) {
	return map_obj<T, U>(obj, _andand(...key_a1))
}
export const map__obj__andand = map_obj_andand
