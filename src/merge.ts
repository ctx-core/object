/**
 * Performs a deep merge on the target with each source_a
 */
export function merge<I extends unknown = unknown, O = I>(target:I, ...source_a:O[]) {
	if (!target) return
	// Loop through each object and conduct a merge
	for (let i = 0; i < source_a.length; i++) {
		const source = source_a[i]
		for (let prop in source) {
			if ((source as any).hasOwnProperty(prop)) {
				if (Object.prototype.toString.call(source[prop]) === '[object Object]') {
					// If we're doing a deep merge and the property is an object
					(target as any)[prop] = merge((target as any)[prop], source[prop])
				} else {
					// Otherwise, do a regular merge
					(target as any)[prop] = source[prop]
				}
			}
		}
	}
	return target
}
