import {
  require_baseClone
} from "./chunk-E2CA6X6R.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep;
  }
});

export {
  require_cloneDeep
};
//# sourceMappingURL=chunk-KLXU7ML2.js.map
