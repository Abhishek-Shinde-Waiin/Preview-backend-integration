"use strict";
var Me = Object.create;
var C = Object.defineProperty;
var $e = Object.getOwnPropertyDescriptor;
var Ue = Object.getOwnPropertyNames;
var qe = Object.getPrototypeOf, Be = Object.prototype.hasOwnProperty;
var p = (s, e) => C(s, "name", { value: e, configurable: !0 });
var We = (s, e) => () => (e || s((e = { exports: {} }).exports, e), e.exports), ze = (s, e) => {
  for (var r in e)
    C(s, r, { get: e[r], enumerable: !0 });
}, ne = (s, e, r, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of Ue(e))
      !Be.call(s, i) && i !== r && C(s, i, { get: () => e[i], enumerable: !(t = $e(e, i)) || t.enumerable });
  return s;
};
var U = (s, e, r) => (r = s != null ? Me(qe(s)) : {}, ne(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !s || !s.__esModule ? C(r, "default", { value: s, enumerable: !0 }) : r,
  s
)), Ge = (s) => ne(C({}, "__esModule", { value: !0 }), s);

// ../node_modules/ts-dedent/dist/index.js
var k = We((T) => {
  "use strict";
  Object.defineProperty(T, "__esModule", { value: !0 });
  T.dedent = void 0;
  function oe(s) {
    for (var e = [], r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
    var t = Array.from(typeof s == "string" ? [s] : s);
    t[t.length - 1] = t[t.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var i = t.reduce(function(l, u) {
      var d = u.match(/\n([\t ]+|(?!\s).)/g);
      return d ? l.concat(d.map(function(x) {
        var g, b;
        return (b = (g = x.match(/[\t ]/g)) === null || g === void 0 ? void 0 : g.length) !== null && b !== void 0 ? b : 0;
      })) : l;
    }, []);
    if (i.length) {
      var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, i) + "}", "g");
      t = t.map(function(l) {
        return l.replace(a, `
`);
      });
    }
    t[0] = t[0].replace(/^\r?\n/, "");
    var n = t[0];
    return e.forEach(function(l, u) {
      var d = n.match(/(?:^|\n)( *)$/), x = d ? d[1] : "", g = l;
      typeof l == "string" && l.includes(`
`) && (g = String(l).split(`
`).map(function(b, _) {
        return _ === 0 ? b : "" + x + b;
      }).join(`
`)), n += g + t[u + 1];
    }), n;
  }
  p(oe, "dedent");
  T.dedent = oe;
  T.default = oe;
});

// src/csf-tools/index.ts
var ot = {};
ze(ot, {
  ConfigFile: () => G,
  CsfFile: () => q,
  NoMetaError: () => A,
  babelParse: () => Fe.babelParse,
  babelParseFile: () => de,
  enrichCsf: () => st,
  enrichCsfMeta: () => Pe,
  enrichCsfStory: () => je,
  extractDescription: () => te,
  extractSource: () => De,
  formatConfig: () => Ee,
  formatCsf: () => X,
  getStorySortParameter: () => it,
  isModuleMock: () => fe,
  loadConfig: () => be,
  loadCsf: () => W,
  printConfig: () => he,
  printCsf: () => ue,
  readConfig: () => Ze,
  readCsf: () => He,
  vitestTransform: () => we,
  writeConfig: () => et,
  writeCsf: () => Ye
});
module.exports = Ge(ot);

// src/csf-tools/CsfFile.ts
var B = require("node:fs/promises"), c = require("@storybook/core/babel"), P = require("@storybook/csf"), V = U(k(), 1);

// src/csf-tools/findVarInitialization.ts
var v = require("@storybook/core/babel");
var O = /* @__PURE__ */ p((s, e) => {
  let r = null, t = null;
  return e.body.find((i) => (v.types.isVariableDeclaration(i) ? t = i.declarations : v.types.isExportNamedDeclaration(i) && v.types.isVariableDeclaration(
  i.declaration) && (t = i.declaration.declarations), t && t.find((a) => v.types.isVariableDeclarator(a) && v.types.isIdentifier(a.id) && a.
  id.name === s ? (r = a.init, !0) : !1))), r;
}, "findVarInitialization");

// src/csf-tools/CsfFile.ts
var ae = console;
function Je(s) {
  if (c.types.isArrayExpression(s))
    return s.elements.map((e) => {
      if (c.types.isStringLiteral(e))
        return e.value;
      throw new Error(`Expected string literal: ${e}`);
    });
  if (c.types.isStringLiteral(s))
    return new RegExp(s.value);
  if (c.types.isRegExpLiteral(s))
    return new RegExp(s.pattern, s.flags);
  throw new Error(`Unknown include/exclude: ${s}`);
}
p(Je, "parseIncludeExclude");
function le(s) {
  if (!c.types.isArrayExpression(s))
    throw new Error("CSF: Expected tags array");
  return s.elements.map((e) => {
    if (c.types.isStringLiteral(e))
      return e.value;
    throw new Error("CSF: Expected tag to be string literal");
  });
}
p(le, "parseTags");
var K = /* @__PURE__ */ p((s, e) => {
  let { line: r, column: t } = s.loc?.start || {};
  return `${e || ""} (line ${r}, col ${t})`.trim();
}, "formatLocation"), fe = /* @__PURE__ */ p((s) => Qe.test(s), "isModuleMock"), ce = /* @__PURE__ */ p((s, e, r) => {
  let t = s;
  if (c.types.isCallExpression(s)) {
    let { callee: i, arguments: a } = s;
    if (c.types.isProgram(e) && c.types.isMemberExpression(i) && c.types.isIdentifier(i.object) && c.types.isIdentifier(i.property) && i.property.
    name === "bind" && (a.length === 0 || a.length === 1 && c.types.isObjectExpression(a[0]) && a[0].properties.length === 0)) {
      let n = i.object.name, l = O(n, e);
      l && (r._templates[n] = l, t = l);
    }
  }
  return c.types.isArrowFunctionExpression(t) || c.types.isFunctionDeclaration(t) ? t.params.length > 0 : !1;
}, "isArgsStory"), Ke = /* @__PURE__ */ p((s) => {
  if (c.types.isArrayExpression(s))
    return s.elements.map((e) => {
      if (c.types.isStringLiteral(e))
        return e.value;
      throw new Error(`Expected string literal named export: ${e}`);
    });
  throw new Error(`Expected array of string literals: ${s}`);
}, "parseExportsOrder"), pe = /* @__PURE__ */ p((s, e) => e.reduce(
  (r, t) => {
    let i = s[t];
    return i && (r[t] = i), r;
  },
  {}
), "sortExports"), Xe = /* @__PURE__ */ p((s) => {
  if (c.types.isArrowFunctionExpression(s) || c.types.isFunctionDeclaration(s)) {
    let e = s.params;
    if (e.length >= 1) {
      let [r] = e;
      if (c.types.isObjectPattern(r))
        return !!r.properties.find((t) => {
          if (c.types.isObjectProperty(t) && c.types.isIdentifier(t.key))
            return t.key.name === "mount";
        });
    }
  }
  return !1;
}, "hasMount"), Qe = /^[.\/#].*\.mock($|\.[^.]*$)/i, A = class extends Error {
  static {
    p(this, "NoMetaError");
  }
  constructor(e, r, t) {
    super(V.dedent`
      CSF: ${e} ${K(r, t)}

      More info: https://storybook.js.org/docs/writing-stories#default-export
    `), this.name = this.constructor.name;
  }
}, q = class {
  constructor(e, r, t) {
    this._stories = {};
    this._metaAnnotations = {};
    this._storyExports = {};
    this._storyStatements = {};
    this._storyAnnotations = {};
    this._templates = {};
    this._ast = e, this._file = t, this._options = r, this.imports = [];
  }
  static {
    p(this, "CsfFile");
  }
  /** @deprecated Use `_options.fileName` instead */
  get _fileName() {
    return this._options.fileName;
  }
  /** @deprecated Use `_options.makeTitle` instead */
  get _makeTitle() {
    return this._options.makeTitle;
  }
  _parseTitle(e) {
    let r = c.types.isIdentifier(e) ? O(e.name, this._ast.program) : e;
    if (c.types.isStringLiteral(r))
      return r.value;
    if (c.types.isTSSatisfiesExpression(r) && c.types.isStringLiteral(r.expression))
      return r.expression.value;
    throw new Error(V.dedent`
      CSF: unexpected dynamic title ${K(r, this._options.fileName)}

      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#string-literal-titles
    `);
  }
  _parseMeta(e, r) {
    let t = {};
    e.properties.forEach((i) => {
      if (c.types.isIdentifier(i.key)) {
        if (this._metaAnnotations[i.key.name] = i.value, i.key.name === "title")
          t.title = this._parseTitle(i.value);
        else if (["includeStories", "excludeStories"].includes(i.key.name))
          t[i.key.name] = Je(i.value);
        else if (i.key.name === "component") {
          let a = i.value;
          if (c.types.isIdentifier(a)) {
            let l = a.name, u = r.body.find(
              (d) => c.types.isImportDeclaration(d) && d.specifiers.find((x) => x.local.name === l)
            );
            if (u) {
              let { source: d } = u;
              c.types.isStringLiteral(d) && (this._rawComponentPath = d.value);
            }
          }
          let { code: n } = c.recast.print(i.value, {});
          t.component = n;
        } else if (i.key.name === "tags") {
          let a = i.value;
          c.types.isIdentifier(a) && (a = O(a.name, this._ast.program)), t.tags = le(a);
        } else if (i.key.name === "id")
          if (c.types.isStringLiteral(i.value))
            t.id = i.value.value;
          else
            throw new Error(`Unexpected component id: ${i.value}`);
      }
    }), this._meta = t;
  }
  getStoryExport(e) {
    let r = this._storyExports[e];
    if (r = c.types.isVariableDeclarator(r) ? r.init : r, c.types.isCallExpression(r)) {
      let { callee: t, arguments: i } = r;
      if (c.types.isMemberExpression(t) && c.types.isIdentifier(t.object) && c.types.isIdentifier(t.property) && t.property.name === "bind" &&
      (i.length === 0 || i.length === 1 && c.types.isObjectExpression(i[0]) && i[0].properties.length === 0)) {
        let { name: a } = t.object;
        r = this._templates[a];
      }
    }
    return r;
  }
  parse() {
    let e = this;
    if ((0, c.traverse)(this._ast, {
      ExportDefaultDeclaration: {
        enter(t) {
          let { node: i, parent: a } = t, n = c.types.isIdentifier(i.declaration) && c.types.isProgram(a);
          if (e._options.transformInlineMeta && !n && c.types.isExpression(i.declaration)) {
            let d = t.scope.generateUidIdentifier("meta");
            e._metaVariableName = d.name;
            let x = [
              c.types.variableDeclaration("const", [c.types.variableDeclarator(d, i.declaration)]),
              c.types.exportDefaultDeclaration(d)
            ];
            x.forEach((g) => g.loc = t.node.loc), t.replaceWithMultiple(x);
          }
          let l, u;
          if (n) {
            let d = i.declaration.name;
            e._metaVariableName = d;
            let x = /* @__PURE__ */ p((g) => c.types.isIdentifier(g.id) && g.id.name === d, "isVariableDeclarator");
            e._metaStatement = e._ast.program.body.find(
              (g) => c.types.isVariableDeclaration(g) && g.declarations.find(x)
            ), u = (e?._metaStatement?.declarations || []).find(
              x
            )?.init;
          } else
            e._metaStatement = i, u = i.declaration;
          if (c.types.isObjectExpression(u) ? l = u : (
            // export default { ... } as Meta<...>
            (c.types.isTSAsExpression(u) || c.types.isTSSatisfiesExpression(u)) && c.types.isObjectExpression(u.expression) && (l = u.expression)
          ), !e._meta && l && c.types.isProgram(a) && (e._metaNode = l, e._parseMeta(l, a)), e._metaStatement && !e._metaNode)
            throw new A(
              "default export must be an object",
              e._metaStatement,
              e._options.fileName
            );
        }
      },
      ExportNamedDeclaration: {
        enter({ node: t, parent: i }) {
          let a;
          c.types.isVariableDeclaration(t.declaration) ? a = t.declaration.declarations.filter((n) => c.types.isVariableDeclarator(n)) : c.types.
          isFunctionDeclaration(t.declaration) && (a = [t.declaration]), a ? a.forEach((n) => {
            if (c.types.isIdentifier(n.id)) {
              let { name: l } = n.id;
              if (l === "__namedExportsOrder" && c.types.isVariableDeclarator(n)) {
                e._namedExportsOrder = Ke(n.init);
                return;
              }
              e._storyExports[l] = n, e._storyStatements[l] = t;
              let u = (0, P.storyNameFromExport)(l);
              e._storyAnnotations[l] ? ae.warn(
                `Unexpected annotations for "${l}" before story declaration`
              ) : e._storyAnnotations[l] = {};
              let d;
              c.types.isVariableDeclarator(n) ? d = c.types.isTSAsExpression(n.init) || c.types.isTSSatisfiesExpression(n.init) ? n.init.expression :
              n.init : d = n;
              let x = {};
              c.types.isObjectExpression(d) ? (x.__isArgsStory = !0, d.properties.forEach((g) => {
                if (c.types.isIdentifier(g.key)) {
                  if (g.key.name === "render")
                    x.__isArgsStory = ce(
                      g.value,
                      i,
                      e
                    );
                  else if (g.key.name === "name" && c.types.isStringLiteral(g.value))
                    u = g.value.value;
                  else if (g.key.name === "storyName" && c.types.isStringLiteral(g.value))
                    ae.warn(
                      `Unexpected usage of "storyName" in "${l}". Please use "name" instead.`
                    );
                  else if (g.key.name === "parameters" && c.types.isObjectExpression(g.value)) {
                    let b = g.value.properties.find(
                      (_) => c.types.isObjectProperty(_) && c.types.isIdentifier(_.key) && _.key.name === "__id"
                    );
                    b && (x.__id = b.value.value);
                  }
                  e._storyAnnotations[l][g.key.name] = g.value;
                }
              })) : x.__isArgsStory = ce(d, i, e), e._stories[l] = {
                id: "FIXME",
                name: u,
                parameters: x,
                __stats: {}
              };
            }
          }) : t.specifiers.length > 0 && t.specifiers.forEach((n) => {
            if (c.types.isExportSpecifier(n) && c.types.isIdentifier(n.exported)) {
              let { name: l } = n.exported, { name: u } = n.local, d = c.types.isProgram(i) ? O(n.local.name, i) : n.local;
              if (l === "default") {
                let x;
                c.types.isObjectExpression(d) ? x = d : (
                  // export default { ... } as Meta<...>
                  c.types.isTSAsExpression(d) && c.types.isObjectExpression(d.expression) && (x = d.expression)
                ), !e._meta && x && c.types.isProgram(i) && e._parseMeta(x, i);
              } else
                e._storyAnnotations[l] = {}, e._storyStatements[l] = d, e._stories[l] = {
                  id: "FIXME",
                  name: l,
                  localName: u,
                  parameters: {},
                  __stats: {}
                };
            }
          });
        }
      },
      ExpressionStatement: {
        enter({ node: t, parent: i }) {
          let { expression: a } = t;
          if (c.types.isProgram(i) && c.types.isAssignmentExpression(a) && c.types.isMemberExpression(a.left) && c.types.isIdentifier(a.left.
          object) && c.types.isIdentifier(a.left.property)) {
            let n = a.left.object.name, l = a.left.property.name, u = a.right;
            if (e._storyAnnotations[n] && (l === "story" && c.types.isObjectExpression(u) ? u.properties.forEach((d) => {
              c.types.isIdentifier(d.key) && (e._storyAnnotations[n][d.key.name] = d.value);
            }) : e._storyAnnotations[n][l] = u), l === "storyName" && c.types.isStringLiteral(u)) {
              let d = u.value, x = e._stories[n];
              if (!x)
                return;
              x.name = d;
            }
          }
        }
      },
      CallExpression: {
        enter({ node: t }) {
          let { callee: i } = t;
          if (c.types.isIdentifier(i) && i.name === "storiesOf")
            throw new Error(V.dedent`
              Unexpected \`storiesOf\` usage: ${K(t, e._options.fileName)}.

              SB8 does not support \`storiesOf\`. 
            `);
        }
      },
      ImportDeclaration: {
        enter({ node: t }) {
          let { source: i } = t;
          if (c.types.isStringLiteral(i))
            e.imports.push(i.value);
          else
            throw new Error("CSF: unexpected import source");
        }
      }
    }), !e._meta)
      throw new A("missing default export", e._ast, e._options.fileName);
    let r = Object.entries(e._stories);
    if (e._meta.title = this._options.makeTitle(e._meta?.title), e._metaAnnotations.play && (e._meta.tags = [...e._meta.tags || [], "play-fn"]),
    e._stories = r.reduce(
      (t, [i, a]) => {
        if (!(0, P.isExportStory)(i, e._meta))
          return t;
        let n = a.parameters?.__id ?? (0, P.toId)(e._meta?.id || e._meta?.title, (0, P.storyNameFromExport)(i)), l = { ...a.parameters, __id: n },
        { includeStories: u } = e._meta || {};
        i === "__page" && (r.length === 1 || Array.isArray(u) && u.length === 1) && (l.docsOnly = !0), t[i] = { ...a, id: n, parameters: l };
        let d = e._storyAnnotations[i], { tags: x, play: g } = d;
        if (x) {
          let S = c.types.isIdentifier(x) ? O(x.name, this._ast.program) : x;
          t[i].tags = le(S);
        }
        g && (t[i].tags = [...t[i].tags || [], "play-fn"]);
        let b = t[i].__stats;
        ["play", "render", "loaders", "beforeEach", "globals"].forEach((S) => {
          b[S] = !!d[S] || !!e._metaAnnotations[S];
        });
        let _ = e.getStoryExport(i);
        return b.storyFn = !!(c.types.isArrowFunctionExpression(_) || c.types.isFunctionDeclaration(_)), b.mount = Xe(d.play ?? e._metaAnnotations.
        play), b.moduleMock = !!e.imports.find((S) => fe(S)), t;
      },
      {}
    ), Object.keys(e._storyExports).forEach((t) => {
      (0, P.isExportStory)(t, e._meta) || (delete e._storyExports[t], delete e._storyAnnotations[t], delete e._storyStatements[t]);
    }), e._namedExportsOrder) {
      let t = Object.keys(e._storyExports);
      e._storyExports = pe(e._storyExports, e._namedExportsOrder), e._stories = pe(e._stories, e._namedExportsOrder);
      let i = Object.keys(e._storyExports);
      if (t.length !== i.length)
        throw new Error(
          `Missing exports after sort: ${t.filter(
            (a) => !i.includes(a)
          )}`
        );
    }
    return e;
  }
  get meta() {
    return this._meta;
  }
  get stories() {
    return Object.values(this._stories);
  }
  get indexInputs() {
    let { fileName: e } = this._options;
    if (!e)
      throw new Error(
        V.dedent`Cannot automatically create index inputs with CsfFile.indexInputs because the CsfFile instance was created without a the fileName option.
        Either add the fileName option when creating the CsfFile instance, or create the index inputs manually.`
      );
    return Object.entries(this._stories).map(([r, t]) => {
      let i = [...this._meta?.tags ?? [], ...t.tags ?? []];
      return {
        type: "story",
        importPath: e,
        rawComponentPath: this._rawComponentPath,
        exportName: r,
        name: t.name,
        title: this.meta?.title,
        metaId: this.meta?.id,
        tags: i,
        __id: t.id,
        __stats: t.__stats
      };
    });
  }
}, de = /* @__PURE__ */ p(({
  code: s,
  filename: e = "",
  ast: r
}) => new c.BabelFileClass({ filename: e }, { code: s, ast: r ?? (0, c.babelParse)(s) }), "babelParseFile"), W = /* @__PURE__ */ p((s, e) => {
  let r = (0, c.babelParse)(s), t = de({ code: s, filename: e.fileName, ast: r });
  return new q(r, e, t);
}, "loadCsf"), X = /* @__PURE__ */ p((s, e = { sourceMaps: !1 }, r) => {
  let t = (0, c.generate)(s._ast, e, r);
  return e.sourceMaps ? t : t.code;
}, "formatCsf"), ue = /* @__PURE__ */ p((s, e = {}) => c.recast.print(s._ast, e), "printCsf"), He = /* @__PURE__ */ p(async (s, e) => {
  let r = (await (0, B.readFile)(s, "utf-8")).toString();
  return W(r, { ...e, fileName: s });
}, "readCsf"), Ye = /* @__PURE__ */ p(async (s, e) => {
  if (!(e || s._options.fileName))
    throw new Error("Please specify a fileName for writeCsf");
  await (0, B.writeFile)(e, ue(s).code);
}, "writeCsf");

// src/csf-tools/ConfigFile.ts
var J = require("node:fs/promises"), o = require("@storybook/core/babel"), me = U(k(), 1);
var Q = console, H = /* @__PURE__ */ p(({
  expectedType: s,
  foundType: e,
  node: r
}) => {
  let t = "";
  if (r)
    try {
      t = JSON.stringify(r);
    } catch {
    }
  return me.dedent`
      CSF Parsing error: Expected '${s}' but found '${e}' instead in '${r?.type}'.
      ${t}
    `;
}, "getCsfParsingErrorMessage"), R = /* @__PURE__ */ p((s) => o.types.isIdentifier(s.key) ? s.key.name : o.types.isStringLiteral(s.key) ? s.
key.value : null, "propKey"), z = /* @__PURE__ */ p((s) => o.types.isTSAsExpression(s) || o.types.isTSSatisfiesExpression(s) ? z(s.expression) :
s, "unwrap"), ge = /* @__PURE__ */ p((s, e) => {
  if (s.length === 0)
    return e;
  if (o.types.isObjectExpression(e)) {
    let [r, ...t] = s, i = e.properties.find((a) => R(a) === r);
    if (i)
      return ge(t, i.value);
  }
}, "_getPath"), xe = /* @__PURE__ */ p((s, e) => {
  if (s.length === 0) {
    if (o.types.isObjectExpression(e))
      return e.properties;
    throw new Error("Expected object expression");
  }
  if (o.types.isObjectExpression(e)) {
    let [r, ...t] = s, i = e.properties.find((a) => R(a) === r);
    if (i)
      return t.length === 0 ? e.properties : xe(t, i.value);
  }
}, "_getPathProperties"), ye = /* @__PURE__ */ p((s, e) => {
  let r = null, t = null;
  return e.body.find((i) => (o.types.isVariableDeclaration(i) ? t = i.declarations : o.types.isExportNamedDeclaration(i) && o.types.isVariableDeclaration(
  i.declaration) && (t = i.declaration.declarations), t && t.find((a) => o.types.isVariableDeclarator(a) && o.types.isIdentifier(a.id) && a.
  id.name === s ? (r = a, !0) : !1))), r;
}, "_findVarDeclarator"), I = /* @__PURE__ */ p((s, e) => ye(s, e)?.init, "_findVarInitialization"), L = /* @__PURE__ */ p((s, e) => {
  if (s.length === 0)
    return e;
  let [r, ...t] = s, i = L(t, e);
  return o.types.objectExpression([o.types.objectProperty(o.types.identifier(r), i)]);
}, "_makeObjectExpression"), Y = /* @__PURE__ */ p((s, e, r) => {
  let [t, ...i] = s, a = r.properties.find(
    (n) => R(n) === t
  );
  a ? o.types.isObjectExpression(a.value) && i.length > 0 ? Y(i, e, a.value) : a.value = L(i, e) : r.properties.push(
    o.types.objectProperty(o.types.identifier(t), L(i, e))
  );
}, "_updateExportNode"), G = class {
  constructor(e, r, t) {
    this._exports = {};
    // FIXME: this is a hack. this is only used in the case where the user is
    // modifying a named export that's a scalar. The _exports map is not suitable
    // for that. But rather than refactor the whole thing, we just use this as a stopgap.
    this._exportDecls = {};
    this.hasDefaultExport = !1;
    this._ast = e, this._code = r, this.fileName = t;
  }
  static {
    p(this, "ConfigFile");
  }
  parse() {
    let e = this;
    return (0, o.traverse)(this._ast, {
      ExportDefaultDeclaration: {
        enter({ node: r, parent: t }) {
          e.hasDefaultExport = !0;
          let i = o.types.isIdentifier(r.declaration) && o.types.isProgram(t) ? I(r.declaration.name, t) : r.declaration;
          i = z(i), o.types.isObjectExpression(i) ? (e._exportsObject = i, i.properties.forEach((a) => {
            let n = R(a);
            if (n) {
              let l = a.value;
              o.types.isIdentifier(l) && (l = I(l.name, t)), e._exports[n] = l;
            }
          })) : Q.warn(
            H({
              expectedType: "ObjectExpression",
              foundType: i?.type,
              node: i || r.declaration
            })
          );
        }
      },
      ExportNamedDeclaration: {
        enter({ node: r, parent: t }) {
          o.types.isVariableDeclaration(r.declaration) ? r.declaration.declarations.forEach((i) => {
            if (o.types.isVariableDeclarator(i) && o.types.isIdentifier(i.id)) {
              let { name: a } = i.id, n = i.init;
              o.types.isIdentifier(n) && (n = I(n.name, t)), e._exports[a] = n, e._exportDecls[a] = i;
            }
          }) : r.specifiers ? r.specifiers.forEach((i) => {
            if (o.types.isExportSpecifier(i) && o.types.isIdentifier(i.local) && o.types.isIdentifier(i.exported)) {
              let { name: a } = i.local, { name: n } = i.exported, l = ye(a, t);
              l && (e._exports[n] = l.init, e._exportDecls[n] = l);
            }
          }) : Q.warn(
            H({
              expectedType: "VariableDeclaration",
              foundType: r.declaration?.type,
              node: r.declaration
            })
          );
        }
      },
      ExpressionStatement: {
        enter({ node: r, parent: t }) {
          if (o.types.isAssignmentExpression(r.expression) && r.expression.operator === "=") {
            let { left: i, right: a } = r.expression;
            if (o.types.isMemberExpression(i) && o.types.isIdentifier(i.object) && i.object.name === "module" && o.types.isIdentifier(i.property) &&
            i.property.name === "exports") {
              let n = a;
              o.types.isIdentifier(a) && (n = I(a.name, t)), n = z(n), o.types.isObjectExpression(n) ? (e._exportsObject = n, n.properties.forEach(
              (l) => {
                let u = R(l);
                if (u) {
                  let d = l.value;
                  o.types.isIdentifier(d) && (d = I(
                    d.name,
                    t
                  )), e._exports[u] = d;
                }
              })) : Q.warn(
                H({
                  expectedType: "ObjectExpression",
                  foundType: n?.type,
                  node: n
                })
              );
            }
          }
        }
      }
    }), e;
  }
  getFieldNode(e) {
    let [r, ...t] = e, i = this._exports[r];
    if (i)
      return ge(t, i);
  }
  getFieldProperties(e) {
    let [r, ...t] = e, i = this._exports[r];
    if (i)
      return xe(t, i);
  }
  getFieldValue(e) {
    let r = this.getFieldNode(e);
    if (r) {
      let { code: t } = (0, o.generate)(r, {});
      return (0, eval)(`(() => (${t}))()`);
    }
  }
  getSafeFieldValue(e) {
    try {
      return this.getFieldValue(e);
    } catch {
    }
  }
  setFieldNode(e, r) {
    let [t, ...i] = e, a = this._exports[t];
    if (this._exportsObject)
      Y(e, r, this._exportsObject), this._exports[e[0]] = r;
    else if (a && o.types.isObjectExpression(a) && i.length > 0)
      Y(i, r, a);
    else if (a && i.length === 0 && this._exportDecls[e[0]]) {
      let n = this._exportDecls[e[0]];
      n.init = L([], r);
    } else {
      if (this.hasDefaultExport)
        throw new Error(
          `Could not set the "${e.join(
            "."
          )}" field as the default export is not an object in this file.`
        );
      {
        let n = L(i, r), l = o.types.exportNamedDeclaration(
          o.types.variableDeclaration("const", [o.types.variableDeclarator(o.types.identifier(t), n)])
        );
        this._exports[t] = n, this._ast.program.body.push(l);
      }
    }
  }
  /**
   * @example
   *
   * ```ts
   * // 1. { framework: 'framework-name' }
   * // 2. { framework: { name: 'framework-name', options: {} }
   * getNameFromPath(['framework']); // => 'framework-name'
   * ```
   *
   * @returns The name of a node in a given path, supporting the following formats:
   */
  getNameFromPath(e) {
    let r = this.getFieldNode(e);
    if (r)
      return this._getPresetValue(r, "name");
  }
  /**
   * Returns an array of names of a node in a given path, supporting the following formats:
   *
   * @example
   *
   * ```ts
   * const config = {
   *   addons: ['first-addon', { name: 'second-addon', options: {} }],
   * };
   * // => ['first-addon', 'second-addon']
   * getNamesFromPath(['addons']);
   * ```
   */
  getNamesFromPath(e) {
    let r = this.getFieldNode(e);
    if (!r)
      return;
    let t = [];
    return o.types.isArrayExpression(r) && r.elements.forEach((i) => {
      t.push(this._getPresetValue(i, "name"));
    }), t;
  }
  _getPnpWrappedValue(e) {
    if (o.types.isCallExpression(e)) {
      let r = e.arguments[0];
      if (o.types.isStringLiteral(r))
        return r.value;
    }
  }
  /**
   * Given a node and a fallback property, returns a **non-evaluated** string value of the node.
   *
   * 1. `{ node: 'value' }`
   * 2. `{ node: { fallbackProperty: 'value' } }`
   */
  _getPresetValue(e, r) {
    let t;
    if (o.types.isStringLiteral(e) ? t = e.value : o.types.isObjectExpression(e) && e.properties.forEach((i) => {
      o.types.isObjectProperty(i) && o.types.isIdentifier(i.key) && i.key.name === r && (o.types.isStringLiteral(i.value) ? t = i.value.value :
      t = this._getPnpWrappedValue(i.value)), o.types.isObjectProperty(i) && o.types.isStringLiteral(i.key) && i.key.value === "name" && o.types.
      isStringLiteral(i.value) && (t = i.value.value);
    }), !t)
      throw new Error(
        `The given node must be a string literal or an object expression with a "${r}" property that is a string literal.`
      );
    return t;
  }
  removeField(e) {
    let r = /* @__PURE__ */ p((i, a) => {
      let n = i.findIndex(
        (l) => o.types.isIdentifier(l.key) && l.key.name === a || o.types.isStringLiteral(l.key) && l.key.value === a
      );
      n >= 0 && i.splice(n, 1);
    }, "removeProperty");
    if (e.length === 1) {
      let i = !1;
      if (this._ast.program.body.forEach((a) => {
        if (o.types.isExportNamedDeclaration(a) && o.types.isVariableDeclaration(a.declaration)) {
          let n = a.declaration.declarations[0];
          o.types.isIdentifier(n.id) && n.id.name === e[0] && (this._ast.program.body.splice(this._ast.program.body.indexOf(a), 1), i = !0);
        }
        if (o.types.isExportDefaultDeclaration(a)) {
          let n = a.declaration;
          if (o.types.isIdentifier(n) && (n = I(n.name, this._ast.program)), n = z(n), o.types.isObjectExpression(n)) {
            let l = n.properties;
            r(l, e[0]), i = !0;
          }
        }
        if (o.types.isExpressionStatement(a) && o.types.isAssignmentExpression(a.expression) && o.types.isMemberExpression(a.expression.left) &&
        o.types.isIdentifier(a.expression.left.object) && a.expression.left.object.name === "module" && o.types.isIdentifier(a.expression.left.
        property) && a.expression.left.property.name === "exports" && o.types.isObjectExpression(a.expression.right)) {
          let n = a.expression.right.properties;
          r(n, e[0]), i = !0;
        }
      }), i)
        return;
    }
    let t = this.getFieldProperties(e);
    if (t) {
      let i = e.at(-1);
      r(t, i);
    }
  }
  appendValueToArray(e, r) {
    let t = this.valueToNode(r);
    t && this.appendNodeToArray(e, t);
  }
  appendNodeToArray(e, r) {
    let t = this.getFieldNode(e);
    if (!t)
      this.setFieldNode(e, o.types.arrayExpression([r]));
    else if (o.types.isArrayExpression(t))
      t.elements.push(r);
    else
      throw new Error(`Expected array at '${e.join(".")}', got '${t.type}'`);
  }
  /**
   * Specialized helper to remove addons or other array entries that can either be strings or
   * objects with a name property.
   */
  removeEntryFromArray(e, r) {
    let t = this.getFieldNode(e);
    if (t)
      if (o.types.isArrayExpression(t)) {
        let i = t.elements.findIndex((a) => o.types.isStringLiteral(a) ? a.value === r : o.types.isObjectExpression(a) ? this._getPresetValue(
        a, "name") === r : this._getPnpWrappedValue(a) === r);
        if (i >= 0)
          t.elements.splice(i, 1);
        else
          throw new Error(`Could not find '${r}' in array at '${e.join(".")}'`);
      } else
        throw new Error(`Expected array at '${e.join(".")}', got '${t.type}'`);
  }
  _inferQuotes() {
    if (!this._quotes) {
      let e = (this._ast.tokens || []).slice(0, 500).reduce(
        (r, t) => (t.type.label === "string" && (r[this._code[t.start]] += 1), r),
        { "'": 0, '"': 0 }
      );
      this._quotes = e["'"] > e['"'] ? "single" : "double";
    }
    return this._quotes;
  }
  valueToNode(e) {
    let r = this._inferQuotes(), t;
    if (r === "single") {
      let { code: i } = (0, o.generate)(o.types.valueToNode(e), { jsescOption: { quotes: r } }), a = (0, o.babelParse)(`const __x = ${i}`);
      (0, o.traverse)(a, {
        VariableDeclaration: {
          enter({ node: n }) {
            n.declarations.length === 1 && o.types.isVariableDeclarator(n.declarations[0]) && o.types.isIdentifier(n.declarations[0].id) && n.
            declarations[0].id.name === "__x" && (t = n.declarations[0].init);
          }
        }
      });
    } else
      t = o.types.valueToNode(e);
    return t;
  }
  setFieldValue(e, r) {
    let t = this.valueToNode(r);
    if (!t)
      throw new Error(`Unexpected value ${JSON.stringify(r)}`);
    this.setFieldNode(e, t);
  }
  getBodyDeclarations() {
    return this._ast.program.body;
  }
  setBodyDeclaration(e) {
    this._ast.program.body.push(e);
  }
  /**
   * Import specifiers for a specific require import
   *
   * @example
   *
   * ```ts
   * // const { foo } = require('bar');
   * setRequireImport(['foo'], 'bar');
   *
   * // const foo = require('bar');
   * setRequireImport('foo', 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to set. If a string is passed in, a default
   *   import will be set. Otherwise, an array of named imports will be set
   * @param fromImport - The module to import from
   */
  setRequireImport(e, r) {
    let t = this._ast.program.body.find(
      (n) => o.types.isVariableDeclaration(n) && n.declarations.length === 1 && o.types.isVariableDeclarator(n.declarations[0]) && o.types.isCallExpression(
      n.declarations[0].init) && o.types.isIdentifier(n.declarations[0].init.callee) && n.declarations[0].init.callee.name === "require" && o.types.
      isStringLiteral(n.declarations[0].init.arguments[0]) && n.declarations[0].init.arguments[0].value === r
    ), i = /* @__PURE__ */ p((n) => o.types.isObjectPattern(t?.declarations[0].id) && t?.declarations[0].id.properties.find(
      (l) => o.types.isObjectProperty(l) && o.types.isIdentifier(l.key) && l.key.name === n
    ), "hasRequireSpecifier"), a = /* @__PURE__ */ p((n, l) => n.declarations.length === 1 && o.types.isVariableDeclarator(n.declarations[0]) &&
    o.types.isIdentifier(n.declarations[0].id) && n.declarations[0].id.name === l, "hasDefaultRequireSpecifier");
    if (typeof e == "string") {
      let n = /* @__PURE__ */ p(() => {
        this._ast.program.body.unshift(
          o.types.variableDeclaration("const", [
            o.types.variableDeclarator(
              o.types.identifier(e),
              o.types.callExpression(o.types.identifier("require"), [o.types.stringLiteral(r)])
            )
          ])
        );
      }, "addDefaultRequireSpecifier");
      t && a(t, e) || n();
    } else t ? e.forEach((n) => {
      i(n) || t.declarations[0].id.properties.push(
        o.types.objectProperty(o.types.identifier(n), o.types.identifier(n), void 0, !0)
      );
    }) : this._ast.program.body.unshift(
      o.types.variableDeclaration("const", [
        o.types.variableDeclarator(
          o.types.objectPattern(
            e.map(
              (n) => o.types.objectProperty(o.types.identifier(n), o.types.identifier(n), void 0, !0)
            )
          ),
          o.types.callExpression(o.types.identifier("require"), [o.types.stringLiteral(r)])
        )
      ])
    );
  }
  /**
   * Set import specifiers for a given import statement.
   *
   * Does not support setting type imports (yet)
   *
   * @example
   *
   * ```ts
   * // import { foo } from 'bar';
   * setImport(['foo'], 'bar');
   *
   * // import foo from 'bar';
   * setImport('foo', 'bar');
   * ```
   *
   * @param importSpecifiers - The import specifiers to set. If a string is passed in, a default
   *   import will be set. Otherwise, an array of named imports will be set
   * @param fromImport - The module to import from
   */
  setImport(e, r) {
    let t = /* @__PURE__ */ p((l) => o.types.importSpecifier(o.types.identifier(l), o.types.identifier(l)), "getNewImportSpecifier"), i = /* @__PURE__ */ p(
    (l, u) => l.specifiers.find(
      (d) => o.types.isImportSpecifier(d) && o.types.isIdentifier(d.imported) && d.imported.name === u
    ), "hasImportSpecifier"), a = /* @__PURE__ */ p((l, u) => l.specifiers.find((d) => o.types.isImportDefaultSpecifier(d)), "hasDefaultImpo\
rtSpecifier"), n = this._ast.program.body.find(
      (l) => o.types.isImportDeclaration(l) && l.source.value === r
    );
    typeof e == "string" ? n ? a(n, e) || n.specifiers.push(
      o.types.importDefaultSpecifier(o.types.identifier(e))
    ) : this._ast.program.body.unshift(
      o.types.importDeclaration(
        [o.types.importDefaultSpecifier(o.types.identifier(e))],
        o.types.stringLiteral(r)
      )
    ) : n ? e.forEach((l) => {
      i(n, l) || n.specifiers.push(t(l));
    }) : this._ast.program.body.unshift(
      o.types.importDeclaration(
        e.map(
          (l) => o.types.importSpecifier(o.types.identifier(l), o.types.identifier(l))
        ),
        o.types.stringLiteral(r)
      )
    );
  }
}, be = /* @__PURE__ */ p((s, e) => {
  let r = (0, o.babelParse)(s);
  return new G(r, s, e);
}, "loadConfig"), Ee = /* @__PURE__ */ p((s) => he(s).code, "formatConfig"), he = /* @__PURE__ */ p((s, e = {}) => o.recast.print(s._ast, e),
"printConfig"), Ze = /* @__PURE__ */ p(async (s) => {
  let e = (await (0, J.readFile)(s, "utf-8")).toString();
  return be(e, s).parse();
}, "readConfig"), et = /* @__PURE__ */ p(async (s, e) => {
  let r = e || s.fileName;
  if (!r)
    throw new Error("Please specify a fileName for writeConfig");
  await (0, J.writeFile)(r, Ee(s));
}, "writeConfig");

// src/csf-tools/getStorySortParameter.ts
var y = require("@storybook/core/babel"), _e = U(k(), 1);
var tt = console, Z = /* @__PURE__ */ p((s, e) => {
  let r;
  return s.properties.forEach((t) => {
    y.types.isIdentifier(t.key) && t.key.name === e && (r = t.value);
  }), r;
}, "getValue"), ee = /* @__PURE__ */ p((s) => {
  let e = M(s);
  if (y.types.isArrayExpression(e))
    return e.elements.map((r) => ee(r));
  if (y.types.isObjectExpression(e))
    return e.properties.reduce((r, t) => (y.types.isIdentifier(t.key) && (r[t.key.name] = ee(t.value)), r), {});
  if (y.types.isLiteral(e))
    return e.value;
  if (y.types.isIdentifier(e))
    return N(e.name, !0);
  throw new Error(`Unknown node type ${e.type}`);
}, "parseValue"), N = /* @__PURE__ */ p((s, e) => {
  let r = _e.dedent`
    Unexpected '${s}'. Parameter 'options.storySort' should be defined inline e.g.:

    export default {
      parameters: {
        options: {
          storySort: <array | object | function>
        },
      },
    };
  `;
  if (e)
    throw new Error(r);
  tt.info(r);
}, "unsupported"), M = /* @__PURE__ */ p((s) => y.types.isTSAsExpression(s) || y.types.isTSSatisfiesExpression(s) ? s.expression : s, "strip\
TSModifiers"), Se = /* @__PURE__ */ p((s) => {
  let e = M(s);
  if (y.types.isObjectExpression(e)) {
    let r = Z(e, "options");
    if (r) {
      if (y.types.isObjectExpression(r))
        return Z(r, "storySort");
      N("options", !0);
    }
  }
}, "parseParameters"), rt = /* @__PURE__ */ p((s, e) => {
  let r = M(s);
  if (y.types.isObjectExpression(r)) {
    let t = Z(r, "parameters");
    if (y.types.isIdentifier(t) && (t = O(t.name, e)), t)
      return Se(t);
  } else
    N("default", !0);
}, "parseDefault"), it = /* @__PURE__ */ p((s) => {
  if (!s.includes("storySort"))
    return;
  let e, r = (0, y.babelParse)(s);
  if ((0, y.traverse)(r, {
    ExportNamedDeclaration: {
      enter({ node: t }) {
        y.types.isVariableDeclaration(t.declaration) ? t.declaration.declarations.forEach((i) => {
          if (y.types.isVariableDeclarator(i) && y.types.isIdentifier(i.id)) {
            let { name: a } = i.id;
            if (a === "parameters" && i.init) {
              let n = M(i.init);
              e = Se(n);
            }
          }
        }) : t.specifiers.forEach((i) => {
          y.types.isIdentifier(i.exported) && i.exported.name === "parameters" && N("parameters", !1);
        });
      }
    },
    ExportDefaultDeclaration: {
      enter({ node: t }) {
        let i = t.declaration;
        y.types.isIdentifier(i) && (i = O(i.name, r.program)), i = M(i), y.types.isObjectExpression(i) ? e = rt(i, r.program) : N("default",
        !1);
      }
    }
  }), !!e) {
    if (y.types.isArrowFunctionExpression(e)) {
      let { code: t } = (0, y.generate)(e, {});
      return (0, eval)(t);
    }
    if (y.types.isFunctionExpression(e)) {
      let { code: t } = (0, y.generate)(e, {}), i = e.id?.name, a = `(a, b) => {
      ${t};
      return ${i}(a, b)
    }`;
      return (0, eval)(a);
    }
    return y.types.isLiteral(e) || y.types.isArrayExpression(e) || y.types.isObjectExpression(e) ? ee(e) : N("storySort", !0);
  }
}, "getStorySortParameter");

// src/csf-tools/enrichCsf.ts
var m = require("@storybook/core/babel");
var je = /* @__PURE__ */ p((s, e, r, t) => {
  let i = e.getStoryExport(r), a = !t?.disableSource && De(i), n = !t?.disableDescription && te(e._storyStatements[r]), l = [], u = m.types.
  memberExpression(m.types.identifier(r), m.types.identifier("parameters"));
  l.push(m.types.spreadElement(u));
  let d = m.types.optionalMemberExpression(
    u,
    m.types.identifier("docs"),
    !1,
    !0
  ), x = [];
  if (a) {
    let g = m.types.optionalMemberExpression(
      d,
      m.types.identifier("source"),
      !1,
      !0
    );
    x.push(
      m.types.objectProperty(
        m.types.identifier("source"),
        m.types.objectExpression([
          m.types.objectProperty(m.types.identifier("originalSource"), m.types.stringLiteral(a)),
          m.types.spreadElement(g)
        ])
      )
    );
  }
  if (n) {
    let g = m.types.optionalMemberExpression(
      d,
      m.types.identifier("description"),
      !1,
      !0
    );
    x.push(
      m.types.objectProperty(
        m.types.identifier("description"),
        m.types.objectExpression([
          m.types.objectProperty(m.types.identifier("story"), m.types.stringLiteral(n)),
          m.types.spreadElement(g)
        ])
      )
    );
  }
  if (x.length > 0) {
    l.push(
      m.types.objectProperty(
        m.types.identifier("docs"),
        m.types.objectExpression([m.types.spreadElement(d), ...x])
      )
    );
    let g = m.types.expressionStatement(
      m.types.assignmentExpression("=", u, m.types.objectExpression(l))
    );
    s._ast.program.body.push(g);
  }
}, "enrichCsfStory"), Oe = /* @__PURE__ */ p((s, e, r) => {
  if (!e.length) {
    s.properties.find(
      (u) => m.types.isObjectProperty(u) && m.types.isIdentifier(u.key) && u.key.name === "component"
    ) || s.properties.unshift(r);
    return;
  }
  let [t, ...i] = e, a = s.properties.find(
    (l) => m.types.isObjectProperty(l) && m.types.isIdentifier(l.key) && l.key.name === t && m.types.isObjectExpression(l.value)
  ), n;
  a ? n = a.value : (n = m.types.objectExpression([]), s.properties.push(m.types.objectProperty(m.types.identifier(t), n))), Oe(n, i, r);
}, "addComponentDescription"), Pe = /* @__PURE__ */ p((s, e, r) => {
  let t = !r?.disableDescription && te(e._metaStatement);
  if (t) {
    let i = s._metaNode;
    i && m.types.isObjectExpression(i) && Oe(
      i,
      ["parameters", "docs", "description"],
      m.types.objectProperty(m.types.identifier("component"), m.types.stringLiteral(t))
    );
  }
}, "enrichCsfMeta"), st = /* @__PURE__ */ p((s, e, r) => {
  Pe(s, e, r), Object.keys(s._storyExports).forEach((t) => {
    je(s, e, t, r);
  });
}, "enrichCsf"), De = /* @__PURE__ */ p((s) => {
  let e = m.types.isVariableDeclarator(s) ? s.init : s, { code: r } = (0, m.generate)(e, {});
  return r;
}, "extractSource"), te = /* @__PURE__ */ p((s) => s?.leadingComments ? s.leadingComments.map((r) => r.type === "CommentLine" || !r.value.startsWith(
"*") ? null : r.value.split(`
`).map((t) => t.replace(/^(\s+)?(\*+)?(\s)?/, "")).join(`
`).trim()).filter(Boolean).join(`
`) : "", "extractDescription");

// src/csf-tools/index.ts
var Fe = require("@storybook/core/babel");

// src/csf-tools/vitest-plugin/transformer.ts
var f = require("@storybook/core/babel"), Ie = require("@storybook/core/common"), Ne = require("@storybook/csf"), re = U(k(), 1);
var ve = console, nt = /* @__PURE__ */ p((s, e) => !(e.include.length && !e.include.some((r) => s?.includes(r)) || e.exclude.some((r) => s?.
includes(r))), "isValidTest");
async function we({
  code: s,
  fileName: e,
  configDir: r,
  stories: t,
  tagsFilter: i,
  previewLevelTags: a = []
}) {
  if (!/\.stor(y|ies)\./.test(e))
    return s;
  let l = W(s, {
    fileName: e,
    transformInlineMeta: !0,
    makeTitle: /* @__PURE__ */ p((E) => {
      let j = (0, Ie.getStoryTitle)({
        storyFilePath: e,
        configDir: r,
        stories: t,
        userTitle: E
      }) || "unknown";
      return j === "unknown" && ve.warn(
        re.dedent`
            [Storybook]: Could not calculate story title for "${e}".
            Please make sure that this file matches the globs included in the "stories" field in your Storybook configuration at "${r}".
          `
      ), j;
    }, "makeTitle")
  }).parse(), u = l._ast, d = l._metaVariableName, x = l._metaNode, g = x.properties.find(
    (E) => f.types.isObjectProperty(E) && f.types.isIdentifier(E.key) && E.key.name === "title"
  ), b = f.types.stringLiteral(l._meta?.title || "unknown");
  if (g ? f.types.isObjectProperty(g) && (g.value = b) : x.properties.push(f.types.objectProperty(f.types.identifier("title"), b)), !x || !l.
  _meta)
    throw new Error(
      `The Storybook vitest plugin could not detect the meta (default export) object in the story file. 

Please make sure you have a default export with the meta object. If you are using a different export format that is not supported, please fi\
le an issue with details about your use case.`
    );
  let _ = {};
  Object.keys(l._stories).map((E) => {
    let j = (0, Ne.combineTags)(
      "test",
      "dev",
      ...a,
      ...l.meta?.tags || [],
      ...l._stories[E].tags || []
    );
    nt(j, i) && (_[E] = l._storyStatements[E]);
  });
  let S = l._file.path.scope.generateUidIdentifier("test"), ie = l._file.path.scope.generateUidIdentifier("describe");
  if (Object.keys(_).length === 0) {
    let E = f.types.expressionStatement(
      f.types.callExpression(f.types.memberExpression(ie, f.types.identifier("skip")), [
        f.types.stringLiteral("No valid tests found")
      ])
    );
    u.program.body.push(E);
    let j = [
      f.types.importDeclaration(
        [
          f.types.importSpecifier(S, f.types.identifier("test")),
          f.types.importSpecifier(ie, f.types.identifier("describe"))
        ],
        f.types.stringLiteral("vitest")
      )
    ];
    u.program.body.unshift(...j);
  } else {
    let se = function() {
      let h = l._file.path.scope.generateUidIdentifier("isRunningFromThisFile"), D = f.types.memberExpression(
        f.types.callExpression(f.types.memberExpression(E, f.types.identifier("getState")), []),
        f.types.identifier("testPath")
      ), w = f.types.memberExpression(
        f.types.memberExpression(f.types.identifier("globalThis"), f.types.identifier("__vitest_worker__")),
        f.types.identifier("filepath")
      ), F = f.types.logicalExpression(
        "??",
        // TODO: switch order of testPathProperty and filePathProperty when the bug is fixed
        // https://github.com/vitest-dev/vitest/issues/6367 (or probably just use testPathProperty)
        w,
        D
      ), $ = f.types.callExpression(
        f.types.memberExpression(
          f.types.memberExpression(
            f.types.memberExpression(f.types.identifier("import"), f.types.identifier("meta")),
            f.types.identifier("url")
          ),
          f.types.identifier("includes")
        ),
        [F]
      );
      return { isRunningFromThisFileDeclaration: f.types.variableDeclaration("const", [
        f.types.variableDeclarator(h, $)
      ]), isRunningFromThisFileId: h };
    };
    var at = se;
    p(se, "getTestGuardDeclaration");
    let E = l._file.path.scope.generateUidIdentifier("expect"), j = l._file.path.scope.generateUidIdentifier("testStory"), Ce = f.types.identifier(
    JSON.stringify(i.skip)), { isRunningFromThisFileDeclaration: Te, isRunningFromThisFileId: ke } = se();
    u.program.body.push(Te);
    let Ve = /* @__PURE__ */ p(({
      localName: h,
      exportName: D,
      testTitle: w,
      node: F
    }) => {
      let $ = f.types.expressionStatement(
        f.types.callExpression(S, [
          f.types.stringLiteral(w),
          f.types.callExpression(j, [
            f.types.stringLiteral(D),
            f.types.identifier(h),
            f.types.identifier(d),
            Ce
          ])
        ])
      );
      return $.loc = F.loc, $;
    }, "getTestStatementForStory"), Ae = Object.entries(_).map(([h, D]) => {
      if (D === null) {
        ve.warn(
          re.dedent`
            [Storybook]: Could not transform "${h}" story into test at "${e}".
            Please make sure to define stories in the same file and not re-export stories coming from other files".
          `
        );
        return;
      }
      let w = l._stories[h].localName ?? h, F = l._stories[h].name ?? h;
      return Ve({ testTitle: F, localName: w, exportName: h, node: D });
    }).filter((h) => !!h), Re = f.types.ifStatement(ke, f.types.blockStatement(Ae));
    u.program.body.push(Re);
    let Le = [
      f.types.importDeclaration(
        [
          f.types.importSpecifier(S, f.types.identifier("test")),
          f.types.importSpecifier(E, f.types.identifier("expect"))
        ],
        f.types.stringLiteral("vitest")
      ),
      f.types.importDeclaration(
        [f.types.importSpecifier(j, f.types.identifier("testStory"))],
        f.types.stringLiteral("@storybook/experimental-addon-test/internal/test-utils")
      )
    ];
    u.program.body.unshift(...Le);
  }
  return X(l, { sourceMaps: !0, sourceFileName: e }, s);
}
p(we, "vitestTransform");
