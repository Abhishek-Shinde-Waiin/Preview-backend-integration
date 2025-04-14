import {
  require_baseForOwn
} from "./chunk-QRCDOZAE.js";
import {
  require_baseIteratee
} from "./chunk-XLUVY7RT.js";
import {
  require_baseAssignValue
} from "./chunk-5QTR2NPO.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "node_modules/lodash/mapValues.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues;
  }
});

export {
  require_mapValues
};
//# sourceMappingURL=chunk-MROHNSMD.js.map
