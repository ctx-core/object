import { keys } from './keys'
/**
 * If a key is given, returns boolean of whether or not the given key is a member of the obj.
 * If no key is given, returns a boolean of whether or not the obj has any key.
 */
export function has_key_(obj:object, in_key?:string) {
	const $keys = keys(obj)
	return (
		in_key
		? !!(~$keys.indexOf(in_key))
		: !!$keys.length
	)
}
export {
	has_key_ as _has_key,
	has_key_ as _has__key,
}
