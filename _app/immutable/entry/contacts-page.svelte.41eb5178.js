import{W as xe,S as Ne,i as Ve,s as Ce,e as Ie,b as X,g as le,v as ze,d as de,f as Be,h as g,X as se,L as Ae,M as Te,k as E,l as p,m as A,n as h,E as d,a9 as Ue,a as C,q as W,c as z,r as Z,N as ie,u as He,aa as We,ab as Ze,ac as Re,_ as Ye,ad as Xe,ae as Ge,af as Je,F as Ke,ag as oe,y as Qe,z as $e,ah as ae,A as et,B as tt,P as at}from"../chunks/index.b1f12964.js";import{w as Pe,d as rt}from"../chunks/index.1cf1cf9d.js";import{d as it,e as nt,g as st}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.3fcab4af.js";const lt={message:"Missing Toast Message",autohide:!0,timeout:5e3};function ot(){const r=Math.random();return Number(r).toString(32)}function ct(r){if(r.autohide===!0)return setTimeout(()=>{ce.close(r.id)},r.timeout)}function ut(){const{subscribe:r,set:e,update:a}=Pe([]);return{subscribe:r,trigger:t=>a(i=>{const c=ot();t&&t.callback&&t.callback({id:c,status:"queued"});const o={...lt,...t,id:c};return o.timeoutId=ct(o),i.push(o),i}),close:t=>a(i=>{if(i.length>0){const c=i.findIndex(l=>l.id===t),o=i[c];o&&(o.callback&&o.callback({id:t,status:"closed"}),o.timeoutId&&clearTimeout(o.timeoutId),i.splice(c,1))}return i}),clear:()=>e([])}}const ce=ut();function ft(r,{from:e,to:a},t={}){const i=getComputedStyle(r),c=i.transform==="none"?"":i.transform,[o,l]=i.transformOrigin.split(" ").map(parseFloat),m=e.left+e.width*o/a.width-(a.left+o),_=e.top+e.height*l/a.height-(a.top+l),{delay:s=0,duration:n=v=>Math.sqrt(v)*120,easing:u=it}=t;return{delay:s,duration:xe(n)?n(Math.sqrt(m*m+_*_)):n,easing:u,css:(v,k)=>{const j=k*m,w=k*_,b=v+k*e.width/a.width,F=v+k*e.height/a.height;return`transform: ${c} translate(${j}px, ${w}px) scale(${b}, ${F});`}}}function De(r,e,a){const t=r.slice();return t[28]=e[a],t[30]=a,t}function je(r){let e,a,t=[],i=new Map,c,o,l,m=r[6];const _=s=>s[28];for(let s=0;s<m.length;s+=1){let n=De(r,m,s),u=_(n);i.set(u,t[s]=qe(u,n))}return{c(){e=E("div"),a=E("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0,"data-testid":!0});var n=A(e);a=p(n,"DIV",{class:!0});var u=A(a);for(let v=0;v<t.length;v+=1)t[v].l(u);u.forEach(g),n.forEach(g),this.h()},h(){h(a,"class",c="snackbar "+r[8]),h(e,"class",o="snackbar-wrapper "+r[9]),h(e,"data-testid","snackbar-wrapper")},m(s,n){X(s,e,n),d(e,a);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(a,null);l=!0},p(s,n){if(n&1246){m=s[6],ze();for(let u=0;u<t.length;u+=1)t[u].r();t=Ue(t,n,_,1,s,m,i,a,Je,qe,null,De);for(let u=0;u<t.length;u+=1)t[u].a();Be()}(!l||n&256&&c!==(c="snackbar "+s[8]))&&h(a,"class",c),(!l||n&512&&o!==(o="snackbar-wrapper "+s[9]))&&h(e,"class",o)},i(s){if(!l){for(let n=0;n<m.length;n+=1)le(t[n]);l=!0}},o(s){for(let n=0;n<t.length;n+=1)de(t[n]);l=!1},d(s){s&&g(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function Se(r){let e,a=r[28].action.label+"",t,i;function c(){return r[24](r[30])}return{c(){e=E("button"),this.h()},l(o){e=p(o,"BUTTON",{class:!0});var l=A(e);l.forEach(g),this.h()},h(){h(e,"class",r[2])},m(o,l){X(o,e,l),e.innerHTML=a,t||(i=ie(e,"click",c),t=!0)},p(o,l){r=o,l&64&&a!==(a=r[28].action.label+"")&&(e.innerHTML=a),l&4&&h(e,"class",r[2])},d(o){o&&g(e),t=!1,i()}}}function qe(r,e){let a,t,i,c=e[28].message+"",o,l,m,_,s,n,u,v,k,j,w=Ke,b,F,R,T=e[28].action&&Se(e);function L(){return e[25](e[28])}return{key:r,first:null,c(){a=E("div"),t=E("div"),i=E("div"),o=C(),l=E("div"),T&&T.c(),m=C(),_=E("button"),s=W(e[4]),u=C(),this.h()},l(I){a=p(I,"DIV",{});var y=A(a);t=p(y,"DIV",{class:!0,role:!0,"aria-live":!0,"data-testid":!0});var S=A(t);i=p(S,"DIV",{class:!0});var q=A(i);q.forEach(g),o=z(S),l=p(S,"DIV",{class:!0});var B=A(l);T&&T.l(B),m=z(B),_=p(B,"BUTTON",{class:!0});var G=A(_);s=Z(G,e[4]),G.forEach(g),B.forEach(g),S.forEach(g),u=z(y),y.forEach(g),this.h()},h(){h(i,"class","text-base"),h(_,"class",e[3]),h(l,"class","toast-actions "+vt),h(t,"class",n="toast "+e[7]+" "+(e[28].background??e[1])+" "+e[28].classes),h(t,"role","alert"),h(t,"aria-live","polite"),h(t,"data-testid","toast"),this.first=a},m(I,y){X(I,a,y),d(a,t),d(t,i),i.innerHTML=c,d(t,o),d(t,l),T&&T.m(l,null),d(l,m),d(l,_),d(_,s),d(a,u),b=!0,F||(R=ie(_,"click",L),F=!0)},p(I,y){e=I,(!b||y&64)&&c!==(c=e[28].message+"")&&(i.innerHTML=c),e[28].action?T?T.p(e,y):(T=Se(e),T.c(),T.m(l,m)):T&&(T.d(1),T=null),(!b||y&16)&&He(s,e[4]),(!b||y&8)&&h(_,"class",e[3]),(!b||y&194&&n!==(n="toast "+e[7]+" "+(e[28].background??e[1])+" "+e[28].classes))&&h(t,"class",n)},r(){j=a.getBoundingClientRect()},f(){We(a),w(),Ze(a,j)},a(){w(),w=Re(a,j,ft,{duration:e[0]})},i(I){b||(Ye(()=>{b&&(k&&k.end(1),v=Xe(a,e[12],{key:e[28].id}),v.start())}),b=!0)},o(I){v&&v.invalidate(),k=Ge(a,e[11],{key:e[28].id}),b=!1},d(I){I&&g(a),T&&T.d(),I&&k&&k.end(),F=!1,R()}}}function dt(r){let e,a,t=r[5].length&&je(r);return{c(){t&&t.c(),e=Ie()},l(i){t&&t.l(i),e=Ie()},m(i,c){t&&t.m(i,c),X(i,e,c),a=!0},p(i,[c]){i[5].length?t?(t.p(i,c),c&32&&le(t,1)):(t=je(i),t.c(),le(t,1),t.m(e.parentNode,e)):t&&(ze(),de(t,1,1,()=>{t=null}),Be())},i(i){a||(le(t),a=!0)},o(i){de(t),a=!1},d(i){t&&t.d(i),i&&g(e)}}}const mt="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",ht="flex flex-col space-y-2",bt="flex justify-between items-center pointer-events-auto",vt="flex items-center space-x-2";function _t(r,e,a){let t,i,c,o,l;se(r,ce,f=>a(5,l=f));let{position:m="b"}=e,{max:_=3}=e,{duration:s=250}=e,{background:n="variant-filled-secondary"}=e,{width:u="max-w-[640px]"}=e,{color:v=""}=e,{padding:k="p-4"}=e,{spacing:j="space-x-4"}=e,{rounded:w="rounded-container-token"}=e,{shadow:b="shadow-lg"}=e,{zIndex:F="z-[888]"}=e,{buttonAction:R="btn variant-filled"}=e,{buttonDismiss:T="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:L="✕"}=e,I,y,S={x:0,y:0};switch(m){case"t":I="justify-center items-start",y="items-center",S={x:0,y:-100};break;case"b":I="justify-center items-end",y="items-center",S={x:0,y:100};break;case"l":I="justify-start items-center",y="items-start",S={x:-100,y:0};break;case"r":I="justify-end items-center",y="items-end",S={x:100,y:0};break;case"tl":I="justify-start items-start",y="items-start",S={x:-100,y:0};break;case"tr":I="justify-end items-start",y="items-end",S={x:100,y:0};break;case"bl":I="justify-start items-end",y="items-start",S={x:-100,y:0};break;case"br":I="justify-end items-end",y="items-end",S={x:100,y:0};break}function q(f){var Y,J;(J=(Y=l[f])==null?void 0:Y.action)==null||J.response(),ce.close(l[f].id)}const[B,G]=nt({duration:f=>Math.sqrt(f*s),fallback(f){const Y=getComputedStyle(f),J=Y.transform==="none"?"":Y.transform;return{duration:s,easing:st,css:(U,$)=>`
					transform: ${J} scale(${U}) translate(${$*S.x}%, ${$*S.y}%);
					opacity: ${U}
				`}}}),ne=f=>q(f),P=f=>ce.close(f.id);return r.$$set=f=>{a(27,e=Ae(Ae({},e),Te(f))),"position"in f&&a(13,m=f.position),"max"in f&&a(14,_=f.max),"duration"in f&&a(0,s=f.duration),"background"in f&&a(1,n=f.background),"width"in f&&a(15,u=f.width),"color"in f&&a(16,v=f.color),"padding"in f&&a(17,k=f.padding),"spacing"in f&&a(18,j=f.spacing),"rounded"in f&&a(19,w=f.rounded),"shadow"in f&&a(20,b=f.shadow),"zIndex"in f&&a(21,F=f.zIndex),"buttonAction"in f&&a(2,R=f.buttonAction),"buttonDismiss"in f&&a(3,T=f.buttonDismiss),"buttonDismissLabel"in f&&a(4,L=f.buttonDismissLabel)},r.$$.update=()=>{a(9,t=`${mt} ${I} ${F} ${e.class||""}`),r.$$.dirty&8519680&&a(8,i=`${ht} ${y} ${k}`),r.$$.dirty&2064384&&a(7,c=`${bt} ${u} ${v} ${k} ${j} ${w} ${b}`),r.$$.dirty&16416&&a(6,o=Array.from(l).slice(0,_))},e=Te(e),[s,n,R,T,L,l,o,c,i,t,q,B,G,m,_,u,v,k,j,w,b,F,I,y,ne,P]}class gt extends Ne{constructor(e){super(),Ve(this,e,_t,dt,Ce,{position:13,max:14,duration:0,background:1,width:15,color:16,padding:17,spacing:18,rounded:19,shadow:20,zIndex:21,buttonAction:2,buttonDismiss:3,buttonDismissLabel:4})}}function kt(...r){let e=[],a=[];if(r.forEach(s=>{const n=oe(s);e.includes(n.name)?a=a.includes(n.name)?a:[...a,n.name]:e=[...e,n.name]}),a.length)throw new Error(`Cannot have the fields with the same name: ${a.join(", ")}`);const t=rt(r,s=>({valid:s.every(n=>n.valid),dirty:s.some(n=>n.dirty),get summary(){return s.reduce((n,u)=>(n[u.name]=u.value,n),{})},errors:s.map(n=>n.errors.map(u=>u.includes(".")?u:`${n.name}.${u}`)).flat().filter((n,u,v)=>v.indexOf(n)===u),hasError(n){return this.errors.findIndex(u=>u===n)!==-1}})),{subscribe:i}=t;function c(){r.forEach(s=>s.reset&&s.reset())}function o(){r.forEach(s=>s.clear&&s.clear())}async function l(){for(const s of r)s.validate&&await s.validate()}function m(s){return r.find(n=>oe(n).name===s)}function _(){return oe(t).summary}return{subscribe:i,reset:c,validate:l,getField:m,summary:_,clear:o}}function yt(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}const Et={valid:!0,checkOnInit:!1,validateOnChange:!0,stopAtFirstError:!1};function pt(r){const e=Object.keys(r);return["name","value","valid","invalid","errors"].every(a=>e.includes(a))}function It(r){const e=function(t){return r.subscribe!==void 0},a=function(t){return!!r.name&&r.valid!==void 0};return e()?oe(r).value:a()?r.value:r}async function we(r,e,a=!1){const t=It(r);let i=[];for(const c of e){let o=c(t);if(yt(o)&&(o=await o),a&&!o.valid){i=[o];break}i=[...i,o]}return i}function re(r,e,a={}){if(e){const t=e.filter(c=>!c.valid).map(c=>c.name),i=!t.length;return{...r,valid:i,invalid:!i,errors:t,...a}}return r}function At(r,e,a=[],t){const i={name:r,value:e,valid:t.valid,invalid:!t.valid,dirty:!1,errors:[]},c=Pe(i),{subscribe:o,update:l,set:m}=c;async function _(v,k=!1){if(pt(v)||(v=re(oe(c),[],{value:v})),k||t.validateOnChange){let j=await we(v,a,t.stopAtFirstError);m(re(v,j,{dirty:!0}))}else m(re(v,null,{dirty:!0}))}async function s(){const v=await we(c,a,t.stopAtFirstError);let k;return l(j=>(k=re(j,v,{dirty:!1}),k)),k}function n(){m(re({dirty:!1,errors:[],name:r,valid:t.valid,invalid:!t.valid,value:e}))}t.checkOnInit&&_(i);function u(){m(re({dirty:!1,errors:[],name:r,valid:t.valid,invalid:!t.valid,value:null}))}return{subscribe:o,update:l,set:_,validate:s,reset:n,clear:u}}function be(r,e,a=[],t={}){return At(r,e,a,{...Et,...t})}function Tt(){return r=>({valid:!!r&&/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/.test(r),name:"not_an_email"})}function Dt(r){return e=>({valid:(isNaN(e)?e.length:parseFloat(e))>=r,name:"min"})}function ve(){return r=>{let e=!0;return r==null&&(e=!1),typeof r=="string"&&(e=r.replace(/\s/g,"").length>0),{valid:e,name:"required"}}}function Fe(r){let e,a;return{c(){e=E("div"),a=W("Your email is required"),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=A(e);a=Z(i,"Your email is required"),i.forEach(g),this.h()},h(){h(e,"class","dark:text-error-400 text-error-500")},m(t,i){X(t,e,i),d(e,a)},d(t){t&&g(e)}}}function Le(r){let e,a;return{c(){e=E("div"),a=W("Write a valid email"),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=A(e);a=Z(i,"Write a valid email"),i.forEach(g),this.h()},h(){h(e,"class","dark:text-error-400 text-error-500")},m(t,i){X(t,e,i),d(e,a)},d(t){t&&g(e)}}}function Me(r){let e,a;return{c(){e=E("div"),a=W("Subject of your email is required"),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=A(e);a=Z(i,"Subject of your email is required"),i.forEach(g),this.h()},h(){h(e,"class","dark:text-error-400 text-error-500")},m(t,i){X(t,e,i),d(e,a)},d(t){t&&g(e)}}}function Oe(r){let e,a;return{c(){e=E("div"),a=W("Don't you want to write me anything?"),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=A(e);a=Z(i,"Don't you want to write me anything?"),i.forEach(g),this.h()},h(){h(e,"class","dark:text-error-400 text-error-500")},m(t,i){X(t,e,i),d(e,a)},d(t){t&&g(e)}}}function jt(r){let e,a,t,i,c,o,l,m,_,s,n,u,v=r[1].hasError("mail.required")&&r[0]>0,k,j=r[1].hasError("mail.not_an_email")&&r[0]>0,w,b,F,R,T,L,I,y=r[1].hasError("subject.required")&&r[0]>0,S,q,B,G,ne,P,f,Y=r[1].hasError("emailContent.required")&&r[0]>0,J,U,$,me,Q,ue,he,_e,M=v&&Fe(),O=j&&Le(),N=y&&Me(),V=Y&&Oe();return Q=new gt({}),{c(){e=E("div"),a=E("div"),t=E("form"),i=E("h2"),c=W("Send me an email!"),o=C(),l=E("label"),m=E("span"),_=W("From"),s=C(),n=E("input"),u=C(),M&&M.c(),k=C(),O&&O.c(),w=C(),b=E("label"),F=E("span"),R=W("Subject"),T=C(),L=E("input"),I=C(),N&&N.c(),S=C(),q=E("label"),B=E("span"),G=W("Text"),ne=C(),P=E("textarea"),f=C(),V&&V.c(),J=C(),U=E("button"),$=W("Send"),me=C(),Qe(Q.$$.fragment),this.h()},l(D){e=p(D,"DIV",{class:!0});var x=A(e);a=p(x,"DIV",{class:!0});var fe=A(a);t=p(fe,"FORM",{});var H=A(t);i=p(H,"H2",{class:!0});var ge=A(i);c=Z(ge,"Send me an email!"),ge.forEach(g),o=z(H),l=p(H,"LABEL",{class:!0});var K=A(l);m=p(K,"SPAN",{});var ke=A(m);_=Z(ke,"From"),ke.forEach(g),s=z(K),n=p(K,"INPUT",{class:!0,type:!0,placeholder:!0}),u=z(K),M&&M.l(K),k=z(K),O&&O.l(K),K.forEach(g),w=z(H),b=p(H,"LABEL",{class:!0});var ee=A(b);F=p(ee,"SPAN",{});var ye=A(F);R=Z(ye,"Subject"),ye.forEach(g),T=z(ee),L=p(ee,"INPUT",{class:!0,type:!0,placeholder:!0}),I=z(ee),N&&N.l(ee),ee.forEach(g),S=z(H),q=p(H,"LABEL",{class:!0});var te=A(q);B=p(te,"SPAN",{});var Ee=A(B);G=Z(Ee,"Text"),Ee.forEach(g),ne=z(te),P=p(te,"TEXTAREA",{class:!0,rows:!0,placeholder:!0}),A(P).forEach(g),f=z(te),V&&V.l(te),te.forEach(g),J=z(H),U=p(H,"BUTTON",{class:!0});var pe=A(U);$=Z(pe,"Send"),pe.forEach(g),H.forEach(g),me=z(fe),$e(Q.$$.fragment,fe),fe.forEach(g),x.forEach(g),this.h()},h(){h(i,"class","ms-3 mb-7"),h(n,"class","input"),h(n,"type","text"),h(n,"placeholder","Your email"),h(l,"class","label m-3"),h(L,"class","input"),h(L,"type","text"),h(L,"placeholder","Subject"),h(b,"class","label m-3"),h(P,"class","textarea rounded-2xl"),h(P,"rows","4"),h(P,"placeholder","Tell me what you want!"),h(q,"class","label m-3"),h(U,"class","btn variant-ghost-primary relative left-[90%]"),h(a,"class","w-[80%]"),h(e,"class","container h-full mx-auto flex justify-center items-center")},m(D,x){X(D,e,x),d(e,a),d(a,t),d(t,i),d(i,c),d(t,o),d(t,l),d(l,m),d(m,_),d(l,s),d(l,n),ae(n,r[2].value),d(l,u),M&&M.m(l,null),d(l,k),O&&O.m(l,null),d(t,w),d(t,b),d(b,F),d(F,R),d(b,T),d(b,L),ae(L,r[3].value),d(b,I),N&&N.m(b,null),d(t,S),d(t,q),d(q,B),d(B,G),d(q,ne),d(q,P),ae(P,r[4].value),d(q,f),V&&V.m(q,null),d(t,J),d(t,U),d(U,$),d(a,me),et(Q,a,null),ue=!0,he||(_e=[ie(n,"input",r[10]),ie(L,"input",r[11]),ie(P,"input",r[12]),ie(U,"click",r[9])],he=!0)},p(D,[x]){x&4&&n.value!==D[2].value&&ae(n,D[2].value),x&3&&(v=D[1].hasError("mail.required")&&D[0]>0),v?M||(M=Fe(),M.c(),M.m(l,k)):M&&(M.d(1),M=null),x&3&&(j=D[1].hasError("mail.not_an_email")&&D[0]>0),j?O||(O=Le(),O.c(),O.m(l,null)):O&&(O.d(1),O=null),x&8&&L.value!==D[3].value&&ae(L,D[3].value),x&3&&(y=D[1].hasError("subject.required")&&D[0]>0),y?N||(N=Me(),N.c(),N.m(b,null)):N&&(N.d(1),N=null),x&16&&ae(P,D[4].value),x&3&&(Y=D[1].hasError("emailContent.required")&&D[0]>0),Y?V||(V=Oe(),V.c(),V.m(q,null)):V&&(V.d(1),V=null)},i(D){ue||(le(Q.$$.fragment,D),ue=!0)},o(D){de(Q.$$.fragment,D),ue=!1},d(D){D&&g(e),M&&M.d(),O&&O.d(),N&&N.d(),V&&V.d(),tt(Q),he=!1,at(_e)}}}function St(r,e,a){let t,i,c,o;const l=be("mail","",[Dt(1),ve(),Tt()]);se(r,l,b=>a(2,i=b));const m=be("subject","",[ve()]);se(r,m,b=>a(3,c=b));const _=be("emailContent","",[ve()]);se(r,_,b=>a(4,o=b));let s=0;const n=kt(l,m,_);se(r,n,b=>a(1,t=b));const u={message:"Email sent successfully!",timeout:7e3},v=()=>{a(0,s+=1),n.validate(),t.dirty&&t.valid&&(a(0,s=0),n.reset(),ce.trigger(u))};function k(){i.value=this.value,l.set(i)}function j(){c.value=this.value,m.set(c)}function w(){o.value=this.value,_.set(o)}return[s,t,i,c,o,l,m,_,n,v,k,j,w]}class Lt extends Ne{constructor(e){super(),Ve(this,e,St,jt,Ce,{})}}export{Lt as default};
