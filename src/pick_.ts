import { pick } from './pick'
/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a`
 */
export function pick_<I extends object = object>(...in_key_a: string[]) {
	return (obj: I, ...fn_key_a: string[])=>pick<I>(obj, ...in_key_a, ...fn_key_a)
}
export {
	pick_ as _pick,
}
