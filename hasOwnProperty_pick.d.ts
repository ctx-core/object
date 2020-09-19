/**
 * Returns object with picked values,
 * not including including inherited property values (i.e. if hasOwnProperty is false).
 */
export declare function hasOwnProperty_pick<T = unknown, M = T>(obj: T, ...key_a1: string[]): M | undefined;
export declare const pick__hasOwnProperty: typeof hasOwnProperty_pick;
