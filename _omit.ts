import { omit } from './omit'
/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a1`
 */
export function _omit(...in_key_a1) {
	return (obj, ...key_a1)=>omit(obj, ...in_key_a1, ...key_a1)
}
