export function extract<Type, TActual extends Type = Type>(
	value:TActual, properties:Record<keyof Type, true>
) {
	let result = {} as Type
	for (const property of Object.keys(properties) as Array<keyof Type>) {
		result[property] = value[property]
	}
	return result
}
