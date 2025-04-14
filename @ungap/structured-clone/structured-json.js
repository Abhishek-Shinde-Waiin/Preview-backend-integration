var StructuredJSON=function(e){"use strict";const r="object"==typeof self?self:globalThis,t=e=>((e,t)=>{const n=(r,t)=>(e.set(t,r),r),s=c=>{if(e.has(c))return e.get(c);const[a,o]=t[c];switch(a){case 0:case-1:return n(o,c);case 1:{const e=n([],c);for(const r of o)e.push(s(r));return e}case 2:{const e=n({},c);for(const[r,t]of o)e[s(r)]=s(t);return e}case 3:return n(new Date(o),c);case 4:{const{source:e,flags:r}=o;return n(new RegExp(e,r),c)}case 5:{const e=n(new Map,c);for(const[r,t]of o)e.set(s(r),s(t));return e}case 6:{const e=n(new Set,c);for(const r of o)e.add(s(r));return e}case 7:{const{name:e,message:t}=o;return n(new r[e](t),c)}case 8:return n(BigInt(o),c);case"BigInt":return n(Object(BigInt(o)),c);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(new r[a](o),c)};return s})(new Map,e)(0),n="",{toString:s}={},{keys:c}=Object,a=e=>{const r=typeof e;if("object"!==r||!e)return[0,r];const t=s.call(e).slice(8,-1);switch(t){case"Array":return[1,n];case"Object":return[2,n];case"Date":return[3,n];case"RegExp":return[4,n];case"Map":return[5,n];case"Set":return[6,n];case"DataView":return[1,t]}return t.includes("Array")?[1,t]:t.includes("Error")?[7,t]:[2,t]},o=([e,r])=>0===e&&("function"===r||"symbol"===r),u=(e,{json:r,lossy:t}={})=>{const n=[];return((e,r,t,n)=>{const s=(e,r)=>{const s=n.push(e)-1;return t.set(r,s),s},u=n=>{if(t.has(n))return t.get(n);let[f,i]=a(n);switch(f){case 0:{let r=n;switch(i){case"bigint":f=8,r=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+i);r=null;break;case"undefined":return s([-1],n)}return s([f,r],n)}case 1:{if(i){let e=n;return"DataView"===i?e=new Uint8Array(n.buffer):"ArrayBuffer"===i&&(e=new Uint8Array(n)),s([i,[...e]],n)}const e=[],r=s([f,e],n);for(const r of n)e.push(u(r));return r}case 2:{if(i)switch(i){case"BigInt":return s([i,n.toString()],n);case"Boolean":case"Number":case"String":return s([i,n.valueOf()],n)}if(r&&"toJSON"in n)return u(n.toJSON());const t=[],l=s([f,t],n);for(const r of c(n))!e&&o(a(n[r]))||t.push([u(r),u(n[r])]);return l}case 3:return s([f,n.toISOString()],n);case 4:{const{source:e,flags:r}=n;return s([f,{source:e,flags:r}],n)}case 5:{const r=[],t=s([f,r],n);for(const[t,s]of n)(e||!o(a(t))&&!o(a(s)))&&r.push([u(t),u(s)]);return t}case 6:{const r=[],t=s([f,r],n);for(const t of n)!e&&o(a(t))||r.push(u(t));return t}}const{message:l}=n;return s([f,{name:i,message:l}],n)};return u})(!(r||t),!!r,new Map,n)(e),n},{parse:f,stringify:i}=JSON,l={json:!0,lossy:!0};return e.parse=e=>t(f(e)),e.stringify=e=>i(u(e,l)),e}({});
