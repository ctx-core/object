const no_key_arg_symbol = Symbol('no_key_arg')
/**
 * Returns true if obj has given in_key; false otherwise.
 * If no in_key given, returns true if obj has any in_key; false otherwise.
 * @param {object}obj
 * @param {symbol}[in_key]
 * @returns {boolean}
 */
export function has_key(obj, in_key = no_key_arg_symbol) {
	if (in_key === no_key_arg_symbol) {
		for (let _ in obj) {
			return true
		}
	} else {
		for (let key in obj) {
			if (in_key.toString() === key.toString()) return true
		}
	}
	return false
}
export { has_key as has__key }
