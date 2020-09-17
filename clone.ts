import { assign } from './assign'
/**
 * Assigns arguments to new object
 * @param {...*} * Assigned to cloned object
 * @returns {*} assigned object
 */
export function clone<T = object>(...arg_a1: Partial<T>[]) {
	return assign({}, ...arg_a1) as T
}
