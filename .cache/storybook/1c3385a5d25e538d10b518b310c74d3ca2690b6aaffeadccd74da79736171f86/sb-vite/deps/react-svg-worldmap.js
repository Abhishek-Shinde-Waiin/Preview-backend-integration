import {
  require_react
} from "./chunk-USEVLOEB.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-LK32TJAX.js";

// raaghu-elements/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "raaghu-elements/node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// raaghu-elements/node_modules/d3-array/src/ascending.js
function ascending_default(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
var init_ascending = __esm({
  "raaghu-elements/node_modules/d3-array/src/ascending.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/bisector.js
function bisector_default(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }
  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }
  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left, center, right };
}
function ascendingComparator(f) {
  return (d, x) => ascending_default(f(d), x);
}
var init_bisector = __esm({
  "raaghu-elements/node_modules/d3-array/src/bisector.js"() {
    init_ascending();
  }
});

// raaghu-elements/node_modules/d3-array/src/number.js
function number_default(x) {
  return x === null ? NaN : +x;
}
var init_number = __esm({
  "raaghu-elements/node_modules/d3-array/src/number.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/bisect.js
var ascendingBisect, bisectRight, bisectLeft, bisectCenter;
var init_bisect = __esm({
  "raaghu-elements/node_modules/d3-array/src/bisect.js"() {
    init_ascending();
    init_bisector();
    init_number();
    ascendingBisect = bisector_default(ascending_default);
    bisectRight = ascendingBisect.right;
    bisectLeft = ascendingBisect.left;
    bisectCenter = bisector_default(number_default).center;
  }
});

// raaghu-elements/node_modules/d3-array/src/count.js
var init_count = __esm({
  "raaghu-elements/node_modules/d3-array/src/count.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/cross.js
var init_cross = __esm({
  "raaghu-elements/node_modules/d3-array/src/cross.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/cumsum.js
var init_cumsum = __esm({
  "raaghu-elements/node_modules/d3-array/src/cumsum.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/descending.js
var init_descending = __esm({
  "raaghu-elements/node_modules/d3-array/src/descending.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/variance.js
var init_variance = __esm({
  "raaghu-elements/node_modules/d3-array/src/variance.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/deviation.js
var init_deviation = __esm({
  "raaghu-elements/node_modules/d3-array/src/deviation.js"() {
    init_variance();
  }
});

// raaghu-elements/node_modules/d3-array/src/extent.js
var init_extent = __esm({
  "raaghu-elements/node_modules/d3-array/src/extent.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/fsum.js
var Adder;
var init_fsum = __esm({
  "raaghu-elements/node_modules/d3-array/src/fsum.js"() {
    Adder = class {
      constructor() {
        this._partials = new Float64Array(32);
        this._n = 0;
      }
      add(x) {
        const p = this._partials;
        let i = 0;
        for (let j = 0; j < this._n && j < 32; j++) {
          const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
          if (lo) p[i++] = lo;
          x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
      }
      valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
          hi = p[--n];
          while (n > 0) {
            x = hi;
            y = p[--n];
            hi = x + y;
            lo = y - (hi - x);
            if (lo) break;
          }
          if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
            y = lo * 2;
            x = hi + y;
            if (y == x - hi) hi = x;
          }
        }
        return hi;
      }
    };
  }
});

// raaghu-elements/node_modules/internmap/src/index.js
var init_src = __esm({
  "raaghu-elements/node_modules/internmap/src/index.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/identity.js
var init_identity = __esm({
  "raaghu-elements/node_modules/d3-array/src/identity.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/group.js
var init_group = __esm({
  "raaghu-elements/node_modules/d3-array/src/group.js"() {
    init_src();
    init_identity();
  }
});

// raaghu-elements/node_modules/d3-array/src/permute.js
var init_permute = __esm({
  "raaghu-elements/node_modules/d3-array/src/permute.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/sort.js
var init_sort = __esm({
  "raaghu-elements/node_modules/d3-array/src/sort.js"() {
    init_ascending();
    init_permute();
  }
});

// raaghu-elements/node_modules/d3-array/src/groupSort.js
var init_groupSort = __esm({
  "raaghu-elements/node_modules/d3-array/src/groupSort.js"() {
    init_ascending();
    init_group();
    init_sort();
  }
});

// raaghu-elements/node_modules/d3-array/src/array.js
var array, slice, map;
var init_array = __esm({
  "raaghu-elements/node_modules/d3-array/src/array.js"() {
    array = Array.prototype;
    slice = array.slice;
    map = array.map;
  }
});

// raaghu-elements/node_modules/d3-array/src/constant.js
var init_constant = __esm({
  "raaghu-elements/node_modules/d3-array/src/constant.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/ticks.js
var e10, e5, e2;
var init_ticks = __esm({
  "raaghu-elements/node_modules/d3-array/src/ticks.js"() {
    e10 = Math.sqrt(50);
    e5 = Math.sqrt(10);
    e2 = Math.sqrt(2);
  }
});

// raaghu-elements/node_modules/d3-array/src/nice.js
var init_nice = __esm({
  "raaghu-elements/node_modules/d3-array/src/nice.js"() {
    init_ticks();
  }
});

// raaghu-elements/node_modules/d3-array/src/threshold/sturges.js
var init_sturges = __esm({
  "raaghu-elements/node_modules/d3-array/src/threshold/sturges.js"() {
    init_count();
  }
});

// raaghu-elements/node_modules/d3-array/src/bin.js
var init_bin = __esm({
  "raaghu-elements/node_modules/d3-array/src/bin.js"() {
    init_array();
    init_bisect();
    init_constant();
    init_extent();
    init_identity();
    init_nice();
    init_ticks();
    init_sturges();
  }
});

// raaghu-elements/node_modules/d3-array/src/max.js
var init_max = __esm({
  "raaghu-elements/node_modules/d3-array/src/max.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/min.js
var init_min = __esm({
  "raaghu-elements/node_modules/d3-array/src/min.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/quickselect.js
var init_quickselect = __esm({
  "raaghu-elements/node_modules/d3-array/src/quickselect.js"() {
    init_ascending();
  }
});

// raaghu-elements/node_modules/d3-array/src/quantile.js
var init_quantile = __esm({
  "raaghu-elements/node_modules/d3-array/src/quantile.js"() {
    init_max();
    init_min();
    init_quickselect();
    init_number();
  }
});

// raaghu-elements/node_modules/d3-array/src/threshold/freedmanDiaconis.js
var init_freedmanDiaconis = __esm({
  "raaghu-elements/node_modules/d3-array/src/threshold/freedmanDiaconis.js"() {
    init_count();
    init_quantile();
  }
});

// raaghu-elements/node_modules/d3-array/src/threshold/scott.js
var init_scott = __esm({
  "raaghu-elements/node_modules/d3-array/src/threshold/scott.js"() {
    init_count();
    init_deviation();
  }
});

// raaghu-elements/node_modules/d3-array/src/maxIndex.js
var init_maxIndex = __esm({
  "raaghu-elements/node_modules/d3-array/src/maxIndex.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/mean.js
var init_mean = __esm({
  "raaghu-elements/node_modules/d3-array/src/mean.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/median.js
var init_median = __esm({
  "raaghu-elements/node_modules/d3-array/src/median.js"() {
    init_quantile();
  }
});

// raaghu-elements/node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array2 of arrays) {
    yield* array2;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}
var init_merge = __esm({
  "raaghu-elements/node_modules/d3-array/src/merge.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/minIndex.js
var init_minIndex = __esm({
  "raaghu-elements/node_modules/d3-array/src/minIndex.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/pairs.js
var init_pairs = __esm({
  "raaghu-elements/node_modules/d3-array/src/pairs.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/range.js
function range_default(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start + i * step;
  }
  return range2;
}
var init_range = __esm({
  "raaghu-elements/node_modules/d3-array/src/range.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/least.js
var init_least = __esm({
  "raaghu-elements/node_modules/d3-array/src/least.js"() {
    init_ascending();
  }
});

// raaghu-elements/node_modules/d3-array/src/leastIndex.js
var init_leastIndex = __esm({
  "raaghu-elements/node_modules/d3-array/src/leastIndex.js"() {
    init_ascending();
    init_minIndex();
  }
});

// raaghu-elements/node_modules/d3-array/src/greatest.js
var init_greatest = __esm({
  "raaghu-elements/node_modules/d3-array/src/greatest.js"() {
    init_ascending();
  }
});

// raaghu-elements/node_modules/d3-array/src/greatestIndex.js
var init_greatestIndex = __esm({
  "raaghu-elements/node_modules/d3-array/src/greatestIndex.js"() {
    init_ascending();
    init_maxIndex();
  }
});

// raaghu-elements/node_modules/d3-array/src/scan.js
var init_scan = __esm({
  "raaghu-elements/node_modules/d3-array/src/scan.js"() {
    init_leastIndex();
  }
});

// raaghu-elements/node_modules/d3-array/src/shuffle.js
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}
var shuffle_default;
var init_shuffle = __esm({
  "raaghu-elements/node_modules/d3-array/src/shuffle.js"() {
    shuffle_default = shuffler(Math.random);
  }
});

// raaghu-elements/node_modules/d3-array/src/sum.js
var init_sum = __esm({
  "raaghu-elements/node_modules/d3-array/src/sum.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/transpose.js
var init_transpose = __esm({
  "raaghu-elements/node_modules/d3-array/src/transpose.js"() {
    init_min();
  }
});

// raaghu-elements/node_modules/d3-array/src/zip.js
var init_zip = __esm({
  "raaghu-elements/node_modules/d3-array/src/zip.js"() {
    init_transpose();
  }
});

// raaghu-elements/node_modules/d3-array/src/every.js
var init_every = __esm({
  "raaghu-elements/node_modules/d3-array/src/every.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/some.js
var init_some = __esm({
  "raaghu-elements/node_modules/d3-array/src/some.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/filter.js
var init_filter = __esm({
  "raaghu-elements/node_modules/d3-array/src/filter.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/map.js
var init_map = __esm({
  "raaghu-elements/node_modules/d3-array/src/map.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/reduce.js
var init_reduce = __esm({
  "raaghu-elements/node_modules/d3-array/src/reduce.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/reverse.js
var init_reverse = __esm({
  "raaghu-elements/node_modules/d3-array/src/reverse.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/difference.js
var init_difference = __esm({
  "raaghu-elements/node_modules/d3-array/src/difference.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/disjoint.js
var init_disjoint = __esm({
  "raaghu-elements/node_modules/d3-array/src/disjoint.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/set.js
var init_set = __esm({
  "raaghu-elements/node_modules/d3-array/src/set.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/intersection.js
var init_intersection = __esm({
  "raaghu-elements/node_modules/d3-array/src/intersection.js"() {
    init_set();
  }
});

// raaghu-elements/node_modules/d3-array/src/superset.js
var init_superset = __esm({
  "raaghu-elements/node_modules/d3-array/src/superset.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/subset.js
var init_subset = __esm({
  "raaghu-elements/node_modules/d3-array/src/subset.js"() {
    init_superset();
  }
});

// raaghu-elements/node_modules/d3-array/src/union.js
var init_union = __esm({
  "raaghu-elements/node_modules/d3-array/src/union.js"() {
  }
});

// raaghu-elements/node_modules/d3-array/src/index.js
var init_src2 = __esm({
  "raaghu-elements/node_modules/d3-array/src/index.js"() {
    init_bisect();
    init_ascending();
    init_bisector();
    init_count();
    init_cross();
    init_cumsum();
    init_descending();
    init_deviation();
    init_extent();
    init_fsum();
    init_group();
    init_groupSort();
    init_bin();
    init_freedmanDiaconis();
    init_scott();
    init_sturges();
    init_max();
    init_maxIndex();
    init_mean();
    init_median();
    init_merge();
    init_min();
    init_minIndex();
    init_nice();
    init_pairs();
    init_permute();
    init_quantile();
    init_quickselect();
    init_range();
    init_least();
    init_leastIndex();
    init_greatest();
    init_greatestIndex();
    init_scan();
    init_shuffle();
    init_sum();
    init_ticks();
    init_transpose();
    init_variance();
    init_zip();
    init_every();
    init_some();
    init_filter();
    init_map();
    init_reduce();
    init_reverse();
    init_sort();
    init_difference();
    init_disjoint();
    init_intersection();
    init_subset();
    init_superset();
    init_union();
    init_src();
  }
});

// raaghu-elements/node_modules/d3-geo/src/math.js
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
function haversin(x) {
  return (x = sin(x / 2)) * x;
}
var epsilon, epsilon2, pi, halfPi, quarterPi, tau, degrees, radians, abs, atan, atan2, cos, ceil, exp, hypot, log, pow, sin, sign, sqrt, tan;
var init_math = __esm({
  "raaghu-elements/node_modules/d3-geo/src/math.js"() {
    epsilon = 1e-6;
    epsilon2 = 1e-12;
    pi = Math.PI;
    halfPi = pi / 2;
    quarterPi = pi / 4;
    tau = pi * 2;
    degrees = 180 / pi;
    radians = pi / 180;
    abs = Math.abs;
    atan = Math.atan;
    atan2 = Math.atan2;
    cos = Math.cos;
    ceil = Math.ceil;
    exp = Math.exp;
    hypot = Math.hypot;
    log = Math.log;
    pow = Math.pow;
    sin = Math.sin;
    sign = Math.sign || function(x) {
      return x > 0 ? 1 : x < 0 ? -1 : 0;
    };
    sqrt = Math.sqrt;
    tan = Math.tan;
  }
});

// raaghu-elements/node_modules/d3-geo/src/noop.js
function noop() {
}
var init_noop = __esm({
  "raaghu-elements/node_modules/d3-geo/src/noop.js"() {
  }
});

// raaghu-elements/node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
function streamLine(coordinates2, stream, closed) {
  var i = -1, n = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i = -1, n = coordinates2.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates2[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}
var streamObjectType, streamGeometryType;
var init_stream = __esm({
  "raaghu-elements/node_modules/d3-geo/src/stream.js"() {
    streamObjectType = {
      Feature: function(object2, stream) {
        streamGeometry(object2.geometry, stream);
      },
      FeatureCollection: function(object2, stream) {
        var features = object2.features, i = -1, n = features.length;
        while (++i < n) streamGeometry(features[i].geometry, stream);
      }
    };
    streamGeometryType = {
      Sphere: function(object2, stream) {
        stream.sphere();
      },
      Point: function(object2, stream) {
        object2 = object2.coordinates;
        stream.point(object2[0], object2[1], object2[2]);
      },
      MultiPoint: function(object2, stream) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) object2 = coordinates2[i], stream.point(object2[0], object2[1], object2[2]);
      },
      LineString: function(object2, stream) {
        streamLine(object2.coordinates, stream, 0);
      },
      MultiLineString: function(object2, stream) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) streamLine(coordinates2[i], stream, 0);
      },
      Polygon: function(object2, stream) {
        streamPolygon(object2.coordinates, stream);
      },
      MultiPolygon: function(object2, stream) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) streamPolygon(coordinates2[i], stream);
      },
      GeometryCollection: function(object2, stream) {
        var geometries = object2.geometries, i = -1, n = geometries.length;
        while (++i < n) streamGeometry(geometries[i], stream);
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/area.js
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaRingEnd() {
  areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= radians, phi *= radians;
  lambda0 = lambda, cosPhi0 = cos(phi = phi / 2 + quarterPi), sinPhi0 = sin(phi);
}
function areaPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  phi = phi / 2 + quarterPi;
  var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos(phi), sinPhi = sin(phi), k = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k * cos(adLambda), v = k * sdLambda * sin(adLambda);
  areaRingSum.add(atan2(v, u));
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
function area_default(object2) {
  areaSum = new Adder();
  stream_default(object2, areaStream);
  return areaSum * 2;
}
var areaRingSum, areaSum, lambda00, phi00, lambda0, cosPhi0, sinPhi0, areaStream;
var init_area = __esm({
  "raaghu-elements/node_modules/d3-geo/src/area.js"() {
    init_src2();
    init_math();
    init_noop();
    init_stream();
    areaRingSum = new Adder();
    areaSum = new Adder();
    areaStream = {
      point: noop,
      lineStart: noop,
      lineEnd: noop,
      polygonStart: function() {
        areaRingSum = new Adder();
        areaStream.lineStart = areaRingStart;
        areaStream.lineEnd = areaRingEnd;
      },
      polygonEnd: function() {
        var areaRing = +areaRingSum;
        areaSum.add(areaRing < 0 ? tau + areaRing : areaRing);
        this.lineStart = this.lineEnd = this.point = noop;
      },
      sphere: function() {
        areaSum.add(tau);
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi = spherical2[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}
var init_cartesian = __esm({
  "raaghu-elements/node_modules/d3-geo/src/cartesian.js"() {
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/bounds.js
function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda02 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}
function linePoint(lambda, phi) {
  var p = cartesian([lambda * radians, phi * radians]);
  if (p0) {
    var normal = cartesianCross(p0, p), equatorial = [normal[1], -normal[0], 0], inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2, sign2 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees * sign2, phii, antimeridian = abs(delta) > 180;
    if (antimeridian ^ (sign2 * lambda2 < lambdai && lambdai < sign2 * lambda)) {
      phii = inflection[1] * degrees;
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign2 * lambda2 < lambdai && lambdai < sign2 * lambda)) {
      phii = -inflection[1] * degrees;
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
      }
    } else {
      if (lambda1 >= lambda02) {
        if (lambda < lambda02) lambda02 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda02 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
  boundsStream.point = linePoint;
}
function boundsLineEnd() {
  range[0] = lambda02, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}
function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda002 = lambda, phi002 = phi;
  }
  areaStream.point(lambda, phi);
  linePoint(lambda, phi);
}
function boundsRingStart() {
  areaStream.lineStart();
}
function boundsRingEnd() {
  boundsRingPoint(lambda002, phi002);
  areaStream.lineEnd();
  if (abs(deltaSum) > epsilon) lambda02 = -(lambda1 = 180);
  range[0] = lambda02, range[1] = lambda1;
  p0 = null;
}
function angle(lambda04, lambda12) {
  return (lambda12 -= lambda04) < 0 ? lambda12 + 360 : lambda12;
}
function rangeCompare(a, b) {
  return a[0] - b[0];
}
function rangeContains(range2, x) {
  return range2[0] <= range2[1] ? range2[0] <= x && x <= range2[1] : x < range2[0] || range2[1] < x;
}
function bounds_default(feature) {
  var i, n, a, b, merged, deltaMax, delta;
  phi1 = lambda1 = -(lambda02 = phi0 = Infinity);
  ranges = [];
  stream_default(feature, boundsStream);
  if (n = ranges.length) {
    ranges.sort(rangeCompare);
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda02 = b[0], lambda1 = a[1];
    }
  }
  ranges = range = null;
  return lambda02 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda02, phi0], [lambda1, phi1]];
}
var lambda02, phi0, lambda1, phi1, lambda2, lambda002, phi002, p0, deltaSum, ranges, range, boundsStream;
var init_bounds = __esm({
  "raaghu-elements/node_modules/d3-geo/src/bounds.js"() {
    init_src2();
    init_area();
    init_cartesian();
    init_math();
    init_stream();
    boundsStream = {
      point: boundsPoint,
      lineStart: boundsLineStart,
      lineEnd: boundsLineEnd,
      polygonStart: function() {
        boundsStream.point = boundsRingPoint;
        boundsStream.lineStart = boundsRingStart;
        boundsStream.lineEnd = boundsRingEnd;
        deltaSum = new Adder();
        areaStream.polygonStart();
      },
      polygonEnd: function() {
        areaStream.polygonEnd();
        boundsStream.point = boundsPoint;
        boundsStream.lineStart = boundsLineStart;
        boundsStream.lineEnd = boundsLineEnd;
        if (areaRingSum < 0) lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
        else if (deltaSum > epsilon) phi1 = 90;
        else if (deltaSum < -epsilon) phi0 = -90;
        range[0] = lambda02, range[1] = lambda1;
      },
      sphere: function() {
        lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/centroid.js
function centroidPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi);
  centroidPointCartesian(cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi));
}
function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi);
  x0 = cosPhi * cos(lambda);
  y0 = cosPhi * sin(lambda);
  z0 = sin(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi), x = cosPhi * cos(lambda), y = cosPhi * sin(lambda), z = sin(phi), w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
  centroidRingPoint(lambda003, phi003);
  centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi) {
  lambda003 = lambda, phi003 = phi;
  lambda *= radians, phi *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos(phi);
  x0 = cosPhi * cos(lambda);
  y0 = cosPhi * sin(lambda);
  z0 = sin(phi);
  centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos(phi), x = cosPhi * cos(lambda), y = cosPhi * sin(lambda), z = sin(phi), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = hypot(cx, cy, cz), w = asin(m), v = m && -w / m;
  X2.add(v * cx);
  Y2.add(v * cy);
  Z2.add(v * cz);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroid_default(object2) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
  X2 = new Adder();
  Y2 = new Adder();
  Z2 = new Adder();
  stream_default(object2, centroidStream);
  var x = +X2, y = +Y2, z = +Z2, m = hypot(x, y, z);
  if (m < epsilon2) {
    x = X1, y = Y1, z = Z1;
    if (W1 < epsilon) x = X0, y = Y0, z = Z0;
    m = hypot(x, y, z);
    if (m < epsilon2) return [NaN, NaN];
  }
  return [atan2(y, x) * degrees, asin(z / m) * degrees];
}
var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda003, phi003, x0, y0, z0, centroidStream;
var init_centroid = __esm({
  "raaghu-elements/node_modules/d3-geo/src/centroid.js"() {
    init_src2();
    init_math();
    init_noop();
    init_stream();
    centroidStream = {
      sphere: noop,
      point: centroidPoint,
      lineStart: centroidLineStart,
      lineEnd: centroidLineEnd,
      polygonStart: function() {
        centroidStream.lineStart = centroidRingStart;
        centroidStream.lineEnd = centroidRingEnd;
      },
      polygonEnd: function() {
        centroidStream.lineStart = centroidLineStart;
        centroidStream.lineEnd = centroidLineEnd;
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/constant.js
function constant_default2(x) {
  return function() {
    return x;
  };
}
var init_constant2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/constant.js"() {
  }
});

// raaghu-elements/node_modules/d3-geo/src/compose.js
function compose_default(a, b) {
  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }
  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };
  return compose;
}
var init_compose = __esm({
  "raaghu-elements/node_modules/d3-geo/src/compose.js"() {
  }
});

// raaghu-elements/node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi) {
  return [abs(lambda) > pi ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
}
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos(deltaPhi), sinDeltaPhi = sin(deltaPhi), cosDeltaGamma = cos(deltaGamma), sinDeltaGamma = sin(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi) {
    var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y = sin(lambda) * cosPhi, z = sin(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  };
  return forward;
}
var init_rotation = __esm({
  "raaghu-elements/node_modules/d3-geo/src/rotation.js"() {
    init_compose();
    init_math();
    rotationIdentity.invert = rotationIdentity;
  }
});

// raaghu-elements/node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos(radius), sinRadius = sin(radius), step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
    stream.point(point[0], point[1]);
  }
}
function circleRadius(cosRadius, point) {
  point = cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}
function circle_default() {
  var center = constant_default2([0, 0]), radius = constant_default2(90), precision = constant_default2(6), ring, rotate, stream = { point };
  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= degrees, x[1] *= degrees;
  }
  function circle2() {
    var c = center.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c = { type: "Polygon", coordinates: [ring] };
    ring = rotate = null;
    return c;
  }
  circle2.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : constant_default2([+_[0], +_[1]]), circle2) : center;
  };
  circle2.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default2(+_), circle2) : radius;
  };
  circle2.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant_default2(+_), circle2) : precision;
  };
  return circle2;
}
var init_circle = __esm({
  "raaghu-elements/node_modules/d3-geo/src/circle.js"() {
    init_cartesian();
    init_constant2();
    init_math();
    init_rotation();
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/buffer.js
function buffer_default() {
  var lines = [], line;
  return {
    point: function(x, y, m) {
      line.push([x, y, m]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}
var init_buffer = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/buffer.js"() {
    init_noop();
  }
});

// raaghu-elements/node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}
var init_pointEqual = __esm({
  "raaghu-elements/node_modules/d3-geo/src/pointEqual.js"() {
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0) return;
    var n2, p02 = segment[0], p1 = segment[n2], x;
    if (pointEqual_default(p02, p1)) {
      if (!p02[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i) stream.point((p02 = segment[i])[0], p02[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon;
    }
    subject.push(x = new Intersection(p02, segment, null, true));
    clip.push(x.o = new Intersection(p02, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start = subject[0], points, point;
  while (1) {
    var current = start, isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array2) {
  if (!(n = array2.length)) return;
  var n, i = 0, a = array2[0], b;
  while (++i < n) {
    a.n = b = array2[i];
    b.p = a;
    a = b;
  }
  a.n = b = array2[0];
  b.p = a;
}
var init_rejoin = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/rejoin.js"() {
    init_pointEqual();
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/polygonContains.js
function longitude(point) {
  if (abs(point[0]) <= pi)
    return point[0];
  else
    return sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
}
function polygonContains_default(polygon, point) {
  var lambda = longitude(point), phi = point[1], sinPhi = sin(phi), normal = [sin(lambda), -cos(lambda), 0], angle2 = 0, winding = 0;
  var sum2 = new Adder();
  if (sinPhi === 1) phi = halfPi + epsilon;
  else if (sinPhi === -1) phi = -halfPi - epsilon;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring, m, point0 = ring[m - 1], lambda04 = longitude(point0), phi02 = point0[1] / 2 + quarterPi, sinPhi03 = sin(phi02), cosPhi03 = cos(phi02);
    for (var j = 0; j < m; ++j, lambda04 = lambda12, sinPhi03 = sinPhi1, cosPhi03 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda12 = longitude(point1), phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi12), cosPhi1 = cos(phi12), delta = lambda12 - lambda04, sign2 = delta >= 0 ? 1 : -1, absDelta = sign2 * delta, antimeridian = absDelta > pi, k = sinPhi03 * sinPhi1;
      sum2.add(atan2(k * sign2 * sin(absDelta), cosPhi03 * cosPhi1 + k * cos(absDelta)));
      angle2 += antimeridian ? delta + sign2 * tau : delta;
      if (antimeridian ^ lambda04 >= lambda ^ lambda12 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection2 = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection2);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection2[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle2 < -epsilon || angle2 < epsilon && sum2 < -epsilon2) ^ winding & 1;
}
var init_polygonContains = __esm({
  "raaghu-elements/node_modules/d3-geo/src/polygonContains.js"() {
    init_src2();
    init_cartesian();
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains_default(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point2;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n) return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point2 = segment[i])[0], point2[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
}
var init_clip = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/index.js"() {
    init_buffer();
    init_rejoin();
    init_math();
    init_polygonContains();
    init_src2();
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/antimeridian.js
function clipAntimeridianLine(stream) {
  var lambda04 = NaN, phi02 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda12, phi12) {
      var sign1 = lambda12 > 0 ? pi : -pi, delta = abs(lambda12 - lambda04);
      if (abs(delta - pi) < epsilon) {
        stream.point(lambda04, phi02 = (phi02 + phi12) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        stream.point(lambda12, phi02);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi) {
        if (abs(lambda04 - sign0) < epsilon) lambda04 -= sign0 * epsilon;
        if (abs(lambda12 - sign1) < epsilon) lambda12 -= sign1 * epsilon;
        phi02 = clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        clean = 0;
      }
      stream.point(lambda04 = lambda12, phi02 = phi12);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda04 = phi02 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12) {
  var cosPhi03, cosPhi1, sinLambda0Lambda1 = sin(lambda04 - lambda12);
  return abs(sinLambda0Lambda1) > epsilon ? atan((sin(phi02) * (cosPhi1 = cos(phi12)) * sin(lambda12) - sin(phi12) * (cosPhi03 = cos(phi02)) * sin(lambda04)) / (cosPhi03 * cosPhi1 * sinLambda0Lambda1)) : (phi02 + phi12) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi, phi);
    stream.point(0, phi);
    stream.point(pi, phi);
    stream.point(pi, 0);
    stream.point(pi, -phi);
    stream.point(0, -phi);
    stream.point(-pi, -phi);
    stream.point(-pi, 0);
    stream.point(-pi, phi);
  } else if (abs(from[0] - to[0]) > epsilon) {
    var lambda = from[0] < to[0] ? pi : -pi;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}
var antimeridian_default;
var init_antimeridian = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/antimeridian.js"() {
    init_clip();
    init_math();
    antimeridian_default = clip_default(
      function() {
        return true;
      },
      clipAntimeridianLine,
      clipAntimeridianInterpolate,
      [-pi, -halfPi]
    );
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/circle.js
function circle_default2(radius) {
  var cr = cos(radius), delta = 6 * radians, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos(lambda) * cos(phi) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual_default(point0, point2) || pointEqual_default(point1, point2))
            point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect(a, b, two) {
    var pa = cartesian(a), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A = cartesianScale(n1, c1), B = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B);
    var u = n1xn2, w = cartesianDot(A, u), uu = cartesianDot(u, u), t2 = w * w - uu * (cartesianDot(A, A) - 1);
    if (t2 < 0) return;
    var t = sqrt(t2), q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical(q);
    if (!two) return q;
    var lambda04 = a[0], lambda12 = b[0], phi02 = a[1], phi12 = b[1], z;
    if (lambda12 < lambda04) z = lambda04, lambda04 = lambda12, lambda12 = z;
    var delta2 = lambda12 - lambda04, polar = abs(delta2 - pi) < epsilon, meridian = polar || delta2 < epsilon;
    if (!polar && phi12 < phi02) z = phi02, phi02 = phi12, phi12 = z;
    if (meridian ? polar ? phi02 + phi12 > 0 ^ q[1] < (abs(q[0] - lambda04) < epsilon ? phi02 : phi12) : phi02 <= q[1] && q[1] <= phi12 : delta2 > pi ^ (lambda04 <= q[0] && q[0] <= lambda12)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi - radius, code2 = 0;
    if (lambda < -r) code2 |= 1;
    else if (lambda > r) code2 |= 2;
    if (phi < -r) code2 |= 4;
    else if (phi > r) code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
}
var init_circle2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/circle.js"() {
    init_cartesian();
    init_circle();
    init_math();
    init_pointEqual();
    init_clip();
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/line.js
function line_default(a, b, x06, y06, x12, y12) {
  var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
  r = x06 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y06 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}
var init_line = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/line.js"() {
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/rectangle.js
function clipRectangle(x06, y06, x12, y12) {
  function visible(x, y) {
    return x06 <= x && x <= x12 && y06 <= y && y <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a === 0 || a === 3 ? x06 : x12, a > 1 ? y12 : y06);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x06) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y06) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca = corner(a, 1), cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring2 = polygon[i], j = 1, m = ring2.length, point2 = ring2[0], a0, a1, b0 = point2[0], b1 = point2[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point2 = ring2[j], b0 = point2[0], b1 = point2[1];
          if (a1 <= y12) {
            if (b1 > y12 && (b0 - a0) * (y12 - a1) > (b1 - a1) * (x06 - a0)) ++winding;
          } else {
            if (b1 <= y12 && (b0 - a0) * (y12 - a1) < (b1 - a1) * (x06 - a0)) --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint2;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint2(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }
    function linePoint2(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (line_default(a, b, x06, y06, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }
    return clipStream;
  };
}
var clipMax, clipMin;
var init_rectangle = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/rectangle.js"() {
    init_math();
    init_buffer();
    init_line();
    init_rejoin();
    init_src2();
    clipMax = 1e9;
    clipMin = -clipMax;
  }
});

// raaghu-elements/node_modules/d3-geo/src/clip/extent.js
function extent_default2() {
  var x06 = 0, y06 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip;
  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x06, y06, x12, y12)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1], cache = cacheStream = null, clip) : [[x06, y06], [x12, y12]];
    }
  };
}
var init_extent2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/clip/extent.js"() {
    init_rectangle();
  }
});

// raaghu-elements/node_modules/d3-geo/src/length.js
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop;
}
function lengthPointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  lambda03 = lambda, sinPhi02 = sin(phi), cosPhi02 = cos(phi);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var sinPhi = sin(phi), cosPhi = cos(phi), delta = abs(lambda - lambda03), cosDelta = cos(delta), sinDelta = sin(delta), x = cosPhi * sinDelta, y = cosPhi02 * sinPhi - sinPhi02 * cosPhi * cosDelta, z = sinPhi02 * sinPhi + cosPhi02 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x * x + y * y), z));
  lambda03 = lambda, sinPhi02 = sinPhi, cosPhi02 = cosPhi;
}
function length_default(object2) {
  lengthSum = new Adder();
  stream_default(object2, lengthStream);
  return +lengthSum;
}
var lengthSum, lambda03, sinPhi02, cosPhi02, lengthStream;
var init_length = __esm({
  "raaghu-elements/node_modules/d3-geo/src/length.js"() {
    init_src2();
    init_math();
    init_noop();
    init_stream();
    lengthStream = {
      sphere: noop,
      point: noop,
      lineStart: lengthLineStart,
      lineEnd: noop,
      polygonStart: noop,
      polygonEnd: noop
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/distance.js
function distance_default(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return length_default(object);
}
var coordinates, object;
var init_distance = __esm({
  "raaghu-elements/node_modules/d3-geo/src/distance.js"() {
    init_length();
    coordinates = [null, null];
    object = { type: "LineString", coordinates };
  }
});

// raaghu-elements/node_modules/d3-geo/src/contains.js
function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}
function containsPoint(coordinates2, point) {
  return distance_default(coordinates2, point) === 0;
}
function containsLine(coordinates2, point) {
  var ao, bo, ab;
  for (var i = 0, n = coordinates2.length; i < n; i++) {
    bo = distance_default(coordinates2[i], point);
    if (bo === 0) return true;
    if (i > 0) {
      ab = distance_default(coordinates2[i], coordinates2[i - 1]);
      if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2 * ab)
        return true;
    }
    ao = bo;
  }
  return false;
}
function containsPolygon(coordinates2, point) {
  return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point));
}
function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point) {
  return [point[0] * radians, point[1] * radians];
}
function contains_default(object2, point) {
  return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point);
}
var containsObjectType, containsGeometryType;
var init_contains = __esm({
  "raaghu-elements/node_modules/d3-geo/src/contains.js"() {
    init_polygonContains();
    init_distance();
    init_math();
    containsObjectType = {
      Feature: function(object2, point) {
        return containsGeometry(object2.geometry, point);
      },
      FeatureCollection: function(object2, point) {
        var features = object2.features, i = -1, n = features.length;
        while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
        return false;
      }
    };
    containsGeometryType = {
      Sphere: function() {
        return true;
      },
      Point: function(object2, point) {
        return containsPoint(object2.coordinates, point);
      },
      MultiPoint: function(object2, point) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) if (containsPoint(coordinates2[i], point)) return true;
        return false;
      },
      LineString: function(object2, point) {
        return containsLine(object2.coordinates, point);
      },
      MultiLineString: function(object2, point) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) if (containsLine(coordinates2[i], point)) return true;
        return false;
      },
      Polygon: function(object2, point) {
        return containsPolygon(object2.coordinates, point);
      },
      MultiPolygon: function(object2, point) {
        var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
        while (++i < n) if (containsPolygon(coordinates2[i], point)) return true;
        return false;
      },
      GeometryCollection: function(object2, point) {
        var geometries = object2.geometries, i = -1, n = geometries.length;
        while (++i < n) if (containsGeometry(geometries[i], point)) return true;
        return false;
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/graticule.js
function graticuleX(y06, y12, dy) {
  var y = range_default(y06, y12 - epsilon, dy).concat(y12);
  return function(x) {
    return y.map(function(y2) {
      return [x, y2];
    });
  };
}
function graticuleY(x06, x12, dx) {
  var x = range_default(x06, x12 - epsilon, dx).concat(x12);
  return function(y) {
    return x.map(function(x2) {
      return [x2, y];
    });
  };
}
function graticule() {
  var x12, x06, X13, X03, y12, y06, Y13, Y03, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
  function graticule2() {
    return { type: "MultiLineString", coordinates: lines() };
  }
  function lines() {
    return range_default(ceil(X03 / DX) * DX, X13, DX).map(X).concat(range_default(ceil(Y03 / DY) * DY, Y13, DY).map(Y)).concat(range_default(ceil(x06 / dx) * dx, x12, dx).filter(function(x2) {
      return abs(x2 % DX) > epsilon;
    }).map(x)).concat(range_default(ceil(y06 / dy) * dy, y12, dy).filter(function(y2) {
      return abs(y2 % DY) > epsilon;
    }).map(y));
  }
  graticule2.lines = function() {
    return lines().map(function(coordinates2) {
      return { type: "LineString", coordinates: coordinates2 };
    });
  };
  graticule2.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X03).concat(
          Y(Y13).slice(1),
          X(X13).reverse().slice(1),
          Y(Y03).reverse().slice(1)
        )
      ]
    };
  };
  graticule2.extent = function(_) {
    if (!arguments.length) return graticule2.extentMinor();
    return graticule2.extentMajor(_).extentMinor(_);
  };
  graticule2.extentMajor = function(_) {
    if (!arguments.length) return [[X03, Y03], [X13, Y13]];
    X03 = +_[0][0], X13 = +_[1][0];
    Y03 = +_[0][1], Y13 = +_[1][1];
    if (X03 > X13) _ = X03, X03 = X13, X13 = _;
    if (Y03 > Y13) _ = Y03, Y03 = Y13, Y13 = _;
    return graticule2.precision(precision);
  };
  graticule2.extentMinor = function(_) {
    if (!arguments.length) return [[x06, y06], [x12, y12]];
    x06 = +_[0][0], x12 = +_[1][0];
    y06 = +_[0][1], y12 = +_[1][1];
    if (x06 > x12) _ = x06, x06 = x12, x12 = _;
    if (y06 > y12) _ = y06, y06 = y12, y12 = _;
    return graticule2.precision(precision);
  };
  graticule2.step = function(_) {
    if (!arguments.length) return graticule2.stepMinor();
    return graticule2.stepMajor(_).stepMinor(_);
  };
  graticule2.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule2;
  };
  graticule2.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule2;
  };
  graticule2.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y06, y12, 90);
    y = graticuleY(x06, x12, precision);
    X = graticuleX(Y03, Y13, 90);
    Y = graticuleY(X03, X13, precision);
    return graticule2;
  };
  return graticule2.extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]]).extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
}
function graticule10() {
  return graticule()();
}
var init_graticule = __esm({
  "raaghu-elements/node_modules/d3-geo/src/graticule.js"() {
    init_src2();
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/interpolate.js
function interpolate_default(a, b) {
  var x06 = a[0] * radians, y06 = a[1] * radians, x12 = b[0] * radians, y12 = b[1] * radians, cy0 = cos(y06), sy0 = sin(y06), cy1 = cos(y12), sy1 = sin(y12), kx0 = cy0 * cos(x06), ky0 = cy0 * sin(x06), kx1 = cy1 * cos(x12), ky1 = cy1 * sin(x12), d = 2 * asin(sqrt(haversin(y12 - y06) + cy0 * cy1 * haversin(x12 - x06))), k = sin(d);
  var interpolate = d ? function(t) {
    var B = sin(t *= d) / k, A = sin(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
    return [
      atan2(y, x) * degrees,
      atan2(z, sqrt(x * x + y * y)) * degrees
    ];
  } : function() {
    return [x06 * degrees, y06 * degrees];
  };
  interpolate.distance = d;
  return interpolate;
}
var init_interpolate = __esm({
  "raaghu-elements/node_modules/d3-geo/src/interpolate.js"() {
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/identity.js
var identity_default2;
var init_identity2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/identity.js"() {
    identity_default2 = (x) => x;
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/area.js
function areaRingStart2() {
  areaStream2.point = areaPointFirst2;
}
function areaPointFirst2(x, y) {
  areaStream2.point = areaPoint2;
  x00 = x02 = x, y00 = y02 = y;
}
function areaPoint2(x, y) {
  areaRingSum2.add(y02 * x - x02 * y);
  x02 = x, y02 = y;
}
function areaRingEnd2() {
  areaPoint2(x00, y00);
}
var areaSum2, areaRingSum2, x00, y00, x02, y02, areaStream2, area_default2;
var init_area2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/area.js"() {
    init_src2();
    init_math();
    init_noop();
    areaSum2 = new Adder();
    areaRingSum2 = new Adder();
    areaStream2 = {
      point: noop,
      lineStart: noop,
      lineEnd: noop,
      polygonStart: function() {
        areaStream2.lineStart = areaRingStart2;
        areaStream2.lineEnd = areaRingEnd2;
      },
      polygonEnd: function() {
        areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop;
        areaSum2.add(abs(areaRingSum2));
        areaRingSum2 = new Adder();
      },
      result: function() {
        var area = areaSum2 / 2;
        areaSum2 = new Adder();
        return area;
      }
    };
    area_default2 = areaStream2;
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/bounds.js
function boundsPoint2(x, y) {
  if (x < x03) x03 = x;
  if (x > x1) x1 = x;
  if (y < y03) y03 = y;
  if (y > y1) y1 = y;
}
var x03, y03, x1, y1, boundsStream2, bounds_default2;
var init_bounds2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/bounds.js"() {
    init_noop();
    x03 = Infinity;
    y03 = x03;
    x1 = -x03;
    y1 = x1;
    boundsStream2 = {
      point: boundsPoint2,
      lineStart: noop,
      lineEnd: noop,
      polygonStart: noop,
      polygonEnd: noop,
      result: function() {
        var bounds = [[x03, y03], [x1, y1]];
        x1 = y1 = -(y03 = x03 = Infinity);
        return bounds;
      }
    };
    bounds_default2 = boundsStream2;
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/centroid.js
function centroidPoint2(x, y) {
  X02 += x;
  Y02 += y;
  ++Z02;
}
function centroidLineStart2() {
  centroidStream2.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y) {
  centroidStream2.point = centroidPointLine;
  centroidPoint2(x04 = x, y04 = y);
}
function centroidPointLine(x, y) {
  var dx = x - x04, dy = y - y04, z = sqrt(dx * dx + dy * dy);
  X12 += z * (x04 + x) / 2;
  Y12 += z * (y04 + y) / 2;
  Z12 += z;
  centroidPoint2(x04 = x, y04 = y);
}
function centroidLineEnd2() {
  centroidStream2.point = centroidPoint2;
}
function centroidRingStart2() {
  centroidStream2.point = centroidPointFirstRing;
}
function centroidRingEnd2() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x, y) {
  centroidStream2.point = centroidPointRing;
  centroidPoint2(x002 = x04 = x, y002 = y04 = y);
}
function centroidPointRing(x, y) {
  var dx = x - x04, dy = y - y04, z = sqrt(dx * dx + dy * dy);
  X12 += z * (x04 + x) / 2;
  Y12 += z * (y04 + y) / 2;
  Z12 += z;
  z = y04 * x - x04 * y;
  X22 += z * (x04 + x);
  Y22 += z * (y04 + y);
  Z22 += z * 3;
  centroidPoint2(x04 = x, y04 = y);
}
var X02, Y02, Z02, X12, Y12, Z12, X22, Y22, Z22, x002, y002, x04, y04, centroidStream2, centroid_default2;
var init_centroid2 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/centroid.js"() {
    init_math();
    X02 = 0;
    Y02 = 0;
    Z02 = 0;
    X12 = 0;
    Y12 = 0;
    Z12 = 0;
    X22 = 0;
    Y22 = 0;
    Z22 = 0;
    centroidStream2 = {
      point: centroidPoint2,
      lineStart: centroidLineStart2,
      lineEnd: centroidLineEnd2,
      polygonStart: function() {
        centroidStream2.lineStart = centroidRingStart2;
        centroidStream2.lineEnd = centroidRingEnd2;
      },
      polygonEnd: function() {
        centroidStream2.point = centroidPoint2;
        centroidStream2.lineStart = centroidLineStart2;
        centroidStream2.lineEnd = centroidLineEnd2;
      },
      result: function() {
        var centroid = Z22 ? [X22 / Z22, Y22 / Z22] : Z12 ? [X12 / Z12, Y12 / Z12] : Z02 ? [X02 / Z02, Y02 / Z02] : [NaN, NaN];
        X02 = Y02 = Z02 = X12 = Y12 = Z12 = X22 = Y22 = Z22 = 0;
        return centroid;
      }
    };
    centroid_default2 = centroidStream2;
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
var init_context = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/context.js"() {
    init_math();
    init_noop();
    PathContext.prototype = {
      _radius: 4.5,
      pointRadius: function(_) {
        return this._radius = _, this;
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
      },
      point: function(x, y) {
        switch (this._point) {
          case 0: {
            this._context.moveTo(x, y);
            this._point = 1;
            break;
          }
          case 1: {
            this._context.lineTo(x, y);
            break;
          }
          default: {
            this._context.moveTo(x + this._radius, y);
            this._context.arc(x, y, this._radius, 0, tau);
            break;
          }
        }
      },
      result: noop
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/measure.js
function lengthPointFirst2(x, y) {
  lengthStream2.point = lengthPoint2;
  x003 = x05 = x, y003 = y05 = y;
}
function lengthPoint2(x, y) {
  x05 -= x, y05 -= y;
  lengthSum2.add(sqrt(x05 * x05 + y05 * y05));
  x05 = x, y05 = y;
}
var lengthSum2, lengthRing, x003, y003, x05, y05, lengthStream2, measure_default;
var init_measure = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/measure.js"() {
    init_src2();
    init_math();
    init_noop();
    lengthSum2 = new Adder();
    lengthStream2 = {
      point: noop,
      lineStart: function() {
        lengthStream2.point = lengthPointFirst2;
      },
      lineEnd: function() {
        if (lengthRing) lengthPoint2(x003, y003);
        lengthStream2.point = noop;
      },
      polygonStart: function() {
        lengthRing = true;
      },
      polygonEnd: function() {
        lengthRing = null;
      },
      result: function() {
        var length = +lengthSum2;
        lengthSum2 = new Adder();
        return length;
      }
    };
    measure_default = lengthStream2;
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}
var init_string = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/string.js"() {
    PathString.prototype = {
      _radius: 4.5,
      _circle: circle(4.5),
      pointRadius: function(_) {
        if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
        return this;
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line === 0) this._string.push("Z");
        this._point = NaN;
      },
      point: function(x, y) {
        switch (this._point) {
          case 0: {
            this._string.push("M", x, ",", y);
            this._point = 1;
            break;
          }
          case 1: {
            this._string.push("L", x, ",", y);
            break;
          }
          default: {
            if (this._circle == null) this._circle = circle(this._radius);
            this._string.push("M", x, ",", y, this._circle);
            break;
          }
        }
      },
      result: function() {
        if (this._string.length) {
          var result = this._string.join("");
          this._string = [];
          return result;
        } else {
          return null;
        }
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/path/index.js
function path_default(projection2, context) {
  var pointRadius = 4.5, projectionStream, contextStream;
  function path(object2) {
    if (object2) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object2, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path.area = function(object2) {
    stream_default(object2, projectionStream(area_default2));
    return area_default2.result();
  };
  path.measure = function(object2) {
    stream_default(object2, projectionStream(measure_default));
    return measure_default.result();
  };
  path.bounds = function(object2) {
    stream_default(object2, projectionStream(bounds_default2));
    return bounds_default2.result();
  };
  path.centroid = function(object2) {
    stream_default(object2, projectionStream(centroid_default2));
    return centroid_default2.result();
  };
  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection2 = null, identity_default2) : (projection2 = _).stream, path) : projection2;
  };
  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };
  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };
  return path.projection(projection2).context(context);
}
var init_path = __esm({
  "raaghu-elements/node_modules/d3-geo/src/path/index.js"() {
    init_identity2();
    init_stream();
    init_area2();
    init_bounds2();
    init_centroid2();
    init_context();
    init_measure();
    init_string();
  }
});

// raaghu-elements/node_modules/d3-geo/src/transform.js
function transform_default(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {
}
var init_transform = __esm({
  "raaghu-elements/node_modules/d3-geo/src/transform.js"() {
    TransformStream.prototype = {
      constructor: TransformStream,
      point: function(x, y) {
        this.stream.point(x, y);
      },
      sphere: function() {
        this.stream.sphere();
      },
      lineStart: function() {
        this.stream.lineStart();
      },
      lineEnd: function() {
        this.stream.lineEnd();
      },
      polygonStart: function() {
        this.stream.polygonStart();
      },
      polygonEnd: function() {
        this.stream.polygonEnd();
      }
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/fit.js
function fit(projection2, fitBounds, object2) {
  var clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null) projection2.clipExtent(null);
  stream_default(object2, projection2.stream(bounds_default2));
  fitBounds(bounds_default2.result());
  if (clip != null) projection2.clipExtent(clip);
  return projection2;
}
function fitExtent(projection2, extent, object2) {
  return fit(projection2, function(b) {
    var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x, y]);
  }, object2);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}
function fitWidth(projection2, width, object2) {
  return fit(projection2, function(b) {
    var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
    projection2.scale(150 * k).translate([x, y]);
  }, object2);
}
function fitHeight(projection2, height, object2) {
  return fit(projection2, function(b) {
    var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x, y]);
  }, object2);
}
var init_fit = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/fit.js"() {
    init_stream();
    init_bounds2();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/resample.js
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x06, y06, lambda04, a0, b0, c0, x12, y12, lambda12, a1, b1, c1, depth, stream) {
    var dx = x12 - x06, dy = y12 - y06, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = sqrt(a * a + b * b + c * c), phi2 = asin(c /= m), lambda22 = abs(abs(c) - 1) < epsilon || abs(lambda04 - lambda12) < epsilon ? (lambda04 + lambda12) / 2 : atan2(b, a), p = project(lambda22, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x06, dy2 = y2 - y06, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x06, y06, lambda04, a0, b0, c0, x2, y2, lambda22, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda22, a, b, c, x12, y12, lambda12, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda004, x004, y004, a00, b00, c00, lambda04, x06, y06, a0, b0, c0;
    var resampleStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }
    function lineStart() {
      x06 = NaN;
      resampleStream.point = linePoint2;
      stream.lineStart();
    }
    function linePoint2(lambda, phi) {
      var c = cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x06, y06, lambda04, a0, b0, c0, x06 = p[0], y06 = p[1], lambda04 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x06, y06);
    }
    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint2(lambda004 = lambda, phi), x004 = x06, y004 = y06, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint2;
    }
    function ringEnd() {
      resampleLineTo(x06, y06, lambda04, a0, b0, c0, x004, y004, lambda004, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}
var maxDepth, cosMinDistance;
var init_resample = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/resample.js"() {
    init_cartesian();
    init_math();
    init_transform();
    maxDepth = 16;
    cosMinDistance = cos(30 * radians);
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/index.js
function transformRotate(rotate) {
  return transformer({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k, dx, dy, sx, sy) {
  function transform(x, y) {
    x *= sx;
    y *= sy;
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k * sx, (dy - y) / k * sy];
  };
  return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = cos(alpha), sinAlpha = sin(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    x *= sx;
    y *= sy;
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
  };
  return transform;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x06 = null, y06, x12, y12, postclip = identity_default2, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point) {
    return projectRotateTransform(point[0] * radians, point[1] * radians);
  }
  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * degrees, point[1] * degrees];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? circle_default2(theta = _ * radians) : (theta = null, antimeridian_default), reset()) : theta * degrees;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default2) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };
  projection2.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees, phi * degrees];
  };
  projection2.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project, transform);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}
var transformRadians;
var init_projection = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/index.js"() {
    init_antimeridian();
    init_circle2();
    init_rectangle();
    init_compose();
    init_identity2();
    init_math();
    init_rotation();
    init_transform();
    init_fit();
    init_resample();
    transformRadians = transformer({
      point: function(x, y) {
        this.stream.point(x * radians, y * radians);
      }
    });
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/conic.js
function conicProjection(projectAt) {
  var phi02 = 0, phi12 = pi / 3, m = projectionMutator(projectAt), p = m(phi02, phi12);
  p.parallels = function(_) {
    return arguments.length ? m(phi02 = _[0] * radians, phi12 = _[1] * radians) : [phi02 * degrees, phi12 * degrees];
  };
  return p;
}
var init_conic = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/conic.js"() {
    init_math();
    init_projection();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function cylindricalEqualAreaRaw(phi02) {
  var cosPhi03 = cos(phi02);
  function forward(lambda, phi) {
    return [lambda * cosPhi03, sin(phi) / cosPhi03];
  }
  forward.invert = function(x, y) {
    return [x / cosPhi03, asin(y * cosPhi03)];
  };
  return forward;
}
var init_cylindricalEqualArea = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/cylindricalEqualArea.js"() {
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/conicEqualArea.js
function conicEqualAreaRaw(y06, y12) {
  var sy0 = sin(y06), n = (sy0 + sin(y12)) / 2;
  if (abs(n) < epsilon) return cylindricalEqualAreaRaw(y06);
  var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;
  function project(x, y) {
    var r = sqrt(c - 2 * n * sin(y)) / n;
    return [r * sin(x *= n), r0 - r * cos(x)];
  }
  project.invert = function(x, y) {
    var r0y = r0 - y, l = atan2(x, abs(r0y)) * sign(r0y);
    if (r0y * n < 0)
      l -= pi * sign(x) * sign(r0y);
    return [l / n, asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };
  return project;
}
function conicEqualArea_default() {
  return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}
var init_conicEqualArea = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/conicEqualArea.js"() {
    init_math();
    init_conic();
    init_cylindricalEqualArea();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/albers.js
function albers_default() {
  return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
var init_albers = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/albers.js"() {
    init_conicEqualArea();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/albersUsa.js
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) {
      var i = -1;
      while (++i < n) streams[i].point(x, y);
    },
    sphere: function() {
      var i = -1;
      while (++i < n) streams[i].sphere();
    },
    lineStart: function() {
      var i = -1;
      while (++i < n) streams[i].lineStart();
    },
    lineEnd: function() {
      var i = -1;
      while (++i < n) streams[i].lineEnd();
    },
    polygonStart: function() {
      var i = -1;
      while (++i < n) streams[i].polygonStart();
    },
    polygonEnd: function() {
      var i = -1;
      while (++i < n) streams[i].polygonEnd();
    }
  };
}
function albersUsa_default() {
  var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point, pointStream = { point: function(x, y) {
    point = [x, y];
  } };
  function albersUsa(coordinates2) {
    var x = coordinates2[0], y = coordinates2[1];
    return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
  }
  albersUsa.invert = function(coordinates2) {
    var k = lower48.scale(), t = lower48.translate(), x = (coordinates2[0] - t[0]) / k, y = (coordinates2[1] - t[1]) / k;
    return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates2);
  };
  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);
    alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + epsilon, y + 0.12 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function(extent, object2) {
    return fitExtent(albersUsa, extent, object2);
  };
  albersUsa.fitSize = function(size, object2) {
    return fitSize(albersUsa, size, object2);
  };
  albersUsa.fitWidth = function(width, object2) {
    return fitWidth(albersUsa, width, object2);
  };
  albersUsa.fitHeight = function(height, object2) {
    return fitHeight(albersUsa, height, object2);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}
var init_albersUsa = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/albersUsa.js"() {
    init_math();
    init_albers();
    init_conicEqualArea();
    init_fit();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = cos(x), cy = cos(y), k = scale(cx * cy);
    if (k === Infinity) return [2, 0];
    return [
      k * cy * sin(x),
      k * sin(y)
    ];
  };
}
function azimuthalInvert(angle2) {
  return function(x, y) {
    var z = sqrt(x * x + y * y), c = angle2(z), sc = sin(c), cc = cos(c);
    return [
      atan2(x * sc, z * cc),
      asin(z && y * sc / z)
    ];
  };
}
var init_azimuthal = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/azimuthal.js"() {
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/azimuthalEqualArea.js
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}
var azimuthalEqualAreaRaw;
var init_azimuthalEqualArea = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/azimuthalEqualArea.js"() {
    init_math();
    init_azimuthal();
    init_projection();
    azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
      return sqrt(2 / (1 + cxcy));
    });
    azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
      return 2 * asin(z / 2);
    });
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/azimuthalEquidistant.js
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}
var azimuthalEquidistantRaw;
var init_azimuthalEquidistant = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/azimuthalEquidistant.js"() {
    init_math();
    init_azimuthal();
    init_projection();
    azimuthalEquidistantRaw = azimuthalRaw(function(c) {
      return (c = acos(c)) && c / sin(c);
    });
    azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
      return z;
    });
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi + phi) / 2))];
}
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau);
}
function mercatorProjection(project) {
  var m = projection(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x06 = null, y06, x12, y12;
  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };
  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };
  m.clipExtent = function(_) {
    return arguments.length ? (_ == null ? x06 = y06 = x12 = y12 = null : (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reclip()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  function reclip() {
    var k = pi * scale(), t = m(rotation_default(m.rotate()).invert([0, 0]));
    return clipExtent(x06 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x06), y06], [Math.min(t[0] + k, x12), y12]] : [[x06, Math.max(t[1] - k, y06)], [x12, Math.min(t[1] + k, y12)]]);
  }
  return reclip();
}
var init_mercator = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/mercator.js"() {
    init_math();
    init_rotation();
    init_projection();
    mercatorRaw.invert = function(x, y) {
      return [x, 2 * atan(exp(y)) - halfPi];
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/conicConformal.js
function tany(y) {
  return tan((halfPi + y) / 2);
}
function conicConformalRaw(y06, y12) {
  var cy0 = cos(y06), n = y06 === y12 ? sin(y06) : log(cy0 / cos(y12)) / log(tany(y12) / tany(y06)), f = cy0 * pow(tany(y06), n) / n;
  if (!n) return mercatorRaw;
  function project(x, y) {
    if (f > 0) {
      if (y < -halfPi + epsilon) y = -halfPi + epsilon;
    } else {
      if (y > halfPi - epsilon) y = halfPi - epsilon;
    }
    var r = f / pow(tany(y), n);
    return [r * sin(n * x), f - r * cos(n * x)];
  }
  project.invert = function(x, y) {
    var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy), l = atan2(x, abs(fy)) * sign(fy);
    if (fy * n < 0)
      l -= pi * sign(x) * sign(fy);
    return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi];
  };
  return project;
}
function conicConformal_default() {
  return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
}
var init_conicConformal = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/conicConformal.js"() {
    init_math();
    init_conic();
    init_mercator();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}
var init_equirectangular = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/equirectangular.js"() {
    init_projection();
    equirectangularRaw.invert = equirectangularRaw;
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/conicEquidistant.js
function conicEquidistantRaw(y06, y12) {
  var cy0 = cos(y06), n = y06 === y12 ? sin(y06) : (cy0 - cos(y12)) / (y12 - y06), g = cy0 / n + y06;
  if (abs(n) < epsilon) return equirectangularRaw;
  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * sin(nx), g - gy * cos(nx)];
  }
  project.invert = function(x, y) {
    var gy = g - y, l = atan2(x, abs(gy)) * sign(gy);
    if (gy * n < 0)
      l -= pi * sign(x) * sign(gy);
    return [l / n, g - sign(n) * sqrt(x * x + gy * gy)];
  };
  return project;
}
function conicEquidistant_default() {
  return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}
var init_conicEquidistant = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/conicEquidistant.js"() {
    init_math();
    init_conic();
    init_equirectangular();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/equalEarth.js
function equalEarthRaw(lambda, phi) {
  var l = asin(M * sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}
var A1, A2, A3, A4, M, iterations;
var init_equalEarth = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/equalEarth.js"() {
    init_projection();
    init_math();
    A1 = 1.340264;
    A2 = -0.081106;
    A3 = 893e-6;
    A4 = 3796e-6;
    M = sqrt(3) / 2;
    iterations = 12;
    equalEarthRaw.invert = function(x, y) {
      var l = y, l2 = l * l, l6 = l2 * l2 * l2;
      for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
        fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
        fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
        l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
        if (abs(delta) < epsilon2) break;
      }
      return [
        M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l),
        asin(sin(l) / M)
      ];
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x, y) {
  var cy = cos(y), k = cos(x) * cy;
  return [cy * sin(x) / k, sin(y) / k];
}
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}
var init_gnomonic = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/gnomonic.js"() {
    init_math();
    init_azimuthal();
    init_projection();
    gnomonicRaw.invert = azimuthalInvert(atan);
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/identity.js
function identity_default3() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x06 = null, y06, x12, y12, kx = 1, ky = 1, transform = transformer({
    point: function(x, y) {
      var p = projection2([x, y]);
      this.stream.point(p[0], p[1]);
    }
  }), postclip = identity_default2, cache, cacheStream;
  function reset() {
    kx = k * sx;
    ky = k * sy;
    cache = cacheStream = null;
    return projection2;
  }
  function projection2(p) {
    var x = p[0] * kx, y = p[1] * ky;
    if (alpha) {
      var t = y * ca - x * sa;
      x = x * ca + y * sa;
      y = t;
    }
    return [x + tx, y + ty];
  }
  projection2.invert = function(p) {
    var x = p[0] - tx, y = p[1] - ty;
    if (alpha) {
      var t = y * ca + x * sa;
      x = x * ca - y * sa;
      y = t;
    }
    return [x / kx, y / ky];
  };
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default2) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, reset()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  return projection2;
}
var init_identity3 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/identity.js"() {
    init_rectangle();
    init_identity2();
    init_transform();
    init_fit();
    init_math();
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi2 - 1529e-6 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4)))
  ];
}
function naturalEarth1_default() {
  return projection(naturalEarth1Raw).scale(175.295);
}
var init_naturalEarth1 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/naturalEarth1.js"() {
    init_projection();
    init_math();
    naturalEarth1Raw.invert = function(x, y) {
      var phi = y, i = 25, delta;
      do {
        var phi2 = phi * phi, phi4 = phi2 * phi2;
        phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 5916e-6 * 11 * phi4)));
      } while (abs(delta) > epsilon && --i > 0);
      return [
        x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (3971e-6 - 1529e-6 * phi2)))),
        phi
      ];
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x, y) {
  return [cos(y) * sin(x), sin(y)];
}
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon);
}
var init_orthographic = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/orthographic.js"() {
    init_math();
    init_azimuthal();
    init_projection();
    orthographicRaw.invert = azimuthalInvert(asin);
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x, y) {
  var cy = cos(y), k = 1 + cos(x) * cy;
  return [cy * sin(x) / k, sin(y) / k];
}
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}
var init_stereographic = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/stereographic.js"() {
    init_math();
    init_azimuthal();
    init_projection();
    stereographicRaw.invert = azimuthalInvert(function(z) {
      return 2 * atan(z);
    });
  }
});

// raaghu-elements/node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi + phi) / 2)), -lambda];
}
function transverseMercator_default() {
  var m = mercatorProjection(transverseMercatorRaw), center = m.center, rotate = m.rotate;
  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };
  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}
var init_transverseMercator = __esm({
  "raaghu-elements/node_modules/d3-geo/src/projection/transverseMercator.js"() {
    init_math();
    init_mercator();
    transverseMercatorRaw.invert = function(x, y) {
      return [-y, 2 * atan(exp(x)) - halfPi];
    };
  }
});

// raaghu-elements/node_modules/d3-geo/src/index.js
var src_exports = {};
__export(src_exports, {
  geoAlbers: () => albers_default,
  geoAlbersUsa: () => albersUsa_default,
  geoArea: () => area_default,
  geoAzimuthalEqualArea: () => azimuthalEqualArea_default,
  geoAzimuthalEqualAreaRaw: () => azimuthalEqualAreaRaw,
  geoAzimuthalEquidistant: () => azimuthalEquidistant_default,
  geoAzimuthalEquidistantRaw: () => azimuthalEquidistantRaw,
  geoBounds: () => bounds_default,
  geoCentroid: () => centroid_default,
  geoCircle: () => circle_default,
  geoClipAntimeridian: () => antimeridian_default,
  geoClipCircle: () => circle_default2,
  geoClipExtent: () => extent_default2,
  geoClipRectangle: () => clipRectangle,
  geoConicConformal: () => conicConformal_default,
  geoConicConformalRaw: () => conicConformalRaw,
  geoConicEqualArea: () => conicEqualArea_default,
  geoConicEqualAreaRaw: () => conicEqualAreaRaw,
  geoConicEquidistant: () => conicEquidistant_default,
  geoConicEquidistantRaw: () => conicEquidistantRaw,
  geoContains: () => contains_default,
  geoDistance: () => distance_default,
  geoEqualEarth: () => equalEarth_default,
  geoEqualEarthRaw: () => equalEarthRaw,
  geoEquirectangular: () => equirectangular_default,
  geoEquirectangularRaw: () => equirectangularRaw,
  geoGnomonic: () => gnomonic_default,
  geoGnomonicRaw: () => gnomonicRaw,
  geoGraticule: () => graticule,
  geoGraticule10: () => graticule10,
  geoIdentity: () => identity_default3,
  geoInterpolate: () => interpolate_default,
  geoLength: () => length_default,
  geoMercator: () => mercator_default,
  geoMercatorRaw: () => mercatorRaw,
  geoNaturalEarth1: () => naturalEarth1_default,
  geoNaturalEarth1Raw: () => naturalEarth1Raw,
  geoOrthographic: () => orthographic_default,
  geoOrthographicRaw: () => orthographicRaw,
  geoPath: () => path_default,
  geoProjection: () => projection,
  geoProjectionMutator: () => projectionMutator,
  geoRotation: () => rotation_default,
  geoStereographic: () => stereographic_default,
  geoStereographicRaw: () => stereographicRaw,
  geoStream: () => stream_default,
  geoTransform: () => transform_default,
  geoTransverseMercator: () => transverseMercator_default,
  geoTransverseMercatorRaw: () => transverseMercatorRaw
});
var init_src3 = __esm({
  "raaghu-elements/node_modules/d3-geo/src/index.js"() {
    init_area();
    init_bounds();
    init_centroid();
    init_circle();
    init_antimeridian();
    init_circle2();
    init_extent2();
    init_rectangle();
    init_contains();
    init_distance();
    init_graticule();
    init_interpolate();
    init_length();
    init_path();
    init_albers();
    init_albersUsa();
    init_azimuthalEqualArea();
    init_azimuthalEquidistant();
    init_conicConformal();
    init_conicEqualArea();
    init_conicEquidistant();
    init_equalEarth();
    init_equirectangular();
    init_gnomonic();
    init_identity3();
    init_projection();
    init_mercator();
    init_naturalEarth1();
    init_orthographic();
    init_stereographic();
    init_transverseMercator();
    init_rotation();
    init_stream();
    init_transform();
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/countries.geo.js
var require_countries_geo = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/countries.geo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
      features: [
        {
          N: "Fiji",
          I: "FJ",
          C: [[[[180, -16.067], [180, -16.555], [179.364, -16.801], [178.725, -17.012], [178.597, -16.639], [179.097, -16.434], [179.414, -16.379], [180, -16.067]]], [[[178.126, -17.505], [178.374, -17.34], [178.718, -17.628], [178.553, -18.151], [177.933, -18.288], [177.381, -18.164], [177.285, -17.725], [177.671, -17.381], [178.126, -17.505]]], [[[-179.793, -16.021], [-179.917, -16.502], [-180, -16.555], [-180, -16.067], [-179.793, -16.021]]]]
        },
        {
          N: "Tanzania",
          I: "TZ",
          C: [[[[33.904, -0.95], [34.073, -1.06], [37.699, -3.097], [37.767, -3.677], [39.202, -4.677], [38.741, -5.909], [38.8, -6.476], [39.44, -6.84], [39.47, -7.1], [39.195, -7.704], [39.252, -8.008], [39.187, -8.486], [39.536, -9.112], [39.95, -10.098], [40.317, -10.317], [40.317, -10.317], [39.521, -10.897], [38.428, -11.285], [37.828, -11.269], [37.471, -11.569], [36.775, -11.595], [36.514, -11.721], [35.312, -11.439], [34.56, -11.52], [34.28, -10.16], [33.941, -9.694], [33.74, -9.417], [32.759, -9.231], [32.192, -8.93], [31.556, -8.762], [31.158, -8.595], [30.74, -8.34], [30.74, -8.34], [30.2, -7.08], [29.62, -6.52], [29.42, -5.94], [29.52, -5.42], [29.34, -4.5], [29.754, -4.452], [30.116, -4.09], [30.506, -3.569], [30.752, -3.359], [30.743, -3.034], [30.528, -2.808], [30.47, -2.414], [30.47, -2.414], [30.758, -2.287], [30.816, -1.699], [30.419, -1.135], [30.77, -1.015], [31.866, -1.027], [33.904, -0.95]]]]
        },
        {
          N: "Western Sahara",
          I: "EH",
          C: [[[[-8.666, 27.656], [-8.665, 27.589], [-8.684, 27.396], [-8.687, 25.881], [-11.969, 25.933], [-11.937, 23.375], [-12.874, 23.285], [-13.119, 22.771], [-12.929, 21.327], [-16.845, 21.333], [-17.063, 21], [-17.02, 21.422], [-17.003, 21.421], [-14.751, 21.501], [-14.631, 21.861], [-14.221, 22.31], [-13.891, 23.691], [-12.501, 24.77], [-12.031, 26.031], [-11.718, 26.104], [-11.393, 26.883], [-10.551, 26.991], [-10.189, 26.861], [-9.735, 26.861], [-9.413, 27.088], [-8.795, 27.121], [-8.818, 27.656], [-8.666, 27.656]]]]
        },
        {
          N: "Canada",
          I: "CA",
          C: [[[[-122.84, 49], [-122.974, 49.003], [-124.91, 49.985], [-125.625, 50.417], [-127.436, 50.831], [-127.993, 51.716], [-127.85, 52.33], [-129.13, 52.755], [-129.305, 53.562], [-130.515, 54.288], [-130.536, 54.803], [-130.536, 54.803], [-129.98, 55.285], [-130.008, 55.916], [-131.708, 56.552], [-132.73, 57.693], [-133.356, 58.41], [-134.271, 58.861], [-134.945, 59.271], [-135.476, 59.788], [-136.48, 59.464], [-137.452, 58.905], [-138.341, 59.562], [-139.039, 60], [-140.013, 60.277], [-140.998, 60.306], [-140.993, 66], [-140.986, 69.712], [-140.986, 69.712], [-139.121, 69.471], [-137.546, 68.99], [-136.504, 68.898], [-135.626, 69.315], [-134.415, 69.627], [-132.929, 69.505], [-131.431, 69.945], [-129.795, 70.194], [-129.108, 69.779], [-128.362, 70.013], [-128.138, 70.484], [-127.447, 70.377], [-125.756, 69.481], [-124.425, 70.158], [-124.29, 69.4], [-123.061, 69.564], [-122.683, 69.856], [-121.472, 69.798], [-119.943, 69.378], [-117.603, 69.011], [-116.226, 68.842], [-115.247, 68.906], [-113.898, 68.399], [-115.305, 67.903], [-113.497, 67.688], [-110.798, 67.806], [-109.946, 67.981], [-108.88, 67.381], [-107.792, 67.887], [-108.813, 68.312], [-108.167, 68.654], [-106.95, 68.7], [-106.15, 68.8], [-105.343, 68.561], [-104.338, 68.018], [-103.221, 68.098], [-101.454, 67.647], [-99.902, 67.806], [-98.443, 67.782], [-98.559, 68.404], [-97.669, 68.579], [-96.12, 68.239], [-96.126, 67.293], [-95.489, 68.091], [-94.685, 68.064], [-94.233, 69.069], [-95.304, 69.686], [-96.471, 70.09], [-96.391, 71.195], [-95.209, 71.921], [-93.89, 71.76], [-92.878, 71.319], [-91.52, 70.191], [-92.407, 69.7], [-90.547, 69.498], [-90.552, 68.475], [-89.215, 69.259], [-88.02, 68.615], [-88.317, 67.873], [-87.35, 67.199], [-86.306, 67.921], [-85.577, 68.785], [-85.522, 69.882], [-84.101, 69.805], [-82.623, 69.658], [-81.28, 69.162], [-81.22, 68.666], [-81.964, 68.133], [-81.259, 67.597], [-81.387, 67.111], [-83.345, 66.412], [-84.735, 66.257], [-85.769, 66.558], [-86.068, 66.056], [-87.031, 65.213], [-87.323, 64.776], [-88.483, 64.099], [-89.914, 64.033], [-90.704, 63.61], [-90.77, 62.96], [-91.933, 62.835], [-93.157, 62.025], [-94.242, 60.899], [-94.629, 60.11], [-94.685, 58.949], [-93.215, 58.782], [-92.765, 57.846], [-92.297, 57.087], [-90.898, 57.285], [-89.04, 56.852], [-88.04, 56.472], [-87.324, 55.999], [-86.071, 55.724], [-85.012, 55.303], [-83.361, 55.245], [-82.273, 55.148], [-82.436, 54.282], [-82.125, 53.277], [-81.401, 52.158], [-79.913, 51.208], [-79.143, 51.534], [-78.602, 52.562], [-79.124, 54.141], [-79.83, 54.668], [-78.229, 55.136], [-77.096, 55.837], [-76.541, 56.534], [-76.623, 57.203], [-77.302, 58.052], [-78.517, 58.805], [-77.337, 59.853], [-77.773, 60.758], [-78.107, 62.32], [-77.411, 62.551], [-75.696, 62.278], [-74.668, 62.181], [-73.84, 62.444], [-72.909, 62.105], [-71.677, 61.525], [-71.374, 61.137], [-69.59, 61.061], [-69.62, 60.221], [-69.288, 58.957], [-68.375, 58.801], [-67.65, 58.212], [-66.202, 58.767], [-65.245, 59.871], [-64.584, 60.336], [-63.805, 59.443], [-62.502, 58.167], [-61.397, 56.967], [-61.799, 56.339], [-60.469, 55.775], [-59.57, 55.204], [-57.975, 54.945], [-57.333, 54.627], [-56.937, 53.78], [-56.158, 53.647], [-55.756, 53.27], [-55.683, 52.147], [-56.409, 51.771], [-57.127, 51.42], [-58.775, 51.064], [-60.033, 50.243], [-61.724, 50.08], [-63.863, 50.291], [-65.363, 50.298], [-66.399, 50.229], [-67.236, 49.512], [-68.511, 49.068], [-69.954, 47.745], [-71.105, 46.822], [-70.255, 46.986], [-68.65, 48.3], [-66.552, 49.133], [-65.056, 49.233], [-64.171, 48.742], [-65.115, 48.071], [-64.799, 46.993], [-64.472, 46.238], [-63.173, 45.739], [-61.521, 45.884], [-60.518, 47.008], [-60.449, 46.283], [-59.803, 45.92], [-61.04, 45.265], [-63.255, 44.67], [-64.247, 44.266], [-65.364, 43.545], [-66.123, 43.619], [-66.162, 44.465], [-64.425, 45.292], [-66.026, 45.259], [-67.137, 45.138], [-67.791, 45.703], [-67.79, 47.066], [-68.234, 47.355], [-68.905, 47.185], [-69.237, 47.448], [-70, 46.693], [-70.305, 45.915], [-70.66, 45.46], [-71.085, 45.305], [-71.405, 45.255], [-71.505, 45.008], [-73.348, 45.007], [-74.867, 45], [-75.318, 44.816], [-76.375, 44.096], [-76.5, 44.018], [-76.82, 43.629], [-77.738, 43.629], [-78.72, 43.625], [-79.172, 43.466], [-79.01, 43.27], [-78.92, 42.965], [-78.939, 42.864], [-80.247, 42.366], [-81.278, 42.209], [-82.439, 41.675], [-82.69, 41.675], [-83.03, 41.833], [-83.142, 41.976], [-83.12, 42.08], [-82.9, 42.43], [-82.43, 42.98], [-82.138, 43.571], [-82.338, 44.44], [-82.551, 45.348], [-83.593, 45.817], [-83.47, 45.995], [-83.616, 46.117], [-83.891, 46.117], [-84.092, 46.275], [-84.142, 46.512], [-84.337, 46.409], [-84.605, 46.44], [-84.544, 46.539], [-84.779, 46.637], [-84.876, 46.9], [-85.652, 47.22], [-86.462, 47.553], [-87.44, 47.94], [-88.378, 48.303], [-89.273, 48.02], [-89.6, 48.01], [-90.83, 48.27], [-91.64, 48.14], [-92.61, 48.45], [-93.631, 48.609], [-94.329, 48.671], [-94.64, 48.84], [-94.818, 49.389], [-95.156, 49.384], [-95.159, 49], [-97.229, 49.001], [-100.65, 49], [-104.048, 49], [-107.05, 49], [-110.05, 49], [-113, 49], [-116.048, 49], [-117.031, 49], [-120, 49], [-122.84, 49]]], [[[-83.994, 62.453], [-83.25, 62.914], [-81.877, 62.905], [-81.898, 62.711], [-83.069, 62.159], [-83.775, 62.182], [-83.994, 62.453]]], [[[-79.776, 72.803], [-80.876, 73.333], [-80.834, 73.693], [-80.353, 73.76], [-78.064, 73.652], [-76.34, 73.103], [-76.251, 72.826], [-77.314, 72.856], [-78.392, 72.877], [-79.486, 72.742], [-79.776, 72.803]]], [[[-80.315, 62.086], [-79.929, 62.386], [-79.52, 62.364], [-79.266, 62.159], [-79.658, 61.633], [-80.1, 61.718], [-80.362, 62.016], [-80.315, 62.086]]], [[[-93.613, 74.98], [-94.157, 74.592], [-95.609, 74.667], [-96.821, 74.928], [-96.289, 75.378], [-94.851, 75.647], [-93.978, 75.296], [-93.613, 74.98]]], [[[-93.84, 77.52], [-94.296, 77.491], [-96.17, 77.555], [-96.436, 77.835], [-94.423, 77.82], [-93.721, 77.634], [-93.84, 77.52]]], [[[-96.754, 78.766], [-95.559, 78.418], [-95.83, 78.057], [-97.31, 77.851], [-98.124, 78.083], [-98.553, 78.458], [-98.632, 78.872], [-97.337, 78.832], [-96.754, 78.766]]], [[[-88.15, 74.392], [-89.765, 74.516], [-92.422, 74.838], [-92.768, 75.387], [-92.89, 75.883], [-93.894, 76.319], [-95.962, 76.441], [-97.121, 76.751], [-96.745, 77.161], [-94.684, 77.098], [-93.574, 76.776], [-91.605, 76.779], [-90.742, 76.45], [-90.97, 76.074], [-89.822, 75.848], [-89.187, 75.61], [-87.838, 75.566], [-86.379, 75.482], [-84.79, 75.699], [-82.753, 75.784], [-81.129, 75.714], [-80.058, 75.337], [-79.834, 74.923], [-80.458, 74.657], [-81.949, 74.442], [-83.229, 74.564], [-86.097, 74.41], [-88.15, 74.392]]], [[[-111.264, 78.153], [-109.854, 77.996], [-110.187, 77.697], [-112.051, 77.409], [-113.534, 77.732], [-112.725, 78.051], [-111.264, 78.153]]], [[[-110.964, 78.804], [-109.663, 78.602], [-110.881, 78.407], [-112.542, 78.408], [-112.526, 78.551], [-111.5, 78.85], [-110.964, 78.804]]], [[[-55.6, 51.317], [-56.134, 50.687], [-56.796, 49.812], [-56.143, 50.15], [-55.471, 49.936], [-55.822, 49.587], [-54.935, 49.313], [-54.474, 49.557], [-53.477, 49.249], [-53.786, 48.517], [-53.086, 48.688], [-52.959, 48.157], [-52.648, 47.536], [-53.069, 46.655], [-53.521, 46.618], [-54.179, 46.807], [-53.962, 47.625], [-54.24, 47.752], [-55.401, 46.885], [-55.997, 46.92], [-55.291, 47.39], [-56.251, 47.633], [-57.325, 47.573], [-59.266, 47.603], [-59.419, 47.899], [-58.797, 48.252], [-59.232, 48.523], [-58.392, 49.126], [-57.359, 50.718], [-56.739, 51.287], [-55.871, 51.632], [-55.407, 51.588], [-55.6, 51.317]]], [[[-83.883, 65.11], [-82.788, 64.767], [-81.642, 64.455], [-81.553, 63.98], [-80.817, 64.057], [-80.103, 63.726], [-80.991, 63.411], [-82.547, 63.652], [-83.109, 64.102], [-84.1, 63.57], [-85.523, 63.052], [-85.867, 63.637], [-87.222, 63.541], [-86.353, 64.036], [-86.225, 64.823], [-85.884, 65.739], [-85.161, 65.657], [-84.976, 65.218], [-84.464, 65.372], [-83.883, 65.11]]], [[[-78.771, 72.352], [-77.825, 72.75], [-75.606, 72.244], [-74.229, 71.767], [-74.099, 71.331], [-72.242, 71.557], [-71.2, 70.92], [-68.786, 70.525], [-67.915, 70.122], [-66.969, 69.186], [-68.805, 68.72], [-66.45, 68.067], [-64.862, 67.848], [-63.425, 66.928], [-61.852, 66.862], [-62.163, 66.16], [-63.918, 64.999], [-65.149, 65.426], [-66.721, 66.388], [-68.015, 66.263], [-68.141, 65.69], [-67.09, 65.108], [-65.732, 64.648], [-65.32, 64.383], [-64.669, 63.393], [-65.014, 62.674], [-66.275, 62.945], [-68.783, 63.746], [-67.37, 62.884], [-66.328, 62.28], [-66.166, 61.931], [-68.877, 62.33], [-71.023, 62.911], [-72.235, 63.398], [-71.886, 63.68], [-73.378, 64.194], [-74.834, 64.679], [-74.819, 64.389], [-77.71, 64.23], [-78.556, 64.573], [-77.897, 65.309], [-76.018, 65.327], [-73.96, 65.455], [-74.294, 65.812], [-73.945, 66.311], [-72.651, 67.285], [-72.926, 67.727], [-73.312, 68.069], [-74.843, 68.555], [-76.869, 68.895], [-76.229, 69.148], [-77.287, 69.77], [-78.169, 69.826], [-78.957, 70.167], [-79.492, 69.872], [-81.305, 69.743], [-84.945, 69.967], [-87.06, 70.26], [-88.682, 70.411], [-89.513, 70.762], [-88.468, 71.218], [-89.888, 71.223], [-90.205, 72.235], [-89.437, 73.129], [-88.408, 73.538], [-85.826, 73.804], [-86.562, 73.157], [-85.774, 72.534], [-84.85, 73.34], [-82.316, 73.751], [-80.6, 72.717], [-80.749, 72.062], [-78.771, 72.352]]], [[[-94.504, 74.135], [-92.42, 74.1], [-90.51, 73.857], [-92.004, 72.966], [-93.196, 72.772], [-94.269, 72.025], [-95.41, 72.062], [-96.034, 72.94], [-96.018, 73.437], [-95.496, 73.862], [-94.504, 74.135]]], [[[-122.855, 76.117], [-122.855, 76.117], [-121.158, 76.865], [-119.104, 77.512], [-117.57, 77.498], [-116.199, 77.645], [-116.336, 76.877], [-117.106, 76.53], [-118.04, 76.481], [-119.899, 76.053], [-121.5, 75.9], [-122.855, 76.117]]], [[[-132.71, 54.04], [-131.75, 54.12], [-132.049, 52.985], [-131.179, 52.18], [-131.578, 52.182], [-132.18, 52.64], [-132.55, 53.1], [-133.055, 53.411], [-133.24, 53.851], [-133.18, 54.17], [-132.71, 54.04]]], [[[-105.492, 79.302], [-103.529, 79.165], [-100.825, 78.8], [-100.06, 78.325], [-99.671, 77.908], [-101.304, 78.019], [-102.95, 78.343], [-105.176, 78.38], [-104.21, 78.677], [-105.42, 78.918], [-105.492, 79.302]]], [[[-123.51, 48.51], [-124.013, 48.371], [-125.655, 48.825], [-125.955, 49.18], [-126.85, 49.53], [-127.03, 49.815], [-128.059, 49.995], [-128.445, 50.539], [-128.358, 50.771], [-127.309, 50.553], [-126.695, 50.401], [-125.755, 50.295], [-125.415, 49.95], [-124.921, 49.475], [-123.923, 49.062], [-123.51, 48.51]]], [[[-121.538, 74.449], [-120.11, 74.241], [-117.556, 74.186], [-116.584, 73.896], [-115.511, 73.475], [-116.768, 73.223], [-119.22, 72.52], [-120.46, 71.82], [-120.46, 71.384], [-123.092, 70.902], [-123.62, 71.34], [-125.929, 71.869], [-125.5, 72.292], [-124.807, 73.023], [-123.94, 73.68], [-124.918, 74.293], [-121.538, 74.449]]], [[[-107.819, 75.846], [-106.929, 76.013], [-105.881, 75.969], [-105.705, 75.48], [-106.313, 75.005], [-109.7, 74.85], [-112.223, 74.417], [-113.744, 74.394], [-113.871, 74.72], [-111.794, 75.162], [-116.312, 75.043], [-117.71, 75.222], [-116.346, 76.199], [-115.405, 76.479], [-112.591, 76.141], [-110.814, 75.549], [-109.067, 75.473], [-110.497, 76.43], [-109.581, 76.794], [-108.549, 76.678], [-108.211, 76.202], [-107.819, 75.846]]], [[[-106.523, 73.076], [-105.402, 72.673], [-104.775, 71.698], [-104.465, 70.993], [-102.785, 70.498], [-100.981, 70.024], [-101.089, 69.584], [-102.731, 69.504], [-102.093, 69.12], [-102.43, 68.753], [-104.24, 68.91], [-105.96, 69.18], [-107.123, 69.119], [-109, 68.78], [-111.534, 68.63], [-113.313, 68.536], [-113.855, 69.007], [-115.22, 69.28], [-116.108, 69.168], [-117.34, 69.96], [-116.675, 70.067], [-115.131, 70.237], [-113.721, 70.192], [-112.416, 70.366], [-114.35, 70.6], [-116.487, 70.52], [-117.905, 70.541], [-118.432, 70.909], [-116.113, 71.309], [-117.656, 71.295], [-119.402, 71.559], [-118.563, 72.308], [-117.866, 72.706], [-115.189, 73.315], [-114.167, 73.121], [-114.666, 72.653], [-112.441, 72.955], [-111.05, 72.45], [-109.92, 72.961], [-109.007, 72.633], [-108.188, 71.651], [-107.686, 72.065], [-108.396, 73.09], [-107.516, 73.236], [-106.523, 73.076]]], [[[-100.438, 72.706], [-101.54, 73.36], [-100.356, 73.844], [-99.164, 73.633], [-97.38, 73.76], [-97.12, 73.47], [-98.054, 72.991], [-96.54, 72.56], [-96.72, 71.66], [-98.36, 71.273], [-99.323, 71.356], [-100.015, 71.738], [-102.5, 72.51], [-102.48, 72.83], [-100.438, 72.706]]], [[[-106.6, 73.6], [-105.26, 73.64], [-104.5, 73.42], [-105.38, 72.76], [-106.94, 73.46], [-106.6, 73.6]]], [[[-98.5, 76.72], [-97.736, 76.257], [-97.704, 75.743], [-98.16, 75], [-99.809, 74.897], [-100.884, 75.057], [-100.863, 75.641], [-102.502, 75.564], [-102.566, 76.337], [-101.49, 76.305], [-99.983, 76.646], [-98.577, 76.589], [-98.5, 76.72]]], [[[-96.016, 80.602], [-95.323, 80.907], [-94.298, 80.977], [-94.735, 81.206], [-92.41, 81.257], [-91.133, 80.723], [-89.45, 80.509], [-87.81, 80.32], [-87.02, 79.66], [-85.814, 79.337], [-87.188, 79.039], [-89.035, 78.287], [-90.804, 78.215], [-92.877, 78.343], [-93.951, 78.751], [-93.936, 79.114], [-93.145, 79.38], [-94.974, 79.372], [-96.076, 79.705], [-96.71, 80.158], [-96.016, 80.602]]], [[[-91.587, 81.894], [-90.1, 82.085], [-88.932, 82.118], [-86.97, 82.28], [-85.5, 82.652], [-84.26, 82.6], [-83.18, 82.32], [-82.42, 82.86], [-81.1, 83.02], [-79.307, 83.131], [-76.25, 83.172], [-75.719, 83.064], [-72.832, 83.233], [-70.666, 83.17], [-68.5, 83.106], [-65.827, 83.028], [-63.68, 82.9], [-61.85, 82.629], [-61.894, 82.362], [-64.334, 81.928], [-66.753, 81.725], [-67.658, 81.501], [-65.48, 81.507], [-67.84, 80.9], [-69.47, 80.617], [-71.18, 79.8], [-73.243, 79.634], [-73.88, 79.43], [-76.908, 79.323], [-75.529, 79.198], [-76.22, 79.019], [-75.393, 78.526], [-76.344, 78.183], [-77.889, 77.9], [-78.363, 77.509], [-79.76, 77.21], [-79.62, 76.983], [-77.911, 77.022], [-77.889, 76.778], [-80.561, 76.178], [-83.174, 76.454], [-86.112, 76.299], [-87.6, 76.42], [-89.491, 76.472], [-89.616, 76.952], [-87.767, 77.178], [-88.26, 77.9], [-87.65, 77.97], [-84.976, 77.539], [-86.34, 78.18], [-87.962, 78.372], [-87.152, 78.759], [-85.379, 78.997], [-85.095, 79.345], [-86.507, 79.736], [-86.932, 80.251], [-84.198, 80.208], [-83.409, 80.1], [-81.848, 80.464], [-84.1, 80.58], [-87.599, 80.516], [-89.367, 80.856], [-90.2, 81.26], [-91.368, 81.553], [-91.587, 81.894]]], [[[-75.216, 67.444], [-75.866, 67.149], [-76.987, 67.099], [-77.236, 67.588], [-76.812, 68.149], [-75.895, 68.287], [-75.115, 68.01], [-75.103, 67.582], [-75.216, 67.444]]], [[[-96.257, 69.49], [-95.648, 69.108], [-96.27, 68.757], [-97.617, 69.06], [-98.432, 68.951], [-99.797, 69.4], [-98.917, 69.71], [-98.218, 70.144], [-97.157, 69.86], [-96.557, 69.68], [-96.257, 69.49]]], [[[-64.519, 49.873], [-64.173, 49.957], [-62.858, 49.706], [-61.836, 49.289], [-61.806, 49.105], [-62.293, 49.087], [-63.589, 49.401], [-64.519, 49.873]]], [[[-64.015, 47.036], [-63.664, 46.55], [-62.939, 46.416], [-62.012, 46.443], [-62.504, 46.033], [-62.874, 45.968], [-64.143, 46.393], [-64.393, 46.727], [-64.015, 47.036]]]]
        },
        {
          N: "United States",
          I: "US",
          C: [[[[-155.402, 20.08], [-155.225, 19.993], [-155.062, 19.859], [-154.807, 19.509], [-154.831, 19.453], [-155.222, 19.24], [-155.542, 19.083], [-155.688, 18.916], [-155.937, 19.059], [-155.908, 19.339], [-156.073, 19.703], [-156.024, 19.814], [-155.85, 19.977], [-155.919, 20.174], [-155.861, 20.267], [-155.785, 20.249], [-155.402, 20.08]]], [[[-155.996, 20.764], [-156.079, 20.644], [-156.414, 20.572], [-156.587, 20.783], [-156.702, 20.864], [-156.711, 20.927], [-156.613, 21.012], [-156.257, 20.917], [-155.996, 20.764]]], [[[-156.758, 21.177], [-156.789, 21.069], [-157.325, 21.098], [-157.25, 21.22], [-156.758, 21.177]]], [[[-158.025, 21.717], [-157.942, 21.653], [-157.653, 21.322], [-157.707, 21.264], [-157.779, 21.277], [-158.127, 21.312], [-158.254, 21.539], [-158.293, 21.579], [-158.025, 21.717]]], [[[-159.366, 22.215], [-159.345, 21.982], [-159.464, 21.883], [-159.801, 22.065], [-159.749, 22.138], [-159.596, 22.236], [-159.366, 22.215]]], [[[-166.468, 60.384], [-165.674, 60.294], [-165.579, 59.91], [-166.193, 59.754], [-166.848, 59.941], [-167.455, 60.213], [-166.468, 60.384]]], [[[-153.229, 57.969], [-152.565, 57.901], [-152.141, 57.591], [-153.006, 57.116], [-154.005, 56.735], [-154.516, 56.993], [-154.671, 57.461], [-153.763, 57.817], [-153.229, 57.969]]], [[[-140.986, 69.712], [-140.986, 69.712], [-140.993, 66], [-140.998, 60.306], [-140.013, 60.277], [-139.039, 60], [-138.341, 59.562], [-137.452, 58.905], [-136.48, 59.464], [-135.476, 59.788], [-134.945, 59.271], [-134.271, 58.861], [-133.356, 58.41], [-132.73, 57.693], [-131.708, 56.552], [-130.008, 55.916], [-129.98, 55.285], [-130.536, 54.803], [-130.536, 54.803], [-130.536, 54.803], [-131.086, 55.179], [-131.967, 55.498], [-132.25, 56.37], [-133.539, 57.179], [-134.078, 58.123], [-135.038, 58.188], [-136.628, 58.212], [-137.8, 58.5], [-139.868, 59.538], [-140.825, 59.728], [-142.574, 60.084], [-143.959, 59.999], [-145.926, 60.459], [-147.114, 60.885], [-148.224, 60.673], [-148.018, 59.978], [-148.571, 59.914], [-149.728, 59.706], [-150.608, 59.368], [-151.716, 59.156], [-151.859, 59.745], [-151.41, 60.726], [-150.347, 61.034], [-150.621, 61.284], [-151.896, 60.727], [-152.578, 60.062], [-154.019, 59.35], [-153.288, 58.865], [-154.232, 58.146], [-155.307, 57.728], [-156.308, 57.423], [-156.556, 56.98], [-158.117, 56.464], [-158.433, 55.994], [-159.603, 55.567], [-160.29, 55.644], [-161.223, 55.365], [-162.238, 55.024], [-163.069, 54.69], [-164.786, 54.404], [-164.942, 54.572], [-163.848, 55.039], [-162.87, 55.348], [-161.804, 55.895], [-160.564, 56.008], [-160.071, 56.418], [-158.684, 57.017], [-158.461, 57.217], [-157.723, 57.57], [-157.55, 58.328], [-157.042, 58.919], [-158.195, 58.616], [-158.517, 58.788], [-159.059, 58.424], [-159.712, 58.931], [-159.981, 58.573], [-160.355, 59.071], [-161.355, 58.671], [-161.969, 58.672], [-162.055, 59.267], [-161.874, 59.634], [-162.518, 59.99], [-163.818, 59.798], [-164.662, 60.267], [-165.346, 60.507], [-165.351, 61.074], [-166.121, 61.5], [-165.734, 62.075], [-164.919, 62.633], [-164.563, 63.146], [-163.753, 63.219], [-163.067, 63.059], [-162.261, 63.542], [-161.534, 63.456], [-160.773, 63.766], [-160.958, 64.223], [-161.518, 64.403], [-160.778, 64.789], [-161.392, 64.777], [-162.453, 64.559], [-162.758, 64.339], [-163.546, 64.559], [-164.961, 64.447], [-166.425, 64.687], [-166.845, 65.089], [-168.111, 65.67], [-166.705, 66.088], [-164.475, 66.577], [-163.653, 66.577], [-163.789, 66.077], [-161.678, 66.116], [-162.49, 66.736], [-163.72, 67.116], [-164.431, 67.616], [-165.39, 68.043], [-166.764, 68.359], [-166.205, 68.883], [-164.431, 68.916], [-163.169, 69.371], [-162.931, 69.858], [-161.909, 70.333], [-160.935, 70.448], [-159.039, 70.892], [-158.12, 70.825], [-156.581, 71.358], [-155.068, 71.148], [-154.344, 70.696], [-153.9, 70.89], [-152.21, 70.83], [-152.27, 70.6], [-150.74, 70.43], [-149.72, 70.53], [-147.613, 70.214], [-145.69, 70.12], [-144.92, 69.99], [-143.589, 70.153], [-142.073, 69.852], [-140.986, 69.712], [-140.986, 69.712]]], [[[-171.732, 63.783], [-171.114, 63.592], [-170.491, 63.695], [-169.683, 63.431], [-168.689, 63.298], [-168.772, 63.189], [-169.529, 62.977], [-170.291, 63.194], [-170.671, 63.376], [-171.553, 63.318], [-171.791, 63.406], [-171.732, 63.783]]], [[[-122.84, 49], [-120, 49], [-117.031, 49], [-116.048, 49], [-113, 49], [-110.05, 49], [-107.05, 49], [-104.048, 49], [-100.65, 49], [-97.229, 49.001], [-95.159, 49], [-95.156, 49.384], [-94.818, 49.389], [-94.64, 48.84], [-94.329, 48.671], [-93.631, 48.609], [-92.61, 48.45], [-91.64, 48.14], [-90.83, 48.27], [-89.6, 48.01], [-89.273, 48.02], [-88.378, 48.303], [-87.44, 47.94], [-86.462, 47.553], [-85.652, 47.22], [-84.876, 46.9], [-84.779, 46.637], [-84.544, 46.539], [-84.605, 46.44], [-84.337, 46.409], [-84.142, 46.512], [-84.092, 46.275], [-83.891, 46.117], [-83.616, 46.117], [-83.47, 45.995], [-83.593, 45.817], [-82.551, 45.348], [-82.338, 44.44], [-82.138, 43.571], [-82.43, 42.98], [-82.9, 42.43], [-83.12, 42.08], [-83.142, 41.976], [-83.03, 41.833], [-82.69, 41.675], [-82.439, 41.675], [-81.278, 42.209], [-80.247, 42.366], [-78.939, 42.864], [-78.92, 42.965], [-79.01, 43.27], [-79.172, 43.466], [-78.72, 43.625], [-77.738, 43.629], [-76.82, 43.629], [-76.5, 44.018], [-76.375, 44.096], [-75.318, 44.816], [-74.867, 45], [-73.348, 45.007], [-71.505, 45.008], [-71.405, 45.255], [-71.085, 45.305], [-70.66, 45.46], [-70.305, 45.915], [-70, 46.693], [-69.237, 47.448], [-68.905, 47.185], [-68.234, 47.355], [-67.79, 47.066], [-67.791, 45.703], [-67.137, 45.138], [-66.965, 44.81], [-68.033, 44.325], [-69.06, 43.98], [-70.116, 43.684], [-70.645, 43.09], [-70.815, 42.865], [-70.825, 42.335], [-70.495, 41.805], [-70.08, 41.78], [-70.185, 42.145], [-69.885, 41.923], [-69.965, 41.637], [-70.64, 41.475], [-71.12, 41.494], [-71.86, 41.32], [-72.295, 41.27], [-72.876, 41.221], [-73.71, 40.931], [-72.241, 41.119], [-71.945, 40.93], [-73.345, 40.63], [-73.982, 40.628], [-73.952, 40.751], [-74.257, 40.474], [-73.962, 40.428], [-74.178, 39.709], [-74.906, 38.94], [-74.98, 39.196], [-75.2, 39.248], [-75.528, 39.498], [-75.32, 38.96], [-75.072, 38.782], [-75.057, 38.404], [-75.377, 38.016], [-75.94, 37.217], [-76.031, 37.257], [-75.722, 37.937], [-76.233, 38.319], [-76.35, 39.15], [-76.543, 38.718], [-76.329, 38.083], [-76.99, 38.24], [-76.302, 37.918], [-76.259, 36.966], [-75.972, 36.897], [-75.868, 36.551], [-75.727, 35.551], [-76.363, 34.809], [-77.398, 34.512], [-78.055, 33.925], [-78.554, 33.861], [-79.061, 33.494], [-79.204, 33.158], [-80.301, 32.509], [-80.865, 32.033], [-81.336, 31.44], [-81.49, 30.73], [-81.314, 30.036], [-80.98, 29.18], [-80.536, 28.472], [-80.53, 28.04], [-80.057, 26.88], [-80.088, 26.206], [-80.132, 25.817], [-80.381, 25.206], [-80.68, 25.08], [-81.172, 25.201], [-81.33, 25.64], [-81.71, 25.87], [-82.24, 26.73], [-82.705, 27.495], [-82.855, 27.886], [-82.65, 28.55], [-82.93, 29.1], [-83.71, 29.937], [-84.1, 30.09], [-85.109, 29.636], [-85.288, 29.686], [-85.773, 30.153], [-86.4, 30.4], [-87.53, 30.274], [-88.418, 30.385], [-89.18, 30.316], [-89.594, 30.16], [-89.414, 29.894], [-89.43, 29.489], [-89.218, 29.291], [-89.408, 29.16], [-89.779, 29.307], [-90.155, 29.117], [-90.88, 29.149], [-91.627, 29.677], [-92.499, 29.552], [-93.226, 29.784], [-93.848, 29.714], [-94.69, 29.48], [-95.6, 28.739], [-96.594, 28.307], [-97.14, 27.83], [-97.37, 27.38], [-97.38, 26.69], [-97.33, 26.21], [-97.14, 25.87], [-97.53, 25.84], [-98.24, 26.06], [-99.02, 26.37], [-99.3, 26.84], [-99.52, 27.54], [-100.11, 28.11], [-100.456, 28.696], [-100.958, 29.381], [-101.662, 29.779], [-102.48, 29.76], [-103.11, 28.97], [-103.94, 29.27], [-104.457, 29.572], [-104.706, 30.122], [-105.037, 30.644], [-105.632, 31.084], [-106.143, 31.4], [-106.508, 31.755], [-108.24, 31.755], [-108.242, 31.342], [-109.035, 31.342], [-111.024, 31.335], [-113.305, 32.039], [-114.815, 32.525], [-114.721, 32.721], [-115.991, 32.612], [-117.128, 32.535], [-117.296, 33.046], [-117.944, 33.621], [-118.411, 33.741], [-118.52, 34.028], [-119.081, 34.078], [-119.439, 34.348], [-120.368, 34.447], [-120.623, 34.609], [-120.744, 35.157], [-121.715, 36.162], [-122.547, 37.552], [-122.512, 37.783], [-122.953, 38.114], [-123.727, 38.952], [-123.865, 39.767], [-124.398, 40.313], [-124.179, 41.142], [-124.214, 42], [-124.533, 42.766], [-124.142, 43.708], [-124.021, 44.616], [-123.899, 45.523], [-124.08, 46.865], [-124.396, 47.72], [-124.687, 48.184], [-124.566, 48.38], [-123.12, 48.04], [-122.587, 47.096], [-122.34, 47.36], [-122.5, 48.18], [-122.84, 49]]]]
        },
        {
          N: "Kazakhstan",
          I: "KZ",
          C: [[[[87.36, 49.215], [86.599, 48.549], [85.768, 48.456], [85.72, 47.453], [85.164, 47.001], [83.18, 47.33], [82.459, 45.54], [81.947, 45.317], [79.966, 44.918], [80.866, 43.18], [80.18, 42.92], [80.26, 42.35], [79.644, 42.497], [79.142, 42.856], [77.658, 42.961], [76, 42.988], [75.637, 42.878], [74.213, 43.298], [73.645, 43.091], [73.49, 42.501], [71.845, 42.845], [71.186, 42.704], [70.962, 42.266], [70.389, 42.081], [69.07, 41.384], [68.632, 40.669], [68.26, 40.662], [67.986, 41.136], [66.714, 41.168], [66.511, 41.988], [66.023, 41.995], [66.098, 42.998], [64.901, 43.728], [63.186, 43.65], [62.013, 43.504], [61.058, 44.406], [60.24, 44.784], [58.69, 45.5], [58.503, 45.587], [55.929, 44.996], [55.968, 41.309], [55.455, 41.26], [54.755, 42.044], [54.079, 42.324], [52.944, 42.116], [52.502, 41.783], [52.446, 42.027], [52.692, 42.444], [52.501, 42.792], [51.342, 43.133], [50.891, 44.031], [50.339, 44.284], [50.306, 44.61], [51.279, 44.515], [51.317, 45.246], [52.167, 45.408], [53.041, 45.259], [53.221, 46.235], [53.043, 46.853], [52.042, 46.805], [51.192, 47.049], [50.034, 46.609], [49.101, 46.399], [48.593, 46.561], [48.695, 47.076], [48.057, 47.744], [47.315, 47.716], [46.466, 48.394], [47.044, 49.152], [46.752, 49.356], [47.549, 50.455], [48.578, 49.875], [48.702, 50.605], [50.767, 51.693], [52.329, 51.719], [54.533, 51.026], [55.717, 50.622], [56.778, 51.044], [58.363, 51.064], [59.642, 50.545], [59.933, 50.842], [61.337, 50.799], [61.588, 51.273], [59.968, 51.96], [60.927, 52.448], [60.74, 52.72], [61.7, 52.98], [60.978, 53.665], [61.437, 54.006], [65.179, 54.354], [65.667, 54.601], [68.169, 54.97], [69.068, 55.385], [70.865, 55.17], [71.18, 54.133], [72.224, 54.377], [73.509, 54.036], [73.426, 53.49], [74.385, 53.547], [76.891, 54.491], [76.525, 54.177], [77.801, 53.404], [80.036, 50.865], [80.568, 51.388], [81.946, 50.812], [83.383, 51.069], [83.935, 50.889], [84.416, 50.311], [85.116, 50.117], [85.541, 49.693], [86.829, 49.827], [87.36, 49.215]]]]
        },
        {
          N: "Uzbekistan",
          I: "UZ",
          C: [[[[55.968, 41.309], [55.929, 44.996], [58.503, 45.587], [58.69, 45.5], [60.24, 44.784], [61.058, 44.406], [62.013, 43.504], [63.186, 43.65], [64.901, 43.728], [66.098, 42.998], [66.023, 41.995], [66.511, 41.988], [66.714, 41.168], [67.986, 41.136], [68.26, 40.662], [68.632, 40.669], [69.07, 41.384], [70.389, 42.081], [70.962, 42.266], [71.259, 42.168], [70.42, 41.52], [71.158, 41.144], [71.87, 41.393], [73.055, 40.866], [71.775, 40.146], [71.014, 40.244], [70.601, 40.219], [70.458, 40.496], [70.667, 40.96], [69.329, 40.728], [69.012, 40.086], [68.536, 39.533], [67.701, 39.58], [67.442, 39.14], [68.176, 38.902], [68.392, 38.157], [67.83, 37.145], [67.076, 37.356], [66.519, 37.363], [66.546, 37.975], [65.216, 38.403], [64.17, 38.892], [63.518, 39.363], [62.374, 40.054], [61.883, 41.085], [61.547, 41.266], [60.466, 41.22], [60.083, 41.425], [59.976, 42.223], [58.629, 42.752], [57.787, 42.171], [56.932, 41.826], [57.096, 41.322], [55.968, 41.309]]]]
        },
        {
          N: "Papua New Guinea",
          I: "PG",
          C: [[[[141, -2.6], [142.735, -3.289], [144.584, -3.861], [145.273, -4.374], [145.83, -4.876], [145.982, -5.466], [147.648, -6.084], [147.891, -6.614], [146.971, -6.722], [147.192, -7.388], [148.085, -8.044], [148.734, -9.105], [149.307, -9.071], [149.267, -9.514], [150.039, -9.684], [149.739, -9.873], [150.802, -10.294], [150.691, -10.583], [150.028, -10.652], [149.782, -10.393], [148.923, -10.281], [147.913, -10.13], [147.135, -9.492], [146.568, -8.943], [146.048, -8.067], [144.744, -7.63], [143.897, -7.915], [143.286, -8.245], [143.414, -8.983], [142.628, -9.327], [142.068, -9.16], [141.034, -9.118], [141.017, -5.859], [141, -2.6]]], [[[152.64, -3.66], [153.02, -3.98], [153.14, -4.5], [152.827, -4.766], [152.639, -4.176], [152.406, -3.79], [151.953, -3.462], [151.384, -3.035], [150.662, -2.741], [150.94, -2.5], [151.48, -2.78], [151.82, -3], [152.24, -3.24], [152.64, -3.66]]], [[[151.301, -5.841], [150.754, -6.084], [150.241, -6.318], [149.71, -6.317], [148.89, -6.026], [148.319, -5.747], [148.402, -5.438], [149.298, -5.584], [149.846, -5.506], [149.996, -5.026], [150.14, -5.001], [150.237, -5.532], [150.807, -5.456], [151.09, -5.114], [151.648, -4.757], [151.538, -4.168], [152.137, -4.149], [152.339, -4.313], [152.319, -4.868], [151.983, -5.478], [151.459, -5.56], [151.301, -5.841]]], [[[154.76, -5.34], [155.063, -5.567], [155.548, -6.201], [156.02, -6.54], [155.88, -6.82], [155.6, -6.92], [155.167, -6.536], [154.729, -5.901], [154.514, -5.139], [154.653, -5.042], [154.76, -5.34]]]]
        },
        {
          N: "Indonesia",
          I: "ID",
          C: [[[[141, -2.6], [141.017, -5.859], [141.034, -9.118], [140.143, -8.297], [139.128, -8.096], [138.881, -8.381], [137.614, -8.412], [138.039, -7.598], [138.669, -7.32], [138.408, -6.233], [137.928, -5.393], [135.989, -4.547], [135.165, -4.463], [133.663, -3.539], [133.368, -4.025], [132.984, -4.113], [132.757, -3.746], [132.754, -3.312], [131.99, -2.821], [133.067, -2.46], [133.78, -2.48], [133.696, -2.215], [132.232, -2.213], [131.836, -1.617], [130.943, -1.433], [130.52, -0.938], [131.868, -0.695], [132.38, -0.37], [133.986, -0.78], [134.143, -1.152], [134.423, -2.769], [135.458, -3.368], [136.293, -2.307], [137.441, -1.704], [138.33, -1.703], [139.185, -2.051], [139.927, -2.409], [141, -2.6]]], [[[124.969, -8.893], [125.07, -9.09], [125.089, -9.393], [124.436, -10.14], [123.58, -10.36], [123.46, -10.24], [123.55, -9.9], [123.98, -9.29], [124.969, -8.893]]], [[[134.21, -6.895], [134.113, -6.142], [134.29, -5.783], [134.5, -5.445], [134.727, -5.738], [134.725, -6.214], [134.21, -6.895]]], [[[117.882, 4.138], [117.313, 3.234], [118.048, 2.288], [117.876, 1.828], [118.997, 0.902], [117.812, 0.784], [117.478, 0.102], [117.522, -0.804], [116.56, -1.488], [116.534, -2.484], [116.148, -4.013], [116.001, -3.657], [114.865, -4.107], [114.469, -3.496], [113.756, -3.439], [113.257, -3.119], [112.068, -3.478], [111.703, -2.994], [111.048, -3.049], [110.224, -2.934], [110.071, -1.593], [109.572, -1.315], [109.092, -0.46], [108.953, 0.415], [109.069, 1.342], [109.663, 2.006], [109.83, 1.338], [110.514, 0.773], [111.159, 0.976], [111.798, 0.904], [112.38, 1.41], [112.86, 1.498], [113.806, 1.218], [114.621, 1.431], [115.134, 2.821], [115.519, 3.169], [115.866, 4.307], [117.015, 4.306], [117.882, 4.138]]], [[[129.371, -2.802], [130.471, -3.094], [130.835, -3.858], [129.991, -3.446], [129.155, -3.363], [128.591, -3.429], [127.899, -3.393], [128.136, -2.844], [129.371, -2.802]]], [[[126.875, -3.791], [126.184, -3.607], [125.989, -3.177], [127.001, -3.129], [127.249, -3.459], [126.875, -3.791]]], [[[127.932, 2.175], [128.004, 1.629], [128.595, 1.541], [128.688, 1.132], [128.636, 0.258], [128.12, 0.356], [127.968, -0.252], [128.38, -0.78], [128.1, -0.9], [127.696, -0.267], [127.399, 1.012], [127.601, 1.811], [127.932, 2.175]]], [[[122.928, 0.875], [124.078, 0.917], [125.066, 1.643], [125.241, 1.42], [124.437, 0.428], [123.686, 0.236], [122.723, 0.431], [121.057, 0.381], [120.183, 0.237], [120.041, -0.52], [120.936, -1.409], [121.476, -0.956], [123.341, -0.616], [123.258, -1.076], [122.823, -0.931], [122.389, -1.517], [121.508, -1.904], [122.455, -3.186], [122.272, -3.53], [123.171, -4.684], [123.162, -5.341], [122.629, -5.635], [122.236, -5.283], [122.72, -4.464], [121.738, -4.851], [121.489, -4.575], [121.619, -4.188], [120.898, -3.602], [120.972, -2.628], [120.305, -2.932], [120.39, -4.098], [120.431, -5.528], [119.797, -5.673], [119.367, -5.38], [119.654, -4.459], [119.499, -3.494], [119.078, -3.487], [118.768, -2.802], [119.181, -2.147], [119.323, -1.353], [119.826, 0.154], [120.036, 0.566], [120.886, 1.309], [121.667, 1.014], [122.928, 0.875]]], [[[120.295, -10.259], [118.968, -9.558], [119.9, -9.361], [120.426, -9.666], [120.776, -9.97], [120.716, -10.24], [120.295, -10.259]]], [[[121.342, -8.537], [122.007, -8.461], [122.904, -8.094], [122.757, -8.65], [121.254, -8.934], [119.924, -8.81], [119.921, -8.445], [120.715, -8.237], [121.342, -8.537]]], [[[118.261, -8.362], [118.878, -8.281], [119.127, -8.706], [117.97, -8.907], [117.278, -9.041], [116.74, -9.033], [117.084, -8.457], [117.632, -8.449], [117.9, -8.096], [118.261, -8.362]]], [[[108.487, -6.422], [108.623, -6.778], [110.539, -6.877], [110.76, -6.465], [112.615, -6.946], [112.979, -7.594], [114.479, -7.777], [115.706, -8.371], [114.565, -8.752], [113.465, -8.349], [112.56, -8.376], [111.522, -8.302], [110.586, -8.123], [109.428, -7.741], [108.694, -7.642], [108.278, -7.767], [106.454, -7.355], [106.281, -6.925], [105.365, -6.851], [106.052, -5.896], [107.265, -5.955], [108.072, -6.346], [108.487, -6.422]]], [[[104.37, -1.085], [104.539, -1.782], [104.888, -2.34], [105.622, -2.429], [106.109, -3.062], [105.857, -4.306], [105.818, -5.852], [104.71, -5.873], [103.868, -5.037], [102.584, -4.22], [102.156, -3.614], [101.399, -2.8], [100.903, -2.05], [100.142, -0.65], [99.264, 0.183], [98.97, 1.043], [98.601, 1.824], [97.7, 2.453], [97.177, 3.309], [96.424, 3.869], [95.381, 4.971], [95.293, 5.48], [95.937, 5.44], [97.485, 5.246], [98.369, 4.268], [99.143, 3.59], [99.694, 3.174], [100.641, 2.099], [101.658, 2.084], [102.498, 1.399], [103.077, 0.561], [103.838, 0.105], [103.438, -0.712], [104.011, -1.059], [104.37, -1.085]]]]
        },
        {
          N: "Argentina",
          I: "AR",
          C: [[[[-68.634, -52.636], [-68.25, -53.1], [-67.75, -53.85], [-66.45, -54.45], [-65.05, -54.7], [-65.5, -55.2], [-66.45, -55.25], [-66.96, -54.897], [-67.562, -54.87], [-68.633, -54.87], [-68.634, -52.636]]], [[[-57.625, -30.216], [-57.875, -31.017], [-58.142, -32.045], [-58.133, -33.041], [-58.35, -33.263], [-58.427, -33.909], [-58.495, -34.431], [-57.226, -35.288], [-57.362, -35.977], [-56.737, -36.413], [-56.788, -36.902], [-57.749, -38.184], [-59.232, -38.72], [-61.237, -38.928], [-62.336, -38.828], [-62.126, -39.424], [-62.331, -40.173], [-62.146, -40.677], [-62.746, -41.029], [-63.77, -41.167], [-64.732, -40.803], [-65.118, -41.064], [-64.979, -42.058], [-64.303, -42.359], [-63.756, -42.044], [-63.458, -42.563], [-64.379, -42.874], [-65.182, -43.495], [-65.329, -44.501], [-65.565, -45.037], [-66.51, -45.04], [-67.294, -45.552], [-67.581, -46.302], [-66.597, -47.034], [-65.641, -47.236], [-65.985, -48.133], [-67.166, -48.697], [-67.816, -49.87], [-68.729, -50.264], [-69.139, -50.733], [-68.816, -51.771], [-68.15, -52.35], [-68.572, -52.299], [-69.498, -52.143], [-71.915, -52.009], [-72.329, -51.426], [-72.31, -50.677], [-72.976, -50.741], [-73.328, -50.379], [-73.415, -49.318], [-72.648, -48.879], [-72.331, -48.244], [-72.447, -47.739], [-71.917, -46.885], [-71.552, -45.561], [-71.659, -44.974], [-71.223, -44.784], [-71.33, -44.408], [-71.794, -44.207], [-71.464, -43.788], [-71.915, -43.409], [-72.149, -42.255], [-71.747, -42.051], [-71.916, -40.832], [-71.681, -39.808], [-71.414, -38.916], [-70.815, -38.553], [-71.119, -37.577], [-71.122, -36.658], [-70.365, -36.005], [-70.388, -35.17], [-69.817, -34.194], [-69.815, -33.274], [-70.074, -33.091], [-70.535, -31.365], [-69.919, -30.336], [-70.014, -29.368], [-69.656, -28.459], [-69.001, -27.521], [-68.296, -26.899], [-68.595, -26.507], [-68.386, -26.185], [-68.418, -24.519], [-67.328, -24.025], [-66.985, -22.986], [-67.107, -22.736], [-66.273, -21.832], [-64.965, -22.076], [-64.377, -22.798], [-63.987, -21.994], [-62.846, -22.035], [-62.685, -22.249], [-60.847, -23.881], [-60.029, -24.033], [-58.807, -24.771], [-57.777, -25.162], [-57.634, -25.604], [-58.618, -27.124], [-57.61, -27.396], [-56.487, -27.548], [-55.696, -27.388], [-54.789, -26.622], [-54.625, -25.739], [-54.13, -25.548], [-53.628, -26.125], [-53.649, -26.923], [-54.491, -27.475], [-55.162, -27.882], [-56.291, -28.853], [-57.625, -30.216]]]]
        },
        {
          N: "Chile",
          I: "CL",
          C: [[[[-68.634, -52.636], [-68.633, -54.87], [-67.562, -54.87], [-66.96, -54.897], [-67.291, -55.301], [-68.149, -55.612], [-68.64, -55.58], [-69.232, -55.499], [-69.958, -55.198], [-71.006, -55.054], [-72.264, -54.495], [-73.285, -53.958], [-74.663, -52.837], [-73.838, -53.047], [-72.434, -53.715], [-71.108, -54.074], [-70.592, -53.616], [-70.267, -52.931], [-69.346, -52.518], [-68.634, -52.636]]], [[[-69.59, -17.58], [-69.1, -18.26], [-68.967, -18.982], [-68.442, -19.405], [-68.757, -20.373], [-68.22, -21.494], [-67.828, -22.873], [-67.107, -22.736], [-66.985, -22.986], [-67.328, -24.025], [-68.418, -24.519], [-68.386, -26.185], [-68.595, -26.507], [-68.296, -26.899], [-69.001, -27.521], [-69.656, -28.459], [-70.014, -29.368], [-69.919, -30.336], [-70.535, -31.365], [-70.074, -33.091], [-69.815, -33.274], [-69.817, -34.194], [-70.388, -35.17], [-70.365, -36.005], [-71.122, -36.658], [-71.119, -37.577], [-70.815, -38.553], [-71.414, -38.916], [-71.681, -39.808], [-71.916, -40.832], [-71.747, -42.051], [-72.149, -42.255], [-71.915, -43.409], [-71.464, -43.788], [-71.794, -44.207], [-71.33, -44.408], [-71.223, -44.784], [-71.659, -44.974], [-71.552, -45.561], [-71.917, -46.885], [-72.447, -47.739], [-72.331, -48.244], [-72.648, -48.879], [-73.415, -49.318], [-73.328, -50.379], [-72.976, -50.741], [-72.31, -50.677], [-72.329, -51.426], [-71.915, -52.009], [-69.498, -52.143], [-68.572, -52.299], [-69.461, -52.292], [-69.943, -52.538], [-70.845, -52.899], [-71.006, -53.833], [-71.43, -53.856], [-72.558, -53.531], [-73.703, -52.835], [-73.703, -52.835], [-74.947, -52.263], [-75.26, -51.629], [-74.977, -51.043], [-75.48, -50.378], [-75.608, -48.674], [-75.183, -47.712], [-74.127, -46.939], [-75.644, -46.648], [-74.692, -45.764], [-74.352, -44.103], [-73.24, -44.455], [-72.718, -42.383], [-73.389, -42.118], [-73.701, -43.366], [-74.332, -43.225], [-74.018, -41.795], [-73.677, -39.942], [-73.218, -39.259], [-73.506, -38.283], [-73.588, -37.156], [-73.167, -37.124], [-72.553, -35.509], [-71.862, -33.909], [-71.438, -32.419], [-71.669, -30.921], [-71.37, -30.096], [-71.49, -28.861], [-70.905, -27.64], [-70.725, -25.706], [-70.404, -23.629], [-70.091, -21.393], [-70.164, -19.756], [-70.373, -18.348], [-69.858, -18.093], [-69.59, -17.58]]]]
        },
        {
          N: "Democratic Republic of the Congo",
          I: "CD",
          C: [[[[29.34, -4.5], [29.52, -5.42], [29.42, -5.94], [29.62, -6.52], [30.2, -7.08], [30.74, -8.34], [30.74, -8.34], [30.346, -8.238], [29.003, -8.407], [28.735, -8.527], [28.45, -9.165], [28.674, -9.606], [28.496, -10.79], [28.372, -11.794], [28.642, -11.972], [29.342, -12.361], [29.616, -12.179], [29.7, -13.257], [28.934, -13.249], [28.524, -12.699], [28.155, -12.272], [27.389, -12.133], [27.164, -11.609], [26.553, -11.924], [25.752, -11.785], [25.418, -11.331], [24.783, -11.239], [24.315, -11.263], [24.257, -10.952], [23.912, -10.927], [23.457, -10.868], [22.837, -11.018], [22.403, -10.993], [22.155, -11.085], [22.209, -9.895], [21.875, -9.524], [21.802, -8.909], [21.949, -8.306], [21.746, -7.92], [21.728, -7.291], [20.515, -7.3], [20.602, -6.939], [20.092, -6.943], [20.038, -7.116], [19.418, -7.155], [19.167, -7.738], [19.017, -7.988], [18.464, -7.847], [18.134, -7.988], [17.473, -8.069], [17.09, -7.546], [16.86, -7.222], [16.573, -6.623], [16.327, -5.877], [13.376, -5.864], [13.025, -5.984], [12.735, -5.966], [12.322, -6.1], [12.182, -5.79], [12.437, -5.684], [12.468, -5.248], [12.632, -4.991], [12.996, -4.781], [13.258, -4.883], [13.6, -4.5], [14.145, -4.51], [14.209, -4.793], [14.583, -4.97], [15.171, -4.344], [15.754, -3.855], [16.006, -3.535], [15.973, -2.712], [16.407, -1.741], [16.865, -1.226], [17.524, -0.744], [17.639, -0.425], [17.664, -0.058], [17.827, 0.289], [17.774, 0.856], [17.899, 1.742], [18.094, 2.366], [18.394, 2.9], [18.453, 3.504], [18.543, 4.202], [18.932, 4.71], [19.468, 5.032], [20.291, 4.692], [20.928, 4.323], [21.659, 4.224], [22.405, 4.029], [22.704, 4.633], [22.841, 4.71], [23.297, 4.61], [24.411, 5.109], [24.805, 4.897], [25.129, 4.927], [25.279, 5.17], [25.65, 5.256], [26.403, 5.151], [27.044, 5.128], [27.374, 5.234], [27.98, 4.408], [28.429, 4.287], [28.697, 4.455], [29.159, 4.389], [29.716, 4.601], [29.954, 4.174], [30.834, 3.509], [30.834, 3.509], [30.773, 2.34], [31.174, 2.204], [30.853, 1.849], [30.469, 1.584], [30.086, 1.062], [29.876, 0.597], [29.82, -0.205], [29.588, -0.587], [29.579, -1.341], [29.292, -1.62], [29.255, -2.215], [29.117, -2.292], [29.025, -2.839], [29.276, -3.294], [29.34, -4.5]]]]
        },
        {
          N: "Somalia",
          I: "SO",
          C: [[[[41.585, -1.683], [40.993, -0.858], [40.981, 2.785], [41.855, 3.919], [42.129, 4.234], [42.77, 4.253], [43.661, 4.958], [44.964, 5.002], [47.789, 8.003], [48.487, 8.838], [48.938, 9.452], [48.938, 9.974], [48.938, 10.982], [48.942, 11.394], [48.948, 11.411], [48.948, 11.411], [49.268, 11.43], [49.729, 11.579], [50.259, 11.68], [50.732, 12.022], [51.111, 12.025], [51.134, 11.748], [51.042, 11.167], [51.045, 10.641], [50.834, 10.28], [50.552, 9.199], [50.071, 8.082], [49.453, 6.805], [48.595, 5.339], [47.741, 4.219], [46.565, 2.855], [45.564, 2.046], [44.068, 1.053], [43.136, 0.292], [42.042, -0.919], [41.811, -1.446], [41.585, -1.683]]]]
        },
        {
          N: "Kenya",
          I: "KE",
          C: [[[[39.202, -4.677], [37.767, -3.677], [37.699, -3.097], [34.073, -1.06], [33.904, -0.95], [33.894, 0.11], [34.18, 0.515], [34.672, 1.177], [35.036, 1.906], [34.596, 3.054], [34.479, 3.556], [34.005, 4.25], [34.62, 4.847], [35.298, 5.506], [35.817, 5.338], [35.817, 4.777], [36.159, 4.448], [36.855, 4.448], [38.121, 3.599], [38.437, 3.589], [38.671, 3.616], [38.893, 3.501], [39.559, 3.422], [39.855, 3.839], [40.768, 4.257], [41.172, 3.919], [41.855, 3.919], [40.981, 2.785], [40.993, -0.858], [41.585, -1.683], [40.885, -2.083], [40.638, -2.5], [40.263, -2.573], [40.121, -3.278], [39.8, -3.681], [39.605, -4.347], [39.202, -4.677]]]]
        },
        {
          N: "Sudan",
          I: "SD",
          C: [[[[24.567, 8.229], [23.806, 8.666], [23.459, 8.954], [23.395, 9.265], [23.557, 9.681], [23.554, 10.089], [22.978, 10.714], [22.864, 11.142], [22.876, 11.385], [22.509, 11.679], [22.498, 12.26], [22.288, 12.646], [21.937, 12.588], [22.038, 12.955], [22.297, 13.372], [22.183, 13.786], [22.512, 14.093], [22.304, 14.327], [22.568, 14.944], [23.025, 15.681], [23.887, 15.611], [23.838, 19.58], [23.85, 20], [25, 20.003], [25, 22], [29.02, 22], [32.9, 22], [36.866, 22], [37.189, 21.019], [36.969, 20.837], [37.115, 19.808], [37.482, 18.614], [37.863, 18.368], [38.41, 17.998], [37.904, 17.428], [37.167, 17.263], [36.853, 16.957], [36.754, 16.292], [36.323, 14.822], [36.43, 14.422], [36.27, 13.563], [35.864, 12.578], [35.26, 12.083], [34.832, 11.319], [34.731, 10.91], [34.257, 10.63], [33.962, 9.584], [33.975, 8.685], [33.963, 9.464], [33.825, 9.484], [33.842, 9.982], [33.722, 10.325], [33.207, 10.72], [33.087, 11.441], [33.207, 12.179], [32.743, 12.248], [32.675, 12.025], [32.074, 11.973], [32.314, 11.681], [32.4, 11.081], [31.851, 10.531], [31.353, 9.81], [30.838, 9.707], [29.997, 10.291], [29.619, 10.085], [29.516, 9.793], [29.001, 9.604], [28.967, 9.398], [27.971, 9.398], [27.834, 9.604], [27.113, 9.639], [26.752, 9.467], [26.477, 9.553], [25.962, 10.136], [25.791, 10.411], [25.07, 10.274], [24.795, 9.81], [24.537, 8.918], [24.194, 8.729], [23.887, 8.62], [24.567, 8.229]]]]
        },
        {
          N: "Chad",
          I: "TD",
          C: [[[[23.838, 19.58], [23.887, 15.611], [23.025, 15.681], [22.568, 14.944], [22.304, 14.327], [22.512, 14.093], [22.183, 13.786], [22.297, 13.372], [22.038, 12.955], [21.937, 12.588], [22.288, 12.646], [22.498, 12.26], [22.509, 11.679], [22.876, 11.385], [22.864, 11.142], [22.231, 10.972], [21.724, 10.567], [21.001, 9.476], [20.06, 9.013], [19.094, 9.075], [18.812, 8.983], [18.911, 8.631], [18.39, 8.281], [17.965, 7.891], [16.706, 7.508], [16.456, 7.735], [16.291, 7.754], [16.106, 7.497], [15.279, 7.422], [15.436, 7.693], [15.121, 8.382], [14.98, 8.796], [14.544, 8.966], [13.954, 9.549], [14.171, 10.021], [14.627, 9.921], [14.909, 9.992], [15.468, 9.982], [14.924, 10.891], [14.96, 11.556], [14.893, 12.219], [14.496, 12.859], [14.596, 13.33], [13.954, 13.353], [13.957, 13.997], [13.54, 14.367], [13.972, 15.684], [15.248, 16.627], [15.3, 17.928], [15.686, 19.957], [15.903, 20.388], [15.487, 20.73], [15.471, 21.048], [15.097, 21.309], [14.851, 22.863], [15.861, 23.41], [19.849, 21.495], [23.838, 19.58]]]]
        },
        {
          N: "Haiti",
          I: "HT",
          C: [[[[-71.712, 19.714], [-71.625, 19.17], [-71.701, 18.785], [-71.945, 18.617], [-71.688, 18.317], [-71.708, 18.045], [-72.372, 18.215], [-72.844, 18.146], [-73.455, 18.218], [-73.922, 18.031], [-74.458, 18.343], [-74.37, 18.665], [-73.45, 18.526], [-72.695, 18.446], [-72.335, 18.668], [-72.792, 19.102], [-72.784, 19.484], [-73.415, 19.64], [-73.19, 19.916], [-72.58, 19.872], [-71.712, 19.714]]]]
        },
        {
          N: "Dominican Republic",
          I: "DO",
          C: [[[[-71.708, 18.045], [-71.688, 18.317], [-71.945, 18.617], [-71.701, 18.785], [-71.625, 19.17], [-71.712, 19.714], [-71.587, 19.885], [-70.807, 19.88], [-70.214, 19.623], [-69.951, 19.648], [-69.769, 19.293], [-69.222, 19.313], [-69.254, 19.015], [-68.809, 18.979], [-68.318, 18.612], [-68.689, 18.205], [-69.165, 18.423], [-69.624, 18.381], [-69.953, 18.428], [-70.133, 18.246], [-70.517, 18.184], [-70.669, 18.427], [-71, 18.283], [-71.4, 17.599], [-71.658, 17.758], [-71.708, 18.045]]]]
        },
        {
          N: "Russia",
          I: "RU",
          C: [[[[178.725, 71.099], [180, 71.516], [180, 70.832], [178.903, 70.781], [178.725, 71.099]]], [[[93.778, 81.025], [95.941, 81.25], [97.884, 80.747], [100.187, 79.78], [99.94, 78.881], [97.758, 78.756], [94.973, 79.045], [93.313, 79.427], [92.545, 80.144], [91.181, 80.341], [93.778, 81.025]]], [[[102.838, 79.281], [105.372, 78.713], [105.075, 78.307], [99.438, 77.921], [101.265, 79.234], [102.086, 79.346], [102.838, 79.281]]], [[[138.831, 76.137], [141.472, 76.093], [145.086, 75.563], [144.3, 74.82], [140.614, 74.848], [138.955, 74.611], [136.974, 75.262], [137.512, 75.949], [138.831, 76.137]]], [[[148.222, 75.346], [150.732, 75.084], [149.576, 74.689], [147.977, 74.778], [146.119, 75.173], [146.358, 75.497], [148.222, 75.346]]], [[[139.863, 73.37], [140.812, 73.765], [142.062, 73.858], [143.483, 73.475], [143.604, 73.212], [142.088, 73.205], [140.038, 73.317], [139.863, 73.37]]], [[[44.847, 80.59], [46.799, 80.772], [48.318, 80.784], [48.523, 80.515], [49.097, 80.754], [50.04, 80.919], [51.523, 80.7], [51.136, 80.547], [49.794, 80.415], [48.894, 80.34], [48.755, 80.175], [47.586, 80.01], [46.503, 80.247], [47.072, 80.559], [44.847, 80.59]]], [[[22.731, 54.328], [20.892, 54.313], [19.661, 54.426], [19.888, 54.866], [21.268, 55.19], [22.316, 55.015], [22.758, 54.857], [22.651, 54.583], [22.731, 54.328]]], [[[53.508, 73.75], [55.902, 74.627], [55.632, 75.081], [57.869, 75.609], [61.17, 76.252], [64.498, 76.439], [66.211, 76.81], [68.157, 76.94], [68.852, 76.545], [68.181, 76.234], [64.637, 75.738], [61.584, 75.261], [58.477, 74.309], [56.987, 73.333], [55.419, 72.371], [55.623, 71.541], [57.536, 70.72], [56.945, 70.633], [53.677, 70.763], [53.412, 71.207], [51.602, 71.475], [51.456, 72.015], [52.478, 72.229], [52.444, 72.775], [54.428, 73.628], [53.508, 73.75]]], [[[142.915, 53.705], [143.261, 52.741], [143.235, 51.757], [143.648, 50.748], [144.654, 48.976], [143.174, 49.307], [142.559, 47.862], [143.533, 46.837], [143.505, 46.138], [142.748, 46.741], [142.092, 45.967], [141.907, 46.806], [142.018, 47.78], [141.904, 48.859], [142.136, 49.615], [142.18, 50.952], [141.594, 51.935], [141.683, 53.302], [142.607, 53.762], [142.21, 54.225], [142.655, 54.366], [142.915, 53.705]]], [[[-174.928, 67.206], [-175.014, 66.584], [-174.34, 66.336], [-174.572, 67.062], [-171.857, 66.913], [-169.9, 65.977], [-170.891, 65.541], [-172.53, 65.438], [-172.555, 64.461], [-172.955, 64.253], [-173.892, 64.283], [-174.654, 64.631], [-175.984, 64.923], [-176.207, 65.357], [-177.223, 65.52], [-178.36, 65.391], [-178.903, 65.74], [-178.686, 66.112], [-179.884, 65.875], [-179.433, 65.404], [-180, 64.98], [-180, 68.964], [-177.55, 68.2], [-174.928, 67.206]]], [[[-178.694, 70.893], [-180, 70.832], [-180, 71.516], [-179.872, 71.558], [-179.024, 71.556], [-177.578, 71.269], [-177.664, 71.133], [-178.694, 70.893]]], [[[49.101, 46.399], [48.645, 45.806], [47.676, 45.641], [46.682, 44.609], [47.591, 43.66], [47.493, 42.987], [48.584, 41.809], [48.584, 41.809], [47.987, 41.406], [47.816, 41.151], [47.373, 41.22], [46.686, 41.827], [46.405, 41.861], [45.776, 42.092], [45.47, 42.503], [44.538, 42.712], [43.931, 42.555], [43.756, 42.741], [42.394, 43.22], [40.922, 43.382], [40.077, 43.553], [39.955, 43.435], [38.68, 44.28], [37.539, 44.657], [36.675, 45.245], [37.403, 45.405], [38.233, 46.241], [37.674, 46.637], [39.148, 47.045], [39.121, 47.263], [38.224, 47.102], [38.255, 47.546], [38.771, 47.826], [39.738, 47.899], [39.896, 48.232], [39.675, 48.784], [40.081, 49.307], [40.069, 49.601], [38.595, 49.926], [38.011, 49.916], [37.393, 50.384], [36.626, 50.226], [35.356, 50.577], [35.378, 50.774], [35.022, 51.208], [34.225, 51.256], [34.142, 51.566], [34.392, 51.769], [33.753, 52.335], [32.716, 52.238], [32.412, 52.289], [32.159, 52.061], [31.786, 52.102], [31.786, 52.102], [31.54, 52.742], [31.305, 53.074], [31.498, 53.167], [32.305, 53.133], [32.694, 53.351], [32.406, 53.618], [31.731, 53.794], [31.791, 53.975], [31.384, 54.157], [30.758, 54.812], [30.972, 55.082], [30.874, 55.551], [29.896, 55.789], [29.372, 55.67], [29.23, 55.918], [28.177, 56.169], [27.855, 56.759], [27.77, 57.244], [27.288, 57.475], [27.717, 57.792], [27.42, 58.725], [28.132, 59.301], [27.981, 59.475], [27.981, 59.475], [29.118, 60.028], [28.07, 60.504], [28.07, 60.504], [30.211, 61.78], [31.14, 62.358], [31.516, 62.868], [30.036, 63.553], [30.445, 64.204], [29.544, 64.949], [30.218, 65.806], [29.055, 66.944], [29.977, 67.698], [28.446, 68.365], [28.592, 69.065], [29.4, 69.157], [31.101, 69.558], [31.101, 69.558], [32.133, 69.906], [33.775, 69.301], [36.514, 69.063], [40.292, 67.932], [41.06, 67.457], [41.126, 66.792], [40.016, 66.266], [38.383, 66], [33.919, 66.76], [33.184, 66.633], [34.815, 65.9], [34.879, 65.436], [34.944, 64.414], [36.231, 64.109], [37.013, 63.85], [37.142, 64.335], [36.54, 64.764], [37.176, 65.143], [39.593, 64.521], [40.436, 64.764], [39.763, 65.497], [42.093, 66.476], [43.016, 66.419], [43.95, 66.069], [44.532, 66.756], [43.698, 67.352], [44.188, 67.951], [43.453, 68.571], [46.25, 68.25], [46.821, 67.69], [45.555, 67.567], [45.562, 67.01], [46.349, 66.668], [47.894, 66.885], [48.139, 67.522], [50.228, 67.999], [53.717, 68.857], [54.472, 68.808], [53.486, 68.201], [54.726, 68.097], [55.443, 68.439], [57.317, 68.466], [58.802, 68.881], [59.941, 68.278], [61.078, 68.941], [60.03, 69.52], [60.55, 69.85], [63.504, 69.547], [64.888, 69.235], [68.512, 68.092], [69.181, 68.616], [68.164, 69.144], [68.135, 69.356], [66.93, 69.455], [67.26, 69.929], [66.725, 70.709], [66.695, 71.029], [68.54, 71.935], [69.196, 72.843], [69.94, 73.04], [72.588, 72.776], [72.796, 72.22], [71.848, 71.409], [72.47, 71.09], [72.792, 70.391], [72.565, 69.021], [73.668, 68.408], [73.239, 67.74], [71.28, 66.32], [72.423, 66.173], [72.821, 66.533], [73.921, 66.789], [74.187, 67.284], [75.052, 67.76], [74.469, 68.329], [74.936, 68.989], [73.842, 69.071], [73.602, 69.628], [74.4, 70.632], [73.101, 71.447], [74.891, 72.121], [74.659, 72.832], [75.158, 72.855], [75.684, 72.301], [75.289, 71.336], [76.359, 71.153], [75.903, 71.874], [77.577, 72.267], [79.652, 72.32], [81.5, 71.75], [80.611, 72.583], [80.511, 73.648], [82.25, 73.85], [84.655, 73.806], [86.822, 73.937], [86.01, 74.46], [87.167, 75.116], [88.316, 75.144], [90.26, 75.64], [92.901, 75.773], [93.234, 76.047], [95.86, 76.14], [96.678, 75.915], [98.923, 76.447], [100.76, 76.43], [101.035, 76.862], [101.991, 77.288], [104.352, 77.698], [106.067, 77.374], [104.705, 77.127], [106.97, 76.974], [107.24, 76.48], [108.154, 76.723], [111.077, 76.71], [113.332, 76.222], [114.134, 75.848], [113.885, 75.328], [112.779, 75.032], [110.151, 74.477], [109.4, 74.18], [110.64, 74.04], [112.119, 73.788], [113.02, 73.977], [113.53, 73.335], [113.969, 73.595], [115.568, 73.753], [118.776, 73.588], [119.02, 73.12], [123.201, 72.971], [123.258, 73.735], [125.38, 73.56], [126.976, 73.565], [128.591, 73.039], [129.052, 72.399], [128.46, 71.98], [129.716, 71.193], [131.289, 70.787], [132.254, 71.836], [133.858, 71.386], [135.562, 71.655], [137.498, 71.348], [138.234, 71.628], [139.87, 71.488], [139.148, 72.416], [140.468, 72.849], [149.5, 72.2], [150.351, 71.606], [152.969, 70.842], [157.007, 71.031], [158.998, 70.867], [159.83, 70.453], [159.709, 69.722], [160.941, 69.437], [162.279, 69.642], [164.052, 69.668], [165.94, 69.472], [167.836, 69.583], [169.578, 68.694], [170.817, 69.014], [170.008, 69.653], [170.453, 70.097], [173.644, 69.817], [175.724, 69.877], [178.6, 69.4], [180, 68.964], [180, 64.98], [179.993, 64.974], [178.707, 64.535], [177.411, 64.608], [178.313, 64.076], [178.908, 63.252], [179.37, 62.983], [179.486, 62.569], [179.228, 62.304], [177.364, 62.522], [174.569, 61.769], [173.68, 61.653], [172.15, 60.95], [170.698, 60.336], [170.331, 59.882], [168.9, 60.574], [166.295, 59.789], [165.84, 60.16], [164.877, 59.732], [163.539, 59.869], [163.217, 59.211], [162.017, 58.243], [162.053, 57.839], [163.192, 57.615], [163.058, 56.159], [162.13, 56.122], [161.701, 55.286], [162.117, 54.855], [160.369, 54.344], [160.022, 53.203], [158.531, 52.959], [158.231, 51.943], [156.79, 51.011], [156.42, 51.7], [155.992, 53.159], [155.434, 55.381], [155.914, 56.768], [156.758, 57.365], [156.81, 57.832], [158.364, 58.056], [160.151, 59.315], [161.872, 60.343], [163.67, 61.141], [164.474, 62.551], [163.258, 62.466], [162.658, 61.642], [160.121, 60.544], [159.302, 61.774], [156.721, 61.434], [154.218, 59.758], [155.044, 59.145], [152.812, 58.884], [151.266, 58.781], [151.338, 59.504], [149.784, 59.656], [148.545, 59.164], [145.487, 59.336], [142.198, 59.04], [138.958, 57.088], [135.126, 54.73], [136.702, 54.604], [137.193, 53.977], [138.165, 53.755], [138.805, 54.255], [139.902, 54.19], [141.345, 53.09], [141.379, 52.239], [140.597, 51.24], [140.513, 50.046], [140.062, 48.447], [138.555, 47], [138.22, 46.308], [136.862, 45.144], [135.515, 43.989], [134.869, 43.398], [133.537, 42.811], [132.906, 42.798], [132.278, 43.285], [130.936, 42.553], [130.78, 42.22], [130.78, 42.22], [130.78, 42.22], [130.78, 42.22], [130.64, 42.395], [130.64, 42.395], [130.634, 42.903], [131.145, 42.93], [131.289, 44.112], [131.025, 44.968], [131.883, 45.321], [133.097, 45.144], [133.77, 46.117], [134.112, 47.212], [134.501, 47.578], [135.026, 48.478], [133.374, 48.183], [132.507, 47.789], [130.987, 47.79], [130.582, 48.73], [129.398, 49.441], [127.657, 49.76], [127.287, 50.74], [126.939, 51.354], [126.564, 51.784], [125.946, 52.793], [125.068, 53.161], [123.571, 53.459], [122.246, 53.432], [121.003, 53.251], [120.177, 52.754], [120.726, 52.516], [120.738, 51.964], [120.182, 51.644], [119.279, 50.583], [119.288, 50.143], [117.879, 49.511], [116.679, 49.889], [115.486, 49.805], [114.962, 50.14], [114.362, 50.248], [112.898, 49.544], [111.581, 49.378], [110.662, 49.13], [109.402, 49.293], [108.475, 49.283], [107.868, 49.794], [106.889, 50.274], [105.887, 50.406], [104.622, 50.275], [103.677, 50.09], [102.256, 50.511], [102.065, 51.26], [100.889, 51.517], [99.982, 51.634], [98.861, 52.047], [97.826, 51.011], [98.232, 50.422], [97.26, 49.726], [95.814, 49.977], [94.816, 50.013], [94.148, 50.481], [93.104, 50.495], [92.235, 50.802], [90.714, 50.332], [88.806, 49.471], [87.751, 49.297], [87.36, 49.215], [86.829, 49.827], [85.541, 49.693], [85.116, 50.117], [84.416, 50.311], [83.935, 50.889], [83.383, 51.069], [81.946, 50.812], [80.568, 51.388], [80.036, 50.865], [77.801, 53.404], [76.525, 54.177], [76.891, 54.491], [74.385, 53.547], [73.426, 53.49], [73.509, 54.036], [72.224, 54.377], [71.18, 54.133], [70.865, 55.17], [69.068, 55.385], [68.169, 54.97], [65.667, 54.601], [65.179, 54.354], [61.437, 54.006], [60.978, 53.665], [61.7, 52.98], [60.74, 52.72], [60.927, 52.448], [59.968, 51.96], [61.588, 51.273], [61.337, 50.799], [59.933, 50.842], [59.642, 50.545], [58.363, 51.064], [56.778, 51.044], [55.717, 50.622], [54.533, 51.026], [52.329, 51.719], [50.767, 51.693], [48.702, 50.605], [48.578, 49.875], [47.549, 50.455], [46.752, 49.356], [47.044, 49.152], [46.466, 48.394], [47.315, 47.716], [48.057, 47.744], [48.695, 47.076], [48.593, 46.561], [49.101, 46.399]]]]
        },
        {
          N: "Bahamas",
          I: "BS",
          C: [[[[-78.98, 26.79], [-78.51, 26.87], [-77.85, 26.84], [-77.82, 26.58], [-78.91, 26.42], [-78.98, 26.79]]], [[[-77.79, 27.04], [-77, 26.59], [-77.173, 25.879], [-77.356, 26.007], [-77.34, 26.53], [-77.788, 26.925], [-77.79, 27.04]]], [[[-78.191, 25.21], [-77.89, 25.17], [-77.54, 24.34], [-77.535, 23.76], [-77.78, 23.71], [-78.034, 24.286], [-78.408, 24.576], [-78.191, 25.21]]]]
        },
        {
          N: "Falkland Islands",
          I: "FK",
          C: [[[[-61.2, -51.85], [-60, -51.25], [-59.15, -51.5], [-58.55, -51.1], [-57.75, -51.55], [-58.05, -51.9], [-59.4, -52.2], [-59.85, -51.85], [-60.7, -52.3], [-61.2, -51.85]]]]
        },
        {
          N: "Norway",
          I: "NO",
          C: [[[[15.143, 79.674], [15.523, 80.016], [16.991, 80.051], [18.252, 79.702], [21.544, 78.956], [19.027, 78.563], [18.472, 77.827], [17.594, 77.638], [17.118, 76.809], [15.913, 76.77], [13.763, 77.38], [14.67, 77.736], [13.171, 78.025], [11.222, 78.869], [10.445, 79.652], [13.171, 80.01], [13.719, 79.66], [15.143, 79.674]]], [[[27.408, 80.056], [25.925, 79.518], [23.024, 79.4], [20.075, 79.567], [19.897, 79.842], [18.462, 79.86], [17.368, 80.319], [20.456, 80.598], [21.908, 80.358], [22.919, 80.657], [25.448, 80.407], [27.408, 80.056]]], [[[24.724, 77.854], [22.49, 77.445], [20.726, 77.677], [21.416, 77.935], [20.812, 78.255], [22.884, 78.455], [23.281, 78.08], [24.724, 77.854]]], [[[31.101, 69.558], [29.4, 69.157], [28.592, 69.065], [29.016, 69.766], [27.732, 70.164], [26.18, 69.825], [25.689, 69.092], [24.736, 68.65], [23.662, 68.891], [22.356, 68.842], [21.245, 69.37], [20.646, 69.106], [20.025, 69.065], [19.879, 68.407], [17.994, 68.567], [17.729, 68.011], [16.769, 68.014], [16.109, 67.302], [15.108, 66.194], [13.556, 64.787], [13.92, 64.445], [13.572, 64.049], [12.58, 64.066], [11.931, 63.128], [11.992, 61.8], [12.631, 61.294], [12.3, 60.118], [11.468, 59.432], [11.027, 58.856], [10.357, 59.47], [8.382, 58.313], [7.049, 58.079], [5.666, 58.588], [5.308, 59.663], [4.992, 61.971], [5.913, 62.614], [8.553, 63.454], [10.528, 64.486], [12.358, 65.88], [14.761, 67.811], [16.436, 68.563], [19.184, 69.817], [21.378, 70.255], [23.024, 70.202], [24.547, 71.03], [26.37, 70.986], [28.166, 71.185], [31.293, 70.454], [30.005, 70.186], [31.101, 69.558]]]]
        },
        {
          N: "Greenland",
          I: "GL",
          C: [[[[-46.764, 82.628], [-43.406, 83.225], [-39.898, 83.18], [-38.622, 83.549], [-35.088, 83.645], [-27.1, 83.52], [-20.845, 82.727], [-22.692, 82.342], [-26.518, 82.298], [-31.9, 82.2], [-31.396, 82.022], [-27.857, 82.132], [-24.844, 81.787], [-22.903, 82.093], [-22.072, 81.734], [-23.17, 81.153], [-20.624, 81.525], [-15.768, 81.912], [-12.77, 81.719], [-12.209, 81.292], [-16.285, 80.58], [-16.85, 80.35], [-20.046, 80.177], [-17.73, 80.129], [-18.9, 79.4], [-19.705, 78.751], [-19.674, 77.639], [-18.473, 76.986], [-20.035, 76.944], [-21.679, 76.628], [-19.834, 76.098], [-19.599, 75.248], [-20.668, 75.156], [-19.373, 74.296], [-21.594, 74.224], [-20.435, 73.817], [-20.762, 73.464], [-22.172, 73.31], [-23.566, 73.307], [-22.313, 72.629], [-22.3, 72.184], [-24.278, 72.598], [-24.793, 72.33], [-23.443, 72.08], [-22.133, 71.469], [-21.754, 70.664], [-23.536, 70.471], [-24.307, 70.856], [-25.543, 71.431], [-25.201, 70.752], [-26.363, 70.226], [-23.727, 70.184], [-22.349, 70.129], [-25.029, 69.259], [-27.747, 68.47], [-30.674, 68.125], [-31.777, 68.121], [-32.811, 67.735], [-34.202, 66.68], [-36.353, 65.979], [-37.044, 65.938], [-38.375, 65.692], [-39.812, 65.458], [-40.669, 64.84], [-40.683, 64.139], [-41.189, 63.482], [-42.819, 62.682], [-42.417, 61.901], [-42.866, 61.074], [-43.378, 60.098], [-44.788, 60.037], [-46.264, 60.853], [-48.263, 60.858], [-49.233, 61.407], [-49.9, 62.383], [-51.633, 63.627], [-52.14, 64.278], [-52.277, 65.177], [-53.662, 66.1], [-53.302, 66.837], [-53.969, 67.189], [-52.98, 68.358], [-51.475, 68.73], [-51.08, 69.148], [-50.871, 69.929], [-52.014, 69.575], [-52.558, 69.426], [-53.456, 69.284], [-54.683, 69.61], [-54.75, 70.289], [-54.359, 70.821], [-53.431, 70.836], [-51.39, 70.57], [-53.109, 71.205], [-54.004, 71.547], [-55, 71.407], [-55.835, 71.654], [-54.718, 72.586], [-55.326, 72.959], [-56.12, 73.65], [-57.324, 74.71], [-58.597, 75.099], [-58.585, 75.517], [-61.269, 76.102], [-63.392, 76.175], [-66.064, 76.135], [-68.504, 76.061], [-69.665, 76.38], [-71.403, 77.009], [-68.777, 77.323], [-66.764, 77.376], [-71.043, 77.636], [-73.297, 78.044], [-73.159, 78.433], [-69.373, 78.914], [-65.711, 79.394], [-65.324, 79.758], [-68.023, 80.117], [-67.151, 80.516], [-63.689, 81.214], [-62.234, 81.321], [-62.651, 81.77], [-60.282, 82.034], [-57.207, 82.191], [-54.134, 82.2], [-53.043, 81.888], [-50.391, 82.439], [-48.004, 82.065], [-46.6, 81.986], [-44.523, 81.661], [-46.901, 82.2], [-46.764, 82.628]]]]
        },
        {
          N: "Timor-Leste",
          I: "TL",
          C: [[[[124.969, -8.893], [125.086, -8.657], [125.947, -8.432], [126.645, -8.398], [126.957, -8.273], [127.336, -8.397], [126.968, -8.668], [125.926, -9.106], [125.089, -9.393], [125.07, -9.09], [124.969, -8.893]]]]
        },
        {
          N: "South Africa",
          I: "ZA",
          C: [[[[16.345, -28.577], [16.824, -28.082], [17.219, -28.356], [17.387, -28.784], [17.836, -28.856], [18.465, -29.045], [19.002, -28.972], [19.895, -28.461], [19.896, -24.768], [20.166, -24.918], [20.759, -25.868], [20.666, -26.477], [20.89, -26.829], [21.606, -26.727], [22.106, -26.28], [22.58, -25.979], [22.824, -25.5], [23.312, -25.269], [23.734, -25.39], [24.211, -25.67], [25.025, -25.72], [25.665, -25.487], [25.766, -25.175], [25.942, -24.696], [26.486, -24.616], [26.786, -24.241], [27.119, -23.574], [28.017, -22.828], [29.432, -22.091], [29.839, -22.102], [30.323, -22.272], [30.66, -22.152], [31.191, -22.252], [31.67, -23.659], [31.931, -24.369], [31.752, -25.484], [31.838, -25.843], [31.333, -25.66], [31.044, -25.731], [30.95, -26.023], [30.677, -26.398], [30.686, -26.744], [31.283, -27.286], [31.868, -27.178], [32.072, -26.734], [32.83, -26.742], [32.58, -27.47], [32.462, -28.301], [32.203, -28.752], [31.521, -29.257], [31.326, -29.402], [30.902, -29.91], [30.623, -30.424], [30.056, -31.14], [28.926, -32.172], [28.22, -32.772], [27.465, -33.227], [26.419, -33.615], [25.91, -33.667], [25.781, -33.945], [25.173, -33.797], [24.678, -33.987], [23.594, -33.794], [22.988, -33.916], [22.574, -33.864], [21.543, -34.259], [20.689, -34.417], [20.071, -34.795], [19.616, -34.819], [19.193, -34.463], [18.855, -34.444], [18.425, -33.998], [18.377, -34.137], [18.244, -33.868], [18.25, -33.281], [17.925, -32.611], [18.248, -32.429], [18.222, -31.662], [17.567, -30.726], [17.064, -29.879], [17.063, -29.876], [16.345, -28.577]], [[28.978, -28.956], [28.542, -28.648], [28.074, -28.851], [27.533, -29.243], [26.999, -29.876], [27.749, -30.645], [28.107, -30.546], [28.291, -30.226], [28.848, -30.07], [29.018, -29.744], [29.325, -29.257], [28.978, -28.956]]]]
        },
        {
          N: "Lesotho",
          I: "LS",
          C: [[[[28.978, -28.956], [29.325, -29.257], [29.018, -29.744], [28.848, -30.07], [28.291, -30.226], [28.107, -30.546], [27.749, -30.645], [26.999, -29.876], [27.533, -29.243], [28.074, -28.851], [28.542, -28.648], [28.978, -28.956]]]]
        },
        {
          N: "Mexico",
          I: "MX",
          C: [[[[-117.128, 32.535], [-115.991, 32.612], [-114.721, 32.721], [-114.815, 32.525], [-113.305, 32.039], [-111.024, 31.335], [-109.035, 31.342], [-108.242, 31.342], [-108.24, 31.755], [-106.508, 31.755], [-106.143, 31.4], [-105.632, 31.084], [-105.037, 30.644], [-104.706, 30.122], [-104.457, 29.572], [-103.94, 29.27], [-103.11, 28.97], [-102.48, 29.76], [-101.662, 29.779], [-100.958, 29.381], [-100.456, 28.696], [-100.11, 28.11], [-99.52, 27.54], [-99.3, 26.84], [-99.02, 26.37], [-98.24, 26.06], [-97.53, 25.84], [-97.14, 25.87], [-97.528, 24.992], [-97.703, 24.272], [-97.776, 22.933], [-97.872, 22.444], [-97.699, 21.899], [-97.389, 21.411], [-97.189, 20.635], [-96.526, 19.891], [-96.292, 19.32], [-95.901, 18.828], [-94.839, 18.563], [-94.426, 18.144], [-93.549, 18.424], [-92.786, 18.525], [-92.037, 18.705], [-91.408, 18.876], [-90.772, 19.284], [-90.534, 19.867], [-90.451, 20.708], [-90.279, 21], [-89.601, 21.262], [-88.544, 21.494], [-87.658, 21.459], [-87.052, 21.544], [-86.812, 21.332], [-86.846, 20.85], [-87.383, 20.255], [-87.621, 19.647], [-87.437, 19.472], [-87.587, 19.04], [-87.837, 18.26], [-88.091, 18.517], [-88.3, 18.5], [-88.49, 18.487], [-88.848, 17.883], [-89.03, 18.002], [-89.151, 17.955], [-89.143, 17.808], [-90.068, 17.819], [-91.002, 17.818], [-91.002, 17.255], [-91.454, 17.252], [-91.082, 16.918], [-90.712, 16.687], [-90.601, 16.471], [-90.439, 16.41], [-90.464, 16.07], [-91.748, 16.067], [-92.229, 15.251], [-92.087, 15.065], [-92.203, 14.83], [-92.228, 14.539], [-93.359, 15.615], [-93.875, 15.94], [-94.692, 16.201], [-95.25, 16.128], [-96.053, 15.752], [-96.557, 15.654], [-97.264, 15.917], [-98.013, 16.107], [-98.948, 16.566], [-99.697, 16.706], [-100.829, 17.171], [-101.666, 17.649], [-101.919, 17.916], [-102.478, 17.976], [-103.501, 18.292], [-103.918, 18.749], [-104.992, 19.316], [-105.493, 19.947], [-105.731, 20.434], [-105.398, 20.532], [-105.501, 20.817], [-105.271, 21.076], [-105.266, 21.422], [-105.603, 21.871], [-105.693, 22.269], [-106.029, 22.774], [-106.91, 23.768], [-107.915, 24.549], [-108.402, 25.172], [-109.26, 25.581], [-109.444, 25.825], [-109.292, 26.443], [-109.801, 26.676], [-110.392, 27.162], [-110.641, 27.86], [-111.179, 27.941], [-111.76, 28.468], [-112.228, 28.954], [-112.272, 29.267], [-112.81, 30.021], [-113.164, 30.787], [-113.149, 31.171], [-113.872, 31.568], [-114.206, 31.524], [-114.776, 31.8], [-114.937, 31.393], [-114.771, 30.914], [-114.674, 30.163], [-114.331, 29.75], [-113.589, 29.062], [-113.424, 28.826], [-113.272, 28.755], [-113.14, 28.411], [-112.962, 28.425], [-112.762, 27.78], [-112.458, 27.526], [-112.245, 27.172], [-111.616, 26.663], [-111.285, 25.733], [-110.988, 25.295], [-110.71, 24.826], [-110.655, 24.299], [-110.173, 24.266], [-109.772, 23.811], [-109.409, 23.365], [-109.433, 23.186], [-109.854, 22.818], [-110.031, 22.823], [-110.295, 23.431], [-110.95, 24.001], [-111.671, 24.484], [-112.182, 24.738], [-112.149, 25.47], [-112.301, 26.012], [-112.777, 26.322], [-113.465, 26.768], [-113.597, 26.639], [-113.849, 26.9], [-114.466, 27.142], [-115.055, 27.723], [-114.982, 27.798], [-114.57, 27.741], [-114.199, 28.115], [-114.162, 28.566], [-114.932, 29.279], [-115.519, 29.556], [-115.887, 30.181], [-116.258, 30.836], [-116.722, 31.636], [-117.128, 32.535]]]]
        },
        {
          N: "Uruguay",
          I: "UY",
          C: [[[[-57.625, -30.216], [-56.976, -30.11], [-55.973, -30.883], [-55.602, -30.854], [-54.572, -31.495], [-53.788, -32.047], [-53.21, -32.728], [-53.651, -33.202], [-53.374, -33.768], [-53.806, -34.397], [-54.936, -34.953], [-55.674, -34.753], [-56.215, -34.86], [-57.14, -34.43], [-57.818, -34.463], [-58.427, -33.909], [-58.35, -33.263], [-58.133, -33.041], [-58.142, -32.045], [-57.875, -31.017], [-57.625, -30.216]]]]
        },
        {
          N: "Brazil",
          I: "BR",
          C: [[[[-53.374, -33.768], [-53.651, -33.202], [-53.21, -32.728], [-53.788, -32.047], [-54.572, -31.495], [-55.602, -30.854], [-55.973, -30.883], [-56.976, -30.11], [-57.625, -30.216], [-56.291, -28.853], [-55.162, -27.882], [-54.491, -27.475], [-53.649, -26.923], [-53.628, -26.125], [-54.13, -25.548], [-54.625, -25.739], [-54.429, -25.162], [-54.293, -24.571], [-54.293, -24.021], [-54.653, -23.84], [-55.028, -24.001], [-55.401, -23.957], [-55.518, -23.572], [-55.611, -22.656], [-55.798, -22.357], [-56.473, -22.086], [-56.882, -22.282], [-57.937, -22.09], [-57.871, -20.733], [-58.166, -20.177], [-57.854, -19.97], [-57.95, -19.4], [-57.676, -18.962], [-57.498, -18.174], [-57.735, -17.552], [-58.281, -17.272], [-58.388, -16.877], [-58.241, -16.3], [-60.158, -16.258], [-60.543, -15.094], [-60.251, -15.077], [-60.264, -14.646], [-60.459, -14.354], [-60.503, -13.776], [-61.084, -13.479], [-61.713, -13.489], [-62.127, -13.199], [-62.803, -13.001], [-63.196, -12.627], [-64.316, -12.462], [-65.402, -11.566], [-65.322, -10.896], [-65.445, -10.511], [-65.338, -9.762], [-66.647, -9.931], [-67.174, -10.307], [-68.048, -10.712], [-68.271, -11.015], [-68.786, -11.036], [-69.53, -10.952], [-70.094, -11.124], [-70.549, -11.009], [-70.482, -9.49], [-71.302, -10.079], [-72.185, -10.054], [-72.563, -9.52], [-73.227, -9.462], [-73.015, -9.033], [-73.571, -8.424], [-73.987, -7.524], [-73.723, -7.341], [-73.724, -6.919], [-73.12, -6.63], [-73.22, -6.089], [-72.965, -5.741], [-72.892, -5.275], [-71.748, -4.594], [-70.929, -4.402], [-70.795, -4.251], [-69.894, -4.298], [-69.444, -1.556], [-69.42, -1.123], [-69.577, -0.55], [-70.021, -0.185], [-70.016, 0.541], [-69.452, 0.706], [-69.252, 0.603], [-69.219, 0.986], [-69.805, 1.089], [-69.817, 1.715], [-67.869, 1.692], [-67.538, 2.037], [-67.26, 1.72], [-67.065, 1.13], [-66.876, 1.253], [-66.326, 0.724], [-65.548, 0.789], [-65.355, 1.095], [-64.611, 1.329], [-64.199, 1.493], [-64.083, 1.916], [-63.369, 2.201], [-63.423, 2.411], [-64.27, 2.497], [-64.409, 3.127], [-64.368, 3.797], [-64.816, 4.056], [-64.629, 4.148], [-63.888, 4.021], [-63.093, 3.771], [-62.805, 4.007], [-62.085, 4.162], [-60.967, 4.536], [-60.601, 4.918], [-60.734, 5.2], [-60.214, 5.244], [-59.981, 5.014], [-60.111, 4.575], [-59.767, 4.424], [-59.538, 3.959], [-59.815, 3.606], [-59.975, 2.755], [-59.719, 2.25], [-59.646, 1.787], [-59.031, 1.318], [-58.54, 1.268], [-58.429, 1.464], [-58.113, 1.507], [-57.661, 1.683], [-57.336, 1.949], [-56.783, 1.864], [-56.539, 1.9], [-55.996, 1.818], [-55.906, 2.022], [-56.073, 2.221], [-55.973, 2.51], [-55.57, 2.422], [-55.098, 2.524], [-54.525, 2.312], [-54.088, 2.106], [-53.779, 2.377], [-53.555, 2.335], [-53.418, 2.053], [-52.94, 2.125], [-52.556, 2.505], [-52.249, 3.241], [-51.658, 4.156], [-51.317, 4.203], [-51.07, 3.65], [-50.509, 1.902], [-49.974, 1.736], [-49.947, 1.046], [-50.699, 0.223], [-50.388, -0.078], [-48.621, -0.235], [-48.584, -1.238], [-47.825, -0.582], [-46.567, -0.941], [-44.906, -1.552], [-44.418, -2.138], [-44.582, -2.691], [-43.419, -2.383], [-41.473, -2.912], [-39.979, -2.873], [-38.5, -3.701], [-37.223, -4.821], [-36.453, -5.109], [-35.598, -5.15], [-35.235, -5.465], [-34.896, -6.738], [-34.73, -7.343], [-35.128, -8.996], [-35.637, -9.649], [-37.047, -11.041], [-37.684, -12.171], [-38.424, -13.038], [-38.674, -13.058], [-38.953, -13.793], [-38.882, -15.667], [-39.161, -17.208], [-39.267, -17.868], [-39.584, -18.262], [-39.761, -19.599], [-40.775, -20.905], [-40.945, -21.937], [-41.754, -22.371], [-41.988, -22.97], [-43.075, -22.968], [-44.648, -23.352], [-45.352, -23.797], [-46.472, -24.089], [-47.649, -24.885], [-48.495, -25.877], [-48.641, -26.624], [-48.475, -27.176], [-48.662, -28.186], [-48.888, -28.674], [-49.587, -29.224], [-50.697, -30.984], [-51.576, -31.778], [-52.256, -32.245], [-52.712, -33.197], [-53.374, -33.768]]]]
        },
        {
          N: "Bolivia",
          I: "BO",
          C: [[[[-69.53, -10.952], [-68.786, -11.036], [-68.271, -11.015], [-68.048, -10.712], [-67.174, -10.307], [-66.647, -9.931], [-65.338, -9.762], [-65.445, -10.511], [-65.322, -10.896], [-65.402, -11.566], [-64.316, -12.462], [-63.196, -12.627], [-62.803, -13.001], [-62.127, -13.199], [-61.713, -13.489], [-61.084, -13.479], [-60.503, -13.776], [-60.459, -14.354], [-60.264, -14.646], [-60.251, -15.077], [-60.543, -15.094], [-60.158, -16.258], [-58.241, -16.3], [-58.388, -16.877], [-58.281, -17.272], [-57.735, -17.552], [-57.498, -18.174], [-57.676, -18.962], [-57.95, -19.4], [-57.854, -19.97], [-58.166, -20.177], [-58.183, -19.868], [-59.115, -19.357], [-60.044, -19.343], [-61.786, -19.634], [-62.266, -20.514], [-62.291, -21.052], [-62.685, -22.249], [-62.846, -22.035], [-63.987, -21.994], [-64.377, -22.798], [-64.965, -22.076], [-66.273, -21.832], [-67.107, -22.736], [-67.828, -22.873], [-68.22, -21.494], [-68.757, -20.373], [-68.442, -19.405], [-68.967, -18.982], [-69.1, -18.26], [-69.59, -17.58], [-68.96, -16.501], [-69.39, -15.66], [-69.16, -15.324], [-69.34, -14.953], [-68.949, -14.454], [-68.929, -13.603], [-68.88, -12.9], [-68.665, -12.561], [-69.53, -10.952]]]]
        },
        {
          N: "Peru",
          I: "PE",
          C: [[[[-69.894, -4.298], [-70.795, -4.251], [-70.929, -4.402], [-71.748, -4.594], [-72.892, -5.275], [-72.965, -5.741], [-73.22, -6.089], [-73.12, -6.63], [-73.724, -6.919], [-73.723, -7.341], [-73.987, -7.524], [-73.571, -8.424], [-73.015, -9.033], [-73.227, -9.462], [-72.563, -9.52], [-72.185, -10.054], [-71.302, -10.079], [-70.482, -9.49], [-70.549, -11.009], [-70.094, -11.124], [-69.53, -10.952], [-68.665, -12.561], [-68.88, -12.9], [-68.929, -13.603], [-68.949, -14.454], [-69.34, -14.953], [-69.16, -15.324], [-69.39, -15.66], [-68.96, -16.501], [-69.59, -17.58], [-69.858, -18.093], [-70.373, -18.348], [-71.375, -17.774], [-71.462, -17.363], [-73.445, -16.359], [-75.238, -15.266], [-76.009, -14.649], [-76.423, -13.823], [-76.259, -13.535], [-77.106, -12.223], [-78.092, -10.378], [-79.037, -8.387], [-79.446, -7.931], [-79.761, -7.194], [-80.537, -6.542], [-81.25, -6.137], [-80.926, -5.691], [-81.411, -4.737], [-81.1, -4.036], [-80.303, -3.405], [-80.184, -3.821], [-80.469, -4.059], [-80.442, -4.426], [-80.029, -4.346], [-79.625, -4.454], [-79.205, -4.959], [-78.64, -4.548], [-78.451, -3.873], [-77.838, -3.003], [-76.635, -2.609], [-75.545, -1.562], [-75.234, -0.911], [-75.373, -0.152], [-75.107, -0.057], [-74.442, -0.531], [-74.122, -1.003], [-73.66, -1.26], [-73.07, -2.309], [-72.326, -2.434], [-71.775, -2.17], [-71.414, -2.343], [-70.813, -2.257], [-70.048, -2.725], [-70.693, -3.743], [-70.394, -3.767], [-69.894, -4.298]]]]
        },
        {
          N: "Colombia",
          I: "CO",
          C: [[[[-66.876, 1.253], [-67.065, 1.13], [-67.26, 1.72], [-67.538, 2.037], [-67.869, 1.692], [-69.817, 1.715], [-69.805, 1.089], [-69.219, 0.986], [-69.252, 0.603], [-69.452, 0.706], [-70.016, 0.541], [-70.021, -0.185], [-69.577, -0.55], [-69.42, -1.123], [-69.444, -1.556], [-69.894, -4.298], [-70.394, -3.767], [-70.693, -3.743], [-70.048, -2.725], [-70.813, -2.257], [-71.414, -2.343], [-71.775, -2.17], [-72.326, -2.434], [-73.07, -2.309], [-73.66, -1.26], [-74.122, -1.003], [-74.442, -0.531], [-75.107, -0.057], [-75.373, -0.152], [-75.801, 0.085], [-76.292, 0.416], [-76.576, 0.257], [-77.425, 0.396], [-77.669, 0.826], [-77.855, 0.81], [-78.855, 1.381], [-78.991, 1.691], [-78.618, 1.766], [-78.662, 2.267], [-78.428, 2.63], [-77.932, 2.697], [-77.51, 3.325], [-77.128, 3.85], [-77.496, 4.088], [-77.308, 4.668], [-77.533, 5.583], [-77.319, 5.845], [-77.477, 6.691], [-77.882, 7.224], [-77.753, 7.71], [-77.431, 7.638], [-77.243, 7.935], [-77.475, 8.524], [-77.353, 8.671], [-76.837, 8.639], [-76.086, 9.337], [-75.675, 9.443], [-75.665, 9.774], [-75.48, 10.619], [-74.907, 11.083], [-74.277, 11.102], [-74.197, 11.31], [-73.415, 11.227], [-72.628, 11.732], [-72.238, 11.956], [-71.754, 12.437], [-71.4, 12.376], [-71.137, 12.113], [-71.332, 11.776], [-71.974, 11.609], [-72.228, 11.109], [-72.615, 10.822], [-72.905, 10.45], [-73.028, 9.737], [-73.305, 9.152], [-72.789, 9.085], [-72.66, 8.625], [-72.44, 8.405], [-72.361, 8.003], [-72.48, 7.633], [-72.444, 7.424], [-72.198, 7.34], [-71.96, 6.992], [-70.674, 7.088], [-70.093, 6.96], [-69.389, 6.1], [-68.985, 6.207], [-68.265, 6.153], [-67.695, 6.267], [-67.341, 6.095], [-67.522, 5.557], [-67.745, 5.221], [-67.823, 4.504], [-67.622, 3.839], [-67.338, 3.542], [-67.303, 3.318], [-67.81, 2.821], [-67.447, 2.6], [-67.181, 2.251], [-66.876, 1.253]]]]
        },
        {
          N: "Panama",
          I: "PA",
          C: [[[[-77.353, 8.671], [-77.475, 8.524], [-77.243, 7.935], [-77.431, 7.638], [-77.753, 7.71], [-77.882, 7.224], [-78.215, 7.512], [-78.429, 8.052], [-78.182, 8.319], [-78.435, 8.388], [-78.622, 8.718], [-79.12, 8.996], [-79.558, 8.932], [-79.761, 8.585], [-80.164, 8.333], [-80.383, 8.298], [-80.481, 8.09], [-80.004, 7.548], [-80.277, 7.42], [-80.421, 7.272], [-80.886, 7.221], [-81.06, 7.818], [-81.19, 7.648], [-81.52, 7.707], [-81.721, 8.109], [-82.131, 8.175], [-82.391, 8.292], [-82.82, 8.291], [-82.851, 8.074], [-82.966, 8.225], [-82.913, 8.424], [-82.83, 8.626], [-82.869, 8.807], [-82.719, 8.926], [-82.927, 9.074], [-82.933, 9.477], [-82.546, 9.566], [-82.187, 9.207], [-82.208, 8.996], [-81.809, 8.951], [-81.714, 9.032], [-81.439, 8.786], [-80.947, 8.859], [-80.522, 9.111], [-79.915, 9.313], [-79.573, 9.612], [-79.021, 9.553], [-79.058, 9.455], [-78.501, 9.42], [-78.056, 9.248], [-77.73, 8.947], [-77.353, 8.671]]]]
        },
        {
          N: "Costa Rica",
          I: "CR",
          C: [[[[-82.546, 9.566], [-82.933, 9.477], [-82.927, 9.074], [-82.719, 8.926], [-82.869, 8.807], [-82.83, 8.626], [-82.913, 8.424], [-82.966, 8.225], [-83.508, 8.447], [-83.711, 8.657], [-83.596, 8.83], [-83.633, 9.051], [-83.91, 9.291], [-84.303, 9.487], [-84.648, 9.616], [-84.713, 9.908], [-84.976, 10.087], [-84.911, 9.796], [-85.111, 9.557], [-85.339, 9.835], [-85.661, 9.933], [-85.797, 10.135], [-85.792, 10.439], [-85.659, 10.754], [-85.942, 10.895], [-85.713, 11.088], [-85.562, 11.217], [-84.903, 10.952], [-84.673, 11.083], [-84.356, 10.999], [-84.19, 10.793], [-83.895, 10.727], [-83.656, 10.939], [-83.402, 10.395], [-83.016, 9.993], [-82.546, 9.566]]]]
        },
        {
          N: "Nicaragua",
          I: "NI",
          C: [[[[-83.656, 10.939], [-83.895, 10.727], [-84.19, 10.793], [-84.356, 10.999], [-84.673, 11.083], [-84.903, 10.952], [-85.562, 11.217], [-85.713, 11.088], [-86.058, 11.403], [-86.526, 11.807], [-86.746, 12.144], [-87.168, 12.458], [-87.668, 12.91], [-87.557, 13.065], [-87.392, 12.914], [-87.317, 12.985], [-87.006, 13.026], [-86.881, 13.254], [-86.734, 13.263], [-86.755, 13.755], [-86.521, 13.778], [-86.312, 13.771], [-86.096, 14.038], [-85.801, 13.836], [-85.699, 13.96], [-85.514, 14.079], [-85.165, 14.354], [-85.149, 14.56], [-85.053, 14.552], [-84.925, 14.79], [-84.82, 14.82], [-84.65, 14.667], [-84.449, 14.622], [-84.228, 14.749], [-83.976, 14.749], [-83.629, 14.88], [-83.49, 15.016], [-83.147, 14.996], [-83.233, 14.9], [-83.284, 14.677], [-83.182, 14.311], [-83.412, 13.97], [-83.52, 13.568], [-83.552, 13.127], [-83.499, 12.869], [-83.473, 12.419], [-83.626, 12.321], [-83.72, 11.893], [-83.651, 11.629], [-83.855, 11.373], [-83.809, 11.103], [-83.656, 10.939]]]]
        },
        {
          N: "Honduras",
          I: "HN",
          C: [[[[-83.147, 14.996], [-83.49, 15.016], [-83.629, 14.88], [-83.976, 14.749], [-84.228, 14.749], [-84.449, 14.622], [-84.65, 14.667], [-84.82, 14.82], [-84.925, 14.79], [-85.053, 14.552], [-85.149, 14.56], [-85.165, 14.354], [-85.514, 14.079], [-85.699, 13.96], [-85.801, 13.836], [-86.096, 14.038], [-86.312, 13.771], [-86.521, 13.778], [-86.755, 13.755], [-86.734, 13.263], [-86.881, 13.254], [-87.006, 13.026], [-87.317, 12.985], [-87.489, 13.298], [-87.793, 13.384], [-87.724, 13.785], [-87.86, 13.893], [-88.065, 13.965], [-88.504, 13.845], [-88.541, 13.98], [-88.843, 14.141], [-89.059, 14.34], [-89.353, 14.424], [-89.146, 14.678], [-89.225, 14.874], [-89.155, 15.066], [-88.681, 15.346], [-88.225, 15.728], [-88.121, 15.689], [-87.902, 15.864], [-87.616, 15.879], [-87.523, 15.797], [-87.368, 15.847], [-86.903, 15.757], [-86.441, 15.783], [-86.119, 15.893], [-86.002, 16.005], [-85.683, 15.954], [-85.444, 15.886], [-85.182, 15.909], [-84.984, 15.996], [-84.527, 15.857], [-84.368, 15.835], [-84.063, 15.648], [-83.774, 15.424], [-83.41, 15.271], [-83.147, 14.996]]]]
        },
        {
          N: "El Salvador",
          I: "SV",
          C: [[[[-89.353, 14.424], [-89.059, 14.34], [-88.843, 14.141], [-88.541, 13.98], [-88.504, 13.845], [-88.065, 13.965], [-87.86, 13.893], [-87.724, 13.785], [-87.793, 13.384], [-87.904, 13.149], [-88.483, 13.164], [-88.843, 13.26], [-89.257, 13.459], [-89.812, 13.521], [-90.096, 13.735], [-90.065, 13.882], [-89.722, 14.134], [-89.534, 14.245], [-89.587, 14.363], [-89.353, 14.424]]]]
        },
        {
          N: "Guatemala",
          I: "GT",
          C: [[[[-92.228, 14.539], [-92.203, 14.83], [-92.087, 15.065], [-92.229, 15.251], [-91.748, 16.067], [-90.464, 16.07], [-90.439, 16.41], [-90.601, 16.471], [-90.712, 16.687], [-91.082, 16.918], [-91.454, 17.252], [-91.002, 17.255], [-91.002, 17.818], [-90.068, 17.819], [-89.143, 17.808], [-89.151, 17.016], [-89.229, 15.887], [-88.931, 15.887], [-88.605, 15.706], [-88.518, 15.855], [-88.225, 15.728], [-88.681, 15.346], [-89.155, 15.066], [-89.225, 14.874], [-89.146, 14.678], [-89.353, 14.424], [-89.587, 14.363], [-89.534, 14.245], [-89.722, 14.134], [-90.065, 13.882], [-90.096, 13.735], [-90.609, 13.91], [-91.232, 13.928], [-91.69, 14.126], [-92.228, 14.539]]]]
        },
        {
          N: "Belize",
          I: "BZ",
          C: [[[[-89.143, 17.808], [-89.151, 17.955], [-89.03, 18.002], [-88.848, 17.883], [-88.49, 18.487], [-88.3, 18.5], [-88.296, 18.353], [-88.107, 18.349], [-88.123, 18.077], [-88.285, 17.644], [-88.198, 17.489], [-88.303, 17.132], [-88.24, 17.036], [-88.355, 16.531], [-88.552, 16.265], [-88.732, 16.234], [-88.931, 15.887], [-89.229, 15.887], [-89.151, 17.016], [-89.143, 17.808]]]]
        },
        {
          N: "Venezuela",
          I: "VE",
          C: [[[[-60.734, 5.2], [-60.601, 4.918], [-60.967, 4.536], [-62.085, 4.162], [-62.805, 4.007], [-63.093, 3.771], [-63.888, 4.021], [-64.629, 4.148], [-64.816, 4.056], [-64.368, 3.797], [-64.409, 3.127], [-64.27, 2.497], [-63.423, 2.411], [-63.369, 2.201], [-64.083, 1.916], [-64.199, 1.493], [-64.611, 1.329], [-65.355, 1.095], [-65.548, 0.789], [-66.326, 0.724], [-66.876, 1.253], [-67.181, 2.251], [-67.447, 2.6], [-67.81, 2.821], [-67.303, 3.318], [-67.338, 3.542], [-67.622, 3.839], [-67.823, 4.504], [-67.745, 5.221], [-67.522, 5.557], [-67.341, 6.095], [-67.695, 6.267], [-68.265, 6.153], [-68.985, 6.207], [-69.389, 6.1], [-70.093, 6.96], [-70.674, 7.088], [-71.96, 6.992], [-72.198, 7.34], [-72.444, 7.424], [-72.48, 7.633], [-72.361, 8.003], [-72.44, 8.405], [-72.66, 8.625], [-72.789, 9.085], [-73.305, 9.152], [-73.028, 9.737], [-72.905, 10.45], [-72.615, 10.822], [-72.228, 11.109], [-71.974, 11.609], [-71.332, 11.776], [-71.36, 11.54], [-71.947, 11.423], [-71.621, 10.969], [-71.633, 10.446], [-72.074, 9.866], [-71.696, 9.072], [-71.265, 9.137], [-71.04, 9.86], [-71.35, 10.212], [-71.401, 10.969], [-70.155, 11.375], [-70.294, 11.847], [-69.943, 12.162], [-69.584, 11.46], [-68.883, 11.443], [-68.233, 10.886], [-68.194, 10.555], [-67.296, 10.546], [-66.228, 10.649], [-65.655, 10.201], [-64.89, 10.077], [-64.329, 10.39], [-64.318, 10.641], [-63.079, 10.702], [-61.881, 10.716], [-62.73, 10.42], [-62.389, 9.948], [-61.589, 9.873], [-60.831, 9.381], [-60.671, 8.58], [-60.15, 8.603], [-59.758, 8.367], [-60.551, 7.78], [-60.638, 7.415], [-60.296, 7.044], [-60.544, 6.857], [-61.159, 6.696], [-61.139, 6.234], [-61.41, 5.959], [-60.734, 5.2]]]]
        },
        {
          N: "Guyana",
          I: "GY",
          C: [[[[-56.539, 1.9], [-56.783, 1.864], [-57.336, 1.949], [-57.661, 1.683], [-58.113, 1.507], [-58.429, 1.464], [-58.54, 1.268], [-59.031, 1.318], [-59.646, 1.787], [-59.719, 2.25], [-59.975, 2.755], [-59.815, 3.606], [-59.538, 3.959], [-59.767, 4.424], [-60.111, 4.575], [-59.981, 5.014], [-60.214, 5.244], [-60.734, 5.2], [-61.41, 5.959], [-61.139, 6.234], [-61.159, 6.696], [-60.544, 6.857], [-60.296, 7.044], [-60.638, 7.415], [-60.551, 7.78], [-59.758, 8.367], [-59.102, 7.999], [-58.483, 7.348], [-58.455, 6.833], [-58.078, 6.809], [-57.542, 6.321], [-57.147, 5.973], [-57.307, 5.074], [-57.914, 4.813], [-57.86, 4.577], [-58.045, 4.061], [-57.602, 3.335], [-57.281, 3.333], [-57.15, 2.769], [-56.539, 1.9]]]]
        },
        {
          N: "Suriname",
          I: "SR",
          C: [[[[-54.525, 2.312], [-55.098, 2.524], [-55.57, 2.422], [-55.973, 2.51], [-56.073, 2.221], [-55.906, 2.022], [-55.996, 1.818], [-56.539, 1.9], [-57.15, 2.769], [-57.281, 3.333], [-57.602, 3.335], [-58.045, 4.061], [-57.86, 4.577], [-57.914, 4.813], [-57.307, 5.074], [-57.147, 5.973], [-55.949, 5.773], [-55.842, 5.953], [-55.033, 6.025], [-53.958, 5.757], [-54.479, 4.897], [-54.4, 4.213], [-54.007, 3.62], [-54.182, 3.19], [-54.27, 2.732], [-54.525, 2.312]]]]
        },
        {
          N: "France",
          I: "FR",
          C: [[[[-51.658, 4.156], [-52.249, 3.241], [-52.556, 2.505], [-52.94, 2.125], [-53.418, 2.053], [-53.555, 2.335], [-53.779, 2.377], [-54.088, 2.106], [-54.525, 2.312], [-54.27, 2.732], [-54.182, 3.19], [-54.007, 3.62], [-54.4, 4.213], [-54.479, 4.897], [-53.958, 5.757], [-53.618, 5.647], [-52.882, 5.41], [-51.823, 4.566], [-51.658, 4.156]]], [[[8.746, 42.628], [9.39, 43.01], [9.56, 42.152], [9.23, 41.38], [8.776, 41.584], [8.544, 42.257], [8.746, 42.628]]], [[[6.186, 49.464], [6.658, 49.202], [8.099, 49.018], [7.594, 48.333], [7.467, 47.621], [7.192, 47.45], [6.737, 47.542], [6.769, 47.288], [6.037, 46.726], [6.023, 46.273], [6.5, 46.43], [6.844, 45.991], [6.802, 45.709], [7.097, 45.333], [6.75, 45.029], [7.008, 44.255], [7.55, 44.128], [7.435, 43.694], [6.529, 43.129], [4.557, 43.4], [3.1, 43.075], [2.986, 42.473], [1.827, 42.343], [0.702, 42.796], [0.338, 42.58], [-1.503, 43.034], [-1.901, 43.423], [-1.384, 44.023], [-1.194, 46.015], [-2.226, 47.064], [-2.963, 47.57], [-4.492, 47.955], [-4.592, 48.684], [-3.296, 48.902], [-1.617, 48.644], [-1.933, 49.776], [-0.989, 49.347], [1.339, 50.127], [1.639, 50.947], [2.514, 51.149], [2.658, 50.797], [3.123, 50.78], [3.588, 50.379], [4.286, 49.907], [4.799, 49.985], [5.674, 49.529], [5.898, 49.443], [6.186, 49.464]]], [[[8.746, 42.628], [9.39, 43.01], [9.56, 42.152], [9.23, 41.38], [8.776, 41.584], [8.544, 42.257], [8.746, 42.628]]]]
        },
        {
          N: "Ecuador",
          I: "EC",
          C: [[[[-75.373, -0.152], [-75.234, -0.911], [-75.545, -1.562], [-76.635, -2.609], [-77.838, -3.003], [-78.451, -3.873], [-78.64, -4.548], [-79.205, -4.959], [-79.625, -4.454], [-80.029, -4.346], [-80.442, -4.426], [-80.469, -4.059], [-80.184, -3.821], [-80.303, -3.405], [-79.77, -2.658], [-79.987, -2.221], [-80.369, -2.685], [-80.968, -2.247], [-80.765, -1.965], [-80.934, -1.057], [-80.583, -0.907], [-80.399, -0.284], [-80.021, 0.36], [-80.091, 0.768], [-79.543, 0.983], [-78.855, 1.381], [-77.855, 0.81], [-77.669, 0.826], [-77.425, 0.396], [-76.576, 0.257], [-76.292, 0.416], [-75.801, 0.085], [-75.373, -0.152]]]]
        },
        {
          N: "Puerto Rico",
          I: "PR",
          C: [[[[-66.282, 18.515], [-65.771, 18.427], [-65.591, 18.228], [-65.847, 17.976], [-66.6, 17.982], [-67.184, 17.947], [-67.242, 18.374], [-67.101, 18.521], [-66.282, 18.515]]]]
        },
        {
          N: "Jamaica",
          I: "JM",
          C: [[[[-77.57, 18.491], [-76.897, 18.401], [-76.365, 18.161], [-76.2, 17.887], [-76.903, 17.868], [-77.206, 17.701], [-77.766, 17.862], [-78.338, 18.226], [-78.218, 18.455], [-77.797, 18.524], [-77.57, 18.491]]]]
        },
        {
          N: "Cuba",
          I: "CU",
          C: [[[[-82.268, 23.189], [-81.404, 23.117], [-80.619, 23.106], [-79.68, 22.765], [-79.281, 22.399], [-78.347, 22.512], [-77.993, 22.277], [-77.146, 21.658], [-76.524, 21.207], [-76.195, 21.221], [-75.598, 21.017], [-75.671, 20.735], [-74.934, 20.694], [-74.178, 20.285], [-74.297, 20.05], [-74.962, 19.923], [-75.635, 19.874], [-76.324, 19.953], [-77.755, 19.855], [-77.085, 20.413], [-77.493, 20.673], [-78.137, 20.74], [-78.483, 21.029], [-78.72, 21.598], [-79.285, 21.559], [-80.217, 21.827], [-80.518, 22.037], [-81.821, 22.192], [-82.17, 22.387], [-81.795, 22.637], [-82.776, 22.688], [-83.494, 22.169], [-83.909, 22.155], [-84.052, 21.911], [-84.547, 21.801], [-84.975, 21.896], [-84.447, 22.205], [-84.23, 22.566], [-83.778, 22.788], [-83.268, 22.983], [-82.51, 23.079], [-82.268, 23.189]]]]
        },
        {
          N: "Zimbabwe",
          I: "ZW",
          C: [[[[31.191, -22.252], [30.66, -22.152], [30.323, -22.272], [29.839, -22.102], [29.432, -22.091], [28.795, -21.639], [28.021, -21.486], [27.727, -20.852], [27.725, -20.499], [27.297, -20.392], [26.165, -19.293], [25.85, -18.714], [25.649, -18.536], [25.264, -17.737], [26.382, -17.846], [26.707, -17.961], [27.044, -17.938], [27.598, -17.291], [28.468, -16.468], [28.826, -16.39], [28.947, -16.043], [29.517, -15.645], [30.274, -15.508], [30.339, -15.881], [31.173, -15.861], [31.636, -16.072], [31.852, -16.319], [32.328, -16.392], [32.848, -16.713], [32.85, -17.979], [32.655, -18.672], [32.612, -19.419], [32.773, -19.716], [32.66, -20.304], [32.509, -20.395], [32.245, -21.116], [31.191, -22.252]]]]
        },
        {
          N: "Botswana",
          I: "BW",
          C: [[[[29.432, -22.091], [28.017, -22.828], [27.119, -23.574], [26.786, -24.241], [26.486, -24.616], [25.942, -24.696], [25.766, -25.175], [25.665, -25.487], [25.025, -25.72], [24.211, -25.67], [23.734, -25.39], [23.312, -25.269], [22.824, -25.5], [22.58, -25.979], [22.106, -26.28], [21.606, -26.727], [20.89, -26.829], [20.666, -26.477], [20.759, -25.868], [20.166, -24.918], [19.896, -24.768], [19.895, -21.849], [20.881, -21.814], [20.911, -18.252], [21.655, -18.219], [23.197, -17.869], [23.579, -18.281], [24.217, -17.889], [24.521, -17.887], [25.084, -17.662], [25.264, -17.737], [25.649, -18.536], [25.85, -18.714], [26.165, -19.293], [27.297, -20.392], [27.725, -20.499], [27.727, -20.852], [28.021, -21.486], [28.795, -21.639], [29.432, -22.091]]]]
        },
        {
          N: "Namibia",
          I: "NA",
          C: [[[[19.896, -24.768], [19.895, -28.461], [19.002, -28.972], [18.465, -29.045], [17.836, -28.856], [17.387, -28.784], [17.219, -28.356], [16.824, -28.082], [16.345, -28.577], [15.602, -27.821], [15.21, -27.091], [14.99, -26.117], [14.743, -25.393], [14.408, -23.853], [14.386, -22.657], [14.258, -22.111], [13.869, -21.699], [13.352, -20.873], [12.827, -19.673], [12.609, -19.045], [11.795, -18.069], [11.734, -17.302], [12.215, -17.112], [12.814, -16.941], [13.462, -16.971], [14.059, -17.423], [14.21, -17.353], [18.263, -17.31], [18.956, -17.789], [21.377, -17.931], [23.215, -17.523], [24.034, -17.296], [24.682, -17.353], [25.077, -17.579], [25.084, -17.662], [24.521, -17.887], [24.217, -17.889], [23.579, -18.281], [23.197, -17.869], [21.655, -18.219], [20.911, -18.252], [20.881, -21.814], [19.895, -21.849], [19.896, -24.768]]]]
        },
        {
          N: "Senegal",
          I: "SN",
          C: [[[[-16.714, 13.595], [-17.126, 14.374], [-17.625, 14.73], [-17.185, 14.919], [-16.701, 15.622], [-16.463, 16.135], [-16.121, 16.456], [-15.624, 16.369], [-15.136, 16.587], [-14.577, 16.598], [-14.1, 16.304], [-13.436, 16.039], [-12.831, 15.304], [-12.171, 14.617], [-12.125, 13.995], [-11.928, 13.422], [-11.553, 13.141], [-11.468, 12.755], [-11.514, 12.443], [-11.658, 12.387], [-12.204, 12.466], [-12.279, 12.354], [-12.499, 12.332], [-13.218, 12.576], [-13.7, 12.586], [-15.548, 12.628], [-15.817, 12.516], [-16.148, 12.548], [-16.677, 12.385], [-16.842, 13.151], [-15.931, 13.13], [-15.691, 13.27], [-15.512, 13.279], [-15.141, 13.51], [-14.712, 13.298], [-14.278, 13.281], [-13.845, 13.505], [-14.047, 13.794], [-14.377, 13.626], [-14.687, 13.63], [-15.082, 13.876], [-15.399, 13.86], [-15.625, 13.624], [-16.714, 13.595]]]]
        },
        {
          N: "Mali",
          I: "ML",
          C: [[[[-11.514, 12.443], [-11.468, 12.755], [-11.553, 13.141], [-11.928, 13.422], [-12.125, 13.995], [-12.171, 14.617], [-11.834, 14.799], [-11.666, 15.388], [-11.349, 15.411], [-10.651, 15.133], [-10.087, 15.33], [-9.7, 15.264], [-9.55, 15.486], [-5.538, 15.502], [-5.315, 16.202], [-5.489, 16.325], [-5.971, 20.641], [-6.454, 24.957], [-4.923, 24.975], [-1.55, 22.793], [1.823, 20.611], [2.061, 20.142], [2.684, 19.856], [3.147, 19.694], [3.158, 19.057], [4.267, 19.155], [4.27, 16.852], [3.723, 16.184], [3.638, 15.568], [2.75, 15.41], [1.386, 15.324], [1.016, 14.968], [0.375, 14.929], [-0.266, 14.924], [-0.516, 15.116], [-1.066, 14.974], [-2.001, 14.559], [-2.192, 14.246], [-2.968, 13.798], [-3.104, 13.541], [-3.523, 13.338], [-4.006, 13.472], [-4.28, 13.228], [-4.427, 12.543], [-5.221, 11.714], [-5.198, 11.375], [-5.471, 10.951], [-5.404, 10.371], [-5.817, 10.223], [-6.05, 10.096], [-6.205, 10.524], [-6.494, 10.411], [-6.666, 10.431], [-6.851, 10.139], [-7.623, 10.147], [-7.9, 10.297], [-8.03, 10.207], [-8.335, 10.495], [-8.282, 10.793], [-8.407, 10.909], [-8.62, 10.811], [-8.581, 11.136], [-8.376, 11.394], [-8.786, 11.813], [-8.905, 12.088], [-9.127, 12.308], [-9.328, 12.334], [-9.568, 12.194], [-9.891, 12.06], [-10.165, 11.844], [-10.593, 11.924], [-10.871, 12.178], [-11.037, 12.211], [-11.298, 12.078], [-11.456, 12.077], [-11.514, 12.443]]]]
        },
        {
          N: "Mauritania",
          I: "MR",
          C: [[[[-17.063, 21], [-16.845, 21.333], [-12.929, 21.327], [-13.119, 22.771], [-12.874, 23.285], [-11.937, 23.375], [-11.969, 25.933], [-8.687, 25.881], [-8.684, 27.396], [-4.923, 24.975], [-6.454, 24.957], [-5.971, 20.641], [-5.489, 16.325], [-5.315, 16.202], [-5.538, 15.502], [-9.55, 15.486], [-9.7, 15.264], [-10.087, 15.33], [-10.651, 15.133], [-11.349, 15.411], [-11.666, 15.388], [-11.834, 14.799], [-12.171, 14.617], [-12.831, 15.304], [-13.436, 16.039], [-14.1, 16.304], [-14.577, 16.598], [-15.136, 16.587], [-15.624, 16.369], [-16.121, 16.456], [-16.463, 16.135], [-16.55, 16.674], [-16.271, 17.167], [-16.146, 18.108], [-16.257, 19.097], [-16.378, 19.594], [-16.278, 20.093], [-16.536, 20.568], [-17.063, 21]]]]
        },
        {
          N: "Benin",
          I: "BJ",
          C: [[[[2.692, 6.259], [1.865, 6.142], [1.619, 6.832], [1.664, 9.129], [1.463, 9.335], [1.425, 9.825], [1.078, 10.176], [0.772, 10.471], [0.9, 10.997], [1.243, 11.111], [1.447, 11.548], [1.936, 11.641], [2.154, 11.94], [2.49, 12.233], [2.849, 12.236], [3.611, 11.66], [3.572, 11.328], [3.797, 10.735], [3.6, 10.332], [3.705, 10.063], [3.22, 9.444], [2.912, 9.138], [2.724, 8.507], [2.749, 7.871], [2.692, 6.259]]]]
        },
        {
          N: "Niger",
          I: "NE",
          C: [[[[14.851, 22.863], [15.097, 21.309], [15.471, 21.048], [15.487, 20.73], [15.903, 20.388], [15.686, 19.957], [15.3, 17.928], [15.248, 16.627], [13.972, 15.684], [13.54, 14.367], [13.957, 13.997], [13.954, 13.353], [14.596, 13.33], [14.496, 12.859], [14.214, 12.802], [14.181, 12.484], [13.995, 12.462], [13.319, 13.556], [13.084, 13.596], [12.302, 13.037], [11.528, 13.329], [10.99, 13.387], [10.701, 13.247], [10.115, 13.277], [9.525, 12.851], [9.015, 12.827], [7.805, 13.344], [7.331, 13.098], [6.82, 13.115], [6.445, 13.493], [5.443, 13.866], [4.368, 13.747], [4.108, 13.531], [3.967, 12.956], [3.681, 12.553], [3.611, 11.66], [2.849, 12.236], [2.49, 12.233], [2.154, 11.94], [2.177, 12.625], [1.024, 12.852], [0.993, 13.336], [0.43, 13.989], [0.296, 14.444], [0.375, 14.929], [1.016, 14.968], [1.386, 15.324], [2.75, 15.41], [3.638, 15.568], [3.723, 16.184], [4.27, 16.852], [4.267, 19.155], [5.678, 19.601], [8.573, 21.566], [12, 23.472], [13.581, 23.041], [14.144, 22.491], [14.851, 22.863]]]]
        },
        {
          N: "Nigeria",
          I: "NG",
          C: [[[[2.692, 6.259], [2.749, 7.871], [2.724, 8.507], [2.912, 9.138], [3.22, 9.444], [3.705, 10.063], [3.6, 10.332], [3.797, 10.735], [3.572, 11.328], [3.611, 11.66], [3.681, 12.553], [3.967, 12.956], [4.108, 13.531], [4.368, 13.747], [5.443, 13.866], [6.445, 13.493], [6.82, 13.115], [7.331, 13.098], [7.805, 13.344], [9.015, 12.827], [9.525, 12.851], [10.115, 13.277], [10.701, 13.247], [10.99, 13.387], [11.528, 13.329], [12.302, 13.037], [13.084, 13.596], [13.319, 13.556], [13.995, 12.462], [14.181, 12.484], [14.577, 12.085], [14.468, 11.905], [14.415, 11.572], [13.573, 10.799], [13.309, 10.16], [13.168, 9.641], [12.955, 9.418], [12.754, 8.718], [12.219, 8.306], [12.064, 7.8], [11.839, 7.397], [11.746, 6.981], [11.059, 6.644], [10.497, 7.055], [10.118, 7.039], [9.523, 6.453], [9.233, 6.444], [8.758, 5.48], [8.5, 4.772], [7.462, 4.412], [7.083, 4.465], [6.698, 4.241], [5.898, 4.262], [5.363, 4.888], [5.034, 5.612], [4.326, 6.271], [3.574, 6.258], [2.692, 6.259]]]]
        },
        {
          N: "Cameroon",
          I: "CM",
          C: [[[[14.496, 12.859], [14.893, 12.219], [14.96, 11.556], [14.924, 10.891], [15.468, 9.982], [14.909, 9.992], [14.627, 9.921], [14.171, 10.021], [13.954, 9.549], [14.544, 8.966], [14.98, 8.796], [15.121, 8.382], [15.436, 7.693], [15.279, 7.422], [14.777, 6.408], [14.537, 6.227], [14.459, 5.452], [14.559, 5.031], [14.478, 4.733], [14.951, 4.21], [15.036, 3.851], [15.405, 3.335], [15.863, 3.014], [15.907, 2.557], [16.013, 2.268], [15.941, 1.728], [15.146, 1.964], [14.338, 2.228], [13.076, 2.267], [12.951, 2.322], [12.359, 2.193], [11.752, 2.327], [11.276, 2.261], [9.649, 2.284], [9.795, 3.073], [9.404, 3.735], [8.948, 3.904], [8.745, 4.352], [8.489, 4.496], [8.5, 4.772], [8.758, 5.48], [9.233, 6.444], [9.523, 6.453], [10.118, 7.039], [10.497, 7.055], [11.059, 6.644], [11.746, 6.981], [11.839, 7.397], [12.064, 7.8], [12.219, 8.306], [12.754, 8.718], [12.955, 9.418], [13.168, 9.641], [13.309, 10.16], [13.573, 10.799], [14.415, 11.572], [14.468, 11.905], [14.577, 12.085], [14.181, 12.484], [14.214, 12.802], [14.496, 12.859]]]]
        },
        {
          N: "Togo",
          I: "TG",
          C: [[[[0.9, 10.997], [0.772, 10.471], [1.078, 10.176], [1.425, 9.825], [1.463, 9.335], [1.664, 9.129], [1.619, 6.832], [1.865, 6.142], [1.06, 5.929], [0.837, 6.28], [0.57, 6.914], [0.491, 7.412], [0.712, 8.312], [0.461, 8.677], [0.366, 9.465], [0.368, 10.191], [-0.05, 10.707], [0.024, 11.019], [0.9, 10.997]]]]
        },
        {
          N: "Ghana",
          I: "GH",
          C: [[[[0.024, 11.019], [-0.05, 10.707], [0.368, 10.191], [0.366, 9.465], [0.461, 8.677], [0.712, 8.312], [0.491, 7.412], [0.57, 6.914], [0.837, 6.28], [1.06, 5.929], [-0.508, 5.343], [-1.064, 5.001], [-1.965, 4.71], [-2.856, 4.994], [-2.811, 5.389], [-3.244, 6.25], [-2.984, 7.38], [-2.562, 8.22], [-2.827, 9.642], [-2.964, 10.395], [-2.94, 10.963], [-1.203, 11.01], [-0.762, 10.937], [-0.439, 11.098], [0.024, 11.019]]]]
        },
        {
          N: "Côted'Ivoire",
          I: "CI",
          C: [[[[-8.03, 10.207], [-7.9, 10.297], [-7.623, 10.147], [-6.851, 10.139], [-6.666, 10.431], [-6.494, 10.411], [-6.205, 10.524], [-6.05, 10.096], [-5.817, 10.223], [-5.404, 10.371], [-4.955, 10.153], [-4.78, 9.822], [-4.33, 9.611], [-3.98, 9.862], [-3.512, 9.9], [-2.827, 9.642], [-2.562, 8.22], [-2.984, 7.38], [-3.244, 6.25], [-2.811, 5.389], [-2.856, 4.994], [-3.311, 4.984], [-4.009, 5.18], [-4.65, 5.168], [-5.834, 4.994], [-6.529, 4.705], [-7.519, 4.338], [-7.712, 4.365], [-7.635, 5.188], [-7.54, 5.313], [-7.57, 5.707], [-7.994, 6.126], [-8.311, 6.193], [-8.603, 6.468], [-8.385, 6.912], [-8.485, 7.395], [-8.439, 7.686], [-8.281, 7.687], [-8.222, 8.123], [-8.299, 8.316], [-8.203, 8.455], [-7.832, 8.576], [-8.079, 9.376], [-8.31, 9.79], [-8.229, 10.129], [-8.03, 10.207]]]]
        },
        {
          N: "Guinea",
          I: "GN",
          C: [[[[-13.7, 12.586], [-13.218, 12.576], [-12.499, 12.332], [-12.279, 12.354], [-12.204, 12.466], [-11.658, 12.387], [-11.514, 12.443], [-11.456, 12.077], [-11.298, 12.078], [-11.037, 12.211], [-10.871, 12.178], [-10.593, 11.924], [-10.165, 11.844], [-9.891, 12.06], [-9.568, 12.194], [-9.328, 12.334], [-9.127, 12.308], [-8.905, 12.088], [-8.786, 11.813], [-8.376, 11.394], [-8.581, 11.136], [-8.62, 10.811], [-8.407, 10.909], [-8.282, 10.793], [-8.335, 10.495], [-8.03, 10.207], [-8.229, 10.129], [-8.31, 9.79], [-8.079, 9.376], [-7.832, 8.576], [-8.203, 8.455], [-8.299, 8.316], [-8.222, 8.123], [-8.281, 7.687], [-8.439, 7.686], [-8.722, 7.712], [-8.926, 7.309], [-9.209, 7.314], [-9.403, 7.527], [-9.337, 7.929], [-9.755, 8.541], [-10.017, 8.429], [-10.23, 8.406], [-10.505, 8.349], [-10.494, 8.716], [-10.655, 8.977], [-10.622, 9.268], [-10.839, 9.688], [-11.117, 10.046], [-11.917, 10.047], [-12.15, 9.859], [-12.426, 9.836], [-12.597, 9.62], [-12.712, 9.343], [-13.247, 8.903], [-13.685, 9.495], [-14.074, 9.886], [-14.33, 10.016], [-14.58, 10.214], [-14.693, 10.656], [-14.84, 10.877], [-15.13, 11.04], [-14.686, 11.528], [-14.382, 11.509], [-14.121, 11.677], [-13.901, 11.679], [-13.743, 11.811], [-13.828, 12.143], [-13.719, 12.247], [-13.7, 12.586]]]]
        },
        {
          N: "Guinea-Bissau",
          I: "GW",
          C: [[[[-16.677, 12.385], [-16.148, 12.548], [-15.817, 12.516], [-15.548, 12.628], [-13.7, 12.586], [-13.719, 12.247], [-13.828, 12.143], [-13.743, 11.811], [-13.901, 11.679], [-14.121, 11.677], [-14.382, 11.509], [-14.686, 11.528], [-15.13, 11.04], [-15.664, 11.458], [-16.085, 11.525], [-16.315, 11.807], [-16.309, 11.959], [-16.614, 12.171], [-16.677, 12.385]]]]
        },
        {
          N: "Liberia",
          I: "LR",
          C: [[[[-8.439, 7.686], [-8.485, 7.395], [-8.385, 6.912], [-8.603, 6.468], [-8.311, 6.193], [-7.994, 6.126], [-7.57, 5.707], [-7.54, 5.313], [-7.635, 5.188], [-7.712, 4.365], [-7.974, 4.356], [-9.005, 4.832], [-9.913, 5.594], [-10.765, 6.141], [-11.439, 6.786], [-11.2, 7.106], [-11.147, 7.397], [-10.696, 7.939], [-10.23, 8.406], [-10.017, 8.429], [-9.755, 8.541], [-9.337, 7.929], [-9.403, 7.527], [-9.209, 7.314], [-8.926, 7.309], [-8.722, 7.712], [-8.439, 7.686]]]]
        },
        {
          N: "Sierra Leone",
          I: "SL",
          C: [[[[-13.247, 8.903], [-12.712, 9.343], [-12.597, 9.62], [-12.426, 9.836], [-12.15, 9.859], [-11.917, 10.047], [-11.117, 10.046], [-10.839, 9.688], [-10.622, 9.268], [-10.655, 8.977], [-10.494, 8.716], [-10.505, 8.349], [-10.23, 8.406], [-10.696, 7.939], [-11.147, 7.397], [-11.2, 7.106], [-11.439, 6.786], [-11.708, 6.86], [-12.428, 7.263], [-12.949, 7.799], [-13.124, 8.164], [-13.247, 8.903]]]]
        },
        {
          N: "Burkina Faso",
          I: "BF",
          C: [[[[-5.404, 10.371], [-5.471, 10.951], [-5.198, 11.375], [-5.221, 11.714], [-4.427, 12.543], [-4.28, 13.228], [-4.006, 13.472], [-3.523, 13.338], [-3.104, 13.541], [-2.968, 13.798], [-2.192, 14.246], [-2.001, 14.559], [-1.066, 14.974], [-0.516, 15.116], [-0.266, 14.924], [0.375, 14.929], [0.296, 14.444], [0.43, 13.989], [0.993, 13.336], [1.024, 12.852], [2.177, 12.625], [2.154, 11.94], [1.936, 11.641], [1.447, 11.548], [1.243, 11.111], [0.9, 10.997], [0.024, 11.019], [-0.439, 11.098], [-0.762, 10.937], [-1.203, 11.01], [-2.94, 10.963], [-2.964, 10.395], [-2.827, 9.642], [-3.512, 9.9], [-3.98, 9.862], [-4.33, 9.611], [-4.78, 9.822], [-4.955, 10.153], [-5.404, 10.371]]]]
        },
        {
          N: "Central African Republic",
          I: "CF",
          C: [[[[27.374, 5.234], [27.044, 5.128], [26.403, 5.151], [25.65, 5.256], [25.279, 5.17], [25.129, 4.927], [24.805, 4.897], [24.411, 5.109], [23.297, 4.61], [22.841, 4.71], [22.704, 4.633], [22.405, 4.029], [21.659, 4.224], [20.928, 4.323], [20.291, 4.692], [19.468, 5.032], [18.932, 4.71], [18.543, 4.202], [18.453, 3.504], [17.81, 3.56], [17.133, 3.728], [16.537, 3.198], [16.013, 2.268], [15.907, 2.557], [15.863, 3.014], [15.405, 3.335], [15.036, 3.851], [14.951, 4.21], [14.478, 4.733], [14.559, 5.031], [14.459, 5.452], [14.537, 6.227], [14.777, 6.408], [15.279, 7.422], [16.106, 7.497], [16.291, 7.754], [16.456, 7.735], [16.706, 7.508], [17.965, 7.891], [18.39, 8.281], [18.911, 8.631], [18.812, 8.983], [19.094, 9.075], [20.06, 9.013], [21.001, 9.476], [21.724, 10.567], [22.231, 10.972], [22.864, 11.142], [22.978, 10.714], [23.554, 10.089], [23.557, 9.681], [23.395, 9.265], [23.459, 8.954], [23.806, 8.666], [24.567, 8.229], [25.115, 7.825], [25.124, 7.5], [25.797, 6.979], [26.213, 6.547], [26.466, 5.947], [27.213, 5.551], [27.374, 5.234]]]]
        },
        {
          N: "Republic of the Congo",
          I: "CG",
          C: [[[[18.453, 3.504], [18.394, 2.9], [18.094, 2.366], [17.899, 1.742], [17.774, 0.856], [17.827, 0.289], [17.664, -0.058], [17.639, -0.425], [17.524, -0.744], [16.865, -1.226], [16.407, -1.741], [15.973, -2.712], [16.006, -3.535], [15.754, -3.855], [15.171, -4.344], [14.583, -4.97], [14.209, -4.793], [14.145, -4.51], [13.6, -4.5], [13.258, -4.883], [12.996, -4.781], [12.621, -4.438], [12.319, -4.606], [11.915, -5.038], [11.094, -3.979], [11.855, -3.427], [11.478, -2.766], [11.821, -2.514], [12.496, -2.392], [12.575, -1.949], [13.11, -2.429], [13.992, -2.471], [14.299, -1.998], [14.425, -1.333], [14.316, -0.553], [13.843, 0.039], [14.276, 1.197], [14.027, 1.396], [13.283, 1.314], [13.003, 1.831], [13.076, 2.267], [14.338, 2.228], [15.146, 1.964], [15.941, 1.728], [16.013, 2.268], [16.537, 3.198], [17.133, 3.728], [17.81, 3.56], [18.453, 3.504]]]]
        },
        {
          N: "Gabon",
          I: "GA",
          C: [[[[11.276, 2.261], [11.752, 2.327], [12.359, 2.193], [12.951, 2.322], [13.076, 2.267], [13.003, 1.831], [13.283, 1.314], [14.027, 1.396], [14.276, 1.197], [13.843, 0.039], [14.316, -0.553], [14.425, -1.333], [14.299, -1.998], [13.992, -2.471], [13.11, -2.429], [12.575, -1.949], [12.496, -2.392], [11.821, -2.514], [11.478, -2.766], [11.855, -3.427], [11.094, -3.979], [10.066, -2.969], [9.405, -2.144], [8.798, -1.111], [8.83, -0.779], [9.048, -0.459], [9.291, 0.269], [9.493, 1.01], [9.83, 1.068], [11.285, 1.058], [11.276, 2.261]]]]
        },
        {
          N: "Equatorial Guinea",
          I: "GQ",
          C: [[[[9.649, 2.284], [11.276, 2.261], [11.285, 1.058], [9.83, 1.068], [9.493, 1.01], [9.306, 1.161], [9.649, 2.284]]]]
        },
        {
          N: "Zambia",
          I: "ZM",
          C: [[[[30.74, -8.34], [31.158, -8.595], [31.556, -8.762], [32.192, -8.93], [32.759, -9.231], [33.231, -9.677], [33.486, -10.526], [33.315, -10.797], [33.114, -11.607], [33.306, -12.436], [32.992, -12.784], [32.688, -13.713], [33.214, -13.972], [30.179, -14.796], [30.274, -15.508], [29.517, -15.645], [28.947, -16.043], [28.826, -16.39], [28.468, -16.468], [27.598, -17.291], [27.044, -17.938], [26.707, -17.961], [26.382, -17.846], [25.264, -17.737], [25.084, -17.662], [25.077, -17.579], [24.682, -17.353], [24.034, -17.296], [23.215, -17.523], [22.562, -16.898], [21.888, -16.08], [21.934, -12.898], [24.016, -12.911], [23.931, -12.566], [24.08, -12.191], [23.904, -11.722], [24.018, -11.237], [23.912, -10.927], [24.257, -10.952], [24.315, -11.263], [24.783, -11.239], [25.418, -11.331], [25.752, -11.785], [26.553, -11.924], [27.164, -11.609], [27.389, -12.133], [28.155, -12.272], [28.524, -12.699], [28.934, -13.249], [29.7, -13.257], [29.616, -12.179], [29.342, -12.361], [28.642, -11.972], [28.372, -11.794], [28.496, -10.79], [28.674, -9.606], [28.45, -9.165], [28.735, -8.527], [29.003, -8.407], [30.346, -8.238], [30.74, -8.34]]]]
        },
        {
          N: "Malawi",
          I: "MW",
          C: [[[[32.759, -9.231], [33.74, -9.417], [33.941, -9.694], [34.28, -10.16], [34.56, -11.52], [34.28, -12.28], [34.56, -13.58], [34.907, -13.565], [35.268, -13.888], [35.687, -14.611], [35.772, -15.897], [35.339, -16.107], [35.034, -16.801], [34.381, -16.184], [34.307, -15.479], [34.518, -15.014], [34.46, -14.613], [34.065, -14.36], [33.79, -14.452], [33.214, -13.972], [32.688, -13.713], [32.992, -12.784], [33.306, -12.436], [33.114, -11.607], [33.315, -10.797], [33.486, -10.526], [33.231, -9.677], [32.759, -9.231]]]]
        },
        {
          N: "Mozambique",
          I: "MZ",
          C: [[[[34.56, -11.52], [35.312, -11.439], [36.514, -11.721], [36.775, -11.595], [37.471, -11.569], [37.828, -11.269], [38.428, -11.285], [39.521, -10.897], [40.317, -10.317], [40.317, -10.317], [40.317, -10.317], [40.478, -10.765], [40.437, -11.762], [40.561, -12.639], [40.6, -14.202], [40.775, -14.692], [40.477, -15.406], [40.089, -16.101], [39.453, -16.721], [38.538, -17.101], [37.411, -17.586], [36.281, -18.66], [35.896, -18.842], [35.198, -19.553], [34.786, -19.784], [34.702, -20.497], [35.176, -21.254], [35.373, -21.841], [35.386, -22.14], [35.563, -22.09], [35.534, -23.071], [35.372, -23.535], [35.607, -23.707], [35.459, -24.123], [35.041, -24.478], [34.216, -24.816], [33.013, -25.358], [32.575, -25.727], [32.66, -26.149], [32.916, -26.216], [32.83, -26.742], [32.072, -26.734], [31.986, -26.292], [31.838, -25.843], [31.752, -25.484], [31.931, -24.369], [31.67, -23.659], [31.191, -22.252], [32.245, -21.116], [32.509, -20.395], [32.66, -20.304], [32.773, -19.716], [32.612, -19.419], [32.655, -18.672], [32.85, -17.979], [32.848, -16.713], [32.328, -16.392], [31.852, -16.319], [31.636, -16.072], [31.173, -15.861], [30.339, -15.881], [30.274, -15.508], [30.179, -14.796], [33.214, -13.972], [33.79, -14.452], [34.065, -14.36], [34.46, -14.613], [34.518, -15.014], [34.307, -15.479], [34.381, -16.184], [35.034, -16.801], [35.339, -16.107], [35.772, -15.897], [35.687, -14.611], [35.268, -13.888], [34.907, -13.565], [34.56, -13.58], [34.28, -12.28], [34.56, -11.52]]]]
        },
        {
          N: "Eswatini",
          I: "SZ",
          C: [[[[32.072, -26.734], [31.868, -27.178], [31.283, -27.286], [30.686, -26.744], [30.677, -26.398], [30.95, -26.023], [31.044, -25.731], [31.333, -25.66], [31.838, -25.843], [31.986, -26.292], [32.072, -26.734]]]]
        },
        {
          N: "Angola",
          I: "AO",
          C: [[[[12.996, -4.781], [12.632, -4.991], [12.468, -5.248], [12.437, -5.684], [12.182, -5.79], [11.915, -5.038], [12.319, -4.606], [12.621, -4.438], [12.996, -4.781]]], [[[12.322, -6.1], [12.735, -5.966], [13.025, -5.984], [13.376, -5.864], [16.327, -5.877], [16.573, -6.623], [16.86, -7.222], [17.09, -7.546], [17.473, -8.069], [18.134, -7.988], [18.464, -7.847], [19.017, -7.988], [19.167, -7.738], [19.418, -7.155], [20.038, -7.116], [20.092, -6.943], [20.602, -6.939], [20.515, -7.3], [21.728, -7.291], [21.746, -7.92], [21.949, -8.306], [21.802, -8.909], [21.875, -9.524], [22.209, -9.895], [22.155, -11.085], [22.403, -10.993], [22.837, -11.018], [23.457, -10.868], [23.912, -10.927], [24.018, -11.237], [23.904, -11.722], [24.08, -12.191], [23.931, -12.566], [24.016, -12.911], [21.934, -12.898], [21.888, -16.08], [22.562, -16.898], [23.215, -17.523], [21.377, -17.931], [18.956, -17.789], [18.263, -17.31], [14.21, -17.353], [14.059, -17.423], [13.462, -16.971], [12.814, -16.941], [12.215, -17.112], [11.734, -17.302], [11.64, -16.673], [11.779, -15.794], [12.124, -14.878], [12.176, -14.449], [12.5, -13.548], [12.738, -13.138], [13.313, -12.484], [13.634, -12.039], [13.739, -11.298], [13.686, -10.731], [13.387, -10.374], [13.121, -9.767], [12.875, -9.167], [12.929, -8.959], [13.236, -8.563], [12.933, -7.597], [12.728, -6.927], [12.227, -6.294], [12.322, -6.1]]]]
        },
        {
          N: "Burundi",
          I: "BI",
          C: [[[[30.47, -2.414], [30.528, -2.808], [30.743, -3.034], [30.752, -3.359], [30.506, -3.569], [30.116, -4.09], [29.754, -4.452], [29.34, -4.5], [29.276, -3.294], [29.025, -2.839], [29.632, -2.918], [29.938, -2.348], [30.47, -2.414]]]]
        },
        {
          N: "Israel",
          I: "IL",
          C: [[[[35.72, 32.709], [35.546, 32.394], [35.184, 32.533], [34.975, 31.867], [35.226, 31.754], [34.971, 31.617], [34.927, 31.353], [35.398, 31.489], [35.421, 31.1], [34.923, 29.501], [34.823, 29.761], [34.265, 31.219], [34.265, 31.219], [34.265, 31.219], [34.556, 31.549], [34.488, 31.606], [34.753, 32.073], [34.955, 32.827], [35.098, 33.081], [35.126, 33.091], [35.461, 33.089], [35.553, 33.264], [35.821, 33.277], [35.836, 32.868], [35.701, 32.716], [35.72, 32.709]]]]
        },
        {
          N: "Lebanon",
          I: "LB",
          C: [[[[35.821, 33.277], [35.553, 33.264], [35.461, 33.089], [35.126, 33.091], [35.482, 33.905], [35.98, 34.61], [35.998, 34.645], [36.448, 34.594], [36.612, 34.202], [36.066, 33.825], [35.821, 33.277]]]]
        },
        {
          N: "Madagascar",
          I: "MG",
          C: [[[[49.544, -12.47], [49.809, -12.895], [50.057, -13.556], [50.217, -14.759], [50.477, -15.227], [50.377, -15.706], [50.2, -16], [49.861, -15.414], [49.673, -15.71], [49.863, -16.451], [49.775, -16.875], [49.499, -17.106], [49.436, -17.953], [49.042, -19.119], [48.549, -20.497], [47.931, -22.392], [47.548, -23.782], [47.096, -24.942], [46.282, -25.178], [45.41, -25.601], [44.834, -25.346], [44.04, -24.988], [43.764, -24.461], [43.698, -23.574], [43.346, -22.777], [43.254, -22.057], [43.433, -21.336], [43.894, -21.163], [43.896, -20.83], [44.374, -20.072], [44.464, -19.435], [44.232, -18.962], [44.043, -18.331], [43.963, -17.41], [44.312, -16.85], [44.447, -16.216], [44.945, -16.179], [45.503, -15.974], [45.873, -15.793], [46.312, -15.78], [46.882, -15.21], [47.705, -14.594], [48.005, -14.091], [47.869, -13.664], [48.294, -13.784], [48.845, -13.089], [48.864, -12.488], [49.195, -12.041], [49.544, -12.47]]]]
        },
        {
          N: "Palestine",
          I: "PS",
          C: [[[[35.398, 31.489], [34.927, 31.353], [34.971, 31.617], [35.226, 31.754], [34.975, 31.867], [35.184, 32.533], [35.546, 32.394], [35.545, 31.783], [35.398, 31.489]]]]
        },
        {
          N: "The Gambia",
          I: "GM",
          C: [[[[-16.714, 13.595], [-15.625, 13.624], [-15.399, 13.86], [-15.082, 13.876], [-14.687, 13.63], [-14.377, 13.626], [-14.047, 13.794], [-13.845, 13.505], [-14.278, 13.281], [-14.712, 13.298], [-15.141, 13.51], [-15.512, 13.279], [-15.691, 13.27], [-15.931, 13.13], [-16.842, 13.151], [-16.714, 13.595]]]]
        },
        {
          N: "Tunisia",
          I: "TN",
          C: [[[[9.482, 30.308], [9.056, 32.103], [8.439, 32.506], [8.43, 32.748], [7.613, 33.344], [7.524, 34.097], [8.141, 34.655], [8.376, 35.48], [8.218, 36.433], [8.421, 36.946], [9.51, 37.35], [10.21, 37.23], [10.181, 36.724], [11.029, 37.092], [11.1, 36.9], [10.6, 36.41], [10.593, 35.947], [10.94, 35.699], [10.808, 34.834], [10.15, 34.331], [10.34, 33.786], [10.857, 33.769], [11.109, 33.293], [11.489, 33.137], [11.432, 32.369], [10.945, 32.082], [10.637, 31.761], [9.95, 31.376], [10.057, 30.962], [9.97, 30.539], [9.482, 30.308]]]]
        },
        {
          N: "Algeria",
          I: "DZ",
          C: [[[[-8.684, 27.396], [-8.665, 27.589], [-8.666, 27.656], [-8.674, 28.841], [-7.059, 29.579], [-6.061, 29.732], [-5.242, 30], [-4.86, 30.501], [-3.69, 30.897], [-3.647, 31.637], [-3.069, 31.724], [-2.617, 32.094], [-1.308, 32.263], [-1.125, 32.652], [-1.388, 32.864], [-1.733, 33.92], [-1.793, 34.528], [-2.17, 35.168], [-1.209, 35.715], [-0.127, 35.889], [0.504, 36.301], [1.467, 36.606], [3.162, 36.784], [4.816, 36.865], [5.32, 36.717], [6.262, 37.111], [7.33, 37.118], [7.737, 36.886], [8.421, 36.946], [8.218, 36.433], [8.376, 35.48], [8.141, 34.655], [7.524, 34.097], [7.613, 33.344], [8.43, 32.748], [8.439, 32.506], [9.056, 32.103], [9.482, 30.308], [9.806, 29.425], [9.86, 28.96], [9.684, 28.144], [9.756, 27.688], [9.629, 27.141], [9.716, 26.512], [9.319, 26.094], [9.911, 25.365], [9.948, 24.937], [10.304, 24.379], [10.771, 24.563], [11.561, 24.098], [12, 23.472], [8.573, 21.566], [5.678, 19.601], [4.267, 19.155], [3.158, 19.057], [3.147, 19.694], [2.684, 19.856], [2.061, 20.142], [1.823, 20.611], [-1.55, 22.793], [-4.923, 24.975], [-8.684, 27.396]]]]
        },
        {
          N: "Jordan",
          I: "JO",
          C: [[[[35.546, 32.394], [35.72, 32.709], [36.834, 32.313], [38.792, 33.379], [39.195, 32.161], [39.005, 32.01], [37.002, 31.508], [37.999, 30.508], [37.668, 30.339], [37.504, 30.004], [36.741, 29.865], [36.501, 29.505], [36.069, 29.197], [34.956, 29.357], [34.923, 29.501], [35.421, 31.1], [35.398, 31.489], [35.545, 31.783], [35.546, 32.394]]]]
        },
        {
          N: "United Arab Emirates",
          I: "AE",
          C: [[[[51.58, 24.245], [51.757, 24.294], [51.794, 24.02], [52.577, 24.177], [53.404, 24.151], [54.008, 24.122], [54.693, 24.798], [55.439, 25.439], [56.071, 26.055], [56.261, 25.715], [56.397, 24.925], [55.886, 24.921], [55.804, 24.27], [55.981, 24.131], [55.529, 23.934], [55.526, 23.525], [55.234, 23.111], [55.208, 22.708], [55.007, 22.497], [52.001, 23.001], [51.618, 24.014], [51.58, 24.245]]]]
        },
        {
          N: "Qatar",
          I: "QA",
          C: [[[[50.81, 24.755], [50.744, 25.482], [51.013, 26.007], [51.286, 26.115], [51.589, 25.801], [51.607, 25.216], [51.39, 24.627], [51.112, 24.556], [50.81, 24.755]]]]
        },
        {
          N: "Kuwait",
          I: "KW",
          C: [[[[47.975, 29.976], [48.183, 29.534], [48.094, 29.306], [48.416, 28.552], [47.709, 28.526], [47.46, 29.003], [46.569, 29.099], [47.303, 30.059], [47.975, 29.976]]]]
        },
        {
          N: "Iraq",
          I: "IQ",
          C: [[[[39.195, 32.161], [38.792, 33.379], [41.006, 34.419], [41.384, 35.628], [41.29, 36.359], [41.837, 36.606], [42.35, 37.23], [42.779, 37.385], [43.942, 37.256], [44.293, 37.002], [44.773, 37.17], [45.421, 35.978], [46.076, 35.677], [46.152, 35.093], [45.648, 34.748], [45.417, 33.968], [46.109, 33.017], [47.335, 32.469], [47.849, 31.709], [47.685, 30.985], [48.005, 30.985], [48.015, 30.452], [48.568, 29.927], [47.975, 29.976], [47.303, 30.059], [46.569, 29.099], [44.709, 29.179], [41.89, 31.19], [40.4, 31.89], [39.195, 32.161]]]]
        },
        {
          N: "Oman",
          I: "OM",
          C: [[[[55.208, 22.708], [55.234, 23.111], [55.526, 23.525], [55.529, 23.934], [55.981, 24.131], [55.804, 24.27], [55.886, 24.921], [56.397, 24.925], [56.845, 24.242], [57.403, 23.879], [58.137, 23.748], [58.729, 23.566], [59.181, 22.992], [59.45, 22.66], [59.808, 22.534], [59.806, 22.311], [59.442, 21.715], [59.282, 21.434], [58.861, 21.114], [58.488, 20.429], [58.034, 20.481], [57.826, 20.243], [57.666, 19.736], [57.789, 19.068], [57.694, 18.945], [57.234, 18.948], [56.61, 18.574], [56.512, 18.087], [56.284, 17.876], [55.661, 17.884], [55.27, 17.632], [55.275, 17.228], [54.791, 16.951], [54.239, 17.045], [53.571, 16.708], [53.109, 16.651], [52.782, 17.35], [52, 19], [55, 20], [55.667, 22], [55.208, 22.708]]], [[[56.261, 25.715], [56.071, 26.055], [56.362, 26.396], [56.486, 26.309], [56.391, 25.896], [56.261, 25.715]]]]
        },
        {
          N: "Vanuatu",
          I: "VU",
          C: [[[[167.217, -15.892], [167.845, -16.466], [167.515, -16.598], [167.18, -16.16], [167.217, -15.892]]], [[[166.793, -15.669], [166.65, -15.393], [166.629, -14.626], [167.108, -14.934], [167.27, -15.74], [167.001, -15.615], [166.793, -15.669]]]]
        },
        {
          N: "Cambodia",
          I: "KH",
          C: [[[[102.585, 12.187], [102.348, 13.394], [102.988, 14.226], [104.281, 14.417], [105.219, 14.273], [106.044, 13.881], [106.496, 14.571], [107.383, 14.202], [107.615, 13.536], [107.491, 12.337], [105.811, 11.568], [106.25, 10.962], [105.2, 10.889], [104.334, 10.487], [103.497, 10.633], [103.091, 11.154], [102.585, 12.187]]]]
        },
        {
          N: "Thailand",
          I: "TH",
          C: [[[[105.219, 14.273], [104.281, 14.417], [102.988, 14.226], [102.348, 13.394], [102.585, 12.187], [101.687, 12.646], [100.832, 12.627], [100.978, 13.413], [100.098, 13.407], [100.019, 12.307], [99.479, 10.846], [99.154, 9.963], [99.222, 9.239], [99.874, 9.208], [100.28, 8.295], [100.459, 7.43], [101.017, 6.857], [101.623, 6.741], [102.141, 6.222], [101.814, 5.811], [101.154, 5.691], [101.076, 6.205], [100.26, 6.643], [100.086, 6.464], [99.691, 6.848], [99.52, 7.343], [98.988, 7.908], [98.504, 8.382], [98.34, 7.795], [98.15, 8.35], [98.259, 8.974], [98.554, 9.933], [99.038, 10.961], [99.587, 11.893], [99.196, 12.805], [99.212, 13.269], [99.098, 13.828], [98.431, 14.622], [98.192, 15.124], [98.537, 15.308], [98.903, 16.178], [98.494, 16.838], [97.859, 17.568], [97.376, 18.445], [97.798, 18.627], [98.254, 19.708], [98.96, 19.753], [99.543, 20.187], [100.116, 20.418], [100.549, 20.109], [100.606, 19.508], [101.282, 19.463], [101.036, 18.409], [101.06, 17.512], [102.114, 18.109], [102.413, 17.933], [102.999, 17.962], [103.2, 18.31], [103.956, 18.241], [104.717, 17.429], [104.779, 16.442], [105.589, 15.57], [105.544, 14.724], [105.219, 14.273]]]]
        },
        {
          N: "Lao PDR",
          I: "LA",
          C: [[[[107.383, 14.202], [106.496, 14.571], [106.044, 13.881], [105.219, 14.273], [105.544, 14.724], [105.589, 15.57], [104.779, 16.442], [104.717, 17.429], [103.956, 18.241], [103.2, 18.31], [102.999, 17.962], [102.413, 17.933], [102.114, 18.109], [101.06, 17.512], [101.036, 18.409], [101.282, 19.463], [100.606, 19.508], [100.549, 20.109], [100.116, 20.418], [100.329, 20.786], [101.18, 21.437], [101.27, 21.202], [101.803, 21.174], [101.652, 22.318], [102.17, 22.465], [102.755, 21.675], [103.204, 20.767], [104.435, 20.759], [104.823, 19.887], [104.183, 19.625], [103.897, 19.265], [105.095, 18.667], [105.926, 17.485], [106.556, 16.604], [107.313, 15.909], [107.565, 15.202], [107.383, 14.202]]]]
        },
        {
          N: "Myanmar",
          I: "MM",
          C: [[[[100.116, 20.418], [99.543, 20.187], [98.96, 19.753], [98.254, 19.708], [97.798, 18.627], [97.376, 18.445], [97.859, 17.568], [98.494, 16.838], [98.903, 16.178], [98.537, 15.308], [98.192, 15.124], [98.431, 14.622], [99.098, 13.828], [99.212, 13.269], [99.196, 12.805], [99.587, 11.893], [99.038, 10.961], [98.554, 9.933], [98.457, 10.675], [98.765, 11.441], [98.428, 12.033], [98.51, 13.122], [98.104, 13.64], [97.778, 14.837], [97.597, 16.101], [97.165, 16.929], [96.506, 16.427], [95.369, 15.714], [94.808, 15.803], [94.189, 16.038], [94.533, 17.277], [94.325, 18.214], [93.541, 19.366], [93.663, 19.727], [93.078, 19.855], [92.369, 20.671], [92.303, 21.475], [92.652, 21.324], [92.673, 22.041], [93.166, 22.278], [93.06, 22.703], [93.286, 23.044], [93.325, 24.079], [94.107, 23.851], [94.553, 24.675], [94.603, 25.162], [95.155, 26.001], [95.125, 26.574], [96.419, 27.265], [97.134, 27.084], [97.052, 27.699], [97.403, 27.883], [97.327, 28.262], [97.912, 28.336], [98.246, 27.747], [98.683, 27.509], [98.712, 26.744], [98.672, 25.919], [97.725, 25.084], [97.605, 23.897], [98.66, 24.063], [98.899, 23.143], [99.532, 22.949], [99.241, 22.118], [99.983, 21.743], [100.417, 21.559], [101.15, 21.85], [101.18, 21.437], [100.329, 20.786], [100.116, 20.418]]]]
        },
        {
          N: "Vietnam",
          I: "VN",
          C: [[[[104.334, 10.487], [105.2, 10.889], [106.25, 10.962], [105.811, 11.568], [107.491, 12.337], [107.615, 13.536], [107.383, 14.202], [107.565, 15.202], [107.313, 15.909], [106.556, 16.604], [105.926, 17.485], [105.095, 18.667], [103.897, 19.265], [104.183, 19.625], [104.823, 19.887], [104.435, 20.759], [103.204, 20.767], [102.755, 21.675], [102.17, 22.465], [102.707, 22.709], [103.505, 22.704], [104.477, 22.819], [105.329, 23.352], [105.811, 22.977], [106.725, 22.794], [106.567, 22.218], [107.043, 21.812], [108.05, 21.552], [106.715, 20.697], [105.882, 19.752], [105.662, 19.058], [106.427, 18.004], [107.362, 16.697], [108.269, 16.08], [108.877, 15.277], [109.335, 13.426], [109.2, 11.667], [108.366, 11.008], [107.221, 10.364], [106.405, 9.531], [105.158, 8.6], [104.795, 9.241], [105.076, 9.918], [104.334, 10.487]]]]
        },
        {
          N: "Dem. Rep. Korea",
          I: "KP",
          C: [[[[130.78, 42.22], [130.78, 42.22], [130.78, 42.22], [130.78, 42.22]]], [[[130.64, 42.395], [130.64, 42.395], [130.78, 42.22], [130.4, 42.28], [129.966, 41.941], [129.667, 41.601], [129.705, 40.883], [129.188, 40.662], [129.01, 40.485], [128.633, 40.19], [127.967, 40.025], [127.533, 39.757], [127.502, 39.324], [127.385, 39.213], [127.783, 39.051], [128.35, 38.612], [128.206, 38.37], [127.78, 38.305], [127.073, 38.256], [126.684, 37.805], [126.237, 37.84], [126.175, 37.75], [125.689, 37.94], [125.568, 37.752], [125.275, 37.669], [125.24, 37.857], [124.981, 37.949], [124.712, 38.108], [124.986, 38.548], [125.222, 38.666], [125.133, 38.849], [125.387, 39.388], [125.321, 39.551], [124.737, 39.66], [124.266, 39.928], [125.08, 40.57], [126.182, 41.107], [126.869, 41.817], [127.344, 41.503], [128.208, 41.467], [128.052, 41.994], [129.597, 42.425], [129.994, 42.985], [130.64, 42.395]]]]
        },
        {
          N: "Republic of Korea",
          I: "KR",
          C: [[[[126.175, 37.75], [126.237, 37.84], [126.684, 37.805], [127.073, 38.256], [127.78, 38.305], [128.206, 38.37], [128.35, 38.612], [129.213, 37.432], [129.46, 36.784], [129.468, 35.632], [129.091, 35.082], [128.186, 34.89], [127.387, 34.476], [126.486, 34.39], [126.374, 34.935], [126.559, 35.685], [126.117, 36.725], [126.86, 36.894], [126.175, 37.75]]]]
        },
        {
          N: "Mongolia",
          I: "MN",
          C: [[[[87.751, 49.297], [88.806, 49.471], [90.714, 50.332], [92.235, 50.802], [93.104, 50.495], [94.148, 50.481], [94.816, 50.013], [95.814, 49.977], [97.26, 49.726], [98.232, 50.422], [97.826, 51.011], [98.861, 52.047], [99.982, 51.634], [100.889, 51.517], [102.065, 51.26], [102.256, 50.511], [103.677, 50.09], [104.622, 50.275], [105.887, 50.406], [106.889, 50.274], [107.868, 49.794], [108.475, 49.283], [109.402, 49.293], [110.662, 49.13], [111.581, 49.378], [112.898, 49.544], [114.362, 50.248], [114.962, 50.14], [115.486, 49.805], [116.679, 49.889], [116.192, 49.135], [115.485, 48.135], [115.743, 47.727], [116.309, 47.853], [117.296, 47.698], [118.064, 48.067], [118.867, 47.747], [119.773, 47.048], [119.663, 46.693], [118.874, 46.805], [117.422, 46.673], [116.718, 46.388], [115.985, 45.727], [114.46, 45.34], [113.464, 44.809], [112.436, 45.012], [111.873, 45.102], [111.348, 44.457], [111.668, 44.073], [111.83, 43.743], [111.13, 43.407], [110.412, 42.871], [109.244, 42.519], [107.745, 42.482], [106.129, 42.134], [104.965, 41.597], [104.522, 41.908], [103.312, 41.907], [101.833, 42.515], [100.846, 42.664], [99.516, 42.525], [97.452, 42.749], [96.349, 42.726], [95.762, 43.319], [95.307, 44.241], [94.689, 44.352], [93.481, 44.975], [92.134, 45.115], [90.946, 45.286], [90.586, 45.72], [90.971, 46.888], [90.281, 47.694], [88.854, 48.069], [88.014, 48.599], [87.751, 49.297]]]]
        },
        {
          N: "India",
          I: "IN",
          C: [[[[97.327, 28.262], [97.403, 27.883], [97.052, 27.699], [97.134, 27.084], [96.419, 27.265], [95.125, 26.574], [95.155, 26.001], [94.603, 25.162], [94.553, 24.675], [94.107, 23.851], [93.325, 24.079], [93.286, 23.044], [93.06, 22.703], [93.166, 22.278], [92.673, 22.041], [92.146, 23.627], [91.87, 23.624], [91.706, 22.985], [91.159, 23.504], [91.468, 24.073], [91.915, 24.13], [92.376, 24.977], [91.8, 25.147], [90.872, 25.133], [89.921, 25.27], [89.832, 25.965], [89.355, 26.014], [88.563, 26.447], [88.21, 25.768], [88.932, 25.239], [88.306, 24.866], [88.084, 24.502], [88.7, 24.234], [88.53, 23.631], [88.876, 22.879], [89.032, 22.056], [88.889, 21.691], [88.208, 21.703], [86.976, 21.496], [87.033, 20.743], [86.499, 20.152], [85.06, 19.479], [83.941, 18.302], [83.189, 17.671], [82.193, 17.017], [82.191, 16.557], [81.693, 16.31], [80.792, 15.952], [80.325, 15.899], [80.025, 15.136], [80.233, 13.836], [80.286, 13.006], [79.863, 12.056], [79.858, 10.357], [79.341, 10.309], [78.885, 9.546], [79.19, 9.217], [78.278, 8.933], [77.941, 8.253], [77.54, 7.966], [76.593, 8.899], [76.13, 10.3], [75.746, 11.308], [75.396, 11.781], [74.865, 12.742], [74.617, 13.993], [74.444, 14.617], [73.534, 15.991], [73.12, 17.929], [72.821, 19.208], [72.824, 20.42], [72.631, 21.356], [71.175, 20.757], [70.47, 20.877], [69.164, 22.089], [69.645, 22.451], [69.35, 22.843], [68.177, 23.692], [68.843, 24.359], [71.043, 24.357], [70.845, 25.215], [70.283, 25.722], [70.169, 26.492], [69.514, 26.941], [70.616, 27.989], [71.778, 27.913], [72.824, 28.962], [73.451, 29.976], [74.421, 30.98], [74.406, 31.693], [75.259, 32.271], [74.452, 32.765], [74.104, 33.441], [73.75, 34.318], [74.24, 34.749], [75.757, 34.505], [76.872, 34.654], [77.837, 35.494], [78.912, 34.322], [78.811, 33.506], [79.209, 32.994], [79.176, 32.484], [78.458, 32.618], [78.739, 31.516], [79.721, 30.883], [81.111, 30.183], [80.477, 29.73], [80.088, 28.794], [81.057, 28.416], [82, 27.925], [83.304, 27.365], [84.675, 27.235], [85.252, 26.726], [86.024, 26.631], [87.227, 26.398], [88.06, 26.415], [88.175, 26.81], [88.043, 27.446], [88.12, 27.877], [88.73, 28.087], [88.814, 27.299], [88.836, 27.099], [89.745, 26.719], [90.373, 26.876], [91.218, 26.809], [92.033, 26.838], [92.104, 27.453], [91.697, 27.772], [92.503, 27.897], [93.413, 28.641], [94.566, 29.277], [95.405, 29.032], [96.118, 29.453], [96.587, 28.831], [96.249, 28.411], [97.327, 28.262]]]]
        },
        {
          N: "Bangladesh",
          I: "BD",
          C: [[[[92.673, 22.041], [92.652, 21.324], [92.303, 21.475], [92.369, 20.671], [92.083, 21.192], [92.025, 21.702], [91.835, 22.183], [91.417, 22.765], [90.496, 22.805], [90.587, 22.393], [90.273, 21.836], [89.847, 22.039], [89.702, 21.857], [89.419, 21.966], [89.032, 22.056], [88.876, 22.879], [88.53, 23.631], [88.7, 24.234], [88.084, 24.502], [88.306, 24.866], [88.932, 25.239], [88.21, 25.768], [88.563, 26.447], [89.355, 26.014], [89.832, 25.965], [89.921, 25.27], [90.872, 25.133], [91.8, 25.147], [92.376, 24.977], [91.915, 24.13], [91.468, 24.073], [91.159, 23.504], [91.706, 22.985], [91.87, 23.624], [92.146, 23.627], [92.673, 22.041]]]]
        },
        {
          N: "Bhutan",
          I: "BT",
          C: [[[[91.697, 27.772], [92.104, 27.453], [92.033, 26.838], [91.218, 26.809], [90.373, 26.876], [89.745, 26.719], [88.836, 27.099], [88.814, 27.299], [89.476, 28.043], [90.016, 28.296], [90.731, 28.065], [91.259, 28.041], [91.697, 27.772]]]]
        },
        {
          N: "Nepal",
          I: "NP",
          C: [[[[88.12, 27.877], [88.043, 27.446], [88.175, 26.81], [88.06, 26.415], [87.227, 26.398], [86.024, 26.631], [85.252, 26.726], [84.675, 27.235], [83.304, 27.365], [82, 27.925], [81.057, 28.416], [80.088, 28.794], [80.477, 29.73], [81.111, 30.183], [81.526, 30.423], [82.328, 30.115], [83.337, 29.464], [83.899, 29.32], [84.235, 28.84], [85.012, 28.643], [85.823, 28.204], [86.955, 27.974], [88.12, 27.877]]]]
        },
        {
          N: "Pakistan",
          I: "PK",
          C: [[[[77.837, 35.494], [76.872, 34.654], [75.757, 34.505], [74.24, 34.749], [73.75, 34.318], [74.104, 33.441], [74.452, 32.765], [75.259, 32.271], [74.406, 31.693], [74.421, 30.98], [73.451, 29.976], [72.824, 28.962], [71.778, 27.913], [70.616, 27.989], [69.514, 26.941], [70.169, 26.492], [70.283, 25.722], [70.845, 25.215], [71.043, 24.357], [68.843, 24.359], [68.177, 23.692], [67.444, 23.945], [67.145, 24.664], [66.373, 25.425], [64.53, 25.237], [62.906, 25.218], [61.497, 25.078], [61.874, 26.24], [63.317, 26.757], [63.234, 27.217], [62.755, 27.379], [62.728, 28.26], [61.772, 28.699], [61.369, 29.303], [60.874, 29.829], [62.55, 29.319], [63.55, 29.468], [64.148, 29.341], [64.35, 29.56], [65.047, 29.472], [66.346, 29.888], [66.381, 30.739], [66.939, 31.305], [67.683, 31.303], [67.793, 31.583], [68.557, 31.713], [68.927, 31.62], [69.318, 31.901], [69.263, 32.502], [69.687, 33.105], [70.324, 33.359], [69.931, 34.02], [70.882, 33.989], [71.157, 34.349], [71.115, 34.733], [71.613, 35.153], [71.499, 35.651], [71.262, 36.074], [71.846, 36.51], [72.92, 36.72], [74.068, 36.836], [74.576, 37.021], [75.158, 37.133], [75.897, 36.667], [76.193, 35.898], [77.837, 35.494]]]]
        },
        {
          N: "Afghanistan",
          I: "AF",
          C: [[[[66.519, 37.363], [67.076, 37.356], [67.83, 37.145], [68.136, 37.023], [68.859, 37.344], [69.196, 37.151], [69.519, 37.609], [70.117, 37.588], [70.271, 37.735], [70.376, 38.138], [70.807, 38.486], [71.348, 38.259], [71.239, 37.953], [71.542, 37.906], [71.449, 37.066], [71.845, 36.738], [72.193, 36.948], [72.637, 37.048], [73.26, 37.495], [73.949, 37.422], [74.98, 37.42], [75.158, 37.133], [74.576, 37.021], [74.068, 36.836], [72.92, 36.72], [71.846, 36.51], [71.262, 36.074], [71.499, 35.651], [71.613, 35.153], [71.115, 34.733], [71.157, 34.349], [70.882, 33.989], [69.931, 34.02], [70.324, 33.359], [69.687, 33.105], [69.263, 32.502], [69.318, 31.901], [68.927, 31.62], [68.557, 31.713], [67.793, 31.583], [67.683, 31.303], [66.939, 31.305], [66.381, 30.739], [66.346, 29.888], [65.047, 29.472], [64.35, 29.56], [64.148, 29.341], [63.55, 29.468], [62.55, 29.319], [60.874, 29.829], [61.781, 30.736], [61.699, 31.38], [60.942, 31.548], [60.864, 32.183], [60.536, 32.981], [60.964, 33.529], [60.528, 33.676], [60.803, 34.404], [61.211, 35.65], [62.231, 35.271], [62.985, 35.404], [63.194, 35.857], [63.983, 36.008], [64.546, 36.312], [64.746, 37.112], [65.589, 37.305], [65.746, 37.661], [66.217, 37.394], [66.519, 37.363]]]]
        },
        {
          N: "Tajikistan",
          I: "TJ",
          C: [[[[67.83, 37.145], [68.392, 38.157], [68.176, 38.902], [67.442, 39.14], [67.701, 39.58], [68.536, 39.533], [69.012, 40.086], [69.329, 40.728], [70.667, 40.96], [70.458, 40.496], [70.601, 40.219], [71.014, 40.244], [70.648, 39.936], [69.56, 40.103], [69.465, 39.527], [70.549, 39.604], [71.785, 39.279], [73.675, 39.431], [73.929, 38.506], [74.258, 38.607], [74.865, 38.379], [74.83, 37.99], [74.98, 37.42], [73.949, 37.422], [73.26, 37.495], [72.637, 37.048], [72.193, 36.948], [71.845, 36.738], [71.449, 37.066], [71.542, 37.906], [71.239, 37.953], [71.348, 38.259], [70.807, 38.486], [70.376, 38.138], [70.271, 37.735], [70.117, 37.588], [69.519, 37.609], [69.196, 37.151], [68.859, 37.344], [68.136, 37.023], [67.83, 37.145]]]]
        },
        {
          N: "Kyrgyzstan",
          I: "KG",
          C: [[[[70.962, 42.266], [71.186, 42.704], [71.845, 42.845], [73.49, 42.501], [73.645, 43.091], [74.213, 43.298], [75.637, 42.878], [76, 42.988], [77.658, 42.961], [79.142, 42.856], [79.644, 42.497], [80.26, 42.35], [80.119, 42.124], [78.544, 41.582], [78.187, 41.185], [76.904, 41.066], [76.526, 40.428], [75.468, 40.562], [74.777, 40.366], [73.822, 39.894], [73.96, 39.66], [73.675, 39.431], [71.785, 39.279], [70.549, 39.604], [69.465, 39.527], [69.56, 40.103], [70.648, 39.936], [71.014, 40.244], [71.775, 40.146], [73.055, 40.866], [71.87, 41.393], [71.158, 41.144], [70.42, 41.52], [71.259, 42.168], [70.962, 42.266]]]]
        },
        {
          N: "Turkmenistan",
          I: "TM",
          C: [[[[52.502, 41.783], [52.944, 42.116], [54.079, 42.324], [54.755, 42.044], [55.455, 41.26], [55.968, 41.309], [57.096, 41.322], [56.932, 41.826], [57.787, 42.171], [58.629, 42.752], [59.976, 42.223], [60.083, 41.425], [60.466, 41.22], [61.547, 41.266], [61.883, 41.085], [62.374, 40.054], [63.518, 39.363], [64.17, 38.892], [65.216, 38.403], [66.546, 37.975], [66.519, 37.363], [66.217, 37.394], [65.746, 37.661], [65.589, 37.305], [64.746, 37.112], [64.546, 36.312], [63.983, 36.008], [63.194, 35.857], [62.985, 35.404], [62.231, 35.271], [61.211, 35.65], [61.123, 36.492], [60.378, 36.527], [59.235, 37.413], [58.436, 37.522], [57.33, 38.029], [56.619, 38.121], [56.18, 37.935], [55.512, 37.964], [54.8, 37.392], [53.922, 37.199], [53.736, 37.906], [53.881, 38.952], [53.101, 39.291], [53.358, 39.975], [52.694, 40.034], [52.915, 40.877], [53.858, 40.631], [54.737, 40.951], [54.008, 41.551], [53.722, 42.123], [52.917, 41.868], [52.815, 41.135], [52.502, 41.783]]]]
        },
        {
          N: "Iran",
          I: "IR",
          C: [[[[48.568, 29.927], [48.015, 30.452], [48.005, 30.985], [47.685, 30.985], [47.849, 31.709], [47.335, 32.469], [46.109, 33.017], [45.417, 33.968], [45.648, 34.748], [46.152, 35.093], [46.076, 35.677], [45.421, 35.978], [44.773, 37.17], [44.773, 37.17], [44.226, 37.972], [44.421, 38.281], [44.109, 39.428], [44.794, 39.713], [44.953, 39.336], [45.458, 38.874], [46.144, 38.741], [46.506, 38.771], [47.685, 39.508], [48.06, 39.582], [48.356, 39.289], [48.011, 38.794], [48.634, 38.27], [48.883, 38.32], [49.2, 37.583], [50.148, 37.375], [50.842, 36.873], [52.264, 36.7], [53.826, 36.965], [53.922, 37.199], [54.8, 37.392], [55.512, 37.964], [56.18, 37.935], [56.619, 38.121], [57.33, 38.029], [58.436, 37.522], [59.235, 37.413], [60.378, 36.527], [61.123, 36.492], [61.211, 35.65], [60.803, 34.404], [60.528, 33.676], [60.964, 33.529], [60.536, 32.981], [60.864, 32.183], [60.942, 31.548], [61.699, 31.38], [61.781, 30.736], [60.874, 29.829], [61.369, 29.303], [61.772, 28.699], [62.728, 28.26], [62.755, 27.379], [63.234, 27.217], [63.317, 26.757], [61.874, 26.24], [61.497, 25.078], [59.616, 25.38], [58.526, 25.61], [57.397, 25.74], [56.971, 26.966], [56.492, 27.143], [55.724, 26.965], [54.715, 26.481], [53.493, 26.812], [52.484, 27.581], [51.521, 27.866], [50.853, 28.815], [50.115, 30.148], [49.577, 29.986], [48.941, 30.317], [48.568, 29.927]]]]
        },
        {
          N: "Syria",
          I: "SY",
          C: [[[[35.72, 32.709], [35.701, 32.716], [35.836, 32.868], [35.821, 33.277], [36.066, 33.825], [36.612, 34.202], [36.448, 34.594], [35.998, 34.645], [35.905, 35.41], [36.15, 35.822], [36.418, 36.041], [36.685, 36.26], [36.739, 36.818], [37.067, 36.623], [38.168, 36.901], [38.7, 36.713], [39.523, 36.716], [40.673, 37.091], [41.212, 37.074], [42.35, 37.23], [41.837, 36.606], [41.29, 36.359], [41.384, 35.628], [41.006, 34.419], [38.792, 33.379], [36.834, 32.313], [35.72, 32.709]]]]
        },
        {
          N: "Armenia",
          I: "AM",
          C: [[[[46.506, 38.771], [46.144, 38.741], [45.735, 39.32], [45.74, 39.474], [45.298, 39.472], [45.002, 39.74], [44.794, 39.713], [44.4, 40.005], [43.656, 40.254], [43.753, 40.74], [43.583, 41.092], [44.972, 41.248], [45.179, 40.985], [45.56, 40.812], [45.359, 40.562], [45.892, 40.218], [45.61, 39.9], [46.035, 39.628], [46.483, 39.464], [46.506, 38.771]]]]
        },
        {
          N: "Sweden",
          I: "SE",
          C: [[[[11.027, 58.856], [11.468, 59.432], [12.3, 60.118], [12.631, 61.294], [11.992, 61.8], [11.931, 63.128], [12.58, 64.066], [13.572, 64.049], [13.92, 64.445], [13.556, 64.787], [15.108, 66.194], [16.109, 67.302], [16.769, 68.014], [17.729, 68.011], [17.994, 68.567], [19.879, 68.407], [20.025, 69.065], [20.646, 69.106], [21.979, 68.617], [23.539, 67.936], [23.566, 66.396], [23.903, 66.007], [22.183, 65.724], [21.214, 65.026], [21.37, 64.414], [19.779, 63.61], [17.848, 62.749], [17.12, 61.341], [17.831, 60.637], [18.788, 60.082], [17.869, 58.954], [16.829, 58.72], [16.448, 57.041], [15.88, 56.104], [14.667, 56.201], [14.101, 55.408], [12.943, 55.362], [12.625, 56.307], [11.788, 57.442], [11.027, 58.856]]]]
        },
        {
          N: "Belarus",
          I: "BY",
          C: [[[[28.177, 56.169], [29.23, 55.918], [29.372, 55.67], [29.896, 55.789], [30.874, 55.551], [30.972, 55.082], [30.758, 54.812], [31.384, 54.157], [31.791, 53.975], [31.731, 53.794], [32.406, 53.618], [32.694, 53.351], [32.305, 53.133], [31.498, 53.167], [31.305, 53.074], [31.54, 52.742], [31.786, 52.102], [31.786, 52.102], [30.928, 52.042], [30.619, 51.823], [30.555, 51.32], [30.157, 51.416], [29.255, 51.368], [28.993, 51.602], [28.618, 51.428], [28.242, 51.572], [27.454, 51.592], [26.338, 51.832], [25.328, 51.911], [24.553, 51.888], [24.005, 51.617], [23.527, 51.578], [23.508, 52.024], [23.199, 52.487], [23.799, 52.691], [23.805, 53.09], [23.528, 53.47], [23.484, 53.912], [24.451, 53.906], [25.536, 54.282], [25.768, 54.847], [26.588, 55.167], [26.494, 55.615], [27.102, 55.783], [28.177, 56.169]]]]
        },
        {
          N: "Ukraine",
          I: "UA",
          C: [[[[31.786, 52.102], [32.159, 52.061], [32.412, 52.289], [32.716, 52.238], [33.753, 52.335], [34.392, 51.769], [34.142, 51.566], [34.225, 51.256], [35.022, 51.208], [35.378, 50.774], [35.356, 50.577], [36.626, 50.226], [37.393, 50.384], [38.011, 49.916], [38.595, 49.926], [40.069, 49.601], [40.081, 49.307], [39.675, 48.784], [39.896, 48.232], [39.738, 47.899], [38.771, 47.826], [38.255, 47.546], [38.224, 47.102], [37.425, 47.022], [36.76, 46.699], [35.824, 46.646], [34.962, 46.273], [35.013, 45.738], [34.862, 45.768], [34.732, 45.966], [34.41, 46.005], [33.699, 46.22], [33.436, 45.972], [33.299, 46.081], [31.744, 46.333], [31.675, 46.706], [30.749, 46.583], [30.378, 46.032], [29.603, 45.293], [29.15, 45.465], [28.68, 45.304], [28.234, 45.488], [28.485, 45.597], [28.66, 45.94], [28.934, 46.259], [28.863, 46.438], [29.072, 46.518], [29.171, 46.379], [29.76, 46.35], [30.025, 46.424], [29.838, 46.525], [29.909, 46.674], [29.56, 46.929], [29.415, 47.347], [29.051, 47.51], [29.123, 47.849], [28.671, 48.118], [28.26, 48.156], [27.523, 48.467], [26.858, 48.368], [26.619, 48.221], [26.197, 48.221], [25.946, 47.987], [25.208, 47.891], [24.866, 47.738], [24.402, 47.982], [23.761, 47.986], [23.142, 48.096], [22.711, 47.882], [22.641, 48.15], [22.086, 48.422], [22.281, 48.825], [22.558, 49.086], [22.776, 49.027], [22.518, 49.477], [23.427, 50.309], [23.923, 50.425], [24.03, 50.705], [23.527, 51.578], [24.005, 51.617], [24.553, 51.888], [25.328, 51.911], [26.338, 51.832], [27.454, 51.592], [28.242, 51.572], [28.618, 51.428], [28.993, 51.602], [29.255, 51.368], [30.157, 51.416], [30.555, 51.32], [30.619, 51.823], [30.928, 52.042], [31.786, 52.102]]], [[[33.436, 45.972], [33.699, 46.22], [34.41, 46.005], [34.732, 45.966], [34.862, 45.768], [35.013, 45.738], [35.021, 45.651], [35.51, 45.41], [36.53, 45.47], [36.335, 45.113], [35.24, 44.94], [33.883, 44.361], [33.326, 44.565], [33.547, 45.035], [32.454, 45.327], [32.631, 45.519], [33.588, 45.852], [33.436, 45.972]]]]
        },
        {
          N: "Poland",
          I: "PL",
          C: [[[[23.484, 53.912], [23.528, 53.47], [23.805, 53.09], [23.799, 52.691], [23.199, 52.487], [23.508, 52.024], [23.527, 51.578], [24.03, 50.705], [23.923, 50.425], [23.427, 50.309], [22.518, 49.477], [22.776, 49.027], [22.558, 49.086], [21.608, 49.47], [20.888, 49.329], [20.416, 49.431], [19.825, 49.217], [19.321, 49.572], [18.91, 49.436], [18.853, 49.496], [18.393, 49.989], [17.649, 50.049], [17.555, 50.362], [16.869, 50.474], [16.719, 50.216], [16.176, 50.423], [16.239, 50.698], [15.491, 50.785], [15.017, 51.107], [14.607, 51.745], [14.685, 52.09], [14.438, 52.625], [14.075, 52.981], [14.353, 53.248], [14.12, 53.757], [14.803, 54.051], [16.363, 54.513], [17.623, 54.852], [18.621, 54.683], [18.696, 54.439], [19.661, 54.426], [20.892, 54.313], [22.731, 54.328], [23.244, 54.221], [23.484, 53.912]]]]
        },
        {
          N: "Austria",
          I: "AT",
          C: [[[[16.98, 48.123], [16.904, 47.715], [16.341, 47.713], [16.534, 47.496], [16.202, 46.852], [16.012, 46.684], [15.137, 46.659], [14.632, 46.432], [13.806, 46.509], [12.376, 46.768], [12.153, 47.115], [11.165, 46.942], [11.049, 46.751], [10.443, 46.894], [9.932, 46.921], [9.48, 47.103], [9.633, 47.348], [9.594, 47.525], [9.896, 47.58], [10.402, 47.302], [10.545, 47.566], [11.426, 47.524], [12.141, 47.703], [12.621, 47.672], [12.933, 47.468], [13.026, 47.638], [12.884, 48.289], [13.243, 48.416], [13.596, 48.877], [14.339, 48.555], [14.901, 48.964], [15.253, 49.039], [16.03, 48.734], [16.499, 48.786], [16.96, 48.597], [16.88, 48.47], [16.98, 48.123]]]]
        },
        {
          N: "Hungary",
          I: "HU",
          C: [[[[22.086, 48.422], [22.641, 48.15], [22.711, 47.882], [22.1, 47.672], [21.627, 46.994], [21.022, 46.316], [20.22, 46.127], [19.596, 46.172], [18.83, 45.909], [18.83, 45.909], [18.456, 45.759], [17.63, 45.952], [16.883, 46.381], [16.565, 46.504], [16.371, 46.841], [16.202, 46.852], [16.534, 47.496], [16.341, 47.713], [16.904, 47.715], [16.98, 48.123], [17.488, 47.867], [17.857, 47.758], [18.697, 47.881], [18.777, 48.082], [19.174, 48.111], [19.661, 48.267], [19.769, 48.203], [20.239, 48.328], [20.474, 48.563], [20.801, 48.624], [21.872, 48.32], [22.086, 48.422]]]]
        },
        {
          N: "Moldova",
          I: "MD",
          C: [[[[26.619, 48.221], [26.858, 48.368], [27.523, 48.467], [28.26, 48.156], [28.671, 48.118], [29.123, 47.849], [29.051, 47.51], [29.415, 47.347], [29.56, 46.929], [29.909, 46.674], [29.838, 46.525], [30.025, 46.424], [29.76, 46.35], [29.171, 46.379], [29.072, 46.518], [28.863, 46.438], [28.934, 46.259], [28.66, 45.94], [28.485, 45.597], [28.234, 45.488], [28.054, 45.945], [28.16, 46.372], [28.128, 46.81], [27.551, 47.405], [27.234, 47.827], [26.924, 48.123], [26.619, 48.221]]]]
        },
        {
          N: "Romania",
          I: "RO",
          C: [[[[28.234, 45.488], [28.68, 45.304], [29.15, 45.465], [29.603, 45.293], [29.627, 45.035], [29.142, 44.82], [28.838, 44.914], [28.558, 43.707], [27.97, 43.812], [27.242, 44.176], [26.065, 43.943], [25.569, 43.688], [24.101, 43.741], [23.332, 43.897], [22.945, 43.824], [22.657, 44.235], [22.474, 44.409], [22.706, 44.578], [22.459, 44.703], [22.145, 44.478], [21.562, 44.769], [21.484, 45.181], [20.874, 45.416], [20.762, 45.735], [20.22, 46.127], [21.022, 46.316], [21.627, 46.994], [22.1, 47.672], [22.711, 47.882], [23.142, 48.096], [23.761, 47.986], [24.402, 47.982], [24.866, 47.738], [25.208, 47.891], [25.946, 47.987], [26.197, 48.221], [26.619, 48.221], [26.924, 48.123], [27.234, 47.827], [27.551, 47.405], [28.128, 46.81], [28.16, 46.372], [28.054, 45.945], [28.234, 45.488]]]]
        },
        {
          N: "Lithuania",
          I: "LT",
          C: [[[[26.494, 55.615], [26.588, 55.167], [25.768, 54.847], [25.536, 54.282], [24.451, 53.906], [23.484, 53.912], [23.244, 54.221], [22.731, 54.328], [22.651, 54.583], [22.758, 54.857], [22.316, 55.015], [21.268, 55.19], [21.056, 56.031], [22.201, 56.338], [23.878, 56.274], [24.861, 56.373], [25.001, 56.165], [25.533, 56.1], [26.494, 55.615]]]]
        },
        {
          N: "Latvia",
          I: "LV",
          C: [[[[27.288, 57.475], [27.77, 57.244], [27.855, 56.759], [28.177, 56.169], [27.102, 55.783], [26.494, 55.615], [25.533, 56.1], [25.001, 56.165], [24.861, 56.373], [23.878, 56.274], [22.201, 56.338], [21.056, 56.031], [21.09, 56.784], [21.582, 57.412], [22.524, 57.753], [23.318, 57.006], [24.121, 57.026], [24.313, 57.793], [25.165, 57.97], [25.603, 57.848], [26.464, 57.476], [27.288, 57.475]]]]
        },
        {
          N: "Estonia",
          I: "EE",
          C: [[[[27.981, 59.475], [27.981, 59.475], [28.132, 59.301], [27.42, 58.725], [27.717, 57.792], [27.288, 57.475], [26.464, 57.476], [25.603, 57.848], [25.165, 57.97], [24.313, 57.793], [24.429, 58.383], [24.061, 58.257], [23.427, 58.613], [23.34, 59.187], [24.604, 59.466], [25.864, 59.611], [26.949, 59.446], [27.981, 59.475], [27.981, 59.475]]]]
        },
        {
          N: "Germany",
          I: "DE",
          C: [[[[14.12, 53.757], [14.353, 53.248], [14.075, 52.981], [14.438, 52.625], [14.685, 52.09], [14.607, 51.745], [15.017, 51.107], [14.571, 51.002], [14.307, 51.117], [14.056, 50.927], [13.338, 50.733], [12.967, 50.484], [12.24, 50.266], [12.415, 49.969], [12.521, 49.547], [13.031, 49.307], [13.596, 48.877], [13.243, 48.416], [12.884, 48.289], [13.026, 47.638], [12.933, 47.468], [12.621, 47.672], [12.141, 47.703], [11.426, 47.524], [10.545, 47.566], [10.402, 47.302], [9.896, 47.58], [9.594, 47.525], [8.523, 47.831], [8.317, 47.614], [7.467, 47.621], [7.594, 48.333], [8.099, 49.018], [6.658, 49.202], [6.186, 49.464], [6.243, 49.902], [6.043, 50.128], [6.157, 50.804], [5.989, 51.852], [6.589, 51.852], [6.843, 52.228], [7.092, 53.144], [6.905, 53.482], [7.1, 53.694], [7.936, 53.748], [8.122, 53.528], [8.801, 54.021], [8.572, 54.396], [8.526, 54.963], [9.282, 54.831], [9.922, 54.983], [9.94, 54.597], [10.95, 54.364], [10.939, 54.009], [11.956, 54.196], [12.518, 54.47], [13.647, 54.076], [14.12, 53.757]]]]
        },
        {
          N: "Bulgaria",
          I: "BG",
          C: [[[[22.657, 44.235], [22.945, 43.824], [23.332, 43.897], [24.101, 43.741], [25.569, 43.688], [26.065, 43.943], [27.242, 44.176], [27.97, 43.812], [28.558, 43.707], [28.039, 43.293], [27.674, 42.578], [27.997, 42.007], [27.136, 42.141], [26.117, 41.827], [26.106, 41.329], [25.197, 41.234], [24.493, 41.584], [23.692, 41.309], [22.952, 41.338], [22.881, 41.999], [22.381, 42.32], [22.545, 42.461], [22.437, 42.58], [22.605, 42.899], [22.986, 43.211], [22.5, 43.643], [22.41, 44.008], [22.657, 44.235]]]]
        },
        {
          N: "Greece",
          I: "GR",
          C: [[[[26.29, 35.3], [26.165, 35.005], [24.725, 34.92], [24.735, 35.085], [23.515, 35.28], [23.7, 35.705], [24.247, 35.368], [25.025, 35.425], [25.769, 35.354], [25.745, 35.18], [26.29, 35.3]]], [[[22.952, 41.338], [23.692, 41.309], [24.493, 41.584], [25.197, 41.234], [26.106, 41.329], [26.117, 41.827], [26.604, 41.562], [26.295, 40.936], [26.057, 40.824], [25.448, 40.853], [24.926, 40.947], [23.715, 40.687], [24.408, 40.125], [23.9, 39.962], [23.343, 39.961], [22.814, 40.476], [22.626, 40.257], [22.85, 39.659], [23.35, 39.19], [22.973, 38.971], [23.53, 38.51], [24.025, 38.22], [24.04, 37.655], [23.115, 37.92], [23.41, 37.41], [22.775, 37.305], [23.154, 36.423], [22.49, 36.41], [21.67, 36.845], [21.295, 37.645], [21.12, 38.31], [20.73, 38.77], [20.218, 39.34], [20.15, 39.625], [20.615, 40.11], [20.675, 40.435], [21, 40.58], [21.02, 40.843], [21.674, 40.931], [22.055, 41.15], [22.597, 41.13], [22.762, 41.305], [22.952, 41.338]]]]
        },
        {
          N: "Turkey",
          I: "TR",
          C: [[[[44.773, 37.17], [44.293, 37.002], [43.942, 37.256], [42.779, 37.385], [42.35, 37.23], [41.212, 37.074], [40.673, 37.091], [39.523, 36.716], [38.7, 36.713], [38.168, 36.901], [37.067, 36.623], [36.739, 36.818], [36.685, 36.26], [36.418, 36.041], [36.15, 35.822], [35.782, 36.275], [36.161, 36.651], [35.551, 36.565], [34.715, 36.796], [34.027, 36.22], [32.509, 36.108], [31.7, 36.644], [30.622, 36.678], [30.391, 36.263], [29.7, 36.144], [28.733, 36.677], [27.641, 36.659], [27.049, 37.653], [26.318, 38.208], [26.805, 38.986], [26.171, 39.464], [27.28, 40.42], [28.82, 40.46], [29.24, 41.22], [31.146, 41.088], [32.348, 41.736], [33.513, 42.019], [35.168, 42.04], [36.913, 41.335], [38.348, 40.949], [39.513, 41.103], [40.373, 41.014], [41.554, 41.536], [42.62, 41.583], [43.583, 41.092], [43.753, 40.74], [43.656, 40.254], [44.4, 40.005], [44.794, 39.713], [44.109, 39.428], [44.421, 38.281], [44.226, 37.972], [44.773, 37.17], [44.773, 37.17]]], [[[26.117, 41.827], [27.136, 42.141], [27.997, 42.007], [28.116, 41.623], [28.988, 41.3], [28.806, 41.055], [27.619, 41], [27.192, 40.691], [26.358, 40.152], [26.043, 40.618], [26.057, 40.824], [26.295, 40.936], [26.604, 41.562], [26.117, 41.827]]]]
        },
        {
          N: "Albania",
          I: "AL",
          C: [[[[21.02, 40.843], [21, 40.58], [20.675, 40.435], [20.615, 40.11], [20.15, 39.625], [19.98, 39.695], [19.96, 39.915], [19.406, 40.251], [19.319, 40.727], [19.404, 41.41], [19.54, 41.72], [19.372, 41.878], [19.372, 41.878], [19.304, 42.196], [19.738, 42.688], [19.802, 42.5], [20.071, 42.589], [20.284, 42.32], [20.523, 42.218], [20.59, 41.855], [20.59, 41.855], [20.463, 41.515], [20.605, 41.086], [21.02, 40.843]]]]
        },
        {
          N: "Croatia",
          I: "HR",
          C: [[[[16.565, 46.504], [16.883, 46.381], [17.63, 45.952], [18.456, 45.759], [18.83, 45.909], [19.073, 45.522], [19.39, 45.237], [19.005, 44.86], [18.553, 45.082], [17.862, 45.068], [17.002, 45.234], [16.535, 45.212], [16.318, 45.004], [15.959, 45.234], [15.75, 44.819], [16.24, 44.351], [16.456, 44.041], [16.916, 43.668], [17.297, 43.446], [17.675, 43.029], [18.56, 42.65], [18.45, 42.48], [18.45, 42.48], [17.51, 42.85], [16.93, 43.21], [16.015, 43.507], [15.174, 44.243], [15.376, 44.318], [14.92, 44.738], [14.902, 45.076], [14.259, 45.234], [13.952, 44.802], [13.657, 45.137], [13.679, 45.484], [13.715, 45.5], [14.412, 45.466], [14.595, 45.635], [14.935, 45.472], [15.328, 45.452], [15.324, 45.732], [15.672, 45.834], [15.769, 46.238], [16.565, 46.504]]]]
        },
        {
          N: "Switzerland",
          I: "CH",
          C: [[[[9.594, 47.525], [9.633, 47.348], [9.48, 47.103], [9.932, 46.921], [10.443, 46.894], [10.363, 46.484], [9.923, 46.315], [9.183, 46.44], [8.966, 46.037], [8.49, 46.005], [8.317, 46.164], [7.756, 45.824], [7.274, 45.777], [6.844, 45.991], [6.5, 46.43], [6.023, 46.273], [6.037, 46.726], [6.769, 47.288], [6.737, 47.542], [7.192, 47.45], [7.467, 47.621], [8.317, 47.614], [8.523, 47.831], [9.594, 47.525]]]]
        },
        {
          N: "Luxembourg",
          I: "LU",
          C: [[[[6.043, 50.128], [6.243, 49.902], [6.186, 49.464], [5.898, 49.443], [5.674, 49.529], [5.782, 50.09], [6.043, 50.128]]]]
        },
        {
          N: "Belgium",
          I: "BE",
          C: [[[[6.157, 50.804], [6.043, 50.128], [5.782, 50.09], [5.674, 49.529], [4.799, 49.985], [4.286, 49.907], [3.588, 50.379], [3.123, 50.78], [2.658, 50.797], [2.514, 51.149], [3.315, 51.346], [3.315, 51.346], [3.315, 51.346], [4.047, 51.267], [4.974, 51.475], [5.607, 51.037], [6.157, 50.804]]]]
        },
        {
          N: "Netherlands",
          I: "NL",
          C: [[[[6.905, 53.482], [7.092, 53.144], [6.843, 52.228], [6.589, 51.852], [5.989, 51.852], [6.157, 50.804], [5.607, 51.037], [4.974, 51.475], [4.047, 51.267], [3.315, 51.346], [3.315, 51.346], [3.83, 51.621], [4.706, 53.092], [6.074, 53.51], [6.905, 53.482]]]]
        },
        {
          N: "Portugal",
          I: "PT",
          C: [[[[-9.035, 41.881], [-8.672, 42.135], [-8.264, 42.28], [-8.013, 41.791], [-7.423, 41.792], [-7.251, 41.918], [-6.669, 41.883], [-6.389, 41.382], [-6.851, 41.111], [-6.864, 40.331], [-7.026, 40.185], [-7.067, 39.712], [-7.499, 39.63], [-7.098, 39.03], [-7.374, 38.373], [-7.029, 38.076], [-7.167, 37.804], [-7.537, 37.429], [-7.454, 37.098], [-7.856, 36.838], [-8.383, 36.979], [-8.899, 36.869], [-8.746, 37.651], [-8.84, 38.266], [-9.287, 38.358], [-9.527, 38.737], [-9.447, 39.392], [-9.048, 39.755], [-8.977, 40.159], [-8.769, 40.761], [-8.791, 41.184], [-8.991, 41.543], [-9.035, 41.881]]]]
        },
        {
          N: "Spain",
          I: "ES",
          C: [[[[-7.454, 37.098], [-7.537, 37.429], [-7.167, 37.804], [-7.029, 38.076], [-7.374, 38.373], [-7.098, 39.03], [-7.499, 39.63], [-7.067, 39.712], [-7.026, 40.185], [-6.864, 40.331], [-6.851, 41.111], [-6.389, 41.382], [-6.669, 41.883], [-7.251, 41.918], [-7.423, 41.792], [-8.013, 41.791], [-8.264, 42.28], [-8.672, 42.135], [-9.035, 41.881], [-8.984, 42.593], [-9.393, 43.027], [-7.978, 43.748], [-6.754, 43.568], [-5.412, 43.574], [-4.348, 43.403], [-3.518, 43.456], [-1.901, 43.423], [-1.503, 43.034], [0.338, 42.58], [0.702, 42.796], [1.827, 42.343], [2.986, 42.473], [3.039, 41.892], [2.092, 41.226], [0.811, 41.015], [0.721, 40.678], [0.107, 40.124], [-0.279, 39.31], [0.111, 38.739], [-0.467, 38.292], [-0.683, 37.642], [-1.438, 37.443], [-2.146, 36.674], [-3.416, 36.659], [-4.369, 36.678], [-4.995, 36.325], [-5.377, 35.947], [-5.866, 36.03], [-6.237, 36.368], [-6.52, 36.943], [-7.454, 37.098]]]]
        },
        {
          N: "Ireland",
          I: "IE",
          C: [[[[-6.198, 53.868], [-6.033, 53.153], [-6.789, 52.26], [-8.562, 51.669], [-9.977, 51.82], [-9.166, 52.865], [-9.689, 53.881], [-8.328, 54.665], [-7.572, 55.132], [-7.366, 54.596], [-7.572, 54.06], [-6.954, 54.074], [-6.198, 53.868]]]]
        },
        {
          N: "New Caledonia",
          I: "NC",
          C: [[[[165.78, -21.08], [166.6, -21.7], [167.12, -22.16], [166.74, -22.4], [166.19, -22.13], [165.474, -21.68], [164.83, -21.15], [164.168, -20.445], [164.03, -20.106], [164.46, -20.12], [165.02, -20.46], [165.46, -20.8], [165.78, -21.08]]]]
        },
        {
          N: "Solomon Islands",
          I: "SB",
          C: [[[[162.119, -10.483], [162.399, -10.826], [161.7, -10.82], [161.32, -10.205], [161.917, -10.447], [162.119, -10.483]]], [[[161.68, -9.6], [161.529, -9.784], [160.788, -8.918], [160.58, -8.32], [160.92, -8.32], [161.28, -9.12], [161.68, -9.6]]], [[[160.852, -9.873], [160.463, -9.895], [159.849, -9.794], [159.64, -9.64], [159.703, -9.243], [160.363, -9.4], [160.689, -9.61], [160.852, -9.873]]], [[[159.64, -8.02], [159.875, -8.337], [159.917, -8.538], [159.134, -8.114], [158.586, -7.755], [158.211, -7.422], [158.36, -7.32], [158.82, -7.56], [159.64, -8.02]]], [[[157.14, -7.022], [157.538, -7.348], [157.339, -7.405], [156.902, -7.177], [156.491, -6.766], [156.543, -6.599], [157.14, -7.022]]]]
        },
        {
          N: "New Zealand",
          I: "NZ",
          C: [[[[176.886, -40.066], [176.508, -40.605], [176.012, -41.29], [175.24, -41.688], [175.068, -41.426], [174.651, -41.282], [175.228, -40.459], [174.9, -39.909], [173.824, -39.509], [173.852, -39.147], [174.575, -38.798], [174.743, -38.028], [174.697, -37.381], [174.292, -36.711], [174.319, -36.535], [173.841, -36.122], [173.054, -35.237], [172.636, -34.529], [173.007, -34.451], [173.551, -35.006], [174.329, -35.265], [174.612, -36.156], [175.337, -37.209], [175.358, -36.526], [175.809, -36.799], [175.958, -37.555], [176.763, -37.881], [177.439, -37.961], [178.01, -37.58], [178.517, -37.695], [178.275, -38.583], [177.97, -39.166], [177.207, -39.146], [176.94, -39.45], [177.033, -39.88], [176.886, -40.066]]], [[[169.668, -43.555], [170.525, -43.032], [171.125, -42.513], [171.57, -41.767], [171.949, -41.514], [172.097, -40.956], [172.799, -40.494], [173.02, -40.919], [173.247, -41.332], [173.958, -40.927], [174.248, -41.349], [174.249, -41.77], [173.876, -42.233], [173.223, -42.97], [172.711, -43.372], [173.08, -43.853], [172.309, -43.866], [171.453, -44.243], [171.185, -44.897], [170.617, -45.909], [169.831, -46.356], [169.332, -46.641], [168.411, -46.62], [167.764, -46.29], [166.677, -46.22], [166.509, -45.853], [167.046, -45.111], [168.304, -44.124], [168.949, -43.936], [169.668, -43.555]]]]
        },
        {
          N: "Australia",
          I: "AU",
          C: [[[[147.689, -40.808], [148.289, -40.875], [148.36, -42.062], [148.017, -42.407], [147.914, -43.212], [147.565, -42.938], [146.87, -43.635], [146.663, -43.581], [146.048, -43.55], [145.432, -42.694], [145.295, -42.034], [144.718, -41.163], [144.744, -40.704], [145.398, -40.793], [146.364, -41.138], [146.909, -41.001], [147.689, -40.808]]], [[[126.149, -32.216], [125.089, -32.729], [124.222, -32.959], [124.029, -33.484], [123.66, -33.89], [122.811, -33.914], [122.183, -34.003], [121.299, -33.821], [120.58, -33.93], [119.894, -33.976], [119.299, -34.509], [119.007, -34.464], [118.506, -34.747], [118.025, -35.065], [117.296, -35.025], [116.625, -35.025], [115.564, -34.386], [115.027, -34.197], [115.049, -33.623], [115.545, -33.487], [115.715, -33.26], [115.679, -32.9], [115.802, -32.205], [115.69, -31.612], [115.161, -30.602], [114.997, -30.031], [115.04, -29.461], [114.642, -28.81], [114.616, -28.516], [114.174, -28.118], [114.049, -27.335], [113.477, -26.543], [113.339, -26.117], [113.778, -26.549], [113.441, -25.621], [113.937, -25.911], [114.233, -26.298], [114.216, -25.786], [113.721, -24.999], [113.625, -24.684], [113.394, -24.385], [113.502, -23.806], [113.707, -23.56], [113.843, -23.06], [113.737, -22.475], [114.15, -21.756], [114.225, -22.517], [114.648, -21.83], [115.46, -21.495], [115.947, -21.069], [116.712, -20.702], [117.166, -20.624], [117.442, -20.747], [118.23, -20.374], [118.836, -20.263], [118.988, -20.044], [119.252, -19.953], [119.805, -19.977], [120.856, -19.684], [121.4, -19.24], [121.655, -18.705], [122.242, -18.198], [122.287, -17.799], [122.313, -17.255], [123.013, -16.405], [123.434, -17.269], [123.859, -17.069], [123.503, -16.597], [123.817, -16.111], [124.258, -16.328], [124.38, -15.567], [124.926, -15.075], [125.167, -14.68], [125.67, -14.51], [125.686, -14.231], [126.125, -14.347], [126.143, -14.096], [126.583, -13.953], [127.066, -13.818], [127.805, -14.277], [128.36, -14.869], [128.986, -14.876], [129.621, -14.97], [129.41, -14.421], [129.889, -13.619], [130.339, -13.357], [130.184, -13.108], [130.618, -12.536], [131.223, -12.184], [131.735, -12.302], [132.575, -12.114], [132.557, -11.603], [131.825, -11.274], [132.357, -11.129], [133.02, -11.376], [133.551, -11.787], [134.393, -12.042], [134.679, -11.941], [135.298, -12.249], [135.883, -11.962], [136.258, -12.049], [136.492, -11.857], [136.952, -12.352], [136.685, -12.887], [136.305, -13.291], [135.962, -13.325], [136.078, -13.724], [135.784, -14.224], [135.429, -14.715], [135.5, -14.998], [136.295, -15.55], [137.065, -15.871], [137.58, -16.215], [138.303, -16.808], [138.585, -16.807], [139.109, -17.063], [139.261, -17.372], [140.215, -17.711], [140.875, -17.369], [141.071, -16.832], [141.274, -16.389], [141.398, -15.841], [141.702, -15.045], [141.563, -14.561], [141.636, -14.27], [141.52, -13.698], [141.651, -12.945], [141.843, -12.742], [141.687, -12.408], [141.929, -11.877], [142.118, -11.328], [142.144, -11.043], [142.515, -10.668], [142.797, -11.157], [142.867, -11.785], [143.116, -11.906], [143.159, -12.326], [143.522, -12.834], [143.597, -13.4], [143.562, -13.764], [143.922, -14.548], [144.564, -14.171], [144.895, -14.594], [145.375, -14.985], [145.272, -15.428], [145.485, -16.286], [145.637, -16.785], [145.889, -16.907], [146.16, -17.762], [146.064, -18.28], [146.387, -18.958], [147.471, -19.481], [148.178, -19.956], [148.848, -20.391], [148.717, -20.633], [149.289, -21.261], [149.678, -22.343], [150.077, -22.123], [150.483, -22.556], [150.727, -22.402], [150.9, -23.462], [151.609, -24.076], [152.074, -24.458], [152.855, -25.268], [153.136, -26.071], [153.162, -26.641], [153.093, -27.26], [153.569, -28.11], [153.512, -28.995], [153.339, -29.458], [153.069, -30.35], [153.09, -30.924], [152.892, -31.64], [152.45, -32.55], [151.709, -33.041], [151.344, -33.816], [151.011, -34.31], [150.714, -35.173], [150.328, -35.672], [150.075, -36.42], [149.946, -37.109], [149.997, -37.425], [149.424, -37.773], [148.305, -37.809], [147.382, -38.219], [146.922, -38.607], [146.318, -39.036], [145.49, -38.594], [144.877, -38.417], [145.032, -37.896], [144.486, -38.085], [143.61, -38.809], [142.745, -38.538], [142.178, -38.38], [141.607, -38.309], [140.639, -38.019], [139.992, -37.403], [139.807, -36.644], [139.574, -36.138], [139.083, -35.733], [138.121, -35.612], [138.449, -35.127], [138.208, -34.385], [137.719, -35.077], [136.829, -35.261], [137.352, -34.707], [137.504, -34.13], [137.89, -33.64], [137.81, -32.9], [136.997, -33.753], [136.372, -34.095], [135.989, -34.89], [135.208, -34.479], [135.239, -33.948], [134.613, -33.223], [134.086, -32.848], [134.274, -32.617], [132.991, -32.011], [132.288, -31.983], [131.326, -31.496], [129.536, -31.59], [128.241, -31.948], [127.103, -32.282], [126.149, -32.216]]]]
        },
        {
          N: "Sri Lanka",
          I: "LK",
          C: [[[[81.788, 7.523], [81.637, 6.482], [81.218, 6.197], [80.348, 5.968], [79.872, 6.763], [79.695, 8.201], [80.148, 9.824], [80.839, 9.268], [81.304, 8.564], [81.788, 7.523]]]]
        },
        {
          N: "China",
          I: "CN",
          C: [[[[109.475, 18.198], [108.655, 18.508], [108.626, 19.368], [109.119, 19.821], [110.212, 20.101], [110.787, 20.078], [111.01, 19.696], [110.571, 19.256], [110.339, 18.678], [109.475, 18.198]]], [[[80.26, 42.35], [80.18, 42.92], [80.866, 43.18], [79.966, 44.918], [81.947, 45.317], [82.459, 45.54], [83.18, 47.33], [85.164, 47.001], [85.72, 47.453], [85.768, 48.456], [86.599, 48.549], [87.36, 49.215], [87.751, 49.297], [88.014, 48.599], [88.854, 48.069], [90.281, 47.694], [90.971, 46.888], [90.586, 45.72], [90.946, 45.286], [92.134, 45.115], [93.481, 44.975], [94.689, 44.352], [95.307, 44.241], [95.762, 43.319], [96.349, 42.726], [97.452, 42.749], [99.516, 42.525], [100.846, 42.664], [101.833, 42.515], [103.312, 41.907], [104.522, 41.908], [104.965, 41.597], [106.129, 42.134], [107.745, 42.482], [109.244, 42.519], [110.412, 42.871], [111.13, 43.407], [111.83, 43.743], [111.668, 44.073], [111.348, 44.457], [111.873, 45.102], [112.436, 45.012], [113.464, 44.809], [114.46, 45.34], [115.985, 45.727], [116.718, 46.388], [117.422, 46.673], [118.874, 46.805], [119.663, 46.693], [119.773, 47.048], [118.867, 47.747], [118.064, 48.067], [117.296, 47.698], [116.309, 47.853], [115.743, 47.727], [115.485, 48.135], [116.192, 49.135], [116.679, 49.889], [117.879, 49.511], [119.288, 50.143], [119.279, 50.583], [120.182, 51.644], [120.738, 51.964], [120.726, 52.516], [120.177, 52.754], [121.003, 53.251], [122.246, 53.432], [123.571, 53.459], [125.068, 53.161], [125.946, 52.793], [126.564, 51.784], [126.939, 51.354], [127.287, 50.74], [127.657, 49.76], [129.398, 49.441], [130.582, 48.73], [130.987, 47.79], [132.507, 47.789], [133.374, 48.183], [135.026, 48.478], [134.501, 47.578], [134.112, 47.212], [133.77, 46.117], [133.097, 45.144], [131.883, 45.321], [131.025, 44.968], [131.289, 44.112], [131.145, 42.93], [130.634, 42.903], [130.64, 42.395], [129.994, 42.985], [129.597, 42.425], [128.052, 41.994], [128.208, 41.467], [127.344, 41.503], [126.869, 41.817], [126.182, 41.107], [125.08, 40.57], [124.266, 39.928], [122.868, 39.638], [122.131, 39.17], [121.055, 38.897], [121.586, 39.361], [121.377, 39.75], [122.169, 40.422], [121.64, 40.946], [120.769, 40.593], [119.64, 39.898], [119.023, 39.252], [118.043, 39.204], [117.533, 38.738], [118.06, 38.061], [118.878, 37.897], [118.912, 37.448], [119.703, 37.156], [120.823, 37.87], [121.711, 37.481], [122.358, 37.454], [122.52, 36.931], [121.104, 36.651], [120.637, 36.111], [119.665, 35.61], [119.151, 34.91], [120.228, 34.36], [120.62, 33.377], [121.229, 32.46], [121.908, 31.692], [121.892, 30.949], [121.264, 30.676], [121.504, 30.143], [122.092, 29.833], [121.938, 29.018], [121.684, 28.226], [121.126, 28.136], [120.395, 27.053], [119.585, 25.741], [118.657, 24.547], [117.282, 23.625], [115.891, 22.783], [114.764, 22.668], [114.153, 22.224], [113.807, 22.548], [113.241, 22.051], [111.844, 21.55], [110.785, 21.397], [110.444, 20.341], [109.89, 20.282], [109.628, 21.008], [109.864, 21.395], [108.523, 21.715], [108.05, 21.552], [107.043, 21.812], [106.567, 22.218], [106.725, 22.794], [105.811, 22.977], [105.329, 23.352], [104.477, 22.819], [103.505, 22.704], [102.707, 22.709], [102.17, 22.465], [101.652, 22.318], [101.803, 21.174], [101.27, 21.202], [101.18, 21.437], [101.15, 21.85], [100.417, 21.559], [99.983, 21.743], [99.241, 22.118], [99.532, 22.949], [98.899, 23.143], [98.66, 24.063], [97.605, 23.897], [97.725, 25.084], [98.672, 25.919], [98.712, 26.744], [98.683, 27.509], [98.246, 27.747], [97.912, 28.336], [97.327, 28.262], [96.249, 28.411], [96.587, 28.831], [96.118, 29.453], [95.405, 29.032], [94.566, 29.277], [93.413, 28.641], [92.503, 27.897], [91.697, 27.772], [91.259, 28.041], [90.731, 28.065], [90.016, 28.296], [89.476, 28.043], [88.814, 27.299], [88.73, 28.087], [88.12, 27.877], [86.955, 27.974], [85.823, 28.204], [85.012, 28.643], [84.235, 28.84], [83.899, 29.32], [83.337, 29.464], [82.328, 30.115], [81.526, 30.423], [81.111, 30.183], [79.721, 30.883], [78.739, 31.516], [78.458, 32.618], [79.176, 32.484], [79.209, 32.994], [78.811, 33.506], [78.912, 34.322], [77.837, 35.494], [76.193, 35.898], [75.897, 36.667], [75.158, 37.133], [74.98, 37.42], [74.83, 37.99], [74.865, 38.379], [74.258, 38.607], [73.929, 38.506], [73.675, 39.431], [73.96, 39.66], [73.822, 39.894], [74.777, 40.366], [75.468, 40.562], [76.526, 40.428], [76.904, 41.066], [78.187, 41.185], [78.544, 41.582], [80.119, 42.124], [80.26, 42.35]]]]
        },
        {
          N: "Taiwan",
          I: "TW",
          C: [[[[121.778, 24.394], [121.176, 22.791], [120.747, 21.971], [120.22, 22.815], [120.106, 23.556], [120.695, 24.538], [121.495, 25.295], [121.951, 24.998], [121.778, 24.394]]]]
        },
        {
          N: "Italy",
          I: "IT",
          C: [[[[10.443, 46.894], [11.049, 46.751], [11.165, 46.942], [12.153, 47.115], [12.376, 46.768], [13.806, 46.509], [13.698, 46.017], [13.938, 45.591], [13.142, 45.737], [12.329, 45.382], [12.384, 44.885], [12.261, 44.6], [12.589, 44.091], [13.527, 43.588], [14.03, 42.761], [15.143, 41.955], [15.926, 41.961], [16.17, 41.74], [15.889, 41.541], [16.785, 41.18], [17.519, 40.877], [18.377, 40.356], [18.48, 40.169], [18.293, 39.811], [17.738, 40.278], [16.87, 40.442], [16.449, 39.795], [17.171, 39.425], [17.053, 38.903], [16.635, 38.844], [16.101, 37.986], [15.684, 37.909], [15.688, 38.215], [15.892, 38.751], [16.109, 38.965], [15.719, 39.544], [15.414, 40.048], [14.998, 40.173], [14.703, 40.605], [14.061, 40.786], [13.628, 41.188], [12.888, 41.253], [12.107, 41.705], [11.192, 42.355], [10.512, 42.931], [10.2, 43.92], [9.702, 44.036], [8.889, 44.366], [8.429, 44.231], [7.851, 43.767], [7.435, 43.694], [7.55, 44.128], [7.008, 44.255], [6.75, 45.029], [7.097, 45.333], [6.802, 45.709], [6.844, 45.991], [7.274, 45.777], [7.756, 45.824], [8.317, 46.164], [8.49, 46.005], [8.966, 46.037], [9.183, 46.44], [9.923, 46.315], [10.363, 46.484], [10.443, 46.894]]], [[[14.761, 38.144], [15.52, 38.231], [15.16, 37.444], [15.31, 37.134], [15.1, 36.62], [14.335, 36.997], [13.827, 37.105], [12.431, 37.613], [12.571, 38.126], [13.741, 38.035], [14.761, 38.144]]], [[[8.71, 40.9], [9.21, 41.21], [9.81, 40.5], [9.67, 39.177], [9.215, 39.24], [8.807, 38.907], [8.428, 39.172], [8.388, 40.378], [8.16, 40.95], [8.71, 40.9]]]]
        },
        {
          N: "Denmark",
          I: "DK",
          C: [[[[9.922, 54.983], [9.282, 54.831], [8.526, 54.963], [8.12, 55.518], [8.09, 56.54], [8.257, 56.81], [8.543, 57.11], [9.424, 57.172], [9.776, 57.448], [10.58, 57.73], [10.546, 57.216], [10.25, 56.89], [10.37, 56.61], [10.912, 56.459], [10.668, 56.081], [10.37, 56.19], [9.65, 55.47], [9.922, 54.983]]], [[[12.371, 56.111], [12.69, 55.61], [12.09, 54.8], [11.044, 55.365], [10.904, 55.78], [12.371, 56.111]]]]
        },
        {
          N: "United Kingdom",
          I: "GB",
          C: [[[[-6.198, 53.868], [-6.954, 54.074], [-7.572, 54.06], [-7.366, 54.596], [-7.572, 55.132], [-6.734, 55.173], [-5.662, 54.555], [-6.198, 53.868]]], [[[-3.094, 53.405], [-3.092, 53.404], [-2.945, 53.985], [-3.615, 54.601], [-3.63, 54.615], [-4.844, 54.791], [-5.083, 55.062], [-4.719, 55.508], [-5.048, 55.784], [-5.586, 55.311], [-5.645, 56.275], [-6.15, 56.785], [-5.787, 57.819], [-5.01, 58.63], [-4.211, 58.551], [-3.005, 58.635], [-4.074, 57.553], [-3.055, 57.69], [-1.959, 57.685], [-2.22, 56.87], [-3.119, 55.974], [-2.085, 55.91], [-2.006, 55.805], [-1.115, 54.625], [-0.43, 54.464], [0.185, 53.325], [0.47, 52.93], [1.682, 52.74], [1.56, 52.1], [1.051, 51.807], [1.45, 51.289], [0.55, 50.766], [-0.788, 50.775], [-2.49, 50.5], [-2.956, 50.697], [-3.617, 50.228], [-4.543, 50.342], [-5.245, 49.96], [-5.777, 50.16], [-4.31, 51.21], [-3.415, 51.426], [-3.423, 51.427], [-4.984, 51.593], [-5.267, 51.991], [-4.222, 52.301], [-4.77, 52.84], [-4.58, 53.495], [-3.094, 53.405]]]]
        },
        {
          N: "Iceland",
          I: "IS",
          C: [[[[-14.509, 66.456], [-14.74, 65.809], [-13.61, 65.127], [-14.91, 64.364], [-17.794, 63.679], [-18.656, 63.496], [-19.973, 63.644], [-22.763, 63.96], [-21.778, 64.402], [-23.955, 64.891], [-22.184, 65.085], [-22.227, 65.379], [-24.326, 65.611], [-23.651, 66.263], [-22.135, 66.41], [-20.576, 65.732], [-19.057, 66.277], [-17.799, 65.994], [-16.168, 66.527], [-14.509, 66.456]]]]
        },
        {
          N: "Azerbaijan",
          I: "AZ",
          C: [[[[46.405, 41.861], [46.686, 41.827], [47.373, 41.22], [47.816, 41.151], [47.987, 41.406], [48.584, 41.809], [49.11, 41.282], [49.619, 40.573], [50.085, 40.526], [50.393, 40.257], [49.569, 40.176], [49.395, 39.399], [49.223, 39.049], [48.857, 38.815], [48.883, 38.32], [48.634, 38.27], [48.011, 38.794], [48.356, 39.289], [48.06, 39.582], [47.685, 39.508], [46.506, 38.771], [46.483, 39.464], [46.035, 39.628], [45.61, 39.9], [45.892, 40.218], [45.359, 40.562], [45.56, 40.812], [45.179, 40.985], [44.972, 41.248], [45.217, 41.411], [45.963, 41.124], [46.502, 41.064], [46.638, 41.182], [46.145, 41.723], [46.405, 41.861]]], [[[46.144, 38.741], [45.458, 38.874], [44.953, 39.336], [44.794, 39.713], [45.002, 39.74], [45.298, 39.472], [45.74, 39.474], [45.735, 39.32], [46.144, 38.741]]]]
        },
        {
          N: "Georgia",
          I: "GE",
          C: [[[[39.955, 43.435], [40.077, 43.553], [40.922, 43.382], [42.394, 43.22], [43.756, 42.741], [43.931, 42.555], [44.538, 42.712], [45.47, 42.503], [45.776, 42.092], [46.405, 41.861], [46.145, 41.723], [46.638, 41.182], [46.502, 41.064], [45.963, 41.124], [45.217, 41.411], [44.972, 41.248], [43.583, 41.092], [42.62, 41.583], [41.554, 41.536], [41.703, 41.963], [41.453, 42.645], [40.875, 43.014], [40.321, 43.129], [39.955, 43.435]]]]
        },
        {
          N: "Philippines",
          I: "PH",
          C: [[[[120.834, 12.704], [120.323, 13.466], [121.18, 13.43], [121.527, 13.07], [121.262, 12.206], [120.834, 12.704]]], [[[122.586, 9.981], [122.837, 10.261], [122.947, 10.882], [123.499, 10.941], [123.338, 10.267], [124.078, 11.233], [123.982, 10.279], [123.623, 9.95], [123.31, 9.318], [122.996, 9.022], [122.38, 9.713], [122.586, 9.981]]], [[[126.377, 8.415], [126.479, 7.75], [126.537, 7.189], [126.197, 6.274], [125.831, 7.294], [125.364, 6.786], [125.683, 6.05], [125.397, 5.581], [124.22, 6.161], [123.939, 6.885], [124.244, 7.361], [123.61, 7.834], [123.296, 7.419], [122.826, 7.457], [122.085, 6.899], [121.92, 7.192], [122.312, 8.035], [122.942, 8.316], [123.488, 8.693], [123.841, 8.24], [124.601, 8.514], [124.765, 8.96], [125.471, 8.987], [125.412, 9.76], [126.223, 9.286], [126.307, 8.782], [126.377, 8.415]]], [[[118.505, 9.316], [117.174, 8.367], [117.664, 9.067], [118.387, 9.684], [118.987, 10.376], [119.511, 11.37], [119.69, 10.554], [119.029, 10.004], [118.505, 9.316]]], [[[122.337, 18.225], [122.174, 17.81], [122.516, 17.094], [122.252, 16.262], [121.663, 15.931], [121.505, 15.125], [121.729, 14.328], [122.259, 14.218], [122.701, 14.337], [123.95, 13.782], [123.855, 13.238], [124.181, 12.998], [124.077, 12.537], [123.298, 13.028], [122.929, 13.553], [122.671, 13.186], [122.035, 13.784], [121.126, 13.637], [120.629, 13.858], [120.679, 14.271], [120.992, 14.525], [120.693, 14.757], [120.564, 14.396], [120.07, 14.971], [119.921, 15.406], [119.884, 16.364], [120.286, 16.035], [120.39, 17.599], [120.716, 18.505], [121.321, 18.504], [121.938, 18.219], [122.246, 18.479], [122.337, 18.225]]], [[[122.038, 11.416], [121.884, 11.892], [122.484, 11.582], [123.12, 11.584], [123.101, 11.166], [122.638, 10.741], [122.003, 10.441], [121.967, 10.906], [122.038, 11.416]]], [[[125.503, 12.163], [125.783, 11.046], [125.012, 11.311], [125.033, 10.976], [125.277, 10.359], [124.802, 10.135], [124.76, 10.838], [124.459, 10.89], [124.303, 11.495], [124.891, 11.416], [124.878, 11.794], [124.267, 12.558], [125.227, 12.536], [125.503, 12.163]]]]
        },
        {
          N: "Malaysia",
          I: "MY",
          C: [[[[100.086, 6.464], [100.26, 6.643], [101.076, 6.205], [101.154, 5.691], [101.814, 5.811], [102.141, 6.222], [102.371, 6.128], [102.962, 5.524], [103.381, 4.855], [103.439, 4.182], [103.332, 3.727], [103.429, 3.383], [103.502, 2.791], [103.855, 2.515], [104.248, 1.631], [104.229, 1.293], [103.52, 1.226], [102.574, 1.967], [101.391, 2.761], [101.274, 3.27], [100.695, 3.939], [100.557, 4.767], [100.197, 5.312], [100.306, 6.041], [100.086, 6.464]]], [[[117.882, 4.138], [117.015, 4.306], [115.866, 4.307], [115.519, 3.169], [115.134, 2.821], [114.621, 1.431], [113.806, 1.218], [112.86, 1.498], [112.38, 1.41], [111.798, 0.904], [111.159, 0.976], [110.514, 0.773], [109.83, 1.338], [109.663, 2.006], [110.396, 1.664], [111.169, 1.851], [111.37, 2.697], [111.797, 2.886], [112.996, 3.102], [113.713, 3.894], [114.204, 4.526], [114.66, 4.008], [114.87, 4.348], [115.347, 4.317], [115.406, 4.955], [115.451, 5.448], [116.221, 6.143], [116.725, 6.925], [117.13, 6.928], [117.643, 6.422], [117.689, 5.987], [118.348, 5.709], [119.182, 5.408], [119.111, 5.016], [118.44, 4.967], [118.618, 4.478], [117.882, 4.138]]]]
        },
        {
          N: "Brunei Darussalam",
          I: "BN",
          C: [[[[115.451, 5.448], [115.406, 4.955], [115.347, 4.317], [114.87, 4.348], [114.66, 4.008], [114.204, 4.526], [114.6, 4.9], [115.451, 5.448]]]]
        },
        {
          N: "Slovenia",
          I: "SI",
          C: [[[[13.806, 46.509], [14.632, 46.432], [15.137, 46.659], [16.012, 46.684], [16.202, 46.852], [16.371, 46.841], [16.565, 46.504], [15.769, 46.238], [15.672, 45.834], [15.324, 45.732], [15.328, 45.452], [14.935, 45.472], [14.595, 45.635], [14.412, 45.466], [13.715, 45.5], [13.938, 45.591], [13.698, 46.017], [13.806, 46.509]]]]
        },
        {
          N: "Finland",
          I: "FI",
          C: [[[[28.592, 69.065], [28.446, 68.365], [29.977, 67.698], [29.055, 66.944], [30.218, 65.806], [29.544, 64.949], [30.445, 64.204], [30.036, 63.553], [31.516, 62.868], [31.14, 62.358], [30.211, 61.78], [28.07, 60.504], [28.07, 60.504], [28.07, 60.504], [26.255, 60.424], [24.497, 60.057], [22.87, 59.846], [22.291, 60.392], [21.322, 60.72], [21.545, 61.705], [21.059, 62.607], [21.536, 63.19], [22.443, 63.818], [24.731, 64.902], [25.398, 65.111], [25.294, 65.534], [23.903, 66.007], [23.566, 66.396], [23.539, 67.936], [21.979, 68.617], [20.646, 69.106], [21.245, 69.37], [22.356, 68.842], [23.662, 68.891], [24.736, 68.65], [25.689, 69.092], [26.18, 69.825], [27.732, 70.164], [29.016, 69.766], [28.592, 69.065]]]]
        },
        {
          N: "Slovakia",
          I: "SK",
          C: [[[[22.558, 49.086], [22.281, 48.825], [22.086, 48.422], [21.872, 48.32], [20.801, 48.624], [20.474, 48.563], [20.239, 48.328], [19.769, 48.203], [19.661, 48.267], [19.174, 48.111], [18.777, 48.082], [18.697, 47.881], [17.857, 47.758], [17.488, 47.867], [16.98, 48.123], [16.88, 48.47], [16.96, 48.597], [17.102, 48.817], [17.545, 48.8], [17.886, 48.903], [17.914, 48.996], [18.105, 49.044], [18.17, 49.272], [18.4, 49.315], [18.555, 49.495], [18.853, 49.496], [18.91, 49.436], [19.321, 49.572], [19.825, 49.217], [20.416, 49.431], [20.888, 49.329], [21.608, 49.47], [22.558, 49.086]]]]
        },
        {
          N: "Czech Republic",
          I: "CZ",
          C: [[[[15.017, 51.107], [15.491, 50.785], [16.239, 50.698], [16.176, 50.423], [16.719, 50.216], [16.869, 50.474], [17.555, 50.362], [17.649, 50.049], [18.393, 49.989], [18.853, 49.496], [18.555, 49.495], [18.4, 49.315], [18.17, 49.272], [18.105, 49.044], [17.914, 48.996], [17.886, 48.903], [17.545, 48.8], [17.102, 48.817], [16.96, 48.597], [16.499, 48.786], [16.03, 48.734], [15.253, 49.039], [14.901, 48.964], [14.339, 48.555], [13.596, 48.877], [13.031, 49.307], [12.521, 49.547], [12.415, 49.969], [12.24, 50.266], [12.967, 50.484], [13.338, 50.733], [14.056, 50.927], [14.307, 51.117], [14.571, 51.002], [15.017, 51.107]]]]
        },
        {
          N: "Eritrea",
          I: "ER",
          C: [[[[36.43, 14.422], [36.323, 14.822], [36.754, 16.292], [36.853, 16.957], [37.167, 17.263], [37.904, 17.428], [38.41, 17.998], [38.991, 16.841], [39.266, 15.923], [39.814, 15.436], [41.179, 14.491], [41.735, 13.921], [42.277, 13.344], [42.59, 13], [43.081, 12.7], [42.78, 12.455], [42.352, 12.542], [42.01, 12.866], [41.599, 13.452], [41.155, 13.773], [40.897, 14.119], [40.026, 14.52], [39.341, 14.532], [39.099, 14.741], [38.513, 14.505], [37.906, 14.959], [37.594, 14.213], [36.43, 14.422]]]]
        },
        {
          N: "Japan",
          I: "JP",
          C: [[[[141.885, 39.181], [140.959, 38.174], [140.976, 37.142], [140.6, 36.344], [140.774, 35.843], [140.253, 35.138], [138.976, 34.668], [137.218, 34.606], [135.793, 33.465], [135.121, 33.849], [135.079, 34.597], [133.34, 34.376], [132.157, 33.905], [130.986, 33.886], [132, 33.15], [131.333, 31.45], [130.686, 31.03], [130.202, 31.418], [130.448, 32.319], [129.815, 32.61], [129.408, 33.296], [130.354, 33.604], [130.878, 34.233], [131.884, 34.75], [132.618, 35.433], [134.608, 35.732], [135.678, 35.527], [136.724, 37.305], [137.391, 36.827], [138.858, 37.827], [139.426, 38.216], [140.055, 39.439], [139.883, 40.563], [140.306, 41.195], [141.369, 41.379], [141.914, 39.992], [141.885, 39.181]]], [[[144.613, 43.961], [145.321, 44.385], [145.543, 43.262], [144.06, 42.988], [143.184, 41.995], [141.611, 42.679], [141.067, 41.585], [139.955, 41.57], [139.818, 42.564], [140.312, 43.333], [141.381, 43.389], [141.672, 44.772], [141.968, 45.551], [143.143, 44.51], [143.91, 44.174], [144.613, 43.961]]], [[[132.371, 33.464], [132.924, 34.06], [133.493, 33.945], [133.904, 34.365], [134.638, 34.149], [134.766, 33.806], [134.203, 33.201], [133.793, 33.522], [133.28, 33.29], [133.015, 32.705], [132.363, 32.989], [132.371, 33.464]]]]
        },
        {
          N: "Paraguay",
          I: "PY",
          C: [[[[-58.166, -20.177], [-57.871, -20.733], [-57.937, -22.09], [-56.882, -22.282], [-56.473, -22.086], [-55.798, -22.357], [-55.611, -22.656], [-55.518, -23.572], [-55.401, -23.957], [-55.028, -24.001], [-54.653, -23.84], [-54.293, -24.021], [-54.293, -24.571], [-54.429, -25.162], [-54.625, -25.739], [-54.789, -26.622], [-55.696, -27.388], [-56.487, -27.548], [-57.61, -27.396], [-58.618, -27.124], [-57.634, -25.604], [-57.777, -25.162], [-58.807, -24.771], [-60.029, -24.033], [-60.847, -23.881], [-62.685, -22.249], [-62.291, -21.052], [-62.266, -20.514], [-61.786, -19.634], [-60.044, -19.343], [-59.115, -19.357], [-58.183, -19.868], [-58.166, -20.177]]]]
        },
        {
          N: "Yemen",
          I: "YE",
          C: [[[[52, 19], [52.782, 17.35], [53.109, 16.651], [52.385, 16.382], [52.192, 15.938], [52.168, 15.597], [51.173, 15.175], [49.575, 14.709], [48.679, 14.003], [48.239, 13.948], [47.939, 14.007], [47.354, 13.592], [46.717, 13.4], [45.878, 13.348], [45.625, 13.291], [45.406, 13.027], [45.144, 12.954], [44.99, 12.7], [44.495, 12.722], [44.175, 12.586], [43.483, 12.637], [43.223, 13.221], [43.251, 13.768], [43.088, 14.063], [42.892, 14.802], [42.605, 15.213], [42.805, 15.262], [42.702, 15.719], [42.824, 15.912], [42.779, 16.348], [43.218, 16.667], [43.116, 17.088], [43.381, 17.58], [43.792, 17.32], [44.063, 17.41], [45.217, 17.433], [45.4, 17.333], [46.367, 17.233], [46.75, 17.283], [47, 16.95], [47.467, 17.117], [48.183, 18.167], [49.117, 18.617], [52, 19]]]]
        },
        {
          N: "Saudi Arabia",
          I: "SA",
          C: [[[[34.956, 29.357], [36.069, 29.197], [36.501, 29.505], [36.741, 29.865], [37.504, 30.004], [37.668, 30.339], [37.999, 30.508], [37.002, 31.508], [39.005, 32.01], [39.195, 32.161], [40.4, 31.89], [41.89, 31.19], [44.709, 29.179], [46.569, 29.099], [47.46, 29.003], [47.709, 28.526], [48.416, 28.552], [48.808, 27.69], [49.3, 27.461], [49.471, 27.11], [50.152, 26.69], [50.213, 26.277], [50.113, 25.944], [50.24, 25.608], [50.527, 25.328], [50.661, 25], [50.81, 24.755], [51.112, 24.556], [51.39, 24.627], [51.58, 24.245], [51.618, 24.014], [52.001, 23.001], [55.007, 22.497], [55.208, 22.708], [55.667, 22], [55, 20], [52, 19], [49.117, 18.617], [48.183, 18.167], [47.467, 17.117], [47, 16.95], [46.75, 17.283], [46.367, 17.233], [45.4, 17.333], [45.217, 17.433], [44.063, 17.41], [43.792, 17.32], [43.381, 17.58], [43.116, 17.088], [43.218, 16.667], [42.779, 16.348], [42.65, 16.775], [42.348, 17.076], [42.271, 17.475], [41.754, 17.833], [41.221, 18.672], [40.939, 19.486], [40.248, 20.175], [39.802, 20.339], [39.139, 21.292], [39.024, 21.987], [39.066, 22.58], [38.493, 23.688], [38.024, 24.079], [37.484, 24.285], [37.155, 24.858], [37.209, 25.085], [36.932, 25.603], [36.64, 25.826], [36.249, 26.57], [35.64, 27.377], [35.13, 28.063], [34.632, 28.059], [34.788, 28.607], [34.832, 28.957], [34.956, 29.357]]]]
        },
        {
          N: "Northern Cyprus",
          I: "CYP",
          C: [[[[32.732, 35.14], [32.802, 35.146], [32.947, 35.387], [33.667, 35.373], [34.576, 35.672], [33.901, 35.246], [33.974, 35.059], [33.866, 35.094], [33.675, 35.018], [33.526, 35.039], [33.476, 35], [33.456, 35.101], [33.384, 35.163], [33.191, 35.173], [32.92, 35.088], [32.732, 35.14]]]]
        },
        {
          N: "Cyprus",
          I: "CY",
          C: [[[[32.732, 35.14], [32.92, 35.088], [33.191, 35.173], [33.384, 35.163], [33.456, 35.101], [33.476, 35], [33.526, 35.039], [33.675, 35.018], [33.866, 35.094], [33.974, 35.059], [34.005, 34.978], [32.98, 34.572], [32.49, 34.702], [32.257, 35.103], [32.732, 35.14]]]]
        },
        {
          N: "Morocco",
          I: "MA",
          C: [[[[-2.17, 35.168], [-1.793, 34.528], [-1.733, 33.92], [-1.388, 32.864], [-1.125, 32.652], [-1.308, 32.263], [-2.617, 32.094], [-3.069, 31.724], [-3.647, 31.637], [-3.69, 30.897], [-4.86, 30.501], [-5.242, 30], [-6.061, 29.732], [-7.059, 29.579], [-8.674, 28.841], [-8.666, 27.656], [-8.818, 27.656], [-8.795, 27.121], [-9.413, 27.088], [-9.735, 26.861], [-10.189, 26.861], [-10.551, 26.991], [-11.393, 26.883], [-11.718, 26.104], [-12.031, 26.031], [-12.501, 24.77], [-13.891, 23.691], [-14.221, 22.31], [-14.631, 21.861], [-14.751, 21.501], [-17.003, 21.421], [-17.02, 21.422], [-16.973, 21.886], [-16.589, 22.158], [-16.262, 22.679], [-16.326, 23.018], [-15.983, 23.723], [-15.426, 24.359], [-15.089, 24.52], [-14.825, 25.104], [-14.801, 25.636], [-14.44, 26.254], [-13.774, 26.619], [-13.14, 27.64], [-13.122, 27.654], [-12.619, 28.038], [-11.689, 28.149], [-10.901, 28.832], [-10.4, 29.099], [-9.565, 29.934], [-9.815, 31.178], [-9.435, 32.038], [-9.301, 32.565], [-8.657, 33.24], [-7.654, 33.697], [-6.913, 34.11], [-6.244, 35.146], [-5.93, 35.76], [-5.194, 35.755], [-4.591, 35.331], [-3.64, 35.4], [-2.604, 35.179], [-2.17, 35.168]]]]
        },
        {
          N: "Egypt",
          I: "EG",
          C: [[[[36.866, 22], [32.9, 22], [29.02, 22], [25, 22], [25, 25.682], [25, 29.239], [24.7, 30.044], [24.958, 30.662], [24.803, 31.089], [25.165, 31.569], [26.495, 31.586], [27.458, 31.321], [28.45, 31.026], [28.914, 30.87], [29.683, 31.187], [30.095, 31.473], [30.977, 31.556], [31.688, 31.43], [31.96, 30.934], [32.192, 31.26], [32.994, 31.024], [33.773, 30.967], [34.265, 31.219], [34.265, 31.219], [34.823, 29.761], [34.923, 29.501], [34.642, 29.099], [34.427, 28.344], [34.155, 27.823], [33.921, 27.649], [33.588, 27.971], [33.137, 28.418], [32.423, 29.851], [32.32, 29.76], [32.735, 28.705], [33.349, 27.7], [34.105, 26.142], [34.474, 25.599], [34.795, 25.034], [35.692, 23.927], [35.494, 23.752], [35.526, 23.102], [36.691, 22.205], [36.866, 22]]]]
        },
        {
          N: "Libya",
          I: "LY",
          C: [[[[25, 22], [25, 20.003], [23.85, 20], [23.838, 19.58], [19.849, 21.495], [15.861, 23.41], [14.851, 22.863], [14.144, 22.491], [13.581, 23.041], [12, 23.472], [11.561, 24.098], [10.771, 24.563], [10.304, 24.379], [9.948, 24.937], [9.911, 25.365], [9.319, 26.094], [9.716, 26.512], [9.629, 27.141], [9.756, 27.688], [9.684, 28.144], [9.86, 28.96], [9.806, 29.425], [9.482, 30.308], [9.97, 30.539], [10.057, 30.962], [9.95, 31.376], [10.637, 31.761], [10.945, 32.082], [11.432, 32.369], [11.489, 33.137], [12.663, 32.793], [13.083, 32.879], [13.919, 32.712], [15.246, 32.265], [15.714, 31.376], [16.612, 31.182], [18.021, 30.764], [19.086, 30.266], [19.574, 30.526], [20.053, 30.986], [19.82, 31.752], [20.134, 32.238], [20.855, 32.707], [21.543, 32.843], [22.896, 32.639], [23.237, 32.191], [23.609, 32.187], [23.927, 32.017], [24.921, 31.899], [25.165, 31.569], [24.803, 31.089], [24.958, 30.662], [24.7, 30.044], [25, 29.239], [25, 25.682], [25, 22]]]]
        },
        {
          N: "Ethiopia",
          I: "ET",
          C: [[[[47.789, 8.003], [44.964, 5.002], [43.661, 4.958], [42.77, 4.253], [42.129, 4.234], [41.855, 3.919], [41.172, 3.919], [40.768, 4.257], [39.855, 3.839], [39.559, 3.422], [38.893, 3.501], [38.671, 3.616], [38.437, 3.589], [38.121, 3.599], [36.855, 4.448], [36.159, 4.448], [35.817, 4.777], [35.817, 5.338], [35.298, 5.506], [34.707, 6.594], [34.25, 6.826], [34.075, 7.226], [33.568, 7.713], [32.954, 7.785], [33.295, 8.355], [33.826, 8.379], [33.975, 8.685], [33.962, 9.584], [34.257, 10.63], [34.731, 10.91], [34.832, 11.319], [35.26, 12.083], [35.864, 12.578], [36.27, 13.563], [36.43, 14.422], [37.594, 14.213], [37.906, 14.959], [38.513, 14.505], [39.099, 14.741], [39.341, 14.532], [40.026, 14.52], [40.897, 14.119], [41.155, 13.773], [41.599, 13.452], [42.01, 12.866], [42.352, 12.542], [42, 12.1], [41.662, 11.631], [41.74, 11.355], [41.756, 11.051], [42.314, 11.034], [42.555, 11.105], [42.777, 10.927], [42.559, 10.573], [42.928, 10.022], [43.297, 9.54], [43.679, 9.184], [46.948, 7.997], [47.789, 8.003]]]]
        },
        {
          N: "Djibouti",
          I: "DJ",
          C: [[[[42.352, 12.542], [42.78, 12.455], [43.081, 12.7], [43.318, 12.39], [43.286, 11.975], [42.716, 11.736], [43.145, 11.462], [42.777, 10.927], [42.555, 11.105], [42.314, 11.034], [41.756, 11.051], [41.74, 11.355], [41.662, 11.631], [42, 12.1], [42.352, 12.542]]]]
        },
        {
          N: "Somaliland",
          I: "SOM",
          C: [[[[48.948, 11.411], [48.948, 11.411], [48.942, 11.394], [48.938, 10.982], [48.938, 9.974], [48.938, 9.452], [48.487, 8.838], [47.789, 8.003], [46.948, 7.997], [43.679, 9.184], [43.297, 9.54], [42.928, 10.022], [42.559, 10.573], [42.777, 10.927], [43.145, 11.462], [43.471, 11.278], [43.667, 10.864], [44.118, 10.446], [44.614, 10.442], [45.557, 10.698], [46.645, 10.817], [47.526, 11.127], [48.022, 11.193], [48.379, 11.375], [48.948, 11.411], [48.948, 11.411]]]]
        },
        {
          N: "Uganda",
          I: "UG",
          C: [[[[33.904, -0.95], [31.866, -1.027], [30.77, -1.015], [30.419, -1.135], [29.822, -1.443], [29.579, -1.341], [29.588, -0.587], [29.82, -0.205], [29.876, 0.597], [30.086, 1.062], [30.469, 1.584], [30.853, 1.849], [31.174, 2.204], [30.773, 2.34], [30.834, 3.509], [30.834, 3.509], [31.246, 3.782], [31.881, 3.558], [32.686, 3.792], [33.39, 3.79], [34.005, 4.25], [34.479, 3.556], [34.596, 3.054], [35.036, 1.906], [34.672, 1.177], [34.18, 0.515], [33.894, 0.11], [33.904, -0.95]]]]
        },
        {
          N: "Rwanda",
          I: "RW",
          C: [[[[30.419, -1.135], [30.816, -1.699], [30.758, -2.287], [30.47, -2.414], [30.47, -2.414], [29.938, -2.348], [29.632, -2.918], [29.025, -2.839], [29.117, -2.292], [29.255, -2.215], [29.292, -1.62], [29.579, -1.341], [29.822, -1.443], [30.419, -1.135]]]]
        },
        {
          N: "Bosnia and Herzegovina",
          I: "BA",
          C: [[[[18.56, 42.65], [17.675, 43.029], [17.297, 43.446], [16.916, 43.668], [16.456, 44.041], [16.24, 44.351], [15.75, 44.819], [15.959, 45.234], [16.318, 45.004], [16.535, 45.212], [17.002, 45.234], [17.862, 45.068], [18.553, 45.082], [19.005, 44.86], [19.005, 44.86], [19.368, 44.863], [19.118, 44.423], [19.6, 44.038], [19.454, 43.568], [19.219, 43.524], [19.032, 43.433], [18.706, 43.2], [18.56, 42.65]]]]
        },
        {
          N: "Macedonia",
          I: "MK",
          C: [[[[22.381, 42.32], [22.881, 41.999], [22.952, 41.338], [22.762, 41.305], [22.597, 41.13], [22.055, 41.15], [21.674, 40.931], [21.02, 40.843], [20.605, 41.086], [20.463, 41.515], [20.59, 41.855], [20.59, 41.855], [20.717, 41.847], [20.762, 42.052], [21.353, 42.207], [21.577, 42.245], [21.917, 42.304], [22.381, 42.32]]]]
        },
        {
          N: "Serbia",
          I: "RS",
          C: [[[[18.83, 45.909], [18.83, 45.909], [19.596, 46.172], [20.22, 46.127], [20.762, 45.735], [20.874, 45.416], [21.484, 45.181], [21.562, 44.769], [22.145, 44.478], [22.459, 44.703], [22.706, 44.578], [22.474, 44.409], [22.657, 44.235], [22.41, 44.008], [22.5, 43.643], [22.986, 43.211], [22.605, 42.899], [22.437, 42.58], [22.545, 42.461], [22.381, 42.32], [21.917, 42.304], [21.577, 42.245], [21.543, 42.32], [21.663, 42.439], [21.775, 42.683], [21.633, 42.677], [21.439, 42.863], [21.274, 42.91], [21.143, 43.069], [20.957, 43.131], [20.814, 43.272], [20.635, 43.217], [20.497, 42.885], [20.258, 42.813], [20.34, 42.899], [19.959, 43.106], [19.63, 43.214], [19.484, 43.352], [19.219, 43.524], [19.454, 43.568], [19.6, 44.038], [19.118, 44.423], [19.368, 44.863], [19.005, 44.86], [19.005, 44.86], [19.39, 45.237], [19.073, 45.522], [18.83, 45.909]]]]
        },
        {
          N: "Montenegro",
          I: "ME",
          C: [[[[20.071, 42.589], [19.802, 42.5], [19.738, 42.688], [19.304, 42.196], [19.372, 41.878], [19.162, 41.955], [18.882, 42.282], [18.45, 42.48], [18.56, 42.65], [18.706, 43.2], [19.032, 43.433], [19.219, 43.524], [19.484, 43.352], [19.63, 43.214], [19.959, 43.106], [20.34, 42.899], [20.258, 42.813], [20.071, 42.589]]]]
        },
        {
          N: "Kosovo",
          I: "XK",
          C: [[[[20.59, 41.855], [20.523, 42.218], [20.284, 42.32], [20.071, 42.589], [20.258, 42.813], [20.497, 42.885], [20.635, 43.217], [20.814, 43.272], [20.957, 43.131], [21.143, 43.069], [21.274, 42.91], [21.439, 42.863], [21.633, 42.677], [21.775, 42.683], [21.663, 42.439], [21.543, 42.32], [21.577, 42.245], [21.353, 42.207], [20.762, 42.052], [20.717, 41.847], [20.59, 41.855]]]]
        },
        {
          N: "Trinidad and Tobago",
          I: "TT",
          C: [[[[-61.68, 10.76], [-61.105, 10.89], [-60.895, 10.855], [-60.935, 10.11], [-61.77, 10], [-61.95, 10.09], [-61.66, 10.365], [-61.68, 10.76]]]]
        },
        {
          N: "South Sudan",
          I: "SS",
          C: [[[[30.834, 3.509], [29.954, 4.174], [29.716, 4.601], [29.159, 4.389], [28.697, 4.455], [28.429, 4.287], [27.98, 4.408], [27.374, 5.234], [27.213, 5.551], [26.466, 5.947], [26.213, 6.547], [25.797, 6.979], [25.124, 7.5], [25.115, 7.825], [24.567, 8.229], [23.887, 8.62], [24.194, 8.729], [24.537, 8.918], [24.795, 9.81], [25.07, 10.274], [25.791, 10.411], [25.962, 10.136], [26.477, 9.553], [26.752, 9.467], [27.113, 9.639], [27.834, 9.604], [27.971, 9.398], [28.967, 9.398], [29.001, 9.604], [29.516, 9.793], [29.619, 10.085], [29.997, 10.291], [30.838, 9.707], [31.353, 9.81], [31.851, 10.531], [32.4, 11.081], [32.314, 11.681], [32.074, 11.973], [32.675, 12.025], [32.743, 12.248], [33.207, 12.179], [33.087, 11.441], [33.207, 10.72], [33.722, 10.325], [33.842, 9.982], [33.825, 9.484], [33.963, 9.464], [33.975, 8.685], [33.826, 8.379], [33.295, 8.355], [32.954, 7.785], [33.568, 7.713], [34.075, 7.226], [34.25, 6.826], [34.707, 6.594], [35.298, 5.506], [34.62, 4.847], [34.005, 4.25], [33.39, 3.79], [32.686, 3.792], [31.881, 3.558], [31.246, 3.782], [30.834, 3.509]]]]
        }
      ]
    };
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/constants.js
var require_constants = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultTooltip = exports.defaultCountryStyle = exports.sizeMap = exports.heightRatio = exports.defaultColor = exports.defaultSize = void 0;
    exports.defaultSize = "xl";
    exports.defaultColor = "#dddddd";
    exports.heightRatio = 3 / 4;
    exports.sizeMap = {
      sm: 240,
      md: 336,
      lg: 480,
      xl: 640,
      xxl: 1200
    };
    var defaultCountryStyle = (stroke, strokeOpacity) => (context) => {
      const { countryValue, minValue, maxValue, color } = context;
      const calculatedValue = typeof countryValue === "string" ? minValue : (
        // TODO bug in TS-ESLint; report this
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        countryValue
      );
      let opacityLevel = calculatedValue !== void 0 ? 0.2 + 0.6 * ((calculatedValue - minValue) / (maxValue - minValue)) : 0;
      if (Number.isNaN(opacityLevel))
        opacityLevel = 0.8;
      const style = {
        fill: color,
        fillOpacity: opacityLevel,
        stroke,
        strokeWidth: 1,
        strokeOpacity,
        cursor: "pointer"
      };
      return style;
    };
    exports.defaultCountryStyle = defaultCountryStyle;
    var defaultTooltip = (context) => {
      const { countryName, countryValue, prefix, suffix } = context;
      return `${countryName} ${prefix} ${countryValue.toLocaleString()} ${suffix}`;
    };
    exports.defaultTooltip = defaultTooltip;
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/utils.js
var require_utils = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.responsify = exports.useWindowWidth = exports.useIsomorphicLayoutEffect = void 0;
    var react_1 = require_react();
    var constants_js_1 = require_constants();
    exports.useIsomorphicLayoutEffect = typeof window !== "undefined" ? react_1.useLayoutEffect : react_1.useEffect;
    function useWindowWidth() {
      const [width, setWidth] = (0, react_1.useState)(constants_js_1.sizeMap[constants_js_1.defaultSize]);
      (0, exports.useIsomorphicLayoutEffect)(() => {
        const updateWidth = () => {
          setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
      }, []);
      return width;
    }
    exports.useWindowWidth = useWindowWidth;
    function responsify(sizeOption, windowWidth) {
      if (sizeOption === "responsive") {
        if (typeof window === "undefined")
          return constants_js_1.sizeMap[constants_js_1.defaultSize];
        return Math.min(window.innerHeight, window.innerWidth) * 0.75;
      }
      if (typeof window === "undefined")
        return constants_js_1.sizeMap[sizeOption];
      const fittingSize = Object.values(constants_js_1.sizeMap).reverse().find((size) => size <= windowWidth) ?? constants_js_1.sizeMap.sm;
      return Math.min(fittingSize, constants_js_1.sizeMap[sizeOption]);
    }
    exports.responsify = responsify;
  }
});

// raaghu-elements/node_modules/react-path-tooltip/dist/ReactPathTooltip.js
var require_ReactPathTooltip = __commonJS({
  "raaghu-elements/node_modules/react-path-tooltip/dist/ReactPathTooltip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PathTooltip = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = tslib_1.__importStar(require_react());
    exports.PathTooltip = (props) => {
      const [hidden, setHidden] = react_1.useState(true);
      const [tooltipRect, setTooltipRect] = react_1.useState({ x: 0, y: 0, w: 0, h: 0, isLeft: false, isTop: false });
      const [fontSize] = react_1.useState(props["fontSize"] || 12);
      const [fontFamily] = react_1.useState(props["fontFamily"] || "sans-serif");
      const [bgColor] = react_1.useState(props["bgColor"] || "black");
      const [textColor] = react_1.useState(props["textColor"] || "white");
      const [rtl] = react_1.useState(props["rtl"] || false);
      const pathRef = props.pathRef;
      const svgRef = props.svgRef;
      const textRef = react_1.createRef();
      react_1.useEffect(() => {
        const updateTooltip = (e) => {
          if (svgRef && pathRef && textRef && svgRef.current && pathRef.current && textRef.current) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const textRect = textRef.current.getBoundingClientRect();
            const isLeft = e.x - svgRect.x > svgRect.width / 2;
            const isTop = e.y - svgRect.y > svgRect.height / 2;
            const w = textRect.width + 20;
            const h = textRect.height + 20;
            const x = isLeft ? e.x - svgRect.x + 8 - w : e.x - svgRect.x - 8;
            const y = isTop ? e.y - svgRect.y - 12 - h : e.y - svgRect.y + 8;
            setTooltipRect({ x, y, w, h, isLeft, isTop });
          }
        };
        if (pathRef && pathRef.current) {
          pathRef.current.addEventListener("mouseover", () => {
            setHidden(false);
          });
          pathRef.current.addEventListener("mouseleave", () => {
            setHidden(true);
          });
          pathRef.current.addEventListener("mousemove", (e) => {
            if (!hidden)
              updateTooltip(e);
          });
        }
      }, [pathRef, svgRef, textRef, hidden]);
      const bottomRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + 30).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + 22).toString() + "," + tooltipRect.y.toString();
      const bottomLeft = (tooltipRect.x + tooltipRect.w - 8).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 25).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + tooltipRect.y.toString();
      const topRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + 15).toString() + "," + (tooltipRect.y + tooltipRect.h).toString() + " " + (tooltipRect.x + 7).toString() + "," + (tooltipRect.y + tooltipRect.h).toString();
      const topLeft = (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + (tooltipRect.y + tooltipRect.h).toString() + " " + (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h).toString();
      const points = tooltipRect.isLeft && tooltipRect.isTop ? topLeft : tooltipRect.isTop ? topRight : tooltipRect.isLeft ? bottomLeft : bottomRight;
      const findSpaceBeforeThreshold = (inputString, threshold) => {
        let i = 0;
        let temp = -1;
        if (inputString.length <= threshold) {
          return ["", inputString];
        }
        while (i <= inputString.length && i <= threshold) {
          if (inputString[i] === " ") {
            temp = i;
          }
          i++;
        }
        return temp !== -1 ? [inputString.slice(0, temp), inputString.slice(temp + 1)] : [inputString.slice(0, threshold), inputString.slice(threshold + 1)];
      };
      const tips = [];
      const startTip = findSpaceBeforeThreshold(props.tip, 35 - (1 * fontSize - 11));
      tips.push(startTip[0]);
      let interimTip = startTip[1];
      let leftover = startTip[1];
      while (interimTip !== "") {
        const currTip = findSpaceBeforeThreshold(interimTip === leftover ? interimTip : leftover, 35 - (1 * fontSize - 11));
        interimTip = currTip[0];
        leftover = currTip[1];
        tips.push(interimTip === "" ? currTip[1] : currTip[0]);
      }
      return react_1.default.createElement(
        "g",
        { pointerEvents: "none" },
        react_1.default.createElement("rect", { x: tooltipRect.x, y: tooltipRect.y, width: tooltipRect.w, rx: 5, ry: 5, height: tooltipRect.h, fill: bgColor, visibility: hidden ? "hidden" : "visible" }),
        react_1.default.createElement("polygon", { fill: bgColor, visibility: hidden ? "hidden" : "visible", points }),
        react_1.default.createElement("text", { ref: textRef, x: rtl ? tooltipRect.x + tooltipRect.w - 10 : tooltipRect.x + 10, y: tooltipRect.y, cursor: "default", fontFamily, fontSize, fill: textColor, visibility: hidden ? "hidden" : "visible" }, props.tip.length > 35 - 1 * (fontSize - 11) ? tips.map((tip, index2) => {
          return react_1.default.createElement("tspan", { key: tip, x: rtl ? tooltipRect.x + tooltipRect.w - 10 : tooltipRect.x + 10, y: tooltipRect.y + (20 + (1 * fontSize - 11)) + 20 * index2 }, tip);
        }) : react_1.default.createElement("tspan", { x: rtl ? tooltipRect.x + tooltipRect.w - 10 : tooltipRect.x + 10, y: tooltipRect.y + (20 + (1 * fontSize - 11)) }, props.tip))
      );
    };
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/draw.js
var require_draw = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/draw.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.drawTooltip = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React = tslib_1.__importStar(require_react());
    var react_path_tooltip_1 = require_ReactPathTooltip();
    function drawTooltip(tip, tooltipBgColor, tooltipTextColor, rtl, triggerRef, containerRef) {
      return tip ? React.createElement(react_path_tooltip_1.PathTooltip, { fontSize: 12, bgColor: tooltipBgColor, textColor: tooltipTextColor, key: tip, pathRef: triggerRef, svgRef: containerRef, rtl, tip }) : null;
    }
    exports.drawTooltip = drawTooltip;
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/components/Frame.js
var require_Frame = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/components/Frame.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React = tslib_1.__importStar(require_react());
    function Frame({ color }) {
      return React.createElement("rect", { x: 0, y: 0, width: "100%", height: "100%", stroke: color, fill: "none" });
    }
    exports.default = Frame;
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/components/Region.js
var require_Region = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/components/Region.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React = tslib_1.__importStar(require_react());
    function onMouseOver(strokeOpacity) {
      return (event) => {
        event.currentTarget.style.strokeWidth = "2";
        event.currentTarget.style.strokeOpacity = String(Math.min(strokeOpacity + 0.3, 1));
      };
    }
    function onMouseOut(strokeOpacity) {
      return (event) => {
        event.currentTarget.style.strokeWidth = "1";
        event.currentTarget.style.strokeOpacity = String(strokeOpacity);
      };
    }
    function Region({ href, ...props }, ref) {
      const path = React.createElement("path", { onMouseOver: onMouseOver(Number(props.strokeOpacity)), onMouseOut: onMouseOut(Number(props.strokeOpacity)), ref, ...props });
      if (href)
        return React.createElement("a", { ...typeof href === "string" ? { href } : href }, path);
      return path;
    }
    exports.default = React.forwardRef(Region);
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/components/TextLabel.js
var require_TextLabel = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/components/TextLabel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React = tslib_1.__importStar(require_react());
    function TextLabel({ label, ...props }) {
      return React.createElement("text", { ...props }, label);
    }
    exports.default = TextLabel;
  }
});

// raaghu-elements/node_modules/react-svg-worldmap/dist/index.js
var require_dist = __commonJS({
  "raaghu-elements/node_modules/react-svg-worldmap/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.regions = exports.WorldMap = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React = tslib_1.__importStar(require_react());
    var react_1 = require_react();
    var d3_geo_1 = (init_src3(), __toCommonJS(src_exports));
    var countries_geo_js_1 = tslib_1.__importDefault(require_countries_geo());
    var constants_js_1 = require_constants();
    var utils_js_1 = require_utils();
    var draw_js_1 = require_draw();
    var Frame_js_1 = tslib_1.__importDefault(require_Frame());
    var Region_js_1 = tslib_1.__importDefault(require_Region());
    var TextLabel_js_1 = tslib_1.__importDefault(require_TextLabel());
    function toValue({ value }) {
      return typeof value === "string" ? 0 : value;
    }
    function WorldMap(props) {
      const { data, title, valuePrefix = "", valueSuffix = "", color = constants_js_1.defaultColor, strokeOpacity = 0.2, backgroundColor = "white", tooltipBgColor = "black", tooltipTextColor = "white", rtl = false, size = constants_js_1.defaultSize, frame = false, frameColor = "black", borderColor = "black", richInteraction = false, styleFunction = (0, constants_js_1.defaultCountryStyle)(borderColor, strokeOpacity), tooltipTextFunction = constants_js_1.defaultTooltip, onClickFunction, hrefFunction, textLabelFunction = () => [] } = props;
      const windowWidth = (0, utils_js_1.useWindowWidth)();
      const width = typeof size === "number" ? size : (0, utils_js_1.responsify)(size, windowWidth);
      const height = width * constants_js_1.heightRatio;
      const [scale, setScale] = (0, react_1.useState)(1);
      const [translateX, setTranslateX] = (0, react_1.useState)(0);
      const [translateY, setTranslateY] = (0, react_1.useState)(0);
      const containerRef = (0, react_1.createRef)();
      const countryValueMap = Object.fromEntries(data.map(({ country, value }) => [country.toUpperCase(), value]));
      const minValue = Math.min(...data.map(toValue));
      const maxValue = Math.max(...data.map(toValue));
      const projection2 = (0, d3_geo_1.geoMercator)();
      const pathGenerator = (0, d3_geo_1.geoPath)().projection(projection2);
      const onClick = React.useCallback((context) => (event) => onClickFunction == null ? void 0 : onClickFunction({ ...context, event }), [onClickFunction]);
      const regions2 = countries_geo_js_1.default.features.map((feature) => {
        const triggerRef = (0, react_1.createRef)();
        const { I: isoCode, N: countryName, C: coordinates2 } = feature;
        const geoFeature = {
          type: "Feature",
          properties: { NAME: countryName, ISO_A2: isoCode },
          geometry: {
            type: "MultiPolygon",
            coordinates: coordinates2
          }
        };
        const context = {
          countryCode: isoCode,
          countryValue: countryValueMap[isoCode],
          countryName,
          color,
          minValue,
          maxValue,
          prefix: valuePrefix,
          suffix: valueSuffix
        };
        const path = React.createElement(Region_js_1.default, { ref: triggerRef, d: pathGenerator(geoFeature), style: styleFunction(context), onClick: onClick(context), strokeOpacity, href: hrefFunction == null ? void 0 : hrefFunction(context), key: countryName });
        const tooltip = (0, draw_js_1.drawTooltip)(typeof context.countryValue === "undefined" ? void 0 : tooltipTextFunction(context), tooltipBgColor, tooltipTextColor, rtl, triggerRef, containerRef);
        return { path, highlightedTooltip: tooltip };
      });
      const regionPaths = regions2.map((entry) => entry.path);
      const regionTooltips = regions2.map((entry) => entry.highlightedTooltip);
      const eventHandlers = {
        onMouseDown(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        onDoubleClick(e) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          if (scale === 4) {
            setTranslateX(0);
            setTranslateY(0);
            setScale(1);
          } else {
            setTranslateX(2 * translateX - x);
            setTranslateY(2 * translateY - y);
            setScale(scale * 2);
          }
        }
      };
      return React.createElement(
        "figure",
        { className: "worldmap__figure-container", style: { backgroundColor } },
        title && React.createElement("figcaption", { className: "worldmap__figure-caption" }, title),
        React.createElement(
          "svg",
          { ref: containerRef, height: `${height}px`, width: `${width}px`, ...richInteraction ? eventHandlers : void 0 },
          frame && React.createElement(Frame_js_1.default, { color: frameColor }),
          React.createElement("g", { transform: `translate(${translateX}, ${translateY}) scale(${width / 960 * scale}) translate(0, 240)`, style: { transition: "all 0.2s" } }, regionPaths),
          React.createElement("g", null, textLabelFunction(width).map((labelProps) => React.createElement(TextLabel_js_1.default, { ...labelProps, key: labelProps.label }))),
          regionTooltips
        )
      );
    }
    exports.default = WorldMap;
    exports.WorldMap = WorldMap;
    var regions = countries_geo_js_1.default.features.map((g) => ({ name: g.N, code: g.I }));
    exports.regions = regions;
  }
});
export default require_dist();
//# sourceMappingURL=react-svg-worldmap.js.map
