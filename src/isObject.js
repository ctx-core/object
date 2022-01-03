/**
 * Returns boolean of `obj` is an object
 */ export function isObject(obj) {
    return !!(obj && new String(obj) === '[object Object]');
}
export { isObject as _is_Object, isObject as _is__Object };

