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
    _react2.default.createElement('path', { d: 'M22.88,10.41C20.77,12.18 17.61,11.9 15.84,9.79C14.06,7.67 14.34,4.5 16.45,2.75L16.96,2.37C15.27,4.19 15.16,7.03 16.8,9C18.43,10.94 21.25,11.32 23.34,9.97L22.88,10.41M21.1,14.5C17.93,17.17 13.2,16.76 10.54,13.58C7.87,10.41 8.29,5.68 11.46,3L12.38,2.36C9.96,5.09 9.84,9.26 12.26,12.14C14.68,15 18.8,15.63 21.91,13.72L21.1,14.5M19.97,19.38C15.53,23.11 8.9,22.53 5.17,18.08C1.45,13.64 2.03,7 6.47,3.29L7.58,2.5C4.07,6.3 3.85,12.23 7.28,16.32C10.71,20.4 16.59,21.22 20.96,18.43L19.97,19.38Z' })
  );
};