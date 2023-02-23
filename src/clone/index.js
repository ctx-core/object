import { assign } from '../assign/index.js'
/**
 * Assigns arguments to new object
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function clone(...arg_a) {
	return assign({}, ...arg_a)
}
