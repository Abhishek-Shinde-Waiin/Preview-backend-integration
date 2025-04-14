"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocEscapedText = exports.EscapeStyle = void 0;
var DocNode_1 = require("./DocNode");
var DocExcerpt_1 = require("./DocExcerpt");
/**
 * The style of escaping to be used with DocEscapedText.
 */
var EscapeStyle;
(function (EscapeStyle) {
    /**
     * Use a backslash symbol to escape the character.
     */
    EscapeStyle[EscapeStyle["CommonMarkBackslash"] = 0] = "CommonMarkBackslash";
})(EscapeStyle = exports.EscapeStyle || (exports.EscapeStyle = {}));
/**
 * Represents a text character that should be escaped as a TSDoc symbol.
 * @remarks
 * Note that renders will normally apply appropriate escaping when rendering
 * DocPlainText in a format such as HTML or TSDoc.  The DocEscapedText node
 * forces a specific escaping that may not be the default.
 */
var DocEscapedText = /** @class */ (function (_super) {
    __extends(DocEscapedText, _super);
    /**
     * Don't call this directly.  Instead use {@link TSDocParser}
     * @internal
     */
    function DocEscapedText(parameters) {
        var _this = _super.call(this, parameters) || this;
        _this._escapeStyle = parameters.escapeStyle;
        _this._encodedTextExcerpt = new DocExcerpt_1.DocExcerpt({
            configuration: _this.configuration,
            excerptKind: DocExcerpt_1.ExcerptKind.EscapedText,
            content: parameters.encodedTextExcerpt
        });
        _this._decodedText = parameters.decodedText;
        return _this;
    }
    Object.defineProperty(DocEscapedText.prototype, "kind", {
        /** @override */
        get: function () {
            return DocNode_1.DocNodeKind.EscapedText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocEscapedText.prototype, "escapeStyle", {
        /**
         * The style of escaping to be performed.
         */
        get: function () {
            return this._escapeStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocEscapedText.prototype, "encodedText", {
        /**
         * The text sequence including escapes.
         */
        get: function () {
            if (this._encodedText === undefined) {
                this._encodedText = this._encodedTextExcerpt.content.toString();
            }
            return this._encodedText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocEscapedText.prototype, "decodedText", {
        /**
         * The text without escaping.
         */
        get: function () {
            return this._decodedText;
        },
        enumerable: false,
        configurable: true
    });
    /** @override */
    DocEscapedText.prototype.onGetChildNodes = function () {
        return [this._encodedTextExcerpt];
    };
    return DocEscapedText;
}(DocNode_1.DocNode));
exports.DocEscapedText = DocEscapedText;
//# sourceMappingURL=DocEscapedText.js.map