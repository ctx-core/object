import type { map_obj_obj_type } from './map_obj';
/**
 * Returns function to
 * map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function _map_obj_andand<T = unknown, U = T>(...key_a1: string[]): (obj: map_obj_obj_type<T>) => U;
export declare const _map__obj__andand: typeof _map_obj_andand;
export declare const _fn__map__obj__andand: typeof _map_obj_andand;
