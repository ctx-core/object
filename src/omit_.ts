import { omit } from './omit.js'
/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a`
 */
export function omit_<T extends unknown = unknown>(...in_key_a: string[]) {
	return (obj: T, ...fn_key_a: string[])=>omit<T>(obj, ...in_key_a, ...fn_key_a)
}
export {
	omit_ as _omit,
}
