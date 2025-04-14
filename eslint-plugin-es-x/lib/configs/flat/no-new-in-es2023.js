/**
 * DON'T EDIT THIS FILE.
 * This file was generated by "scripts/update-lib-flat-configs.js" script.
 */
"use strict"

module.exports = {
    plugins: {
        get "es-x"() {
            return require("../../index.js")
        },
    },
    rules: {
        "es-x/no-array-prototype-findlast-findlastindex": "error",
        "es-x/no-array-prototype-toreversed": "error",
        "es-x/no-array-prototype-tosorted": "error",
        "es-x/no-array-prototype-tospliced": "error",
        "es-x/no-array-prototype-with": "error",
        "es-x/no-hashbang": "error",
        "es-x/no-regexp-unicode-property-escapes-2023": "error",
    },
}
