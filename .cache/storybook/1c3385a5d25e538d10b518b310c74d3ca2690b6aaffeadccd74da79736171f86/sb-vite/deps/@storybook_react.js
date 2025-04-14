import {
  entry_preview_exports,
  renderToCanvas
} from "./chunk-KYIQT7E3.js";
import "./chunk-MWSGYS3J.js";
import "./chunk-DF7VAP3D.js";
import {
  require_react
} from "./chunk-USEVLOEB.js";
import {
  require_global
} from "./chunk-DXIOBCSA.js";
import {
  require_preview_api
} from "./chunk-6GFF2EK4.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/react/dist/index.mjs
var import_global = __toESM(require_global(), 1);
var React = __toESM(require_react(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);
var { window: globalWindow } = import_global.global;
globalWindow && (globalWindow.STORYBOOK_ENV = "react");
function setProjectAnnotations(projectAnnotations) {
  return (0, import_preview_api.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS), (0, import_preview_api.setProjectAnnotations)(projectAnnotations);
}
var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS = { ...entry_preview_exports, renderToCanvas: async (renderContext, canvasElement) => {
  if (renderContext.storyContext.testingLibraryRender == null) {
    renderContext.storyContext.parameters.__isPortableStory = true;
    let unmount2 = await renderToCanvas(renderContext, canvasElement);
    return async () => {
      await unmount2();
    };
  }
  let { storyContext: { context, unboundStoryFn: Story, testingLibraryRender: render } } = renderContext, { unmount } = render(React.createElement(Story, { ...context }), { container: context.canvasElement });
  return unmount;
} };
function composeStory(story, componentAnnotations, projectAnnotations, exportsName) {
  return (0, import_preview_api.composeStory)(story, componentAnnotations, projectAnnotations, INTERNAL_DEFAULT_PROJECT_ANNOTATIONS, exportsName);
}
function composeStories(csfExports, projectAnnotations) {
  return (0, import_preview_api.composeStories)(csfExports, projectAnnotations, composeStory);
}
var _a;
typeof module < "u" && ((_a = module == null ? void 0 : module.hot) == null ? void 0 : _a.decline());
export {
  INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,
  composeStories,
  composeStory,
  setProjectAnnotations
};
//# sourceMappingURL=@storybook_react.js.map
