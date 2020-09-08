import { keys } from './keys'
/**
 * Does not include `key_a1` from `obj`
 */
export function unpick(obj, ...key_a1) {
	if (!obj) return
	let memo = {}
	const obj_key_a1 = keys(obj)
	for (let i = 0; i < obj_key_a1.length; i++) {
		const key = obj_key_a1[i]
		if (key_a1.indexOf(key) === -1) memo[key] = obj[key]
	}
	return memo
}
