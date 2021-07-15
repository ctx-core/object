import { assign } from './assign.js'
import { keys } from './keys.js'
/**
 * Does not include `key_` from `obj`
 */
export function unpick</*@formatter:off*/
	In extends { [key:string]:any } = object,
	Out extends Partial<In> = Partial<In>
>/*@formatter:on*/(obj:In, ...key_:string[]):Partial<In> {
	const memo = {} as Out
	const obj_key_a = keys(obj)
	for (let i = 0; i < obj_key_a.length; i++) {
		const key = obj_key_a[i]
		if (key_.indexOf(key) === -1) assign(memo, { [key]: obj[key] })
	}
	return memo as Out
}
export function maybe_unpick</*@formatter:off*/
	In extends { [key:string]:any } = object,
	Out extends Partial<In> = Partial<In>
>/*@formatter:on*/(obj:In, ...key_:string[]):void|Partial<In> {
	if (!obj) return
	return unpick<In>(obj, ...key_) as Out
}
