"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[1128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>k});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,k=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return t?n.createElement(k,s(s({ref:r},m),{},{components:t})):n.createElement(k,s({ref:r},m))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},848:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={id:"docker-swarm",title:"Docker Swarm deployment guide",slug:"/docker-swarm",sidebar_label:"Docker Swarm"},s="Docker Swarm deployment guide",i={unversionedId:"production-deployment/docker-swarm/docker-swarm",id:"version-1.0.0/production-deployment/docker-swarm/docker-swarm",title:"Docker Swarm deployment guide",description:"For deploying Synmetrix in a production environment, Docker Swarm is recommended. This guide will assist you in setting up Synmetrix on a Docker Swarm cluster.",source:"@site/versioned_docs/version-1.0.0/production-deployment/docker-swarm/index.md",sourceDirName:"production-deployment/docker-swarm",slug:"/docker-swarm",permalink:"/docs/docker-swarm",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/production-deployment/docker-swarm/index.md",tags:[],version:"1.0.0",frontMatter:{id:"docker-swarm",title:"Docker Swarm deployment guide",slug:"/docker-swarm",sidebar_label:"Docker Swarm"},sidebar:"tutorialSidebar",previous:{title:"Production Deployment",permalink:"/docs/production-deployment"},next:{title:"Requirements",permalink:"/docs/production-deployment/requirements/"}},l={},c=[{value:"Start Synmetrix on Docker Swarm",id:"start-synmetrix-on-docker-swarm",level:2},{value:"Step 1 - Run Docker Registry",id:"step-1---run-docker-registry",level:3},{value:"Step 2 - Run Synmetrix services",id:"step-2---run-synmetrix-services",level:3},{value:"Step 3 - Run migrations",id:"step-3---run-migrations",level:3},{value:"Destroy stack",id:"destroy-stack",level:3},{value:"Show logs",id:"show-logs",level:3},{value:"Show stack tasks status",id:"show-stack-tasks-status",level:3}],m={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-swarm-deployment-guide"},"Docker Swarm deployment guide"),(0,o.kt)("p",null,"For deploying Synmetrix in a production environment, Docker Swarm is recommended. This guide will assist you in setting up Synmetrix on a Docker Swarm cluster."),(0,o.kt)("p",null,"Synmetrix provides a CLI tool for managing services and stacks, which can be utilized for deploying Synmetrix on a Docker Swarm cluster."),(0,o.kt)("h2",{id:"start-synmetrix-on-docker-swarm"},"Start Synmetrix on Docker Swarm"),(0,o.kt)("p",null,"Go to the Synmetrix project directory and run the following commands:"),(0,o.kt)("h3",{id:"step-1---run-docker-registry"},"Step 1 - Run Docker Registry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run-registry.sh\n")),(0,o.kt)("h3",{id:"step-2---run-synmetrix-services"},"Step 2 - Run Synmetrix services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"DOMAIN=localhost REGISTRY_HOST=127.0.0.1:50001 ./cli.sh swarm up --init --env stage synmetrix \n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMAIN")," is the domain name of your Synmetrix instance and ",(0,o.kt)("inlineCode",{parentName:"p"},"REGISTRY_HOST")," is the host of the Docker registry."),(0,o.kt)("h3",{id:"step-3---run-migrations"},"Step 3 - Run migrations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./migrate.sh\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"destroy-stack"},"Destroy stack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./cli.sh swarm destroy synmetrix \n")),(0,o.kt)("h3",{id:"show-logs"},"Show logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./cli.sh swarm logs synmetrix_hasura\n")),(0,o.kt)("h3",{id:"show-stack-tasks-status"},"Show stack tasks status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./cli.sh swarm ps synmetrix\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For more information about the CLI tool, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./cli.sh swarm --help\n")))}p.isMDXComponent=!0}}]);