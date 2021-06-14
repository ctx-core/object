/**
 * New `obj` with only `key_` keys.
 */
export function pick(obj, ...key_) {
    const memo = {};
    for (let i = 0; i < key_.length; i++) {
        const key = key_[i];
        if (key in obj) {
            memo[key] = obj[key];
        }
    }
    return memo;
}
export function maybe_pick(obj, ...key_) {
    if (!obj)
        return;
    return pick(obj, ...key_);
}
//# sourceMappingURL=src/pick.js.map