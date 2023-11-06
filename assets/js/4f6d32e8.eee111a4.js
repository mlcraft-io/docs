"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[2565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=n,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"crate",title:"Crate",slug:"/testing-and-debugging/tests/data-source/crate",sidebar_label:"CrateDB"},o=void 0,s={unversionedId:"testing-and-debugging /tests/data-source/crate/crate",id:"version-1.0.0/testing-and-debugging /tests/data-source/crate/crate",title:"Crate",description:"Tested on the crate:5.3.0 image.",source:"@site/versioned_docs/version-1.0.0/testing-and-debugging /tests/data-source/crate/index.md",sourceDirName:"testing-and-debugging /tests/data-source/crate",slug:"/testing-and-debugging/tests/data-source/crate",permalink:"/docs/testing-and-debugging/tests/data-source/crate",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/testing-and-debugging /tests/data-source/crate/index.md",tags:[],version:"1.0.0",frontMatter:{id:"crate",title:"Crate",slug:"/testing-and-debugging/tests/data-source/crate",sidebar_label:"CrateDB"},sidebar:"tutorialSidebar",previous:{title:"Test a Data Source",permalink:"/docs/testing-and-debugging/tests/data-source"},next:{title:"Databricks",permalink:"/docs/usage/user-guide/data-source/databricks"}},c={},l=[{value:"Step 1: Navigate to the CrateDB example directory",id:"step-1-navigate-to-the-cratedb-example-directory",level:2},{value:"Step 2: Run the CrateDB service using the script",id:"step-2-run-the-cratedb-service-using-the-script",level:2},{value:"Step 3: Add a data source in the UI",id:"step-3-add-a-data-source-in-the-ui",level:2},{value:"Step 4: Test the connection",id:"step-4-test-the-connection",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Tested on the ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/crate"},"crate:5.3.0")," image."),(0,n.kt)("h2",{id:"step-1-navigate-to-the-cratedb-example-directory"},"Step 1: Navigate to the CrateDB example directory"),(0,n.kt)("p",null,"Navigate to the CrateDB example directory located at ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs/examples/crate")," in the root of the project. You can also download this directory from the GitHub repository. To navigate to the directory, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./docs/examples/crate\n")),(0,n.kt)("h2",{id:"step-2-run-the-cratedb-service-using-the-script"},"Step 2: Run the CrateDB service using the script"),(0,n.kt)("p",null,"In the CrateDB example directory, there is a script called ",(0,n.kt)("inlineCode",{parentName:"p"},"run_crate.sh"),". Make sure the script is executable by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x run_crate.sh\n")),(0,n.kt)("p",null,"Then, start the CrateDB service by running the script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./run_crate.sh\n")),(0,n.kt)("p",null,"After the script has finished running, it will return the host IP address of your machine. Take note of this IP address for the next step."),(0,n.kt)("h2",{id:"step-3-add-a-data-source-in-the-ui"},"Step 3: Add a data source in the UI"),(0,n.kt)("p",null,"Go to the UI and add a new Crate data source with the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Crate"),(0,n.kt)("li",{parentName:"ul"},"Host: Host IP (obtained from the script in Step 2)"),(0,n.kt)("li",{parentName:"ul"},"Port: 4200"),(0,n.kt)("li",{parentName:"ul"},"User: crate")),(0,n.kt)("h2",{id:"step-4-test-the-connection"},"Step 4: Test the connection"),(0,n.kt)("p",null,'Click the "Check connection" button in the UI to verify the connection to the CrateDB data source. If the connection is successful, you will see a confirmation message.'))}p.isMDXComponent=!0}}]);