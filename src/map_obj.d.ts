import type { nullish } from '@ctx-core/function'
/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export declare function map_obj<In extends unknown = unknown, Out = In>(in_obj:Record<string, In>, fn:map_obj_fn_T<In, Out>):Record<string, Out|nullish>;
export declare type map_obj_fn_T<Val extends unknown = unknown, Out = Val> = (in_obj:Val, key:string)=>Out;
export { map_obj as map__obj }
