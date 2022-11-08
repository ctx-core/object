/**
 * Assigns function calls into obj
 */
export function call_assign(obj, ...assign_fn_h_a) {
	for (let i = 0; i < assign_fn_h_a.length; i++) {
		const assign_fn_h = assign_fn_h_a[i]
		for (let prop_name in assign_fn_h) {
			const assign_fn = assign_fn_h[prop_name]
			obj[prop_name] = assign_fn(obj[prop_name], obj, prop_name)
		}
	}
	return obj
}
export { call_assign as assign__call }
