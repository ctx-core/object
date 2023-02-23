/**
 * New `obj` without `key_a` keys.
 */
export declare function omit<
	I extends object = object
>(obj:I, ...key_a:string[]):I|undefined
