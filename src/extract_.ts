import { extract } from './extract.js'
/**
 * @see {@link https://stackoverflow.com/a/50895613/142571}
 */
export function extract_<Type>(properties:Record<keyof Type, true>) {
	return function curry_extract<TActual extends Type>(value:TActual) {
		return extract<Type, TActual>(value, properties)
	}
}
export {
	extract_ as _extract,
}
