// node_modules/@storybook/addon-viewport/dist/preview.mjs
var PARAM_KEY = "viewport";
var modern = { [PARAM_KEY]: { value: void 0, isRotated: false } };
var legacy = { viewport: "reset", viewportRotated: false };
var initialGlobals = (FEATURES == null ? void 0 : FEATURES.viewportStoryGlobals) ? modern : legacy;

export {
  initialGlobals
};
//# sourceMappingURL=chunk-7LHXWTTG.js.map
