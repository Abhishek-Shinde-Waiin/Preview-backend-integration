import {
  require_baseEach
} from "./chunk-3F265SAN.js";
import {
  require_baseIteratee
} from "./chunk-XLUVY7RT.js";
import {
  require_baseAssignValue
} from "./chunk-5QTR2NPO.js";
import {
  require_isArray
} from "./chunk-X3EIENMP.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/_arrayAggregator.js
var require_arrayAggregator = __commonJS({
  "node_modules/lodash/_arrayAggregator.js"(exports, module) {
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    module.exports = arrayAggregator;
  }
});

// node_modules/lodash/_baseAggregator.js
var require_baseAggregator = __commonJS({
  "node_modules/lodash/_baseAggregator.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection2) {
        setter(accumulator, value, iteratee(value), collection2);
      });
      return accumulator;
    }
    module.exports = baseAggregator;
  }
});

// node_modules/lodash/_createAggregator.js
var require_createAggregator = __commonJS({
  "node_modules/lodash/_createAggregator.js"(exports, module) {
    var arrayAggregator = require_arrayAggregator();
    var baseAggregator = require_baseAggregator();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
      };
    }
    module.exports = createAggregator;
  }
});

// node_modules/lodash/countBy.js
var require_countBy = __commonJS({
  "node_modules/lodash/countBy.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var createAggregator = require_createAggregator();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });
    module.exports = countBy;
  }
});

export {
  require_countBy
};
//# sourceMappingURL=chunk-UC23343J.js.map
