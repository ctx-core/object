export function a1_assign(arg_a1:any[]) {
	return Object.assign(arg_a1[0], ...arg_a1.slice(1))
}
export const assign__a1 = a1_assign
