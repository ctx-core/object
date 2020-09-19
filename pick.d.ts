import type { maybe_undefined } from '@ctx-core/function';
/**
 * New `obj` with only `key_a1` keys.
 */
export declare function pick<I>(obj: I, ...key_a1: string[]): I;
export declare function maybe_pick<I>(obj: I, ...key_a1: string[]): maybe_undefined<I>;
