import { assign } from './assign'
/**
 * Assigns arguments to new object
 * @param {...*} * Assigned to cloned object
 * @returns {*} assigned object
 */
export function clone(...arg_a1) {
	return assign({}, ...arg_a1)
}
