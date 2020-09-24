import { keys } from './keys'
import type { maybe } from '@ctx-core/function'
/**
 * Does not include `key_a1` from `obj`
 */
export function unpick<I extends unknown = unknown>(
	obj:Record<string, I>,
	...key_a1:string[]
):maybe<Record<string, I>> {
	if (!obj) return
	let memo = {} as Record<string, I>
	const obj_key_a1 = keys(obj)
	for (let i = 0; i < obj_key_a1.length; i++) {
		const key = obj_key_a1[i]
		if (key_a1.indexOf(key) === -1) memo[key] = obj[key] as I
	}
	return memo
}
