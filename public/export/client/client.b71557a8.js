function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,a){const l=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(l){const s=c(e,n,r,a);t.p(s,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function m(){return h("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function E(t){return y(t," ")}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e){t.value=null==e?"":e}function w(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let L;function R(t){L=t}function x(){if(!L)throw new Error("Function called outside component initialization");return L}const j=[],C=[],O=[],k=[],N=Promise.resolve();let q=!1;function D(t){O.push(t)}let U=!1;const H=new Set;function I(){if(!U){U=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];R(e),T(e.$$)}for(j.length=0;C.length;)C.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];H.has(e)||(H.add(e),e())}O.length=0}while(j.length);for(;k.length;)k.pop()();q=!1,U=!1,H.clear()}}function T(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const B=new Set;let J;function V(){J={r:0,c:[],p:J}}function K(){J.r||s(J.c),J=J.p}function M(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),J.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),D(()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(D)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(j.push(t),q||(q=!0,N.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,c,l,i=[-1]){const u=L;R(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&Z(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=b(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),X(e,n.target,n.anchor),I()}R(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={},ot=()=>({});function at(e){let n,r,s,o,a,c,l,p,m,$,S,P,w,A,L,R,x,j,C,O,k,N,q,D,U,H;return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=d("a"),a=h("home"),l=g(),p=d("li"),m=d("a"),$=h("about"),P=g(),w=d("li"),A=d("a"),L=h("blog"),x=g(),j=d("li"),C=d("a"),O=h("works"),N=g(),q=d("li"),D=d("a"),U=h("contact"),this.h()},l(t){n=_(t,"NAV",{class:!0});var e=b(n);r=_(e,"UL",{class:!0});var c=b(r);s=_(c,"LI",{class:!0});var i=b(s);o=_(i,"A",{"aria-current":!0,href:!0,class:!0});var u=b(o);a=y(u,"home"),u.forEach(f),i.forEach(f),l=E(c),p=_(c,"LI",{class:!0});var d=b(p);m=_(d,"A",{"aria-current":!0,href:!0,class:!0});var h=b(m);$=y(h,"about"),h.forEach(f),d.forEach(f),P=E(c),w=_(c,"LI",{class:!0});var g=b(w);A=_(g,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var v=b(A);L=y(v,"blog"),v.forEach(f),g.forEach(f),x=E(c),j=_(c,"LI",{class:!0});var S=b(j);C=_(S,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var R=b(C);O=y(R,"works"),R.forEach(f),S.forEach(f),N=E(c),q=_(c,"LI",{class:!0});var k=b(q);D=_(k,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var H=b(D);U=y(H,"contact"),H.forEach(f),k.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(o,"aria-current",c=void 0===e[0]?"page":void 0),v(o,"href","."),v(o,"class","svelte-1dbd5up"),v(s,"class","svelte-1dbd5up"),v(m,"aria-current",S="about"===e[0]?"page":void 0),v(m,"href","about"),v(m,"class","svelte-1dbd5up"),v(p,"class","svelte-1dbd5up"),v(A,"rel","prefetch"),v(A,"aria-current",R="blog"===e[0]?"page":void 0),v(A,"href","blog"),v(A,"class","svelte-1dbd5up"),v(w,"class","svelte-1dbd5up"),v(C,"rel","prefetch"),v(C,"aria-current",k="works"===e[0]?"page":void 0),v(C,"href","works"),v(C,"class","svelte-1dbd5up"),v(j,"class","svelte-1dbd5up"),v(D,"rel","prefetch"),v(D,"aria-current",H="contact"===e[0]?"page":void 0),v(D,"href","contact"),v(D,"class","svelte-1dbd5up"),v(q,"class","svelte-1dbd5up"),v(r,"class","svelte-1dbd5up"),v(n,"class","svelte-1dbd5up")},m(t,e){u(t,n,e),i(n,r),i(r,s),i(s,o),i(o,a),i(r,l),i(r,p),i(p,m),i(m,$),i(r,P),i(r,w),i(w,A),i(A,L),i(r,x),i(r,j),i(j,C),i(C,O),i(r,N),i(r,q),i(q,D),i(D,U)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&v(o,"aria-current",c),1&e&&S!==(S="about"===t[0]?"page":void 0)&&v(m,"aria-current",S),1&e&&R!==(R="blog"===t[0]?"page":void 0)&&v(A,"aria-current",R),1&e&&k!==(k="works"===t[0]?"page":void 0)&&v(C,"aria-current",k),1&e&&H!==(H="contact"===t[0]?"page":void 0)&&v(D,"aria-current",H)},i:t,o:t,d(t){t&&f(n)}}}function ct(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class lt extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:0})}}function it(t){let e,n,r,s;e=new lt({props:{segment:t[0]}});const o=t[2].default,a=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){G(e.$$.fragment),n=g(),r=d("main"),a&&a.c(),this.h()},l(t){W(e.$$.fragment,t),n=E(t),r=_(t,"MAIN",{class:!0});var s=b(r);a&&a.l(s),s.forEach(f),this.h()},h(){v(r,"class","svelte-1uhnsl8")},m(t,o){X(e,t,o),u(t,n,o),u(t,r,o),a&&a.m(r,null),s=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&l(a,o,t,t[1],n,null,null)},i(t){s||(M(e.$$.fragment,t),M(a,t),s=!0)},o(t){Y(e.$$.fragment,t),Y(a,t),s=!1},d(t){Q(e,t),t&&f(n),t&&f(r),a&&a.d(t)}}}function ut(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ft extends et{constructor(t){super(),tt(this,t,ut,it,a,{segment:0})}}function pt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=_(t,"PRE",{});var s=b(e);n=y(s,r),s.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&f(e)}}}function dt(e){let n,r,s,o,a,c,l,p,$,P=e[1].message+"";document.title=n=e[0];let w=e[2]&&e[1].stack&&pt(e);return{c(){r=g(),s=d("h1"),o=h(e[0]),a=g(),c=d("p"),l=h(P),p=g(),w&&w.c(),$=m(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t),s=_(t,"H1",{class:!0});var n=b(s);o=y(n,e[0]),n.forEach(f),a=E(t),c=_(t,"P",{class:!0});var i=b(c);l=y(i,P),i.forEach(f),p=E(t),w&&w.l(t),$=m(),this.h()},h(){v(s,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),i(s,o),u(t,a,e),u(t,c,e),i(c,l),u(t,p,e),w&&w.m(t,e),u(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(o,t[0]),2&e&&P!==(P=t[1].message+"")&&S(l,P),t[2]&&t[1].stack?w?w.p(t,e):(w=pt(t),w.c(),w.m($.parentNode,$)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),w&&w.d(t),t&&f($)}}}function ht(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class gt extends et{constructor(t){super(),tt(this,t,ht,dt,a,{status:0,error:1})}}function mt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&G(n.$$.fragment),r=m()},l(t){n&&W(n.$$.fragment,t),r=m()},m(t,e){n&&X(n,t,e),u(t,r,e),s=!0},p(t,e){const s=16&e?z(o,[F(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){V();const t=n;Y(t.$$.fragment,1,0,()=>{Q(t,1)}),K()}a?(n=new a(c()),G(n.$$.fragment),M(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&M(n.$$.fragment,t),s=!0)},o(t){n&&Y(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Q(n,t)}}}function $t(t){let e,n;return e=new gt({props:{error:t[0],status:t[1]}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function vt(t){let e,n,r,s;const o=[$t,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let l=e;e=c(t),e===l?a[e].p(t,s):(V(),Y(a[l],1,1,()=>{a[l]=null}),K(),n=a[e],n||(n=a[e]=o[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){s||(M(n),s=!0)},o(t){Y(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function bt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new ft({props:o}),{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?z(s,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){Y(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,p;return u=i,x().$$.after_update.push(u),f=st,p=r,x().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[s,o,a,c,l,r,i]}class yt extends et{constructor(t){super(),tt(this,t,_t,bt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blogs\.json$/,/^\/blogs\/([^\/]+?)\.json$/,/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],St=[{js:()=>import("./index.1b5f590d.js"),css:[]},{js:()=>import("./food.406ee7fa.js"),css:[]},{js:()=>import("./contact.3238715f.js"),css:[]},{js:()=>import("./whygo.0135784c.js"),css:[]},{js:()=>import("./bloggy.5aa1b216.js"),css:[]},{js:()=>import("./index.c1388278.js"),css:[]},{js:()=>import("./about.b1aa0906.js"),css:[]},{js:()=>import("./index.6afc71fd.js"),css:[]},{js:()=>import("./[slug].ce7f28a2.js"),css:[]},{js:()=>import("./works.9dcd2a2a.js"),css:[]},{js:()=>import("./index.76315691.js"),css:[]},{js:()=>import("./[slug].65f7c301.js"),css:[]}],Pt=(wt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/anything\/food\/?$/,parts:[null,{i:1}]},{pattern:/^\/contact\/?$/,parts:[{i:2}]},{pattern:/^\/bloggy\/whygo\/?$/,parts:[null,{i:3}]},{pattern:/^\/bloggy\/?$/,parts:[{i:4}]},{pattern:/^\/route1\/?$/,parts:[{i:5}]},{pattern:/^\/about\/?$/,parts:[{i:6}]},{pattern:/^\/blogs\/?$/,parts:[{i:7}]},{pattern:/^\/blogs\/([^\/]+?)\/?$/,parts:[null,{i:8,params:t=>({slug:wt(t[1])})}]},{pattern:/^\/works\/?$/,parts:[{i:9}]},{pattern:/^\/blog\/?$/,parts:[{i:10}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:11,params:t=>({slug:wt(t[1])})}]}]);var wt;const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,Rt,xt,jt=!1,Ct=[],Ot="{}";const kt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(At&&At.session)};let Nt,qt;kt.session.subscribe(async t=>{if(Nt=t,!jt)return;qt=!0;const e=Vt(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=await zt(e);n===Rt&&await Yt(r,o,s,e.page)});let Dt,Ut=null;let Ht,It=1;const Tt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Bt={};function Jt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Vt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At.baseUrl))return null;let e=t.pathname.slice(At.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<Pt.length;n+=1){const r=Pt[n],s=r.pattern.exec(e);if(s){const n=Jt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Kt(){return{x:pageXOffset,y:pageYOffset}}async function Mt(t,e,n,r){if(e)Ht=e;else{const t=Kt();Bt[Ht]=t,e=Ht=++It,Bt[Ht]=n?t:{x:0,y:0}}Ht=e,Lt&&kt.preloading.set(!0);const s=Ut&&Ut.href===t.href?Ut.promise:zt(t);Ut=null;const o=Rt={},{redirect:a,props:c,branch:l}=await s;if(o===Rt&&(await Yt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Bt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Bt[Ht]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Vt(new URL(t,document.baseURI));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),Mt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(kt.page.set(r),kt.preloading.set(!1),Lt)Lt.$set(n);else{n.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},n.level0={props:await xt},n.notify=kt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Gt(t.nextSibling);Gt(t),Gt(e)}Lt=new yt({target:Dt,props:n,hydrate:!0})}Ct=e,Ot=JSON.stringify(r.query),jt=!0,qt=!1}async function zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;xt||(xt=At.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ot)return!0;const s=Ct[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!qt&&!u&&Ct[c]&&Ct[c].part===e.i)return Ct[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(St[e.i]);let g;return g=jt||!At.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:At.preloaded[c+1],o["level"+p]={component:d,props:g,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Ft(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Gt(t){t.parentNode.removeChild(t)}function Wt(t){const e=Vt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,zt(e)),Ut.promise}let Xt;function Qt(t){clearTimeout(Xt),Xt=setTimeout(()=>{Zt(t)},20)}function Zt(t){const e=ee(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function te(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Vt(s);if(o){Mt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Tt.pushState({id:Ht},"",s.href)}}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ne(t){if(Bt[Ht]=Kt(),t.state){const e=Vt(new URL(location.href));e?Mt(e,t.state.id):location.href=location.href}else It=It+1,function(t){Ht=t}(It),Tt.replaceState({id:Ht},"",location.href)}var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Tt.scrollRestoration="auto"}),addEventListener("load",()=>{Tt.scrollRestoration="manual"}),function(t){Dt=t}(re.target),addEventListener("click",te),addEventListener("popstate",ne),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Tt.replaceState({id:It},"",e);const n=new URL(location.href);if(At.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=At;xt||(xt=o&&o[0]),Yt(null,[],{error:c,status:a,session:s,level0:{props:xt},level1:{props:{status:a,error:c},component:gt},segments:o},{host:e,path:n,query:Jt(r),params:{}})}();const r=Vt(n);return r?Mt(r,It,!0,t):void 0});export{et as S,b as a,y as b,_ as c,f as d,d as e,v as f,u as g,i as h,tt as i,g as j,m as k,E as l,$ as m,t as n,w as o,P as p,A as q,S as r,a as s,h as t,s as u,p as v};