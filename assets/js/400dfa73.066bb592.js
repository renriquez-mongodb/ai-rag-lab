"use strict";(self.webpackChunkai_rag_lab=self.webpackChunkai_rag_lab||[]).push([[254],{6223:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(4848),o=s(8453);const i={},t="\ud83d\udc50 Add memory to the RAG application",a={id:"add-memory/add-memory",title:"\ud83d\udc50 Add memory to the RAG application",description:'In many Q&A applications we want to allow the user to have a back-and-forth conversation with the LLM, meaning the application needs some sort of "memory" of past questions and answers, and some logic for incorporating those into its current thinking. In this section, you will retrieve chat message history from MongoDB and incorporate it in your RAG application.',source:"@site/docs/80-add-memory/2-add-memory.mdx",sourceDirName:"80-add-memory",slug:"/add-memory/add-memory",permalink:"/ai-rag-lab/docs/add-memory/add-memory",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-rag-lab/blob/main/docs/80-add-memory/2-add-memory.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Tools, libraries, and concepts",permalink:"/ai-rag-lab/docs/add-memory/concepts"},next:{title:"\ud83c\udfaf Summary",permalink:"/ai-rag-lab/docs/summary"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-add-memory-to-the-rag-application",children:"\ud83d\udc50 Add memory to the RAG application"}),"\n",(0,r.jsx)(n.p,{children:'In many Q&A applications we want to allow the user to have a back-and-forth conversation with the LLM, meaning the application needs some sort of "memory" of past questions and answers, and some logic for incorporating those into its current thinking. In this section, you will retrieve chat message history from MongoDB and incorporate it in your RAG application.'}),"\n",(0,r.jsxs)(n.p,{children:["Fill in any ",(0,r.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,r.jsx)(n.strong,{children:"Step 10: Add memory to the RAG application"})," section in the notebook to add memory to the RAG application."]}),"\n",(0,r.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_25"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'history_collection.create_index("session_id")\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_26"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'{\n    "session_id": session_id,\n    "role": role,\n    "content": content,\n    "timestamp": datetime.now(),\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_27"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"history_collection.insert_one(message)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_28"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'history_collection.find({"session_id": session_id}).sort("timestamp", 1)\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_29"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'{"role": msg["role"], "content": msg["content"]} for msg in cursor\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_30"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"message_history = retrieve_session_history(session_id)\nmessages += message_history\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_31"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'user_message = {"role": "user", "content": user_query}\nmessages.append(user_message)\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CODE_BLOCK_32"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'store_chat_message(session_id, "user", user_query)\nstore_chat_message(session_id, "assistant", answer)\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(6540);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);