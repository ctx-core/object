import type { andand_key_T, nullish } from '@ctx-core/function'
import { one_andand_ } from '@ctx-core/function'
import { map_obj, map_obj_fn_T } from './map_obj'
/**
 * Map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export function map_obj_andand<In extends unknown = unknown, Out extends unknown = unknown>(
	obj:Record<string, In>,
	...key_a:andand_key_T<In>[]
):Record<string, Out|nullish> {
	return map_obj<In, Out>(
		obj, one_andand_<In, Out|nullish>(...key_a) as map_obj_fn_T<In, Out>
	) as Record<string, Out|nullish>
}
export { map_obj_andand as map__obj__andand }
