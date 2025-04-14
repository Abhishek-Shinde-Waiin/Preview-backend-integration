import {
  require_upperFirst
} from "./chunk-5ANG3TVF.js";
import {
  require_createCompounder
} from "./chunk-SCYN2MHK.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/startCase.js
var require_startCase = __commonJS({
  "node_modules/lodash/startCase.js"(exports, module) {
    var createCompounder = require_createCompounder();
    var upperFirst = require_upperFirst();
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? " " : "") + upperFirst(word);
    });
    module.exports = startCase;
  }
});

export {
  require_startCase
};
//# sourceMappingURL=chunk-HVTHKGWU.js.map
