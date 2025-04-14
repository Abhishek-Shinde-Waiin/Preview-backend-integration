import {
  require_react
} from "./chunk-USEVLOEB.js";
import {
  require_client_logger
} from "./chunk-KQ2JNRIV.js";
import {
  esm_default
} from "./chunk-JLBFQ2EK.js";
import {
  require_preview_api
} from "./chunk-6GFF2EK4.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/addon-themes/dist/index.mjs
var import_preview_api = __toESM(require_preview_api(), 1);
var import_client_logger = __toESM(require_client_logger(), 1);
var import_react = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var PARAM_KEY = "themes";
var ADDON_ID = `storybook/${PARAM_KEY}`;
var GLOBAL_KEY = "theme";
var DEFAULT_THEME_PARAMETERS = {};
var THEMING_EVENTS = { REGISTER_THEMES: `${ADDON_ID}/REGISTER_THEMES` };
var helpers_exports = {};
__export(helpers_exports, { initializeThemeState: () => initializeThemeState, pluckThemeFromContext: () => pluckThemeFromContext, useThemeParameters: () => useThemeParameters });
function pluckThemeFromContext({ globals }) {
  return globals[GLOBAL_KEY] || "";
}
function useThemeParameters(context) {
  return (0, import_client_logger.deprecate)(esm_default`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `), context ? context.parameters[PARAM_KEY] ?? DEFAULT_THEME_PARAMETERS : (0, import_preview_api.useParameter)(PARAM_KEY, DEFAULT_THEME_PARAMETERS);
}
function initializeThemeState(themeNames, defaultTheme) {
  import_preview_api.addons.getChannel().emit(THEMING_EVENTS.REGISTER_THEMES, { defaultTheme, themes: themeNames });
}
var DEFAULT_ELEMENT_SELECTOR = "html";
var classStringToArray = (classString) => classString.split(" ").filter(Boolean);
var withThemeByClassName = ({ themes, defaultTheme, parentSelector = DEFAULT_ELEMENT_SELECTOR }) => (initializeThemeState(Object.keys(themes), defaultTheme), (storyFn, context) => {
  let { themeOverride } = context.parameters[PARAM_KEY] ?? {}, selected = pluckThemeFromContext(context);
  return (0, import_preview_api.useEffect)(() => {
    let selectedThemeName = themeOverride || selected || defaultTheme, parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;
    Object.entries(themes).filter(([themeName]) => themeName !== selectedThemeName).forEach(([themeName, className]) => {
      let classes = classStringToArray(className);
      classes.length > 0 && parentElement.classList.remove(...classes);
    });
    let newThemeClasses = classStringToArray(themes[selectedThemeName]);
    newThemeClasses.length > 0 && parentElement.classList.add(...newThemeClasses);
  }, [themeOverride, selected]), storyFn();
});
var DEFAULT_ELEMENT_SELECTOR2 = "html";
var DEFAULT_DATA_ATTRIBUTE = "data-theme";
var withThemeByDataAttribute = ({ themes, defaultTheme, parentSelector = DEFAULT_ELEMENT_SELECTOR2, attributeName = DEFAULT_DATA_ATTRIBUTE }) => (initializeThemeState(Object.keys(themes), defaultTheme), (storyFn, context) => {
  let { themeOverride } = context.parameters[PARAM_KEY] ?? {}, selected = pluckThemeFromContext(context);
  return (0, import_preview_api.useEffect)(() => {
    let parentElement = document.querySelector(parentSelector), themeKey = themeOverride || selected || defaultTheme;
    parentElement && parentElement.setAttribute(attributeName, themes[themeKey]);
  }, [themeOverride, selected]), storyFn();
});
var pluckThemeFromKeyPairTuple = ([_, themeConfig]) => themeConfig;
var withThemeFromJSXProvider = ({ Provider, GlobalStyles, defaultTheme, themes = {} }) => {
  let themeNames = Object.keys(themes), initialTheme = defaultTheme || themeNames[0];
  return initializeThemeState(themeNames, initialTheme), (storyFn, context) => {
    let { themeOverride } = context.parameters[PARAM_KEY] ?? {}, selected = pluckThemeFromContext(context), theme = (0, import_preview_api.useMemo)(() => {
      let selectedThemeName = themeOverride || selected || initialTheme, pairs = Object.entries(themes);
      return pairs.length === 1 ? pluckThemeFromKeyPairTuple(pairs[0]) : themes[selectedThemeName];
    }, [selected, themeOverride]);
    return Provider ? import_react.default.createElement(Provider, { theme }, GlobalStyles && import_react.default.createElement(GlobalStyles, null), storyFn()) : import_react.default.createElement(import_react.default.Fragment, null, GlobalStyles && import_react.default.createElement(GlobalStyles, null), storyFn());
  };
};
var src_default = {};
export {
  helpers_exports as DecoratorHelpers,
  src_default as default,
  withThemeByClassName,
  withThemeByDataAttribute,
  withThemeFromJSXProvider
};
//# sourceMappingURL=@storybook_addon-themes.js.map
