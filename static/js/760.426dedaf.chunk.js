"use strict";(self.webpackChunkju=self.webpackChunkju||[]).push([[760],{6760:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var n=a(5043),r=a(3216),t=a(1694),o=a.n(t),l=a(9513),c=a(579);function i(){const e=(0,r.Zp)(),[s,a]=(0,n.useState)({}),[t,i]=(0,n.useState)(!1),[d,p]=(0,n.useState)(null),[h,m]=(0,n.useState)(null),u=(0,n.useRef)(),{direction:b}=(0,l.J)();function j(e){a((s=>({...s,[e.target.name]:e.target.value})))}return(0,c.jsxs)("form",{className:"formLogin",onSubmit:async function(a){a.preventDefault();let n=o().object({email_or_phone:o().string().required(),password:o().string().required()}).validate(s,{abortEarly:!0});if(n.error)m(n.error.details);else try{i(!0);const a=await fetch("https://kog.pythonanywhere.com/api/v1/accounts/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),n=await a.json();i(!1),p(null),n.tokens?(p(null),localStorage.setItem("token_access",n.tokens.access),localStorage.setItem("token_refresh",n.tokens.refresh),localStorage.setItem("roleBycrypt",n.role),"admin"===n.role?e("/dashboard"):e("/")):p(n)}catch(r){console.error(r)}},ref:u,children:[d&&(0,c.jsx)("p",{className:"alert alert-secondary",children:d.non_field_errors}),h&&h.map(((e,s)=>(0,c.jsx)("p",{className:"alert alert-secondary",children:e.message},s))),(0,c.jsxs)("div",{className:"inp",children:[(0,c.jsx)("label",{htmlFor:"mobile",children:"EN"===b?"email_or_phone":"  \u0627\u0644\u0627\u064a\u0645\u064a\u0644 \u0627\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"string",name:"email_or_phone",id:"mobile",onChange:j})]}),(0,c.jsxs)("div",{className:"inp",children:[(0,c.jsx)("label",{htmlFor:"password",children:"EN"===b?"password":"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"password",name:"password",id:"password",onChange:j})]}),(0,c.jsxs)("div",{className:"inp",children:[(0,c.jsx)("button",{className:"btn btn-secondary",children:t?(0,c.jsx)("div",{className:"spinner-border text-secondary",role:"status",children:(0,c.jsx)("span",{className:"sr-only"})}):(0,c.jsx)(c.Fragment,{children:"EN"===b?" Login":"\u062a\u0633\u062c\u064a\u0644"})}),(0,c.jsx)("button",{className:"btn btn-secondary",onClick:()=>e("/register"),children:"EN"===b?"sign up ":"\u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"}),(0,c.jsx)("button",{className:"btn btn-secondary",onClick:()=>e("/changepassword"),children:"EN"===b?"change password ":" \u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"})]})]})}}}]);
//# sourceMappingURL=760.426dedaf.chunk.js.map