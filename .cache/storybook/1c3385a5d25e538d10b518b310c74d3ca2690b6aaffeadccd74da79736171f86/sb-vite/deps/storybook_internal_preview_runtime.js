import {
  __require
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/core/dist/preview/runtime.js
var Bi = Object.create;
var Wr = Object.defineProperty;
var Gi = Object.getOwnPropertyDescriptor;
var Vi = Object.getOwnPropertyNames;
var Hi = Object.getPrototypeOf;
var zi = Object.prototype.hasOwnProperty;
var n = (r, e) => Wr(r, "name", { value: e, configurable: true });
var nr = ((r) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(r, {
  get: (e, t) => (typeof __require < "u" ? __require : e)[t]
}) : r)(function(r) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
var B = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var Ae = (r, e) => {
  for (var t in e)
    Wr(r, t, { get: e[t], enumerable: true });
};
var Wi = (r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let s of Vi(e))
      !zi.call(r, s) && s !== t && Wr(r, s, { get: () => e[s], enumerable: !(o = Gi(e, s)) || o.enumerable });
  return r;
};
var ue = (r, e, t) => (t = r != null ? Bi(Hi(r)) : {}, Wi(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !r || !r.__esModule ? Wr(t, "default", { value: r, enumerable: true }) : t,
  r
));
var Qr = B((Qn, so) => {
  (function(r) {
    if (typeof Qn == "object" && typeof so < "u")
      so.exports = r();
    else if (typeof define == "function" && define.amd)
      define([], r);
    else {
      var e;
      typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = this, e.memoizerific = r();
    }
  })(function() {
    var r, e, t;
    return n(function o(s, a, l) {
      function c(u, d) {
        if (!a[u]) {
          if (!s[u]) {
            var h = typeof nr == "function" && nr;
            if (!d && h) return h(u, true);
            if (i) return i(u, true);
            var S = new Error("Cannot find module '" + u + "'");
            throw S.code = "MODULE_NOT_FOUND", S;
          }
          var m = a[u] = { exports: {} };
          s[u][0].call(m.exports, function(T) {
            var y = s[u][1][T];
            return c(y || T);
          }, m, m.exports, o, s, a, l);
        }
        return a[u].exports;
      }
      n(c, "s");
      for (var i = typeof nr == "function" && nr, p = 0; p < l.length; p++) c(l[p]);
      return c;
    }, "e")({ 1: [function(o, s, a) {
      s.exports = function(l) {
        if (typeof Map != "function" || l) {
          var c = o("./similar");
          return new c();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(o, s, a) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      n(l, "Similar"), l.prototype.get = function(c) {
        var i;
        if (this.lastItem && this.isEqual(this.lastItem.key, c))
          return this.lastItem.val;
        if (i = this.indexOf(c), i >= 0)
          return this.lastItem = this.list[i], this.list[i].val;
      }, l.prototype.set = function(c, i) {
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? (this.lastItem.val = i, this) : (p = this.indexOf(c), p >= 0 ? (this.lastItem = this.list[p], this.list[p].val = i, this) : (this.lastItem = { key: c, val: i }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(c) {
        var i;
        if (this.lastItem && this.isEqual(this.lastItem.key, c) && (this.lastItem = void 0), i = this.indexOf(c), i >= 0)
          return this.size--, this.list.splice(i, 1)[0];
      }, l.prototype.has = function(c) {
        var i;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? true : (i = this.indexOf(c), i >= 0 ? (this.lastItem = this.list[i], true) : false);
      }, l.prototype.forEach = function(c, i) {
        var p;
        for (p = 0; p < this.size; p++)
          c.call(i || this, this.list[p].val, this.list[p].key, this);
      }, l.prototype.indexOf = function(c) {
        var i;
        for (i = 0; i < this.size; i++)
          if (this.isEqual(this.list[i].key, c))
            return i;
        return -1;
      }, l.prototype.isEqual = function(c, i) {
        return c === i || c !== c && i !== i;
      }, s.exports = l;
    }, {}], 3: [function(o, s, a) {
      var l = o("map-or-similar");
      s.exports = function(u) {
        var d = new l(false), h = [];
        return function(S) {
          var m = n(function() {
            var T = d, y, x, A = arguments.length - 1, g = Array(A + 1), b = true, _;
            if ((m.numArgs || m.numArgs === 0) && m.numArgs !== A + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (_ = 0; _ < A; _++) {
              if (g[_] = {
                cacheItem: T,
                arg: arguments[_]
              }, T.has(arguments[_])) {
                T = T.get(arguments[_]);
                continue;
              }
              b = false, y = new l(false), T.set(arguments[_], y), T = y;
            }
            return b && (T.has(arguments[A]) ? x = T.get(arguments[A]) : b = false), b || (x = S.apply(null, arguments), T.set(arguments[A], x)), u > 0 && (g[A] = {
              cacheItem: T,
              arg: arguments[A]
            }, b ? c(h, g) : h.push(g), h.length > u && i(h.shift())), m.wasMemoized = b, m.numArgs = A + 1, x;
          }, "memoizerific");
          return m.limit = u, m.wasMemoized = false, m.cache = d, m.lru = h, m;
        };
      };
      function c(u, d) {
        var h = u.length, S = d.length, m, T, y;
        for (T = 0; T < h; T++) {
          for (m = true, y = 0; y < S; y++)
            if (!p(u[T][y].arg, d[y].arg)) {
              m = false;
              break;
            }
          if (m)
            break;
        }
        u.push(u.splice(T, 1)[0]);
      }
      n(c, "moveToMostRecentLru");
      function i(u) {
        var d = u.length, h = u[d - 1], S, m;
        for (h.cacheItem.delete(h.arg), m = d - 2; m >= 0 && (h = u[m], S = h.cacheItem.get(h.arg), !S || !S.size); m--)
          h.cacheItem.delete(h.arg);
      }
      n(i, "removeCachedResult");
      function p(u, d) {
        return u === d || u !== u && d !== d;
      }
      n(p, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
var wn = B((_n) => {
  "use strict";
  Object.defineProperty(_n, "__esModule", { value: true });
  _n.encodeString = du;
  var ne = Array.from({ length: 256 }, (r, e) => "%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase()), pu = new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
  function du(r) {
    let e = r.length;
    if (e === 0)
      return "";
    let t = "", o = 0, s = 0;
    e: for (; s < e; s++) {
      let a = r.charCodeAt(s);
      for (; a < 128; ) {
        if (pu[a] !== 1 && (o < s && (t += r.slice(o, s)), o = s + 1, t += ne[a]), ++s === e)
          break e;
        a = r.charCodeAt(s);
      }
      if (o < s && (t += r.slice(o, s)), a < 2048) {
        o = s + 1, t += ne[192 | a >> 6] + ne[128 | a & 63];
        continue;
      }
      if (a < 55296 || a >= 57344) {
        o = s + 1, t += ne[224 | a >> 12] + ne[128 | a >> 6 & 63] + ne[128 | a & 63];
        continue;
      }
      if (++s, s >= e)
        throw new Error("URI malformed");
      let l = r.charCodeAt(s) & 1023;
      o = s + 1, a = 65536 + ((a & 1023) << 10 | l), t += ne[240 | a >> 18] + ne[128 | a >> 12 & 63] + ne[128 | a >> 6 & 63] + ne[128 | a & 63];
    }
    return o === 0 ? r : o < e ? t + r.slice(o) : t;
  }
  n(du, "encodeString");
});
var Tt = B((se) => {
  "use strict";
  Object.defineProperty(se, "__esModule", { value: true });
  se.defaultOptions = se.defaultShouldSerializeObject = se.defaultValueSerializer = void 0;
  var vn = wn(), uu = n((r) => {
    switch (typeof r) {
      case "string":
        return (0, vn.encodeString)(r);
      case "bigint":
      case "boolean":
        return "" + r;
      case "number":
        if (Number.isFinite(r))
          return r < 1e21 ? "" + r : (0, vn.encodeString)("" + r);
        break;
    }
    return r instanceof Date ? (0, vn.encodeString)(r.toISOString()) : "";
  }, "defaultValueSerializer");
  se.defaultValueSerializer = uu;
  var fu = n((r) => r instanceof Date, "defaultShouldSerializeObject");
  se.defaultShouldSerializeObject = fu;
  var Ma = n((r) => r, "identityFunc");
  se.defaultOptions = {
    nesting: true,
    nestingSyntax: "dot",
    arrayRepeat: false,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
    valueDeserializer: Ma,
    valueSerializer: se.defaultValueSerializer,
    keyDeserializer: Ma,
    shouldSerializeObject: se.defaultShouldSerializeObject
  };
});
var Pn = B((Et) => {
  "use strict";
  Object.defineProperty(Et, "__esModule", { value: true });
  Et.getDeepObject = hu;
  Et.stringifyObject = qa;
  var ke = Tt(), yu = wn();
  function mu(r) {
    return r === "__proto__" || r === "constructor" || r === "prototype";
  }
  n(mu, "isPrototypeKey");
  function hu(r, e, t, o, s) {
    if (mu(e))
      return r;
    let a = r[e];
    return typeof a == "object" && a !== null ? a : !o && (s || typeof t == "number" || typeof t == "string" && t * 0 === 0 && t.indexOf(".") === -1) ? r[e] = [] : r[e] = {};
  }
  n(hu, "getDeepObject");
  var gu = 20, Su = "[]", bu = "[", Tu = "]", Eu = ".";
  function qa(r, e, t = 0, o, s) {
    let { nestingSyntax: a = ke.defaultOptions.nestingSyntax, arrayRepeat: l = ke.defaultOptions.arrayRepeat, arrayRepeatSyntax: c = ke.defaultOptions.arrayRepeatSyntax, nesting: i = ke.defaultOptions.nesting, delimiter: p = ke.defaultOptions.delimiter, valueSerializer: u = ke.defaultOptions.valueSerializer, shouldSerializeObject: d = ke.defaultOptions.shouldSerializeObject } = e, h = typeof p == "number" ? String.fromCharCode(
      p
    ) : p, S = s === true && l, m = a === "dot" || a === "js" && !s;
    if (t > gu)
      return "";
    let T = "", y = true, x = false;
    for (let A in r) {
      let g = r[A], b;
      o ? (b = o, S ? c === "bracket" && (b += Su) : m ? (b += Eu, b += A) : (b += bu, b += A, b += Tu)) : b = A, y || (T += h), typeof g == "object" && g !== null && !d(g) ? (x = g.pop !== void 0, (i || l && x) && (T += qa(g, e, t + 1, b, x))) : (T += (0, yu.encodeString)(b), T += "=", T += u(g, A)), y && (y = false);
    }
    return T;
  }
  n(qa, "stringifyObject");
});
var Va = B((ib, Ga) => {
  "use strict";
  var Ua = 12, Ru = 0, Cn = [
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function xu(r) {
    var e = r.indexOf("%");
    if (e === -1) return r;
    for (var t = r.length, o = "", s = 0, a = 0, l = e, c = Ua; e > -1 && e < t; ) {
      var i = Ba(r[e + 1], 4), p = Ba(r[e + 2], 0), u = i | p, d = Cn[u];
      if (c = Cn[256 + c + d], a = a << 6 | u & Cn[364 + d], c === Ua)
        o += r.slice(s, l), o += a <= 65535 ? String.fromCharCode(a) : String.fromCharCode(
          55232 + (a >> 10),
          56320 + (a & 1023)
        ), a = 0, s = e + 3, e = l = r.indexOf("%", s);
      else {
        if (c === Ru)
          return null;
        if (e += 3, e < t && r.charCodeAt(e) === 37) continue;
        return null;
      }
    }
    return o + r.slice(s);
  }
  n(xu, "decodeURIComponent");
  var Au = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function Ba(r, e) {
    var t = Au[r];
    return t === void 0 ? 255 : t << e;
  }
  n(Ba, "hexCodeToInt");
  Ga.exports = xu;
});
var $a = B((de) => {
  "use strict";
  var _u = de && de.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(de, "__esModule", { value: true });
  de.numberValueDeserializer = de.numberKeyDeserializer = void 0;
  de.parse = Pu;
  var Rt = Pn(), Le = Tt(), Ha = _u(Va()), wu = n((r) => {
    let e = Number(r);
    return Number.isNaN(e) ? r : e;
  }, "numberKeyDeserializer");
  de.numberKeyDeserializer = wu;
  var vu = n((r) => {
    let e = Number(r);
    return Number.isNaN(e) ? r : e;
  }, "numberValueDeserializer");
  de.numberValueDeserializer = vu;
  var za = /\+/g, Wa = n(function() {
  }, "Empty");
  Wa.prototype = /* @__PURE__ */ Object.create(null);
  function xt(r, e, t, o, s) {
    let a = r.substring(e, t);
    return o && (a = a.replace(za, " ")), s && (a = (0, Ha.default)(a) || a), a;
  }
  n(xt, "computeKeySlice");
  function Pu(r, e) {
    let { valueDeserializer: t = Le.defaultOptions.valueDeserializer, keyDeserializer: o = Le.defaultOptions.keyDeserializer, arrayRepeatSyntax: s = Le.defaultOptions.arrayRepeatSyntax, nesting: a = Le.defaultOptions.nesting, arrayRepeat: l = Le.defaultOptions.arrayRepeat, nestingSyntax: c = Le.defaultOptions.nestingSyntax, delimiter: i = Le.defaultOptions.delimiter } = e ?? {}, p = typeof i == "string" ? i.charCodeAt(0) : i, u = c === "js", d = new Wa();
    if (typeof r != "string")
      return d;
    let h = r.length, S = "", m = -1, T = -1, y = -1, x = d, A, g = "", b = "", _ = false, w = false, I = false, M = false, U = false, z = false, te = false, v = 0, F = -1, j = -1, k = -1;
    for (let D = 0; D < h + 1; D++) {
      if (v = D !== h ? r.charCodeAt(D) : p, v === p) {
        if (te = T > m, te || (T = D), y !== T - 1 && (b = xt(r, y + 1, F > -1 ? F : T, I, _), g = o(b), A !== void 0 && (x = (0, Rt.getDeepObject)(
          x,
          A,
          g,
          u && U,
          u && z
        ))), te || g !== "") {
          te && (S = r.slice(T + 1, D), M && (S = S.replace(za, " ")), w && (S = (0, Ha.default)(S) || S));
          let V = t(S, g);
          if (l) {
            let Q = x[g];
            Q === void 0 ? F > -1 ? x[g] = [V] : x[g] = V : Q.pop ? Q.push(V) : x[g] = [Q, V];
          } else
            x[g] = V;
        }
        S = "", m = D, T = D, _ = false, w = false, I = false, M = false, U = false, z = false, F = -1, y = D, x = d, A = void 0, g = "";
      } else v === 93 ? (l && s === "bracket" && k === 91 && (F = j), a && (c === "index" || u) && T <= m && (y !== j && (b = xt(
        r,
        y + 1,
        D,
        I,
        _
      ), g = o(b), A !== void 0 && (x = (0, Rt.getDeepObject)(x, A, g, void 0, u)), A = g, I = false, _ = false), y = D, z = true, U = false)) : v === 46 ? a && (c === "dot" || u) && T <= m && (y !== j && (b = xt(r, y + 1, D, I, _), g = o(b), A !== void 0 && (x = (0, Rt.getDeepObject)(
        x,
        A,
        g,
        u
      )), A = g, I = false, _ = false), U = true, z = false, y = D) : v === 91 ? a && (c === "index" || u) && T <= m && (y !== j && (b = xt(
        r,
        y + 1,
        D,
        I,
        _
      ), g = o(b), u && A !== void 0 && (x = (0, Rt.getDeepObject)(x, A, g, u)), A = g, I = false, _ = false, U = false, z = true), y = D) : v === 61 ? T <= m ? T = D : w = true : v === 43 ? T > m ? M = true : I = true : v === 37 && (T > m ? w = true : _ = true);
      j = D, k = v;
    }
    return d;
  }
  n(Pu, "parse");
});
var Ya = B((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: true });
  On.stringify = Ou;
  var Cu = Pn();
  function Ou(r, e) {
    if (r === null || typeof r != "object")
      return "";
    let t = e ?? {};
    return (0, Cu.stringifyObject)(r, t);
  }
  n(Ou, "stringify");
});
var At = B((re) => {
  "use strict";
  var Iu = re && re.__createBinding || (Object.create ? function(r, e, t, o) {
    o === void 0 && (o = t);
    var s = Object.getOwnPropertyDescriptor(e, t);
    (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: true, get: n(function() {
      return e[t];
    }, "get") }), Object.defineProperty(r, o, s);
  } : function(r, e, t, o) {
    o === void 0 && (o = t), r[o] = e[t];
  }), Fu = re && re.__exportStar || function(r, e) {
    for (var t in r) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Iu(e, r, t);
  };
  Object.defineProperty(re, "__esModule", { value: true });
  re.stringify = re.parse = void 0;
  var Du = $a();
  Object.defineProperty(re, "parse", { enumerable: true, get: n(function() {
    return Du.parse;
  }, "get") });
  var Nu = Ya();
  Object.defineProperty(re, "stringify", { enumerable: true, get: n(function() {
    return Nu.stringify;
  }, "get") });
  Fu(Tt(), re);
});
var Nn = B((Ab, Bu) => {
  Bu.exports = {
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    AMP: "&",
    andand: "⩕",
    And: "⩓",
    and: "∧",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angmsd: "∡",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    apacir: "⩯",
    ap: "≈",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    barwed: "⌅",
    Barwed: "⌆",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    Because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxdl: "┐",
    boxdL: "╕",
    boxDl: "╖",
    boxDL: "╗",
    boxdr: "┌",
    boxdR: "╒",
    boxDr: "╓",
    boxDR: "╔",
    boxh: "─",
    boxH: "═",
    boxhd: "┬",
    boxHd: "╤",
    boxhD: "╥",
    boxHD: "╦",
    boxhu: "┴",
    boxHu: "╧",
    boxhU: "╨",
    boxHU: "╩",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxul: "┘",
    boxuL: "╛",
    boxUl: "╜",
    boxUL: "╝",
    boxur: "└",
    boxuR: "╘",
    boxUr: "╙",
    boxUR: "╚",
    boxv: "│",
    boxV: "║",
    boxvh: "┼",
    boxvH: "╪",
    boxVh: "╫",
    boxVH: "╬",
    boxvl: "┤",
    boxvL: "╡",
    boxVl: "╢",
    boxVL: "╣",
    boxvr: "├",
    boxvR: "╞",
    boxVr: "╟",
    boxVR: "╠",
    bprime: "‵",
    breve: "˘",
    Breve: "˘",
    brvbar: "¦",
    bscr: "𝒷",
    Bscr: "ℬ",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsolb: "⧅",
    bsol: "\\",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    cap: "∩",
    Cap: "⋒",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    centerdot: "·",
    CenterDot: "·",
    cfr: "𝔠",
    Cfr: "ℭ",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cir: "○",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    Colon: "∷",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    conint: "∮",
    Conint: "∯",
    ContourIntegral: "∮",
    copf: "𝕔",
    Copf: "ℂ",
    coprod: "∐",
    Coproduct: "∐",
    copy: "©",
    COPY: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    cross: "✗",
    Cross: "⨯",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cupbrcap: "⩈",
    cupcap: "⩆",
    CupCap: "≍",
    cup: "∪",
    Cup: "⋓",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dagger: "†",
    Dagger: "‡",
    daleth: "ℸ",
    darr: "↓",
    Darr: "↡",
    dArr: "⇓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    ddagger: "‡",
    ddarr: "⇊",
    DD: "ⅅ",
    dd: "ⅆ",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    diamond: "⋄",
    Diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrowBar: "⤓",
    downarrow: "↓",
    DownArrow: "↓",
    Downarrow: "⇓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVectorBar: "⥖",
    DownLeftVector: "↽",
    DownRightTeeVector: "⥟",
    DownRightVectorBar: "⥗",
    DownRightVector: "⇁",
    DownTeeArrow: "↧",
    DownTee: "⊤",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    Ecirc: "Ê",
    ecirc: "ê",
    ecir: "≖",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    edot: "ė",
    eDot: "≑",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    escr: "ℯ",
    Escr: "ℰ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    ExponentialE: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    forall: "∀",
    ForAll: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "𝒻",
    Fscr: "ℱ",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    ge: "≥",
    gE: "≧",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    gescc: "⪩",
    ges: "⩾",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    gg: "≫",
    Gg: "⋙",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gla: "⪥",
    gl: "≷",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gnE: "≩",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gt: ">",
    GT: ">",
    Gt: "≫",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    harrcir: "⥈",
    harr: "↔",
    hArr: "⇔",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "𝔥",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "𝕙",
    Hopf: "ℍ",
    horbar: "―",
    HorizontalLine: "─",
    hscr: "𝒽",
    Hscr: "ℋ",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    ifr: "𝔦",
    Ifr: "ℑ",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    Im: "ℑ",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    incare: "℅",
    in: "∈",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    intcal: "⊺",
    int: "∫",
    Int: "∬",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    iscr: "𝒾",
    Iscr: "ℐ",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    lang: "⟨",
    Lang: "⟪",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    larrb: "⇤",
    larrbfs: "⤟",
    larr: "←",
    Larr: "↞",
    lArr: "⇐",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    latail: "⤙",
    lAtail: "⤛",
    lat: "⪫",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lBarr: "⤎",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    lE: "≦",
    LeftAngleBracket: "⟨",
    LeftArrowBar: "⇤",
    leftarrow: "←",
    LeftArrow: "←",
    Leftarrow: "⇐",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVectorBar: "⥙",
    LeftDownVector: "⇃",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTeeArrow: "↤",
    LeftTee: "⊣",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangleBar: "⧏",
    LeftTriangle: "⊲",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVectorBar: "⥘",
    LeftUpVector: "↿",
    LeftVectorBar: "⥒",
    LeftVector: "↼",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    lescc: "⪨",
    les: "⩽",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    llarr: "⇇",
    ll: "≪",
    Ll: "⋘",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoustache: "⎰",
    lmoust: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lnE: "≨",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftrightarrow: "⟷",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    Lscr: "ℒ",
    lsh: "↰",
    Lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    lt: "<",
    LT: "<",
    Lt: "≪",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midast: "*",
    midcir: "⫰",
    mid: "∣",
    middot: "·",
    minusb: "⊟",
    minus: "−",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    mscr: "𝓂",
    Mscr: "ℳ",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natural: "♮",
    naturals: "ℕ",
    natur: "♮",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    nearhk: "⤤",
    nearr: "↗",
    neArr: "⇗",
    nearrow: "↗",
    ne: "≠",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nharr: "↮",
    nhArr: "⇎",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlarr: "↚",
    nlArr: "⇍",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nleftarrow: "↚",
    nLeftarrow: "⇍",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    nopf: "𝕟",
    Nopf: "ℕ",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangle: "⋫",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    nparallel: "∦",
    npar: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    nprec: "⊀",
    npreceq: "⪯̸",
    npre: "⪯̸",
    nrarrc: "⤳̸",
    nrarr: "↛",
    nrArr: "⇏",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nRightarrow: "⇏",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvDash: "⊭",
    nVdash: "⊮",
    nVDash: "⊯",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwarr: "↖",
    nwArr: "⇖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    Ocirc: "Ô",
    ocirc: "ô",
    ocir: "⊚",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    orarr: "↻",
    Or: "⩔",
    or: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    otimesas: "⨶",
    Otimes: "⨷",
    otimes: "⊗",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    para: "¶",
    parallel: "∥",
    par: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plus: "+",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    popf: "𝕡",
    Popf: "ℙ",
    pound: "£",
    prap: "⪷",
    Pr: "⪻",
    pr: "≺",
    prcue: "≼",
    precapprox: "⪷",
    prec: "≺",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    pre: "⪯",
    prE: "⪳",
    precsim: "≾",
    prime: "′",
    Prime: "″",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportional: "∝",
    Proportion: "∷",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    qopf: "𝕢",
    Qopf: "ℚ",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    QUOT: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    Rang: "⟫",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarr: "→",
    Rarr: "↠",
    rArr: "⇒",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    rAtail: "⤜",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rBarr: "⤏",
    RBarr: "⤐",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    Re: "ℜ",
    rect: "▭",
    reg: "®",
    REG: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "𝔯",
    Rfr: "ℜ",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrowBar: "⇥",
    rightarrow: "→",
    RightArrow: "→",
    Rightarrow: "⇒",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVectorBar: "⥕",
    RightDownVector: "⇂",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTeeArrow: "↦",
    RightTee: "⊢",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangleBar: "⧐",
    RightTriangle: "⊳",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVectorBar: "⥔",
    RightUpVector: "↾",
    RightVectorBar: "⥓",
    RightVector: "⇀",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoustache: "⎱",
    rmoust: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "𝕣",
    Ropf: "ℝ",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    rscr: "𝓇",
    Rscr: "ℛ",
    rsh: "↱",
    Rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    Sc: "⪼",
    sc: "≻",
    sccue: "≽",
    sce: "⪰",
    scE: "⪴",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdotb: "⊡",
    sdot: "⋅",
    sdote: "⩦",
    searhk: "⤥",
    searr: "↘",
    seArr: "⇘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    solbar: "⌿",
    solb: "⧄",
    sol: "/",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    square: "□",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squ: "□",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    sub: "⊂",
    Sub: "⋐",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    Subset: "⋐",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succapprox: "⪸",
    succ: "≻",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    sum: "∑",
    Sum: "∑",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    sup: "⊃",
    Sup: "⋑",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    Supset: "⋑",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swarr: "↙",
    swArr: "⇙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    therefore: "∴",
    Therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    ThinSpace: " ",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    tilde: "˜",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    timesbar: "⨱",
    timesb: "⊠",
    times: "×",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    topbot: "⌶",
    topcir: "⫱",
    top: "⊤",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    TRADE: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    uarr: "↑",
    Uarr: "↟",
    uArr: "⇑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrowBar: "⤒",
    uparrow: "↑",
    UpArrow: "↑",
    Uparrow: "⇑",
    UpArrowDownArrow: "⇅",
    updownarrow: "↕",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    upsi: "υ",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTeeArrow: "↥",
    UpTee: "⊥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    vArr: "⇕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vBar: "⫨",
    Vbar: "⫫",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    vdash: "⊢",
    vDash: "⊨",
    Vdash: "⊩",
    VDash: "⊫",
    Vdashl: "⫦",
    veebar: "⊻",
    vee: "∨",
    Vee: "⋁",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    Verbar: "‖",
    vert: "|",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    Wedge: "⋀",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xharr: "⟷",
    xhArr: "⟺",
    Xi: "Ξ",
    xi: "ξ",
    xlarr: "⟵",
    xlArr: "⟸",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrarr: "⟶",
    xrArr: "⟹",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    yuml: "ÿ",
    Yuml: "Ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    zfr: "𝔷",
    Zfr: "ℨ",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    Zopf: "ℤ",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  };
});
var ri = B((_b, Gu) => {
  Gu.exports = {
    Aacute: "Á",
    aacute: "á",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    AElig: "Æ",
    aelig: "æ",
    Agrave: "À",
    agrave: "à",
    amp: "&",
    AMP: "&",
    Aring: "Å",
    aring: "å",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    brvbar: "¦",
    Ccedil: "Ç",
    ccedil: "ç",
    cedil: "¸",
    cent: "¢",
    copy: "©",
    COPY: "©",
    curren: "¤",
    deg: "°",
    divide: "÷",
    Eacute: "É",
    eacute: "é",
    Ecirc: "Ê",
    ecirc: "ê",
    Egrave: "È",
    egrave: "è",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    frac12: "½",
    frac14: "¼",
    frac34: "¾",
    gt: ">",
    GT: ">",
    Iacute: "Í",
    iacute: "í",
    Icirc: "Î",
    icirc: "î",
    iexcl: "¡",
    Igrave: "Ì",
    igrave: "ì",
    iquest: "¿",
    Iuml: "Ï",
    iuml: "ï",
    laquo: "«",
    lt: "<",
    LT: "<",
    macr: "¯",
    micro: "µ",
    middot: "·",
    nbsp: " ",
    not: "¬",
    Ntilde: "Ñ",
    ntilde: "ñ",
    Oacute: "Ó",
    oacute: "ó",
    Ocirc: "Ô",
    ocirc: "ô",
    Ograve: "Ò",
    ograve: "ò",
    ordf: "ª",
    ordm: "º",
    Oslash: "Ø",
    oslash: "ø",
    Otilde: "Õ",
    otilde: "õ",
    Ouml: "Ö",
    ouml: "ö",
    para: "¶",
    plusmn: "±",
    pound: "£",
    quot: '"',
    QUOT: '"',
    raquo: "»",
    reg: "®",
    REG: "®",
    sect: "§",
    shy: "­",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    szlig: "ß",
    THORN: "Þ",
    thorn: "þ",
    times: "×",
    Uacute: "Ú",
    uacute: "ú",
    Ucirc: "Û",
    ucirc: "û",
    Ugrave: "Ù",
    ugrave: "ù",
    uml: "¨",
    Uuml: "Ü",
    uuml: "ü",
    Yacute: "Ý",
    yacute: "ý",
    yen: "¥",
    yuml: "ÿ"
  };
});
var kn = B((wb, Vu) => {
  Vu.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
});
var ti = B((vb, Hu) => {
  Hu.exports = {
    "0": 65533,
    "128": 8364,
    "130": 8218,
    "131": 402,
    "132": 8222,
    "133": 8230,
    "134": 8224,
    "135": 8225,
    "136": 710,
    "137": 8240,
    "138": 352,
    "139": 8249,
    "140": 338,
    "142": 381,
    "145": 8216,
    "146": 8217,
    "147": 8220,
    "148": 8221,
    "149": 8226,
    "150": 8211,
    "151": 8212,
    "152": 732,
    "153": 8482,
    "154": 353,
    "155": 8250,
    "156": 339,
    "158": 382,
    "159": 376
  };
});
var ni = B((jr) => {
  "use strict";
  var zu = jr && jr.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(jr, "__esModule", { value: true });
  var oi = zu(ti()), Wu = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.fromCodePoint || function(r) {
      var e = "";
      return r > 65535 && (r -= 65536, e += String.fromCharCode(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), e += String.fromCharCode(r), e;
    }
  );
  function $u(r) {
    return r >= 55296 && r <= 57343 || r > 1114111 ? "�" : (r in oi.default && (r = oi.default[r]), Wu(r));
  }
  n($u, "decodeCodePoint");
  jr.default = $u;
});
var jn = B((ae) => {
  "use strict";
  var _t = ae && ae.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(ae, "__esModule", { value: true });
  ae.decodeHTML = ae.decodeHTMLStrict = ae.decodeXML = void 0;
  var Ln = _t(Nn()), Yu = _t(ri()), Ku = _t(kn()), si = _t(ni()), Xu = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
  ae.decodeXML = ii(Ku.default);
  ae.decodeHTMLStrict = ii(Ln.default);
  function ii(r) {
    var e = li(r);
    return function(t) {
      return String(t).replace(Xu, e);
    };
  }
  n(ii, "getStrictDecoder");
  var ai = n(function(r, e) {
    return r < e ? 1 : -1;
  }, "sorter");
  ae.decodeHTML = function() {
    for (var r = Object.keys(Yu.default).sort(ai), e = Object.keys(Ln.default).sort(ai), t = 0, o = 0; t < e.length; t++)
      r[o] === e[t] ? (e[t] += ";?", o++) : e[t] += ";";
    var s = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), a = li(Ln.default);
    function l(c) {
      return c.substr(-1) !== ";" && (c += ";"), a(c);
    }
    return n(l, "replacer"), function(c) {
      return String(c).replace(s, l);
    };
  }();
  function li(r) {
    return n(function(t) {
      if (t.charAt(1) === "#") {
        var o = t.charAt(2);
        return o === "X" || o === "x" ? si.default(parseInt(t.substr(3), 16)) : si.default(parseInt(t.substr(2), 10));
      }
      return r[t.slice(1, -1)] || t;
    }, "replace");
  }
  n(li, "getReplacer");
});
var qn = B((X) => {
  "use strict";
  var ci = X && X.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(X, "__esModule", { value: true });
  X.escapeUTF8 = X.escape = X.encodeNonAsciiHTML = X.encodeHTML = X.encodeXML = void 0;
  var Ju = ci(kn()), pi = ui(Ju.default), di = fi(pi);
  X.encodeXML = hi(pi);
  var Qu = ci(Nn()), Mn = ui(Qu.default), Zu = fi(Mn);
  X.encodeHTML = rf(Mn, Zu);
  X.encodeNonAsciiHTML = hi(Mn);
  function ui(r) {
    return Object.keys(r).sort().reduce(function(e, t) {
      return e[r[t]] = "&" + t + ";", e;
    }, {});
  }
  n(ui, "getInverseObj");
  function fi(r) {
    for (var e = [], t = [], o = 0, s = Object.keys(r); o < s.length; o++) {
      var a = s[o];
      a.length === 1 ? e.push("\\" + a) : t.push(a);
    }
    e.sort();
    for (var l = 0; l < e.length - 1; l++) {
      for (var c = l; c < e.length - 1 && e[c].charCodeAt(1) + 1 === e[c + 1].charCodeAt(1); )
        c += 1;
      var i = 1 + c - l;
      i < 3 || e.splice(l, i, e[l] + "-" + e[c]);
    }
    return t.unshift("[" + e.join("") + "]"), new RegExp(t.join("|"), "g");
  }
  n(fi, "getInverseReplacer");
  var yi = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, ef = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      function(r) {
        return r.codePointAt(0);
      }
    ) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(r) {
        return (r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536;
      }
    )
  );
  function wt(r) {
    return "&#x" + (r.length > 1 ? ef(r) : r.charCodeAt(0)).toString(16).toUpperCase() + ";";
  }
  n(wt, "singleCharReplacer");
  function rf(r, e) {
    return function(t) {
      return t.replace(e, function(o) {
        return r[o];
      }).replace(yi, wt);
    };
  }
  n(rf, "getInverse");
  var mi = new RegExp(di.source + "|" + yi.source, "g");
  function tf(r) {
    return r.replace(mi, wt);
  }
  n(tf, "escape");
  X.escape = tf;
  function of(r) {
    return r.replace(di, wt);
  }
  n(of, "escapeUTF8");
  X.escapeUTF8 = of;
  function hi(r) {
    return function(e) {
      return e.replace(mi, function(t) {
        return r[t] || wt(t);
      });
    };
  }
  n(hi, "getASCIIEncoder");
});
var Si = B((C) => {
  "use strict";
  Object.defineProperty(C, "__esModule", { value: true });
  C.decodeXMLStrict = C.decodeHTML5Strict = C.decodeHTML4Strict = C.decodeHTML5 = C.decodeHTML4 = C.decodeHTMLStrict = C.decodeHTML = C.decodeXML = C.encodeHTML5 = C.encodeHTML4 = C.escapeUTF8 = C.escape = C.encodeNonAsciiHTML = C.encodeHTML = C.encodeXML = C.encode = C.decodeStrict = C.decode = void 0;
  var vt = jn(), gi = qn();
  function nf(r, e) {
    return (!e || e <= 0 ? vt.decodeXML : vt.decodeHTML)(r);
  }
  n(nf, "decode");
  C.decode = nf;
  function sf(r, e) {
    return (!e || e <= 0 ? vt.decodeXML : vt.decodeHTMLStrict)(r);
  }
  n(sf, "decodeStrict");
  C.decodeStrict = sf;
  function af(r, e) {
    return (!e || e <= 0 ? gi.encodeXML : gi.encodeHTML)(r);
  }
  n(af, "encode");
  C.encode = af;
  var Me = qn();
  Object.defineProperty(C, "encodeXML", { enumerable: true, get: n(function() {
    return Me.encodeXML;
  }, "get") });
  Object.defineProperty(C, "encodeHTML", { enumerable: true, get: n(function() {
    return Me.encodeHTML;
  }, "get") });
  Object.defineProperty(C, "encodeNonAsciiHTML", { enumerable: true, get: n(function() {
    return Me.encodeNonAsciiHTML;
  }, "get") });
  Object.defineProperty(C, "escape", { enumerable: true, get: n(function() {
    return Me.escape;
  }, "get") });
  Object.defineProperty(C, "escapeUTF8", { enumerable: true, get: n(function() {
    return Me.escapeUTF8;
  }, "get") });
  Object.defineProperty(C, "encodeHTML4", { enumerable: true, get: n(function() {
    return Me.encodeHTML;
  }, "get") });
  Object.defineProperty(C, "encodeHTML5", { enumerable: true, get: n(function() {
    return Me.encodeHTML;
  }, "get") });
  var Re = jn();
  Object.defineProperty(C, "decodeXML", { enumerable: true, get: n(function() {
    return Re.decodeXML;
  }, "get") });
  Object.defineProperty(C, "decodeHTML", { enumerable: true, get: n(function() {
    return Re.decodeHTML;
  }, "get") });
  Object.defineProperty(C, "decodeHTMLStrict", { enumerable: true, get: n(function() {
    return Re.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(C, "decodeHTML4", { enumerable: true, get: n(function() {
    return Re.decodeHTML;
  }, "get") });
  Object.defineProperty(C, "decodeHTML5", { enumerable: true, get: n(function() {
    return Re.decodeHTML;
  }, "get") });
  Object.defineProperty(C, "decodeHTML4Strict", { enumerable: true, get: n(function() {
    return Re.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(C, "decodeHTML5Strict", { enumerable: true, get: n(function() {
    return Re.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(C, "decodeXMLStrict", { enumerable: true, get: n(function() {
    return Re.decodeXML;
  }, "get") });
});
var Ci = B((Lb, Pi) => {
  "use strict";
  function lf(r, e) {
    if (!(r instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  n(lf, "_classCallCheck");
  function bi(r, e) {
    for (var t = 0; t < e.length; t++) {
      var o = e[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(r, o.key, o);
    }
  }
  n(bi, "_defineProperties");
  function cf(r, e, t) {
    return e && bi(r.prototype, e), t && bi(r, t), r;
  }
  n(cf, "_createClass");
  function _i(r, e) {
    var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = pf(r)) || e && r && typeof r.length == "number") {
        t && (r = t);
        var o = 0, s = n(function() {
        }, "F");
        return { s, n: n(function() {
          return o >= r.length ? { done: true } : { done: false, value: r[o++] };
        }, "n"), e: n(function(p) {
          throw p;
        }, "e"), f: s };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var a = true, l = false, c;
    return { s: n(function() {
      t = t.call(r);
    }, "s"), n: n(function() {
      var p = t.next();
      return a = p.done, p;
    }, "n"), e: n(function(p) {
      l = true, c = p;
    }, "e"), f: n(function() {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (l) throw c;
      }
    }, "f") };
  }
  n(_i, "_createForOfIteratorHelper");
  function pf(r, e) {
    if (r) {
      if (typeof r == "string") return Ti(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ti(r, e);
    }
  }
  n(pf, "_unsupportedIterableToArray");
  function Ti(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, o = new Array(e); t < e; t++)
      o[t] = r[t];
    return o;
  }
  n(Ti, "_arrayLikeToArray");
  var df = Si(), Ei = {
    fg: "#FFF",
    bg: "#000",
    newline: false,
    escapeXML: false,
    stream: false,
    colors: uf()
  };
  function uf() {
    var r = {
      0: "#000",
      1: "#A00",
      2: "#0A0",
      3: "#A50",
      4: "#00A",
      5: "#A0A",
      6: "#0AA",
      7: "#AAA",
      8: "#555",
      9: "#F55",
      10: "#5F5",
      11: "#FF5",
      12: "#55F",
      13: "#F5F",
      14: "#5FF",
      15: "#FFF"
    };
    return Pt(0, 5).forEach(function(e) {
      Pt(0, 5).forEach(function(t) {
        Pt(0, 5).forEach(function(o) {
          return ff(e, t, o, r);
        });
      });
    }), Pt(0, 23).forEach(function(e) {
      var t = e + 232, o = wi(e * 10 + 8);
      r[t] = "#" + o + o + o;
    }), r;
  }
  n(uf, "getDefaultColors");
  function ff(r, e, t, o) {
    var s = 16 + r * 36 + e * 6 + t, a = r > 0 ? r * 40 + 55 : 0, l = e > 0 ? e * 40 + 55 : 0, c = t > 0 ? t * 40 + 55 : 0;
    o[s] = yf([a, l, c]);
  }
  n(ff, "setStyleColor");
  function wi(r) {
    for (var e = r.toString(16); e.length < 2; )
      e = "0" + e;
    return e;
  }
  n(wi, "toHexString");
  function yf(r) {
    var e = [], t = _i(r), o;
    try {
      for (t.s(); !(o = t.n()).done; ) {
        var s = o.value;
        e.push(wi(s));
      }
    } catch (a) {
      t.e(a);
    } finally {
      t.f();
    }
    return "#" + e.join("");
  }
  n(yf, "toColorHexString");
  function Ri(r, e, t, o) {
    var s;
    return e === "text" ? s = Sf(t, o) : e === "display" ? s = hf(r, t, o) : e === "xterm256Foreground" ? s = Ot(r, o.colors[t]) : e === "xterm256Background" ? s = It(r, o.colors[t]) : e === "rgb" && (s = mf(r, t)), s;
  }
  n(Ri, "generateOutput");
  function mf(r, e) {
    e = e.substring(2).slice(0, -1);
    var t = +e.substr(0, 2), o = e.substring(5).split(";"), s = o.map(function(a) {
      return ("0" + Number(a).toString(16)).substr(-2);
    }).join("");
    return Ct(r, (t === 38 ? "color:#" : "background-color:#") + s);
  }
  n(mf, "handleRgb");
  function hf(r, e, t) {
    e = parseInt(e, 10);
    var o = {
      "-1": n(function() {
        return "<br/>";
      }, "_"),
      0: n(function() {
        return r.length && vi(r);
      }, "_"),
      1: n(function() {
        return xe(r, "b");
      }, "_"),
      3: n(function() {
        return xe(r, "i");
      }, "_"),
      4: n(function() {
        return xe(r, "u");
      }, "_"),
      8: n(function() {
        return Ct(r, "display:none");
      }, "_"),
      9: n(function() {
        return xe(r, "strike");
      }, "_"),
      22: n(function() {
        return Ct(r, "font-weight:normal;text-decoration:none;font-style:normal");
      }, "_"),
      23: n(function() {
        return Ai(r, "i");
      }, "_"),
      24: n(function() {
        return Ai(r, "u");
      }, "_"),
      39: n(function() {
        return Ot(r, t.fg);
      }, "_"),
      49: n(function() {
        return It(r, t.bg);
      }, "_"),
      53: n(function() {
        return Ct(r, "text-decoration:overline");
      }, "_")
    }, s;
    return o[e] ? s = o[e]() : 4 < e && e < 7 ? s = xe(r, "blink") : 29 < e && e < 38 ? s = Ot(r, t.colors[e - 30]) : 39 < e && e < 48 ? s = It(r, t.colors[e - 40]) : 89 < e && e < 98 ? s = Ot(r, t.colors[8 + (e - 90)]) : 99 < e && e < 108 && (s = It(r, t.colors[8 + (e - 100)])), s;
  }
  n(hf, "handleDisplay");
  function vi(r) {
    var e = r.slice(0);
    return r.length = 0, e.reverse().map(function(t) {
      return "</" + t + ">";
    }).join("");
  }
  n(vi, "resetStyles");
  function Pt(r, e) {
    for (var t = [], o = r; o <= e; o++)
      t.push(o);
    return t;
  }
  n(Pt, "range");
  function gf(r) {
    return function(e) {
      return (r === null || e.category !== r) && r !== "all";
    };
  }
  n(gf, "notCategory");
  function xi(r) {
    r = parseInt(r, 10);
    var e = null;
    return r === 0 ? e = "all" : r === 1 ? e = "bold" : 2 < r && r < 5 ? e = "underline" : 4 < r && r < 7 ? e = "blink" : r === 8 ? e = "hide" : r === 9 ? e = "strike" : 29 < r && r < 38 || r === 39 || 89 < r && r < 98 ? e = "foreground-color" : (39 < r && r < 48 || r === 49 || 99 < r && r < 108) && (e = "background-color"), e;
  }
  n(xi, "categoryForCode");
  function Sf(r, e) {
    return e.escapeXML ? df.encodeXML(r) : r;
  }
  n(Sf, "pushText");
  function xe(r, e, t) {
    return t || (t = ""), r.push(e), "<".concat(e).concat(t ? ' style="'.concat(t, '"') : "", ">");
  }
  n(xe, "pushTag");
  function Ct(r, e) {
    return xe(r, "span", e);
  }
  n(Ct, "pushStyle");
  function Ot(r, e) {
    return xe(r, "span", "color:" + e);
  }
  n(Ot, "pushForegroundColor");
  function It(r, e) {
    return xe(r, "span", "background-color:" + e);
  }
  n(It, "pushBackgroundColor");
  function Ai(r, e) {
    var t;
    if (r.slice(-1)[0] === e && (t = r.pop()), t)
      return "</" + e + ">";
  }
  n(Ai, "closeTag");
  function bf(r, e, t) {
    var o = false, s = 3;
    function a() {
      return "";
    }
    n(a, "remove");
    function l(_, w) {
      return t("xterm256Foreground", w), "";
    }
    n(l, "removeXterm256Foreground");
    function c(_, w) {
      return t("xterm256Background", w), "";
    }
    n(c, "removeXterm256Background");
    function i(_) {
      return e.newline ? t("display", -1) : t("text", _), "";
    }
    n(i, "newline");
    function p(_, w) {
      o = true, w.trim().length === 0 && (w = "0"), w = w.trimRight(";").split(";");
      var I = _i(w), M;
      try {
        for (I.s(); !(M = I.n()).done; ) {
          var U = M.value;
          t("display", U);
        }
      } catch (z) {
        I.e(z);
      } finally {
        I.f();
      }
      return "";
    }
    n(p, "ansiMess");
    function u(_) {
      return t("text", _), "";
    }
    n(u, "realText");
    function d(_) {
      return t("rgb", _), "";
    }
    n(d, "rgb");
    var h = [{
      pattern: /^\x08+/,
      sub: a
    }, {
      pattern: /^\x1b\[[012]?K/,
      sub: a
    }, {
      pattern: /^\x1b\[\(B/,
      sub: a
    }, {
      pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
      sub: d
    }, {
      pattern: /^\x1b\[38;5;(\d+)m/,
      sub: l
    }, {
      pattern: /^\x1b\[48;5;(\d+)m/,
      sub: c
    }, {
      pattern: /^\n/,
      sub: i
    }, {
      pattern: /^\r+\n/,
      sub: i
    }, {
      pattern: /^\r/,
      sub: i
    }, {
      pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
      sub: p
    }, {
      // CSI n J
      // ED - Erase in Display Clears part of the screen.
      // If n is 0 (or missing), clear from cursor to end of screen.
      // If n is 1, clear from cursor to beginning of the screen.
      // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
      // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
      //   (this feature was added for xterm and is supported by other terminal applications).
      pattern: /^\x1b\[\d?J/,
      sub: a
    }, {
      // CSI n ; m f
      // HVP - Horizontal Vertical Position Same as CUP
      pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
      sub: a
    }, {
      // catch-all for CSI sequences?
      pattern: /^\x1b\[?[\d;]{0,3}/,
      sub: a
    }, {
      /**
       * extracts real text - not containing:
       * - `\x1b' - ESC - escape (Ascii 27)
       * - '\x08' - BS - backspace (Ascii 8)
       * - `\n` - Newline - linefeed (LF) (ascii 10)
       * - `\r` - Windows Carriage Return (CR)
       */
      pattern: /^(([^\x1b\x08\r\n])+)/,
      sub: u
    }];
    function S(_, w) {
      w > s && o || (o = false, r = r.replace(_.pattern, _.sub));
    }
    n(S, "process");
    var m = [], T = r, y = T.length;
    e: for (; y > 0; ) {
      for (var x = 0, A = 0, g = h.length; A < g; x = ++A) {
        var b = h[x];
        if (S(b, x), r.length !== y) {
          y = r.length;
          continue e;
        }
      }
      if (r.length === y)
        break;
      m.push(0), y = r.length;
    }
    return m;
  }
  n(bf, "tokenize");
  function Tf(r, e, t) {
    return e !== "text" && (r = r.filter(gf(xi(t))), r.push({
      token: e,
      data: t,
      category: xi(t)
    })), r;
  }
  n(Tf, "updateStickyStack");
  var Ef = function() {
    function r(e) {
      lf(this, r), e = e || {}, e.colors && (e.colors = Object.assign({}, Ei.colors, e.colors)), this.options = Object.assign({}, Ei, e), this.stack = [], this.stickyStack = [];
    }
    return n(r, "Filter"), cf(r, [{
      key: "toHtml",
      value: n(function(t) {
        var o = this;
        t = typeof t == "string" ? [t] : t;
        var s = this.stack, a = this.options, l = [];
        return this.stickyStack.forEach(function(c) {
          var i = Ri(s, c.token, c.data, a);
          i && l.push(i);
        }), bf(t.join(""), a, function(c, i) {
          var p = Ri(s, c, i, a);
          p && l.push(p), a.stream && (o.stickyStack = Tf(o.stickyStack, c, i));
        }), s.length && l.push(vi(s)), l.join("");
      }, "toHtml")
    }]), r;
  }();
  Pi.exports = Ef;
});
var Mi = B((zn, Wn) => {
  (function(r, e) {
    typeof zn == "object" && typeof Wn < "u" ? Wn.exports = e() : typeof define == "function" && define.amd ? define(e) : (r = typeof globalThis < "u" ? globalThis : r || self).BrowserDetector = e();
  })(zn, function() {
    "use strict";
    function r(l, c) {
      for (var i = 0; i < c.length; i++) {
        var p = c[i];
        p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(l, (u = p.key, d = void 0, typeof (d = function(h, S) {
          if (typeof h != "object" || h === null) return h;
          var m = h[Symbol.toPrimitive];
          if (m !== void 0) {
            var T = m.call(h, S || "default");
            if (typeof T != "object") return T;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (S === "string" ? String : Number)(h);
        }(u, "string")) == "symbol" ? d : String(d)), p);
      }
      var u, d;
    }
    n(r, "e");
    var e = { chrome: "Google Chrome", brave: "Brave", crios: "Google Chrome", edge: "Microsoft Edge", edg: "Microsoft Edge", edgios: "Microsoft Edge", fennec: "Mozilla Firefox", jsdom: "JsDOM", mozilla: "Mozilla Firefox", fxios: "Mozilla Firefox", msie: "Microsoft Internet Explorer", opera: "Opera", opios: "Opera", opr: "Opera", opt: "Opera", rv: "Microsoft Internet Explorer", safari: "Safari", samsungbrowser: "Samsung Browser", electron: "Electron" }, t = {
      android: "Android",
      androidTablet: "Android Tablet",
      cros: "Chrome OS",
      fennec: "Android Tablet",
      ipad: "IPad",
      iphone: "IPhone",
      jsdom: "JsDOM",
      linux: "Linux",
      mac: "Macintosh",
      tablet: "Android Tablet",
      win: "Windows",
      "windows phone": "Windows Phone",
      xbox: "Microsoft Xbox"
    }, o = n(function(l) {
      var c = new RegExp("^-?\\d+(?:.\\d{0,".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, "})?")), i = Number(
        l
      ).toString().match(c);
      return i ? i[0] : null;
    }, "n"), s = n(function() {
      return typeof window < "u" ? window.navigator : null;
    }, "i"), a = function() {
      function l(u) {
        var d;
        (function(h, S) {
          if (!(h instanceof S)) throw new TypeError("Cannot call a class as a function");
        })(this, l), this.userAgent = u || ((d = s()) === null || d === void 0 ? void 0 : d.userAgent) || null;
      }
      n(l, "t");
      var c, i, p;
      return c = l, i = [{ key: "parseUserAgent", value: n(function(u) {
        var d, h, S, m = {}, T = u || this.userAgent || "", y = T.toLowerCase().replace(/\s\s+/g, " "), x = /(edge)\/([\w.]+)/.exec(y) || /(edg)[/]([\w.]+)/.exec(y) || /(opr)[/]([\w.]+)/.exec(y) || /(opt)[/]([\w.]+)/.exec(y) || /(fxios)[/]([\w.]+)/.exec(y) || /(edgios)[/]([\w.]+)/.exec(y) || /(jsdom)[/]([\w.]+)/.exec(y) || /(samsungbrowser)[/]([\w.]+)/.exec(y) || /(electron)[/]([\w.]+)/.exec(y) || /(chrome)[/]([\w.]+)/.exec(
          y
        ) || /(crios)[/]([\w.]+)/.exec(y) || /(opios)[/]([\w.]+)/.exec(y) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(
          y
        ) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(y) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(
          y
        ) || /(webkit)[/]([\w.]+)/.exec(y) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(y) || /(msie) ([\w.]+)/.exec(y) || /(fennec)[/]([\w.]+)/.exec(y) || y.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(y) || y.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(y) || [], A = /(ipad)/.exec(y) || /(ipod)/.exec(y) || /(iphone)/.exec(y) || /(jsdom)/.exec(y) || /(windows phone)/.exec(y) || /(xbox)/.exec(y) || /(win)/.exec(y) || /(tablet)/.exec(y) || /(android)/.test(y) && /(mobile)/.test(y) === false && ["androidTablet"] || /(android)/.exec(y) || /(mac)/.exec(y) || /(linux)/.exec(y) || /(cros)/.exec(y) || [], g = x[5] || x[3] || x[1] || null, b = A[0] || null, _ = x[4] || x[2] || null, w = s();
        g === "chrome" && typeof (w == null || (d = w.brave) === null || d === void 0 ? void 0 : d.isBrave) == "function" && (g = "brave"), g && (m[g] = true), b && (m[b] = true);
        var I = !!(m.tablet || m.android || m.androidTablet), M = !!(m.ipad || m.tablet || m.androidTablet), U = !!(m.android || m.androidTablet || m.tablet || m.ipad || m.ipod || m.iphone || m["windows phone"]), z = !!(m.cros || m.mac || m.linux || m.win), te = !!(m.brave || m.chrome || m.crios || m.opr || m.safari || m.edg || m.electron), v = !!(m.msie || m.rv);
        return {
          name: (h = e[g]) !== null && h !== void 0 ? h : null,
          platform: (S = t[b]) !== null && S !== void 0 ? S : null,
          userAgent: T,
          version: _,
          shortVersion: _ ? o(parseFloat(_), 2) : null,
          isAndroid: I,
          isTablet: M,
          isMobile: U,
          isDesktop: z,
          isWebkit: te,
          isIE: v
        };
      }, "value") }, { key: "getBrowserInfo", value: n(function() {
        var u = this.parseUserAgent();
        return { name: u.name, platform: u.platform, userAgent: u.userAgent, version: u.version, shortVersion: u.shortVersion };
      }, "value") }], p = [{ key: "VERSION", get: n(function() {
        return "3.4.0";
      }, "get") }], i && r(c.prototype, i), p && r(c, p), Object.defineProperty(c, "prototype", { writable: false }), l;
    }();
    return a;
  });
});
var Dt = {};
Ae(Dt, {
  global: () => R
});
var R = (() => {
  let r;
  return typeof window < "u" ? r = window : typeof globalThis < "u" ? r = globalThis : typeof global < "u" ? r = global : typeof self < "u" ? r = self : r = {}, r;
})();
var fe = {};
Ae(fe, {
  ARGTYPES_INFO_REQUEST: () => ro,
  ARGTYPES_INFO_RESPONSE: () => Xr,
  CHANNEL_CREATED: () => Yi,
  CHANNEL_WS_DISCONNECT: () => kt,
  CONFIG_ERROR: () => Lt,
  CREATE_NEW_STORYFILE_REQUEST: () => Ki,
  CREATE_NEW_STORYFILE_RESPONSE: () => Xi,
  CURRENT_STORY_WAS_SET: () => $r,
  DOCS_PREPARED: () => jt,
  DOCS_RENDERED: () => sr,
  FILE_COMPONENT_SEARCH_REQUEST: () => Ji,
  FILE_COMPONENT_SEARCH_RESPONSE: () => Qi,
  FORCE_REMOUNT: () => Mt,
  FORCE_RE_RENDER: () => ar,
  GLOBALS_UPDATED: () => _e,
  NAVIGATE_URL: () => Zi,
  PLAY_FUNCTION_THREW_EXCEPTION: () => qt,
  PRELOAD_ENTRIES: () => Bt,
  PREVIEW_BUILDER_PROGRESS: () => el,
  PREVIEW_KEYDOWN: () => Gt,
  REGISTER_SUBSCRIPTION: () => rl,
  REQUEST_WHATS_NEW_DATA: () => dl,
  RESET_STORY_ARGS: () => ir,
  RESULT_WHATS_NEW_DATA: () => ul,
  SAVE_STORY_REQUEST: () => ml,
  SAVE_STORY_RESPONSE: () => hl,
  SELECT_STORY: () => tl,
  SET_CONFIG: () => ol,
  SET_CURRENT_STORY: () => Vt,
  SET_FILTER: () => nl,
  SET_GLOBALS: () => Ht,
  SET_INDEX: () => sl,
  SET_STORIES: () => al,
  SET_WHATS_NEW_CACHE: () => fl,
  SHARED_STATE_CHANGED: () => il,
  SHARED_STATE_SET: () => ll,
  STORIES_COLLAPSE_ALL: () => cl,
  STORIES_EXPAND_ALL: () => pl,
  STORY_ARGS_UPDATED: () => zt,
  STORY_CHANGED: () => Wt,
  STORY_ERRORED: () => $t,
  STORY_FINISHED: () => Kr,
  STORY_INDEX_INVALIDATED: () => Yt,
  STORY_MISSING: () => Yr,
  STORY_PREPARED: () => Kt,
  STORY_RENDERED: () => Be,
  STORY_RENDER_PHASE_CHANGED: () => we,
  STORY_SPECIFIED: () => Xt,
  STORY_THREW_EXCEPTION: () => Jt,
  STORY_UNCHANGED: () => Qt,
  TELEMETRY_ERROR: () => eo,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: () => El,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: () => Rl,
  TESTING_MODULE_CONFIG_CHANGE: () => Al,
  TESTING_MODULE_CRASH_REPORT: () => gl,
  TESTING_MODULE_PROGRESS_REPORT: () => Sl,
  TESTING_MODULE_RUN_ALL_REQUEST: () => Tl,
  TESTING_MODULE_RUN_REQUEST: () => bl,
  TESTING_MODULE_WATCH_MODE_REQUEST: () => xl,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: () => yl,
  UNHANDLED_ERRORS_WHILE_PLAYING: () => Ut,
  UPDATE_GLOBALS: () => lr,
  UPDATE_QUERY_PARAMS: () => Zt,
  UPDATE_STORY_ARGS: () => cr,
  default: () => $i
});
var Nt = ((E) => (E.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", E.CHANNEL_CREATED = "channelCreated", E.CONFIG_ERROR = "configError", E.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", E.STORY_SPECIFIED = "storySpecified", E.SET_CONFIG = "setConfig", E.SET_STORIES = "setStories", E.SET_INDEX = "setIndex", E.SET_CURRENT_STORY = "setCurrentStory", E.CURRENT_STORY_WAS_SET = "currentStoryWasSet", E.FORCE_RE_RENDER = "forceReRender", E.FORCE_REMOUNT = "forceRemount", E.PRELOAD_ENTRIES = "preloadStories", E.STORY_PREPARED = "storyPrepared", E.DOCS_PREPARED = "docsPrepared", E.STORY_CHANGED = "storyChanged", E.STORY_UNCHANGED = "storyUnchanged", E.STORY_RENDERED = "storyRendered", E.STORY_FINISHED = "storyFinished", E.STORY_MISSING = "storyMissing", E.STORY_ERRORED = "storyErrored", E.STORY_THREW_EXCEPTION = "storyThrewException", E.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", E.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", E.UNHANDLED_ERRORS_WHILE_PLAYING = "unhandledErrorsWhilePlaying", E.UPDATE_STORY_ARGS = "updateStoryArgs", E.STORY_ARGS_UPDATED = "storyArgsUpdated", E.RESET_STORY_ARGS = "resetStoryArgs", E.SET_FILTER = "setFilter", E.SET_GLOBALS = "setGlobals", E.UPDATE_GLOBALS = "updateGlobals", E.GLOBALS_UPDATED = "globalsUpdated", E.REGISTER_SUBSCRIPTION = "registerSubscription", E.PREVIEW_KEYDOWN = "previewKeydown", E.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", E.SELECT_STORY = "selectStory", E.STORIES_COLLAPSE_ALL = "storiesCollapseAll", E.STORIES_EXPAND_ALL = "storiesExpandAll", E.DOCS_RENDERED = "docsRendered", E.SHARED_STATE_CHANGED = "sharedStateChanged", E.SHARED_STATE_SET = "sharedStateSet", E.NAVIGATE_URL = "navigateUrl", E.UPDATE_QUERY_PARAMS = "updateQueryParams", E.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", E.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", E.SET_WHATS_NEW_CACHE = "setWhatsNewCache", E.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", E.TELEMETRY_ERROR = "telemetryError", E.FILE_COMPONENT_SEARCH_REQUEST = "fileComponentSearchRequest", E.FILE_COMPONENT_SEARCH_RESPONSE = "fileComponentSearchResponse", E.SAVE_STORY_REQUEST = "saveStoryRequest", E.SAVE_STORY_RESPONSE = "saveStoryResponse", E.ARGTYPES_INFO_REQUEST = "argtypesInfoRequest", E.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse", E.CREATE_NEW_STORYFILE_REQUEST = "createNewStoryfileRequest", E.CREATE_NEW_STORYFILE_RESPONSE = "createNewStoryfileResponse", E.TESTING_MODULE_CRASH_REPORT = "testingModuleCrashReport", E.TESTING_MODULE_PROGRESS_REPORT = "testingModuleProgressReport", E.TESTING_MODULE_RUN_REQUEST = "testingModuleRunRequest", E.TESTING_MODULE_RUN_ALL_REQUEST = "testingModuleRunAllRequest", E.TESTING_MODULE_CANCEL_TEST_RUN_REQUEST = "testingModuleCancelTestRunRequest", E.TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE = "testingModuleCancelTestRunResponse", E.TESTING_MODULE_WATCH_MODE_REQUEST = "testingModuleWatchModeRequest", E.TESTING_MODULE_CONFIG_CHANGE = "testingModuleConfigChange", E))(Nt || {});
var $i = Nt;
var {
  CHANNEL_WS_DISCONNECT: kt,
  CHANNEL_CREATED: Yi,
  CONFIG_ERROR: Lt,
  CREATE_NEW_STORYFILE_REQUEST: Ki,
  CREATE_NEW_STORYFILE_RESPONSE: Xi,
  CURRENT_STORY_WAS_SET: $r,
  DOCS_PREPARED: jt,
  DOCS_RENDERED: sr,
  FILE_COMPONENT_SEARCH_REQUEST: Ji,
  FILE_COMPONENT_SEARCH_RESPONSE: Qi,
  FORCE_RE_RENDER: ar,
  FORCE_REMOUNT: Mt,
  GLOBALS_UPDATED: _e,
  NAVIGATE_URL: Zi,
  PLAY_FUNCTION_THREW_EXCEPTION: qt,
  UNHANDLED_ERRORS_WHILE_PLAYING: Ut,
  PRELOAD_ENTRIES: Bt,
  PREVIEW_BUILDER_PROGRESS: el,
  PREVIEW_KEYDOWN: Gt,
  REGISTER_SUBSCRIPTION: rl,
  RESET_STORY_ARGS: ir,
  SELECT_STORY: tl,
  SET_CONFIG: ol,
  SET_CURRENT_STORY: Vt,
  SET_FILTER: nl,
  SET_GLOBALS: Ht,
  SET_INDEX: sl,
  SET_STORIES: al,
  SHARED_STATE_CHANGED: il,
  SHARED_STATE_SET: ll,
  STORIES_COLLAPSE_ALL: cl,
  STORIES_EXPAND_ALL: pl,
  STORY_ARGS_UPDATED: zt,
  STORY_CHANGED: Wt,
  STORY_ERRORED: $t,
  STORY_INDEX_INVALIDATED: Yt,
  STORY_MISSING: Yr,
  STORY_PREPARED: Kt,
  STORY_RENDER_PHASE_CHANGED: we,
  STORY_RENDERED: Be,
  STORY_FINISHED: Kr,
  STORY_SPECIFIED: Xt,
  STORY_THREW_EXCEPTION: Jt,
  STORY_UNCHANGED: Qt,
  UPDATE_GLOBALS: lr,
  UPDATE_QUERY_PARAMS: Zt,
  UPDATE_STORY_ARGS: cr,
  REQUEST_WHATS_NEW_DATA: dl,
  RESULT_WHATS_NEW_DATA: ul,
  SET_WHATS_NEW_CACHE: fl,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: yl,
  TELEMETRY_ERROR: eo,
  SAVE_STORY_REQUEST: ml,
  SAVE_STORY_RESPONSE: hl,
  ARGTYPES_INFO_REQUEST: ro,
  ARGTYPES_INFO_RESPONSE: Xr,
  TESTING_MODULE_CRASH_REPORT: gl,
  TESTING_MODULE_PROGRESS_REPORT: Sl,
  TESTING_MODULE_RUN_REQUEST: bl,
  TESTING_MODULE_RUN_ALL_REQUEST: Tl,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: El,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Rl,
  TESTING_MODULE_WATCH_MODE_REQUEST: xl,
  TESTING_MODULE_CONFIG_CHANGE: Al
} = Nt;
var to = {
  "@storybook/global": "__STORYBOOK_MODULE_GLOBAL__",
  "storybook/internal/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "@storybook/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "@storybook/core/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "storybook/internal/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "@storybook/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "@storybook/core/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "storybook/internal/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "@storybook/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "@storybook/core/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "storybook/internal/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "@storybook/core-events/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "@storybook/core/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "storybook/internal/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "@storybook/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "@storybook/core/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "storybook/internal/types": "__STORYBOOK_MODULE_TYPES__",
  "@storybook/types": "__STORYBOOK_MODULE_TYPES__",
  "@storybook/core/types": "__STORYBOOK_MODULE_TYPES__"
};
var Yn = Object.keys(to);
var yr = {};
Ae(yr, {
  Channel: () => ye,
  PostMessageTransport: () => $e,
  WebsocketTransport: () => Ye,
  createBrowserChannel: () => Ed,
  default: () => Td
});
var _l = n((r) => r.transports !== void 0, "isMulti");
var wl = n(() => Math.random().toString(16).slice(2), "generateRandomId");
var oo = class oo2 {
  constructor(e = {}) {
    this.sender = wl();
    this.events = {};
    this.data = {};
    this.transports = [];
    this.isAsync = e.async || false, _l(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
      t.setHandler((o) => this.handleEvent(o));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((t) => {
      t.setHandler((o) => this.handleEvent(o));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, t) {
    this.events[e] = this.events[e] || [], this.events[e].push(t);
  }
  emit(e, ...t) {
    let o = { type: e, args: t, from: this.sender }, s = {};
    t.length >= 1 && t[0] && t[0].options && (s = t[0].options);
    let a = n(() => {
      this.transports.forEach((l) => {
        l.send(o, s);
      }), this.handleEvent(o);
    }, "handler");
    this.isAsync ? setImmediate(a) : a();
  }
  last(e) {
    return this.data[e];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(e) {
    let t = this.listeners(e);
    return t ? t.length : 0;
  }
  listeners(e) {
    return this.events[e] || void 0;
  }
  once(e, t) {
    let o = this.onceListener(e, t);
    this.addListener(e, o);
  }
  removeAllListeners(e) {
    e ? this.events[e] && delete this.events[e] : this.events = {};
  }
  removeListener(e, t) {
    let o = this.listeners(e);
    o && (this.events[e] = o.filter((s) => s !== t));
  }
  on(e, t) {
    this.addListener(e, t);
  }
  off(e, t) {
    this.removeListener(e, t);
  }
  handleEvent(e) {
    let t = this.listeners(e.type);
    t && t.length && t.forEach((o) => {
      o.apply(e, e.args);
    }), this.data[e.type] = e.args;
  }
  onceListener(e, t) {
    let o = n((...s) => (this.removeListener(e, o), t(...s)), "onceListener");
    return o;
  }
};
n(oo, "Channel");
var ye = oo;
var pr = {};
Ae(pr, {
  deprecate: () => oe,
  logger: () => O,
  once: () => L,
  pretty: () => K
});
var { LOGLEVEL: vl } = R;
var me = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
};
var Pl = vl;
var Ge = me[Pl] || me.info;
var O = {
  trace: n((r, ...e) => {
    Ge <= me.trace && console.trace(r, ...e);
  }, "trace"),
  debug: n((r, ...e) => {
    Ge <= me.debug && console.debug(r, ...e);
  }, "debug"),
  info: n((r, ...e) => {
    Ge <= me.info && console.info(r, ...e);
  }, "info"),
  warn: n((r, ...e) => {
    Ge <= me.warn && console.warn(r, ...e);
  }, "warn"),
  error: n((r, ...e) => {
    Ge <= me.error && console.error(r, ...e);
  }, "error"),
  log: n((r, ...e) => {
    Ge < me.silent && console.log(r, ...e);
  }, "log")
};
var no = /* @__PURE__ */ new Set();
var L = n((r) => (e, ...t) => {
  if (!no.has(e))
    return no.add(e), O[r](e, ...t);
}, "once");
L.clear = () => no.clear();
L.trace = L("trace");
L.debug = L("debug");
L.info = L("info");
L.warn = L("warn");
L.error = L("error");
L.log = L("log");
var oe = L("warn");
var K = n((r) => (...e) => {
  let t = [];
  if (e.length) {
    let o = /<span\s+style=(['"])([^'"]*)\1\s*>/gi, s = /<\/span>/gi, a;
    for (t.push(e[0].replace(o, "%c").replace(s, "%c")); a = o.exec(e[0]); )
      t.push(a[2]), t.push("");
    for (let l = 1; l < e.length; l++)
      t.push(e[l]);
  }
  O[r].apply(O, t);
}, "pretty");
K.trace = K("trace");
K.debug = K("debug");
K.info = K("info");
K.warn = K("warn");
K.error = K("error");
var Cl = Object.create;
var Kn = Object.defineProperty;
var Ol = Object.getOwnPropertyDescriptor;
var Xn = Object.getOwnPropertyNames;
var Il = Object.getPrototypeOf;
var Fl = Object.prototype.hasOwnProperty;
var J = n((r, e) => n(function() {
  return e || (0, r[Xn(r)[0]])((e = { exports: {} }).exports, e), e.exports;
}, "__require"), "__commonJS");
var Dl = n((r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let s of Xn(e))
      !Fl.call(r, s) && s !== t && Kn(r, s, { get: n(() => e[s], "get"), enumerable: !(o = Ol(e, s)) || o.enumerable });
  return r;
}, "__copyProps");
var Jr = n((r, e, t) => (t = r != null ? Cl(Il(r)) : {}, Dl(
  e || !r || !r.__esModule ? Kn(t, "default", { value: r, enumerable: true }) : t,
  r
)), "__toESM");
var Nl = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
];
var kl = ["detail"];
function Jn(r) {
  let e = Nl.filter((t) => r[t] !== void 0).reduce((t, o) => ({ ...t, [o]: r[o] }), {});
  return r instanceof CustomEvent && kl.filter((t) => r[t] !== void 0).forEach((t) => {
    e[t] = r[t];
  }), e;
}
n(Jn, "extractEventHiddenProperties");
var fs = ue(Qr(), 1);
var ns = J({
  "node_modules/has-symbols/shams.js"(r, e) {
    "use strict";
    e.exports = n(function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return false;
      if (typeof Symbol.iterator == "symbol")
        return true;
      var o = {}, s = Symbol("test"), a = Object(s);
      if (typeof s == "string" || Object.prototype.toString.call(s) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
        return false;
      var l = 42;
      o[s] = l;
      for (s in o)
        return false;
      if (typeof Object.keys == "function" && Object.keys(o).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
        o
      ).length !== 0)
        return false;
      var c = Object.getOwnPropertySymbols(o);
      if (c.length !== 1 || c[0] !== s || !Object.prototype.propertyIsEnumerable.call(o, s))
        return false;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var i = Object.getOwnPropertyDescriptor(o, s);
        if (i.value !== l || i.enumerable !== true)
          return false;
      }
      return true;
    }, "hasSymbols");
  }
});
var ss = J({
  "node_modules/has-symbols/index.js"(r, e) {
    "use strict";
    var t = typeof Symbol < "u" && Symbol, o = ns();
    e.exports = n(function() {
      return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : o();
    }, "hasNativeSymbols");
  }
});
var Ll = J({
  "node_modules/function-bind/implementation.js"(r, e) {
    "use strict";
    var t = "Function.prototype.bind called on incompatible ", o = Array.prototype.slice, s = Object.prototype.toString, a = "[object Function]";
    e.exports = n(function(c) {
      var i = this;
      if (typeof i != "function" || s.call(i) !== a)
        throw new TypeError(t + i);
      for (var p = o.call(arguments, 1), u, d = n(function() {
        if (this instanceof u) {
          var y = i.apply(
            this,
            p.concat(o.call(arguments))
          );
          return Object(y) === y ? y : this;
        } else
          return i.apply(
            c,
            p.concat(o.call(arguments))
          );
      }, "binder"), h = Math.max(0, i.length - p.length), S = [], m = 0; m < h; m++)
        S.push("$" + m);
      if (u = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(d), i.prototype) {
        var T = n(function() {
        }, "Empty2");
        T.prototype = i.prototype, u.prototype = new T(), T.prototype = null;
      }
      return u;
    }, "bind");
  }
});
var io = J({
  "node_modules/function-bind/index.js"(r, e) {
    "use strict";
    var t = Ll();
    e.exports = Function.prototype.bind || t;
  }
});
var jl = J({
  "node_modules/has/src/index.js"(r, e) {
    "use strict";
    var t = io();
    e.exports = t.call(Function.call, Object.prototype.hasOwnProperty);
  }
});
var as = J({
  "node_modules/get-intrinsic/index.js"(r, e) {
    "use strict";
    var t, o = SyntaxError, s = Function, a = TypeError, l = n(function(v) {
      try {
        return s('"use strict"; return (' + v + ").constructor;")();
      } catch {
      }
    }, "getEvalledConstructor"), c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, "");
      } catch {
        c = null;
      }
    var i = n(function() {
      throw new a();
    }, "throwTypeError"), p = c ? function() {
      try {
        return arguments.callee, i;
      } catch {
        try {
          return c(arguments, "callee").get;
        } catch {
          return i;
        }
      }
    }() : i, u = ss()(), d = Object.getPrototypeOf || function(v) {
      return v.__proto__;
    }, h = {}, S = typeof Uint8Array > "u" ? t : d(Uint8Array), m = {
      "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
      "%ArrayIteratorPrototype%": u ? d([][Symbol.iterator]()) : t,
      "%AsyncFromSyncIteratorPrototype%": t,
      "%AsyncFunction%": h,
      "%AsyncGenerator%": h,
      "%AsyncGeneratorFunction%": h,
      "%AsyncIteratorPrototype%": h,
      "%Atomics%": typeof Atomics > "u" ? t : Atomics,
      "%BigInt%": typeof BigInt > "u" ? t : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? t : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
      "%Function%": s,
      "%GeneratorFunction%": h,
      "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": u ? d(d([][Symbol.iterator]())) : t,
      "%JSON%": typeof JSON == "object" ? JSON : t,
      "%Map%": typeof Map > "u" ? t : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !u ? t : d((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? t : Promise,
      "%Proxy%": typeof Proxy > "u" ? t : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? t : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? t : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !u ? t : d((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": u ? d(""[Symbol.iterator]()) : t,
      "%Symbol%": u ? Symbol : t,
      "%SyntaxError%": o,
      "%ThrowTypeError%": p,
      "%TypedArray%": S,
      "%TypeError%": a,
      "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
    }, T = n(function v(F) {
      var j;
      if (F === "%AsyncFunction%")
        j = l("async function () {}");
      else if (F === "%GeneratorFunction%")
        j = l("function* () {}");
      else if (F === "%AsyncGeneratorFunction%")
        j = l("async function* () {}");
      else if (F === "%AsyncGenerator%") {
        var k = v("%AsyncGeneratorFunction%");
        k && (j = k.prototype);
      } else if (F === "%AsyncIteratorPrototype%") {
        var D = v("%AsyncGenerator%");
        D && (j = d(D.prototype));
      }
      return m[F] = j, j;
    }, "doEval2"), y = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, x = io(), A = jl(), g = x.call(Function.call, Array.prototype.concat), b = x.call(Function.apply, Array.prototype.splice), _ = x.call(
      Function.call,
      String.prototype.replace
    ), w = x.call(Function.call, String.prototype.slice), I = x.call(Function.call, RegExp.prototype.exec), M = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, U = /\\(\\)?/g, z = n(
      function(F) {
        var j = w(F, 0, 1), k = w(F, -1);
        if (j === "%" && k !== "%")
          throw new o("invalid intrinsic syntax, expected closing `%`");
        if (k === "%" && j !== "%")
          throw new o("invalid intrinsic syntax, expected opening `%`");
        var D = [];
        return _(F, M, function(V, Q, Y, Br) {
          D[D.length] = Y ? _(Br, U, "$1") : Q || V;
        }), D;
      },
      "stringToPath3"
    ), te = n(function(F, j) {
      var k = F, D;
      if (A(y, k) && (D = y[k], k = "%" + D[0] + "%"), A(m, k)) {
        var V = m[k];
        if (V === h && (V = T(k)), typeof V > "u" && !j)
          throw new a("intrinsic " + F + " exists, but is not available. Please file an issue!");
        return {
          alias: D,
          name: k,
          value: V
        };
      }
      throw new o("intrinsic " + F + " does not exist!");
    }, "getBaseIntrinsic2");
    e.exports = n(function(F, j) {
      if (typeof F != "string" || F.length === 0)
        throw new a("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof j != "boolean")
        throw new a('"allowMissing" argument must be a boolean');
      if (I(/^%?[^%]*%?$/, F) === null)
        throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var k = z(F), D = k.length > 0 ? k[0] : "", V = te("%" + D + "%", j), Q = V.name, Y = V.value, Br = false, Ft = V.alias;
      Ft && (D = Ft[0], b(k, g([0, 1], Ft)));
      for (var Gr = 1, or = true; Gr < k.length; Gr += 1) {
        var ie = k[Gr], Vr = w(ie, 0, 1), Hr = w(ie, -1);
        if ((Vr === '"' || Vr === "'" || Vr === "`" || Hr === '"' || Hr === "'" || Hr === "`") && Vr !== Hr)
          throw new o("property names with quotes must have matching quotes");
        if ((ie === "constructor" || !or) && (Br = true), D += "." + ie, Q = "%" + D + "%", A(m, Q))
          Y = m[Q];
        else if (Y != null) {
          if (!(ie in Y)) {
            if (!j)
              throw new a("base intrinsic for " + F + " exists, but the property is not available.");
            return;
          }
          if (c && Gr + 1 >= k.length) {
            var zr = c(Y, ie);
            or = !!zr, or && "get" in zr && !("originalValue" in zr.get) ? Y = zr.get : Y = Y[ie];
          } else
            or = A(Y, ie), Y = Y[ie];
          or && !Br && (m[Q] = Y);
        }
      }
      return Y;
    }, "GetIntrinsic");
  }
});
var Ml = J({
  "node_modules/call-bind/index.js"(r, e) {
    "use strict";
    var t = io(), o = as(), s = o("%Function.prototype.apply%"), a = o("%Function.prototype.call%"), l = o("%Reflect.apply%", true) || t.call(
      a,
      s
    ), c = o("%Object.getOwnPropertyDescriptor%", true), i = o("%Object.defineProperty%", true), p = o("%Math.max%");
    if (i)
      try {
        i({}, "a", { value: 1 });
      } catch {
        i = null;
      }
    e.exports = n(function(h) {
      var S = l(t, a, arguments);
      if (c && i) {
        var m = c(S, "length");
        m.configurable && i(
          S,
          "length",
          { value: 1 + p(0, h.length - (arguments.length - 1)) }
        );
      }
      return S;
    }, "callBind");
    var u = n(function() {
      return l(t, s, arguments);
    }, "applyBind2");
    i ? i(e.exports, "apply", { value: u }) : e.exports.apply = u;
  }
});
var ql = J({
  "node_modules/call-bind/callBound.js"(r, e) {
    "use strict";
    var t = as(), o = Ml(), s = o(t("String.prototype.indexOf"));
    e.exports = n(function(l, c) {
      var i = t(l, !!c);
      return typeof i == "function" && s(l, ".prototype.") > -1 ? o(i) : i;
    }, "callBoundIntrinsic");
  }
});
var Ul = J({
  "node_modules/has-tostringtag/shams.js"(r, e) {
    "use strict";
    var t = ns();
    e.exports = n(function() {
      return t() && !!Symbol.toStringTag;
    }, "hasToStringTagShams");
  }
});
var Bl = J({
  "node_modules/is-regex/index.js"(r, e) {
    "use strict";
    var t = ql(), o = Ul()(), s, a, l, c;
    o && (s = t("Object.prototype.hasOwnProperty"), a = t("RegExp.prototype.exec"), l = {}, i = n(function() {
      throw l;
    }, "throwRegexMarker"), c = {
      toString: i,
      valueOf: i
    }, typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = i));
    var i, p = t("Object.prototype.toString"), u = Object.getOwnPropertyDescriptor, d = "[object RegExp]";
    e.exports = n(o ? function(S) {
      if (!S || typeof S != "object")
        return false;
      var m = u(S, "lastIndex"), T = m && s(m, "value");
      if (!T)
        return false;
      try {
        a(S, c);
      } catch (y) {
        return y === l;
      }
    } : function(S) {
      return !S || typeof S != "object" && typeof S != "function" ? false : p(S) === d;
    }, "isRegex");
  }
});
var Gl = J({
  "node_modules/is-function/index.js"(r, e) {
    e.exports = o;
    var t = Object.prototype.toString;
    function o(s) {
      if (!s)
        return false;
      var a = t.call(s);
      return a === "[object Function]" || typeof s == "function" && a !== "[object RegExp]" || typeof window < "u" && (s === window.setTimeout || s === window.alert || s === window.confirm || s === window.prompt);
    }
    n(o, "isFunction3");
  }
});
var Vl = J({
  "node_modules/is-symbol/index.js"(r, e) {
    "use strict";
    var t = Object.prototype.toString, o = ss()();
    o ? (s = Symbol.prototype.toString, a = /^Symbol\(.*\)$/, l = n(function(i) {
      return typeof i.valueOf() != "symbol" ? false : a.test(s.call(i));
    }, "isRealSymbolObject"), e.exports = n(function(i) {
      if (typeof i == "symbol")
        return true;
      if (t.call(i) !== "[object Symbol]")
        return false;
      try {
        return l(i);
      } catch {
        return false;
      }
    }, "isSymbol3")) : e.exports = n(function(i) {
      return false;
    }, "isSymbol3");
    var s, a, l;
  }
});
var Hl = Jr(Bl());
var zl = Jr(Gl());
var Wl = Jr(Vl());
function $l(r) {
  return r != null && typeof r == "object" && Array.isArray(r) === false;
}
n($l, "isObject");
var Yl = typeof global == "object" && global && global.Object === Object && global;
var Kl = Yl;
var Xl = typeof self == "object" && self && self.Object === Object && self;
var Jl = Kl || Xl || Function("return this")();
var lo = Jl;
var Ql = lo.Symbol;
var Ve = Ql;
var is = Object.prototype;
var Zl = is.hasOwnProperty;
var ec = is.toString;
var dr = Ve ? Ve.toStringTag : void 0;
function rc(r) {
  var e = Zl.call(r, dr), t = r[dr];
  try {
    r[dr] = void 0;
    var o = true;
  } catch {
  }
  var s = ec.call(r);
  return o && (e ? r[dr] = t : delete r[dr]), s;
}
n(rc, "getRawTag");
var tc = rc;
var oc = Object.prototype;
var nc = oc.toString;
function sc(r) {
  return nc.call(r);
}
n(sc, "objectToString");
var ac = sc;
var ic = "[object Null]";
var lc = "[object Undefined]";
var Zn = Ve ? Ve.toStringTag : void 0;
function cc(r) {
  return r == null ? r === void 0 ? lc : ic : Zn && Zn in Object(r) ? tc(r) : ac(r);
}
n(cc, "baseGetTag");
var ls = cc;
function pc(r) {
  return r != null && typeof r == "object";
}
n(pc, "isObjectLike");
var dc = pc;
var uc = "[object Symbol]";
function fc(r) {
  return typeof r == "symbol" || dc(r) && ls(r) == uc;
}
n(fc, "isSymbol");
var co = fc;
function yc(r, e) {
  for (var t = -1, o = r == null ? 0 : r.length, s = Array(o); ++t < o; )
    s[t] = e(r[t], t, r);
  return s;
}
n(yc, "arrayMap");
var mc = yc;
var hc = Array.isArray;
var po = hc;
var gc = 1 / 0;
var es = Ve ? Ve.prototype : void 0;
var rs = es ? es.toString : void 0;
function cs(r) {
  if (typeof r == "string")
    return r;
  if (po(r))
    return mc(r, cs) + "";
  if (co(r))
    return rs ? rs.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -gc ? "-0" : e;
}
n(cs, "baseToString");
var Sc = cs;
function bc(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
n(bc, "isObject2");
var ps = bc;
var Tc = "[object AsyncFunction]";
var Ec = "[object Function]";
var Rc = "[object GeneratorFunction]";
var xc = "[object Proxy]";
function Ac(r) {
  if (!ps(r))
    return false;
  var e = ls(r);
  return e == Ec || e == Rc || e == Tc || e == xc;
}
n(Ac, "isFunction");
var _c = Ac;
var wc = lo["__core-js_shared__"];
var ao = wc;
var ts = function() {
  var r = /[^.]+$/.exec(ao && ao.keys && ao.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function vc(r) {
  return !!ts && ts in r;
}
n(vc, "isMasked");
var Pc = vc;
var Cc = Function.prototype;
var Oc = Cc.toString;
function Ic(r) {
  if (r != null) {
    try {
      return Oc.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
n(Ic, "toSource");
var Fc = Ic;
var Dc = /[\\^$.*+?()[\]{}|]/g;
var Nc = /^\[object .+?Constructor\]$/;
var kc = Function.prototype;
var Lc = Object.prototype;
var jc = kc.toString;
var Mc = Lc.hasOwnProperty;
var qc = RegExp(
  "^" + jc.call(Mc).replace(Dc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uc(r) {
  if (!ps(r) || Pc(r))
    return false;
  var e = _c(r) ? qc : Nc;
  return e.test(Fc(r));
}
n(Uc, "baseIsNative");
var Bc = Uc;
function Gc(r, e) {
  return r == null ? void 0 : r[e];
}
n(Gc, "getValue");
var Vc = Gc;
function Hc(r, e) {
  var t = Vc(r, e);
  return Bc(t) ? t : void 0;
}
n(Hc, "getNative");
var ds = Hc;
function zc(r, e) {
  return r === e || r !== r && e !== e;
}
n(zc, "eq");
var Wc = zc;
var $c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Yc = /^\w*$/;
function Kc(r, e) {
  if (po(r))
    return false;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || co(r) ? true : Yc.test(r) || !$c.test(r) || e != null && r in Object(
    e
  );
}
n(Kc, "isKey");
var Xc = Kc;
var Jc = ds(Object, "create");
var ur = Jc;
function Qc() {
  this.__data__ = ur ? ur(null) : {}, this.size = 0;
}
n(Qc, "hashClear");
var Zc = Qc;
function ep(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
n(ep, "hashDelete");
var rp = ep;
var tp = "__lodash_hash_undefined__";
var op = Object.prototype;
var np = op.hasOwnProperty;
function sp(r) {
  var e = this.__data__;
  if (ur) {
    var t = e[r];
    return t === tp ? void 0 : t;
  }
  return np.call(e, r) ? e[r] : void 0;
}
n(sp, "hashGet");
var ap = sp;
var ip = Object.prototype;
var lp = ip.hasOwnProperty;
function cp(r) {
  var e = this.__data__;
  return ur ? e[r] !== void 0 : lp.call(e, r);
}
n(cp, "hashHas");
var pp = cp;
var dp = "__lodash_hash_undefined__";
function up(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = ur && e === void 0 ? dp : e, this;
}
n(up, "hashSet");
var fp = up;
function He(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
n(He, "Hash");
He.prototype.clear = Zc;
He.prototype.delete = rp;
He.prototype.get = ap;
He.prototype.has = pp;
He.prototype.set = fp;
var os = He;
function yp() {
  this.__data__ = [], this.size = 0;
}
n(yp, "listCacheClear");
var mp = yp;
function hp(r, e) {
  for (var t = r.length; t--; )
    if (Wc(r[t][0], e))
      return t;
  return -1;
}
n(hp, "assocIndexOf");
var et = hp;
var gp = Array.prototype;
var Sp = gp.splice;
function bp(r) {
  var e = this.__data__, t = et(e, r);
  if (t < 0)
    return false;
  var o = e.length - 1;
  return t == o ? e.pop() : Sp.call(e, t, 1), --this.size, true;
}
n(bp, "listCacheDelete");
var Tp = bp;
function Ep(r) {
  var e = this.__data__, t = et(e, r);
  return t < 0 ? void 0 : e[t][1];
}
n(Ep, "listCacheGet");
var Rp = Ep;
function xp(r) {
  return et(this.__data__, r) > -1;
}
n(xp, "listCacheHas");
var Ap = xp;
function _p(r, e) {
  var t = this.__data__, o = et(t, r);
  return o < 0 ? (++this.size, t.push([r, e])) : t[o][1] = e, this;
}
n(_p, "listCacheSet");
var wp = _p;
function ze(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
n(ze, "ListCache");
ze.prototype.clear = mp;
ze.prototype.delete = Tp;
ze.prototype.get = Rp;
ze.prototype.has = Ap;
ze.prototype.set = wp;
var vp = ze;
var Pp = ds(lo, "Map");
var Cp = Pp;
function Op() {
  this.size = 0, this.__data__ = {
    hash: new os(),
    map: new (Cp || vp)(),
    string: new os()
  };
}
n(Op, "mapCacheClear");
var Ip = Op;
function Fp(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
n(Fp, "isKeyable");
var Dp = Fp;
function Np(r, e) {
  var t = r.__data__;
  return Dp(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
n(Np, "getMapData");
var rt = Np;
function kp(r) {
  var e = rt(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
n(kp, "mapCacheDelete");
var Lp = kp;
function jp(r) {
  return rt(this, r).get(r);
}
n(jp, "mapCacheGet");
var Mp = jp;
function qp(r) {
  return rt(this, r).has(r);
}
n(qp, "mapCacheHas");
var Up = qp;
function Bp(r, e) {
  var t = rt(this, r), o = t.size;
  return t.set(r, e), this.size += t.size == o ? 0 : 1, this;
}
n(Bp, "mapCacheSet");
var Gp = Bp;
function We(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
n(We, "MapCache");
We.prototype.clear = Ip;
We.prototype.delete = Lp;
We.prototype.get = Mp;
We.prototype.has = Up;
We.prototype.set = Gp;
var us = We;
var Vp = "Expected a function";
function uo(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(Vp);
  var t = n(function() {
    var o = arguments, s = e ? e.apply(this, o) : o[0], a = t.cache;
    if (a.has(s))
      return a.get(s);
    var l = r.apply(this, o);
    return t.cache = a.set(s, l) || a, l;
  }, "memoized");
  return t.cache = new (uo.Cache || us)(), t;
}
n(uo, "memoize");
uo.Cache = us;
var Hp = uo;
var zp = 500;
function Wp(r) {
  var e = Hp(r, function(o) {
    return t.size === zp && t.clear(), o;
  }), t = e.cache;
  return e;
}
n(Wp, "memoizeCapped");
var $p = Wp;
var Yp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Kp = /\\(\\)?/g;
var Xp = $p(
  function(r) {
    var e = [];
    return r.charCodeAt(0) === 46 && e.push(""), r.replace(Yp, function(t, o, s, a) {
      e.push(s ? a.replace(Kp, "$1") : o || t);
    }), e;
  }
);
var Jp = Xp;
function Qp(r) {
  return r == null ? "" : Sc(r);
}
n(Qp, "toString");
var Zp = Qp;
function ed(r, e) {
  return po(r) ? r : Xc(r, e) ? [r] : Jp(Zp(r));
}
n(ed, "castPath");
var rd = ed;
var td = 1 / 0;
function od(r) {
  if (typeof r == "string" || co(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -td ? "-0" : e;
}
n(od, "toKey");
var nd = od;
function sd(r, e) {
  e = rd(e, r);
  for (var t = 0, o = e.length; r != null && t < o; )
    r = r[nd(e[t++])];
  return t && t == o ? r : void 0;
}
n(sd, "baseGet");
var ad = sd;
function id(r, e, t) {
  var o = r == null ? void 0 : ad(r, e);
  return o === void 0 ? t : o;
}
n(id, "get");
var ld = id;
var Zr = $l;
var cd = n((r) => {
  let e = null, t = false, o = false, s = false, a = "";
  if (r.indexOf("//") >= 0 || r.indexOf("/*") >= 0)
    for (let l = 0; l < r.length; l += 1)
      !e && !t && !o && !s ? r[l] === '"' || r[l] === "'" || r[l] === "`" ? e = r[l] : r[l] === "/" && r[l + 1] === "*" ? t = true : r[l] === "/" && r[l + 1] === "/" ? o = true : r[l] === "/" && r[l + 1] !== "/" && (s = true) : (e && (r[l] === e && r[l - 1] !== "\\" || r[l] === `
` && e !== "`") && (e = null), s && (r[l] === "/" && r[l - 1] !== "\\" || r[l] === `
`) && (s = false), t && r[l - 1] === "/" && r[l - 2] === "*" && (t = false), o && r[l] === `
` && (o = false)), !t && !o && (a += r[l]);
  else
    a = r;
  return a;
}, "removeCodeComments");
var pd = (0, fs.default)(1e4)(
  (r) => cd(r).replace(/\n\s*/g, "").trim()
);
var dd = n(function(e, t) {
  let o = t.slice(0, t.indexOf("{")), s = t.slice(t.indexOf("{"));
  if (o.includes("=>") || o.includes("function"))
    return t;
  let a = o;
  return a = a.replace(e, "function"), a + s;
}, "convertShorthandMethods2");
var ud = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
var fr = n(
  (r) => r.match(/^[\[\{\"\}].*[\]\}\"]$/),
  "isJSON"
);
function ys(r) {
  if (!Zr(r))
    return r;
  let e = r, t = false;
  return typeof Event < "u" && r instanceof Event && (e = Jn(e), t = true), e = Object.keys(e).reduce((o, s) => {
    try {
      e[s] && e[s].toJSON, o[s] = e[s];
    } catch {
      t = true;
    }
    return o;
  }, {}), t ? e : r;
}
n(ys, "convertUnconventionalData");
var fd = n(function(e) {
  let t, o, s, a;
  return n(function(c, i) {
    try {
      if (c === "")
        return a = [], t = /* @__PURE__ */ new Map([[i, "[]"]]), o = /* @__PURE__ */ new Map(), s = [], i;
      let p = o.get(this) || this;
      for (; s.length && p !== s[0]; )
        s.shift(), a.pop();
      if (typeof i == "boolean")
        return i;
      if (i === void 0)
        return e.allowUndefined ? "_undefined_" : void 0;
      if (i === null)
        return null;
      if (typeof i == "number")
        return i === -1 / 0 ? "_-Infinity_" : i === 1 / 0 ? "_Infinity_" : Number.isNaN(i) ? "_NaN_" : i;
      if (typeof i == "bigint")
        return `_bigint_${i.toString()}`;
      if (typeof i == "string")
        return ud.test(i) ? e.allowDate ? `_date_${i}` : void 0 : i;
      if ((0, Hl.default)(i))
        return e.allowRegExp ? `_regexp_${i.flags}|${i.source}` : void 0;
      if ((0, zl.default)(i)) {
        if (!e.allowFunction)
          return;
        let { name: d } = i, h = i.toString();
        return h.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${d}|${(() => {
        }).toString()}` : `_function_${d}|${pd(dd(c, h))}`;
      }
      if ((0, Wl.default)(i)) {
        if (!e.allowSymbol)
          return;
        let d = Symbol.keyFor(i);
        return d !== void 0 ? `_gsymbol_${d}` : `_symbol_${i.toString().slice(7, -1)}`;
      }
      if (s.length >= e.maxDepth)
        return Array.isArray(i) ? `[Array(${i.length})]` : "[Object]";
      if (i === this)
        return `_duplicate_${JSON.stringify(a)}`;
      if (i instanceof Error && e.allowError)
        return {
          __isConvertedError__: true,
          errorProperties: {
            ...i.cause ? { cause: i.cause } : {},
            ...i,
            name: i.name,
            message: i.message,
            stack: i.stack,
            "_constructor-name_": i.constructor.name
          }
        };
      if (i.constructor && i.constructor.name && i.constructor.name !== "Object" && !Array.isArray(i) && !e.allowClass)
        return;
      let u = t.get(i);
      if (!u) {
        let d = Array.isArray(i) ? i : ys(i);
        if (i.constructor && i.constructor.name && i.constructor.name !== "Object" && !Array.isArray(i) && e.allowClass)
          try {
            Object.assign(d, { "_constructor-name_": i.constructor.name });
          } catch {
          }
        return a.push(c), s.unshift(d), t.set(i, JSON.stringify(a)), i !== d && o.set(i, d), d;
      }
      return `_duplicate_${u}`;
    } catch {
      return;
    }
  }, "replace");
}, "replacer2");
var yd = n(function reviver(options) {
  let refs = [], root;
  return n(function revive(key, value) {
    if (key === "" && (root = value, refs.forEach(({ target: r, container: e, replacement: t }) => {
      let o = fr(t) ? JSON.parse(t) : t.split(".");
      o.length === 0 ? e[r] = root : e[r] = ld(root, o);
    })), key === "_constructor-name_")
      return value;
    if (Zr(value) && value.__isConvertedError__) {
      let { message: r, ...e } = value.errorProperties, t = new Error(r);
      return Object.assign(t, e), t;
    }
    if (Zr(value) && value["_constructor-name_"] && options.allowFunction) {
      let r = value["_constructor-name_"];
      if (r !== "Object") {
        let e = new Function(`return function ${r.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new e());
      }
      return delete value["_constructor-name_"], value;
    }
    if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
      let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [], sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval)
        return eval(`(${sourceSanitized})`);
      let result = n((...args) => {
        let f = eval(`(${sourceSanitized})`);
        return f(...args);
      }, "result");
      return Object.defineProperty(result, "toString", {
        value: n(() => sourceSanitized, "value")
      }), Object.defineProperty(result, "name", {
        value: name
      }), result;
    }
    if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      let [, r, e] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(e, r);
    }
    return typeof value == "string" && value.startsWith("_date_") && options.allowDate ? new Date(value.replace("_date_", "")) : typeof value == "string" && value.startsWith("_duplicate_") ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }), null) : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol ? Symbol(value.replace("_symbol_", "")) : typeof value == "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "string" && value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "_NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) : value;
  }, "revive");
}, "reviver");
var ms = {
  maxDepth: 10,
  space: void 0,
  allowFunction: true,
  allowRegExp: true,
  allowDate: true,
  allowClass: true,
  allowError: true,
  allowUndefined: true,
  allowSymbol: true,
  lazyEval: true
};
var tt = n((r, e = {}) => {
  let t = { ...ms, ...e };
  return JSON.stringify(ys(r), fd(t), e.space);
}, "stringify");
var md = n(() => {
  let r = /* @__PURE__ */ new Map();
  return n(function e(t) {
    Zr(t) && Object.entries(t).forEach(([o, s]) => {
      s === "_undefined_" ? t[o] = void 0 : r.get(s) || (r.set(s, true), e(s));
    }), Array.isArray(t) && t.forEach((o, s) => {
      o === "_undefined_" ? (r.set(o, true), t[s] = void 0) : r.get(o) || (r.set(o, true), e(o));
    });
  }, "mutateUndefined");
}, "mutator");
var ot = n((r, e = {}) => {
  let t = { ...ms, ...e }, o = JSON.parse(r, yd(t));
  return md()(o), o;
}, "parse");
var hd = true;
var fo = "Invariant failed";
function le(r, e) {
  if (!r) {
    if (hd)
      throw new Error(fo);
    var t = typeof e == "function" ? e() : e, o = t ? "".concat(fo, ": ").concat(t) : fo;
    throw new Error(o);
  }
}
n(le, "invariant");
var hs = n((r) => {
  let e = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  ), [t, ...o] = e.filter((a) => {
    var _a2, _b;
    try {
      return ((_a2 = a.contentWindow) == null ? void 0 : _a2.location.origin) === r.source.location.origin && ((_b = a.contentWindow) == null ? void 0 : _b.location.pathname) === r.source.location.pathname;
    } catch {
    }
    try {
      return a.contentWindow === r.source;
    } catch {
    }
    let l = a.getAttribute("src"), c;
    try {
      if (!l)
        return false;
      ({ origin: c } = new URL(l, document.location.toString()));
    } catch {
      return false;
    }
    return c === r.origin;
  }), s = t == null ? void 0 : t.getAttribute("src");
  if (s && o.length === 0) {
    let { protocol: a, host: l, pathname: c } = new URL(s, document.location.toString());
    return `${a}//${l}${c}`;
  }
  return o.length > 0 && O.error("found multiple candidates for event source"), null;
}, "getEventSourceUrl");
var { document: yo, location: mo } = R;
var gs = "storybook-channel";
var gd = { allowFunction: false, maxDepth: 25 };
var ho = class ho2 {
  constructor(e) {
    this.config = e;
    this.connected = false;
    if (this.buffer = [], typeof (R == null ? void 0 : R.addEventListener) == "function" && R.addEventListener("message", this.handleEvent.bind(this), false), e.page !== "manager" && e.page !== "preview")
      throw new Error(`postmsg-channel: "config.page" cannot be "${e.page}"`);
  }
  setHandler(e) {
    this.handler = (...t) => {
      e.apply(this, t), !this.connected && this.getLocalFrame().length && (this.flush(), this.connected = true);
    };
  }
  /**
   * Sends `event` to the associated window. If the window does not yet exist the event will be
   * stored in a buffer and sent when the window exists.
   *
   * @param event
   */
  send(e, t) {
    let {
      target: o,
      // telejson options
      allowRegExp: s,
      allowFunction: a,
      allowSymbol: l,
      allowDate: c,
      allowError: i,
      allowUndefined: p,
      allowClass: u,
      maxDepth: d,
      space: h,
      lazyEval: S
    } = t || {}, m = Object.fromEntries(
      Object.entries({
        allowRegExp: s,
        allowFunction: a,
        allowSymbol: l,
        allowDate: c,
        allowError: i,
        allowUndefined: p,
        allowClass: u,
        maxDepth: d,
        space: h,
        lazyEval: S
      }).filter(([g, b]) => typeof b < "u")
    ), T = {
      ...gd,
      ...R.CHANNEL_OPTIONS || {},
      ...m
    }, y = this.getFrames(o), x = new URLSearchParams((mo == null ? void 0 : mo.search) || ""), A = tt(
      {
        key: gs,
        event: e,
        refId: x.get("refId")
      },
      T
    );
    return y.length ? (this.buffer.length && this.flush(), y.forEach((g) => {
      try {
        g.postMessage(A, "*");
      } catch {
        O.error("sending over postmessage fail");
      }
    }), Promise.resolve(null)) : new Promise((g, b) => {
      this.buffer.push({ event: e, resolve: g, reject: b });
    });
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((t) => {
      this.send(t.event).then(t.resolve).catch(t.reject);
    });
  }
  getFrames(e) {
    if (this.config.page === "manager") {
      let o = Array.from(
        yo.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      ).flatMap((s) => {
        try {
          return s.contentWindow && s.dataset.isStorybook !== void 0 && s.id === e ? [s.contentWindow] : [];
        } catch {
          return [];
        }
      });
      return (o == null ? void 0 : o.length) ? o : this.getCurrentFrames();
    }
    return R && R.parent && R.parent !== R.self ? [R.parent] : [];
  }
  getCurrentFrames() {
    return this.config.page === "manager" ? Array.from(
      yo.querySelectorAll('[data-is-storybook="true"]')
    ).flatMap((t) => t.contentWindow ? [t.contentWindow] : []) : R && R.parent ? [R.parent] : [];
  }
  getLocalFrame() {
    return this.config.page === "manager" ? Array.from(
      yo.querySelectorAll("#storybook-preview-iframe")
    ).flatMap((t) => t.contentWindow ? [t.contentWindow] : []) : R && R.parent ? [R.parent] : [];
  }
  handleEvent(e) {
    try {
      let { data: t } = e, { key: o, event: s, refId: a } = typeof t == "string" && fr(t) ? ot(t, R.CHANNEL_OPTIONS || {}) : t;
      if (o === gs) {
        let l = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #1EA7FD; background: black"> preview </span>', c = Object.values(fe).includes(s.type) ? `<span style="color: #FF4785">${s.type}</span>` : `<span style="color: #FFAE00">${s.type}</span>`;
        if (a && (s.refId = a), s.source = this.config.page === "preview" ? e.origin : hs(e), !s.source) {
          K.error(
            `${l} received ${c} but was unable to determine the source of the event`
          );
          return;
        }
        let i = `${l} received ${c} (${t.length})`;
        K.debug(
          mo.origin !== s.source ? i : `${i} <span style="color: gray">(on ${mo.origin} from ${s.source})</span>`,
          ...s.args
        ), le(this.handler, "ChannelHandler should be set"), this.handler(s);
      }
    } catch (t) {
      O.error(t);
    }
  }
};
n(ho, "PostMessageTransport");
var $e = ho;
var { WebSocket: Sd } = R;
var go = class go2 {
  constructor({ url: e, onError: t, page: o }) {
    this.buffer = [];
    this.isReady = false;
    this.socket = new Sd(e), this.socket.onopen = () => {
      this.isReady = true, this.flush();
    }, this.socket.onmessage = ({ data: s }) => {
      let a = typeof s == "string" && fr(s) ? ot(s) : s;
      le(this.handler, "WebsocketTransport handler should be set"), this.handler(a);
    }, this.socket.onerror = (s) => {
      t && t(s);
    }, this.socket.onclose = () => {
      le(this.handler, "WebsocketTransport handler should be set"), this.handler({ type: kt, args: [], from: o || "preview" });
    };
  }
  setHandler(e) {
    this.handler = e;
  }
  send(e) {
    this.isReady ? this.sendNow(e) : this.sendLater(e);
  }
  sendLater(e) {
    this.buffer.push(e);
  }
  sendNow(e) {
    let t = tt(e, {
      maxDepth: 15,
      allowFunction: false,
      ...R.CHANNEL_OPTIONS
    });
    this.socket.send(t);
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((t) => this.send(t));
  }
};
n(go, "WebsocketTransport");
var Ye = go;
var { CONFIG_TYPE: bd } = R;
var Td = ye;
function Ed({ page: r, extraTransports: e = [] }) {
  let t = [new $e({ page: r }), ...e];
  if (bd === "DEVELOPMENT") {
    let o = window.location.protocol === "http:" ? "ws" : "wss", { hostname: s, port: a } = window.location, l = `${o}://${s}:${a}/storybook-server-channel`;
    t.push(new Ye({ url: l, onError: n(() => {
    }, "onError"), page: r }));
  }
  return new ye({ transports: t });
}
n(Ed, "createBrowserChannel");
var mr = {};
Ae(mr, {
  Addon_TypesEnum: () => Ss
});
var Ss = ((p) => (p.TAB = "tab", p.PANEL = "panel", p.TOOL = "tool", p.TOOLEXTRA = "toolextra", p.PREVIEW = "preview", p.experimental_PAGE = "page", p.experimental_SIDEBAR_BOTTOM = "sidebar-bottom", p.experimental_SIDEBAR_TOP = "sidebar-top", p.experimental_TEST_PROVIDER = "test-provider", p))(Ss || {});
var Ur = {};
Ae(Ur, {
  DocsContext: () => pe,
  HooksContext: () => he,
  Preview: () => De,
  PreviewWeb: () => Mr,
  PreviewWithSelection: () => Ne,
  ReporterAPI: () => Se,
  StoryStore: () => Ie,
  UrlStore: () => je,
  WebView: () => qe,
  addons: () => Z,
  applyHooks: () => st,
  combineArgs: () => Je,
  combineParameters: () => $,
  composeConfigs: () => Oe,
  composeStepRunners: () => St,
  composeStories: () => wa,
  composeStory: () => yn,
  createPlaywrightTest: () => va,
  decorateStory: () => cn,
  defaultDecorateStory: () => mt,
  filterArgTypes: () => Cr,
  inferControls: () => rr,
  makeDecorator: () => Is,
  mockChannel: () => nt,
  normalizeStory: () => Ze,
  prepareMeta: () => ht,
  prepareStory: () => er,
  sanitizeStoryContextUpdate: () => pn,
  setDefaultProjectAnnotations: () => Aa,
  setProjectAnnotations: () => _a,
  simulateDOMContentLoaded: () => qr,
  simulatePageLoad: () => Hn,
  sortStoriesV7: () => Na,
  useArgs: () => Cs,
  useCallback: () => Ke,
  useChannel: () => vs,
  useEffect: () => Ao,
  useGlobals: () => Os,
  useMemo: () => Es,
  useParameter: () => Ps,
  useReducer: () => ws,
  useRef: () => xs,
  useState: () => _s,
  useStoryContext: () => hr,
  userOrAutoTitle: () => Ia,
  userOrAutoTitleFromSpecifier: () => gn
});
function nt() {
  let r = {
    setHandler: n(() => {
    }, "setHandler"),
    send: n(() => {
    }, "send")
  };
  return new ye({ transport: r });
}
n(nt, "mockChannel");
var To = class To2 {
  constructor() {
    this.getChannel = n(() => {
      if (!this.channel) {
        let e = nt();
        return this.setChannel(e), e;
      }
      return this.channel;
    }, "getChannel");
    this.ready = n(() => this.promise, "ready");
    this.hasChannel = n(() => !!this.channel, "hasChannel");
    this.setChannel = n((e) => {
      this.channel = e, this.resolve();
    }, "setChannel");
    this.promise = new Promise((e) => {
      this.resolve = () => e(this.getChannel());
    });
  }
};
n(To, "AddonStore");
var bo = To;
var So = "__STORYBOOK_ADDONS_PREVIEW";
function Rd() {
  return R[So] || (R[So] = new bo()), R[So];
}
n(Rd, "getAddonsStore");
var Z = Rd();
var _o = class _o2 {
  constructor() {
    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;
    this.renderListener = n((e) => {
      var _a2;
      e === ((_a2 = this.currentContext) == null ? void 0 : _a2.id) && (this.triggerEffects(), this.currentContext = null, this.removeRenderListeners());
    }, "renderListener");
    this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap(), this.mountedDecorators = /* @__PURE__ */ new Set(), this.prevMountedDecorators = /* @__PURE__ */ new Set(), this.currentHooks = [], this.nextHookIndex = 0, this.currentPhase = "NONE", this.currentEffects = [], this.prevEffects = [], this.currentDecoratorName = null, this.hasUpdates = false, this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((e) => {
      e.destroy && e.destroy();
    }), this.init(), this.removeRenderListeners();
  }
  getNextHook() {
    let e = this.currentHooks[this.nextHookIndex];
    return this.nextHookIndex += 1, e;
  }
  triggerEffects() {
    this.prevEffects.forEach((e) => {
      !this.currentEffects.includes(e) && e.destroy && e.destroy();
    }), this.currentEffects.forEach((e) => {
      this.prevEffects.includes(e) || (e.destroy = e.create());
    }), this.prevEffects = this.currentEffects, this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners(), Z.getChannel().on(Be, this.renderListener);
  }
  removeRenderListeners() {
    Z.getChannel().removeListener(Be, this.renderListener);
  }
};
n(_o, "HooksContext");
var he = _o;
function bs(r) {
  let e = n((...t) => {
    let { hooks: o } = typeof t[0] == "function" ? t[1] : t[0], s = o.currentPhase, a = o.currentHooks, l = o.nextHookIndex, c = o.currentDecoratorName;
    o.currentDecoratorName = r.name, o.prevMountedDecorators.has(r) ? (o.currentPhase = "UPDATE", o.currentHooks = o.hookListsMap.get(r) || []) : (o.currentPhase = "MOUNT", o.currentHooks = [], o.hookListsMap.set(r, o.currentHooks), o.prevMountedDecorators.add(r)), o.nextHookIndex = 0;
    let i = R.STORYBOOK_HOOKS_CONTEXT;
    R.STORYBOOK_HOOKS_CONTEXT = o;
    let p = r(...t);
    if (R.STORYBOOK_HOOKS_CONTEXT = i, o.currentPhase === "UPDATE" && o.getNextHook() != null)
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return o.currentPhase = s, o.currentHooks = a, o.nextHookIndex = l, o.currentDecoratorName = c, p;
  }, "hookified");
  return e.originalFn = r, e;
}
n(bs, "hookify");
var Eo = 0;
var xd = 25;
var st = n((r) => (e, t) => {
  let o = r(
    bs(e),
    t.map((s) => bs(s))
  );
  return (s) => {
    let { hooks: a } = s;
    a.prevMountedDecorators ?? (a.prevMountedDecorators = /* @__PURE__ */ new Set()), a.mountedDecorators = /* @__PURE__ */ new Set([e, ...t]), a.currentContext = s, a.hasUpdates = false;
    let l = o(s);
    for (Eo = 1; a.hasUpdates; )
      if (a.hasUpdates = false, a.currentEffects = [], l = o(s), Eo += 1, Eo > xd)
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
    return a.addRenderListeners(), l;
  };
}, "applyHooks");
var Ad = n((r, e) => r.length === e.length && r.every((t, o) => t === e[o]), "areDepsEqual");
var Ro = n(
  () => new Error("Storybook preview hooks can only be called inside decorators and story functions."),
  "invalidHooksError"
);
function Ts() {
  return R.STORYBOOK_HOOKS_CONTEXT || null;
}
n(Ts, "getHooksContextOrNull");
function xo() {
  let r = Ts();
  if (r == null)
    throw Ro();
  return r;
}
n(xo, "getHooksContextOrThrow");
function _d(r, e, t) {
  let o = xo();
  if (o.currentPhase === "MOUNT") {
    t != null && !Array.isArray(t) && O.warn(
      `${r} received a final argument that is not an array (instead, received ${t}). When specified, the final argument must be an array.`
    );
    let s = { name: r, deps: t };
    return o.currentHooks.push(s), e(s), s;
  }
  if (o.currentPhase === "UPDATE") {
    let s = o.getNextHook();
    if (s == null)
      throw new Error("Rendered more hooks than during the previous render.");
    return s.name !== r && O.warn(
      `Storybook has detected a change in the order of Hooks${o.currentDecoratorName ? ` called by ${o.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`
    ), t != null && s.deps == null && O.warn(
      `${r} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`
    ), t != null && s.deps != null && t.length !== s.deps.length && O.warn(`The final argument passed to ${r} changed size between renders. The order and size of this array must remain constant.
Previous: ${s.deps}
Incoming: ${t}`), (t == null || s.deps == null || !Ad(t, s.deps)) && (e(s), s.deps = t), s;
  }
  throw Ro();
}
n(_d, "useHook");
function at(r, e, t) {
  let { memoizedState: o } = _d(
    r,
    (s) => {
      s.memoizedState = e();
    },
    t
  );
  return o;
}
n(at, "useMemoLike");
function Es(r, e) {
  return at("useMemo", r, e);
}
n(Es, "useMemo");
function Ke(r, e) {
  return at("useCallback", () => r, e);
}
n(Ke, "useCallback");
function Rs(r, e) {
  return at(r, () => ({ current: e }), []);
}
n(Rs, "useRefLike");
function xs(r) {
  return Rs("useRef", r);
}
n(xs, "useRef");
function wd() {
  let r = Ts();
  if (r != null && r.currentPhase !== "NONE")
    r.hasUpdates = true;
  else
    try {
      Z.getChannel().emit(ar);
    } catch {
      O.warn("State updates of Storybook preview hooks work only in browser");
    }
}
n(wd, "triggerUpdate");
function As(r, e) {
  let t = Rs(
    r,
    // @ts-expect-error S type should never be function, but there's no way to tell that to TypeScript
    typeof e == "function" ? e() : e
  ), o = n((s) => {
    t.current = typeof s == "function" ? s(t.current) : s, wd();
  }, "setState");
  return [t.current, o];
}
n(As, "useStateLike");
function _s(r) {
  return As("useState", r);
}
n(_s, "useState");
function ws(r, e, t) {
  let o = t != null ? () => t(e) : e, [s, a] = As("useReducer", o);
  return [s, n((c) => a((i) => r(i, c)), "dispatch")];
}
n(ws, "useReducer");
function Ao(r, e) {
  let t = xo(), o = at("useEffect", () => ({ create: r }), e);
  t.currentEffects.includes(o) || t.currentEffects.push(o);
}
n(Ao, "useEffect");
function vs(r, e = []) {
  let t = Z.getChannel();
  return Ao(() => (Object.entries(r).forEach(([o, s]) => t.on(o, s)), () => {
    Object.entries(r).forEach(
      ([o, s]) => t.removeListener(o, s)
    );
  }), [...Object.keys(r), ...e]), Ke(t.emit.bind(t), [t]);
}
n(vs, "useChannel");
function hr() {
  let { currentContext: r } = xo();
  if (r == null)
    throw Ro();
  return r;
}
n(hr, "useStoryContext");
function Ps(r, e) {
  let { parameters: t } = hr();
  if (r)
    return t[r] ?? e;
}
n(Ps, "useParameter");
function Cs() {
  let r = Z.getChannel(), { id: e, args: t } = hr(), o = Ke(
    (a) => r.emit(cr, { storyId: e, updatedArgs: a }),
    [r, e]
  ), s = Ke(
    (a) => r.emit(ir, { storyId: e, argNames: a }),
    [r, e]
  );
  return [t, o, s];
}
n(Cs, "useArgs");
function Os() {
  let r = Z.getChannel(), { globals: e } = hr(), t = Ke(
    (o) => r.emit(lr, { globals: o }),
    [r]
  );
  return [e, t];
}
n(Os, "useGlobals");
var Is = n(({
  name: r,
  parameterName: e,
  wrapper: t,
  skipIfNoParametersOrOptions: o = false
}) => {
  let s = n((a) => (l, c) => {
    let i = c.parameters && c.parameters[e];
    return i && i.disable || o && !a && !i ? l(c) : t(l, c, {
      options: a,
      parameters: i
    });
  }, "decorator");
  return (...a) => typeof a[0] == "function" ? s()(...a) : (...l) => {
    if (l.length > 1)
      return a.length > 1 ? s(a)(...l) : s(...a)(...l);
    throw new Error(
      `Passing stories directly into ${r}() is not allowed,
        instead use addDecorator(${r}) and pass options with the '${e}' parameter`
    );
  };
}, "makeDecorator");
var Pr = {};
Ae(Pr, {
  CalledExtractOnStoreError: () => Sr,
  CalledPreviewMethodBeforeInitializationError: () => G,
  Category: () => Ds,
  EmptyIndexError: () => Rr,
  ImplicitActionsDuringRendering: () => wo,
  MdxFileWithNoCsfReferencesError: () => Er,
  MissingRenderToCanvasError: () => br,
  MissingStoryAfterHmrError: () => gr,
  MissingStoryFromCsfFileError: () => Ar,
  MountMustBeDestructuredError: () => ve,
  NextJsSharpError: () => vo,
  NextjsRouterMocksNotAvailable: () => Po,
  NoRenderFunctionError: () => wr,
  NoStoryMatchError: () => xr,
  NoStoryMountedError: () => vr,
  StoryIndexFetchError: () => Tr,
  StoryStoreAccessedBeforeInitializationError: () => _r,
  UnknownArgTypesError: () => Co,
  UnsupportedViewportDimensionError: () => Oo
});
function P(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  var o = Array.from(typeof r == "string" ? [r] : r);
  o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var s = o.reduce(function(c, i) {
    var p = i.match(/\n([\t ]+|(?!\s).)/g);
    return p ? c.concat(p.map(function(u) {
      var d, h;
      return (h = (d = u.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && h !== void 0 ? h : 0;
    })) : c;
  }, []);
  if (s.length) {
    var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, s) + "}", "g");
    o = o.map(function(c) {
      return c.replace(a, `
`);
    });
  }
  o[0] = o[0].replace(/^\r?\n/, "");
  var l = o[0];
  return e.forEach(function(c, i) {
    var p = l.match(/(?:^|\n)( *)$/), u = p ? p[1] : "", d = c;
    typeof c == "string" && c.includes(`
`) && (d = String(c).split(`
`).map(function(h, S) {
      return S === 0 ? h : "" + u + h;
    }).join(`
`)), l += d + o[i + 1];
  }), l;
}
n(P, "dedent");
function Fs({
  code: r,
  category: e
}) {
  let t = String(r).padStart(4, "0");
  return `SB_${e}_${t}`;
}
n(Fs, "parseErrorCode");
var it = class it2 extends Error {
  constructor(t) {
    super(it2.getFullMessage(t));
    this.data = {};
    this.fromStorybook = true;
    this.category = t.category, this.documentation = t.documentation ?? false, this.code = t.code;
  }
  get fullErrorCode() {
    return Fs({ code: this.code, category: this.category });
  }
  /** Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>. */
  get name() {
    let t = this.constructor.name;
    return `${this.fullErrorCode} (${t})`;
  }
  /** Generates the error message along with additional documentation link (if applicable). */
  static getFullMessage({
    documentation: t,
    code: o,
    category: s,
    message: a
  }) {
    let l;
    return t === true ? l = `https://storybook.js.org/error/${Fs({ code: o, category: s })}` : typeof t == "string" ? l = t : Array.isArray(t) && (l = `
${t.map((c) => `	- ${c}`).join(`
`)}`), `${a}${l != null ? `

More info: ${l}
` : ""}`;
  }
};
n(it, "StorybookError");
var q = it;
var Ds = ((b) => (b.BLOCKS = "BLOCKS", b.DOCS_TOOLS = "DOCS-TOOLS", b.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER", b.PREVIEW_CHANNELS = "PREVIEW_CHANNELS", b.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS", b.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER", b.PREVIEW_API = "PREVIEW_API", b.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM", b.PREVIEW_ROUTER = "PREVIEW_ROUTER", b.PREVIEW_THEMING = "PREVIEW_THEMING", b.RENDERER_HTML = "RENDERER_HTML", b.RENDERER_PREACT = "RENDERER_PREACT", b.RENDERER_REACT = "RENDERER_REACT", b.RENDERER_SERVER = "RENDERER_SERVER", b.RENDERER_SVELTE = "RENDERER_SVELTE", b.RENDERER_VUE = "RENDERER_VUE", b.RENDERER_VUE3 = "RENDERER_VUE3", b.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS", b.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS", b.ADDON_VITEST = "ADDON_VITEST", b))(Ds || {});
var Io = class Io2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 1,
      message: P`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`
    });
    this.data = t;
  }
};
n(Io, "MissingStoryAfterHmrError");
var gr = Io;
var Fo = class Fo2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 2,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function",
      message: P`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${t.deprecated ? `
This is deprecated and won't work in Storybook 8 anymore.
` : ""}
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`
    });
    this.data = t;
  }
};
n(Fo, "ImplicitActionsDuringRendering");
var wo = Fo;
var Do = class Do2 extends q {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 3,
      message: P`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`
    });
  }
};
n(Do, "CalledExtractOnStoreError");
var Sr = Do;
var No = class No2 extends q {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 4,
      message: P`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field"
    });
  }
};
n(No, "MissingRenderToCanvasError");
var br = No;
var ko = class ko2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 5,
      message: P`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`
    });
    this.data = t;
  }
};
n(ko, "CalledPreviewMethodBeforeInitializationError");
var G = ko;
var Lo = class Lo2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 6,
      message: P`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`
    });
    this.data = t;
  }
};
n(Lo, "StoryIndexFetchError");
var Tr = Lo;
var jo = class jo2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 7,
      message: P`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`
    });
    this.data = t;
  }
};
n(jo, "MdxFileWithNoCsfReferencesError");
var Er = jo;
var Mo = class Mo2 extends q {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 8,
      message: P`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`
    });
  }
};
n(Mo, "EmptyIndexError");
var Rr = Mo;
var qo = class qo2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 9,
      message: P`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`
    });
    this.data = t;
  }
};
n(qo, "NoStoryMatchError");
var xr = qo;
var Uo = class Uo2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 10,
      message: P`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`
    });
    this.data = t;
  }
};
n(Uo, "MissingStoryFromCsfFileError");
var Ar = Uo;
var Bo = class Bo2 extends q {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 11,
      message: P`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`
    });
  }
};
n(Bo, "StoryStoreAccessedBeforeInitializationError");
var _r = Bo;
var Go = class Go2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 12,
      message: P`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`
    });
    this.data = t;
  }
};
n(Go, "MountMustBeDestructuredError");
var ve = Go;
var Vo = class Vo2 extends q {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 14,
      message: P`
        No render function available for storyId '${t.id}'
      `
    });
    this.data = t;
  }
};
n(Vo, "NoRenderFunctionError");
var wr = Vo;
var Ho = class Ho2 extends q {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 15,
      message: P`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `
    });
  }
};
n(Ho, "NoStoryMountedError");
var vr = Ho;
var zo = class zo2 extends q {
  constructor() {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 1,
      documentation: "https://storybook.js.org/docs/get-started/nextjs#faq",
      message: P`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `
    });
  }
};
n(zo, "NextJsSharpError");
var vo = zo;
var Wo = class Wo2 extends q {
  constructor(t) {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 2,
      message: P`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `
    });
    this.data = t;
  }
};
n(Wo, "NextjsRouterMocksNotAvailable");
var Po = Wo;
var $o = class $o2 extends q {
  constructor(t) {
    super({
      category: "DOCS-TOOLS",
      code: 1,
      documentation: "https://github.com/storybookjs/storybook/issues/26606",
      message: P`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `
    });
    this.data = t;
  }
};
n($o, "UnknownArgTypesError");
var Co = $o;
var Yo = class Yo2 extends q {
  constructor(t) {
    super({
      category: "ADDON_VITEST",
      code: 1,
      // TODO: Add documentation about viewports support
      // documentation: '',
      message: P`
        Encountered an unsupported value "${t.value}" when setting the viewport ${t.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `
    });
    this.data = t;
  }
};
n(Yo, "UnsupportedViewportDimensionError");
var Oo = Yo;
function Ko(r, e) {
  let t = {}, o = Object.entries(r);
  for (let s = 0; s < o.length; s++) {
    let [a, l] = o[s];
    e(l, a) || (t[a] = l);
  }
  return t;
}
n(Ko, "omitBy");
function Xo(r, e) {
  let t = {};
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
  }
  return t;
}
n(Xo, "pick");
function Jo(r, e) {
  let t = {}, o = Object.entries(r);
  for (let s = 0; s < o.length; s++) {
    let [a, l] = o[s];
    e(l, a) && (t[a] = l);
  }
  return t;
}
n(Jo, "pickBy");
function W(r) {
  if (typeof r != "object" || r == null)
    return false;
  if (Object.getPrototypeOf(r) === null)
    return true;
  if (r.toString() !== "[object Object]")
    return false;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e;
}
n(W, "isPlainObject");
function ee(r, e) {
  let t = {}, o = Object.keys(r);
  for (let s = 0; s < o.length; s++) {
    let a = o[s], l = r[a];
    t[a] = e(l, a, r);
  }
  return t;
}
n(ee, "mapValues");
var Ns = "[object RegExp]";
var ks = "[object String]";
var Ls = "[object Number]";
var js = "[object Boolean]";
var Qo = "[object Arguments]";
var Ms = "[object Symbol]";
var qs = "[object Date]";
var Us = "[object Map]";
var Bs = "[object Set]";
var Gs = "[object Array]";
var Vs = "[object Function]";
var Hs = "[object ArrayBuffer]";
var lt = "[object Object]";
var zs = "[object Error]";
var Ws = "[object DataView]";
var $s = "[object Uint8Array]";
var Ys = "[object Uint8ClampedArray]";
var Ks = "[object Uint16Array]";
var Xs = "[object Uint32Array]";
var Js = "[object BigUint64Array]";
var Qs = "[object Int8Array]";
var Zs = "[object Int16Array]";
var ea = "[object Int32Array]";
var ra = "[object BigInt64Array]";
var ta = "[object Float32Array]";
var oa = "[object Float64Array]";
function Zo(r) {
  return Object.getOwnPropertySymbols(r).filter((e) => Object.prototype.propertyIsEnumerable.call(r, e));
}
n(Zo, "getSymbols");
function en(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
n(en, "getTag");
function rn(r, e) {
  if (typeof r == typeof e)
    switch (typeof r) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return r === e;
      case "number":
        return r === e || Object.is(r, e);
      case "function":
        return r === e;
      case "object":
        return ce(r, e);
    }
  return ce(r, e);
}
n(rn, "isEqual");
function ce(r, e, t) {
  if (Object.is(r, e))
    return true;
  let o = en(r), s = en(e);
  if (o === Qo && (o = lt), s === Qo && (s = lt), o !== s)
    return false;
  switch (o) {
    case ks:
      return r.toString() === e.toString();
    case Ls: {
      let c = r.valueOf(), i = e.valueOf();
      return c === i || Number.isNaN(c) && Number.isNaN(i);
    }
    case js:
    case qs:
    case Ms:
      return Object.is(r.valueOf(), e.valueOf());
    case Ns:
      return r.source === e.source && r.flags === e.flags;
    case Vs:
      return r === e;
  }
  t = t ?? /* @__PURE__ */ new Map();
  let a = t.get(r), l = t.get(e);
  if (a != null && l != null)
    return a === e;
  t.set(r, e), t.set(e, r);
  try {
    switch (o) {
      case Us: {
        if (r.size !== e.size)
          return false;
        for (let [c, i] of r.entries())
          if (!e.has(c) || !ce(i, e.get(c), t))
            return false;
        return true;
      }
      case Bs: {
        if (r.size !== e.size)
          return false;
        let c = Array.from(r.values()), i = Array.from(e.values());
        for (let p = 0; p < c.length; p++) {
          let u = c[p], d = i.findIndex((h) => ce(u, h, t));
          if (d === -1)
            return false;
          i.splice(d, 1);
        }
        return true;
      }
      case Gs:
      case $s:
      case Ys:
      case Ks:
      case Xs:
      case Js:
      case Qs:
      case Zs:
      case ea:
      case ra:
      case ta:
      case oa: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r) !== Buffer.isBuffer(e) || r.length !== e.length)
          return false;
        for (let c = 0; c < r.length; c++)
          if (!ce(r[c], e[c], t))
            return false;
        return true;
      }
      case Hs:
        return r.byteLength !== e.byteLength ? false : ce(new Uint8Array(r), new Uint8Array(e), t);
      case Ws:
        return r.byteLength !== e.byteLength || r.byteOffset !== e.byteOffset ? false : ce(r.buffer, e.buffer, t);
      case zs:
        return r.name === e.name && r.message === e.message;
      case lt: {
        if (!(ce(r.constructor, e.constructor, t) || W(r) && W(e)))
          return false;
        let i = [...Object.keys(r), ...Zo(r)], p = [...Object.keys(e), ...Zo(e)];
        if (i.length !== p.length)
          return false;
        for (let u = 0; u < i.length; u++) {
          let d = i[u], h = r[d];
          if (!Object.prototype.hasOwnProperty.call(e, d))
            return false;
          let S = e[d];
          if (!ce(h, S, t))
            return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t.delete(r), t.delete(e);
  }
}
n(ce, "areObjectsEqual");
var bt = ue(Qr(), 1);
var Xe = Symbol("incompatible");
var tn = n((r, e) => {
  let t = e.type;
  if (r == null || !t || e.mapping)
    return r;
  switch (t.name) {
    case "string":
      return String(r);
    case "enum":
      return r;
    case "number":
      return Number(r);
    case "boolean":
      return String(r) === "true";
    case "array":
      return !t.value || !Array.isArray(r) ? Xe : r.reduce((o, s, a) => {
        let l = tn(s, { type: t.value });
        return l !== Xe && (o[a] = l), o;
      }, new Array(r.length));
    case "object":
      return typeof r == "string" || typeof r == "number" ? r : !t.value || typeof r != "object" ? Xe : Object.entries(r).reduce((o, [s, a]) => {
        let l = tn(a, { type: t.value[s] });
        return l === Xe ? o : Object.assign(o, { [s]: l });
      }, {});
    default:
      return Xe;
  }
}, "map");
var na = n((r, e) => Object.entries(r).reduce((t, [o, s]) => {
  if (!e[o])
    return t;
  let a = tn(s, e[o]);
  return a === Xe ? t : Object.assign(t, { [o]: a });
}, {}), "mapArgsToTypes");
var Je = n((r, e) => Array.isArray(r) && Array.isArray(e) ? e.reduce(
  (t, o, s) => (t[s] = Je(r[s], e[s]), t),
  [...r]
).filter((t) => t !== void 0) : !W(r) || !W(e) ? e : Object.keys({ ...r, ...e }).reduce((t, o) => {
  if (o in e) {
    let s = Je(r[o], e[o]);
    s !== void 0 && (t[o] = s);
  } else
    t[o] = r[o];
  return t;
}, {}), "combineArgs");
var sa = n((r, e) => Object.entries(e).reduce((t, [o, { options: s }]) => {
  function a() {
    return o in r && (t[o] = r[o]), t;
  }
  if (n(a, "allowArg"), !s)
    return a();
  if (!Array.isArray(s))
    return L.error(P`
        Invalid argType: '${o}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `), a();
  if (s.some((d) => d && ["object", "function"].includes(typeof d)))
    return L.error(P`
        Invalid argType: '${o}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `), a();
  let l = Array.isArray(r[o]), c = l && r[o].findIndex((d) => !s.includes(d)), i = l && c === -1;
  if (r[o] === void 0 || s.includes(r[o]) || i)
    return a();
  let p = l ? `${o}[${c}]` : o, u = s.map((d) => typeof d == "string" ? `'${d}'` : String(d)).join(", ");
  return L.warn(`Received illegal value for '${p}'. Supported options: ${u}`), t;
}, {}), "validateOptions");
var Pe = Symbol("Deeply equal");
var Qe = n((r, e) => {
  if (typeof r != typeof e)
    return e;
  if (rn(r, e))
    return Pe;
  if (Array.isArray(r) && Array.isArray(e)) {
    let t = e.reduce((o, s, a) => {
      let l = Qe(r[a], s);
      return l !== Pe && (o[a] = l), o;
    }, new Array(e.length));
    return e.length >= r.length ? t : t.concat(new Array(r.length - e.length).fill(void 0));
  }
  return W(r) && W(e) ? Object.keys({ ...r, ...e }).reduce((t, o) => {
    let s = Qe(r == null ? void 0 : r[o], e == null ? void 0 : e[o]);
    return s === Pe ? t : Object.assign(t, { [o]: s });
  }, {}) : e;
}, "deepDiff");
var on = "UNTARGETED";
function aa({
  args: r,
  argTypes: e
}) {
  let t = {};
  return Object.entries(r).forEach(([o, s]) => {
    let { target: a = on } = e[o] || {};
    t[a] = t[a] || {}, t[a][o] = s;
  }), t;
}
n(aa, "groupArgsByTarget");
function vd(r) {
  return Object.keys(r).forEach((e) => r[e] === void 0 && delete r[e]), r;
}
n(vd, "deleteUndefined");
var nn = class nn2 {
  constructor() {
    this.initialArgsByStoryId = {};
    this.argsByStoryId = {};
  }
  get(e) {
    if (!(e in this.argsByStoryId))
      throw new Error(`No args known for ${e} -- has it been rendered yet?`);
    return this.argsByStoryId[e];
  }
  setInitial(e) {
    if (!this.initialArgsByStoryId[e.id])
      this.initialArgsByStoryId[e.id] = e.initialArgs, this.argsByStoryId[e.id] = e.initialArgs;
    else if (this.initialArgsByStoryId[e.id] !== e.initialArgs) {
      let t = Qe(this.initialArgsByStoryId[e.id], this.argsByStoryId[e.id]);
      this.initialArgsByStoryId[e.id] = e.initialArgs, this.argsByStoryId[e.id] = e.initialArgs, t !== Pe && this.updateFromDelta(e, t);
    }
  }
  updateFromDelta(e, t) {
    let o = sa(t, e.argTypes);
    this.argsByStoryId[e.id] = Je(this.argsByStoryId[e.id], o);
  }
  updateFromPersisted(e, t) {
    let o = na(t, e.argTypes);
    return this.updateFromDelta(e, o);
  }
  update(e, t) {
    if (!(e in this.argsByStoryId))
      throw new Error(`No args known for ${e} -- has it been rendered yet?`);
    this.argsByStoryId[e] = vd({
      ...this.argsByStoryId[e],
      ...t
    });
  }
};
n(nn, "ArgsStore");
var ct = nn;
var pt = n((r = {}) => Object.entries(r).reduce((e, [t, { defaultValue: o }]) => (typeof o < "u" && (e[t] = o), e), {}), "getValuesFromArgTypes");
var sn = class sn2 {
  constructor({
    globals: e = {},
    globalTypes: t = {}
  }) {
    this.set({ globals: e, globalTypes: t });
  }
  set({ globals: e = {}, globalTypes: t = {} }) {
    let o = this.initialGlobals && Qe(this.initialGlobals, this.globals);
    this.allowedGlobalNames = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
    let s = pt(t);
    this.initialGlobals = { ...s, ...e }, this.globals = this.initialGlobals, o && o !== Pe && this.updateFromPersisted(o);
  }
  filterAllowedGlobals(e) {
    return Object.entries(e).reduce((t, [o, s]) => (this.allowedGlobalNames.has(o) ? t[o] = s : O.warn(
      `Attempted to set a global (${o}) that is not defined in initial globals or globalTypes`
    ), t), {});
  }
  updateFromPersisted(e) {
    let t = this.filterAllowedGlobals(e);
    this.globals = { ...this.globals, ...t };
  }
  get() {
    return this.globals;
  }
  update(e) {
    this.globals = { ...this.globals, ...this.filterAllowedGlobals(e) };
  }
};
n(sn, "GlobalsStore");
var dt = sn;
var ia = ue(Qr(), 1);
var Pd = (0, ia.default)(1)(
  (r) => Object.values(r).reduce(
    (e, t) => (e[t.importPath] = e[t.importPath] || t, e),
    {}
  )
);
var an = class an2 {
  constructor({ entries: e } = { v: 5, entries: {} }) {
    this.entries = e;
  }
  entryFromSpecifier(e) {
    let t = Object.values(this.entries);
    if (e === "*")
      return t[0];
    if (typeof e == "string")
      return this.entries[e] ? this.entries[e] : t.find((a) => a.id.startsWith(e));
    let { name: o, title: s } = e;
    return t.find((a) => a.name === o && a.title === s);
  }
  storyIdToEntry(e) {
    let t = this.entries[e];
    if (!t)
      throw new gr({ storyId: e });
    return t;
  }
  importPathToEntry(e) {
    return Pd(this.entries)[e];
  }
};
n(an, "StoryIndexStore");
var ut = an;
var Cd = n((r) => typeof r == "string" ? { name: r } : r, "normalizeType");
var Od = n((r) => typeof r == "string" ? { type: r } : r, "normalizeControl");
var Id = n((r, e) => {
  let { type: t, control: o, ...s } = r, a = {
    name: e,
    ...s
  };
  return t && (a.type = Cd(t)), o ? a.control = Od(o) : o === false && (a.control = { disable: true }), a;
}, "normalizeInputType");
var Ce = n((r) => ee(r, Id), "normalizeInputTypes");
var Fd = Object.create;
var da = Object.defineProperty;
var Dd = Object.getOwnPropertyDescriptor;
var Nd = Object.getOwnPropertyNames;
var kd = Object.getPrototypeOf;
var Ld = Object.prototype.hasOwnProperty;
var jd = n((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "E");
var Md = n(
  (r, e, t, o) => {
    if (e && typeof e == "object" || typeof e == "function") for (let s of Nd(e)) !Ld.call(r, s) && s !== t && da(r, s, { get: n(
      () => e[s],
      "get"
    ), enumerable: !(o = Dd(e, s)) || o.enumerable });
    return r;
  },
  "v"
);
var qd = n((r, e, t) => (t = r != null ? Fd(kd(r)) : {}, Md(e || !r || !r.__esModule ? da(t, "default", { value: r, enumerable: true }) : t, r)), "I");
var Ud = jd((r) => {
  Object.defineProperty(r, "__esModule", { value: true }), r.isEqual = /* @__PURE__ */ function() {
    var e = Object.prototype.toString, t = Object.getPrototypeOf, o = Object.getOwnPropertySymbols ? function(s) {
      return Object.keys(s).concat(Object.getOwnPropertySymbols(s));
    } : Object.keys;
    return function(s, a) {
      return n(function l(c, i, p) {
        var u, d, h, S = e.call(c), m = e.call(i);
        if (c === i) return true;
        if (c == null || i == null) return false;
        if (p.indexOf(c) > -1 && p.indexOf(i) > -1) return true;
        if (p.push(c, i), S != m || (u = o(c), d = o(i), u.length != d.length || u.some(function(T) {
          return !l(c[T], i[T], p);
        }))) return false;
        switch (S.slice(8, -1)) {
          case "Symbol":
            return c.valueOf() == i.valueOf();
          case "Date":
          case "Number":
            return +c == +i || +c != +c && +i != +i;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + c == "" + i;
          case "Set":
          case "Map":
            u = c.entries(), d = i.entries();
            do
              if (!l((h = u.next()).value, d.next().value, p)) return false;
            while (!h.done);
            return true;
          case "ArrayBuffer":
            c = new Uint8Array(c), i = new Uint8Array(i);
          case "DataView":
            c = new Uint8Array(c.buffer), i = new Uint8Array(i.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (c.length != i.length) return false;
            for (h = 0; h < c.length; h++) if ((h in c || h in i) && (h in c != h in i || !l(c[h], i[h], p))) return false;
            return true;
          case "Object":
            return l(t(c), t(i), p);
          default:
            return false;
        }
      }, "i")(s, a, []);
    };
  }();
});
function Bd(r) {
  return r.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (e, t, o, s) => `${t} ${o}${s}`).replace(
    /([a-z])([A-Z])/g,
    (e, t, o) => `${t} ${o}`
  ).replace(/([a-z])([0-9])/gi, (e, t, o) => `${t} ${o}`).replace(/([0-9])([a-z])/gi, (e, t, o) => `${t} ${o}`).replace(/(\s|^)(\w)/g, (e, t, o) => `${t}${o.toUpperCase()}`).replace(/ +/g, " ").trim();
}
n(Bd, "R");
var la = qd(Ud());
var ua = n((r) => r.map((e) => typeof e < "u").filter(Boolean).length, "S");
var Gd = n((r, e) => {
  let { exists: t, eq: o, neq: s, truthy: a } = r;
  if (ua([t, o, s, a]) > 1) throw new Error(`Invalid conditional test ${JSON.stringify({ exists: t, eq: o, neq: s })}`);
  if (typeof o < "u") return (0, la.isEqual)(e, o);
  if (typeof s < "u") return !(0, la.isEqual)(e, s);
  if (typeof t < "u") {
    let l = typeof e < "u";
    return t ? l : !l;
  }
  return typeof a > "u" || a ? !!e : !e;
}, "k");
var fa = n((r, e, t) => {
  if (!r.if) return true;
  let { arg: o, global: s } = r.if;
  if (ua([o, s]) !== 1) throw new Error(`Invalid conditional value ${JSON.stringify({ arg: o, global: s })}`);
  let a = o ? e[o] : t[s];
  return Gd(r.if, a);
}, "P");
var ln = n((r) => r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(
  /-+/g,
  "-"
).replace(/^-+/, "").replace(/-+$/, ""), "O");
var ca = n((r, e) => {
  let t = ln(r);
  if (t === "") throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);
  return t;
}, "f");
var ya = n((r, e) => `${ca(r, "kind")}${e ? `--${ca(e, "name")}` : ""}`, "G");
var ma = n((r) => Bd(r), "N");
function pa(r, e) {
  return Array.isArray(e) ? e.includes(r) : r.match(e);
}
n(pa, "m");
function ft(r, { includeStories: e, excludeStories: t }) {
  return r !== "__esModule" && (!e || pa(r, e)) && (!t || !pa(r, t));
}
n(ft, "M");
var ha = n((...r) => {
  let e = r.reduce((t, o) => (o.startsWith("!") ? t.delete(o.slice(1)) : t.add(o), t), /* @__PURE__ */ new Set());
  return Array.from(e);
}, "z");
var N = n((r) => Array.isArray(r) ? r : r ? [r] : [], "normalizeArrays");
var Vd = P`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
function Ze(r, e, t) {
  let o = e, s = typeof e == "function" ? e : null, { story: a } = o;
  a && (O.debug("deprecated story", a), oe(Vd));
  let l = ma(r), c = typeof o != "function" && o.name || o.storyName || (a == null ? void 0 : a.name) || l, i = [
    ...N(o.decorators),
    ...N(a == null ? void 0 : a.decorators)
  ], p = { ...a == null ? void 0 : a.parameters, ...o.parameters }, u = { ...a == null ? void 0 : a.args, ...o.args }, d = { ...a == null ? void 0 : a.argTypes, ...o.argTypes }, h = [...N(o.loaders), ...N(
    a == null ? void 0 : a.loaders
  )], S = [
    ...N(o.beforeEach),
    ...N(a == null ? void 0 : a.beforeEach)
  ], m = [
    ...N(o.experimental_afterEach),
    ...N(a == null ? void 0 : a.experimental_afterEach)
  ], { render: T, play: y, tags: x = [], globals: A = {} } = o, g = p.__id || ya(t.id, l);
  return {
    moduleExport: e,
    id: g,
    name: c,
    tags: x,
    decorators: i,
    parameters: p,
    args: u,
    argTypes: Ce(d),
    loaders: h,
    beforeEach: S,
    experimental_afterEach: m,
    globals: A,
    ...T && { render: T },
    ...s && { userStoryFn: s },
    ...y && { play: y }
  };
}
n(Ze, "normalizeStory");
function yt(r, e = r.title, t) {
  let { id: o, argTypes: s } = r;
  return {
    id: ln(o || e),
    ...r,
    title: e,
    ...s && { argTypes: Ce(s) },
    parameters: {
      fileName: t,
      ...r.parameters
    }
  };
}
n(yt, "normalizeComponentAnnotations");
var Hd = n((r) => {
  let { globals: e, globalTypes: t } = r;
  (e || t) && O.error(
    "Global args/argTypes can only be set globally",
    JSON.stringify({
      globals: e,
      globalTypes: t
    })
  );
}, "checkGlobals");
var zd = n((r) => {
  let { options: e } = r;
  (e == null ? void 0 : e.storySort) && O.error("The storySort option parameter can only be set globally");
}, "checkStorySort");
var ga = n((r) => {
  r && (Hd(r), zd(r));
}, "checkDisallowedParameters");
function Sa(r, e, t) {
  let { default: o, __namedExportsOrder: s, ...a } = r, l = yt(
    o,
    t,
    e
  );
  ga(l.parameters);
  let c = { meta: l, stories: {}, moduleExports: r };
  return Object.keys(a).forEach((i) => {
    if (ft(i, l)) {
      let p = Ze(i, a[i], l);
      ga(p.parameters), c.stories[p.id] = p;
    }
  }), c;
}
n(Sa, "processCSFFile");
function Ta(r) {
  return r != null && Wd(r).includes("mount");
}
n(Ta, "mountDestructured");
function Wd(r) {
  let e = r.toString().match(/[^(]*\(([^)]*)/);
  if (!e)
    return [];
  let t = ba(e[1]);
  if (!t.length)
    return [];
  let o = t[0];
  return o.startsWith("{") && o.endsWith("}") ? ba(o.slice(1, -1).replace(/\s/g, "")).map((a) => a.replace(/:.*|=.*/g, "")) : [];
}
n(Wd, "getUsedProps");
function ba(r) {
  let e = [], t = [], o = 0;
  for (let a = 0; a < r.length; a++)
    if (r[a] === "{" || r[a] === "[")
      t.push(r[a] === "{" ? "}" : "]");
    else if (r[a] === t[t.length - 1])
      t.pop();
    else if (!t.length && r[a] === ",") {
      let l = r.substring(o, a).trim();
      l && e.push(l), o = a + 1;
    }
  let s = r.substring(o).trim();
  return s && e.push(s), e;
}
n(ba, "splitByComma");
function cn(r, e, t) {
  let o = t(r);
  return (s) => e(o, s);
}
n(cn, "decorateStory");
function pn({
  componentId: r,
  title: e,
  kind: t,
  id: o,
  name: s,
  story: a,
  parameters: l,
  initialArgs: c,
  argTypes: i,
  ...p
} = {}) {
  return p;
}
n(pn, "sanitizeStoryContextUpdate");
function mt(r, e) {
  let t = {}, o = n((a) => (l) => {
    if (!t.value)
      throw new Error("Decorated function called without init");
    return t.value = {
      ...t.value,
      ...pn(l)
    }, a(t.value);
  }, "bindWithContext"), s = e.reduce(
    (a, l) => cn(a, l, o),
    r
  );
  return (a) => (t.value = a, s(a));
}
n(mt, "defaultDecorateStory");
var $ = n((...r) => {
  let e = {}, t = r.filter(Boolean), o = t.reduce((s, a) => (Object.entries(a).forEach(([l, c]) => {
    let i = s[l];
    Array.isArray(c) || typeof i > "u" ? s[l] = c : W(c) && W(i) ? e[l] = true : typeof c < "u" && (s[l] = c);
  }), s), {});
  return Object.keys(e).forEach((s) => {
    let a = t.filter(Boolean).map((l) => l[s]).filter((l) => typeof l < "u");
    a.every((l) => W(l)) ? o[s] = $(...a) : o[s] = a[a.length - 1];
  }), o;
}, "combineParameters");
function er(r, e, t) {
  let { moduleExport: o, id: s, name: a } = r || {}, l = Ea(
    r,
    e,
    t
  ), c = n(async (w) => {
    let I = {};
    for (let M of [
      ..."__STORYBOOK_TEST_LOADERS__" in R && Array.isArray(R.__STORYBOOK_TEST_LOADERS__) ? [R.__STORYBOOK_TEST_LOADERS__] : [],
      N(t.loaders),
      N(e.loaders),
      N(r.loaders)
    ]) {
      if (w.abortSignal.aborted)
        return I;
      let U = await Promise.all(M.map((z) => z(w)));
      Object.assign(I, ...U);
    }
    return I;
  }, "applyLoaders"), i = n(async (w) => {
    let I = new Array();
    for (let M of [
      ...N(t.beforeEach),
      ...N(e.beforeEach),
      ...N(r.beforeEach)
    ]) {
      if (w.abortSignal.aborted)
        return I;
      let U = await M(w);
      U && I.push(U);
    }
    return I;
  }, "applyBeforeEach"), p = n(async (w) => {
    let I = [
      ...N(t.experimental_afterEach),
      ...N(e.experimental_afterEach),
      ...N(r.experimental_afterEach)
    ].reverse();
    for (let M of I) {
      if (w.abortSignal.aborted)
        return;
      await M(w);
    }
  }, "applyAfterEach"), u = n((w) => w.originalStoryFn(w.args, w), "undecoratedStoryFn"), { applyDecorators: d = mt, runStep: h } = t, S = [
    ...N(r == null ? void 0 : r.decorators),
    ...N(e == null ? void 0 : e.decorators),
    ...N(t == null ? void 0 : t.decorators)
  ], m = (r == null ? void 0 : r.userStoryFn) || (r == null ? void 0 : r.render) || e.render || t.render, T = st(d)(u, S), y = n((w) => T(w), "unboundStoryFn"), x = (r == null ? void 0 : r.play) ?? (e == null ? void 0 : e.play), A = Ta(x);
  if (!m && !A)
    throw new wr({ id: s });
  let g = n((w) => async () => (await w.renderToCanvas(), w.canvas), "defaultMount"), b = r.mount ?? e.mount ?? t.mount ?? g, _ = t.testingLibraryRender;
  return {
    storyGlobals: {},
    ...l,
    moduleExport: o,
    id: s,
    name: a,
    story: a,
    originalStoryFn: m,
    undecoratedStoryFn: u,
    unboundStoryFn: y,
    applyLoaders: c,
    applyBeforeEach: i,
    applyAfterEach: p,
    playFunction: x,
    runStep: h,
    mount: b,
    testingLibraryRender: _,
    renderToCanvas: t.renderToCanvas,
    usesMount: A
  };
}
n(er, "prepareStory");
function ht(r, e, t) {
  return {
    ...Ea(void 0, r, e),
    moduleExport: t
  };
}
n(ht, "prepareMeta");
function Ea(r, e, t) {
  var _a2;
  let o = ["dev", "test"], s = ((_a2 = R.DOCS_OPTIONS) == null ? void 0 : _a2.autodocs) === true ? ["autodocs"] : [], a = ha(
    ...o,
    ...s,
    ...t.tags ?? [],
    ...e.tags ?? [],
    ...(r == null ? void 0 : r.tags) ?? []
  ), l = $(
    t.parameters,
    e.parameters,
    r == null ? void 0 : r.parameters
  ), { argTypesEnhancers: c = [], argsEnhancers: i = [] } = t, p = $(
    t.argTypes,
    e.argTypes,
    r == null ? void 0 : r.argTypes
  );
  if (r) {
    let x = (r == null ? void 0 : r.userStoryFn) || (r == null ? void 0 : r.render) || e.render || t.render;
    l.__isArgsStory = x && x.length > 0;
  }
  let u = {
    ...t.args,
    ...e.args,
    ...r == null ? void 0 : r.args
  }, d = {
    ...e.globals,
    ...r == null ? void 0 : r.globals
  }, h = {
    componentId: e.id,
    title: e.title,
    kind: e.title,
    // Back compat
    id: (r == null ? void 0 : r.id) || e.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: (r == null ? void 0 : r.name) || "__meta",
    story: (r == null ? void 0 : r.name) || "__meta",
    // Back compat
    component: e.component,
    subcomponents: e.subcomponents,
    tags: a,
    parameters: l,
    initialArgs: u,
    argTypes: p,
    storyGlobals: d
  };
  h.argTypes = c.reduce(
    (x, A) => A({ ...h, argTypes: x }),
    h.argTypes
  );
  let S = { ...u };
  h.initialArgs = i.reduce(
    (x, A) => ({
      ...x,
      ...A({
        ...h,
        initialArgs: x
      })
    }),
    S
  );
  let { name: m, story: T, ...y } = h;
  return y;
}
n(Ea, "preparePartialAnnotations");
function gt(r) {
  var _a2;
  let { args: e } = r, t = {
    ...r,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if ((_a2 = R.FEATURES) == null ? void 0 : _a2.argTypeTargetsV7) {
    let a = aa(r);
    t = {
      ...r,
      allArgs: r.args,
      argsByTarget: a,
      args: a[on] || {}
    };
  }
  let o = Object.entries(t.args).reduce((a, [l, c]) => {
    var _a3;
    if (!((_a3 = t.argTypes[l]) == null ? void 0 : _a3.mapping))
      return a[l] = c, a;
    let i = n((p) => {
      let u = t.argTypes[l].mapping;
      return u && p in u ? u[p] : p;
    }, "mappingFn");
    return a[l] = Array.isArray(c) ? c.map(i) : i(c), a;
  }, {}), s = Object.entries(o).reduce((a, [l, c]) => {
    let i = t.argTypes[l] || {};
    return fa(i, o, t.globals) && (a[l] = c), a;
  }, {});
  return { ...t, unmappedArgs: e, args: s };
}
n(gt, "prepareContext");
var dn = n((r, e, t) => {
  let o = typeof r;
  switch (o) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: o };
    default:
      break;
  }
  return r ? t.has(r) ? (O.warn(P`
        We've detected a cycle in arg '${e}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `), { name: "other", value: "cyclic object" }) : (t.add(r), Array.isArray(r) ? { name: "array", value: r.length > 0 ? dn(r[0], e, new Set(
    t
  )) : { name: "other", value: "unknown" } } : { name: "object", value: ee(r, (a) => dn(a, e, new Set(t))) }) : { name: "object", value: {} };
}, "inferType");
var un = n((r) => {
  let { id: e, argTypes: t = {}, initialArgs: o = {} } = r, s = ee(o, (l, c) => ({
    name: c,
    type: dn(l, `${e}.${c}`, /* @__PURE__ */ new Set())
  })), a = ee(t, (l, c) => ({
    name: c
  }));
  return $(s, a, t);
}, "inferArgTypes");
un.secondPass = true;
var Ra = n((r, e) => Array.isArray(e) ? e.includes(r) : r.match(e), "matches");
var Cr = n((r, e, t) => !e && !t ? r : r && Jo(r, (o, s) => {
  let a = o.name || s.toString();
  return !!(!e || Ra(a, e)) && (!t || !Ra(a, t));
}), "filterArgTypes");
var $d = n((r, e, t) => {
  let { type: o, options: s } = r;
  if (o) {
    if (t.color && t.color.test(e)) {
      let a = o.name;
      if (a === "string")
        return { control: { type: "color" } };
      a !== "enum" && O.warn(
        `Addon controls: Control of type color only supports string, received "${a}" instead`
      );
    }
    if (t.date && t.date.test(e))
      return { control: { type: "date" } };
    switch (o.name) {
      case "array":
        return { control: { type: "object" } };
      case "boolean":
        return { control: { type: "boolean" } };
      case "string":
        return { control: { type: "text" } };
      case "number":
        return { control: { type: "number" } };
      case "enum": {
        let { value: a } = o;
        return { control: { type: (a == null ? void 0 : a.length) <= 5 ? "radio" : "select" }, options: a };
      }
      case "function":
      case "symbol":
        return null;
      default:
        return { control: { type: s ? "select" : "object" } };
    }
  }
}, "inferControl");
var rr = n((r) => {
  let {
    argTypes: e,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    parameters: { __isArgsStory: t, controls: { include: o = null, exclude: s = null, matchers: a = {} } = {} }
  } = r;
  if (!t)
    return e;
  let l = Cr(e, o, s), c = ee(l, (i, p) => (i == null ? void 0 : i.type) && $d(i, p.toString(), a));
  return $(c, l);
}, "inferControls");
rr.secondPass = true;
function Or({
  argTypes: r,
  globalTypes: e,
  argTypesEnhancers: t,
  decorators: o,
  loaders: s,
  beforeEach: a,
  experimental_afterEach: l,
  globals: c,
  initialGlobals: i,
  ...p
}) {
  return c && Object.keys(c).length > 0 && oe(P`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `), {
    ...r && { argTypes: Ce(r) },
    ...e && { globalTypes: Ce(e) },
    decorators: N(o),
    loaders: N(s),
    beforeEach: N(a),
    experimental_afterEach: N(l),
    argTypesEnhancers: [
      ...t || [],
      un,
      // inferControls technically should only run if the user is using the controls addon,
      // and so should be added by a preset there. However, as it seems some code relies on controls
      // annotations (in particular the angular implementation's `cleanArgsDecorator`), for backwards
      // compatibility reasons, we will leave this in the store until 7.0
      rr
    ],
    initialGlobals: $(i, c),
    ...p
  };
}
n(Or, "normalizeProjectAnnotations");
var xa = n((r) => async () => {
  let e = [];
  for (let t of r) {
    let o = await t();
    o && e.unshift(o);
  }
  return async () => {
    for (let t of e)
      await t();
  };
}, "composeBeforeAllHooks");
function St(r) {
  return async (e, t, o) => {
    await r.reduceRight(
      (a, l) => async () => l(e, a, o),
      async () => t(o)
    )();
  };
}
n(St, "composeStepRunners");
function Fr(r, e) {
  return r.map((t) => {
    var _a2;
    return ((_a2 = t.default) == null ? void 0 : _a2[e]) ?? t[e];
  }).filter(Boolean);
}
n(Fr, "getField");
function ge(r, e, t = {}) {
  return Fr(r, e).reduce((o, s) => {
    let a = N(s);
    return t.reverseFileOrder ? [...a, ...o] : [...o, ...a];
  }, []);
}
n(ge, "getArrayField");
function Ir(r, e) {
  return Object.assign({}, ...Fr(r, e));
}
n(Ir, "getObjectField");
function tr(r, e) {
  return Fr(r, e).pop();
}
n(tr, "getSingletonField");
function Oe(r) {
  var _a2;
  let e = ge(r, "argTypesEnhancers"), t = Fr(r, "runStep"), o = ge(r, "beforeAll");
  return {
    parameters: $(...Fr(r, "parameters")),
    decorators: ge(r, "decorators", {
      reverseFileOrder: !(((_a2 = R.FEATURES) == null ? void 0 : _a2.legacyDecoratorFileOrder) ?? false)
    }),
    args: Ir(r, "args"),
    argsEnhancers: ge(r, "argsEnhancers"),
    argTypes: Ir(r, "argTypes"),
    argTypesEnhancers: [
      ...e.filter((s) => !s.secondPass),
      ...e.filter((s) => s.secondPass)
    ],
    globals: Ir(r, "globals"),
    initialGlobals: Ir(r, "initialGlobals"),
    globalTypes: Ir(r, "globalTypes"),
    loaders: ge(r, "loaders"),
    beforeAll: xa(o),
    beforeEach: ge(r, "beforeEach"),
    experimental_afterEach: ge(r, "experimental_afterEach"),
    render: tr(r, "render"),
    renderToCanvas: tr(r, "renderToCanvas"),
    renderToDOM: tr(r, "renderToDOM"),
    // deprecated
    applyDecorators: tr(r, "applyDecorators"),
    runStep: St(t),
    tags: ge(r, "tags"),
    mount: tr(r, "mount"),
    testingLibraryRender: tr(r, "testingLibraryRender")
  };
}
n(Oe, "composeConfigs");
var fn = class fn2 {
  constructor() {
    this.reports = [];
  }
  async addReport(e) {
    this.reports.push(e);
  }
};
n(fn, "ReporterAPI");
var Se = fn;
function Aa(r) {
  globalThis.defaultProjectAnnotations = r;
}
n(Aa, "setDefaultProjectAnnotations");
var Yd = "ComposedStory";
var Kd = "Unnamed Story";
function Xd(r) {
  return r ? Oe([r]) : {};
}
n(Xd, "extractAnnotation");
function _a(r) {
  let e = Array.isArray(r) ? r : [r];
  return globalThis.globalProjectAnnotations = Oe(e.map(Xd)), Oe([
    globalThis.defaultProjectAnnotations ?? {},
    globalThis.globalProjectAnnotations ?? {}
  ]);
}
n(_a, "setProjectAnnotations");
var be = [];
function yn(r, e, t, o, s) {
  var _a2;
  if (r === void 0)
    throw new Error("Expected a story but received undefined.");
  e.title = e.title ?? Yd;
  let a = yt(e), l = s || r.storyName || ((_a2 = r.story) == null ? void 0 : _a2.name) || r.name || Kd, c = Ze(
    l,
    r,
    a
  ), i = Or(
    Oe([
      o && Object.keys(o).length > 0 ? o : globalThis.defaultProjectAnnotations ?? {},
      globalThis.globalProjectAnnotations ?? {},
      t ?? {}
    ])
  ), p = er(
    c,
    a,
    i
  ), d = {
    // TODO: remove loading from globalTypes in 9.0
    ...pt(i.globalTypes),
    ...i.initialGlobals,
    ...p.storyGlobals
  }, h = new Se(), S = n(() => {
    let g = gt({
      hooks: new he(),
      globals: d,
      args: { ...p.initialArgs },
      viewMode: "story",
      reporting: h,
      loaded: {},
      abortSignal: new AbortController().signal,
      step: n((b, _) => p.runStep(b, _, g), "step"),
      canvasElement: null,
      canvas: {},
      globalTypes: i.globalTypes,
      ...p,
      context: null,
      mount: null
    });
    return g.context = g, p.renderToCanvas && (g.renderToCanvas = async () => {
      var _a3;
      let b = await ((_a3 = p.renderToCanvas) == null ? void 0 : _a3.call(
        p,
        {
          componentId: p.componentId,
          title: p.title,
          id: p.id,
          name: p.name,
          tags: p.tags,
          showMain: n(() => {
          }, "showMain"),
          showError: n((_) => {
            throw new Error(`${_.title}
${_.description}`);
          }, "showError"),
          showException: n((_) => {
            throw _;
          }, "showException"),
          forceRemount: true,
          storyContext: g,
          storyFn: n(() => p.unboundStoryFn(g), "storyFn"),
          unboundStoryFn: p.unboundStoryFn
        },
        g.canvasElement
      ));
      b && be.push(b);
    }), g.mount = p.mount(g), g;
  }, "initializeContext"), m, T = n(async (g) => {
    var _a3;
    let b = S();
    return b.canvasElement ?? (b.canvasElement = (_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body), m && (b.loaded = m.loaded), Object.assign(b, g), p.playFunction(b);
  }, "play"), y = n((g) => {
    let b = S();
    return Object.assign(b, g), Qd(p, b);
  }, "run"), x = p.playFunction ? T : void 0;
  return Object.assign(
    n(function(b) {
      let _ = S();
      return m && (_.loaded = m.loaded), _.args = {
        ..._.initialArgs,
        ...b
      }, p.unboundStoryFn(_);
    }, "storyFn"),
    {
      id: p.id,
      storyName: l,
      load: n(async () => {
        for (let b of [...be].reverse())
          await b();
        be.length = 0;
        let g = S();
        g.loaded = await p.applyLoaders(g), be.push(...(await p.applyBeforeEach(g)).filter(Boolean)), m = g;
      }, "load"),
      globals: d,
      args: p.initialArgs,
      parameters: p.parameters,
      argTypes: p.argTypes,
      play: x,
      run: y,
      reporting: h,
      tags: p.tags
    }
  );
}
n(yn, "composeStory");
var Jd = n((r, e, t, o) => yn(r, e, t, {}, o), "defaultComposeStory");
function wa(r, e, t = Jd) {
  let { default: o, __esModule: s, __namedExportsOrder: a, ...l } = r;
  return Object.entries(l).reduce((i, [p, u]) => ft(p, o) ? Object.assign(i, {
    [p]: t(
      u,
      o,
      e,
      p
    )
  }) : i, {});
}
n(wa, "composeStories");
function va(r) {
  return r.extend({
    mount: n(async ({ mount: e, page: t }, o) => {
      await o(async (s, ...a) => {
        if (!("__pw_type" in s) || "__pw_type" in s && s.__pw_type !== "jsx")
          throw new Error(P`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
        await t.evaluate(async (c) => {
          var _a2, _b, _c2;
          let i = await ((_a2 = globalThis.__pwUnwrapObject) == null ? void 0 : _a2.call(globalThis, c));
          return (_c2 = (_b = "__pw_type" in i ? i.type : i) == null ? void 0 : _b.load) == null ? void 0 : _c2.call(_b);
        }, s);
        let l = await e(s, ...a);
        return await t.evaluate(async (c) => {
          var _a2, _b;
          let i = await ((_a2 = globalThis.__pwUnwrapObject) == null ? void 0 : _a2.call(globalThis, c)), p = "__pw_type" in i ? i.type : i, u = document.querySelector("#root");
          return (_b = p == null ? void 0 : p.play) == null ? void 0 : _b.call(p, { canvasElement: u });
        }, s), l;
      });
    }, "mount")
  });
}
n(va, "createPlaywrightTest");
async function Qd(r, e) {
  var _a2, _b;
  for (let s of [...be].reverse())
    await s();
  if (be.length = 0, !e.canvasElement) {
    let s = document.createElement("div");
    (_b = (_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body) == null ? void 0 : _b.appendChild(s), e.canvasElement = s, be.push(() => {
      var _a3, _b2, _c2, _d2;
      ((_b2 = (_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body) == null ? void 0 : _b2.contains(s)) && ((_d2 = (_c2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _c2.body) == null ? void 0 : _d2.removeChild(s));
    });
  }
  if (e.loaded = await r.applyLoaders(e), e.abortSignal.aborted)
    return;
  be.push(...(await r.applyBeforeEach(e)).filter(Boolean));
  let t = r.playFunction, o = r.usesMount;
  o || await e.mount(), !e.abortSignal.aborted && (t && (o || (e.mount = async () => {
    throw new ve({ playFunction: t.toString() });
  }), await t(e)), await r.applyAfterEach(e));
}
n(Qd, "runStory");
function Pa(r, e) {
  return Ko(Xo(r, e), (t) => t === void 0);
}
n(Pa, "picky");
var Ca = 1e3;
var Zd = 1e4;
var mn = class mn2 {
  constructor(e, t, o) {
    this.importFn = t;
    this.getStoriesJsonData = n(() => {
      let e2 = this.getSetStoriesPayload(), t2 = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
      return {
        v: 3,
        stories: ee(e2.stories, (s2) => {
          let { importPath: a2 } = this.storyIndex.entries[s2.id];
          return {
            ...Pa(s2, ["id", "name", "title"]),
            importPath: a2,
            // These 3 fields were going to be dropped in v7, but instead we will keep them for the
            // 7.x cycle so that v7 Storybooks can be composed successfully in v6 Storybook.
            // In v8 we will (likely) completely drop support for `extract` and `getStoriesJsonData`
            kind: s2.title,
            story: s2.name,
            parameters: {
              ...Pa(s2.parameters, t2),
              fileName: a2
            }
          };
        })
      };
    }, "getStoriesJsonData");
    this.storyIndex = new ut(e), this.projectAnnotations = Or(o);
    let { initialGlobals: s, globalTypes: a } = this.projectAnnotations;
    this.args = new ct(), this.userGlobals = new dt({ globals: s, globalTypes: a }), this.hooks = {}, this.cleanupCallbacks = {}, this.processCSFFileWithCache = (0, bt.default)(Ca)(Sa), this.prepareMetaWithCache = (0, bt.default)(Ca)(ht), this.prepareStoryWithCache = (0, bt.default)(Zd)(er);
  }
  setProjectAnnotations(e) {
    this.projectAnnotations = Or(e);
    let { initialGlobals: t, globalTypes: o } = e;
    this.userGlobals.set({ globals: t, globalTypes: o });
  }
  // This means that one of the CSF files has changed.
  // If the `importFn` has changed, we will invalidate both caches.
  // If the `storyIndex` data has changed, we may or may not invalidate the caches, depending
  // on whether we've loaded the relevant files yet.
  async onStoriesChanged({
    importFn: e,
    storyIndex: t
  }) {
    e && (this.importFn = e), t && (this.storyIndex.entries = t.entries), this.cachedCSFFiles && await this.cacheAllCSFFiles();
  }
  // Get an entry from the index, waiting on initialization if necessary
  async storyIdToEntry(e) {
    return this.storyIndex.storyIdToEntry(e);
  }
  // To load a single CSF file to service a story we need to look up the importPath in the index
  async loadCSFFileByStoryId(e) {
    let { importPath: t, title: o } = this.storyIndex.storyIdToEntry(e), s = await this.importFn(t);
    return this.processCSFFileWithCache(s, t, o);
  }
  async loadAllCSFFiles() {
    let e = {};
    return Object.entries(this.storyIndex.entries).forEach(([o, { importPath: s }]) => {
      e[s] = o;
    }), (await Promise.all(
      Object.entries(e).map(async ([o, s]) => ({
        importPath: o,
        csfFile: await this.loadCSFFileByStoryId(s)
      }))
    )).reduce(
      (o, { importPath: s, csfFile: a }) => (o[s] = a, o),
      {}
    );
  }
  async cacheAllCSFFiles() {
    this.cachedCSFFiles = await this.loadAllCSFFiles();
  }
  preparedMetaFromCSFFile({ csfFile: e }) {
    let t = e.meta;
    return this.prepareMetaWithCache(
      t,
      this.projectAnnotations,
      e.moduleExports.default
    );
  }
  // Load the CSF file for a story and prepare the story from it and the project annotations.
  async loadStory({ storyId: e }) {
    let t = await this.loadCSFFileByStoryId(e);
    return this.storyFromCSFFile({ storyId: e, csfFile: t });
  }
  // This function is synchronous for convenience -- often times if you have a CSF file already
  // it is easier not to have to await `loadStory`.
  storyFromCSFFile({
    storyId: e,
    csfFile: t
  }) {
    let o = t.stories[e];
    if (!o)
      throw new Ar({ storyId: e });
    let s = t.meta, a = this.prepareStoryWithCache(
      o,
      s,
      this.projectAnnotations
    );
    return this.args.setInitial(a), this.hooks[a.id] = this.hooks[a.id] || new he(), a;
  }
  // If we have a CSF file we can get all the stories from it synchronously
  componentStoriesFromCSFFile({
    csfFile: e
  }) {
    return Object.keys(this.storyIndex.entries).filter((t) => !!e.stories[t]).map((t) => this.storyFromCSFFile({ storyId: t, csfFile: e }));
  }
  async loadEntry(e) {
    let t = await this.storyIdToEntry(e), o = t.type === "docs" ? t.storiesImports : [], [s, ...a] = await Promise.all([
      this.importFn(t.importPath),
      ...o.map((l) => {
        let c = this.storyIndex.importPathToEntry(l);
        return this.loadCSFFileByStoryId(c.id);
      })
    ]);
    return { entryExports: s, csfFiles: a };
  }
  // A prepared story does not include args, globals or hooks. These are stored in the story store
  // and updated separtely to the (immutable) story.
  getStoryContext(e, { forceInitialArgs: t = false } = {}) {
    let o = this.userGlobals.get(), { initialGlobals: s } = this.userGlobals, a = new Se();
    return gt({
      ...e,
      args: t ? e.initialArgs : this.args.get(e.id),
      initialGlobals: s,
      globalTypes: this.projectAnnotations.globalTypes,
      userGlobals: o,
      reporting: a,
      globals: {
        ...o,
        ...e.storyGlobals
      },
      hooks: this.hooks[e.id]
    });
  }
  addCleanupCallbacks(e, t) {
    this.cleanupCallbacks[e.id] = t;
  }
  async cleanupStory(e) {
    this.hooks[e.id].clean();
    let t = this.cleanupCallbacks[e.id];
    if (t)
      for (let o of [...t].reverse())
        await o();
    delete this.cleanupCallbacks[e.id];
  }
  extract(e = { includeDocsOnly: false }) {
    let { cachedCSFFiles: t } = this;
    if (!t)
      throw new Sr();
    return Object.entries(this.storyIndex.entries).reduce(
      (o, [s, { type: a, importPath: l }]) => {
        if (a === "docs")
          return o;
        let c = t[l], i = this.storyFromCSFFile({ storyId: s, csfFile: c });
        return !e.includeDocsOnly && i.parameters.docsOnly || (o[s] = Object.entries(i).reduce(
          (p, [u, d]) => u === "moduleExport" || typeof d == "function" ? p : Array.isArray(d) ? Object.assign(p, { [u]: d.slice().sort() }) : Object.assign(p, { [u]: d }),
          {
            //
            args: i.initialArgs,
            globals: {
              ...this.userGlobals.initialGlobals,
              ...this.userGlobals.globals,
              ...i.storyGlobals
            }
          }
        )), o;
      },
      {}
    );
  }
  // TODO: Remove in 9.0
  getSetStoriesPayload() {
    let e = this.extract({ includeDocsOnly: true }), t = Object.values(e).reduce(
      (o, { title: s }) => (o[s] = {}, o),
      {}
    );
    return {
      v: 2,
      globals: this.userGlobals.get(),
      globalParameters: {},
      kindParameters: t,
      stories: e
    };
  }
  raw() {
    return oe(
      "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead"
    ), Object.values(this.extract()).map(({ id: e }) => this.fromId(e)).filter(Boolean);
  }
  fromId(e) {
    if (oe(
      "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead"
    ), !this.cachedCSFFiles)
      throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
    let t;
    try {
      ({ importPath: t } = this.storyIndex.storyIdToEntry(e));
    } catch {
      return null;
    }
    let o = this.cachedCSFFiles[t], s = this.storyFromCSFFile({ storyId: e, csfFile: o });
    return {
      ...s,
      storyFn: n((a) => {
        let l = {
          ...this.getStoryContext(s),
          abortSignal: new AbortController().signal,
          canvasElement: null,
          loaded: {},
          step: n((c, i) => s.runStep(c, i, l), "step"),
          context: null,
          mount: null,
          canvas: {},
          viewMode: "story"
        };
        return s.unboundStoryFn({ ...l, ...a });
      }, "storyFn")
    };
  }
};
n(mn, "StoryStore");
var Ie = mn;
function hn(r) {
  return r.startsWith("\\\\?\\") ? r : r.replace(/\\/g, "/");
}
n(hn, "slash");
var eu = n((r) => {
  if (r.length === 0)
    return r;
  let e = r[r.length - 1], t = e == null ? void 0 : e.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, "");
  if (r.length === 1)
    return [t];
  let o = r[r.length - 2];
  return t && o && t.toLowerCase() === o.toLowerCase() ? [...r.slice(0, -2), t] : t && (/^(story|stories)([.][^.]+)$/i.test(e) || /^index$/i.test(t)) ? r.slice(0, -1) : [...r.slice(0, -1), t];
}, "sanitize");
function Oa(r) {
  return r.flatMap((e) => e.split("/")).filter(Boolean).join("/");
}
n(Oa, "pathJoin");
var gn = n((r, e, t) => {
  let { directory: o, importPathMatcher: s, titlePrefix: a = "" } = e || {};
  typeof r == "number" && L.warn(P`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
  let l = hn(String(r));
  if (s.exec(l)) {
    if (!t) {
      let c = l.replace(o, ""), i = Oa([a, c]).split("/");
      return i = eu(i), i.join("/");
    }
    return a ? Oa([a, t]) : t;
  }
}, "userOrAutoTitleFromSpecifier");
var Ia = n((r, e, t) => {
  for (let o = 0; o < e.length; o += 1) {
    let s = gn(r, e[o], t);
    if (s)
      return s;
  }
  return t || void 0;
}, "userOrAutoTitle");
var Fa = /\s*\/\s*/;
var Da = n((r = {}) => (e, t) => {
  if (e.title === t.title && !r.includeNames)
    return 0;
  let o = r.method || "configure", s = r.order || [], a = e.title.trim().split(Fa), l = t.title.trim().split(Fa);
  r.includeNames && (a.push(e.name), l.push(t.name));
  let c = 0;
  for (; a[c] || l[c]; ) {
    if (!a[c])
      return -1;
    if (!l[c])
      return 1;
    let i = a[c], p = l[c];
    if (i !== p) {
      let d = s.indexOf(i), h = s.indexOf(p), S = s.indexOf("*");
      return d !== -1 || h !== -1 ? (d === -1 && (S !== -1 ? d = S : d = s.length), h === -1 && (S !== -1 ? h = S : h = s.length), d - h) : o === "configure" ? 0 : i.localeCompare(p, r.locales ? r.locales : void 0, {
        numeric: true,
        sensitivity: "accent"
      });
    }
    let u = s.indexOf(i);
    u === -1 && (u = s.indexOf("*")), s = u !== -1 && Array.isArray(s[u + 1]) ? s[u + 1] : [], c += 1;
  }
  return 0;
}, "storySort");
var ru = n((r, e, t) => {
  if (e) {
    let o;
    typeof e == "function" ? o = e : o = Da(e), r.sort(o);
  } else
    r.sort(
      (o, s) => t.indexOf(o.importPath) - t.indexOf(s.importPath)
    );
  return r;
}, "sortStoriesCommon");
var Na = n((r, e, t) => {
  try {
    return ru(r, e, t);
  } catch (o) {
    throw new Error(P`
    Error sorting stories with sort parameter ${e}:

    > ${o.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
  }
}, "sortStoriesV7");
var Te = new Error("prepareAborted");
var { AbortController: ka } = globalThis;
function La(r) {
  try {
    let { name: e = "Error", message: t = String(r), stack: o } = r;
    return { name: e, message: t, stack: o };
  } catch {
    return { name: "Error", message: String(r) };
  }
}
n(La, "serializeError");
var Sn = class Sn2 {
  constructor(e, t, o, s, a, l, c = { autoplay: true, forceInitialArgs: false }, i) {
    this.channel = e;
    this.store = t;
    this.renderToScreen = o;
    this.callbacks = s;
    this.id = a;
    this.viewMode = l;
    this.renderOptions = c;
    this.type = "story";
    this.notYetRendered = true;
    this.rerenderEnqueued = false;
    this.disableKeyListeners = false;
    this.teardownRender = n(() => {
    }, "teardownRender");
    this.torndown = false;
    this.abortController = new ka(), i && (this.story = i, this.phase = "preparing");
  }
  async runPhase(e, t, o) {
    this.phase = t, this.channel.emit(we, { newPhase: this.phase, storyId: this.id }), o && (await o(), this.checkIfAborted(e));
  }
  checkIfAborted(e) {
    return e.aborted ? (this.phase = "aborted", this.channel.emit(we, { newPhase: this.phase, storyId: this.id }), true) : false;
  }
  async prepare() {
    if (await this.runPhase(this.abortController.signal, "preparing", async () => {
      this.story = await this.store.loadStory({ storyId: this.id });
    }), this.abortController.signal.aborted)
      throw await this.store.cleanupStory(this.story), Te;
  }
  // The two story "renders" are equal and have both loaded the same story
  isEqual(e) {
    return !!(this.id === e.id && this.story && this.story === e.story);
  }
  isPreparing() {
    return ["preparing"].includes(this.phase);
  }
  isPending() {
    return ["loading", "beforeEach", "rendering", "playing", "afterEach"].includes(
      this.phase
    );
  }
  async renderToElement(e) {
    return this.canvasElement = e, this.render({ initial: true, forceRemount: true });
  }
  storyContext() {
    if (!this.story)
      throw new Error("Cannot call storyContext before preparing");
    let { forceInitialArgs: e } = this.renderOptions;
    return this.store.getStoryContext(this.story, { forceInitialArgs: e });
  }
  async render({
    initial: e = false,
    forceRemount: t = false
  } = {}) {
    var _a2, _b, _c2, _d2;
    let { canvasElement: o } = this;
    if (!this.story)
      throw new Error("cannot render when not prepared");
    let s = this.story;
    if (!o)
      throw new Error("cannot render when canvasElement is unset");
    let {
      id: a,
      componentId: l,
      title: c,
      name: i,
      tags: p,
      applyLoaders: u,
      applyBeforeEach: d,
      applyAfterEach: h,
      unboundStoryFn: S,
      playFunction: m,
      runStep: T
    } = s;
    t && !e && (this.cancelRender(), this.abortController = new ka());
    let y = this.abortController.signal, x = false, A = s.usesMount;
    try {
      let g = {
        ...this.storyContext(),
        viewMode: this.viewMode,
        abortSignal: y,
        canvasElement: o,
        loaded: {},
        step: n((v, F) => T(v, F, g), "step"),
        context: null,
        canvas: {},
        renderToCanvas: n(async () => {
          let v = await this.renderToScreen(b, o);
          this.teardownRender = v || (() => {
          }), x = true;
        }, "renderToCanvas"),
        // The story provides (set in a renderer) a mount function that is a higher order function
        // (context) => (...args) => Canvas
        //
        // Before assigning it to the context, we resolve the context dependency,
        // so that a user can just call it as await mount(...args) in their play function.
        mount: n(async (...v) => {
          var _a3, _b2;
          (_b2 = (_a3 = this.callbacks).showStoryDuringRender) == null ? void 0 : _b2.call(_a3);
          let F = null;
          return await this.runPhase(y, "rendering", async () => {
            F = await s.mount(g)(...v);
          }), A && await this.runPhase(y, "playing"), F;
        }, "mount")
      };
      g.context = g;
      let b = {
        componentId: l,
        title: c,
        kind: c,
        id: a,
        name: i,
        story: i,
        tags: p,
        ...this.callbacks,
        showError: n((v) => (this.phase = "errored", this.callbacks.showError(v)), "showError"),
        showException: n((v) => (this.phase = "errored", this.callbacks.showException(v)), "showException"),
        forceRemount: t || this.notYetRendered,
        storyContext: g,
        storyFn: n(() => S(g), "storyFn"),
        unboundStoryFn: S
      };
      if (await this.runPhase(y, "loading", async () => {
        g.loaded = await u(g);
      }), y.aborted)
        return;
      let _ = await d(g);
      if (this.store.addCleanupCallbacks(s, _), this.checkIfAborted(y) || (!x && !A && await g.mount(), this.notYetRendered = false, y.aborted))
        return;
      let w = ((_b = (_a2 = this.story.parameters) == null ? void 0 : _a2.test) == null ? void 0 : _b.dangerouslyIgnoreUnhandledErrors) === true, I = /* @__PURE__ */ new Set(), M = n((v) => I.add("error" in v ? v.error : v.reason), "onError");
      if (this.renderOptions.autoplay && t && m && this.phase !== "errored") {
        window.addEventListener("error", M), window.addEventListener("unhandledrejection", M), this.disableKeyListeners = true;
        try {
          if (A ? await m(g) : (g.mount = async () => {
            throw new ve({ playFunction: m.toString() });
          }, await this.runPhase(y, "playing", async () => m(g))), !x)
            throw new vr();
          this.checkIfAborted(y), !w && I.size > 0 ? await this.runPhase(y, "errored") : await this.runPhase(y, "played");
        } catch (v) {
          if ((_d2 = (_c2 = this.callbacks).showStoryDuringRender) == null ? void 0 : _d2.call(_c2), await this.runPhase(y, "errored", async () => {
            this.channel.emit(qt, La(v));
          }), this.story.parameters.throwPlayFunctionExceptions !== false)
            throw v;
          console.error(v);
        }
        if (!w && I.size > 0 && this.channel.emit(
          Ut,
          Array.from(I).map(La)
        ), this.disableKeyListeners = false, window.removeEventListener("unhandledrejection", M), window.removeEventListener("error", M), y.aborted)
          return;
      }
      await this.runPhase(
        y,
        "completed",
        async () => this.channel.emit(Be, a)
      ), this.phase !== "errored" && await this.runPhase(y, "afterEach", async () => {
        await h(g);
      });
      let U = !w && I.size > 0, z = g.reporting.reports.some(
        (v) => v.status === "failed"
      ), te = U || z;
      await this.runPhase(
        y,
        "finished",
        async () => this.channel.emit(Kr, {
          storyId: a,
          status: te ? "error" : "success",
          reporters: g.reporting.reports
        })
      );
    } catch (g) {
      this.phase = "errored", this.callbacks.showException(g), await this.runPhase(
        y,
        "finished",
        async () => this.channel.emit(Kr, {
          storyId: a,
          status: "error",
          reporters: []
        })
      );
    }
    this.rerenderEnqueued && (this.rerenderEnqueued = false, this.render());
  }
  /**
   * Rerender the story. If the story is currently pending (loading/rendering), the rerender will be
   * enqueued, and will be executed after the current render is completed. Rerendering while playing
   * will not be enqueued, and will be executed immediately, to support rendering args changes while
   * playing.
   */
  async rerender() {
    if (this.isPending() && this.phase !== "playing")
      this.rerenderEnqueued = true;
    else
      return this.render();
  }
  async remount() {
    return await this.teardown(), this.render({ forceRemount: true });
  }
  // If the story is torn down (either a new story is rendered or the docs page removes it)
  // we need to consider the fact that the initial render may not be finished
  // (possibly the loaders or the play function are still running). We use the controller
  // as a method to abort them, ASAP, but this is not foolproof as we cannot control what
  // happens inside the user's code.
  cancelRender() {
    var _a2;
    (_a2 = this.abortController) == null ? void 0 : _a2.abort();
  }
  async teardown() {
    this.torndown = true, this.cancelRender(), this.story && await this.store.cleanupStory(this.story);
    for (let e = 0; e < 3; e += 1) {
      if (!this.isPending()) {
        await this.teardownRender();
        return;
      }
      await new Promise((t) => setTimeout(t, 0));
    }
    window.location.reload(), await new Promise(() => {
    });
  }
};
n(Sn, "StoryRender");
var Fe = Sn;
var { fetch: tu } = R;
var ou = "./index.json";
var bn = class bn2 {
  constructor(e, t, o = Z.getChannel(), s = true) {
    this.importFn = e;
    this.getProjectAnnotations = t;
    this.channel = o;
    this.storyRenders = [];
    this.storeInitializationPromise = new Promise((a, l) => {
      this.resolveStoreInitializationPromise = a, this.rejectStoreInitializationPromise = l;
    }), s && this.initialize();
  }
  // Create a proxy object for `__STORYBOOK_STORY_STORE__` and `__STORYBOOK_PREVIEW__.storyStore`
  // That proxies through to the store once ready, and errors beforehand. This means we can set
  // `__STORYBOOK_STORY_STORE__ = __STORYBOOK_PREVIEW__.storyStore` without having to wait, and
  // similarly integrators can access the `storyStore` on the preview at any time, although
  // it is considered deprecated and we will no longer allow access in 9.0
  get storyStore() {
    return new Proxy(
      {},
      {
        get: n((e, t) => {
          if (this.storyStoreValue)
            return oe("Accessing the Story Store is deprecated and will be removed in 9.0"), this.storyStoreValue[t];
          throw new _r();
        }, "get")
      }
    );
  }
  // INITIALIZATION
  async initialize() {
    this.setupListeners();
    try {
      let e = await this.getProjectAnnotationsOrRenderError();
      await this.runBeforeAllHook(e), await this.initializeWithProjectAnnotations(e);
    } catch (e) {
      this.rejectStoreInitializationPromise(e);
    }
  }
  ready() {
    return this.storeInitializationPromise;
  }
  setupListeners() {
    this.channel.on(Yt, this.onStoryIndexChanged.bind(this)), this.channel.on(lr, this.onUpdateGlobals.bind(this)), this.channel.on(cr, this.onUpdateArgs.bind(this)), this.channel.on(ro, this.onRequestArgTypesInfo.bind(this)), this.channel.on(ir, this.onResetArgs.bind(this)), this.channel.on(ar, this.onForceReRender.bind(this)), this.channel.on(Mt, this.onForceRemount.bind(this));
  }
  async getProjectAnnotationsOrRenderError() {
    try {
      let e = await this.getProjectAnnotations();
      if (this.renderToCanvas = e.renderToCanvas, !this.renderToCanvas)
        throw new br();
      return e;
    } catch (e) {
      throw this.renderPreviewEntryError("Error reading preview.js:", e), e;
    }
  }
  // If initialization gets as far as project annotations, this function runs.
  async initializeWithProjectAnnotations(e) {
    this.projectAnnotationsBeforeInitialization = e;
    try {
      let t = await this.getStoryIndexFromServer();
      return this.initializeWithStoryIndex(t);
    } catch (t) {
      throw this.renderPreviewEntryError("Error loading story index:", t), t;
    }
  }
  async runBeforeAllHook(e) {
    var _a2, _b;
    try {
      await ((_a2 = this.beforeAllCleanup) == null ? void 0 : _a2.call(this)), this.beforeAllCleanup = await ((_b = e.beforeAll) == null ? void 0 : _b.call(e));
    } catch (t) {
      throw this.renderPreviewEntryError("Error in beforeAll hook:", t), t;
    }
  }
  async getStoryIndexFromServer() {
    let e = await tu(ou);
    if (e.status === 200)
      return e.json();
    throw new Tr({ text: await e.text() });
  }
  // If initialization gets as far as the story index, this function runs.
  initializeWithStoryIndex(e) {
    if (!this.projectAnnotationsBeforeInitialization)
      throw new Error("Cannot call initializeWithStoryIndex until project annotations resolve");
    this.storyStoreValue = new Ie(
      e,
      this.importFn,
      this.projectAnnotationsBeforeInitialization
    ), delete this.projectAnnotationsBeforeInitialization, this.setInitialGlobals(), this.resolveStoreInitializationPromise();
  }
  async setInitialGlobals() {
    this.emitGlobals();
  }
  emitGlobals() {
    if (!this.storyStoreValue)
      throw new G({ methodName: "emitGlobals" });
    let e = {
      globals: this.storyStoreValue.userGlobals.get() || {},
      globalTypes: this.storyStoreValue.projectAnnotations.globalTypes || {}
    };
    this.channel.emit(Ht, e);
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: e
  }) {
    delete this.previewEntryError, this.getProjectAnnotations = e;
    let t = await this.getProjectAnnotationsOrRenderError();
    if (await this.runBeforeAllHook(t), !this.storyStoreValue) {
      await this.initializeWithProjectAnnotations(t);
      return;
    }
    this.storyStoreValue.setProjectAnnotations(t), this.emitGlobals();
  }
  async onStoryIndexChanged() {
    if (delete this.previewEntryError, !(!this.storyStoreValue && !this.projectAnnotationsBeforeInitialization))
      try {
        let e = await this.getStoryIndexFromServer();
        if (this.projectAnnotationsBeforeInitialization) {
          this.initializeWithStoryIndex(e);
          return;
        }
        await this.onStoriesChanged({ storyIndex: e });
      } catch (e) {
        throw this.renderPreviewEntryError("Error loading story index:", e), e;
      }
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: e,
    storyIndex: t
  }) {
    if (!this.storyStoreValue)
      throw new G({ methodName: "onStoriesChanged" });
    await this.storyStoreValue.onStoriesChanged({ importFn: e, storyIndex: t });
  }
  async onUpdateGlobals({
    globals: e,
    currentStory: t
  }) {
    if (this.storyStoreValue || await this.storeInitializationPromise, !this.storyStoreValue)
      throw new G({ methodName: "onUpdateGlobals" });
    if (this.storyStoreValue.userGlobals.update(e), t) {
      let { initialGlobals: o, storyGlobals: s, userGlobals: a, globals: l } = this.storyStoreValue.getStoryContext(t);
      this.channel.emit(_e, {
        initialGlobals: o,
        userGlobals: a,
        storyGlobals: s,
        globals: l
      });
    } else {
      let { initialGlobals: o, globals: s } = this.storyStoreValue.userGlobals;
      this.channel.emit(_e, {
        initialGlobals: o,
        userGlobals: s,
        storyGlobals: {},
        globals: s
      });
    }
    await Promise.all(this.storyRenders.map((o) => o.rerender()));
  }
  async onUpdateArgs({ storyId: e, updatedArgs: t }) {
    if (!this.storyStoreValue)
      throw new G({ methodName: "onUpdateArgs" });
    this.storyStoreValue.args.update(e, t), await Promise.all(
      this.storyRenders.filter((o) => o.id === e && !o.renderOptions.forceInitialArgs).map(
        (o) => (
          // We only run the play function, with in a force remount.
          // But when mount is destructured, the rendering happens inside of the play function.
          o.story && o.story.usesMount ? o.remount() : o.rerender()
        )
      )
    ), this.channel.emit(zt, {
      storyId: e,
      args: this.storyStoreValue.args.get(e)
    });
  }
  async onRequestArgTypesInfo({ id: e, payload: t }) {
    var _a2;
    try {
      await this.storeInitializationPromise;
      let o = await ((_a2 = this.storyStoreValue) == null ? void 0 : _a2.loadStory(t));
      this.channel.emit(Xr, {
        id: e,
        success: true,
        payload: { argTypes: (o == null ? void 0 : o.argTypes) || {} },
        error: null
      });
    } catch (o) {
      this.channel.emit(Xr, {
        id: e,
        success: false,
        error: o == null ? void 0 : o.message
      });
    }
  }
  async onResetArgs({ storyId: e, argNames: t }) {
    var _a2;
    if (!this.storyStoreValue)
      throw new G({ methodName: "onResetArgs" });
    let s = ((_a2 = this.storyRenders.find((c) => c.id === e)) == null ? void 0 : _a2.story) || await this.storyStoreValue.loadStory({ storyId: e }), l = (t || [
      .../* @__PURE__ */ new Set([
        ...Object.keys(s.initialArgs),
        ...Object.keys(this.storyStoreValue.args.get(e))
      ])
    ]).reduce((c, i) => (c[i] = s.initialArgs[i], c), {});
    await this.onUpdateArgs({ storyId: e, updatedArgs: l });
  }
  // ForceReRender does not include a story id, so we simply must
  // re-render all stories in case they are relevant
  async onForceReRender() {
    await Promise.all(this.storyRenders.map((e) => e.rerender()));
  }
  async onForceRemount({ storyId: e }) {
    await Promise.all(this.storyRenders.filter((t) => t.id === e).map((t) => t.remount()));
  }
  // Used by docs to render a story to a given element
  // Note this short-circuits the `prepare()` phase of the StoryRender,
  // main to be consistent with the previous behaviour. In the future,
  // we will change it to go ahead and load the story, which will end up being
  // "instant", although async.
  renderStoryToElement(e, t, o, s) {
    if (!this.renderToCanvas || !this.storyStoreValue)
      throw new G({
        methodName: "renderStoryToElement"
      });
    let a = new Fe(
      this.channel,
      this.storyStoreValue,
      this.renderToCanvas,
      o,
      e.id,
      "docs",
      s,
      e
    );
    return a.renderToElement(t), this.storyRenders.push(a), async () => {
      await this.teardownRender(a);
    };
  }
  async teardownRender(e, { viewModeChanged: t } = {}) {
    var _a2;
    this.storyRenders = this.storyRenders.filter((o) => o !== e), await ((_a2 = e == null ? void 0 : e.teardown) == null ? void 0 : _a2.call(e, { viewModeChanged: t }));
  }
  // API
  async loadStory({ storyId: e }) {
    if (!this.storyStoreValue)
      throw new G({ methodName: "loadStory" });
    return this.storyStoreValue.loadStory({ storyId: e });
  }
  getStoryContext(e, { forceInitialArgs: t = false } = {}) {
    if (!this.storyStoreValue)
      throw new G({ methodName: "getStoryContext" });
    return this.storyStoreValue.getStoryContext(e, { forceInitialArgs: t });
  }
  async extract(e) {
    if (!this.storyStoreValue)
      throw new G({ methodName: "extract" });
    if (this.previewEntryError)
      throw this.previewEntryError;
    return await this.storyStoreValue.cacheAllCSFFiles(), this.storyStoreValue.extract(e);
  }
  // UTILITIES
  renderPreviewEntryError(e, t) {
    this.previewEntryError = t, O.error(e), O.error(t), this.channel.emit(Lt, t);
  }
};
n(bn, "Preview");
var De = bn;
var Tn = class Tn2 {
  constructor(e, t, o, s) {
    this.channel = e;
    this.store = t;
    this.renderStoryToElement = o;
    this.storyIdByName = n((e2) => {
      let t2 = this.nameToStoryId.get(e2);
      if (t2)
        return t2;
      throw new Error(`No story found with that name: ${e2}`);
    }, "storyIdByName");
    this.componentStories = n(() => this.componentStoriesValue, "componentStories");
    this.componentStoriesFromCSFFile = n((e2) => this.store.componentStoriesFromCSFFile({ csfFile: e2 }), "componentStoriesFromCSFFile");
    this.storyById = n((e2) => {
      if (!e2) {
        if (!this.primaryStory)
          throw new Error(
            "No primary story defined for docs entry. Did you forget to use `<Meta>`?"
          );
        return this.primaryStory;
      }
      let t2 = this.storyIdToCSFFile.get(e2);
      if (!t2)
        throw new Error(`Called \`storyById\` for story that was never loaded: ${e2}`);
      return this.store.storyFromCSFFile({ storyId: e2, csfFile: t2 });
    }, "storyById");
    this.getStoryContext = n((e2) => ({
      ...this.store.getStoryContext(e2),
      loaded: {},
      viewMode: "docs"
    }), "getStoryContext");
    this.loadStory = n((e2) => this.store.loadStory({ storyId: e2 }), "loadStory");
    this.componentStoriesValue = [], this.storyIdToCSFFile = /* @__PURE__ */ new Map(), this.exportToStory = /* @__PURE__ */ new Map(), this.exportsToCSFFile = /* @__PURE__ */ new Map(), this.nameToStoryId = /* @__PURE__ */ new Map(), this.attachedCSFFiles = /* @__PURE__ */ new Set(), s.forEach((a, l) => {
      this.referenceCSFFile(a);
    });
  }
  // This docs entry references this CSF file and can synchronously load the stories, as well
  // as reference them by module export. If the CSF is part of the "component" stories, they
  // can also be referenced by name and are in the componentStories list.
  referenceCSFFile(e) {
    this.exportsToCSFFile.set(e.moduleExports, e), this.exportsToCSFFile.set(e.moduleExports.default, e), this.store.componentStoriesFromCSFFile(
      { csfFile: e }
    ).forEach((o) => {
      let s = e.stories[o.id];
      this.storyIdToCSFFile.set(s.id, e), this.exportToStory.set(s.moduleExport, o);
    });
  }
  attachCSFFile(e) {
    if (!this.exportsToCSFFile.has(e.moduleExports))
      throw new Error("Cannot attach a CSF file that has not been referenced");
    if (this.attachedCSFFiles.has(e))
      return;
    this.attachedCSFFiles.add(e), this.store.componentStoriesFromCSFFile({ csfFile: e }).forEach((o) => {
      this.nameToStoryId.set(o.name, o.id), this.componentStoriesValue.push(o), this.primaryStory || (this.primaryStory = o);
    });
  }
  referenceMeta(e, t) {
    let o = this.resolveModuleExport(e);
    if (o.type !== "meta")
      throw new Error(
        "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?"
      );
    t && this.attachCSFFile(o.csfFile);
  }
  get projectAnnotations() {
    let { projectAnnotations: e } = this.store;
    if (!e)
      throw new Error("Can't get projectAnnotations from DocsContext before they are initialized");
    return e;
  }
  resolveAttachedModuleExportType(e) {
    if (e === "story") {
      if (!this.primaryStory)
        throw new Error(
          "No primary story attached to this docs file, did you forget to use <Meta of={} />?"
        );
      return { type: "story", story: this.primaryStory };
    }
    if (this.attachedCSFFiles.size === 0)
      throw new Error(
        "No CSF file attached to this docs file, did you forget to use <Meta of={} />?"
      );
    let t = Array.from(this.attachedCSFFiles)[0];
    if (e === "meta")
      return { type: "meta", csfFile: t };
    let { component: o } = t.meta;
    if (!o)
      throw new Error(
        "Attached CSF file does not defined a component, did you forget to export one?"
      );
    return { type: "component", component: o };
  }
  resolveModuleExport(e) {
    let t = this.exportsToCSFFile.get(e);
    if (t)
      return { type: "meta", csfFile: t };
    let o = this.exportToStory.get(e);
    return o ? { type: "story", story: o } : { type: "component", component: e };
  }
  resolveOf(e, t = []) {
    let o;
    if (["component", "meta", "story"].includes(e)) {
      let s = e;
      o = this.resolveAttachedModuleExportType(s);
    } else
      o = this.resolveModuleExport(e);
    if (t.length && !t.includes(o.type)) {
      let s = o.type === "component" ? "component or unknown" : o.type;
      throw new Error(P`Invalid value passed to the 'of' prop. The value was resolved to a '${s}' type but the only types for this block are: ${t.join(
        ", "
      )}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
    }
    switch (o.type) {
      case "component":
        return {
          ...o,
          projectAnnotations: this.projectAnnotations
        };
      case "meta":
        return {
          ...o,
          preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: o.csfFile })
        };
      case "story":
      default:
        return o;
    }
  }
};
n(Tn, "DocsContext");
var pe = Tn;
var En = class En2 {
  constructor(e, t, o, s) {
    this.channel = e;
    this.store = t;
    this.entry = o;
    this.callbacks = s;
    this.type = "docs";
    this.subtype = "csf";
    this.torndown = false;
    this.disableKeyListeners = false;
    this.preparing = false;
    this.id = o.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = true;
    let { entryExports: e, csfFiles: t = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw Te;
    let { importPath: o, title: s } = this.entry, a = this.store.processCSFFileWithCache(
      e,
      o,
      s
    ), l = Object.keys(a.stories)[0];
    this.story = this.store.storyFromCSFFile({ storyId: l, csfFile: a }), this.csfFiles = [a, ...t], this.preparing = false;
  }
  isEqual(e) {
    return !!(this.id === e.id && this.story && this.story === e.story);
  }
  docsContext(e) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let t = new pe(
      this.channel,
      this.store,
      e,
      this.csfFiles
    );
    return this.csfFiles.forEach((o) => t.attachCSFFile(o)), t;
  }
  async renderToElement(e, t) {
    if (!this.story || !this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let o = this.docsContext(t), { docs: s } = this.story.parameters || {};
    if (!s)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let a = await s.renderer(), { render: l } = a, c = n(async () => {
      try {
        await l(o, s, e), this.channel.emit(sr, this.id);
      } catch (i) {
        this.callbacks.showException(i);
      }
    }, "renderDocs");
    return this.rerender = async () => c(), this.teardownRender = async ({ viewModeChanged: i }) => {
      !i || !e || a.unmount(e);
    }, c();
  }
  async teardown({ viewModeChanged: e } = {}) {
    var _a2;
    (_a2 = this.teardownRender) == null ? void 0 : _a2.call(this, { viewModeChanged: e }), this.torndown = true;
  }
};
n(En, "CsfDocsRender");
var Dr = En;
var Rn = class Rn2 {
  constructor(e, t, o, s) {
    this.channel = e;
    this.store = t;
    this.entry = o;
    this.callbacks = s;
    this.type = "docs";
    this.subtype = "mdx";
    this.torndown = false;
    this.disableKeyListeners = false;
    this.preparing = false;
    this.id = o.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = true;
    let { entryExports: e, csfFiles: t = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw Te;
    this.csfFiles = t, this.exports = e, this.preparing = false;
  }
  isEqual(e) {
    return !!(this.id === e.id && this.exports && this.exports === e.exports);
  }
  docsContext(e) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    return new pe(
      this.channel,
      this.store,
      e,
      this.csfFiles
    );
  }
  async renderToElement(e, t) {
    if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
      throw new Error("Cannot render docs before preparing");
    let o = this.docsContext(t), { docs: s } = this.store.projectAnnotations.parameters || {};
    if (!s)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let a = { ...s, page: this.exports.default }, l = await s.renderer(), { render: c } = l, i = n(async () => {
      try {
        await c(o, a, e), this.channel.emit(sr, this.id);
      } catch (p) {
        this.callbacks.showException(p);
      }
    }, "renderDocs");
    return this.rerender = async () => i(), this.teardownRender = async ({ viewModeChanged: p } = {}) => {
      !p || !e || (l.unmount(e), this.torndown = true);
    }, i();
  }
  async teardown({ viewModeChanged: e } = {}) {
    var _a2;
    (_a2 = this.teardownRender) == null ? void 0 : _a2.call(this, { viewModeChanged: e }), this.torndown = true;
  }
};
n(Rn, "MdxDocsRender");
var Nr = Rn;
var nu = globalThis;
function su(r) {
  let e = r.composedPath && r.composedPath()[0] || r.target;
  return /input|textarea/i.test(e.tagName) || e.getAttribute("contenteditable") !== null;
}
n(su, "focusInInput");
var ja = "attached-mdx";
var au = "unattached-mdx";
function iu({ tags: r }) {
  return (r == null ? void 0 : r.includes(au)) || (r == null ? void 0 : r.includes(ja));
}
n(iu, "isMdxEntry");
function xn(r) {
  return r.type === "story";
}
n(xn, "isStoryRender");
function lu(r) {
  return r.type === "docs";
}
n(lu, "isDocsRender");
function cu(r) {
  return lu(r) && r.subtype === "csf";
}
n(cu, "isCsfDocsRender");
var An = class An2 extends De {
  constructor(t, o, s, a) {
    super(t, o, void 0, false);
    this.importFn = t;
    this.getProjectAnnotations = o;
    this.selectionStore = s;
    this.view = a;
    this.initialize();
  }
  setupListeners() {
    super.setupListeners(), nu.onkeydown = this.onKeydown.bind(this), this.channel.on(Vt, this.onSetCurrentStory.bind(this)), this.channel.on(
      Zt,
      this.onUpdateQueryParams.bind(this)
    ), this.channel.on(Bt, this.onPreloadStories.bind(this));
  }
  async setInitialGlobals() {
    if (!this.storyStoreValue)
      throw new G({ methodName: "setInitialGlobals" });
    let { globals: t } = this.selectionStore.selectionSpecifier || {};
    t && this.storyStoreValue.userGlobals.updateFromPersisted(t), this.emitGlobals();
  }
  // If initialization gets as far as the story index, this function runs.
  async initializeWithStoryIndex(t) {
    return await super.initializeWithStoryIndex(t), this.selectSpecifiedStory();
  }
  // Use the selection specifier to choose a story, then render it
  async selectSpecifiedStory() {
    if (!this.storyStoreValue)
      throw new G({
        methodName: "selectSpecifiedStory"
      });
    if (this.selectionStore.selection) {
      await this.renderSelection();
      return;
    }
    if (!this.selectionStore.selectionSpecifier) {
      this.renderMissingStory();
      return;
    }
    let { storySpecifier: t, args: o } = this.selectionStore.selectionSpecifier, s = this.storyStoreValue.storyIndex.entryFromSpecifier(t);
    if (!s) {
      t === "*" ? this.renderStoryLoadingException(t, new Rr()) : this.renderStoryLoadingException(
        t,
        new xr({ storySpecifier: t.toString() })
      );
      return;
    }
    let { id: a, type: l } = s;
    this.selectionStore.setSelection({ storyId: a, viewMode: l }), this.channel.emit(Xt, this.selectionStore.selection), this.channel.emit(
      $r,
      this.selectionStore.selection
    ), await this.renderSelection({ persistedArgs: o });
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: t
  }) {
    await super.onGetProjectAnnotationsChanged({ getProjectAnnotations: t }), this.selectionStore.selection && this.renderSelection();
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: t,
    storyIndex: o
  }) {
    await super.onStoriesChanged({ importFn: t, storyIndex: o }), this.selectionStore.selection ? await this.renderSelection() : await this.selectSpecifiedStory();
  }
  onKeydown(t) {
    if (!this.storyRenders.find((o) => o.disableKeyListeners) && !su(t)) {
      let { altKey: o, ctrlKey: s, metaKey: a, shiftKey: l, key: c, code: i, keyCode: p } = t;
      this.channel.emit(Gt, {
        event: { altKey: o, ctrlKey: s, metaKey: a, shiftKey: l, key: c, code: i, keyCode: p }
      });
    }
  }
  async onSetCurrentStory(t) {
    this.selectionStore.setSelection({ viewMode: "story", ...t }), await this.storeInitializationPromise, this.channel.emit($r, this.selectionStore.selection), this.renderSelection();
  }
  onUpdateQueryParams(t) {
    this.selectionStore.setQueryParams(t);
  }
  async onUpdateGlobals({ globals: t }) {
    var _a2, _b;
    let o = this.currentRender instanceof Fe && this.currentRender.story || void 0;
    super.onUpdateGlobals({ globals: t, currentStory: o }), (this.currentRender instanceof Nr || this.currentRender instanceof Dr) && await ((_b = (_a2 = this.currentRender).rerender) == null ? void 0 : _b.call(_a2));
  }
  async onUpdateArgs({ storyId: t, updatedArgs: o }) {
    super.onUpdateArgs({ storyId: t, updatedArgs: o });
  }
  async onPreloadStories({ ids: t }) {
    await this.storeInitializationPromise, this.storyStoreValue && await Promise.allSettled(t.map((o) => {
      var _a2;
      return (_a2 = this.storyStoreValue) == null ? void 0 : _a2.loadEntry(o);
    }));
  }
  // RENDERING
  // We can either have:
  // - a story selected in "story" viewMode,
  //     in which case we render it to the root element, OR
  // - a story selected in "docs" viewMode,
  //     in which case we render the docsPage for that story
  async renderSelection({ persistedArgs: t } = {}) {
    var _a2, _b, _c2, _d2;
    let { renderToCanvas: o } = this;
    if (!this.storyStoreValue || !o)
      throw new G({ methodName: "renderSelection" });
    let { selection: s } = this.selectionStore;
    if (!s)
      throw new Error("Cannot call renderSelection as no selection was made");
    let { storyId: a } = s, l;
    try {
      l = await this.storyStoreValue.storyIdToEntry(a);
    } catch (S) {
      this.currentRender && await this.teardownRender(this.currentRender), this.renderStoryLoadingException(a, S);
      return;
    }
    let c = ((_a2 = this.currentSelection) == null ? void 0 : _a2.storyId) !== a, i = ((_b = this.currentRender) == null ? void 0 : _b.type) !== l.type;
    l.type === "story" ? this.view.showPreparingStory({ immediate: i }) : this.view.showPreparingDocs({ immediate: i }), ((_c2 = this.currentRender) == null ? void 0 : _c2.isPreparing()) && await this.teardownRender(this.currentRender);
    let p;
    l.type === "story" ? p = new Fe(
      this.channel,
      this.storyStoreValue,
      o,
      this.mainStoryCallbacks(a),
      a,
      "story"
    ) : iu(l) ? p = new Nr(
      this.channel,
      this.storyStoreValue,
      l,
      this.mainStoryCallbacks(a)
    ) : p = new Dr(
      this.channel,
      this.storyStoreValue,
      l,
      this.mainStoryCallbacks(a)
    );
    let u = this.currentSelection;
    this.currentSelection = s;
    let d = this.currentRender;
    this.currentRender = p;
    try {
      await p.prepare();
    } catch (S) {
      d && await this.teardownRender(d), S !== Te && this.renderStoryLoadingException(a, S);
      return;
    }
    let h = !c && d && !p.isEqual(d);
    if (t && xn(p) && (le(!!p.story), this.storyStoreValue.args.updateFromPersisted(p.story, t)), d && !d.torndown && !c && !h && !i) {
      this.currentRender = d, this.channel.emit(Qt, a), this.view.showMain();
      return;
    }
    if (d && await this.teardownRender(d, { viewModeChanged: i }), u && (c || i) && this.channel.emit(Wt, a), xn(p)) {
      le(!!p.story);
      let {
        parameters: S,
        initialArgs: m,
        argTypes: T,
        unmappedArgs: y,
        initialGlobals: x,
        userGlobals: A,
        storyGlobals: g,
        globals: b
      } = this.storyStoreValue.getStoryContext(p.story);
      this.channel.emit(Kt, {
        id: a,
        parameters: S,
        initialArgs: m,
        argTypes: T,
        args: y
      }), this.channel.emit(_e, { userGlobals: A, storyGlobals: g, globals: b, initialGlobals: x });
    } else {
      let { parameters: S } = this.storyStoreValue.projectAnnotations, { initialGlobals: m, globals: T } = this.storyStoreValue.userGlobals;
      if (this.channel.emit(_e, {
        globals: T,
        initialGlobals: m,
        storyGlobals: {},
        userGlobals: T
      }), cu(p) || ((_d2 = p.entry.tags) == null ? void 0 : _d2.includes(ja))) {
        if (!p.csfFiles)
          throw new Er({ storyId: a });
        ({ parameters: S } = this.storyStoreValue.preparedMetaFromCSFFile({
          csfFile: p.csfFiles[0]
        }));
      }
      this.channel.emit(jt, {
        id: a,
        parameters: S
      });
    }
    xn(p) ? (le(!!p.story), this.storyRenders.push(p), this.currentRender.renderToElement(
      this.view.prepareForStory(p.story)
    )) : this.currentRender.renderToElement(
      this.view.prepareForDocs(),
      // This argument is used for docs, which is currently only compatible with HTMLElements
      this.renderStoryToElement.bind(this)
    );
  }
  async teardownRender(t, { viewModeChanged: o = false } = {}) {
    var _a2;
    this.storyRenders = this.storyRenders.filter((s) => s !== t), await ((_a2 = t == null ? void 0 : t.teardown) == null ? void 0 : _a2.call(t, { viewModeChanged: o }));
  }
  // UTILITIES
  mainStoryCallbacks(t) {
    return {
      showStoryDuringRender: n(() => this.view.showStoryDuringRender(), "showStoryDuringRender"),
      showMain: n(() => this.view.showMain(), "showMain"),
      showError: n((o) => this.renderError(t, o), "showError"),
      showException: n((o) => this.renderException(t, o), "showException")
    };
  }
  renderPreviewEntryError(t, o) {
    super.renderPreviewEntryError(t, o), this.view.showErrorDisplay(o);
  }
  renderMissingStory() {
    this.view.showNoPreview(), this.channel.emit(Yr);
  }
  renderStoryLoadingException(t, o) {
    O.error(o), this.view.showErrorDisplay(o), this.channel.emit(Yr, t);
  }
  // renderException is used if we fail to render the story and it is uncaught by the app layer
  renderException(t, o) {
    let { name: s = "Error", message: a = String(o), stack: l } = o;
    this.channel.emit(Jt, { name: s, message: a, stack: l }), this.channel.emit(we, { newPhase: "errored", storyId: t }), this.view.showErrorDisplay(
      o
    ), O.error(`Error rendering story '${t}':`), O.error(o);
  }
  // renderError is used by the various app layers to inform the user they have done something
  // wrong -- for instance returned the wrong thing from a story
  renderError(t, { title: o, description: s }) {
    O.error(`Error rendering story ${o}: ${s}`), this.channel.emit($t, { title: o, description: s }), this.channel.emit(we, { newPhase: "errored", storyId: t }), this.view.showErrorDisplay({
      message: o,
      stack: s
    });
  }
};
n(An, "PreviewWithSelection");
var Ne = An;
var Lr = ue(At(), 1);
var Xa = ue(At(), 1);
var Ka = /^[a-zA-Z0-9 _-]*$/;
var Ja = /^-?[0-9]+(\.[0-9]+)?$/;
var ku = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i;
var Qa = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i;
var In = n((r = "", e) => r === null || r === "" || !Ka.test(r) ? false : e == null || e instanceof Date || typeof e == "number" || typeof e == "boolean" ? true : typeof e == "string" ? Ka.test(e) || Ja.test(e) || ku.test(e) || Qa.test(e) : Array.isArray(e) ? e.every((t) => In(
  r,
  t
)) : W(e) ? Object.entries(e).every(([t, o]) => In(t, o)) : false, "validateArgs");
var Lu = {
  delimiter: ";",
  // we're parsing a single query param
  nesting: true,
  arrayRepeat: true,
  arrayRepeatSyntax: "bracket",
  nestingSyntax: "js",
  // objects are encoded using dot notation
  valueDeserializer(r) {
    if (r.startsWith("!")) {
      if (r === "!undefined")
        return;
      if (r === "!null")
        return null;
      if (r === "!true")
        return true;
      if (r === "!false")
        return false;
      if (r.startsWith("!date(") && r.endsWith(")"))
        return new Date(r.replaceAll(" ", "+").slice(6, -1));
      if (r.startsWith("!hex(") && r.endsWith(")"))
        return `#${r.slice(5, -1)}`;
      let e = r.slice(1).match(Qa);
      if (e)
        return r.startsWith("!rgba") || r.startsWith("!RGBA") ? `${e[1]}(${e[2]}, ${e[3]}, ${e[4]}, ${e[5]})` : r.startsWith("!hsla") || r.startsWith(
          "!HSLA"
        ) ? `${e[1]}(${e[2]}, ${e[3]}%, ${e[4]}%, ${e[5]})` : r.startsWith("!rgb") || r.startsWith("!RGB") ? `${e[1]}(${e[2]}, ${e[3]}, ${e[4]})` : `${e[1]}(${e[2]}, ${e[3]}%, ${e[4]}%)`;
    }
    return Ja.test(r) ? Number(r) : r;
  }
};
var Fn = n((r) => {
  let e = r.split(";").map((t) => t.replace("=", "~").replace(":", "="));
  return Object.entries((0, Xa.parse)(e.join(";"), Lu)).reduce((t, [o, s]) => In(o, s) ? Object.assign(t, { [o]: s }) : (L.warn(P`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `), t), {});
}, "parseArgsParam");
var { history: Za, document: Ee } = R;
function ju(r) {
  let e = (r || "").match(/^\/story\/(.+)/);
  if (!e)
    throw new Error(`Invalid path '${r}',  must start with '/story/'`);
  return e[1];
}
n(ju, "pathToId");
var ei = n(({
  selection: r,
  extraParams: e
}) => {
  let t = Ee == null ? void 0 : Ee.location.search.slice(1), { path: o, selectedKind: s, selectedStory: a, ...l } = (0, Lr.parse)(t);
  return `?${(0, Lr.stringify)({
    ...l,
    ...e,
    ...r && { id: r.storyId, viewMode: r.viewMode }
  })}`;
}, "getQueryString");
var Mu = n((r) => {
  if (!r)
    return;
  let e = ei({ selection: r }), { hash: t = "" } = Ee.location;
  Ee.title = r.storyId, Za.replaceState({}, "", `${Ee.location.pathname}${e}${t}`);
}, "setPath");
var qu = n((r) => r != null && typeof r == "object" && Array.isArray(r) === false, "isObject");
var kr = n(
  (r) => {
    if (r !== void 0) {
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return kr(r[0]);
      if (qu(r))
        return kr(
          Object.values(r).filter(Boolean)
        );
    }
  },
  "getFirstString"
);
var Uu = n(() => {
  if (typeof Ee < "u") {
    let r = Ee.location.search.slice(1), e = (0, Lr.parse)(r), t = typeof e.args == "string" ? Fn(e.args) : void 0, o = typeof e.globals == "string" ? Fn(e.globals) : void 0, s = kr(e.viewMode);
    (typeof s != "string" || !s.match(/docs|story/)) && (s = "story");
    let a = kr(e.path), l = a ? ju(a) : kr(e.id);
    if (l)
      return { storySpecifier: l, args: t, globals: o, viewMode: s };
  }
  return null;
}, "getSelectionSpecifierFromPath");
var Dn = class Dn2 {
  constructor() {
    this.selectionSpecifier = Uu();
  }
  setSelection(e) {
    this.selection = e, Mu(this.selection);
  }
  setQueryParams(e) {
    let t = ei({ extraParams: e }), { hash: o = "" } = Ee.location;
    Za.replaceState({}, "", `${Ee.location.pathname}${t}${o}`);
  }
};
n(Dn, "UrlStore");
var je = Dn;
var Fi = ue(Ci(), 1);
var Di = ue(At(), 1);
var { document: H } = R;
var Oi = 100;
var Ni = ((a) => (a.MAIN = "MAIN", a.NOPREVIEW = "NOPREVIEW", a.PREPARING_STORY = "PREPARING_STORY", a.PREPARING_DOCS = "PREPARING_DOCS", a.ERROR = "ERROR", a))(Ni || {});
var Un = {
  PREPARING_STORY: "sb-show-preparing-story",
  PREPARING_DOCS: "sb-show-preparing-docs",
  MAIN: "sb-show-main",
  NOPREVIEW: "sb-show-nopreview",
  ERROR: "sb-show-errordisplay"
};
var Bn = {
  centered: "sb-main-centered",
  fullscreen: "sb-main-fullscreen",
  padded: "sb-main-padded"
};
var Ii = new Fi.default({
  escapeXML: true
});
var Gn = class Gn2 {
  constructor() {
    this.testing = false;
    if (typeof H < "u") {
      let { __SPECIAL_TEST_PARAMETER__: e } = (0, Di.parse)(H.location.search.slice(1));
      switch (e) {
        case "preparing-story": {
          this.showPreparingStory(), this.testing = true;
          break;
        }
        case "preparing-docs": {
          this.showPreparingDocs(), this.testing = true;
          break;
        }
        default:
      }
    }
  }
  // Get ready to render a story, returning the element to render to
  prepareForStory(e) {
    return this.showStory(), this.applyLayout(e.parameters.layout), H.documentElement.scrollTop = 0, H.documentElement.scrollLeft = 0, this.storyRoot();
  }
  storyRoot() {
    return H.getElementById("storybook-root");
  }
  prepareForDocs() {
    return this.showMain(), this.showDocs(), this.applyLayout("fullscreen"), H.documentElement.scrollTop = 0, H.documentElement.scrollLeft = 0, this.docsRoot();
  }
  docsRoot() {
    return H.getElementById("storybook-docs");
  }
  applyLayout(e = "padded") {
    if (e === "none") {
      H.body.classList.remove(this.currentLayoutClass), this.currentLayoutClass = null;
      return;
    }
    this.checkIfLayoutExists(e);
    let t = Bn[e];
    H.body.classList.remove(this.currentLayoutClass), H.body.classList.add(t), this.currentLayoutClass = t;
  }
  checkIfLayoutExists(e) {
    Bn[e] || O.warn(
      P`
          The desired layout: ${e} is not a valid option.
          The possible options are: ${Object.keys(Bn).join(", ")}, none.
        `
    );
  }
  showMode(e) {
    clearTimeout(this.preparingTimeout), Object.keys(Ni).forEach((t) => {
      t === e ? H.body.classList.add(Un[t]) : H.body.classList.remove(Un[t]);
    });
  }
  showErrorDisplay({ message: e = "", stack: t = "" }) {
    let o = e, s = t, a = e.split(`
`);
    a.length > 1 && ([o] = a, s = a.slice(1).join(`
`).replace(/^\n/, "")), H.getElementById("error-message").innerHTML = Ii.toHtml(o), H.getElementById("error-stack").innerHTML = Ii.toHtml(s), this.showMode("ERROR");
  }
  showNoPreview() {
    var _a2, _b;
    this.testing || (this.showMode("NOPREVIEW"), (_a2 = this.storyRoot()) == null ? void 0 : _a2.setAttribute("hidden", "true"), (_b = this.docsRoot()) == null ? void 0 : _b.setAttribute("hidden", "true"));
  }
  showPreparingStory({ immediate: e = false } = {}) {
    clearTimeout(this.preparingTimeout), e ? this.showMode("PREPARING_STORY") : this.preparingTimeout = setTimeout(
      () => this.showMode("PREPARING_STORY"),
      Oi
    );
  }
  showPreparingDocs({ immediate: e = false } = {}) {
    clearTimeout(this.preparingTimeout), e ? this.showMode("PREPARING_DOCS") : this.preparingTimeout = setTimeout(() => this.showMode("PREPARING_DOCS"), Oi);
  }
  showMain() {
    this.showMode("MAIN");
  }
  showDocs() {
    this.storyRoot().setAttribute("hidden", "true"), this.docsRoot().removeAttribute("hidden");
  }
  showStory() {
    this.docsRoot().setAttribute("hidden", "true"), this.storyRoot().removeAttribute("hidden");
  }
  showStoryDuringRender() {
    H.body.classList.add(Un.MAIN);
  }
};
n(Gn, "WebView");
var qe = Gn;
var Vn = class Vn2 extends Ne {
  constructor(t, o) {
    super(t, o, new je(), new qe());
    this.importFn = t;
    this.getProjectAnnotations = o;
    R.__STORYBOOK_PREVIEW__ = this;
  }
};
n(Vn, "PreviewWeb");
var Mr = Vn;
var { document: Ue } = R;
var Rf = [
  "application/javascript",
  "application/ecmascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript",
  // Support modern javascript
  "module"
];
var xf = "script";
var ki = "scripts-root";
function qr() {
  let r = Ue.createEvent("Event");
  r.initEvent("DOMContentLoaded", true, true), Ue.dispatchEvent(r);
}
n(qr, "simulateDOMContentLoaded");
function Af(r, e, t) {
  let o = Ue.createElement("script");
  o.type = r.type === "module" ? "module" : "text/javascript", r.src ? (o.onload = e, o.onerror = e, o.src = r.src) : o.textContent = r.innerText, t ? t.appendChild(o) : Ue.head.appendChild(o), r.parentNode.removeChild(r), r.src || e();
}
n(Af, "insertScript");
function Li(r, e, t = 0) {
  r[t](() => {
    t++, t === r.length ? e() : Li(r, e, t);
  });
}
n(Li, "insertScriptsSequentially");
function Hn(r) {
  let e = Ue.getElementById(ki);
  e ? e.innerHTML = "" : (e = Ue.createElement("div"), e.id = ki, Ue.body.appendChild(e));
  let t = Array.from(r.querySelectorAll(xf));
  if (t.length) {
    let o = [];
    t.forEach((s) => {
      let a = s.getAttribute("type");
      (!a || Rf.includes(a)) && o.push((l) => Af(s, l, e));
    }), o.length && Li(o, qr, void 0);
  } else
    qr();
}
n(Hn, "simulatePageLoad");
var ji = {
  "@storybook/global": Dt,
  "storybook/internal/channels": yr,
  "@storybook/channels": yr,
  "@storybook/core/channels": yr,
  "storybook/internal/client-logger": pr,
  "@storybook/client-logger": pr,
  "@storybook/core/client-logger": pr,
  "storybook/internal/core-events": fe,
  "@storybook/core-events": fe,
  "@storybook/core/core-events": fe,
  "storybook/internal/preview-errors": Pr,
  "@storybook/core-events/preview-errors": Pr,
  "@storybook/core/preview-errors": Pr,
  "storybook/internal/preview-api": Ur,
  "@storybook/preview-api": Ur,
  "@storybook/core/preview-api": Ur,
  "storybook/internal/types": mr,
  "@storybook/types": mr,
  "@storybook/core/types": mr
};
var qi = ue(Mi(), 1);
var $n;
function _f() {
  var _a2;
  return $n || ($n = new qi.default((_a2 = R.navigator) == null ? void 0 : _a2.userAgent).getBrowserInfo()), $n;
}
n(_f, "getBrowserInfo");
function Ui(r) {
  return r.browserInfo = _f(), r;
}
n(Ui, "prepareForTelemetry");
function wf(r) {
  let e = r.error || r;
  e.fromStorybook && R.sendTelemetryError(e);
}
n(wf, "errorListener");
function vf({ reason: r }) {
  r.fromStorybook && R.sendTelemetryError(r);
}
n(vf, "unhandledRejectionListener");
function Pf() {
  Yn.forEach((r) => {
    R[to[r]] = ji[r];
  }), R.sendTelemetryError = (r) => {
    R.__STORYBOOK_ADDONS_CHANNEL__.emit(eo, Ui(r));
  }, R.addEventListener("error", wf), R.addEventListener("unhandledrejection", vf);
}
n(Pf, "setup");
Pf();
export {
  Pf as setup
};
//# sourceMappingURL=storybook_internal_preview_runtime.js.map
