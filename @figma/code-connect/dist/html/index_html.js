"use strict";
// IMPORTANT: be careful to ensure you don't accidentally add code which has a
// dependency on Node.js-only modules here, as it will break co-located
// components. We don't have a test for this yet. Any such code should be
// conditionally required - see `client` for an example. Reach out in
// #feat-code-connect if you're unsure.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = exports.client = exports.figma = void 0;
const figma = __importStar(require("./external"));
const template_literal_1 = require("./template_literal");
const index_common_1 = require("../connect/index_common");
const _client = (0, index_common_1.getClient)();
exports.client = _client;
const _figma = figma;
exports.figma = _figma;
const _html = template_literal_1.html;
exports.html = _html;
exports.default = _figma;
//# sourceMappingURL=index_html.js.map