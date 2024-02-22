"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[9399],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||i;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},380:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={id:"Requirements",title:"Requirements",slug:"/production-deployment/requirements/",type:"category",description:"Synmetrix system requirements for software and hardware.",sidebar_position:1},a=void 0,s={unversionedId:"production-deployment/requirements/Requirements",id:"production-deployment/requirements/Requirements",title:"Requirements",description:"Synmetrix system requirements for software and hardware.",source:"@site/docs/production-deployment/requirements/index.md",sourceDirName:"production-deployment/requirements",slug:"/production-deployment/requirements/",permalink:"/docs/next/production-deployment/requirements/",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/docs/production-deployment/requirements/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Requirements",title:"Requirements",slug:"/production-deployment/requirements/",type:"category",description:"Synmetrix system requirements for software and hardware.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Production Deployment",permalink:"/docs/next/production-deployment"},next:{title:"Docker Swarm",permalink:"/docs/next/docker-swarm"}},u={},p=[{value:"Software Requirements",id:"software-requirements",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2}],c={toc:p},l="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"software-requirements"},"Software Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js (Version 20.8.1 or above)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("p",null,"Synmetrix is intended for installation and use on servers equipped with processors supporting x86-64 architecture and based on operating systems such as Ubuntu Server 18.04 and higher."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minimum Hardware Requirements"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"- Processor (CPU): 3.2 GHz or higher, modern processor with multi-threading and virtualization support.\n- RAM: 8 GB or more to handle computational tasks and data processing.\n- Disk Space: At least 30 GB of free space for software installation and storing working data.\n- Network: Internet connectivity is required for cloud services and software updates.\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," These requirements are minimum and may vary depending on specific use cases and data processing volumes. Scaling the solution may require more powerful servers or distributed systems.")))}d.isMDXComponent=!0}}]);