'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var previewApi = require('storybook/internal/preview-api');
var clientLogger = require('storybook/internal/client-logger');
var dedent = require('ts-dedent');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var dedent__default = /*#__PURE__*/_interopDefault(dedent);
var React__default = /*#__PURE__*/_interopDefault(React);

var __defProp=Object.defineProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0});};var PARAM_KEY="themes",ADDON_ID=`storybook/${PARAM_KEY}`,GLOBAL_KEY="theme";var DEFAULT_THEME_PARAMETERS={},THEMING_EVENTS={REGISTER_THEMES:`${ADDON_ID}/REGISTER_THEMES`};var helpers_exports={};__export(helpers_exports,{initializeThemeState:()=>initializeThemeState,pluckThemeFromContext:()=>pluckThemeFromContext,useThemeParameters:()=>useThemeParameters});function pluckThemeFromContext({globals}){return globals[GLOBAL_KEY]||""}function useThemeParameters(context){return clientLogger.deprecate(dedent__default.default`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),context?context.parameters[PARAM_KEY]??DEFAULT_THEME_PARAMETERS:previewApi.useParameter(PARAM_KEY,DEFAULT_THEME_PARAMETERS)}function initializeThemeState(themeNames,defaultTheme){previewApi.addons.getChannel().emit(THEMING_EVENTS.REGISTER_THEMES,{defaultTheme,themes:themeNames});}var DEFAULT_ELEMENT_SELECTOR="html",classStringToArray=classString=>classString.split(" ").filter(Boolean),withThemeByClassName=({themes,defaultTheme,parentSelector=DEFAULT_ELEMENT_SELECTOR})=>(initializeThemeState(Object.keys(themes),defaultTheme),(storyFn,context)=>{let{themeOverride}=context.parameters[PARAM_KEY]??{},selected=pluckThemeFromContext(context);return previewApi.useEffect(()=>{let selectedThemeName=themeOverride||selected||defaultTheme,parentElement=document.querySelector(parentSelector);if(!parentElement)return;Object.entries(themes).filter(([themeName])=>themeName!==selectedThemeName).forEach(([themeName,className])=>{let classes=classStringToArray(className);classes.length>0&&parentElement.classList.remove(...classes);});let newThemeClasses=classStringToArray(themes[selectedThemeName]);newThemeClasses.length>0&&parentElement.classList.add(...newThemeClasses);},[themeOverride,selected]),storyFn()});var DEFAULT_ELEMENT_SELECTOR2="html",DEFAULT_DATA_ATTRIBUTE="data-theme",withThemeByDataAttribute=({themes,defaultTheme,parentSelector=DEFAULT_ELEMENT_SELECTOR2,attributeName=DEFAULT_DATA_ATTRIBUTE})=>(initializeThemeState(Object.keys(themes),defaultTheme),(storyFn,context)=>{let{themeOverride}=context.parameters[PARAM_KEY]??{},selected=pluckThemeFromContext(context);return previewApi.useEffect(()=>{let parentElement=document.querySelector(parentSelector),themeKey=themeOverride||selected||defaultTheme;parentElement&&parentElement.setAttribute(attributeName,themes[themeKey]);},[themeOverride,selected]),storyFn()});var pluckThemeFromKeyPairTuple=([_,themeConfig])=>themeConfig,withThemeFromJSXProvider=({Provider,GlobalStyles,defaultTheme,themes={}})=>{let themeNames=Object.keys(themes),initialTheme=defaultTheme||themeNames[0];return initializeThemeState(themeNames,initialTheme),(storyFn,context)=>{let{themeOverride}=context.parameters[PARAM_KEY]??{},selected=pluckThemeFromContext(context),theme=previewApi.useMemo(()=>{let selectedThemeName=themeOverride||selected||initialTheme,pairs=Object.entries(themes);return pairs.length===1?pluckThemeFromKeyPairTuple(pairs[0]):themes[selectedThemeName]},[selected,themeOverride]);return Provider?React__default.default.createElement(Provider,{theme},GlobalStyles&&React__default.default.createElement(GlobalStyles,null),storyFn()):React__default.default.createElement(React__default.default.Fragment,null,GlobalStyles&&React__default.default.createElement(GlobalStyles,null),storyFn())}};var src_default={};

exports.DecoratorHelpers = helpers_exports;
exports.default = src_default;
exports.withThemeByClassName = withThemeByClassName;
exports.withThemeByDataAttribute = withThemeByDataAttribute;
exports.withThemeFromJSXProvider = withThemeFromJSXProvider;
