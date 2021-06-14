import type { nullish } from '@ctx-core/function';
import { map_obj_fn_T } from './map_obj';
/**
 * Returns function to map `obj` to `fn` returning object with values.
 */
export declare function map_obj_<In extends unknown = unknown, Out = In>(fn: map_obj_fn_T<In, Out>): (obj: Record<string, In>) => Record<string, Out | nullish>;
export { map_obj_ as _map_obj, map_obj_ as _map__obj, map_obj_ as _fn__map__obj, };
