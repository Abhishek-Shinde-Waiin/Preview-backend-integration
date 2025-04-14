"use strict";var e,n=require("@csstools/css-tokenizer");function walkerIndexGenerator(e){let n=e.slice();return(e,o,t)=>{let s=-1;for(let i=n.indexOf(o);i<n.length&&(s=e.indexOf(n[i]),-1===s||s<t);i++);return-1===s||s===t&&o===e[t]&&(s++,s>=e.length)?-1:(n=e.slice(),s)}}function consumeComponentValue(e,o){const t=o[0];if(n.isTokenOpenParen(t)||n.isTokenOpenCurly(t)||n.isTokenOpenSquare(t)){const n=consumeSimpleBlock(e,o);return{advance:n.advance,node:n.node}}if(n.isTokenFunction(t)){const n=consumeFunction(e,o);return{advance:n.advance,node:n.node}}if(n.isTokenWhitespace(t)){const n=consumeWhitespace(e,o);return{advance:n.advance,node:n.node}}if(n.isTokenComment(t)){const n=consumeComment(e,o);return{advance:n.advance,node:n.node}}return{advance:1,node:new TokenNode(t)}}exports.ComponentValueType=void 0,(e=exports.ComponentValueType||(exports.ComponentValueType={})).Function="function",e.SimpleBlock="simple-block",e.Whitespace="whitespace",e.Comment="comment",e.Token="token";class ContainerNodeBaseClass{value=[];indexOf(e){return this.value.indexOf(e)}at(e){if("number"==typeof e)return e<0&&(e=this.value.length+e),this.value[e]}forEach(e,n){if(0===this.value.length)return;const o=walkerIndexGenerator(this.value);let t=0;for(;t<this.value.length;){const s=this.value[t];let i;if(n&&(i={...n}),!1===e({node:s,parent:this,state:i},t))return!1;if(t=o(this.value,s,t),-1===t)break}}walk(e,n){0!==this.value.length&&this.forEach(((n,o)=>!1!==e(n,o)&&((!("walk"in n.node)||!this.value.includes(n.node)||!1!==n.node.walk(e,n.state))&&void 0)),n)}}class FunctionNode extends ContainerNodeBaseClass{type=exports.ComponentValueType.Function;name;endToken;constructor(e,n,o){super(),this.name=e,this.endToken=n,this.value=o}getName(){return this.name[4].value}normalize(){n.isTokenEOF(this.endToken)&&(this.endToken=[n.TokenType.CloseParen,")",-1,-1,void 0])}tokens(){return n.isTokenEOF(this.endToken)?[this.name,...this.value.flatMap((e=>e.tokens()))]:[this.name,...this.value.flatMap((e=>e.tokens())),this.endToken]}toString(){const e=this.value.map((e=>n.isToken(e)?n.stringify(e):e.toString())).join("");return n.stringify(this.name)+e+n.stringify(this.endToken)}toJSON(){return{type:this.type,name:this.getName(),tokens:this.tokens(),value:this.value.map((e=>e.toJSON()))}}isFunctionNode(){return FunctionNode.isFunctionNode(this)}static isFunctionNode(e){return!!e&&(e instanceof FunctionNode&&e.type===exports.ComponentValueType.Function)}}function consumeFunction(e,o){const t=[];let s=1;for(;;){const i=o[s];if(!i||n.isTokenEOF(i))return e.onParseError(new n.ParseError("Unexpected EOF while consuming a function.",o[0][2],o[o.length-1][3],["5.4.9. Consume a function","Unexpected EOF"])),{advance:o.length,node:new FunctionNode(o[0],i,t)};if(n.isTokenCloseParen(i))return{advance:s+1,node:new FunctionNode(o[0],i,t)};if(n.isTokenWhiteSpaceOrComment(i)){const n=consumeAllCommentsAndWhitespace(e,o.slice(s));s+=n.advance,t.push(...n.nodes);continue}const r=consumeComponentValue(e,o.slice(s));s+=r.advance,t.push(r.node)}}class SimpleBlockNode extends ContainerNodeBaseClass{type=exports.ComponentValueType.SimpleBlock;startToken;endToken;constructor(e,n,o){super(),this.startToken=e,this.endToken=n,this.value=o}normalize(){if(n.isTokenEOF(this.endToken)){const e=n.mirrorVariant(this.startToken);e&&(this.endToken=e)}}tokens(){return n.isTokenEOF(this.endToken)?[this.startToken,...this.value.flatMap((e=>e.tokens()))]:[this.startToken,...this.value.flatMap((e=>e.tokens())),this.endToken]}toString(){const e=this.value.map((e=>n.isToken(e)?n.stringify(e):e.toString())).join("");return n.stringify(this.startToken)+e+n.stringify(this.endToken)}toJSON(){return{type:this.type,startToken:this.startToken,tokens:this.tokens(),value:this.value.map((e=>e.toJSON()))}}isSimpleBlockNode(){return SimpleBlockNode.isSimpleBlockNode(this)}static isSimpleBlockNode(e){return!!e&&(e instanceof SimpleBlockNode&&e.type===exports.ComponentValueType.SimpleBlock)}}function consumeSimpleBlock(e,o){const t=n.mirrorVariantType(o[0][0]);if(!t)throw new Error("Failed to parse, a mirror variant must exist for all block open tokens.");const s=[];let i=1;for(;;){const r=o[i];if(!r||n.isTokenEOF(r))return e.onParseError(new n.ParseError("Unexpected EOF while consuming a simple block.",o[0][2],o[o.length-1][3],["5.4.8. Consume a simple block","Unexpected EOF"])),{advance:o.length,node:new SimpleBlockNode(o[0],r,s)};if(r[0]===t)return{advance:i+1,node:new SimpleBlockNode(o[0],r,s)};if(n.isTokenWhiteSpaceOrComment(r)){const n=consumeAllCommentsAndWhitespace(e,o.slice(i));i+=n.advance,s.push(...n.nodes);continue}const a=consumeComponentValue(e,o.slice(i));i+=a.advance,s.push(a.node)}}class WhitespaceNode{type=exports.ComponentValueType.Whitespace;value;constructor(e){this.value=e}tokens(){return this.value}toString(){return n.stringify(...this.value)}toJSON(){return{type:this.type,tokens:this.tokens()}}isWhitespaceNode(){return WhitespaceNode.isWhitespaceNode(this)}static isWhitespaceNode(e){return!!e&&(e instanceof WhitespaceNode&&e.type===exports.ComponentValueType.Whitespace)}}function consumeWhitespace(e,o){let t=0;for(;;){const e=o[t];if(!n.isTokenWhitespace(e))return{advance:t,node:new WhitespaceNode(o.slice(0,t))};t++}}class CommentNode{type=exports.ComponentValueType.Comment;value;constructor(e){this.value=e}tokens(){return[this.value]}toString(){return n.stringify(this.value)}toJSON(){return{type:this.type,tokens:this.tokens()}}isCommentNode(){return CommentNode.isCommentNode(this)}static isCommentNode(e){return!!e&&(e instanceof CommentNode&&e.type===exports.ComponentValueType.Comment)}}function consumeComment(e,n){return{advance:1,node:new CommentNode(n[0])}}function consumeAllCommentsAndWhitespace(e,o){const t=[];let s=0;for(;;)if(n.isTokenWhitespace(o[s])){const e=consumeWhitespace(0,o.slice(s));s+=e.advance,t.push(e.node)}else{if(!n.isTokenComment(o[s]))return{advance:s,nodes:t};t.push(new CommentNode(o[s])),s++}}class TokenNode{type=exports.ComponentValueType.Token;value;constructor(e){this.value=e}tokens(){return[this.value]}toString(){return this.value[1]}toJSON(){return{type:this.type,tokens:this.tokens()}}isTokenNode(){return TokenNode.isTokenNode(this)}static isTokenNode(e){return!!e&&(e instanceof TokenNode&&e.type===exports.ComponentValueType.Token)}}function forEach(e,n,o){if(0===e.length)return;const t=walkerIndexGenerator(e);let s=0;for(;s<e.length;){const i=e[s];let r;if(o&&(r={...o}),!1===n({node:i,parent:{value:e},state:r},s))return!1;if(s=t(e,i,s),-1===s)break}}function walk(e,n,o){0!==e.length&&forEach(e,((o,t)=>!1!==n(o,t)&&((!("walk"in o.node)||!e.includes(o.node)||!1!==o.node.walk(n,o.state))&&void 0)),o)}function isWhitespaceNode(e){return WhitespaceNode.isWhitespaceNode(e)}function isCommentNode(e){return CommentNode.isCommentNode(e)}exports.CommentNode=CommentNode,exports.ContainerNodeBaseClass=ContainerNodeBaseClass,exports.FunctionNode=FunctionNode,exports.SimpleBlockNode=SimpleBlockNode,exports.TokenNode=TokenNode,exports.WhitespaceNode=WhitespaceNode,exports.forEach=forEach,exports.gatherNodeAncestry=function gatherNodeAncestry(e){const n=new Map;return e.walk((e=>{Array.isArray(e.node)?e.node.forEach((o=>{n.set(o,e.parent)})):n.set(e.node,e.parent)})),n},exports.isCommentNode=isCommentNode,exports.isFunctionNode=function isFunctionNode(e){return FunctionNode.isFunctionNode(e)},exports.isSimpleBlockNode=function isSimpleBlockNode(e){return SimpleBlockNode.isSimpleBlockNode(e)},exports.isTokenNode=function isTokenNode(e){return TokenNode.isTokenNode(e)},exports.isWhiteSpaceOrCommentNode=function isWhiteSpaceOrCommentNode(e){return isWhitespaceNode(e)||isCommentNode(e)},exports.isWhitespaceNode=isWhitespaceNode,exports.parseCommaSeparatedListOfComponentValues=function parseCommaSeparatedListOfComponentValues(e,o){const t={onParseError:o?.onParseError??(()=>{})},s=[...e];if(0===e.length)return[];n.isTokenEOF(s[s.length-1])&&s.push([n.TokenType.EOF,"",s[s.length-1][2],s[s.length-1][3],void 0]);const i=[];let r=[],a=0;for(;;){if(!s[a]||n.isTokenEOF(s[a]))return r.length&&i.push(r),i;if(n.isTokenComma(s[a])){i.push(r),r=[],a++;continue}const o=consumeComponentValue(t,e.slice(a));r.push(o.node),a+=o.advance}},exports.parseComponentValue=function parseComponentValue(e,o){const t={onParseError:o?.onParseError??(()=>{})},s=[...e];n.isTokenEOF(s[s.length-1])&&s.push([n.TokenType.EOF,"",s[s.length-1][2],s[s.length-1][3],void 0]);const i=consumeComponentValue(t,s);if(n.isTokenEOF(s[Math.min(i.advance,s.length-1)]))return i.node;t.onParseError(new n.ParseError("Expected EOF after parsing a component value.",e[0][2],e[e.length-1][3],["5.3.9. Parse a component value","Expected EOF"]))},exports.parseListOfComponentValues=function parseListOfComponentValues(e,o){const t={onParseError:o?.onParseError??(()=>{})},s=[...e];n.isTokenEOF(s[s.length-1])&&s.push([n.TokenType.EOF,"",s[s.length-1][2],s[s.length-1][3],void 0]);const i=[];let r=0;for(;;){if(!s[r]||n.isTokenEOF(s[r]))return i;const e=consumeComponentValue(t,s.slice(r));i.push(e.node),r+=e.advance}},exports.replaceComponentValues=function replaceComponentValues(e,n){for(let o=0;o<e.length;o++){walk(e[o],((e,o)=>{if("number"!=typeof o)return;const t=n(e.node);t&&(Array.isArray(t)?e.parent.value.splice(o,1,...t):e.parent.value.splice(o,1,t))}))}return e},exports.sourceIndices=function sourceIndices(e){if(Array.isArray(e)){const n=e[0];if(!n)return[0,0];const o=e[e.length-1]||n;return[sourceIndices(n)[0],sourceIndices(o)[1]]}const n=e.tokens(),o=n[0],t=n[n.length-1];return o&&t?[o[2],t[3]]:[0,0]},exports.stringify=function stringify(e){return e.map((e=>e.map((e=>n.stringify(...e.tokens()))).join(""))).join(",")},exports.walk=walk,exports.walkerIndexGenerator=walkerIndexGenerator;
