/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export function _extract<T>(properties:Record<keyof T, true>) {
	return function extract<TActual extends T>(value:TActual) {
		let result = {} as T
		for (const property of Object.keys(properties) as Array<keyof T>) {
			result[property] = value[property]
		}
		return result
	}
}
