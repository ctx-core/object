import type { maybe_undefined } from '@ctx-core/function';
/**
 * New `obj` with only `key_a1` keys.
 */
export declare function pick<I extends object = object>(obj: I, ...key_a1: string[]): I;
export declare function maybe_pick<I extends object = object>(obj: I, ...key_a1: string[]): maybe_undefined<I>;
