import { map_obj_obj_type } from './map_obj';
/**
 * Map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function map_obj_andand<T = any, U = T>(obj: map_obj_obj_type<T>, ...key_a1: string[]): U;
export declare const map__obj__andand: typeof map_obj_andand;
