/**
 * _extract takes an array of keys of Type
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export function _extract<Type>(properties:[...(keyof Type)[]]) {
	return function extract<TActual extends Type>(value:TActual) {
		let result = {} as Type
		for (const property of properties as Array<keyof Type>) {
			result[property] = value[property]
		}
		return result
	}
}
