/**
 * Maps values in `in_obj` to `fn`, returning object with values returned by `fn`.
 */
export function map_obj(in_obj, fn) {
    const obj = {};
    for (let key in in_obj) {
        obj[key] = fn(in_obj[key], key);
    }
    return obj;
}
export { map_obj as map__obj };
//# sourceMappingURL=src/map_obj.js.map