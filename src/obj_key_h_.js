/**
 * Returns Hash of each `value[key]` in `obj`.
 */
export function obj_key_h_(obj, key) {
    const obj_key_hash = {};
    for (let attr_key in obj) {
        obj_key_hash[attr_key] = (obj[attr_key] && obj[attr_key])[key];
    }
    return obj_key_hash;
}
export { obj_key_h_ as _obj_key_hash, obj_key_h_ as _hash__key__obj, };
//# sourceMappingURL=src/obj_key_h_.js.map