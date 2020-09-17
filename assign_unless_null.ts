import { assign } from './assign'
/**
 * Assign only if obj is not null
 */
export function assign_unless_null<T = unknown>(obj:T, ...arg_a1:Partial<T>[]) {
	return (obj == null) ? obj : assign(obj, ...arg_a1) as T
}
export const assign__unless__null = assign_unless_null
