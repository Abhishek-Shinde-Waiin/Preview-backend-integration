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
import { DocNodeKind, DocNode } from './DocNode';
import { DocExcerpt, ExcerptKind } from './DocExcerpt';
/**
 * Instructs a renderer to insert an explicit newline in the output.
 * (Normally the renderer uses a formatting rule to determine where
 * lines should wrap.)
 *
 * @remarks
 * In HTML, a soft break is represented as an ASCII newline character (which does not
 * affect the web browser's view), whereas the hard break is the `<br />` element
 * (which starts a new line in the web browser's view).
 *
 * TSDoc follows the same conventions, except the renderer avoids emitting
 * two empty lines (because that could start a new CommonMark paragraph).
 */
var DocSoftBreak = /** @class */ (function (_super) {
    __extends(DocSoftBreak, _super);
    /**
     * Don't call this directly.  Instead use {@link TSDocParser}
     * @internal
     */
    function DocSoftBreak(parameters) {
        var _this = _super.call(this, parameters) || this;
        if (DocNode.isParsedParameters(parameters)) {
            _this._softBreakExcerpt = new DocExcerpt({
                configuration: _this.configuration,
                excerptKind: ExcerptKind.SoftBreak,
                content: parameters.softBreakExcerpt
            });
        }
        return _this;
    }
    Object.defineProperty(DocSoftBreak.prototype, "kind", {
        /** @override */
        get: function () {
            return DocNodeKind.SoftBreak;
        },
        enumerable: false,
        configurable: true
    });
    /** @override */
    DocSoftBreak.prototype.onGetChildNodes = function () {
        return [this._softBreakExcerpt];
    };
    return DocSoftBreak;
}(DocNode));
export { DocSoftBreak };
//# sourceMappingURL=DocSoftBreak.js.map