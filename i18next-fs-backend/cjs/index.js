"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("./utils.js");
var _readFile = require("./readFile.js");
var _writeFile2 = require("./writeFile.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/{{lng}}/{{ns}}.missing.json',
    ident: 2,
    parse: JSON.parse,
    stringify: JSON.stringify
  };
};
var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Backend);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }
  return _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = (0, _utils.defaults)(options, this.options || {}, getDefaults());
      this.allOptions = allOptions;
      this.queuedWrites = {};
      this.debouncedWrite = (0, _utils.debounce)(this.write, 250);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var _this = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(language, namespace);
      }
      var filename = this.services.interpolator.interpolate(loadPath, {
        lng: language,
        ns: namespace
      });
      if (this.allOptions.initAsync === false || this.allOptions.initImmediate === false) {
        try {
          var _readFileSync = (0, _readFile.readFileSync)(filename, this.options),
            data = _readFileSync.data,
            stat = _readFileSync.stat;
          var timestamp = stat && stat.mtime && stat.mtime.getTime();
          if (this.options.expirationTime && timestamp && timestamp + this.options.expirationTime < Date.now()) {
            this.removeFile(language, namespace);
            return callback(new Error('File expired!'), false);
          }
          callback(null, data, timestamp);
        } catch (err) {
          callback(err, false);
        }
        return;
      }
      (0, _readFile.readFile)(filename, this.options).then(function (_ref) {
        var data = _ref.data,
          stat = _ref.stat;
        var timestamp = stat && stat.mtime && stat.mtime.getTime();
        if (_this.options.expirationTime && timestamp && timestamp + _this.options.expirationTime < Date.now()) {
          _this.removeFile(language, namespace);
          return callback(new Error('File expired!'), false);
        }
        callback(null, data, timestamp);
      }).catch(function (err) {
        return callback(err, false);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this2 = this;
      if (typeof callback !== 'function') callback = function callback() {};
      if (typeof languages === 'string') languages = [languages];
      var todo = languages.length;
      var done = function done() {
        if (! --todo) callback();
      };
      languages.forEach(function (lng) {
        _this2.queue.call(_this2, lng, namespace, key, fallbackValue, done);
      });
    }
  }, {
    key: "save",
    value: function save(language, namespace, data, callback) {
      var _this3 = this;
      if (!callback) callback = function callback() {};
      var keys = Object.keys(data);
      var todo = keys.length;
      var done = function done() {
        if (! --todo) callback();
      };
      keys.forEach(function (key) {
        _this3.queue.call(_this3, language, namespace, key, data[key], done);
      });
    }
  }, {
    key: "removeFile",
    value: function removeFile(language, namespace) {
      var addPath = this.options.addPath;
      if (typeof this.options.addPath === 'function') {
        addPath = this.options.addPath(language, namespace);
      }
      var filename = this.services.interpolator.interpolate(addPath, {
        lng: language,
        ns: namespace
      });
      (0, _writeFile2.removeFile)(filename, this.options).then(function () {}).catch(function () {});
    }
  }, {
    key: "write",
    value: function write() {
      for (var lng in this.queuedWrites) {
        var namespaces = this.queuedWrites[lng];
        if (lng !== 'locks') {
          for (var ns in namespaces) {
            this.writeFile(lng, ns);
          }
        }
      }
    }
  }, {
    key: "writeFile",
    value: function writeFile(lng, namespace) {
      var _this4 = this;
      var lock = (0, _utils.getPath)(this.queuedWrites, ['locks', lng, namespace]);
      if (lock) return;
      var addPath = this.options.addPath;
      if (typeof this.options.addPath === 'function') {
        addPath = this.options.addPath(lng, namespace);
      }
      var filename = this.services.interpolator.interpolate(addPath, {
        lng: lng,
        ns: namespace
      });
      var missings = (0, _utils.getPath)(this.queuedWrites, [lng, namespace]);
      (0, _utils.setPath)(this.queuedWrites, [lng, namespace], []);
      if (missings.length) {
        (0, _utils.setPath)(this.queuedWrites, ['locks', lng, namespace], true);
        var proceed = function proceed(_ref2) {
          var data = _ref2.data;
          missings.forEach(function (missing) {
            var path = _this4.allOptions.keySeparator === false ? [missing.key] : missing.key.split(_this4.allOptions.keySeparator || '.');
            try {
              (0, _utils.setPath)(data, path, missing.fallbackValue);
            } catch (e) {
              if (path.length < 2 || !e.message || e.message.indexOf('Cannot create property') < 0) throw e;
              (0, _utils.setPath)(data, [missing.key], missing.fallbackValue);
            }
          });
          var proceedWrite = function proceedWrite() {
            (0, _utils.setPath)(_this4.queuedWrites, ['locks', lng, namespace], false);
            missings.forEach(function (missing) {
              if (missing.callback) missing.callback();
            });
            _this4.debouncedWrite();
          };
          (0, _writeFile2.writeFile)(filename, data, _this4.options).then(proceedWrite).catch(proceedWrite);
        };
        (0, _readFile.readFile)(filename, this.options).then(proceed).catch(function () {
          return proceed({
            data: {}
          });
        });
      }
    }
  }, {
    key: "queue",
    value: function queue(lng, namespace, key, fallbackValue, callback) {
      (0, _utils.pushPath)(this.queuedWrites, [lng, namespace], {
        key: key,
        fallbackValue: fallbackValue || '',
        callback: callback
      });
      this.debouncedWrite();
    }
  }]);
}();
Backend.type = 'backend';
var _default = exports.default = Backend;
module.exports = exports.default;