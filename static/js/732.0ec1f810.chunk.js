"use strict";(self.webpackChunkju=self.webpackChunkju||[]).push([[732],{4732:(s,e,l)=>{l.r(e),l.d(e,{default:()=>r});var i=l(5043);const n={allallall:"DisplayQuestionAdmin_allallall__GPGj5",headAllTable:"DisplayQuestionAdmin_headAllTable__LCQy8",btn:"DisplayQuestionAdmin_btn__07HK6","btn-warning":"DisplayQuestionAdmin_btn-warning__6JgKv",firstuser:"DisplayQuestionAdmin_firstuser__f+r29",alltable:"DisplayQuestionAdmin_alltable__64IHt",inform:"DisplayQuestionAdmin_inform__hzLXh"};var a=l(3216),t=l(5475),d=l(9513),c=l(579);function r(){const s=(0,i.useRef)(),[e,l]=(0,i.useState)([]),{direction:r,noForm:o,addchoice:h}=(0,d.J)(),u=(0,a.Zp)();return(0,i.useEffect)((()=>{!async function(){let s=await fetch("https://kog.pythonanywhere.com/api/v1/home/questions/?form=".concat(o)),e=await s.json();l(e)}()}),[o]),(0,c.jsx)("div",{className:n.allallall,children:(0,c.jsxs)("div",{className:n.alltable,id:"ahmed",children:[(0,c.jsx)("div",{className:n.headAllTable,children:(0,c.jsx)(t.k2,{to:"/dashboard/jops/addquetions",className:"btn btn-secondary",children:"\u0623\u0636\u0627\u0641\u0629 \u062c\u062f\u064a\u062f"})}),(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"id"}),(0,c.jsx)("th",{children:"\u0627\u0644\u0646\u0648\u0639"}),(0,c.jsxs)("th",{children:[" ","EN"===r?"question":"\u0627\u0644\u0633\u0624\u0627\u0644"]}),(0,c.jsx)("th",{children:"\u0627\u0636\u0627\u0641\u0629 \u0627\u062c\u0627\u0628\u0629"})]})}),(0,c.jsx)("tbody",{ref:s,children:e&&e.map(((s,e)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:s.id}),(0,c.jsx)("td",{children:s.type}),(0,c.jsx)("td",{children:"EN"===r?s.body_en:s.body_ar}),(0,c.jsxs)("td",{children:["radio"===s.type?(0,c.jsxs)("button",{className:"btn btn-success",onClick:()=>{h(s.id),u("/dashboard/jops/displayquestionform/addchoice")},children:["Add Choice"," "]}):""," "]})]},e)))})]})]})})}}}]);
//# sourceMappingURL=732.0ec1f810.chunk.js.map