"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[3811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"sql-interface",title:"SQL Interface",sidebar_label:"SQL Interface",slug:"/sql-interface",sidebar_position:7},o="Synmetrix SQL Interface",s={unversionedId:"sql-interface/sql-interface",id:"version-1.0.0/sql-interface/sql-interface",title:"SQL Interface",description:"Introduction",source:"@site/versioned_docs/version-1.0.0/sql-interface/index.md",sourceDirName:"sql-interface",slug:"/sql-interface",permalink:"/docs/sql-interface",draft:!1,editUrl:"https://github.com/mlcraft-io/docs/tree/main/versioned_docs/version-1.0.0/sql-interface/index.md",tags:[],version:"1.0.0",sidebarPosition:7,frontMatter:{id:"sql-interface",title:"SQL Interface",sidebar_label:"SQL Interface",slug:"/sql-interface",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Getting started with pre-aggregations",permalink:"/docs/caching/getting-started-with-pre-aggregations"},next:{title:"User Guide",permalink:"/docs/user-guide/"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Solution: Leveraging Cube.js",id:"solution-leveraging-cubejs",level:2},{value:"Implementation of SQL Interface in Synmetrix",id:"implementation-of-sql-interface-in-synmetrix",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Transformation of SQL Queries",id:"transformation-of-sql-queries",level:2},{value:"Server Code",id:"server-code",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"synmetrix-sql-interface"},"Synmetrix SQL Interface"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In the development of Synmetrix, the establishment of a robust SQL interface plays a pivotal role. This interface serves as a unified platform for accessing data sources, ensuring consistent metrics are available to all data consumers. It addresses the challenge of maintaining data integrity and precision across various tools employed by modern organizations."),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Many modern organizations utilize numerous tools to process data from a shared storage but perform individual metric calculations. This often leads to discrepancies in calculations and disparities among different teams. The more tools an organization employs, the greater the potential for inconsistencies, making data-driven decision-making complex. Hence, it is essential to create a centralized hub for defining and maintaining metrics, ensuring that all tools operate with a single source of data."),(0,a.kt)("h2",{id:"solution-leveraging-cubejs"},"Solution: Leveraging Cube.js"),(0,a.kt)("p",null,"To tackle this challenge, Synmetrix has chosen the Cube.js framework, successfully integrated into the Synmetrix platform. Cube.js offers a significant advantage in its ability to act as a data source proxy, transforming incoming queries\u2014whether in JSON, GraphQL, or SQL format\u2014into native queries to the underlying data store."),(0,a.kt)("h2",{id:"implementation-of-sql-interface-in-synmetrix"},"Implementation of SQL Interface in Synmetrix"),(0,a.kt)("p",null,"Creating the SQL interface within Synmetrix presented several challenges effectively addressed using the Cube.js framework and Apache Datafusion. This SQL interface enables Cube.js to provide data through a PostgreSQL-compatible protocol to various data-consuming applications, including but not limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://example-bi-tool.com"},"BI tools")),(0,a.kt)("li",{parentName:"ul"},"Data exploration tools such as Jupyter or Hex"),(0,a.kt)("li",{parentName:"ul"},"Reverse ETL tools like Census or Hightouch"),(0,a.kt)("li",{parentName:"ul"},"Low-code development platforms such as Retool"),(0,a.kt)("li",{parentName:"ul"},"Automated tasks")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The SQL interface has been thoroughly tested with a range of tools and platforms, including:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/app-psql.html"},"psql CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://superset.apache.org/"},"Apache Superset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tableau.com/cloud"},"Tableau Cloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tableau.com/"},"Tableau Desktop with JDBC driver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://powerbi.microsoft.com/"},"Power BI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.metabase.com/"},"Metabase")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://datastudio.google.com/"},"Google Data Studio")),(0,a.kt)("li",{parentName:"ul"},"Excel through ",(0,a.kt)("a",{parentName:"li",href:"https://www.devart.com/excel-addins/"},"Devart plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://deepnote.com/"},"Deepnote")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hex.pm/"},"Hex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://observablehq.com/"},"Observable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://streamlit.io/"},"Streamlit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jupyter.org/"},"Jupyter notebook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hightouch.io/"},"Hightouch"))),(0,a.kt)("p",null,"The SQL API utilizes Apache Datafusion as its SQL execution engine, responsible for query planning and execution."),(0,a.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"The implementation of the SQL interface in Synmetrix comprises several key steps, facilitated by the Cube.js framework and Apache Datafusion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Request Retrieval"),": Incoming data retrieval requests arrive in SQL format to Cube.js, serving as the initial queries that require processing and execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Query Transformation"),": Cube.js transforms the incoming SQL queries into its own query format (JSON). This transformation optimizes and prepares the query for execution against the underlying data store."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Query Execution"),": The SQL query generated in the previous step is sent to the data source. This source can be any supported database to which Cube.js can connect."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Retrieval"),": The output is a dataset containing the required data in response to the original query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Load into Apache Datafusion"),": The dataset is loaded into Apache Datafusion, where it undergoes further processing. Apache Datafusion serves as the SQL execution engine, responsible for query planning and execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Execution of the Original SQL Query"),": The original SQL query received by the server is executed within Apache Datafusion. This allows for the full utilization of SQL's capabilities for data analysis and processing while preserving the structure and semantics of the original query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Return"),": Query results are returned through Cube.js, where they can be further processed or directly delivered to end-users.")),(0,a.kt)("p",null,"This process ensures high flexibility and power when working with queries while maintaining data consistency and coherence for all consumers. Each stage has been meticulously designed and optimized to ensure efficient query execution and overall system performance."),(0,a.kt)("h2",{id:"transformation-of-sql-queries"},"Transformation of SQL Queries"),(0,a.kt)("p",null,'A notable feature of the SQL interface in Synmetrix is how it handles and transforms SQL queries. As previously mentioned, Cube.js converts incoming SQL queries into its own query format (JSON), a process known as "Cube query rewrite." This transformation allows for optimization and query preparation for execution against the underlying data store.'),(0,a.kt)("p",null,'Let\'s illustrate this with an example query to the "orders" cube in our data model:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Original SQL Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  city,\n  SUM(amount)\nFROM orders\nWHERE status = 'shipped'\nGROUP BY 1\n")),(0,a.kt)("p",null,'This SQL query in the SELECT statement to the "orders" cube is transformed into Cube.js\' internal query format:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transformed Cube.js Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "measures": ["Orders.amount"],\n  "dimensions": ["Orders.city"],\n  "filters": [\n    {\n      "member": "Orders.status",\n      "operator": "equals",\n      "values": ["shipped"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"As a result of this transformation, not all functions and expressions are supported within query fragments that execute SELECT statements on cube tables. For example, the following query would not work because the SQL API cannot pass the CASE expression to Cube.js for processing, making it impossible to translate the CASE expression into a metric:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Non-supported Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  city,\n  CASE\n    WHEN status = 'shipped' THEN 'done'\n    ELSE 'in-progress'\n  END real_status,\n  SUM(number)\nFROM orders\n  CROSS JOIN Users\nGROUP BY 1;\n")),(0,a.kt)("p",null,"However, in such cases, nested queries can be employed. You can encapsulate your SELECT query from a cube table within another SELECT query to perform calculations with expressions like CASE. This outer SELECT is not part of the rewritten SQL query, allowing you to use more SQL functions, operators, and expressions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Query:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  city,\n  CASE\n    WHEN status = 'shipped' THEN 'done'\n    ELSE 'in-progress'\n  END real_status,\n  SUM(amount) AS total\nFROM (\n  SELECT\n    Users.city AS city,\n    SUM(number) AS amount,\n    orders.status\n  FROM orders\n    CROSS JOIN Users\n  GROUP BY 1, 3\n) AS inner\nGROUP BY 1, 2\nORDER BY 1;\n")),(0,a.kt)("p",null,"The above query works because the CASE expression is supported in SELECT queries that do not reference cube tables. These nuances and query handling specifics should be considered when designing and utilizing the SQL interface in Synmetrix."),(0,a.kt)("h2",{id:"server-code"},"Server Code"),(0,a.kt)("p",null,"For a detailed analysis of the server code and its components, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/blob/main/services/cubejs/index.js"},"Synmetrix SQL Interface Server Code"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The creation of the SQL interface in Synmetrix has allowed for the development of a unified data access interface, ensuring metric consistency for all data tools. This has reduced the number of discrepancies and conflicts related to metric calculations, providing a more reliable foundation for data-driven decision-making."))}m.isMDXComponent=!0}}]);