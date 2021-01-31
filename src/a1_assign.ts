import { assign } from './assign'
export function a1_assign(arg_a1: object[]) {
	return assign(arg_a1[0], ...arg_a1.slice(1))
}
export {
	a1_assign as assign__a1
}