"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[214],{1634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(4848),a=t(8453);t(1179);const r={},o="\ud83d\udc50 Ingest data into MongoDB",i={id:"prepare-the-data/ingest-data",title:"\ud83d\udc50 Ingest data into MongoDB",description:"The final step to build a MongoDB vector store for our RAG application is to ingest the embedded article chunks into MongoDB.",source:"@site/docs/50-prepare-the-data/5-ingest-data.mdx",sourceDirName:"50-prepare-the-data",slug:"/prepare-the-data/ingest-data",permalink:"/ai-rag-lab/docs/prepare-the-data/ingest-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/50-prepare-the-data/5-ingest-data.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Generate embeddings",permalink:"/ai-rag-lab/docs/prepare-the-data/embed-data"},next:{title:"Perform Semantic Search on Your Data",permalink:"/ai-rag-lab/docs/category/perform-semantic-search-on-your-data"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-ingest-data-into-mongodb",children:"\ud83d\udc50 Ingest data into MongoDB"}),"\n",(0,s.jsx)(n.p,{children:"The final step to build a MongoDB vector store for our RAG application is to ingest the embedded article chunks into MongoDB."}),"\n",(0,s.jsxs)(n.p,{children:["Fill in any ",(0,s.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,s.jsx)(n.strong,{children:"Step 6: Ingest data into MongoDB"})," section in the notebook to ingest the embedded documents into MongoDB."]}),"\n",(0,s.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CODE_BLOCK_11"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"mongodb_client[DB_NAME][COLLECTION_NAME]\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CODE_BLOCK_12"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"collection.delete_many({})\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CODE_BLOCK_13"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"collection.insert_many(embedded_docs)\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1179:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(4848);function a(e){const n=e.url||"http://localhost:3000";return(0,s.jsxs)("div",{className:"browser container",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"column left",children:[(0,s.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,s.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,s.jsx)("div",{className:"column middle",children:(0,s.jsx)("input",{type:"text",value:n})}),(0,s.jsx)("div",{className:"column right",children:(0,s.jsxs)("div",{style:{float:"right"},children:[(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"}),(0,s.jsx)("span",{className:"bar"})]})})]}),(0,s.jsx)("div",{className:"content",children:e.children})]})}var r=t(8180);function o(e){return(0,s.jsx)(a,{...e,children:(0,s.jsx)("img",{src:(0,r.A)(e.src),alt:e.alt})})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);