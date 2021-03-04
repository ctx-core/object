/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export function _extract<Type>(properties:Record<keyof Type, true>) {
	return function extract<TActual extends Type>(value:TActual) {
		let result = {} as Type
		for (const property of Object.keys(properties) as Array<keyof Type>) {
			result[property] = value[property]
		}
		return result
	}
}
