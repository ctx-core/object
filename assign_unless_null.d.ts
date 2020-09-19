import type { maybe_null } from '@ctx-core/function';
/**
 * Assign only if obj is not null
 */
export declare function assign_unless_null<O extends object>(obj: O, ...arg_a1: Partial<O>[]): maybe_null<O>;
export declare const assign__unless__null: typeof assign_unless_null;
