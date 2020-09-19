import { assign } from './assign'
/**
 * Assigns arguments to new object
 */
export function clone<I extends object>(...arg_a1: Partial<I>[]) {
	return assign({}, ...arg_a1) as I
}
