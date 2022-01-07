import { pick } from './pick.js'
/**
 * Returns a function that calls [pick](#pick) with the given `...in_key_a`
 */ export function pick_(...in_key_a) {
	return (obj, ...fn_key_a)=>pick(obj, ...in_key_a, ...fn_key_a)

}
export { pick_ as _pick, }

