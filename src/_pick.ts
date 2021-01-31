import { pick } from './pick'
/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a1`
 */
export function _pick<I extends object = object>(...in_key_a1: string[]) {
	return (obj: I, ...fn_key_a1: string[])=>pick<I>(obj, ...in_key_a1, ...fn_key_a1)
}
