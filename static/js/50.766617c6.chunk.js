"use strict";(self.webpackChunkju=self.webpackChunkju||[]).push([[50,685],{2557:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var n=i(9513);const c={EnglishAndArabic:"EnglishAndArabic_EnglishAndArabic__BSBaP",activedir:"EnglishAndArabic_activedir__rOPYk"};var l=i(579);function t(){const{english:e,arabic:s,direction:i}=(0,n.J)();return(0,l.jsxs)("div",{className:c.EnglishAndArabic,children:[(0,l.jsx)("span",{onClick:()=>e(),className:"EN"===i?c.activedir:"",children:"EN"}),(0,l.jsx)("span",{onClick:()=>s(),className:"AR"===i?c.activedir:"",children:"AR"})]})}},4685:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var n=i(5043),c=i(8666),l=i(7929),t=i(3910),a=i(2557),r=i(579);function o(){return(0,n.useEffect)((()=>{const e={distance:"50px",origin:"left",duration:1e3};(0,c.A)().reveal(".colllastfooter",{...e}),(0,c.A)().reveal(".colllastfooter1",{...e,delay:1e3});(0,c.A)().reveal(".foorlast p",{distance:"50px",origin:"bottom",duration:1e3}),(0,c.A)().reveal(".iconEnglish",{...e,delay:500}),(0,c.A)().reveal(".secondthree",{...e,delay:800})}),[]),(0,r.jsx)("div",{className:"collfooter",children:(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"top",children:(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("h1",{children:"Looking for"}),(0,r.jsx)("h2",{children:"collaboration"})]})}),(0,r.jsxs)("div",{className:"second",children:[(0,r.jsxs)("div",{className:"colllastfooter",children:[(0,r.jsxs)("div",{className:"secondtwo",children:[(0,r.jsx)("h4",{children:"company"}),(0,r.jsxs)("div",{className:"colltwo",children:[(0,r.jsxs)("div",{className:"email",children:[(0,r.jsx)(t.g,{icon:l.Hzw,className:"email1"}),(0,r.jsxs)("p",{children:["Mail:",(0,r.jsx)("small",{children:"info@liquid.com"})]})]}),(0,r.jsxs)("div",{className:"call",children:[(0,r.jsx)(t.g,{icon:l.KKr,className:"call1"}),(0,r.jsxs)("p",{children:["Call:",(0,r.jsx)("small",{children:"+(123) 567 8901"})," "]})]}),(0,r.jsxs)("div",{className:"location",children:[(0,r.jsx)(t.g,{icon:l.gKm,className:"location1"}),(0,r.jsx)("p",{children:"Visit"})]})]})]}),(0,r.jsxs)("div",{className:"secondthree",children:[(0,r.jsx)("h4",{children:"Services"}),(0,r.jsxs)("div",{className:"collthree",children:[(0,r.jsx)("p",{children:"bussnies consulation"}),(0,r.jsx)("p",{children:"Growth plan"}),(0,r.jsx)("p",{children:"RD Service plan"}),(0,r.jsx)("p",{children:"Startup Investment"})]})]})]}),(0,r.jsxs)("div",{className:"colllastfooter1",children:[(0,r.jsxs)("div",{className:"secondfour",children:[(0,r.jsx)("h4",{children:"platform"}),(0,r.jsxs)("div",{className:"collfive",children:[(0,r.jsx)("p",{children:"About US"}),(0,r.jsx)("p",{children:"Services"}),(0,r.jsx)("p",{children:"Contact"})]})]}),(0,r.jsxs)("div",{className:"secondfive",children:[(0,r.jsx)("h4",{children:"Resources"}),(0,r.jsxs)("div",{className:"collthree",children:[(0,r.jsx)("p",{children:"careers"}),(0,r.jsx)("p",{children:"Customer Portal"})]})]})]})]}),(0,r.jsxs)("div",{className:"foorlast",children:[(0,r.jsx)("p",{children:"These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions."}),(0,r.jsx)("div",{className:"iconEnglish",children:(0,r.jsx)(a.A,{})})]})]})})}},8276:(e,s,i)=>{i.d(s,{A:()=>x});var n=i(5043),c=i(3216),l=i(5475),t=i(3910),a=i(7929),r=i(9644),o=i(9513),d=i(2557),h=i(579);function x(){const{direction:e}=(0,o.J)(),s=localStorage.getItem("token_refresh"),i=localStorage.getItem("token_access"),x=(0,c.Zp)(),[j,m]=(0,n.useState)(!1);(0,n.useEffect)((()=>{m(!s||!i)}),[i,s]);const u=(0,n.useRef)(),v=(0,n.useRef)(),N=(0,n.useRef)();async function f(){try{const e=await fetch("https://kog.pythonanywhere.com/api/v1/accounts/logout/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i," ")},body:JSON.stringify({refresh_token:s})}),n=await e.json();console.log(n),"Successfully logged out."===n.detail&&(localStorage.clear(),m(!0),x("/"))}catch(e){console.error(e)}}return(0,h.jsxs)("div",{className:"navbaronly bg-dark",children:[(0,h.jsx)("div",{className:"dropdownonly bg-dark",ref:u,children:(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[" ",(0,h.jsx)(l.k2,{to:"/",children:"EN"===e?"Home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})]}),(0,h.jsxs)("li",{children:[" ",(0,h.jsx)(l.k2,{to:"/interview",children:"EN"===e?"Interview":"\u0627\u0646\u062a\u0631\u0641\u064a\u0648"})," "]}),(0,h.jsxs)("li",{children:[" ",(0,h.jsx)(l.k2,{children:"EN"===e?"Services":"\u0627\u0644\u062e\u062f\u0645\u0627\u062a"})," "]}),(0,h.jsxs)("li",{children:[" ",(0,h.jsx)(l.N_,{to:"/contact",children:"EN"===e?"contact":"\u062a\u0648\u0627\u0635\u0644"})]}),(0,h.jsxs)("li",{onClick:()=>x("/register"),children:[" ","EN"===e?"     sign in":"\u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"," "]}),j?(0,h.jsxs)("li",{onClick:()=>x("/login"),children:[" ","EN"===e?"  Login":"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"]}):(0,h.jsx)("li",{onClick:f,children:"EN"===e?"  Logout":"\u062a\u0633\u062c\u064a\u0644 \u062e\u0631\u0648\u062c"}),(0,h.jsx)("li",{children:(0,h.jsx)(d.A,{})})]})}),(0,h.jsxs)("div",{className:"leftNavbar",children:[(0,h.jsxs)("div",{className:"gt",children:[(0,h.jsx)(t.g,{className:"right",icon:a.vmR}),(0,h.jsx)(t.g,{className:"right",icon:a.vmR})]}),(0,h.jsx)("img",{src:r,alt:""})]}),(0,h.jsxs)("div",{className:"centerNavbar",children:[(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.k2,{to:"/",children:"EN"===e?"Home":"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})}),(0,h.jsxs)("li",{children:[" ",(0,h.jsx)(l.k2,{to:"/interview",children:"EN"===e?"Interview":"\u0627\u0646\u062a\u0631\u0641\u064a\u0648"})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)(l.k2,{children:"EN"===e?"Services":"\u0627\u0644\u062e\u062f\u0645\u0627\u062a"})," "]}),(0,h.jsx)("li",{children:(0,h.jsx)(l.k2,{to:"/contact",children:"EN"===e?"contact":"\u062a\u0648\u0627\u0635\u0644"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.A,{})})]}),(0,h.jsx)(t.g,{icon:a.ckx,id:"bar",ref:v,onClick:function(e){u.current.style.height="420px",v.current.style.fontSize="0",N.current.style.display="block"},className:"hidden"}),(0,h.jsx)(t.g,{icon:a.Qbn,id:"close",ref:N,onClick:function(){u.current.style.height="0",v.current.style.fontSize="25px",N.current.style.display="none"},className:"hidden"})]}),(0,h.jsxs)("div",{className:"rigthNavbar",children:[(0,h.jsx)("button",{className:"btn btn-secondary",id:"signin",onClick:()=>x("/register"),children:"EN"===e?"     sign in":"\u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"}),j?(0,h.jsx)("button",{className:"btn btn-secondary",onClick:()=>x("/login"),id:"login",children:"EN"===e?"  Login":"\u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"}):(0,h.jsx)("button",{onClick:f,className:"btn btn-secondary",id:"logout",children:"EN"===e?"  Logout":"\u062a\u0633\u062c\u064a\u0644 \u062e\u0631\u0648\u062c"})]})]})}},50:(e,s,i)=>{i.r(s),i.d(s,{default:()=>j});var n=i(5043),c=i(8276),l=i(8666),t=i(9513),a=i(579);function r(){const{direction:e}=(0,t.J)();return(0,n.useEffect)((()=>{const e={distance:"50px",origin:"top",duration:1e3};(0,l.A)().reveal(".maintext h1",{...e}),(0,l.A)().reveal(".maintext h2",{...e,delay:500}),(0,l.A)().reveal(".maintext p",{...e,delay:1e3})}),[]),(0,a.jsx)("div",{className:"header",children:(0,a.jsxs)("div",{className:"maintext",children:[(0,a.jsx)("h1",{children:"EN"===e?"Flexible Freight":"\u0634\u062d\u0646 \u0645\u0631\u0646"}),(0,a.jsx)("h2",{children:"EN"===e?"Services.":"\u062e\u062f\u0645\u0627\u062a"}),(0,a.jsx)("p",{children:"EN"===e?"Our transportation division offers reliable and efficient solutions  for all your transportation needs.":"\u064a\u0642\u062f\u0645 \u0642\u0633\u0645 \u0627\u0644\u0646\u0642\u0644 \u0644\u062f\u064a\u0646\u0627 \u062e\u062f\u0645\u0627\u062a \u0645\u0648\u062b\u0648\u0642\u0629 \u0644\u062c\u0645\u064a\u0639 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643"})]})})}function o(){const[e,s]=(0,n.useState)([]),{direction:i}=(0,t.J)();return(0,n.useEffect)((()=>{!async function(){let e=await fetch("https://kog.pythonanywhere.com/api/v1/home/services/"),i=await e.json();s(i)}()}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"allSerices",id:"services",children:(0,a.jsx)("div",{className:"services",children:e.map(((e,s)=>(0,a.jsxs)("div",{className:"one",children:[(0,a.jsx)("div",{className:"contimg",children:(0,a.jsx)("img",{src:e.image,alt:"imge"})}),(0,a.jsx)("h4",{className:"h6",children:"EN"===i?e.title_en:e.title_ar}),(0,a.jsx)("p",{children:"EN"===i?e.description_en:e.description_ar})]},s)))})})})}const d=function(){const[e,s]=(0,n.useState)([]),{direction:i}=(0,t.J)();return(0,n.useEffect)((()=>{!async function(){let e=await fetch("https://kog.pythonanywhere.com/api/v1/home/partners/"),i=await e.json();s(i)}()}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"allslick",children:[(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"EN"===i?"Clients":"\u0627\u0644\u0639\u0645\u0644\u0627\u0621"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam qui nesciunt eveniet minima illum!"})]}),(0,a.jsx)("marquee",{scrollamount:"10",children:(0,a.jsx)("div",{className:"hj",children:e.map(((e,s)=>(0,a.jsx)("img",{src:e.image,alt:""},s)))})})]})})};const h=function(){const[e,s]=(0,n.useState)([]),[i,c]=(0,n.useState)(0),{direction:l}=(0,t.J)();return(0,n.useEffect)((()=>{const s=e.length-1;i<0&&c(s),i>s&&c(0)}),[i,e]),(0,n.useEffect)((()=>{let e=setInterval((()=>{c(i+1)}),3e3);return()=>clearInterval(e)}),[i]),(0,n.useEffect)((()=>{!async function(){let e=await fetch("https://kog.pythonanywhere.com/api/v1/home/sliders"),i=await e.json();console.log(i),s(i)}()}),[]),(0,a.jsxs)("section",{className:"section",children:[(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{children:"EN"===l?"advertisements":"\u0627\u0644\u0627\u0639\u0644\u0627\u0646\u0627\u062a"})}),(0,a.jsx)("div",{className:"section-center",children:e.map(((s,n)=>{const{id:c,image:t,name:r,text_ar:o,text_en:d}=s;let h="nextSlide";return n===i&&(h="activeSlide"),(n===i-1||0===i&&n===e.length-1)&&(h="lastSlide"),(0,a.jsxs)("article",{className:h,children:[(0,a.jsx)("img",{src:t,alt:r,className:"person-img"}),(0,a.jsx)("h4",{className:"EN"===l?"e":"r",children:"undefined"!==d&&"undefined"!==o?"EN"===l?d:o:""})]},c)}))})]})};var x=i(4685);function j(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.A,{}),(0,a.jsx)(r,{}),(0,a.jsx)(o,{}),(0,a.jsx)(d,{}),(0,a.jsx)(h,{}),(0,a.jsx)(x.default,{})]})}},9644:(e,s,i)=>{e.exports=i.p+"static/media/KOG LOGO.c72007cb00ff013fe422.png"}}]);
//# sourceMappingURL=50.766617c6.chunk.js.map