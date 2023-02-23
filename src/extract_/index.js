import { extract } from '../extract/index.js'
/**
 * @param {Record<string, true>}properties
 * @returns {(val:unknown)=>unknown}
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 * @private
 */
export function extract_(properties) {
	return function curry_extract(value) {
		return extract(value, properties)
	}
}
export { extract_ as _extract, }
