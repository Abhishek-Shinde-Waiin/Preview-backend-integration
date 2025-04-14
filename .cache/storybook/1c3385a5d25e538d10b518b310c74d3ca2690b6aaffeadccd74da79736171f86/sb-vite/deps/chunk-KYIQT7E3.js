import {
  require_react_dom
} from "./chunk-MWSGYS3J.js";
import {
  __commonJS as __commonJS2,
  __export,
  __toESM as __toESM2
} from "./chunk-DF7VAP3D.js";
import {
  require_react
} from "./chunk-USEVLOEB.js";
import {
  require_global
} from "./chunk-DXIOBCSA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/react-dom/cjs/react-dom-test-utils.development.js
var require_react_dom_test_utils_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-test-utils.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var ReactDOM = require_react_dom();
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function get(key) {
          return key._reactInternals;
        }
        var FunctionComponent = 0;
        var ClassComponent = 1;
        var HostRoot = 3;
        var HostComponent = 5;
        var HostText = 6;
        var NoFlags = (
          /*                      */
          0
        );
        var Placement = (
          /*                    */
          2
        );
        var Hydrating = (
          /*                    */
          4096
        );
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        function getNearestMountedFiber(fiber) {
          var node = fiber;
          var nearestMounted = fiber;
          if (!fiber.alternate) {
            var nextNode = node;
            do {
              node = nextNode;
              if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
                nearestMounted = node.return;
              }
              nextNode = node.return;
            } while (nextNode);
          } else {
            while (node.return) {
              node = node.return;
            }
          }
          if (node.tag === HostRoot) {
            return nearestMounted;
          }
          return null;
        }
        function assertIsMounted(fiber) {
          if (getNearestMountedFiber(fiber) !== fiber) {
            throw new Error("Unable to find node on an unmounted component.");
          }
        }
        function findCurrentFiberUsingSlowPath(fiber) {
          var alternate = fiber.alternate;
          if (!alternate) {
            var nearestMounted = getNearestMountedFiber(fiber);
            if (nearestMounted === null) {
              throw new Error("Unable to find node on an unmounted component.");
            }
            if (nearestMounted !== fiber) {
              return null;
            }
            return fiber;
          }
          var a = fiber;
          var b = alternate;
          while (true) {
            var parentA = a.return;
            if (parentA === null) {
              break;
            }
            var parentB = parentA.alternate;
            if (parentB === null) {
              var nextParent = parentA.return;
              if (nextParent !== null) {
                a = b = nextParent;
                continue;
              }
              break;
            }
            if (parentA.child === parentB.child) {
              var child = parentA.child;
              while (child) {
                if (child === a) {
                  assertIsMounted(parentA);
                  return fiber;
                }
                if (child === b) {
                  assertIsMounted(parentA);
                  return alternate;
                }
                child = child.sibling;
              }
              throw new Error("Unable to find node on an unmounted component.");
            }
            if (a.return !== b.return) {
              a = parentA;
              b = parentB;
            } else {
              var didFindChild = false;
              var _child = parentA.child;
              while (_child) {
                if (_child === a) {
                  didFindChild = true;
                  a = parentA;
                  b = parentB;
                  break;
                }
                if (_child === b) {
                  didFindChild = true;
                  b = parentA;
                  a = parentB;
                  break;
                }
                _child = _child.sibling;
              }
              if (!didFindChild) {
                _child = parentB.child;
                while (_child) {
                  if (_child === a) {
                    didFindChild = true;
                    a = parentB;
                    b = parentA;
                    break;
                  }
                  if (_child === b) {
                    didFindChild = true;
                    b = parentB;
                    a = parentA;
                    break;
                  }
                  _child = _child.sibling;
                }
                if (!didFindChild) {
                  throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
                }
              }
            }
            if (a.alternate !== b) {
              throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          if (a.tag !== HostRoot) {
            throw new Error("Unable to find node on an unmounted component.");
          }
          if (a.stateNode.current === a) {
            return fiber;
          }
          return alternate;
        }
        var assign = Object.assign;
        function getEventCharCode(nativeEvent) {
          var charCode;
          var keyCode = nativeEvent.keyCode;
          if ("charCode" in nativeEvent) {
            charCode = nativeEvent.charCode;
            if (charCode === 0 && keyCode === 13) {
              charCode = 13;
            }
          } else {
            charCode = keyCode;
          }
          if (charCode === 10) {
            charCode = 13;
          }
          if (charCode >= 32 || charCode === 13) {
            return charCode;
          }
          return 0;
        }
        function functionThatReturnsTrue() {
          return true;
        }
        function functionThatReturnsFalse() {
          return false;
        }
        function createSyntheticEvent(Interface) {
          function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
            this._reactName = reactName;
            this._targetInst = targetInst;
            this.type = reactEventType;
            this.nativeEvent = nativeEvent;
            this.target = nativeEventTarget;
            this.currentTarget = null;
            for (var _propName in Interface) {
              if (!Interface.hasOwnProperty(_propName)) {
                continue;
              }
              var normalize = Interface[_propName];
              if (normalize) {
                this[_propName] = normalize(nativeEvent);
              } else {
                this[_propName] = nativeEvent[_propName];
              }
            }
            var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
            if (defaultPrevented) {
              this.isDefaultPrevented = functionThatReturnsTrue;
            } else {
              this.isDefaultPrevented = functionThatReturnsFalse;
            }
            this.isPropagationStopped = functionThatReturnsFalse;
            return this;
          }
          assign(SyntheticBaseEvent.prototype, {
            preventDefault: function() {
              this.defaultPrevented = true;
              var event = this.nativeEvent;
              if (!event) {
                return;
              }
              if (event.preventDefault) {
                event.preventDefault();
              } else if (typeof event.returnValue !== "unknown") {
                event.returnValue = false;
              }
              this.isDefaultPrevented = functionThatReturnsTrue;
            },
            stopPropagation: function() {
              var event = this.nativeEvent;
              if (!event) {
                return;
              }
              if (event.stopPropagation) {
                event.stopPropagation();
              } else if (typeof event.cancelBubble !== "unknown") {
                event.cancelBubble = true;
              }
              this.isPropagationStopped = functionThatReturnsTrue;
            },
            /**
             * We release all dispatched `SyntheticEvent`s after each event loop, adding
             * them back into the pool. This allows a way to hold onto a reference that
             * won't be added back into the pool.
             */
            persist: function() {
            },
            /**
             * Checks if this event should be released back into the pool.
             *
             * @return {boolean} True if this should not be released, false otherwise.
             */
            isPersistent: functionThatReturnsTrue
          });
          return SyntheticBaseEvent;
        }
        var EventInterface = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function(event) {
            return event.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        };
        var SyntheticEvent = createSyntheticEvent(EventInterface);
        var UIEventInterface = assign({}, EventInterface, {
          view: 0,
          detail: 0
        });
        var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
        var lastMovementX;
        var lastMovementY;
        var lastMouseEvent;
        function updateMouseMovementPolyfillState(event) {
          if (event !== lastMouseEvent) {
            if (lastMouseEvent && event.type === "mousemove") {
              lastMovementX = event.screenX - lastMouseEvent.screenX;
              lastMovementY = event.screenY - lastMouseEvent.screenY;
            } else {
              lastMovementX = 0;
              lastMovementY = 0;
            }
            lastMouseEvent = event;
          }
        }
        var MouseEventInterface = assign({}, UIEventInterface, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: getEventModifierState,
          button: 0,
          buttons: 0,
          relatedTarget: function(event) {
            if (event.relatedTarget === void 0) return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
            return event.relatedTarget;
          },
          movementX: function(event) {
            if ("movementX" in event) {
              return event.movementX;
            }
            updateMouseMovementPolyfillState(event);
            return lastMovementX;
          },
          movementY: function(event) {
            if ("movementY" in event) {
              return event.movementY;
            }
            return lastMovementY;
          }
        });
        var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
        var DragEventInterface = assign({}, MouseEventInterface, {
          dataTransfer: 0
        });
        var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
        var FocusEventInterface = assign({}, UIEventInterface, {
          relatedTarget: 0
        });
        var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
        var AnimationEventInterface = assign({}, EventInterface, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        });
        var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
        var ClipboardEventInterface = assign({}, EventInterface, {
          clipboardData: function(event) {
            return "clipboardData" in event ? event.clipboardData : window.clipboardData;
          }
        });
        var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
        var CompositionEventInterface = assign({}, EventInterface, {
          data: 0
        });
        var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
        var normalizeKey = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        };
        var translateToKey = {
          "8": "Backspace",
          "9": "Tab",
          "12": "Clear",
          "13": "Enter",
          "16": "Shift",
          "17": "Control",
          "18": "Alt",
          "19": "Pause",
          "20": "CapsLock",
          "27": "Escape",
          "32": " ",
          "33": "PageUp",
          "34": "PageDown",
          "35": "End",
          "36": "Home",
          "37": "ArrowLeft",
          "38": "ArrowUp",
          "39": "ArrowRight",
          "40": "ArrowDown",
          "45": "Insert",
          "46": "Delete",
          "112": "F1",
          "113": "F2",
          "114": "F3",
          "115": "F4",
          "116": "F5",
          "117": "F6",
          "118": "F7",
          "119": "F8",
          "120": "F9",
          "121": "F10",
          "122": "F11",
          "123": "F12",
          "144": "NumLock",
          "145": "ScrollLock",
          "224": "Meta"
        };
        function getEventKey(nativeEvent) {
          if (nativeEvent.key) {
            var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
            if (key !== "Unidentified") {
              return key;
            }
          }
          if (nativeEvent.type === "keypress") {
            var charCode = getEventCharCode(nativeEvent);
            return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
          }
          if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") {
            return translateToKey[nativeEvent.keyCode] || "Unidentified";
          }
          return "";
        }
        var modifierKeyToProp = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };
        function modifierStateGetter(keyArg) {
          var syntheticEvent = this;
          var nativeEvent = syntheticEvent.nativeEvent;
          if (nativeEvent.getModifierState) {
            return nativeEvent.getModifierState(keyArg);
          }
          var keyProp = modifierKeyToProp[keyArg];
          return keyProp ? !!nativeEvent[keyProp] : false;
        }
        function getEventModifierState(nativeEvent) {
          return modifierStateGetter;
        }
        var KeyboardEventInterface = assign({}, UIEventInterface, {
          key: getEventKey,
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: getEventModifierState,
          // Legacy Interface
          charCode: function(event) {
            if (event.type === "keypress") {
              return getEventCharCode(event);
            }
            return 0;
          },
          keyCode: function(event) {
            if (event.type === "keydown" || event.type === "keyup") {
              return event.keyCode;
            }
            return 0;
          },
          which: function(event) {
            if (event.type === "keypress") {
              return getEventCharCode(event);
            }
            if (event.type === "keydown" || event.type === "keyup") {
              return event.keyCode;
            }
            return 0;
          }
        });
        var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
        var PointerEventInterface = assign({}, MouseEventInterface, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        });
        var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
        var TouchEventInterface = assign({}, UIEventInterface, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: getEventModifierState
        });
        var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
        var TransitionEventInterface = assign({}, EventInterface, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        });
        var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
        var WheelEventInterface = assign({}, MouseEventInterface, {
          deltaX: function(event) {
            return "deltaX" in event ? event.deltaX : (
              // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
              "wheelDeltaX" in event ? -event.wheelDeltaX : 0
            );
          },
          deltaY: function(event) {
            return "deltaY" in event ? event.deltaY : (
              // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
              "wheelDeltaY" in event ? -event.wheelDeltaY : (
                // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
                "wheelDelta" in event ? -event.wheelDelta : 0
              )
            );
          },
          deltaZ: 0,
          // Browsers without "deltaMode" is reporting in raw wheel delta where one
          // notch on the scroll is always +/- 120, roughly equivalent to pixels.
          // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
          // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
          deltaMode: 0
        });
        var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
        var ELEMENT_NODE = 1;
        function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
          var funcArgs = Array.prototype.slice.call(arguments, 3);
          try {
            func.apply(context, funcArgs);
          } catch (error2) {
            this.onError(error2);
          }
        }
        var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
        {
          if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
            var fakeNode = document.createElement("react");
            invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
              if (typeof document === "undefined" || document === null) {
                throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
              }
              var evt = document.createEvent("Event");
              var didCall = false;
              var didError = true;
              var windowEvent = window.event;
              var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
              function restoreAfterDispatch() {
                fakeNode.removeEventListener(evtType, callCallback, false);
                if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
                  window.event = windowEvent;
                }
              }
              var funcArgs = Array.prototype.slice.call(arguments, 3);
              function callCallback() {
                didCall = true;
                restoreAfterDispatch();
                func.apply(context, funcArgs);
                didError = false;
              }
              var error2;
              var didSetError = false;
              var isCrossOriginError = false;
              function handleWindowError(event) {
                error2 = event.error;
                didSetError = true;
                if (error2 === null && event.colno === 0 && event.lineno === 0) {
                  isCrossOriginError = true;
                }
                if (event.defaultPrevented) {
                  if (error2 != null && typeof error2 === "object") {
                    try {
                      error2._suppressLogging = true;
                    } catch (inner) {
                    }
                  }
                }
              }
              var evtType = "react-" + (name ? name : "invokeguardedcallback");
              window.addEventListener("error", handleWindowError);
              fakeNode.addEventListener(evtType, callCallback, false);
              evt.initEvent(evtType, false, false);
              fakeNode.dispatchEvent(evt);
              if (windowEventDescriptor) {
                Object.defineProperty(window, "event", windowEventDescriptor);
              }
              if (didCall && didError) {
                if (!didSetError) {
                  error2 = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
                } else if (isCrossOriginError) {
                  error2 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
                }
                this.onError(error2);
              }
              window.removeEventListener("error", handleWindowError);
              if (!didCall) {
                restoreAfterDispatch();
                return invokeGuardedCallbackProd.apply(this, arguments);
              }
            };
          }
        }
        var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
        var hasError = false;
        var caughtError = null;
        var hasRethrowError = false;
        var rethrowError = null;
        var reporter = {
          onError: function(error2) {
            hasError = true;
            caughtError = error2;
          }
        };
        function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
          hasError = false;
          caughtError = null;
          invokeGuardedCallbackImpl$1.apply(reporter, arguments);
        }
        function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
          invokeGuardedCallback.apply(this, arguments);
          if (hasError) {
            var error2 = clearCaughtError();
            if (!hasRethrowError) {
              hasRethrowError = true;
              rethrowError = error2;
            }
          }
        }
        function rethrowCaughtError() {
          if (hasRethrowError) {
            var error2 = rethrowError;
            hasRethrowError = false;
            rethrowError = null;
            throw error2;
          }
        }
        function clearCaughtError() {
          if (hasError) {
            var error2 = caughtError;
            hasError = false;
            caughtError = null;
            return error2;
          } else {
            throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var SecretInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var EventInternals = SecretInternals.Events;
        var getInstanceFromNode = EventInternals[0];
        var getNodeFromInstance = EventInternals[1];
        var getFiberCurrentPropsFromNode = EventInternals[2];
        var enqueueStateRestore = EventInternals[3];
        var restoreStateIfNeeded = EventInternals[4];
        var reactAct2 = React.unstable_act;
        function Event(suffix) {
        }
        var hasWarnedAboutDeprecatedMockComponent = false;
        function findAllInRenderedFiberTreeInternal(fiber, test) {
          if (!fiber) {
            return [];
          }
          var currentParent = findCurrentFiberUsingSlowPath(fiber);
          if (!currentParent) {
            return [];
          }
          var node = currentParent;
          var ret = [];
          while (true) {
            if (node.tag === HostComponent || node.tag === HostText || node.tag === ClassComponent || node.tag === FunctionComponent) {
              var publicInst = node.stateNode;
              if (test(publicInst)) {
                ret.push(publicInst);
              }
            }
            if (node.child) {
              node.child.return = node;
              node = node.child;
              continue;
            }
            if (node === currentParent) {
              return ret;
            }
            while (!node.sibling) {
              if (!node.return || node.return === currentParent) {
                return ret;
              }
              node = node.return;
            }
            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
        function validateClassInstance(inst, methodName) {
          if (!inst) {
            return;
          }
          if (get(inst)) {
            return;
          }
          var received;
          var stringified = String(inst);
          if (isArray(inst)) {
            received = "an array";
          } else if (inst && inst.nodeType === ELEMENT_NODE && inst.tagName) {
            received = "a DOM node";
          } else if (stringified === "[object Object]") {
            received = "object with keys {" + Object.keys(inst).join(", ") + "}";
          } else {
            received = stringified;
          }
          throw new Error(methodName + "(...): the first argument must be a React class instance. " + ("Instead received: " + received + "."));
        }
        var didWarnAboutReactTestUtilsDeprecation = false;
        function renderIntoDocument(element) {
          {
            if (!didWarnAboutReactTestUtilsDeprecation) {
              didWarnAboutReactTestUtilsDeprecation = true;
              error("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info.");
            }
          }
          var div = document.createElement("div");
          return ReactDOM.render(element, div);
        }
        function isElement(element) {
          return React.isValidElement(element);
        }
        function isElementOfType(inst, convenienceConstructor) {
          return React.isValidElement(inst) && inst.type === convenienceConstructor;
        }
        function isDOMComponent(inst) {
          return !!(inst && inst.nodeType === ELEMENT_NODE && inst.tagName);
        }
        function isDOMComponentElement(inst) {
          return !!(inst && React.isValidElement(inst) && !!inst.tagName);
        }
        function isCompositeComponent(inst) {
          if (isDOMComponent(inst)) {
            return false;
          }
          return inst != null && typeof inst.render === "function" && typeof inst.setState === "function";
        }
        function isCompositeComponentWithType(inst, type) {
          if (!isCompositeComponent(inst)) {
            return false;
          }
          var internalInstance = get(inst);
          var constructor = internalInstance.type;
          return constructor === type;
        }
        function findAllInRenderedTree(inst, test) {
          validateClassInstance(inst, "findAllInRenderedTree");
          if (!inst) {
            return [];
          }
          var internalInstance = get(inst);
          return findAllInRenderedFiberTreeInternal(internalInstance, test);
        }
        function scryRenderedDOMComponentsWithClass(root, classNames) {
          validateClassInstance(root, "scryRenderedDOMComponentsWithClass");
          return findAllInRenderedTree(root, function(inst) {
            if (isDOMComponent(inst)) {
              var className = inst.className;
              if (typeof className !== "string") {
                className = inst.getAttribute("class") || "";
              }
              var classList = className.split(/\s+/);
              if (!isArray(classNames)) {
                if (classNames === void 0) {
                  throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
                }
                classNames = classNames.split(/\s+/);
              }
              return classNames.every(function(name) {
                return classList.indexOf(name) !== -1;
              });
            }
            return false;
          });
        }
        function findRenderedDOMComponentWithClass(root, className) {
          validateClassInstance(root, "findRenderedDOMComponentWithClass");
          var all = scryRenderedDOMComponentsWithClass(root, className);
          if (all.length !== 1) {
            throw new Error("Did not find exactly one match (found: " + all.length + ") for class:" + className);
          }
          return all[0];
        }
        function scryRenderedDOMComponentsWithTag(root, tagName) {
          validateClassInstance(root, "scryRenderedDOMComponentsWithTag");
          return findAllInRenderedTree(root, function(inst) {
            return isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
          });
        }
        function findRenderedDOMComponentWithTag(root, tagName) {
          validateClassInstance(root, "findRenderedDOMComponentWithTag");
          var all = scryRenderedDOMComponentsWithTag(root, tagName);
          if (all.length !== 1) {
            throw new Error("Did not find exactly one match (found: " + all.length + ") for tag:" + tagName);
          }
          return all[0];
        }
        function scryRenderedComponentsWithType(root, componentType) {
          validateClassInstance(root, "scryRenderedComponentsWithType");
          return findAllInRenderedTree(root, function(inst) {
            return isCompositeComponentWithType(inst, componentType);
          });
        }
        function findRenderedComponentWithType(root, componentType) {
          validateClassInstance(root, "findRenderedComponentWithType");
          var all = scryRenderedComponentsWithType(root, componentType);
          if (all.length !== 1) {
            throw new Error("Did not find exactly one match (found: " + all.length + ") for componentType:" + componentType);
          }
          return all[0];
        }
        function mockComponent(module2, mockTagName) {
          {
            if (!hasWarnedAboutDeprecatedMockComponent) {
              hasWarnedAboutDeprecatedMockComponent = true;
              warn("ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.\n\nSee https://reactjs.org/link/test-utils-mock-component for more information.");
            }
          }
          mockTagName = mockTagName || module2.mockTagName || "div";
          module2.prototype.render.mockImplementation(function() {
            return React.createElement(mockTagName, null, this.props.children);
          });
          return this;
        }
        function nativeTouchData(x, y) {
          return {
            touches: [{
              pageX: x,
              pageY: y
            }]
          };
        }
        function executeDispatch(event, listener, inst) {
          var type = event.type || "unknown-event";
          event.currentTarget = getNodeFromInstance(inst);
          invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event);
          event.currentTarget = null;
        }
        function executeDispatchesInOrder(event) {
          var dispatchListeners = event._dispatchListeners;
          var dispatchInstances = event._dispatchInstances;
          if (isArray(dispatchListeners)) {
            for (var i = 0; i < dispatchListeners.length; i++) {
              if (event.isPropagationStopped()) {
                break;
              }
              executeDispatch(event, dispatchListeners[i], dispatchInstances[i]);
            }
          } else if (dispatchListeners) {
            executeDispatch(event, dispatchListeners, dispatchInstances);
          }
          event._dispatchListeners = null;
          event._dispatchInstances = null;
        }
        var executeDispatchesAndRelease = function(event) {
          if (event) {
            executeDispatchesInOrder(event);
            if (!event.isPersistent()) {
              event.constructor.release(event);
            }
          }
        };
        function isInteractive(tag) {
          return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
        }
        function getParent(inst) {
          do {
            inst = inst.return;
          } while (inst && inst.tag !== HostComponent);
          if (inst) {
            return inst;
          }
          return null;
        }
        function traverseTwoPhase(inst, fn, arg) {
          var path = [];
          while (inst) {
            path.push(inst);
            inst = getParent(inst);
          }
          var i;
          for (i = path.length; i-- > 0; ) {
            fn(path[i], "captured", arg);
          }
          for (i = 0; i < path.length; i++) {
            fn(path[i], "bubbled", arg);
          }
        }
        function shouldPreventMouseEvent(name, type, props) {
          switch (name) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              return !!(props.disabled && isInteractive(type));
            default:
              return false;
          }
        }
        function getListener(inst, registrationName) {
          var stateNode = inst.stateNode;
          if (!stateNode) {
            return null;
          }
          var props = getFiberCurrentPropsFromNode(stateNode);
          if (!props) {
            return null;
          }
          var listener = props[registrationName];
          if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
            return null;
          }
          if (listener && typeof listener !== "function") {
            throw new Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type.");
          }
          return listener;
        }
        function listenerAtPhase(inst, event, propagationPhase) {
          var registrationName = event._reactName;
          if (propagationPhase === "captured") {
            registrationName += "Capture";
          }
          return getListener(inst, registrationName);
        }
        function accumulateDispatches(inst, ignoredDirection, event) {
          if (inst && event && event._reactName) {
            var registrationName = event._reactName;
            var listener = getListener(inst, registrationName);
            if (listener) {
              if (event._dispatchListeners == null) {
                event._dispatchListeners = [];
              }
              if (event._dispatchInstances == null) {
                event._dispatchInstances = [];
              }
              event._dispatchListeners.push(listener);
              event._dispatchInstances.push(inst);
            }
          }
        }
        function accumulateDirectionalDispatches(inst, phase, event) {
          {
            if (!inst) {
              error("Dispatching inst must not be null");
            }
          }
          var listener = listenerAtPhase(inst, event, phase);
          if (listener) {
            if (event._dispatchListeners == null) {
              event._dispatchListeners = [];
            }
            if (event._dispatchInstances == null) {
              event._dispatchInstances = [];
            }
            event._dispatchListeners.push(listener);
            event._dispatchInstances.push(inst);
          }
        }
        function accumulateDirectDispatchesSingle(event) {
          if (event && event._reactName) {
            accumulateDispatches(event._targetInst, null, event);
          }
        }
        function accumulateTwoPhaseDispatchesSingle(event) {
          if (event && event._reactName) {
            traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
          }
        }
        var Simulate = {};
        var directDispatchEventTypes = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
        function makeSimulator(eventType) {
          return function(domNode, eventData) {
            if (React.isValidElement(domNode)) {
              throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
            }
            if (isCompositeComponent(domNode)) {
              throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
            }
            var reactName = "on" + eventType[0].toUpperCase() + eventType.slice(1);
            var fakeNativeEvent = new Event();
            fakeNativeEvent.target = domNode;
            fakeNativeEvent.type = eventType.toLowerCase();
            var targetInst = getInstanceFromNode(domNode);
            var event = new SyntheticEvent(reactName, fakeNativeEvent.type, targetInst, fakeNativeEvent, domNode);
            event.persist();
            assign(event, eventData);
            if (directDispatchEventTypes.has(eventType)) {
              accumulateDirectDispatchesSingle(event);
            } else {
              accumulateTwoPhaseDispatchesSingle(event);
            }
            ReactDOM.unstable_batchedUpdates(function() {
              enqueueStateRestore(domNode);
              executeDispatchesAndRelease(event);
              rethrowCaughtError();
            });
            restoreStateIfNeeded();
          };
        }
        var simulatedEventTypes = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
        function buildSimulators() {
          simulatedEventTypes.forEach(function(eventType) {
            Simulate[eventType] = makeSimulator(eventType);
          });
        }
        buildSimulators();
        var didWarnAboutUsingAct = false;
        var act3 = function actWithWarning(callback) {
          {
            if (!didWarnAboutUsingAct) {
              didWarnAboutUsingAct = true;
              error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.");
            }
          }
          return reactAct2(callback);
        };
        exports.Simulate = Simulate;
        exports.act = act3;
        exports.findAllInRenderedTree = findAllInRenderedTree;
        exports.findRenderedComponentWithType = findRenderedComponentWithType;
        exports.findRenderedDOMComponentWithClass = findRenderedDOMComponentWithClass;
        exports.findRenderedDOMComponentWithTag = findRenderedDOMComponentWithTag;
        exports.isCompositeComponent = isCompositeComponent;
        exports.isCompositeComponentWithType = isCompositeComponentWithType;
        exports.isDOMComponent = isDOMComponent;
        exports.isDOMComponentElement = isDOMComponentElement;
        exports.isElement = isElement;
        exports.isElementOfType = isElementOfType;
        exports.mockComponent = mockComponent;
        exports.nativeTouchData = nativeTouchData;
        exports.renderIntoDocument = renderIntoDocument;
        exports.scryRenderedComponentsWithType = scryRenderedComponentsWithType;
        exports.scryRenderedDOMComponentsWithClass = scryRenderedDOMComponentsWithClass;
        exports.scryRenderedDOMComponentsWithTag = scryRenderedDOMComponentsWithTag;
        exports.traverseTwoPhase = traverseTwoPhase;
      })();
    }
  }
});

// node_modules/react-dom/test-utils.js
var require_test_utils = __commonJS({
  "node_modules/react-dom/test-utils.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_dom_test_utils_development();
    }
  }
});

// node_modules/@storybook/react/dist/chunk-MHYVTTFG.mjs
var React3 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var DeprecatedReactTestUtils = __toESM(require_test_utils(), 1);
var import_global = __toESM(require_global(), 1);
var require_constants = __commonJS2({ "../../node_modules/semver/internal/constants.js"(exports, module) {
  var SEMVER_SPEC_VERSION = "2.0.0", MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH = 16, MAX_SAFE_BUILD_LENGTH = 250, RELEASE_TYPES = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  module.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_SAFE_INTEGER, RELEASE_TYPES, SEMVER_SPEC_VERSION, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
} });
var require_debug = __commonJS2({ "../../node_modules/semver/internal/debug.js"(exports, module) {
  var debug = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  module.exports = debug;
} });
var require_re = __commonJS2({ "../../node_modules/semver/internal/re.js"(exports, module) {
  var { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = require_constants(), debug = require_debug();
  exports = module.exports = {};
  var re = exports.re = [], safeRe = exports.safeRe = [], src = exports.src = [], t = exports.t = {}, R = 0, LETTERDASHNUMBER = "[a-zA-Z0-9-]", safeRegexReplacements = [["\\s", 1], ["\\d", MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]], makeSafeRegex = (value) => {
    for (let [token, max] of safeRegexReplacements) value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    return value;
  }, createToken = (name, value, isGlobal) => {
    let safe = makeSafeRegex(value), index = R++;
    debug(name, index, value), t[name] = index, src[index] = value, re[index] = new RegExp(value, isGlobal ? "g" : void 0), safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
  createToken("FULL", `^${src[t.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
  createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
  createToken("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
  createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
  createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t.COERCE], true);
  createToken("COERCERTLFULL", src[t.COERCEFULL], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
} });
var require_parse_options = __commonJS2({ "../../node_modules/semver/internal/parse-options.js"(exports, module) {
  var looseOption = Object.freeze({ loose: true }), emptyOpts = Object.freeze({}), parseOptions = (options) => options ? typeof options != "object" ? looseOption : options : emptyOpts;
  module.exports = parseOptions;
} });
var require_identifiers = __commonJS2({ "../../node_modules/semver/internal/identifiers.js"(exports, module) {
  var numeric = /^[0-9]+$/, compareIdentifiers = (a, b) => {
    let anum = numeric.test(a), bnum = numeric.test(b);
    return anum && bnum && (a = +a, b = +b), a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  }, rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
  module.exports = { compareIdentifiers, rcompareIdentifiers };
} });
var require_semver = __commonJS2({ "../../node_modules/semver/classes/semver.js"(exports, module) {
  var debug = require_debug(), { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants(), { safeRe: re, t } = require_re(), parseOptions = require_parse_options(), { compareIdentifiers } = require_identifiers(), SemVer = class _SemVer {
    constructor(version2, options) {
      if (options = parseOptions(options), version2 instanceof _SemVer) {
        if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) return version2;
        version2 = version2.version;
      } else if (typeof version2 != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
      if (version2.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
      debug("SemVer", version2, options), this.options = options, this.loose = !!options.loose, this.includePrerelease = !!options.includePrerelease;
      let m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
      if (!m) throw new TypeError(`Invalid Version: ${version2}`);
      if (this.raw = version2, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
      m[4] ? this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          let num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
        }
        return id;
      }) : this.prerelease = [], this.build = m[5] ? m[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      if (debug("SemVer.compare", this.version, this.options, other), !(other instanceof _SemVer)) {
        if (typeof other == "string" && other === this.version) return 0;
        other = new _SemVer(other, this.options);
      }
      return other.version === this.version ? 0 : this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      return other instanceof _SemVer || (other = new _SemVer(other, this.options)), compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
      if (other instanceof _SemVer || (other = new _SemVer(other, this.options)), this.prerelease.length && !other.prerelease.length) return -1;
      if (!this.prerelease.length && other.prerelease.length) return 1;
      if (!this.prerelease.length && !other.prerelease.length) return 0;
      let i = 0;
      do {
        let a = this.prerelease[i], b = other.prerelease[i];
        if (debug("prerelease compare", i, a, b), a === void 0 && b === void 0) return 0;
        if (b === void 0) return 1;
        if (a === void 0) return -1;
        if (a === b) continue;
        return compareIdentifiers(a, b);
      } while (++i);
    }
    compareBuild(other) {
      other instanceof _SemVer || (other = new _SemVer(other, this.options));
      let i = 0;
      do {
        let a = this.build[i], b = other.build[i];
        if (debug("build compare", i, a, b), a === void 0 && b === void 0) return 0;
        if (b === void 0) return 1;
        if (a === void 0) return -1;
        if (a === b) continue;
        return compareIdentifiers(a, b);
      } while (++i);
    }
    inc(release, identifier, identifierBase) {
      switch (release) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", identifier, identifierBase), this.inc("pre", identifier, identifierBase);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", identifier, identifierBase), this.inc("pre", identifier, identifierBase);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          let base = Number(identifierBase) ? 1 : 0;
          if (!identifier && identifierBase === false) throw new Error("invalid increment argument: identifier is empty");
          if (this.prerelease.length === 0) this.prerelease = [base];
          else {
            let i = this.prerelease.length;
            for (; --i >= 0; ) typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            identifierBase === false && (prerelease = [identifier]), compareIdentifiers(this.prerelease[0], identifier) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = prerelease) : this.prerelease = prerelease;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  };
  module.exports = SemVer;
} });
var require_parse = __commonJS2({ "../../node_modules/semver/functions/parse.js"(exports, module) {
  var SemVer = require_semver(), parse = (version2, options, throwErrors = false) => {
    if (version2 instanceof SemVer) return version2;
    try {
      return new SemVer(version2, options);
    } catch (er) {
      if (!throwErrors) return null;
      throw er;
    }
  };
  module.exports = parse;
} });
var require_valid = __commonJS2({ "../../node_modules/semver/functions/valid.js"(exports, module) {
  var parse = require_parse(), valid = (version2, options) => {
    let v = parse(version2, options);
    return v ? v.version : null;
  };
  module.exports = valid;
} });
var require_clean = __commonJS2({ "../../node_modules/semver/functions/clean.js"(exports, module) {
  var parse = require_parse(), clean = (version2, options) => {
    let s = parse(version2.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  };
  module.exports = clean;
} });
var require_inc = __commonJS2({ "../../node_modules/semver/functions/inc.js"(exports, module) {
  var SemVer = require_semver(), inc = (version2, release, options, identifier, identifierBase) => {
    typeof options == "string" && (identifierBase = identifier, identifier = options, options = void 0);
    try {
      return new SemVer(version2 instanceof SemVer ? version2.version : version2, options).inc(release, identifier, identifierBase).version;
    } catch {
      return null;
    }
  };
  module.exports = inc;
} });
var require_diff = __commonJS2({ "../../node_modules/semver/functions/diff.js"(exports, module) {
  var parse = require_parse(), diff = (version1, version2) => {
    let v1 = parse(version1, null, true), v2 = parse(version2, null, true), comparison = v1.compare(v2);
    if (comparison === 0) return null;
    let v1Higher = comparison > 0, highVersion = v1Higher ? v1 : v2, lowVersion = v1Higher ? v2 : v1, highHasPre = !!highVersion.prerelease.length;
    if (!!lowVersion.prerelease.length && !highHasPre) return !lowVersion.patch && !lowVersion.minor ? "major" : highVersion.patch ? "patch" : highVersion.minor ? "minor" : "major";
    let prefix = highHasPre ? "pre" : "";
    return v1.major !== v2.major ? prefix + "major" : v1.minor !== v2.minor ? prefix + "minor" : v1.patch !== v2.patch ? prefix + "patch" : "prerelease";
  };
  module.exports = diff;
} });
var require_major = __commonJS2({ "../../node_modules/semver/functions/major.js"(exports, module) {
  var SemVer = require_semver(), major = (a, loose) => new SemVer(a, loose).major;
  module.exports = major;
} });
var require_minor = __commonJS2({ "../../node_modules/semver/functions/minor.js"(exports, module) {
  var SemVer = require_semver(), minor = (a, loose) => new SemVer(a, loose).minor;
  module.exports = minor;
} });
var require_patch = __commonJS2({ "../../node_modules/semver/functions/patch.js"(exports, module) {
  var SemVer = require_semver(), patch = (a, loose) => new SemVer(a, loose).patch;
  module.exports = patch;
} });
var require_prerelease = __commonJS2({ "../../node_modules/semver/functions/prerelease.js"(exports, module) {
  var parse = require_parse(), prerelease = (version2, options) => {
    let parsed = parse(version2, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  module.exports = prerelease;
} });
var require_compare = __commonJS2({ "../../node_modules/semver/functions/compare.js"(exports, module) {
  var SemVer = require_semver(), compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
  module.exports = compare;
} });
var require_rcompare = __commonJS2({ "../../node_modules/semver/functions/rcompare.js"(exports, module) {
  var compare = require_compare(), rcompare = (a, b, loose) => compare(b, a, loose);
  module.exports = rcompare;
} });
var require_compare_loose = __commonJS2({ "../../node_modules/semver/functions/compare-loose.js"(exports, module) {
  var compare = require_compare(), compareLoose = (a, b) => compare(a, b, true);
  module.exports = compareLoose;
} });
var require_compare_build = __commonJS2({ "../../node_modules/semver/functions/compare-build.js"(exports, module) {
  var SemVer = require_semver(), compareBuild = (a, b, loose) => {
    let versionA = new SemVer(a, loose), versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  module.exports = compareBuild;
} });
var require_sort = __commonJS2({ "../../node_modules/semver/functions/sort.js"(exports, module) {
  var compareBuild = require_compare_build(), sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
  module.exports = sort;
} });
var require_rsort = __commonJS2({ "../../node_modules/semver/functions/rsort.js"(exports, module) {
  var compareBuild = require_compare_build(), rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
  module.exports = rsort;
} });
var require_gt = __commonJS2({ "../../node_modules/semver/functions/gt.js"(exports, module) {
  var compare = require_compare(), gt = (a, b, loose) => compare(a, b, loose) > 0;
  module.exports = gt;
} });
var require_lt = __commonJS2({ "../../node_modules/semver/functions/lt.js"(exports, module) {
  var compare = require_compare(), lt = (a, b, loose) => compare(a, b, loose) < 0;
  module.exports = lt;
} });
var require_eq = __commonJS2({ "../../node_modules/semver/functions/eq.js"(exports, module) {
  var compare = require_compare(), eq = (a, b, loose) => compare(a, b, loose) === 0;
  module.exports = eq;
} });
var require_neq = __commonJS2({ "../../node_modules/semver/functions/neq.js"(exports, module) {
  var compare = require_compare(), neq = (a, b, loose) => compare(a, b, loose) !== 0;
  module.exports = neq;
} });
var require_gte = __commonJS2({ "../../node_modules/semver/functions/gte.js"(exports, module) {
  var compare = require_compare(), gte = (a, b, loose) => compare(a, b, loose) >= 0;
  module.exports = gte;
} });
var require_lte = __commonJS2({ "../../node_modules/semver/functions/lte.js"(exports, module) {
  var compare = require_compare(), lte = (a, b, loose) => compare(a, b, loose) <= 0;
  module.exports = lte;
} });
var require_cmp = __commonJS2({ "../../node_modules/semver/functions/cmp.js"(exports, module) {
  var eq = require_eq(), neq = require_neq(), gt = require_gt(), gte = require_gte(), lt = require_lt(), lte = require_lte(), cmp = (a, op, b, loose) => {
    switch (op) {
      case "===":
        return typeof a == "object" && (a = a.version), typeof b == "object" && (b = b.version), a === b;
      case "!==":
        return typeof a == "object" && (a = a.version), typeof b == "object" && (b = b.version), a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  module.exports = cmp;
} });
var require_coerce = __commonJS2({ "../../node_modules/semver/functions/coerce.js"(exports, module) {
  var SemVer = require_semver(), parse = require_parse(), { safeRe: re, t } = require_re(), coerce = (version2, options) => {
    if (version2 instanceof SemVer) return version2;
    if (typeof version2 == "number" && (version2 = String(version2)), typeof version2 != "string") return null;
    options = options || {};
    let match = null;
    if (!options.rtl) match = version2.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    else {
      let coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL], next;
      for (; (next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length); ) (!match || next.index + next[0].length !== match.index + match[0].length) && (match = next), coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) return null;
    let major = match[2], minor = match[3] || "0", patch = match[4] || "0", prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "", build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  module.exports = coerce;
} });
var require_lrucache = __commonJS2({ "../../node_modules/semver/internal/lrucache.js"(exports, module) {
  var LRUCache = class {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      let value = this.map.get(key);
      if (value !== void 0) return this.map.delete(key), this.map.set(key, value), value;
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      if (!this.delete(key) && value !== void 0) {
        if (this.map.size >= this.max) {
          let firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  };
  module.exports = LRUCache;
} });
var require_range = __commonJS2({ "../../node_modules/semver/classes/range.js"(exports, module) {
  var SPACE_CHARACTERS = /\s+/g, Range = class _Range {
    constructor(range, options) {
      if (options = parseOptions(options), range instanceof _Range) return range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease ? range : new _Range(range.raw, options);
      if (range instanceof Comparator) return this.raw = range.value, this.set = [[range]], this.formatted = void 0, this;
      if (this.options = options, this.loose = !!options.loose, this.includePrerelease = !!options.includePrerelease, this.raw = range.trim().replace(SPACE_CHARACTERS, " "), this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let first = this.set[0];
        if (this.set = this.set.filter((c) => !isNullSet(c[0])), this.set.length === 0) this.set = [first];
        else if (this.set.length > 1) {
          for (let c of this.set) if (c.length === 1 && isAny(c[0])) {
            this.set = [c];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          i > 0 && (this.formatted += "||");
          let comps = this.set[i];
          for (let k = 0; k < comps.length; k++) k > 0 && (this.formatted += " "), this.formatted += comps[k].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range) {
      let memoKey = ((this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE)) + ":" + range, cached = cache.get(memoKey);
      if (cached) return cached;
      let loose = this.options.loose, hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
      range = range.replace(hr, hyphenReplace(this.options.includePrerelease)), debug("hyphen replace", range), range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace), debug("comparator trim", range), range = range.replace(re[t.TILDETRIM], tildeTrimReplace), debug("tilde trim", range), range = range.replace(re[t.CARETTRIM], caretTrimReplace), debug("caret trim", range);
      let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      loose && (rangeList = rangeList.filter((comp) => (debug("loose invalid filter", comp, this.options), !!comp.match(re[t.COMPARATORLOOSE])))), debug("range list", rangeList);
      let rangeMap = /* @__PURE__ */ new Map(), comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (let comp of comparators) {
        if (isNullSet(comp)) return [comp];
        rangeMap.set(comp.value, comp);
      }
      rangeMap.size > 1 && rangeMap.has("") && rangeMap.delete("");
      let result = [...rangeMap.values()];
      return cache.set(memoKey, result), result;
    }
    intersects(range, options) {
      if (!(range instanceof _Range)) throw new TypeError("a Range is required");
      return this.set.some((thisComparators) => isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => rangeComparators.every((rangeComparator) => thisComparator.intersects(rangeComparator, options)))));
    }
    test(version2) {
      if (!version2) return false;
      if (typeof version2 == "string") try {
        version2 = new SemVer(version2, this.options);
      } catch {
        return false;
      }
      for (let i = 0; i < this.set.length; i++) if (testSet(this.set[i], version2, this.options)) return true;
      return false;
    }
  };
  module.exports = Range;
  var LRU = require_lrucache(), cache = new LRU(), parseOptions = require_parse_options(), Comparator = require_comparator(), debug = require_debug(), SemVer = require_semver(), { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = require_re(), { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants(), isNullSet = (c) => c.value === "<0.0.0-0", isAny = (c) => c.value === "", isSatisfiable = (comparators, options) => {
    let result = true, remainingComparators = comparators.slice(), testComparator = remainingComparators.pop();
    for (; result && remainingComparators.length; ) result = remainingComparators.every((otherComparator) => testComparator.intersects(otherComparator, options)), testComparator = remainingComparators.pop();
    return result;
  }, parseComparator = (comp, options) => (debug("comp", comp, options), comp = replaceCarets(comp, options), debug("caret", comp), comp = replaceTildes(comp, options), debug("tildes", comp), comp = replaceXRanges(comp, options), debug("xrange", comp), comp = replaceStars(comp, options), debug("stars", comp), comp), isX = (id) => !id || id.toLowerCase() === "x" || id === "*", replaceTildes = (comp, options) => comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" "), replaceTilde = (comp, options) => {
    let r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("tilde", comp, _, M, m, p, pr);
      let ret;
      return isX(M) ? ret = "" : isX(m) ? ret = `>=${M}.0.0 <${+M + 1}.0.0-0` : isX(p) ? ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0` : pr ? (debug("replaceTilde pr", pr), ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`) : ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`, debug("tilde return", ret), ret;
    });
  }, replaceCarets = (comp, options) => comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" "), replaceCaret = (comp, options) => {
    debug("caret", comp, options);
    let r = options.loose ? re[t.CARETLOOSE] : re[t.CARET], z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("caret", comp, _, M, m, p, pr);
      let ret;
      return isX(M) ? ret = "" : isX(m) ? ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0` : isX(p) ? M === "0" ? ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0` : ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0` : pr ? (debug("replaceCaret pr", pr), M === "0" ? m === "0" ? ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0` : ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0` : ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`) : (debug("no pr"), M === "0" ? m === "0" ? ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0` : ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0` : ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`), debug("caret return", ret), ret;
    });
  }, replaceXRanges = (comp, options) => (debug("replaceXRanges", comp, options), comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ")), replaceXRange = (comp, options) => {
    comp = comp.trim();
    let r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug("xRange", comp, ret, gtlt, M, m, p, pr);
      let xM = isX(M), xm = xM || isX(m), xp = xm || isX(p), anyX = xp;
      return gtlt === "=" && anyX && (gtlt = ""), pr = options.includePrerelease ? "-0" : "", xM ? gtlt === ">" || gtlt === "<" ? ret = "<0.0.0-0" : ret = "*" : gtlt && anyX ? (xm && (m = 0), p = 0, gtlt === ">" ? (gtlt = ">=", xm ? (M = +M + 1, m = 0, p = 0) : (m = +m + 1, p = 0)) : gtlt === "<=" && (gtlt = "<", xm ? M = +M + 1 : m = +m + 1), gtlt === "<" && (pr = "-0"), ret = `${gtlt + M}.${m}.${p}${pr}`) : xm ? ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0` : xp && (ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`), debug("xRange return", ret), ret;
    });
  }, replaceStars = (comp, options) => (debug("replaceStars", comp, options), comp.trim().replace(re[t.STAR], "")), replaceGTE0 = (comp, options) => (debug("replaceGTE0", comp, options), comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "")), hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => (isX(fM) ? from = "" : isX(fm) ? from = `>=${fM}.0.0${incPr ? "-0" : ""}` : isX(fp) ? from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}` : fpr ? from = `>=${from}` : from = `>=${from}${incPr ? "-0" : ""}`, isX(tM) ? to = "" : isX(tm) ? to = `<${+tM + 1}.0.0-0` : isX(tp) ? to = `<${tM}.${+tm + 1}.0-0` : tpr ? to = `<=${tM}.${tm}.${tp}-${tpr}` : incPr ? to = `<${tM}.${tm}.${+tp + 1}-0` : to = `<=${to}`, `${from} ${to}`.trim()), testSet = (set, version2, options) => {
    for (let i = 0; i < set.length; i++) if (!set[i].test(version2)) return false;
    if (version2.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) if (debug(set[i].semver), set[i].semver !== Comparator.ANY && set[i].semver.prerelease.length > 0) {
        let allowed = set[i].semver;
        if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) return true;
      }
      return false;
    }
    return true;
  };
} });
var require_comparator = __commonJS2({ "../../node_modules/semver/classes/comparator.js"(exports, module) {
  var ANY = Symbol("SemVer ANY"), Comparator = class _Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      if (options = parseOptions(options), comp instanceof _Comparator) {
        if (comp.loose === !!options.loose) return comp;
        comp = comp.value;
      }
      comp = comp.trim().split(/\s+/).join(" "), debug("comparator", comp, options), this.options = options, this.loose = !!options.loose, this.parse(comp), this.semver === ANY ? this.value = "" : this.value = this.operator + this.semver.version, debug("comp", this);
    }
    parse(comp) {
      let r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR], m = comp.match(r);
      if (!m) throw new TypeError(`Invalid comparator: ${comp}`);
      this.operator = m[1] !== void 0 ? m[1] : "", this.operator === "=" && (this.operator = ""), m[2] ? this.semver = new SemVer(m[2], this.options.loose) : this.semver = ANY;
    }
    toString() {
      return this.value;
    }
    test(version2) {
      if (debug("Comparator.test", version2, this.options.loose), this.semver === ANY || version2 === ANY) return true;
      if (typeof version2 == "string") try {
        version2 = new SemVer(version2, this.options);
      } catch {
        return false;
      }
      return cmp(version2, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof _Comparator)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new Range(comp.value, options).test(this.value) : comp.operator === "" ? comp.value === "" ? true : new Range(this.value, options).test(comp.semver) : (options = parseOptions(options), options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0") || !options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && comp.operator.startsWith(">") || this.operator.startsWith("<") && comp.operator.startsWith("<") || this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=") || cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<") || cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")));
    }
  };
  module.exports = Comparator;
  var parseOptions = require_parse_options(), { safeRe: re, t } = require_re(), cmp = require_cmp(), debug = require_debug(), SemVer = require_semver(), Range = require_range();
} });
var require_satisfies = __commonJS2({ "../../node_modules/semver/functions/satisfies.js"(exports, module) {
  var Range = require_range(), satisfies = (version2, range, options) => {
    try {
      range = new Range(range, options);
    } catch {
      return false;
    }
    return range.test(version2);
  };
  module.exports = satisfies;
} });
var require_to_comparators = __commonJS2({ "../../node_modules/semver/ranges/to-comparators.js"(exports, module) {
  var Range = require_range(), toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
  module.exports = toComparators;
} });
var require_max_satisfying = __commonJS2({ "../../node_modules/semver/ranges/max-satisfying.js"(exports, module) {
  var SemVer = require_semver(), Range = require_range(), maxSatisfying = (versions, range, options) => {
    let max = null, maxSV = null, rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch {
      return null;
    }
    return versions.forEach((v) => {
      rangeObj.test(v) && (!max || maxSV.compare(v) === -1) && (max = v, maxSV = new SemVer(max, options));
    }), max;
  };
  module.exports = maxSatisfying;
} });
var require_min_satisfying = __commonJS2({ "../../node_modules/semver/ranges/min-satisfying.js"(exports, module) {
  var SemVer = require_semver(), Range = require_range(), minSatisfying = (versions, range, options) => {
    let min = null, minSV = null, rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch {
      return null;
    }
    return versions.forEach((v) => {
      rangeObj.test(v) && (!min || minSV.compare(v) === 1) && (min = v, minSV = new SemVer(min, options));
    }), min;
  };
  module.exports = minSatisfying;
} });
var require_min_version = __commonJS2({ "../../node_modules/semver/ranges/min-version.js"(exports, module) {
  var SemVer = require_semver(), Range = require_range(), gt = require_gt(), minVersion = (range, loose) => {
    range = new Range(range, loose);
    let minver = new SemVer("0.0.0");
    if (range.test(minver) || (minver = new SemVer("0.0.0-0"), range.test(minver))) return minver;
    minver = null;
    for (let i = 0; i < range.set.length; ++i) {
      let comparators = range.set[i], setMin = null;
      comparators.forEach((comparator) => {
        let compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case ">":
            compver.prerelease.length === 0 ? compver.patch++ : compver.prerelease.push(0), compver.raw = compver.format();
          case "":
          case ">=":
            (!setMin || gt(compver, setMin)) && (setMin = compver);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${comparator.operator}`);
        }
      }), setMin && (!minver || gt(minver, setMin)) && (minver = setMin);
    }
    return minver && range.test(minver) ? minver : null;
  };
  module.exports = minVersion;
} });
var require_valid2 = __commonJS2({ "../../node_modules/semver/ranges/valid.js"(exports, module) {
  var Range = require_range(), validRange = (range, options) => {
    try {
      return new Range(range, options).range || "*";
    } catch {
      return null;
    }
  };
  module.exports = validRange;
} });
var require_outside = __commonJS2({ "../../node_modules/semver/ranges/outside.js"(exports, module) {
  var SemVer = require_semver(), Comparator = require_comparator(), { ANY } = Comparator, Range = require_range(), satisfies = require_satisfies(), gt = require_gt(), lt = require_lt(), lte = require_lte(), gte = require_gte(), outside = (version2, range, hilo, options) => {
    version2 = new SemVer(version2, options), range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt, ltefn = lte, ltfn = lt, comp = ">", ecomp = ">=";
        break;
      case "<":
        gtfn = lt, ltefn = gte, ltfn = gt, comp = "<", ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version2, range, options)) return false;
    for (let i = 0; i < range.set.length; ++i) {
      let comparators = range.set[i], high = null, low = null;
      if (comparators.forEach((comparator) => {
        comparator.semver === ANY && (comparator = new Comparator(">=0.0.0")), high = high || comparator, low = low || comparator, gtfn(comparator.semver, high.semver, options) ? high = comparator : ltfn(comparator.semver, low.semver, options) && (low = comparator);
      }), high.operator === comp || high.operator === ecomp || (!low.operator || low.operator === comp) && ltefn(version2, low.semver)) return false;
      if (low.operator === ecomp && ltfn(version2, low.semver)) return false;
    }
    return true;
  };
  module.exports = outside;
} });
var require_gtr = __commonJS2({ "../../node_modules/semver/ranges/gtr.js"(exports, module) {
  var outside = require_outside(), gtr = (version2, range, options) => outside(version2, range, ">", options);
  module.exports = gtr;
} });
var require_ltr = __commonJS2({ "../../node_modules/semver/ranges/ltr.js"(exports, module) {
  var outside = require_outside(), ltr = (version2, range, options) => outside(version2, range, "<", options);
  module.exports = ltr;
} });
var require_intersects = __commonJS2({ "../../node_modules/semver/ranges/intersects.js"(exports, module) {
  var Range = require_range(), intersects = (r1, r2, options) => (r1 = new Range(r1, options), r2 = new Range(r2, options), r1.intersects(r2, options));
  module.exports = intersects;
} });
var require_simplify = __commonJS2({ "../../node_modules/semver/ranges/simplify.js"(exports, module) {
  var satisfies = require_satisfies(), compare = require_compare();
  module.exports = (versions, range, options) => {
    let set = [], first = null, prev = null, v = versions.sort((a, b) => compare(a, b, options));
    for (let version2 of v) satisfies(version2, range, options) ? (prev = version2, first || (first = version2)) : (prev && set.push([first, prev]), prev = null, first = null);
    first && set.push([first, null]);
    let ranges = [];
    for (let [min, max] of set) min === max ? ranges.push(min) : !max && min === v[0] ? ranges.push("*") : max ? min === v[0] ? ranges.push(`<=${max}`) : ranges.push(`${min} - ${max}`) : ranges.push(`>=${min}`);
    let simplified = ranges.join(" || "), original = typeof range.raw == "string" ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
  };
} });
var require_subset = __commonJS2({ "../../node_modules/semver/ranges/subset.js"(exports, module) {
  var Range = require_range(), Comparator = require_comparator(), { ANY } = Comparator, satisfies = require_satisfies(), compare = require_compare(), subset = (sub, dom, options = {}) => {
    if (sub === dom) return true;
    sub = new Range(sub, options), dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (let simpleSub of sub.set) {
      for (let simpleDom of dom.set) {
        let isSub = simpleSubset(simpleSub, simpleDom, options);
        if (sawNonNull = sawNonNull || isSub !== null, isSub) continue OUTER;
      }
      if (sawNonNull) return false;
    }
    return true;
  }, minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")], minimumVersion = [new Comparator(">=0.0.0")], simpleSubset = (sub, dom, options) => {
    if (sub === dom) return true;
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) return true;
      options.includePrerelease ? sub = minimumVersionWithPreRelease : sub = minimumVersion;
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) return true;
      dom = minimumVersion;
    }
    let eqSet = /* @__PURE__ */ new Set(), gt, lt;
    for (let c of sub) c.operator === ">" || c.operator === ">=" ? gt = higherGT(gt, c, options) : c.operator === "<" || c.operator === "<=" ? lt = lowerLT(lt, c, options) : eqSet.add(c.semver);
    if (eqSet.size > 1) return null;
    let gtltComp;
    if (gt && lt) {
      if (gtltComp = compare(gt.semver, lt.semver, options), gtltComp > 0) return null;
      if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) return null;
    }
    for (let eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options) || lt && !satisfies(eq, String(lt), options)) return null;
      for (let c of dom) if (!satisfies(eq, String(c), options)) return false;
      return true;
    }
    let higher, lower, hasDomLT, hasDomGT, needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false, needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0 && (needDomLTPre = false);
    for (let c of dom) {
      if (hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=", hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=", gt) {
        if (needDomGTPre && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch && (needDomGTPre = false), c.operator === ">" || c.operator === ">=") {
          if (higher = higherGT(gt, c, options), higher === c && higher !== gt) return false;
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) return false;
      }
      if (lt) {
        if (needDomLTPre && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch && (needDomLTPre = false), c.operator === "<" || c.operator === "<=") {
          if (lower = lowerLT(lt, c, options), lower === c && lower !== lt) return false;
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) return false;
      }
      if (!c.operator && (lt || gt) && gtltComp !== 0) return false;
    }
    return !(gt && hasDomLT && !lt && gtltComp !== 0 || lt && hasDomGT && !gt && gtltComp !== 0 || needDomGTPre || needDomLTPre);
  }, higherGT = (a, b, options) => {
    if (!a) return b;
    let comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 || b.operator === ">" && a.operator === ">=" ? b : a;
  }, lowerLT = (a, b, options) => {
    if (!a) return b;
    let comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 || b.operator === "<" && a.operator === "<=" ? b : a;
  };
  module.exports = subset;
} });
var require_semver2 = __commonJS2({ "../../node_modules/semver/index.js"(exports, module) {
  var internalRe = require_re(), constants = require_constants(), SemVer = require_semver(), identifiers = require_identifiers(), parse = require_parse(), valid = require_valid(), clean = require_clean(), inc = require_inc(), diff = require_diff(), major = require_major(), minor = require_minor(), patch = require_patch(), prerelease = require_prerelease(), compare = require_compare(), rcompare = require_rcompare(), compareLoose = require_compare_loose(), compareBuild = require_compare_build(), sort = require_sort(), rsort = require_rsort(), gt = require_gt(), lt = require_lt(), eq = require_eq(), neq = require_neq(), gte = require_gte(), lte = require_lte(), cmp = require_cmp(), coerce = require_coerce(), Comparator = require_comparator(), Range = require_range(), satisfies = require_satisfies(), toComparators = require_to_comparators(), maxSatisfying = require_max_satisfying(), minSatisfying = require_min_satisfying(), minVersion = require_min_version(), validRange = require_valid2(), outside = require_outside(), gtr = require_gtr(), ltr = require_ltr(), intersects = require_intersects(), simplifyRange = require_simplify(), subset = require_subset();
  module.exports = { parse, valid, clean, inc, diff, major, minor, patch, prerelease, compare, rcompare, compareLoose, compareBuild, sort, rsort, gt, lt, eq, neq, gte, lte, cmp, coerce, Comparator, Range, satisfies, toComparators, maxSatisfying, minSatisfying, minVersion, validRange, outside, gtr, ltr, intersects, simplifyRange, subset, SemVer, re: internalRe.re, src: internalRe.src, tokens: internalRe.t, SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION, RELEASE_TYPES: constants.RELEASE_TYPES, compareIdentifiers: identifiers.compareIdentifiers, rcompareIdentifiers: identifiers.rcompareIdentifiers };
} });
var entry_preview_exports = {};
__export(entry_preview_exports, { beforeAll: () => beforeAll, decorators: () => decorators, mount: () => mount, parameters: () => parameters, render: () => render, renderToCanvas: () => renderToCanvas });
var import_semver = __toESM2(require_semver2());
var clonedReact = { ...React3 };
var reactAct = typeof clonedReact.act == "function" ? clonedReact.act : DeprecatedReactTestUtils.act;
function setReactActEnvironment(isReactActEnvironment) {
  globalThis.IS_REACT_ACT_ENVIRONMENT = isReactActEnvironment;
}
function getReactActEnvironment() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
function withGlobalActEnvironment(actImplementation) {
  return (callback) => {
    let previousActEnvironment = getReactActEnvironment();
    setReactActEnvironment(true);
    try {
      let callbackNeedsToBeAwaited = false, actResult = actImplementation(() => {
        let result = callback();
        return result !== null && typeof result == "object" && typeof result.then == "function" && (callbackNeedsToBeAwaited = true), result;
      });
      if (callbackNeedsToBeAwaited) {
        let thenable = actResult;
        return { then: (resolve, reject) => {
          thenable.then((returnValue) => {
            setReactActEnvironment(previousActEnvironment), resolve(returnValue);
          }, (error) => {
            setReactActEnvironment(previousActEnvironment), reject(error);
          });
        } };
      } else return setReactActEnvironment(previousActEnvironment), actResult;
    } catch (error) {
      throw setReactActEnvironment(previousActEnvironment), error;
    }
  };
}
var act2 = false ? (cb) => cb() : withGlobalActEnvironment(reactAct);
var render = (args, context) => {
  let { id, component: Component2 } = context;
  if (!Component2) throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);
  return import_react.default.createElement(Component2, { ...args });
};
var { FRAMEWORK_OPTIONS } = import_global.global;
var ErrorBoundary = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidMount() {
    let { hasError } = this.state, { showMain } = this.props;
    hasError || showMain();
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : children;
  }
};
var Wrapper = (FRAMEWORK_OPTIONS == null ? void 0 : FRAMEWORK_OPTIONS.strictMode) ? import_react.StrictMode : import_react.Fragment;
var actQueue = [];
var isActing = false;
var processActQueue = async () => {
  if (isActing || actQueue.length === 0) return;
  isActing = true;
  let actTask = actQueue.shift();
  actTask && await actTask(), isActing = false, processActQueue();
};
async function renderToCanvas({ storyContext, unboundStoryFn, showMain, showException, forceRemount }, canvasElement) {
  let { renderElement, unmountElement } = await import("./react-16-M7DLDDHQ.js"), Story = unboundStoryFn, content = storyContext.parameters.__isPortableStory ? import_react.default.createElement(Story, { ...storyContext }) : import_react.default.createElement(ErrorBoundary, { showMain, showException }, import_react.default.createElement(Story, { ...storyContext })), element = Wrapper ? import_react.default.createElement(Wrapper, null, content) : content;
  return forceRemount && unmountElement(canvasElement), await new Promise(async (resolve, reject) => {
    actQueue.push(async () => {
      try {
        await act2(async () => {
          var _a, _b;
          await renderElement(element, canvasElement, (_b = (_a = storyContext == null ? void 0 : storyContext.parameters) == null ? void 0 : _a.react) == null ? void 0 : _b.rootOptions);
        }), resolve();
      } catch (e) {
        reject(e);
      }
    }), processActQueue();
  }), async () => {
    await act2(() => {
      unmountElement(canvasElement);
    });
  };
}
var mount = (context) => async (ui) => (ui != null && (context.originalStoryFn = () => ui), await context.renderToCanvas(), context.canvas);
var parameters = { renderer: "react" };
var decorators = [(story, context) => {
  var _a, _b;
  if (!((_b = (_a = context.parameters) == null ? void 0 : _a.react) == null ? void 0 : _b.rsc)) return story();
  let major = import_semver.default.major(React3.version), minor = import_semver.default.minor(React3.version);
  if (major < 18 || major === 18 && minor < 3) throw new Error("React Server Components require React >= 18.3");
  return React3.createElement(React3.Suspense, null, story());
}];
var beforeAll = async () => {
  try {
    let { configure } = await import("./dist-AICEVJ7Y.js");
    configure({ unstable_advanceTimersWrapper: (cb) => act2(cb), asyncWrapper: async (cb) => {
      let previousActEnvironment = getReactActEnvironment();
      setReactActEnvironment(false);
      try {
        let result = await cb();
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 0), jestFakeTimersAreEnabled() && jest.advanceTimersByTime(0);
        }), result;
      } finally {
        setReactActEnvironment(previousActEnvironment);
      }
    }, eventWrapper: (cb) => {
      let result;
      return act2(() => (result = cb(), result)), result;
    } });
  } catch {
  }
};
function jestFakeTimersAreEnabled() {
  return typeof jest < "u" && jest !== null ? setTimeout._isMockFunction === true || Object.prototype.hasOwnProperty.call(setTimeout, "clock") : false;
}

export {
  entry_preview_exports,
  render,
  renderToCanvas,
  mount,
  parameters,
  decorators,
  beforeAll
};
/*! Bundled license information:

react-dom/cjs/react-dom-test-utils.development.js:
  (**
   * @license React
   * react-dom-test-utils.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-KYIQT7E3.js.map
