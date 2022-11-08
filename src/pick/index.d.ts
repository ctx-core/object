/**
 * New `obj` with only `key_` keys.
 */
export declare function pick<I extends object = object>(obj:I, ...key_:string[]):Partial<I>
export declare function maybe_pick<I extends object = object>(obj:I, ...key_:string[]):void|Partial<I>
