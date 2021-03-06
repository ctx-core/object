import { assign } from './assign'
/**
 * Mixin properties from source_a into target
 * @example
 * mixin(obj, {
 *		get foo() {
 *			return 'bar'
 *		}
 *	})
 */
export function mixin<I extends unknown = unknown, O = I>(target:I, ...source_a:O[]) {
	source_a.forEach(source=>{
		let descriptors = Object.keys(source).reduce((descriptors, key)=>{
			assign(descriptors, { [key]: Object.getOwnPropertyDescriptor(source, key) })
			return descriptors
		}, {})
		// By default, Object.assign copies enumerable Symbols, too
		Object.getOwnPropertySymbols(source).forEach(sym=>{
			let descriptor = Object.getOwnPropertyDescriptor(source, sym) as PropertyDescriptor
			if (descriptor.enumerable) {
				assign(descriptors, { [sym]: descriptor })
			}
		})
		Object.defineProperties(target, descriptors)
	})
	return target
}
