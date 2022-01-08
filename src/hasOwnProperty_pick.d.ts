/**
 * Returns object with picked values,
 * not including including inherited property values (i.e. if hasOwnProperty is false).
 */
export declare function hasOwnProperty_pick<I extends unknown = unknown, O = I>(obj:I, ...key_a:string[]):O|undefined;
export { hasOwnProperty_pick as pick__hasOwnProperty }
