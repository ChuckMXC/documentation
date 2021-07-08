(self.webpackChunkdocv_2=self.webpackChunkdocv_2||[]).push([[513],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9578:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],p={id:"tutorials-runtime-upgrade",title:"Runtime Upgrade",sidebar_label:"Runtime Upgrade"},l=void 0,u={unversionedId:"tutorials/tutorials-runtime-upgrade",id:"tutorials/tutorials-runtime-upgrade",isDocsHomePage:!1,title:"Runtime Upgrade",description:"How to propose a forkless runtime upgrade",source:"@site/docs/tutorials/tutorials-runtime-upgrade.md",sourceDirName:"tutorials",slug:"/tutorials/tutorials-runtime-upgrade",permalink:"/documentation/zh-TW/docs/tutorials/tutorials-runtime-upgrade",editUrl:"https://github.com/DataHighway-DHX/documentation/docs/tutorials/tutorials-runtime-upgrade.md",version:"current",frontMatter:{id:"tutorials-runtime-upgrade",title:"Runtime Upgrade",sidebar_label:"Runtime Upgrade"},sidebar:"tutorialSidebar",previous:{title:"Setup Validator Node",permalink:"/documentation/zh-TW/docs/tutorials/tutorials-nodes-validator-setup"},next:{title:"Whitepaper",permalink:"/documentation/zh-TW/docs/whitepaper"}},s=[{value:"How to propose a forkless runtime upgrade",id:"how-to-propose-a-forkless-runtime-upgrade",children:[{value:"Step 1: Prepare WASM binary",id:"step-1-prepare-wasm-binary",children:[]},{value:"Step 2: Submit a Preimage Hash of the Proposal for a forkless runtime upgrade",id:"step-2-submit-a-preimage-hash-of-the-proposal-for-a-forkless-runtime-upgrade",children:[]},{value:"Step 3: Submit the Proposal",id:"step-3-submit-the-proposal",children:[]},{value:"Reference",id:"reference",children:[]}]}],m={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-propose-a-forkless-runtime-upgrade"},"How to propose a forkless runtime upgrade"),(0,o.kt)("h3",{id:"step-1-prepare-wasm-binary"},"Step 1: Prepare WASM binary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone ",(0,o.kt)("a",{href:"https://github.com/DataHighway-DHX/node",target:"_blank",class:"pretty-link pretty-link-colored"},"node")," repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to the root directory of the cloned project"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd node")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build the Wasm bytecode")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo build --release")),(0,o.kt)("h3",{id:"step-2-submit-a-preimage-hash-of-the-proposal-for-a-forkless-runtime-upgrade"},"Step 2: Submit a Preimage Hash of the Proposal for a forkless runtime upgrade"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("em",{parentName:"p"},"Democracy")," page ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/democracy"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestlake.datahighway.com#/democracy"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The first step is to submit a preimage of the proposal. Click on ",(0,o.kt)("em",{parentName:"p"},"Submit preimage"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("em",{parentName:"p"},"sudo")," as extrinsic and select ",(0,o.kt)("em",{parentName:"p"},"sudoUncheckedWeight")," as function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("em",{parentName:"p"},"system")," as call and ",(0,o.kt)("em",{parentName:"p"},"setCode")," as function ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("em",{parentName:"p"},"code")," input field, and select the Wasm binary that defines the upgraded runtime:\n",(0,o.kt)("inlineCode",{parentName:"p"},"target/release/wbuild/datahighway-runtime/datahighway_runtime.compact.wasm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy the preimage hash. This represents the proposal. You will use this hash when submitting the actual proposal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Leave the value for the _weight parameter at the default of 0.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click "Submit Transaction" and then "Sign and Submit".'))),(0,o.kt)("h3",{id:"step-3-submit-the-proposal"},"Step 3: Submit the Proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the account from which you want to submit the proposal. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the preimage hash related to the proposal. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the locked balance. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("em",{parentName:"p"},"Submit proposal")," button and sign the transaction"))),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/maintain-guides-democracy/#proposing-an-action"},"Participating in Democracy on Kusama and Polkadot"))))}c.isMDXComponent=!0}}]);