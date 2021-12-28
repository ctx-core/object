import { be_ } from './be_.js';
export const be_m_set_key = Symbol('be_m_set');
export function rc_be_(key_or_val, arg_val_) {
    return (ctx1, opts1)=>{
        const ctx_any = ctx1;
        const destroy_cb_a = [];
        const val_this = {
            on_destroy,
            onDestroy: on_destroy
        };
        const val_ = arg_val_ ? arg_val_ : key_or_val;
        const key = arg_val_ ? key_or_val : null;
        const be1 = arg_val_ ? be_(val_) : be_(key, (ctx, be, opts)=>arg_val_.call(val_this, ctx, be, opts)
        );
        let be_m_set = ctx_any[be_m_set_key];
        if (!be_m_set) {
            be_m_set = new Map();
            ctx_any[be_m_set_key] = be_m_set;
        }
        let rc_set = be_m_set.get(be1);
        if (!rc_set) {
            rc_set = new Set();
            be_m_set.set(be1, rc_set);
        }
        const owner = (opts1 === null || opts1 === void 0 ? void 0 : opts1.owner) || {
        };
        rc_set.add(owner);
        let destroy = ()=>{
            rc_set.delete(owner);
            if (!rc_set.size) {
                for (const destroy_cb of destroy_cb_a){
                    destroy_cb();
                }
                ctx1.delete(be1);
            }
        };
        return {
            value: be1(ctx1, opts1),
            destroy
        };
        function on_destroy(...in_destroy_cb_a) {
            destroy_cb_a.push(...in_destroy_cb_a);
        }
    };
}
export { rc_be_ as _rc_be, rc_be_ as _rc_b,  };

//# sourceMappingURL=rc_be_.js.map