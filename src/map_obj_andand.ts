import { _one_andand, andand_key_T } from '@ctx-core/function'
import { map_obj, map_obj_fn_T } from './map_obj'
/**
 * Map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function map_obj_andand<In extends unknown = unknown, Out extends unknown = unknown>(
	obj:Record<string, In>,
	...key_a:andand_key_T<In>[]
):Record<string, Out|null> {
	return map_obj<In, Out>(
		obj, _one_andand<In, Out|null>(...key_a) as map_obj_fn_T<In, Out>
	) as Record<string, Out|null>
}
export { map_obj_andand as map__obj__andand }
