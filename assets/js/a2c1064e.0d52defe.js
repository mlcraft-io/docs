"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[6519],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(a),h=s,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:s,i[1]=c;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=a(7462),s=(a(7294),a(3905));const n={id:"elasticsearch",title:"Elasticsearch",slug:"/testing-and-debugging/tests/data-source/elasticsearch",sidebar_label:"Elasticsearch"},i=void 0,c={unversionedId:"testing-and-debugging /tests/data-source/elasticsearch/elasticsearch",id:"version-1.0.0/testing-and-debugging /tests/data-source/elasticsearch/elasticsearch",title:"Elasticsearch",description:"Step 1: Navigate to the Elasticsearch Example Directory",source:"@site/versioned_docs/version-1.0.0/testing-and-debugging /tests/data-source/elasticsearch/index.md",sourceDirName:"testing-and-debugging /tests/data-source/elasticsearch",slug:"/testing-and-debugging/tests/data-source/elasticsearch",permalink:"/docs/testing-and-debugging/tests/data-source/elasticsearch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/testing-and-debugging /tests/data-source/elasticsearch/index.md",tags:[],version:"1.0.0",frontMatter:{id:"elasticsearch",title:"Elasticsearch",slug:"/testing-and-debugging/tests/data-source/elasticsearch",sidebar_label:"Elasticsearch"},sidebar:"tutorialSidebar",previous:{title:"Druid",permalink:"/docs/testing-and-debugging/tests/data-source/druid"},next:{title:"Firebolt",permalink:"/docs/testing-and-debugging/tests/data-source/firebolt"}},l={},o=[{value:"Step 1: Navigate to the Elasticsearch Example Directory",id:"step-1-navigate-to-the-elasticsearch-example-directory",level:2},{value:"Step 2: Run the Elasticsearch Service Using the Script",id:"step-2-run-the-elasticsearch-service-using-the-script",level:2},{value:"Step 3: Wait for the Service to Be Ready and Add a User",id:"step-3-wait-for-the-service-to-be-ready-and-add-a-user",level:2},{value:"Step 4: Access Kibana and Add Sample Data",id:"step-4-access-kibana-and-add-sample-data",level:2},{value:"Step 5: Create a Datasource in Synmetrix",id:"step-5-create-a-datasource-in-synmetrix",level:2}],d={toc:o},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"step-1-navigate-to-the-elasticsearch-example-directory"},"Step 1: Navigate to the Elasticsearch Example Directory"),(0,s.kt)("p",null,"Navigate to the Elasticsearch example directory located at ",(0,s.kt)("inlineCode",{parentName:"p"},"/docs/examples/elasticsearch")," in the root of the Synmetrix project. You can also download this directory from the GitHub repository. To navigate to the directory, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./docs/examples/elasticsearch\n")),(0,s.kt)("h2",{id:"step-2-run-the-elasticsearch-service-using-the-script"},"Step 2: Run the Elasticsearch Service Using the Script"),(0,s.kt)("p",null,"In the Elasticsearch example directory, there is a script called ",(0,s.kt)("inlineCode",{parentName:"p"},"run_elasticsearch.sh"),". Make sure the script is executable by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x run_elasticsearch.sh\n")),(0,s.kt)("p",null,"Then, start the Elasticsearch service by running the script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./run_elasticsearch.sh\n")),(0,s.kt)("p",null,"After the script has finished running, it will return the host IP address of your machine. Take note of this IP address for the next step."),(0,s.kt)("h2",{id:"step-3-wait-for-the-service-to-be-ready-and-add-a-user"},"Step 3: Wait for the Service to Be Ready and Add a User"),(0,s.kt)("p",null,"Wait for the Elasticsearch service to be ready to accept requests. Then run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -u elastic:password "http://localhost:9200/_security/user/user" -H \'Content-Type: application/json\' -d\'\n{\n  "password": "password",\n  "roles": ["kibana", "kibana_system"],\n  "full_name": "Test user"\n}\'\n')),(0,s.kt)("h2",{id:"step-4-access-kibana-and-add-sample-data"},"Step 4: Access Kibana and Add Sample Data"),(0,s.kt)("p",null,"Wait for the Kibana service to start, then go to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:5601"},"http://localhost:5601")," and log in with the credentials:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"User: elastic\nPassword: password\n")),(0,s.kt)("p",null,"Click on the ",(0,s.kt)("strong",{parentName:"p"},"Try sample data")," link:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Try sample data screenshot",src:a(1909).Z,width:"1369",height:"720"})),(0,s.kt)("p",null,"At the bottom of the page, click ",(0,s.kt)("strong",{parentName:"p"},"Other sample data sets"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Other sample data sets screenshot",src:a(1263).Z,width:"1366",height:"713"})),(0,s.kt)("p",null,"Choose a dataset and click ",(0,s.kt)("strong",{parentName:"p"},"Add data"),"."),(0,s.kt)("h2",{id:"step-5-create-a-datasource-in-synmetrix"},"Step 5: Create a Datasource in Synmetrix"),(0,s.kt)("p",null,"Now you can create a datasource in Synmetrix using the following information:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Name: Elasticsearch test datasource"),(0,s.kt)("li",{parentName:"ul"},"Url: http://<host_ip>:9200"),(0,s.kt)("li",{parentName:"ul"},"User: user"),(0,s.kt)("li",{parentName:"ul"},"Password: password")),(0,s.kt)("p",null,"Save the datasource and click ",(0,s.kt)("strong",{parentName:"p"},"Test connection"),". You should see a message indicating that the connection is OK."))}u.isMDXComponent=!0},1909:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/elasticsearch1-6a3ad1625faa6c68b9bdec0c45a21a40.png"},1263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/elasticsearch2-5ff2419023e43b43cb892579e6df30ef.png"}}]);