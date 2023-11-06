"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[4690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={id:"materialize",title:"Materialize",slug:"/testing-and-debugging/tests/data-source/materialize",sidebar_label:"Materialize"},s=void 0,o={unversionedId:"testing-and-debugging /tests/data-source/materialize/materialize",id:"version-1.0.0/testing-and-debugging /tests/data-source/materialize/materialize",title:"Materialize",description:"Tested on the materialize/materialized:latest image.",source:"@site/versioned_docs/version-1.0.0/testing-and-debugging /tests/data-source/materialize/index.md",sourceDirName:"testing-and-debugging /tests/data-source/materialize",slug:"/testing-and-debugging/tests/data-source/materialize",permalink:"/docs/testing-and-debugging/tests/data-source/materialize",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/testing-and-debugging /tests/data-source/materialize/index.md",tags:[],version:"1.0.0",frontMatter:{id:"materialize",title:"Materialize",slug:"/testing-and-debugging/tests/data-source/materialize",sidebar_label:"Materialize"},sidebar:"tutorialSidebar",previous:{title:"KSQL",permalink:"/docs/testing-and-debugging/tests/data-source/ksql"},next:{title:"Presto",permalink:"/docs/testing-and-debugging/tests/data-source/presto"}},l={},c=[{value:"Step 1: Navigate to the Materialize example directory",id:"step-1-navigate-to-the-materialize-example-directory",level:2},{value:"Step 2: Run the Materialize service using the script",id:"step-2-run-the-materialize-service-using-the-script",level:2},{value:"Step 3: Add a data source in the Synmetrix UI",id:"step-3-add-a-data-source-in-the-synmetrix-ui",level:2},{value:"Step 4: Test the connection",id:"step-4-test-the-connection",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tested on the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/materialize/materialized"},"materialize/materialized:latest")," image."),(0,i.kt)("h2",{id:"step-1-navigate-to-the-materialize-example-directory"},"Step 1: Navigate to the Materialize example directory"),(0,i.kt)("p",null,"Navigate to the Materialize example directory located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/examples/materialize")," in the root of the Synmetrix project. You can also download this directory from the GitHub repository. To navigate to the directory, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./docs/examples/materialize\n")),(0,i.kt)("h2",{id:"step-2-run-the-materialize-service-using-the-script"},"Step 2: Run the Materialize service using the script"),(0,i.kt)("p",null,"In the Materialize example directory, there is a script called ",(0,i.kt)("inlineCode",{parentName:"p"},"run_materialize.sh"),". Make sure the script is executable by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x run_materialize.sh\n")),(0,i.kt)("p",null,"Then, start the Materialize service by running the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./run_materialize.sh\n")),(0,i.kt)("p",null,"After the script has finished running, it will return the host IP address of your machine. Take note of this IP address for the next step."),(0,i.kt)("h2",{id:"step-3-add-a-data-source-in-the-synmetrix-ui"},"Step 3: Add a data source in the Synmetrix UI"),(0,i.kt)("p",null,"Go to the Synmetrix UI and add a new data source with the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host: Host IP (obtained from the script in Step 2)"),(0,i.kt)("li",{parentName:"ul"},"Port: 6875"),(0,i.kt)("li",{parentName:"ul"},"Database name: Test"),(0,i.kt)("li",{parentName:"ul"},"User: user")),(0,i.kt)("h2",{id:"step-4-test-the-connection"},"Step 4: Test the connection"),(0,i.kt)("p",null,'Click the "Check connection" button in the Synmetrix UI to verify the connection to the Materialize data source. If the connection is successful, you will see a confirmation message.'))}p.isMDXComponent=!0}}]);