import { assign } from './assign.js'
/**
 * Assigns arguments to new object
 */
export function clone<I extends object = object>(...arg_a: Partial<I>[]) {
	return assign({}, ...arg_a) as I
}
