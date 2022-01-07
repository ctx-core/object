/**
 * Assigns to obj array of keys the return value of function in key_a_fn_aa.
 */ export function assign_fn_key_a(obj, ...key_a_fn_aa) {
	for (let i = 0; i < key_a_fn_aa.length; i++) {
		const [key_, fn] = key_a_fn_aa[i]
		for (let j = 0; j < key_.length; j += 1) {
			const key = key_[j]
			obj[key] = fn(obj[key], obj, key)
		}
	}
	return obj
}
export { assign_fn_key_a as assign_fn_key_a1, assign_fn_key_a as assign__key_a1__fn, }

