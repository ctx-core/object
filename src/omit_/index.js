import { omit } from '../omit/index.js'
/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a`
 * @param {string}in_key_a
 * @returns {(obj:object, ...fn_key_a:string[])=>object|undefined}
 * @private
 */
export function omit_(...in_key_a) {
	return (obj, ...fn_key_a)=>omit(obj, ...in_key_a, ...fn_key_a)

}
export { omit_ as _omit, }
