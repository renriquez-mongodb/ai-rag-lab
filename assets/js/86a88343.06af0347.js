"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[186],{6742:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const c={},s="\ud83e\uddb9 Combine pre-filtering with vector search",o={id:"perform-semantic-search/pre-filtering",title:"\ud83e\uddb9 Combine pre-filtering with vector search",description:"Pre-filtering a technique to optimize vector search by only considering documents that match certain criteria during vector search.",source:"@site/docs/60-perform-semantic-search/4-pre-filtering.mdx",sourceDirName:"60-perform-semantic-search",slug:"/perform-semantic-search/pre-filtering",permalink:"/ai-rag-lab/docs/perform-semantic-search/pre-filtering",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/60-perform-semantic-search/4-pre-filtering.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Perform semantic search",permalink:"/ai-rag-lab/docs/perform-semantic-search/vector-search"},next:{title:"Build the RAG Application",permalink:"/ai-rag-lab/docs/category/build-the-rag-application"}},a={},d=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-combine-pre-filtering-with-vector-search",children:"\ud83e\uddb9 Combine pre-filtering with vector search"}),"\n",(0,t.jsx)(n.p,{children:"Pre-filtering a technique to optimize vector search by only considering documents that match certain criteria during vector search."}),"\n",(0,t.jsxs)(n.p,{children:["Fill in any ",(0,t.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,t.jsx)(n.strong,{children:"\ud83e\uddb9\u200d\u2640\ufe0f Combine pre-filtering with vector search"})," section in the notebook to get a sense of how to combine pre-filtering with MongoDB Atlas Vector Search."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DO NOT"})," actually modify the existing vector index definitions in the Atlas UI, or the existing pipeline definitions in the code."]})}),"\n",(0,t.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_16"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "fields": [\n        {\n            "numDimensions": 1024,\n            "path": "embedding",\n            "similarity": "cosine",\n            "type": "vector"\n        },\n        {\n            "path": "metadata.language"\n            "type": "filter"\n        }\n    ]\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_17"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "$vectorSearch": {\n            "index": ATLAS_VECTOR_SEARCH_INDEX_NAME,\n            "queryVector": query_embedding,\n            "path": "embedding",\n            "numCandidates": 150,\n            "limit": 5,\n            "filter": {"metadata.language": "en"}\n        }\n    },\n    {\n        "$project": {\n            "_id": 0,\n            "page_content": 1,\n            "score": {"$meta": "vectorSearchScore"}\n        }\n    }\n]\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_18"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "fields": [\n        {\n            "numDimensions": 1024,\n            "path": "embedding",\n            "similarity": "cosine",\n            "type": "vector"\n        },\n        {\n            "path": "metadata.language"\n            "type": "filter"\n        },\n        {\n            "path": "type"\n            "type": "filter"\n        }\n    ]\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_19"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "$vectorSearch": {\n            "index": ATLAS_VECTOR_SEARCH_INDEX_NAME,\n            "queryVector": query_embedding,\n            "path": "embedding",\n            "numCandidates": 150,\n            "limit": 5,\n            "filter": {\n                "$and": [\n                    {"metadata.language": "en"},\n                    {"type": "Document"}\n                ]\n            }\n        }\n    },\n    {\n        "$project": {\n            "_id": 0,\n            "page_content": 1,\n            "score": {"$meta": "vectorSearchScore"}\n        }\n    }\n]\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const i={},c=t.createContext(i);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);