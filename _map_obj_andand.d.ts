import type { map_obj_obj_type } from './map_obj';
/**
 * Returns function to
 * map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function _map_obj_andand<I extends unknown = unknown, O = I>(...key_a1: string[]): (obj: map_obj_obj_type<I>) => O;
export { _map_obj_andand as _map__obj__andand, _map_obj_andand as _fn__map__obj__andand, };
