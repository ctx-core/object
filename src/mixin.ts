/**
 * Mixin properties from source_a1 into target
 * @example
 * mixin(obj, {
 *		get foo() {
 *			return 'bar'
 *		}
 *	})
 */
export function mixin<I extends unknown = unknown, O = I>(target:I, ...source_a1:O[]) {
	if (!target) return
	for (let i = 0; i < source_a1.length; i++) {
		const source = source_a1[i]
		const propertyNames = Object.getOwnPropertyNames(source)
		for (let j = 0; j < propertyNames.length; j++) {
			const propertyName = propertyNames[j]
			Object.defineProperty(
				target,
				propertyName,
				Object.getOwnPropertyDescriptor(source, propertyName) as PropertyDescriptor
			)
		}
	}
	return target
}
