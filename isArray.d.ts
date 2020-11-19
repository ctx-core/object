export declare const native_isArray: <T>(arg: {} | T) => arg is T extends readonly any[] ? unknown extends T ? never : readonly any[] : any[];
/**
 * Is the argument an Array?
 */
export declare function isArray<I extends unknown = unknown>(obj: I): boolean;
