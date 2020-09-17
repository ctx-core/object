import { assign } from './assign'
export function a1_assign<I = object>(arg_a1:I[]) {
	return assign<I>(arg_a1[0], ...arg_a1.slice(1))
}
export const assign__a1 = a1_assign
