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
exports.DocErrorText = void 0;
var DocNode_1 = require("./DocNode");
var DocExcerpt_1 = require("./DocExcerpt");
/**
 * Represents a span of text that contained invalid markup.
 * The characters should be rendered as plain text.
 */
var DocErrorText = /** @class */ (function (_super) {
    __extends(DocErrorText, _super);
    /**
     * Don't call this directly.  Instead use {@link TSDocParser}
     * @internal
     */
    function DocErrorText(parameters) {
        var _this = _super.call(this, parameters) || this;
        _this._textExcerpt = new DocExcerpt_1.DocExcerpt({
            configuration: _this.configuration,
            excerptKind: DocExcerpt_1.ExcerptKind.ErrorText,
            content: parameters.textExcerpt
        });
        _this._messageId = parameters.messageId;
        _this._errorMessage = parameters.errorMessage;
        _this._errorLocation = parameters.errorLocation;
        return _this;
    }
    Object.defineProperty(DocErrorText.prototype, "kind", {
        /** @override */
        get: function () {
            return DocNode_1.DocNodeKind.ErrorText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocErrorText.prototype, "text", {
        /**
         * The characters that should be rendered as plain text because they
         * could not be parsed successfully.
         */
        get: function () {
            if (this._text === undefined) {
                this._text = this._textExcerpt.content.toString();
            }
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocErrorText.prototype, "textExcerpt", {
        get: function () {
            if (this._textExcerpt) {
                return this._textExcerpt.content;
            }
            else {
                return undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocErrorText.prototype, "messageId", {
        /**
         * The TSDoc error message identifier.
         */
        get: function () {
            return this._messageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocErrorText.prototype, "errorMessage", {
        /**
         * A description of why the character could not be parsed.
         */
        get: function () {
            return this._errorMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocErrorText.prototype, "errorLocation", {
        /**
         * The range of characters that caused the error.  In general these may be
         * somewhat farther ahead in the input stream from the DocErrorText node itself.
         *
         * @remarks
         * For example, for the malformed HTML tag `<a href="123" @ /a>`, the DocErrorText node
         * will correspond to the `<` character that looked like an HTML tag, whereas the
         * error location might be the `@` character that caused the trouble.
         */
        get: function () {
            return this._errorLocation;
        },
        enumerable: false,
        configurable: true
    });
    /** @override */
    DocErrorText.prototype.onGetChildNodes = function () {
        return [this._textExcerpt];
    };
    return DocErrorText;
}(DocNode_1.DocNode));
exports.DocErrorText = DocErrorText;
//# sourceMappingURL=DocErrorText.js.map