export const global_ctx = {} as object
const pending_symbol = Symbol('pending')
/**
 * Returns a function to ensure that an member key is defined on a ctx object,
 * otherwise it creates the value using the _val factory function.
 */
export function _be<O extends unknown>(
	key:string|symbol,
	_val:(ctx:object, key:(string|symbol), opts?:_be_opts_type)=>(void|O),
):(ctx?:object, opts?:_be_opts_type)=>O {
	return (ctx?:object, opts?)=>{
		if (!ctx) ctx = global_ctx
		if (!ctx.hasOwnProperty(key) || opts?.force) {
			if (!ctx[pending_symbol]) {
				ctx[pending_symbol] = {}
			}
			const pending = ctx[pending_symbol]
			pending[key] = true
			const val = _val(ctx, key, opts)
			if (!ctx.hasOwnProperty(key)) {
				if (val === undefined)
					throw `_be: ${String(key)}: function must return a non-undefined value or directly set the ctx with the property ${String(key)}`
				ctx[key] = val
			}
			delete pending[key]
		} else if (ctx[pending_symbol]?.[key]) {
			console.trace(`_be: key '${key.toString()}' has a circular dependency`)
			throw `_be: key '${key.toString()}' has a circular dependency`
		}
		const val = ctx[key]
		return val as O
	}
}
export const _b = _be
export type Be<O> = (ctx:object, opts?:_be_opts_type)=>O
export type B<O> = Be<O>
export type _be_opts_type = {
	force?:boolean
}
