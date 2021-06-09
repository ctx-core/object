import type { nullish } from '@ctx-core/function'
/**
 * Returns an array of objects with [pick](#pick) applied.
 */
export function pick_val_a_<Obj extends {} = {}>(
	obj:Obj, ...key_a:(keyof Obj)[]
):Obj[keyof Obj][]|nullish {
	if (!obj) return
	const val_a:Obj[keyof Obj][] = []
	for (let i = 0; i < key_a.length; i++) {
		const key = key_a[i]
		const val = obj[key]
		val_a.push(val)
	}
	return val_a
}
export {
	pick_val_a_ as pick_value_a_,
	pick_val_a_ as _pick_value_a1,
	pick_val_a_ as _a1__value__pick,
}
