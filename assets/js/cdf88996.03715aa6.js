"use strict";(self.webpackChunksynmetrix=self.webpackChunksynmetrix||[]).push([[9728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||r;return n?i.createElement(g,s(s({ref:t},c),{},{components:n})):i.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={id:"contributing",title:"Contributing to Synmetrix",slug:"/development/contributing",sidebar_label:"Contributing",sidebar_position:2},s=void 0,a={unversionedId:"development/contributing/contributing",id:"version-1.0.0/development/contributing/contributing",title:"Contributing to Synmetrix",description:"This guide provides information on how to contribute to Synmetrix, including code changes, helping other users, documentation updates, bug reports, bug fixes, new feature proposals, and coding standards.",source:"@site/versioned_docs/version-1.0.0/development/contributing/index.md",sourceDirName:"development/contributing",slug:"/development/contributing",permalink:"/docs/development/contributing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/development/contributing/index.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{id:"contributing",title:"Contributing to Synmetrix",slug:"/development/contributing",sidebar_label:"Contributing",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Local Development",permalink:"/docs/development/local-development"},next:{title:"Production Deployment",permalink:"/docs/production-deployment"}},u={},l=[{value:"Helping Other Users",id:"helping-other-users",level:2},{value:"Contributing to Documentation",id:"contributing-to-documentation",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:2},{value:"Contributing Bug Fixes",id:"contributing-bug-fixes",level:2},{value:"Proposing New Features",id:"proposing-new-features",level:2},{value:"Submitting Code Changes",id:"submitting-code-changes",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide provides information on how to contribute to Synmetrix, including code changes, helping other users, documentation updates, bug reports, bug fixes, new feature proposals, and coding standards."),(0,o.kt)("p",null,"Contributions to Synmetrix go beyond code development. Assisting new users, testing releases, improving documentation, and participating in discussions are all valuable ways to contribute to the community."),(0,o.kt)("h2",{id:"helping-other-users"},"Helping Other Users"),(0,o.kt)("p",null,"One of the most valuable ways to contribute to Synmetrix is by helping answer user questions on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/discussions"},"discussion forum")," or in the ",(0,o.kt)("a",{parentName:"p",href:"https://join.mlcraft-io/mlcraft.com/t/mlcraft/shared_invite/zt-1x2gxwn37-J3tTvCR5xSFVfxwUU_YKtg%22"},"Slack channel"),". There are always new Synmetrix users seeking assistance, and providing answers is a valuable community service that showcases your expertise."),(0,o.kt)("h2",{id:"contributing-to-documentation"},"Contributing to Documentation"),(0,o.kt)("p",null,"To propose changes to Synmetrix documentation, edit the documentation source files located in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/tree/master/docs"},"docs/")," directory. The README file there explains how to build the documentation locally to test your changes. After making modifications, open a pull request to suggest the changes."),(0,o.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("p",null,'Reporting a bug is a simple and effective way to contribute to Synmetrix. It helps identify issues, enabling the team to provide patches and enhance the stability and usefulness of Synmetrix. Use the "New issue" button in the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/issues"},"issues page")," to report a bug. Ensure your bug report includes a minimal executable test case to replicate the issue. Follow the instructions in the bug report template provided."),(0,o.kt)("h2",{id:"contributing-bug-fixes"},"Contributing Bug Fixes"),(0,o.kt)("p",null,"Contributing bug fixes is an excellent way to build your experience and credibility within the community. If you are new to the Synmetrix codebase, start by looking at issues labeled with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"help wanted"),". If you need guidance on fixing an issue, seek assistance from experienced contributors by commenting on the issue page."),(0,o.kt)("h2",{id:"proposing-new-features"},"Proposing New Features"),(0,o.kt)("p",null,"Before contributing a new feature, submit a proposal in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlcraft-io/mlcraft/issues"},"issues page")," and discuss it with the community. This helps identify potential overlaps with planned features and prevents misunderstandings and conflicts."),(0,o.kt)("h2",{id:"submitting-code-changes"},"Submitting Code Changes"),(0,o.kt)("p",null,"When submitting code contributions, you must sign a ",(0,o.kt)("a",{parentName:"p",href:"https://developercertificate.org/"},"Developer Certificate of Origin (DCO)")," to certify your authorship of the source code or your right to submit it to the project. Sign your contributions by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"Signed-off-by")," line to your commit message or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-s")," option with the ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/signing-commits/"},"git commit command"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"This is my commit message\n\nSigned-off-by: Random J Developer <random@developer.example.org>\n\n\nThe process is automatically managed by the Probot app for GitHub.\n\nIDE Settings\nThe recommended development environment for Synmetrix is IntelliJ IDEA. Refer to the README for instructions on importing and configuring Synmetrix to work with IntelliJ IDEA.\n\nSynmetrix does not enforce strict code formatting, but it is recommended to adhere to the following settings:\n\nUse spaces for indentation\nTab size: 4\nIndent: 4\nUse single class import\nClass count to use import with *: 99\nNames count to use static import with *: 99\nImports layout:\n<blank line>\nimport org.junit.*\nimport spock.lang.*\n<blank line>\nimport java.*\nimport javax.*\n<blank line>\nall other imports\nall other static imports\nNew files must include the appropriate license header boilerplate, author name(s), and contact email(s) (example).\n")))}m.isMDXComponent=!0}}]);