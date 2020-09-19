import type { maybe } from '@ctx-core/function';
/**
 * Does not include `key_a1` from `obj`
 */
export declare function unpick<I>(obj: Record<string, I>, ...key_a1: string[]): maybe<Record<string, I>>;
