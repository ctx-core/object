/**
 * Assigns function calls into obj
 */
export function call_assign<T = unknown>(obj:T, ...assign_fn_h_a1:Record<string, assign_fn_type<T>>[]) {
	for (let i = 0; i < assign_fn_h_a1.length; i++) {
		const assign_fn_h = assign_fn_h_a1[i]
		for (let prop_name in assign_fn_h) {
			const assign_fn = assign_fn_h[prop_name]
			obj[prop_name] = assign_fn(obj[prop_name], obj, prop_name)
		}
	}
	return obj
}
export const assign__call = call_assign
export type assign_fn_type<T = unknown> = (value:T[keyof T], obj?:T, key?:string)=>T[keyof T]
