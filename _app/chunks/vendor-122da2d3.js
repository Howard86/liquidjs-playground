function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,i,c){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(a){const r=u(n,e,o,c);t.p(r,a)}}let f,d=!1;function h(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function _(t,n){if(d){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const t=n[s].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:h(1,r,(t=>n[e[t]].claim_order),t))-1;o[s]=e[i]+1;const c=i+1;e[c]=s,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let s=e[r]+1;0!=s;s=o[s-1]){for(i.push(n[s-1]);a>=s;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,u=0;s<c.length;s++){for(;u<i.length&&c[s].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){d&&!e?_(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function y(){return $("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function A(t,n,e,o){return E(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)))}function N(t,n){return E(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>$(n)),!0)}function k(t){return N(t," ")}function S(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n){t.value=null==n?"":n}function z(t){f=t}function B(){if(!f)throw new Error("Function called outside component initialization");return f}function C(t){B().$$.on_mount.push(t)}function T(t){B().$$.after_update.push(t)}function I(t,n){B().$$.context.set(t,n)}const L=[],M=[],O=[],q=[],D=Promise.resolve();let F=!1;function H(t){O.push(t)}let G=!1;const J=new Set;function K(){if(!G){G=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];z(n),P(n.$$)}for(z(null),L.length=0;M.length;)M.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];J.has(n)||(J.add(n),n())}O.length=0}while(L.length);for(;q.length;)q.pop()();F=!1,G=!1,J.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const W=new Set;let Q;function R(){Q={r:0,c:[],p:Q}}function U(){Q.r||r(Q.c),Q=Q.p}function V(t,n){t&&t.i&&(W.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),Q.c.push((()=>{W.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,c){const{fragment:a,on_mount:s,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,o),c||H((()=>{const n=s.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(H)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(L.push(t),F||(F=!0,D.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,i,c,a,s,u,l=[-1]){const h=f;z(n);const _=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:e.context||[]),callbacks:o(),dirty:l,skip_bound:!1,root:e.target||h.$$.root};u&&u(_.root);let p=!1;if(_.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return _.ctx&&a(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),p&&rt(n,t)),e})):[],_.update(),p=!0,r(_.before_update),_.fragment=!!c&&c(_.ctx),e.target){if(e.hydrate){d=!0;const t=w(e.target);_.fragment&&_.fragment.l(t),t.forEach(m)}else _.fragment&&_.fragment.c();e.intro&&V(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),d=!1,K()}z(h)}class ct{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function st(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!at.length;for(const e of r)e[1](),at.push(e,n);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const s=[c,a];return r.add(s),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(s),0===r.size&&(o(),o=null)}}}}function ut(t){var n,e,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=ut(t[n]))&&(o&&(o+=" "),o+=e);else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}var lt=function(){for(var t,n,e=0,o="";e<arguments.length;)(t=arguments[e++])&&(n=ut(t))&&(o&&(o+=" "),o+=n);return o};export{C as A,n as B,st as C,s as D,l as E,_ as F,t as G,j as H,x as I,r as J,a as K,lt as L,ct as S,w as a,v as b,A as c,m as d,g as e,p as f,N as g,S as h,it as i,tt as j,b as k,y as l,nt as m,k as n,et as o,Y as p,Z as q,R as r,c as s,$ as t,X as u,ot as v,U as w,V as x,I as y,T as z};