import type { andand_key_T, nullish } from '@ctx-core/function'
/**
 * Map `values` `andand` `key_a` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function map_obj_andand<
	In extends unknown = unknown,
	Out extends unknown = unknown
>(
	obj:Record<string, In>,
	...key_a:andand_key_T<In>[]
):Record<string, Out|nullish>
export { map_obj_andand as map__obj__andand }
