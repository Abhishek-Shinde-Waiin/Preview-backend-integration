'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports.default = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z' })
  );
};