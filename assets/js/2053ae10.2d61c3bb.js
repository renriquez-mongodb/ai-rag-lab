"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[276],{979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(4848),a=t(8453);const s={},o="\ud83d\udc50 Chunk up the data",d={id:"prepare-the-data/chunk-data",title:"\ud83d\udc50 Chunk up the data",description:"Since we are working with large documents, we first need to break them up into smaller chunks before embedding and storing them in MongoDB.",source:"@site/docs/50-prepare-the-data/2-chunk-data.mdx",sourceDirName:"50-prepare-the-data",slug:"/prepare-the-data/chunk-data",permalink:"/ai-rag-lab/docs/prepare-the-data/chunk-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/50-prepare-the-data/2-chunk-data.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Load the dataset",permalink:"/ai-rag-lab/docs/prepare-the-data/load-data"},next:{title:"\ud83d\udc50 Generate embeddings",permalink:"/ai-rag-lab/docs/prepare-the-data/embed-data"}},i={},c=[];function h(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-chunk-up-the-data",children:"\ud83d\udc50 Chunk up the data"})}),"\n",(0,r.jsx)(n.p,{children:"Since we are working with large documents, we first need to break them up into smaller chunks before embedding and storing them in MongoDB."}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 4: Chunk up the data"})," section in the notebook to chunk up the articles we loaded."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_1"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'RecursiveCharacterTextSplitter.from_tiktoken_encoder(\n    encoding_name="cl100k_base", separators=separators, chunk_size=200, chunk_overlap=30\n)\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_2"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"text_splitter.split_text(text)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_3"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'get_chunks(doc, "body")\n'})})})]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);