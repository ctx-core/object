import { map_obj_obj_type } from './map_obj';
/**
 * Map `values` `andand` `key_a1` in `obj` to `fn`, returning object with values return by `fn`.
 */
export declare function map_obj_andand<I extends unknown, O extends unknown>(obj: map_obj_obj_type<I>, ...key_a1: string[]): O;
export declare const map__obj__andand: typeof map_obj_andand;
