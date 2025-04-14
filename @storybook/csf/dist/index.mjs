var C=Object.create;var u=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var E=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var v=(r,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of F(e))!w.call(r,a)&&a!==n&&u(r,a,{get:()=>e[a],enumerable:!(t=B(e,a))||t.enumerable});return r};var I=(r,e,n)=>(n=r!=null?C(h(r)):{},v(e||!r||!r.__esModule?u(n,"default",{value:r,enumerable:!0}):n,r));var x=E(T=>{Object.defineProperty(T,"__esModule",{value:!0}),T.isEqual=function(){var r=Object.prototype.toString,e=Object.getPrototypeOf,n=Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:Object.keys;return function(t,a){return function i(o,s,p){var g,y,d,c=r.call(o),b=r.call(s);if(o===s)return !0;if(o==null||s==null)return !1;if(p.indexOf(o)>-1&&p.indexOf(s)>-1)return !0;if(p.push(o,s),c!=b||(g=n(o),y=n(s),g.length!=y.length||g.some(function(A){return !i(o[A],s[A],p)})))return !1;switch(c.slice(8,-1)){case"Symbol":return o.valueOf()==s.valueOf();case"Date":case"Number":return +o==+s||+o!=+o&&+s!=+s;case"RegExp":case"Function":case"String":case"Boolean":return ""+o==""+s;case"Set":case"Map":g=o.entries(),y=s.entries();do if(!i((d=g.next()).value,y.next().value,p))return !1;while(!d.done);return !0;case"ArrayBuffer":o=new Uint8Array(o),s=new Uint8Array(s);case"DataView":o=new Uint8Array(o.buffer),s=new Uint8Array(s.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(o.length!=s.length)return !1;for(d=0;d<o.length;d++)if((d in o||d in s)&&(d in o!=d in s||!i(o[d],s[d],p)))return !1;return !0;case"Object":return i(e(o),e(s),p);default:return !1}}(t,a,[])}}();});function R(r){return r.replace(/_/g," ").replace(/-/g," ").replace(/\./g," ").replace(/([^\n])([A-Z])([a-z])/g,(e,n,t,a)=>`${n} ${t}${a}`).replace(/([a-z])([A-Z])/g,(e,n,t)=>`${n} ${t}`).replace(/([a-z])([0-9])/gi,(e,n,t)=>`${n} ${t}`).replace(/([0-9])([a-z])/gi,(e,n,t)=>`${n} ${t}`).replace(/(\s|^)(\w)/g,(e,n,t)=>`${n}${t.toUpperCase()}`).replace(/ +/g," ").trim()}var l=I(x()),S=r=>r.map(e=>typeof e<"u").filter(Boolean).length,k=(r,e)=>{let{exists:n,eq:t,neq:a,truthy:i}=r;if(S([n,t,a,i])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:n,eq:t,neq:a})}`);if(typeof t<"u")return (0, l.isEqual)(e,t);if(typeof a<"u")return !(0, l.isEqual)(e,a);if(typeof n<"u"){let s=typeof e<"u";return n?s:!s}return (typeof i>"u"?!0:i)?!!e:!e},P=(r,e,n)=>{if(!r.if)return !0;let{arg:t,global:a}=r.if;if(S([t,a])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:t,global:a})}`);let i=t?e[t]:n[a];return k(r.if,i)};var O=r=>r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),f=(r,e)=>{let n=O(r);if(n==="")throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);return n},G=(r,e)=>`${f(r,"kind")}${e?`--${f(e,"name")}`:""}`,N=r=>R(r);function m(r,e){return Array.isArray(e)?e.includes(r):r.match(e)}function M(r,{includeStories:e,excludeStories:n}){return r!=="__esModule"&&(!e||m(r,e))&&(!n||!m(r,n))}var V=(r,{rootSeparator:e,groupSeparator:n})=>{let[t,a]=r.split(e,2),i=(a||r).split(n).filter(o=>!!o);return {root:a?t:null,groups:i}},z=(...r)=>{let e=r.reduce((n,t)=>(t.startsWith("!")?n.delete(t.slice(1)):n.add(t),n),new Set);return Array.from(e)};

export { z as combineTags, P as includeConditionalArg, M as isExportStory, V as parseKind, O as sanitize, N as storyNameFromExport, G as toId };
