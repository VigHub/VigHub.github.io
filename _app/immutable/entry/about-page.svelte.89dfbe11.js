import{S as w,i as x,s as $,G as ie,k as E,l as I,m as P,h as m,n as k,b as _,H as ae,I as le,J as ne,g as R,d as A,aa as z,L as S,M as Q,ab as be,a as V,c as L,R as ee,E as C,N as j,U as _e,P as ve,Q as te,ac as H,O as M,w as G,y as U,z as J,A as K,B as O,ad as X,ae as Y,q,r as D}from"../chunks/index.c188d096.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.796b90aa.js";function pe(n){let e,t,o;const l=n[13].default,r=ie(l,n,n[12],null);return{c(){e=E("div"),r&&r.c(),this.h()},l(i){e=I(i,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0});var a=P(e);r&&r.l(a),a.forEach(m),this.h()},h(){k(e,"class",t="radio-group "+n[1]),k(e,"data-testid","radio-group"),k(e,"role","radiogroup"),k(e,"aria-labelledby",n[0])},m(i,a){_(i,e,a),r&&r.m(e,null),o=!0},p(i,[a]){r&&r.p&&(!o||a&4096)&&ae(r,l,i,i[12],o?ne(l,i[12],a,null):le(i[12]),null),(!o||a&2&&t!==(t="radio-group "+i[1]))&&k(e,"class",t),(!o||a&1)&&k(e,"aria-labelledby",i[0])},i(i){o||(R(r,i),o=!0)},o(i){A(r,i),o=!1},d(i){i&&m(e),r&&r.d(i)}}}const ke="p-1";function ye(n,e,t){let o,{$$slots:l={},$$scope:r}=e,{display:i="inline-flex"}=e,{background:a="bg-surface-200-700-token"}=e,{border:h="border-token border-surface-400-500-token"}=e,{spacing:f="space-x-1"}=e,{rounded:d="rounded-token"}=e,{padding:b="px-4 py-1"}=e,{active:v="variant-filled"}=e,{hover:y="hover:variant-soft"}=e,{color:p=""}=e,{fill:g=""}=e,{labelledby:s=""}=e;return z("rounded",d),z("padding",b),z("active",v),z("hover",y),z("color",p),z("fill",g),n.$$set=u=>{t(14,e=S(S({},e),Q(u))),"display"in u&&t(2,i=u.display),"background"in u&&t(3,a=u.background),"border"in u&&t(4,h=u.border),"spacing"in u&&t(5,f=u.spacing),"rounded"in u&&t(6,d=u.rounded),"padding"in u&&t(7,b=u.padding),"active"in u&&t(8,v=u.active),"hover"in u&&t(9,y=u.hover),"color"in u&&t(10,p=u.color),"fill"in u&&t(11,g=u.fill),"labelledby"in u&&t(0,s=u.labelledby),"$$scope"in u&&t(12,r=u.$$scope)},n.$$.update=()=>{t(1,o=`${ke} ${i} ${a} ${h} ${f} ${d} ${e.class??""}`)},e=Q(e),[s,o,i,a,h,f,d,b,v,y,p,g,r,l]}class Ee extends w{constructor(e){super(),x(this,e,ye,pe,$,{display:2,background:3,border:4,spacing:5,rounded:6,padding:7,active:8,hover:9,color:10,fill:11,labelledby:0})}}function Ie(n){let e,t,o,l,r,i,a,h,f,d,b=[{type:"radio"},{name:n[1]},{__value:n[2]},n[9](),{tabindex:"-1"}],v={};for(let g=0;g<b.length;g+=1)v=S(v,b[g]);const y=n[19].default,p=ie(y,n,n[18],null);return h=be(n[27][0]),{c(){e=E("label"),t=E("div"),o=E("div"),l=E("input"),r=V(),p&&p.c(),this.h()},l(g){e=I(g,"LABEL",{});var s=P(e);t=I(s,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-checked":!0,"aria-label":!0,tabindex:!0,title:!0});var u=P(t);o=I(u,"DIV",{class:!0});var B=P(o);l=I(B,"INPUT",{type:!0,name:!0,tabindex:!0}),B.forEach(m),r=L(u),p&&p.l(u),u.forEach(m),s.forEach(m),this.h()},h(){ee(l,v),k(o,"class","h-0 w-0 overflow-hidden"),k(t,"class",i="radio-item "+n[7]),k(t,"data-testid","radio-item"),k(t,"role","radio"),k(t,"aria-checked",n[5]),k(t,"aria-label",n[4]),k(t,"tabindex","0"),k(t,"title",n[3]),h.p(l)},m(g,s){_(g,e,s),C(e,t),C(t,o),C(o,l),l.autofocus&&l.focus(),n[25](l),l.checked=l.__value===n[0],C(t,r),p&&p.m(t,null),a=!0,f||(d=[j(l,"change",n[26]),j(l,"click",n[23]),j(l,"change",n[24]),j(t,"keydown",n[8]),j(t,"keydown",n[20]),j(t,"keyup",n[21]),j(t,"keypress",n[22])],f=!0)},p(g,[s]){ee(l,v=_e(b,[{type:"radio"},(!a||s&2)&&{name:g[1]},(!a||s&4)&&{__value:g[2]},g[9](),{tabindex:"-1"}])),s&1&&(l.checked=l.__value===g[0]),p&&p.p&&(!a||s&262144)&&ae(p,y,g,g[18],a?ne(y,g[18],s,null):le(g[18]),null),(!a||s&128&&i!==(i="radio-item "+g[7]))&&k(t,"class",i),(!a||s&32)&&k(t,"aria-checked",g[5]),(!a||s&16)&&k(t,"aria-label",g[4]),(!a||s&8)&&k(t,"title",g[3])},i(g){a||(R(p,g),a=!0)},o(g){A(p,g),a=!1},d(g){g&&m(e),n[25](null),p&&p.d(g),h.r(),f=!1,ve(d)}}}const Pe="flex-auto text-base text-center cursor-pointer",Ce="opacity-50 cursor-not-allowed";function qe(n,e,t){let o,l,r,i;const a=["group","name","value","title","label","rounded","padding","active","hover","color","fill"];let h=te(e,a),{$$slots:f={},$$scope:d}=e,{group:b}=e,{name:v}=e,{value:y}=e,{title:p=""}=e,{label:g=""}=e,{rounded:s=H("rounded")}=e,{padding:u=H("padding")}=e,{active:B=H("active")}=e,{hover:T=H("hover")}=e,{color:N=H("color")}=e,{fill:W=H("fill")}=e,F;function oe(c){["Enter","Space"].includes(c.code)&&(c.preventDefault(),F.click())}function se(){return delete h.class,h}const re=[[]];function ue(c){M.call(this,n,c)}function de(c){M.call(this,n,c)}function fe(c){M.call(this,n,c)}function ce(c){M.call(this,n,c)}function me(c){M.call(this,n,c)}function ge(c){G[c?"unshift":"push"](()=>{F=c,t(6,F)})}function he(){b=this.__value,t(0,b)}return n.$$set=c=>{t(29,e=S(S({},e),Q(c))),t(28,h=te(e,a)),"group"in c&&t(0,b=c.group),"name"in c&&t(1,v=c.name),"value"in c&&t(2,y=c.value),"title"in c&&t(3,p=c.title),"label"in c&&t(4,g=c.label),"rounded"in c&&t(10,s=c.rounded),"padding"in c&&t(11,u=c.padding),"active"in c&&t(12,B=c.active),"hover"in c&&t(13,T=c.hover),"color"in c&&t(14,N=c.color),"fill"in c&&t(15,W=c.fill),"$$scope"in c&&t(18,d=c.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&t(5,o=y===b),n.$$.dirty&61472&&t(17,l=o?`${B} ${N} ${W}`:T),t(16,r=e.disabled?Ce:""),t(7,i=`${Pe} ${u} ${s} ${l} ${r} ${e.class??""}`)},e=Q(e),[b,v,y,p,g,o,F,i,oe,se,s,u,B,T,N,W,r,l,d,f,ue,de,fe,ce,me,ge,he,re]}class Z extends w{constructor(e){super(),x(this,e,qe,Ie,$,{group:0,name:1,value:2,title:3,label:4,rounded:10,padding:11,active:12,hover:13,color:14,fill:15})}}function De(n){let e,t,o,l,r;return{c(){e=E("h2"),t=q("404"),o=V(),l=E("p"),r=q("Page not found")},l(i){e=I(i,"H2",{});var a=P(e);t=D(a,"404"),a.forEach(m),o=L(i),l=I(i,"P",{});var h=P(l);r=D(h,"Page not found"),h.forEach(m)},m(i,a){_(i,e,a),C(e,t),_(i,o,a),_(i,l,a),C(l,r)},d(i){i&&m(e),i&&m(o),i&&m(l)}}}function Be(n){let e,t,o,l,r;return{c(){e=E("h2"),t=q("Passions"),o=V(),l=E("p"),r=q(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia maxime fugiat, rerum\r
				quam maiores magni harum minima eius voluptas, minus sint quos, culpa officia iusto sapiente\r
				doloribus earum velit.`)},l(i){e=I(i,"H2",{});var a=P(e);t=D(a,"Passions"),a.forEach(m),o=L(i),l=I(i,"P",{});var h=P(l);r=D(h,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia maxime fugiat, rerum\r
				quam maiores magni harum minima eius voluptas, minus sint quos, culpa officia iusto sapiente\r
				doloribus earum velit.`),h.forEach(m)},m(i,a){_(i,e,a),C(e,t),_(i,o,a),_(i,l,a),C(l,r)},d(i){i&&m(e),i&&m(o),i&&m(l)}}}function Ve(n){let e,t,o,l,r;return{c(){e=E("h2"),t=q("Education"),o=V(),l=E("p"),r=q(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia maxime fugiat, rerum\r
				quam maiores magni harum minima eius voluptas, minus sint quos, culpa officia iusto sapiente\r
				doloribus earum velit.`)},l(i){e=I(i,"H2",{});var a=P(e);t=D(a,"Education"),a.forEach(m),o=L(i),l=I(i,"P",{});var h=P(l);r=D(h,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia maxime fugiat, rerum\r
				quam maiores magni harum minima eius voluptas, minus sint quos, culpa officia iusto sapiente\r
				doloribus earum velit.`),h.forEach(m)},m(i,a){_(i,e,a),C(e,t),_(i,o,a),_(i,l,a),C(l,r)},d(i){i&&m(e),i&&m(o),i&&m(l)}}}function Le(n){let e,t,o,l,r,i,a,h;return{c(){e=E("h2"),t=q("C to C: from Curiosity to Code"),o=V(),l=E("p"),r=q(`Ever since I was a child, I was captivated by the incredible ads I saw on TV—like a road\r
				suddenly turning vertical or a house transforming into a spaceship. These amazing visuals\r
				sparked my curiosity, and I always wanted to understand the magic behind them. My\r
				fascination with math naturally led me to pursue a path in Computer Engineering.`),i=V(),a=E("p"),h=q(`Today, that childhood curiosity has evolved into a passion for software development and\r
				machine learning. I thrive on solving complex problems and creating innovative solutions.\r
				From developing intelligent algorithms to building robust applications, I am driven by the\r
				same wonder and excitement I felt as a kid, now with the skills and knowledge to bring those\r
				amazing ideas to life.`)},l(f){e=I(f,"H2",{});var d=P(e);t=D(d,"C to C: from Curiosity to Code"),d.forEach(m),o=L(f),l=I(f,"P",{});var b=P(l);r=D(b,`Ever since I was a child, I was captivated by the incredible ads I saw on TV—like a road\r
				suddenly turning vertical or a house transforming into a spaceship. These amazing visuals\r
				sparked my curiosity, and I always wanted to understand the magic behind them. My\r
				fascination with math naturally led me to pursue a path in Computer Engineering.`),b.forEach(m),i=L(f),a=I(f,"P",{});var v=P(a);h=D(v,`Today, that childhood curiosity has evolved into a passion for software development and\r
				machine learning. I thrive on solving complex problems and creating innovative solutions.\r
				From developing intelligent algorithms to building robust applications, I am driven by the\r
				same wonder and excitement I felt as a kid, now with the skills and knowledge to bring those\r
				amazing ideas to life.`),v.forEach(m)},m(f,d){_(f,e,d),C(e,t),_(f,o,d),_(f,l,d),C(l,r),_(f,i,d),_(f,a,d),C(a,h)},d(f){f&&m(e),f&&m(o),f&&m(l),f&&m(i),f&&m(a)}}}function Te(n){let e;return{c(){e=q("Beginning")},l(t){e=D(t,"Beginning")},m(t,o){_(t,e,o)},d(t){t&&m(e)}}}function Ne(n){let e;return{c(){e=q("Education")},l(t){e=D(t,"Education")},m(t,o){_(t,e,o)},d(t){t&&m(e)}}}function je(n){let e;return{c(){e=q("Passions")},l(t){e=D(t,"Passions")},m(t,o){_(t,e,o)},d(t){t&&m(e)}}}function ze(n){let e,t,o,l,r,i,a,h,f;function d(s){n[1](s)}let b={name:"justify",value:0,$$slots:{default:[Te]},$$scope:{ctx:n}};n[0]!==void 0&&(b.group=n[0]),e=new Z({props:b}),G.push(()=>X(e,"group",d));function v(s){n[2](s)}let y={name:"justify",value:1,$$slots:{default:[Ne]},$$scope:{ctx:n}};n[0]!==void 0&&(y.group=n[0]),l=new Z({props:y}),G.push(()=>X(l,"group",v));function p(s){n[3](s)}let g={name:"justify",value:2,$$slots:{default:[je]},$$scope:{ctx:n}};return n[0]!==void 0&&(g.group=n[0]),a=new Z({props:g}),G.push(()=>X(a,"group",p)),{c(){U(e.$$.fragment),o=V(),U(l.$$.fragment),i=V(),U(a.$$.fragment)},l(s){J(e.$$.fragment,s),o=L(s),J(l.$$.fragment,s),i=L(s),J(a.$$.fragment,s)},m(s,u){K(e,s,u),_(s,o,u),K(l,s,u),_(s,i,u),K(a,s,u),f=!0},p(s,u){const B={};u&16&&(B.$$scope={dirty:u,ctx:s}),!t&&u&1&&(t=!0,B.group=s[0],Y(()=>t=!1)),e.$set(B);const T={};u&16&&(T.$$scope={dirty:u,ctx:s}),!r&&u&1&&(r=!0,T.group=s[0],Y(()=>r=!1)),l.$set(T);const N={};u&16&&(N.$$scope={dirty:u,ctx:s}),!h&&u&1&&(h=!0,N.group=s[0],Y(()=>h=!1)),a.$set(N)},i(s){f||(R(e.$$.fragment,s),R(l.$$.fragment,s),R(a.$$.fragment,s),f=!0)},o(s){A(e.$$.fragment,s),A(l.$$.fragment,s),A(a.$$.fragment,s),f=!1},d(s){O(e,s),s&&m(o),O(l,s),s&&m(i),O(a,s)}}}function He(n){let e,t,o,l,r,i;function a(d,b){return d[0]===0?Le:d[0]===1?Ve:d[0]===2?Be:De}let h=a(n),f=h(n);return r=new Ee({props:{display:"flex",$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){e=E("div"),t=E("div"),f.c(),o=V(),l=E("div"),U(r.$$.fragment),this.h()},l(d){e=I(d,"DIV",{class:!0});var b=P(e);t=I(b,"DIV",{class:!0});var v=P(t);f.l(v),v.forEach(m),b.forEach(m),o=L(d),l=I(d,"DIV",{class:!0});var y=P(l);J(r.$$.fragment,y),y.forEach(m),this.h()},h(){k(t,"class","space-y-5"),k(e,"class","container h-4/5 mx-auto px-4 flex justify-center items-center"),k(l,"class","mx-auto px-4 flex justify-center items-center")},m(d,b){_(d,e,b),C(e,t),f.m(t,null),_(d,o,b),_(d,l,b),K(r,l,null),i=!0},p(d,[b]){h!==(h=a(d))&&(f.d(1),f=h(d),f&&(f.c(),f.m(t,null)));const v={};b&17&&(v.$$scope={dirty:b,ctx:d}),r.$set(v)},i(d){i||(R(r.$$.fragment,d),i=!0)},o(d){A(r.$$.fragment,d),i=!1},d(d){d&&m(e),f.d(),d&&m(o),d&&m(l),O(r)}}}function Re(n,e,t){let o=0;function l(a){o=a,t(0,o)}function r(a){o=a,t(0,o)}function i(a){o=a,t(0,o)}return[o,l,r,i]}class Se extends w{constructor(e){super(),x(this,e,Re,He,$,{})}}export{Se as default};