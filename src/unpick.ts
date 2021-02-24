import { assign } from './assign'
import { keys } from './keys'
/**
 * Does not include `key_a1` from `obj`
 */
export function unpick</*@formatter:off*/
	In extends { [key:string]:any } = object,
	Out extends Partial<In> = Partial<In>
>/*@formatter:on*/(obj:In, ...key_a1:string[]):Partial<In> {
	const memo = {} as Out
	const obj_key_a1 = keys(obj)
	for (let i = 0; i < obj_key_a1.length; i++) {
		const key = obj_key_a1[i]
		if (key_a1.indexOf(key) === -1) assign(memo, { [key]: obj[key] })
	}
	return memo as Out
}
export function maybe_unpick</*@formatter:off*/
	In extends { [key:string]:any } = object,
	Out extends Partial<In> = Partial<In>
>/*@formatter:on*/(obj:In, ...key_a1:string[]):void|Partial<In> {
	if (!obj) return
	return unpick<In>(obj, ...key_a1) as Out
}
