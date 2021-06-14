/**
 * Does not include `key_` from `obj`
 */
export declare function unpick</*@formatter:off*/ In extends {
    [key: string]: any;
} = object, Out extends Partial<In> = Partial<In>>(obj: In, ...key_: string[]): Partial<In>;
export declare function maybe_unpick</*@formatter:off*/ In extends {
    [key: string]: any;
} = object, Out extends Partial<In> = Partial<In>>(obj: In, ...key_: string[]): void | Partial<In>;
