import { assign } from './assign.js';
const { get  } = Reflect;
const add_strong_sym = Symbol('add_strong');
const delete_strong_sym = Symbol('delete_strong');
export function weak_r_(back_ctx1 = {
}) {
    const strong_set = new Set();
    assign(back_ctx1, {
        [add_strong_sym] (key) {
            strong_set.add(key);
        },
        [delete_strong_sym] (key) {
            strong_set.delete(key);
        }
    });
    const proxy_ctx = new Proxy(back_ctx1, {
        getOwnPropertyDescriptor (back_ctx, prop) {
            let value = get(back_ctx, prop);
            if ((value === null || value === void 0 ? void 0 : value.deref) && !strong_set.has(prop)) {
                value = value.deref();
            }
            return value === undefined ? undefined : {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            };
        },
        get (back_ctx, prop) {
            const uw_val = get(back_ctx, prop);
            return (uw_val === null || uw_val === void 0 ? void 0 : uw_val.deref) && !strong_set.has(prop) ? uw_val.deref() : uw_val;
        },
        set (back_ctx, prop, val) {
            const t = typeof val;
            assign(back_ctx, {
                [prop]: (t === 'object' || t === 'function') && !strong_set.has(prop) ? new WeakRef(val) : val
            });
            return true;
        }
    });
    return proxy_ctx;
}
export function ref_strong(ctx, prop) {
    ctx[add_strong_sym](prop);
}
export function set_strong(ctx, prop, val) {
    ref_strong(ctx, prop);
    if (val !== undefined) {
        assign(ctx, {
            [prop]: val
        });
    }
}
export function ref_weak(ctx, prop) {
    ctx[delete_strong_sym](prop);
}
export function unset_weak(ctx, prop) {
    ref_weak(ctx, prop);
    delete ctx[prop];
}
export { weak_r_ as weak_ctx_,  };

