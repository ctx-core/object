import { omit } from './omit';
/**
 * Returns a function that calls [omit](#omit) with the given `...in_key_a`
 */
export function omit_(...in_key_a) {
    return (obj, ...fn_key_a) => omit(obj, ...in_key_a, ...fn_key_a);
}
export { omit_ as _omit, };
//# sourceMappingURL=src/omit_.js.map