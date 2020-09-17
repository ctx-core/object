import { omit } from './omit'
/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a1`
 */
export function _omit<T = unknown>(...in_key_a1: string[]) {
	return (obj: T, ...fn_key_a1: string[])=>omit<T>(obj, ...in_key_a1, ...fn_key_a1)
}
