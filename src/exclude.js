/**
 * Exclude keys from obj
 */
export function exclude(obj, ...key_) {
    if (!obj)
        return;
    const out = {};
    const exclude = new Set(key_);
    for (let key in obj) {
        if (!exclude.has(key)) {
            out[key] = obj[key];
        }
    }
    return out;
}
//# sourceMappingURL=src/exclude.js.map