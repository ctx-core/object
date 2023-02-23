import { keys } from '../keys/index.js'
/**
 * If a key is given, returns boolean of indicitating if the given key is a member of the obj.
 * If no key is given, returns boolean of indicitating if the obj has any key.
 * @param {object}obj
 * @param {boolean}[in_key]
 * @returns {boolean}
 * @private
 */
export function has_key_(obj, in_key) {
	const $keys = keys(obj)
	return in_key ? !!~$keys.indexOf(in_key) : !!$keys.length
}
export {
	has_key_ as _has_key,
	has_key_ as _has__key,
}
