import { assign } from './assign';
/**
 * Assigns arguments to new object
 */
export function clone(...arg_a) {
    return assign({}, ...arg_a);
}
//# sourceMappingURL=src/clone.js.map