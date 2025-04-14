import {
  require_keysIn
} from "./chunk-G2S5TS2B.js";
import {
  require_getPrototype
} from "./chunk-K35XZJFD.js";
import {
  require_baseGetAllKeys,
  require_getSymbols,
  require_stubArray
} from "./chunk-OYNCASWR.js";
import {
  require_arrayPush
} from "./chunk-5MYVVEJS.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

export {
  require_getSymbolsIn,
  require_getAllKeysIn
};
//# sourceMappingURL=chunk-5JQRFFSD.js.map
