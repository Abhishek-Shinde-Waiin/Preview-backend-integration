import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  DocumentIcon,
  EyeCloseIcon,
  EyeIcon,
  LinkIcon,
  SubtractIcon,
  UndoIcon,
  VideoIcon,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  __commonJS as __commonJS2,
  __require,
  __toESM as __toESM2,
  cloneDeep2,
  getControlId,
  getControlSetterButtonId,
  pickBy,
  uniq
} from "./chunk-AJDNSRZH.js";
import {
  gt,
  yn
} from "./chunk-KJJVWJUC.js";
import {
  Cu,
  Dg,
  E_,
  Eu,
  GI,
  Io,
  Jl,
  Ml,
  RI,
  UB,
  b_,
  bee,
  bu,
  j1,
  kt,
  lu,
  mp,
  q,
  qu,
  te,
  wI,
  z1
} from "./chunk-ORIDUSBH.js";
import {
  Mt,
  Ne,
  Tr,
  gc,
  jt,
  pc,
  zr
} from "./chunk-MOEP5LMP.js";
import {
  P
} from "./chunk-RNIMMRSM.js";
import {
  require_react
} from "./chunk-USEVLOEB.js";
import {
  require_client_logger
} from "./chunk-KQ2JNRIV.js";
import {
  dedent
} from "./chunk-JLBFQ2EK.js";
import {
  require_core_events
} from "./chunk-3T3HEUF2.js";
import {
  require_preview_api
} from "./chunk-6GFF2EK4.js";
import {
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/.cache/sb-vite-plugin-externals/storybook/internal/channels.js
var require_channels = __commonJS({
  "node_modules/.cache/sb-vite-plugin-externals/storybook/internal/channels.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_CHANNELS__;
  }
});

// node_modules/@storybook/blocks/dist/index.mjs
var React15 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var import_client_logger = __toESM(require_client_logger(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);
var import_core_events = __toESM(require_core_events(), 1);
var import_channels = __toESM(require_channels(), 1);
var require_memoizerific = __commonJS2({ "../../node_modules/memoizerific/memoizerific.js"(exports, module) {
  (function(f3) {
    if (typeof exports == "object" && typeof module < "u") module.exports = f3();
    else if (typeof define == "function" && define.amd) define([], f3);
    else {
      var g2;
      typeof window < "u" ? g2 = window : typeof global < "u" ? g2 = global : typeof self < "u" ? g2 = self : g2 = this, g2.memoizerific = f3();
    }
  })(function() {
    return function e2(t2, n2, r2) {
      function s2(o3, u2) {
        if (!n2[o3]) {
          if (!t2[o3]) {
            var a2 = typeof __require == "function" && __require;
            if (!u2 && a2) return a2(o3, true);
            if (i2) return i2(o3, true);
            var f3 = new Error("Cannot find module '" + o3 + "'");
            throw f3.code = "MODULE_NOT_FOUND", f3;
          }
          var l2 = n2[o3] = { exports: {} };
          t2[o3][0].call(l2.exports, function(e3) {
            var n3 = t2[o3][1][e3];
            return s2(n3 || e3);
          }, l2, l2.exports, e2, t2, n2, r2);
        }
        return n2[o3].exports;
      }
      for (var i2 = typeof __require == "function" && __require, o2 = 0; o2 < r2.length; o2++) s2(r2[o2]);
      return s2;
    }({ 1: [function(_dereq_, module3, exports3) {
      module3.exports = function(forceSimilar) {
        if (typeof Map != "function" || forceSimilar) {
          var Similar = _dereq_("./similar");
          return new Similar();
        } else return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(_dereq_, module3, exports3) {
      function Similar() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      Similar.prototype.get = function(key2) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key2)) return this.lastItem.val;
        if (index = this.indexOf(key2), index >= 0) return this.lastItem = this.list[index], this.list[index].val;
      }, Similar.prototype.set = function(key2, val) {
        var index;
        return this.lastItem && this.isEqual(this.lastItem.key, key2) ? (this.lastItem.val = val, this) : (index = this.indexOf(key2), index >= 0 ? (this.lastItem = this.list[index], this.list[index].val = val, this) : (this.lastItem = { key: key2, val }, this.list.push(this.lastItem), this.size++, this));
      }, Similar.prototype.delete = function(key2) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key2) && (this.lastItem = void 0), index = this.indexOf(key2), index >= 0) return this.size--, this.list.splice(index, 1)[0];
      }, Similar.prototype.has = function(key2) {
        var index;
        return this.lastItem && this.isEqual(this.lastItem.key, key2) ? true : (index = this.indexOf(key2), index >= 0 ? (this.lastItem = this.list[index], true) : false);
      }, Similar.prototype.forEach = function(callback, thisArg) {
        var i2;
        for (i2 = 0; i2 < this.size; i2++) callback.call(thisArg || this, this.list[i2].val, this.list[i2].key, this);
      }, Similar.prototype.indexOf = function(key2) {
        var i2;
        for (i2 = 0; i2 < this.size; i2++) if (this.isEqual(this.list[i2].key, key2)) return i2;
        return -1;
      }, Similar.prototype.isEqual = function(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }, module3.exports = Similar;
    }, {}], 3: [function(_dereq_, module3, exports3) {
      var MapOrSimilar = _dereq_("map-or-similar");
      module3.exports = function(limit) {
        var cache = new MapOrSimilar(false), lru = [];
        return function(fn) {
          var memoizerific = function() {
            var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i2;
            if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (i2 = 0; i2 < argsLengthMinusOne; i2++) {
              if (lruPath[i2] = { cacheItem: currentCache, arg: arguments[i2] }, currentCache.has(arguments[i2])) {
                currentCache = currentCache.get(arguments[i2]);
                continue;
              }
              isMemoized = false, newMap = new MapOrSimilar(false), currentCache.set(arguments[i2], newMap), currentCache = newMap;
            }
            return isMemoized && (currentCache.has(arguments[argsLengthMinusOne]) ? fnResult = currentCache.get(arguments[argsLengthMinusOne]) : isMemoized = false), isMemoized || (fnResult = fn.apply(null, arguments), currentCache.set(arguments[argsLengthMinusOne], fnResult)), limit > 0 && (lruPath[argsLengthMinusOne] = { cacheItem: currentCache, arg: arguments[argsLengthMinusOne] }, isMemoized ? moveToMostRecentLru(lru, lruPath) : lru.push(lruPath), lru.length > limit && removeCachedResult(lru.shift())), memoizerific.wasMemoized = isMemoized, memoizerific.numArgs = argsLengthMinusOne + 1, fnResult;
          };
          return memoizerific.limit = limit, memoizerific.wasMemoized = false, memoizerific.cache = cache, memoizerific.lru = lru, memoizerific;
        };
      };
      function moveToMostRecentLru(lru, lruPath) {
        var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i2, ii;
        for (i2 = 0; i2 < lruLen; i2++) {
          for (isMatch = true, ii = 0; ii < lruPathLen; ii++) if (!isEqual(lru[i2][ii].arg, lruPath[ii].arg)) {
            isMatch = false;
            break;
          }
          if (isMatch) break;
        }
        lru.push(lru.splice(i2, 1)[0]);
      }
      function removeCachedResult(removedLru) {
        var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i2;
        for (currentLru.cacheItem.delete(currentLru.arg), i2 = removedLruLen - 2; i2 >= 0 && (currentLru = removedLru[i2], tmp = currentLru.cacheItem.get(currentLru.arg), !tmp || !tmp.size); i2--) currentLru.cacheItem.delete(currentLru.arg);
      }
      function isEqual(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
} });
var require_default_options = __commonJS2({ "../../node_modules/tocbot/src/js/default-options.js"(exports, module) {
  module.exports = { tocSelector: ".js-toc", contentSelector: ".js-toc-content", headingSelector: "h1, h2, h3", ignoreSelector: ".js-toc-ignore", hasInnerContainers: false, linkClass: "toc-link", extraLinkClasses: "", activeLinkClass: "is-active-link", listClass: "toc-list", extraListClasses: "", isCollapsedClass: "is-collapsed", collapsibleClass: "is-collapsible", listItemClass: "toc-list-item", activeListItemClass: "is-active-li", collapseDepth: 0, scrollSmooth: true, scrollSmoothDuration: 420, scrollSmoothOffset: 0, scrollEndCallback: function(e2) {
  }, headingsOffset: 1, throttleTimeout: 50, positionFixedSelector: null, positionFixedClass: "is-position-fixed", fixedSidebarOffset: "auto", includeHtml: false, includeTitleTags: false, onClick: function(e2) {
  }, orderedList: true, scrollContainer: null, skipRendering: false, headingLabelCallback: false, ignoreHiddenElements: false, headingObjectCallback: null, basePath: "", disableTocScrollSync: false, tocScrollOffset: 0 };
} });
var require_build_html = __commonJS2({ "../../node_modules/tocbot/src/js/build-html.js"(exports, module) {
  module.exports = function(options2) {
    var forEach = [].forEach, some = [].some, body = document.body, tocElement, currentlyHighlighting = true, SPACE_CHAR = " ";
    function createEl(d2, container) {
      var link = container.appendChild(createLink(d2));
      if (d2.children.length) {
        var list = createList(d2.isCollapsed);
        d2.children.forEach(function(child) {
          createEl(child, list);
        }), link.appendChild(list);
      }
    }
    function render(parent, data) {
      var collapsed = false, container = createList(collapsed);
      if (data.forEach(function(d2) {
        createEl(d2, container);
      }), tocElement = parent || tocElement, tocElement !== null) return tocElement.firstChild && tocElement.removeChild(tocElement.firstChild), data.length === 0 ? tocElement : tocElement.appendChild(container);
    }
    function createLink(data) {
      var item = document.createElement("li"), a2 = document.createElement("a");
      return options2.listItemClass && item.setAttribute("class", options2.listItemClass), options2.onClick && (a2.onclick = options2.onClick), options2.includeTitleTags && a2.setAttribute("title", data.textContent), options2.includeHtml && data.childNodes.length ? forEach.call(data.childNodes, function(node) {
        a2.appendChild(node.cloneNode(true));
      }) : a2.textContent = data.textContent, a2.setAttribute("href", options2.basePath + "#" + data.id), a2.setAttribute("class", options2.linkClass + SPACE_CHAR + "node-name--" + data.nodeName + SPACE_CHAR + options2.extraLinkClasses), item.appendChild(a2), item;
    }
    function createList(isCollapsed) {
      var listElement = options2.orderedList ? "ol" : "ul", list = document.createElement(listElement), classes = options2.listClass + SPACE_CHAR + options2.extraListClasses;
      return isCollapsed && (classes = classes + SPACE_CHAR + options2.collapsibleClass, classes = classes + SPACE_CHAR + options2.isCollapsedClass), list.setAttribute("class", classes), list;
    }
    function updateFixedSidebarClass() {
      if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
        var top;
        top = document.querySelector(options2.scrollContainer).scrollTop;
      } else top = document.documentElement.scrollTop || body.scrollTop;
      var posFixedEl = document.querySelector(options2.positionFixedSelector);
      options2.fixedSidebarOffset === "auto" && (options2.fixedSidebarOffset = tocElement.offsetTop), top > options2.fixedSidebarOffset ? posFixedEl.className.indexOf(options2.positionFixedClass) === -1 && (posFixedEl.className += SPACE_CHAR + options2.positionFixedClass) : posFixedEl.className = posFixedEl.className.replace(SPACE_CHAR + options2.positionFixedClass, "");
    }
    function getHeadingTopPos(obj) {
      var position = 0;
      return obj !== null && (position = obj.offsetTop, options2.hasInnerContainers && (position += getHeadingTopPos(obj.offsetParent))), position;
    }
    function updateClassname(obj, className) {
      return obj && obj.className !== className && (obj.className = className), obj;
    }
    function updateToc(headingsArray) {
      if (options2.scrollContainer && document.querySelector(options2.scrollContainer)) {
        var top;
        top = document.querySelector(options2.scrollContainer).scrollTop;
      } else top = document.documentElement.scrollTop || body.scrollTop;
      options2.positionFixedSelector && updateFixedSidebarClass();
      var headings = headingsArray, topHeader;
      if (currentlyHighlighting && tocElement !== null && headings.length > 0) {
        some.call(headings, function(heading, i2) {
          if (getHeadingTopPos(heading) > top + options2.headingsOffset + 10) {
            var index = i2 === 0 ? i2 : i2 - 1;
            return topHeader = headings[index], true;
          } else if (i2 === headings.length - 1) return topHeader = headings[headings.length - 1], true;
        });
        var oldActiveTocLink = tocElement.querySelector("." + options2.activeLinkClass), activeTocLink = tocElement.querySelector("." + options2.linkClass + ".node-name--" + topHeader.nodeName + '[href="' + options2.basePath + "#" + topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (oldActiveTocLink === activeTocLink) return;
        var tocLinks = tocElement.querySelectorAll("." + options2.linkClass);
        forEach.call(tocLinks, function(tocLink) {
          updateClassname(tocLink, tocLink.className.replace(SPACE_CHAR + options2.activeLinkClass, ""));
        });
        var tocLis = tocElement.querySelectorAll("." + options2.listItemClass);
        forEach.call(tocLis, function(tocLi) {
          updateClassname(tocLi, tocLi.className.replace(SPACE_CHAR + options2.activeListItemClass, ""));
        }), activeTocLink && activeTocLink.className.indexOf(options2.activeLinkClass) === -1 && (activeTocLink.className += SPACE_CHAR + options2.activeLinkClass);
        var li = activeTocLink && activeTocLink.parentNode;
        li && li.className.indexOf(options2.activeListItemClass) === -1 && (li.className += SPACE_CHAR + options2.activeListItemClass);
        var tocLists = tocElement.querySelectorAll("." + options2.listClass + "." + options2.collapsibleClass);
        forEach.call(tocLists, function(list) {
          list.className.indexOf(options2.isCollapsedClass) === -1 && (list.className += SPACE_CHAR + options2.isCollapsedClass);
        }), activeTocLink && activeTocLink.nextSibling && activeTocLink.nextSibling.className.indexOf(options2.isCollapsedClass) !== -1 && updateClassname(activeTocLink.nextSibling, activeTocLink.nextSibling.className.replace(SPACE_CHAR + options2.isCollapsedClass, "")), removeCollapsedFromParents(activeTocLink && activeTocLink.parentNode.parentNode);
      }
    }
    function removeCollapsedFromParents(element) {
      return element && element.className.indexOf(options2.collapsibleClass) !== -1 && element.className.indexOf(options2.isCollapsedClass) !== -1 ? (updateClassname(element, element.className.replace(SPACE_CHAR + options2.isCollapsedClass, "")), removeCollapsedFromParents(element.parentNode.parentNode)) : element;
    }
    function disableTocAnimation(event) {
      var target = event.target || event.srcElement;
      typeof target.className != "string" || target.className.indexOf(options2.linkClass) === -1 || (currentlyHighlighting = false);
    }
    function enableTocAnimation() {
      currentlyHighlighting = true;
    }
    return { enableTocAnimation, disableTocAnimation, render, updateToc };
  };
} });
var require_parse_content = __commonJS2({ "../../node_modules/tocbot/src/js/parse-content.js"(exports, module) {
  module.exports = function(options2) {
    var reduce = [].reduce;
    function getLastItem(array2) {
      return array2[array2.length - 1];
    }
    function getHeadingLevel(heading) {
      return +heading.nodeName.toUpperCase().replace("H", "");
    }
    function isHTMLElement(maybeElement) {
      try {
        return maybeElement instanceof window.HTMLElement || maybeElement instanceof window.parent.HTMLElement;
      } catch {
        return maybeElement instanceof window.HTMLElement;
      }
    }
    function getHeadingObject(heading) {
      if (!isHTMLElement(heading)) return heading;
      if (options2.ignoreHiddenElements && (!heading.offsetHeight || !heading.offsetParent)) return null;
      let headingLabel = heading.getAttribute("data-heading-label") || (options2.headingLabelCallback ? String(options2.headingLabelCallback(heading.innerText)) : (heading.innerText || heading.textContent).trim());
      var obj = { id: heading.id, children: [], nodeName: heading.nodeName, headingLevel: getHeadingLevel(heading), textContent: headingLabel };
      return options2.includeHtml && (obj.childNodes = heading.childNodes), options2.headingObjectCallback ? options2.headingObjectCallback(obj, heading) : obj;
    }
    function addNode(node, nest) {
      for (var obj = getHeadingObject(node), level = obj.headingLevel, array2 = nest, lastItem = getLastItem(array2), lastItemLevel = lastItem ? lastItem.headingLevel : 0, counter = level - lastItemLevel; counter > 0 && (lastItem = getLastItem(array2), !(lastItem && level === lastItem.headingLevel)); ) lastItem && lastItem.children !== void 0 && (array2 = lastItem.children), counter--;
      return level >= options2.collapseDepth && (obj.isCollapsed = true), array2.push(obj), array2;
    }
    function selectHeadings(contentElement, headingSelector) {
      var selectors = headingSelector;
      options2.ignoreSelector && (selectors = headingSelector.split(",").map(function(selector) {
        return selector.trim() + ":not(" + options2.ignoreSelector + ")";
      }));
      try {
        return contentElement.querySelectorAll(selectors);
      } catch {
        return console.warn("Headers not found with selector: " + selectors), null;
      }
    }
    function nestHeadingsArray(headingsArray) {
      return reduce.call(headingsArray, function(prev, curr) {
        var currentHeading = getHeadingObject(curr);
        return currentHeading && addNode(currentHeading, prev.nest), prev;
      }, { nest: [] });
    }
    return { nestHeadingsArray, selectHeadings };
  };
} });
var require_update_toc_scroll = __commonJS2({ "../../node_modules/tocbot/src/js/update-toc-scroll.js"(exports, module) {
  module.exports = function(options2) {
    var toc = options2.tocElement || document.querySelector(options2.tocSelector);
    if (toc && toc.scrollHeight > toc.clientHeight) {
      var activeItem = toc.querySelector("." + options2.activeListItemClass);
      activeItem && (toc.scrollTop = activeItem.offsetTop - options2.tocScrollOffset);
    }
  };
} });
var require_scroll_smooth = __commonJS2({ "../../node_modules/tocbot/src/js/scroll-smooth/index.js"(exports) {
  exports.initSmoothScrolling = initSmoothScrolling;
  function initSmoothScrolling(options2) {
    var duration = options2.duration, offset = options2.offset, pageUrl = location.hash ? stripHash(location.href) : location.href;
    delegatedLinkHijacking();
    function delegatedLinkHijacking() {
      document.body.addEventListener("click", onClick, false);
      function onClick(e2) {
        !isInPageLink(e2.target) || e2.target.className.indexOf("no-smooth-scroll") > -1 || e2.target.href.charAt(e2.target.href.length - 2) === "#" && e2.target.href.charAt(e2.target.href.length - 1) === "!" || e2.target.className.indexOf(options2.linkClass) === -1 || jump(e2.target.hash, { duration, offset, callback: function() {
          setFocus(e2.target.hash);
        } });
      }
    }
    function isInPageLink(n2) {
      return n2.tagName.toLowerCase() === "a" && (n2.hash.length > 0 || n2.href.charAt(n2.href.length - 1) === "#") && (stripHash(n2.href) === pageUrl || stripHash(n2.href) + "#" === pageUrl);
    }
    function stripHash(url) {
      return url.slice(0, url.lastIndexOf("#"));
    }
    function setFocus(hash) {
      var element = document.getElementById(hash.substring(1));
      element && (/^(?:a|select|input|button|textarea)$/i.test(element.tagName) || (element.tabIndex = -1), element.focus());
    }
  }
  function jump(target, options2) {
    var start = window.pageYOffset, opt = { duration: options2.duration, offset: options2.offset || 0, callback: options2.callback, easing: options2.easing || easeInOutQuad }, tgt = document.querySelector('[id="' + decodeURI(target).split("#").join("") + '"]') || document.querySelector('[id="' + target.split("#").join("") + '"]'), distance = typeof target == "string" ? opt.offset + (target ? tgt && tgt.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : target, duration = typeof opt.duration == "function" ? opt.duration(distance) : opt.duration, timeStart, timeElapsed;
    requestAnimationFrame(function(time) {
      timeStart = time, loop(time);
    });
    function loop(time) {
      timeElapsed = time - timeStart, window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration)), timeElapsed < duration ? requestAnimationFrame(loop) : end();
    }
    function end() {
      window.scrollTo(0, start + distance), typeof opt.callback == "function" && opt.callback();
    }
    function easeInOutQuad(t2, b2, c2, d2) {
      return t2 /= d2 / 2, t2 < 1 ? c2 / 2 * t2 * t2 + b2 : (t2--, -c2 / 2 * (t2 * (t2 - 2) - 1) + b2);
    }
  }
} });
var require_js = __commonJS2({ "../../node_modules/tocbot/src/js/index.js"(exports, module) {
  (function(root3, factory) {
    typeof define == "function" && define.amd ? define([], factory(root3)) : typeof exports == "object" ? module.exports = factory(root3) : root3.tocbot = factory(root3);
  })(typeof global < "u" ? global : window || global, function(root3) {
    var defaultOptions2 = require_default_options(), options2 = {}, tocbot2 = {}, BuildHtml = require_build_html(), ParseContent = require_parse_content(), updateTocScroll = require_update_toc_scroll(), buildHtml, parseContent, supports = !!root3 && !!root3.document && !!root3.document.querySelector && !!root3.addEventListener;
    if (typeof window > "u" && !supports) return;
    var headingsArray, hasOwnProperty5 = Object.prototype.hasOwnProperty;
    function extend() {
      for (var target = {}, i2 = 0; i2 < arguments.length; i2++) {
        var source2 = arguments[i2];
        for (var key2 in source2) hasOwnProperty5.call(source2, key2) && (target[key2] = source2[key2]);
      }
      return target;
    }
    function throttle(fn, threshold, scope) {
      threshold || (threshold = 250);
      var last, deferTimer;
      return function() {
        var context = scope || this, now = +/* @__PURE__ */ new Date(), args2 = arguments;
        last && now < last + threshold ? (clearTimeout(deferTimer), deferTimer = setTimeout(function() {
          last = now, fn.apply(context, args2);
        }, threshold)) : (last = now, fn.apply(context, args2));
      };
    }
    function getContentElement(options3) {
      try {
        return options3.contentElement || document.querySelector(options3.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + options3.contentSelector), null;
      }
    }
    function getTocElement(options3) {
      try {
        return options3.tocElement || document.querySelector(options3.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + options3.tocSelector), null;
      }
    }
    return tocbot2.destroy = function() {
      var tocElement = getTocElement(options2);
      tocElement !== null && (options2.skipRendering || tocElement && (tocElement.innerHTML = ""), options2.scrollContainer && document.querySelector(options2.scrollContainer) ? (document.querySelector(options2.scrollContainer).removeEventListener("scroll", this._scrollListener, false), document.querySelector(options2.scrollContainer).removeEventListener("resize", this._scrollListener, false), buildHtml && document.querySelector(options2.scrollContainer).removeEventListener("click", this._clickListener, false)) : (document.removeEventListener("scroll", this._scrollListener, false), document.removeEventListener("resize", this._scrollListener, false), buildHtml && document.removeEventListener("click", this._clickListener, false)));
    }, tocbot2.init = function(customOptions) {
      if (supports) {
        options2 = extend(defaultOptions2, customOptions || {}), this.options = options2, this.state = {}, options2.scrollSmooth && (options2.duration = options2.scrollSmoothDuration, options2.offset = options2.scrollSmoothOffset, tocbot2.scrollSmooth = require_scroll_smooth().initSmoothScrolling(options2)), buildHtml = BuildHtml(options2), parseContent = ParseContent(options2), this._buildHtml = buildHtml, this._parseContent = parseContent, this._headingsArray = headingsArray, tocbot2.destroy();
        var contentElement = getContentElement(options2);
        if (contentElement !== null) {
          var tocElement = getTocElement(options2);
          if (tocElement !== null && (headingsArray = parseContent.selectHeadings(contentElement, options2.headingSelector), headingsArray !== null)) {
            var nestedHeadingsObj = parseContent.nestHeadingsArray(headingsArray), nestedHeadings = nestedHeadingsObj.nest;
            if (!options2.skipRendering) buildHtml.render(tocElement, nestedHeadings);
            else return this;
            this._scrollListener = throttle(function(e2) {
              buildHtml.updateToc(headingsArray), !options2.disableTocScrollSync && updateTocScroll(options2);
              var isTop = e2 && e2.target && e2.target.scrollingElement && e2.target.scrollingElement.scrollTop === 0;
              (e2 && (e2.eventPhase === 0 || e2.currentTarget === null) || isTop) && (buildHtml.updateToc(headingsArray), options2.scrollEndCallback && options2.scrollEndCallback(e2));
            }, options2.throttleTimeout), this._scrollListener(), options2.scrollContainer && document.querySelector(options2.scrollContainer) ? (document.querySelector(options2.scrollContainer).addEventListener("scroll", this._scrollListener, false), document.querySelector(options2.scrollContainer).addEventListener("resize", this._scrollListener, false)) : (document.addEventListener("scroll", this._scrollListener, false), document.addEventListener("resize", this._scrollListener, false));
            var timeout = null;
            return this._clickListener = throttle(function(event) {
              options2.scrollSmooth && buildHtml.disableTocAnimation(event), buildHtml.updateToc(headingsArray), timeout && clearTimeout(timeout), timeout = setTimeout(function() {
                buildHtml.enableTocAnimation();
              }, options2.scrollSmoothDuration);
            }, options2.throttleTimeout), options2.scrollContainer && document.querySelector(options2.scrollContainer) ? document.querySelector(options2.scrollContainer).addEventListener("click", this._clickListener, false) : document.addEventListener("click", this._clickListener, false), this;
          }
        }
      }
    }, tocbot2.refresh = function(customOptions) {
      tocbot2.destroy(), tocbot2.init(customOptions || this.options);
    }, root3.tocbot = tocbot2, tocbot2;
  });
} });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function _assertThisInitialized(e2) {
  if (e2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inheritsLoose(t2, o2) {
  t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
}
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
function _isNativeFunction(t2) {
  try {
    return Function.toString.call(t2).indexOf("[native code]") !== -1;
  } catch {
    return typeof t2 == "function";
  }
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t2;
  })();
}
function _construct(t2, e2, r2) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e2);
  var p2 = new (t2.bind.apply(t2, o2))();
  return r2 && _setPrototypeOf(p2, r2.prototype), p2;
}
function _wrapNativeSuper(t2) {
  var r2 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(t3) {
    if (t3 === null || !_isNativeFunction(t3)) return t3;
    if (typeof t3 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r2 !== void 0) {
      if (r2.has(t3)) return r2.get(t3);
      r2.set(t3, Wrapper12);
    }
    function Wrapper12() {
      return _construct(t3, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper12.prototype = Object.create(t3.prototype, { constructor: { value: Wrapper12, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper12, t3);
  }, _wrapNativeSuper(t2);
}
var ERRORS = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function format() {
  for (var _len = arguments.length, args2 = new Array(_len), _key = 0; _key < _len; _key++) args2[_key] = arguments[_key];
  var a2 = args2[0], b2 = [], c2;
  for (c2 = 1; c2 < args2.length; c2 += 1) b2.push(args2[c2]);
  return b2.forEach(function(d2) {
    a2 = a2.replace(/%[a-z]/, d2);
  }), a2;
}
var PolishedError = function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    var _this;
    if (false) _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    else {
      for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args2[_key2 - 1] = arguments[_key2];
      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args2))) || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt), saturation === 0) return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex(color) {
  if (typeof color != "string") return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color != "string") throw new PolishedError(3);
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) throw new PolishedError(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) throw new PolishedError(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255, green = color.green / 255, blue = color.blue / 255, max = Math.max(red, green, blue), min = Math.min(red, green, blue), lightness = (max + min) / 2;
  if (max === min) return color.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max - min, saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color.alpha !== void 0 ? { hue, saturation, lightness, alpha: color.alpha } : { hue, saturation, lightness };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function(value3) {
  return value3.length === 7 && value3[1] === value3[2] && value3[3] === value3[4] && value3[5] === value3[6] ? "#" + value3[1] + value3[3] + value3[5] : value3;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value3) {
  var hex = value3.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value3, saturation, lightness) {
  if (typeof value3 == "number" && typeof saturation == "number" && typeof lightness == "number") return hslToHex(value3, saturation, lightness);
  if (typeof value3 == "object" && saturation === void 0 && lightness === void 0) return hslToHex(value3.hue, value3.saturation, value3.lightness);
  throw new PolishedError(1);
}
function hsla(value3, saturation, lightness, alpha) {
  if (typeof value3 == "number" && typeof saturation == "number" && typeof lightness == "number" && typeof alpha == "number") return alpha >= 1 ? hslToHex(value3, saturation, lightness) : "rgba(" + hslToRgb(value3, saturation, lightness) + "," + alpha + ")";
  if (typeof value3 == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) return value3.alpha >= 1 ? hslToHex(value3.hue, value3.saturation, value3.lightness) : "rgba(" + hslToRgb(value3.hue, value3.saturation, value3.lightness) + "," + value3.alpha + ")";
  throw new PolishedError(2);
}
function rgb(value3, green, blue) {
  if (typeof value3 == "number" && typeof green == "number" && typeof blue == "number") return reduceHexValue$1("#" + numberToHex(value3) + numberToHex(green) + numberToHex(blue));
  if (typeof value3 == "object" && green === void 0 && blue === void 0) return reduceHexValue$1("#" + numberToHex(value3.red) + numberToHex(value3.green) + numberToHex(value3.blue));
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "number" && typeof secondValue == "number" && typeof thirdValue == "number" && typeof fourthValue == "number") return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function(color) {
  return typeof color.red == "number" && typeof color.green == "number" && typeof color.blue == "number" && (typeof color.alpha != "number" || typeof color.alpha > "u");
};
var isRgba = function(color) {
  return typeof color.red == "number" && typeof color.green == "number" && typeof color.blue == "number" && typeof color.alpha == "number";
};
var isHsl = function(color) {
  return typeof color.hue == "number" && typeof color.saturation == "number" && typeof color.lightness == "number" && (typeof color.alpha != "number" || typeof color.alpha > "u");
};
var isHsla = function(color) {
  return typeof color.hue == "number" && typeof color.saturation == "number" && typeof color.lightness == "number" && typeof color.alpha == "number";
};
function toColorString(color) {
  if (typeof color != "object") throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}
function curried(f3, length, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f3.apply(this, combined) : curried(f3, length, combined);
  };
}
function curry(f3) {
  return curried(f3, f3.length, []);
}
function guard(lowerBoundary, upperBoundary, value3) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value3));
}
function darken(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken = curry(darken);
var curriedDarken$1 = curriedDarken;
function lighten(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten = curry(lighten);
var curriedLighten$1 = curriedLighten;
function opacify(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify);
var curriedOpacify$1 = curriedOpacify;
function transparentize(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
var Wrapper = Tr.div(q, ({ theme }) => ({ backgroundColor: theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme.appBorderRadius, border: `1px dashed ${theme.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme.color.defaultText), fontSize: theme.typography.size.s2 }));
var EmptyBlock = (props) => import_react.default.createElement(Wrapper, { ...props, className: "docblock-emptyblock sb-unstyled" });
var StyledSyntaxHighlighter = Tr(Dg)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = Tr.div(({ theme }) => ({ background: theme.background.content, borderRadius: theme.appBorderRadius, border: `1px solid ${theme.appBorderColor}`, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" }));
var SourceSkeletonPlaceholder = Tr.div(({ theme }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${gc}`]: { margin: 0 } }));
var SourceSkeleton = () => import_react.default.createElement(SourceSkeletonWrapper, null, import_react.default.createElement(SourceSkeletonPlaceholder, null), import_react.default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), import_react.default.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), import_react.default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }));
var Source = ({ isLoading, error, language, code, dark, format: format3 = false, ...rest }) => {
  let { typography } = Mt();
  if (isLoading) return import_react.default.createElement(SourceSkeleton, null);
  if (error) return import_react.default.createElement(EmptyBlock, null, error);
  let syntaxHighlighter = import_react.default.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format3, language, className: "docblock-source sb-unstyled", ...rest }, code);
  if (typeof dark > "u") return syntaxHighlighter;
  let overrideTheme = dark ? Ne.dark : Ne.light;
  return import_react.default.createElement(jt, { theme: zr({ ...overrideTheme, fontCode: typography.fonts.mono, fontBase: typography.fonts.base }) }, syntaxHighlighter);
};
var toGlobalSelector = (element) => `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`;
var breakpoint = 600;
var Title = Tr.h1(q, ({ theme }) => ({ color: theme.color.defaultText, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } }));
var Subtitle = Tr.h2(q, ({ theme }) => ({ fontWeight: theme.typography.weight.regular, fontSize: theme.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: curriedTransparentize$1(0.25, theme.color.defaultText) }));
var DocsContent = Tr.div(({ theme }) => {
  let reset = { fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, headers = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, code = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`, color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border };
  return { maxWidth: 1e3, width: "100%", [toGlobalSelector("a")]: { ...reset, fontSize: "inherit", lineHeight: "24px", color: theme.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [toGlobalSelector("blockquote")]: { ...reset, margin: "16px 0", borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [toGlobalSelector("div")]: reset, [toGlobalSelector("dl")]: { ...reset, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [toGlobalSelector("h1")]: { ...reset, ...headers, fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h2")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme.appBorderColor}` }, [toGlobalSelector("h3")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h4")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s3}px` }, [toGlobalSelector("h5")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px` }, [toGlobalSelector("h6")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }, [toGlobalSelector("hr")]: { border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }, [toGlobalSelector("img")]: { maxWidth: "100%" }, [toGlobalSelector("li")]: { ...reset, fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": code }, [toGlobalSelector("ol")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [toGlobalSelector("p")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", color: theme.color.defaultText, "& code": code }, [toGlobalSelector("pre")]: { ...reset, fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [toGlobalSelector("span")]: { ...reset, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [toGlobalSelector("table")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: theme.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter }, "& tr th": { fontWeight: "bold", color: theme.color.defaultText, border: `1px solid ${theme.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme.appBorderColor}`, color: theme.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [toGlobalSelector("ul")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
});
var DocsWrapper = Tr.div(({ theme }) => ({ background: theme.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${breakpoint}px)`]: {} }));
var DocsPageWrapper = ({ children, toc }) => import_react.default.createElement(DocsWrapper, { className: "sbdocs sbdocs-wrapper" }, import_react.default.createElement(DocsContent, { className: "sbdocs sbdocs-content" }, children), toc);
var getBlockBackgroundStyle = (theme) => ({ borderRadius: theme.appBorderRadius, background: theme.background.content, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${theme.appBorderColor}` });
var { window: globalWindow } = globalThis;
var IFrame = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { id } = this.props;
    this.iframe = globalWindow.document.getElementById(id);
  }
  shouldComponentUpdate(nextProps) {
    let { scale } = nextProps;
    return scale !== this.props.scale && this.setIframeBodyStyle({ width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" }), false;
  }
  setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style);
  }
  render() {
    let { id, title, src, allowFullScreen, scale, ...rest } = this.props;
    return import_react.default.createElement("iframe", { id, title, src, ...allowFullScreen ? { allow: "fullscreen" } : {}, loading: "lazy", ...rest });
  }
};
var ZoomContext = (0, import_react.createContext)({ scale: 1 });
var { PREVIEW_URL } = globalThis;
var BASE_URL = PREVIEW_URL || "iframe.html";
var storyBlockIdFromId = ({ story, primary }) => `story--${story.id}${primary ? "--primary" : ""}`;
var InlineStory = (props) => {
  let storyRef = (0, import_react.useRef)(), [showLoader, setShowLoader] = (0, import_react.useState)(true), [error, setError] = (0, import_react.useState)(), { story, height, autoplay, forceInitialArgs, renderStoryToElement } = props;
  return (0, import_react.useEffect)(() => {
    if (!(story && storyRef.current)) return () => {
    };
    let element = storyRef.current, cleanup = renderStoryToElement(story, element, { showMain: () => {
    }, showError: ({ title, description }) => setError(new Error(`${title} - ${description}`)), showException: (err) => setError(err) }, { autoplay, forceInitialArgs });
    return setShowLoader(false), () => {
      Promise.resolve().then(() => cleanup());
    };
  }, [autoplay, renderStoryToElement, story]), error ? import_react.default.createElement("pre", null, import_react.default.createElement(RI, { error })) : import_react.default.createElement(import_react.default.Fragment, null, height ? import_react.default.createElement("style", null, `#${storyBlockIdFromId(props)} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, showLoader && import_react.default.createElement(StorySkeleton, null), import_react.default.createElement("div", { ref: storyRef, id: `${storyBlockIdFromId(props)}-inner`, "data-name": story.name }));
};
var IFrameStory = ({ story, height = "500px" }) => import_react.default.createElement("div", { style: { width: "100%", height } }, import_react.default.createElement(ZoomContext.Consumer, null, ({ scale }) => import_react.default.createElement(IFrame, { key: "iframe", id: `iframe--${story.id}`, title: story.name, src: E_(BASE_URL, story.id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } })));
var ErrorMessage = Tr.strong(({ theme }) => ({ color: theme.color.orange }));
var Story = (props) => {
  let { inline, story } = props;
  return inline && !props.autoplay && story.usesMount ? import_react.default.createElement(ErrorMessage, null, "This story mounts inside of play. Set", " ", import_react.default.createElement("a", { href: "https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay" }, "autoplay"), " ", "to true to view this story.") : import_react.default.createElement("div", { id: storyBlockIdFromId(props), className: "sb-story sb-unstyled", "data-story-block": "true" }, inline ? import_react.default.createElement(InlineStory, { ...props }) : import_react.default.createElement(IFrameStory, { ...props }));
};
var StorySkeleton = () => import_react.default.createElement(b_, null);
var Bar = Tr(Jl)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" });
var Wrapper2 = Tr.div({ display: "flex", alignItems: "center", gap: 4 });
var IconPlaceholder = Tr.div(({ theme }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` }));
var Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => import_react.default.createElement(Bar, { ...rest }, import_react.default.createElement(Wrapper2, { key: "left" }, isLoading ? [1, 2, 3].map((key2) => import_react.default.createElement(IconPlaceholder, { key: key2 })) : import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Ml, { key: "zoomin", onClick: (e2) => {
  e2.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, import_react.default.createElement(ZoomIcon, null)), import_react.default.createElement(Ml, { key: "zoomout", onClick: (e2) => {
  e2.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, import_react.default.createElement(ZoomOutIcon, null)), import_react.default.createElement(Ml, { key: "zoomreset", onClick: (e2) => {
  e2.preventDefault(), resetZoom();
}, title: "Reset zoom" }, import_react.default.createElement(ZoomResetIcon, null)))));
var ChildrenContainer = Tr.div(({ isColumn, columns, layout }) => ({ display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout = "padded" }) => layout === "centered" || layout === "padded" ? { padding: "30px 20px", "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout = "padded" }) => layout === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns }) => columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } } : {});
var StyledSource = Tr(Source)(({ theme }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme.appBorderRadius, borderBottomRightRadius: theme.appBorderRadius, border: "none", background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content), color: theme.color.lightest, button: { background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content) } }));
var PreviewContainer = Tr.div(({ theme, withSource, isExpanded }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...getBlockBackgroundStyle(theme), borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar }) => withToolbar && { paddingTop: 40 });
var getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: () => setExpanded(false) } };
    case expanded:
      return { source: import_react.default.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => setExpanded(false) } };
    default:
      return { source: import_react.default.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => setExpanded(true) } };
  }
};
function getStoryId(children) {
  if (import_react.Children.count(children) === 1) {
    let elt = children;
    if (elt.props) return elt.props.id;
  }
  return null;
}
var PositionedToolbar = Tr(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 });
var Relative = Tr.div({ overflow: "hidden", position: "relative" });
var Preview = ({ isLoading, isColumn, columns, children, withSource, withToolbar = false, isExpanded = false, additionalActions, className, layout = "padded", ...props }) => {
  let [expanded, setExpanded] = (0, import_react.useState)(isExpanded), { source: source2, actionItem } = getSource(withSource, expanded, setExpanded), [scale, setScale] = (0, import_react.useState)(1), previewClasses = [className].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), defaultActionItems = withSource ? [actionItem] : [], [additionalActionItems, setAdditionalActionItems] = (0, import_react.useState)(additionalActions ? [...additionalActions] : []), actionItems = [...defaultActionItems, ...additionalActionItems], { window: globalWindow4 } = globalThis, copyToClipboard = (0, import_react.useCallback)(async (text) => {
    let { createCopyToClipboardFunction } = await import("./@storybook_components.js");
    createCopyToClipboardFunction();
  }, []), onCopyCapture = (e2) => {
    let selection = globalWindow4.getSelection();
    selection && selection.type === "Range" || (e2.preventDefault(), additionalActionItems.filter((item) => item.title === "Copied").length === 0 && copyToClipboard(source2.props.code).then(() => {
      setAdditionalActionItems([...additionalActionItems, { title: "Copied", onClick: () => {
      } }]), globalWindow4.setTimeout(() => setAdditionalActionItems(additionalActionItems.filter((item) => item.title !== "Copied")), 1500);
    }));
  };
  return import_react.default.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && import_react.default.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z2) => setScale(scale * z2), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), import_react.default.createElement(ZoomContext.Provider, { value: { scale } }, import_react.default.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, import_react.default.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout }, import_react.default.createElement(wI.Element, { scale }, Array.isArray(children) ? children.map((child, i2) => import_react.default.createElement("div", { key: i2 }, child)) : import_react.default.createElement("div", null, children))), import_react.default.createElement(lu, { actionItems }))), withSource && expanded && source2);
};
Tr(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
function n() {
  return n = Object.assign ? Object.assign.bind() : function(e2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var t2 = arguments[n2];
      for (var r2 in t2) Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
    }
    return e2;
  }, n.apply(this, arguments);
}
var t = ["children", "options"];
var r;
var i;
(function(e2) {
  e2.blockQuote = "0", e2.breakLine = "1", e2.breakThematic = "2", e2.codeBlock = "3", e2.codeFenced = "4", e2.codeInline = "5", e2.footnote = "6", e2.footnoteReference = "7", e2.gfmTask = "8", e2.heading = "9", e2.headingSetext = "10", e2.htmlBlock = "11", e2.htmlComment = "12", e2.htmlSelfClosing = "13", e2.image = "14", e2.link = "15", e2.linkAngleBraceStyleDetector = "16", e2.linkBareUrlDetector = "17", e2.linkMailtoDetector = "18", e2.newlineCoalescer = "19", e2.orderedList = "20", e2.paragraph = "21", e2.ref = "22", e2.refImage = "23", e2.refLink = "24", e2.table = "25", e2.tableSeparator = "26", e2.text = "27", e2.textBolded = "28", e2.textEmphasized = "29", e2.textEscaped = "30", e2.textMarked = "31", e2.textStrikethroughed = "32", e2.unorderedList = "33";
})(r || (r = {})), function(e2) {
  e2[e2.MAX = 0] = "MAX", e2[e2.HIGH = 1] = "HIGH", e2[e2.MED = 2] = "MED", e2[e2.LOW = 3] = "LOW", e2[e2.MIN = 4] = "MIN";
}(i || (i = {}));
var l = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e2, n2) => (e2[n2.toLowerCase()] = n2, e2), { for: "htmlFor" });
var o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" };
var c = ["style", "script"];
var a = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;
var s = /mailto:/i;
var d = /\n{2,}$/;
var u = /^(\s*>[\s\S]*?)(?=\n{2,})/;
var p = /^ *> ?/gm;
var f2 = /^ {2,}\n/;
var h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/;
var m = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/;
var g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
var y = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/;
var k = /^(?:\n *)*\n/;
var x = /\r\n?/g;
var b = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/;
var v = /^\[\^([^\]]+)]/;
var $ = /\f/g;
var w = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/;
var E = /^\s*?\[(x|\s)\]/;
var S = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var C = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var A = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/;
var O = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i;
var T = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
var L = /^<!--[\s\S]*?(?:-->)/;
var R = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;
var z = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i;
var M = /^\{.*\}$/;
var I = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
var U = /^<([^ >]+@[^ >]+)>/;
var j = /^<([^ >]+:\/[^ >]+)>/;
var B = /-([a-z])?/gi;
var N = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/;
var H = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/;
var D = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
var P2 = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
var _ = /(\[|\])/g;
var F = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
var W = /\t/g;
var G = /^ *\| */;
var Z = /(^ *\||\| *$)/g;
var q2 = / *$/;
var V = /^ *:-+: *$/;
var X = /^ *:-+ *$/;
var Q = /^ *-+: *$/;
var J = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)";
var K = new RegExp(`^([*_])\\1${J}\\1\\1(?!\\1)`);
var Y = new RegExp(`^([*_])${J}\\1(?!\\1|\\w)`);
var ee = new RegExp(`^==${J}==`);
var ne = new RegExp(`^~~${J}~~`);
var te2 = /^\\([^0-9A-Za-z\s])/;
var re = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i;
var ie = /^\n+/;
var le = /^([ \t]*)/;
var oe = /\\([^\\])/g;
var ce = / *\n+$/;
var ae = /(?:^|\n)( *)$/;
var se = "(?:\\d+\\.)";
var de = "(?:[*+-])";
function ue(e2) {
  return "( *)(" + (e2 === 1 ? se : de) + ") +";
}
var pe = ue(1);
var fe = ue(2);
function he(e2) {
  return new RegExp("^" + (e2 === 1 ? pe : fe));
}
var me = he(1);
var ge = he(2);
function ye(e2) {
  return new RegExp("^" + (e2 === 1 ? pe : fe) + "[^\\n]*(?:\\n(?!\\1" + (e2 === 1 ? se : de) + " )[^\\n]*)*(\\n|$)", "gm");
}
var ke = ye(1);
var xe = ye(2);
function be(e2) {
  let n2 = e2 === 1 ? se : de;
  return new RegExp("^( *)(" + n2 + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + n2 + " (?!" + n2 + " ))\\n*|\\s*\\n*$)");
}
var ve = be(1);
var $e = be(2);
function we(e2, n2) {
  let t2 = n2 === 1, r2 = t2 ? ve : $e, i2 = t2 ? ke : xe, l2 = t2 ? me : ge;
  return { match(e3, n3, t3) {
    let i3 = ae.exec(t3);
    return i3 && (n3.list || !n3.inline && !n3.simple) ? r2.exec(e3 = i3[1] + e3) : null;
  }, order: 1, parse(e3, n3, r3) {
    let o2 = t2 ? +e3[2] : void 0, c2 = e3[0].replace(d, `
`).match(i2), a2 = false;
    return { items: c2.map(function(e4, t3) {
      let i3 = l2.exec(e4)[0].length, o3 = new RegExp("^ {1," + i3 + "}", "gm"), s2 = e4.replace(o3, "").replace(l2, ""), d2 = t3 === c2.length - 1, u2 = s2.indexOf(`

`) !== -1 || d2 && a2;
      a2 = u2;
      let p2 = r3.inline, f3 = r3.list, h2;
      r3.list = true, u2 ? (r3.inline = false, h2 = s2.replace(ce, `

`)) : (r3.inline = true, h2 = s2.replace(ce, ""));
      let m2 = n3(h2, r3);
      return r3.inline = p2, r3.list = f3, m2;
    }), ordered: t2, start: o2 };
  }, render: (n3, t3, r3) => e2(n3.ordered ? "ol" : "ul", { key: r3.key, start: n3.type === "20" ? n3.start : void 0 }, n3.items.map(function(n4, i3) {
    return e2("li", { key: i3 }, t3(n4, r3));
  })) };
}
var Ee = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`);
var Se = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
var Ce = [u, m, g, S, A, C, L, N, ke, ve, xe, $e];
var Ae = [...Ce, /^[^\n]+(?:  \n|\n{2,})/, O, z];
function Oe(e2) {
  return e2.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Te(e2) {
  return Q.test(e2) ? "right" : V.test(e2) ? "center" : X.test(e2) ? "left" : null;
}
function Le(e2, n2, t2) {
  let r2 = t2.inTable;
  t2.inTable = true;
  let i2 = n2(e2.trim(), t2);
  t2.inTable = r2;
  let l2 = [[]];
  return i2.forEach(function(e3, n3) {
    e3.type === "26" ? n3 !== 0 && n3 !== i2.length - 1 && l2.push([]) : (e3.type !== "27" || i2[n3 + 1] != null && i2[n3 + 1].type !== "26" || (e3.text = e3.text.replace(q2, "")), l2[l2.length - 1].push(e3));
  }), l2;
}
function Re(e2, n2, t2) {
  t2.inline = true;
  let r2 = Le(e2[1], n2, t2), i2 = e2[2].replace(Z, "").split("|").map(Te), l2 = function(e3, n3, t3) {
    return e3.trim().split(`
`).map(function(e4) {
      return Le(e4, n3, t3);
    });
  }(e2[3], n2, t2);
  return t2.inline = false, { align: i2, cells: l2, header: r2, type: "25" };
}
function ze(e2, n2) {
  return e2.align[n2] == null ? {} : { textAlign: e2.align[n2] };
}
function Me(e2) {
  return function(n2, t2) {
    return t2.inline ? e2.exec(n2) : null;
  };
}
function Ie(e2) {
  return function(n2, t2) {
    return t2.inline || t2.simple ? e2.exec(n2) : null;
  };
}
function Ue(e2) {
  return function(n2, t2) {
    return t2.inline || t2.simple ? null : e2.exec(n2);
  };
}
function je(e2) {
  return function(n2) {
    return e2.exec(n2);
  };
}
function Be(e2, n2, t2) {
  if (n2.inline || n2.simple || t2 && !t2.endsWith(`
`)) return null;
  let r2 = "";
  e2.split(`
`).every((e3) => !Ce.some((n3) => n3.test(e3)) && (r2 += e3 + `
`, e3.trim()));
  let i2 = r2.trimEnd();
  return i2 == "" ? null : [r2, i2];
}
function Ne2(e2) {
  try {
    if (decodeURIComponent(e2).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch {
    return null;
  }
  return e2;
}
function He(e2) {
  return e2.replace(oe, "$1");
}
function De(e2, n2, t2) {
  let r2 = t2.inline || false, i2 = t2.simple || false;
  t2.inline = true, t2.simple = true;
  let l2 = e2(n2, t2);
  return t2.inline = r2, t2.simple = i2, l2;
}
function Pe(e2, n2, t2) {
  let r2 = t2.inline || false, i2 = t2.simple || false;
  t2.inline = false, t2.simple = true;
  let l2 = e2(n2, t2);
  return t2.inline = r2, t2.simple = i2, l2;
}
function _e(e2, n2, t2) {
  return t2.inline = false, e2(n2, t2);
}
var Fe = (e2, n2, t2) => ({ children: De(n2, e2[1], t2) });
function We() {
  return {};
}
function Ge() {
  return null;
}
function Ze(...e2) {
  return e2.filter(Boolean).join(" ");
}
function qe(e2, n2, t2) {
  let r2 = e2, i2 = n2.split(".");
  for (; i2.length && (r2 = r2[i2[0]], r2 !== void 0); ) i2.shift();
  return r2 || t2;
}
function Ve(t2 = "", r2 = {}) {
  r2.overrides = r2.overrides || {}, r2.slugify = r2.slugify || Oe, r2.namedCodesToUnicode = r2.namedCodesToUnicode ? n({}, o, r2.namedCodesToUnicode) : o;
  let i2 = r2.createElement || React15.createElement;
  function d2(e2, t3, ...l2) {
    let o2 = qe(r2.overrides, `${e2}.props`, {});
    return i2(function(e3, n2) {
      let t4 = qe(n2, e3);
      return t4 ? typeof t4 == "function" || typeof t4 == "object" && "render" in t4 ? t4 : qe(n2, `${e3}.component`, e3) : e3;
    }(e2, r2.overrides), n({}, t3, o2, { className: Ze(t3 == null ? void 0 : t3.className, o2.className) || void 0 }), ...l2);
  }
  function Z2(n2) {
    n2 = n2.replace(w, "");
    let t3 = false;
    r2.forceInline ? t3 = true : r2.forceBlock || (t3 = F.test(n2) === false);
    let i3 = oe2(J2(t3 ? n2 : `${n2.trimEnd().replace(ie, "")}

`, { inline: t3 }));
    for (; typeof i3[i3.length - 1] == "string" && !i3[i3.length - 1].trim(); ) i3.pop();
    if (r2.wrapper === null) return i3;
    let l2 = r2.wrapper || (t3 ? "span" : "div"), o2;
    if (i3.length > 1 || r2.forceWrapper) o2 = i3;
    else {
      if (i3.length === 1) return o2 = i3[0], typeof o2 == "string" ? d2("span", { key: "outer" }, o2) : o2;
      o2 = null;
    }
    return React15.createElement(l2, { key: "outer" }, o2);
  }
  function q22(n2) {
    let t3 = n2.match(a);
    return t3 ? t3.reduce(function(n3, t4, r3) {
      let i3 = t4.indexOf("=");
      if (i3 !== -1) {
        let o2 = function(e2) {
          return e2.indexOf("-") !== -1 && e2.match(R) === null && (e2 = e2.replace(B, function(e3, n4) {
            return n4.toUpperCase();
          })), e2;
        }(t4.slice(0, i3)).trim(), c2 = function(e2) {
          let n4 = e2[0];
          return (n4 === '"' || n4 === "'") && e2.length >= 2 && e2[e2.length - 1] === n4 ? e2.slice(1, -1) : e2;
        }(t4.slice(i3 + 1).trim()), a2 = l[o2] || o2, s2 = n3[a2] = function(e2, n4) {
          return e2 === "style" ? n4.split(/;\s?/).reduce(function(e3, n5) {
            let t5 = n5.slice(0, n5.indexOf(":"));
            return e3[t5.trim().replace(/(-[a-z])/g, (e4) => e4[1].toUpperCase())] = n5.slice(t5.length + 1).trim(), e3;
          }, {}) : e2 === "href" || e2 === "src" ? Ne2(n4) : (n4.match(M) && (n4 = n4.slice(1, n4.length - 1)), n4 === "true" || n4 !== "false" && n4);
        }(o2, c2);
        typeof s2 == "string" && (O.test(s2) || z.test(s2)) && (n3[a2] = React15.cloneElement(Z2(s2.trim()), { key: r3 }));
      } else t4 !== "style" && (n3[l[t4] || t4] = true);
      return n3;
    }, {}) : null;
  }
  let V2 = [], X2 = {}, Q2 = { 0: { match: Ue(u), order: 1, parse: (e2, n2, t3) => ({ children: n2(e2[0].replace(p, ""), t3) }), render: (e2, n2, t3) => d2("blockquote", { key: t3.key }, n2(e2.children, t3)) }, 1: { match: je(f2), order: 1, parse: We, render: (e2, n2, t3) => d2("br", { key: t3.key }) }, 2: { match: Ue(h), order: 1, parse: We, render: (e2, n2, t3) => d2("hr", { key: t3.key }) }, 3: { match: Ue(g), order: 0, parse: (e2) => ({ lang: void 0, text: e2[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (e2, t3, r3) => d2("pre", { key: r3.key }, d2("code", n({}, e2.attrs, { className: e2.lang ? `lang-${e2.lang}` : "" }), e2.text)) }, 4: { match: Ue(m), order: 0, parse: (e2) => ({ attrs: q22(e2[3] || ""), lang: e2[2] || void 0, text: e2[4], type: "3" }) }, 5: { match: Ie(y), order: 3, parse: (e2) => ({ text: e2[2] }), render: (e2, n2, t3) => d2("code", { key: t3.key }, e2.text) }, 6: { match: Ue(b), order: 0, parse: (e2) => (V2.push({ footnote: e2[2], identifier: e2[1] }), {}), render: Ge }, 7: { match: Me(v), order: 1, parse: (e2) => ({ target: `#${r2.slugify(e2[1])}`, text: e2[1] }), render: (e2, n2, t3) => d2("a", { key: t3.key, href: Ne2(e2.target) }, d2("sup", { key: t3.key }, e2.text)) }, 8: { match: Me(E), order: 1, parse: (e2) => ({ completed: e2[1].toLowerCase() === "x" }), render: (e2, n2, t3) => d2("input", { checked: e2.completed, key: t3.key, readOnly: true, type: "checkbox" }) }, 9: { match: Ue(r2.enforceAtxHeadings ? C : S), order: 1, parse: (e2, n2, t3) => ({ children: De(n2, e2[2], t3), id: r2.slugify(e2[2]), level: e2[1].length }), render: (e2, n2, t3) => d2(`h${e2.level}`, { id: e2.id, key: t3.key }, n2(e2.children, t3)) }, 10: { match: Ue(A), order: 0, parse: (e2, n2, t3) => ({ children: De(n2, e2[1], t3), level: e2[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: je(O), order: 1, parse(e2, n2, t3) {
    let [, r3] = e2[3].match(le), i3 = new RegExp(`^${r3}`, "gm"), l2 = e2[3].replace(i3, ""), o2 = (a2 = l2, Ae.some((e3) => e3.test(a2)) ? _e : De);
    var a2;
    let s2 = e2[1].toLowerCase(), d3 = c.indexOf(s2) !== -1, u2 = { attrs: q22(e2[2]), noInnerParse: d3, tag: (d3 ? s2 : e2[1]).trim() };
    return t3.inAnchor = t3.inAnchor || s2 === "a", d3 ? u2.text = e2[3] : u2.children = o2(n2, l2, t3), t3.inAnchor = false, u2;
  }, render: (e2, t3, r3) => d2(e2.tag, n({ key: r3.key }, e2.attrs), e2.text || t3(e2.children, r3)) }, 13: { match: je(z), order: 1, parse: (e2) => ({ attrs: q22(e2[2] || ""), tag: e2[1].trim() }), render: (e2, t3, r3) => d2(e2.tag, n({}, e2.attrs, { key: r3.key })) }, 12: { match: je(L), order: 1, parse: () => ({}), render: Ge }, 14: { match: Ie(Se), order: 1, parse: (e2) => ({ alt: e2[1], target: He(e2[2]), title: e2[3] }), render: (e2, n2, t3) => d2("img", { key: t3.key, alt: e2.alt || void 0, title: e2.title || void 0, src: Ne2(e2.target) }) }, 15: { match: Me(Ee), order: 3, parse: (e2, n2, t3) => ({ children: Pe(n2, e2[1], t3), target: He(e2[2]), title: e2[3] }), render: (e2, n2, t3) => d2("a", { key: t3.key, href: Ne2(e2.target), title: e2.title }, n2(e2.children, t3)) }, 16: { match: Me(j), order: 0, parse: (e2) => ({ children: [{ text: e2[1], type: "27" }], target: e2[1], type: "15" }) }, 17: { match: (e2, n2) => n2.inAnchor ? null : Me(I)(e2, n2), order: 0, parse: (e2) => ({ children: [{ text: e2[1], type: "27" }], target: e2[1], title: void 0, type: "15" }) }, 18: { match: Me(U), order: 0, parse(e2) {
    let n2 = e2[1], t3 = e2[1];
    return s.test(t3) || (t3 = "mailto:" + t3), { children: [{ text: n2.replace("mailto:", ""), type: "27" }], target: t3, type: "15" };
  } }, 20: we(d2, 1), 33: we(d2, 2), 19: { match: Ue(k), order: 3, parse: We, render: () => `
` }, 21: { match: Be, order: 3, parse: Fe, render: (e2, n2, t3) => d2("p", { key: t3.key }, n2(e2.children, t3)) }, 22: { match: Me(H), order: 0, parse: (e2) => (X2[e2[1]] = { target: e2[2], title: e2[4] }, {}), render: Ge }, 23: { match: Ie(D), order: 0, parse: (e2) => ({ alt: e2[1] || void 0, ref: e2[2] }), render: (e2, n2, t3) => X2[e2.ref] ? d2("img", { key: t3.key, alt: e2.alt, src: Ne2(X2[e2.ref].target), title: X2[e2.ref].title }) : null }, 24: { match: Me(P2), order: 0, parse: (e2, n2, t3) => ({ children: n2(e2[1], t3), fallbackChildren: n2(e2[0].replace(_, "\\$1"), t3), ref: e2[2] }), render: (e2, n2, t3) => X2[e2.ref] ? d2("a", { key: t3.key, href: Ne2(X2[e2.ref].target), title: X2[e2.ref].title }, n2(e2.children, t3)) : d2("span", { key: t3.key }, n2(e2.fallbackChildren, t3)) }, 25: { match: Ue(N), order: 1, parse: Re, render: (e2, n2, t3) => d2("table", { key: t3.key }, d2("thead", null, d2("tr", null, e2.header.map(function(r3, i3) {
    return d2("th", { key: i3, style: ze(e2, i3) }, n2(r3, t3));
  }))), d2("tbody", null, e2.cells.map(function(r3, i3) {
    return d2("tr", { key: i3 }, r3.map(function(r4, i4) {
      return d2("td", { key: i4, style: ze(e2, i4) }, n2(r4, t3));
    }));
  }))) }, 26: { match: function(e2, n2) {
    return n2.inTable ? (n2.inline = true, G.exec(e2)) : null;
  }, order: 1, parse: function() {
    return { type: "26" };
  }, render: () => " | " }, 27: { match: je(re), order: 4, parse: (e2) => ({ text: e2[0].replace(T, (e3, n2) => r2.namedCodesToUnicode[n2] ? r2.namedCodesToUnicode[n2] : e3) }), render: (e2) => e2.text }, 28: { match: Ie(K), order: 2, parse: (e2, n2, t3) => ({ children: n2(e2[2], t3) }), render: (e2, n2, t3) => d2("strong", { key: t3.key }, n2(e2.children, t3)) }, 29: { match: Ie(Y), order: 3, parse: (e2, n2, t3) => ({ children: n2(e2[2], t3) }), render: (e2, n2, t3) => d2("em", { key: t3.key }, n2(e2.children, t3)) }, 30: { match: Ie(te2), order: 1, parse: (e2) => ({ text: e2[1], type: "27" }) }, 31: { match: Ie(ee), order: 3, parse: Fe, render: (e2, n2, t3) => d2("mark", { key: t3.key }, n2(e2.children, t3)) }, 32: { match: Ie(ne), order: 3, parse: Fe, render: (e2, n2, t3) => d2("del", { key: t3.key }, n2(e2.children, t3)) } };
  r2.disableParsingRawHTML === true && (delete Q2[11], delete Q2[13]);
  let J2 = function(e2) {
    let n2 = Object.keys(e2);
    function t3(r3, i3) {
      let l2 = [], o2 = "";
      for (; r3; ) {
        let c2 = 0;
        for (; c2 < n2.length; ) {
          let a2 = n2[c2], s2 = e2[a2], d3 = s2.match(r3, i3, o2);
          if (d3) {
            let e3 = d3[0];
            r3 = r3.substring(e3.length);
            let n3 = s2.parse(d3, t3, i3);
            n3.type == null && (n3.type = a2), l2.push(n3), o2 = e3;
            break;
          }
          c2++;
        }
      }
      return l2;
    }
    return n2.sort(function(n3, t4) {
      let r3 = e2[n3].order, i3 = e2[t4].order;
      return r3 !== i3 ? r3 - i3 : n3 < t4 ? -1 : 1;
    }), function(e3, n3) {
      return t3(function(e4) {
        return e4.replace(x, `
`).replace($, "").replace(W, "    ");
      }(e3), n3);
    };
  }(Q2), oe2 = (ce2 = /* @__PURE__ */ function(e2, n2) {
    return function(t3, r3, i3) {
      let l2 = e2[t3.type].render;
      return n2 ? n2(() => l2(t3, r3, i3), t3, r3, i3) : l2(t3, r3, i3);
    };
  }(Q2, r2.renderRule), function e2(n2, t3 = {}) {
    if (Array.isArray(n2)) {
      let r3 = t3.key, i3 = [], l2 = false;
      for (let r4 = 0; r4 < n2.length; r4++) {
        t3.key = r4;
        let o2 = e2(n2[r4], t3), c2 = typeof o2 == "string";
        c2 && l2 ? i3[i3.length - 1] += o2 : o2 !== null && i3.push(o2), l2 = c2;
      }
      return t3.key = r3, i3;
    }
    return ce2(n2, e2, t3);
  });
  var ce2;
  let ae2 = Z2(t2);
  return V2.length ? d2("div", null, ae2, d2("footer", { key: "footer" }, V2.map(function(e2) {
    return d2("div", { id: r2.slugify(e2.identifier), key: e2.identifier }, e2.identifier, oe2(J2(e2.footnote, { inline: true })));
  }))) : ae2;
}
var index_modern_default = (n2) => {
  let { children: r2 = "", options: i2 } = n2, l2 = function(e2, n3) {
    if (e2 == null) return {};
    var t2, r3, i3 = {}, l3 = Object.keys(e2);
    for (r3 = 0; r3 < l3.length; r3++) n3.indexOf(t2 = l3[r3]) >= 0 || (i3[t2] = e2[t2]);
    return i3;
  }(n2, t);
  return React15.cloneElement(Ve(r2, i2), l2);
};
var Label = Tr.label(({ theme }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme.boolean.background, borderRadius: "3em", padding: 1, '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } }, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme.boolean.selectedBackground, boxShadow: theme.base === "light" ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px` : `${theme.appBorderColor} 0 0 0 1px`, color: theme.color.defaultText, padding: "7px 15px" } }));
var parse = (value3) => value3 === "true";
var BooleanControl = ({ name: name2, value: value3, onChange, onBlur, onFocus, argType }) => {
  var _a;
  let onSetFalse = (0, import_react.useCallback)(() => onChange(false), [onChange]), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  if (value3 === void 0) return import_react.default.createElement(Io, { variant: "outline", size: "medium", id: getControlSetterButtonId(name2), onClick: onSetFalse, disabled: readonly }, "Set boolean");
  let controlId = getControlId(name2), parsedValue = typeof value3 == "string" ? parse(value3) : value3;
  return import_react.default.createElement(Label, { "aria-disabled": readonly, htmlFor: controlId, "aria-label": name2 }, import_react.default.createElement("input", { id: controlId, type: "checkbox", onChange: (e2) => onChange(e2.target.checked), checked: parsedValue, role: "switch", disabled: readonly, name: name2, onBlur, onFocus }), import_react.default.createElement("span", { "aria-hidden": "true" }, "False"), import_react.default.createElement("span", { "aria-hidden": "true" }, "True"));
};
var parseDate = (value3) => {
  let [year, month, day] = value3.split("-"), result2 = /* @__PURE__ */ new Date();
  return result2.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)), result2;
};
var parseTime = (value3) => {
  let [hours, minutes] = value3.split(":"), result2 = /* @__PURE__ */ new Date();
  return result2.setHours(parseInt(hours, 10)), result2.setMinutes(parseInt(minutes, 10)), result2;
};
var formatDate = (value3) => {
  let date = new Date(value3), year = `000${date.getFullYear()}`.slice(-4), month = `0${date.getMonth() + 1}`.slice(-2), day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};
var formatTime = (value3) => {
  let date = new Date(value3), hours = `0${date.getHours()}`.slice(-2), minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
};
var FormInput = Tr(GI.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 }));
var FlexSpaced = Tr.div(({ theme }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } }));
var DateControl = ({ name: name2, value: value3, onChange, onFocus, onBlur, argType }) => {
  var _a;
  let [valid, setValid] = (0, import_react.useState)(true), dateRef = (0, import_react.useRef)(), timeRef = (0, import_react.useRef)(), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  (0, import_react.useEffect)(() => {
    valid !== false && (dateRef && dateRef.current && (dateRef.current.value = value3 ? formatDate(value3) : ""), timeRef && timeRef.current && (timeRef.current.value = value3 ? formatTime(value3) : ""));
  }, [value3]);
  let onDateChange = (e2) => {
    if (!e2.target.value) return onChange();
    let parsed = parseDate(e2.target.value), result2 = new Date(value3);
    result2.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    let time = result2.getTime();
    time && onChange(time), setValid(!!time);
  }, onTimeChange = (e2) => {
    if (!e2.target.value) return onChange();
    let parsed = parseTime(e2.target.value), result2 = new Date(value3);
    result2.setHours(parsed.getHours()), result2.setMinutes(parsed.getMinutes());
    let time = result2.getTime();
    time && onChange(time), setValid(!!time);
  }, controlId = getControlId(name2);
  return import_react.default.createElement(FlexSpaced, null, import_react.default.createElement(FormInput, { type: "date", max: "9999-12-31", ref: dateRef, id: `${controlId}-date`, name: `${controlId}-date`, readOnly: readonly, onChange: onDateChange, onFocus, onBlur }), import_react.default.createElement(FormInput, { type: "time", id: `${controlId}-time`, name: `${controlId}-time`, ref: timeRef, onChange: onTimeChange, readOnly: readonly, onFocus, onBlur }), valid ? null : import_react.default.createElement("div", null, "invalid"));
};
var Wrapper3 = Tr.label({ display: "flex" });
var parse2 = (value3) => {
  let result2 = parseFloat(value3);
  return Number.isNaN(result2) ? void 0 : result2;
};
var format2 = (value3) => value3 != null ? String(value3) : "";
var FormInput2 = Tr(GI.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 }));
var NumberControl = ({ name: name2, value: value3, onChange, min, max, step, onBlur, onFocus, argType }) => {
  var _a;
  let [inputValue, setInputValue] = (0, import_react.useState)(typeof value3 == "number" ? value3 : ""), [forceVisible, setForceVisible] = (0, import_react.useState)(false), [parseError, setParseError] = (0, import_react.useState)(null), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), handleChange = (0, import_react.useCallback)((event) => {
    setInputValue(event.target.value);
    let result2 = parseFloat(event.target.value);
    Number.isNaN(result2) ? setParseError(new Error(`'${event.target.value}' is not a number`)) : (onChange(result2), setParseError(null));
  }, [onChange, setParseError]), onForceVisible = (0, import_react.useCallback)(() => {
    setInputValue("0"), onChange(0), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), (0, import_react.useEffect)(() => {
    inputValue !== (typeof value3 == "number" ? value3 : "") && setInputValue(value3);
  }, [value3]), value3 === void 0 ? import_react.default.createElement(Io, { variant: "outline", size: "medium", id: getControlSetterButtonId(name2), onClick: onForceVisible, disabled: readonly }, "Set number") : import_react.default.createElement(Wrapper3, null, import_react.default.createElement(FormInput2, { ref: htmlElRef, id: getControlId(name2), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : null, autoFocus: forceVisible, readOnly: readonly, name: name2, min, max, step, onFocus, onBlur }));
};
var selectedKey = (value3, options2) => {
  let entry = options2 && Object.entries(options2).find(([_key, val]) => val === value3);
  return entry ? entry[0] : void 0;
};
var selectedKeys = (value3, options2) => value3 && options2 ? Object.entries(options2).filter((entry) => value3.includes(entry[1])).map((entry) => entry[0]) : [];
var selectedValues = (keys, options2) => keys && options2 && keys.map((key2) => options2[key2]);
var Wrapper4 = Tr.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
});
var Text = Tr.span({ "[aria-readonly=true] &": { opacity: 0.5 } });
var Label2 = Tr.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var CheckboxControl = ({ name: name2, options: options2, value: value3, onChange, isInline, argType }) => {
  var _a;
  if (!options2) return import_client_logger.logger.warn(`Checkbox with no options: ${name2}`), import_react.default.createElement(import_react.default.Fragment, null, "-");
  let initial = selectedKeys(value3, options2), [selected, setSelected] = (0, import_react.useState)(initial), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), handleChange = (e2) => {
    let option = e2.target.value, updated = [...selected];
    updated.includes(option) ? updated.splice(updated.indexOf(option), 1) : updated.push(option), onChange(selectedValues(updated, options2)), setSelected(updated);
  };
  (0, import_react.useEffect)(() => {
    setSelected(selectedKeys(value3, options2));
  }, [value3]);
  let controlId = getControlId(name2);
  return import_react.default.createElement(Wrapper4, { "aria-readonly": readonly, isInline }, Object.keys(options2).map((key2, index) => {
    let id = `${controlId}-${index}`;
    return import_react.default.createElement(Label2, { key: id, htmlFor: id }, import_react.default.createElement("input", { type: "checkbox", disabled: readonly, id, name: id, value: key2, onChange: handleChange, checked: selected == null ? void 0 : selected.includes(key2) }), import_react.default.createElement(Text, null, key2));
  }));
};
var Wrapper5 = Tr.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
});
var Text2 = Tr.span({ "[aria-readonly=true] &": { opacity: 0.5 } });
var Label3 = Tr.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var RadioControl = ({ name: name2, options: options2, value: value3, onChange, isInline, argType }) => {
  var _a;
  if (!options2) return import_client_logger.logger.warn(`Radio with no options: ${name2}`), import_react.default.createElement(import_react.default.Fragment, null, "-");
  let selection = selectedKey(value3, options2), controlId = getControlId(name2), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(Wrapper5, { "aria-readonly": readonly, isInline }, Object.keys(options2).map((key2, index) => {
    let id = `${controlId}-${index}`;
    return import_react.default.createElement(Label3, { key: id, htmlFor: id }, import_react.default.createElement("input", { type: "radio", id, name: controlId, disabled: readonly, value: key2, onChange: (e2) => onChange(options2[e2.currentTarget.value]), checked: key2 === selection }), import_react.default.createElement(Text2, null, key2));
  }));
};
var styleResets = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" };
var OptionsSelect = Tr.select(styleResets, ({ theme }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme.input.color || "inherit", background: theme.input.background, borderRadius: theme.input.borderRadius, boxShadow: `${theme.input.border} 0 0 0 1px inset`, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${theme.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } }));
var SelectWrapper = Tr.span(({ theme }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: theme.textMutedColor, path: { fill: theme.textMutedColor } } }));
var NO_SELECTION = "Choose option...";
var SingleSelect = ({ name: name2, value: value3, options: options2, onChange, argType }) => {
  var _a;
  let handleChange = (e2) => {
    onChange(options2[e2.currentTarget.value]);
  }, selection = selectedKey(value3, options2) || NO_SELECTION, controlId = getControlId(name2), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(SelectWrapper, null, import_react.default.createElement(ChevronSmallDownIcon, null), import_react.default.createElement(OptionsSelect, { disabled: readonly, id: controlId, value: selection, onChange: handleChange }, import_react.default.createElement("option", { key: "no-selection", disabled: true }, NO_SELECTION), Object.keys(options2).map((key2) => import_react.default.createElement("option", { key: key2, value: key2 }, key2))));
};
var MultiSelect = ({ name: name2, value: value3, options: options2, onChange, argType }) => {
  var _a;
  let handleChange = (e2) => {
    let selection2 = Array.from(e2.currentTarget.options).filter((option) => option.selected).map((option) => option.value);
    onChange(selectedValues(selection2, options2));
  }, selection = selectedKeys(value3, options2), controlId = getControlId(name2), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(SelectWrapper, null, import_react.default.createElement(OptionsSelect, { disabled: readonly, id: controlId, multiple: true, value: selection, onChange: handleChange }, Object.keys(options2).map((key2) => import_react.default.createElement("option", { key: key2, value: key2 }, key2))));
};
var SelectControl = (props) => {
  let { name: name2, options: options2 } = props;
  return options2 ? props.isMulti ? import_react.default.createElement(MultiSelect, { ...props }) : import_react.default.createElement(SingleSelect, { ...props }) : (import_client_logger.logger.warn(`Select with no options: ${name2}`), import_react.default.createElement(import_react.default.Fragment, null, "-"));
};
var normalizeOptions = (options2, labels) => Array.isArray(options2) ? options2.reduce((acc, item) => (acc[(labels == null ? void 0 : labels[item]) || String(item)] = item, acc), {}) : options2;
var Controls = { check: CheckboxControl, "inline-check": CheckboxControl, radio: RadioControl, "inline-radio": RadioControl, select: SelectControl, "multi-select": SelectControl };
var OptionsControl = (props) => {
  let { type = "select", labels, argType } = props, normalized = { ...props, argType, options: argType ? normalizeOptions(argType.options, labels) : {}, isInline: type.includes("inline"), isMulti: type.includes("multi") }, Control = Controls[type];
  if (Control) return import_react.default.createElement(Control, { ...normalized });
  throw new Error(`Unknown options type: ${type}`);
};
var ERROR = "Error";
var OBJECT = "Object";
var ARRAY = "Array";
var STRING = "String";
var NUMBER = "Number";
var BOOLEAN = "Boolean";
var DATE = "Date";
var NULL = "Null";
var UNDEFINED = "Undefined";
var FUNCTION = "Function";
var SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE";
var REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE";
var UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
var VALUE = "value";
var KEY = "key";
function getObjectType(obj) {
  return obj !== null && typeof obj == "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue), newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = class extends import_react.Component {
  constructor(props) {
    super(props), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state, { onlyValue } = this.props;
    inputRefKey && typeof inputRefKey.focus == "function" && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus == "function" && inputRefValue.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.onSubmit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } = this.props, { inputRefKey, inputRefValue } = this.state, result2 = {};
    if (!onlyValue) {
      if (!inputRefKey.value) return;
      result2.key = inputRefKey.value;
    }
    result2.newValue = onSubmitValueParser(false, keyPath, deep, result2.key, inputRefValue.value), handleAdd(result2);
  }
  refInputKey(node) {
    this.state.inputRefKey = node;
  }
  refInputValue(node) {
    this.state.inputRefValue = node;
  }
  render() {
    let { handleCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep } = this.props, addButtonElementLayout = (0, import_react.cloneElement)(addButtonElement, { onClick: this.onSubmit }), cancelButtonElementLayout = (0, import_react.cloneElement)(cancelButtonElement, { onClick: handleCancel }), inputElementValue = inputElementGenerator(VALUE, keyPath, deep), inputElementValueLayout = (0, import_react.cloneElement)(inputElementValue, { placeholder: "Value", ref: this.refInputValue }), inputElementKeyLayout = null;
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = (0, import_react.cloneElement)(inputElementKey, { placeholder: "Key", ref: this.refInputKey });
    }
    return import_react.default.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
  }
};
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: import_react.default.createElement("button", null, "+"), cancelButtonElement: import_react.default.createElement("button", null, "c") };
var JsonArray = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { data: props.data, name: props.name, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleRemoveItem(index) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[index];
      beforeRemoveAction(index, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: index, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index, 1), this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleAddValueAdd({ newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(data.length, keyPath, deep, newValue).then(() => {
      let newData = [...data, newValue];
      this.setState({ data: newData }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], newData), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key: newData.length - 1, newValue });
    }).catch(logger4.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleEditValue({ key: key2, value: value3 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key2];
      beforeUpdateAction(key2, keyPath, deep, oldValue, value3).then(() => {
        data[key2] = value3, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key: key2, newValue: value3, oldValue }), resolve(void 0);
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name: name2, data, keyPath, deep } = this.state, { handleRemove, readOnly, getStyle, dataType, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name2, data, keyPath, deep, dataType), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), removeItemButton = (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return import_react.default.createElement("span", { className: "rejt-collapsed" }, import_react.default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name: name2, data, keyPath, deep, addFormVisible, nextDeep } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, delimiter, ul, addForm } = getStyle(name2, data, keyPath, deep, dataType), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), addItemButton = (0, import_react.cloneElement)(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return import_react.default.createElement("span", { className: "rejt-not-collapsed" }, import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "["), !addFormVisible && addItemButton, import_react.default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, data.map((item, index) => import_react.default.createElement(JsonNode, { key: index, name: index.toString(), data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveItem(index), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }))), !isReadOnly && addFormVisible && import_react.default.createElement("div", { className: "rejt-add-form", style: addForm }, import_react.default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: true, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "]"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name: name2, collapsed, data, keyPath, deep } = this.state, { dataType, getStyle } = this.props, value3 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name2, data, keyPath, deep, dataType);
    return import_react.default.createElement("div", { className: "rejt-array-node" }, import_react.default.createElement("span", { onClick: this.handleCollapseMode }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name2, " :", " ")), value3);
  }
};
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: import_react.default.createElement("span", null, " - "), plusMenuElement: import_react.default.createElement("span", null, " + ") };
var JsonFunctionValue = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name: name2, value: value3, keyPath, deep } = this.state, { readOnly, dataType } = this.props, readOnlyResult = readOnly(name2, value3, keyPath, deep, dataType);
    editEnabled && !readOnlyResult && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name: name2, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name2, inputRef.value);
    handleUpdateValue({ value: newValue, key: name2 }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name: name2, value: value3, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, textareaElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name2, originalValue, keyPath, deep, dataType), result2 = null, minusElement = null, resultOnlyResult = readOnly(name2, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name2, originalValue, dataType), editButtonElementLayout = (0, import_react.cloneElement)(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = (0, import_react.cloneElement)(cancelButtonElement, { onClick: this.handleCancelEdit }), textareaElementLayout = (0, import_react.cloneElement)(textareaElement, { ref: this.refInput, defaultValue: originalValue });
      result2 = import_react.default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout), minusElement = null;
    } else {
      result2 = import_react.default.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? null : this.handleEditMode }, value3);
      let minusMenuLayout = (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return import_react.default.createElement("li", { className: "rejt-function-value-node", style: style.li }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name2, " :", " "), result2, minusElement);
  }
};
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: import_react.default.createElement("button", null, "e"), cancelButtonElement: import_react.default.createElement("button", null, "c"), minusMenuElement: import_react.default.createElement("span", null, " - ") };
var JsonNode = class extends import_react.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep };
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  render() {
    let { data, name: name2, keyPath, deep } = this.state, { isCollapsed, handleRemove, handleUpdateValue, onUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, readOnlyTrue = () => true, dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return import_react.default.createElement(JsonObject, { data, name: name2, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case OBJECT:
        return import_react.default.createElement(JsonObject, { data, name: name2, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case ARRAY:
        return import_react.default.createElement(JsonArray, { data, name: name2, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case STRING:
        return import_react.default.createElement(JsonValue, { name: name2, value: `"${data}"`, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NUMBER:
        return import_react.default.createElement(JsonValue, { name: name2, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case BOOLEAN:
        return import_react.default.createElement(JsonValue, { name: name2, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case DATE:
        return import_react.default.createElement(JsonValue, { name: name2, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NULL:
        return import_react.default.createElement(JsonValue, { name: name2, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case UNDEFINED:
        return import_react.default.createElement(JsonValue, { name: name2, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case FUNCTION:
        return import_react.default.createElement(JsonFunctionValue, { name: name2, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case SYMBOL:
        return import_react.default.createElement(JsonValue, { name: name2, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      default:
        return null;
    }
  }
};
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = props.deep === -1 ? [] : [...props.keyPath, props.name];
    this.state = { name: props.name, data: props.data, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleAddValueAdd({ key: key2, newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    beforeAddAction(key2, keyPath, deep, newValue).then(() => {
      data[key2] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key: key2, newValue });
    }).catch(logger4.error);
  }
  handleRemoveValue(key2) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key2];
      beforeRemoveAction(key2, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: key2, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key2], this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleEditValue({ key: key2, value: value3 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key2];
      beforeUpdateAction(key2, keyPath, deep, oldValue, value3).then(() => {
        data[key2] = value3, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key: key2, newValue: value3, oldValue }), resolve();
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name: name2, keyPath, deep, data } = this.state, { handleRemove, readOnly, dataType, getStyle, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name2, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), removeItemButton = (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return import_react.default.createElement("span", { className: "rejt-collapsed" }, import_react.default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name: name2, data, keyPath, deep, nextDeep, addFormVisible } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, addForm, ul, delimiter } = getStyle(name2, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name2, data, keyPath, deep, dataType), addItemButton = (0, import_react.cloneElement)(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus }), list = keyList.map((key2) => import_react.default.createElement(JsonNode, { key: key2, name: key2, data: data[key2], keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveValue(key2), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }));
    return import_react.default.createElement("span", { className: "rejt-not-collapsed" }, import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "{"), !isReadOnly && addItemButton, import_react.default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, list), !isReadOnly && addFormVisible && import_react.default.createElement("div", { className: "rejt-add-form", style: addForm }, import_react.default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "}"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name: name2, collapsed, data, keyPath, deep } = this.state, { getStyle, dataType } = this.props, value3 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name2, data, keyPath, deep, dataType);
    return import_react.default.createElement("div", { className: "rejt-object-node" }, import_react.default.createElement("span", { onClick: this.handleCollapseMode }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name2, " :", " ")), value3);
  }
};
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: import_react.default.createElement("span", null, " - "), plusMenuElement: import_react.default.createElement("span", null, " + ") };
var JsonValue = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath, props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name: name2, value: value3, keyPath, deep } = this.state, { readOnly, dataType } = this.props, isReadOnly = readOnly(name2, value3, keyPath, deep, dataType);
    editEnabled && !isReadOnly && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name: name2, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name2, inputRef.value);
    handleUpdateValue({ value: newValue, key: name2 }).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name: name2, value: value3, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, inputElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name2, originalValue, keyPath, deep, dataType), isReadOnly = readOnly(name2, originalValue, keyPath, deep, dataType), isEditing = editEnabled && !isReadOnly, inputElement = inputElementGenerator(VALUE, comeFromKeyPath, deep, name2, originalValue, dataType), editButtonElementLayout = (0, import_react.cloneElement)(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = (0, import_react.cloneElement)(cancelButtonElement, { onClick: this.handleCancelEdit }), inputElementLayout = (0, import_react.cloneElement)(inputElement, { ref: this.refInput, defaultValue: JSON.stringify(originalValue) }), minusMenuLayout = (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
    return import_react.default.createElement("li", { className: "rejt-value-node", style: style.li }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name2, " : "), isEditing ? import_react.default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout) : import_react.default.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? null : this.handleEditMode }, String(value3)), !isReadOnly && !isEditing && minusMenuLayout);
  }
};
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: import_react.default.createElement("button", null, "e"), cancelButtonElement: import_react.default.createElement("button", null, "c"), minusMenuElement: import_react.default.createElement("span", null, " - ") };
function parse3(string) {
  let result2 = string;
  if (result2.indexOf("function") === 0) return (0, eval)(`(${result2})`);
  try {
    result2 = JSON.parse(string);
  } catch {
  }
  return result2;
}
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var value2 = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
var JsonTree = class extends import_react.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, rootName: props.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName ? { data: props.data, rootName: props.rootName } : null;
  }
  onUpdate(key2, data) {
    this.setState({ data }), this.props.onFullyUpdate(data);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data, rootName } = this.state, { isCollapsed, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElement, textareaElement, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser, fallback = null } = this.props, dataType = getObjectType(data), readOnlyFunction = readOnly;
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly);
    let inputElementFunction = inputElement;
    inputElement && getObjectType(inputElement) !== "Function" && (inputElementFunction = () => inputElement);
    let textareaElementFunction = textareaElement;
    return textareaElement && getObjectType(textareaElement) !== "Function" && (textareaElementFunction = () => textareaElement), dataType === "Object" || dataType === "Array" ? import_react.default.createElement("div", { className: "rejt-tree" }, import_react.default.createElement(JsonNode, { data, name: rootName, deep: -1, isCollapsed, onUpdate: this.onUpdate, onDeltaUpdate, readOnly: readOnlyFunction, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser })) : fallback;
  }
};
JsonTree.defaultProps = { rootName: "root", isCollapsed: (keyPath, deep) => deep !== -1, getStyle: (keyName, data, keyPath, deep, dataType) => {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value2;
  }
}, readOnly: () => false, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (isEditMode, keyPath, deep, name2, rawValue) => parse3(rawValue), inputElement: () => import_react.default.createElement("input", null), textareaElement: () => import_react.default.createElement("textarea", null), fallback: null };
var { window: globalWindow2 } = globalThis;
var Wrapper6 = Tr.div(({ theme }) => ({ position: "relative", display: "flex", '&[aria-readonly="true"]': { opacity: 0.5 }, ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: theme.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme.color.lighter, borderColor: theme.appBorderColor } }));
var ButtonInline = Tr.button(({ theme, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : "transparent", color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer", order: primary ? "initial" : 9 }));
var ActionAddIcon = Tr(AddIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.ancillary }, "svg + &": { marginLeft: 0 } }));
var ActionSubstractIcon = Tr(SubtractIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.negative }, "svg + &": { marginLeft: 0 } }));
var Input = Tr.input(({ theme, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme.color.defaultText, background: theme.background.app, border: `1px solid ${theme.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme.color.secondary}` } }));
var RawButton = Tr(Ml)(({ theme }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme.background.bar, border: `1px solid ${theme.appBorderColor}`, borderRadius: 3, color: theme.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } }));
var RawInput = Tr(GI.Textarea)(({ theme }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } }));
var ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 };
var dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT));
};
var selectValue = (event) => {
  event.currentTarget.select();
};
var getCustomStyleFunction = (theme) => () => ({ name: { color: theme.color.secondary }, collapsed: { color: theme.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } });
var ObjectControl = ({ name: name2, value: value3, onChange, argType }) => {
  var _a;
  let theme = Mt(), data = (0, import_react.useMemo)(() => value3 && cloneDeep2(value3), [value3]), hasData = data != null, [showRaw, setShowRaw] = (0, import_react.useState)(!hasData), [parseError, setParseError] = (0, import_react.useState)(null), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), updateRaw = (0, import_react.useCallback)((raw) => {
    try {
      raw && onChange(JSON.parse(raw)), setParseError(void 0);
    } catch (e2) {
      setParseError(e2);
    }
  }, [onChange]), [forceVisible, setForceVisible] = (0, import_react.useState)(false), onForceVisible = (0, import_react.useCallback)(() => {
    onChange({}), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = (0, import_react.useRef)(null);
  if ((0, import_react.useEffect)(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), !hasData) return import_react.default.createElement(Io, { disabled: readonly, id: getControlSetterButtonId(name2), onClick: onForceVisible }, "Set object");
  let rawJSONForm = import_react.default.createElement(RawInput, { ref: htmlElRef, id: getControlId(name2), name: name2, defaultValue: value3 === null ? "" : JSON.stringify(value3, null, 2), onBlur: (event) => updateRaw(event.target.value), placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : null, readOnly: readonly }), isObjectOrArray = Array.isArray(value3) || typeof value3 == "object" && (value3 == null ? void 0 : value3.constructor) === Object;
  return import_react.default.createElement(Wrapper6, { "aria-readonly": readonly }, isObjectOrArray && import_react.default.createElement(RawButton, { onClick: (e2) => {
    e2.preventDefault(), setShowRaw((v2) => !v2);
  } }, showRaw ? import_react.default.createElement(EyeCloseIcon, null) : import_react.default.createElement(EyeIcon, null), import_react.default.createElement("span", null, "RAW")), showRaw ? rawJSONForm : import_react.default.createElement(JsonTree, { readOnly: readonly || !isObjectOrArray, isCollapsed: isObjectOrArray ? void 0 : () => true, data, rootName: name2, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme), cancelButtonElement: import_react.default.createElement(ButtonInline, { type: "button" }, "Cancel"), editButtonElement: import_react.default.createElement(ButtonInline, { type: "submit" }, "Save"), addButtonElement: import_react.default.createElement(ButtonInline, { type: "submit", primary: true }, "Save"), plusMenuElement: import_react.default.createElement(ActionAddIcon, null), minusMenuElement: import_react.default.createElement(ActionSubstractIcon, null), inputElement: (_2, __, ___, key2) => key2 ? import_react.default.createElement(Input, { onFocus: selectValue, onBlur: dispatchEnterKey }) : import_react.default.createElement(Input, null), fallback: rawJSONForm }));
};
var RangeInput = Tr.input(({ theme, min, max, value: value3, disabled }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grab", appearance: "none", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: disabled ? "not-allowed" : "grab" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme.color.secondary, boxShadow: `0 0px 5px 0px ${theme.color.secondary}` } }, "&::-moz-range-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grap", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value3 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${theme.input.background}`, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } }));
var RangeLabel = Tr.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums", "[aria-readonly=true] &": { opacity: 0.5 } });
var RangeCurrentAndMaxLabel = Tr(RangeLabel)(({ numberOFDecimalsPlaces, max }) => ({ width: `${numberOFDecimalsPlaces + max.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 }));
var RangeWrapper = Tr.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  let match = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return match ? Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0)) : 0;
}
var RangeControl = ({ name: name2, value: value3, onChange, min = 0, max = 100, step = 1, onBlur, onFocus, argType }) => {
  var _a;
  let handleChange = (event) => {
    onChange(parse2(event.target.value));
  }, hasValue = value3 !== void 0, numberOFDecimalsPlaces = (0, import_react.useMemo)(() => getNumberOfDecimalPlaces(step), [step]), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(RangeWrapper, { "aria-readonly": readonly }, import_react.default.createElement(RangeLabel, null, min), import_react.default.createElement(RangeInput, { id: getControlId(name2), type: "range", disabled: readonly, onChange: handleChange, name: name2, value: value3, min, max, step, onFocus, onBlur }), import_react.default.createElement(RangeCurrentAndMaxLabel, { numberOFDecimalsPlaces, max }, hasValue ? value3.toFixed(numberOFDecimalsPlaces) : "--", " / ", max));
};
var Wrapper7 = Tr.label({ display: "flex" });
var MaxLength = Tr.div(({ isMaxed }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: isMaxed ? "red" : void 0 }));
var TextControl = ({ name: name2, value: value3, onChange, onFocus, onBlur, maxLength, argType }) => {
  var _a;
  let handleChange = (event) => {
    onChange(event.target.value);
  }, readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), [forceVisible, setForceVisible] = (0, import_react.useState)(false), onForceVisible = (0, import_react.useCallback)(() => {
    onChange(""), setForceVisible(true);
  }, [setForceVisible]);
  if (value3 === void 0) return import_react.default.createElement(Io, { variant: "outline", size: "medium", disabled: readonly, id: getControlSetterButtonId(name2), onClick: onForceVisible }, "Set string");
  let isValid = typeof value3 == "string";
  return import_react.default.createElement(Wrapper7, null, import_react.default.createElement(GI.Textarea, { id: getControlId(name2), maxLength, onChange: handleChange, disabled: readonly, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? null : "error", name: name2, value: isValid ? value3 : "", onFocus, onBlur }), maxLength && import_react.default.createElement(MaxLength, { isMaxed: (value3 == null ? void 0 : value3.length) === maxLength }, (value3 == null ? void 0 : value3.length) ?? 0, " / ", maxLength));
};
var FileInput = Tr(GI.Input)({ padding: 10 });
function revokeOldUrls(urls) {
  urls.forEach((url) => {
    url.startsWith("blob:") && URL.revokeObjectURL(url);
  });
}
var FilesControl = ({ onChange, name: name2, accept = "image/*", value: value3, argType }) => {
  var _a;
  let inputElement = (0, import_react.useRef)(null), readonly = (_a = argType == null ? void 0 : argType.control) == null ? void 0 : _a.readOnly;
  function handleFileChange(e2) {
    if (!e2.target.files) return;
    let fileUrls = Array.from(e2.target.files).map((file) => URL.createObjectURL(file));
    onChange(fileUrls), revokeOldUrls(value3);
  }
  return (0, import_react.useEffect)(() => {
    value3 == null && inputElement.current && (inputElement.current.value = null);
  }, [value3, name2]), import_react.default.createElement(FileInput, { ref: inputElement, id: getControlId(name2), type: "file", name: name2, multiple: true, disabled: readonly, onChange: handleFileChange, accept, size: "flex" });
};
var LazyColorControl = (0, import_react.lazy)(() => import("./Color-F6OSRLHC-JMWHLG63.js"));
var ColorControl = (props) => import_react.default.createElement(import_react.Suspense, { fallback: import_react.default.createElement("div", null) }, import_react.default.createElement(LazyColorControl, { ...props }));
var Controls2 = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl };
var NoControl = () => import_react.default.createElement(import_react.default.Fragment, null, "-");
var ArgControl = ({ row, arg, updateArgs, isHovered }) => {
  var _a;
  let { key: key2, control } = row, [isFocused, setFocused] = (0, import_react.useState)(false), [boxedValue, setBoxedValue] = (0, import_react.useState)({ value: arg });
  (0, import_react.useEffect)(() => {
    isFocused || setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  let onChange = (0, import_react.useCallback)((argVal) => (setBoxedValue({ value: argVal }), updateArgs({ [key2]: argVal }), argVal), [updateArgs, key2]), onBlur = (0, import_react.useCallback)(() => setFocused(false), []), onFocus = (0, import_react.useCallback)(() => setFocused(true), []);
  if (!control || control.disable) {
    let canBeSetup = (control == null ? void 0 : control.disable) !== true && ((_a = row == null ? void 0 : row.type) == null ? void 0 : _a.name) !== "function";
    return isHovered && canBeSetup ? import_react.default.createElement(qu, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, "Setup controls") : import_react.default.createElement(NoControl, null);
  }
  let props = { name: key2, argType: row, value: boxedValue.value, onChange, onBlur, onFocus }, Control = Controls2[control.type] || NoControl;
  return import_react.default.createElement(Control, { ...props, ...control, controlType: control.type });
};
var Table = Tr.table(({ theme }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: kt({ theme }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: theme.typography.size.s1 } } }));
var ArgJsDoc = ({ tags }) => {
  let params = (tags.params || []).filter((x2) => x2.description), hasDisplayableParams = params.length !== 0, hasDisplayableDeprecated = tags.deprecated != null, hasDisplayableReturns = tags.returns != null && tags.returns.description != null;
  return !hasDisplayableParams && !hasDisplayableReturns && !hasDisplayableDeprecated ? null : import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Table, null, import_react.default.createElement("tbody", null, hasDisplayableDeprecated && import_react.default.createElement("tr", { key: "deprecated" }, import_react.default.createElement("td", { colSpan: 2 }, import_react.default.createElement("strong", null, "Deprecated"), ": ", tags.deprecated.toString())), hasDisplayableParams && params.map((x2) => import_react.default.createElement("tr", { key: x2.name }, import_react.default.createElement("td", null, import_react.default.createElement("code", null, x2.name)), import_react.default.createElement("td", null, x2.description))), hasDisplayableReturns && import_react.default.createElement("tr", { key: "returns" }, import_react.default.createElement("td", null, import_react.default.createElement("code", null, "Returns")), import_react.default.createElement("td", null, tags.returns.description)))));
};
var import_memoizerific = __toESM2(require_memoizerific());
var ITEMS_BEFORE_EXPANSION = 8;
var Summary = Tr.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 }));
var Text3 = Tr.span(kt, ({ theme, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } }));
var ExpandButton = Tr.button(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: "4px", background: "none", border: "none" }));
var Expandable = Tr.div(kt, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" }));
var Detail = Tr.div(({ theme, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } }));
var ChevronUpIcon = Tr(ChevronSmallUpIcon)({ marginLeft: 4 });
var ChevronDownIcon2 = Tr(ChevronSmallDownIcon)({ marginLeft: 4 });
var EmptyArg = () => import_react.default.createElement("span", null, "-");
var ArgText = ({ text, simple }) => import_react.default.createElement(Text3, { simple }, text);
var calculateDetailWidth = (0, import_memoizerific.default)(1e3)((detail) => {
  let lines = detail.split(/\r?\n/);
  return `${Math.max(...lines.map((x2) => x2.length))}ch`;
});
var getSummaryItems = (summary) => {
  if (!summary) return [summary];
  let summaryItems = summary.split("|").map((value3) => value3.trim());
  return uniq(summaryItems);
};
var renderSummaryItems = (summaryItems, isExpanded = true) => {
  let items = summaryItems;
  return isExpanded || (items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION)), items.map((item) => import_react.default.createElement(ArgText, { key: item, text: item === "" ? '""' : item }));
};
var ArgSummary = ({ value: value3, initialExpandedArgs }) => {
  let { summary, detail } = value3, [isOpen, setIsOpen] = (0, import_react.useState)(false), [isExpanded, setIsExpanded] = (0, import_react.useState)(initialExpandedArgs || false);
  if (summary == null) return null;
  let summaryAsString = typeof summary.toString == "function" ? summary.toString() : summary;
  if (detail == null) {
    if (/[(){}[\]<>]/.test(summaryAsString)) return import_react.default.createElement(ArgText, { text: summaryAsString });
    let summaryItems = getSummaryItems(summaryAsString), itemsCount = summaryItems.length;
    return itemsCount > ITEMS_BEFORE_EXPANSION ? import_react.default.createElement(Summary, { isExpanded }, renderSummaryItems(summaryItems, isExpanded), import_react.default.createElement(ExpandButton, { onClick: () => setIsExpanded(!isExpanded) }, isExpanded ? "Show less..." : `Show ${itemsCount - ITEMS_BEFORE_EXPANSION} more...`)) : import_react.default.createElement(Summary, null, renderSummaryItems(summaryItems));
  }
  return import_react.default.createElement(UB, { closeOnOutsideClick: true, placement: "bottom", visible: isOpen, onVisibleChange: (isVisible) => {
    setIsOpen(isVisible);
  }, tooltip: import_react.default.createElement(Detail, { width: calculateDetailWidth(detail) }, import_react.default.createElement(Dg, { language: "jsx", format: false }, detail)) }, import_react.default.createElement(Expandable, { className: "sbdocs-expandable" }, import_react.default.createElement("span", null, summaryAsString), isOpen ? import_react.default.createElement(ChevronUpIcon, null) : import_react.default.createElement(ChevronDownIcon2, null)));
};
var ArgValue = ({ value: value3, initialExpandedArgs }) => value3 == null ? import_react.default.createElement(EmptyArg, null) : import_react.default.createElement(ArgSummary, { value: value3, initialExpandedArgs });
var Name = Tr.span({ fontWeight: "bold" });
var Required = Tr.span(({ theme }) => ({ color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: "help" }));
var Description = Tr.div(({ theme }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } }, code: { ...kt({ theme }), fontSize: 12, fontFamily: theme.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } }));
var Type = Tr.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0 }));
var TypeWithJsDoc = Tr.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 }));
var StyledTd = Tr.td(({ theme, expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" }));
var toSummary = (value3) => value3 && { summary: typeof value3 == "string" ? value3 : value3.name };
var ArgRow = (props) => {
  var _a;
  let [isHovered, setIsHovered] = (0, import_react.useState)(false), { row, updateArgs, compact, expandable, initialExpandedArgs } = props, { name: name2, description } = row, table = row.table || {}, type = table.type || toSummary(row.type), defaultValue = table.defaultValue || row.defaultValue, required = (_a = row.type) == null ? void 0 : _a.required, hasDescription = description != null && description !== "";
  return import_react.default.createElement("tr", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, import_react.default.createElement(StyledTd, { expandable }, import_react.default.createElement(Name, null, name2), required ? import_react.default.createElement(Required, { title: "Required" }, "*") : null), compact ? null : import_react.default.createElement("td", null, hasDescription && import_react.default.createElement(Description, null, import_react.default.createElement(index_modern_default, null, description)), table.jsDocTags != null ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(TypeWithJsDoc, { hasDescription }, import_react.default.createElement(ArgValue, { value: type, initialExpandedArgs })), import_react.default.createElement(ArgJsDoc, { tags: table.jsDocTags })) : import_react.default.createElement(Type, { hasDescription }, import_react.default.createElement(ArgValue, { value: type, initialExpandedArgs }))), compact ? null : import_react.default.createElement("td", null, import_react.default.createElement(ArgValue, { value: defaultValue, initialExpandedArgs })), updateArgs ? import_react.default.createElement("td", null, import_react.default.createElement(ArgControl, { ...props, isHovered })) : null);
};
var Wrapper8 = Tr.div(({ inAddonPanel, theme }) => ({ height: inAddonPanel ? "100%" : "auto", display: "flex", border: inAddonPanel ? "none" : `1px solid ${theme.appBorderColor}`, borderRadius: inAddonPanel ? 0 : theme.appBorderRadius, padding: inAddonPanel ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: theme.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" }));
var Links = Tr.div(({ theme }) => ({ display: "flex", fontSize: theme.typography.size.s2 - 1, gap: 25 }));
var Divider = Tr.div(({ theme }) => ({ width: 1, height: 16, backgroundColor: theme.appBorderColor }));
var Empty = ({ inAddonPanel }) => {
  let [isLoading, setIsLoading] = (0, import_react.useState)(true);
  return (0, import_react.useEffect)(() => {
    let load = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(load);
  }, []), isLoading ? null : import_react.default.createElement(Wrapper8, { inAddonPanel }, import_react.default.createElement(z1, { title: inAddonPanel ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated", description: import_react.default.createElement(import_react.default.Fragment, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."), footer: import_react.default.createElement(Links, null, inAddonPanel && import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(qu, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: true }, import_react.default.createElement(VideoIcon, null), " Watch 5m video"), import_react.default.createElement(Divider, null), import_react.default.createElement(qu, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, import_react.default.createElement(DocumentIcon, null), " Read docs")), !inAddonPanel && import_react.default.createElement(qu, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, import_react.default.createElement(DocumentIcon, null), " Learn how to set that up")) }));
};
var ExpanderIconDown = Tr(ChevronDownIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" }));
var ExpanderIconRight = Tr(ChevronRightIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" }));
var FlexWrapper = Tr.span(({ theme }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" }));
var Section = Tr.td(({ theme }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s1 - 1, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), background: `${theme.background.app} !important`, "& ~ td": { background: `${theme.background.app} !important` } }));
var Subsection = Tr.td(({ theme }) => ({ position: "relative", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, background: theme.background.app }));
var StyledTd2 = Tr.td(() => ({ position: "relative" }));
var StyledTr = Tr.tr(({ theme }) => ({ "&:hover > td": { backgroundColor: `${curriedLighten$1(5e-3, theme.background.app)} !important`, boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } }));
var ClickIntercept = Tr.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" }));
var SectionRow = ({ level = "section", label, children, initialExpanded = true, colSpan = 3 }) => {
  let [expanded, setExpanded] = (0, import_react.useState)(initialExpanded), Level = level === "subsection" ? Subsection : Section, itemCount = (children == null ? void 0 : children.length) || 0, caption = level === "subsection" ? `${itemCount} item${itemCount !== 1 ? "s" : ""}` : "", helperText = `${expanded ? "Hide" : "Show"} ${level === "subsection" ? itemCount : label} item${itemCount !== 1 ? "s" : ""}`;
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(StyledTr, { title: helperText }, import_react.default.createElement(Level, { colSpan: 1 }, import_react.default.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: 0 }, helperText), import_react.default.createElement(FlexWrapper, null, expanded ? import_react.default.createElement(ExpanderIconDown, null) : import_react.default.createElement(ExpanderIconRight, null), label)), import_react.default.createElement(StyledTd2, { colSpan: colSpan - 1 }, import_react.default.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: -1, style: { outline: "none" } }, helperText), expanded ? null : caption)), expanded ? children : null);
};
var Row = Tr.div(({ theme }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${theme.appBorderColor}`, "&:last-child": { borderBottom: 0 } }));
var Column = Tr.div(({ numColumn }) => ({ display: "flex", flexDirection: "column", flex: numColumn || 1, gap: 5, padding: "12px 20px" }));
var SkeletonText = Tr.div(({ theme, width, height }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, width: width || "100%", height: height || 16, borderRadius: 3 }));
var columnWidth = [2, 4, 2, 2];
var Skeleton = () => import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Row, null, import_react.default.createElement(Column, { numColumn: columnWidth[0] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[1] }, import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { numColumn: columnWidth[2] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[3] }, import_react.default.createElement(SkeletonText, { width: "60%" }))), import_react.default.createElement(Row, null, import_react.default.createElement(Column, { numColumn: columnWidth[0] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[1] }, import_react.default.createElement(SkeletonText, { width: "80%" }), import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { numColumn: columnWidth[2] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[3] }, import_react.default.createElement(SkeletonText, { width: "60%" }))), import_react.default.createElement(Row, null, import_react.default.createElement(Column, { numColumn: columnWidth[0] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[1] }, import_react.default.createElement(SkeletonText, { width: "80%" }), import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { numColumn: columnWidth[2] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[3] }, import_react.default.createElement(SkeletonText, { width: "60%" }))), import_react.default.createElement(Row, null, import_react.default.createElement(Column, { numColumn: columnWidth[0] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[1] }, import_react.default.createElement(SkeletonText, { width: "80%" }), import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { numColumn: columnWidth[2] }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { numColumn: columnWidth[3] }, import_react.default.createElement(SkeletonText, { width: "60%" }))));
var TableWrapper = Tr.table(({ theme, compact, inAddonPanel }) => ({ "&&": { borderSpacing: 0, color: theme.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, tbody: { ...inAddonPanel ? null : { filter: theme.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: theme.background.content, borderTop: `1px solid ${theme.appBorderColor}` }, ...inAddonPanel ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${theme.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${theme.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${theme.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${theme.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: theme.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: theme.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: theme.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: theme.appBorderRadius } } } } }));
var StyledIconButton = Tr(Ml)(({ theme }) => ({ margin: "-4px -12px -4px 0" }));
var ControlHeadingWrapper = Tr.span({ display: "flex", justifyContent: "space-between" });
var sortFns = { alpha: (a2, b2) => a2.name.localeCompare(b2.name), requiredFirst: (a2, b2) => {
  var _a, _b;
  return +!!((_a = b2.type) == null ? void 0 : _a.required) - +!!((_b = a2.type) == null ? void 0 : _b.required) || a2.name.localeCompare(b2.name);
}, none: void 0 };
var groupRows = (rows, sort) => {
  let sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!rows) return sections;
  Object.entries(rows).forEach(([key2, row]) => {
    let { category, subcategory } = (row == null ? void 0 : row.table) || {};
    if (category) {
      let section = sections.sections[category] || { ungrouped: [], subsections: {} };
      if (!subcategory) section.ungrouped.push({ key: key2, ...row });
      else {
        let subsection = section.subsections[subcategory] || [];
        subsection.push({ key: key2, ...row }), section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      let subsection = sections.ungroupedSubsections[subcategory] || [];
      subsection.push({ key: key2, ...row }), sections.ungroupedSubsections[subcategory] = subsection;
    } else sections.ungrouped.push({ key: key2, ...row });
  });
  let sortFn = sortFns[sort], sortSubsection = (record) => sortFn ? Object.keys(record).reduce((acc, cur) => ({ ...acc, [cur]: record[cur].sort(sortFn) }), {}) : record;
  return { ungrouped: sections.ungrouped.sort(sortFn), ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce((acc, cur) => ({ ...acc, [cur]: { ungrouped: sections.sections[cur].ungrouped.sort(sortFn), subsections: sortSubsection(sections.sections[cur].subsections) } }), {}) };
};
var safeIncludeConditionalArg = (row, args2, globals) => {
  try {
    return P(row, args2, globals);
  } catch (err) {
    return import_client_logger.once.warn(err.message), false;
  }
};
var ArgsTable = (props) => {
  let { updateArgs, resetArgs, compact, inAddonPanel, initialExpandedArgs, sort = "none", isLoading } = props;
  if ("error" in props) {
    let { error } = props;
    return import_react.default.createElement(EmptyBlock, null, error, " ", import_react.default.createElement(qu, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, import_react.default.createElement(DocumentIcon, null), " Read the docs"));
  }
  if (isLoading) return import_react.default.createElement(Skeleton, null);
  let { rows, args: args2, globals } = "rows" in props && props, groups = groupRows(pickBy(rows || {}, (row) => {
    var _a;
    return !((_a = row == null ? void 0 : row.table) == null ? void 0 : _a.disable) && safeIncludeConditionalArg(row, args2 || {}, globals || {});
  }), sort), hasNoUngrouped = groups.ungrouped.length === 0, hasNoSections = Object.entries(groups.sections).length === 0, hasNoUngroupedSubsections = Object.entries(groups.ungroupedSubsections).length === 0;
  if (hasNoUngrouped && hasNoSections && hasNoUngroupedSubsections) return import_react.default.createElement(Empty, { inAddonPanel });
  let colSpan = 1;
  updateArgs && (colSpan += 1), compact || (colSpan += 2);
  let expandable = Object.keys(groups.sections).length > 0, common = { updateArgs, compact, inAddonPanel, initialExpandedArgs };
  return import_react.default.createElement(mp, null, import_react.default.createElement(TableWrapper, { compact, inAddonPanel, className: "docblock-argstable sb-unstyled" }, import_react.default.createElement("thead", { className: "docblock-argstable-head" }, import_react.default.createElement("tr", null, import_react.default.createElement("th", null, import_react.default.createElement("span", null, "Name")), compact ? null : import_react.default.createElement("th", null, import_react.default.createElement("span", null, "Description")), compact ? null : import_react.default.createElement("th", null, import_react.default.createElement("span", null, "Default")), updateArgs ? import_react.default.createElement("th", null, import_react.default.createElement(ControlHeadingWrapper, null, "Control", " ", !isLoading && resetArgs && import_react.default.createElement(StyledIconButton, { onClick: () => resetArgs(), title: "Reset controls" }, import_react.default.createElement(UndoIcon, { "aria-hidden": true })))) : null)), import_react.default.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args2 && args2[row.key], ...common })), Object.entries(groups.ungroupedSubsections).map(([subcategory, subsection]) => import_react.default.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args2 && args2[row.key], expandable, ...common })))), Object.entries(groups.sections).map(([category, section]) => import_react.default.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args2 && args2[row.key], ...common })), Object.entries(section.subsections).map(([subcategory, subsection]) => import_react.default.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args2 && args2[row.key], expandable, ...common })))))))));
};
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs);
  return entries.length === 1 ? import_react.default.createElement(ArgsTable, { ...entries[0][1], ...props }) : import_react.default.createElement(j1, null, entries.map((entry, index) => {
    let [label, table] = entry, id = `prop_table_div_${label}`, Component4 = "div", argsTableProps = index === 0 ? props : { sort: props.sort };
    return import_react.default.createElement(Component4, { key: id, id, title: label }, ({ active }) => active ? import_react.default.createElement(ArgsTable, { key: `prop_table_${label}`, ...table, ...argsTableProps }) : null);
  }));
};
var Label4 = Tr.div(({ theme }) => ({ marginRight: 30, fontSize: `${theme.typography.size.s1}px`, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
var Sample = Tr.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
var TypeSpecimen = Tr.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
var Wrapper9 = Tr.div(q, ({ theme }) => ({ ...getBlockBackgroundStyle(theme), margin: "25px 0 40px", padding: "30px 20px" }));
var Typeset = ({ fontFamily, fontSizes, fontWeight, sampleText, ...props }) => import_react.default.createElement(Wrapper9, { ...props, className: "docblock-typeset sb-unstyled" }, fontSizes.map((size) => import_react.default.createElement(TypeSpecimen, { key: size }, import_react.default.createElement(Label4, null, size), import_react.default.createElement(Sample, { style: { fontFamily, fontSize: size, fontWeight, lineHeight: 1.2 } }, sampleText || "Was he a beast if music could move him so?"))));
var ItemTitle = Tr.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold, color: theme.color.defaultText }));
var ItemSubtitle = Tr.div(({ theme }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.2, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
var ItemDescription = Tr.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
var SwatchLabel = Tr.div(({ theme }) => ({ flex: 1, textAlign: "center", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
var SwatchLabels = Tr.div({ display: "flex", flexDirection: "row" });
var Swatch = Tr.div(({ background }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background, content: '""' } }));
var SwatchColors = Tr.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
var SwatchSpecimen = Tr.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
var Swatches = Tr.div({ flex: 1, display: "flex", flexDirection: "row" });
var Item = Tr.div({ display: "flex", alignItems: "flex-start" });
var ListName = Tr.div({ flex: "0 0 30%" });
var ListSwatches = Tr.div({ flex: 1 });
var ListHeading = Tr.div(({ theme }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme.typography.weight.bold, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
var List = Tr.div(({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
function renderSwatch(color, index) {
  return import_react.default.createElement(Swatch, { key: `${color}-${index}`, title: color, background: color });
}
function renderSwatchLabel(color, index, colorDescription) {
  return import_react.default.createElement(SwatchLabel, { key: `${color}-${index}`, title: color }, import_react.default.createElement("div", null, color, colorDescription && import_react.default.createElement("span", null, colorDescription)));
}
function renderSwatchSpecimen(colors) {
  if (Array.isArray(colors)) return import_react.default.createElement(SwatchSpecimen, null, import_react.default.createElement(SwatchColors, null, colors.map((color, index) => renderSwatch(color, index))), import_react.default.createElement(SwatchLabels, null, colors.map((color, index) => renderSwatchLabel(color, index))));
  let swatchElements = [], labelElements = [];
  for (let colorKey in colors) {
    let colorValue = colors[colorKey];
    swatchElements.push(renderSwatch(colorValue, swatchElements.length)), labelElements.push(renderSwatchLabel(colorKey, labelElements.length, colorValue));
  }
  return import_react.default.createElement(SwatchSpecimen, null, import_react.default.createElement(SwatchColors, null, swatchElements), import_react.default.createElement(SwatchLabels, null, labelElements));
}
var ColorItem = ({ title, subtitle, colors }) => import_react.default.createElement(Item, null, import_react.default.createElement(ItemDescription, null, import_react.default.createElement(ItemTitle, null, title), import_react.default.createElement(ItemSubtitle, null, subtitle)), import_react.default.createElement(Swatches, null, renderSwatchSpecimen(colors)));
var ColorPalette = ({ children, ...props }) => import_react.default.createElement(mp, null, import_react.default.createElement(List, { ...props, className: "docblock-colorpalette sb-unstyled" }, import_react.default.createElement(ListHeading, null, import_react.default.createElement(ListName, null, "Name"), import_react.default.createElement(ListSwatches, null, "Swatches")), children));
var ItemLabel = Tr.div(({ theme }) => ({ fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, color: theme.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
var ItemSpecimen = Tr.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
var Item2 = Tr.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
var List2 = Tr.div({ display: "flex", flexFlow: "row wrap" });
var IconItem = ({ name: name2, children }) => import_react.default.createElement(Item2, null, import_react.default.createElement(ItemSpecimen, null, children), import_react.default.createElement(ItemLabel, null, name2));
var IconGallery = ({ children, ...props }) => import_react.default.createElement(mp, null, import_react.default.createElement(List2, { ...props, className: "docblock-icongallery sb-unstyled" }, children));
var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`;
var Anchor = ({ storyId, children }) => import_react.default.createElement("div", { id: anchorBlockIdFromId(storyId), className: "sb-anchor" }, children);
globalThis && globalThis.__DOCS_CONTEXT__ === void 0 && (globalThis.__DOCS_CONTEXT__ = (0, import_react.createContext)(null), globalThis.__DOCS_CONTEXT__.displayName = "DocsContext");
var DocsContext = globalThis ? globalThis.__DOCS_CONTEXT__ : (0, import_react.createContext)(null);
var useOf = (moduleExportOrType, validTypes) => (0, import_react.useContext)(DocsContext).resolveOf(moduleExportOrType, validTypes);
var titleCase = (str) => str.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
var getComponentName = (component) => {
  if (component) return typeof component == "string" ? component.includes("-") ? titleCase(component) : component : component.__docgenInfo && component.__docgenInfo.displayName ? component.__docgenInfo.displayName : component.name;
};
function scrollToElement(element, block = "start") {
  element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
}
function extractComponentArgTypes(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
function getArgTypesFromResolved(resolved) {
  if (resolved.type === "component") {
    let { component: component2, projectAnnotations: { parameters: parameters2 } } = resolved;
    return { argTypes: extractComponentArgTypes(component2, parameters2), parameters: parameters2, component: component2 };
  }
  if (resolved.type === "meta") {
    let { preparedMeta: { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 } } = resolved;
    return { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 };
  }
  let { story: { argTypes, parameters, component, subcomponents } } = resolved;
  return { argTypes, parameters, component, subcomponents };
}
var ArgTypes = (props) => {
  var _a;
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolved = useOf(of || "meta"), { argTypes, parameters, component, subcomponents } = getArgTypesFromResolved(resolved), argTypesParameters = ((_a = parameters.docs) == null ? void 0 : _a.argTypes) || {}, include = props.include ?? argTypesParameters.include, exclude = props.exclude ?? argTypesParameters.exclude, sort = props.sort ?? argTypesParameters.sort, filteredArgTypes = (0, import_preview_api.filterArgTypes)(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents).length > 0)) return import_react.default.createElement(ArgsTable, { rows: filteredArgTypes, sort });
  let mainComponentName = getComponentName(component), subcomponentTabs = Object.fromEntries(Object.entries(subcomponents).map(([key2, comp]) => [key2, { rows: (0, import_preview_api.filterArgTypes)(extractComponentArgTypes(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return import_react.default.createElement(TabbedArgsTable, { tabs, sort });
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS22 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key2 of __getOwnPropNames(from)) !__hasOwnProp.call(to, key2) && key2 !== except && __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  return to;
};
var __toESM22 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var eventProperties = ["bubbles", "cancelBubble", "cancelable", "composed", "currentTarget", "defaultPrevented", "eventPhase", "isTrusted", "returnValue", "srcElement", "target", "timeStamp", "type"];
var customEventSpecificProperties = ["detail"];
function extractEventHiddenProperties(event) {
  let rebuildEvent = eventProperties.filter((value3) => event[value3] !== void 0).reduce((acc, value3) => ({ ...acc, [value3]: event[value3] }), {});
  return event instanceof CustomEvent && customEventSpecificProperties.filter((value3) => event[value3] !== void 0).forEach((value3) => {
    rebuildEvent[value3] = event[value3];
  }), rebuildEvent;
}
var import_memoizerific2 = __toESM2(require_memoizerific(), 1);
var require_shams = __commonJS22({ "node_modules/has-symbols/shams.js"(exports, module) {
  module.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
    if (typeof Symbol.iterator == "symbol") return true;
    var obj = {}, sym = Symbol("test"), symObj = Object(sym);
    if (typeof sym == "string" || Object.prototype.toString.call(sym) !== "[object Symbol]" || Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) return false;
    if (typeof Object.keys == "function" && Object.keys(obj).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym || !Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
  };
} });
var require_has_symbols = __commonJS22({ "node_modules/has-symbols/index.js"(exports, module) {
  var origSymbol = typeof Symbol < "u" && Symbol, hasSymbolSham = require_shams();
  module.exports = function() {
    return typeof origSymbol != "function" || typeof Symbol != "function" || typeof origSymbol("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : hasSymbolSham();
  };
} });
var require_implementation = __commonJS22({ "node_modules/function-bind/implementation.js"(exports, module) {
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ", slice = Array.prototype.slice, toStr = Object.prototype.toString, funcType = "[object Function]";
  module.exports = function(that) {
    var target = this;
    if (typeof target != "function" || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    for (var args2 = slice.call(arguments, 1), bound, binder = function() {
      if (this instanceof bound) {
        var result2 = target.apply(this, args2.concat(slice.call(arguments)));
        return Object(result2) === result2 ? result2 : this;
      } else return target.apply(that, args2.concat(slice.call(arguments)));
    }, boundLength = Math.max(0, target.length - args2.length), boundArgs = [], i2 = 0; i2 < boundLength; i2++) boundArgs.push("$" + i2);
    if (bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder), target.prototype) {
      var Empty2 = function() {
      };
      Empty2.prototype = target.prototype, bound.prototype = new Empty2(), Empty2.prototype = null;
    }
    return bound;
  };
} });
var require_function_bind = __commonJS22({ "node_modules/function-bind/index.js"(exports, module) {
  var implementation = require_implementation();
  module.exports = Function.prototype.bind || implementation;
} });
var require_src = __commonJS22({ "node_modules/has/src/index.js"(exports, module) {
  var bind = require_function_bind();
  module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
} });
var require_get_intrinsic = __commonJS22({ "node_modules/get-intrinsic/index.js"(exports, module) {
  var undefined2, $SyntaxError = SyntaxError, $Function = Function, $TypeError = TypeError, getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch {
    }
  }, $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) try {
    $gOPD({}, "");
  } catch {
    $gOPD = null;
  }
  var throwTypeError = function() {
    throw new $TypeError();
  }, ThrowTypeError = $gOPD ? function() {
    try {
      return arguments.callee, throwTypeError;
    } catch {
      try {
        return $gOPD(arguments, "callee").get;
      } catch {
        return throwTypeError;
      }
    }
  }() : throwTypeError, hasSymbols = require_has_symbols()(), getProto = Object.getPrototypeOf || function(x2) {
    return x2.__proto__;
  }, needsEval = {}, TypedArray = typeof Uint8Array > "u" ? undefined2 : getProto(Uint8Array), INTRINSICS = { "%AggregateError%": typeof AggregateError > "u" ? undefined2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? undefined2 : ArrayBuffer, "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2, "%AsyncFromSyncIteratorPrototype%": undefined2, "%AsyncFunction%": needsEval, "%AsyncGenerator%": needsEval, "%AsyncGeneratorFunction%": needsEval, "%AsyncIteratorPrototype%": needsEval, "%Atomics%": typeof Atomics > "u" ? undefined2 : Atomics, "%BigInt%": typeof BigInt > "u" ? undefined2 : BigInt, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? undefined2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? undefined2 : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? undefined2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? undefined2 : FinalizationRegistry, "%Function%": $Function, "%GeneratorFunction%": needsEval, "%Int8Array%": typeof Int8Array > "u" ? undefined2 : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? undefined2 : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? undefined2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2, "%JSON%": typeof JSON == "object" ? JSON : undefined2, "%Map%": typeof Map > "u" ? undefined2 : Map, "%MapIteratorPrototype%": typeof Map > "u" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? undefined2 : Promise, "%Proxy%": typeof Proxy > "u" ? undefined2 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? undefined2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? undefined2 : Set, "%SetIteratorPrototype%": typeof Set > "u" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? undefined2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2, "%Symbol%": hasSymbols ? Symbol : undefined2, "%SyntaxError%": $SyntaxError, "%ThrowTypeError%": ThrowTypeError, "%TypedArray%": TypedArray, "%TypeError%": $TypeError, "%Uint8Array%": typeof Uint8Array > "u" ? undefined2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? undefined2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? undefined2 : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? undefined2 : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? undefined2 : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? undefined2 : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? undefined2 : WeakSet }, doEval = function doEval2(name2) {
    var value22;
    if (name2 === "%AsyncFunction%") value22 = getEvalledConstructor("async function () {}");
    else if (name2 === "%GeneratorFunction%") value22 = getEvalledConstructor("function* () {}");
    else if (name2 === "%AsyncGeneratorFunction%") value22 = getEvalledConstructor("async function* () {}");
    else if (name2 === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      fn && (value22 = fn.prototype);
    } else if (name2 === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      gen && (value22 = getProto(gen.prototype));
    }
    return INTRINSICS[name2] = value22, value22;
  }, LEGACY_ALIASES = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, bind = require_function_bind(), hasOwn = require_src(), $concat = bind.call(Function.call, Array.prototype.concat), $spliceApply = bind.call(Function.apply, Array.prototype.splice), $replace = bind.call(Function.call, String.prototype.replace), $strSlice = bind.call(Function.call, String.prototype.slice), $exec = bind.call(Function.call, RegExp.prototype.exec), rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, reEscapeChar2 = /\\(\\)?/g, stringToPath2 = function(string) {
    var first = $strSlice(string, 0, 1), last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result2 = [];
    return $replace(string, rePropName2, function(match, number, quote, subString) {
      result2[result2.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
    }), result2;
  }, getBaseIntrinsic = function(name2, allowMissing) {
    var intrinsicName = name2, alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName) && (alias = LEGACY_ALIASES[intrinsicName], intrinsicName = "%" + alias[0] + "%"), hasOwn(INTRINSICS, intrinsicName)) {
      var value22 = INTRINSICS[intrinsicName];
      if (value22 === needsEval && (value22 = doEval(intrinsicName)), typeof value22 > "u" && !allowMissing) throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
      return { alias, name: intrinsicName, value: value22 };
    }
    throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
  };
  module.exports = function(name2, allowMissing) {
    if (typeof name2 != "string" || name2.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing != "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name2) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath2(name2), intrinsicBaseName = parts.length > 0 ? parts[0] : "", intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing), intrinsicRealName = intrinsic.name, value22 = intrinsic.value, skipFurtherCaching = false, alias = intrinsic.alias;
    alias && (intrinsicBaseName = alias[0], $spliceApply(parts, $concat([0, 1], alias)));
    for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
      var part = parts[i2], first = $strSlice(part, 0, 1), last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
      if ((part === "constructor" || !isOwn) && (skipFurtherCaching = true), intrinsicBaseName += "." + part, intrinsicRealName = "%" + intrinsicBaseName + "%", hasOwn(INTRINSICS, intrinsicRealName)) value22 = INTRINSICS[intrinsicRealName];
      else if (value22 != null) {
        if (!(part in value22)) {
          if (!allowMissing) throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
          return;
        }
        if ($gOPD && i2 + 1 >= parts.length) {
          var desc = $gOPD(value22, part);
          isOwn = !!desc, isOwn && "get" in desc && !("originalValue" in desc.get) ? value22 = desc.get : value22 = value22[part];
        } else isOwn = hasOwn(value22, part), value22 = value22[part];
        isOwn && !skipFurtherCaching && (INTRINSICS[intrinsicRealName] = value22);
      }
    }
    return value22;
  };
} });
var require_call_bind = __commonJS22({ "node_modules/call-bind/index.js"(exports, module) {
  var bind = require_function_bind(), GetIntrinsic = require_get_intrinsic(), $apply = GetIntrinsic("%Function.prototype.apply%"), $call = GetIntrinsic("%Function.prototype.call%"), $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply), $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true), $defineProperty = GetIntrinsic("%Object.defineProperty%", true), $max = GetIntrinsic("%Math.max%");
  if ($defineProperty) try {
    $defineProperty({}, "a", { value: 1 });
  } catch {
    $defineProperty = null;
  }
  module.exports = function(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
      var desc = $gOPD(func, "length");
      desc.configurable && $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
    }
    return func;
  };
  var applyBind = function() {
    return $reflectApply(bind, $apply, arguments);
  };
  $defineProperty ? $defineProperty(module.exports, "apply", { value: applyBind }) : module.exports.apply = applyBind;
} });
var require_callBound = __commonJS22({ "node_modules/call-bind/callBound.js"(exports, module) {
  var GetIntrinsic = require_get_intrinsic(), callBind = require_call_bind(), $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
  module.exports = function(name2, allowMissing) {
    var intrinsic = GetIntrinsic(name2, !!allowMissing);
    return typeof intrinsic == "function" && $indexOf(name2, ".prototype.") > -1 ? callBind(intrinsic) : intrinsic;
  };
} });
var require_shams2 = __commonJS22({ "node_modules/has-tostringtag/shams.js"(exports, module) {
  var hasSymbols = require_shams();
  module.exports = function() {
    return hasSymbols() && !!Symbol.toStringTag;
  };
} });
var require_is_regex = __commonJS22({ "node_modules/is-regex/index.js"(exports, module) {
  var callBound = require_callBound(), hasToStringTag = require_shams2()(), has, $exec, isRegexMarker, badStringifier;
  hasToStringTag && (has = callBound("Object.prototype.hasOwnProperty"), $exec = callBound("RegExp.prototype.exec"), isRegexMarker = {}, throwRegexMarker = function() {
    throw isRegexMarker;
  }, badStringifier = { toString: throwRegexMarker, valueOf: throwRegexMarker }, typeof Symbol.toPrimitive == "symbol" && (badStringifier[Symbol.toPrimitive] = throwRegexMarker));
  var throwRegexMarker, $toString = callBound("Object.prototype.toString"), gOPD = Object.getOwnPropertyDescriptor, regexClass = "[object RegExp]";
  module.exports = hasToStringTag ? function(value22) {
    if (!value22 || typeof value22 != "object") return false;
    var descriptor = gOPD(value22, "lastIndex"), hasLastIndexDataProperty = descriptor && has(descriptor, "value");
    if (!hasLastIndexDataProperty) return false;
    try {
      $exec(value22, badStringifier);
    } catch (e2) {
      return e2 === isRegexMarker;
    }
  } : function(value22) {
    return !value22 || typeof value22 != "object" && typeof value22 != "function" ? false : $toString(value22) === regexClass;
  };
} });
var require_is_function = __commonJS22({ "node_modules/is-function/index.js"(exports, module) {
  module.exports = isFunction3;
  var toString2 = Object.prototype.toString;
  function isFunction3(fn) {
    if (!fn) return false;
    var string = toString2.call(fn);
    return string === "[object Function]" || typeof fn == "function" && string !== "[object RegExp]" || typeof window < "u" && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
  }
} });
var require_is_symbol = __commonJS22({ "node_modules/is-symbol/index.js"(exports, module) {
  var toStr = Object.prototype.toString, hasSymbols = require_has_symbols()();
  hasSymbols ? (symToStr = Symbol.prototype.toString, symStringRegex = /^Symbol\(.*\)$/, isSymbolObject = function(value22) {
    return typeof value22.valueOf() != "symbol" ? false : symStringRegex.test(symToStr.call(value22));
  }, module.exports = function(value22) {
    if (typeof value22 == "symbol") return true;
    if (toStr.call(value22) !== "[object Symbol]") return false;
    try {
      return isSymbolObject(value22);
    } catch {
      return false;
    }
  }) : module.exports = function(value22) {
    return false;
  };
  var symToStr, symStringRegex, isSymbolObject;
} });
var import_is_regex = __toESM22(require_is_regex());
var import_is_function = __toESM22(require_is_function());
var import_is_symbol = __toESM22(require_is_symbol());
function isObject(val) {
  return val != null && typeof val == "object" && Array.isArray(val) === false;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root2;
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value22) {
  var isOwn = hasOwnProperty.call(value22, symToStringTag), tag = value22[symToStringTag];
  try {
    value22[symToStringTag] = void 0;
    var unmasked = true;
  } catch {
  }
  var result2 = nativeObjectToString.call(value22);
  return unmasked && (isOwn ? value22[symToStringTag] = tag : delete value22[symToStringTag]), result2;
}
var getRawTag_default = getRawTag;
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value22) {
  return nativeObjectToString2.call(value22);
}
var objectToString_default = objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value22) {
  return value22 == null ? value22 === void 0 ? undefinedTag : nullTag : symToStringTag2 && symToStringTag2 in Object(value22) ? getRawTag_default(value22) : objectToString_default(value22);
}
var baseGetTag_default = baseGetTag;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
function isObject2(value22) {
  var type = typeof value22;
  return value22 != null && (type == "object" || type == "function");
}
var isObject_default = isObject2;
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value22) {
  if (!isObject_default(value22)) return false;
  var tag = baseGetTag_default(value22);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch {
    }
    try {
      return func + "";
    } catch {
    }
  }
  return "";
}
var toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value22) {
  if (!isObject_default(value22) || isMasked_default(value22)) return false;
  var pattern = isFunction_default(value22) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value22));
}
var baseIsNative_default = baseIsNative;
function getValue(object2, key2) {
  return object2 == null ? void 0 : object2[key2];
}
var getValue_default = getValue;
function getNative(object2, key2) {
  var value22 = getValue_default(object2, key2);
  return baseIsNative_default(value22) ? value22 : void 0;
}
var getNative_default = getNative;
function eq(value22, other) {
  return value22 === other || value22 !== value22 && other !== other;
}
var eq_default = eq;
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {}, this.size = 0;
}
var hashClear_default = hashClear;
function hashDelete(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2];
  return this.size -= result2 ? 1 : 0, result2;
}
var hashDelete_default = hashDelete;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result2 = data[key2];
    return result2 === HASH_UNDEFINED ? void 0 : result2;
  }
  return hasOwnProperty3.call(data, key2) ? data[key2] : void 0;
}
var hashGet_default = hashGet;
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate_default ? data[key2] !== void 0 : hasOwnProperty4.call(data, key2);
}
var hashHas_default = hashHas;
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key2, value22) {
  var data = this.__data__;
  return this.size += this.has(key2) ? 0 : 1, data[key2] = nativeCreate_default && value22 === void 0 ? HASH_UNDEFINED2 : value22, this;
}
var hashSet_default = hashSet;
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index < length; ) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype.delete = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
  this.__data__ = [], this.size = 0;
}
var listCacheClear_default = listCacheClear;
function assocIndexOf(array2, key2) {
  for (var length = array2.length; length--; ) if (eq_default(array2[length][0], key2)) return length;
  return -1;
}
var assocIndexOf_default = assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  if (index < 0) return false;
  var lastIndex = data.length - 1;
  return index == lastIndex ? data.pop() : splice.call(data, index, 1), --this.size, true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key2) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key2) {
  return assocIndexOf_default(this.__data__, key2) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key2, value22) {
  var data = this.__data__, index = assocIndexOf_default(data, key2);
  return index < 0 ? (++this.size, data.push([key2, value22])) : data[index][1] = value22, this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index < length; ) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype.delete = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;
function mapCacheClear() {
  this.size = 0, this.__data__ = { hash: new Hash_default(), map: new (Map_default || ListCache_default)(), string: new Hash_default() };
}
var mapCacheClear_default = mapCacheClear;
function isKeyable(value22) {
  var type = typeof value22;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value22 !== "__proto__" : value22 === null;
}
var isKeyable_default = isKeyable;
function getMapData(map, key2) {
  var data = map.__data__;
  return isKeyable_default(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
function mapCacheDelete(key2) {
  var result2 = getMapData_default(this, key2).delete(key2);
  return this.size -= result2 ? 1 : 0, result2;
}
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key2) {
  return getMapData_default(this, key2).get(key2);
}
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(key2) {
  return getMapData_default(this, key2).has(key2);
}
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(key2, value22) {
  var data = getMapData_default(this, key2), size = data.size;
  return data.set(key2, value22), this.size += data.size == size ? 0 : 1, this;
}
var mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index < length; ) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype.delete = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize3(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
  var memoized = function() {
    var args2 = arguments, key2 = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
    if (cache.has(key2)) return cache.get(key2);
    var result2 = func.apply(this, args2);
    return memoized.cache = cache.set(key2, result2) || cache, result2;
  };
  return memoized.cache = new (memoize3.Cache || MapCache_default)(), memoized;
}
memoize3.Cache = MapCache_default;
var memoize_default = memoize3;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize_default(func, function(key2) {
    return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key2;
  }), cache = result2.cache;
  return result2;
}
var memoizeCapped_default = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
memoizeCapped_default(function(string) {
  var result2 = [];
  return string.charCodeAt(0) === 46 && result2.push(""), string.replace(rePropName, function(match, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  }), result2;
});
var isObject3 = isObject;
var removeCodeComments = (code) => {
  let inQuoteChar = null, inBlockComment = false, inLineComment = false, inRegexLiteral = false, newCode = "";
  if (code.indexOf("//") >= 0 || code.indexOf("/*") >= 0) for (let i2 = 0; i2 < code.length; i2 += 1) !inQuoteChar && !inBlockComment && !inLineComment && !inRegexLiteral ? code[i2] === '"' || code[i2] === "'" || code[i2] === "`" ? inQuoteChar = code[i2] : code[i2] === "/" && code[i2 + 1] === "*" ? inBlockComment = true : code[i2] === "/" && code[i2 + 1] === "/" ? inLineComment = true : code[i2] === "/" && code[i2 + 1] !== "/" && (inRegexLiteral = true) : (inQuoteChar && (code[i2] === inQuoteChar && code[i2 - 1] !== "\\" || code[i2] === `
` && inQuoteChar !== "`") && (inQuoteChar = null), inRegexLiteral && (code[i2] === "/" && code[i2 - 1] !== "\\" || code[i2] === `
`) && (inRegexLiteral = false), inBlockComment && code[i2 - 1] === "/" && code[i2 - 2] === "*" && (inBlockComment = false), inLineComment && code[i2] === `
` && (inLineComment = false)), !inBlockComment && !inLineComment && (newCode += code[i2]);
  else newCode = code;
  return newCode;
};
var cleanCode = (0, import_memoizerific2.default)(1e4)((code) => removeCodeComments(code).replace(/\n\s*/g, "").trim());
var convertShorthandMethods = function(key2, stringified) {
  let fnHead = stringified.slice(0, stringified.indexOf("{")), fnBody = stringified.slice(stringified.indexOf("{"));
  if (fnHead.includes("=>") || fnHead.includes("function")) return stringified;
  let modifiedHead = fnHead;
  return modifiedHead = modifiedHead.replace(key2, "function"), modifiedHead + fnBody;
};
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function convertUnconventionalData(data) {
  if (!isObject3(data)) return data;
  let result2 = data, wasMutated = false;
  return typeof Event < "u" && data instanceof Event && (result2 = extractEventHiddenProperties(result2), wasMutated = true), result2 = Object.keys(result2).reduce((acc, key2) => {
    try {
      result2[key2] && result2[key2].toJSON, acc[key2] = result2[key2];
    } catch {
      wasMutated = true;
    }
    return acc;
  }, {}), wasMutated ? result2 : data;
}
var replacer = function(options2) {
  let objects, map, stack, keys;
  return function(key2, value22) {
    try {
      if (key2 === "") return keys = [], objects = /* @__PURE__ */ new Map([[value22, "[]"]]), map = /* @__PURE__ */ new Map(), stack = [], value22;
      let origin = map.get(this) || this;
      for (; stack.length && origin !== stack[0]; ) stack.shift(), keys.pop();
      if (typeof value22 == "boolean") return value22;
      if (value22 === void 0) return options2.allowUndefined ? "_undefined_" : void 0;
      if (value22 === null) return null;
      if (typeof value22 == "number") return value22 === -1 / 0 ? "_-Infinity_" : value22 === 1 / 0 ? "_Infinity_" : Number.isNaN(value22) ? "_NaN_" : value22;
      if (typeof value22 == "bigint") return `_bigint_${value22.toString()}`;
      if (typeof value22 == "string") return dateFormat.test(value22) ? options2.allowDate ? `_date_${value22}` : void 0 : value22;
      if ((0, import_is_regex.default)(value22)) return options2.allowRegExp ? `_regexp_${value22.flags}|${value22.source}` : void 0;
      if ((0, import_is_function.default)(value22)) {
        if (!options2.allowFunction) return;
        let { name: name2 } = value22, stringified = value22.toString();
        return stringified.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/) ? `_function_${name2}|${(() => {
        }).toString()}` : `_function_${name2}|${cleanCode(convertShorthandMethods(key2, stringified))}`;
      }
      if ((0, import_is_symbol.default)(value22)) {
        if (!options2.allowSymbol) return;
        let globalRegistryKey = Symbol.keyFor(value22);
        return globalRegistryKey !== void 0 ? `_gsymbol_${globalRegistryKey}` : `_symbol_${value22.toString().slice(7, -1)}`;
      }
      if (stack.length >= options2.maxDepth) return Array.isArray(value22) ? `[Array(${value22.length})]` : "[Object]";
      if (value22 === this) return `_duplicate_${JSON.stringify(keys)}`;
      if (value22 instanceof Error && options2.allowError) return { __isConvertedError__: true, errorProperties: { ...value22.cause ? { cause: value22.cause } : {}, ...value22, name: value22.name, message: value22.message, stack: value22.stack, "_constructor-name_": value22.constructor.name } };
      if (value22.constructor && value22.constructor.name && value22.constructor.name !== "Object" && !Array.isArray(value22) && !options2.allowClass) return;
      let found = objects.get(value22);
      if (!found) {
        let converted = Array.isArray(value22) ? value22 : convertUnconventionalData(value22);
        if (value22.constructor && value22.constructor.name && value22.constructor.name !== "Object" && !Array.isArray(value22) && options2.allowClass) try {
          Object.assign(converted, { "_constructor-name_": value22.constructor.name });
        } catch {
        }
        return keys.push(key2), stack.unshift(converted), objects.set(value22, JSON.stringify(keys)), value22 !== converted && map.set(value22, converted), converted;
      }
      return `_duplicate_${found}`;
    } catch {
      return;
    }
  };
};
var defaultOptions = { maxDepth: 10, space: void 0, allowFunction: true, allowRegExp: true, allowDate: true, allowClass: true, allowError: true, allowUndefined: true, allowSymbol: true, lazyEval: true };
var stringify = (data, options2 = {}) => {
  let mergedOptions = { ...defaultOptions, ...options2 };
  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options2.space);
};
function argsHash(args2) {
  return stringify(args2, { allowFunction: false });
}
var SourceContext = (0, import_react.createContext)({ sources: {} });
var UNKNOWN_ARGS_HASH = "--unknown--";
var SourceContainer = ({ children, channel }) => {
  let [sources, setSources] = (0, import_react.useState)({});
  return (0, import_react.useEffect)(() => {
    let handleSnippetRendered = (idOrEvent, inputSource = null, inputFormat = false) => {
      let { id, args: args2 = void 0, source: source2, format: format3 } = typeof idOrEvent == "string" ? { id: idOrEvent, source: inputSource, format: inputFormat } : idOrEvent, hash = args2 ? argsHash(args2) : UNKNOWN_ARGS_HASH;
      setSources((current) => ({ ...current, [id]: { ...current[id], [hash]: { code: source2, format: format3 } } }));
    };
    return channel.on(yn, handleSnippetRendered), () => channel.off(yn, handleSnippetRendered);
  }, []), import_react.default.createElement(SourceContext.Provider, { value: { sources } }, children);
};
var getStorySource = (storyId, args2, sourceContext) => {
  let { sources } = sourceContext, sourceMap = sources == null ? void 0 : sources[storyId];
  return (sourceMap == null ? void 0 : sourceMap[argsHash(args2)]) || (sourceMap == null ? void 0 : sourceMap[UNKNOWN_ARGS_HASH]) || { code: "" };
};
var getSnippet = ({ snippet, storyContext, typeFromProps, transformFromProps }) => {
  var _a, _b;
  let { __isArgsStory: isArgsStory } = storyContext.parameters, sourceParameters = ((_a = storyContext.parameters.docs) == null ? void 0 : _a.source) || {}, type = typeFromProps || sourceParameters.type || gt.AUTO;
  if (sourceParameters.code !== void 0) return sourceParameters.code;
  let code = type === gt.DYNAMIC || type === gt.AUTO && snippet && isArgsStory ? snippet : sourceParameters.originalSource || "";
  return ((_b = transformFromProps ?? sourceParameters.transform) == null ? void 0 : _b(code, storyContext)) || code;
};
var useSourceProps = (props, docsContext, sourceContext) => {
  var _a, _b, _c, _d;
  let story, { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (of) story = docsContext.resolveOf(of, ["story"]).story;
  else try {
    story = docsContext.storyById();
  } catch {
  }
  let sourceParameters = ((_b = (_a = story == null ? void 0 : story.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.source) || {}, { code } = props, format3 = props.format ?? sourceParameters.format, language = props.language ?? sourceParameters.language ?? "jsx", dark = props.dark ?? sourceParameters.dark ?? false;
  if (!code && !story) return { error: "Oh no! The source is not available." };
  if (code) return { code, format: format3, language, dark };
  let storyContext = docsContext.getStoryContext(story), argsForSource = props.__forceInitialArgs ? storyContext.initialArgs : storyContext.unmappedArgs, source2 = getStorySource(story.id, argsForSource, sourceContext);
  return format3 = source2.format ?? ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.source) == null ? void 0 : _d.format) ?? false, { code: getSnippet({ snippet: source2.code, storyContext: { ...storyContext, args: argsForSource }, typeFromProps: props.type, transformFromProps: props.transform }), format: format3, language, dark };
};
var Source2 = (props) => {
  let sourceContext = (0, import_react.useContext)(SourceContext), docsContext = (0, import_react.useContext)(DocsContext), sourceProps = useSourceProps(props, docsContext, sourceContext);
  return import_react.default.createElement(Source, { ...sourceProps });
};
function useStory(storyId, context) {
  let stories = useStories([storyId], context);
  return stories && stories[0];
}
function useStories(storyIds, context) {
  let [storiesById, setStories] = (0, import_react.useState)({});
  return (0, import_react.useEffect)(() => {
    Promise.all(storyIds.map(async (storyId) => {
      let story = await context.loadStory(storyId);
      setStories((current) => current[storyId] === story ? current : { ...current, [storyId]: story });
    }));
  }), storyIds.map((storyId) => {
    if (storiesById[storyId]) return storiesById[storyId];
    try {
      return context.storyById(storyId);
    } catch {
      return null;
    }
  });
}
var getStoryId2 = (props, context) => {
  let { of, meta } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  return meta && context.referenceMeta(meta, false), context.resolveOf(of || "story", ["story"]).story.id;
};
var getStoryProps = (props, story, context) => {
  let { parameters = {} } = story || {}, { docs = {} } = parameters, storyParameters = docs.story || {};
  if (docs.disable) return null;
  if (props.inline ?? storyParameters.inline ?? false) {
    let height2 = props.height ?? storyParameters.height, autoplay = props.autoplay ?? storyParameters.autoplay ?? false;
    return { story, inline: true, height: height2, autoplay, forceInitialArgs: !!props.__forceInitialArgs, primary: !!props.__primary, renderStoryToElement: context.renderStoryToElement };
  }
  let height = props.height ?? storyParameters.height ?? storyParameters.iframeHeight ?? "100px";
  return { story, inline: false, height, primary: !!props.__primary };
};
var Story2 = (props = { __forceInitialArgs: false, __primary: false }) => {
  let context = (0, import_react.useContext)(DocsContext), storyId = getStoryId2(props, context), story = useStory(storyId, context);
  if (!story) return import_react.default.createElement(StorySkeleton, null);
  let storyProps = getStoryProps(props, story, context);
  return storyProps ? import_react.default.createElement(Story, { ...storyProps }) : null;
};
var Canvas = (props) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
  let docsContext = (0, import_react.useContext)(DocsContext), sourceContext = (0, import_react.useContext)(SourceContext), { of, source: source2 } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { story } = useOf(of || "story", ["story"]), sourceProps = useSourceProps({ ...source2, ...of && { of } }, docsContext, sourceContext), layout = props.layout ?? story.parameters.layout ?? ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null ? void 0 : _b.layout) ?? "padded", withToolbar = props.withToolbar ?? ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.canvas) == null ? void 0 : _d.withToolbar) ?? false, additionalActions = props.additionalActions ?? ((_f = (_e2 = story.parameters.docs) == null ? void 0 : _e2.canvas) == null ? void 0 : _f.additionalActions), sourceState = props.sourceState ?? ((_h = (_g = story.parameters.docs) == null ? void 0 : _g.canvas) == null ? void 0 : _h.sourceState) ?? "hidden", className = props.className ?? ((_j = (_i = story.parameters.docs) == null ? void 0 : _i.canvas) == null ? void 0 : _j.className);
  return import_react.default.createElement(Preview, { withSource: sourceState === "none" ? void 0 : sourceProps, isExpanded: sourceState === "shown", withToolbar, additionalActions, className, layout }, import_react.default.createElement(Story2, { of: of || story.moduleExport, meta: props.meta, ...props.story }));
};
var useArgs = (story, context) => {
  let result2 = useArgsIfDefined(story, context);
  if (!result2) throw new Error("No result when story was defined");
  return result2;
};
var useArgsIfDefined = (story, context) => {
  let storyContext = story ? context.getStoryContext(story) : { args: {} }, { id: storyId } = story || { id: "none" }, [args2, setArgs] = (0, import_react.useState)(storyContext.args);
  (0, import_react.useEffect)(() => {
    let onArgsUpdated = (changed) => {
      changed.storyId === storyId && setArgs(changed.args);
    };
    return context.channel.on(import_core_events.STORY_ARGS_UPDATED, onArgsUpdated), () => context.channel.off(import_core_events.STORY_ARGS_UPDATED, onArgsUpdated);
  }, [storyId, context.channel]);
  let updateArgs = (0, import_react.useCallback)((updatedArgs) => context.channel.emit(import_core_events.UPDATE_STORY_ARGS, { storyId, updatedArgs }), [storyId, context.channel]), resetArgs = (0, import_react.useCallback)((argNames) => context.channel.emit(import_core_events.RESET_STORY_ARGS, { storyId, argNames }), [storyId, context.channel]);
  return story && [args2, updateArgs, resetArgs];
};
var useGlobals = (story, context) => {
  let storyContext = context.getStoryContext(story), [globals, setGlobals] = (0, import_react.useState)(storyContext.globals);
  return (0, import_react.useEffect)(() => {
    let onGlobalsUpdated = (changed) => {
      setGlobals(changed.globals);
    };
    return context.channel.on(import_core_events.GLOBALS_UPDATED, onGlobalsUpdated), () => context.channel.off(import_core_events.GLOBALS_UPDATED, onGlobalsUpdated);
  }, [context.channel]), [globals];
};
function extractComponentArgTypes2(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
var Controls3 = (props) => {
  var _a;
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let context = (0, import_react.useContext)(DocsContext), { story } = context.resolveOf(of || "story", ["story"]), { parameters, argTypes, component, subcomponents } = story, controlsParameters = ((_a = parameters.docs) == null ? void 0 : _a.controls) || {}, include = props.include ?? controlsParameters.include, exclude = props.exclude ?? controlsParameters.exclude, sort = props.sort ?? controlsParameters.sort, [args2, updateArgs, resetArgs] = useArgs(story, context), [globals] = useGlobals(story, context), filteredArgTypes = (0, import_preview_api.filterArgTypes)(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents).length > 0)) return Object.keys(filteredArgTypes).length > 0 || Object.keys(args2).length > 0 ? import_react.default.createElement(ArgsTable, { rows: filteredArgTypes, sort, args: args2, globals, updateArgs, resetArgs }) : null;
  let mainComponentName = getComponentName(component), subcomponentTabs = Object.fromEntries(Object.entries(subcomponents).map(([key2, comp]) => [key2, { rows: (0, import_preview_api.filterArgTypes)(extractComponentArgTypes2(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return import_react.default.createElement(TabbedArgsTable, { tabs, sort, args: args2, globals, updateArgs, resetArgs });
};
var { document: document2 } = globalThis;
var assertIsFn = (val) => {
  if (typeof val != "function") throw new Error(`Expected story function, got: ${val}`);
  return val;
};
var AddContext = (props) => {
  let { children, ...rest } = props, parentContext = import_react.default.useContext(DocsContext);
  return import_react.default.createElement(DocsContext.Provider, { value: { ...parentContext, ...rest } }, children);
};
var CodeOrSourceMdx = ({ className, children, ...rest }) => {
  if (typeof className != "string" && (typeof children != "string" || !children.match(/[\n\r]/g))) return import_react.default.createElement(bu, null, children);
  let language = className && className.split("-");
  return import_react.default.createElement(Source, { language: language && language[1] || "text", format: false, code: children, ...rest });
};
function navigate(context, url) {
  context.channel.emit(import_core_events.NAVIGATE_URL, url);
}
var A2 = bee.a;
var AnchorInPage = ({ hash, children }) => {
  let context = (0, import_react.useContext)(DocsContext);
  return import_react.default.createElement(A2, { href: hash, target: "_self", onClick: (event) => {
    let id = hash.substring(1);
    document2.getElementById(id) && navigate(context, hash);
  } }, children);
};
var AnchorMdx = (props) => {
  let { href, target, children, ...rest } = props, context = (0, import_react.useContext)(DocsContext);
  return !href || target === "_blank" || /^https?:\/\//.test(href) ? import_react.default.createElement(A2, { ...props }) : href.startsWith("#") ? import_react.default.createElement(AnchorInPage, { hash: href }, children) : import_react.default.createElement(A2, { href, onClick: (event) => {
    event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && (event.preventDefault(), navigate(context, event.currentTarget.getAttribute("href")));
  }, target, ...rest }, children);
};
var SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: Tr(headerType)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {});
var OcticonAnchor = Tr.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" }));
var HeaderWithOcticonAnchor = ({ as, id, children, ...rest }) => {
  let context = (0, import_react.useContext)(DocsContext), OcticonHeader = OcticonHeaders[as], hash = `#${id}`;
  return import_react.default.createElement(OcticonHeader, { id, ...rest }, import_react.default.createElement(OcticonAnchor, { "aria-hidden": "true", href: hash, tabIndex: -1, target: "_self", onClick: (event) => {
    document2.getElementById(id) && navigate(context, hash);
  } }, import_react.default.createElement(LinkIcon, null)), children);
};
var HeaderMdx = (props) => {
  let { as, id, children, ...rest } = props;
  if (id) return import_react.default.createElement(HeaderWithOcticonAnchor, { as, id, ...rest }, children);
  let Component4 = as, { as: omittedAs, ...withoutAs } = props;
  return import_react.default.createElement(Component4, { ...te(withoutAs, as) });
};
var HeadersMdx = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: (props) => import_react.default.createElement(HeaderMdx, { as: headerType, ...props }) }), {});
var Markdown = (props) => {
  var _a;
  if (!props.children) return null;
  if (typeof props.children != "string") throw new Error(dedent`The Markdown block only accepts children as a single string, but children were of type: '${typeof props.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return import_react.default.createElement(index_modern_default, { ...props, options: { forceBlock: true, overrides: { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx, ...(_a = props == null ? void 0 : props.options) == null ? void 0 : _a.overrides }, ...props == null ? void 0 : props.options } });
};
var DescriptionType = ((DescriptionType2) => (DescriptionType2.INFO = "info", DescriptionType2.NOTES = "notes", DescriptionType2.DOCGEN = "docgen", DescriptionType2.AUTO = "auto", DescriptionType2))(DescriptionType || {});
var getDescriptionFromResolvedOf = (resolvedOf) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  switch (resolvedOf.type) {
    case "story":
      return ((_b = (_a = resolvedOf.story.parameters.docs) == null ? void 0 : _a.description) == null ? void 0 : _b.story) || null;
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta, metaDescription = (_d = (_c = parameters.docs) == null ? void 0 : _c.description) == null ? void 0 : _d.component;
      return metaDescription || ((_f = (_e2 = parameters.docs) == null ? void 0 : _e2.extractComponentDescription) == null ? void 0 : _f.call(_e2, component, { component, parameters })) || null;
    }
    case "component": {
      let { component, projectAnnotations: { parameters } } = resolvedOf;
      return ((_h = (_g = parameters.docs) == null ? void 0 : _g.extractComponentDescription) == null ? void 0 : _h.call(_g, component, { component, parameters })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${resolvedOf.type}`);
  }
};
var DescriptionContainer = (props) => {
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolvedOf = useOf(of || "meta"), markdown = getDescriptionFromResolvedOf(resolvedOf);
  return markdown ? import_react.default.createElement(Markdown, null, markdown) : null;
};
var tocbot = __toESM2(require_js());
var Wrapper10 = Tr.div(({ theme }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } }));
var Content = Tr.div(({ theme }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${theme.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: theme.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: theme.color.secondary, textDecoration: "none" } }));
var Heading = Tr.p(({ theme }) => ({ fontWeight: 600, fontSize: "0.875em", color: theme.textColor, textTransform: "uppercase", marginBottom: 10 }));
var OptionalTitle = ({ title }) => title === null ? null : typeof title == "string" ? import_react.default.createElement(Heading, null, title) : title;
var TableOfContents = ({ title, disable, headingSelector, contentsSelector, ignoreSelector, unsafeTocbotOptions }) => ((0, import_react.useEffect)(() => {
  let configuration = { tocSelector: ".toc-wrapper", contentSelector: contentsSelector ?? ".sbdocs-content", headingSelector: headingSelector ?? "h3", ignoreSelector: ignoreSelector ?? ".docs-story *, .skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: false, onClick: () => false, ...unsafeTocbotOptions }, timeout = setTimeout(() => tocbot.init(configuration), 100);
  return () => {
    clearTimeout(timeout), tocbot.destroy();
  };
}, [disable]), import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Wrapper10, null, disable ? null : import_react.default.createElement(Content, null, import_react.default.createElement(OptionalTitle, { title: title || null }), import_react.default.createElement("div", { className: "toc-wrapper" })))));
var { document: document3, window: globalWindow3 } = globalThis;
var DocsContainer = ({ context, theme, children }) => {
  var _a, _b, _c, _d, _e2;
  let toc;
  try {
    toc = (_b = (_a = context.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.toc;
  } catch {
    toc = (_e2 = (_d = (_c = context == null ? void 0 : context.projectAnnotations) == null ? void 0 : _c.parameters) == null ? void 0 : _d.docs) == null ? void 0 : _e2.toc;
  }
  return (0, import_react.useEffect)(() => {
    let url;
    try {
      if (url = new URL(globalWindow3.parent.location.toString()), url.hash) {
        let element = document3.getElementById(decodeURIComponent(url.hash.substring(1)));
        element && setTimeout(() => {
          scrollToElement(element);
        }, 200);
      }
    } catch {
    }
  }), import_react.default.createElement(DocsContext.Provider, { value: context }, import_react.default.createElement(SourceContainer, { channel: context.channel }, import_react.default.createElement(jt, { theme: pc(theme) }, import_react.default.createElement(DocsPageWrapper, { toc: toc ? import_react.default.createElement(TableOfContents, { className: "sbdocs sbdocs-toc--custom", ...toc }) : null }, children))));
};
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string") return import_react.default.createElement(Eu, null, children);
  let tagID = globalThis.encodeURIComponent(children.toLowerCase());
  return import_react.default.createElement(HeaderMdx, { as: "h3", id: tagID }, children);
};
var DocsStory = ({ of, expanded = true, withToolbar: withToolbarProp = false, __forceInitialArgs = false, __primary = false }) => {
  var _a, _b;
  let { story } = useOf(of || "story", ["story"]), withToolbar = ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null ? void 0 : _b.withToolbar) ?? withToolbarProp;
  return import_react.default.createElement(Anchor, { storyId: story.id }, expanded && import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Subheading, null, story.name), import_react.default.createElement(DescriptionContainer, { of })), import_react.default.createElement(Canvas, { of, withToolbar, story: { __forceInitialArgs, __primary }, source: { __forceInitialArgs } }));
};
var Primary = (props) => {
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { csfFile } = useOf(of || "meta", ["meta"]), primaryStory = (0, import_react.useContext)(DocsContext).componentStoriesFromCSFFile(csfFile)[0];
  return primaryStory ? import_react.default.createElement(DocsStory, { of: primaryStory.moduleExport, expanded: false, __primary: true, withToolbar: true }) : null;
};
var Heading2 = ({ children, disableAnchor, ...props }) => {
  if (disableAnchor || typeof children != "string") return import_react.default.createElement(Cu, null, children);
  let tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return import_react.default.createElement(HeaderMdx, { as: "h2", id: tagID, ...props }, children);
};
var StyledHeading = Tr(Heading2)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, fontWeight: theme.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: theme.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } }));
var Stories = ({ title = "Stories", includePrimary = true }) => {
  var _a;
  let { componentStories, projectAnnotations, getStoryContext } = (0, import_react.useContext)(DocsContext), stories = componentStories(), { stories: { filter } = { filter: void 0 } } = ((_a = projectAnnotations.parameters) == null ? void 0 : _a.docs) || {};
  return filter && (stories = stories.filter((story) => filter(story, getStoryContext(story)))), stories.some((story) => {
    var _a2;
    return (_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs");
  }) && (stories = stories.filter((story) => {
    var _a2;
    return ((_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs")) && !story.usesMount;
  })), includePrimary || (stories = stories.slice(1)), !stories || stories.length === 0 ? null : import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(StyledHeading, null, title), stories.map((story) => story && import_react.default.createElement(DocsStory, { key: story.id, of: story.moduleExport, expanded: true, __forceInitialArgs: true })));
};
var DEPRECATION_MIGRATION_LINK = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#subtitle-block-and-parameterscomponentsubtitle";
var Subtitle2 = (props) => {
  let { of, children } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let { componentSubtitle, docs } = (preparedMeta == null ? void 0 : preparedMeta.parameters) || {};
  componentSubtitle && (0, import_client_logger.deprecate)(`Using 'parameters.componentSubtitle' property to subtitle stories is deprecated. See ${DEPRECATION_MIGRATION_LINK}`);
  let content = children || (docs == null ? void 0 : docs.subtitle) || componentSubtitle;
  return content ? import_react.default.createElement(Subtitle, { className: "sbdocs-subtitle sb-unstyled" }, content) : null;
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
var extractTitle = (title) => {
  let groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return (groups == null ? void 0 : groups[(groups == null ? void 0 : groups.length) - 1]) || title;
};
var Title2 = (props) => {
  let { children, of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let content = children || extractTitle(preparedMeta == null ? void 0 : preparedMeta.title);
  return content ? import_react.default.createElement(Title, { className: "sbdocs-title sb-unstyled" }, content) : null;
};
var DocsPage = () => {
  let resolvedOf = useOf("meta", ["meta"]), { stories } = resolvedOf.csfFile, isSingleStory = Object.keys(stories).length === 1;
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Title2, null), import_react.default.createElement(Subtitle2, null), import_react.default.createElement(DescriptionContainer, { of: "meta" }), isSingleStory ? import_react.default.createElement(DescriptionContainer, { of: "story" }) : null, import_react.default.createElement(Primary, null), import_react.default.createElement(Controls3, null), isSingleStory ? null : import_react.default.createElement(Stories, null));
};
function Docs({ context, docsParameter }) {
  let Container = docsParameter.container || DocsContainer, Page = docsParameter.page || DocsPage;
  return import_react.default.createElement(Container, { context, theme: docsParameter.theme }, import_react.default.createElement(Page, null));
}
var ExternalDocsContext = class extends import_preview_api.DocsContext {
  constructor(channel, store, renderStoryToElement, processMetaExports) {
    super(channel, store, renderStoryToElement, []);
    this.channel = channel;
    this.store = store;
    this.renderStoryToElement = renderStoryToElement;
    this.processMetaExports = processMetaExports;
    this.referenceMeta = (metaExports, attach) => {
      let csfFile = this.processMetaExports(metaExports);
      this.referenceCSFFile(csfFile), super.referenceMeta(metaExports, attach);
    };
  }
};
var ConstantMap = class {
  constructor(prefix) {
    this.prefix = prefix;
    this.entries = /* @__PURE__ */ new Map();
  }
  get(key2) {
    return this.entries.has(key2) || this.entries.set(key2, `${this.prefix}${this.entries.size}`), this.entries.get(key2);
  }
};
var ExternalPreview = class extends import_preview_api.Preview {
  constructor(projectAnnotations) {
    super((path) => Promise.resolve(this.moduleExportsByImportPath[path]), () => (0, import_preview_api.composeConfigs)([{ parameters: { docs: { story: { inline: true } } } }, this.projectAnnotations]), new import_channels.Channel({}));
    this.projectAnnotations = projectAnnotations;
    this.importPaths = new ConstantMap("./importPath/");
    this.titles = new ConstantMap("title-");
    this.storyIndex = { v: 5, entries: {} };
    this.moduleExportsByImportPath = {};
    this.processMetaExports = (metaExports) => {
      let importPath = this.importPaths.get(metaExports);
      this.moduleExportsByImportPath[importPath] = metaExports;
      let title = metaExports.default.title || this.titles.get(metaExports), csfFile = this.storyStoreValue.processCSFFileWithCache(metaExports, importPath, title);
      return Object.values(csfFile.stories).forEach(({ id, name: name2 }) => {
        this.storyIndex.entries[id] = { id, importPath, title, name: name2, type: "story" };
      }), this.onStoriesChanged({ storyIndex: this.storyIndex }), csfFile;
    };
    this.docsContext = () => new ExternalDocsContext(this.channel, this.storyStoreValue, this.renderStoryToElement.bind(this), this.processMetaExports.bind(this));
  }
  async getStoryIndexFromServer() {
    return this.storyIndex;
  }
};
function usePreview(projectAnnotations) {
  let previewRef = (0, import_react.useRef)();
  return previewRef.current || (previewRef.current = new ExternalPreview(projectAnnotations)), previewRef.current;
}
function ExternalDocs({ projectAnnotationsList, children }) {
  var _a;
  let projectAnnotations = (0, import_preview_api.composeConfigs)(projectAnnotationsList), preview2 = usePreview(projectAnnotations), docsParameter = { ...(_a = projectAnnotations.parameters) == null ? void 0 : _a.docs, page: () => children };
  return import_react.default.createElement(Docs, { docsParameter, context: preview2.docsContext() });
}
var preview;
var ExternalDocsContainer = ({ projectAnnotations, children }) => (preview || (preview = new ExternalPreview(projectAnnotations)), import_react.default.createElement(DocsContext.Provider, { value: preview.docsContext() }, import_react.default.createElement(jt, { theme: pc(Ne.light) }, children)));
var Meta = ({ of }) => {
  let context = (0, import_react.useContext)(DocsContext);
  of && context.referenceMeta(of, true);
  try {
    let primary = context.storyById();
    return import_react.default.createElement(Anchor, { storyId: primary.id });
  } catch {
    return null;
  }
};
var Unstyled = (props) => import_react.default.createElement("div", { ...props, className: "sb-unstyled" });
var Wrapper11 = ({ children }) => import_react.default.createElement("div", { style: { fontFamily: "sans-serif" } }, children);
var PRIMARY_STORY = "^";

export {
  BooleanControl,
  parseDate,
  parseTime,
  formatDate,
  formatTime,
  DateControl,
  parse2,
  format2,
  NumberControl,
  OptionsControl,
  ObjectControl,
  RangeControl,
  TextControl,
  FilesControl,
  ColorControl,
  ArgsTable,
  Typeset,
  ColorItem,
  ColorPalette,
  IconItem,
  IconGallery,
  anchorBlockIdFromId,
  Anchor,
  DocsContext,
  useOf,
  ArgTypes,
  argsHash,
  SourceContext,
  UNKNOWN_ARGS_HASH,
  SourceContainer,
  useSourceProps,
  Source2,
  getStoryId2,
  getStoryProps,
  Story2,
  Canvas,
  Controls3,
  assertIsFn,
  AddContext,
  CodeOrSourceMdx,
  AnchorMdx,
  HeaderMdx,
  HeadersMdx,
  Markdown,
  DescriptionType,
  DescriptionContainer,
  DocsContainer,
  Subheading,
  DocsStory,
  Primary,
  Heading2,
  Stories,
  Subtitle2,
  extractTitle,
  Title2,
  DocsPage,
  Docs,
  ExternalDocs,
  ExternalDocsContainer,
  Meta,
  Unstyled,
  Wrapper11,
  PRIMARY_STORY
};
//# sourceMappingURL=chunk-TV7PU6HX.js.map
