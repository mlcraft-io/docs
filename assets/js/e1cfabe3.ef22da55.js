"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[1180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),i=r(6010),o=r(2466),s=r(6550),c=r(1980),l=r(7392),u=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,l]=h({queryString:r,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=c??d;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),g(e)}),[l,g,i]),tabValues:i}}var f=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=l[r].value;n!==s&&(d(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},2052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(4866),o=r(5162);const s={id:"caching",title:"Caching",slug:"/core-concepts/caching",sidebar_position:3},c="Overview",l={unversionedId:"core-concepts/caching/caching",id:"version-1.0.0/core-concepts/caching/caching",title:"Caching",description:'Synmetrix offers a robust caching system with two distinct layers to optimize query performance and minimize database load. This system enhances the efficiency of data retrieval and processing. The primary caching layer is an in-memory cache, which is active by default. The second layer is called "pre-aggregations" and requires explicit configuration to activate.',source:"@site/versioned_docs/version-1.0.0/core-concepts/caching/index.mdx",sourceDirName:"core-concepts/caching",slug:"/core-concepts/caching",permalink:"/docs/core-concepts/caching",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/core-concepts/caching/index.mdx",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{id:"caching",title:"Caching",slug:"/core-concepts/caching",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SQL Interface (SQL API)",permalink:"/docs/core-concepts/sql-interface"},next:{title:"Architecture and Design",permalink:"/docs/core-concepts/architecture-and-design"}},u={},d=[{value:"In-Memory Cache",id:"in-memory-cache",level:2},{value:"Pre-Aggregations",id:"pre-aggregations",level:2},{value:"In-Memory Cache Operation",id:"in-memory-cache-operation",level:3},{value:"Refresh Keys",id:"refresh-keys",level:3},{value:"Default Refresh Keys",id:"default-refresh-keys",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,'Synmetrix offers a robust caching system with two distinct layers to optimize query performance and minimize database load. This system enhances the efficiency of data retrieval and processing. The primary caching layer is an in-memory cache, which is active by default. The second layer is called "pre-aggregations" and requires explicit configuration to activate.'),(0,a.kt)("h2",{id:"in-memory-cache"},"In-Memory Cache"),(0,a.kt)("p",null,"Synmetrix's in-memory cache serves as a temporary buffer for your database. It becomes especially valuable when multiple concurrent users request the same data simultaneously. While pre-aggregations are designed to strike a balance between query response time and performance, the in-memory cache helps smooth out spikes in data demand."),(0,a.kt)("p",null,"In development mode, you can reset the in-memory cache by simply restarting the server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": It's generally not recommended to modify the default in-memory caching configuration unless it's absolutely necessary. To improve query performance, consider utilizing pre-aggregations."),(0,a.kt)("h2",{id:"pre-aggregations"},"Pre-Aggregations"),(0,a.kt)("p",null,"Pre-aggregations introduce an additional layer of aggregated data, constructed and updated by Synmetrix. They can significantly enhance query performance and concurrency."),(0,a.kt)("p",null,"To create pre-aggregations, Synmetrix might require write access to the pre-aggregations schema within the source database. In this scenario, Synmetrix initially builds pre-aggregations as tables in the source database and then exports them to the pre-aggregations storage. Refer to your specific driver's documentation for details on read-only support and pre-aggregation build strategies."),(0,a.kt)("p",null,"Pre-aggregations are defined within the data model. You can learn more about defining pre-aggregations in the ",(0,a.kt)("a",{parentName:"p",href:"https://cube.dev/docs/product/caching/using-pre-aggregations"},"data modeling reference.")),(0,a.kt)(i.Z,{groupId:"download-method",defaultValue:"yaml",values:[{label:"Using YAML",value:"yaml"},{label:"Using JavaScript",value:"javascript"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  cubes:\n      - name: orders\n        sql_table: orders\n\n        measures:\n          - name: total_amount\n            sql: amount\n            type: sum\n\n        dimensions:\n          - name: created_at\n            sql: created_at\n            type: time\n\n        pre_aggregations:\n          - name: amount_by_created\n            measures:\n              - total_amount\n            time_dimension: created_at\n            granularity: month\n"))),(0,a.kt)(o.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cube(`orders`, {\n  sql_table: `orders`,\n  measures: {\n    total_amount: {\n      sql: `amount`,\n      type: `sum`,\n    },\n  },\n  dimensions: {\n    created_at: {\n      sql: `created_at`,\n      type: `time`,\n    },\n  }, \n  pre_aggregations: {\n    amount_by_created: {\n      measures: [total_amount],\n      time_dimension: created_at,\n      granularity: `month`,\n    },\n  },\n")))),(0,a.kt)("h3",{id:"in-memory-cache-operation"},"In-Memory Cache Operation"),(0,a.kt)("p",null,"Synmetrix utilizes an in-memory cache to store the results of executed queries. The cache key is generated from the SQL statement, including any existing pre-aggregations that the query depends on."),(0,a.kt)("p",null,"Upon receiving an incoming request, Synmetrix first checks the cache using this key. If no match is found in the cache, the query is executed in the database. The result set is returned and simultaneously updates the cache."),(0,a.kt)("p",null,"If a cached value exists, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_key")," value for the query remains unchanged, the cached value is returned. Otherwise, an SQL query is executed either against the pre-aggregations storage or the source database to refresh the cache and retrieve the updated results."),(0,a.kt)("h3",{id:"refresh-keys"},"Refresh Keys"),(0,a.kt)("p",null,"To avoid unnecessary database queries, Synmetrix defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_key")," for each cube. These refresh keys are evaluated to determine if data needs to be refreshed."),(0,a.kt)("p",null,"Here's an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_key")," that instructs Synmetrix to refresh data every 5 minutes:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"YAML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cubes:\n  - name: orders\n    # ...\n\n    refresh_key:\n      every: 5 minutes\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"cube(`orders`, {\n  refresh_key: {\n    every: `5 minute`,\n  },\n});\n")),(0,a.kt)("p",null,"Alternatively, the following ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_key")," only refreshes data when the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX(created_at)")," changes. By default, Synmetrix checks this refresh key every 10 seconds:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"YAML")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cubes:\n  - name: orders\n    # ...\n\n    refresh_key:\n      sql: SELECT MAX(created_at) FROM orders\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"cube(`orders`, {\n  // ...\n \n  refresh_key: {\n    sql: `SELECT MAX(created_at) FROM orders`,\n  },\n});\n")),(0,a.kt)("h3",{id:"default-refresh-keys"},"Default Refresh Keys"),(0,a.kt)("p",null,"By default, in development mode, Synmetrix will check and invalidate the cache in the background. For production environments, it's recommended to run a Refresh Worker as a separate instance."),(0,a.kt)("p",null,"We strongly recommend enabling background cache invalidation using a separate Synmetrix worker for production deployments. Please consult the Production Checklist for more information. If background refresh is disabled, Synmetrix will refresh the cache during query execution. To ensure optimal response times for end-users, it's advisable to always enable background refresh."),(0,a.kt)("h1",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/caching/getting-started-pre-aggregations"},"Getting started with pre-aggregations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/caching/using-pre-aggregations"},"Using pre-aggregations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cube.dev/docs/product/caching/lambda-pre-aggregations"},"Lambda pre-aggregations"))))}h.isMDXComponent=!0}}]);