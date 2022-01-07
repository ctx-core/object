import { assign } from './assign.js'
import { keys } from './keys.js'
/**
 * Does not include `key_` from `obj`
 */ export function unpick(obj, ...key_) {
	const memo = {}
	const obj_key_a = keys(obj)
	for (let i = 0; i < obj_key_a.length; i++) {
		const key = obj_key_a[i]
		if (key_.indexOf(key) === -1) assign(memo, {
			[key]: obj[key]
		})
	}
	return memo
}
export function maybe_unpick(obj, ...key_) {
	if (!obj) return
	return unpick(obj, ...key_)
}

