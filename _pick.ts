import { pick } from './pick'
/**
 * Returns a function that calls [pick](#pick) with the given `...key_a1`
 */
export function _pick(...key_a1) {
	return (obj, ...key_a1_)=>pick(obj, ...key_a1, ...key_a1_)
}
