export const global_ctx = {}
const pending_symbol = Symbol('pending')
export type Be<T> = (ctx?:any, opts?:any)=>T
export type B<T> = Be<T>
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 * @param key
 * @param _val
 */
export function _be<T>(
    key: string | symbol,
    _val: (ctx?: any, key?: (string | symbol), opts?: any) => (void | T),
):(ctx?: any, opts?: any) => T {
	return (ctx?, opts?)=>{
		if (!ctx) ctx = global_ctx
		if (!ctx.hasOwnProperty(key) || opts?.force) {
			if (!ctx[pending_symbol]) ctx[pending_symbol] = {}
			const pending = ctx[pending_symbol]
			pending[key] = true
			const val = _val(ctx, key, opts)
			if (!ctx.hasOwnProperty(key)) {
				if (val === undefined) throw `_be: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
				ctx[key] = val;
			}
			delete pending[key]
		} else if (ctx[pending_symbol]?.[key]) {
			console.trace(`_be: key '${key.toString()}' has a circular dependency`)
			throw `_be: key '${key.toString()}' has a circular dependency`
		}
		return ctx[key]
	}
}
export const _b = _be
