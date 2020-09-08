/**
 * Assigns function calls into obj
 */
export declare function call_assign(obj: any, ...assign_fn_h_a1: {
    [prop_name: string]: assign_fn_type;
}[]): any;
export declare const assign__call: typeof call_assign;
export declare type assign_fn_type = (value: any, obj?: any, key?: string) => any;
