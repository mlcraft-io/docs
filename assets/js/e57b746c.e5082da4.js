"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[2946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),i=r(6010),o=r(3438),a=r(9960),c=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},3738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),o=r(2991);const a={id:"user-guide",title:"User Guide",slug:"/user-guide/",sidebar_label:"User Guide",sidebar_position:8},c=void 0,s={unversionedId:"user-guide/user-guide",id:"version-1.1.0/user-guide/user-guide",title:"User Guide",description:"User Guide",source:"@site/versioned_docs/version-1.1.0/user-guide/index.md",sourceDirName:"user-guide",slug:"/user-guide/",permalink:"/docs/user-guide/",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.1.0/user-guide/index.md",tags:[],version:"1.1.0",sidebarPosition:8,frontMatter:{id:"user-guide",title:"User Guide",slug:"/user-guide/",sidebar_label:"User Guide",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"SQL Interface",permalink:"/docs/sql-interface"},next:{title:"Explore Page",permalink:"/docs/user-guide/explore"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User Guide",src:r(1171).Z,width:"2400",height:"601"})),(0,i.kt)("p",null,"This documentation provides an in-depth guide to the various pages and features of the Synmetrix interface. Here, you will find detailed information and instructions on how to utilize each page effectively."),(0,i.kt)("p",null,"The interface documentation is organized into separate pages, each focusing on a specific aspect of the Synmetrix interface. Below are the links to the documentation for each page:"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}),(0,i.kt)("p",null,"Feel free to explore the documentation for each page to gain a comprehensive understanding of the Synmetrix interface and its functionalities."),(0,i.kt)("p",null,"Happy exploring and analyzing data with Synmetrix!"))}m.isMDXComponent=!0},1171:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/guide-550007829b60ab123534d29f8982a43d.png"}}]);