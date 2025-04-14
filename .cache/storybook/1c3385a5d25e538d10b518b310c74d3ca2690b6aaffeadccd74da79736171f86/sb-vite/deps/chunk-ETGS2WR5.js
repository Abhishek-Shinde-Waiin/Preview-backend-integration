import {
  require_react_dom
} from "./chunk-MWSGYS3J.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/react-dom-shim/dist/react-16.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
var renderElement = async (node, el) => new Promise((resolve) => {
  ReactDOM.render(node, el, () => resolve(null));
});
var unmountElement = (el) => {
  ReactDOM.unmountComponentAtNode(el);
};

export {
  renderElement,
  unmountElement
};
//# sourceMappingURL=chunk-ETGS2WR5.js.map
