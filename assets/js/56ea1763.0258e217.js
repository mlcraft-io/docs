"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[1853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),p=i,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<c;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),i=r(6010),c=r(3438),a=r(9960),o=r(3919),s=r(5999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer)},r)}function u(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a},a))}function m(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},4498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905)),c=r(2991);const a={id:"architecture-and-design",title:"Architecture and Design",slug:"/architecture-and-design",sidebar_label:"Architecture and design",sidebar_position:5},o=void 0,s={unversionedId:"architecture-and-design/architecture-and-design",id:"architecture-and-design/architecture-and-design",title:"Architecture and Design",description:"Synmetrix System Architecture",source:"@site/docs/architecture-and-design/index.md",sourceDirName:"architecture-and-design",slug:"/architecture-and-design",permalink:"/docs/next/architecture-and-design",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture-and-design/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"architecture-and-design",title:"Architecture and Design",slug:"/architecture-and-design",sidebar_label:"Architecture and design",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/docs/next/production-deployment/requirements/"},next:{title:"Database Design",permalink:"/docs/next/architecture-and-design/database-design"}},d={},l=[],u={toc:l},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Synmetrix System Architecture",src:r(5414).Z,width:"2400",height:"602"})),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0},5414:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture2-aea048da4f722043ca01e97555981b56.png"}}]);