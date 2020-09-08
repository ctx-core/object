import { assign } from './assign'
/**
 * Assign only if obj is not null
 */
export function assign_unless_null(obj, ...arg_a1:any[]) {
	return (obj == null) ? obj : assign(obj, ...arg_a1)
}
export const assign__unless__null = assign_unless_null
