"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[5753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),g=n,f=l["".concat(d,".").concat(g)]||l[g]||p[g]||s;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={id:"settings-data-sources",title:"Data Sources",slug:"/user-guide/settings/data-sources",sidebar_label:"Data Sources"},o="Data Sources Settings",i={unversionedId:"user-guide/settings/data-sources/settings-data-sources",id:"user-guide/settings/data-sources/settings-data-sources",title:"Data Sources",description:"The Datasources page provides a user-friendly interface for adding various datasources to your project. It offers a wide selection of possible databases, drivers, and other data storage solutions, giving you flexibility in choosing the right option for your needs. To add a data source, follow these steps:",source:"@site/docs/user-guide/settings/data-sources/index.md",sourceDirName:"user-guide/settings/data-sources",slug:"/user-guide/settings/data-sources",permalink:"/docs/next/user-guide/settings/data-sources",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/docs/user-guide/settings/data-sources/index.md",tags:[],version:"current",frontMatter:{id:"settings-data-sources",title:"Data Sources",slug:"/user-guide/settings/data-sources",sidebar_label:"Data Sources"},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/next/user-guide/settings"},next:{title:"Members",permalink:"/docs/next/user-guide/settings/members"}},d={},c=[{value:"How to Add a Data Source",id:"how-to-add-a-data-source",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3}],u={toc:c},l="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(l,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-sources-settings"},"Data Sources Settings"),(0,n.kt)("p",null,"The Datasources page provides a user-friendly interface for adding various datasources to your project. It offers a wide selection of possible databases, drivers, and other data storage solutions, giving you flexibility in choosing the right option for your needs. To add a data source, follow these steps:"),(0,n.kt)("h2",{id:"how-to-add-a-data-source"},"How to Add a Data Source"),(0,n.kt)("h3",{id:"step-1"},"Step 1"),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},'"Connect"')," button.\n",(0,n.kt)("img",{alt:"Datasource Connect button",src:r(3773).Z,width:"1500",height:"1000"})),(0,n.kt)("h3",{id:"step-2"},"Step 2"),(0,n.kt)("p",null,"A list of available datasource types will be displayed. Select the desired type from the options presented.\n",(0,n.kt)("img",{alt:"Datasource Creation Form",src:r(8550).Z,width:"1500",height:"1000"})),(0,n.kt)("h3",{id:"step-3"},"Step 3"),(0,n.kt)("p",null,"In the opened modal window, fill in all the required fields in the form. These fields may include connection details, authentication credentials, and other relevant information."),(0,n.kt)("p",null,"   On the screenshot below, you can see a modal window with the datasource creation form.\n",(0,n.kt)("img",{alt:"Datasource Creation Form",src:r(1647).Z,width:"1500",height:"1000"})),(0,n.kt)("admonition",{title:"Test Connection",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"   To test the connection to the datasource, click the ",(0,n.kt)("strong",{parentName:"p"},'"Test connection"'),' button. To save the entered data and create the datasource, click the "Save" button.')),(0,n.kt)("admonition",{title:"Fast Switching Data Sources in Synmetrix",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In Synmetrix, switching between data sources is a straightforward process. You can find the data models dropdown in the sidebar menu of both the ",(0,n.kt)("a",{parentName:"p",href:"/docs/user-guide/models"},'"Models"')," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/user-guide/explore"},'"Explore"')," pages. Simply access this menu to view and select from the available data sources. This dropdown is conveniently placed to ensure ease of access, enhancing your experience by allowing quick and efficient transitions between various data repositories within Synmetrix.")))}p.isMDXComponent=!0},3773:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/data1-aa3c25136251ff89d2debd570aeb0388.png"},1647:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/data2-0906ea19eba724e904ded352480333bf.png"},8550:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/data3-27492a8b3ee3b48f29b953ff60b4b842.png"}}]);