/**
 * Does not include `key_a1` from `obj`
 */
export declare function unpick</*@formatter:off*/ In extends {
    [key: string]: any;
} = object, Out extends Partial<In> = Partial<In>>(obj: In, ...key_a1: string[]): Partial<In>;
export declare function maybe_unpick</*@formatter:off*/ In extends {
    [key: string]: any;
} = object, Out extends Partial<In> = Partial<In>>(obj: In, ...key_a1: string[]): void | Partial<In>;
