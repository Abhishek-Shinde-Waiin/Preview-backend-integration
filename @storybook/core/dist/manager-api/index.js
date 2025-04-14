var Cr = Object.create;
var Pe = Object.defineProperty;
var zr = Object.getOwnPropertyDescriptor;
var Hr = Object.getOwnPropertyNames;
var Tr = Object.getPrototypeOf, Lr = Object.prototype.hasOwnProperty;
var n = (e, t) => Pe(e, "name", { value: t, configurable: !0 }), de = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Kt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), T = (e, t) => {
  for (var r in t)
    Pe(e, r, { get: t[r], enumerable: !0 });
}, Or = (e, t, r, a) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Hr(t))
      !Lr.call(e, o) && o !== r && Pe(e, o, { get: () => t[o], enumerable: !(a = zr(t, o)) || a.enumerable });
  return e;
};
var _e = (e, t, r) => (r = e != null ? Cr(Tr(e)) : {}, Or(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Pe(r, "default", { value: e, enumerable: !0 }) : r,
  e
));

// ../node_modules/memoizerific/memoizerific.js
var He = Kt((C0, st) => {
  (function(e) {
    if (typeof C0 == "object" && typeof st < "u")
      st.exports = e();
    else if (typeof define == "function" && define.amd)
      define([], e);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e();
    }
  })(function() {
    var e, t, r;
    return (/* @__PURE__ */ n(function a(o, l, s) {
      function i(h, u) {
        if (!l[h]) {
          if (!o[h]) {
            var p = typeof de == "function" && de;
            if (!u && p) return p(h, !0);
            if (c) return c(h, !0);
            var v = new Error("Cannot find module '" + h + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var g = l[h] = { exports: {} };
          o[h][0].call(g.exports, function(m) {
            var w = o[h][1][m];
            return i(w || m);
          }, g, g.exports, a, o, l, s);
        }
        return l[h].exports;
      }
      n(i, "s");
      for (var c = typeof de == "function" && de, d = 0; d < s.length; d++) i(s[d]);
      return i;
    }, "e"))({ 1: [function(a, o, l) {
      o.exports = function(s) {
        if (typeof Map != "function" || s) {
          var i = a("./similar");
          return new i();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(a, o, l) {
      function s() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      n(s, "Similar"), s.prototype.get = function(i) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, i))
          return this.lastItem.val;
        if (c = this.indexOf(i), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, s.prototype.set = function(i, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? (this.lastItem.val = c, this) : (d = this.indexOf(i), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: i, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, s.prototype.delete = function(i) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0), c = this.indexOf(i), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, s.prototype.has = function(i) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? !0 : (c = this.indexOf(i), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, s.prototype.forEach = function(i, c) {
        var d;
        for (d = 0; d < this.size; d++)
          i.call(c || this, this.list[d].val, this.list[d].key, this);
      }, s.prototype.indexOf = function(i) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, i))
            return c;
        return -1;
      }, s.prototype.isEqual = function(i, c) {
        return i === c || i !== i && c !== c;
      }, o.exports = s;
    }, {}], 3: [function(a, o, l) {
      var s = a("map-or-similar");
      o.exports = function(h) {
        var u = new s(!1), p = [];
        return function(v) {
          var g = /* @__PURE__ */ n(function() {
            var m = u, w, y, R = arguments.length - 1, S = Array(R + 1), E = !0, x;
            if ((g.numArgs || g.numArgs === 0) && g.numArgs !== R + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (x = 0; x < R; x++) {
              if (S[x] = {
                cacheItem: m,
                arg: arguments[x]
              }, m.has(arguments[x])) {
                m = m.get(arguments[x]);
                continue;
              }
              E = !1, w = new s(!1), m.set(arguments[x], w), m = w;
            }
            return E && (m.has(arguments[R]) ? y = m.get(arguments[R]) : E = !1), E || (y = v.apply(null, arguments), m.set(arguments[R], y)),
            h > 0 && (S[R] = {
              cacheItem: m,
              arg: arguments[R]
            }, E ? i(p, S) : p.push(S), p.length > h && c(p.shift())), g.wasMemoized = E, g.numArgs = R + 1, y;
          }, "memoizerific");
          return g.limit = h, g.wasMemoized = !1, g.cache = u, g.lru = p, g;
        };
      };
      function i(h, u) {
        var p = h.length, v = u.length, g, m, w;
        for (m = 0; m < p; m++) {
          for (g = !0, w = 0; w < v; w++)
            if (!d(h[m][w].arg, u[w].arg)) {
              g = !1;
              break;
            }
          if (g)
            break;
        }
        h.push(h.splice(m, 1)[0]);
      }
      n(i, "moveToMostRecentLru");
      function c(h) {
        var u = h.length, p = h[u - 1], v, g;
        for (p.cacheItem.delete(p.arg), g = u - 2; g >= 0 && (p = h[g], v = p.cacheItem.get(p.arg), !v || !v.size); g--)
          p.cacheItem.delete(p.arg);
      }
      n(c, "removeCachedResult");
      function d(h, u) {
        return h === u || h !== h && u !== u;
      }
      n(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/store2/dist/store2.js
var X0 = Kt((Be, Ve) => {
  (function(e, t) {
    var r = {
      version: "2.14.2",
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
      inherit: /* @__PURE__ */ n(function(o, l) {
        for (var s in o)
          l.hasOwnProperty(s) || Object.defineProperty(l, s, Object.getOwnPropertyDescriptor(o, s));
        return l;
      }, "inherit"),
      stringify: /* @__PURE__ */ n(function(o, l) {
        return o === void 0 || typeof o == "function" ? o + "" : JSON.stringify(o, l || r.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ n(function(o, l) {
        try {
          return JSON.parse(o, l || r.revive);
        } catch {
          return o;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ n(function(o, l) {
        r.storeAPI[o] = l;
        for (var s in r.apis)
          r.apis[s][o] = l;
      }, "fn"),
      get: /* @__PURE__ */ n(function(o, l) {
        return o.getItem(l);
      }, "get"),
      set: /* @__PURE__ */ n(function(o, l, s) {
        o.setItem(l, s);
      }, "set"),
      remove: /* @__PURE__ */ n(function(o, l) {
        o.removeItem(l);
      }, "remove"),
      key: /* @__PURE__ */ n(function(o, l) {
        return o.key(l);
      }, "key"),
      length: /* @__PURE__ */ n(function(o) {
        return o.length;
      }, "length"),
      clear: /* @__PURE__ */ n(function(o) {
        o.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ n(function(o, l, s) {
        var i = r.inherit(r.storeAPI, function(d, h, u) {
          return arguments.length === 0 ? i.getAll() : typeof h == "function" ? i.transact(d, h, u) : h !== void 0 ? i.set(d, h, u) : typeof d ==
          "string" || typeof d == "number" ? i.get(d) : typeof d == "function" ? i.each(d) : d ? i.setAll(d, h) : i.clear();
        });
        i._id = o;
        try {
          var c = "__store2_test";
          l.setItem(c, "ok"), i._area = l, l.removeItem(c);
        } catch {
          i._area = r.storage("fake");
        }
        return i._ns = s || "", r.areas[o] || (r.areas[o] = i._area), r.apis[i._ns + i._id] || (r.apis[i._ns + i._id] = i), i;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ n(function(o, l) {
          var s = this[o];
          return (!s || !s.area) && (s = r.Store(o, l, this._ns), this[o] || (this[o] = s)), s;
        }, "area"),
        namespace: /* @__PURE__ */ n(function(o, l, s) {
          if (s = s || this._delim || r.nsdelim, !o)
            return this._ns ? this._ns.substring(0, this._ns.length - s.length) : "";
          var i = o, c = this[i];
          if ((!c || !c.namespace) && (c = r.Store(this._id, this._area, this._ns + i + s), c._delim = s, this[i] || (this[i] = c), !l))
            for (var d in r.areas)
              c.area(d, r.areas[d]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ n(function(o) {
          return o ? (this._real = this._area, this._area = r.storage("fake")) : o === !1 && (this._area = this._real || this._area), this._area.
          name === "fake";
        }, "isFake"),
        toString: /* @__PURE__ */ n(function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        }, "toString"),
        // storage functions
        has: /* @__PURE__ */ n(function(o) {
          return this._area.has ? this._area.has(this._in(o)) : this._in(o) in this._area;
        }, "has"),
        size: /* @__PURE__ */ n(function() {
          return this.keys().length;
        }, "size"),
        each: /* @__PURE__ */ n(function(o, l) {
          for (var s = 0, i = r.length(this._area); s < i; s++) {
            var c = this._out(r.key(this._area, s));
            if (c !== void 0 && o.call(this, c, this.get(c), l) === !1)
              break;
            i > r.length(this._area) && (i--, s--);
          }
          return l || this;
        }, "each"),
        keys: /* @__PURE__ */ n(function(o) {
          return this.each(function(l, s, i) {
            i.push(l);
          }, o || []);
        }, "keys"),
        get: /* @__PURE__ */ n(function(o, l) {
          var s = r.get(this._area, this._in(o)), i;
          return typeof l == "function" && (i = l, l = null), s !== null ? r.parse(s, i) : l ?? s;
        }, "get"),
        getAll: /* @__PURE__ */ n(function(o) {
          return this.each(function(l, s, i) {
            i[l] = s;
          }, o || {});
        }, "getAll"),
        transact: /* @__PURE__ */ n(function(o, l, s) {
          var i = this.get(o, s), c = l(i);
          return this.set(o, c === void 0 ? i : c), this;
        }, "transact"),
        set: /* @__PURE__ */ n(function(o, l, s) {
          var i = this.get(o), c;
          return i != null && s === !1 ? l : (typeof s == "function" && (c = s, s = void 0), r.set(this._area, this._in(o), r.stringify(l, c),
          s) || i);
        }, "set"),
        setAll: /* @__PURE__ */ n(function(o, l) {
          var s, i;
          for (var c in o)
            i = o[c], this.set(c, i, l) !== i && (s = !0);
          return s;
        }, "setAll"),
        add: /* @__PURE__ */ n(function(o, l, s) {
          var i = this.get(o);
          if (i instanceof Array)
            l = i.concat(l);
          else if (i !== null) {
            var c = typeof i;
            if (c === typeof l && c === "object") {
              for (var d in l)
                i[d] = l[d];
              l = i;
            } else
              l = i + l;
          }
          return r.set(this._area, this._in(o), r.stringify(l, s)), l;
        }, "add"),
        remove: /* @__PURE__ */ n(function(o, l) {
          var s = this.get(o, l);
          return r.remove(this._area, this._in(o)), s;
        }, "remove"),
        clear: /* @__PURE__ */ n(function() {
          return this._ns ? this.each(function(o) {
            r.remove(this._area, this._in(o));
          }, 1) : r.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ n(function() {
          var o = this._area;
          for (var l in r.areas)
            r.areas.hasOwnProperty(l) && (this._area = r.areas[l], this.clear());
          return this._area = o, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ n(function(o) {
          return typeof o != "string" && (o = r.stringify(o)), this._ns ? this._ns + o : o;
        }, "_in"),
        _out: /* @__PURE__ */ n(function(o) {
          return this._ns ? o && o.indexOf(this._ns) === 0 ? o.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            o
          );
        }, "_out")
      },
      // end _.storeAPI
      storage: /* @__PURE__ */ n(function(o) {
        return r.inherit(r.storageAPI, { items: {}, name: o });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ n(function(o) {
          return this.items.hasOwnProperty(o);
        }, "has"),
        key: /* @__PURE__ */ n(function(o) {
          var l = 0;
          for (var s in this.items)
            if (this.has(s) && o === l++)
              return s;
        }, "key"),
        setItem: /* @__PURE__ */ n(function(o, l) {
          this.has(o) || this.length++, this.items[o] = l;
        }, "setItem"),
        removeItem: /* @__PURE__ */ n(function(o) {
          this.has(o) && (delete this.items[o], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ n(function(o) {
          return this.has(o) ? this.items[o] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ n(function() {
          for (var o in this.items)
            this.removeItem(o);
        }, "clear")
      }
      // end _.storageAPI
    }, a = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      r.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    a.local = a, a._ = r, a.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), a.area("page", r.storage("page")), typeof t == "function" && t.amd !== void 0 ? t("store2", [], function() {
      return a;
    }) : typeof Ve < "u" && Ve.exports ? Ve.exports = a : (e.store && (r.conflict = e.store), e.store = a);
  })(Be, Be && Be.define);
});

// src/manager-api/root.tsx
import ie, {
  Component as n5,
  Fragment as o5,
  useCallback as Ue,
  useContext as Wt,
  useEffect as _r,
  useMemo as $t,
  useRef as Er
} from "react";
import { deprecate as Gt } from "@storybook/core/client-logger";
import {
  SET_STORIES as l5,
  SHARED_STATE_CHANGED as Ar,
  SHARED_STATE_SET as Re,
  STORY_CHANGED as i5
} from "@storybook/core/core-events";

// ../node_modules/es-toolkit/dist/array/countBy.mjs
function Ke(e, t) {
  let r = {};
  for (let a = 0; a < e.length; a++) {
    let o = e[a], l = t(o);
    r[l] = (r[l] ?? 0) + 1;
  }
  return r;
}
n(Ke, "countBy");

// ../node_modules/es-toolkit/dist/array/partition.mjs
function be(e, t) {
  let r = [], a = [];
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    t(l) ? r.push(l) : a.push(l);
  }
  return [r, a];
}
n(be, "partition");

// ../node_modules/es-toolkit/dist/object/pick.mjs
function q(e, t) {
  let r = {};
  for (let a = 0; a < t.length; a++) {
    let o = t[a];
    Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
  }
  return r;
}
n(q, "pick");

// ../node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function qt(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
n(qt, "isTypedArray");

// ../node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function Yt(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
n(Yt, "isPrimitive");

// ../node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function qe(e) {
  if (typeof e != "object" || e == null)
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  if (e.toString() !== "[object Object]")
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
n(qe, "isPlainObject");

// ../node_modules/es-toolkit/dist/object/mapValues.mjs
function Ye(e, t) {
  let r = {}, a = Object.keys(e);
  for (let o = 0; o < a.length; o++) {
    let l = a[o], s = e[l];
    r[l] = t(s, l, e);
  }
  return r;
}
n(Ye, "mapValues");

// ../node_modules/es-toolkit/dist/object/cloneDeep.mjs
function Qt(e) {
  return J(e);
}
n(Qt, "cloneDeep");
function J(e, t = /* @__PURE__ */ new Map()) {
  if (Yt(e))
    return e;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    t.set(e, r);
    for (let a = 0; a < e.length; a++)
      r[a] = J(e[a], t);
    return Object.prototype.hasOwnProperty.call(e, "index") && (r.index = e.index), Object.prototype.hasOwnProperty.call(e, "input") && (r.input =
    e.input), r;
  }
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp) {
    let r = new RegExp(e.source, e.flags);
    return r.lastIndex = e.lastIndex, r;
  }
  if (e instanceof Map) {
    let r = /* @__PURE__ */ new Map();
    t.set(e, r);
    for (let [a, o] of e.entries())
      r.set(a, J(o, t));
    return r;
  }
  if (e instanceof Set) {
    let r = /* @__PURE__ */ new Set();
    t.set(e, r);
    for (let a of e.values())
      r.add(J(a, t));
    return r;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (qt(e)) {
    let r = new (Object.getPrototypeOf(e)).constructor(e.length);
    t.set(e, r);
    for (let a = 0; a < e.length; a++)
      r[a] = J(e[a], t);
    return r;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    let r = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return t.set(e, r), he(r, e, t), r;
  }
  if (typeof File < "u" && e instanceof File) {
    let r = new File([e], e.name, { type: e.type });
    return t.set(e, r), he(r, e, t), r;
  }
  if (e instanceof Blob) {
    let r = new Blob([e], { type: e.type });
    return t.set(e, r), he(r, e, t), r;
  }
  if (e instanceof Error) {
    let r = new e.constructor();
    return t.set(e, r), r.message = e.message, r.name = e.name, r.stack = e.stack, r.cause = e.cause, he(r, e, t), r;
  }
  if (typeof e == "object" && e !== null) {
    let r = {};
    return t.set(e, r), he(r, e, t), r;
  }
  return e;
}
n(J, "cloneDeepImpl");
function he(e, t, r) {
  let a = Object.keys(t);
  for (let o = 0; o < a.length; o++) {
    let l = a[o], s = Object.getOwnPropertyDescriptor(t, l);
    (s?.writable || s?.set) && (e[l] = J(t[l], r));
  }
}
n(he, "copyProperties");

// ../node_modules/es-toolkit/dist/compat/predicate/isObjectLike.mjs
function Z(e) {
  return typeof e == "object" && e !== null;
}
n(Z, "isObjectLike");

// ../node_modules/es-toolkit/dist/object/merge.mjs
function Me(e, t) {
  let r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    let o = r[a], l = t[o], s = e[o];
    Array.isArray(l) ? e[o] = Me(s ?? [], l) : Z(s) && Z(l) ? e[o] = Me(s ?? {}, l) : (s === void 0 || l !== void 0) && (e[o] = l);
  }
  return e;
}
n(Me, "merge");

// ../node_modules/es-toolkit/dist/object/toMerged.mjs
function ue(e, t) {
  return Me(Qt(e), t);
}
n(ue, "toMerged");

// ../node_modules/es-toolkit/dist/object/mergeWith.mjs
function W(e, t, r) {
  let a = Object.keys(t);
  for (let o = 0; o < a.length; o++) {
    let l = a[o], s = t[l], i = e[l], c = r(i, s, l, e, t);
    c != null ? e[l] = c : Array.isArray(s) ? e[l] = W(i ?? [], s, r) : Z(i) && Z(s) ? e[l] = W(i ?? {}, s, r) : (i === void 0 || s !== void 0) &&
    (e[l] = s);
  }
  return e;
}
n(W, "mergeWith");

// ../node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var Jt = "[object RegExp]", Zt = "[object String]", Xt = "[object Number]", e0 = "[object Boolean]", Qe = "[object Arguments]", t0 = "[objec\
t Symbol]", r0 = "[object Date]", a0 = "[object Map]", n0 = "[object Set]", o0 = "[object Array]", l0 = "[object Function]", i0 = "[object A\
rrayBuffer]", Ce = "[object Object]", c0 = "[object Error]", s0 = "[object DataView]", f0 = "[object Uint8Array]", d0 = "[object Uint8Clampe\
dArray]", h0 = "[object Uint16Array]", u0 = "[object Uint32Array]", p0 = "[object BigUint64Array]", v0 = "[object Int8Array]", m0 = "[object\
 Int16Array]", g0 = "[object Int32Array]", w0 = "[object BigInt64Array]", y0 = "[object Float32Array]", R0 = "[object Float64Array]";

// ../node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function Je(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
n(Je, "getSymbols");

// ../node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function Ze(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
n(Ze, "getTag");

// ../node_modules/es-toolkit/dist/predicate/isEqual.mjs
function D(e, t) {
  if (typeof e == typeof t)
    switch (typeof e) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return e === t;
      case "number":
        return e === t || Object.is(e, t);
      case "function":
        return e === t;
      case "object":
        return $(e, t);
    }
  return $(e, t);
}
n(D, "isEqual");
function $(e, t, r) {
  if (Object.is(e, t))
    return !0;
  let a = Ze(e), o = Ze(t);
  if (a === Qe && (a = Ce), o === Qe && (o = Ce), a !== o)
    return !1;
  switch (a) {
    case Zt:
      return e.toString() === t.toString();
    case Xt: {
      let i = e.valueOf(), c = t.valueOf();
      return i === c || Number.isNaN(i) && Number.isNaN(c);
    }
    case e0:
    case r0:
    case t0:
      return Object.is(e.valueOf(), t.valueOf());
    case Jt:
      return e.source === t.source && e.flags === t.flags;
    case l0:
      return e === t;
  }
  r = r ?? /* @__PURE__ */ new Map();
  let l = r.get(e), s = r.get(t);
  if (l != null && s != null)
    return l === t;
  r.set(e, t), r.set(t, e);
  try {
    switch (a) {
      case a0: {
        if (e.size !== t.size)
          return !1;
        for (let [i, c] of e.entries())
          if (!t.has(i) || !$(c, t.get(i), r))
            return !1;
        return !0;
      }
      case n0: {
        if (e.size !== t.size)
          return !1;
        let i = Array.from(e.values()), c = Array.from(t.values());
        for (let d = 0; d < i.length; d++) {
          let h = i[d], u = c.findIndex((p) => $(h, p, r));
          if (u === -1)
            return !1;
          c.splice(u, 1);
        }
        return !0;
      }
      case o0:
      case f0:
      case d0:
      case h0:
      case u0:
      case p0:
      case v0:
      case m0:
      case g0:
      case w0:
      case y0:
      case R0: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let i = 0; i < e.length; i++)
          if (!$(e[i], t[i], r))
            return !1;
        return !0;
      }
      case i0:
        return e.byteLength !== t.byteLength ? !1 : $(new Uint8Array(e), new Uint8Array(t), r);
      case s0:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : $(e.buffer, t.buffer, r);
      case c0:
        return e.name === t.name && e.message === t.message;
      case Ce: {
        if (!($(e.constructor, t.constructor, r) || qe(e) && qe(t)))
          return !1;
        let c = [...Object.keys(e), ...Je(e)], d = [...Object.keys(t), ...Je(t)];
        if (c.length !== d.length)
          return !1;
        for (let h = 0; h < c.length; h++) {
          let u = c[h], p = e[u];
          if (!Object.prototype.hasOwnProperty.call(t, u))
            return !1;
          let v = t[u];
          if (!$(p, v, r))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    r.delete(e), r.delete(t);
  }
}
n($, "areObjectsEqual");

// src/manager-api/context.ts
import { createContext as Br } from "react";
var S0 = /* @__PURE__ */ n(({ api: e, state: t }) => Br({ api: e, state: t }), "createContext");

// src/manager-api/lib/merge.ts
import { logger as I0 } from "@storybook/core/client-logger";
var F = /* @__PURE__ */ n((e, ...t) => {
  let r = {};
  r = W({}, e, (a, o) => {
    if (Array.isArray(o) && Array.isArray(a))
      return o.forEach((l) => {
        a.find((i) => i === l || D(i, l)) || a.push(l);
      }), a;
    if (Array.isArray(a))
      return I0.log(["the types mismatch, picking", a]), a;
  });
  for (let a of t)
    r = W(r, a, (o, l) => {
      if (Array.isArray(l) && Array.isArray(o))
        return l.forEach((s) => {
          o.find((c) => c === s || D(c, s)) || o.push(s);
        }), o;
      if (Array.isArray(o))
        return I0.log(["the types mismatch, picking", o]), o;
    });
  return r;
}, "default"), x0 = /* @__PURE__ */ n((e, ...t) => {
  let r = {};
  r = W({}, e, (a, o) => {
    if (Array.isArray(o))
      return o;
  });
  for (let a of t)
    r = W(r, a, (o, l) => {
      if (Array.isArray(l))
        return l;
    });
  return r;
}, "noArrayMerge");

// src/manager-api/initial-state.ts
var Vr = /* @__PURE__ */ n((...e) => e.reduce((t, r) => F(t, r), {}), "main"), ze = Vr;

// src/manager-api/lib/addons.ts
import { Addon_TypesEnum as A0 } from "@storybook/core/types";

// ../node_modules/@storybook/global/dist/index.mjs
var A = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// src/manager-api/lib/addons.ts
import { logger as Nr } from "@storybook/core/client-logger";
import { SET_CONFIG as E0 } from "@storybook/core/core-events";

// src/manager-api/lib/storybook-channel-mock.ts
import { Channel as Dr } from "@storybook/core/channels";
function Xe() {
  let e = {
    setHandler: /* @__PURE__ */ n(() => {
    }, "setHandler"),
    send: /* @__PURE__ */ n(() => {
    }, "send")
  };
  return new Dr({ transport: e });
}
n(Xe, "mockChannel");

// src/manager-api/lib/addons.ts
var rt = class rt {
  constructor() {
    this.loaders = {};
    this.elements = {};
    this.config = {};
    this.getChannel = /* @__PURE__ */ n(() => (this.channel || this.setChannel(Xe()), this.channel), "getChannel");
    this.ready = /* @__PURE__ */ n(() => this.promise, "ready");
    this.hasChannel = /* @__PURE__ */ n(() => !!this.channel, "hasChannel");
    this.setChannel = /* @__PURE__ */ n((t) => {
      this.channel = t, this.resolve();
    }, "setChannel");
    this.setConfig = /* @__PURE__ */ n((t) => {
      Object.assign(this.config, t), this.hasChannel() ? this.getChannel().emit(E0, this.config) : this.ready().then((r) => {
        r.emit(E0, this.config);
      });
    }, "setConfig");
    this.getConfig = /* @__PURE__ */ n(() => this.config, "getConfig");
    /**
     * Registers an addon loader function.
     *
     * @param {string} id - The id of the addon loader.
     * @param {(api: API) => void} callback - The function that will be called to register the addon.
     * @returns {void}
     */
    this.register = /* @__PURE__ */ n((t, r) => {
      this.loaders[t] && Nr.warn(`${t} was loaded twice, this could have bad side-effects`), this.loaders[t] = r;
    }, "register");
    this.loadAddons = /* @__PURE__ */ n((t) => {
      Object.values(this.loaders).forEach((r) => r(t));
    }, "loadAddons");
    this.promise = new Promise((t) => {
      this.resolve = () => t(this.getChannel());
    });
  }
  getElements(t) {
    return this.elements[t] || (this.elements[t] = {}), this.elements[t];
  }
  /**
   * Adds an addon to the addon store.
   *
   * @param {string} id - The id of the addon.
   * @param {Addon_Type} addon - The addon to add.
   * @returns {void}
   */
  add(t, r) {
    let { type: a } = r, o = this.getElements(a);
    o[t] = { ...r, id: t };
  }
  experimental_getRegisteredAddons() {
    return Object.keys(this.loaders);
  }
};
n(rt, "AddonStore");
var tt = rt, et = "__STORYBOOK_ADDONS_MANAGER";
function kr() {
  return A[et] || (A[et] = new tt()), A[et];
}
n(kr, "getAddonsStore");
var jr = kr();

// src/manager-api/modules/addons.ts
var nt = {};
T(nt, {
  ensurePanel: () => at,
  init: () => Fr
});
import { Addon_TypesEnum as P0 } from "@storybook/core/types";
function at(e, t, r) {
  let a = Object.keys(e);
  return a.indexOf(t) >= 0 ? t : a.length ? a[0] : r;
}
n(at, "ensurePanel");
var Fr = /* @__PURE__ */ n(({ provider: e, store: t, fullAPI: r }) => {
  let a = {
    getElements: /* @__PURE__ */ n((o) => e.getElements(o), "getElements"),
    getSelectedPanel: /* @__PURE__ */ n(() => {
      let { selectedPanel: o } = t.getState();
      return at(a.getElements(P0.PANEL), o, o);
    }, "getSelectedPanel"),
    setSelectedPanel: /* @__PURE__ */ n((o) => {
      t.setState({ selectedPanel: o }, { persistence: "session" });
    }, "setSelectedPanel"),
    setAddonState(o, l, s) {
      let i = typeof l == "function" ? l : () => l;
      return t.setState(
        (c) => ({ ...c, addons: { ...c.addons, [o]: i(c.addons[o]) } }),
        s
      ).then(() => a.getAddonState(o));
    },
    getAddonState: /* @__PURE__ */ n((o) => t.getState().addons[o] || globalThis?.STORYBOOK_ADDON_STATE[o], "getAddonState")
  };
  return {
    api: a,
    state: {
      selectedPanel: at(
        a.getElements(P0.PANEL),
        t.getState().selectedPanel
      ),
      addons: {}
    }
  };
}, "init");

// src/manager-api/modules/channel.ts
var ot = {};
T(ot, {
  init: () => Ur
});
var Ur = /* @__PURE__ */ n(({ provider: e }) => ({ api: {
  getChannel: /* @__PURE__ */ n(() => e.channel, "getChannel"),
  on: /* @__PURE__ */ n((r, a) => (e.channel?.on(r, a), () => e.channel?.off(r, a)), "on"),
  off: /* @__PURE__ */ n((r, a) => e.channel?.off(r, a), "off"),
  once: /* @__PURE__ */ n((r, a) => e.channel?.once(r, a), "once"),
  emit: /* @__PURE__ */ n((r, a, ...o) => {
    a?.options?.target && a.options.target !== "storybook-preview-iframe" && !a.options.target.startsWith("storybook-ref-") && (a.options.target =
    a.options.target !== "storybook_internal" ? `storybook-ref-${a.options.target}` : "storybook-preview-iframe"), e.channel?.emit(r, a, ...o);
  }, "emit")
}, state: {} }), "init");

// src/manager-api/modules/experimental_testmodule.ts
var ct = {};
T(ct, {
  init: () => Qr
});
import { Addon_TypesEnum as $r } from "@storybook/core/types";
import {
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST as Wr,
  TESTING_MODULE_RUN_ALL_REQUEST as Kr,
  TESTING_MODULE_RUN_REQUEST as _0,
  TESTING_MODULE_WATCH_MODE_REQUEST as qr
} from "@storybook/core/core-events";

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var Gr = !1, lt = "Invariant failed";
function it(e, t) {
  if (!e) {
    if (Gr)
      throw new Error(lt);
    var r = typeof t == "function" ? t() : t, a = r ? "".concat(lt, ": ").concat(r) : lt;
    throw new Error(a);
  }
}
n(it, "invariant");

// src/manager-api/modules/experimental_testmodule.ts
var Yr = {
  details: {},
  cancellable: !1,
  cancelling: !1,
  running: !1,
  watching: !1,
  failed: !1,
  crashed: !1
}, Qr = /* @__PURE__ */ n(({ store: e, fullAPI: t }) => {
  let r = {
    testProviders: e.getState().testProviders || {}
  }, a = {
    getTestProviderState(l) {
      let { testProviders: s } = e.getState();
      return s?.[l];
    },
    updateTestProviderState(l, s) {
      return e.setState(
        ({ testProviders: i }) => {
          let c = i[l], d = c.stateUpdater?.(c, s) ?? {
            ...c,
            ...s,
            details: { ...c.details, ...s.details }
          };
          return { testProviders: { ...i, [l]: d } };
        },
        { persistence: "session" }
      );
    },
    clearTestProviderState(l) {
      let s = {
        cancelling: !1,
        running: !1,
        failed: !1,
        crashed: !1,
        progress: void 0
      };
      return e.setState(
        ({ testProviders: i }) => ({ testProviders: { ...i, [l]: { ...i[l], ...s } } }),
        { persistence: "session" }
      );
    },
    runTestProvider(l, s) {
      let i = e.getState().index;
      it(i, "The index is currently unavailable"), a.updateTestProviderState(l, {
        running: !0,
        failed: !1,
        crashed: !1,
        progress: void 0
      });
      let c = e.getState().testProviders[l], d = new URL("index.json", window.location.href).toString();
      if (!s?.entryId) {
        let v = {
          providerId: l,
          indexUrl: d,
          config: c.config
        };
        return t.emit(_0, v), t.emit(Kr, { providerId: l }), () => a.cancelTestProvider(l);
      }
      let h = i[s.entryId];
      it(h, `No entry found in the index for id '${s.entryId}'`);
      let u = /* @__PURE__ */ n((v, g = []) => {
        let m = i[v];
        return m.type === "story" ? g.push(m.id) : "children" in m && m.children.forEach((w) => u(w, g)), g;
      }, "findStories"), p = {
        providerId: l,
        indexUrl: d,
        storyIds: u(s.entryId),
        config: c.config
      };
      return t.emit(_0, p), () => a.cancelTestProvider(l);
    },
    setTestProviderWatchMode(l, s) {
      a.updateTestProviderState(l, { watching: s });
      let i = e.getState().testProviders[l].config;
      t.emit(qr, {
        providerId: l,
        watchMode: s,
        config: i
      });
    },
    cancelTestProvider(l) {
      a.updateTestProviderState(l, { cancelling: !0 }), t.emit(Wr, { providerId: l });
    }
  };
  return { init: /* @__PURE__ */ n(async () => {
    let l = Object.fromEntries(
      Object.entries(t.getElements($r.experimental_TEST_PROVIDER)).map(
        ([s, i]) => [
          s,
          {
            ...i,
            ...Yr,
            ...r?.testProviders?.[s] || {},
            running: !1
          }
        ]
      )
    );
    e.setState({ testProviders: l }, { persistence: "session" });
  }, "initModule"), state: r, api: a };
}, "init");

// src/manager-api/modules/globals.ts
var pt = {};
T(pt, {
  init: () => fa
});
import { logger as j0 } from "@storybook/core/client-logger";
import { GLOBALS_UPDATED as ia, SET_GLOBALS as ca, UPDATE_GLOBALS as sa } from "@storybook/core/core-events";

// ../node_modules/dequal/dist/index.mjs
var b0 = Object.prototype.hasOwnProperty;
function M0(e, t, r) {
  for (r of e.keys())
    if (B(r, t)) return r;
}
n(M0, "find");
function B(e, t) {
  var r, a, o;
  if (e === t) return !0;
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date) return e.getTime() === t.getTime();
    if (r === RegExp) return e.toString() === t.toString();
    if (r === Array) {
      if ((a = e.length) === t.length)
        for (; a-- && B(e[a], t[a]); ) ;
      return a === -1;
    }
    if (r === Set) {
      if (e.size !== t.size)
        return !1;
      for (a of e)
        if (o = a, o && typeof o == "object" && (o = M0(t, o), !o) || !t.has(o)) return !1;
      return !0;
    }
    if (r === Map) {
      if (e.size !== t.size)
        return !1;
      for (a of e)
        if (o = a[0], o && typeof o == "object" && (o = M0(t, o), !o) || !B(a[1], t.get(o)))
          return !1;
      return !0;
    }
    if (r === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (r === DataView) {
      if ((a = e.byteLength) === t.byteLength)
        for (; a-- && e.getInt8(a) === t.getInt8(a); ) ;
      return a === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((a = e.byteLength) === t.byteLength)
        for (; a-- && e[a] === t[a]; ) ;
      return a === -1;
    }
    if (!r || typeof e == "object") {
      a = 0;
      for (r in e)
        if (b0.call(e, r) && ++a && !b0.call(t, r) || !(r in t) || !B(e[r], t[r])) return !1;
      return Object.keys(t).length === a;
    }
  }
  return e !== e && t !== t;
}
n(B, "dequal");

// src/manager-api/lib/events.ts
import { logger as la } from "@storybook/core/client-logger";

// src/manager-api/modules/refs.ts
var ut = {};
T(ut, {
  defaultStoryMapper: () => k0,
  getSourceType: () => ht,
  init: () => oa
});

// ../node_modules/ts-dedent/esm/index.js
function pe(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var a = Array.from(typeof e == "string" ? [e] : e);
  a[a.length - 1] = a[a.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = a.reduce(function(i, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d ? i.concat(d.map(function(h) {
      var u, p;
      return (p = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && p !== void 0 ? p : 0;
    })) : i;
  }, []);
  if (o.length) {
    var l = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    a = a.map(function(i) {
      return i.replace(l, `
`);
    });
  }
  a[0] = a[0].replace(/^\r?\n/, "");
  var s = a[0];
  return t.forEach(function(i, c) {
    var d = s.match(/(?:^|\n)( *)$/), h = d ? d[1] : "", u = i;
    typeof i == "string" && i.includes(`
`) && (u = String(i).split(`
`).map(function(p, v) {
      return v === 0 ? p : "" + h + p;
    }).join(`
`)), s += u + a[c + 1];
  }), s;
}
n(pe, "dedent");

// src/manager-api/lib/stories.ts
import { sanitize as Jr } from "@storybook/csf";
var ft = _e(He(), 1);

// src/manager-api/lib/intersect.ts
var z0 = /* @__PURE__ */ n((e, t) => !Array.isArray(e) || !Array.isArray(t) || !e.length || !t.length ? [] : e.reduce((r, a) => (t.includes(
a) && r.push(a), r), []), "default");

// src/manager-api/lib/stories.ts
var Zr = /\s*\/\s*/, H0 = /* @__PURE__ */ n(({
  globalParameters: e,
  kindParameters: t,
  stories: r
}) => Ye(r, (a) => ({
  ...a,
  parameters: B0(
    e,
    t[a.kind],
    a.parameters
  )
})), "denormalizeStoryParameters");
var T0 = /* @__PURE__ */ n((e) => ({ v: 5, entries: Object.entries(e).reduce(
  (r, [a, o]) => {
    if (!o)
      return r;
    let { docsOnly: l, fileName: s, ...i } = o.parameters, c = {
      title: o.kind,
      id: a,
      name: o.name,
      importPath: s
    };
    if (l)
      r[a] = {
        type: "docs",
        tags: ["stories-mdx"],
        storiesImports: [],
        ...c
      };
    else {
      let { argTypes: d, args: h, initialArgs: u } = o;
      r[a] = {
        type: "story",
        ...c,
        parameters: i,
        argTypes: d,
        args: h,
        initialArgs: u
      };
    }
    return r;
  },
  {}
) }), "transformSetStoriesStoryDataToPreparedStoryIndex"), Xr = /* @__PURE__ */ n((e) => ({
  v: 3,
  stories: Object.values(e.stories).reduce(
    (t, r) => (t[r.id] = {
      ...r,
      title: r.kind,
      name: r.name || r.story,
      importPath: r.parameters.fileName || ""
    }, t),
    {}
  )
}), "transformStoryIndexV2toV3"), ea = /* @__PURE__ */ n((e) => {
  let t = Ke(Object.values(e.stories), (r) => r.title);
  return {
    v: 4,
    entries: Object.values(e.stories).reduce(
      (r, a) => {
        let o = "story";
        return (a.parameters?.docsOnly || a.name === "Page" && t[a.title] === 1) && (o = "docs"), r[a.id] = {
          type: o,
          ...o === "docs" && { tags: ["stories-mdx"], storiesImports: [] },
          ...a
        }, delete r[a.id].story, delete r[a.id].kind, r;
      },
      {}
    )
  };
}, "transformStoryIndexV3toV4"), ta = /* @__PURE__ */ n((e) => ({
  v: 5,
  entries: Object.values(e.entries).reduce(
    (t, r) => (t[r.id] = {
      ...r,
      tags: r.tags ? ["dev", "test", ...r.tags] : ["dev"]
    }, t),
    {}
  )
}), "transformStoryIndexV4toV5"), X = /* @__PURE__ */ n((e, { provider: t, docsOptions: r, filters: a, status: o }) => {
  if (!e.v)
    throw new Error("Composition: Missing stories.json version");
  let l = e;
  l = l.v === 2 ? Xr(l) : l, l = l.v === 3 ? ea(l) : l, l = l.v === 4 ? ta(l) : l, l = l;
  let s = Object.values(l.entries).filter((m) => {
    let w = !0, y = o[m.id];
    return Object.values(y ?? {}).some(({ status: R }) => R === "error") || Object.values(a).forEach((R) => {
      w !== !1 && (w = R({ ...m, status: y }));
    }), w;
  }), { sidebar: i = {} } = t.getConfig(), { showRoots: c, collapsedRoots: d = [], renderLabel: h } = i, u = typeof c < "u", p = s.reduce((m, w) => {
    if (r.docsMode && w.type !== "docs")
      return m;
    let { title: y } = w, R = y.trim().split(Zr), S = (!u || c) && R.length > 1 ? [R.shift()] : [], E = [...S, ...R], x = E.reduce((I, b, k) => {
      let ce = k > 0 && I[k - 1], se = Jr(ce ? `${ce}-${b}` : b);
      if (b.trim() === "")
        throw new Error(pe`Invalid title ${y} ending in slash.`);
      if (ce === se)
        throw new Error(
          pe`
          Invalid part '${b}', leading to id === parentId ('${se}'), inside title '${y}'
          
          Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128
          `
        );
      return I.push(se), I;
    }, []);
    return x.forEach((I, b) => {
      let k = x[b + 1] || w.id;
      S.length && b === 0 ? m[I] = F(m[I] || {}, {
        type: "root",
        id: I,
        name: E[b],
        tags: [],
        depth: b,
        renderLabel: h,
        startCollapsed: d.includes(I),
        // Note that this will later get appended to the previous list of children (see below)
        children: [k]
      }) : (!m[I] || m[I].type === "component") && b === x.length - 1 ? m[I] = F(m[I] || {}, {
        type: "component",
        id: I,
        name: E[b],
        tags: [],
        parent: x[b - 1],
        depth: b,
        renderLabel: h,
        ...k && {
          children: [k]
        }
      }) : m[I] = F(m[I] || {}, {
        type: "group",
        id: I,
        name: E[b],
        tags: [],
        parent: x[b - 1],
        depth: b,
        renderLabel: h,
        ...k && {
          children: [k]
        }
      });
    }), m[w.id] = {
      type: "story",
      tags: [],
      ...w,
      depth: x.length,
      parent: x[x.length - 1],
      renderLabel: h,
      prepared: !!w.parameters
    }, m;
  }, {});
  function v(m, w) {
    return m[w.id] || (m[w.id] = w, (w.type === "root" || w.type === "group" || w.type === "component") && (w.children.forEach((y) => v(m, p[y])),
    w.tags = w.children.reduce((y, R) => {
      let S = m[R];
      return y === null ? S.tags : z0(y, S.tags);
    }, null))), m;
  }
  n(v, "addItem");
  let g = Object.values(p).filter((m) => m.type !== "root" && !m.parent).reduce(v, {});
  return Object.values(p).filter((m) => m.type === "root").reduce(v, g);
}, "transformStoryIndexToStoriesHash"), dt = /* @__PURE__ */ n((e, t) => t ? Object.fromEntries(
  Object.entries(e).map(([r, a]) => {
    let o = t[r];
    return a.type === "story" && o?.type === "story" && o.prepared ? [r, { ...o, ...a, prepared: !0 }] : [r, a];
  })
) : e, "addPreparedStories"), L0 = (0, ft.default)(1)((e) => Object.entries(e).reduce((t, r) => {
  let a = r[1];
  return a.type === "component" && t.push([...a.children]), t;
}, [])), O0 = (0, ft.default)(1)((e) => Object.keys(e).filter((t) => ["story", "docs"].includes(e[t].type)));

// src/manager-api/modules/refs.ts
var { location: ra, fetch: V0 } = A, ht = /* @__PURE__ */ n((e, t) => {
  let { origin: r, pathname: a } = ra, { origin: o, pathname: l } = new URL(e), s = `${r + a}`.replace("/iframe.html", "").replace(/\/$/, ""),
  i = `${o + l}`.replace("/iframe.html", "").replace(/\/$/, "");
  return s === i ? ["local", i] : t || e ? ["external", i] : [null, null];
}, "getSourceType"), k0 = /* @__PURE__ */ n((e, t) => ({ ...t, kind: t.kind.replace("|", "/") }), "defaultStoryMapper"), D0 = /* @__PURE__ */ n(
(e, t) => Object.entries(e).reduce((r, [a, o]) => ({ ...r, [a]: { ...o, refId: t.id } }), {}), "addRefIds");
async function N0(e) {
  if (!e)
    return {};
  try {
    let t = await e;
    if (t === !1 || t === !0)
      throw new Error("Unexpected boolean response");
    if (!t.ok)
      throw new Error(`Unexpected response not OK: ${t.statusText}`);
    let r = await t.json();
    return r.entries || r.stories ? { storyIndex: r } : r;
  } catch (t) {
    return { indexError: t };
  }
}
n(N0, "handleRequest");
var aa = /* @__PURE__ */ n((e) => {
  let t = /https?:\/\/(.+:.+)@/, r = e, a, [, o] = e.match(t) || [];
  return o && (r = e.replace(`${o}@`, ""), a = btoa(`${o}`)), {
    url: r,
    authorization: a
  };
}, "parseUrl"), na = /* @__PURE__ */ n((e, t, r) => {
  let { storyMapper: a } = r;
  return a ? Object.entries(e).reduce((o, [l, s]) => ({ ...o, [l]: a(t, s) }), {}) : e;
}, "map"), oa = /* @__PURE__ */ n(({ store: e, provider: t, singleStory: r, docsOptions: a = {} }, { runCheck: o = !0 } = {}) => {
  let l = {
    findRef: /* @__PURE__ */ n((c) => {
      let d = l.getRefs();
      return Object.values(d).find(({ url: h }) => h.match(c));
    }, "findRef"),
    changeRefVersion: /* @__PURE__ */ n(async (c, d) => {
      let { versions: h, title: u } = l.getRefs()[c], p = {
        id: c,
        url: d,
        versions: h,
        title: u,
        index: {},
        filteredIndex: {},
        expanded: !0
      };
      await l.setRef(c, { ...p, type: "unknown" }, !1), await l.checkRef(p);
    }, "changeRefVersion"),
    changeRefState: /* @__PURE__ */ n((c, d) => {
      let { [c]: h, ...u } = l.getRefs();
      u[c] = { ...h, previewInitialized: d }, e.setState({
        refs: u
      });
    }, "changeRefState"),
    checkRef: /* @__PURE__ */ n(async (c) => {
      let { id: d, url: h, version: u, type: p } = c, v = p === "server-checked", g = {}, m = u ? `?version=${u}` : "", w = v ? "omit" : "in\
clude", y = aa(h), R = {
        Accept: "application/json"
      };
      y.authorization && Object.assign(R, {
        Authorization: `Basic ${y.authorization}`
      });
      let [S, E] = await Promise.all(
        ["index.json", "stories.json"].map(
          async (I) => N0(
            V0(`${y.url}/${I}${m}`, {
              headers: R,
              credentials: w
            })
          )
        )
      );
      if (!S.indexError || !E.indexError) {
        let I = await N0(
          V0(`${y.url}/metadata.json${m}`, {
            headers: R,
            credentials: w,
            cache: "no-cache"
          }).catch(() => !1)
        );
        Object.assign(g, {
          ...S.indexError ? E : S,
          ...!I.indexError && I
        });
      } else v || (g.indexError = {
        message: pe`
            Error: Loading of ref failed
              at fetch (lib/api/src/modules/refs.ts)

            URL: ${y.url}

            We weren't able to load the above URL,
            it's possible a CORS error happened.

            Please check your dev-tools network tab.
          `
      });
      let x = c.versions && Object.keys(c.versions).length ? c.versions : g.versions;
      await l.setRef(d, {
        id: d,
        url: y.url,
        ...g,
        ...x ? { versions: x } : {},
        type: g.storyIndex ? "lazy" : "auto-inject"
      });
    }, "checkRef"),
    getRefs: /* @__PURE__ */ n(() => {
      let { refs: c = {} } = e.getState();
      return c;
    }, "getRefs"),
    setRef: /* @__PURE__ */ n(async (c, { storyIndex: d, setStoriesData: h, ...u }, p = !1) => {
      if (r)
        return;
      let v, g, m, { filters: w } = e.getState(), { storyMapper: y = k0 } = t.getConfig(), R = l.getRefs()[c];
      (d || h) && (v = h ? T0(
        na(h, R, { storyMapper: y })
      ) : d, m = X(d, {
        provider: t,
        docsOptions: a,
        filters: w,
        status: {}
      }), g = X(d, {
        provider: t,
        docsOptions: a,
        filters: {},
        status: {}
      })), g && (g = D0(g, R)), m && (m = D0(m, R)), await l.updateRef(c, { ...R, ...u, index: g, filteredIndex: m, internal_index: v });
    }, "setRef"),
    updateRef: /* @__PURE__ */ n(async (c, d) => {
      let { [c]: h, ...u } = l.getRefs();
      u[c] = { ...h, ...d };
      let p = Object.keys(i).reduce((v, g) => (v[g] = u[g], v), {});
      await e.setState({
        refs: p
      });
    }, "updateRef")
  }, s = !r && A.REFS || {}, i = s;
  return o && new Promise(async (c) => {
    for (let d of Object.values(s))
      await l.checkRef({ ...d, stories: {} });
    c(void 0);
  }), {
    api: l,
    state: {
      refs: i
    }
  };
}, "init");

// src/manager-api/lib/events.ts
var z = /* @__PURE__ */ n((e, t) => {
  let { source: r, refId: a, type: o } = e, [l, s] = ht(r, a), i;
  (a || l === "external") && (i = a && t.getRefs()[a] ? t.getRefs()[a] : t.findRef(s));
  let c = {
    source: r,
    sourceType: l,
    sourceLocation: s,
    refId: a,
    ref: i,
    type: o
  };
  switch (!0) {
    case typeof a == "string":
    case l === "local":
    case l === "external":
      return c;
    // if we couldn't find the source, something risky happened, we ignore the input, and log a warning
    default:
      return la.warn(`Received a ${o} frame that was not configured as a ref`), null;
  }
}, "getEventMetadata");

// src/manager-api/modules/globals.ts
var fa = /* @__PURE__ */ n(({ store: e, fullAPI: t, provider: r }) => {
  let a = {
    getGlobals() {
      return e.getState().globals;
    },
    getUserGlobals() {
      return e.getState().userGlobals;
    },
    getStoryGlobals() {
      return e.getState().storyGlobals;
    },
    getGlobalTypes() {
      return e.getState().globalTypes;
    },
    updateGlobals(s) {
      r.channel?.emit(sa, {
        globals: s,
        options: {
          target: "storybook-preview-iframe"
        }
      });
    }
  }, o = {
    globals: {},
    userGlobals: {},
    storyGlobals: {},
    globalTypes: {}
  }, l = /* @__PURE__ */ n(({
    globals: s,
    storyGlobals: i,
    userGlobals: c
  }) => {
    let {
      globals: d,
      userGlobals: h,
      storyGlobals: u
    } = e.getState();
    B(s, d) || e.setState({ globals: s }), B(c, h) || e.setState({ userGlobals: c }), B(i, u) || e.setState({ storyGlobals: i });
  }, "updateGlobals");
  return r.channel?.on(
    ia,
    /* @__PURE__ */ n(function({ globals: i, storyGlobals: c, userGlobals: d }) {
      let { ref: h } = z(this, t);
      h ? j0.warn(
        "received a GLOBALS_UPDATED from a non-local ref. This is not currently supported."
      ) : l({ globals: i, storyGlobals: c, userGlobals: d });
    }, "handleGlobalsUpdated")
  ), r.channel?.on(
    ca,
    /* @__PURE__ */ n(function({ globals: i, globalTypes: c }) {
      let { ref: d } = z(this, t), h = e.getState()?.globals;
      d ? Object.keys(i).length > 0 && j0.warn("received globals from a non-local ref. This is not currently supported.") : e.setState({ globals: i,
      userGlobals: i, globalTypes: c }), h && Object.keys(h).length !== 0 && !B(i, h) && a.updateGlobals(h);
    }, "handleSetGlobals")
  ), {
    api: a,
    state: o
  };
}, "init");

// src/manager-api/modules/layout.ts
var Le = {};
T(Le, {
  ActiveTabs: () => U0,
  defaultLayoutState: () => L,
  focusableUIElements: () => ve,
  init: () => pa
});
import { create as da } from "@storybook/core/theming/create";
import { SET_CONFIG as ha } from "@storybook/core/core-events";
var { document: ua } = A, U0 = {
  SIDEBAR: "sidebar",
  CANVAS: "canvas",
  ADDONS: "addons"
}, L = {
  ui: {
    enableShortcuts: !0
  },
  layout: {
    initialActive: U0.CANVAS,
    showToolbar: !0,
    navSize: 300,
    bottomPanelHeight: 300,
    rightPanelWidth: 400,
    recentVisibleSizes: {
      navSize: 300,
      bottomPanelHeight: 300,
      rightPanelWidth: 400
    },
    panelPosition: "bottom",
    showTabs: !0
  },
  selectedPanel: "chromaui/addon-visual-tests/panel",
  theme: da()
}, ve = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, vt = /* @__PURE__ */ n((e) => e.layout.navSize > 0, "getIsNavShown"), mt = /* @__PURE__ */ n((e) => {
  let { bottomPanelHeight: t, rightPanelWidth: r, panelPosition: a } = e.layout;
  return a === "bottom" && t > 0 || a === "right" && r > 0;
}, "getIsPanelShown"), F0 = /* @__PURE__ */ n((e) => !vt(e) && !mt(e), "getIsFullscreen"), Te = /* @__PURE__ */ n((e) => ({
  navSize: e.navSize > 0 ? e.navSize : e.recentVisibleSizes.navSize,
  bottomPanelHeight: e.bottomPanelHeight > 0 ? e.bottomPanelHeight : e.recentVisibleSizes.bottomPanelHeight,
  rightPanelWidth: e.rightPanelWidth > 0 ? e.rightPanelWidth : e.recentVisibleSizes.rightPanelWidth
}), "getRecentVisibleSizes"), pa = /* @__PURE__ */ n(({ store: e, provider: t, singleStory: r }) => {
  let a = {
    toggleFullscreen(l) {
      return e.setState(
        (s) => {
          let i = F0(s), c = typeof l == "boolean" ? l : !i;
          return c === i ? { layout: s.layout } : c ? {
            layout: {
              ...s.layout,
              navSize: 0,
              bottomPanelHeight: 0,
              rightPanelWidth: 0,
              recentVisibleSizes: Te(s.layout)
            }
          } : {
            layout: {
              ...s.layout,
              navSize: s.singleStory ? 0 : s.layout.recentVisibleSizes.navSize,
              bottomPanelHeight: s.layout.recentVisibleSizes.bottomPanelHeight,
              rightPanelWidth: s.layout.recentVisibleSizes.rightPanelWidth
            }
          };
        },
        { persistence: "session" }
      );
    },
    togglePanel(l) {
      return e.setState(
        (s) => {
          let i = mt(s), c = typeof l == "boolean" ? l : !i;
          return c === i ? { layout: s.layout } : c ? {
            layout: {
              ...s.layout,
              bottomPanelHeight: s.layout.recentVisibleSizes.bottomPanelHeight,
              rightPanelWidth: s.layout.recentVisibleSizes.rightPanelWidth
            }
          } : {
            layout: {
              ...s.layout,
              bottomPanelHeight: 0,
              rightPanelWidth: 0,
              recentVisibleSizes: Te(s.layout)
            }
          };
        },
        { persistence: "session" }
      );
    },
    togglePanelPosition(l) {
      return e.setState(
        (s) => {
          let i = l || (s.layout.panelPosition === "right" ? "bottom" : "right");
          return {
            layout: {
              ...s.layout,
              panelPosition: i,
              bottomPanelHeight: s.layout.recentVisibleSizes.bottomPanelHeight,
              rightPanelWidth: s.layout.recentVisibleSizes.rightPanelWidth
            }
          };
        },
        { persistence: "permanent" }
      );
    },
    toggleNav(l) {
      return e.setState(
        (s) => {
          if (s.singleStory)
            return { layout: s.layout };
          let i = vt(s), c = typeof l == "boolean" ? l : !i;
          return c === i ? { layout: s.layout } : c ? {
            layout: {
              ...s.layout,
              navSize: s.layout.recentVisibleSizes.navSize
            }
          } : {
            layout: {
              ...s.layout,
              navSize: 0,
              recentVisibleSizes: Te(s.layout)
            }
          };
        },
        { persistence: "session" }
      );
    },
    toggleToolbar(l) {
      return e.setState(
        (s) => {
          let i = typeof l < "u" ? l : !s.layout.showToolbar;
          return {
            layout: {
              ...s.layout,
              showToolbar: i
            }
          };
        },
        { persistence: "session" }
      );
    },
    setSizes({
      navSize: l,
      bottomPanelHeight: s,
      rightPanelWidth: i
    }) {
      return e.setState(
        (c) => {
          let d = {
            ...c.layout,
            navSize: l ?? c.layout.navSize,
            bottomPanelHeight: s ?? c.layout.bottomPanelHeight,
            rightPanelWidth: i ?? c.layout.rightPanelWidth
          };
          return {
            layout: {
              ...d,
              recentVisibleSizes: Te(d)
            }
          };
        },
        { persistence: "session" }
      );
    },
    focusOnUIElement(l, s) {
      if (!l)
        return;
      let i = ua.getElementById(l);
      i && (i.focus(), s && i.select());
    },
    getInitialOptions() {
      let { theme: l, selectedPanel: s, ...i } = t.getConfig();
      return {
        ...L,
        layout: {
          ...ue(
            L.layout,
            q(i, Object.keys(L.layout))
          ),
          ...r && { navSize: 0 }
        },
        ui: ue(L.ui, q(i, Object.keys(L.ui))),
        selectedPanel: s || L.selectedPanel,
        theme: l || L.theme
      };
    },
    getIsFullscreen() {
      return F0(e.getState());
    },
    getIsPanelShown() {
      return mt(e.getState());
    },
    getIsNavShown() {
      return vt(e.getState());
    },
    setOptions: /* @__PURE__ */ n((l) => {
      let { layout: s, ui: i, selectedPanel: c, theme: d } = e.getState();
      if (!l)
        return;
      let h = {
        ...s,
        ...l.layout || {},
        ...q(l, Object.keys(s)),
        ...r && { navSize: 0 }
      }, u = {
        ...i,
        ...l.ui,
        ...ue(l.ui || {}, q(l, Object.keys(i)))
      }, p = {
        ...d,
        ...l.theme
      }, v = {};
      D(i, u) || (v.ui = u), D(s, h) || (v.layout = h), l.selectedPanel && !D(c, l.selectedPanel) && (v.selectedPanel = l.selectedPanel), Object.
      keys(v).length && e.setState(v, { persistence: "permanent" }), D(d, p) || e.setState({ theme: p });
    }, "setOptions")
  }, o = q(e.getState(), ["layout", "selectedPanel"]);
  return t.channel?.on(ha, () => {
    a.setOptions(F(a.getInitialOptions(), o));
  }), {
    api: a,
    state: F(a.getInitialOptions(), o)
  };
}, "init");

// src/manager-api/modules/notifications.ts
var gt = {};
T(gt, {
  init: () => va
});
var va = /* @__PURE__ */ n(({ store: e }) => ({ api: {
  addNotification: /* @__PURE__ */ n((a) => {
    e.setState(({ notifications: o }) => {
      let [l, s] = be(o, (i) => i.id === a.id);
      return l.forEach((i) => {
        i.onClear && i.onClear({ dismissed: !1, timeout: !1 });
      }), { notifications: [...s, a] };
    });
  }, "addNotification"),
  clearNotification: /* @__PURE__ */ n((a) => {
    e.setState(({ notifications: o }) => {
      let [l, s] = be(o, (i) => i.id === a);
      return l.forEach((i) => {
        i.onClear && i.onClear({ dismissed: !1, timeout: !1 });
      }), { notifications: s };
    });
  }, "clearNotification")
}, state: { notifications: [] } }), "init");

// src/manager-api/modules/provider.ts
var wt = {};
T(wt, {
  init: () => ma
});
var ma = /* @__PURE__ */ n(({ provider: e, fullAPI: t }) => ({
  api: e.renderPreview ? { renderPreview: e.renderPreview } : {},
  state: {},
  init: /* @__PURE__ */ n(() => {
    e.handleAPI(t);
  }, "init")
}), "init");

// src/manager-api/modules/settings.ts
var yt = {};
T(yt, {
  init: () => ga
});
var ga = /* @__PURE__ */ n(({ store: e, navigate: t, fullAPI: r }) => ({
  state: { settings: { lastTrackedStoryId: null } },
  api: {
    closeSettings: /* @__PURE__ */ n(() => {
      let {
        settings: { lastTrackedStoryId: l }
      } = e.getState();
      l ? r.selectStory(l) : r.selectFirstStory();
    }, "closeSettings"),
    changeSettingsTab: /* @__PURE__ */ n((l) => {
      t(`/settings/${l}`);
    }, "changeSettingsTab"),
    isSettingsScreenActive: /* @__PURE__ */ n(() => {
      let { path: l } = r.getUrlState();
      return !!(l || "").match(/^\/settings/);
    }, "isSettingsScreenActive"),
    retrieveSelection() {
      let { settings: l } = e.getState();
      return l.lastTrackedStoryId;
    },
    storeSelection: /* @__PURE__ */ n(async () => {
      let { storyId: l, settings: s } = e.getState();
      await e.setState({
        settings: { ...s, lastTrackedStoryId: l }
      });
    }, "storeSelection")
  }
}), "init");

// src/manager-api/modules/shortcuts.ts
var _t = {};
T(_t, {
  controlOrMetaKey: () => ee,
  defaultShortcuts: () => te,
  init: () => Aa,
  isMacLike: () => $0,
  keys: () => Pt
});
import {
  FORCE_REMOUNT as Ra,
  PREVIEW_KEYDOWN as Sa,
  STORIES_COLLAPSE_ALL as Ia,
  STORIES_EXPAND_ALL as xa
} from "@storybook/core/core-events";

// src/manager-api/lib/shortcut.ts
var { navigator: Rt } = A, St = /* @__PURE__ */ n(() => Rt && Rt.platform ? !!Rt.platform.match(/(Mac|iPhone|iPod|iPad)/i) : !1, "isMacLike"),
_i = /* @__PURE__ */ n(() => St() ? "\u2318" : "ctrl", "controlOrMetaSymbol"), bi = /* @__PURE__ */ n(() => St() ? "meta" : "control", "cont\
rolOrMetaKey"), wa = /* @__PURE__ */ n(() => St() ? "\u2325" : "alt", "optionOrAltSymbol"), Mi = /* @__PURE__ */ n((e, t) => JSON.stringify(
e) === JSON.stringify(t), "isShortcutTaken"), It = /* @__PURE__ */ n((e) => {
  if (["Meta", "Alt", "Control", "Shift"].includes(e.key))
    return null;
  let t = [];
  if (e.altKey && t.push("alt"), e.ctrlKey && t.push("control"), e.metaKey && t.push("meta"), e.shiftKey && t.push("shift"), e.key && e.key.
  length === 1 && e.key !== " ") {
    let r = e.key.toUpperCase(), a = e.code?.toUpperCase().replace("KEY", "").replace("DIGIT", "");
    a && a.length === 1 && a !== r ? t.push([r, a]) : t.push(r);
  }
  return e.key === " " && t.push("space"), e.key === "Escape" && t.push("escape"), e.key === "ArrowRight" && t.push("ArrowRight"), e.key ===
  "ArrowDown" && t.push("ArrowDown"), e.key === "ArrowUp" && t.push("ArrowUp"), e.key === "ArrowLeft" && t.push("ArrowLeft"), t.length > 0 ?
  t : null;
}, "eventToShortcut"), xt = /* @__PURE__ */ n((e, t) => !e || !t || (e.join("").startsWith("shift/") && e.shift(), e.length !== t.length) ? !1 :
!e.find(
  (r, a) => Array.isArray(r) ? !r.includes(t[a]) : r !== t[a]
), "shortcutMatchesShortcut"), Ci = /* @__PURE__ */ n((e, t) => xt(It(e), t), "eventMatchesShortcut"), ya = /* @__PURE__ */ n((e) => e === "\
alt" ? wa() : e === "control" ? "\u2303" : e === "meta" ? "\u2318" : e === "shift" ? "\u21E7\u200B" : e === "Enter" || e === "Backspace" || e ===
"Esc" || e === "escape" ? "" : e === " " ? "SPACE" : e === "ArrowUp" ? "\u2191" : e === "ArrowDown" ? "\u2193" : e === "ArrowLeft" ? "\u2190" :
e === "ArrowRight" ? "\u2192" : e.toUpperCase(), "keyToSymbol"), zi = /* @__PURE__ */ n((e) => e.map(ya).join(" "), "shortcutToHumanString");

// src/manager-api/modules/shortcuts.ts
var { navigator: Et, document: G0 } = A, $0 = /* @__PURE__ */ n(() => Et && Et.platform ? !!Et.platform.match(/(Mac|iPhone|iPod|iPad)/i) : !1,
"isMacLike"), ee = /* @__PURE__ */ n(() => $0() ? "meta" : "control", "controlOrMetaKey");
function Pt(e) {
  return Object.keys(e);
}
n(Pt, "keys");
var te = Object.freeze({
  fullScreen: ["alt", "F"],
  togglePanel: ["alt", "A"],
  panelPosition: ["alt", "D"],
  toggleNav: ["alt", "S"],
  toolbar: ["alt", "T"],
  search: [ee(), "K"],
  focusNav: ["1"],
  focusIframe: ["2"],
  focusPanel: ["3"],
  prevComponent: ["alt", "ArrowUp"],
  nextComponent: ["alt", "ArrowDown"],
  prevStory: ["alt", "ArrowLeft"],
  nextStory: ["alt", "ArrowRight"],
  shortcutsPage: [ee(), "shift", ","],
  aboutPage: [ee(), ","],
  escape: ["escape"],
  // This one is not customizable
  collapseAll: [ee(), "shift", "ArrowUp"],
  expandAll: [ee(), "shift", "ArrowDown"],
  remount: ["alt", "R"]
}), At = {};
function Ea(e) {
  let t = e.target;
  return /input|textarea/i.test(t.tagName) || t.getAttribute("contenteditable") !== null;
}
n(Ea, "focusInInput");
var Aa = /* @__PURE__ */ n(({ store: e, fullAPI: t, provider: r }) => {
  let a = {
    // Getting and setting shortcuts
    getShortcutKeys() {
      return e.getState().shortcuts;
    },
    getDefaultShortcuts() {
      return {
        ...te,
        ...a.getAddonsShortcutDefaults()
      };
    },
    getAddonsShortcuts() {
      return At;
    },
    getAddonsShortcutLabels() {
      let i = {};
      return Object.entries(a.getAddonsShortcuts()).forEach(([c, { label: d }]) => {
        i[c] = d;
      }), i;
    },
    getAddonsShortcutDefaults() {
      let i = {};
      return Object.entries(a.getAddonsShortcuts()).forEach(([c, { defaultShortcut: d }]) => {
        i[c] = d;
      }), i;
    },
    async setShortcuts(i) {
      return await e.setState({ shortcuts: i }, { persistence: "permanent" }), i;
    },
    async restoreAllDefaultShortcuts() {
      return a.setShortcuts(a.getDefaultShortcuts());
    },
    async setShortcut(i, c) {
      let d = a.getShortcutKeys();
      return await a.setShortcuts({ ...d, [i]: c }), c;
    },
    async setAddonShortcut(i, c) {
      let d = a.getShortcutKeys();
      return await a.setShortcuts({
        ...d,
        [`${i}-${c.actionName}`]: c.defaultShortcut
      }), At[`${i}-${c.actionName}`] = c, c;
    },
    async restoreDefaultShortcut(i) {
      let c = a.getDefaultShortcuts()[i];
      return a.setShortcut(i, c);
    },
    // Listening to shortcut events
    handleKeydownEvent(i) {
      let c = It(i), d = a.getShortcutKeys(), u = Pt(d).find(
        (p) => xt(c, d[p])
      );
      u && a.handleShortcutFeature(u, i);
    },
    // warning: event might not have a full prototype chain because it may originate from the channel
    handleShortcutFeature(i, c) {
      let {
        ui: { enableShortcuts: d },
        storyId: h
      } = e.getState();
      if (d)
        switch (c?.preventDefault && c.preventDefault(), i) {
          case "escape": {
            t.getIsFullscreen() ? t.toggleFullscreen(!1) : t.getIsNavShown() && t.toggleNav(!0);
            break;
          }
          case "focusNav": {
            t.getIsFullscreen() && t.toggleFullscreen(!1), t.getIsNavShown() || t.toggleNav(!0), t.focusOnUIElement(ve.storyListMenu);
            break;
          }
          case "search": {
            t.getIsFullscreen() && t.toggleFullscreen(!1), t.getIsNavShown() || t.toggleNav(!0), setTimeout(() => {
              t.focusOnUIElement(ve.storySearchField, !0);
            }, 0);
            break;
          }
          case "focusIframe": {
            let u = G0.getElementById("storybook-preview-iframe");
            if (u)
              try {
                u.contentWindow.focus();
              } catch {
              }
            break;
          }
          case "focusPanel": {
            t.getIsFullscreen() && t.toggleFullscreen(!1), t.getIsPanelShown() || t.togglePanel(!0), t.focusOnUIElement(ve.storyPanelRoot);
            break;
          }
          case "nextStory": {
            t.jumpToStory(1);
            break;
          }
          case "prevStory": {
            t.jumpToStory(-1);
            break;
          }
          case "nextComponent": {
            t.jumpToComponent(1);
            break;
          }
          case "prevComponent": {
            t.jumpToComponent(-1);
            break;
          }
          case "fullScreen": {
            t.toggleFullscreen();
            break;
          }
          case "togglePanel": {
            t.togglePanel();
            break;
          }
          case "toggleNav": {
            t.toggleNav();
            break;
          }
          case "toolbar": {
            t.toggleToolbar();
            break;
          }
          case "panelPosition": {
            t.getIsFullscreen() && t.toggleFullscreen(!1), t.getIsPanelShown() || t.togglePanel(!0), t.togglePanelPosition();
            break;
          }
          case "aboutPage": {
            t.navigate("/settings/about");
            break;
          }
          case "shortcutsPage": {
            t.navigate("/settings/shortcuts");
            break;
          }
          case "collapseAll": {
            t.emit(Ia);
            break;
          }
          case "expandAll": {
            t.emit(xa);
            break;
          }
          case "remount": {
            t.emit(Ra, { storyId: h });
            break;
          }
          default:
            At[i].action();
            break;
        }
    }
  }, { shortcuts: o = te } = e.getState(), l = {
    // Any saved shortcuts that are still in our set of defaults
    shortcuts: Pt(te).reduce(
      (i, c) => ({ ...i, [c]: o[c] || te[c] }),
      te
    )
  };
  return { api: a, state: l, init: /* @__PURE__ */ n(() => {
    G0.addEventListener("keydown", (i) => {
      Ea(i) || a.handleKeydownEvent(i);
    }), r.channel?.on(Sa, (i) => {
      a.handleKeydownEvent(i.event);
    });
  }, "initModule") };
}, "init");

// src/manager-api/modules/stories.ts
var Mt = {};
T(Mt, {
  init: () => qa
});
import { sanitize as W0, toId as Oe } from "@storybook/csf";
import { logger as Pa } from "@storybook/core/client-logger";
import {
  CONFIG_ERROR as _a,
  CURRENT_STORY_WAS_SET as ba,
  DOCS_PREPARED as Ma,
  PRELOAD_ENTRIES as Ca,
  RESET_STORY_ARGS as za,
  SELECT_STORY as Ha,
  SET_CONFIG as Ta,
  SET_CURRENT_STORY as La,
  SET_FILTER as Oa,
  SET_INDEX as Ba,
  SET_STORIES as Va,
  STORY_ARGS_UPDATED as Da,
  STORY_CHANGED as Na,
  STORY_INDEX_INVALIDATED as ka,
  STORY_MISSING as ja,
  STORY_PREPARED as Fa,
  STORY_SPECIFIED as Ua,
  UPDATE_STORY_ARGS as Ga
} from "@storybook/core/core-events";
var { fetch: $a } = A, Wa = "./index.json", Ka = ["enableShortcuts", "theme", "showRoots"];
function bt(e) {
  if (!e || typeof e == "string")
    return e;
  let t = { ...e };
  return Ka.forEach((r) => {
    r in t && delete t[r];
  }), t;
}
n(bt, "removeRemovedOptions");
var qa = /* @__PURE__ */ n(({
  fullAPI: e,
  store: t,
  navigate: r,
  provider: a,
  storyId: o,
  viewMode: l,
  docsOptions: s = {}
}) => {
  let i = {
    storyId: Oe,
    getData: /* @__PURE__ */ n((d, h) => {
      let u = i.resolveStory(d, h);
      if (u?.type === "story" || u?.type === "docs")
        return u;
    }, "getData"),
    isPrepared: /* @__PURE__ */ n((d, h) => {
      let u = i.getData(d, h);
      return u ? u.type === "story" ? u.prepared : !0 : !1;
    }, "isPrepared"),
    resolveStory: /* @__PURE__ */ n((d, h) => {
      let { refs: u, index: p } = t.getState();
      if (!(h && !u[h]))
        return h ? u[h].index ? u[h].index[d] : void 0 : p ? p[d] : void 0;
    }, "resolveStory"),
    getCurrentStoryData: /* @__PURE__ */ n(() => {
      let { storyId: d, refId: h } = t.getState();
      return i.getData(d, h);
    }, "getCurrentStoryData"),
    getParameters: /* @__PURE__ */ n((d, h) => {
      let { storyId: u, refId: p } = typeof d == "string" ? { storyId: d, refId: void 0 } : d, v = i.getData(u, p);
      if (["story", "docs"].includes(v?.type)) {
        let { parameters: g } = v;
        if (g)
          return h ? g[h] : g;
      }
      return null;
    }, "getParameters"),
    getCurrentParameter: /* @__PURE__ */ n((d) => {
      let { storyId: h, refId: u } = t.getState();
      return i.getParameters({ storyId: h, refId: u }, d) || void 0;
    }, "getCurrentParameter"),
    jumpToComponent: /* @__PURE__ */ n((d) => {
      let { index: h, storyId: u, refs: p, refId: v } = t.getState();
      if (!i.getData(u, v))
        return;
      let m = v ? p[v].index || {} : h;
      if (!m)
        return;
      let w = i.findSiblingStoryId(u, m, d, !0);
      w && i.selectStory(w, void 0, { ref: v });
    }, "jumpToComponent"),
    jumpToStory: /* @__PURE__ */ n((d) => {
      let { index: h, storyId: u, refs: p, refId: v } = t.getState(), g = i.getData(u, v);
      if (!g)
        return;
      let m = g.refId ? p[g.refId].index : h;
      if (!m)
        return;
      let w = i.findSiblingStoryId(u, m, d, !1);
      w && i.selectStory(w, void 0, { ref: v });
    }, "jumpToStory"),
    selectFirstStory: /* @__PURE__ */ n(() => {
      let { index: d } = t.getState();
      if (!d)
        return;
      let h = Object.keys(d).find((u) => d[u].type === "story");
      if (h) {
        i.selectStory(h);
        return;
      }
      r("/");
    }, "selectFirstStory"),
    selectStory: /* @__PURE__ */ n((d = void 0, h = void 0, u = {}) => {
      let { ref: p } = u, { storyId: v, index: g, refs: m } = t.getState(), w = p ? m[p].index : g, y = v?.split("--", 2)[0];
      if (w)
        if (h)
          if (d) {
            let R = p ? `${p}_${Oe(d, h)}` : Oe(d, h);
            if (w[R])
              i.selectStory(R, void 0, u);
            else {
              let S = w[W0(d)];
              if (S?.type === "component") {
                let E = S.children.find((x) => w[x].name === h);
                E && i.selectStory(E, void 0, u);
              }
            }
          } else {
            let R = Oe(y, h);
            i.selectStory(R, void 0, u);
          }
        else {
          let R = d ? w[d] || w[W0(d)] : w[y];
          if (!R)
            throw new Error(`Unknown id or title: '${d}'`);
          t.setState({
            settings: { ...t.getState().settings, lastTrackedStoryId: R.id }
          });
          let S = i.findLeafEntry(w, R.id), E = S.refId ? `${S.refId}_${S.id}` : S.id;
          r(`/${S.type}/${E}`);
        }
    }, "selectStory"),
    findLeafEntry(d, h) {
      let u = d[h];
      if (u.type === "docs" || u.type === "story")
        return u;
      let p = u.children[0];
      return i.findLeafEntry(d, p);
    },
    findLeafStoryId(d, h) {
      return i.findLeafEntry(d, h)?.id;
    },
    findSiblingStoryId(d, h, u, p) {
      if (p) {
        let m = L0(h), w = m.findIndex((y) => y.includes(d));
        return w === m.length - 1 && u > 0 || w === 0 && u < 0 ? void 0 : m[w + u] ? m[w + u][0] : void 0;
      }
      let v = O0(h), g = v.indexOf(d);
      if (!(g === v.length - 1 && u > 0) && !(g === 0 && u < 0))
        return v[g + u];
    },
    updateStoryArgs: /* @__PURE__ */ n((d, h) => {
      let { id: u, refId: p } = d;
      a.channel?.emit(Ga, {
        storyId: u,
        updatedArgs: h,
        options: { target: p }
      });
    }, "updateStoryArgs"),
    resetStoryArgs: /* @__PURE__ */ n((d, h) => {
      let { id: u, refId: p } = d;
      a.channel?.emit(za, {
        storyId: u,
        argNames: h,
        options: { target: p }
      });
    }, "resetStoryArgs"),
    fetchIndex: /* @__PURE__ */ n(async () => {
      try {
        let d = await $a(Wa);
        if (d.status !== 200)
          throw new Error(await d.text());
        let h = await d.json();
        if (h.v < 3) {
          Pa.warn(`Skipping story index with version v${h.v}, awaiting SET_STORIES.`);
          return;
        }
        await i.setIndex(h);
      } catch (d) {
        await t.setState({ indexError: d });
      }
    }, "fetchIndex"),
    // The story index we receive on SET_INDEX is "prepared" in that it has parameters
    // The story index we receive on fetchStoryIndex is not, but all the prepared fields are optional
    // so we can cast one to the other easily enough
    setIndex: /* @__PURE__ */ n(async (d) => {
      let { filteredIndex: h, index: u, status: p, filters: v } = t.getState(), g = X(d, {
        provider: a,
        docsOptions: s,
        status: p,
        filters: v
      }), m = X(d, {
        provider: a,
        docsOptions: s,
        status: p,
        filters: {}
      });
      await t.setState({
        internal_index: d,
        filteredIndex: dt(g, h),
        index: dt(m, u),
        indexError: void 0
      });
    }, "setIndex"),
    // FIXME: is there a bug where filtered stories get added back in on updateStory???
    updateStory: /* @__PURE__ */ n(async (d, h, u) => {
      if (u) {
        let { id: p, index: v, filteredIndex: g } = u;
        v[d] = {
          ...v[d],
          ...h
        }, g[d] = {
          ...g[d],
          ...h
        }, await e.updateRef(p, { index: v, filteredIndex: g });
      } else {
        let { index: p, filteredIndex: v } = t.getState();
        p && (p[d] = {
          ...p[d],
          ...h
        }), v && (v[d] = {
          ...v[d],
          ...h
        }), (p || v) && await t.setState({ index: p, filteredIndex: v });
      }
    }, "updateStory"),
    updateDocs: /* @__PURE__ */ n(async (d, h, u) => {
      if (u) {
        let { id: p, index: v, filteredIndex: g } = u;
        v[d] = {
          ...v[d],
          ...h
        }, g[d] = {
          ...g[d],
          ...h
        }, await e.updateRef(p, { index: v, filteredIndex: g });
      } else {
        let { index: p, filteredIndex: v } = t.getState();
        p && (p[d] = {
          ...p[d],
          ...h
        }), v && (v[d] = {
          ...v[d],
          ...h
        }), (p || v) && await t.setState({ index: p, filteredIndex: v });
      }
    }, "updateDocs"),
    setPreviewInitialized: /* @__PURE__ */ n(async (d) => {
      d ? e.updateRef(d.id, { previewInitialized: !0 }) : t.setState({ previewInitialized: !0 });
    }, "setPreviewInitialized"),
    getCurrentStoryStatus: /* @__PURE__ */ n(() => {
      let { status: d, storyId: h } = t.getState();
      return d[h];
    }, "getCurrentStoryStatus"),
    /* EXPERIMENTAL APIs */
    experimental_updateStatus: /* @__PURE__ */ n(async (d, h) => {
      let { status: u, internal_index: p } = t.getState(), v = { ...u }, g = typeof h == "function" ? h(u) : h;
      if (!(!d || Object.keys(g).length === 0) && (Object.entries(g).forEach(([m, w]) => {
        !m || typeof w != "object" || (v[m] = { ...v[m] || {} }, w === null ? delete v[m][d] : v[m][d] = w, Object.keys(v[m]).length === 0 &&
        delete v[m]);
      }), await t.setState({ status: v }, { persistence: "session" }), p)) {
        await i.setIndex(p);
        let m = await e.getRefs();
        Object.entries(m).forEach(([w, { internal_index: y, ...R }]) => {
          e.setRef(w, { ...R, storyIndex: y }, !0);
        });
      }
    }, "experimental_updateStatus"),
    experimental_setFilter: /* @__PURE__ */ n(async (d, h) => {
      await t.setState({ filters: { ...t.getState().filters, [d]: h } });
      let { internal_index: u } = t.getState();
      if (!u)
        return;
      await i.setIndex(u);
      let p = await e.getRefs();
      Object.entries(p).forEach(([v, { internal_index: g, ...m }]) => {
        e.setRef(v, { ...m, storyIndex: g }, !0);
      }), a.channel?.emit(Oa, { id: d });
    }, "experimental_setFilter")
  };
  a.channel?.on(
    Ua,
    /* @__PURE__ */ n(function({
      storyId: h,
      viewMode: u
    }) {
      let { sourceType: p } = z(this, e);
      if (p === "local") {
        let v = t.getState(), g = v.path === "/" || v.viewMode === "story" || v.viewMode === "docs", m = v.viewMode && v.storyId, w = v.viewMode !==
        u || v.storyId !== h, { type: y } = v.index?.[v.storyId] || {};
        g && (m && w && !(y === "root" || y === "component" || y === "group") ? a.channel?.emit(La, {
          storyId: v.storyId,
          viewMode: v.viewMode
        }) : w && r(`/${u}/${h}`));
      }
    }, "handler")
  ), a.channel?.on(ba, /* @__PURE__ */ n(function() {
    let { ref: h } = z(this, e);
    i.setPreviewInitialized(h);
  }, "handler")), a.channel?.on(Na, /* @__PURE__ */ n(function() {
    let { sourceType: h } = z(this, e);
    if (h === "local") {
      let u = i.getCurrentParameter("options");
      u && e.setOptions(bt(u));
    }
  }, "handler")), a.channel?.on(
    Fa,
    /* @__PURE__ */ n(function({ id: h, ...u }) {
      let { ref: p, sourceType: v } = z(this, e);
      if (i.updateStory(h, { ...u, prepared: !0 }, p), !p && !t.getState().hasCalledSetOptions) {
        let { options: g } = u.parameters;
        e.setOptions(bt(g)), t.setState({ hasCalledSetOptions: !0 });
      }
      if (v === "local") {
        let { storyId: g, index: m, refId: w } = t.getState();
        if (!m)
          return;
        let y = Array.from(
          /* @__PURE__ */ new Set([
            i.findSiblingStoryId(g, m, 1, !0),
            i.findSiblingStoryId(g, m, -1, !0)
          ])
        ).filter(Boolean);
        a.channel?.emit(Ca, {
          ids: y,
          options: { target: w }
        });
      }
    }, "handler")
  ), a.channel?.on(
    Ma,
    /* @__PURE__ */ n(function({ id: h, ...u }) {
      let { ref: p } = z(this, e);
      i.updateStory(h, { ...u, prepared: !0 }, p);
    }, "handler")
  ), a.channel?.on(Ba, /* @__PURE__ */ n(function(h) {
    let { ref: u } = z(this, e);
    if (u)
      e.setRef(u.id, { ...u, storyIndex: h }, !0);
    else {
      i.setIndex(h);
      let p = i.getCurrentParameter("options");
      e.setOptions(bt(p));
    }
  }, "handler")), a.channel?.on(Va, /* @__PURE__ */ n(function(h) {
    let { ref: u } = z(this, e), p = h.v ? H0(h) : h.stories;
    if (u)
      e.setRef(u.id, { ...u, setStoriesData: p }, !0);
    else
      throw new Error("Cannot call SET_STORIES for local frame");
  }, "handler")), a.channel?.on(
    Ha,
    /* @__PURE__ */ n(function({
      kind: h,
      title: u = h,
      story: p,
      name: v = p,
      storyId: g,
      ...m
    }) {
      let { ref: w } = z(this, e);
      w ? e.selectStory(g || u, v, { ...m, ref: w.id }) : e.selectStory(g || u, v, m);
    }, "handler")
  ), a.channel?.on(
    Da,
    /* @__PURE__ */ n(function({ storyId: h, args: u }) {
      let { ref: p } = z(this, e);
      i.updateStory(h, { args: u }, p);
    }, "handleStoryArgsUpdated")
  ), a.channel?.on(_a, /* @__PURE__ */ n(function(h) {
    let { ref: u } = z(this, e);
    i.setPreviewInitialized(u);
  }, "handleConfigError")), a.channel?.on(ja, /* @__PURE__ */ n(function(h) {
    let { ref: u } = z(this, e);
    i.setPreviewInitialized(u);
  }, "handleConfigError")), a.channel?.on(Ta, () => {
    let d = a.getConfig();
    d?.sidebar?.filters && t.setState({
      filters: {
        ...t.getState().filters,
        ...d?.sidebar?.filters
      }
    });
  });
  let c = a.getConfig();
  return {
    api: i,
    state: {
      storyId: o,
      viewMode: l,
      hasCalledSetOptions: !1,
      previewInitialized: !1,
      status: {},
      filters: c?.sidebar?.filters || {}
    },
    init: /* @__PURE__ */ n(async () => {
      a.channel?.on(ka, () => i.fetchIndex()), await i.fetchIndex();
    }, "init")
  };
}, "init");

// src/manager-api/modules/url.ts
var Ht = {};
T(Ht, {
  init: () => r1
});
import { buildArgsParam as K0, queryFromLocation as Ya } from "@storybook/core/router";
import {
  GLOBALS_UPDATED as Qa,
  NAVIGATE_URL as Ja,
  SET_CURRENT_STORY as Za,
  STORY_ARGS_UPDATED as Xa,
  UPDATE_QUERY_PARAMS as e1
} from "@storybook/core/core-events";
var { window: Ct } = A, Y = /* @__PURE__ */ n((e) => {
  if (e === "true" || e === "1")
    return !0;
  if (e === "false" || e === "0")
    return !1;
}, "parseBoolean"), zt, t1 = /* @__PURE__ */ n(({
  state: { location: e, path: t, viewMode: r, storyId: a },
  singleStory: o
}) => {
  let {
    full: l,
    panel: s,
    nav: i,
    shortcuts: c,
    addonPanel: d,
    tabs: h,
    path: u,
    ...p
    // the rest gets passed to the iframe
  } = Ya(e), v, g, m;
  Y(l) === !0 ? (v = 0, g = 0, m = 0) : Y(l) === !1 && (v = L.layout.navSize, g = L.layout.bottomPanelHeight, m = L.layout.rightPanelWidth),
  o || (Y(i) === !0 && (v = L.layout.navSize), Y(i) === !1 && (v = 0)), Y(s) === !1 && (g = 0, m = 0);
  let w = {
    navSize: v,
    bottomPanelHeight: g,
    rightPanelWidth: m,
    panelPosition: ["right", "bottom"].includes(s) ? s : void 0,
    showTabs: Y(h)
  }, y = {
    enableShortcuts: Y(c)
  }, R = d || void 0, S = a, E = B(zt, p) ? zt : p;
  return zt = E, { viewMode: r, layout: w, ui: y, selectedPanel: R, location: e, path: t, customQueryParams: E, storyId: S };
}, "initialUrlSupport"), r1 = /* @__PURE__ */ n((e) => {
  let { store: t, navigate: r, provider: a, fullAPI: o } = e, l = /* @__PURE__ */ n((d, h = {}, u = {}) => {
    let p = Object.entries(h).filter(([, g]) => g).sort(([g], [m]) => g < m ? -1 : 1).map(([g, m]) => `${g}=${m}`), v = [d, ...p].join("&");
    return r(v, u);
  }, "navigateTo"), s = {
    getQueryParam(d) {
      let { customQueryParams: h } = t.getState();
      return h ? h[d] : void 0;
    },
    getUrlState() {
      let { path: d, customQueryParams: h, storyId: u, url: p, viewMode: v } = t.getState();
      return { path: d, queryParams: h, storyId: u, url: p, viewMode: v };
    },
    setQueryParams(d) {
      let { customQueryParams: h } = t.getState(), u = {}, p = {
        ...h,
        ...Object.entries(d).reduce((v, [g, m]) => (m !== null && (v[g] = m), v), u)
      };
      B(h, p) || (t.setState({ customQueryParams: p }), a.channel?.emit(e1, p));
    },
    applyQueryParams(d, h) {
      let { path: u, queryParams: p } = s.getUrlState();
      l(u, { ...p, ...d }, h), s.setQueryParams(d);
    },
    navigateUrl(d, h) {
      r(d, { plain: !0, ...h });
    }
  }, i = /* @__PURE__ */ n(() => {
    let { path: d, queryParams: h, viewMode: u } = s.getUrlState();
    if (u !== "story")
      return;
    let p = o.getCurrentStoryData();
    if (p?.type !== "story")
      return;
    let { args: v, initialArgs: g } = p, m = K0(g, v);
    l(d, { ...h, args: m }, { replace: !0 }), s.setQueryParams({ args: m });
  }, "updateArgsParam");
  a.channel?.on(Za, () => i());
  let c;
  return a.channel?.on(Xa, () => {
    "requestIdleCallback" in Ct ? (c && Ct.cancelIdleCallback(c), c = Ct.requestIdleCallback(i, { timeout: 1e3 })) : (c && clearTimeout(c), setTimeout(
    i, 100));
  }), a.channel?.on(Qa, ({ userGlobals: d, initialGlobals: h }) => {
    let { path: u, queryParams: p } = s.getUrlState(), v = K0(h, d);
    l(u, { ...p, globals: v }, { replace: !0 }), s.setQueryParams({ globals: v });
  }), a.channel?.on(Ja, (d, h) => {
    s.navigateUrl(d, h);
  }), {
    api: s,
    state: t1(e)
  };
}, "init");

// src/manager-api/modules/versions.ts
var Tt = {};
T(Tt, {
  init: () => o1
});
var Q0 = _e(He(), 1);
import N from "semver";

// src/manager-api/version.ts
var q0 = "8.5.3";

// src/manager-api/modules/versions.ts
var { VERSIONCHECK: a1 } = A, Y0 = (0, Q0.default)(1)(() => {
  try {
    return { ...JSON.parse(a1).data || {} };
  } catch {
    return {};
  }
}), n1 = /* @__PURE__ */ n((e) => e.includes("vue") ? "vue" : e, "normalizeRendererName"), o1 = /* @__PURE__ */ n(({ store: e }) => {
  let { dismissedVersionNotification: t } = e.getState(), r = {
    versions: {
      current: {
        version: q0
      },
      ...Y0()
    },
    dismissedVersionNotification: t
  }, a = {
    getCurrentVersion: /* @__PURE__ */ n(() => {
      let {
        versions: { current: l }
      } = e.getState();
      return l;
    }, "getCurrentVersion"),
    getLatestVersion: /* @__PURE__ */ n(() => {
      let {
        versions: { latest: l, next: s, current: i }
      } = e.getState();
      return i && N.prerelease(i.version) && s ? l && N.gt(l.version, s.version) ? l : s : l;
    }, "getLatestVersion"),
    // TODO: Move this to it's own "info" module later
    getDocsUrl: /* @__PURE__ */ n(({ subpath: l, versioned: s, renderer: i }) => {
      let {
        versions: { latest: c, current: d }
      } = e.getState(), h = "https://storybook.js.org/docs/";
      if (s && d?.version && c?.version) {
        let v = N.diff(c.version, d.version);
        v === "patch" || v === null || (h += `${N.major(d.version)}.${N.minor(d.version)}/`);
      }
      let [u, p] = l?.split("#") || [];
      if (u && (h += `${u}/`), i && typeof A.STORYBOOK_RENDERER < "u") {
        let v = A.STORYBOOK_RENDERER;
        v && (h += `?renderer=${n1(v)}`);
      }
      return p && (h += `#${p}`), h;
    }, "getDocsUrl"),
    versionUpdateAvailable: /* @__PURE__ */ n(() => {
      let l = a.getLatestVersion(), s = a.getCurrentVersion();
      if (l) {
        if (!l.version || !s.version)
          return !0;
        let c = !!N.prerelease(s.version) ? `${N.major(s.version)}.${N.minor(s.version)}.${N.patch(
          s.version
        )}` : s.version, d = N.diff(c, l.version);
        return N.gt(l.version, c) && d !== "patch" && !d.includes("pre");
      }
      return !1;
    }, "versionUpdateAvailable")
  };
  return { init: /* @__PURE__ */ n(async () => {
    let { versions: l = {} } = e.getState(), { latest: s, next: i } = Y0();
    await e.setState({
      versions: { ...l, latest: s, next: i }
    });
  }, "initModule"), state: r, api: a };
}, "init");

// src/manager-api/modules/whatsnew.tsx
var Lt = {};
T(Lt, {
  init: () => d1
});
import l1 from "react";

// ../node_modules/@storybook/icons/dist/index.mjs
import * as me from "react";
var J0 = /* @__PURE__ */ me.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, a) => /* @__PURE__ */ me.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: a,
    ...r
  },
  /* @__PURE__ */ me.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.\
044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4\
.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 \
2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.6\
24-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
      fill: e
    }
  )
));

// src/manager-api/modules/whatsnew.tsx
import {
  REQUEST_WHATS_NEW_DATA as i1,
  RESULT_WHATS_NEW_DATA as c1,
  SET_WHATS_NEW_CACHE as s1,
  TOGGLE_WHATS_NEW_NOTIFICATIONS as f1
} from "@storybook/core/core-events";
var Z0 = "whats-new", d1 = /* @__PURE__ */ n(({ fullAPI: e, store: t, provider: r }) => {
  let a = {
    whatsNewData: void 0
  };
  function o(d) {
    t.setState({ whatsNewData: d }), a.whatsNewData = d;
  }
  n(o, "setWhatsNewState");
  let l = {
    isWhatsNewUnread() {
      return a.whatsNewData?.status === "SUCCESS" && !a.whatsNewData.postIsRead;
    },
    whatsNewHasBeenRead() {
      a.whatsNewData?.status === "SUCCESS" && (i({ lastReadPost: a.whatsNewData.url }), o({ ...a.whatsNewData, postIsRead: !0 }), e.clearNotification(
      Z0));
    },
    toggleWhatsNewNotifications() {
      a.whatsNewData?.status === "SUCCESS" && (o({
        ...a.whatsNewData,
        disableWhatsNewNotifications: !a.whatsNewData.disableWhatsNewNotifications
      }), r.channel?.emit(f1, {
        disableWhatsNewNotifications: a.whatsNewData.disableWhatsNewNotifications
      }));
    }
  };
  function s() {
    return r.channel?.emit(i1), new Promise(
      (d) => r.channel?.once(
        c1,
        ({ data: h }) => d(h)
      )
    );
  }
  n(s, "getLatestWhatsNewPost");
  function i(d) {
    r.channel?.emit(s1, d);
  }
  return n(i, "setWhatsNewCache"), { init: /* @__PURE__ */ n(async () => {
    if (A.CONFIG_TYPE !== "DEVELOPMENT")
      return;
    let d = await s();
    o(d);
    let h = e.getUrlState();
    !(h?.path === "/onboarding" || h.queryParams?.onboarding === "true") && d.status === "SUCCESS" && !d.disableWhatsNewNotifications && d.showNotification &&
    e.addNotification({
      id: Z0,
      link: "/settings/whats-new",
      content: {
        headline: d.title,
        subHeadline: "Learn what's new in Storybook"
      },
      icon: /* @__PURE__ */ l1.createElement(J0, null),
      onClear({ dismissed: p }) {
        p && i({ lastDismissedPost: d.url });
      }
    });
  }, "initModule"), state: a, api: l };
}, "init");

// src/manager-api/store.ts
var le = _e(X0(), 1);

// ../node_modules/telejson/dist/chunk-465TF3XA.mjs
var h1 = Object.create, er = Object.defineProperty, u1 = Object.getOwnPropertyDescriptor, tr = Object.getOwnPropertyNames, p1 = Object.getPrototypeOf,
v1 = Object.prototype.hasOwnProperty, O = /* @__PURE__ */ n((e, t) => /* @__PURE__ */ n(function() {
  return t || (0, e[tr(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, "__require"), "__commonJS"), m1 = /* @__PURE__ */ n((e, t, r, a) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of tr(t))
      !v1.call(e, o) && o !== r && er(e, o, { get: /* @__PURE__ */ n(() => t[o], "get"), enumerable: !(a = u1(t, o)) || a.enumerable });
  return e;
}, "__copyProps"), De = /* @__PURE__ */ n((e, t, r) => (r = e != null ? h1(p1(e)) : {}, m1(
  t || !e || !e.__esModule ? er(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), "__toESM"), g1 = [
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
], w1 = ["detail"];
function rr(e) {
  let t = g1.filter((r) => e[r] !== void 0).reduce((r, a) => ({ ...r, [a]: e[a] }), {});
  return e instanceof CustomEvent && w1.filter((r) => e[r] !== void 0).forEach((r) => {
    t[r] = e[r];
  }), t;
}
n(rr, "extractEventHiddenProperties");

// ../node_modules/telejson/dist/index.mjs
var gr = _e(He(), 1);
var cr = O({
  "node_modules/has-symbols/shams.js"(e, t) {
    "use strict";
    t.exports = /* @__PURE__ */ n(function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var a = {}, o = Symbol("test"), l = Object(o);
      if (typeof o == "string" || Object.prototype.toString.call(o) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object \
Symbol]")
        return !1;
      var s = 42;
      a[o] = s;
      for (o in a)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(a).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
      a).length !== 0)
        return !1;
      var i = Object.getOwnPropertySymbols(a);
      if (i.length !== 1 || i[0] !== o || !Object.prototype.propertyIsEnumerable.call(a, o))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var c = Object.getOwnPropertyDescriptor(a, o);
        if (c.value !== s || c.enumerable !== !0)
          return !1;
      }
      return !0;
    }, "hasSymbols");
  }
}), sr = O({
  "node_modules/has-symbols/index.js"(e, t) {
    "use strict";
    var r = typeof Symbol < "u" && Symbol, a = cr();
    t.exports = /* @__PURE__ */ n(function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
      a();
    }, "hasNativeSymbols");
  }
}), y1 = O({
  "node_modules/function-bind/implementation.js"(e, t) {
    "use strict";
    var r = "Function.prototype.bind called on incompatible ", a = Array.prototype.slice, o = Object.prototype.toString, l = "[object Functi\
on]";
    t.exports = /* @__PURE__ */ n(function(i) {
      var c = this;
      if (typeof c != "function" || o.call(c) !== l)
        throw new TypeError(r + c);
      for (var d = a.call(arguments, 1), h, u = /* @__PURE__ */ n(function() {
        if (this instanceof h) {
          var w = c.apply(
            this,
            d.concat(a.call(arguments))
          );
          return Object(w) === w ? w : this;
        } else
          return c.apply(
            i,
            d.concat(a.call(arguments))
          );
      }, "binder"), p = Math.max(0, c.length - d.length), v = [], g = 0; g < p; g++)
        v.push("$" + g);
      if (h = Function("binder", "return function (" + v.join(",") + "){ return binder.apply(this,arguments); }")(u), c.prototype) {
        var m = /* @__PURE__ */ n(function() {
        }, "Empty2");
        m.prototype = c.prototype, h.prototype = new m(), m.prototype = null;
      }
      return h;
    }, "bind");
  }
}), Bt = O({
  "node_modules/function-bind/index.js"(e, t) {
    "use strict";
    var r = y1();
    t.exports = Function.prototype.bind || r;
  }
}), R1 = O({
  "node_modules/has/src/index.js"(e, t) {
    "use strict";
    var r = Bt();
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), fr = O({
  "node_modules/get-intrinsic/index.js"(e, t) {
    "use strict";
    var r, a = SyntaxError, o = Function, l = TypeError, s = /* @__PURE__ */ n(function(V) {
      try {
        return o('"use strict"; return (' + V + ").constructor;")();
      } catch {
      }
    }, "getEvalledConstructor"), i = Object.getOwnPropertyDescriptor;
    if (i)
      try {
        i({}, "");
      } catch {
        i = null;
      }
    var c = /* @__PURE__ */ n(function() {
      throw new l();
    }, "throwTypeError"), d = i ? function() {
      try {
        return arguments.callee, c;
      } catch {
        try {
          return i(arguments, "callee").get;
        } catch {
          return c;
        }
      }
    }() : c, h = sr()(), u = Object.getPrototypeOf || function(V) {
      return V.__proto__;
    }, p = {}, v = typeof Uint8Array > "u" ? r : u(Uint8Array), g = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": h ? u([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": p,
      "%AsyncGenerator%": p,
      "%AsyncGeneratorFunction%": p,
      "%AsyncIteratorPrototype%": p,
      "%Atomics%": typeof Atomics > "u" ? r : Atomics,
      "%BigInt%": typeof BigInt > "u" ? r : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
      "%Function%": o,
      "%GeneratorFunction%": p,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": h ? u(u([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !h ? r : u((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? r : Promise,
      "%Proxy%": typeof Proxy > "u" ? r : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? r : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !h ? r : u((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": h ? u(""[Symbol.iterator]()) : r,
      "%Symbol%": h ? Symbol : r,
      "%SyntaxError%": a,
      "%ThrowTypeError%": d,
      "%TypedArray%": v,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
    }, m = /* @__PURE__ */ n(function V(P) {
      var M;
      if (P === "%AsyncFunction%")
        M = s("async function () {}");
      else if (P === "%GeneratorFunction%")
        M = s("function* () {}");
      else if (P === "%AsyncGeneratorFunction%")
        M = s("async function* () {}");
      else if (P === "%AsyncGenerator%") {
        var _ = V("%AsyncGeneratorFunction%");
        _ && (M = _.prototype);
      } else if (P === "%AsyncIteratorPrototype%") {
        var C = V("%AsyncGenerator%");
        C && (M = u(C.prototype));
      }
      return g[P] = M, M;
    }, "doEval2"), w = {
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
    }, y = Bt(), R = R1(), S = y.call(Function.call, Array.prototype.concat), E = y.call(Function.apply, Array.prototype.splice), x = y.call(
    Function.call, String.prototype.replace), I = y.call(Function.call, String.prototype.slice), b = y.call(Function.call, RegExp.prototype.
    exec), k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ce = /\\(\\)?/g, se = /* @__PURE__ */ n(
    function(P) {
      var M = I(P, 0, 1), _ = I(P, -1);
      if (M === "%" && _ !== "%")
        throw new a("invalid intrinsic syntax, expected closing `%`");
      if (_ === "%" && M !== "%")
        throw new a("invalid intrinsic syntax, expected opening `%`");
      var C = [];
      return x(P, k, function(j, Q, H, Se) {
        C[C.length] = H ? x(Se, ce, "$1") : Q || j;
      }), C;
    }, "stringToPath3"), Mr = /* @__PURE__ */ n(function(P, M) {
      var _ = P, C;
      if (R(w, _) && (C = w[_], _ = "%" + C[0] + "%"), R(g, _)) {
        var j = g[_];
        if (j === p && (j = m(_)), typeof j > "u" && !M)
          throw new l("intrinsic " + P + " exists, but is not available. Please file an issue!");
        return {
          alias: C,
          name: _,
          value: j
        };
      }
      throw new a("intrinsic " + P + " does not exist!");
    }, "getBaseIntrinsic2");
    t.exports = /* @__PURE__ */ n(function(P, M) {
      if (typeof P != "string" || P.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof M != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (b(/^%?[^%]*%?$/, P) === null)
        throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var _ = se(P), C = _.length > 0 ? _[0] : "", j = Mr("%" + C + "%", M), Q = j.name, H = j.value, Se = !1, We = j.alias;
      We && (C = We[0], E(_, S([0, 1], We)));
      for (var Ie = 1, fe = !0; Ie < _.length; Ie += 1) {
        var G = _[Ie], xe = I(G, 0, 1), Ee = I(G, -1);
        if ((xe === '"' || xe === "'" || xe === "`" || Ee === '"' || Ee === "'" || Ee === "`") && xe !== Ee)
          throw new a("property names with quotes must have matching quotes");
        if ((G === "constructor" || !fe) && (Se = !0), C += "." + G, Q = "%" + C + "%", R(g, Q))
          H = g[Q];
        else if (H != null) {
          if (!(G in H)) {
            if (!M)
              throw new l("base intrinsic for " + P + " exists, but the property is not available.");
            return;
          }
          if (i && Ie + 1 >= _.length) {
            var Ae = i(H, G);
            fe = !!Ae, fe && "get" in Ae && !("originalValue" in Ae.get) ? H = Ae.get : H = H[G];
          } else
            fe = R(H, G), H = H[G];
          fe && !Se && (g[Q] = H);
        }
      }
      return H;
    }, "GetIntrinsic");
  }
}), S1 = O({
  "node_modules/call-bind/index.js"(e, t) {
    "use strict";
    var r = Bt(), a = fr(), o = a("%Function.prototype.apply%"), l = a("%Function.prototype.call%"), s = a("%Reflect.apply%", !0) || r.call(
    l, o), i = a("%Object.getOwnPropertyDescriptor%", !0), c = a("%Object.defineProperty%", !0), d = a("%Math.max%");
    if (c)
      try {
        c({}, "a", { value: 1 });
      } catch {
        c = null;
      }
    t.exports = /* @__PURE__ */ n(function(p) {
      var v = s(r, l, arguments);
      if (i && c) {
        var g = i(v, "length");
        g.configurable && c(
          v,
          "length",
          { value: 1 + d(0, p.length - (arguments.length - 1)) }
        );
      }
      return v;
    }, "callBind");
    var h = /* @__PURE__ */ n(function() {
      return s(r, o, arguments);
    }, "applyBind2");
    c ? c(t.exports, "apply", { value: h }) : t.exports.apply = h;
  }
}), I1 = O({
  "node_modules/call-bind/callBound.js"(e, t) {
    "use strict";
    var r = fr(), a = S1(), o = a(r("String.prototype.indexOf"));
    t.exports = /* @__PURE__ */ n(function(s, i) {
      var c = r(s, !!i);
      return typeof c == "function" && o(s, ".prototype.") > -1 ? a(c) : c;
    }, "callBoundIntrinsic");
  }
}), x1 = O({
  "node_modules/has-tostringtag/shams.js"(e, t) {
    "use strict";
    var r = cr();
    t.exports = /* @__PURE__ */ n(function() {
      return r() && !!Symbol.toStringTag;
    }, "hasToStringTagShams");
  }
}), E1 = O({
  "node_modules/is-regex/index.js"(e, t) {
    "use strict";
    var r = I1(), a = x1()(), o, l, s, i;
    a && (o = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), s = {}, c = /* @__PURE__ */ n(function() {
      throw s;
    }, "throwRegexMarker"), i = {
      toString: c,
      valueOf: c
    }, typeof Symbol.toPrimitive == "symbol" && (i[Symbol.toPrimitive] = c));
    var c, d = r("Object.prototype.toString"), h = Object.getOwnPropertyDescriptor, u = "[object RegExp]";
    t.exports = /* @__PURE__ */ n(a ? function(v) {
      if (!v || typeof v != "object")
        return !1;
      var g = h(v, "lastIndex"), m = g && o(g, "value");
      if (!m)
        return !1;
      try {
        l(v, i);
      } catch (w) {
        return w === s;
      }
    } : function(v) {
      return !v || typeof v != "object" && typeof v != "function" ? !1 : d(v) === u;
    }, "isRegex");
  }
}), A1 = O({
  "node_modules/is-function/index.js"(e, t) {
    t.exports = a;
    var r = Object.prototype.toString;
    function a(o) {
      if (!o)
        return !1;
      var l = r.call(o);
      return l === "[object Function]" || typeof o == "function" && l !== "[object RegExp]" || typeof window < "u" && (o === window.setTimeout ||
      o === window.alert || o === window.confirm || o === window.prompt);
    }
    n(a, "isFunction3");
  }
}), P1 = O({
  "node_modules/is-symbol/index.js"(e, t) {
    "use strict";
    var r = Object.prototype.toString, a = sr()();
    a ? (o = Symbol.prototype.toString, l = /^Symbol\(.*\)$/, s = /* @__PURE__ */ n(function(c) {
      return typeof c.valueOf() != "symbol" ? !1 : l.test(o.call(c));
    }, "isRealSymbolObject"), t.exports = /* @__PURE__ */ n(function(c) {
      if (typeof c == "symbol")
        return !0;
      if (r.call(c) !== "[object Symbol]")
        return !1;
      try {
        return s(c);
      } catch {
        return !1;
      }
    }, "isSymbol3")) : t.exports = /* @__PURE__ */ n(function(c) {
      return !1;
    }, "isSymbol3");
    var o, l, s;
  }
}), _1 = De(E1()), b1 = De(A1()), M1 = De(P1());
function C1(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
n(C1, "isObject");
var z1 = typeof global == "object" && global && global.Object === Object && global, H1 = z1, T1 = typeof self == "object" && self && self.Object ===
Object && self, L1 = H1 || T1 || Function("return this")(), Vt = L1, O1 = Vt.Symbol, re = O1, dr = Object.prototype, B1 = dr.hasOwnProperty,
V1 = dr.toString, ge = re ? re.toStringTag : void 0;
function D1(e) {
  var t = B1.call(e, ge), r = e[ge];
  try {
    e[ge] = void 0;
    var a = !0;
  } catch {
  }
  var o = V1.call(e);
  return a && (t ? e[ge] = r : delete e[ge]), o;
}
n(D1, "getRawTag");
var N1 = D1, k1 = Object.prototype, j1 = k1.toString;
function F1(e) {
  return j1.call(e);
}
n(F1, "objectToString");
var U1 = F1, G1 = "[object Null]", $1 = "[object Undefined]", ar = re ? re.toStringTag : void 0;
function W1(e) {
  return e == null ? e === void 0 ? $1 : G1 : ar && ar in Object(e) ? N1(e) : U1(e);
}
n(W1, "baseGetTag");
var hr = W1;
function K1(e) {
  return e != null && typeof e == "object";
}
n(K1, "isObjectLike");
var q1 = K1, Y1 = "[object Symbol]";
function Q1(e) {
  return typeof e == "symbol" || q1(e) && hr(e) == Y1;
}
n(Q1, "isSymbol");
var Dt = Q1;
function J1(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, o = Array(a); ++r < a; )
    o[r] = t(e[r], r, e);
  return o;
}
n(J1, "arrayMap");
var Z1 = J1, X1 = Array.isArray, Nt = X1, en = 1 / 0, nr = re ? re.prototype : void 0, or = nr ? nr.toString : void 0;
function ur(e) {
  if (typeof e == "string")
    return e;
  if (Nt(e))
    return Z1(e, ur) + "";
  if (Dt(e))
    return or ? or.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -en ? "-0" : t;
}
n(ur, "baseToString");
var tn = ur;
function rn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
n(rn, "isObject2");
var pr = rn, an = "[object AsyncFunction]", nn = "[object Function]", on = "[object GeneratorFunction]", ln = "[object Proxy]";
function cn(e) {
  if (!pr(e))
    return !1;
  var t = hr(e);
  return t == nn || t == on || t == an || t == ln;
}
n(cn, "isFunction");
var sn = cn, fn = Vt["__core-js_shared__"], Ot = fn, lr = function() {
  var e = /[^.]+$/.exec(Ot && Ot.keys && Ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dn(e) {
  return !!lr && lr in e;
}
n(dn, "isMasked");
var hn = dn, un = Function.prototype, pn = un.toString;
function vn(e) {
  if (e != null) {
    try {
      return pn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
n(vn, "toSource");
var mn = vn, gn = /[\\^$.*+?()[\]{}|]/g, wn = /^\[object .+?Constructor\]$/, yn = Function.prototype, Rn = Object.prototype, Sn = yn.toString,
In = Rn.hasOwnProperty, xn = RegExp(
  "^" + Sn.call(In).replace(gn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function En(e) {
  if (!pr(e) || hn(e))
    return !1;
  var t = sn(e) ? xn : wn;
  return t.test(mn(e));
}
n(En, "baseIsNative");
var An = En;
function Pn(e, t) {
  return e?.[t];
}
n(Pn, "getValue");
var _n = Pn;
function bn(e, t) {
  var r = _n(e, t);
  return An(r) ? r : void 0;
}
n(bn, "getNative");
var vr = bn;
function Mn(e, t) {
  return e === t || e !== e && t !== t;
}
n(Mn, "eq");
var Cn = Mn, zn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hn = /^\w*$/;
function Tn(e, t) {
  if (Nt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Dt(e) ? !0 : Hn.test(e) || !zn.test(e) || t != null && e in Object(
  t);
}
n(Tn, "isKey");
var Ln = Tn, On = vr(Object, "create"), we = On;
function Bn() {
  this.__data__ = we ? we(null) : {}, this.size = 0;
}
n(Bn, "hashClear");
var Vn = Bn;
function Dn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
n(Dn, "hashDelete");
var Nn = Dn, kn = "__lodash_hash_undefined__", jn = Object.prototype, Fn = jn.hasOwnProperty;
function Un(e) {
  var t = this.__data__;
  if (we) {
    var r = t[e];
    return r === kn ? void 0 : r;
  }
  return Fn.call(t, e) ? t[e] : void 0;
}
n(Un, "hashGet");
var Gn = Un, $n = Object.prototype, Wn = $n.hasOwnProperty;
function Kn(e) {
  var t = this.__data__;
  return we ? t[e] !== void 0 : Wn.call(t, e);
}
n(Kn, "hashHas");
var qn = Kn, Yn = "__lodash_hash_undefined__";
function Qn(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = we && t === void 0 ? Yn : t, this;
}
n(Qn, "hashSet");
var Jn = Qn;
function ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
n(ae, "Hash");
ae.prototype.clear = Vn;
ae.prototype.delete = Nn;
ae.prototype.get = Gn;
ae.prototype.has = qn;
ae.prototype.set = Jn;
var ir = ae;
function Zn() {
  this.__data__ = [], this.size = 0;
}
n(Zn, "listCacheClear");
var Xn = Zn;
function eo(e, t) {
  for (var r = e.length; r--; )
    if (Cn(e[r][0], t))
      return r;
  return -1;
}
n(eo, "assocIndexOf");
var ke = eo, to = Array.prototype, ro = to.splice;
function ao(e) {
  var t = this.__data__, r = ke(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : ro.call(t, r, 1), --this.size, !0;
}
n(ao, "listCacheDelete");
var no = ao;
function oo(e) {
  var t = this.__data__, r = ke(t, e);
  return r < 0 ? void 0 : t[r][1];
}
n(oo, "listCacheGet");
var lo = oo;
function io(e) {
  return ke(this.__data__, e) > -1;
}
n(io, "listCacheHas");
var co = io;
function so(e, t) {
  var r = this.__data__, a = ke(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
n(so, "listCacheSet");
var fo = so;
function ne(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
n(ne, "ListCache");
ne.prototype.clear = Xn;
ne.prototype.delete = no;
ne.prototype.get = lo;
ne.prototype.has = co;
ne.prototype.set = fo;
var ho = ne, uo = vr(Vt, "Map"), po = uo;
function vo() {
  this.size = 0, this.__data__ = {
    hash: new ir(),
    map: new (po || ho)(),
    string: new ir()
  };
}
n(vo, "mapCacheClear");
var mo = vo;
function go(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
n(go, "isKeyable");
var wo = go;
function yo(e, t) {
  var r = e.__data__;
  return wo(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
n(yo, "getMapData");
var je = yo;
function Ro(e) {
  var t = je(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
n(Ro, "mapCacheDelete");
var So = Ro;
function Io(e) {
  return je(this, e).get(e);
}
n(Io, "mapCacheGet");
var xo = Io;
function Eo(e) {
  return je(this, e).has(e);
}
n(Eo, "mapCacheHas");
var Ao = Eo;
function Po(e, t) {
  var r = je(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
n(Po, "mapCacheSet");
var _o = Po;
function oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
n(oe, "MapCache");
oe.prototype.clear = mo;
oe.prototype.delete = So;
oe.prototype.get = xo;
oe.prototype.has = Ao;
oe.prototype.set = _o;
var mr = oe, bo = "Expected a function";
function kt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(bo);
  var r = /* @__PURE__ */ n(function() {
    var a = arguments, o = t ? t.apply(this, a) : a[0], l = r.cache;
    if (l.has(o))
      return l.get(o);
    var s = e.apply(this, a);
    return r.cache = l.set(o, s) || l, s;
  }, "memoized");
  return r.cache = new (kt.Cache || mr)(), r;
}
n(kt, "memoize");
kt.Cache = mr;
var Mo = kt, Co = 500;
function zo(e) {
  var t = Mo(e, function(a) {
    return r.size === Co && r.clear(), a;
  }), r = t.cache;
  return t;
}
n(zo, "memoizeCapped");
var Ho = zo, To = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lo = /\\(\\)?/g, Oo = Ho(
function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(To, function(r, a, o, l) {
    t.push(o ? l.replace(Lo, "$1") : a || r);
  }), t;
}), Bo = Oo;
function Vo(e) {
  return e == null ? "" : tn(e);
}
n(Vo, "toString");
var Do = Vo;
function No(e, t) {
  return Nt(e) ? e : Ln(e, t) ? [e] : Bo(Do(e));
}
n(No, "castPath");
var ko = No, jo = 1 / 0;
function Fo(e) {
  if (typeof e == "string" || Dt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -jo ? "-0" : t;
}
n(Fo, "toKey");
var Uo = Fo;
function Go(e, t) {
  t = ko(t, e);
  for (var r = 0, a = t.length; e != null && r < a; )
    e = e[Uo(t[r++])];
  return r && r == a ? e : void 0;
}
n(Go, "baseGet");
var $o = Go;
function Wo(e, t, r) {
  var a = e == null ? void 0 : $o(e, t);
  return a === void 0 ? r : a;
}
n(Wo, "get");
var Ko = Wo, Ne = C1, qo = /* @__PURE__ */ n((e) => {
  let t = null, r = !1, a = !1, o = !1, l = "";
  if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
    for (let s = 0; s < e.length; s += 1)
      !t && !r && !a && !o ? e[s] === '"' || e[s] === "'" || e[s] === "`" ? t = e[s] : e[s] === "/" && e[s + 1] === "*" ? r = !0 : e[s] === "\
/" && e[s + 1] === "/" ? a = !0 : e[s] === "/" && e[s + 1] !== "/" && (o = !0) : (t && (e[s] === t && e[s - 1] !== "\\" || e[s] === `
` && t !== "`") && (t = null), o && (e[s] === "/" && e[s - 1] !== "\\" || e[s] === `
`) && (o = !1), r && e[s - 1] === "/" && e[s - 2] === "*" && (r = !1), a && e[s] === `
` && (a = !1)), !r && !a && (l += e[s]);
  else
    l = e;
  return l;
}, "removeCodeComments"), Yo = (0, gr.default)(1e4)(
  (e) => qo(e).replace(/\n\s*/g, "").trim()
), Qo = /* @__PURE__ */ n(function(t, r) {
  let a = r.slice(0, r.indexOf("{")), o = r.slice(r.indexOf("{"));
  if (a.includes("=>") || a.includes("function"))
    return r;
  let l = a;
  return l = l.replace(t, "function"), l + o;
}, "convertShorthandMethods2"), Jo = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/, Zo = /* @__PURE__ */ n((e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/),
"isJSON");
function wr(e) {
  if (!Ne(e))
    return e;
  let t = e, r = !1;
  return typeof Event < "u" && e instanceof Event && (t = rr(t), r = !0), t = Object.keys(t).reduce((a, o) => {
    try {
      t[o] && t[o].toJSON, a[o] = t[o];
    } catch {
      r = !0;
    }
    return a;
  }, {}), r ? t : e;
}
n(wr, "convertUnconventionalData");
var Xo = /* @__PURE__ */ n(function(t) {
  let r, a, o, l;
  return /* @__PURE__ */ n(function(i, c) {
    try {
      if (i === "")
        return l = [], r = /* @__PURE__ */ new Map([[c, "[]"]]), a = /* @__PURE__ */ new Map(), o = [], c;
      let d = a.get(this) || this;
      for (; o.length && d !== o[0]; )
        o.shift(), l.pop();
      if (typeof c == "boolean")
        return c;
      if (c === void 0)
        return t.allowUndefined ? "_undefined_" : void 0;
      if (c === null)
        return null;
      if (typeof c == "number")
        return c === -1 / 0 ? "_-Infinity_" : c === 1 / 0 ? "_Infinity_" : Number.isNaN(c) ? "_NaN_" : c;
      if (typeof c == "bigint")
        return `_bigint_${c.toString()}`;
      if (typeof c == "string")
        return Jo.test(c) ? t.allowDate ? `_date_${c}` : void 0 : c;
      if ((0, _1.default)(c))
        return t.allowRegExp ? `_regexp_${c.flags}|${c.source}` : void 0;
      if ((0, b1.default)(c)) {
        if (!t.allowFunction)
          return;
        let { name: u } = c, p = c.toString();
        return p.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${u}|${(() => {
        }).toString()}` : `_function_${u}|${Yo(Qo(i, p))}`;
      }
      if ((0, M1.default)(c)) {
        if (!t.allowSymbol)
          return;
        let u = Symbol.keyFor(c);
        return u !== void 0 ? `_gsymbol_${u}` : `_symbol_${c.toString().slice(7, -1)}`;
      }
      if (o.length >= t.maxDepth)
        return Array.isArray(c) ? `[Array(${c.length})]` : "[Object]";
      if (c === this)
        return `_duplicate_${JSON.stringify(l)}`;
      if (c instanceof Error && t.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...c.cause ? { cause: c.cause } : {},
            ...c,
            name: c.name,
            message: c.message,
            stack: c.stack,
            "_constructor-name_": c.constructor.name
          }
        };
      if (c.constructor && c.constructor.name && c.constructor.name !== "Object" && !Array.isArray(c) && !t.allowClass)
        return;
      let h = r.get(c);
      if (!h) {
        let u = Array.isArray(c) ? c : wr(c);
        if (c.constructor && c.constructor.name && c.constructor.name !== "Object" && !Array.isArray(c) && t.allowClass)
          try {
            Object.assign(u, { "_constructor-name_": c.constructor.name });
          } catch {
          }
        return l.push(i), o.unshift(u), r.set(c, JSON.stringify(l)), c !== u && a.set(c, u), u;
      }
      return `_duplicate_${h}`;
    } catch {
      return;
    }
  }, "replace");
}, "replacer2"), e5 = /* @__PURE__ */ n(function reviver(options) {
  let refs = [], root;
  return /* @__PURE__ */ n(function revive(key, value) {
    if (key === "" && (root = value, refs.forEach(({ target: e, container: t, replacement: r }) => {
      let a = Zo(r) ? JSON.parse(r) : r.split(".");
      a.length === 0 ? t[e] = root : t[e] = Ko(root, a);
    })), key === "_constructor-name_")
      return value;
    if (Ne(value) && value.__isConvertedError__) {
      let { message: e, ...t } = value.errorProperties, r = new Error(e);
      return Object.assign(r, t), r;
    }
    if (Ne(value) && value["_constructor-name_"] && options.allowFunction) {
      let e = value["_constructor-name_"];
      if (e !== "Object") {
        let t = new Function(`return function ${e.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new t());
      }
      return delete value["_constructor-name_"], value;
    }
    if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
      let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [], sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval)
        return eval(`(${sourceSanitized})`);
      let result = /* @__PURE__ */ n((...args) => {
        let f = eval(`(${sourceSanitized})`);
        return f(...args);
      }, "result");
      return Object.defineProperty(result, "toString", {
        value: /* @__PURE__ */ n(() => sourceSanitized, "value")
      }), Object.defineProperty(result, "name", {
        value: name
      }), result;
    }
    if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(t, e);
    }
    return typeof value == "string" && value.startsWith("_date_") && options.allowDate ? new Date(value.replace("_date_", "")) : typeof value ==
    "string" && value.startsWith("_duplicate_") ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }),
    null) : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol ? Symbol(value.replace("_symbol_", "")) : typeof value ==
    "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "string" &&
    value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "_\
NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) :
    value;
  }, "revive");
}, "reviver"), yr = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, Rr = /* @__PURE__ */ n((e, t = {}) => {
  let r = { ...yr, ...t };
  return JSON.stringify(wr(e), Xo(r), t.space);
}, "stringify"), t5 = /* @__PURE__ */ n(() => {
  let e = /* @__PURE__ */ new Map();
  return /* @__PURE__ */ n(function t(r) {
    Ne(r) && Object.entries(r).forEach(([a, o]) => {
      o === "_undefined_" ? r[a] = void 0 : e.get(o) || (e.set(o, !0), t(o));
    }), Array.isArray(r) && r.forEach((a, o) => {
      a === "_undefined_" ? (e.set(a, !0), r[o] = void 0) : e.get(a) || (e.set(a, !0), t(a));
    });
  }, "mutateUndefined");
}, "mutator"), Sr = /* @__PURE__ */ n((e, t = {}) => {
  let r = { ...yr, ...t }, a = JSON.parse(e, e5(r));
  return t5()(a), a;
}, "parse");

// src/manager-api/lib/store-setup.ts
var Ir = /* @__PURE__ */ n((e) => {
  e.fn("set", function(t, r) {
    return e.set(
      // @ts-expect-error('this' implicitly has type 'any')
      this._area,
      // @ts-expect-error('this' implicitly has type 'any')
      this._in(t),
      Rr(r, { maxDepth: 50, allowFunction: !1 })
    );
  }), e.fn("get", function(t, r) {
    let a = e.get(this._area, this._in(t));
    return a !== null ? Sr(a) : r || a;
  });
}, "default");

// src/manager-api/store.ts
Ir(le.default._);
var xr = "@storybook/manager/store";
function jt(e) {
  return e.get(xr) || {};
}
n(jt, "get");
function r5(e, t) {
  return e.set(xr, t);
}
n(r5, "set");
function a5(e, t) {
  let r = jt(e);
  return r5(e, { ...r, ...t });
}
n(a5, "update");
var Ft = class Ft {
  constructor({ setState: t, getState: r }) {
    this.upstreamSetState = t, this.upstreamGetState = r;
  }
  // The assumption is that this will be called once, to initialize the React state
  // when the module is instantiated
  getInitialState(t) {
    return { ...t, ...jt(le.default.local), ...jt(le.default.session) };
  }
  getState() {
    return this.upstreamGetState();
  }
  async setState(t, r, a) {
    let o, l;
    typeof r == "function" ? (o = r, l = a) : l = r;
    let { persistence: s = "none" } = l || {}, i = {}, c = {};
    typeof t == "function" ? i = /* @__PURE__ */ n((h) => (c = t(h), c), "patch") : (i = t, c = i);
    let d = await new Promise((h) => {
      this.upstreamSetState(i, () => {
        h(this.getState());
      });
    });
    if (s !== "none") {
      let h = s === "session" ? le.default.session : le.default.local;
      await a5(h, c);
    }
    return o && o(d), d;
  }
};
n(Ft, "Store");
var ye = Ft;

// src/manager-api/lib/request-response.ts
var Ut = class Ut extends Error {
  constructor(r, a) {
    super(r);
    this.payload = void 0;
    this.payload = a;
  }
};
n(Ut, "RequestResponseError");
var Fe = Ut, Sc = /* @__PURE__ */ n((e, t, r, a, o = 5e3) => {
  let l;
  return new Promise((s, i) => {
    let c = {
      id: Math.random().toString(16).slice(2),
      payload: a
    }, d = /* @__PURE__ */ n((h) => {
      h.id === c.id && (clearTimeout(l), e.off(r, d), h.success ? s(h.payload) : i(new Fe(h.error, h.payload)));
    }, "responseHandler");
    e.emit(t, c), e.on(r, d), l = setTimeout(() => {
      e.off(r, d), i(new Fe("Timed out waiting for response"));
    }, o);
  });
}, "experimental_requestResponse");

// src/manager-api/root.tsx
var { ActiveTabs: Tc } = Le;
var $e = S0({ api: void 0, state: ze({}) }), B0 = /* @__PURE__ */ n((...e) => x0({}, ...e), "combineParameters"), Ge = class Ge extends n5 {
  constructor(r) {
    super(r);
    this.api = {};
    this.initModules = /* @__PURE__ */ n(() => {
      this.modules.forEach((r) => {
        "init" in r && r.init();
      });
    }, "initModules");
    let {
      location: a,
      path: o,
      refId: l,
      viewMode: s = r.docsOptions.docsMode ? "docs" : r.viewMode,
      singleStory: i,
      storyId: c,
      docsOptions: d,
      navigate: h
    } = r, u = new ye({
      getState: /* @__PURE__ */ n(() => this.state, "getState"),
      setState: /* @__PURE__ */ n((y, R) => (this.setState(y, () => R(this.state)), this.state), "setState")
    }), p = { location: a, path: o, viewMode: s, singleStory: i, storyId: c, refId: l }, v = { docsOptions: d };
    this.state = u.getInitialState(ze({ ...p, ...v }));
    let g = {
      navigate: h,
      store: u,
      provider: r.provider
    };
    this.modules = [
      wt,
      ot,
      nt,
      Le,
      gt,
      ct,
      yt,
      _t,
      Mt,
      ut,
      pt,
      Ht,
      Tt,
      Lt
    ].map(
      (y) => y.init({ ...p, ...v, ...g, state: this.state, fullAPI: this.api })
    );
    let m = ze(this.state, ...this.modules.map((y) => y.state)), w = Object.assign(this.api, { navigate: h }, ...this.modules.map((y) => y.api));
    this.state = m, this.api = w;
  }
  static getDerivedStateFromProps(r, a) {
    return a.path !== r.path ? {
      ...a,
      location: r.location,
      path: r.path,
      refId: r.refId,
      viewMode: r.viewMode,
      storyId: r.storyId
    } : null;
  }
  shouldComponentUpdate(r, a) {
    let o = this.props, l = this.state;
    return o.path !== r.path || !D(l, a);
  }
  render() {
    let { children: r } = this.props, a = {
      state: this.state,
      api: this.api
    };
    return /* @__PURE__ */ ie.createElement(c5, { effect: this.initModules }, /* @__PURE__ */ ie.createElement($e.Provider, { value: a }, /* @__PURE__ */ ie.
    createElement(f5, null, r)));
  }
};
n(Ge, "ManagerProvider"), Ge.displayName = "Manager";
var Pr = Ge, c5 = /* @__PURE__ */ n(({ children: e, effect: t }) => (ie.useEffect(t, []), e), "EffectOnMount"), s5 = /* @__PURE__ */ n((e) => e,
"defaultFilter");
function f5({
  // @ts-expect-error (Converted from ts-ignore)
  filter: e = s5,
  children: t
}) {
  let r = Wt($e), a = Er(t), o = Er(e);
  if (typeof a.current != "function")
    return /* @__PURE__ */ ie.createElement(o5, null, a.current);
  let l = o.current(r), s = $t(() => [...Object.entries(l).reduce((i, c) => i.concat(c), [])], [r.state]);
  return $t(() => {
    let i = a.current;
    return /* @__PURE__ */ ie.createElement(i, { ...l });
  }, s);
}
n(f5, "ManagerConsumer");
function Lc() {
  let { state: e } = Wt($e);
  return {
    ...e,
    // deprecated fields for back-compat
    get storiesHash() {
      return Gt("state.storiesHash is deprecated, please use state.index"), this.index || {};
    },
    get storiesConfigured() {
      return Gt("state.storiesConfigured is deprecated, please use state.previewInitialized"), this.previewInitialized;
    },
    get storiesFailed() {
      return Gt("state.storiesFailed is deprecated, please use state.indexError"), this.indexError;
    }
  };
}
n(Lc, "useStorybookState");
function K() {
  let { api: e } = Wt($e);
  return e;
}
n(K, "useStorybookApi");
function br(e, t) {
  return typeof e > "u" ? t : e;
}
n(br, "orDefault");
var d5 = /* @__PURE__ */ n((e, t = []) => {
  let r = K();
  return _r(() => (Object.entries(e).forEach(([a, o]) => r.on(a, o)), () => {
    Object.entries(e).forEach(([a, o]) => r.off(a, o));
  }), t), r.emit;
}, "useChannel");
function Oc(e) {
  return K().isPrepared(e);
}
n(Oc, "useStoryPrepared");
function Bc(e, t) {
  let a = K().getCurrentParameter(e);
  return br(a, t);
}
n(Bc, "useParameter");
globalThis.STORYBOOK_ADDON_STATE = {};
var { STORYBOOK_ADDON_STATE: U } = globalThis;
function h5(e, t) {
  let r = K(), a = r.getAddonState(e) || U[e], o = br(
    a,
    U[e] ? U[e] : t
  ), l = !1;
  o === t && t !== void 0 && (U[e] = t, l = !0), _r(() => {
    l && r.setAddonState(e, t);
  }, [l]);
  let s = Ue(
    async (h, u) => {
      await r.setAddonState(e, h, u);
      let p = r.getAddonState(e);
      return U[e] = p, p;
    },
    [r, e]
  ), i = $t(() => {
    let h = {
      [`${Ar}-client-${e}`]: s,
      [`${Re}-client-${e}`]: s
    }, u = {
      [l5]: async () => {
        let p = r.getAddonState(e);
        p ? (U[e] = p, r.emit(`${Re}-manager-${e}`, p)) : U[e] ? (await s(U[e]), r.emit(`${Re}-manager-${e}`, U[e])) : t !== void 0 && (await s(
        t), U[e] = t, r.emit(`${Re}-manager-${e}`, t));
      },
      [i5]: () => {
        let p = r.getAddonState(e);
        p !== void 0 && r.emit(`${Re}-manager-${e}`, p);
      }
    };
    return {
      ...h,
      ...u
    };
  }, [e]), c = d5(i), d = Ue(
    async (h, u) => {
      await s(h, u);
      let p = r.getAddonState(e);
      c(`${Ar}-manager-${e}`, p);
    },
    [r, c, s, e]
  );
  return [o, d];
}
n(h5, "useSharedState");
function Vc(e, t) {
  return h5(e, t);
}
n(Vc, "useAddonState");
function Dc() {
  let { getCurrentStoryData: e, updateStoryArgs: t, resetStoryArgs: r } = K(), a = e(), o = a?.type === "story" ? a.args : {}, l = a?.type ===
  "story" ? a.initialArgs : {}, s = Ue(
    (c) => t(a, c),
    [a, t]
  ), i = Ue(
    (c) => r(a, c),
    [a, r]
  );
  return [o, s, i, l];
}
n(Dc, "useArgs");
function Nc() {
  let e = K();
  return [e.getGlobals(), e.updateGlobals, e.getStoryGlobals(), e.getUserGlobals()];
}
n(Nc, "useGlobals");
function kc() {
  return K().getGlobalTypes();
}
n(kc, "useGlobalTypes");
function u5() {
  let { getCurrentStoryData: e } = K();
  return e();
}
n(u5, "useCurrentStory");
function jc() {
  let e = u5();
  return e?.type === "story" && e.argTypes || {};
}
n(jc, "useArgTypes");
var Fc = A0;
export {
  Tc as ActiveTabs,
  f5 as Consumer,
  $e as ManagerContext,
  Pr as Provider,
  Fe as RequestResponseError,
  jr as addons,
  B0 as combineParameters,
  bi as controlOrMetaKey,
  _i as controlOrMetaSymbol,
  Ci as eventMatchesShortcut,
  It as eventToShortcut,
  Sc as experimental_requestResponse,
  St as isMacLike,
  Mi as isShortcutTaken,
  ya as keyToSymbol,
  F as merge,
  Xe as mockChannel,
  wa as optionOrAltSymbol,
  xt as shortcutMatchesShortcut,
  zi as shortcutToHumanString,
  Fc as types,
  Vc as useAddonState,
  jc as useArgTypes,
  Dc as useArgs,
  d5 as useChannel,
  kc as useGlobalTypes,
  Nc as useGlobals,
  Bc as useParameter,
  h5 as useSharedState,
  Oc as useStoryPrepared,
  K as useStorybookApi,
  Lc as useStorybookState
};
