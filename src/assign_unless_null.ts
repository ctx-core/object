import { assign } from './assign'
/**
 * Assign only if obj is not null
 */
export function assign_unless_null<O extends object = object>(
	obj:O,
	...arg_a:Partial<O>[]
):O|undefined {
	return (obj == undefined) ? undefined : assign(obj, ...arg_a)
}
export {
	assign_unless_null as assign__unless__null
}
