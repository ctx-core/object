import { assign } from './assign'
import type { maybe_null } from '@ctx-core/function'
/**
 * Assign only if obj is not null
 */
export function assign_unless_null<O extends object = object>(
	obj:O,
	...arg_a1:Partial<O>[]
):maybe_null<O> {
	return (obj == null) ? obj : assign(obj, ...arg_a1)
}
export {
	assign_unless_null as assign__unless__null
}
