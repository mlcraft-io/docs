"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[3403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||s;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const s={id:"models-page",title:"Models Page",sidebar_label:"Models",slug:"/user-guide/interface/models",sidebar_position:3},a=void 0,i={unversionedId:"user-guide/interface/models-page",id:"version-1.0.0/user-guide/interface/models-page",title:"Models Page",description:"The Models page is a powerful tool for generating and managing models in your project. It allows you to define the structure and relationships of your data, ensuring consistency and integrity. Models are generated using Cube.js, a powerful open-source analytical API platform. You can refer to the Cube.js documentation for more details. Additionally, the page provides features for version controlling your schemas and executing SQL queries on the associated data sources. Here's how you can make the most of this page:",source:"@site/versioned_docs/version-1.0.0/user-guide/interface/models-page.md",sourceDirName:"user-guide/interface",slug:"/user-guide/interface/models",permalink:"/docs/user-guide/interface/models",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/user-guide/interface/models-page.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{id:"models-page",title:"Models Page",sidebar_label:"Models",slug:"/user-guide/interface/models",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Datasources",permalink:"/docs/user-guide/interface/datasources"},next:{title:"Alerts",permalink:"/docs/user-guide/interface/alerts"}},l={},c=[{value:"How to Get Started",id:"how-to-get-started",level:2},{value:"Version Control System",id:"version-control-system",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Models page is a powerful tool for generating and managing models in your project. It allows you to define the structure and relationships of your data, ensuring consistency and integrity. Models are generated using Cube.js, a powerful open-source analytical API platform. You can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://cube.dev/docs/schema/getting-started"},"Cube.js documentation")," for more details. Additionally, the page provides features for version controlling your schemas and executing SQL queries on the associated data sources. Here's how you can make the most of this page:"),(0,r.kt)("h2",{id:"how-to-get-started"},"How to Get Started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To get started, you need to generate data models. Select the "Generate Model" option from the menu (shown in the screenshot below).\n',(0,r.kt)("img",{alt:"Generate Model button",src:n(6395).Z,width:"1500",height:"1000"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the opened window, navigate to the required sections by opening the corresponding tabs and check the boxes next to the tables or metrics you want to analyze. Then, click the "Generate" button (indicated by the arrow in the screenshot below).\n',(0,r.kt)("img",{alt:"Checkboxes",src:n(4973).Z,width:"1500",height:"1000"})))),(0,r.kt)("p",null,"Now you should see the generated data model files in the right column (as shown in the screenshot below). You can freely edit your models as needed, adding and removing measures and dimensions. All your changes will be tracked by the version control system, the details of which are described below."),(0,r.kt)("h2",{id:"version-control-system"},"Version Control System"),(0,r.kt)("p",null,"The version control system tracks changes to the data models, allowing you to revert to previous states of the models."),(0,r.kt)("p",null,'To view the saved versions, open the drop-down menu located at the top left of the page and select the "Show versions" option (as shown in the screenshot below).\n',(0,r.kt)("img",{alt:"Versions",src:n(928).Z,width:"1500",height:"1000"})),(0,r.kt)("p",null,'In the opened window, you will see all the saved versions of the data models (as shown in the screenshot below). By expanding the rows, you can view the files and their contents. To revert to a specific version, simply click the "Restore" button next to it, and it will become the current version.\n',(0,r.kt)("img",{alt:"Restore version",src:n(1127).Z,width:"1500",height:"1000"})),(0,r.kt)("p",null,"Additionally, the version control system allows you to create separate branches of versions, which can help you switch between versions more efficiently than restoring versions within a single branch."),(0,r.kt)("p",null,"To create a branch, open the branch list located in the top left corner of the page, enter the name of the new branch in the field, and click the plus icon button.\n",(0,r.kt)("img",{alt:"New branch",src:n(4653).Z,width:"1500",height:"1000"})),(0,r.kt)("p",null,'This will create a new branch with the current state. To work with the new branch, you need to switch to it and then make it the default branch by clicking the "Set as default" button (shown in the screenshot).\n',(0,r.kt)("img",{alt:"New branch",src:n(4323).Z,width:"1500",height:"1000"})))}h.isMDXComponent=!0},6395:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/models1-85f604f4bfebabeda12c0ee9c73efdd6.png"},4973:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/models2-b5b6eb289bb597c6458442c53e8ea97e.png"},928:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/models3_-b8b9297c1d57d4ea8a6134904a2eb637.png"},1127:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/models4-0abbe1e8133b7bcb7cac5213ce7f2bd4.png"},4653:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/models5-090cf68828f9ce87ba70c5cdd2b3cd0f.png"},4323:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/models6-af87f07b467098a89ae27c6863a73666.png"}}]);