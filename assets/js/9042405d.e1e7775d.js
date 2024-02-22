"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[2943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,f=d["".concat(a,".").concat(u)]||d[u]||p[u]||s;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,c=new Array(s);c[0]=u;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[d]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),i=r(6010),s=r(3438),c=r(9960),o=r(3919),a=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:s,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:s},r," ",s),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c},c))}function p(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,s.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},8606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>m});var n=r(7462),i=(r(7294),r(3905)),s=r(2991);const c={id:"tests",title:"Tests",slug:"/tests",sidebar_label:"Tests",sidebar_position:9},o=void 0,a={unversionedId:"tests/tests",id:"tests/tests",title:"Tests",description:"Testing",source:"@site/docs/tests/index.md",sourceDirName:"tests",slug:"/tests",permalink:"/docs/next/tests",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/docs/tests/index.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"tests",title:"Tests",slug:"/tests",sidebar_label:"Tests",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Docker Swarm",permalink:"/docs/next/docker-swarm"},next:{title:"StepCI Integration Tests",permalink:"/docs/next/tests/stepci"}},l={},m=[],d={toc:m},p="wrapper";function u(e){let{components:t,...c}=e;return(0,i.kt)(p,(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Testing",src:r(9018).Z,width:"2400",height:"602"})),(0,i.kt)(s.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},9018:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/testing-80c65398886b9bab7ebb4403f222ff44.png"}}]);