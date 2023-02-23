/**
 * New `obj` with only `key_a` keys.
 */
export declare function pick<
	I extends object = object
>(obj:I, ...key_a:string[]):Partial<I>
export declare function maybe_pick<
	I extends object = object
>(obj:I, ...key_a:string[]):Partial<I>|unknown
