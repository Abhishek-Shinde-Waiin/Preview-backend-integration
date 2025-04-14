"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveTypescriptPaths = exports.typescriptPaths = void 0;
var path_1 = require("path");
var typescript_1 = require("typescript");
var typescriptPaths = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.absolute, absolute = _c === void 0 ? true : _c, _d = _b.nonRelative, nonRelative = _d === void 0 ? false : _d, _e = _b.preserveExtensions, preserveExtensions = _e === void 0 ? false : _e, _f = _b.tsConfigPath, tsConfigPath = _f === void 0 ? (0, typescript_1.findConfigFile)('./', typescript_1.sys.fileExists) : _f, transform = _b.transform;
    var _g = getTsConfig(tsConfigPath), compilerOptions = _g.compilerOptions, outDir = _g.outDir;
    return {
        name: 'resolve-typescript-paths',
        resolveId: function (importee, importer) {
            var enabled = Boolean(compilerOptions.paths || (compilerOptions.baseUrl && nonRelative));
            if (typeof importer === 'undefined' ||
                importee.startsWith('\0') ||
                !enabled) {
                return null;
            }
            var hasMatchingPath = !!compilerOptions.paths &&
                Object.keys(compilerOptions.paths).some(function (path) {
                    return new RegExp('^' + escapeRegex(path.replace('*', '.+')) + '$').test(importee);
                });
            if (!hasMatchingPath && !nonRelative) {
                return null;
            }
            if (importee.startsWith('.')) {
                return null; // never resolve relative modules, only non-relative
            }
            var resolvedModule = (0, typescript_1.nodeModuleNameResolver)(importee, importer, compilerOptions, typescript_1.sys).resolvedModule;
            if (!resolvedModule) {
                return null;
            }
            var resolvedFileName = resolvedModule.resolvedFileName;
            if (!resolvedFileName || resolvedFileName.endsWith('.d.ts')) {
                return null;
            }
            var targetFileName = (0, path_1.join)(outDir, preserveExtensions
                ? resolvedFileName
                : resolvedFileName.replace(/\.tsx?$/i, '.js'));
            var resolved = absolute
                ? typescript_1.sys.resolvePath(targetFileName)
                : targetFileName;
            return transform ? transform(resolved) : resolved;
        },
    };
};
exports.typescriptPaths = typescriptPaths;
var getTsConfig = function (configPath) {
    var defaults = { compilerOptions: {}, outDir: '.' };
    if (!configPath) {
        return defaults;
    }
    var configJson = typescript_1.sys.readFile(configPath);
    if (!configJson) {
        return defaults;
    }
    var config = (0, typescript_1.parseConfigFileTextToJson)(configPath, configJson).config;
    return __assign(__assign({}, defaults), config);
};
/**
 * Escapes $ and ^ characters in the given string. This is necessary if you
 * want to use `$/*` in your paths, for example.
 */
var escapeRegex = function (str) {
    return str.replace(/[$^]/g, '\\$&');
};
/**
 * For backwards compatibility.
 */
exports.resolveTypescriptPaths = exports.typescriptPaths;
exports.default = exports.typescriptPaths;
