import { clone } from './clone.js';
/**
 * `ensure` `obj[key]` is present or call `ensure(obj)`. Then call `refresh(obj, obj[key])`.
 */ export function ensure_refresh(obj, ...refresh_ctx_a) {
    if (!obj) return;
    const refresh_ctx = clone(...refresh_ctx_a);
    const { key , ensure , refresh  } = refresh_ctx;
    if (!obj[key]) {
        obj[key] = ensure(obj);
    }
    refresh(obj, obj[key]);
    return obj[key];
}
export { ensure_refresh as ensure__refresh };

