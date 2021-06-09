/**
 * Returns obj with zipped val_o
 */
export function zip_o_<Obj extends object = object>(
	key_a:(keyof Obj)[], val_a:Obj[keyof Obj][]
):Obj {
	const zip_o = {} as Obj
	if (key_a) {
		for (let i = 0; i < key_a.length; i++) {
			zip_o[key_a[i]] = val_a[i]
		}
	}
	return zip_o
}
export {
	zip_o_ as zip_h_,
	zip_o_ as zip_ctx_,
	zip_o_ as _zip_ctx,
	zip_o_ as _ctx__zip,
}
