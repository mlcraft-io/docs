"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[1876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={id:"system-architecture",title:"System Architecture",slug:"/architecture-and-design/system-architecture",sidebar_label:"System Architecture"},s="Synmetrix System Architecture",o={unversionedId:"architecture-and-design/system-architecture/system-architecture",id:"architecture-and-design/system-architecture/system-architecture",title:"System Architecture",description:"The architecture of the Synmetrix system has been meticulously designed with a focus on details, taking into account the core requirements of scalability, reliability, and flexibility. When creating the architecture, modern technologies were utilized, including the following key components:",source:"@site/docs/architecture-and-design/system-architecture/index.md",sourceDirName:"architecture-and-design/system-architecture",slug:"/architecture-and-design/system-architecture",permalink:"/docs/next/architecture-and-design/system-architecture",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/docs/architecture-and-design/system-architecture/index.md",tags:[],version:"current",frontMatter:{id:"system-architecture",title:"System Architecture",slug:"/architecture-and-design/system-architecture",sidebar_label:"System Architecture"},sidebar:"tutorialSidebar",previous:{title:"Database Design",permalink:"/docs/next/architecture-and-design/database-design"},next:{title:"Caching",permalink:"/docs/next/caching"}},c={},l=[{value:"Hasura",id:"hasura",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Node.js",id:"nodejs",level:2},{value:"React.js",id:"reactjs",level:2},{value:"Cube.js",id:"cubejs",level:2},{value:"CubeStore",id:"cubestore",level:2},{value:"Redis",id:"redis",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker Swarm",id:"docker-swarm",level:2},{value:"Ubuntu",id:"ubuntu",level:2},{value:"Interactions between architecture components",id:"interactions-between-architecture-components",level:2}],u={toc:l},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"synmetrix-system-architecture"},"Synmetrix System Architecture"),(0,i.kt)("p",null,"The architecture of the Synmetrix system has been meticulously designed with a focus on details, taking into account the core requirements of scalability, reliability, and flexibility. When creating the architecture, modern technologies were utilized, including the following key components:"),(0,i.kt)("h2",{id:"hasura"},(0,i.kt)("a",{parentName:"h2",href:"https://hasura.io/"},"Hasura")),(0,i.kt)("p",null,"Hasura plays a crucial role in the system by connecting to the database and providing a GraphQL API for external services and applications. Hasura simplifies working with the database, offering intuitive and powerful tools for quickly creating queries and mutations in GraphQL, thereby enhancing performance and optimizing data-related workflows."),(0,i.kt)("h2",{id:"postgresql"},(0,i.kt)("a",{parentName:"h2",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,i.kt)("p",null,"PostgreSQL has been chosen as the primary database management system due to its reliability, high performance, and flexibility. This allows for efficient handling of large volumes of data while ensuring excellent performance and stability."),(0,i.kt)("h2",{id:"nodejs"},(0,i.kt)("a",{parentName:"h2",href:"https://nodejs.org/"},"Node.js")),(0,i.kt)("p",null,"Node.js is the server-side platform used to create the backend of the application. Node.js is known for its ability to easily and rapidly develop scalable networked applications, thanks to efficient handling of asynchronous operations and event processing."),(0,i.kt)("h2",{id:"reactjs"},(0,i.kt)("a",{parentName:"h2",href:"https://reactjs.org/"},"React.js")),(0,i.kt)("p",null,"React.js is a library for developing user interfaces. It provides high performance and simplifies the development process through the use of a component-based architecture."),(0,i.kt)("h2",{id:"cubejs"},(0,i.kt)("a",{parentName:"h2",href:"https://cube.dev/"},"Cube.js")),(0,i.kt)("p",null,"Cube.js is an open-source analytics platform for building business analytics applications using JavaScript. In Synmetrix, Cube.js is used to manage business metrics, providing efficient tools for data processing."),(0,i.kt)("h2",{id:"cubestore"},(0,i.kt)("a",{parentName:"h2",href:"https://cubestore.dev/"},"CubeStore")),(0,i.kt)("p",null,"CubeStore is a distributed database optimized for analytical queries and integrated with Cube.js. It offers capabilities for fast and efficient processing of large volumes of data."),(0,i.kt)("h2",{id:"redis"},(0,i.kt)("a",{parentName:"h2",href:"https://redis.io/"},"Redis")),(0,i.kt)("p",null,"Redis is a key-value database management system known for its high performance and flexibility. It offers unique features, including support for various data structures such as strings, lists, sets, hashes, and more."),(0,i.kt)("h2",{id:"docker"},(0,i.kt)("a",{parentName:"h2",href:"https://www.docker.com/"},"Docker")),(0,i.kt)("p",null,"Docker is used for containerization and simplifying the application deployment process, ensuring consistent functionality in any environment."),(0,i.kt)("h2",{id:"docker-swarm"},(0,i.kt)("a",{parentName:"h2",href:"https://docs.docker.com/swarm/"},"Docker Swarm")),(0,i.kt)("p",null,"Docker Swarm is an orchestration and management tool for containers deployed using Docker. It allows for the management and scaling of applications across multiple servers, making infrastructure management easier."),(0,i.kt)("h2",{id:"ubuntu"},(0,i.kt)("a",{parentName:"h2",href:"https://ubuntu.com/"},"Ubuntu")),(0,i.kt)("p",null,"Ubuntu has been chosen as the primary operating system for the servers hosting all the services. It is a stable and reliable system well-suited for server environments."),(0,i.kt)("h2",{id:"interactions-between-architecture-components"},"Interactions between architecture components"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interactions between architecture components",src:r(8555).Z,width:"1456",height:"564"})),(0,i.kt)("p",null,"Additionally, Synmetrix has been designed as a microservices-based system. Each microservice performs a specific function and can scale independently of others, providing flexibility and scalability to the system. This architecture allows for the independent updating and modernization of individual system components, simplifying the development and maintenance process of the system as a whole."))}h.isMDXComponent=!0},8555:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-f91267105174e1733a2b3b26e910bdbf.png"}}]);