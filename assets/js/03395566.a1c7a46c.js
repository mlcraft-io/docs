"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[1201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},3601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={id:"quickstart-page",title:"Quick Start",slug:"/quickstart",sidebar_label:"Quick Start",sidebar_position:2},s=void 0,u={unversionedId:"quickstart/quickstart-page",id:"version-1.0.0/quickstart/quickstart-page",title:"Quick Start",description:"Quick Start",source:"@site/versioned_docs/version-1.0.0/quickstart/index.mdx",sourceDirName:"quickstart",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/quickstart/index.mdx",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{id:"quickstart-page",title:"Quick Start",slug:"/quickstart",sidebar_label:"Quick Start",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Support & Updates",permalink:"/docs/support-updates"},next:{title:"Development",permalink:"/docs/development"}},c={},p=[{value:"Prerequisite Software",id:"prerequisite-software",level:3},{value:"Step 1: Download the docker-compose file",id:"step-1-download-the-docker-compose-file",level:3},{value:"Step 2: Launch Synmetrix",id:"step-2-launch-synmetrix",level:3},{value:"Step 3: Explore Synmetrix",id:"step-3-explore-synmetrix",level:3},{value:"Demo online",id:"demo-online",level:2},{value:"Demo datasource credentials",id:"demo-datasource-credentials",level:3}],m={toc:p},d="wrapper";function k(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Quick Start",src:a(4269).Z,width:"2400",height:"602"})),(0,n.kt)("h3",{id:"prerequisite-software"},"Prerequisite Software"),(0,n.kt)("p",null,"Ensure the following software is installed before proceeding:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/install"},"Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install"},"Docker Compose"))),(0,n.kt)("h3",{id:"step-1-download-the-docker-compose-file"},"Step 1: Download the docker-compose file"),(0,n.kt)("p",null,"The repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/tree/main/install-manifests"},"mlcraft-io/mlcraft/install-manifests")," houses all the necessary installation manifests for deploying Synmetrix anywhere. You can download the docker compose file from this repository:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Execute this in a new directory")),(0,n.kt)(l.Z,{defaultValue:"wget",groupId:"download-method",values:[{label:"Using wget",value:"wget"},{label:"Using curl",value:"curl"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"wget",markdown:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/mlcraft-io/mlcraft/main/install-manifests/docker-compose/docker-compose.yml\n"))),(0,n.kt)(o.Z,{value:"curl",markdown:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl https://raw.githubusercontent.com/mlcraft-io/mlcraft/main/install-manifests/docker-compose/docker-compose.yml -o docker-compose.yml\n")))),(0,n.kt)("h3",{id:"step-2-launch-synmetrix"},"Step 2: Launch Synmetrix"),(0,n.kt)("p",null,"Execute the following command to start Synmetrix along with a Postgres database for data storage."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose pull stack && docker-compose up -d\n")),(0,n.kt)("p",null,"Verify if the containers are operational:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker ps\n\nCONTAINER ID IMAGE                 ... CREATED STATUS PORTS          ...\nc8f342d086f3 synmetrix/stack       ... 1m ago  Up 1m  80->8888/tcp ...\n30ea14ddaa5e postgres:12           ... 1m ago  Up 1m  5432/tcp    \n")),(0,n.kt)("p",null,"The installation of all dependencies will take approximately 5-7 minutes. Wait until you see the ",(0,n.kt)("inlineCode",{parentName:"p"},"Synmetrix Stack is ready")," message. You can view the logs using ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose logs -f")," to confirm if the process has completed."),(0,n.kt)("h3",{id:"step-3-explore-synmetrix"},"Step 3: Explore Synmetrix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can access Synmetrix at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost/"},"http://localhost/"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The GraphQL endpoint is located at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost/v1/graphql"},"http://localhost/v1/graphql"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Admin Console (Hasura Console) can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost/console"},"http://localhost/console"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Cube Swagger API can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:4000/docs"},"http://localhost:4000/docs")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Admin Console Access"),": Ensure to check ",(0,n.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_ADMIN_SECRET")," in the docker-compose file. This is mandatory for accessing the Admin Console. The default value is ",(0,n.kt)("inlineCode",{parentName:"p"},"adminsecret"),". Remember to modify this in a production environment.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Environment Variables"),": Set up all necessary environment variables. Synmetrix will function with the default values, but certain features might not perform as anticipated.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Preloaded Seed Data"),": The project is equipped with preloaded seed data. Use the credentials below to sign in:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Email:  ",(0,n.kt)("inlineCode",{parentName:"li"},"demo@synmetrix.org")),(0,n.kt)("li",{parentName:"ul"},"Password:  ",(0,n.kt)("inlineCode",{parentName:"li"},"demodemo"))),(0,n.kt)("p",{parentName:"li"},"This account is pre-configured with two demo datasources and their respective SQL API access. For SQL operations, you can use the following credentials with any SQL client tool such as DBeaver or TablePlus:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Host"),(0,n.kt)("th",{parentName:"tr",align:null},"Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"User"),(0,n.kt)("th",{parentName:"tr",align:null},"Password"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"localhost"),(0,n.kt)("td",{parentName:"tr",align:null},"15432"),(0,n.kt)("td",{parentName:"tr",align:null},"db"),(0,n.kt)("td",{parentName:"tr",align:null},"demo_pg_user"),(0,n.kt)("td",{parentName:"tr",align:null},"demo_pg_pass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"localhost"),(0,n.kt)("td",{parentName:"tr",align:null},"15432"),(0,n.kt)("td",{parentName:"tr",align:null},"db"),(0,n.kt)("td",{parentName:"tr",align:null},"demo_clickhouse_user"),(0,n.kt)("td",{parentName:"tr",align:null},"demo_clickhouse_pass"))))))),(0,n.kt)("p",null,"If you need assistance or want to schedule a 30-minute call with our team to help you get set up, please select a time directly ",(0,n.kt)("a",{parentName:"p",href:"https://cal.com/synmetrix/30min"},"here"),"."),(0,n.kt)("h2",{id:"demo-online"},"Demo online"),(0,n.kt)("p",null,"Demo: ",(0,n.kt)("a",{parentName:"p",href:"https://app.synmetrix.org"},"app.synmetrix.org")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login: ",(0,n.kt)("inlineCode",{parentName:"li"},"demo@synmetrix.org")),(0,n.kt)("li",{parentName:"ul"},"Password: ",(0,n.kt)("inlineCode",{parentName:"li"},"demodemo"))),(0,n.kt)("h3",{id:"demo-datasource-credentials"},"Demo datasource credentials"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Database type"),(0,n.kt)("th",{parentName:"tr",align:null},"Host"),(0,n.kt)("th",{parentName:"tr",align:null},"Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"User"),(0,n.kt)("th",{parentName:"tr",align:null},"Password"),(0,n.kt)("th",{parentName:"tr",align:null},"SSL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ClickHouse"),(0,n.kt)("td",{parentName:"tr",align:null},"gh-api.clickhouse.tech"),(0,n.kt)("td",{parentName:"tr",align:null},"443"),(0,n.kt)("td",{parentName:"tr",align:null},"default"),(0,n.kt)("td",{parentName:"tr",align:null},"play"),(0,n.kt)("td",{parentName:"tr",align:null},"no password"),(0,n.kt)("td",{parentName:"tr",align:null},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,n.kt)("td",{parentName:"tr",align:null},"demo-db-examples.cube.dev"),(0,n.kt)("td",{parentName:"tr",align:null},"5432"),(0,n.kt)("td",{parentName:"tr",align:null},"ecom"),(0,n.kt)("td",{parentName:"tr",align:null},"cube"),(0,n.kt)("td",{parentName:"tr",align:null},"12345"),(0,n.kt)("td",{parentName:"tr",align:null},"false")))))}k.isMDXComponent=!0},4269:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/start-0803e7a196cb95ea1785c0c62913fed5.png"}}]);