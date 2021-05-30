import { assign } from './assign'
export function a1_assign(arg_a: object[]) {
	return assign(arg_a[0], ...arg_a.slice(1))
}
export {
	a1_assign as assign__a1
}
