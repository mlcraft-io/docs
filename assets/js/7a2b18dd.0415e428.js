"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[8563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"cli-tests",title:"CLI Tests",slug:"/tests/cli",sidebar_position:3,description:"CLI tests for the Synmetrix platform."},s=void 0,l={unversionedId:"tests/cli/cli-tests",id:"tests/cli/cli-tests",title:"CLI Tests",description:"CLI tests for the Synmetrix platform.",source:"@site/docs/tests/cli/index.md",sourceDirName:"tests/cli",slug:"/tests/cli",permalink:"/docs/next/tests/cli",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/docs/tests/cli/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cli-tests",title:"CLI Tests",slug:"/tests/cli",sidebar_position:3,description:"CLI tests for the Synmetrix platform."},sidebar:"tutorialSidebar",previous:{title:"Frontend Tests",permalink:"/docs/next/tests/frontend"},next:{title:"Links and Contacts",permalink:"/docs/next/links-and-contacts"}},a={},c=[{value:"References",id:"references",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To run CLI tests, follow these simple steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a terminal on your computer."),(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"cli/")," directory within your project by using the command ",(0,i.kt)("inlineCode",{parentName:"li"},"cd path/to/your/project/cli/"),"."),(0,i.kt)("li",{parentName:"ol"},"Once in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cli/")," directory, first ensure that all dependencies are up to date by running ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn"),". If you haven't installed Yarn, you may need to install it first."),(0,i.kt)("li",{parentName:"ol"},"After updating/installing dependencies, initiate the CLI tests by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn tests"),".")),(0,i.kt)("p",null,"This process will run the test suite associated with the CLI, and you'll be able to see the test results directly in your terminal, including which tests passed and which, if any, failed."),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../development/cli"},"Synmetrix CLI"))))}d.isMDXComponent=!0}}]);