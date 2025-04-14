import {
  require_client_logger
} from "./chunk-KQ2JNRIV.js";
import {
  dedent
} from "./chunk-JLBFQ2EK.js";
import {
  require_global
} from "./chunk-DXIOBCSA.js";
import {
  require_preview_api
} from "./chunk-6GFF2EK4.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/addon-backgrounds/dist/preview.mjs
var import_preview_api = __toESM(require_preview_api(), 1);
var import_global = __toESM(require_global(), 1);
var import_client_logger = __toESM(require_client_logger(), 1);
var PARAM_KEY = "backgrounds";
var DEFAULT_BACKGROUNDS = { light: { name: "light", value: "#F8F8F8" }, dark: { name: "dark", value: "#333" } };
var { document, window } = import_global.global;
var isReduceMotionEnabled = () => {
  var _a;
  return !!((_a = window == null ? void 0 : window.matchMedia("(prefers-reduced-motion: reduce)")) == null ? void 0 : _a.matches);
};
var clearStyles = (selector) => {
  (Array.isArray(selector) ? selector : [selector]).forEach(clearStyle);
};
var clearStyle = (selector) => {
  var _a;
  let element = document.getElementById(selector);
  element && ((_a = element.parentElement) == null ? void 0 : _a.removeChild(element));
};
var addGridStyle = (selector, css) => {
  let existingStyle = document.getElementById(selector);
  if (existingStyle) existingStyle.innerHTML !== css && (existingStyle.innerHTML = css);
  else {
    let style = document.createElement("style");
    style.setAttribute("id", selector), style.innerHTML = css, document.head.appendChild(style);
  }
};
var addBackgroundStyle = (selector, css, storyId) => {
  var _a;
  let existingStyle = document.getElementById(selector);
  if (existingStyle) existingStyle.innerHTML !== css && (existingStyle.innerHTML = css);
  else {
    let style = document.createElement("style");
    style.setAttribute("id", selector), style.innerHTML = css;
    let gridStyleSelector = `addon-backgrounds-grid${storyId ? `-docs-${storyId}` : ""}`, existingGridStyle = document.getElementById(gridStyleSelector);
    existingGridStyle ? (_a = existingGridStyle.parentElement) == null ? void 0 : _a.insertBefore(style, existingGridStyle) : document.head.appendChild(style);
  }
};
var defaultGrid = { cellSize: 100, cellAmount: 10, opacity: 0.8 };
var BG_SELECTOR_BASE = "addon-backgrounds";
var GRID_SELECTOR_BASE = "addon-backgrounds-grid";
var transitionStyle = isReduceMotionEnabled() ? "" : "transition: background-color 0.3s;";
var withBackgroundAndGrid = (StoryFn, context) => {
  let { globals, parameters: parameters2, viewMode, id } = context, { options = DEFAULT_BACKGROUNDS, disable, grid = defaultGrid } = parameters2[PARAM_KEY] || {}, data = globals[PARAM_KEY] || {}, backgroundName = data.value, item = backgroundName ? options[backgroundName] : void 0, value = (item == null ? void 0 : item.value) || "transparent", showGrid = data.grid || false, shownBackground = !!item && !disable, backgroundSelector = viewMode === "docs" ? `#anchor--${id} .docs-story` : ".sb-show-main", gridSelector = viewMode === "docs" ? `#anchor--${id} .docs-story` : ".sb-show-main", isLayoutPadded = parameters2.layout === void 0 || parameters2.layout === "padded", defaultOffset = viewMode === "docs" ? 20 : isLayoutPadded ? 16 : 0, { cellAmount, cellSize, opacity, offsetX = defaultOffset, offsetY = defaultOffset } = grid, backgroundSelectorId = viewMode === "docs" ? `${BG_SELECTOR_BASE}-docs-${id}` : `${BG_SELECTOR_BASE}-color`, backgroundTarget = viewMode === "docs" ? id : null;
  (0, import_preview_api.useEffect)(() => {
    let backgroundStyles = `
    ${backgroundSelector} {
      background: ${value} !important;
      ${transitionStyle}
      }`;
    if (!shownBackground) {
      clearStyles(backgroundSelectorId);
      return;
    }
    addBackgroundStyle(backgroundSelectorId, backgroundStyles, backgroundTarget);
  }, [backgroundSelector, backgroundSelectorId, backgroundTarget, shownBackground, value]);
  let gridSelectorId = viewMode === "docs" ? `${GRID_SELECTOR_BASE}-docs-${id}` : `${GRID_SELECTOR_BASE}`;
  return (0, import_preview_api.useEffect)(() => {
    if (!showGrid) {
      clearStyles(gridSelectorId);
      return;
    }
    let gridSize = [`${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize}px ${cellSize}px`, `${cellSize}px ${cellSize}px`].join(", "), gridStyles = `
        ${gridSelector} {
          background-size: ${gridSize} !important;
          background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px) !important;
        }
      `;
    addGridStyle(gridSelectorId, gridStyles);
  }, [cellAmount, cellSize, gridSelector, gridSelectorId, showGrid, offsetX, offsetY, opacity]), StoryFn();
};
var getBackgroundColorByName = (currentSelectedValue, backgrounds = [], defaultName) => {
  if (currentSelectedValue === "transparent") return "transparent";
  if (backgrounds.find((background) => background.value === currentSelectedValue) || currentSelectedValue) return currentSelectedValue;
  let defaultBackground = backgrounds.find((background) => background.name === defaultName);
  if (defaultBackground) return defaultBackground.value;
  if (defaultName) {
    let availableColors = backgrounds.map((background) => background.name).join(", ");
    import_client_logger.logger.warn(dedent`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `);
  }
  return "transparent";
};
var withBackground = (StoryFn, context) => {
  var _a;
  let { globals, parameters: parameters2 } = context, globalsBackgroundColor = (_a = globals[PARAM_KEY]) == null ? void 0 : _a.value, backgroundsConfig = parameters2[PARAM_KEY], selectedBackgroundColor = (0, import_preview_api.useMemo)(() => backgroundsConfig.disable ? "transparent" : getBackgroundColorByName(globalsBackgroundColor, backgroundsConfig.values, backgroundsConfig.default), [backgroundsConfig, globalsBackgroundColor]), isActive = (0, import_preview_api.useMemo)(() => selectedBackgroundColor && selectedBackgroundColor !== "transparent", [selectedBackgroundColor]), selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main", backgroundStyles = (0, import_preview_api.useMemo)(() => `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled() ? "" : "transition: background-color 0.3s;"}
      }
    `, [selectedBackgroundColor, selector]);
  return (0, import_preview_api.useEffect)(() => {
    let selectorId = context.viewMode === "docs" ? `addon-backgrounds-docs-${context.id}` : "addon-backgrounds-color";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addBackgroundStyle(selectorId, backgroundStyles, context.viewMode === "docs" ? context.id : null);
  }, [isActive, backgroundStyles, context]), StoryFn();
};
var withGrid = (StoryFn, context) => {
  var _a;
  let { globals, parameters: parameters2 } = context, gridParameters = parameters2[PARAM_KEY].grid, isActive = ((_a = globals[PARAM_KEY]) == null ? void 0 : _a.grid) === true && gridParameters.disable !== true, { cellAmount, cellSize, opacity } = gridParameters, isInDocs = context.viewMode === "docs", defaultOffset = parameters2.layout === void 0 || parameters2.layout === "padded" ? 16 : 0, offsetX = gridParameters.offsetX ?? (isInDocs ? 20 : defaultOffset), offsetY = gridParameters.offsetY ?? (isInDocs ? 20 : defaultOffset), gridStyles = (0, import_preview_api.useMemo)(() => {
    let selector = context.viewMode === "docs" ? `#anchor--${context.id} .docs-story` : ".sb-show-main", backgroundSize = [`${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize * cellAmount}px ${cellSize * cellAmount}px`, `${cellSize}px ${cellSize}px`, `${cellSize}px ${cellSize}px`].join(", ");
    return `
      ${selector} {
        background-size: ${backgroundSize} !important;
        background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px) !important;
      }
    `;
  }, [cellSize]);
  return (0, import_preview_api.useEffect)(() => {
    let selectorId = context.viewMode === "docs" ? `addon-backgrounds-grid-docs-${context.id}` : "addon-backgrounds-grid";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addGridStyle(selectorId, gridStyles);
  }, [isActive, gridStyles, context]), StoryFn();
};
var decorators = (FEATURES == null ? void 0 : FEATURES.backgroundsStoryGlobals) ? [withBackgroundAndGrid] : [withGrid, withBackground];
var parameters = { [PARAM_KEY]: { grid: { cellSize: 20, opacity: 0.5, cellAmount: 5 }, disable: false, ...!(FEATURES == null ? void 0 : FEATURES.backgroundsStoryGlobals) && { values: Object.values(DEFAULT_BACKGROUNDS) } } };
var modern = { [PARAM_KEY]: { value: void 0, grid: false } };
var initialGlobals = (FEATURES == null ? void 0 : FEATURES.backgroundsStoryGlobals) ? modern : { [PARAM_KEY]: null };

export {
  decorators,
  parameters,
  initialGlobals
};
//# sourceMappingURL=chunk-SGXHGEZ6.js.map
