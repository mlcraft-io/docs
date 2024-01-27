"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[9552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"dremio",title:"Dremio",slug:"/testing-and-debugging/tests/data-source/dremio",sidebar_label:"Dremio"},i="Dremio",s={unversionedId:"testing-and-debugging /tests/data-source/dremio/dremio",id:"version-1.1.0/testing-and-debugging /tests/data-source/dremio/dremio",title:"Dremio",description:"Tested on the dremio/dremio-oss:latest image.",source:"@site/versioned_docs/version-1.1.0/testing-and-debugging /tests/data-source/dremio/index.md",sourceDirName:"testing-and-debugging /tests/data-source/dremio",slug:"/testing-and-debugging/tests/data-source/dremio",permalink:"/docs/testing-and-debugging/tests/data-source/dremio",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.1.0/testing-and-debugging /tests/data-source/dremio/index.md",tags:[],version:"1.1.0",frontMatter:{id:"dremio",title:"Dremio",slug:"/testing-and-debugging/tests/data-source/dremio",sidebar_label:"Dremio"},sidebar:"tutorialSidebar",previous:{title:"Databricks",permalink:"/docs/usage/user-guide/data-source/databricks"},next:{title:"Druid",permalink:"/docs/testing-and-debugging/tests/data-source/druid"}},d={},c=[{value:"Step 1: Navigate to the Dremio example directory",id:"step-1-navigate-to-the-dremio-example-directory",level:2},{value:"Step 2: Run the Dremio service using the script",id:"step-2-run-the-dremio-service-using-the-script",level:2},{value:"Step 3: Create an administrator account and add a data source in Dremio",id:"step-3-create-an-administrator-account-and-add-a-data-source-in-dremio",level:2},{value:"Step 4: Add a data source in the Synmetrix UI",id:"step-4-add-a-data-source-in-the-synmetrix-ui",level:2},{value:"Step 5: Test the connection",id:"step-5-test-the-connection",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dremio"},"Dremio"),(0,a.kt)("p",null,"Tested on the ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/dremio/dremio-oss"},"dremio/dremio-oss:latest")," image."),(0,a.kt)("h2",{id:"step-1-navigate-to-the-dremio-example-directory"},"Step 1: Navigate to the Dremio example directory"),(0,a.kt)("p",null,"Navigate to the Dremio example directory located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/examples/dremio")," in the root of the Synmetrix project. You can also download this directory from the GitHub repository. To navigate to the directory, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./docs/examples/dremio\n")),(0,a.kt)("h2",{id:"step-2-run-the-dremio-service-using-the-script"},"Step 2: Run the Dremio service using the script"),(0,a.kt)("p",null,"In the Dremio example directory, there is a script called ",(0,a.kt)("inlineCode",{parentName:"p"},"run_dremio.sh"),". Make sure the script is executable by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x run_dremio.sh\n")),(0,a.kt)("p",null,"Then, start the Dremio service by running the script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./run_dremio.sh\n")),(0,a.kt)("p",null,"After the script has finished running, it will return the host IP address of your machine. Take note of this IP address for the next step."),(0,a.kt)("h2",{id:"step-3-create-an-administrator-account-and-add-a-data-source-in-dremio"},"Step 3: Create an administrator account and add a data source in Dremio"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your web browser and go to http://localhost:9047."),(0,a.kt)("li",{parentName:"ol"},"Follow the prompts to create an administrator account."),(0,a.kt)("li",{parentName:"ol"},"Log in to the Dremio UI with your new account."),(0,a.kt)("li",{parentName:"ol"},'Click on "Add Source" and select "PostgreSQL" from the list of available data sources.'),(0,a.kt)("li",{parentName:"ol"},"Use the credentials provided at ",(0,a.kt)("a",{parentName:"li",href:"https://uibakery.io/sql-playground"},"https://uibakery.io/sql-playground")," to configure the PostgreSQL data source.")),(0,a.kt)("h2",{id:"step-4-add-a-data-source-in-the-synmetrix-ui"},"Step 4: Add a data source in the Synmetrix UI"),(0,a.kt)("p",null,"Go to the Synmetrix UI and add a new data source with the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Host: host_ip (obtained from the script in Step 2)"),(0,a.kt)("li",{parentName:"ul"},"Port: 9047"),(0,a.kt)("li",{parentName:"ul"},"Database name: Name given to the connection in Dremio"),(0,a.kt)("li",{parentName:"ul"},"User: Dremio administrator username"),(0,a.kt)("li",{parentName:"ul"},"Password: Dremio administrator password")),(0,a.kt)("h2",{id:"step-5-test-the-connection"},"Step 5: Test the connection"),(0,a.kt)("p",null,'Click the "Check connection" button in the Synmetrix UI to verify the connection to the Dremio data source. If the connection is successful, you will see a confirmation message.'))}m.isMDXComponent=!0}}]);