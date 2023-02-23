/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a`
 */
export declare function omit_<
	T extends object = object
>(
	...in_key_a:string[]
):(obj:T, ...fn_key_a:string[])=>T|undefined
export { omit_ as _omit, }
