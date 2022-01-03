/**
 * New `obj` without `key_a` keys.
 */ export function omit(obj, ...key_a) {
    if (!obj) return;
    let memo = {
    };
    for(const key in obj){
        if (!~key_a.indexOf(key)) {
            memo[key] = obj[key];
        }
    }
    return memo;
}

