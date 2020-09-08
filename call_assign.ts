/**
 * Assigns function calls into obj
 */
export function call_assign(obj, ...assign_fn_h_a1:{ [prop_name:string]:assign_fn_type }[]) {
	for (let i = 0; i < assign_fn_h_a1.length; i++) {
		const assign_fn_h = assign_fn_h_a1[i]
		for (let prop_name in assign_fn_h) {
			const fn__assign = assign_fn_h[prop_name]
			obj[prop_name] = fn__assign(obj[prop_name], obj, prop_name)
		}
	}
	return obj
}
export const assign__call = call_assign
export type assign_fn_type = (value:any, obj?:any, key?:string)=>any
