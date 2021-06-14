import { assign } from './assign';
/**
 * Assign only if obj is not null
 */
export function assign_unless_null(obj, ...arg_a) {
    return (obj == undefined) ? undefined : assign(obj, ...arg_a);
}
export { assign_unless_null as assign__unless__null };
//# sourceMappingURL=src/assign_unless_null.js.map