import {
  require_debounce
} from "./chunk-LKGYGYMZ.js";
import {
  require_isObject
} from "./chunk-CN4Y6LVA.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle;
  }
});

export {
  require_throttle
};
//# sourceMappingURL=chunk-2TXGIX2N.js.map
