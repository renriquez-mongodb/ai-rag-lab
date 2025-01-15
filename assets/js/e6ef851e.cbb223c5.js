"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[676],{2851:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=o(4848),a=o(8453),r=o(3974),s=o(2763);const c={},i="\ud83d\udc50 Create your account",l={id:"mongodb-atlas/create-account",title:"\ud83d\udc50 Create your account",description:"In this lab, you will learn how to use MongoDB Atlas as a knowledge base as well as a memory provider for a RAG-based documentation chatbot.",source:"@site/docs/20-mongodb-atlas/1-create-account.mdx",sourceDirName:"20-mongodb-atlas",slug:"/mongodb-atlas/create-account",permalink:"/ai-rag-lab/docs/mongodb-atlas/create-account",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/20-mongodb-atlas/1-create-account.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB Atlas",permalink:"/ai-rag-lab/docs/category/mongodb-atlas"},next:{title:"\ud83d\udc50 Deploy a database cluster",permalink:"/ai-rag-lab/docs/mongodb-atlas/create-cluster"}},d={},u=[{value:"Create a new Atlas project",id:"create-a-new-atlas-project",level:2},{value:"Sign up for MongoDB Atlas",id:"sign-up-for-mongodb-atlas",level:2},{value:"Verify your email address",id:"verify-your-email-address",level:2},{value:"Finish the onboarding",id:"finish-the-onboarding",level:2}];function h(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,a.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-create-your-account",children:"\ud83d\udc50 Create your account"})}),"\n",(0,n.jsx)(t.p,{children:"In this lab, you will learn how to use MongoDB Atlas as a knowledge base as well as a memory provider for a RAG-based documentation chatbot."}),"\n",(0,n.jsx)(t.p,{children:"To use MongoDB Atlas, you will need to start by creating an account."}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"\ud83e\uddb9 If you already have an Atlas account, you can use it by creating a new project"}),(0,n.jsxs)(t.p,{children:["First, log into ",(0,n.jsx)(r.A,{to:"https://account.mongodb.com/",children:"MongoDB Atlas"})," using your existing credentials."]}),(0,n.jsx)(s.A,{url:"https://account.mongodb.com",src:"img/screenshots/20-mongodb-atlas/1-create-account/3-login.png",alt:"Login form"}),(0,n.jsx)(t.h2,{id:"create-a-new-atlas-project",children:"Create a new Atlas project"}),(0,n.jsxs)(t.p,{children:["Once you're in Atlas, open the dropdown on the left-top corner of the page and select ",(0,n.jsx)(t.strong,{children:"New Project"}),"."]}),(0,n.jsx)(s.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/1-create-account/4-new-project.png",alt:"Create new project"}),(0,n.jsxs)(t.p,{children:["Enter a name for your project and click ",(0,n.jsx)(t.strong,{children:"Next"}),"."]}),(0,n.jsx)(s.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/1-create-account/5-new-project-name.png",alt:"Create new project"}),(0,n.jsxs)(t.p,{children:["On the next page, you can leave the current user as the project owner, and click ",(0,n.jsx)(t.strong,{children:"Create Project"}),"."]}),(0,n.jsxs)(t.p,{children:["Once the project is ready, continue the workshop from ",(0,n.jsx)("a",{href:"./create-cluster",children:(0,n.jsx)(t.strong,{children:"deploying a Database Cluster"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"sign-up-for-mongodb-atlas",children:"Sign up for MongoDB Atlas"}),"\n",(0,n.jsxs)(t.p,{children:["Start by going to the ",(0,n.jsx)(r.A,{to:"http://mongodb.com/try",children:"MongoDB website"})," and creating your account."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Creating a MongoDB Atlas account is free and does not require a credit card."})}),"\n",(0,n.jsx)(t.p,{children:"You will be greeted by a form similar to the one below."}),"\n",(0,n.jsx)(s.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/1-create-account/1-form.png",alt:"Account creation form"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"If you are doing this lab at an event, you should use the same email address you used to register for the event."})}),"\n",(0,n.jsxs)(t.p,{children:["Complete the form and click the ",(0,n.jsx)(t.strong,{children:"Create Your Atlas Account"})," button."]}),"\n",(0,n.jsx)(t.h2,{id:"verify-your-email-address",children:"Verify your email address"}),"\n",(0,n.jsx)(t.p,{children:"You will receive an email from MongoDB asking you to verify your email address. Click the link in the email to verify your email address."}),"\n",(0,n.jsx)(s.A,{url:"https://cloud.mongodb.com",src:"img/screenshots/20-mongodb-atlas/1-create-account/2-verify-email.png",alt:"Verify your email address"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"If you haven't received the email within two minutes, check your spam folder."})}),"\n",(0,n.jsx)(t.h2,{id:"finish-the-onboarding",children:"Finish the onboarding"}),"\n",(0,n.jsxs)(t.p,{children:["You will be redirected to the MongoDB Atlas onboarding wizard. Fill in the form and click ",(0,n.jsx)(t.strong,{children:"Finish"})," to continue."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3974:(e,t,o)=>{o.d(t,{A:()=>s});o(6540);var n=o(8774),a=o(4586),r=o(4848);function s(e){const t=(0,a.A)(),o=t?.siteConfig?.customFields?.utmParams||"",s=`${e.to}?${o}`;return(0,r.jsx)(n.A,{...e,to:s})}},2763:(e,t,o)=>{o.d(t,{A:()=>s});o(6540);var n=o(4848);function a(e){const t=e.url||"http://localhost:3000";return(0,n.jsxs)("div",{className:"browser container",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"column left",children:[(0,n.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,n.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,n.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,n.jsx)("div",{className:"column middle",children:(0,n.jsx)("input",{type:"text",value:t})}),(0,n.jsx)("div",{className:"column right",children:(0,n.jsxs)("div",{style:{float:"right"},children:[(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar"})]})})]}),(0,n.jsx)("div",{className:"content",children:e.children})]})}var r=o(6025);function s(e){return(0,n.jsx)(a,{...e,children:(0,n.jsx)("img",{src:(0,r.Ay)(e.src),alt:e.alt})})}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(6540);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);