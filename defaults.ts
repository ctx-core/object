import { clone } from './clone'
/**
 * Returns the obj with default values. If `obj[key] == null`, use `default[key]`
 */
export function defaults<T = unknown>(obj: T, ...defaults_a1:Partial<T>[]) {
	const defaults = clone(...defaults_a1)
	for (let key in obj) {
		if (obj[key] == null) obj[key] = defaults[key]
	}
	return obj
}
