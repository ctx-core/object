import type { Be, Ctx } from './be_.js'
export function ctx_():Ctx {
  return new Map<Be<unknown>|string, unknown>()
}
