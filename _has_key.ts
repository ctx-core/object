import { keys } from './keys'
/**
 * If a key is given, returns boolean of whether or not the given key is a member of the obj.
 * If no key is given, returns a boolean of whether or not the obj has any key.
 */
export function _has_key(obj, in_key?:string) {
	const $keys = keys(obj)
	return (
		in_key
		? $keys.indexOf(in_key) > -1
		: !!$keys.length
	)
}
export const _has__key = _has_key
