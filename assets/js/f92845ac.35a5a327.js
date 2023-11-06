"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[9590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||g[d]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),s=n(2466),i=n(6550),o=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=g(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=o??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),g=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:g},s,{className:(0,l.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const l={id:"getting-started-with-pre-aggregations",title:"Getting started with pre-aggregations",sidebar_label:"Getting started with pre-aggregations",slug:"/caching/getting-started-with-pre-aggregations"},s=void 0,i={unversionedId:"caching/getting-started-with-pre-aggregations/getting-started-with-pre-aggregations",id:"version-1.0.0/caching/getting-started-with-pre-aggregations/getting-started-with-pre-aggregations",title:"Getting started with pre-aggregations",description:"Often at the beginning of an analytical application's lifecycle - when there is",source:"@site/versioned_docs/version-1.0.0/caching/getting-started-with-pre-aggregations/index.mdx",sourceDirName:"caching/getting-started-with-pre-aggregations",slug:"/caching/getting-started-with-pre-aggregations",permalink:"/docs/caching/getting-started-with-pre-aggregations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/caching/getting-started-with-pre-aggregations/index.mdx",tags:[],version:"1.0.0",frontMatter:{id:"getting-started-with-pre-aggregations",title:"Getting started with pre-aggregations",sidebar_label:"Getting started with pre-aggregations",slug:"/caching/getting-started-with-pre-aggregations"},sidebar:"tutorialSidebar",previous:{title:"Caching",permalink:"/docs/caching"},next:{title:"SQL Interface",permalink:"/docs/sql-interface"}},o={},u=[{value:"Pre-Aggregations without Time Dimension",id:"pre-aggregations-without-time-dimension",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Often at the beginning of an analytical application's lifecycle - when there is\na smaller dataset that queries execute over - the application works well and\ndelivers responses within acceptable thresholds. However, as the size of the\ndataset grows, the time-to-response from a user's perspective can often suffer\nquite heavily. This is true of both application and purpose-built data\nwarehousing solutions."),(0,r.kt)("p",null,"This leaves us with a chicken-and-egg problem; application databases can deliver\nlow-latency responses with small-to-large datasets, but struggle with massive\nanalytical datasets; data warehousing solutions ",(0,r.kt)("em",{parentName:"p"},"usually")," make no guarantees\nexcept to deliver a response, which means latency can vary wildly on a\nquery-to-query basis."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Database Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Low Latency?"),(0,r.kt)("th",{parentName:"tr",align:null},"Massive Datasets?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application (Postgres/MySQL)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Analytical (BigQuery/Redshift)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("p",null,"Cube provides a solution to this problem: pre-aggregations. In layman's terms, a\npre-aggregation is a condensed version of the source data. It specifies\nattributes from the source, which Cube uses to condense (or crunch) the data.\nThis simple yet powerful optimization can reduce the size of the dataset by\nseveral orders of magnitude, and ensures subsequent queries can be served by the\nsame condensed dataset if any matching attributes are found."),(0,r.kt)("h2",{id:"pre-aggregations-without-time-dimension"},"Pre-Aggregations without Time Dimension"),(0,r.kt)("p",null,"To illustrate pre-aggregations with an example, let's use a sample e-commerce\ndatabase. We have a data model representing all our ",(0,r.kt)("inlineCode",{parentName:"p"},"orders"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"YAML")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cubes:\n  - name: orders\n    sql_table: orders\n\n    measures:\n      - name: count\n        type: count\n\n    dimensions:\n      - name: id\n        sql: id\n        type: number\n        primary_key: true\n\n      - name: status\n        sql: status\n        type: string\n\n      - name: completed_at\n        sql: completed_at\n        type: time\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JavaScript")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"cube(`orders`, {\n  sql_table: `orders`,\n\n  measures: {\n    count: {\n      type: `count`,\n    },\n  },\n\n  dimensions: {\n    id: {\n      sql: `id`,\n      type: `number`,\n      primary_key: true,\n    },\n\n    status: {\n      sql: `status`,\n      type: `string`,\n    },\n\n    completed_at: {\n      sql: `completed_at`,\n      type: `time`,\n    },\n  },\n});\n")),(0,r.kt)("p",null,"Some sample data from this table might look like:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"id")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"status")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"completed_at")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"completed"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-02-15T12:21:11.290")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"completed"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-02-25T18:15:12.369")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"shipped"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-15T20:40:57.404")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"processing"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-13T10:30:21.360")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"completed"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-10T18:25:32.109")))),(0,r.kt)("p",null,"Our first requirement is to populate a dropdown in our front-end application\nwhich shows all possible statuses. The Cube query to retrieve this information\nmight look something like:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dimensions": ["orders.status"]\n}\n')),(0,r.kt)("p",null,"In that case, we can add the following pre-aggregation to the ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," cube:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"YAML")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cubes:\n  - name: orders\n    # ...\n\n    pre_aggregations:\n      - name: order_statuses\n        dimensions:\n          - status\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JavaScript")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"cube(`orders`, {\n  // ...\n\n  pre_aggregations: {\n    order_statuses: {\n      dimensions: [status],\n    },\n  },\n});\n")))}g.isMDXComponent=!0}}]);