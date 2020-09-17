import { pick } from './pick'
/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a1`
 */
export function _pick<T = unknown>(...in_key_a1: string[]) {
	return (obj: T, ...fn_key_a1: string[])=>pick<T>(obj, ...in_key_a1, ...fn_key_a1)
}
