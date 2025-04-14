"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("@emotion/is-prop-valid"),n=require("react"),r=require("shallowequal"),o=require("stylis"),s=require("@emotion/unitless");function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var c=/*#__PURE__*/i(t),u=/*#__PURE__*/i(n),l=/*#__PURE__*/i(r),p=/*#__PURE__*/a(o),d=/*#__PURE__*/i(s),h="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",f="active",y="data-styled-version",m="6.1.15",v="/*!sc*/\n",g="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),w={},_=/invalid hook call/i,b=new Set,E=function(t,r){if("production"!==process.env.NODE_ENV){var o=r?' with the id of "'.concat(r,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];_.test(t)?(a=!1,b.delete(s)):i.apply(void 0,e.__spreadArray([t],n,!1))},n.useRef(),a&&!b.has(s)&&(console.warn(s),b.add(s))}catch(e){_.test(e.message)&&b.delete(s)}finally{console.error=i}}},N=Object.freeze([]),P=Object.freeze({});function C(e,t,n){return void 0===n&&(n=P),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),I=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O=/(^-|-$)/g;function x(e){return e.replace(I,"-").replace(O,"")}var T=/(a)(d)/gi,D=52,R=function(e){return String.fromCharCode(e+(e>25?39:97))};function j(e){var t,n="";for(t=Math.abs(e);t>D;t=t/D|0)n=R(t%D)+n;return(R(t%D)+n).replace(T,"$1-$2")}var k,M=5381,V=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},F=function(e){return V(M,e)};function z(e){return j(F(e)>>>0)}function $(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function B(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var L="function"==typeof Symbol&&Symbol.for,G=L?Symbol.for("react.memo"):60115,q=L?Symbol.for("react.forward_ref"):60112,Y={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U=((k={})[q]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},k[G]=H,k);function J(e){return("type"in(t=e)&&t.type.$$typeof)===G?H:"$$typeof"in e?U[e.$$typeof]:Y;var t}var X=Object.defineProperty,Z=Object.getOwnPropertyNames,K=Object.getOwnPropertySymbols,Q=Object.getOwnPropertyDescriptor,ee=Object.getPrototypeOf,te=Object.prototype;function ne(e,t,n){if("string"!=typeof t){if(te){var r=ee(t);r&&r!==te&&ne(e,r,n)}var o=Z(t);K&&(o=o.concat(K(t)));for(var s=J(e),i=J(t),a=0;a<o.length;++a){var c=o[a];if(!(c in W||n&&n[c]||i&&c in i||s&&c in s)){var u=Q(t,c);try{X(e,c,u)}catch(e){}}}}return e}function re(e){return"function"==typeof e}function oe(e){return"object"==typeof e&&"styledComponentId"in e}function se(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ie(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ae(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ce(e,t,n){if(void 0===n&&(n=!1),!n&&!ae(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ce(e[r],t[r]);else if(ae(t))for(var r in t)e[r]=ce(e[r],t[r]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t})}var le="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function pe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,s=e.length;o<s;o+=1)r.push(e[o]);return r.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function de(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return"production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):"")):new Error(pe.apply(void 0,e.__spreadArray([le[t]],n,!1)).trim())}var he=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw de(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(v);return t},e}(),fe=1<<30,ye=new Map,me=new Map,ve=1,ge=function(e){if(ye.has(e))return ye.get(e);for(;me.has(ve);)ve++;var t=ve++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>fe))throw de(16,"".concat(t));return ye.set(e,t),me.set(t,e),t},Se=function(e,t){ve=t+1,ye.set(e,t),me.set(t,e)},we="style[".concat(h,"][").concat(y,'="').concat(m,'"]'),_e=new RegExp("^".concat(h,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),be=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Ee=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(v),o=[],s=0,i=r.length;s<i;s++){var a=r[s].trim();if(a){var c=a.match(_e);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(Se(l,u),be(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Ne=function(e){for(var t=document.querySelectorAll(we),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(h)!==f&&(Ee(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Pe(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Ce=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(h,"]")));return t[t.length-1]}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(h,f),r.setAttribute(y,m);var i=Pe();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},Ae=function(){function e(e){this.element=Ce(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw de(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ie=function(){function e(e){this.element=Ce(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Oe=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),xe=g,Te={isServer:!g,useCSSOMInjection:!S},De=function(){function t(t,n,r){void 0===t&&(t=P),void 0===n&&(n={});var o=this;this.options=e.__assign(e.__assign({},Te),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&g&&xe&&(xe=!1,Ne(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return me.get(e)}(n);if(void 0===o)return"continue";var s=e.names.get(o),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return"continue";var a="".concat(h,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),r+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(v)},s=0;s<n;s++)o(s);return r}(o)})}return t.registerId=function(e){return ge(e)},t.prototype.rehydrate=function(){!this.server&&g&&Ne(this)},t.prototype.reconstructWithOptions=function(n,r){return void 0===r&&(r=!0),new t(e.__assign(e.__assign({},this.options),n),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Oe(n):t?new Ae(n):new Ie(n)}(this.options),new he(e)));var e},t.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.prototype.registerName=function(e,t){if(ge(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ge(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ge(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Re=/&/g,je=/^\s*\/\/.*$/gm;function ke(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ke(e.children,t)),e})}function Me(e){var t,n,r,o=void 0===e?P:e,s=o.options,i=void 0===s?P:s,a=o.plugins,c=void 0===a?N:a,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push(function(e){e.type===p.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Re,n).replace(r,u))}),i.prefix&&l.push(p.prefixer),l.push(p.stringify);var d=function(e,o,s,a){void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(je,""),u=p.compile(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);i.namespace&&(u=ke(u,i.namespace));var d=[];return p.serialize(u,p.middleware(l.concat(p.rulesheet(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||de(15),V(e,t.name)},M).toString():"",d}var Ve=new De,Fe=Me(),ze=u.default.createContext({shouldForwardProp:void 0,styleSheet:Ve,stylis:Fe}),$e=ze.Consumer,Be=u.default.createContext(void 0);function Le(){return n.useContext(ze)}function Ge(e){var t=n.useState(e.stylisPlugins),r=t[0],o=t[1],s=Le().styleSheet,i=n.useMemo(function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,s]),a=n.useMemo(function(){return Me({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);n.useEffect(function(){l.default(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var c=n.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}},[e.shouldForwardProp,i,a]);return u.default.createElement(ze.Provider,{value:c},u.default.createElement(Be.Provider,{value:a},e.children))}var qe=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Fe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw de(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Fe),this.name+e.hash},e}(),Ye=function(e){return e>="A"&&e<="Z"};function We(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ye(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var He=function(e){return null==e||!1===e||""===e},Ue=function(t){var n,r,o=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!He(i)&&(Array.isArray(i)&&i.isCss||re(i)?o.push("".concat(We(s),":"),i,";"):ae(i)?o.push.apply(o,e.__spreadArray(e.__spreadArray(["".concat(s," {")],Ue(i),!1),["}"],!1)):o.push("".concat(We(s),": ").concat((n=s,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in d.default||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Je(e,t,n,r){if(He(e))return[];if(oe(e))return[".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return"production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||o instanceof qe||ae(o)||null===o||console.error("".concat($(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Je(o,t,n,r)}var s;return e instanceof qe?n?(e.inject(n,r),[e.getName(r)]):[e]:ae(e)?Ue(e):Array.isArray(e)?Array.prototype.concat.apply(N,e.map(function(e){return Je(e,t,n,r)})):[e.toString()]}function Xe(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!oe(n))return!1}return!0}var Ze=F(m),Ke=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&Xe(e),this.componentId=t,this.baseHash=V(Ze,t),this.baseStyle=n,De.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=se(r,this.staticRulesId);else{var o=ie(Je(this.rules,e,t,n)),s=j(V(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}r=se(r,s),this.staticRulesId=s}else{for(var a=V(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l,"production"!==process.env.NODE_ENV&&(a=V(a,l));else if(l){var p=ie(Je(l,e,t,n));a=V(a,p+u),c+=p}}if(c){var d=j(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=se(r,d)}}return r},e}(),Qe=u.default.createContext(void 0),et=Qe.Consumer,tt={},nt=new Set;function rt(t,r,o){var s=oe(t),i=t,a=!B(t),l=r.attrs,p=void 0===l?N:l,d=r.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":x(e);tt[n]=(tt[n]||0)+1;var r="".concat(n,"-").concat(z(m+n+tt[n]));return t?"".concat(t,"-").concat(r):r}(r.displayName,r.parentComponentId):d,f=r.displayName,y=void 0===f?function(e){return B(e)?"styled.".concat(e):"Styled(".concat($(e),")")}(t):f,v=r.displayName&&r.componentId?"".concat(x(r.displayName),"-").concat(r.componentId):r.componentId||h,g=s&&i.attrs?i.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(s&&i.shouldForwardProp){var w=i.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;S=function(e,t){return w(e,t)&&_(e,t)}}else S=w}var b=new Ke(o,v,s?i.componentStyle:void 0);function I(t,r){return function(t,r,o){var s=t.attrs,i=t.componentStyle,a=t.defaultProps,l=t.foldedComponentIds,p=t.styledComponentId,d=t.target,h=u.default.useContext(Qe),f=Le(),y=t.shouldForwardProp||f.shouldForwardProp;"production"!==process.env.NODE_ENV&&n.useDebugValue(p);var m=C(r,h,a)||P,v=function(t,n,r){for(var o,s=e.__assign(e.__assign({},n),{className:void 0,theme:r}),i=0;i<t.length;i+=1){var a=re(o=t[i])?o(s):o;for(var c in a)s[c]="className"===c?se(s[c],a[c]):"style"===c?e.__assign(e.__assign({},s[c]),a[c]):a[c]}return n.className&&(s.className=se(s.className,n.className)),s}(s,r,m),g=v.as||d,S={};for(var w in v)void 0===v[w]||"$"===w[0]||"as"===w||"theme"===w&&v.theme===m||("forwardedAs"===w?S.as=v.forwardedAs:y&&!y(w,g)||(S[w]=v[w],y||"development"!==process.env.NODE_ENV||c.default(w)||nt.has(w)||!A.has(g)||(nt.add(w),console.warn('styled-components: it looks like an unknown prop "'.concat(w,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var _=function(e,t){var r=Le(),o=e.generateAndInjectStyles(t,r.styleSheet,r.stylis);return"production"!==process.env.NODE_ENV&&n.useDebugValue(o),o}(i,v);"production"!==process.env.NODE_ENV&&t.warnTooManyClasses&&t.warnTooManyClasses(_);var b=se(l,p);return _&&(b+=" "+_),v.className&&(b+=" "+v.className),S[B(g)&&!A.has(g)?"class":"className"]=b,o&&(S.ref=o),n.createElement(g,S)}(O,t,r)}I.displayName=y;var O=u.default.forwardRef(I);return O.attrs=g,O.componentStyle=b,O.displayName=y,O.shouldForwardProp=S,O.foldedComponentIds=s?se(i.foldedComponentIds,i.styledComponentId):"",O.styledComponentId=v,O.target=s?i.target:t,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)ce(e,o[r],!0);return e}({},i.defaultProps,e):e}}),"production"!==process.env.NODE_ENV&&(E(y,v),O.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(y,v)),ue(O,function(){return".".concat(O.styledComponentId)}),a&&ne(O,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function ot(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var st=function(e){return Object.assign(e,{isCss:!0})};function it(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(re(t)||ae(t))return st(Je(ot(N,e.__spreadArray([t],n,!0))));var o=t;return 0===n.length&&1===o.length&&"string"==typeof o[0]?Je(o):st(Je(ot(o,n)))}function at(t,n,r){if(void 0===r&&(r=P),!n)throw de(1,n);var o=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return t(n,r,it.apply(void 0,e.__spreadArray([o],s,!1)))};return o.attrs=function(o){return at(t,n,e.__assign(e.__assign({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return at(t,n,e.__assign(e.__assign({},r),o))},o}var ct=function(e){return at(rt,e)},ut=ct;A.forEach(function(e){ut[e]=ct(e)});var lt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Xe(e),De.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(ie(Je(this.rules,t,n,r)),""),s=this.componentId+e;n.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&De.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}(),pt=function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Pe(),r=ie([n&&'nonce="'.concat(n,'"'),"".concat(h,'="true"'),"".concat(y,'="').concat(m,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw de(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw de(2);var r=t.instance.toString();if(!r)return[];var o=((n={})[h]="",n[y]=m,n.dangerouslySetInnerHTML={__html:r},n),s=Pe();return s&&(o.nonce=s),[u.default.createElement("style",e.__assign({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new De({isServer:!0}),this.sealed=!1}return t.prototype.collectStyles=function(e){if(this.sealed)throw de(2);return u.default.createElement(Ge,{sheet:this.instance},e)},t.prototype.interleaveWithNodeStream=function(e){throw de(3)},t}(),dt={StyleSheet:De,mainSheet:Ve};"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var ht="__sc-".concat(h,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[ht]||(window[ht]=0),1===window[ht]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[ht]+=1),exports.ServerStyleSheet=pt,exports.StyleSheetConsumer=$e,exports.StyleSheetContext=ze,exports.StyleSheetManager=Ge,exports.ThemeConsumer=et,exports.ThemeContext=Qe,exports.ThemeProvider=function(t){var r=u.default.useContext(Qe),o=n.useMemo(function(){return function(t,n){if(!t)throw de(14);if(re(t)){var r=t(n);if("production"!==process.env.NODE_ENV&&(null===r||Array.isArray(r)||"object"!=typeof r))throw de(7);return r}if(Array.isArray(t)||"object"!=typeof t)throw de(8);return n?e.__assign(e.__assign({},n),t):t}(t.theme,r)},[t.theme,r]);return t.children?u.default.createElement(Qe.Provider,{value:o},t.children):null},exports.__PRIVATE__=dt,exports.createGlobalStyle=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=it.apply(void 0,e.__spreadArray([t],n,!1)),s="sc-global-".concat(z(JSON.stringify(o))),i=new lt(o,s);"production"!==process.env.NODE_ENV&&E(s);var a=function(e){var t=Le(),n=u.default.useContext(Qe),r=u.default.useRef(t.styleSheet.allocateGSInstance(s)).current;return"production"!==process.env.NODE_ENV&&u.default.Children.count(e.children)&&console.warn("The global style component ".concat(s," was given child JSX. createGlobalStyle does not render children.")),"production"!==process.env.NODE_ENV&&o.some(function(e){return"string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis),u.default.useLayoutEffect(function(){if(!t.styleSheet.server)return c(r,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function c(t,n,r,o,s){if(i.isStatic)i.renderStyles(t,w,r,s);else{var c=e.__assign(e.__assign({},n),{theme:C(n,o,a.defaultProps)});i.renderStyles(t,c,r,s)}}return u.default.memo(a)},exports.css=it,exports.default=ut,exports.isStyledComponent=oe,exports.keyframes=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var o=ie(it.apply(void 0,e.__spreadArray([t],n,!1))),s=z(o);return new qe(s,o)},exports.styled=ut,exports.useTheme=function(){var e=n.useContext(Qe);if(!e)throw de(18);return e},exports.version=m,exports.withTheme=function(t){var n=u.default.forwardRef(function(n,r){var o=C(n,u.default.useContext(Qe),t.defaultProps);return"production"!==process.env.NODE_ENV&&void 0===o&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat($(t),'"')),u.default.createElement(t,e.__assign({},n,{theme:o,ref:r}))});return n.displayName="WithTheme(".concat($(t),")"),ne(n,t)};
//# sourceMappingURL=styled-components.browser.cjs.js.map
