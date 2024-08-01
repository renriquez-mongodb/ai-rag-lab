"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[301],{8708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(4848),d=t(8453);const o={},a="\ud83d\udc50 Generate embeddings",i={id:"prepare-the-data/embed-data",title:"\ud83d\udc50 Generate embeddings",description:"To perform vector search on our data, we need to embed it (i.e. generate embedding vectors) before ingesting it into MongoDB.",source:"@site/docs/50-prepare-the-data/4-embed-data.mdx",sourceDirName:"50-prepare-the-data",slug:"/prepare-the-data/embed-data",permalink:"/ai-rag-lab/docs/prepare-the-data/embed-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/50-prepare-the-data/4-embed-data.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Chunk up the data",permalink:"/ai-rag-lab/docs/prepare-the-data/chunk-data"},next:{title:"\ud83d\udc50 Ingest data into MongoDB",permalink:"/ai-rag-lab/docs/prepare-the-data/ingest-data"}},s={},c=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-generate-embeddings",children:"\ud83d\udc50 Generate embeddings"}),"\n",(0,r.jsx)(n.p,{children:"To perform vector search on our data, we need to embed it (i.e. generate embedding vectors) before ingesting it into MongoDB."}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 5: Generate embeddings"})," section in the notebook to embed the chunked articles."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_8"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'SentenceTransformer("thenlper/gte-small")\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_9"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"embedding = embedding_model.encode(text)\nreturn embedding.tolist()\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_10"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'for doc in tqdm(split_docs):\n    doc["embedding"] = get_embedding(doc["body"])\n    embedded_docs.append(doc)\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"If the embedding generation is taking too long (> 2-3 min), kill/interrupt the cell and move on to the next step with the documents that have been embedded up until that point."})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const d={},o=r.createContext(d);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);