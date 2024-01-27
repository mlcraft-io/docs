"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[5817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=s,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={id:"ksql",title:"KSQL",slug:"/testing-and-debugging/tests/data-source/ksql",sidebar_label:"KSQL"},i=void 0,o={unversionedId:"testing-and-debugging /tests/data-source/ksql/ksql",id:"version-1.1.0/testing-and-debugging /tests/data-source/ksql/ksql",title:"KSQL",description:"Tested on the confluentinc/cp-ksqldb-server:7.0.9 image.",source:"@site/versioned_docs/version-1.1.0/testing-and-debugging /tests/data-source/ksql/index.md",sourceDirName:"testing-and-debugging /tests/data-source/ksql",slug:"/testing-and-debugging/tests/data-source/ksql",permalink:"/docs/testing-and-debugging/tests/data-source/ksql",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.1.0/testing-and-debugging /tests/data-source/ksql/index.md",tags:[],version:"1.1.0",frontMatter:{id:"ksql",title:"KSQL",slug:"/testing-and-debugging/tests/data-source/ksql",sidebar_label:"KSQL"},sidebar:"tutorialSidebar",previous:{title:"Firebolt",permalink:"/docs/testing-and-debugging/tests/data-source/firebolt"},next:{title:"Materialize",permalink:"/docs/testing-and-debugging/tests/data-source/materialize"}},l={},c=[{value:"Step 1: Navigate to the ksql example directory",id:"step-1-navigate-to-the-ksql-example-directory",level:2},{value:"Step 2: Run the ksql service using the script",id:"step-2-run-the-ksql-service-using-the-script",level:2},{value:"Step 3: Add a datasource in the Synmetrix UI",id:"step-3-add-a-datasource-in-the-synmetrix-ui",level:2},{value:"Step 4: Test the connection",id:"step-4-test-the-connection",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Tested on the ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/confluentinc/cp-ksqldb-server"},"confluentinc/cp-ksqldb-server:7.0.9")," image."),(0,s.kt)("h2",{id:"step-1-navigate-to-the-ksql-example-directory"},"Step 1: Navigate to the ksql example directory"),(0,s.kt)("p",null,"Navigate to the ksql example directory located at ",(0,s.kt)("inlineCode",{parentName:"p"},"/docs/examples/ksql")," in the root of the Synmetrix project. You can also download this directory from the GitHub repository. To navigate to the directory, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./docs/examples/ksql\n")),(0,s.kt)("h2",{id:"step-2-run-the-ksql-service-using-the-script"},"Step 2: Run the ksql service using the script"),(0,s.kt)("p",null,"In the ksql example directory, there is a script called ",(0,s.kt)("inlineCode",{parentName:"p"},"run_ksql.sh"),". Make sure the script is executable by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x run_ksql.sh\n")),(0,s.kt)("p",null,"Then, start the ksql service by running the script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./run_ksql.sh\n")),(0,s.kt)("p",null,"After the script has finished running, it will return the host IP address of your machine. Take note of this IP address for the next step."),(0,s.kt)("h2",{id:"step-3-add-a-datasource-in-the-synmetrix-ui"},"Step 3: Add a datasource in the Synmetrix UI"),(0,s.kt)("p",null,"Go to the Synmetrix UI and add a new datasource with the following parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Host: Host IP (obtained from the script in Step 2)"),(0,s.kt)("li",{parentName:"ul"},"Port: 8088")),(0,s.kt)("h2",{id:"step-4-test-the-connection"},"Step 4: Test the connection"),(0,s.kt)("p",null,'Click the "Test connection" button in the Synmetrix UI to verify the connection to the ksql datasource. If the connection is successful, you will see a confirmation message.'))}p.isMDXComponent=!0}}]);