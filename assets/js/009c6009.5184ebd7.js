"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[3425],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"usage-examples-explore",title:"Usage Examples",sidebar_label:"Usage Examples",slug:"/user-guide/explore/usage-examples-explore"},o=void 0,l={unversionedId:"user-guide/explore/usage-examples/usage-examples-explore",id:"version-1.1.0/user-guide/explore/usage-examples/usage-examples-explore",title:"Usage Examples",description:"Example with Exell and Rest API",source:"@site/versioned_docs/version-1.1.0/user-guide/explore/usage-examples/index.md",sourceDirName:"user-guide/explore/usage-examples",slug:"/user-guide/explore/usage-examples-explore",permalink:"/docs/user-guide/explore/usage-examples-explore",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.1.0/user-guide/explore/usage-examples/index.md",tags:[],version:"1.1.0",frontMatter:{id:"usage-examples-explore",title:"Usage Examples",sidebar_label:"Usage Examples",slug:"/user-guide/explore/usage-examples-explore"},sidebar:"tutorialSidebar",previous:{title:"Reports",permalink:"/docs/user-guide/explore/reports"},next:{title:"Models",permalink:"/docs/user-guide/models"}},s={},p=[{value:"Example with Exell and Rest API",id:"example-with-exell-and-rest-api",level:2},{value:"Detailed Steps for Data Analysis",id:"detailed-steps-for-data-analysis",level:3},{value:"Advanced Analysis with SQL and Excel",id:"advanced-analysis-with-sql-and-excel",level:3},{value:"Step 6: Utilizing REST API for Web Integration",id:"step-6-utilizing-rest-api-for-web-integration",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"example-with-exell-and-rest-api"},"Example with Exell and Rest API"),(0,n.kt)("h3",{id:""}),(0,n.kt)("admonition",{title:"Playground Data Source Configuration",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Host"),": gh-api.clickhouse.tech",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Database Name"),": default",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"User"),": play",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Port"),": 443",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"SSL"),": yes")),(0,n.kt)("h3",{id:"detailed-steps-for-data-analysis"},"Detailed Steps for Data Analysis"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1:"),(0,n.kt)("br",{parentName:"p"}),"\n","Initialize by adding a Data Source, either during the Onboarding process or through the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/user-guide/settings/data-sources"},"Settings")," section."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2:"),(0,n.kt)("br",{parentName:"p"}),"\n","Create a model, such as the 'Covid' model. Select ",(0,n.kt)("strong",{parentName:"p"},"COVID LOCATION KEY DIMENSIONS")," and ",(0,n.kt)("strong",{parentName:"p"},"COVID COUNT MEASURES")," for your analysis."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3:"),(0,n.kt)("br",{parentName:"p"}),"\n","Apply a filter for 'Covid Count' to ensure the data is relevant and specific."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4:"),(0,n.kt)("br",{parentName:"p"}),"\n",'Set the row limit to 1000 and proceed to execute the query by clicking "Run Query".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5:"),(0,n.kt)("br",{parentName:"p"}),"\n","Examine the auto-generated SQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  `covid`.location_key `covid__location_key`, count(*) `covid__count`\nFROM\n  default.covid AS `covid`\nGROUP BY `covid__location_key`\nHAVING (count(*) IS NOT NULL)\nLIMIT 1000\n")),(0,n.kt)("h3",{id:"advanced-analysis-with-sql-and-excel"},"Advanced Analysis with SQL and Excel"),(0,n.kt)("p",null,"With the SQL query, you can conduct in-depth analysis of COVID data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Visualizing Trends"),": Export data to Excel for graphical representations of COVID case trends."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Comparative Studies"),": Analyze COVID counts across different regions or timeframes in Excel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Correlation Analysis"),": Merge COVID data with other datasets in Excel to discover correlations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Predictive Models"),": Utilize Excel's tools for forecasting future COVID case trends."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Report Creation"),": Build detailed reports using Excel, integrating both data and visual aids.")),(0,n.kt)("h3",{id:"step-6-utilizing-rest-api-for-web-integration"},"Step 6: Utilizing REST API for Web Integration"),(0,n.kt)("p",null,"After generating your SQL, Synmetrix offers a REST API tab for data transmission to elsewhere you need. Here's how you can utilize it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data Sharing"),": Use the API to send real-time COVID data to websites or online dashboards."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Building Interactive Tools"),": Create web-based tools or widgets that display up-to-date COVID statistics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automating Updates"),": Set up the API for regular data updates on your web platforms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integrating with Web Apps"),": Use the API for seamless data integration with other online applications or services.")),(0,n.kt)("p",null,"This comprehensive guide illustrates how Synmetrix, coupled with SQL, Excel, and the REST API, provides a robust framework for advanced COVID data analysis and web integration."))}c.isMDXComponent=!0}}]);