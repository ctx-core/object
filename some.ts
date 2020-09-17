/**
 * Returns true when some of the key/value pairs cause the fn to be truthy.
 * @example
 * some({foo: 9, bar: 10}, (value, key) => value === 10) // returns true
 * some({baz: 11, quux: 12}, (value, key) => value === 10) // returns false
 */
export function some(obj: object, compare_some:(obj:any, key:string)=>any) {
	if (!obj) return
	for (let key in obj) {
		if (compare_some(obj[key], key)) return true
	}
	return false
}
