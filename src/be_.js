import { assign } from './assign';
export const pending_symbol = Symbol('pending');
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the val_ factory function.
 */
export function be_(key, val_) {
    return (ctx, opts) => {
        if (!ctx.hasOwnProperty(key) || (opts === null || opts === void 0 ? void 0 : opts.force)) {
            let pending = ctx[pending_symbol];
            if (!pending) {
                pending = {};
                assign(ctx, { [pending_symbol]: pending });
            }
            if (pending[key]) {
                console.trace(`be_: key '${key.toString()}' has a circular dependency`);
                throw `be_: key '${key.toString()}' has a circular dependency`;
            }
            pending[key] = true;
            const val = val_(ctx, key, opts);
            if (!ctx.hasOwnProperty(key)) {
                if (val === undefined)
                    throw `be_: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`;
                assign(ctx, { [key]: val });
            }
            delete pending[key];
        }
        return ctx[key];
    };
}
export { be_ as _be, be_ as b_, be_ as _b, };
//# sourceMappingURL=src/be_.js.map