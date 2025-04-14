import {
  require_dist
} from "./chunk-3OM4WS3U.js";
import {
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/.cache/sb-vite-plugin-externals/@storybook/core/preview-errors.js
var require_preview_errors = __commonJS({
  "node_modules/.cache/sb-vite-plugin-externals/@storybook/core/preview-errors.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
  }
});

// node_modules/.cache/sb-vite-plugin-externals/@storybook/core/preview-api.js
var require_preview_api = __commonJS({
  "node_modules/.cache/sb-vite-plugin-externals/@storybook/core/preview-api.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
  }
});

// node_modules/@storybook/core/dist/docs-tools/index.js
var import_preview_errors = __toESM(require_preview_errors());
var import_preview_errors2 = __toESM(require_preview_errors());
var import_jsdoc_type_pratt_parser = __toESM(require_dist());
var import_preview_api = __toESM(require_preview_api());
var De = Object.defineProperty;
var o = (e, t) => De(e, "name", { value: t, configurable: true });
var he = o((e) => e.name === "literal", "isLiteral");
var be = o((e) => e.value.replace(/['|"]/g, ""), "toEnumOption");
var Pe = o((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let t = {};
      return e.signature.properties.forEach((r) => {
        t[r.key] = d(r.value);
      }), {
        name: "object",
        value: t
      };
    default:
      throw new import_preview_errors.UnknownArgTypesError({ type: e, language: "Flow" });
  }
}, "convertSig");
var d = o((e) => {
  var _a, _b, _c, _d;
  let { name: t, raw: r } = e, n = {};
  switch (typeof r < "u" && (n.raw = r), e.name) {
    case "literal":
      return { ...n, name: "other", value: e.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...n, name: t };
    case "Array":
      return { ...n, name: "array", value: e.elements.map(d) };
    case "signature":
      return { ...n, ...Pe(e) };
    case "union":
      return ((_a = e.elements) == null ? void 0 : _a.every(he)) ? { ...n, name: "enum", value: (_b = e.elements) == null ? void 0 : _b.map(be) } : { ...n, name: t, value: (_c = e.elements) == null ? void 0 : _c.map(d) };
    case "intersection":
      return { ...n, name: t, value: (_d = e.elements) == null ? void 0 : _d.map(d) };
    default:
      return { ...n, name: "other", value: t };
  }
}, "convert");
function j(e, t) {
  let r = {}, n = Object.keys(e);
  for (let s = 0; s < n.length; s++) {
    let i = n[s], p = e[i];
    r[i] = t(p, i, e);
  }
  return r;
}
o(j, "mapValues");
var W = /^['"]|['"]$/g;
var Se = o((e) => e.replace(W, ""), "trimQuotes");
var Oe = o((e) => W.test(e), "includesQuotes");
var h = o((e) => {
  let t = Se(e);
  return Oe(e) || Number.isNaN(Number(t)) ? t : Number(t);
}, "parseLiteral");
var ve = /^\(.*\) => /;
var x = o((e) => {
  let { name: t, raw: r, computed: n, value: s } = e, i = {};
  switch (typeof r < "u" && (i.raw = r), t) {
    case "enum": {
      let a = n ? s : s.map((c) => h(c.value));
      return { ...i, name: t, value: a };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...i, name: t };
    case "func":
      return { ...i, name: "function" };
    case "bool":
    case "boolean":
      return { ...i, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...i, name: "array", value: s && x(s) };
    case "object":
      return { ...i, name: t };
    case "objectOf":
      return { ...i, name: t, value: x(s) };
    case "shape":
    case "exact":
      let p = j(s, (a) => x(a));
      return { ...i, name: "object", value: p };
    case "union":
      return { ...i, name: "union", value: s.map((a) => x(a)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((t == null ? void 0 : t.indexOf("|")) > 0)
        try {
          let u = t.split("|").map((m) => JSON.parse(m));
          return { ...i, name: "enum", value: u };
        } catch {
        }
      let a = s ? `${t}(${s})` : t, c = ve.test(t) ? "function" : "other";
      return { ...i, name: c, value: a };
    }
  }
}, "convert");
var Ee = o((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let t = {};
      return e.signature.properties.forEach((r) => {
        t[r.key] = D(r.value);
      }), {
        name: "object",
        value: t
      };
    default:
      throw new import_preview_errors2.UnknownArgTypesError({ type: e, language: "Typescript" });
  }
}, "convertSig");
var D = o((e) => {
  var _a, _b, _c, _d;
  let { name: t, raw: r } = e, n = {};
  switch (typeof r < "u" && (n.raw = r), e.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...n, name: t };
    case "Array":
      return { ...n, name: "array", value: e.elements.map(D) };
    case "signature":
      return { ...n, ...Ee(e) };
    case "union":
      let s;
      return ((_a = e.elements) == null ? void 0 : _a.every((i) => i.name === "literal")) ? s = {
        ...n,
        name: "enum",
        // @ts-expect-error fix types
        value: (_b = e.elements) == null ? void 0 : _b.map((i) => h(i.value))
      } : s = { ...n, name: t, value: (_c = e.elements) == null ? void 0 : _c.map(D) }, s;
    case "intersection":
      return { ...n, name: t, value: (_d = e.elements) == null ? void 0 : _d.map(D) };
    default:
      return { ...n, name: "other", value: t };
  }
}, "convert");
var b = o((e) => {
  let { type: t, tsType: r, flowType: n } = e;
  try {
    if (t != null)
      return x(t);
    if (r != null)
      return D(r);
    if (n != null)
      return d(n);
  } catch (s) {
    console.error(s);
  }
  return null;
}, "convert");
var je = ((s) => (s.JAVASCRIPT = "JavaScript", s.FLOW = "Flow", s.TYPESCRIPT = "TypeScript", s.UNKNOWN = "Unknown", s))(je || {});
var ke = ["null", "undefined"];
function T(e) {
  return ke.some((t) => t === e);
}
o(T, "isDefaultValueBlacklisted");
var M = o((e) => {
  if (!e)
    return "";
  if (typeof e == "string")
    return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
}, "str");
function z(e) {
  return !!e.__docgenInfo;
}
o(z, "hasDocgen");
function $(e) {
  return e != null && Object.keys(e).length > 0;
}
o($, "isValidDocgenSection");
function Y(e, t) {
  return z(e) ? e.__docgenInfo[t] : null;
}
o(Y, "getDocgenSection");
function q(e) {
  return z(e) ? M(e.__docgenInfo.description) : "";
}
o(q, "getDocgenDescription");
var f;
(function(e) {
  e.start = "/**", e.nostart = "/***", e.delim = "*", e.end = "*/";
})(f = f || (f = {}));
function k(e) {
  return /^\s+$/.test(e);
}
o(k, "isSpace");
function G(e) {
  let t = e.match(/\r+$/);
  return t == null ? ["", e] : [e.slice(-t[0].length), e.slice(0, -t[0].length)];
}
o(G, "splitCR");
function y(e) {
  let t = e.match(/^\s+/);
  return t == null ? ["", e] : [e.slice(0, t[0].length), e.slice(t[0].length)];
}
o(y, "splitSpace");
function K(e) {
  return e.split(/\n/);
}
o(K, "splitLines");
function X(e = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: false, description: "", problems: [], source: [] }, e);
}
o(X, "seedSpec");
function F(e = {}) {
  return Object.assign({
    start: "",
    delimiter: "",
    postDelimiter: "",
    tag: "",
    postTag: "",
    name: "",
    postName: "",
    type: "",
    postType: "",
    description: "",
    end: "",
    lineEnd: ""
  }, e);
}
o(F, "seedTokens");
var Fe = /^@\S+/;
function J({ fence: e = "```" } = {}) {
  let t = Je(e), r = o((n, s) => t(n) ? !s : s, "toggleFence");
  return o(function(s) {
    let i = [[]], p = false;
    for (let a of s)
      Fe.test(a.tokens.description) && !p ? i.push([a]) : i[i.length - 1].push(a), p = r(a.tokens.description, p);
    return i;
  }, "parseBlock");
}
o(J, "getParser");
function Je(e) {
  return typeof e == "string" ? (t) => t.split(e).length % 2 === 0 : e;
}
o(Je, "getFencer");
function N({ startLine: e = 0, markers: t = f } = {}) {
  let r = null, n = e;
  return o(function(i) {
    let p = i, a = F();
    if ([a.lineEnd, p] = G(p), [a.start, p] = y(p), r === null && p.startsWith(t.start) && !p.startsWith(t.nostart) && (r = [], a.delimiter = p.slice(0, t.start.length), p = p.slice(t.start.length), [a.postDelimiter, p] = y(p)), r === null)
      return n++, null;
    let c = p.trimRight().endsWith(t.end);
    if (a.delimiter === "" && p.startsWith(t.delim) && !p.startsWith(t.end) && (a.delimiter = t.delim, p = p.slice(t.delim.length), [
      a.postDelimiter,
      p
    ] = y(p)), c) {
      let u = p.trimRight();
      a.end = p.slice(u.length - t.end.length), p = u.slice(0, -t.end.length);
    }
    if (a.description = p, r.push({ number: n, source: i, tokens: a }), n++, c) {
      let u = r.slice();
      return r = null, u;
    }
    return null;
  }, "parseSource");
}
o(N, "getParser");
function R({ tokenizers: e }) {
  return o(function(r) {
    var n;
    let s = X({ source: r });
    for (let i of e)
      if (s = i(s), !((n = s.problems[s.problems.length - 1]) === null || n === void 0) && n.critical)
        break;
    return s;
  }, "parseSpec");
}
o(R, "getParser");
function P() {
  return (e) => {
    let { tokens: t } = e.source[0], r = t.description.match(/\s*(@(\S+))(\s*)/);
    return r === null ? (e.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: e.source[0].number,
      critical: true
    }), e) : (t.tag = r[1], t.postTag = r[3], t.description = t.description.slice(r[0].length), e.tag = r[2], e);
  };
}
o(P, "tagTokenizer");
function S(e = "compact") {
  let t = Re(e);
  return (r) => {
    let n = 0, s = [];
    for (let [a, { tokens: c }] of r.source.entries()) {
      let u = "";
      if (a === 0 && c.description[0] !== "{")
        return r;
      for (let m of c.description)
        if (m === "{" && n++, m === "}" && n--, u += m, n === 0)
          break;
      if (s.push([c, u]), n === 0)
        break;
    }
    if (n !== 0)
      return r.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: r.source[0].number,
        critical: true
      }), r;
    let i = [], p = s[0][0].postDelimiter.length;
    for (let [a, [c, u]] of s.entries())
      c.type = u, a > 0 && (c.type = c.postDelimiter.slice(p) + u, c.postDelimiter = c.postDelimiter.slice(0, p)), [c.postType, c.description] = y(c.description.slice(u.length)), i.push(c.type);
    return i[0] = i[0].slice(1), i[i.length - 1] = i[i.length - 1].slice(0, -1), r.type = t(i), r;
  };
}
o(S, "typeTokenizer");
var Ne = o((e) => e.trim(), "trim");
function Re(e) {
  return e === "compact" ? (t) => t.map(Ne).join("") : e === "preserve" ? (t) => t.join(`
`) : e;
}
o(Re, "getJoiner");
var Ae = o((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
function O() {
  let e = o((t, { tokens: r }, n) => r.type === "" ? t : n, "typeEnd");
  return (t) => {
    let { tokens: r } = t.source[t.source.reduce(e, 0)], n = r.description.trimLeft(), s = n.split('"');
    if (s.length > 1 && s[0] === "" && s.length % 2 === 1)
      return t.name = s[1], r.name = `"${s[1]}"`, [r.postName, r.description] = y(n.slice(r.name.length)), t;
    let i = 0, p = "", a = false, c;
    for (let m of n) {
      if (i === 0 && k(m))
        break;
      m === "[" && i++, m === "]" && i--, p += m;
    }
    if (i !== 0)
      return t.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: t.source[0].number,
        critical: true
      }), t;
    let u = p;
    if (p[0] === "[" && p[p.length - 1] === "]") {
      a = true, p = p.slice(1, -1);
      let m = p.split("=");
      if (p = m[0].trim(), m[1] !== void 0 && (c = m.slice(1).join("=").trim()), p === "")
        return t.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: t.source[0].number,
          critical: true
        }), t;
      if (c === "")
        return t.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: t.source[0].number,
          critical: true
        }), t;
      if (!Ae(c) && /=(?!>)/.test(c))
        return t.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: t.source[0].number,
          critical: true
        }), t;
    }
    return t.optional = a, t.name = p, r.name = u, c !== void 0 && (t.default = c), [r.postName, r.description] = y(n.slice(r.name.length)), t;
  };
}
o(O, "nameTokenizer");
function v(e = "compact", t = f) {
  let r = A(e);
  return (n) => (n.description = r(n.source, t), n);
}
o(v, "descriptionTokenizer");
function A(e) {
  return e === "compact" ? Ve : e === "preserve" ? Be : e;
}
o(A, "getJoiner");
function Ve(e, t = f) {
  return e.map(({ tokens: { description: r } }) => r.trim()).filter((r) => r !== "").join(" ");
}
o(Ve, "compactJoiner");
var Ce = o((e, { tokens: t }, r) => t.type === "" ? e : r, "lineNo");
var _e = o(({ tokens: e }) => (e.delimiter === "" ? e.start : e.postDelimiter.slice(1)) + e.description, "getDescription");
function Be(e, t = f) {
  if (e.length === 0)
    return "";
  e[0].tokens.description === "" && e[0].tokens.delimiter === t.start && (e = e.slice(1));
  let r = e[e.length - 1];
  return r !== void 0 && r.tokens.description === "" && r.tokens.end.endsWith(t.end) && (e = e.slice(0, -1)), e = e.slice(e.reduce(Ce, 0)), e.map(_e).join(`
`);
}
o(Be, "preserveJoiner");
function V({ startLine: e = 0, fence: t = "```", spacing: r = "compact", markers: n = f, tokenizers: s = [
  P(),
  S(r),
  O(),
  v(r)
] } = {}) {
  if (e < 0 || e % 1 > 0)
    throw new Error("Invalid startLine");
  let i = N({ startLine: e, markers: n }), p = J({ fence: t }), a = R({ tokenizers: s }), c = A(r);
  return function(u) {
    let m = [];
    for (let ge of K(u)) {
      let E = i(ge);
      if (E === null)
        continue;
      let L = p(E), U = L.slice(1).map(a);
      m.push({
        description: c(L[0], n),
        tags: U,
        source: E,
        problems: U.reduce((de, xe) => de.concat(xe.problems), [])
      });
    }
    return m;
  };
}
o(V, "getParser");
function Ie(e) {
  return e.start + e.delimiter + e.postDelimiter + e.tag + e.postTag + e.type + e.postType + e.name + e.postName + e.description + e.end + e.lineEnd;
}
o(Ie, "join");
function C() {
  return (e) => e.source.map(({ tokens: t }) => Ie(t)).join(`
`);
}
o(C, "getStringifier");
var Le = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0
};
var Mr = Object.keys(Le);
function H(e, t = {}) {
  return V(t)(e);
}
o(H, "parse");
var lo = C();
function ze(e) {
  return e != null && e.includes("@");
}
o(ze, "containsJsDoc");
function $e(e) {
  let n = `/**
` + (e ?? "").split(`
`).map((i) => ` * ${i}`).join(`
`) + `
*/`, s = H(n, {
    spacing: "preserve"
  });
  if (!s || s.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return s[0];
}
o($e, "parse");
var Ye = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
};
var Q = o((e, t = Ye) => {
  if (!ze(e))
    return {
      includesJsDoc: false,
      ignore: false
    };
  let r = $e(e), n = qe(r, t.tags);
  return n.ignore ? {
    includesJsDoc: true,
    ignore: true
  } : {
    includesJsDoc: true,
    ignore: false,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: r.description.trim(),
    extractedTags: n
  };
}, "parseJsDoc");
function qe(e, t) {
  let r = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: false
  };
  for (let n of e.tags)
    if (!(t !== void 0 && !t.includes(n.tag)))
      if (n.tag === "ignore") {
        r.ignore = true;
        break;
      } else
        switch (n.tag) {
          case "param":
          case "arg":
          case "argument": {
            let s = Ke(n);
            s != null && (r.params == null && (r.params = []), r.params.push(s));
            break;
          }
          case "deprecated": {
            let s = Xe(n);
            s != null && (r.deprecated = s);
            break;
          }
          case "returns": {
            let s = He(n);
            s != null && (r.returns = s);
            break;
          }
          default:
            break;
        }
  return r;
}
o(qe, "extractJsDocTags");
function Ge(e) {
  return e.replace(/[\.-]$/, "");
}
o(Ge, "normaliseParamName");
function Ke(e) {
  if (!e.name || e.name === "-")
    return null;
  let t = te(e.type);
  return {
    name: e.name,
    type: t,
    description: ee(e.description),
    getPrettyName: o(() => Ge(e.name), "getPrettyName"),
    getTypeName: o(() => t ? re(t) : null, "getTypeName")
  };
}
o(Ke, "extractParam");
function Xe(e) {
  return e.name ? Z(e.name, e.description) : null;
}
o(Xe, "extractDeprecated");
function Z(e, t) {
  let r = e === "" ? t : `${e} ${t}`;
  return ee(r);
}
o(Z, "joinNameAndDescription");
function ee(e) {
  let t = e.replace(/^- /g, "").trim();
  return t === "" ? null : t;
}
o(ee, "normaliseDescription");
function He(e) {
  let t = te(e.type);
  return t ? {
    type: t,
    description: Z(e.name, e.description),
    getTypeName: o(() => re(t), "getTypeName")
  } : null;
}
o(He, "extractReturns");
var g = (0, import_jsdoc_type_pratt_parser.stringifyRules)();
var Qe = g.JsdocTypeObject;
g.JsdocTypeAny = () => "any";
g.JsdocTypeObject = (e, t) => `(${Qe(e, t)})`;
g.JsdocTypeOptional = (e, t) => t(e.element);
g.JsdocTypeNullable = (e, t) => t(e.element);
g.JsdocTypeNotNullable = (e, t) => t(e.element);
g.JsdocTypeUnion = (e, t) => e.elements.map(t).join("|");
function te(e) {
  try {
    return (0, import_jsdoc_type_pratt_parser.parse)(e, "typescript");
  } catch {
    return null;
  }
}
o(te, "extractType");
function re(e) {
  return (0, import_jsdoc_type_pratt_parser.transform)(g, e);
}
o(re, "extractTypeName");
function B(e) {
  return e.length > 90;
}
o(B, "isTooLongForTypeSummary");
function oe(e) {
  return e.length > 50;
}
o(oe, "isTooLongForDefaultValueSummary");
function l(e, t) {
  return e === t ? { summary: e } : { summary: e, detail: t };
}
o(l, "createSummaryValue");
var Po = o((e) => e.replace(/\\r\\n/g, "\\n"), "normalizeNewlines");
function ne(e, t) {
  if (e != null) {
    let { value: r } = e;
    if (!T(r))
      return oe(r) ? l(t == null ? void 0 : t.name, r) : l(r);
  }
  return null;
}
o(ne, "createDefaultValue");
function se({ name: e, value: t, elements: r, raw: n }) {
  return t ?? (r != null ? r.map(se).join(" | ") : n ?? e);
}
o(se, "generateUnionElement");
function Ze({ name: e, raw: t, elements: r }) {
  return r != null ? l(r.map(se).join(" | ")) : t != null ? l(t.replace(/^\|\s*/, "")) : l(e);
}
o(Ze, "generateUnion");
function et({ type: e, raw: t }) {
  return t != null ? l(t) : l(e);
}
o(et, "generateFuncSignature");
function tt({ type: e, raw: t }) {
  return t != null ? B(t) ? l(e, t) : l(t) : l(e);
}
o(tt, "generateObjectSignature");
function rt(e) {
  let { type: t } = e;
  return t === "object" ? tt(e) : et(e);
}
o(rt, "generateSignature");
function ot({ name: e, raw: t }) {
  return t != null ? B(t) ? l(e, t) : l(t) : l(e);
}
o(ot, "generateDefault");
function ie(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case "union":
      return Ze(e);
    case "signature":
      return rt(e);
    default:
      return ot(e);
  }
}
o(ie, "createType");
var pe = o((e, t) => {
  let { flowType: r, description: n, required: s, defaultValue: i } = t;
  return {
    name: e,
    type: ie(r),
    required: s,
    description: n,
    defaultValue: ne(i ?? null, r ?? null)
  };
}, "createFlowPropDef");
function ae({ defaultValue: e }) {
  if (e != null) {
    let { value: t } = e;
    if (!T(t))
      return l(t);
  }
  return null;
}
o(ae, "createDefaultValue");
function ce({ tsType: e, required: t }) {
  if (e == null)
    return null;
  let r = e.name;
  return t || (r = r.replace(" | undefined", "")), l(
    ["Array", "Record", "signature"].includes(e.name) ? e.raw : r
  );
}
o(ce, "createType");
var le = o((e, t) => {
  let { description: r, required: n } = t;
  return {
    name: e,
    type: ce(t),
    required: n,
    description: r,
    defaultValue: ae(t)
  };
}, "createTsPropDef");
function nt(e) {
  return e != null ? l(e.name) : null;
}
o(nt, "createType");
function st(e) {
  let { computed: t, func: r } = e;
  return typeof t > "u" && typeof r > "u";
}
o(st, "isReactDocgenTypescript");
function it(e) {
  return e ? e.name === "string" ? true : e.name === "enum" ? Array.isArray(e.value) && e.value.every(
    ({ value: t }) => typeof t == "string" && t[0] === '"' && t[t.length - 1] === '"'
  ) : false : false;
}
o(it, "isStringValued");
function pt(e, t) {
  if (e != null) {
    let { value: r } = e;
    if (!T(r))
      return st(e) && it(t) ? l(JSON.stringify(r)) : l(r);
  }
  return null;
}
o(pt, "createDefaultValue");
function ue(e, t, r) {
  let { description: n, required: s, defaultValue: i } = r;
  return {
    name: e,
    type: nt(t),
    required: s,
    description: n,
    defaultValue: pt(i, t)
  };
}
o(ue, "createBasicPropDef");
function w(e, t) {
  var _a;
  if (t == null ? void 0 : t.includesJsDoc) {
    let { description: r, extractedTags: n } = t;
    r != null && (e.description = t.description);
    let s = {
      ...n,
      params: (_a = n == null ? void 0 : n.params) == null ? void 0 : _a.map(
        (i) => ({
          name: i.getPrettyName(),
          description: i.description
        })
      )
    };
    Object.values(s).filter(Boolean).length > 0 && (e.jsDocTags = s);
  }
  return e;
}
o(w, "applyJsDocResult");
var at = o((e, t, r) => {
  let n = ue(e, t.type, t);
  return n.sbType = b(t), w(n, r);
}, "javaScriptFactory");
var ct = o((e, t, r) => {
  let n = le(e, t);
  return n.sbType = b(t), w(n, r);
}, "tsFactory");
var lt = o((e, t, r) => {
  let n = pe(e, t);
  return n.sbType = b(t), w(n, r);
}, "flowFactory");
var ut = o((e, t, r) => {
  let n = ue(e, { name: "unknown" }, t);
  return w(n, r);
}, "unknownFactory");
var I = o((e) => {
  switch (e) {
    case "JavaScript":
      return at;
    case "TypeScript":
      return ct;
    case "Flow":
      return lt;
    default:
      return ut;
  }
}, "getPropDefFactory");
var me = o(
  (e) => e.type != null ? "JavaScript" : e.flowType != null ? "Flow" : e.tsType != null ? "TypeScript" : "Unknown",
  "getTypeSystem"
);
var mt = o((e) => {
  let t = me(e[0]), r = I(t);
  return e.map((n) => {
    var _a;
    let s = n;
    return ((_a = n.type) == null ? void 0 : _a.elements) && (s = {
      ...n,
      type: {
        ...n.type,
        value: n.type.elements
      }
    }), fe(s.name, s, t, r);
  });
}, "extractComponentSectionArray");
var ft = o((e) => {
  let t = Object.keys(e), r = me(e[t[0]]), n = I(r);
  return t.map((s) => {
    let i = e[s];
    return i != null ? fe(s, i, r, n) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject");
var on = o((e, t) => {
  let r = Y(e, t);
  return $(r) ? Array.isArray(r) ? mt(r) : ft(r) : [];
}, "extractComponentProps");
function fe(e, t, r, n) {
  let s = Q(t.description);
  return s.includesJsDoc && s.ignore ? null : {
    propDef: n(e, t, s),
    jsDocTags: s.extractedTags,
    docgenInfo: t,
    typeSystem: r
  };
}
o(fe, "extractProp");
function nn(e) {
  return e != null ? q(e) : "";
}
o(nn, "extractComponentDescription");
var cn = o((e) => {
  let {
    component: t,
    argTypes: r,
    parameters: { docs: n = {} }
  } = e, { extractArgTypes: s } = n, i = s && t ? s(t) : {};
  return i ? (0, import_preview_api.combineParameters)(i, r) : r;
}, "enhanceArgTypes");
var ye = "storybook/docs";
var mn = `${ye}/panel`;
var yn = `${ye}/snippet-rendered`;
var gt = ((n) => (n.AUTO = "auto", n.CODE = "code", n.DYNAMIC = "dynamic", n))(gt || {});
var dt = /(addons\/|addon-|addon-essentials\/)(docs|controls)/;
var dn = o((e) => {
  var _a;
  return (_a = e.presetsList) == null ? void 0 : _a.some((t) => dt.test(t.name));
}, "hasDocsOrControls");

export {
  je,
  z,
  Y,
  B,
  oe,
  l,
  on,
  nn,
  cn,
  yn,
  gt
};
//# sourceMappingURL=chunk-KJJVWJUC.js.map
