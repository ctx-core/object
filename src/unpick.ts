import { keys } from './keys'
/**
 * Does not include `key_a1` from `obj`
 */
export function unpick<obj_T extends object = object>(obj:obj_T, ...key_a1:string[]):Partial<obj_T> {
	const memo:Partial<obj_T> = {}
	const obj_key_a1 = keys(obj)
	for (let i = 0; i < obj_key_a1.length; i++) {
		const key = obj_key_a1[i]
		if (key_a1.indexOf(key) === -1) memo[key] = obj[key] as obj_T
	}
	return memo as Partial<obj_T>
}
export function maybe_unpick<I extends object = object>(obj:I, ...key_a1:string[]):void|Partial<I> {
	if (!obj) return
	return unpick<I>(obj, ...key_a1)
}
