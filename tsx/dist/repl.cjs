"use strict";var c=Object.defineProperty;var s=(e,r)=>c(e,"name",{value:r,configurable:!0});var l=require("node:repl"),u=require("./package-BUuKnQXZ.cjs"),q=require("./index-B4SIRlEU.cjs");require("node:url"),require("esbuild"),require("node:crypto"),require("node:fs"),require("node:path"),require("node:os"),require("./temporary-directory-B83uKxJF.cjs"),console.log(`Welcome to tsx v${u.version} (Node.js ${process.version}).
Type ".help" for more information.`);const t=l.start(),{eval:p}=t,v=s(async function(e,r,o,i){const a=await q.transform(e,o,{loader:"ts",tsconfigRaw:{compilerOptions:{preserveValueImports:!0}},define:{require:"global.require"}}).catch(n=>(console.log(n.message),{code:`
`}));return p.call(this,a.code,r,o,i)},"preEval");t.eval=v;
