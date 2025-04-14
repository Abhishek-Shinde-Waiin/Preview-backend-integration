"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
/**
 * A helper for looking up TypeScript `enum` keys/values.
 *
 * @remarks
 * TypeScript enums implement a lookup table for mapping between their keys and values:
 *
 * ```ts
 * enum Colors {
 *   Red = 1
 * }
 *
 * // Prints "Red"
 * console.log(Colors[1]);
 *
 * // Prints "1"
 * console.log(Colors["Red]);
 * ```
 *
 * However the compiler's "noImplicitAny" validation has trouble with these mappings, because
 * there are so many possible types for the map elements:
 *
 * ```ts
 * function f(s: string): Colors | undefined {
 *   // (TS 7015) Element implicitly has an 'any' type because
 *   // index expression is not of type 'number'.
 *   return Colors[s];
 * }
 * ```
 *
 * The `Enum` helper provides a more specific, strongly typed way to access members:
 *
 * ```ts
 * function f(s: string): Colors | undefined {
 *   return Enum.tryGetValueByKey(Colors, s);
 * }
 * ```
 *
 * @public
 */
class Enum {
    constructor() { }
    /**
     * Returns an enum value, given its key. Returns `undefined` if no matching key is found.
     *
     * @example
     *
     * Example usage:
     * ```ts
     * enum Colors {
     *   Red = 1
     * }
     *
     * // Prints "1"
     * console.log(Enum.tryGetValueByKey(Colors, "Red"));
     *
     * // Prints "undefined"
     * console.log(Enum.tryGetValueByKey(Colors, "Black"));
     * ```
     */
    static tryGetValueByKey(enumObject, key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return enumObject[key];
    }
    /**
     * This API is similar to {@link Enum.tryGetValueByKey}, except that it throws an exception
     * if the key is undefined.
     */
    static getValueByKey(enumObject, key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = enumObject[key];
        if (result === undefined) {
            throw new Error(`The lookup key ${JSON.stringify(key)} is not defined`);
        }
        return result;
    }
    /**
     * Returns an enum string key, given its numeric value.  Returns `undefined` if no matching value
     * is found.
     *
     * @remarks
     * The TypeScript compiler only creates a reverse mapping for enum members whose value is numeric.
     * For example:
     *
     * ```ts
     * enum E {
     *   A = 1,
     *   B = 'c'
     * }
     *
     * // Prints "A"
     * console.log(E[1]);
     *
     * // Prints "undefined"
     * console.log(E["c"]);
     * ```
     *
     * @example
     *
     * Example usage:
     * ```ts
     * enum Colors {
     *   Red = 1,
     *   Blue = 'blue'
     * }
     *
     * // Prints "Red"
     * console.log(Enum.tryGetKeyByNumber(Colors, 1));
     *
     * // Prints "undefined"
     * console.log(Enum.tryGetKeyByNumber(Colors, -1));
     * ```
     */
    static tryGetKeyByNumber(enumObject, value) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return enumObject[value];
    }
    /**
     * This API is similar to {@link Enum.tryGetKeyByNumber}, except that it throws an exception
     * if the key is undefined.
     */
    static getKeyByNumber(enumObject, value) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = enumObject[value];
        if (result === undefined) {
            throw new Error(`The value ${value} does not exist in the mapping`);
        }
        return result;
    }
}
exports.Enum = Enum;
//# sourceMappingURL=Enum.js.map