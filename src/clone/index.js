import { assign } from '../assign/index.js'
/**
 * Assigns arguments to new object
 */
export function clone(...arg_a) {
	return assign({}, ...arg_a)
}
