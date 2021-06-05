import { assign } from './assign'
export function a_assign<Val extends object = object>(arg_a:Val[]):Val {
	return assign(arg_a[0], ...arg_a.slice(1))
}
export {
	a_assign as a1_assign,
	a_assign as assign__a1,
}
