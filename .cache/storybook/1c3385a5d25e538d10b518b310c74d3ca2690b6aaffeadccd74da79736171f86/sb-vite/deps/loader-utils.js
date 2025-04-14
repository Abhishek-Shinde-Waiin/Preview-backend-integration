import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/json5/dist/index.js
var require_dist = __commonJS({
  "node_modules/json5/dist/index.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.JSON5 = factory();
    })(exports, function() {
      "use strict";
      function createCommonjsModule(fn, module2) {
        return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
      }
      var _global = createCommonjsModule(function(module2) {
        var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") {
          __g = global;
        }
      });
      var _core = createCommonjsModule(function(module2) {
        var core = module2.exports = { version: "2.6.5" };
        if (typeof __e == "number") {
          __e = core;
        }
      });
      var _core_1 = _core.version;
      var _isObject = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
      var _anObject = function(it) {
        if (!_isObject(it)) {
          throw TypeError(it + " is not an object!");
        }
        return it;
      };
      var _fails = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      var _descriptors = !_fails(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
      var document = _global.document;
      var is = _isObject(document) && _isObject(document.createElement);
      var _domCreate = function(it) {
        return is ? document.createElement(it) : {};
      };
      var _ie8DomDefine = !_descriptors && !_fails(function() {
        return Object.defineProperty(_domCreate("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
      var _toPrimitive = function(it, S) {
        if (!_isObject(it)) {
          return it;
        }
        var fn, val;
        if (S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) {
          return val;
        }
        if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) {
          return val;
        }
        if (!S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) {
          return val;
        }
        throw TypeError("Can't convert object to primitive value");
      };
      var dP = Object.defineProperty;
      var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine) {
          try {
            return dP(O, P, Attributes);
          } catch (e) {
          }
        }
        if ("get" in Attributes || "set" in Attributes) {
          throw TypeError("Accessors not supported!");
        }
        if ("value" in Attributes) {
          O[P] = Attributes.value;
        }
        return O;
      };
      var _objectDp = {
        f
      };
      var _propertyDesc = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
      var _hide = _descriptors ? function(object, key2, value) {
        return _objectDp.f(object, key2, _propertyDesc(1, value));
      } : function(object, key2, value) {
        object[key2] = value;
        return object;
      };
      var hasOwnProperty = {}.hasOwnProperty;
      var _has = function(it, key2) {
        return hasOwnProperty.call(it, key2);
      };
      var id = 0;
      var px = Math.random();
      var _uid = function(key2) {
        return "Symbol(".concat(key2 === void 0 ? "" : key2, ")_", (++id + px).toString(36));
      };
      var _library = false;
      var _shared = createCommonjsModule(function(module2) {
        var SHARED = "__core-js_shared__";
        var store = _global[SHARED] || (_global[SHARED] = {});
        (module2.exports = function(key2, value) {
          return store[key2] || (store[key2] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: _core.version,
          mode: _library ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
      });
      var _functionToString = _shared("native-function-to-string", Function.toString);
      var _redefine = createCommonjsModule(function(module2) {
        var SRC = _uid("src");
        var TO_STRING = "toString";
        var TPL = ("" + _functionToString).split(TO_STRING);
        _core.inspectSource = function(it) {
          return _functionToString.call(it);
        };
        (module2.exports = function(O, key2, val, safe) {
          var isFunction = typeof val == "function";
          if (isFunction) {
            _has(val, "name") || _hide(val, "name", key2);
          }
          if (O[key2] === val) {
            return;
          }
          if (isFunction) {
            _has(val, SRC) || _hide(val, SRC, O[key2] ? "" + O[key2] : TPL.join(String(key2)));
          }
          if (O === _global) {
            O[key2] = val;
          } else if (!safe) {
            delete O[key2];
            _hide(O, key2, val);
          } else if (O[key2]) {
            O[key2] = val;
          } else {
            _hide(O, key2, val);
          }
        })(Function.prototype, TO_STRING, function toString() {
          return typeof this == "function" && this[SRC] || _functionToString.call(this);
        });
      });
      var _aFunction = function(it) {
        if (typeof it != "function") {
          throw TypeError(it + " is not a function!");
        }
        return it;
      };
      var _ctx = function(fn, that, length) {
        _aFunction(fn);
        if (that === void 0) {
          return fn;
        }
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c2) {
              return fn.call(that, a, b, c2);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
      var PROTOTYPE = "prototype";
      var $export = function(type, name, source2) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
        var exports2 = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
        var expProto = exports2[PROTOTYPE] || (exports2[PROTOTYPE] = {});
        var key2, own, out, exp;
        if (IS_GLOBAL) {
          source2 = name;
        }
        for (key2 in source2) {
          own = !IS_FORCED && target && target[key2] !== void 0;
          out = (own ? target : source2)[key2];
          exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
          if (target) {
            _redefine(target, key2, out, type & $export.U);
          }
          if (exports2[key2] != out) {
            _hide(exports2, key2, exp);
          }
          if (IS_PROTO && expProto[key2] != out) {
            expProto[key2] = out;
          }
        }
      };
      _global.core = _core;
      $export.F = 1;
      $export.G = 2;
      $export.S = 4;
      $export.P = 8;
      $export.B = 16;
      $export.W = 32;
      $export.U = 64;
      $export.R = 128;
      var _export = $export;
      var ceil = Math.ceil;
      var floor = Math.floor;
      var _toInteger = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
      var _defined = function(it) {
        if (it == void 0) {
          throw TypeError("Can't call method on  " + it);
        }
        return it;
      };
      var _stringAt = function(TO_STRING) {
        return function(that, pos2) {
          var s = String(_defined(that));
          var i = _toInteger(pos2);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) {
            return TO_STRING ? "" : void 0;
          }
          a = s.charCodeAt(i);
          return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
        };
      };
      var $at = _stringAt(false);
      _export(_export.P, "String", {
        // 21.1.3.3 String.prototype.codePointAt(pos)
        codePointAt: function codePointAt2(pos2) {
          return $at(this, pos2);
        }
      });
      var codePointAt = _core.String.codePointAt;
      var max = Math.max;
      var min = Math.min;
      var _toAbsoluteIndex = function(index, length) {
        index = _toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
      var fromCharCode = String.fromCharCode;
      var $fromCodePoint = String.fromCodePoint;
      _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
        // 21.1.2.2 String.fromCodePoint(...codePoints)
        fromCodePoint: function fromCodePoint2(x) {
          var arguments$1 = arguments;
          var res = [];
          var aLen = arguments.length;
          var i = 0;
          var code;
          while (aLen > i) {
            code = +arguments$1[i++];
            if (_toAbsoluteIndex(code, 1114111) !== code) {
              throw RangeError(code + " is not a valid code point");
            }
            res.push(
              code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320)
            );
          }
          return res.join("");
        }
      });
      var fromCodePoint = _core.String.fromCodePoint;
      var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
      var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
      var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
      var unicode = {
        Space_Separator,
        ID_Start,
        ID_Continue
      };
      var util = {
        isSpaceSeparator: function isSpaceSeparator(c2) {
          return typeof c2 === "string" && unicode.Space_Separator.test(c2);
        },
        isIdStartChar: function isIdStartChar(c2) {
          return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
        },
        isIdContinueChar: function isIdContinueChar(c2) {
          return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "‌" || c2 === "‍" || unicode.ID_Continue.test(c2));
        },
        isDigit: function isDigit(c2) {
          return typeof c2 === "string" && /[0-9]/.test(c2);
        },
        isHexDigit: function isHexDigit(c2) {
          return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
        }
      };
      var source;
      var parseState;
      var stack;
      var pos;
      var line;
      var column;
      var token;
      var key;
      var root;
      var parse = function parse2(text, reviver) {
        source = String(text);
        parseState = "start";
        stack = [];
        pos = 0;
        line = 1;
        column = 0;
        token = void 0;
        key = void 0;
        root = void 0;
        do {
          token = lex();
          parseStates[parseState]();
        } while (token.type !== "eof");
        if (typeof reviver === "function") {
          return internalize({ "": root }, "", reviver);
        }
        return root;
      };
      function internalize(holder, name, reviver) {
        var value = holder[name];
        if (value != null && typeof value === "object") {
          if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              var key2 = String(i);
              var replacement = internalize(value, key2, reviver);
              if (replacement === void 0) {
                delete value[key2];
              } else {
                Object.defineProperty(value, key2, {
                  value: replacement,
                  writable: true,
                  enumerable: true,
                  configurable: true
                });
              }
            }
          } else {
            for (var key$1 in value) {
              var replacement$1 = internalize(value, key$1, reviver);
              if (replacement$1 === void 0) {
                delete value[key$1];
              } else {
                Object.defineProperty(value, key$1, {
                  value: replacement$1,
                  writable: true,
                  enumerable: true,
                  configurable: true
                });
              }
            }
          }
        }
        return reviver.call(holder, name, value);
      }
      var lexState;
      var buffer;
      var doubleQuote;
      var sign;
      var c;
      function lex() {
        lexState = "default";
        buffer = "";
        doubleQuote = false;
        sign = 1;
        for (; ; ) {
          c = peek();
          var token2 = lexStates[lexState]();
          if (token2) {
            return token2;
          }
        }
      }
      function peek() {
        if (source[pos]) {
          return String.fromCodePoint(source.codePointAt(pos));
        }
      }
      function read() {
        var c2 = peek();
        if (c2 === "\n") {
          line++;
          column = 0;
        } else if (c2) {
          column += c2.length;
        } else {
          column++;
        }
        if (c2) {
          pos += c2.length;
        }
        return c2;
      }
      var lexStates = {
        default: function default$1() {
          switch (c) {
            case "	":
            case "\v":
            case "\f":
            case " ":
            case " ":
            case "\uFEFF":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              read();
              return;
            case "/":
              read();
              lexState = "comment";
              return;
            case void 0:
              read();
              return newToken("eof");
          }
          if (util.isSpaceSeparator(c)) {
            read();
            return;
          }
          return lexStates[parseState]();
        },
        comment: function comment() {
          switch (c) {
            case "*":
              read();
              lexState = "multiLineComment";
              return;
            case "/":
              read();
              lexState = "singleLineComment";
              return;
          }
          throw invalidChar(read());
        },
        multiLineComment: function multiLineComment() {
          switch (c) {
            case "*":
              read();
              lexState = "multiLineCommentAsterisk";
              return;
            case void 0:
              throw invalidChar(read());
          }
          read();
        },
        multiLineCommentAsterisk: function multiLineCommentAsterisk() {
          switch (c) {
            case "*":
              read();
              return;
            case "/":
              read();
              lexState = "default";
              return;
            case void 0:
              throw invalidChar(read());
          }
          read();
          lexState = "multiLineComment";
        },
        singleLineComment: function singleLineComment() {
          switch (c) {
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              read();
              lexState = "default";
              return;
            case void 0:
              read();
              return newToken("eof");
          }
          read();
        },
        value: function value() {
          switch (c) {
            case "{":
            case "[":
              return newToken("punctuator", read());
            case "n":
              read();
              literal("ull");
              return newToken("null", null);
            case "t":
              read();
              literal("rue");
              return newToken("boolean", true);
            case "f":
              read();
              literal("alse");
              return newToken("boolean", false);
            case "-":
            case "+":
              if (read() === "-") {
                sign = -1;
              }
              lexState = "sign";
              return;
            case ".":
              buffer = read();
              lexState = "decimalPointLeading";
              return;
            case "0":
              buffer = read();
              lexState = "zero";
              return;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              buffer = read();
              lexState = "decimalInteger";
              return;
            case "I":
              read();
              literal("nfinity");
              return newToken("numeric", Infinity);
            case "N":
              read();
              literal("aN");
              return newToken("numeric", NaN);
            case '"':
            case "'":
              doubleQuote = read() === '"';
              buffer = "";
              lexState = "string";
              return;
          }
          throw invalidChar(read());
        },
        identifierNameStartEscape: function identifierNameStartEscape() {
          if (c !== "u") {
            throw invalidChar(read());
          }
          read();
          var u = unicodeEscape();
          switch (u) {
            case "$":
            case "_":
              break;
            default:
              if (!util.isIdStartChar(u)) {
                throw invalidIdentifier();
              }
              break;
          }
          buffer += u;
          lexState = "identifierName";
        },
        identifierName: function identifierName() {
          switch (c) {
            case "$":
            case "_":
            case "‌":
            case "‍":
              buffer += read();
              return;
            case "\\":
              read();
              lexState = "identifierNameEscape";
              return;
          }
          if (util.isIdContinueChar(c)) {
            buffer += read();
            return;
          }
          return newToken("identifier", buffer);
        },
        identifierNameEscape: function identifierNameEscape() {
          if (c !== "u") {
            throw invalidChar(read());
          }
          read();
          var u = unicodeEscape();
          switch (u) {
            case "$":
            case "_":
            case "‌":
            case "‍":
              break;
            default:
              if (!util.isIdContinueChar(u)) {
                throw invalidIdentifier();
              }
              break;
          }
          buffer += u;
          lexState = "identifierName";
        },
        sign: function sign$1() {
          switch (c) {
            case ".":
              buffer = read();
              lexState = "decimalPointLeading";
              return;
            case "0":
              buffer = read();
              lexState = "zero";
              return;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              buffer = read();
              lexState = "decimalInteger";
              return;
            case "I":
              read();
              literal("nfinity");
              return newToken("numeric", sign * Infinity);
            case "N":
              read();
              literal("aN");
              return newToken("numeric", NaN);
          }
          throw invalidChar(read());
        },
        zero: function zero() {
          switch (c) {
            case ".":
              buffer += read();
              lexState = "decimalPoint";
              return;
            case "e":
            case "E":
              buffer += read();
              lexState = "decimalExponent";
              return;
            case "x":
            case "X":
              buffer += read();
              lexState = "hexadecimal";
              return;
          }
          return newToken("numeric", sign * 0);
        },
        decimalInteger: function decimalInteger() {
          switch (c) {
            case ".":
              buffer += read();
              lexState = "decimalPoint";
              return;
            case "e":
            case "E":
              buffer += read();
              lexState = "decimalExponent";
              return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        decimalPointLeading: function decimalPointLeading() {
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalFraction";
            return;
          }
          throw invalidChar(read());
        },
        decimalPoint: function decimalPoint() {
          switch (c) {
            case "e":
            case "E":
              buffer += read();
              lexState = "decimalExponent";
              return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalFraction";
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        decimalFraction: function decimalFraction() {
          switch (c) {
            case "e":
            case "E":
              buffer += read();
              lexState = "decimalExponent";
              return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        decimalExponent: function decimalExponent() {
          switch (c) {
            case "+":
            case "-":
              buffer += read();
              lexState = "decimalExponentSign";
              return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalExponentInteger";
            return;
          }
          throw invalidChar(read());
        },
        decimalExponentSign: function decimalExponentSign() {
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalExponentInteger";
            return;
          }
          throw invalidChar(read());
        },
        decimalExponentInteger: function decimalExponentInteger() {
          if (util.isDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        hexadecimal: function hexadecimal() {
          if (util.isHexDigit(c)) {
            buffer += read();
            lexState = "hexadecimalInteger";
            return;
          }
          throw invalidChar(read());
        },
        hexadecimalInteger: function hexadecimalInteger() {
          if (util.isHexDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        string: function string() {
          switch (c) {
            case "\\":
              read();
              buffer += escape();
              return;
            case '"':
              if (doubleQuote) {
                read();
                return newToken("string", buffer);
              }
              buffer += read();
              return;
            case "'":
              if (!doubleQuote) {
                read();
                return newToken("string", buffer);
              }
              buffer += read();
              return;
            case "\n":
            case "\r":
              throw invalidChar(read());
            case "\u2028":
            case "\u2029":
              separatorChar(c);
              break;
            case void 0:
              throw invalidChar(read());
          }
          buffer += read();
        },
        start: function start() {
          switch (c) {
            case "{":
            case "[":
              return newToken("punctuator", read());
          }
          lexState = "value";
        },
        beforePropertyName: function beforePropertyName() {
          switch (c) {
            case "$":
            case "_":
              buffer = read();
              lexState = "identifierName";
              return;
            case "\\":
              read();
              lexState = "identifierNameStartEscape";
              return;
            case "}":
              return newToken("punctuator", read());
            case '"':
            case "'":
              doubleQuote = read() === '"';
              lexState = "string";
              return;
          }
          if (util.isIdStartChar(c)) {
            buffer += read();
            lexState = "identifierName";
            return;
          }
          throw invalidChar(read());
        },
        afterPropertyName: function afterPropertyName() {
          if (c === ":") {
            return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        beforePropertyValue: function beforePropertyValue() {
          lexState = "value";
        },
        afterPropertyValue: function afterPropertyValue() {
          switch (c) {
            case ",":
            case "}":
              return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        beforeArrayValue: function beforeArrayValue() {
          if (c === "]") {
            return newToken("punctuator", read());
          }
          lexState = "value";
        },
        afterArrayValue: function afterArrayValue() {
          switch (c) {
            case ",":
            case "]":
              return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        end: function end() {
          throw invalidChar(read());
        }
      };
      function newToken(type, value) {
        return {
          type,
          value,
          line,
          column
        };
      }
      function literal(s) {
        for (var i = 0, list = s; i < list.length; i += 1) {
          var c2 = list[i];
          var p = peek();
          if (p !== c2) {
            throw invalidChar(read());
          }
          read();
        }
      }
      function escape() {
        var c2 = peek();
        switch (c2) {
          case "b":
            read();
            return "\b";
          case "f":
            read();
            return "\f";
          case "n":
            read();
            return "\n";
          case "r":
            read();
            return "\r";
          case "t":
            read();
            return "	";
          case "v":
            read();
            return "\v";
          case "0":
            read();
            if (util.isDigit(peek())) {
              throw invalidChar(read());
            }
            return "\0";
          case "x":
            read();
            return hexEscape();
          case "u":
            read();
            return unicodeEscape();
          case "\n":
          case "\u2028":
          case "\u2029":
            read();
            return "";
          case "\r":
            read();
            if (peek() === "\n") {
              read();
            }
            return "";
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            throw invalidChar(read());
          case void 0:
            throw invalidChar(read());
        }
        return read();
      }
      function hexEscape() {
        var buffer2 = "";
        var c2 = peek();
        if (!util.isHexDigit(c2)) {
          throw invalidChar(read());
        }
        buffer2 += read();
        c2 = peek();
        if (!util.isHexDigit(c2)) {
          throw invalidChar(read());
        }
        buffer2 += read();
        return String.fromCodePoint(parseInt(buffer2, 16));
      }
      function unicodeEscape() {
        var buffer2 = "";
        var count = 4;
        while (count-- > 0) {
          var c2 = peek();
          if (!util.isHexDigit(c2)) {
            throw invalidChar(read());
          }
          buffer2 += read();
        }
        return String.fromCodePoint(parseInt(buffer2, 16));
      }
      var parseStates = {
        start: function start() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          push();
        },
        beforePropertyName: function beforePropertyName() {
          switch (token.type) {
            case "identifier":
            case "string":
              key = token.value;
              parseState = "afterPropertyName";
              return;
            case "punctuator":
              pop();
              return;
            case "eof":
              throw invalidEOF();
          }
        },
        afterPropertyName: function afterPropertyName() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          parseState = "beforePropertyValue";
        },
        beforePropertyValue: function beforePropertyValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          push();
        },
        beforeArrayValue: function beforeArrayValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          if (token.type === "punctuator" && token.value === "]") {
            pop();
            return;
          }
          push();
        },
        afterPropertyValue: function afterPropertyValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          switch (token.value) {
            case ",":
              parseState = "beforePropertyName";
              return;
            case "}":
              pop();
          }
        },
        afterArrayValue: function afterArrayValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          switch (token.value) {
            case ",":
              parseState = "beforeArrayValue";
              return;
            case "]":
              pop();
          }
        },
        end: function end() {
        }
      };
      function push() {
        var value;
        switch (token.type) {
          case "punctuator":
            switch (token.value) {
              case "{":
                value = {};
                break;
              case "[":
                value = [];
                break;
            }
            break;
          case "null":
          case "boolean":
          case "numeric":
          case "string":
            value = token.value;
            break;
        }
        if (root === void 0) {
          root = value;
        } else {
          var parent = stack[stack.length - 1];
          if (Array.isArray(parent)) {
            parent.push(value);
          } else {
            Object.defineProperty(parent, key, {
              value,
              writable: true,
              enumerable: true,
              configurable: true
            });
          }
        }
        if (value !== null && typeof value === "object") {
          stack.push(value);
          if (Array.isArray(value)) {
            parseState = "beforeArrayValue";
          } else {
            parseState = "beforePropertyName";
          }
        } else {
          var current = stack[stack.length - 1];
          if (current == null) {
            parseState = "end";
          } else if (Array.isArray(current)) {
            parseState = "afterArrayValue";
          } else {
            parseState = "afterPropertyValue";
          }
        }
      }
      function pop() {
        stack.pop();
        var current = stack[stack.length - 1];
        if (current == null) {
          parseState = "end";
        } else if (Array.isArray(current)) {
          parseState = "afterArrayValue";
        } else {
          parseState = "afterPropertyValue";
        }
      }
      function invalidChar(c2) {
        if (c2 === void 0) {
          return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
        }
        return syntaxError("JSON5: invalid character '" + formatChar(c2) + "' at " + line + ":" + column);
      }
      function invalidEOF() {
        return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
      }
      function invalidIdentifier() {
        column -= 5;
        return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
      }
      function separatorChar(c2) {
        console.warn("JSON5: '" + formatChar(c2) + "' in strings is not valid ECMAScript; consider escaping");
      }
      function formatChar(c2) {
        var replacements = {
          "'": "\\'",
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t",
          "\v": "\\v",
          "\0": "\\0",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        if (replacements[c2]) {
          return replacements[c2];
        }
        if (c2 < " ") {
          var hexString = c2.charCodeAt(0).toString(16);
          return "\\x" + ("00" + hexString).substring(hexString.length);
        }
        return c2;
      }
      function syntaxError(message) {
        var err = new SyntaxError(message);
        err.lineNumber = line;
        err.columnNumber = column;
        return err;
      }
      var stringify = function stringify2(value, replacer, space) {
        var stack2 = [];
        var indent = "";
        var propertyList;
        var replacerFunc;
        var gap = "";
        var quote;
        if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
          space = replacer.space;
          quote = replacer.quote;
          replacer = replacer.replacer;
        }
        if (typeof replacer === "function") {
          replacerFunc = replacer;
        } else if (Array.isArray(replacer)) {
          propertyList = [];
          for (var i = 0, list = replacer; i < list.length; i += 1) {
            var v = list[i];
            var item = void 0;
            if (typeof v === "string") {
              item = v;
            } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
              item = String(v);
            }
            if (item !== void 0 && propertyList.indexOf(item) < 0) {
              propertyList.push(item);
            }
          }
        }
        if (space instanceof Number) {
          space = Number(space);
        } else if (space instanceof String) {
          space = String(space);
        }
        if (typeof space === "number") {
          if (space > 0) {
            space = Math.min(10, Math.floor(space));
            gap = "          ".substr(0, space);
          }
        } else if (typeof space === "string") {
          gap = space.substr(0, 10);
        }
        return serializeProperty("", { "": value });
        function serializeProperty(key2, holder) {
          var value2 = holder[key2];
          if (value2 != null) {
            if (typeof value2.toJSON5 === "function") {
              value2 = value2.toJSON5(key2);
            } else if (typeof value2.toJSON === "function") {
              value2 = value2.toJSON(key2);
            }
          }
          if (replacerFunc) {
            value2 = replacerFunc.call(holder, key2, value2);
          }
          if (value2 instanceof Number) {
            value2 = Number(value2);
          } else if (value2 instanceof String) {
            value2 = String(value2);
          } else if (value2 instanceof Boolean) {
            value2 = value2.valueOf();
          }
          switch (value2) {
            case null:
              return "null";
            case true:
              return "true";
            case false:
              return "false";
          }
          if (typeof value2 === "string") {
            return quoteString(value2, false);
          }
          if (typeof value2 === "number") {
            return String(value2);
          }
          if (typeof value2 === "object") {
            return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
          }
          return void 0;
        }
        function quoteString(value2) {
          var quotes = {
            "'": 0.1,
            '"': 0.2
          };
          var replacements = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "\v": "\\v",
            "\0": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
          };
          var product = "";
          for (var i2 = 0; i2 < value2.length; i2++) {
            var c2 = value2[i2];
            switch (c2) {
              case "'":
              case '"':
                quotes[c2]++;
                product += c2;
                continue;
              case "\0":
                if (util.isDigit(value2[i2 + 1])) {
                  product += "\\x00";
                  continue;
                }
            }
            if (replacements[c2]) {
              product += replacements[c2];
              continue;
            }
            if (c2 < " ") {
              var hexString = c2.charCodeAt(0).toString(16);
              product += "\\x" + ("00" + hexString).substring(hexString.length);
              continue;
            }
            product += c2;
          }
          var quoteChar = quote || Object.keys(quotes).reduce(function(a, b) {
            return quotes[a] < quotes[b] ? a : b;
          });
          product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
          return quoteChar + product + quoteChar;
        }
        function serializeObject(value2) {
          if (stack2.indexOf(value2) >= 0) {
            throw TypeError("Converting circular structure to JSON5");
          }
          stack2.push(value2);
          var stepback = indent;
          indent = indent + gap;
          var keys = propertyList || Object.keys(value2);
          var partial = [];
          for (var i2 = 0, list2 = keys; i2 < list2.length; i2 += 1) {
            var key2 = list2[i2];
            var propertyString = serializeProperty(key2, value2);
            if (propertyString !== void 0) {
              var member = serializeKey(key2) + ":";
              if (gap !== "") {
                member += " ";
              }
              member += propertyString;
              partial.push(member);
            }
          }
          var final;
          if (partial.length === 0) {
            final = "{}";
          } else {
            var properties;
            if (gap === "") {
              properties = partial.join(",");
              final = "{" + properties + "}";
            } else {
              var separator = ",\n" + indent;
              properties = partial.join(separator);
              final = "{\n" + indent + properties + ",\n" + stepback + "}";
            }
          }
          stack2.pop();
          indent = stepback;
          return final;
        }
        function serializeKey(key2) {
          if (key2.length === 0) {
            return quoteString(key2, true);
          }
          var firstChar = String.fromCodePoint(key2.codePointAt(0));
          if (!util.isIdStartChar(firstChar)) {
            return quoteString(key2, true);
          }
          for (var i2 = firstChar.length; i2 < key2.length; i2++) {
            if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i2)))) {
              return quoteString(key2, true);
            }
          }
          return key2;
        }
        function serializeArray(value2) {
          if (stack2.indexOf(value2) >= 0) {
            throw TypeError("Converting circular structure to JSON5");
          }
          stack2.push(value2);
          var stepback = indent;
          indent = indent + gap;
          var partial = [];
          for (var i2 = 0; i2 < value2.length; i2++) {
            var propertyString = serializeProperty(String(i2), value2);
            partial.push(propertyString !== void 0 ? propertyString : "null");
          }
          var final;
          if (partial.length === 0) {
            final = "[]";
          } else {
            if (gap === "") {
              var properties = partial.join(",");
              final = "[" + properties + "]";
            } else {
              var separator = ",\n" + indent;
              var properties$1 = partial.join(separator);
              final = "[\n" + indent + properties$1 + ",\n" + stepback + "]";
            }
          }
          stack2.pop();
          indent = stepback;
          return final;
        }
      };
      var JSON5 = {
        parse,
        stringify
      };
      var lib = JSON5;
      var es5 = lib;
      return es5;
    });
  }
});

// node_modules/loader-utils/lib/parseQuery.js
var require_parseQuery = __commonJS({
  "node_modules/loader-utils/lib/parseQuery.js"(exports, module) {
    "use strict";
    var JSON5 = require_dist();
    var specialValues = {
      null: null,
      true: true,
      false: false
    };
    function parseQuery(query) {
      if (query.substr(0, 1) !== "?") {
        throw new Error(
          "A valid query string passed to parseQuery should begin with '?'"
        );
      }
      query = query.substr(1);
      if (!query) {
        return {};
      }
      if (query.substr(0, 1) === "{" && query.substr(-1) === "}") {
        return JSON5.parse(query);
      }
      const queryArgs = query.split(/[,&]/g);
      const result = /* @__PURE__ */ Object.create(null);
      queryArgs.forEach((arg) => {
        const idx = arg.indexOf("=");
        if (idx >= 0) {
          let name = arg.substr(0, idx);
          let value = decodeURIComponent(arg.substr(idx + 1));
          if (specialValues.hasOwnProperty(value)) {
            value = specialValues[value];
          }
          if (name.substr(-2) === "[]") {
            name = decodeURIComponent(name.substr(0, name.length - 2));
            if (!Array.isArray(result[name])) {
              result[name] = [];
            }
            result[name].push(value);
          } else {
            name = decodeURIComponent(name);
            result[name] = value;
          }
        } else {
          if (arg.substr(0, 1) === "-") {
            result[decodeURIComponent(arg.substr(1))] = false;
          } else if (arg.substr(0, 1) === "+") {
            result[decodeURIComponent(arg.substr(1))] = true;
          } else {
            result[decodeURIComponent(arg)] = true;
          }
        }
      });
      return result;
    }
    module.exports = parseQuery;
  }
});

// node_modules/loader-utils/lib/getOptions.js
var require_getOptions = __commonJS({
  "node_modules/loader-utils/lib/getOptions.js"(exports, module) {
    "use strict";
    var parseQuery = require_parseQuery();
    function getOptions(loaderContext) {
      const query = loaderContext.query;
      if (typeof query === "string" && query !== "") {
        return parseQuery(loaderContext.query);
      }
      if (!query || typeof query !== "object") {
        return {};
      }
      return query;
    }
    module.exports = getOptions;
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/loader-utils/lib/stringifyRequest.js
var require_stringifyRequest = __commonJS({
  "node_modules/loader-utils/lib/stringifyRequest.js"(exports, module) {
    "use strict";
    var path = require_path();
    var matchRelativePath = /^\.\.?[/\\]/;
    function isAbsolutePath(str) {
      return path.posix.isAbsolute(str) || path.win32.isAbsolute(str);
    }
    function isRelativePath(str) {
      return matchRelativePath.test(str);
    }
    function stringifyRequest(loaderContext, request) {
      const splitted = request.split("!");
      const context = loaderContext.context || loaderContext.options && loaderContext.options.context;
      return JSON.stringify(
        splitted.map((part) => {
          const splittedPart = part.match(/^(.*?)(\?.*)/);
          const query = splittedPart ? splittedPart[2] : "";
          let singlePath = splittedPart ? splittedPart[1] : part;
          if (isAbsolutePath(singlePath) && context) {
            singlePath = path.relative(context, singlePath);
            if (isAbsolutePath(singlePath)) {
              return singlePath + query;
            }
            if (isRelativePath(singlePath) === false) {
              singlePath = "./" + singlePath;
            }
          }
          return singlePath.replace(/\\/g, "/") + query;
        }).join("!")
      );
    }
    module.exports = stringifyRequest;
  }
});

// node_modules/loader-utils/lib/getRemainingRequest.js
var require_getRemainingRequest = __commonJS({
  "node_modules/loader-utils/lib/getRemainingRequest.js"(exports, module) {
    "use strict";
    function getRemainingRequest(loaderContext) {
      if (loaderContext.remainingRequest) {
        return loaderContext.remainingRequest;
      }
      const request = loaderContext.loaders.slice(loaderContext.loaderIndex + 1).map((obj) => obj.request).concat([loaderContext.resource]);
      return request.join("!");
    }
    module.exports = getRemainingRequest;
  }
});

// node_modules/loader-utils/lib/getCurrentRequest.js
var require_getCurrentRequest = __commonJS({
  "node_modules/loader-utils/lib/getCurrentRequest.js"(exports, module) {
    "use strict";
    function getCurrentRequest(loaderContext) {
      if (loaderContext.currentRequest) {
        return loaderContext.currentRequest;
      }
      const request = loaderContext.loaders.slice(loaderContext.loaderIndex).map((obj) => obj.request).concat([loaderContext.resource]);
      return request.join("!");
    }
    module.exports = getCurrentRequest;
  }
});

// node_modules/loader-utils/lib/isUrlRequest.js
var require_isUrlRequest = __commonJS({
  "node_modules/loader-utils/lib/isUrlRequest.js"(exports, module) {
    "use strict";
    var path = require_path();
    function isUrlRequest(url, root) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !path.win32.isAbsolute(url)) {
        return false;
      }
      if (/^\/\//.test(url)) {
        return false;
      }
      if (/^[{}[\]#*;,'§$%&(=?`´^°<>]/.test(url)) {
        return false;
      }
      if ((root === void 0 || root === false) && /^\//.test(url)) {
        return false;
      }
      return true;
    }
    module.exports = isUrlRequest;
  }
});

// node_modules/loader-utils/lib/urlToRequest.js
var require_urlToRequest = __commonJS({
  "node_modules/loader-utils/lib/urlToRequest.js"(exports, module) {
    "use strict";
    var matchNativeWin32Path = /^[A-Z]:[/\\]|^\\\\/i;
    function urlToRequest(url, root) {
      if (url === "") {
        return "";
      }
      const moduleRequestRegex = /^[^?]*~/;
      let request;
      if (matchNativeWin32Path.test(url)) {
        request = url;
      } else if (root !== void 0 && root !== false && /^\//.test(url)) {
        switch (typeof root) {
          case "string":
            if (moduleRequestRegex.test(root)) {
              request = root.replace(/([^~/])$/, "$1/") + url.slice(1);
            } else {
              request = root + url;
            }
            break;
          case "boolean":
            request = url;
            break;
          default:
            throw new Error(
              "Unexpected parameters to loader-utils 'urlToRequest': url = " + url + ", root = " + root + "."
            );
        }
      } else if (/^\.\.?\//.test(url)) {
        request = url;
      } else {
        request = "./" + url;
      }
      if (moduleRequestRegex.test(request)) {
        request = request.replace(moduleRequestRegex, "");
      }
      return request;
    }
    module.exports = urlToRequest;
  }
});

// node_modules/loader-utils/lib/parseString.js
var require_parseString = __commonJS({
  "node_modules/loader-utils/lib/parseString.js"(exports, module) {
    "use strict";
    function parseString(str) {
      try {
        if (str[0] === '"') {
          return JSON.parse(str);
        }
        if (str[0] === "'" && str.substr(str.length - 1) === "'") {
          return parseString(
            str.replace(/\\.|"/g, (x) => x === '"' ? '\\"' : x).replace(/^'|'$/g, '"')
          );
        }
        return JSON.parse('"' + str + '"');
      } catch (e) {
        return str;
      }
    }
    module.exports = parseString;
  }
});

// node_modules/big.js/big.js
var require_big = __commonJS({
  "node_modules/big.js/big.js"(exports, module) {
    (function(GLOBAL) {
      "use strict";
      var Big, DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function _Big_() {
        function Big2(n) {
          var x = this;
          if (!(x instanceof Big2)) return n === UNDEFINED ? _Big_() : new Big2(n);
          if (n instanceof Big2) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
          } else {
            parse(x, n);
          }
          x.constructor = Big2;
        }
        Big2.prototype = P;
        Big2.DP = DP;
        Big2.RM = RM;
        Big2.NE = NE;
        Big2.PE = PE;
        Big2.version = "5.2.2";
        return Big2;
      }
      function parse(x, n) {
        var e, i, nl;
        if (n === 0 && 1 / n < 0) n = "-0";
        else if (!NUMERIC.test(n += "")) throw Error(INVALID + "number");
        x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
        if ((e = n.indexOf(".")) > -1) n = n.replace(".", "");
        if ((i = n.search(/e/i)) > 0) {
          if (e < 0) e = i;
          e += +n.slice(i + 1);
          n = n.substring(0, i);
        } else if (e < 0) {
          e = n.length;
        }
        nl = n.length;
        for (i = 0; i < nl && n.charAt(i) == "0"; ) ++i;
        if (i == nl) {
          x.c = [x.e = 0];
        } else {
          for (; nl > 0 && n.charAt(--nl) == "0"; ) ;
          x.e = e - i - 1;
          x.c = [];
          for (e = 0; i <= nl; ) x.c[e++] = +n.charAt(i++);
        }
        return x;
      }
      function round(x, dp, rm, more) {
        var xc = x.c, i = x.e + dp + 1;
        if (i < xc.length) {
          if (rm === 1) {
            more = xc[i] >= 5;
          } else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 && (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
          } else if (rm === 3) {
            more = more || !!xc[0];
          } else {
            more = false;
            if (rm !== 0) throw Error(INVALID_RM);
          }
          if (i < 1) {
            xc.length = 1;
            if (more) {
              x.e = -dp;
              xc[0] = 1;
            } else {
              xc[0] = x.e = 0;
            }
          } else {
            xc.length = i--;
            if (more) {
              for (; ++xc[i] > 9; ) {
                xc[i] = 0;
                if (!i--) {
                  ++x.e;
                  xc.unshift(1);
                }
              }
            }
            for (i = xc.length; !xc[--i]; ) xc.pop();
          }
        } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
          throw Error(INVALID_RM);
        }
        return x;
      }
      function stringify(x, id, n, k) {
        var e, s, Big2 = x.constructor, z = !x.c[0];
        if (n !== UNDEFINED) {
          if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
            throw Error(id == 3 ? INVALID + "precision" : INVALID_DP);
          }
          x = new Big2(x);
          n = k - x.e;
          if (x.c.length > ++k) round(x, n, Big2.RM);
          if (id == 2) k = x.e + n + 1;
          for (; x.c.length < k; ) x.c.push(0);
        }
        e = x.e;
        s = x.c.join("");
        n = s.length;
        if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big2.NE || e >= Big2.PE)) {
          s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e;
        } else if (e < 0) {
          for (; ++e; ) s = "0" + s;
          s = "0." + s;
        } else if (e > 0) {
          if (++e > n) for (e -= n; e--; ) s += "0";
          else if (e < n) s = s.slice(0, e) + "." + s.slice(e);
        } else if (n > 1) {
          s = s.charAt(0) + "." + s.slice(1);
        }
        return x.s < 0 && (!z || id == 4) ? "-" + s : s;
      }
      P.abs = function() {
        var x = new this.constructor(this);
        x.s = 1;
        return x;
      };
      P.cmp = function(y) {
        var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
        if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
        if (i != j) return i;
        isneg = i < 0;
        if (k != l) return k > l ^ isneg ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        for (i = -1; ++i < j; ) {
          if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
        }
        return k == l ? 0 : k > l ^ isneg ? 1 : -1;
      };
      P.div = function(y) {
        var x = this, Big2 = x.constructor, a = x.c, b = (y = new Big2(y)).c, k = x.s == y.s ? 1 : -1, dp = Big2.DP;
        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
        if (!b[0]) throw Error(DIV_BY_ZERO);
        if (!a[0]) return new Big2(k * 0);
        var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, d = dp + (q.e = x.e - y.e) + 1;
        q.s = k;
        k = d < 0 ? 0 : d;
        bz.unshift(0);
        for (; rl++ < bl; ) r.push(0);
        do {
          for (n = 0; n < 10; n++) {
            if (bl != (rl = r.length)) {
              cmp = bl > rl ? 1 : -1;
            } else {
              for (ri = -1, cmp = 0; ++ri < bl; ) {
                if (b[ri] != r[ri]) {
                  cmp = b[ri] > r[ri] ? 1 : -1;
                  break;
                }
              }
            }
            if (cmp < 0) {
              for (bt = rl == bl ? b : bz; rl; ) {
                if (r[--rl] < bt[rl]) {
                  ri = rl;
                  for (; ri && !r[--ri]; ) r[ri] = 9;
                  --r[ri];
                  r[rl] += 10;
                }
                r[rl] -= bt[rl];
              }
              for (; !r[0]; ) r.shift();
            } else {
              break;
            }
          }
          qc[qi++] = cmp ? n : ++n;
          if (r[0] && cmp) r[rl] = a[ai] || 0;
          else r = [a[ai]];
        } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
        if (!qc[0] && qi != 1) {
          qc.shift();
          q.e--;
        }
        if (qi > d) round(q, dp, Big2.RM, r[0] !== UNDEFINED);
        return q;
      };
      P.eq = function(y) {
        return !this.cmp(y);
      };
      P.gt = function(y) {
        return this.cmp(y) > 0;
      };
      P.gte = function(y) {
        return this.cmp(y) > -1;
      };
      P.lt = function(y) {
        return this.cmp(y) < 0;
      };
      P.lte = function(y) {
        return this.cmp(y) < 1;
      };
      P.minus = P.sub = function(y) {
        var i, j, t, xlty, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
        if (a != b) {
          y.s = -b;
          return x.plus(y);
        }
        var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
        if (!xc[0] || !yc[0]) {
          return yc[0] ? (y.s = -b, y) : new Big2(xc[0] ? x : 0);
        }
        if (a = xe - ye) {
          if (xlty = a < 0) {
            a = -a;
            t = xc;
          } else {
            ye = xe;
            t = yc;
          }
          t.reverse();
          for (b = a; b--; ) t.push(0);
          t.reverse();
        } else {
          j = ((xlty = xc.length < yc.length) ? xc : yc).length;
          for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
              xlty = xc[b] < yc[b];
              break;
            }
          }
        }
        if (xlty) {
          t = xc;
          xc = yc;
          yc = t;
          y.s = -y.s;
        }
        if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--; ) xc[i++] = 0;
        for (b = i; j > a; ) {
          if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i]; ) xc[i] = 9;
            --xc[i];
            xc[j] += 10;
          }
          xc[j] -= yc[j];
        }
        for (; xc[--b] === 0; ) xc.pop();
        for (; xc[0] === 0; ) {
          xc.shift();
          --ye;
        }
        if (!xc[0]) {
          y.s = 1;
          xc = [ye = 0];
        }
        y.c = xc;
        y.e = ye;
        return y;
      };
      P.mod = function(y) {
        var ygtx, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
        if (!y.c[0]) throw Error(DIV_BY_ZERO);
        x.s = y.s = 1;
        ygtx = y.cmp(x) == 1;
        x.s = a;
        y.s = b;
        if (ygtx) return new Big2(x);
        a = Big2.DP;
        b = Big2.RM;
        Big2.DP = Big2.RM = 0;
        x = x.div(y);
        Big2.DP = a;
        Big2.RM = b;
        return this.minus(x.times(y));
      };
      P.plus = P.add = function(y) {
        var t, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
        if (a != b) {
          y.s = -b;
          return x.minus(y);
        }
        var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
        if (!xc[0] || !yc[0]) return yc[0] ? y : new Big2(xc[0] ? x : a * 0);
        xc = xc.slice();
        if (a = xe - ye) {
          if (a > 0) {
            ye = xe;
            t = yc;
          } else {
            a = -a;
            t = xc;
          }
          t.reverse();
          for (; a--; ) t.push(0);
          t.reverse();
        }
        if (xc.length - yc.length < 0) {
          t = yc;
          yc = xc;
          xc = t;
        }
        a = yc.length;
        for (b = 0; a; xc[a] %= 10) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
        if (b) {
          xc.unshift(b);
          ++ye;
        }
        for (a = xc.length; xc[--a] === 0; ) xc.pop();
        y.c = xc;
        y.e = ye;
        return y;
      };
      P.pow = function(n) {
        var x = this, one = new x.constructor(1), y = one, isneg = n < 0;
        if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + "exponent");
        if (isneg) n = -n;
        for (; ; ) {
          if (n & 1) y = y.times(x);
          n >>= 1;
          if (!n) break;
          x = x.times(x);
        }
        return isneg ? one.div(y) : y;
      };
      P.round = function(dp, rm) {
        var Big2 = this.constructor;
        if (dp === UNDEFINED) dp = 0;
        else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
        return round(new Big2(this), dp, rm === UNDEFINED ? Big2.RM : rm);
      };
      P.sqrt = function() {
        var r, c, t, x = this, Big2 = x.constructor, s = x.s, e = x.e, half = new Big2(0.5);
        if (!x.c[0]) return new Big2(x);
        if (s < 0) throw Error(NAME + "No square root");
        s = Math.sqrt(x + "");
        if (s === 0 || s === 1 / 0) {
          c = x.c.join("");
          if (!(c.length + e & 1)) c += "0";
          s = Math.sqrt(c);
          e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
          r = new Big2((s == 1 / 0 ? "1e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
        } else {
          r = new Big2(s);
        }
        e = r.e + (Big2.DP += 4);
        do {
          t = r;
          r = half.times(t.plus(x.div(t)));
        } while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));
        return round(r, Big2.DP -= 4, Big2.RM);
      };
      P.times = P.mul = function(y) {
        var c, x = this, Big2 = x.constructor, xc = x.c, yc = (y = new Big2(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
        y.s = x.s == y.s ? 1 : -1;
        if (!xc[0] || !yc[0]) return new Big2(y.s * 0);
        y.e = i + j;
        if (a < b) {
          c = xc;
          xc = yc;
          yc = c;
          j = a;
          a = b;
          b = j;
        }
        for (c = new Array(j = a + b); j--; ) c[j] = 0;
        for (i = b; i--; ) {
          b = 0;
          for (j = a + i; j > i; ) {
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            b = b / 10 | 0;
          }
          c[j] = (c[j] + b) % 10;
        }
        if (b) ++y.e;
        else c.shift();
        for (i = c.length; !c[--i]; ) c.pop();
        y.c = c;
        return y;
      };
      P.toExponential = function(dp) {
        return stringify(this, 1, dp, dp);
      };
      P.toFixed = function(dp) {
        return stringify(this, 2, dp, this.e + dp);
      };
      P.toPrecision = function(sd) {
        return stringify(this, 3, sd, sd - 1);
      };
      P.toString = function() {
        return stringify(this);
      };
      P.valueOf = P.toJSON = function() {
        return stringify(this, 4);
      };
      Big = _Big_();
      Big["default"] = Big.Big = Big;
      if (typeof define === "function" && define.amd) {
        define(function() {
          return Big;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = Big;
      } else {
        GLOBAL.Big = Big;
      }
    })(exports);
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/loader-utils/lib/hash/wasm-hash.js
var require_wasm_hash = __commonJS({
  "node_modules/loader-utils/lib/hash/wasm-hash.js"(exports, module) {
    "use strict";
    var MAX_SHORT_STRING = Math.floor((65536 - 64) / 4) & ~3;
    var WasmHash = class {
      /**
       * @param {WebAssembly.Instance} instance wasm instance
       * @param {WebAssembly.Instance[]} instancesPool pool of instances
       * @param {number} chunkSize size of data chunks passed to wasm
       * @param {number} digestSize size of digest returned by wasm
       */
      constructor(instance, instancesPool, chunkSize, digestSize) {
        const exports2 = (
          /** @type {any} */
          instance.exports
        );
        exports2.init();
        this.exports = exports2;
        this.mem = Buffer.from(exports2.memory.buffer, 0, 65536);
        this.buffered = 0;
        this.instancesPool = instancesPool;
        this.chunkSize = chunkSize;
        this.digestSize = digestSize;
      }
      reset() {
        this.buffered = 0;
        this.exports.init();
      }
      /**
       * @param {Buffer | string} data data
       * @param {BufferEncoding=} encoding encoding
       * @returns {this} itself
       */
      update(data, encoding) {
        if (typeof data === "string") {
          while (data.length > MAX_SHORT_STRING) {
            this._updateWithShortString(data.slice(0, MAX_SHORT_STRING), encoding);
            data = data.slice(MAX_SHORT_STRING);
          }
          this._updateWithShortString(data, encoding);
          return this;
        }
        this._updateWithBuffer(data);
        return this;
      }
      /**
       * @param {string} data data
       * @param {BufferEncoding=} encoding encoding
       * @returns {void}
       */
      _updateWithShortString(data, encoding) {
        const { exports: exports2, buffered, mem, chunkSize } = this;
        let endPos;
        if (data.length < 70) {
          if (!encoding || encoding === "utf-8" || encoding === "utf8") {
            endPos = buffered;
            for (let i = 0; i < data.length; i++) {
              const cc = data.charCodeAt(i);
              if (cc < 128) {
                mem[endPos++] = cc;
              } else if (cc < 2048) {
                mem[endPos] = cc >> 6 | 192;
                mem[endPos + 1] = cc & 63 | 128;
                endPos += 2;
              } else {
                endPos += mem.write(data.slice(i), endPos, encoding);
                break;
              }
            }
          } else if (encoding === "latin1") {
            endPos = buffered;
            for (let i = 0; i < data.length; i++) {
              const cc = data.charCodeAt(i);
              mem[endPos++] = cc;
            }
          } else {
            endPos = buffered + mem.write(data, buffered, encoding);
          }
        } else {
          endPos = buffered + mem.write(data, buffered, encoding);
        }
        if (endPos < chunkSize) {
          this.buffered = endPos;
        } else {
          const l = endPos & ~(this.chunkSize - 1);
          exports2.update(l);
          const newBuffered = endPos - l;
          this.buffered = newBuffered;
          if (newBuffered > 0) {
            mem.copyWithin(0, l, endPos);
          }
        }
      }
      /**
       * @param {Buffer} data data
       * @returns {void}
       */
      _updateWithBuffer(data) {
        const { exports: exports2, buffered, mem } = this;
        const length = data.length;
        if (buffered + length < this.chunkSize) {
          data.copy(mem, buffered, 0, length);
          this.buffered += length;
        } else {
          const l = buffered + length & ~(this.chunkSize - 1);
          if (l > 65536) {
            let i = 65536 - buffered;
            data.copy(mem, buffered, 0, i);
            exports2.update(65536);
            const stop = l - buffered - 65536;
            while (i < stop) {
              data.copy(mem, 0, i, i + 65536);
              exports2.update(65536);
              i += 65536;
            }
            data.copy(mem, 0, i, l - buffered);
            exports2.update(l - buffered - i);
          } else {
            data.copy(mem, buffered, 0, l - buffered);
            exports2.update(l);
          }
          const newBuffered = length + buffered - l;
          this.buffered = newBuffered;
          if (newBuffered > 0) {
            data.copy(mem, 0, length - newBuffered, length);
          }
        }
      }
      digest(type) {
        const { exports: exports2, buffered, mem, digestSize } = this;
        exports2.final(buffered);
        this.instancesPool.push(this);
        const hex = mem.toString("latin1", 0, digestSize);
        if (type === "hex") {
          return hex;
        }
        if (type === "binary" || !type) {
          return Buffer.from(hex, "hex");
        }
        return Buffer.from(hex, "hex").toString(type);
      }
    };
    var create = (wasmModule, instancesPool, chunkSize, digestSize) => {
      if (instancesPool.length > 0) {
        const old = instancesPool.pop();
        old.reset();
        return old;
      } else {
        return new WasmHash(
          new WebAssembly.Instance(wasmModule),
          instancesPool,
          chunkSize,
          digestSize
        );
      }
    };
    module.exports = create;
    module.exports.MAX_SHORT_STRING = MAX_SHORT_STRING;
  }
});

// node_modules/loader-utils/lib/hash/md4.js
var require_md4 = __commonJS({
  "node_modules/loader-utils/lib/hash/md4.js"(exports, module) {
    "use strict";
    var create = require_wasm_hash();
    var md4 = new WebAssembly.Module(
      Buffer.from(
        // 2150 bytes
        "AGFzbQEAAAABCAJgAX8AYAAAAwUEAQAAAAUDAQABBhoFfwFBAAt/AUEAC38BQQALfwFBAAt/AUEACwciBARpbml0AAAGdXBkYXRlAAIFZmluYWwAAwZtZW1vcnkCAAqFEAQmAEGBxpS6BiQBQYnXtv5+JAJB/rnrxXkkA0H2qMmBASQEQQAkAAvMCgEYfyMBIQojAiEGIwMhByMEIQgDQCAAIAVLBEAgBSgCCCINIAcgBiAFKAIEIgsgCCAHIAUoAgAiDCAKIAggBiAHIAhzcXNqakEDdyIDIAYgB3Nxc2pqQQd3IgEgAyAGc3FzampBC3chAiAFKAIUIg8gASACIAUoAhAiCSADIAEgBSgCDCIOIAYgAyACIAEgA3Nxc2pqQRN3IgQgASACc3FzampBA3ciAyACIARzcXNqakEHdyEBIAUoAiAiEiADIAEgBSgCHCIRIAQgAyAFKAIYIhAgAiAEIAEgAyAEc3FzampBC3ciAiABIANzcXNqakETdyIEIAEgAnNxc2pqQQN3IQMgBSgCLCIVIAQgAyAFKAIoIhQgAiAEIAUoAiQiEyABIAIgAyACIARzcXNqakEHdyIBIAMgBHNxc2pqQQt3IgIgASADc3FzampBE3chBCAPIBAgCSAVIBQgEyAFKAI4IhYgAiAEIAUoAjQiFyABIAIgBSgCMCIYIAMgASAEIAEgAnNxc2pqQQN3IgEgAiAEc3FzampBB3ciAiABIARzcXNqakELdyIDIAkgAiAMIAEgBSgCPCIJIAQgASADIAEgAnNxc2pqQRN3IgEgAiADcnEgAiADcXJqakGZ84nUBWpBA3ciAiABIANycSABIANxcmpqQZnzidQFakEFdyIEIAEgAnJxIAEgAnFyaiASakGZ84nUBWpBCXciAyAPIAQgCyACIBggASADIAIgBHJxIAIgBHFyampBmfOJ1AVqQQ13IgEgAyAEcnEgAyAEcXJqakGZ84nUBWpBA3ciAiABIANycSABIANxcmpqQZnzidQFakEFdyIEIAEgAnJxIAEgAnFyampBmfOJ1AVqQQl3IgMgECAEIAIgFyABIAMgAiAEcnEgAiAEcXJqakGZ84nUBWpBDXciASADIARycSADIARxcmogDWpBmfOJ1AVqQQN3IgIgASADcnEgASADcXJqakGZ84nUBWpBBXciBCABIAJycSABIAJxcmpqQZnzidQFakEJdyIDIBEgBCAOIAIgFiABIAMgAiAEcnEgAiAEcXJqakGZ84nUBWpBDXciASADIARycSADIARxcmpqQZnzidQFakEDdyICIAEgA3JxIAEgA3FyampBmfOJ1AVqQQV3IgQgASACcnEgASACcXJqakGZ84nUBWpBCXciAyAMIAIgAyAJIAEgAyACIARycSACIARxcmpqQZnzidQFakENdyIBcyAEc2pqQaHX5/YGakEDdyICIAQgASACcyADc2ogEmpBodfn9gZqQQl3IgRzIAFzampBodfn9gZqQQt3IgMgAiADIBggASADIARzIAJzampBodfn9gZqQQ93IgFzIARzaiANakGh1+f2BmpBA3ciAiAUIAQgASACcyADc2pqQaHX5/YGakEJdyIEcyABc2pqQaHX5/YGakELdyIDIAsgAiADIBYgASADIARzIAJzampBodfn9gZqQQ93IgFzIARzampBodfn9gZqQQN3IgIgEyAEIAEgAnMgA3NqakGh1+f2BmpBCXciBHMgAXNqakGh1+f2BmpBC3chAyAKIA4gAiADIBcgASADIARzIAJzampBodfn9gZqQQ93IgFzIARzampBodfn9gZqQQN3IgJqIQogBiAJIAEgESADIAIgFSAEIAEgAnMgA3NqakGh1+f2BmpBCXciBHMgAXNqakGh1+f2BmpBC3ciAyAEcyACc2pqQaHX5/YGakEPd2ohBiADIAdqIQcgBCAIaiEIIAVBQGshBQwBCwsgCiQBIAYkAiAHJAMgCCQECw0AIAAQASMAIABqJAAL/wQCA38BfiMAIABqrUIDhiEEIABByABqQUBxIgJBCGshAyAAIgFBAWohACABQYABOgAAA0AgACACSUEAIABBB3EbBEAgAEEAOgAAIABBAWohAAwBCwsDQCAAIAJJBEAgAEIANwMAIABBCGohAAwBCwsgAyAENwMAIAIQAUEAIwGtIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEIIwKtIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEQIwOtIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEYIwStIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAAs=",
        "base64"
      )
    );
    module.exports = create.bind(null, md4, [], 64, 32);
  }
});

// node_modules/loader-utils/lib/hash/BatchedHash.js
var require_BatchedHash = __commonJS({
  "node_modules/loader-utils/lib/hash/BatchedHash.js"(exports, module) {
    var MAX_SHORT_STRING = require_wasm_hash().MAX_SHORT_STRING;
    var BatchedHash = class {
      constructor(hash) {
        this.string = void 0;
        this.encoding = void 0;
        this.hash = hash;
      }
      /**
       * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
       * @param {string|Buffer} data data
       * @param {string=} inputEncoding data encoding
       * @returns {this} updated hash
       */
      update(data, inputEncoding) {
        if (this.string !== void 0) {
          if (typeof data === "string" && inputEncoding === this.encoding && this.string.length + data.length < MAX_SHORT_STRING) {
            this.string += data;
            return this;
          }
          this.hash.update(this.string, this.encoding);
          this.string = void 0;
        }
        if (typeof data === "string") {
          if (data.length < MAX_SHORT_STRING && // base64 encoding is not valid since it may contain padding chars
          (!inputEncoding || !inputEncoding.startsWith("ba"))) {
            this.string = data;
            this.encoding = inputEncoding;
          } else {
            this.hash.update(data, inputEncoding);
          }
        } else {
          this.hash.update(data);
        }
        return this;
      }
      /**
       * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
       * @param {string=} encoding encoding of the return value
       * @returns {string|Buffer} digest
       */
      digest(encoding) {
        if (this.string !== void 0) {
          this.hash.update(this.string, this.encoding);
        }
        return this.hash.digest(encoding);
      }
    };
    module.exports = BatchedHash;
  }
});

// node_modules/loader-utils/lib/getHashDigest.js
var require_getHashDigest = __commonJS({
  "node_modules/loader-utils/lib/getHashDigest.js"(exports, module) {
    "use strict";
    var baseEncodeTables = {
      26: "abcdefghijklmnopqrstuvwxyz",
      32: "123456789abcdefghjkmnpqrstuvwxyz",
      // no 0lio
      36: "0123456789abcdefghijklmnopqrstuvwxyz",
      49: "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
      // no lIO
      52: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
      // no 0lIO
      62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      64: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"
    };
    function encodeBufferToBase(buffer, base) {
      const encodeTable = baseEncodeTables[base];
      if (!encodeTable) {
        throw new Error("Unknown encoding base" + base);
      }
      const readLength = buffer.length;
      const Big = require_big();
      Big.RM = Big.DP = 0;
      let b = new Big(0);
      for (let i = readLength - 1; i >= 0; i--) {
        b = b.times(256).plus(buffer[i]);
      }
      let output = "";
      while (b.gt(0)) {
        output = encodeTable[b.mod(base)] + output;
        b = b.div(base);
      }
      Big.DP = 20;
      Big.RM = 1;
      return output;
    }
    var createMd4 = void 0;
    var BatchedHash = void 0;
    function getHashDigest(buffer, hashType, digestType, maxLength) {
      hashType = hashType || "md4";
      maxLength = maxLength || 9999;
      let hash;
      try {
        hash = require_crypto().createHash(hashType);
      } catch (error) {
        if (error.code === "ERR_OSSL_EVP_UNSUPPORTED" && hashType === "md4") {
          if (createMd4 === void 0) {
            createMd4 = require_md4();
            if (BatchedHash === void 0) {
              BatchedHash = require_BatchedHash();
            }
          }
          hash = new BatchedHash(createMd4());
        }
        if (!hash) {
          throw error;
        }
      }
      hash.update(buffer);
      if (digestType === "base26" || digestType === "base32" || digestType === "base36" || digestType === "base49" || digestType === "base52" || digestType === "base58" || digestType === "base62") {
        return encodeBufferToBase(hash.digest(), digestType.substr(4)).substr(
          0,
          maxLength
        );
      } else {
        return hash.digest(digestType || "hex").substr(0, maxLength);
      }
    }
    module.exports = getHashDigest;
  }
});

// node_modules/emojis-list/index.js
var require_emojis_list = __commonJS({
  "node_modules/emojis-list/index.js"(exports, module) {
    module.exports = [
      "🀄️",
      "🃏",
      "🅰️",
      "🅱️",
      "🅾️",
      "🅿️",
      "🆎",
      "🆑",
      "🆒",
      "🆓",
      "🆔",
      "🆕",
      "🆖",
      "🆗",
      "🆘",
      "🆙",
      "🆚",
      "🇦🇨",
      "🇦🇩",
      "🇦🇪",
      "🇦🇫",
      "🇦🇬",
      "🇦🇮",
      "🇦🇱",
      "🇦🇲",
      "🇦🇴",
      "🇦🇶",
      "🇦🇷",
      "🇦🇸",
      "🇦🇹",
      "🇦🇺",
      "🇦🇼",
      "🇦🇽",
      "🇦🇿",
      "🇦",
      "🇧🇦",
      "🇧🇧",
      "🇧🇩",
      "🇧🇪",
      "🇧🇫",
      "🇧🇬",
      "🇧🇭",
      "🇧🇮",
      "🇧🇯",
      "🇧🇱",
      "🇧🇲",
      "🇧🇳",
      "🇧🇴",
      "🇧🇶",
      "🇧🇷",
      "🇧🇸",
      "🇧🇹",
      "🇧🇻",
      "🇧🇼",
      "🇧🇾",
      "🇧🇿",
      "🇧",
      "🇨🇦",
      "🇨🇨",
      "🇨🇩",
      "🇨🇫",
      "🇨🇬",
      "🇨🇭",
      "🇨🇮",
      "🇨🇰",
      "🇨🇱",
      "🇨🇲",
      "🇨🇳",
      "🇨🇴",
      "🇨🇵",
      "🇨🇷",
      "🇨🇺",
      "🇨🇻",
      "🇨🇼",
      "🇨🇽",
      "🇨🇾",
      "🇨🇿",
      "🇨",
      "🇩🇪",
      "🇩🇬",
      "🇩🇯",
      "🇩🇰",
      "🇩🇲",
      "🇩🇴",
      "🇩🇿",
      "🇩",
      "🇪🇦",
      "🇪🇨",
      "🇪🇪",
      "🇪🇬",
      "🇪🇭",
      "🇪🇷",
      "🇪🇸",
      "🇪🇹",
      "🇪🇺",
      "🇪",
      "🇫🇮",
      "🇫🇯",
      "🇫🇰",
      "🇫🇲",
      "🇫🇴",
      "🇫🇷",
      "🇫",
      "🇬🇦",
      "🇬🇧",
      "🇬🇩",
      "🇬🇪",
      "🇬🇫",
      "🇬🇬",
      "🇬🇭",
      "🇬🇮",
      "🇬🇱",
      "🇬🇲",
      "🇬🇳",
      "🇬🇵",
      "🇬🇶",
      "🇬🇷",
      "🇬🇸",
      "🇬🇹",
      "🇬🇺",
      "🇬🇼",
      "🇬🇾",
      "🇬",
      "🇭🇰",
      "🇭🇲",
      "🇭🇳",
      "🇭🇷",
      "🇭🇹",
      "🇭🇺",
      "🇭",
      "🇮🇨",
      "🇮🇩",
      "🇮🇪",
      "🇮🇱",
      "🇮🇲",
      "🇮🇳",
      "🇮🇴",
      "🇮🇶",
      "🇮🇷",
      "🇮🇸",
      "🇮🇹",
      "🇮",
      "🇯🇪",
      "🇯🇲",
      "🇯🇴",
      "🇯🇵",
      "🇯",
      "🇰🇪",
      "🇰🇬",
      "🇰🇭",
      "🇰🇮",
      "🇰🇲",
      "🇰🇳",
      "🇰🇵",
      "🇰🇷",
      "🇰🇼",
      "🇰🇾",
      "🇰🇿",
      "🇰",
      "🇱🇦",
      "🇱🇧",
      "🇱🇨",
      "🇱🇮",
      "🇱🇰",
      "🇱🇷",
      "🇱🇸",
      "🇱🇹",
      "🇱🇺",
      "🇱🇻",
      "🇱🇾",
      "🇱",
      "🇲🇦",
      "🇲🇨",
      "🇲🇩",
      "🇲🇪",
      "🇲🇫",
      "🇲🇬",
      "🇲🇭",
      "🇲🇰",
      "🇲🇱",
      "🇲🇲",
      "🇲🇳",
      "🇲🇴",
      "🇲🇵",
      "🇲🇶",
      "🇲🇷",
      "🇲🇸",
      "🇲🇹",
      "🇲🇺",
      "🇲🇻",
      "🇲🇼",
      "🇲🇽",
      "🇲🇾",
      "🇲🇿",
      "🇲",
      "🇳🇦",
      "🇳🇨",
      "🇳🇪",
      "🇳🇫",
      "🇳🇬",
      "🇳🇮",
      "🇳🇱",
      "🇳🇴",
      "🇳🇵",
      "🇳🇷",
      "🇳🇺",
      "🇳🇿",
      "🇳",
      "🇴🇲",
      "🇴",
      "🇵🇦",
      "🇵🇪",
      "🇵🇫",
      "🇵🇬",
      "🇵🇭",
      "🇵🇰",
      "🇵🇱",
      "🇵🇲",
      "🇵🇳",
      "🇵🇷",
      "🇵🇸",
      "🇵🇹",
      "🇵🇼",
      "🇵🇾",
      "🇵",
      "🇶🇦",
      "🇶",
      "🇷🇪",
      "🇷🇴",
      "🇷🇸",
      "🇷🇺",
      "🇷🇼",
      "🇷",
      "🇸🇦",
      "🇸🇧",
      "🇸🇨",
      "🇸🇩",
      "🇸🇪",
      "🇸🇬",
      "🇸🇭",
      "🇸🇮",
      "🇸🇯",
      "🇸🇰",
      "🇸🇱",
      "🇸🇲",
      "🇸🇳",
      "🇸🇴",
      "🇸🇷",
      "🇸🇸",
      "🇸🇹",
      "🇸🇻",
      "🇸🇽",
      "🇸🇾",
      "🇸🇿",
      "🇸",
      "🇹🇦",
      "🇹🇨",
      "🇹🇩",
      "🇹🇫",
      "🇹🇬",
      "🇹🇭",
      "🇹🇯",
      "🇹🇰",
      "🇹🇱",
      "🇹🇲",
      "🇹🇳",
      "🇹🇴",
      "🇹🇷",
      "🇹🇹",
      "🇹🇻",
      "🇹🇼",
      "🇹🇿",
      "🇹",
      "🇺🇦",
      "🇺🇬",
      "🇺🇲",
      "🇺🇳",
      "🇺🇸",
      "🇺🇾",
      "🇺🇿",
      "🇺",
      "🇻🇦",
      "🇻🇨",
      "🇻🇪",
      "🇻🇬",
      "🇻🇮",
      "🇻🇳",
      "🇻🇺",
      "🇻",
      "🇼🇫",
      "🇼🇸",
      "🇼",
      "🇽🇰",
      "🇽",
      "🇾🇪",
      "🇾🇹",
      "🇾",
      "🇿🇦",
      "🇿🇲",
      "🇿🇼",
      "🇿",
      "🈁",
      "🈂️",
      "🈚️",
      "🈯️",
      "🈲",
      "🈳",
      "🈴",
      "🈵",
      "🈶",
      "🈷️",
      "🈸",
      "🈹",
      "🈺",
      "🉐",
      "🉑",
      "🌀",
      "🌁",
      "🌂",
      "🌃",
      "🌄",
      "🌅",
      "🌆",
      "🌇",
      "🌈",
      "🌉",
      "🌊",
      "🌋",
      "🌌",
      "🌍",
      "🌎",
      "🌏",
      "🌐",
      "🌑",
      "🌒",
      "🌓",
      "🌔",
      "🌕",
      "🌖",
      "🌗",
      "🌘",
      "🌙",
      "🌚",
      "🌛",
      "🌜",
      "🌝",
      "🌞",
      "🌟",
      "🌠",
      "🌡️",
      "🌤️",
      "🌥️",
      "🌦️",
      "🌧️",
      "🌨️",
      "🌩️",
      "🌪️",
      "🌫️",
      "🌬️",
      "🌭",
      "🌮",
      "🌯",
      "🌰",
      "🌱",
      "🌲",
      "🌳",
      "🌴",
      "🌵",
      "🌶️",
      "🌷",
      "🌸",
      "🌹",
      "🌺",
      "🌻",
      "🌼",
      "🌽",
      "🌾",
      "🌿",
      "🍀",
      "🍁",
      "🍂",
      "🍃",
      "🍄",
      "🍅",
      "🍆",
      "🍇",
      "🍈",
      "🍉",
      "🍊",
      "🍋",
      "🍌",
      "🍍",
      "🍎",
      "🍏",
      "🍐",
      "🍑",
      "🍒",
      "🍓",
      "🍔",
      "🍕",
      "🍖",
      "🍗",
      "🍘",
      "🍙",
      "🍚",
      "🍛",
      "🍜",
      "🍝",
      "🍞",
      "🍟",
      "🍠",
      "🍡",
      "🍢",
      "🍣",
      "🍤",
      "🍥",
      "🍦",
      "🍧",
      "🍨",
      "🍩",
      "🍪",
      "🍫",
      "🍬",
      "🍭",
      "🍮",
      "🍯",
      "🍰",
      "🍱",
      "🍲",
      "🍳",
      "🍴",
      "🍵",
      "🍶",
      "🍷",
      "🍸",
      "🍹",
      "🍺",
      "🍻",
      "🍼",
      "🍽️",
      "🍾",
      "🍿",
      "🎀",
      "🎁",
      "🎂",
      "🎃",
      "🎄",
      "🎅🏻",
      "🎅🏼",
      "🎅🏽",
      "🎅🏾",
      "🎅🏿",
      "🎅",
      "🎆",
      "🎇",
      "🎈",
      "🎉",
      "🎊",
      "🎋",
      "🎌",
      "🎍",
      "🎎",
      "🎏",
      "🎐",
      "🎑",
      "🎒",
      "🎓",
      "🎖️",
      "🎗️",
      "🎙️",
      "🎚️",
      "🎛️",
      "🎞️",
      "🎟️",
      "🎠",
      "🎡",
      "🎢",
      "🎣",
      "🎤",
      "🎥",
      "🎦",
      "🎧",
      "🎨",
      "🎩",
      "🎪",
      "🎫",
      "🎬",
      "🎭",
      "🎮",
      "🎯",
      "🎰",
      "🎱",
      "🎲",
      "🎳",
      "🎴",
      "🎵",
      "🎶",
      "🎷",
      "🎸",
      "🎹",
      "🎺",
      "🎻",
      "🎼",
      "🎽",
      "🎾",
      "🎿",
      "🏀",
      "🏁",
      "🏂🏻",
      "🏂🏼",
      "🏂🏽",
      "🏂🏾",
      "🏂🏿",
      "🏂",
      "🏃🏻‍♀️",
      "🏃🏻‍♂️",
      "🏃🏻",
      "🏃🏼‍♀️",
      "🏃🏼‍♂️",
      "🏃🏼",
      "🏃🏽‍♀️",
      "🏃🏽‍♂️",
      "🏃🏽",
      "🏃🏾‍♀️",
      "🏃🏾‍♂️",
      "🏃🏾",
      "🏃🏿‍♀️",
      "🏃🏿‍♂️",
      "🏃🏿",
      "🏃‍♀️",
      "🏃‍♂️",
      "🏃",
      "🏄🏻‍♀️",
      "🏄🏻‍♂️",
      "🏄🏻",
      "🏄🏼‍♀️",
      "🏄🏼‍♂️",
      "🏄🏼",
      "🏄🏽‍♀️",
      "🏄🏽‍♂️",
      "🏄🏽",
      "🏄🏾‍♀️",
      "🏄🏾‍♂️",
      "🏄🏾",
      "🏄🏿‍♀️",
      "🏄🏿‍♂️",
      "🏄🏿",
      "🏄‍♀️",
      "🏄‍♂️",
      "🏄",
      "🏅",
      "🏆",
      "🏇🏻",
      "🏇🏼",
      "🏇🏽",
      "🏇🏾",
      "🏇🏿",
      "🏇",
      "🏈",
      "🏉",
      "🏊🏻‍♀️",
      "🏊🏻‍♂️",
      "🏊🏻",
      "🏊🏼‍♀️",
      "🏊🏼‍♂️",
      "🏊🏼",
      "🏊🏽‍♀️",
      "🏊🏽‍♂️",
      "🏊🏽",
      "🏊🏾‍♀️",
      "🏊🏾‍♂️",
      "🏊🏾",
      "🏊🏿‍♀️",
      "🏊🏿‍♂️",
      "🏊🏿",
      "🏊‍♀️",
      "🏊‍♂️",
      "🏊",
      "🏋🏻‍♀️",
      "🏋🏻‍♂️",
      "🏋🏻",
      "🏋🏼‍♀️",
      "🏋🏼‍♂️",
      "🏋🏼",
      "🏋🏽‍♀️",
      "🏋🏽‍♂️",
      "🏋🏽",
      "🏋🏾‍♀️",
      "🏋🏾‍♂️",
      "🏋🏾",
      "🏋🏿‍♀️",
      "🏋🏿‍♂️",
      "🏋🏿",
      "🏋️‍♀️",
      "🏋️‍♂️",
      "🏋️",
      "🏌🏻‍♀️",
      "🏌🏻‍♂️",
      "🏌🏻",
      "🏌🏼‍♀️",
      "🏌🏼‍♂️",
      "🏌🏼",
      "🏌🏽‍♀️",
      "🏌🏽‍♂️",
      "🏌🏽",
      "🏌🏾‍♀️",
      "🏌🏾‍♂️",
      "🏌🏾",
      "🏌🏿‍♀️",
      "🏌🏿‍♂️",
      "🏌🏿",
      "🏌️‍♀️",
      "🏌️‍♂️",
      "🏌️",
      "🏍️",
      "🏎️",
      "🏏",
      "🏐",
      "🏑",
      "🏒",
      "🏓",
      "🏔️",
      "🏕️",
      "🏖️",
      "🏗️",
      "🏘️",
      "🏙️",
      "🏚️",
      "🏛️",
      "🏜️",
      "🏝️",
      "🏞️",
      "🏟️",
      "🏠",
      "🏡",
      "🏢",
      "🏣",
      "🏤",
      "🏥",
      "🏦",
      "🏧",
      "🏨",
      "🏩",
      "🏪",
      "🏫",
      "🏬",
      "🏭",
      "🏮",
      "🏯",
      "🏰",
      "🏳️‍🌈",
      "🏳️",
      "🏴‍☠️",
      "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      "🏴",
      "🏵️",
      "🏷️",
      "🏸",
      "🏹",
      "🏺",
      "🏻",
      "🏼",
      "🏽",
      "🏾",
      "🏿",
      "🐀",
      "🐁",
      "🐂",
      "🐃",
      "🐄",
      "🐅",
      "🐆",
      "🐇",
      "🐈",
      "🐉",
      "🐊",
      "🐋",
      "🐌",
      "🐍",
      "🐎",
      "🐏",
      "🐐",
      "🐑",
      "🐒",
      "🐓",
      "🐔",
      "🐕‍🦺",
      "🐕",
      "🐖",
      "🐗",
      "🐘",
      "🐙",
      "🐚",
      "🐛",
      "🐜",
      "🐝",
      "🐞",
      "🐟",
      "🐠",
      "🐡",
      "🐢",
      "🐣",
      "🐤",
      "🐥",
      "🐦",
      "🐧",
      "🐨",
      "🐩",
      "🐪",
      "🐫",
      "🐬",
      "🐭",
      "🐮",
      "🐯",
      "🐰",
      "🐱",
      "🐲",
      "🐳",
      "🐴",
      "🐵",
      "🐶",
      "🐷",
      "🐸",
      "🐹",
      "🐺",
      "🐻",
      "🐼",
      "🐽",
      "🐾",
      "🐿️",
      "👀",
      "👁‍🗨",
      "👁️",
      "👂🏻",
      "👂🏼",
      "👂🏽",
      "👂🏾",
      "👂🏿",
      "👂",
      "👃🏻",
      "👃🏼",
      "👃🏽",
      "👃🏾",
      "👃🏿",
      "👃",
      "👄",
      "👅",
      "👆🏻",
      "👆🏼",
      "👆🏽",
      "👆🏾",
      "👆🏿",
      "👆",
      "👇🏻",
      "👇🏼",
      "👇🏽",
      "👇🏾",
      "👇🏿",
      "👇",
      "👈🏻",
      "👈🏼",
      "👈🏽",
      "👈🏾",
      "👈🏿",
      "👈",
      "👉🏻",
      "👉🏼",
      "👉🏽",
      "👉🏾",
      "👉🏿",
      "👉",
      "👊🏻",
      "👊🏼",
      "👊🏽",
      "👊🏾",
      "👊🏿",
      "👊",
      "👋🏻",
      "👋🏼",
      "👋🏽",
      "👋🏾",
      "👋🏿",
      "👋",
      "👌🏻",
      "👌🏼",
      "👌🏽",
      "👌🏾",
      "👌🏿",
      "👌",
      "👍🏻",
      "👍🏼",
      "👍🏽",
      "👍🏾",
      "👍🏿",
      "👍",
      "👎🏻",
      "👎🏼",
      "👎🏽",
      "👎🏾",
      "👎🏿",
      "👎",
      "👏🏻",
      "👏🏼",
      "👏🏽",
      "👏🏾",
      "👏🏿",
      "👏",
      "👐🏻",
      "👐🏼",
      "👐🏽",
      "👐🏾",
      "👐🏿",
      "👐",
      "👑",
      "👒",
      "👓",
      "👔",
      "👕",
      "👖",
      "👗",
      "👘",
      "👙",
      "👚",
      "👛",
      "👜",
      "👝",
      "👞",
      "👟",
      "👠",
      "👡",
      "👢",
      "👣",
      "👤",
      "👥",
      "👦🏻",
      "👦🏼",
      "👦🏽",
      "👦🏾",
      "👦🏿",
      "👦",
      "👧🏻",
      "👧🏼",
      "👧🏽",
      "👧🏾",
      "👧🏿",
      "👧",
      "👨🏻‍🌾",
      "👨🏻‍🍳",
      "👨🏻‍🎓",
      "👨🏻‍🎤",
      "👨🏻‍🎨",
      "👨🏻‍🏫",
      "👨🏻‍🏭",
      "👨🏻‍💻",
      "👨🏻‍💼",
      "👨🏻‍🔧",
      "👨🏻‍🔬",
      "👨🏻‍🚀",
      "👨🏻‍🚒",
      "👨🏻‍🦯",
      "👨🏻‍🦰",
      "👨🏻‍🦱",
      "👨🏻‍🦲",
      "👨🏻‍🦳",
      "👨🏻‍🦼",
      "👨🏻‍🦽",
      "👨🏻‍⚕️",
      "👨🏻‍⚖️",
      "👨🏻‍✈️",
      "👨🏻",
      "👨🏼‍🌾",
      "👨🏼‍🍳",
      "👨🏼‍🎓",
      "👨🏼‍🎤",
      "👨🏼‍🎨",
      "👨🏼‍🏫",
      "👨🏼‍🏭",
      "👨🏼‍💻",
      "👨🏼‍💼",
      "👨🏼‍🔧",
      "👨🏼‍🔬",
      "👨🏼‍🚀",
      "👨🏼‍🚒",
      "👨🏼‍🤝‍👨🏻",
      "👨🏼‍🦯",
      "👨🏼‍🦰",
      "👨🏼‍🦱",
      "👨🏼‍🦲",
      "👨🏼‍🦳",
      "👨🏼‍🦼",
      "👨🏼‍🦽",
      "👨🏼‍⚕️",
      "👨🏼‍⚖️",
      "👨🏼‍✈️",
      "👨🏼",
      "👨🏽‍🌾",
      "👨🏽‍🍳",
      "👨🏽‍🎓",
      "👨🏽‍🎤",
      "👨🏽‍🎨",
      "👨🏽‍🏫",
      "👨🏽‍🏭",
      "👨🏽‍💻",
      "👨🏽‍💼",
      "👨🏽‍🔧",
      "👨🏽‍🔬",
      "👨🏽‍🚀",
      "👨🏽‍🚒",
      "👨🏽‍🤝‍👨🏻",
      "👨🏽‍🤝‍👨🏼",
      "👨🏽‍🦯",
      "👨🏽‍🦰",
      "👨🏽‍🦱",
      "👨🏽‍🦲",
      "👨🏽‍🦳",
      "👨🏽‍🦼",
      "👨🏽‍🦽",
      "👨🏽‍⚕️",
      "👨🏽‍⚖️",
      "👨🏽‍✈️",
      "👨🏽",
      "👨🏾‍🌾",
      "👨🏾‍🍳",
      "👨🏾‍🎓",
      "👨🏾‍🎤",
      "👨🏾‍🎨",
      "👨🏾‍🏫",
      "👨🏾‍🏭",
      "👨🏾‍💻",
      "👨🏾‍💼",
      "👨🏾‍🔧",
      "👨🏾‍🔬",
      "👨🏾‍🚀",
      "👨🏾‍🚒",
      "👨🏾‍🤝‍👨🏻",
      "👨🏾‍🤝‍👨🏼",
      "👨🏾‍🤝‍👨🏽",
      "👨🏾‍🦯",
      "👨🏾‍🦰",
      "👨🏾‍🦱",
      "👨🏾‍🦲",
      "👨🏾‍🦳",
      "👨🏾‍🦼",
      "👨🏾‍🦽",
      "👨🏾‍⚕️",
      "👨🏾‍⚖️",
      "👨🏾‍✈️",
      "👨🏾",
      "👨🏿‍🌾",
      "👨🏿‍🍳",
      "👨🏿‍🎓",
      "👨🏿‍🎤",
      "👨🏿‍🎨",
      "👨🏿‍🏫",
      "👨🏿‍🏭",
      "👨🏿‍💻",
      "👨🏿‍💼",
      "👨🏿‍🔧",
      "👨🏿‍🔬",
      "👨🏿‍🚀",
      "👨🏿‍🚒",
      "👨🏿‍🤝‍👨🏻",
      "👨🏿‍🤝‍👨🏼",
      "👨🏿‍🤝‍👨🏽",
      "👨🏿‍🤝‍👨🏾",
      "👨🏿‍🦯",
      "👨🏿‍🦰",
      "👨🏿‍🦱",
      "👨🏿‍🦲",
      "👨🏿‍🦳",
      "👨🏿‍🦼",
      "👨🏿‍🦽",
      "👨🏿‍⚕️",
      "👨🏿‍⚖️",
      "👨🏿‍✈️",
      "👨🏿",
      "👨‍🌾",
      "👨‍🍳",
      "👨‍🎓",
      "👨‍🎤",
      "👨‍🎨",
      "👨‍🏫",
      "👨‍🏭",
      "👨‍👦‍👦",
      "👨‍👦",
      "👨‍👧‍👦",
      "👨‍👧‍👧",
      "👨‍👧",
      "👨‍👨‍👦‍👦",
      "👨‍👨‍👦",
      "👨‍👨‍👧‍👦",
      "👨‍👨‍👧‍👧",
      "👨‍👨‍👧",
      "👨‍👩‍👦‍👦",
      "👨‍👩‍👦",
      "👨‍👩‍👧‍👦",
      "👨‍👩‍👧‍👧",
      "👨‍👩‍👧",
      "👨‍💻",
      "👨‍💼",
      "👨‍🔧",
      "👨‍🔬",
      "👨‍🚀",
      "👨‍🚒",
      "👨‍🦯",
      "👨‍🦰",
      "👨‍🦱",
      "👨‍🦲",
      "👨‍🦳",
      "👨‍🦼",
      "👨‍🦽",
      "👨‍⚕️",
      "👨‍⚖️",
      "👨‍✈️",
      "👨‍❤️‍👨",
      "👨‍❤️‍💋‍👨",
      "👨",
      "👩🏻‍🌾",
      "👩🏻‍🍳",
      "👩🏻‍🎓",
      "👩🏻‍🎤",
      "👩🏻‍🎨",
      "👩🏻‍🏫",
      "👩🏻‍🏭",
      "👩🏻‍💻",
      "👩🏻‍💼",
      "👩🏻‍🔧",
      "👩🏻‍🔬",
      "👩🏻‍🚀",
      "👩🏻‍🚒",
      "👩🏻‍🤝‍👨🏼",
      "👩🏻‍🤝‍👨🏽",
      "👩🏻‍🤝‍👨🏾",
      "👩🏻‍🤝‍👨🏿",
      "👩🏻‍🦯",
      "👩🏻‍🦰",
      "👩🏻‍🦱",
      "👩🏻‍🦲",
      "👩🏻‍🦳",
      "👩🏻‍🦼",
      "👩🏻‍🦽",
      "👩🏻‍⚕️",
      "👩🏻‍⚖️",
      "👩🏻‍✈️",
      "👩🏻",
      "👩🏼‍🌾",
      "👩🏼‍🍳",
      "👩🏼‍🎓",
      "👩🏼‍🎤",
      "👩🏼‍🎨",
      "👩🏼‍🏫",
      "👩🏼‍🏭",
      "👩🏼‍💻",
      "👩🏼‍💼",
      "👩🏼‍🔧",
      "👩🏼‍🔬",
      "👩🏼‍🚀",
      "👩🏼‍🚒",
      "👩🏼‍🤝‍👨🏻",
      "👩🏼‍🤝‍👨🏽",
      "👩🏼‍🤝‍👨🏾",
      "👩🏼‍🤝‍👨🏿",
      "👩🏼‍🤝‍👩🏻",
      "👩🏼‍🦯",
      "👩🏼‍🦰",
      "👩🏼‍🦱",
      "👩🏼‍🦲",
      "👩🏼‍🦳",
      "👩🏼‍🦼",
      "👩🏼‍🦽",
      "👩🏼‍⚕️",
      "👩🏼‍⚖️",
      "👩🏼‍✈️",
      "👩🏼",
      "👩🏽‍🌾",
      "👩🏽‍🍳",
      "👩🏽‍🎓",
      "👩🏽‍🎤",
      "👩🏽‍🎨",
      "👩🏽‍🏫",
      "👩🏽‍🏭",
      "👩🏽‍💻",
      "👩🏽‍💼",
      "👩🏽‍🔧",
      "👩🏽‍🔬",
      "👩🏽‍🚀",
      "👩🏽‍🚒",
      "👩🏽‍🤝‍👨🏻",
      "👩🏽‍🤝‍👨🏼",
      "👩🏽‍🤝‍👨🏾",
      "👩🏽‍🤝‍👨🏿",
      "👩🏽‍🤝‍👩🏻",
      "👩🏽‍🤝‍👩🏼",
      "👩🏽‍🦯",
      "👩🏽‍🦰",
      "👩🏽‍🦱",
      "👩🏽‍🦲",
      "👩🏽‍🦳",
      "👩🏽‍🦼",
      "👩🏽‍🦽",
      "👩🏽‍⚕️",
      "👩🏽‍⚖️",
      "👩🏽‍✈️",
      "👩🏽",
      "👩🏾‍🌾",
      "👩🏾‍🍳",
      "👩🏾‍🎓",
      "👩🏾‍🎤",
      "👩🏾‍🎨",
      "👩🏾‍🏫",
      "👩🏾‍🏭",
      "👩🏾‍💻",
      "👩🏾‍💼",
      "👩🏾‍🔧",
      "👩🏾‍🔬",
      "👩🏾‍🚀",
      "👩🏾‍🚒",
      "👩🏾‍🤝‍👨🏻",
      "👩🏾‍🤝‍👨🏼",
      "👩🏾‍🤝‍👨🏽",
      "👩🏾‍🤝‍👨🏿",
      "👩🏾‍🤝‍👩🏻",
      "👩🏾‍🤝‍👩🏼",
      "👩🏾‍🤝‍👩🏽",
      "👩🏾‍🦯",
      "👩🏾‍🦰",
      "👩🏾‍🦱",
      "👩🏾‍🦲",
      "👩🏾‍🦳",
      "👩🏾‍🦼",
      "👩🏾‍🦽",
      "👩🏾‍⚕️",
      "👩🏾‍⚖️",
      "👩🏾‍✈️",
      "👩🏾",
      "👩🏿‍🌾",
      "👩🏿‍🍳",
      "👩🏿‍🎓",
      "👩🏿‍🎤",
      "👩🏿‍🎨",
      "👩🏿‍🏫",
      "👩🏿‍🏭",
      "👩🏿‍💻",
      "👩🏿‍💼",
      "👩🏿‍🔧",
      "👩🏿‍🔬",
      "👩🏿‍🚀",
      "👩🏿‍🚒",
      "👩🏿‍🤝‍👨🏻",
      "👩🏿‍🤝‍👨🏼",
      "👩🏿‍🤝‍👨🏽",
      "👩🏿‍🤝‍👨🏾",
      "👩🏿‍🤝‍👩🏻",
      "👩🏿‍🤝‍👩🏼",
      "👩🏿‍🤝‍👩🏽",
      "👩🏿‍🤝‍👩🏾",
      "👩🏿‍🦯",
      "👩🏿‍🦰",
      "👩🏿‍🦱",
      "👩🏿‍🦲",
      "👩🏿‍🦳",
      "👩🏿‍🦼",
      "👩🏿‍🦽",
      "👩🏿‍⚕️",
      "👩🏿‍⚖️",
      "👩🏿‍✈️",
      "👩🏿",
      "👩‍🌾",
      "👩‍🍳",
      "👩‍🎓",
      "👩‍🎤",
      "👩‍🎨",
      "👩‍🏫",
      "👩‍🏭",
      "👩‍👦‍👦",
      "👩‍👦",
      "👩‍👧‍👦",
      "👩‍👧‍👧",
      "👩‍👧",
      "👩‍👩‍👦‍👦",
      "👩‍👩‍👦",
      "👩‍👩‍👧‍👦",
      "👩‍👩‍👧‍👧",
      "👩‍👩‍👧",
      "👩‍💻",
      "👩‍💼",
      "👩‍🔧",
      "👩‍🔬",
      "👩‍🚀",
      "👩‍🚒",
      "👩‍🦯",
      "👩‍🦰",
      "👩‍🦱",
      "👩‍🦲",
      "👩‍🦳",
      "👩‍🦼",
      "👩‍🦽",
      "👩‍⚕️",
      "👩‍⚖️",
      "👩‍✈️",
      "👩‍❤️‍👨",
      "👩‍❤️‍👩",
      "👩‍❤️‍💋‍👨",
      "👩‍❤️‍💋‍👩",
      "👩",
      "👪",
      "👫🏻",
      "👫🏼",
      "👫🏽",
      "👫🏾",
      "👫🏿",
      "👫",
      "👬🏻",
      "👬🏼",
      "👬🏽",
      "👬🏾",
      "👬🏿",
      "👬",
      "👭🏻",
      "👭🏼",
      "👭🏽",
      "👭🏾",
      "👭🏿",
      "👭",
      "👮🏻‍♀️",
      "👮🏻‍♂️",
      "👮🏻",
      "👮🏼‍♀️",
      "👮🏼‍♂️",
      "👮🏼",
      "👮🏽‍♀️",
      "👮🏽‍♂️",
      "👮🏽",
      "👮🏾‍♀️",
      "👮🏾‍♂️",
      "👮🏾",
      "👮🏿‍♀️",
      "👮🏿‍♂️",
      "👮🏿",
      "👮‍♀️",
      "👮‍♂️",
      "👮",
      "👯‍♀️",
      "👯‍♂️",
      "👯",
      "👰🏻",
      "👰🏼",
      "👰🏽",
      "👰🏾",
      "👰🏿",
      "👰",
      "👱🏻‍♀️",
      "👱🏻‍♂️",
      "👱🏻",
      "👱🏼‍♀️",
      "👱🏼‍♂️",
      "👱🏼",
      "👱🏽‍♀️",
      "👱🏽‍♂️",
      "👱🏽",
      "👱🏾‍♀️",
      "👱🏾‍♂️",
      "👱🏾",
      "👱🏿‍♀️",
      "👱🏿‍♂️",
      "👱🏿",
      "👱‍♀️",
      "👱‍♂️",
      "👱",
      "👲🏻",
      "👲🏼",
      "👲🏽",
      "👲🏾",
      "👲🏿",
      "👲",
      "👳🏻‍♀️",
      "👳🏻‍♂️",
      "👳🏻",
      "👳🏼‍♀️",
      "👳🏼‍♂️",
      "👳🏼",
      "👳🏽‍♀️",
      "👳🏽‍♂️",
      "👳🏽",
      "👳🏾‍♀️",
      "👳🏾‍♂️",
      "👳🏾",
      "👳🏿‍♀️",
      "👳🏿‍♂️",
      "👳🏿",
      "👳‍♀️",
      "👳‍♂️",
      "👳",
      "👴🏻",
      "👴🏼",
      "👴🏽",
      "👴🏾",
      "👴🏿",
      "👴",
      "👵🏻",
      "👵🏼",
      "👵🏽",
      "👵🏾",
      "👵🏿",
      "👵",
      "👶🏻",
      "👶🏼",
      "👶🏽",
      "👶🏾",
      "👶🏿",
      "👶",
      "👷🏻‍♀️",
      "👷🏻‍♂️",
      "👷🏻",
      "👷🏼‍♀️",
      "👷🏼‍♂️",
      "👷🏼",
      "👷🏽‍♀️",
      "👷🏽‍♂️",
      "👷🏽",
      "👷🏾‍♀️",
      "👷🏾‍♂️",
      "👷🏾",
      "👷🏿‍♀️",
      "👷🏿‍♂️",
      "👷🏿",
      "👷‍♀️",
      "👷‍♂️",
      "👷",
      "👸🏻",
      "👸🏼",
      "👸🏽",
      "👸🏾",
      "👸🏿",
      "👸",
      "👹",
      "👺",
      "👻",
      "👼🏻",
      "👼🏼",
      "👼🏽",
      "👼🏾",
      "👼🏿",
      "👼",
      "👽",
      "👾",
      "👿",
      "💀",
      "💁🏻‍♀️",
      "💁🏻‍♂️",
      "💁🏻",
      "💁🏼‍♀️",
      "💁🏼‍♂️",
      "💁🏼",
      "💁🏽‍♀️",
      "💁🏽‍♂️",
      "💁🏽",
      "💁🏾‍♀️",
      "💁🏾‍♂️",
      "💁🏾",
      "💁🏿‍♀️",
      "💁🏿‍♂️",
      "💁🏿",
      "💁‍♀️",
      "💁‍♂️",
      "💁",
      "💂🏻‍♀️",
      "💂🏻‍♂️",
      "💂🏻",
      "💂🏼‍♀️",
      "💂🏼‍♂️",
      "💂🏼",
      "💂🏽‍♀️",
      "💂🏽‍♂️",
      "💂🏽",
      "💂🏾‍♀️",
      "💂🏾‍♂️",
      "💂🏾",
      "💂🏿‍♀️",
      "💂🏿‍♂️",
      "💂🏿",
      "💂‍♀️",
      "💂‍♂️",
      "💂",
      "💃🏻",
      "💃🏼",
      "💃🏽",
      "💃🏾",
      "💃🏿",
      "💃",
      "💄",
      "💅🏻",
      "💅🏼",
      "💅🏽",
      "💅🏾",
      "💅🏿",
      "💅",
      "💆🏻‍♀️",
      "💆🏻‍♂️",
      "💆🏻",
      "💆🏼‍♀️",
      "💆🏼‍♂️",
      "💆🏼",
      "💆🏽‍♀️",
      "💆🏽‍♂️",
      "💆🏽",
      "💆🏾‍♀️",
      "💆🏾‍♂️",
      "💆🏾",
      "💆🏿‍♀️",
      "💆🏿‍♂️",
      "💆🏿",
      "💆‍♀️",
      "💆‍♂️",
      "💆",
      "💇🏻‍♀️",
      "💇🏻‍♂️",
      "💇🏻",
      "💇🏼‍♀️",
      "💇🏼‍♂️",
      "💇🏼",
      "💇🏽‍♀️",
      "💇🏽‍♂️",
      "💇🏽",
      "💇🏾‍♀️",
      "💇🏾‍♂️",
      "💇🏾",
      "💇🏿‍♀️",
      "💇🏿‍♂️",
      "💇🏿",
      "💇‍♀️",
      "💇‍♂️",
      "💇",
      "💈",
      "💉",
      "💊",
      "💋",
      "💌",
      "💍",
      "💎",
      "💏",
      "💐",
      "💑",
      "💒",
      "💓",
      "💔",
      "💕",
      "💖",
      "💗",
      "💘",
      "💙",
      "💚",
      "💛",
      "💜",
      "💝",
      "💞",
      "💟",
      "💠",
      "💡",
      "💢",
      "💣",
      "💤",
      "💥",
      "💦",
      "💧",
      "💨",
      "💩",
      "💪🏻",
      "💪🏼",
      "💪🏽",
      "💪🏾",
      "💪🏿",
      "💪",
      "💫",
      "💬",
      "💭",
      "💮",
      "💯",
      "💰",
      "💱",
      "💲",
      "💳",
      "💴",
      "💵",
      "💶",
      "💷",
      "💸",
      "💹",
      "💺",
      "💻",
      "💼",
      "💽",
      "💾",
      "💿",
      "📀",
      "📁",
      "📂",
      "📃",
      "📄",
      "📅",
      "📆",
      "📇",
      "📈",
      "📉",
      "📊",
      "📋",
      "📌",
      "📍",
      "📎",
      "📏",
      "📐",
      "📑",
      "📒",
      "📓",
      "📔",
      "📕",
      "📖",
      "📗",
      "📘",
      "📙",
      "📚",
      "📛",
      "📜",
      "📝",
      "📞",
      "📟",
      "📠",
      "📡",
      "📢",
      "📣",
      "📤",
      "📥",
      "📦",
      "📧",
      "📨",
      "📩",
      "📪",
      "📫",
      "📬",
      "📭",
      "📮",
      "📯",
      "📰",
      "📱",
      "📲",
      "📳",
      "📴",
      "📵",
      "📶",
      "📷",
      "📸",
      "📹",
      "📺",
      "📻",
      "📼",
      "📽️",
      "📿",
      "🔀",
      "🔁",
      "🔂",
      "🔃",
      "🔄",
      "🔅",
      "🔆",
      "🔇",
      "🔈",
      "🔉",
      "🔊",
      "🔋",
      "🔌",
      "🔍",
      "🔎",
      "🔏",
      "🔐",
      "🔑",
      "🔒",
      "🔓",
      "🔔",
      "🔕",
      "🔖",
      "🔗",
      "🔘",
      "🔙",
      "🔚",
      "🔛",
      "🔜",
      "🔝",
      "🔞",
      "🔟",
      "🔠",
      "🔡",
      "🔢",
      "🔣",
      "🔤",
      "🔥",
      "🔦",
      "🔧",
      "🔨",
      "🔩",
      "🔪",
      "🔫",
      "🔬",
      "🔭",
      "🔮",
      "🔯",
      "🔰",
      "🔱",
      "🔲",
      "🔳",
      "🔴",
      "🔵",
      "🔶",
      "🔷",
      "🔸",
      "🔹",
      "🔺",
      "🔻",
      "🔼",
      "🔽",
      "🕉️",
      "🕊️",
      "🕋",
      "🕌",
      "🕍",
      "🕎",
      "🕐",
      "🕑",
      "🕒",
      "🕓",
      "🕔",
      "🕕",
      "🕖",
      "🕗",
      "🕘",
      "🕙",
      "🕚",
      "🕛",
      "🕜",
      "🕝",
      "🕞",
      "🕟",
      "🕠",
      "🕡",
      "🕢",
      "🕣",
      "🕤",
      "🕥",
      "🕦",
      "🕧",
      "🕯️",
      "🕰️",
      "🕳️",
      "🕴🏻‍♀️",
      "🕴🏻‍♂️",
      "🕴🏻",
      "🕴🏼‍♀️",
      "🕴🏼‍♂️",
      "🕴🏼",
      "🕴🏽‍♀️",
      "🕴🏽‍♂️",
      "🕴🏽",
      "🕴🏾‍♀️",
      "🕴🏾‍♂️",
      "🕴🏾",
      "🕴🏿‍♀️",
      "🕴🏿‍♂️",
      "🕴🏿",
      "🕴️‍♀️",
      "🕴️‍♂️",
      "🕴️",
      "🕵🏻‍♀️",
      "🕵🏻‍♂️",
      "🕵🏻",
      "🕵🏼‍♀️",
      "🕵🏼‍♂️",
      "🕵🏼",
      "🕵🏽‍♀️",
      "🕵🏽‍♂️",
      "🕵🏽",
      "🕵🏾‍♀️",
      "🕵🏾‍♂️",
      "🕵🏾",
      "🕵🏿‍♀️",
      "🕵🏿‍♂️",
      "🕵🏿",
      "🕵️‍♀️",
      "🕵️‍♂️",
      "🕵️",
      "🕶️",
      "🕷️",
      "🕸️",
      "🕹️",
      "🕺🏻",
      "🕺🏼",
      "🕺🏽",
      "🕺🏾",
      "🕺🏿",
      "🕺",
      "🖇️",
      "🖊️",
      "🖋️",
      "🖌️",
      "🖍️",
      "🖐🏻",
      "🖐🏼",
      "🖐🏽",
      "🖐🏾",
      "🖐🏿",
      "🖐️",
      "🖕🏻",
      "🖕🏼",
      "🖕🏽",
      "🖕🏾",
      "🖕🏿",
      "🖕",
      "🖖🏻",
      "🖖🏼",
      "🖖🏽",
      "🖖🏾",
      "🖖🏿",
      "🖖",
      "🖤",
      "🖥️",
      "🖨️",
      "🖱️",
      "🖲️",
      "🖼️",
      "🗂️",
      "🗃️",
      "🗄️",
      "🗑️",
      "🗒️",
      "🗓️",
      "🗜️",
      "🗝️",
      "🗞️",
      "🗡️",
      "🗣️",
      "🗨️",
      "🗯️",
      "🗳️",
      "🗺️",
      "🗻",
      "🗼",
      "🗽",
      "🗾",
      "🗿",
      "😀",
      "😁",
      "😂",
      "😃",
      "😄",
      "😅",
      "😆",
      "😇",
      "😈",
      "😉",
      "😊",
      "😋",
      "😌",
      "😍",
      "😎",
      "😏",
      "😐",
      "😑",
      "😒",
      "😓",
      "😔",
      "😕",
      "😖",
      "😗",
      "😘",
      "😙",
      "😚",
      "😛",
      "😜",
      "😝",
      "😞",
      "😟",
      "😠",
      "😡",
      "😢",
      "😣",
      "😤",
      "😥",
      "😦",
      "😧",
      "😨",
      "😩",
      "😪",
      "😫",
      "😬",
      "😭",
      "😮",
      "😯",
      "😰",
      "😱",
      "😲",
      "😳",
      "😴",
      "😵",
      "😶",
      "😷",
      "😸",
      "😹",
      "😺",
      "😻",
      "😼",
      "😽",
      "😾",
      "😿",
      "🙀",
      "🙁",
      "🙂",
      "🙃",
      "🙄",
      "🙅🏻‍♀️",
      "🙅🏻‍♂️",
      "🙅🏻",
      "🙅🏼‍♀️",
      "🙅🏼‍♂️",
      "🙅🏼",
      "🙅🏽‍♀️",
      "🙅🏽‍♂️",
      "🙅🏽",
      "🙅🏾‍♀️",
      "🙅🏾‍♂️",
      "🙅🏾",
      "🙅🏿‍♀️",
      "🙅🏿‍♂️",
      "🙅🏿",
      "🙅‍♀️",
      "🙅‍♂️",
      "🙅",
      "🙆🏻‍♀️",
      "🙆🏻‍♂️",
      "🙆🏻",
      "🙆🏼‍♀️",
      "🙆🏼‍♂️",
      "🙆🏼",
      "🙆🏽‍♀️",
      "🙆🏽‍♂️",
      "🙆🏽",
      "🙆🏾‍♀️",
      "🙆🏾‍♂️",
      "🙆🏾",
      "🙆🏿‍♀️",
      "🙆🏿‍♂️",
      "🙆🏿",
      "🙆‍♀️",
      "🙆‍♂️",
      "🙆",
      "🙇🏻‍♀️",
      "🙇🏻‍♂️",
      "🙇🏻",
      "🙇🏼‍♀️",
      "🙇🏼‍♂️",
      "🙇🏼",
      "🙇🏽‍♀️",
      "🙇🏽‍♂️",
      "🙇🏽",
      "🙇🏾‍♀️",
      "🙇🏾‍♂️",
      "🙇🏾",
      "🙇🏿‍♀️",
      "🙇🏿‍♂️",
      "🙇🏿",
      "🙇‍♀️",
      "🙇‍♂️",
      "🙇",
      "🙈",
      "🙉",
      "🙊",
      "🙋🏻‍♀️",
      "🙋🏻‍♂️",
      "🙋🏻",
      "🙋🏼‍♀️",
      "🙋🏼‍♂️",
      "🙋🏼",
      "🙋🏽‍♀️",
      "🙋🏽‍♂️",
      "🙋🏽",
      "🙋🏾‍♀️",
      "🙋🏾‍♂️",
      "🙋🏾",
      "🙋🏿‍♀️",
      "🙋🏿‍♂️",
      "🙋🏿",
      "🙋‍♀️",
      "🙋‍♂️",
      "🙋",
      "🙌🏻",
      "🙌🏼",
      "🙌🏽",
      "🙌🏾",
      "🙌🏿",
      "🙌",
      "🙍🏻‍♀️",
      "🙍🏻‍♂️",
      "🙍🏻",
      "🙍🏼‍♀️",
      "🙍🏼‍♂️",
      "🙍🏼",
      "🙍🏽‍♀️",
      "🙍🏽‍♂️",
      "🙍🏽",
      "🙍🏾‍♀️",
      "🙍🏾‍♂️",
      "🙍🏾",
      "🙍🏿‍♀️",
      "🙍🏿‍♂️",
      "🙍🏿",
      "🙍‍♀️",
      "🙍‍♂️",
      "🙍",
      "🙎🏻‍♀️",
      "🙎🏻‍♂️",
      "🙎🏻",
      "🙎🏼‍♀️",
      "🙎🏼‍♂️",
      "🙎🏼",
      "🙎🏽‍♀️",
      "🙎🏽‍♂️",
      "🙎🏽",
      "🙎🏾‍♀️",
      "🙎🏾‍♂️",
      "🙎🏾",
      "🙎🏿‍♀️",
      "🙎🏿‍♂️",
      "🙎🏿",
      "🙎‍♀️",
      "🙎‍♂️",
      "🙎",
      "🙏🏻",
      "🙏🏼",
      "🙏🏽",
      "🙏🏾",
      "🙏🏿",
      "🙏",
      "🚀",
      "🚁",
      "🚂",
      "🚃",
      "🚄",
      "🚅",
      "🚆",
      "🚇",
      "🚈",
      "🚉",
      "🚊",
      "🚋",
      "🚌",
      "🚍",
      "🚎",
      "🚏",
      "🚐",
      "🚑",
      "🚒",
      "🚓",
      "🚔",
      "🚕",
      "🚖",
      "🚗",
      "🚘",
      "🚙",
      "🚚",
      "🚛",
      "🚜",
      "🚝",
      "🚞",
      "🚟",
      "🚠",
      "🚡",
      "🚢",
      "🚣🏻‍♀️",
      "🚣🏻‍♂️",
      "🚣🏻",
      "🚣🏼‍♀️",
      "🚣🏼‍♂️",
      "🚣🏼",
      "🚣🏽‍♀️",
      "🚣🏽‍♂️",
      "🚣🏽",
      "🚣🏾‍♀️",
      "🚣🏾‍♂️",
      "🚣🏾",
      "🚣🏿‍♀️",
      "🚣🏿‍♂️",
      "🚣🏿",
      "🚣‍♀️",
      "🚣‍♂️",
      "🚣",
      "🚤",
      "🚥",
      "🚦",
      "🚧",
      "🚨",
      "🚩",
      "🚪",
      "🚫",
      "🚬",
      "🚭",
      "🚮",
      "🚯",
      "🚰",
      "🚱",
      "🚲",
      "🚳",
      "🚴🏻‍♀️",
      "🚴🏻‍♂️",
      "🚴🏻",
      "🚴🏼‍♀️",
      "🚴🏼‍♂️",
      "🚴🏼",
      "🚴🏽‍♀️",
      "🚴🏽‍♂️",
      "🚴🏽",
      "🚴🏾‍♀️",
      "🚴🏾‍♂️",
      "🚴🏾",
      "🚴🏿‍♀️",
      "🚴🏿‍♂️",
      "🚴🏿",
      "🚴‍♀️",
      "🚴‍♂️",
      "🚴",
      "🚵🏻‍♀️",
      "🚵🏻‍♂️",
      "🚵🏻",
      "🚵🏼‍♀️",
      "🚵🏼‍♂️",
      "🚵🏼",
      "🚵🏽‍♀️",
      "🚵🏽‍♂️",
      "🚵🏽",
      "🚵🏾‍♀️",
      "🚵🏾‍♂️",
      "🚵🏾",
      "🚵🏿‍♀️",
      "🚵🏿‍♂️",
      "🚵🏿",
      "🚵‍♀️",
      "🚵‍♂️",
      "🚵",
      "🚶🏻‍♀️",
      "🚶🏻‍♂️",
      "🚶🏻",
      "🚶🏼‍♀️",
      "🚶🏼‍♂️",
      "🚶🏼",
      "🚶🏽‍♀️",
      "🚶🏽‍♂️",
      "🚶🏽",
      "🚶🏾‍♀️",
      "🚶🏾‍♂️",
      "🚶🏾",
      "🚶🏿‍♀️",
      "🚶🏿‍♂️",
      "🚶🏿",
      "🚶‍♀️",
      "🚶‍♂️",
      "🚶",
      "🚷",
      "🚸",
      "🚹",
      "🚺",
      "🚻",
      "🚼",
      "🚽",
      "🚾",
      "🚿",
      "🛀🏻",
      "🛀🏼",
      "🛀🏽",
      "🛀🏾",
      "🛀🏿",
      "🛀",
      "🛁",
      "🛂",
      "🛃",
      "🛄",
      "🛅",
      "🛋️",
      "🛌🏻",
      "🛌🏼",
      "🛌🏽",
      "🛌🏾",
      "🛌🏿",
      "🛌",
      "🛍️",
      "🛎️",
      "🛏️",
      "🛐",
      "🛑",
      "🛒",
      "🛕",
      "🛠️",
      "🛡️",
      "🛢️",
      "🛣️",
      "🛤️",
      "🛥️",
      "🛩️",
      "🛫",
      "🛬",
      "🛰️",
      "🛳️",
      "🛴",
      "🛵",
      "🛶",
      "🛷",
      "🛸",
      "🛹",
      "🛺",
      "🟠",
      "🟡",
      "🟢",
      "🟣",
      "🟤",
      "🟥",
      "🟦",
      "🟧",
      "🟨",
      "🟩",
      "🟪",
      "🟫",
      "🤍",
      "🤎",
      "🤏🏻",
      "🤏🏼",
      "🤏🏽",
      "🤏🏾",
      "🤏🏿",
      "🤏",
      "🤐",
      "🤑",
      "🤒",
      "🤓",
      "🤔",
      "🤕",
      "🤖",
      "🤗",
      "🤘🏻",
      "🤘🏼",
      "🤘🏽",
      "🤘🏾",
      "🤘🏿",
      "🤘",
      "🤙🏻",
      "🤙🏼",
      "🤙🏽",
      "🤙🏾",
      "🤙🏿",
      "🤙",
      "🤚🏻",
      "🤚🏼",
      "🤚🏽",
      "🤚🏾",
      "🤚🏿",
      "🤚",
      "🤛🏻",
      "🤛🏼",
      "🤛🏽",
      "🤛🏾",
      "🤛🏿",
      "🤛",
      "🤜🏻",
      "🤜🏼",
      "🤜🏽",
      "🤜🏾",
      "🤜🏿",
      "🤜",
      "🤝",
      "🤞🏻",
      "🤞🏼",
      "🤞🏽",
      "🤞🏾",
      "🤞🏿",
      "🤞",
      "🤟🏻",
      "🤟🏼",
      "🤟🏽",
      "🤟🏾",
      "🤟🏿",
      "🤟",
      "🤠",
      "🤡",
      "🤢",
      "🤣",
      "🤤",
      "🤥",
      "🤦🏻‍♀️",
      "🤦🏻‍♂️",
      "🤦🏻",
      "🤦🏼‍♀️",
      "🤦🏼‍♂️",
      "🤦🏼",
      "🤦🏽‍♀️",
      "🤦🏽‍♂️",
      "🤦🏽",
      "🤦🏾‍♀️",
      "🤦🏾‍♂️",
      "🤦🏾",
      "🤦🏿‍♀️",
      "🤦🏿‍♂️",
      "🤦🏿",
      "🤦‍♀️",
      "🤦‍♂️",
      "🤦",
      "🤧",
      "🤨",
      "🤩",
      "🤪",
      "🤫",
      "🤬",
      "🤭",
      "🤮",
      "🤯",
      "🤰🏻",
      "🤰🏼",
      "🤰🏽",
      "🤰🏾",
      "🤰🏿",
      "🤰",
      "🤱🏻",
      "🤱🏼",
      "🤱🏽",
      "🤱🏾",
      "🤱🏿",
      "🤱",
      "🤲🏻",
      "🤲🏼",
      "🤲🏽",
      "🤲🏾",
      "🤲🏿",
      "🤲",
      "🤳🏻",
      "🤳🏼",
      "🤳🏽",
      "🤳🏾",
      "🤳🏿",
      "🤳",
      "🤴🏻",
      "🤴🏼",
      "🤴🏽",
      "🤴🏾",
      "🤴🏿",
      "🤴",
      "🤵🏻‍♀️",
      "🤵🏻‍♂️",
      "🤵🏻",
      "🤵🏼‍♀️",
      "🤵🏼‍♂️",
      "🤵🏼",
      "🤵🏽‍♀️",
      "🤵🏽‍♂️",
      "🤵🏽",
      "🤵🏾‍♀️",
      "🤵🏾‍♂️",
      "🤵🏾",
      "🤵🏿‍♀️",
      "🤵🏿‍♂️",
      "🤵🏿",
      "🤵‍♀️",
      "🤵‍♂️",
      "🤵",
      "🤶🏻",
      "🤶🏼",
      "🤶🏽",
      "🤶🏾",
      "🤶🏿",
      "🤶",
      "🤷🏻‍♀️",
      "🤷🏻‍♂️",
      "🤷🏻",
      "🤷🏼‍♀️",
      "🤷🏼‍♂️",
      "🤷🏼",
      "🤷🏽‍♀️",
      "🤷🏽‍♂️",
      "🤷🏽",
      "🤷🏾‍♀️",
      "🤷🏾‍♂️",
      "🤷🏾",
      "🤷🏿‍♀️",
      "🤷🏿‍♂️",
      "🤷🏿",
      "🤷‍♀️",
      "🤷‍♂️",
      "🤷",
      "🤸🏻‍♀️",
      "🤸🏻‍♂️",
      "🤸🏻",
      "🤸🏼‍♀️",
      "🤸🏼‍♂️",
      "🤸🏼",
      "🤸🏽‍♀️",
      "🤸🏽‍♂️",
      "🤸🏽",
      "🤸🏾‍♀️",
      "🤸🏾‍♂️",
      "🤸🏾",
      "🤸🏿‍♀️",
      "🤸🏿‍♂️",
      "🤸🏿",
      "🤸‍♀️",
      "🤸‍♂️",
      "🤸",
      "🤹🏻‍♀️",
      "🤹🏻‍♂️",
      "🤹🏻",
      "🤹🏼‍♀️",
      "🤹🏼‍♂️",
      "🤹🏼",
      "🤹🏽‍♀️",
      "🤹🏽‍♂️",
      "🤹🏽",
      "🤹🏾‍♀️",
      "🤹🏾‍♂️",
      "🤹🏾",
      "🤹🏿‍♀️",
      "🤹🏿‍♂️",
      "🤹🏿",
      "🤹‍♀️",
      "🤹‍♂️",
      "🤹",
      "🤺",
      "🤼‍♀️",
      "🤼‍♂️",
      "🤼",
      "🤽🏻‍♀️",
      "🤽🏻‍♂️",
      "🤽🏻",
      "🤽🏼‍♀️",
      "🤽🏼‍♂️",
      "🤽🏼",
      "🤽🏽‍♀️",
      "🤽🏽‍♂️",
      "🤽🏽",
      "🤽🏾‍♀️",
      "🤽🏾‍♂️",
      "🤽🏾",
      "🤽🏿‍♀️",
      "🤽🏿‍♂️",
      "🤽🏿",
      "🤽‍♀️",
      "🤽‍♂️",
      "🤽",
      "🤾🏻‍♀️",
      "🤾🏻‍♂️",
      "🤾🏻",
      "🤾🏼‍♀️",
      "🤾🏼‍♂️",
      "🤾🏼",
      "🤾🏽‍♀️",
      "🤾🏽‍♂️",
      "🤾🏽",
      "🤾🏾‍♀️",
      "🤾🏾‍♂️",
      "🤾🏾",
      "🤾🏿‍♀️",
      "🤾🏿‍♂️",
      "🤾🏿",
      "🤾‍♀️",
      "🤾‍♂️",
      "🤾",
      "🤿",
      "🥀",
      "🥁",
      "🥂",
      "🥃",
      "🥄",
      "🥅",
      "🥇",
      "🥈",
      "🥉",
      "🥊",
      "🥋",
      "🥌",
      "🥍",
      "🥎",
      "🥏",
      "🥐",
      "🥑",
      "🥒",
      "🥓",
      "🥔",
      "🥕",
      "🥖",
      "🥗",
      "🥘",
      "🥙",
      "🥚",
      "🥛",
      "🥜",
      "🥝",
      "🥞",
      "🥟",
      "🥠",
      "🥡",
      "🥢",
      "🥣",
      "🥤",
      "🥥",
      "🥦",
      "🥧",
      "🥨",
      "🥩",
      "🥪",
      "🥫",
      "🥬",
      "🥭",
      "🥮",
      "🥯",
      "🥰",
      "🥱",
      "🥳",
      "🥴",
      "🥵",
      "🥶",
      "🥺",
      "🥻",
      "🥼",
      "🥽",
      "🥾",
      "🥿",
      "🦀",
      "🦁",
      "🦂",
      "🦃",
      "🦄",
      "🦅",
      "🦆",
      "🦇",
      "🦈",
      "🦉",
      "🦊",
      "🦋",
      "🦌",
      "🦍",
      "🦎",
      "🦏",
      "🦐",
      "🦑",
      "🦒",
      "🦓",
      "🦔",
      "🦕",
      "🦖",
      "🦗",
      "🦘",
      "🦙",
      "🦚",
      "🦛",
      "🦜",
      "🦝",
      "🦞",
      "🦟",
      "🦠",
      "🦡",
      "🦢",
      "🦥",
      "🦦",
      "🦧",
      "🦨",
      "🦩",
      "🦪",
      "🦮",
      "🦯",
      "🦰",
      "🦱",
      "🦲",
      "🦳",
      "🦴",
      "🦵🏻",
      "🦵🏼",
      "🦵🏽",
      "🦵🏾",
      "🦵🏿",
      "🦵",
      "🦶🏻",
      "🦶🏼",
      "🦶🏽",
      "🦶🏾",
      "🦶🏿",
      "🦶",
      "🦷",
      "🦸🏻‍♀️",
      "🦸🏻‍♂️",
      "🦸🏻",
      "🦸🏼‍♀️",
      "🦸🏼‍♂️",
      "🦸🏼",
      "🦸🏽‍♀️",
      "🦸🏽‍♂️",
      "🦸🏽",
      "🦸🏾‍♀️",
      "🦸🏾‍♂️",
      "🦸🏾",
      "🦸🏿‍♀️",
      "🦸🏿‍♂️",
      "🦸🏿",
      "🦸‍♀️",
      "🦸‍♂️",
      "🦸",
      "🦹🏻‍♀️",
      "🦹🏻‍♂️",
      "🦹🏻",
      "🦹🏼‍♀️",
      "🦹🏼‍♂️",
      "🦹🏼",
      "🦹🏽‍♀️",
      "🦹🏽‍♂️",
      "🦹🏽",
      "🦹🏾‍♀️",
      "🦹🏾‍♂️",
      "🦹🏾",
      "🦹🏿‍♀️",
      "🦹🏿‍♂️",
      "🦹🏿",
      "🦹‍♀️",
      "🦹‍♂️",
      "🦹",
      "🦺",
      "🦻🏻",
      "🦻🏼",
      "🦻🏽",
      "🦻🏾",
      "🦻🏿",
      "🦻",
      "🦼",
      "🦽",
      "🦾",
      "🦿",
      "🧀",
      "🧁",
      "🧂",
      "🧃",
      "🧄",
      "🧅",
      "🧆",
      "🧇",
      "🧈",
      "🧉",
      "🧊",
      "🧍🏻‍♀️",
      "🧍🏻‍♂️",
      "🧍🏻",
      "🧍🏼‍♀️",
      "🧍🏼‍♂️",
      "🧍🏼",
      "🧍🏽‍♀️",
      "🧍🏽‍♂️",
      "🧍🏽",
      "🧍🏾‍♀️",
      "🧍🏾‍♂️",
      "🧍🏾",
      "🧍🏿‍♀️",
      "🧍🏿‍♂️",
      "🧍🏿",
      "🧍‍♀️",
      "🧍‍♂️",
      "🧍",
      "🧎🏻‍♀️",
      "🧎🏻‍♂️",
      "🧎🏻",
      "🧎🏼‍♀️",
      "🧎🏼‍♂️",
      "🧎🏼",
      "🧎🏽‍♀️",
      "🧎🏽‍♂️",
      "🧎🏽",
      "🧎🏾‍♀️",
      "🧎🏾‍♂️",
      "🧎🏾",
      "🧎🏿‍♀️",
      "🧎🏿‍♂️",
      "🧎🏿",
      "🧎‍♀️",
      "🧎‍♂️",
      "🧎",
      "🧏🏻‍♀️",
      "🧏🏻‍♂️",
      "🧏🏻",
      "🧏🏼‍♀️",
      "🧏🏼‍♂️",
      "🧏🏼",
      "🧏🏽‍♀️",
      "🧏🏽‍♂️",
      "🧏🏽",
      "🧏🏾‍♀️",
      "🧏🏾‍♂️",
      "🧏🏾",
      "🧏🏿‍♀️",
      "🧏🏿‍♂️",
      "🧏🏿",
      "🧏‍♀️",
      "🧏‍♂️",
      "🧏",
      "🧐",
      "🧑🏻‍🤝‍🧑🏻",
      "🧑🏻",
      "🧑🏼‍🤝‍🧑🏻",
      "🧑🏼‍🤝‍🧑🏼",
      "🧑🏼",
      "🧑🏽‍🤝‍🧑🏻",
      "🧑🏽‍🤝‍🧑🏼",
      "🧑🏽‍🤝‍🧑🏽",
      "🧑🏽",
      "🧑🏾‍🤝‍🧑🏻",
      "🧑🏾‍🤝‍🧑🏼",
      "🧑🏾‍🤝‍🧑🏽",
      "🧑🏾‍🤝‍🧑🏾",
      "🧑🏾",
      "🧑🏿‍🤝‍🧑🏻",
      "🧑🏿‍🤝‍🧑🏼",
      "🧑🏿‍🤝‍🧑🏽",
      "🧑🏿‍🤝‍🧑🏾",
      "🧑🏿‍🤝‍🧑🏿",
      "🧑🏿",
      "🧑‍🤝‍🧑",
      "🧑",
      "🧒🏻",
      "🧒🏼",
      "🧒🏽",
      "🧒🏾",
      "🧒🏿",
      "🧒",
      "🧓🏻",
      "🧓🏼",
      "🧓🏽",
      "🧓🏾",
      "🧓🏿",
      "🧓",
      "🧔🏻",
      "🧔🏼",
      "🧔🏽",
      "🧔🏾",
      "🧔🏿",
      "🧔",
      "🧕🏻",
      "🧕🏼",
      "🧕🏽",
      "🧕🏾",
      "🧕🏿",
      "🧕",
      "🧖🏻‍♀️",
      "🧖🏻‍♂️",
      "🧖🏻",
      "🧖🏼‍♀️",
      "🧖🏼‍♂️",
      "🧖🏼",
      "🧖🏽‍♀️",
      "🧖🏽‍♂️",
      "🧖🏽",
      "🧖🏾‍♀️",
      "🧖🏾‍♂️",
      "🧖🏾",
      "🧖🏿‍♀️",
      "🧖🏿‍♂️",
      "🧖🏿",
      "🧖‍♀️",
      "🧖‍♂️",
      "🧖",
      "🧗🏻‍♀️",
      "🧗🏻‍♂️",
      "🧗🏻",
      "🧗🏼‍♀️",
      "🧗🏼‍♂️",
      "🧗🏼",
      "🧗🏽‍♀️",
      "🧗🏽‍♂️",
      "🧗🏽",
      "🧗🏾‍♀️",
      "🧗🏾‍♂️",
      "🧗🏾",
      "🧗🏿‍♀️",
      "🧗🏿‍♂️",
      "🧗🏿",
      "🧗‍♀️",
      "🧗‍♂️",
      "🧗",
      "🧘🏻‍♀️",
      "🧘🏻‍♂️",
      "🧘🏻",
      "🧘🏼‍♀️",
      "🧘🏼‍♂️",
      "🧘🏼",
      "🧘🏽‍♀️",
      "🧘🏽‍♂️",
      "🧘🏽",
      "🧘🏾‍♀️",
      "🧘🏾‍♂️",
      "🧘🏾",
      "🧘🏿‍♀️",
      "🧘🏿‍♂️",
      "🧘🏿",
      "🧘‍♀️",
      "🧘‍♂️",
      "🧘",
      "🧙🏻‍♀️",
      "🧙🏻‍♂️",
      "🧙🏻",
      "🧙🏼‍♀️",
      "🧙🏼‍♂️",
      "🧙🏼",
      "🧙🏽‍♀️",
      "🧙🏽‍♂️",
      "🧙🏽",
      "🧙🏾‍♀️",
      "🧙🏾‍♂️",
      "🧙🏾",
      "🧙🏿‍♀️",
      "🧙🏿‍♂️",
      "🧙🏿",
      "🧙‍♀️",
      "🧙‍♂️",
      "🧙",
      "🧚🏻‍♀️",
      "🧚🏻‍♂️",
      "🧚🏻",
      "🧚🏼‍♀️",
      "🧚🏼‍♂️",
      "🧚🏼",
      "🧚🏽‍♀️",
      "🧚🏽‍♂️",
      "🧚🏽",
      "🧚🏾‍♀️",
      "🧚🏾‍♂️",
      "🧚🏾",
      "🧚🏿‍♀️",
      "🧚🏿‍♂️",
      "🧚🏿",
      "🧚‍♀️",
      "🧚‍♂️",
      "🧚",
      "🧛🏻‍♀️",
      "🧛🏻‍♂️",
      "🧛🏻",
      "🧛🏼‍♀️",
      "🧛🏼‍♂️",
      "🧛🏼",
      "🧛🏽‍♀️",
      "🧛🏽‍♂️",
      "🧛🏽",
      "🧛🏾‍♀️",
      "🧛🏾‍♂️",
      "🧛🏾",
      "🧛🏿‍♀️",
      "🧛🏿‍♂️",
      "🧛🏿",
      "🧛‍♀️",
      "🧛‍♂️",
      "🧛",
      "🧜🏻‍♀️",
      "🧜🏻‍♂️",
      "🧜🏻",
      "🧜🏼‍♀️",
      "🧜🏼‍♂️",
      "🧜🏼",
      "🧜🏽‍♀️",
      "🧜🏽‍♂️",
      "🧜🏽",
      "🧜🏾‍♀️",
      "🧜🏾‍♂️",
      "🧜🏾",
      "🧜🏿‍♀️",
      "🧜🏿‍♂️",
      "🧜🏿",
      "🧜‍♀️",
      "🧜‍♂️",
      "🧜",
      "🧝🏻‍♀️",
      "🧝🏻‍♂️",
      "🧝🏻",
      "🧝🏼‍♀️",
      "🧝🏼‍♂️",
      "🧝🏼",
      "🧝🏽‍♀️",
      "🧝🏽‍♂️",
      "🧝🏽",
      "🧝🏾‍♀️",
      "🧝🏾‍♂️",
      "🧝🏾",
      "🧝🏿‍♀️",
      "🧝🏿‍♂️",
      "🧝🏿",
      "🧝‍♀️",
      "🧝‍♂️",
      "🧝",
      "🧞‍♀️",
      "🧞‍♂️",
      "🧞",
      "🧟‍♀️",
      "🧟‍♂️",
      "🧟",
      "🧠",
      "🧡",
      "🧢",
      "🧣",
      "🧤",
      "🧥",
      "🧦",
      "🧧",
      "🧨",
      "🧩",
      "🧪",
      "🧫",
      "🧬",
      "🧭",
      "🧮",
      "🧯",
      "🧰",
      "🧱",
      "🧲",
      "🧳",
      "🧴",
      "🧵",
      "🧶",
      "🧷",
      "🧸",
      "🧹",
      "🧺",
      "🧻",
      "🧼",
      "🧽",
      "🧾",
      "🧿",
      "🩰",
      "🩱",
      "🩲",
      "🩳",
      "🩸",
      "🩹",
      "🩺",
      "🪀",
      "🪁",
      "🪂",
      "🪐",
      "🪑",
      "🪒",
      "🪓",
      "🪔",
      "🪕",
      "‼️",
      "⁉️",
      "™️",
      "ℹ️",
      "↔️",
      "↕️",
      "↖️",
      "↗️",
      "↘️",
      "↙️",
      "↩️",
      "↪️",
      "#⃣",
      "⌚️",
      "⌛️",
      "⌨️",
      "⏏️",
      "⏩",
      "⏪",
      "⏫",
      "⏬",
      "⏭️",
      "⏮️",
      "⏯️",
      "⏰",
      "⏱️",
      "⏲️",
      "⏳",
      "⏸️",
      "⏹️",
      "⏺️",
      "Ⓜ️",
      "▪️",
      "▫️",
      "▶️",
      "◀️",
      "◻️",
      "◼️",
      "◽️",
      "◾️",
      "☀️",
      "☁️",
      "☂️",
      "☃️",
      "☄️",
      "☎️",
      "☑️",
      "☔️",
      "☕️",
      "☘️",
      "☝🏻",
      "☝🏼",
      "☝🏽",
      "☝🏾",
      "☝🏿",
      "☝️",
      "☠️",
      "☢️",
      "☣️",
      "☦️",
      "☪️",
      "☮️",
      "☯️",
      "☸️",
      "☹️",
      "☺️",
      "♀️",
      "♂️",
      "♈️",
      "♉️",
      "♊️",
      "♋️",
      "♌️",
      "♍️",
      "♎️",
      "♏️",
      "♐️",
      "♑️",
      "♒️",
      "♓️",
      "♟️",
      "♠️",
      "♣️",
      "♥️",
      "♦️",
      "♨️",
      "♻️",
      "♾",
      "♿️",
      "⚒️",
      "⚓️",
      "⚔️",
      "⚕️",
      "⚖️",
      "⚗️",
      "⚙️",
      "⚛️",
      "⚜️",
      "⚠️",
      "⚡️",
      "⚪️",
      "⚫️",
      "⚰️",
      "⚱️",
      "⚽️",
      "⚾️",
      "⛄️",
      "⛅️",
      "⛈️",
      "⛎",
      "⛏️",
      "⛑️",
      "⛓️",
      "⛔️",
      "⛩️",
      "⛪️",
      "⛰️",
      "⛱️",
      "⛲️",
      "⛳️",
      "⛴️",
      "⛵️",
      "⛷🏻",
      "⛷🏼",
      "⛷🏽",
      "⛷🏾",
      "⛷🏿",
      "⛷️",
      "⛸️",
      "⛹🏻‍♀️",
      "⛹🏻‍♂️",
      "⛹🏻",
      "⛹🏼‍♀️",
      "⛹🏼‍♂️",
      "⛹🏼",
      "⛹🏽‍♀️",
      "⛹🏽‍♂️",
      "⛹🏽",
      "⛹🏾‍♀️",
      "⛹🏾‍♂️",
      "⛹🏾",
      "⛹🏿‍♀️",
      "⛹🏿‍♂️",
      "⛹🏿",
      "⛹️‍♀️",
      "⛹️‍♂️",
      "⛹️",
      "⛺️",
      "⛽️",
      "✂️",
      "✅",
      "✈️",
      "✉️",
      "✊🏻",
      "✊🏼",
      "✊🏽",
      "✊🏾",
      "✊🏿",
      "✊",
      "✋🏻",
      "✋🏼",
      "✋🏽",
      "✋🏾",
      "✋🏿",
      "✋",
      "✌🏻",
      "✌🏼",
      "✌🏽",
      "✌🏾",
      "✌🏿",
      "✌️",
      "✍🏻",
      "✍🏼",
      "✍🏽",
      "✍🏾",
      "✍🏿",
      "✍️",
      "✏️",
      "✒️",
      "✔️",
      "✖️",
      "✝️",
      "✡️",
      "✨",
      "✳️",
      "✴️",
      "❄️",
      "❇️",
      "❌",
      "❎",
      "❓",
      "❔",
      "❕",
      "❗️",
      "❣️",
      "❤️",
      "➕",
      "➖",
      "➗",
      "➡️",
      "➰",
      "➿",
      "⤴️",
      "⤵️",
      "*⃣",
      "⬅️",
      "⬆️",
      "⬇️",
      "⬛️",
      "⬜️",
      "⭐️",
      "⭕️",
      "0⃣",
      "〰️",
      "〽️",
      "1⃣",
      "2⃣",
      "㊗️",
      "㊙️",
      "3⃣",
      "4⃣",
      "5⃣",
      "6⃣",
      "7⃣",
      "8⃣",
      "9⃣",
      "©️",
      "®️",
      ""
    ];
  }
});

// node_modules/loader-utils/lib/interpolateName.js
var require_interpolateName = __commonJS({
  "node_modules/loader-utils/lib/interpolateName.js"(exports, module) {
    "use strict";
    var path = require_path();
    var emojisList = require_emojis_list();
    var getHashDigest = require_getHashDigest();
    var emojiRegex = /[\uD800-\uDFFF]./;
    var emojiList = emojisList.filter((emoji) => emojiRegex.test(emoji));
    var emojiCache = {};
    function encodeStringToEmoji(content, length) {
      if (emojiCache[content]) {
        return emojiCache[content];
      }
      length = length || 1;
      const emojis = [];
      do {
        if (!emojiList.length) {
          throw new Error("Ran out of emoji");
        }
        const index = Math.floor(Math.random() * emojiList.length);
        emojis.push(emojiList[index]);
        emojiList.splice(index, 1);
      } while (--length > 0);
      const emojiEncoding = emojis.join("");
      emojiCache[content] = emojiEncoding;
      return emojiEncoding;
    }
    function interpolateName(loaderContext, name, options) {
      let filename;
      const hasQuery = loaderContext.resourceQuery && loaderContext.resourceQuery.length > 1;
      if (typeof name === "function") {
        filename = name(
          loaderContext.resourcePath,
          hasQuery ? loaderContext.resourceQuery : void 0
        );
      } else {
        filename = name || "[hash].[ext]";
      }
      const context = options.context;
      const content = options.content;
      const regExp = options.regExp;
      let ext = "bin";
      let basename = "file";
      let directory = "";
      let folder = "";
      let query = "";
      if (loaderContext.resourcePath) {
        const parsed = path.parse(loaderContext.resourcePath);
        let resourcePath = loaderContext.resourcePath;
        if (parsed.ext) {
          ext = parsed.ext.substr(1);
        }
        if (parsed.dir) {
          basename = parsed.name;
          resourcePath = parsed.dir + path.sep;
        }
        if (typeof context !== "undefined") {
          directory = path.relative(context, resourcePath + "_").replace(/\\/g, "/").replace(/\.\.(\/)?/g, "_$1");
          directory = directory.substr(0, directory.length - 1);
        } else {
          directory = resourcePath.replace(/\\/g, "/").replace(/\.\.(\/)?/g, "_$1");
        }
        if (directory.length === 1) {
          directory = "";
        } else if (directory.length > 1) {
          folder = path.basename(directory);
        }
      }
      if (loaderContext.resourceQuery && loaderContext.resourceQuery.length > 1) {
        query = loaderContext.resourceQuery;
        const hashIdx = query.indexOf("#");
        if (hashIdx >= 0) {
          query = query.substr(0, hashIdx);
        }
      }
      let url = filename;
      if (content) {
        url = url.replace(
          /\[(?:([^[:\]]+):)?(?:hash|contenthash)(?::([a-z]+\d*))?(?::(\d+))?\]/gi,
          (all, hashType, digestType, maxLength) => getHashDigest(content, hashType, digestType, parseInt(maxLength, 10))
        ).replace(
          /\[emoji(?::(\d+))?\]/gi,
          (all, length) => encodeStringToEmoji(content, parseInt(length, 10))
        );
      }
      url = url.replace(/\[ext\]/gi, () => ext).replace(/\[name\]/gi, () => basename).replace(/\[path\]/gi, () => directory).replace(/\[folder\]/gi, () => folder).replace(/\[query\]/gi, () => query);
      if (regExp && loaderContext.resourcePath) {
        const match = loaderContext.resourcePath.match(new RegExp(regExp));
        match && match.forEach((matched, i) => {
          url = url.replace(new RegExp("\\[" + i + "\\]", "ig"), matched);
        });
      }
      if (typeof loaderContext.options === "object" && typeof loaderContext.options.customInterpolateName === "function") {
        url = loaderContext.options.customInterpolateName.call(
          loaderContext,
          url,
          name,
          options
        );
      }
      return url;
    }
    module.exports = interpolateName;
  }
});

// node_modules/loader-utils/lib/index.js
var require_lib = __commonJS({
  "node_modules/loader-utils/lib/index.js"(exports) {
    var getOptions = require_getOptions();
    var parseQuery = require_parseQuery();
    var stringifyRequest = require_stringifyRequest();
    var getRemainingRequest = require_getRemainingRequest();
    var getCurrentRequest = require_getCurrentRequest();
    var isUrlRequest = require_isUrlRequest();
    var urlToRequest = require_urlToRequest();
    var parseString = require_parseString();
    var getHashDigest = require_getHashDigest();
    var interpolateName = require_interpolateName();
    exports.getOptions = getOptions;
    exports.parseQuery = parseQuery;
    exports.stringifyRequest = stringifyRequest;
    exports.getRemainingRequest = getRemainingRequest;
    exports.getCurrentRequest = getCurrentRequest;
    exports.isUrlRequest = isUrlRequest;
    exports.urlToRequest = urlToRequest;
    exports.parseString = parseString;
    exports.getHashDigest = getHashDigest;
    exports.interpolateName = interpolateName;
  }
});
export default require_lib();
//# sourceMappingURL=loader-utils.js.map
