import {
  require_overRest,
  require_setToString
} from "./chunk-GJBICXNA.js";
import {
  require_identity
} from "./chunk-6JAZYESB.js";
import {
  require_isArrayLike
} from "./chunk-SZOLS7CD.js";
import {
  require_isIndex
} from "./chunk-FXZYPVRL.js";
import {
  require_eq
} from "./chunk-GMADAPVT.js";
import {
  require_isObject
} from "./chunk-CN4Y6LVA.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

export {
  require_baseRest,
  require_isIterateeCall
};
//# sourceMappingURL=chunk-GA4EB3FW.js.map
