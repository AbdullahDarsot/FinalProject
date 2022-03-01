var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,s;function i(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function a(t,e,n,o){if(t){const c=u(t,e,n,o);return t[0](c)}}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function m(t,e,n,o){if(t[2]&&o){const c=t[2](o(n));if(void 0===e.dirty)return c;if("object"==typeof c){const t=[],n=Math.max(e.dirty.length,c.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|c[o];return t}return e.dirty|c}return e.dirty}function d(t,e,n,o,c,l){if(c){const r=u(e,n,o,l);t.p(r,c)}}function f(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function v(){return y("")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function K(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function E(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function _(t,e,n){t.classList[n?"add":"remove"](e)}function k(t){s=t}function S(){const t=function(){if(!s)throw new Error("Function called outside component initialization");return s}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const c=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,c)}))}}}function P(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const N=[],F=[],M=[],T=[],L=Promise.resolve();let A=!1;function B(t){M.push(t)}let J=!1;const D=new Set;function I(){if(!J){J=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];k(e),U(e.$$)}for(k(null),N.length=0;F.length;)F.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];D.has(e)||(D.add(e),e())}M.length=0}while(N.length);for(;T.length;)T.pop()();A=!1,J=!1,D.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const q=new Set;let z;function H(){z={r:0,c:[],p:z}}function R(){z.r||o(z.c),z=z.p}function G(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function V(t){t&&t.c()}function W(t,n,l,r){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,l),r||B((()=>{const n=i.map(e).filter(c);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(B)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(N.push(t),A||(A=!0,L.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,c,l,r,i,a,u,m=[-1]){const d=s;k(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(d?d.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||d.$$.root};u&&u(f.root);let $=!1;if(f.ctx=l?l(e,c.props||{},((t,n,...o)=>{const c=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=c)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](c),$&&Y(e,t)),n})):[],f.update(),$=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();c.intro&&G(e.$$.fragment),W(e,c.target,c.anchor,c.customElement),I()}k(d)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(e){let n,o,l,r,s,i;return{c(){n=x("bar"),o=x("button"),l=y("Create "),r=y(e[2]),O(n,"class","svelte-1otfs0x"),_(n,"creating",e[1])},m(t,a){p(t,n,a),$(n,o),$(o,l),$(o,r),s||(i=C(o,"click",(function(){c(e[0])&&e[0].apply(this,arguments)})),s=!0)},p(t,[o]){e=t,4&o&&K(r,e[2]),2&o&&_(n,"creating",e[1])},i:t,o:t,d(t){t&&h(n),s=!1,i()}}}function nt(t,e,n){let{create:o}=e,{creating:c=!1}=e,{itemClass:l}=e;return t.$$set=t=>{"create"in t&&n(0,o=t.create),"creating"in t&&n(1,c=t.creating),"itemClass"in t&&n(2,l=t.itemClass)},[o,c,l]}class ot extends tt{constructor(t){super(),Z(this,t,nt,et,l,{create:0,creating:1,itemClass:2})}}function ct(t){let e,n,c;return{c(){e=x("input"),e.disabled=t[3],O(e,"type","text"),O(e,"placeholder",t[1]),O(e,"id","placeholder2"),O(e,"name","placeholder2"),O(e,"class","svelte-18s4ib5")},m(o,l){p(o,e,l),j(e,t[5]),n||(c=[C(e,"input",t[13]),C(e,"keypress",t[9])],n=!0)},p(t,n){8&n&&(e.disabled=t[3]),2&n&&O(e,"placeholder",t[1]),32&n&&e.value!==t[5]&&j(e,t[5])},d(t){t&&h(e),n=!1,o(c)}}}function lt(t){let e,n,c;return{c(){e=x("input"),e.disabled=t[3],O(e,"type","text"),O(e,"placeholder",t[2]),O(e,"id","placeholder3"),O(e,"name","placeholder3"),O(e,"class","svelte-18s4ib5")},m(o,l){p(o,e,l),j(e,t[6]),n||(c=[C(e,"input",t[14]),C(e,"keypress",t[9])],n=!0)},p(t,n){8&n&&(e.disabled=t[3]),4&n&&O(e,"placeholder",t[2]),64&n&&e.value!==t[6]&&j(e,t[6])},d(t){t&&h(e),n=!1,o(c)}}}function rt(e){let n,c,l,r,s,i,a,u,m,d,f,g,y=e[1]&&ct(e),v=e[2]&&lt(e);return{c(){n=x("create"),c=x("fields"),l=x("input"),r=b(),y&&y.c(),s=b(),v&&v.c(),i=b(),a=x("buttons"),u=x("button"),u.textContent="Cancel",m=b(),d=x("button"),d.textContent="OK",l.disabled=e[3],O(l,"type","text"),O(l,"placeholder",e[0]),O(l,"id","placeholder1"),O(l,"name","placeholder1"),O(l,"class","svelte-18s4ib5"),O(u,"class","svelte-18s4ib5"),O(d,"class","svelte-18s4ib5"),O(a,"class","svelte-18s4ib5"),O(c,"class","svelte-18s4ib5"),O(n,"class","svelte-18s4ib5"),_(n,"creating",e[3])},m(t,o){p(t,n,o),$(n,c),$(c,l),j(l,e[4]),$(c,r),y&&y.m(c,null),$(c,s),v&&v.m(c,null),$(c,i),$(c,a),$(a,u),$(a,m),$(a,d),f||(g=[C(l,"input",e[12]),C(l,"keypress",e[9]),C(u,"click",w(e[7]),{once:!0}),C(d,"click",w(e[8]),{once:!0})],f=!0)},p(t,[e]){8&e&&(l.disabled=t[3]),1&e&&O(l,"placeholder",t[0]),16&e&&l.value!==t[4]&&j(l,t[4]),t[1]?y?y.p(t,e):(y=ct(t),y.c(),y.m(c,s)):y&&(y.d(1),y=null),t[2]?v?v.p(t,e):(v=lt(t),v.c(),v.m(c,i)):v&&(v.d(1),v=null),8&e&&_(n,"creating",t[3])},i:t,o:t,d(t){t&&h(n),y&&y.d(),v&&v.d(),f=!1,o(g)}}}function st(t,e,n){let{onCancel:o}=e,{onOK:c}=e,{placeholder1:l}=e,{placeholder2:r=null}=e,{placeholder3:s=null}=e,i=!1,a=null,u=null,m=null;const d=t=>{t&&t.preventDefault(),n(3,i=!0),c(a,u,m)};return t.$$set=t=>{"onCancel"in t&&n(10,o=t.onCancel),"onOK"in t&&n(11,c=t.onOK),"placeholder1"in t&&n(0,l=t.placeholder1),"placeholder2"in t&&n(1,r=t.placeholder2),"placeholder3"in t&&n(2,s=t.placeholder3)},[l,r,s,i,a,u,m,t=>{t.preventDefault(),o()},d,t=>{13===t.charCode&&(t.preventDefault(),d())},o,c,function(){a=this.value,n(4,a)},function(){u=this.value,n(5,u)},function(){m=this.value,n(6,m)}]}class it extends tt{constructor(t){super(),Z(this,t,st,rt,l,{onCancel:10,onOK:11,placeholder1:0,placeholder2:1,placeholder3:2})}}const at=t=>({}),ut=t=>({}),mt=t=>({}),dt=t=>({class:"displayable"});function ft(t){let e;const n=t[6].creatable,o=a(n,t,t[5],ut);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,c){o&&o.p&&(!e||32&c)&&d(o,n,t,t[5],e?m(n,t[5],c,at):f(t[5]),ut)},i(t){e||(G(o,t),e=!0)},o(t){Q(o,t),e=!1},d(t){o&&o.d(t)}}}function $t(t){let e,n;const o=t[6].displayable,c=a(o,t,t[5],dt);return{c(){e=x("displayable"),c&&c.c(),O(e,"class","svelte-1f9sto8")},m(t,o){p(t,e,o),c&&c.m(e,null),n=!0},p(t,e){c&&c.p&&(!n||32&e)&&d(c,o,t,t[5],n?m(o,t[5],e,mt):f(t[5]),dt)},i(t){n||(G(c,t),n=!0)},o(t){Q(c,t),n=!1},d(t){t&&h(e),c&&c.d(t)}}}function pt(t){let e,n,o,l,r,s,a,u,m;const d=[$t,ft],f=[];function g(t,e){return t[3]?0:1}return r=g(t),s=f[r]=d[r](t),{c(){e=x("item"),n=x("img"),l=b(),s.c(),O(n,"alt","Customer Icon"),O(n,"class","icon svelte-1f9sto8"),i(n.src,o="images/"+t[0]+".svg")||O(n,"src",o),O(e,"id",t[2]),O(e,"class","svelte-1f9sto8"),_(e,"displaying",t[3])},m(o,s){p(o,e,s),$(e,n),$(e,l),f[r].m(e,null),a=!0,u||(m=C(e,"click",(function(){c(t[1])&&t[1].apply(this,arguments)})),u=!0)},p(c,[l]){t=c,(!a||1&l&&!i(n.src,o="images/"+t[0]+".svg"))&&O(n,"src",o);let u=r;r=g(t),r===u?f[r].p(t,l):(H(),Q(f[u],1,1,(()=>{f[u]=null})),R(),s=f[r],s?s.p(t,l):(s=f[r]=d[r](t),s.c()),G(s,1),s.m(e,null)),(!a||4&l)&&O(e,"id",t[2]),8&l&&_(e,"displaying",t[3])},i(t){a||(G(s),a=!0)},o(t){Q(s),a=!1},d(t){t&&h(e),f[r].d(),u=!1,m()}}}function ht(t,e,n){let o,c,{$$slots:l={},$$scope:r}=e,{icon:s}=e,{item:i}=e,{select:a=null}=e;return t.$$set=t=>{"icon"in t&&n(0,s=t.icon),"item"in t&&n(4,i=t.item),"select"in t&&n(1,a=t.select),"$$scope"in t&&n(5,r=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&n(3,o=null!=a),16&t.$$.dirty&&n(2,c=i.uuid?i.uuid:null)},[s,a,c,o,i,r,l]}class gt extends tt{constructor(t){super(),Z(this,t,ht,pt,l,{icon:0,item:4,select:1})}}function xt(t){let e,n,o=t[0].name+"";return{c(){e=x("span"),n=y(o),O(e,"slot","displayable"),E(e,"width","100%")},m(t,o){p(t,e,o),$(e,n)},p(t,e){1&e&&o!==(o=t[0].name+"")&&K(n,o)},d(t){t&&h(e)}}}function yt(t){let e,n;return e=new it({props:{onCancel:t[1],onOK:t[2],placeholder1:"Enter customer company name"}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.onCancel=t[1]),4&n&&(o.onOK=t[2]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function bt(t){let e,n,o=t[2]&&yt(t);return{c(){e=x("span"),o&&o.c(),O(e,"slot","creatable"),E(e,"width","100%")},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,n){t[2]?o?(o.p(t,n),4&n&&G(o,1)):(o=yt(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function vt(t){let e,n;return e=new gt({props:{icon:Ct,item:t[4],select:t[3],$$slots:{creatable:[bt],displayable:[xt]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,[n]){const o={};16&n&&(o.item=t[4]),8&n&&(o.select=t[3]),519&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}const Ct="customer";function wt(t,e,n){let o,c,l,{context:r}=e,{customer:s}=e,{onCancel:i=null}=e,{onOK:a=null}=e,{selectCustomer:u=null}=e;const m=S();return t.$$set=t=>{"context"in t&&n(5,r=t.context),"customer"in t&&n(0,s=t.customer),"onCancel"in t&&n(1,i=t.onCancel),"onOK"in t&&n(2,a=t.onOK),"selectCustomer"in t&&n(6,u=t.selectCustomer)},t.$$.update=()=>{32&t.$$.dirty&&n(7,o=r.domain),1&t.$$.dirty&&n(4,c=s),193&t.$$.dirty&&n(3,l=u||(s.uuid?()=>m("refresh",{customer:s,domain:o}):null))},[s,i,a,l,c,r,u,o]}class Ot extends tt{constructor(t){super(),Z(this,t,wt,vt,l,{context:5,customer:0,onCancel:1,onOK:2,selectCustomer:6})}}function Kt(t,e,n){const o=t.slice();return o[10]=e[n],o}function jt(t){let e,n,o,c;e=new ot({props:{create:t[5],creating:t[2],itemClass:"Customer"}});let l=t[4]&&Et(t);return{c(){V(e.$$.fragment),n=b(),l&&l.c(),o=v()},m(t,r){W(e,t,r),p(t,n,r),l&&l.m(t,r),p(t,o,r),c=!0},p(t,n){const c={};4&n&&(c.creating=t[2]),e.$set(c),t[4]?l?(l.p(t,n),16&n&&G(l,1)):(l=Et(t),l.c(),G(l,1),l.m(o.parentNode,o)):l&&(H(),Q(l,1,1,(()=>{l=null})),R())},i(t){c||(G(e.$$.fragment,t),G(l),c=!0)},o(t){Q(e.$$.fragment,t),Q(l),c=!1},d(t){X(e,t),t&&h(n),l&&l.d(t),t&&h(o)}}}function Et(t){let e,n,o=t[1],c=[];for(let e=0;e<o.length;e+=1)c[e]=_t(Kt(t,o,e));const l=t=>Q(c[t],1,1,(()=>{c[t]=null}));return{c(){e=x("items");for(let t=0;t<c.length;t+=1)c[t].c()},m(t,o){p(t,e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);n=!0},p(t,n){if(195&n){let r;for(o=t[1],r=0;r<o.length;r+=1){const l=Kt(t,o,r);c[r]?(c[r].p(l,n),G(c[r],1)):(c[r]=_t(l),c[r].c(),G(c[r],1),c[r].m(e,null))}for(H(),r=o.length;r<c.length;r+=1)l(r);R()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)Q(c[t]);n=!1},d(t){t&&h(e),g(c,t)}}}function _t(t){let e,n;return e=new Ot({props:{context:t[0],customer:t[10],onCancel:t[6],onOK:t[7]}}),e.$on("refresh",t[9]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),2&n&&(o.customer=t[10]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function kt(t){let e,n,o=t[3]&&jt(t);return{c(){e=x("component"),o&&o.c()},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,[n]){t[3]?o?(o.p(t,n),8&n&&G(o,1)):(o=jt(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function St(t,e,n){let{context:o={}}=e,c=!1,l=[],r=null,s=!1,i=!1;return t.$$set=t=>{"context"in t&&n(0,o=t.context)},t.$$.update=()=>{259&t.$$.dirty&&null!=o.domain&&null==r&&(n(8,r=o.domain.uuid),fetch(`/api/v1/domains/${r}/customers`).then((t=>t.json())).then((t=>{n(1,l=t||[]),n(3,s=!0),n(4,i=l&&l.length>0)})).catch((t=>alert("Failed to fetch customers!"))))},[o,l,c,s,i,()=>{n(1,l=[{},...l]),n(2,c=!0),n(4,i=!0)},()=>{l.splice(0,1),n(1,l),n(0,o),n(8,r),n(4,i=l&&l.length>0),n(2,c=!1)},t=>{const e=JSON.stringify({name:t});fetch(`/api/v1/domains/${r}/customers`,{body:e,headers:{"Content-Type":"application/json"},method:"POST"}).then((t=>t.json())).then((t=>{n(1,l[0].name=t.name,l),n(1,l[0].uuid=t.uuid,l),n(1,l),n(0,o),n(8,r),n(2,c=!1)})).catch((t=>alert("Failed to create customer!")))},r,function(e){P.call(this,t,e)}]}class Pt extends tt{constructor(t){super(),Z(this,t,St,kt,l,{context:0})}}function Nt(t){let e,n,o,c,l=t[0].domain.name+"",r=t[0].domain.environment&&Ft(t);return{c(){e=y("Connected to the "),n=y(l),o=y(" domain\r\n                "),r&&r.c(),c=v()},m(t,l){p(t,e,l),p(t,n,l),p(t,o,l),r&&r.m(t,l),p(t,c,l)},p(t,e){1&e&&l!==(l=t[0].domain.name+"")&&K(n,l),t[0].domain.environment?r?r.p(t,e):(r=Ft(t),r.c(),r.m(c.parentNode,c)):r&&(r.d(1),r=null)},d(t){t&&h(e),t&&h(n),t&&h(o),r&&r.d(t),t&&h(c)}}}function Ft(t){let e,n,o,c=t[0].domain.environment+"";return{c(){e=y(" ("),n=y(c),o=y(" environment)")},m(t,c){p(t,e,c),p(t,n,c),p(t,o,c)},p(t,e){1&e&&c!==(c=t[0].domain.environment+"")&&K(n,c)},d(t){t&&h(e),t&&h(n),t&&h(o)}}}function Mt(e){let n,o,c,l,r,s,a,u,m=e[0].domain&&Nt(e);return{c(){n=x("header"),o=x("heading"),c=x("h1"),c.textContent="Credersi-vend Admin Frontend",l=b(),r=x("subheading"),m&&m.c(),s=b(),a=x("img"),O(c,"class","svelte-1tuls2o"),O(r,"class","svelte-1tuls2o"),O(o,"class","svelte-1tuls2o"),O(a,"alt","Credersi Logo"),O(a,"class","logo svelte-1tuls2o"),i(a.src,u="images/CredersiLogo.png")||O(a,"src","images/CredersiLogo.png"),O(n,"class","svelte-1tuls2o")},m(t,e){p(t,n,e),$(n,o),$(o,c),$(o,l),$(o,r),m&&m.m(r,null),$(n,s),$(n,a)},p(t,[e]){t[0].domain?m?m.p(t,e):(m=Nt(t),m.c(),m.m(r,null)):m&&(m.d(1),m=null)},i:t,o:t,d(t){t&&h(n),m&&m.d()}}}function Tt(t,e,n){let{context:o={}}=e;return t.$$set=t=>{"context"in t&&n(0,o=t.context)},[o]}class Lt extends tt{constructor(t){super(),Z(this,t,Tt,Mt,l,{context:0})}}function At(t){let e,n,o=t[0].location+"";return{c(){e=x("br"),n=y(o)},m(t,o){p(t,e,o),p(t,n,o)},p(t,e){1&e&&o!==(o=t[0].location+"")&&K(n,o)},d(t){t&&h(e),t&&h(n)}}}function Bt(t){let e,n,o=t[0].directions+"";return{c(){e=x("br"),n=y(o)},m(t,o){p(t,e,o),p(t,n,o)},p(t,e){1&e&&o!==(o=t[0].directions+"")&&K(n,o)},d(t){t&&h(e),t&&h(n)}}}function Jt(t){let e,n,o,c,l,r=t[0].name+"",s=t[0].location&&At(t),i=t[0].directions&&Bt(t);return{c(){e=x("span"),n=x("b"),o=y(r),c=b(),s&&s.c(),l=b(),i&&i.c(),O(e,"slot","displayable"),E(e,"width","100%")},m(t,r){p(t,e,r),$(e,n),$(n,o),$(e,c),s&&s.m(e,null),$(e,l),i&&i.m(e,null)},p(t,n){1&n&&r!==(r=t[0].name+"")&&K(o,r),t[0].location?s?s.p(t,n):(s=At(t),s.c(),s.m(e,l)):s&&(s.d(1),s=null),t[0].directions?i?i.p(t,n):(i=Bt(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(t){t&&h(e),s&&s.d(),i&&i.d()}}}function Dt(t){let e,n;return e=new it({props:{onCancel:t[1],onOK:t[2],placeholder1:"Enter machine name",placeholder2:"Enter machine location"}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.onCancel=t[1]),4&n&&(o.onOK=t[2]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function It(t){let e,n,o=t[2]&&Dt(t);return{c(){e=x("span"),o&&o.c(),O(e,"slot","creatable"),E(e,"width","100%")},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,n){t[2]?o?(o.p(t,n),4&n&&G(o,1)):(o=Dt(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function Ut(t){let e,n;return e=new gt({props:{icon:qt,item:t[4],select:t[3],$$slots:{creatable:[It],displayable:[Jt]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,[n]){const o={};16&n&&(o.item=t[4]),8&n&&(o.select=t[3]),4103&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}const qt="machine";function zt(t,e,n){let o,c,l,r,s,i,{context:a}=e,{machine:u}=e,{onCancel:m=null}=e,{onOK:d=null}=e,{selectMachine:f=null}=e;const $=S();return t.$$set=t=>{"context"in t&&n(5,a=t.context),"machine"in t&&n(0,u=t.machine),"onCancel"in t&&n(1,m=t.onCancel),"onOK"in t&&n(2,d=t.onOK),"selectMachine"in t&&n(6,f=t.selectMachine)},t.$$.update=()=>{32&t.$$.dirty&&n(10,o=a.customer),32&t.$$.dirty&&n(9,c=a.domain),33&t.$$.dirty&&n(8,l=a.machines&&a.machines.length>0?a.machines.concat([u]):[u]),1&t.$$.dirty&&n(4,r=u),32&t.$$.dirty&&n(7,s=a.site),1985&t.$$.dirty&&n(3,i=f||(u.uuid?()=>$("refresh",{customer:o,domain:c,machines:l,site:s}):null))},[u,m,d,i,r,a,f,s,l,c,o]}class Ht extends tt{constructor(t){super(),Z(this,t,zt,Ut,l,{context:5,machine:0,onCancel:1,onOK:2,selectMachine:6})}}function Rt(t,e,n){const o=t.slice();return o[14]=e[n],o}function Gt(t){let e,n,o,c;e=new ot({props:{create:t[5],creating:t[2],itemClass:"Machine"}});let l=t[4]&&Qt(t);return{c(){V(e.$$.fragment),n=b(),l&&l.c(),o=v()},m(t,r){W(e,t,r),p(t,n,r),l&&l.m(t,r),p(t,o,r),c=!0},p(t,n){const c={};4&n&&(c.creating=t[2]),e.$set(c),t[4]?l?(l.p(t,n),16&n&&G(l,1)):(l=Qt(t),l.c(),G(l,1),l.m(o.parentNode,o)):l&&(H(),Q(l,1,1,(()=>{l=null})),R())},i(t){c||(G(e.$$.fragment,t),G(l),c=!0)},o(t){Q(e.$$.fragment,t),Q(l),c=!1},d(t){X(e,t),t&&h(n),l&&l.d(t),t&&h(o)}}}function Qt(t){let e,n,o=t[1],c=[];for(let e=0;e<o.length;e+=1)c[e]=Vt(Rt(t,o,e));const l=t=>Q(c[t],1,1,(()=>{c[t]=null}));return{c(){e=x("items");for(let t=0;t<c.length;t+=1)c[t].c()},m(t,o){p(t,e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);n=!0},p(t,n){if(195&n){let r;for(o=t[1],r=0;r<o.length;r+=1){const l=Rt(t,o,r);c[r]?(c[r].p(l,n),G(c[r],1)):(c[r]=Vt(l),c[r].c(),G(c[r],1),c[r].m(e,null))}for(H(),r=o.length;r<c.length;r+=1)l(r);R()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)Q(c[t]);n=!1},d(t){t&&h(e),g(c,t)}}}function Vt(t){let e,n;return e=new Ht({props:{context:t[0],machine:t[14],onCancel:t[6],onOK:t[7]}}),e.$on("refresh",t[12]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),2&n&&(o.machine=t[14]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Wt(t){let e,n,o=t[3]&&Gt(t);return{c(){e=x("component"),o&&o.c()},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,[n]){t[3]?o?(o.p(t,n),8&n&&G(o,1)):(o=Gt(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function Xt(t,e,n){let{context:o={}}=e,c=!1,l=null,r=null,s=!1,i=!1,a=null,u=null,m=[];return t.$$set=t=>{"context"in t&&n(0,o=t.context)},t.$$.update=()=>{3843&t.$$.dirty&&null!=o.domain&&(null==r||a&&o.machines&&o.machines.length>0&&o.machines[o.machines.length-1].uuid!=a)&&(n(1,m=[]),n(8,l=o.customer.uuid),n(9,r=o.domain.uuid),n(10,a=o.machines[o.machines.length-1].uuid),n(11,u=o.site.uuid),fetch(`/api/v1/domains/${r}/customers/${l}/sites/${u}/route/${a}`).then((t=>t.json())).then((t=>{if(n(3,s=!0),t){for(let e of t)e.node.parentUuid==a&&m.push(e.node);n(4,i=m.length>0),n(1,m),n(0,o),n(9,r),n(8,l),n(11,u),n(10,a)}})).catch((t=>console.log("Failed to fetch any sub-machines on route!"))))},[o,m,c,s,i,()=>{n(1,m=[{},...m]),n(2,c=!0),n(4,i=!0)},()=>{m.splice(0,1),n(1,m),n(0,o),n(9,r),n(8,l),n(11,u),n(10,a),n(4,i=m&&m.length>0),n(2,c=!1)},(t,e)=>{const s=JSON.stringify({location:e,name:t});fetch(`/api/v1/domains/${r}/customers/${l}/sites/${u}/route/${a}`,{body:s,headers:{"Content-Type":"application/json"},method:"POST"}).then((t=>t.json())).then((t=>{n(1,m[0].location=t.location,m),n(1,m[0].name=t.name,m),n(1,m[0].uuid=t.uuid,m),n(1,m),n(0,o),n(9,r),n(8,l),n(11,u),n(10,a),n(2,c=!1)})).catch((t=>alert("Failed to append machine to route!")))},l,r,a,u,function(e){P.call(this,t,e)}]}class Yt extends tt{constructor(t){super(),Z(this,t,Xt,Wt,l,{context:0})}}function Zt(t){let e,n,o=t[2].address+"";return{c(){e=x("br"),n=y(o)},m(t,o){p(t,e,o),p(t,n,o)},p(t,e){4&e&&o!==(o=t[2].address+"")&&K(n,o)},d(t){t&&h(e),t&&h(n)}}}function te(t){let e,n,o,c,l=t[2].name+"",r=t[2].address&&Zt(t);return{c(){e=x("span"),n=x("b"),o=y(l),c=b(),r&&r.c(),O(e,"slot","displayable"),E(e,"width","100%")},m(t,l){p(t,e,l),$(e,n),$(n,o),$(e,c),r&&r.m(e,null)},p(t,n){4&n&&l!==(l=t[2].name+"")&&K(o,l),t[2].address?r?r.p(t,n):(r=Zt(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&h(e),r&&r.d()}}}function ee(t){let e,n;return e=new it({props:{onCancel:t[0],onOK:t[1],placeholder1:"Enter site name",placeholder2:"Enter site address"}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.onCancel=t[0]),2&n&&(o.onOK=t[1]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function ne(t){let e,n,o=t[1]&&ee(t);return{c(){e=x("span"),o&&o.c(),O(e,"slot","creatable"),E(e,"width","100%")},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,n){t[1]?o?(o.p(t,n),2&n&&G(o,1)):(o=ee(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function oe(t){let e,n;return e=new gt({props:{icon:ce,item:t[4],select:t[3],$$slots:{creatable:[ne],displayable:[te]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,[n]){const o={};16&n&&(o.item=t[4]),8&n&&(o.select=t[3]),1031&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}const ce="site";function le(t,e,n){let o,c,l,r,{context:s}=e,{onCancel:i=null}=e,{onOK:a=null}=e,{selectSite:u=null}=e,{site:m}=e;const d=S();return t.$$set=t=>{"context"in t&&n(5,s=t.context),"onCancel"in t&&n(0,i=t.onCancel),"onOK"in t&&n(1,a=t.onOK),"selectSite"in t&&n(6,u=t.selectSite),"site"in t&&n(2,m=t.site)},t.$$.update=()=>{32&t.$$.dirty&&n(8,o=s.customer),32&t.$$.dirty&&n(7,c=s.domain),4&t.$$.dirty&&n(4,l=m),452&t.$$.dirty&&n(3,r=u||(m.uuid?()=>d("refresh",{customer:o,domain:c,site:m}):null))},[i,a,m,r,l,s,u,c,o]}class re extends tt{constructor(t){super(),Z(this,t,le,oe,l,{context:5,onCancel:0,onOK:1,selectSite:6,site:2})}}function se(t,e,n){const o=t.slice();return o[11]=e[n],o}function ie(t){let e,n,o,c;e=new ot({props:{create:t[5],creating:t[2],itemClass:"Site"}});let l=t[4]&&ae(t);return{c(){V(e.$$.fragment),n=b(),l&&l.c(),o=v()},m(t,r){W(e,t,r),p(t,n,r),l&&l.m(t,r),p(t,o,r),c=!0},p(t,n){const c={};4&n&&(c.creating=t[2]),e.$set(c),t[4]?l?(l.p(t,n),16&n&&G(l,1)):(l=ae(t),l.c(),G(l,1),l.m(o.parentNode,o)):l&&(H(),Q(l,1,1,(()=>{l=null})),R())},i(t){c||(G(e.$$.fragment,t),G(l),c=!0)},o(t){Q(e.$$.fragment,t),Q(l),c=!1},d(t){X(e,t),t&&h(n),l&&l.d(t),t&&h(o)}}}function ae(t){let e,n,o=t[1],c=[];for(let e=0;e<o.length;e+=1)c[e]=ue(se(t,o,e));const l=t=>Q(c[t],1,1,(()=>{c[t]=null}));return{c(){e=x("items");for(let t=0;t<c.length;t+=1)c[t].c()},m(t,o){p(t,e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);n=!0},p(t,n){if(195&n){let r;for(o=t[1],r=0;r<o.length;r+=1){const l=se(t,o,r);c[r]?(c[r].p(l,n),G(c[r],1)):(c[r]=ue(l),c[r].c(),G(c[r],1),c[r].m(e,null))}for(H(),r=o.length;r<c.length;r+=1)l(r);R()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)Q(c[t]);n=!1},d(t){t&&h(e),g(c,t)}}}function ue(t){let e,n;return e=new re({props:{context:t[0],site:t[11],onCancel:t[6],onOK:t[7]}}),e.$on("refresh",t[10]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),2&n&&(o.site=t[11]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function me(t){let e,n,o=t[3]&&ie(t);return{c(){e=x("component"),o&&o.c()},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,[n]){t[3]?o?(o.p(t,n),8&n&&G(o,1)):(o=ie(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function de(t,e,n){let{context:o={}}=e,c=!1,l=null,r=null,s=!1,i=!1,a=[];return t.$$set=t=>{"context"in t&&n(0,o=t.context)},t.$$.update=()=>{771&t.$$.dirty&&null!=o.domain&&null==r&&(n(8,l=o.customer.uuid),n(9,r=o.domain.uuid),fetch(`/api/v1/domains/${r}/customers/${l}/sites`).then((t=>t.json())).then((t=>{n(1,a=t||[]),n(3,s=!0),n(4,i=a&&a.length>0)})).catch((t=>alert("Failed to fetch sites!"))))},[o,a,c,s,i,()=>{n(1,a=[{},...a]),n(2,c=!0),n(4,i=!0)},()=>{a.splice(0,1),n(1,a),n(0,o),n(9,r),n(8,l),n(4,i=a&&a.length>0),n(2,c=!1)},(t,e)=>{const s=JSON.stringify({address:e,name:t});fetch(`/api/v1/domains/${r}/customers/${l}/sites`,{body:s,headers:{"Content-Type":"application/json"},method:"POST"}).then((t=>t.json())).then((t=>{n(1,a[0].address=t.address,a),n(1,a[0].name=t.name,a),n(1,a[0].uuid=t.uuid,a),n(1,a),n(0,o),n(9,r),n(8,l),n(2,c=!1)})).catch((t=>alert("Failed to create site!")))},l,r,function(e){P.call(this,t,e)}]}class fe extends tt{constructor(t){super(),Z(this,t,de,me,l,{context:0})}}function $e(t){let e,n,o,c;const l=[he,pe],r=[];function s(t,e){return t[3]?1:0}return e=s(t),n=r[e]=l[e](t),{c(){n.c(),o=v()},m(t,n){r[e].m(t,n),p(t,o,n),c=!0},p(t,c){let i=e;e=s(t),e===i?r[e].p(t,c):(H(),Q(r[i],1,1,(()=>{r[i]=null})),R(),n=r[e],n?n.p(t,c):(n=r[e]=l[e](t),n.c()),G(n,1),n.m(o.parentNode,o))},i(t){c||(G(n),c=!0)},o(t){Q(n),c=!1},d(t){r[e].d(t),t&&h(o)}}}function pe(t){let e,n;return e=new Ht({props:{context:t[0],machine:t[3],onCancel:t[5],onOK:t[6]}}),e.$on("refresh",t[10]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),8&n&&(o.machine=t[3]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function he(t){let e,n;return e=new ot({props:{create:t[4],creating:t[1],itemClass:"Machine"}}),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.creating=t[1]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function ge(t){let e,n,o=t[2]&&$e(t);return{c(){e=x("component"),o&&o.c()},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,[n]){t[2]?o?(o.p(t,n),4&n&&G(o,1)):(o=$e(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function xe(t,e,n){let{context:o={}}=e,c=!1,l=null,r=null,s=!1,i=null,a=null;return t.$$set=t=>{"context"in t&&n(0,o=t.context)},t.$$.update=()=>{897&t.$$.dirty&&null!=o.domain&&null==r&&(n(7,l=o.customer.uuid),n(8,r=o.domain.uuid),n(9,a=o.site.uuid),fetch(`/api/v1/domains/${r}/customers/${l}/sites/${a}/origin`).then((t=>t.json())).then((t=>{n(2,s=!0),t&&t.uuid&&n(3,i=t)})).catch((t=>alert("Failed to fetch route origin machine!"))))},[o,c,s,i,()=>{n(3,i={name:""}),n(1,c=!0)},()=>{n(3,i=null),n(1,c=!1)},(t,e)=>{const o=JSON.stringify({name:t,location:e});fetch(`/api/v1/domains/${r}/customers/${l}/sites/${a}/origin`,{body:o,headers:{"Content-Type":"application/json"},method:"POST"}).then((t=>t.json())).then((t=>{n(1,c=!1),n(3,i={name:t.name,location:t.location,uuid:t.uuid})})).catch((t=>alert("Failed to create site route origin machine!")))},l,r,a,function(e){P.call(this,t,e)}]}class ye extends tt{constructor(t){super(),Z(this,t,xe,ge,l,{context:0})}}function be(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function ve(t){let e,n,o,l,r,s,i,a,u,m,d;i=new Ot({props:{context:t[0],customer:t[3],selectCustomer:t[8]}}),i.$on("refresh",t[10]);let f=t[1]&&Ce(t);return{c(){e=x("hr"),n=b(),o=x("root"),l=x("home"),l.innerHTML='<img alt="Credersi-vend Icon" class="icon svelte-7fl26b" src="images/cv-logo.png"/>',r=b(),s=x("breadcrumbs"),V(i.$$.fragment),a=b(),f&&f.c(),O(l,"class","svelte-7fl26b"),O(s,"class","svelte-7fl26b"),O(o,"class","svelte-7fl26b")},m(h,g){p(h,e,g),p(h,n,g),p(h,o,g),$(o,l),$(o,r),$(o,s),W(i,s,null),$(s,a),f&&f.m(s,null),u=!0,m||(d=C(l,"click",(function(){c(t[7])&&t[7].apply(this,arguments)})),m=!0)},p(e,n){t=e;const o={};1&n&&(o.context=t[0]),8&n&&(o.customer=t[3]),256&n&&(o.selectCustomer=t[8]),i.$set(o),t[1]?f?(f.p(t,n),2&n&&G(f,1)):(f=Ce(t),f.c(),G(f,1),f.m(s,null)):f&&(H(),Q(f,1,1,(()=>{f=null})),R())},i(t){u||(G(i.$$.fragment,t),G(f),u=!0)},o(t){Q(i.$$.fragment,t),Q(f),u=!1},d(t){t&&h(e),t&&h(n),t&&h(o),X(i),f&&f.d(),m=!1,d()}}}function Ce(t){let e,n,o,c;e=new re({props:{context:t[0],selectSite:t[5],site:t[1]}}),e.$on("refresh",t[11]);let l=t[9]&&we(t);return{c(){V(e.$$.fragment),n=b(),l&&l.c(),o=v()},m(t,r){W(e,t,r),p(t,n,r),l&&l.m(t,r),p(t,o,r),c=!0},p(t,n){const c={};1&n&&(c.context=t[0]),32&n&&(c.selectSite=t[5]),2&n&&(c.site=t[1]),e.$set(c),t[9]?l?(l.p(t,n),512&n&&G(l,1)):(l=we(t),l.c(),G(l,1),l.m(o.parentNode,o)):l&&(H(),Q(l,1,1,(()=>{l=null})),R())},i(t){c||(G(e.$$.fragment,t),G(l),c=!0)},o(t){Q(e.$$.fragment,t),Q(l),c=!1},d(t){X(e,t),t&&h(n),l&&l.d(t),t&&h(o)}}}function we(t){let e,n,o=t[4],c=[];for(let e=0;e<o.length;e+=1)c[e]=Oe(be(t,o,e));const l=t=>Q(c[t],1,1,(()=>{c[t]=null}));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();e=v()},m(t,o){for(let e=0;e<c.length;e+=1)c[e].m(t,o);p(t,e,o),n=!0},p(t,n){if(81&n){let r;for(o=t[4],r=0;r<o.length;r+=1){const l=be(t,o,r);c[r]?(c[r].p(l,n),G(c[r],1)):(c[r]=Oe(l),c[r].c(),G(c[r],1),c[r].m(e.parentNode,e))}for(H(),r=o.length;r<c.length;r+=1)l(r);R()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)Q(c[t]);n=!1},d(t){g(c,t),t&&h(e)}}}function Oe(t){let e,n;function o(){return t[12](t[17])}return e=new Ht({props:{context:t[0],machine:t[15],selectMachine:o}}),e.$on("refresh",t[13]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(n,c){t=n;const l={};1&c&&(l.context=t[0]),16&c&&(l.machine=t[15]),64&c&&(l.selectMachine=o),e.$set(l)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Ke(t){let e,n,o=t[2]&&t[3]&&ve(t);return{c(){e=x("trail"),o&&o.c()},m(t,c){p(t,e,c),o&&o.m(e,null),n=!0},p(t,[n]){t[2]&&t[3]?o?(o.p(t,n),12&n&&G(o,1)):(o=ve(t),o.c(),G(o,1),o.m(e,null)):o&&(H(),Q(o,1,1,(()=>{o=null})),R())},i(t){n||(G(o),n=!0)},o(t){Q(o),n=!1},d(t){t&&h(e),o&&o.d()}}}function je(t,e,n){let o,c,l,r,s,i,a,u,m,{context:d}=e;const f=S();return t.$$set=t=>{"context"in t&&n(0,d=t.context)},t.$$.update=()=>{1&t.$$.dirty&&n(3,o=d.customer),1&t.$$.dirty&&n(2,c=d.domain),1&t.$$.dirty&&n(4,l=d.machines?d.machines:[]),1&t.$$.dirty&&n(1,r=d.site),16&t.$$.dirty&&n(9,s=l.length>0),12&t.$$.dirty&&n(8,i=()=>f("refresh",{customer:o,domain:c})),4&t.$$.dirty&&n(7,a=()=>f("refresh",{domain:c})),30&t.$$.dirty&&n(6,u=t=>f("refresh",{customer:o,domain:c,machines:l.slice(0,t+1),site:r})),14&t.$$.dirty&&n(5,m=()=>f("refresh",{customer:o,domain:c,site:r}))},[d,r,c,o,l,m,u,a,i,s,function(e){P.call(this,t,e)},function(e){P.call(this,t,e)},t=>u(t),function(e){P.call(this,t,e)}]}class Ee extends tt{constructor(t){super(),Z(this,t,je,Ke,l,{context:0})}}function _e(t){let e,n,o,c,l,r;const s=[Ne,Pe,Se,ke],i=[];function a(t,e){return t[1]?0:t[0].site?1:t[0].customer?2:3}return c=a(t),l=i[c]=s[c](t),{c(){e=x("content"),n=x("hr"),o=b(),l.c(),O(e,"class","svelte-5efud2")},m(t,l){p(t,e,l),$(e,n),$(e,o),i[c].m(e,null),r=!0},p(t,n){let o=c;c=a(t),c===o?i[c].p(t,n):(H(),Q(i[o],1,1,(()=>{i[o]=null})),R(),l=i[c],l?l.p(t,n):(l=i[c]=s[c](t),l.c()),G(l,1),l.m(e,null))},i(t){r||(G(l),r=!0)},o(t){Q(l),r=!1},d(t){t&&h(e),i[c].d()}}}function ke(t){let e,n;return e=new Pt({props:{context:t[0]}}),e.$on("refresh",t[2]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Se(t){let e,n;return e=new fe({props:{context:t[0]}}),e.$on("refresh",t[2]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Pe(t){let e,n;return e=new ye({props:{context:t[0]}}),e.$on("refresh",t[2]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Ne(t){let e,n;return e=new Yt({props:{context:t[0]}}),e.$on("refresh",t[2]),{c(){V(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.context=t[0]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Fe(t){let e,n,o,c,l,r;n=new Lt({props:{context:t[0]}}),c=new Ee({props:{context:t[0]}}),c.$on("refresh",t[2]);let s=t[0].domain&&_e(t);return{c(){e=x("frontend"),V(n.$$.fragment),o=b(),V(c.$$.fragment),l=b(),s&&s.c(),O(e,"class","svelte-5efud2")},m(t,i){p(t,e,i),W(n,e,null),$(e,o),W(c,e,null),$(e,l),s&&s.m(e,null),r=!0},p(t,[o]){const l={};1&o&&(l.context=t[0]),n.$set(l);const r={};1&o&&(r.context=t[0]),c.$set(r),t[0].domain?s?(s.p(t,o),1&o&&G(s,1)):(s=_e(t),s.c(),G(s,1),s.m(e,null)):s&&(H(),Q(s,1,1,(()=>{s=null})),R())},i(t){r||(G(n.$$.fragment,t),G(c.$$.fragment,t),G(s),r=!0)},o(t){Q(n.$$.fragment,t),Q(c.$$.fragment,t),Q(s),r=!1},d(t){t&&h(e),X(n),X(c),s&&s.d()}}}function Me(t,e,n){let o,c={customer:null,domain:null,machines:[],site:null};const l=t=>{const e=new URL(window.location.href);if(!0!==t.root){if(n(0,c=t.detail),c.domain&&c.domain.uuid&&e.searchParams.set("domain",c.domain.uuid),c.customer&&c.customer.uuid?e.searchParams.set("customer",c.customer.uuid):e.searchParams.delete("customer"),c.site&&c.site.uuid?e.searchParams.set("site",c.site.uuid):e.searchParams.delete("site"),c.machines&&c.machines.length>0){let t=null;for(let e of c.machines)t=t?t+"+"+e.uuid:e.uuid;e.searchParams.set("machines",t)}else e.searchParams.delete("machines");window.history.pushState({path:e.href},"",e.href)}else{const o=t.detail.domain,l=`/api/v1/domains/${t.detail.domain.uuid}`,r=e.searchParams.get("customer"),s=e.searchParams.get("site"),i=e.searchParams.get("machines");if(null!=r&&r.length>0){const t=l+`/customers/${r}`;fetch(t).then((t=>t.json())).then((e=>{if(null!=s&&s.length>0){const l=t+`/sites/${s}`;fetch(l).then((t=>t.json())).then((async t=>{if(null!=i&&i.length>0){const r=[],s=i.split(" ");for(let t of s){const e=await fetch(l+`/machines/${t}`),n=await e.json();r.push(n)}n(0,c={domain:o,customer:e,site:t,machines:r})}else n(0,c={domain:o,customer:e,site:t})})).catch((t=>alert("Failed to fetch context details!")))}else n(0,c={domain:o,customer:e})})).catch((t=>alert("Failed to fetch context details!")))}else n(0,c=t.detail)}};return fetch("/api/v1/domains").then((t=>t.json())).then((t=>l({detail:{domain:t},root:!0}))).catch((t=>alert("Failed to fetch domains!"))),t.$$.update=()=>{1&t.$$.dirty&&n(1,o=c&&c.machines&&c.machines.length>0)},[c,o,l]}return new class extends tt{constructor(t){super(),Z(this,t,Me,Fe,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
