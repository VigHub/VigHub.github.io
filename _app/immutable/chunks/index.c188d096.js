function x(){}const K=t=>t;function Nt(t,e){for(const n in e)t[n]=e[n];return t}function At(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function _t(t){return t()}function lt(){return Object.create(null)}function N(t){t.forEach(_t)}function L(t){return typeof t=="function"}function se(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function re(t,e){return G||(G=document.createElement("a")),G.href=e,t===G.href}function Ct(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ce(t){let e;return dt(t,n=>e=n)(),e}function oe(t,e,n){t.$$.on_destroy.push(dt(e,n))}function le(t,e,n,i){if(t){const s=ht(t,e,n,i);return t[0](s)}}function ht(t,e,n,i){return t[1]&&i?Nt(n.ctx.slice(),t[1](i(e))):n.ctx}function ae(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function ue(t,e,n,i,s,c){if(s){const r=ht(e,n,i,c);t.p(r,s)}}function fe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _e(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function de(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function he(t){const e={};for(const n in t)e[n]=!0;return e}function me(t,e,n){return t.set(n),e}function pe(t){return t&&L(t.destroy)?t.destroy:x}function ge(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const mt=typeof window<"u";let Q=mt?()=>window.performance.now():()=>Date.now(),et=mt?t=>requestAnimationFrame(t):x;const M=new Set;function pt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&et(pt)}function U(t){let e;return M.size===0&&et(pt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let V=!1;function St(){V=!0}function Mt(){V=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:jt(1,s,d=>e[n[d]].claim_order,a))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[l],_)}}function Lt(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ot(t){const e=nt("style");return Pt(gt(t),e),e.sheet}function Pt(t,e){return Lt(t.head||t,e),e.sheet}function Ht(t,e){if(V){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Rt(t,e,n){t.insertBefore(e,n||null)}function Bt(t,e,n){V&&!n?Ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function yt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function it(t){return document.createTextNode(t)}function be(){return it(" ")}function xe(){return it("")}function $e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:bt(t,i,e[i])}function zt(t,e){Object.keys(e).forEach(n=>{Ft(t,n,e[n])})}function Ft(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:bt(t,e,n)}function we(t){return/-/.test(t)?zt:qt}function ke(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Gt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function $t(t,e,n,i,s=!1){xt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function wt(t,e,n,i){return $t(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ee(t,e,n){return wt(t,e,n,nt)}function ve(t,e,n){return wt(t,e,n,yt)}function Wt(t,e){return $t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>it(e),!0)}function Te(t){return Wt(t," ")}function at(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ne(t,e){const n=at(t,"HTML_TAG_START",0),i=at(t,"HTML_TAG_END",n);if(n===i)return new ut(void 0,e);xt(t);const s=t.splice(n,i-n+1);H(s[0]),H(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ut(c,e)}function Ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ce(t,e){t.value=e??""}function Se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Me(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function je(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class It{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=yt(n.nodeName):this.e=nt(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Rt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(H)}}class ut extends It{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Bt(this.t,this.n[n],e)}}function De(t,e){return new t(e)}const I=new Map;let J=0;function Jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Kt(t,e){const n={stylesheet:Ot(e),rules:{}};return I.set(t,n),n}function R(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Jt(_)}_${o}`,d=gt(t),{stylesheet:u,rules:h}=I.get(d)||Kt(d,t);h[f]||(h[f]=!0,u.insertRule(`@keyframes ${f} ${_}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,J+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),J-=s,J||Qt())}function Qt(){et(()=>{J||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),I.clear())})}function Le(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:c=0,duration:r=300,easing:o=K,start:l=Q()+c,end:a=l+r,tick:_=x,css:f}=n(t,{from:e,to:s},i);let d=!0,u=!1,h;function p(){f&&(h=R(t,0,1,r,c,o,f)),c||(u=!0)}function m(){f&&B(t,h),d=!1}return U(g=>{if(!u&&g>=l&&(u=!0),u&&g>=a&&(_(1,0),m()),!d)return!1;if(u){const $=g-l,b=0+1*o($/r);_(b,1-b)}return!0}),p(),_(0,1),m}function Oe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ut(t,s)}}function Ut(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function T(t){q=t}function O(){if(!q)throw new Error("Function called outside component initialization");return q}function Pe(t){O().$$.on_mount.push(t)}function He(t){O().$$.after_update.push(t)}function Re(){const t=O();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=kt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Be(t,e){return O().$$.context.set(t,e),e}function qe(t){return O().$$.context.get(t)}function ze(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const S=[],ft=[];let j=[];const Z=[],Et=Promise.resolve();let tt=!1;function vt(){tt||(tt=!0,Et.then(st))}function Fe(){return vt(),Et}function D(t){j.push(t)}function Ge(t){Z.push(t)}const Y=new Set;let C=0;function st(){if(C!==0)return;const t=q;do{try{for(;C<S.length;){const e=S[C];C++,T(e),Vt(e.$$)}}catch(e){throw S.length=0,C=0,e}for(T(null),S.length=0,C=0;ft.length;)ft.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];Y.has(n)||(Y.add(n),n())}j.length=0}while(S.length);for(;Z.length;)Z.pop()();tt=!1,Y.clear(),T(t)}function Vt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Xt(t){const e=[],n=[];j.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),j=e}let P;function rt(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function A(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const W=new Set;let v;function Yt(){v={r:0,c:[],p:v}}function Zt(){v.r||N(v.c),v=v.p}function ct(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if(W.has(t))return;W.add(t),v.c.push(()=>{W.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot={duration:0};function We(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,o,l=0;function a(){r&&B(t,r)}function _(){const{delay:d=0,duration:u=300,easing:h=K,tick:p=x,css:m}=s||ot;m&&(r=R(t,0,1,u,d,h,m,l++)),p(0,1);const g=Q()+d,$=g+u;o&&o.abort(),c=!0,D(()=>A(t,!0,"start")),o=U(b=>{if(c){if(b>=$)return p(1,0),A(t,!0,"end"),a(),c=!1;if(b>=g){const w=h((b-g)/u);p(w,1-w)}}return c})}let f=!1;return{start(){f||(f=!0,B(t),L(s)?(s=s(i),rt().then(_)):_())},invalidate(){f=!1},end(){c&&(a(),c=!1)}}}function Ie(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=v;o.r+=1;function l(){const{delay:a=0,duration:_=300,easing:f=K,tick:d=x,css:u}=s||ot;u&&(r=R(t,1,0,_,a,f,u));const h=Q()+a,p=h+_;D(()=>A(t,!1,"start")),U(m=>{if(c){if(m>=p)return d(0,1),A(t,!1,"end"),--o.r||N(o.c),!1;if(m>=h){const g=f((m-h)/_);d(1-g,g)}}return c})}return L(s)?rt().then(()=>{s=s(i),l()}):l(),{end(a){a&&s.tick&&s.tick(1,0),c&&(r&&B(t,r),c=!1)}}}function Je(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,a=null;function _(){a&&B(t,a)}function f(u,h){const p=u.b-r;return h*=Math.abs(p),{a:r,b:u.b,d:p,duration:h,start:u.start,end:u.start+h,group:u.group}}function d(u){const{delay:h=0,duration:p=300,easing:m=K,tick:g=x,css:$}=c||ot,b={start:Q()+h,b:u};u||(b.group=v,v.r+=1),o||l?l=b:($&&(_(),a=R(t,r,u,p,h,m,$)),u&&g(0,1),o=f(b,p),D(()=>A(t,u,"start")),U(w=>{if(l&&w>l.start&&(o=f(l,p),l=null,A(t,o.b,"start"),$&&(_(),a=R(t,r,o.b,o.duration,0,m,c.css))),o){if(w>=o.end)g(r=o.b,1-r),A(t,o.b,"end"),l||(o.b?_():--o.group.r||N(o.group.c)),o=null;else if(w>=o.start){const z=w-o.start;r=o.a+o.d*m(z/o.duration),g(r,1-r)}}return!!(o||l)}))}return{run(u){L(c)?rt().then(()=>{c=c(s),d(u)}):d(u)},end(){_(),o=l=null}}}function Ke(t,e){const n=e.token={};function i(s,c,r,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;r!==void 0&&(l=l.slice(),l[r]=o);const a=s&&(e.current=s)(l);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==c&&f&&(Yt(),Tt(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Zt())}):e.block.d(1),a.c(),ct(a,1),a.m(e.mount(),e.anchor),_=!0),e.block=a,e.blocks&&(e.blocks[c]=a),_&&st()}if(At(t)){const s=O();if(t.then(c=>{T(s),i(e.then,1,e.value,c),T(null)},c=>{if(T(s),i(e.catch,2,e.error,c),T(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Qe(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function te(t,e){Tt(t,1,1,()=>{e.delete(t.key)})}function Ve(t,e){t.f(),te(t,e)}function Xe(t,e,n,i,s,c,r,o,l,a,_,f){let d=t.length,u=c.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,$=new Map,b=[];for(h=u;h--;){const y=f(s,c,h),k=n(y);let E=r.get(k);E?i&&b.push(()=>E.p(y,e)):(E=a(k,y),E.c()),g.set(k,m[h]=E),k in p&&$.set(k,Math.abs(h-p[k]))}const w=new Set,z=new Set;function X(y){ct(y,1),y.m(o,_),r.set(y.key,y),_=y.first,u--}for(;d&&u;){const y=m[u-1],k=t[d-1],E=y.key,F=k.key;y===k?(_=y.first,d--,u--):g.has(F)?!r.has(E)||w.has(E)?X(y):z.has(F)?d--:$.get(E)>$.get(F)?(z.add(E),X(y)):(w.add(F),d--):(l(k,r),d--)}for(;d--;){const y=t[d];g.has(y.key)||l(y,r)}for(;u;)X(m[u-1]);return N(b),m}function Ye(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ze(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function tn(t){t&&t.c()}function en(t,e){t&&t.l(e)}function ee(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(_t).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),c.forEach(D)}function ne(t,e){const n=t.$$;n.fragment!==null&&(Xt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(t,e){t.$$.dirty[0]===-1&&(S.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nn(t,e,n,i,s,c,r,o=[-1]){const l=q;T(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:s,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,d,...u)=>{const h=u.length?u[0]:d;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&ie(t,f)),d}):[],a.update(),_=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){St();const f=Gt(e.target);a.fragment&&a.fragment.l(f),f.forEach(H)}else a.fragment&&a.fragment.c();e.intro&&ct(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),Mt(),st()}T(l)}class sn{$destroy(){ne(this,1),this.$destroy=x}$on(e,n){if(!L(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Je as $,ee as A,ne as B,yt as C,ve as D,Ht as E,x as F,le as G,ue as H,fe as I,ae as J,he as K,Nt as L,_e as M,$e as N,ze as O,N as P,de as Q,qt as R,sn as S,pe as T,Ye as U,re as V,L as W,oe as X,Re as Y,Ue as Z,D as _,be as a,ut as a0,je as a1,Ne as a2,me as a3,Ke as a4,Qe as a5,we as a6,Me as a7,ye as a8,We as a9,Be as aa,ke as ab,qe as ac,Ze as ad,Ge as ae,Xe as af,Oe as ag,Ut as ah,Le as ai,Ie as aj,Ve as ak,ce as al,Ce as am,K as an,ge as ao,dt as ap,Bt as b,Te as c,Tt as d,xe as e,Zt as f,ct as g,H as h,nn as i,He as j,nt as k,Ee as l,Gt as m,bt as n,Pe as o,Se as p,it as q,Wt as r,se as s,Fe as t,Ae as u,Yt as v,ft as w,De as x,tn as y,en as z};