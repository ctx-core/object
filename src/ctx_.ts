import { assign } from './assign'
const { get } = Reflect
export function ctx_<Ctx extends object = object>(back_ctx = {}):Ctx {
	if (typeof window === 'undefined' || typeof window.WeakRef !== 'undefined') {
		const proxy_ctx = new Proxy(back_ctx, {
			getOwnPropertyDescriptor(back_ctx, prop) {
				let value = get(back_ctx, prop)
				if ('deref' in value) {
					value = value.deref()
				}
				return (
					value === undefined
					? undefined
					: {
							configurable: true,
							enumerable: true,
							value,
							writable: true,
						}
				)
			},
			get(back_ctx, prop) {
				const uw_val = get(back_ctx, prop)
				return (
					'deref' in uw_val
					? uw_val.deref()
					: uw_val
				)
			},
			set(back_ctx, prop, val) {
				const t = typeof val
				assign(back_ctx, {
					[prop]:
						(t === 'object' || t === 'function')
						? new WeakRef(val)
						: val
				})
				return true
			}
		}) as Ctx
		return proxy_ctx
	}
	return {} as Ctx
}
