"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[839],{8031:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(4848),s=r(8453);const o={},a="\ud83e\uddb9 Stream responses from the RAG application",i={id:"build-rag-app/stream-responses",title:"\ud83e\uddb9 Stream responses from the RAG application",description:"By default, generation results are returned once the generation is completed. Another option is to stream the results as they come, which is useful for chat use cases where the user can incrementally see results as each token is generated.",source:"@site/docs/70-build-rag-app/3-stream-responses.mdx",sourceDirName:"70-build-rag-app",slug:"/build-rag-app/stream-responses",permalink:"/ai-rag-lab/docs/build-rag-app/stream-responses",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/70-build-rag-app/3-stream-responses.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb9 Re-rank retrieved results",permalink:"/ai-rag-lab/docs/build-rag-app/add-reranking"},next:{title:"Add memory to the RAG application",permalink:"/ai-rag-lab/docs/category/add-memory-to-the-rag-application"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-stream-responses-from-the-rag-application",children:"\ud83e\uddb9 Stream responses from the RAG application"}),"\n",(0,t.jsx)(n.p,{children:"By default, generation results are returned once the generation is completed. Another option is to stream the results as they come, which is useful for chat use cases where the user can incrementally see results as each token is generated."}),"\n",(0,t.jsxs)(n.p,{children:["Fill in any ",(0,t.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,t.jsx)(n.strong,{children:"\ud83e\uddb9\u200d\u2640\ufe0f Return streaming responses"})," section in the notebook to stream the results from your RAG application."]}),"\n",(0,t.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_26"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'fw_client.chat.completions.create(\n    model=model,\n    temperature=0,\n    stream=True,\n    messages=[\n        {\n            "role": "user",\n            "content": create_prompt(user_query),\n        }\n    ],\n)\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_27"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'for chunk in response:\n    if chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end="")\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);