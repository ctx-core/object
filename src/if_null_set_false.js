/**
 * Sets obj values to false when `== null`.
 */ export function if_null_set_false(obj, ...key_a) {
    for(let i = 0; i < key_a.length; i++){
        const key = key_a[i];
        if (obj[key] == null) obj[key] = false;
    }
    return obj;
}
export { if_null_set_false as set__false__if__null };

