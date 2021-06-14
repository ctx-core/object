import { assign } from './assign';
import { be_ } from './be_';
export const rc_set_h_symbol = Symbol('rc_set_h');
/**
 * Returns _be with referencing counting.
 * When all unsubscribes have been called, the ctx[key] is deleted.
 */
export function rc_be_(key, val_) {
    return (ctx, opts) => {
        const ctx_any = ctx;
        const destroy_cb_a = [];
        const val__this = {
            on_destroy,
            onDestroy: on_destroy,
        };
        const be = be_(key, (ctx, key, opts) => val_.apply(val__this, [ctx, key, opts]));
        let rc_set_h = ctx_any[rc_set_h_symbol];
        if (!rc_set_h) {
            rc_set_h = {};
            ctx_any[rc_set_h_symbol] = rc_set_h;
        }
        let rc_set = rc_set_h[key];
        if (!rc_set) {
            rc_set = new Set();
            assign(rc_set_h, { [key]: rc_set });
        }
        const owner = (opts === null || opts === void 0 ? void 0 : opts.owner) || {};
        rc_set.add(owner);
        let destroy = () => {
            rc_set.delete(owner);
            if (!rc_set.size) {
                for (const destroy_cb of destroy_cb_a) {
                    destroy_cb();
                }
                delete ctx_any[key];
            }
        };
        return {
            value: be(ctx, opts),
            destroy,
        };
        function on_destroy(...in_destroy_cb_a) {
            destroy_cb_a.push(...in_destroy_cb_a);
        }
    };
}
export { rc_be_ as _rc_be, rc_be_ as _rc_b, };
//# sourceMappingURL=src/rc_be_.js.map