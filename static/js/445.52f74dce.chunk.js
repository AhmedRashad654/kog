"use strict";(self.webpackChunkju=self.webpackChunkju||[]).push([[445],{2445:(e,s,r)=>{r.r(s),r.d(s,{default:()=>c});var a=r(5043);const l={collAddUser:"AddUser_collAddUser__Z0f47",form:"AddUser_form__SmN5s",headAddUser:"AddUser_headAddUser__rTy63",inp:"AddUser_inp__SnX2A",role:"AddUser_role__IFpky"};var n=r(3216),d=r(1694),i=r.n(d),t=r(9513),o=r(579);function c(){const e=(0,n.Zp)(),[s,r]=(0,a.useState)({gender:"N",role:"user"}),[d,c]=(0,a.useState)(null),[m,h]=(0,a.useState)(!1),[p,u]=(0,a.useState)(null),{direction:j}=(0,t.J)();function x(e){r((s=>({...s,[e.target.name]:e.target.value})))}return(0,o.jsx)("div",{className:l.collAddUser,children:(0,o.jsxs)("form",{className:l.form,children:[d&&d.map(((e,s)=>(0,o.jsx)("p",{className:"alert alert-warning",children:e[s].message},s))),(0,o.jsxs)("div",{className:l.headAddUser,children:[(0,o.jsx)("button",{className:"btn btn-secondary",onClick:async function(r){r.preventDefault();let a=i().object({full_name:i().string().max(240).required(),email_address:i().string().email({tlds:["com","not","org"]}).max(240).required(),city:i().string().max(240).required(),mobile:i().string().length(11).pattern(/^[0-9]+$/).required(),whatsapp:i().string().length(11).pattern(/^[0-9]+$/).required(),password:i().string().min(6).required(),password2:i().string().min(6).valid(i().ref("password")).required(),gender:i().string().valid("M","F","N"),role:i().string().required()}).validate(s,{abortEarly:!1});if(a.error)c([a.error.details]);else{c(null);try{h(!0);const r=await fetch("https://kog.pythonanywhere.com/api/v1/accounts/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),a=await r.json();h(!1),a.tokens?e("/dashboard/user"):u(a)}catch(l){console.error(l)}}},children:m?(0,o.jsx)("div",{className:"spinner-border text-secondary",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}):"\u0627\u0636\u0627\u0641\u0629"}),(0,o.jsx)("button",{className:"btn btn-success",onClick:()=>{e("/dashboard/user")},children:"\u0631\u062c\u0648\u0639"})]}),(0,o.jsxs)("div",{className:l.colladduser,children:[(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsxs)("label",{htmlFor:"full_name",children:[" ","EN"===j?"full_name":"\u0627\u0644\u0627\u0633\u0645"]}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",name:"full_name",id:"name",onChange:x})]}),(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsx)("label",{htmlFor:"email_address",children:"EN"===j?"email_address":"\u0627\u0644\u0627\u064a\u0645\u064a\u0644"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"email",name:"email_address",onChange:x}),(null===p||void 0===p?void 0:p.email_address)&&(0,o.jsx)("p",{className:"error",children:null===p||void 0===p?void 0:p.email_address})]})]}),(0,o.jsxs)("div",{className:l.colladduser,children:[(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsx)("label",{htmlFor:"city",children:"EN"===j?"city":"\u0627\u0644\u0645\u062f\u064a\u0646\u0629"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"city",name:"city",onChange:x})]}),(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsxs)("label",{htmlFor:"mobile",children:[" ","EN"===j?"phone_number":"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"]}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"number",name:"mobile",id:"mobile",onChange:x}),(null===p||void 0===p?void 0:p.mobile)&&(0,o.jsx)("p",{className:"error",children:null===p||void 0===p?void 0:p.mobile})]})]}),(0,o.jsxs)("div",{className:l.colladduser,children:[(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsx)("label",{htmlFor:"whats\u0634pp",children:"EN"===j?"whatsApp":"\u0648\u0627\u062a\u0633\u0627\u0628"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"number",name:"whatsapp",id:"whatsapp",onChange:x})]}),(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsx)("label",{htmlFor:"gender",children:"EN"===j?"gender":"\u0627\u0644\u0646\u0648\u0639"}),(0,o.jsx)("br",{}),(0,o.jsxs)("select",{name:"gender",id:"gender",onChange:x,children:[(0,o.jsx)("option",{value:"N",children:"N"}),(0,o.jsx)("option",{value:"F",children:"F"}),(0,o.jsx)("option",{value:"M",children:"M"})]})]})]}),(0,o.jsxs)("div",{className:l.colladduser,children:[(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsx)("label",{htmlFor:"role",children:"EN"===j?"role":"\u0627\u0644\u062f\u0648\u0631"}),(0,o.jsx)("br",{}),(0,o.jsxs)("select",{name:"role",id:"role",className:l.role,onChange:x,children:[(0,o.jsx)("option",{value:"user",children:"EN"===j?"user":"\u0645\u0633\u062a\u062e\u062f\u0645"}),(0,o.jsx)("option",{value:"admin",children:"EN"===j?"admin":"\u0627\u062f\u0645\u0646"})]})]}),(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsxs)("label",{htmlFor:"password",children:["  ","EN"===j?"password":"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"]}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"password",name:"password",id:"password",onChange:x})]})]}),(0,o.jsxs)("div",{className:l.inp,children:[(0,o.jsxs)("label",{htmlFor:"password",children:[" ","EN"===j?"confirm password":"\u062a\u0627\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631","  "]}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"password",name:"password2",id:"password2",onChange:x})]})]})})}}}]);
//# sourceMappingURL=445.52f74dce.chunk.js.map