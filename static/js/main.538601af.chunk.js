(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,r,c){},14:function(e,r,c){"use strict";c.r(r);var t=c(0),n=c.n(t),o=c(5),a=c.n(o),u=c(3),s=(c(10),c(16)),l=c(1);function d(){var e=n.a.useState("encoded_url"),r=Object(u.a)(e,2),c=r[0],o=r[1],a=n.a.useState("decoded_url"),d=Object(u.a)(a,2),i=d[0],j=d[1],v=n.a.useState(!1),b=Object(u.a)(v,2),f=b[0],p=b[1],h=n.a.useRef(),O=n.a.useRef();Object(t.useEffect)((function(){x()}),[f,c,i]);var x=function(){if("encoded_url"===c)try{var e=h.current.value,r=f?decodeURIComponent(e):decodeURI(e);O.current.value=r}catch(o){console.log("Error_1",o)}else try{var t=h.current.value,n=f?encodeURIComponent(t):encodeURI(t);O.current.value=n}catch(o){console.log("Error_2",o)}};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{children:["URL Decoder"," ",Object(l.jsx)("button",{onClick:function(){return p(!f)},children:f?"uri component on":"uri component off"})]}),Object(l.jsx)("textarea",{id:"url",name:"url",rows:"8",cols:"33",ref:h,onChange:x,placeholder:c}),Object(l.jsx)("div",{className:"swap-btn",onClick:function(){var e=c;o(i),j(e);var r=O.current.value;O.current.value=h.current.value,h.current.value=r,h.current.focus()},children:Object(l.jsx)(s.a,{id:"swap-icon"})}),Object(l.jsx)("textarea",{id:"url",name:"url",rows:"8",cols:"33",onChange:x,type:"text",ref:O,placeholder:i})]})}var i=document.getElementById("root");a.a.render(Object(l.jsx)(t.StrictMode,{children:Object(l.jsx)(d,{})}),i)}},[[14,1,2]]]);
//# sourceMappingURL=main.538601af.chunk.js.map