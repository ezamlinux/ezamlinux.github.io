const gd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};gd();function ul(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const _d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xd=ul(_d);function ph(i){return!!i||i===""}function hl(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=pt(n)?bd(n):hl(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(pt(i))return i;if(mt(i))return i}}const yd=/;(?![^(]*\))/g,vd=/:(.+)/;function bd(i){const e={};return i.split(yd).forEach(t=>{if(t){const n=t.split(vd);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function lo(i){let e="";if(pt(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=lo(i[t]);n&&(e+=n+" ")}else if(mt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const mh=i=>pt(i)?i:i==null?"":Ie(i)||mt(i)&&(i.toString===yh||!Oe(i.toString))?JSON.stringify(i,gh,2):String(i),gh=(i,e)=>e&&e.__v_isRef?gh(i,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:_h(e)?{[`Set(${e.size})`]:[...e.values()]}:mt(e)&&!Ie(e)&&!vh(e)?String(e):e,Ke={},Qi=[],Qt=()=>{},Md=()=>!1,wd=/^on[^a-z]/,co=i=>wd.test(i),fl=i=>i.startsWith("onUpdate:"),wt=Object.assign,dl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Sd=Object.prototype.hasOwnProperty,Ve=(i,e)=>Sd.call(i,e),Ie=Array.isArray,er=i=>uo(i)==="[object Map]",_h=i=>uo(i)==="[object Set]",Oe=i=>typeof i=="function",pt=i=>typeof i=="string",pl=i=>typeof i=="symbol",mt=i=>i!==null&&typeof i=="object",xh=i=>mt(i)&&Oe(i.then)&&Oe(i.catch),yh=Object.prototype.toString,uo=i=>yh.call(i),Ed=i=>uo(i).slice(8,-1),vh=i=>uo(i)==="[object Object]",ml=i=>pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ws=ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Td=/-(\w)/g,rr=ho(i=>i.replace(Td,(e,t)=>t?t.toUpperCase():"")),Ad=/\B([A-Z])/g,fr=ho(i=>i.replace(Ad,"-$1").toLowerCase()),bh=ho(i=>i.charAt(0).toUpperCase()+i.slice(1)),zo=ho(i=>i?`on${bh(i)}`:""),Js=(i,e)=>!Object.is(i,e),Uo=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Ys=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Cd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let oc;const Ld=()=>oc||(oc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let fn;class Rd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&fn&&(this.parent=fn,this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Pd(i,e=fn){e&&e.active&&e.effects.push(i)}const gl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Mh=i=>(i.w&$n)>0,wh=i=>(i.n&$n)>0,Dd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=$n},Id=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Mh(r)&&!wh(r)?r.delete(i):e[t++]=r,r.w&=~$n,r.n&=~$n}e.length=t}},Ia=new WeakMap;let Ir=0,$n=1;const Fa=30;let $t;const pi=Symbol(""),Na=Symbol("");class _l{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Pd(this,n)}run(){if(!this.active)return this.fn();let e=$t,t=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,qn=!0,$n=1<<++Ir,Ir<=Fa?Dd(this):ac(this),this.fn()}finally{Ir<=Fa&&Id(this),$n=1<<--Ir,$t=this.parent,qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(ac(this),this.onStop&&this.onStop(),this.active=!1)}}function ac(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let qn=!0;const Sh=[];function dr(){Sh.push(qn),qn=!1}function pr(){const i=Sh.pop();qn=i===void 0?!0:i}function Vt(i,e,t){if(qn&&$t){let n=Ia.get(i);n||Ia.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=gl()),Eh(r)}}function Eh(i,e){let t=!1;Ir<=Fa?wh(i)||(i.n|=$n,t=!Mh(i)):t=!i.has($t),t&&(i.add($t),$t.deps.push(i))}function Pn(i,e,t,n,r,s){const o=Ia.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?ml(t)&&a.push(o.get("length")):(a.push(o.get(pi)),er(i)&&a.push(o.get(Na)));break;case"delete":Ie(i)||(a.push(o.get(pi)),er(i)&&a.push(o.get(Na)));break;case"set":er(i)&&a.push(o.get(pi));break}if(a.length===1)a[0]&&Ba(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ba(gl(l))}}function Ba(i,e){for(const t of Ie(i)?i:[...i])(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Fd=ul("__proto__,__v_isRef,__isVue"),Th=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(pl)),Nd=xl(),Bd=xl(!1,!0),Od=xl(!0),lc=zd();function zd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Je(this);for(let s=0,o=this.length;s<o;s++)Vt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){dr();const n=Je(this)[e].apply(this,t);return pr(),n}}),i}function xl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?ep:Ph:e?Rh:Lh).get(n))return n;const o=Ie(n);if(!i&&o&&Ve(lc,r))return Reflect.get(lc,r,s);const a=Reflect.get(n,r,s);return(pl(r)?Th.has(r):Fd(r))||(i||Vt(n,"get",r),e)?a:Mt(a)?!o||!ml(r)?a.value:a:mt(a)?i?Dh(a):bl(a):a}}const Ud=Ah(),Hd=Ah(!0);function Ah(i=!1){return function(t,n,r,s){let o=t[n];if(Gr(o)&&Mt(o)&&!Mt(r))return!1;if(!i&&!Gr(r)&&(Ih(r)||(r=Je(r),o=Je(o)),!Ie(t)&&Mt(o)&&!Mt(r)))return o.value=r,!0;const a=Ie(t)&&ml(n)?Number(n)<t.length:Ve(t,n),l=Reflect.set(t,n,r,s);return t===Je(s)&&(a?Js(r,o)&&Pn(t,"set",n,r):Pn(t,"add",n,r)),l}}function Vd(i,e){const t=Ve(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Pn(i,"delete",e,void 0),n}function kd(i,e){const t=Reflect.has(i,e);return(!pl(e)||!Th.has(e))&&Vt(i,"has",e),t}function Gd(i){return Vt(i,"iterate",Ie(i)?"length":pi),Reflect.ownKeys(i)}const Ch={get:Nd,set:Ud,deleteProperty:Vd,has:kd,ownKeys:Gd},Wd={get:Od,set(i,e){return!0},deleteProperty(i,e){return!0}},qd=wt({},Ch,{get:Bd,set:Hd}),yl=i=>i,fo=i=>Reflect.getPrototypeOf(i);function as(i,e,t=!1,n=!1){i=i.__v_raw;const r=Je(i),s=Je(e);e!==s&&!t&&Vt(r,"get",e),!t&&Vt(r,"get",s);const{has:o}=fo(r),a=n?yl:t?Sl:wl;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function ls(i,e=!1){const t=this.__v_raw,n=Je(t),r=Je(i);return i!==r&&!e&&Vt(n,"has",i),!e&&Vt(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function cs(i,e=!1){return i=i.__v_raw,!e&&Vt(Je(i),"iterate",pi),Reflect.get(i,"size",i)}function cc(i){i=Je(i);const e=Je(this);return fo(e).has.call(e,i)||(e.add(i),Pn(e,"add",i,i)),this}function uc(i,e){e=Je(e);const t=Je(this),{has:n,get:r}=fo(t);let s=n.call(t,i);s||(i=Je(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Js(e,o)&&Pn(t,"set",i,e):Pn(t,"add",i,e),this}function hc(i){const e=Je(this),{has:t,get:n}=fo(e);let r=t.call(e,i);r||(i=Je(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Pn(e,"delete",i,void 0),s}function fc(){const i=Je(this),e=i.size!==0,t=i.clear();return e&&Pn(i,"clear",void 0,void 0),t}function us(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Je(o),l=e?yl:i?Sl:wl;return!i&&Vt(a,"iterate",pi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function hs(i,e,t){return function(...n){const r=this.__v_raw,s=Je(r),o=er(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?yl:e?Sl:wl;return!e&&Vt(s,"iterate",l?Na:pi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Fn(i){return function(...e){return i==="delete"?!1:this}}function Xd(){const i={get(s){return as(this,s)},get size(){return cs(this)},has:ls,add:cc,set:uc,delete:hc,clear:fc,forEach:us(!1,!1)},e={get(s){return as(this,s,!1,!0)},get size(){return cs(this)},has:ls,add:cc,set:uc,delete:hc,clear:fc,forEach:us(!1,!0)},t={get(s){return as(this,s,!0)},get size(){return cs(this,!0)},has(s){return ls.call(this,s,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:us(!0,!1)},n={get(s){return as(this,s,!0,!0)},get size(){return cs(this,!0)},has(s){return ls.call(this,s,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=hs(s,!1,!1),t[s]=hs(s,!0,!1),e[s]=hs(s,!1,!0),n[s]=hs(s,!0,!0)}),[i,t,e,n]}const[jd,Jd,Yd,$d]=Xd();function vl(i,e){const t=e?i?$d:Yd:i?Jd:jd;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ve(t,r)&&r in n?t:n,r,s)}const Zd={get:vl(!1,!1)},Kd={get:vl(!1,!0)},Qd={get:vl(!0,!1)},Lh=new WeakMap,Rh=new WeakMap,Ph=new WeakMap,ep=new WeakMap;function tp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function np(i){return i.__v_skip||!Object.isExtensible(i)?0:tp(Ed(i))}function bl(i){return Gr(i)?i:Ml(i,!1,Ch,Zd,Lh)}function ip(i){return Ml(i,!1,qd,Kd,Rh)}function Dh(i){return Ml(i,!0,Wd,Qd,Ph)}function Ml(i,e,t,n,r){if(!mt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=np(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function tr(i){return Gr(i)?tr(i.__v_raw):!!(i&&i.__v_isReactive)}function Gr(i){return!!(i&&i.__v_isReadonly)}function Ih(i){return!!(i&&i.__v_isShallow)}function Fh(i){return tr(i)||Gr(i)}function Je(i){const e=i&&i.__v_raw;return e?Je(e):i}function Nh(i){return Ys(i,"__v_skip",!0),i}const wl=i=>mt(i)?bl(i):i,Sl=i=>mt(i)?Dh(i):i;function rp(i){qn&&$t&&(i=Je(i),Eh(i.dep||(i.dep=gl())))}function sp(i,e){i=Je(i),i.dep&&Ba(i.dep)}function Mt(i){return!!(i&&i.__v_isRef===!0)}function op(i){return Mt(i)?i.value:i}const ap={get:(i,e,t)=>op(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Mt(r)&&!Mt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Bh(i){return tr(i)?i:new Proxy(i,ap)}class lp{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _l(e,()=>{this._dirty||(this._dirty=!0,sp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Je(this);return rp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cp(i,e,t=!1){let n,r;const s=Oe(i);return s?(n=i,r=Qt):(n=i.get,r=i.set),new lp(n,r,s||!r,t)}function Xn(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){po(s,e,t)}return r}function Wt(i,e,t,n){if(Oe(i)){const s=Xn(i,e,t,n);return s&&xh(s)&&s.catch(o=>{po(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Wt(i[s],e,t,n));return r}function po(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Xn(l,null,10,[i,o,a]);return}}up(i,t,r,n)}function up(i,e,t,n=!0){console.error(i)}let $s=!1,Oa=!1;const Ut=[];let Cn=0;const zr=[];let Fr=null,qi=0;const Ur=[];let Gn=null,Xi=0;const Oh=Promise.resolve();let El=null,za=null;function hp(i){const e=El||Oh;return i?e.then(this?i.bind(this):i):e}function fp(i){let e=Cn+1,t=Ut.length;for(;e<t;){const n=e+t>>>1;Wr(Ut[n])<i?e=n+1:t=n}return e}function zh(i){(!Ut.length||!Ut.includes(i,$s&&i.allowRecurse?Cn+1:Cn))&&i!==za&&(i.id==null?Ut.push(i):Ut.splice(fp(i.id),0,i),Uh())}function Uh(){!$s&&!Oa&&(Oa=!0,El=Oh.then(kh))}function dp(i){const e=Ut.indexOf(i);e>Cn&&Ut.splice(e,1)}function Hh(i,e,t,n){Ie(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),Uh()}function pp(i){Hh(i,Fr,zr,qi)}function mp(i){Hh(i,Gn,Ur,Xi)}function Tl(i,e=null){if(zr.length){for(za=e,Fr=[...new Set(zr)],zr.length=0,qi=0;qi<Fr.length;qi++)Fr[qi]();Fr=null,qi=0,za=null,Tl(i,e)}}function Vh(i){if(Ur.length){const e=[...new Set(Ur)];if(Ur.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((t,n)=>Wr(t)-Wr(n)),Xi=0;Xi<Gn.length;Xi++)Gn[Xi]();Gn=null,Xi=0}}const Wr=i=>i.id==null?1/0:i.id;function kh(i){Oa=!1,$s=!0,Tl(i),Ut.sort((t,n)=>Wr(t)-Wr(n));const e=Qt;try{for(Cn=0;Cn<Ut.length;Cn++){const t=Ut[Cn];t&&t.active!==!1&&Xn(t,null,14)}}finally{Cn=0,Ut.length=0,Vh(),$s=!1,El=null,(Ut.length||zr.length||Ur.length)&&kh(i)}}function gp(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ke;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||Ke;f?r=t.map(p=>p.trim()):h&&(r=t.map(Cd))}let a,l=n[a=zo(e)]||n[a=zo(rr(e))];!l&&s&&(l=n[a=zo(fr(e))]),l&&Wt(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Wt(c,i,6,r)}}function Gh(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Oe(i)){const l=c=>{const u=Gh(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):wt(o,s),n.set(i,o),o)}function mo(i,e){return!i||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(i,e[0].toLowerCase()+e.slice(1))||Ve(i,fr(e))||Ve(i,e))}let Ft=null,go=null;function Zs(i){const e=Ft;return Ft=i,go=i&&i.type.__scopeId||null,e}function _p(i){go=i}function xp(){go=null}function Ua(i,e=Ft,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Mc(-1);const s=Zs(e),o=i(...r);return Zs(s),n._d&&Mc(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Ho(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const S=Zs(i);try{if(t.shapeFlag&4){const T=r||n;d=dn(u.call(T,T,h,s,p,f,g)),_=l}else{const T=e;d=dn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),_=e.props?l:yp(l)}}catch(T){Hr.length=0,po(T,i,1),d=Nt(gn)}let C=d;if(_&&m!==!1){const T=Object.keys(_),{shapeFlag:E}=C;T.length&&E&7&&(o&&T.some(fl)&&(_=vp(_,o)),C=yi(C,_))}return t.dirs&&(C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),d=C,Zs(S),d}const yp=i=>{let e;for(const t in i)(t==="class"||t==="style"||co(t))&&((e||(e={}))[t]=i[t]);return e},vp=(i,e)=>{const t={};for(const n in i)(!fl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function bp(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?dc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!mo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?dc(n,o,c):!0:!!o;return!1}function dc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!mo(t,s))return!0}return!1}function Mp({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const wp=i=>i.__isSuspense;function Sp(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):mp(i)}function Ep(i,e){if(xt){let t=xt.provides;const n=xt.parent&&xt.parent.provides;n===t&&(t=xt.provides=Object.create(n)),t[i]=e}}function Vo(i,e,t=!1){const n=xt||Ft;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Oe(e)?e.call(n.proxy):e}}const pc={};function ko(i,e,t){return Wh(i,e,t)}function Wh(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Ke){const a=xt;let l,c=!1,u=!1;if(Mt(i)?(l=()=>i.value,c=Ih(i)):tr(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(tr),l=()=>i.map(_=>{if(Mt(_))return _.value;if(tr(_))return Ji(_);if(Oe(_))return Xn(_,a,2)})):Oe(i)?e?l=()=>Xn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Wt(i,a,3,[f])}:l=Qt,e&&n){const _=l;l=()=>Ji(_())}let h,f=_=>{h=d.onStop=()=>{Xn(_,a,4)}};if(qr)return f=Qt,e?t&&Wt(e,a,3,[l(),u?[]:void 0,f]):l(),Qt;let p=u?[]:pc;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||c||(u?_.some((S,C)=>Js(S,p[C])):Js(_,p)))&&(h&&h(),Wt(e,a,3,[_,p===pc?void 0:p,f]),p=_)}else d.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>It(g,a&&a.suspense):m=()=>{!a||a.isMounted?pp(g):g()};const d=new _l(l,m);return e?t?g():p=d.run():r==="post"?It(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&dl(a.scope.effects,d)}}function Tp(i,e,t){const n=this.proxy,r=pt(i)?i.includes(".")?qh(n,i):()=>n[i]:i.bind(n,n);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=xt;sr(this);const a=Wh(r,s.bind(n),t);return o?sr(o):gi(),a}function qh(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ji(i,e){if(!mt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Mt(i))Ji(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)Ji(i[t],e);else if(_h(i)||er(i))i.forEach(t=>{Ji(t,e)});else if(vh(i))for(const t in i)Ji(i[t],e);return i}function Ap(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Al(()=>{i.isMounted=!0}),Yh(()=>{i.isUnmounting=!0}),i}const kt=[Function,Array],Cp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(i,{slots:e}){const t=fm(),n=Ap();let r;return()=>{const s=e.default&&jh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==gn){o=m;break}}const a=Je(i),{mode:l}=a;if(n.isLeaving)return Go(o);const c=mc(o);if(!c)return Go(o);const u=Ha(c,a,n,t);Va(c,u);const h=t.subTree,f=h&&mc(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(f&&f.type!==gn&&(!ci(c,f)||p)){const m=Ha(f,a,n,t);if(Va(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},Go(o);l==="in-out"&&c.type!==gn&&(m.delayLeave=(d,_,S)=>{const C=Xh(n,f);C[String(f.key)]=f,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Lp=Cp;function Xh(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ha(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:S}=e,C=String(i.key),T=Xh(t,i),E=(N,b)=>{N&&Wt(N,n,9,b)},I={mode:s,persisted:o,beforeEnter(N){let b=a;if(!t.isMounted)if(r)b=m||a;else return;N._leaveCb&&N._leaveCb(!0);const L=T[C];L&&ci(i,L)&&L.el._leaveCb&&L.el._leaveCb(),E(b,[N])},enter(N){let b=l,L=c,G=u;if(!t.isMounted)if(r)b=d||l,L=_||c,G=S||u;else return;let O=!1;const fe=N._enterCb=ce=>{O||(O=!0,ce?E(G,[N]):E(L,[N]),I.delayedLeave&&I.delayedLeave(),N._enterCb=void 0)};b?(b(N,fe),b.length<=1&&fe()):fe()},leave(N,b){const L=String(i.key);if(N._enterCb&&N._enterCb(!0),t.isUnmounting)return b();E(h,[N]);let G=!1;const O=N._leaveCb=fe=>{G||(G=!0,b(),fe?E(g,[N]):E(p,[N]),N._leaveCb=void 0,T[L]===i&&delete T[L])};T[L]=i,f?(f(N,O),f.length<=1&&O()):O()},clone(N){return Ha(N,e,t,n)}};return I}function Go(i){if(xo(i))return i=yi(i),i.children=null,i}function mc(i){return xo(i)?i.children?i.children[0]:void 0:i}function Va(i,e){i.shapeFlag&6&&i.component?Va(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function jh(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===At?(o.patchFlag&128&&r++,n=n.concat(jh(o.children,e,a))):(e||o.type!==gn)&&n.push(a!=null?yi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function _o(i){return Oe(i)?{setup:i,name:i.name}:i}const Ks=i=>!!i.type.__asyncLoader,xo=i=>i.type.__isKeepAlive;function Rp(i,e){Jh(i,"a",e)}function Pp(i,e){Jh(i,"da",e)}function Jh(i,e,t=xt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(yo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)xo(r.parent.vnode)&&Dp(n,e,t,r),r=r.parent}}function Dp(i,e,t,n){const r=yo(e,i,n,!0);$h(()=>{dl(n[e],r)},t)}function yo(i,e,t=xt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;dr(),sr(t);const a=Wt(e,t,i,o);return gi(),pr(),a});return n?r.unshift(s):r.push(s),s}}const Dn=i=>(e,t=xt)=>(!qr||i==="sp")&&yo(i,e,t),Ip=Dn("bm"),Al=Dn("m"),Fp=Dn("bu"),Np=Dn("u"),Yh=Dn("bum"),$h=Dn("um"),Bp=Dn("sp"),Op=Dn("rtg"),zp=Dn("rtc");function Up(i,e=xt){yo("ec",i,e)}let ka=!0;function Hp(i){const e=Kh(i),t=i.proxy,n=i.ctx;ka=!1,e.beforeCreate&&gc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:S,destroyed:C,unmounted:T,render:E,renderTracked:I,renderTriggered:N,errorCaptured:b,serverPrefetch:L,expose:G,inheritAttrs:O,components:fe,directives:ce,filters:B}=e;if(c&&Vp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const X in o){const j=o[X];Oe(j)&&(n[X]=j.bind(t))}if(r){const X=r.call(t,t);mt(X)&&(i.data=bl(X))}if(ka=!0,s)for(const X in s){const j=s[X],q=Oe(j)?j.bind(t,t):Oe(j.get)?j.get.bind(t,t):Qt,ee=!Oe(j)&&Oe(j.set)?j.set.bind(t):Qt,le=xm({get:q,set:ee});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>le.value,set:se=>le.value=se})}if(a)for(const X in a)Zh(a[X],n,t,X);if(l){const X=Oe(l)?l.call(t):l;Reflect.ownKeys(X).forEach(j=>{Ep(j,X[j])})}u&&gc(u,i,"c");function k(X,j){Ie(j)?j.forEach(q=>X(q.bind(t))):j&&X(j.bind(t))}if(k(Ip,h),k(Al,f),k(Fp,p),k(Np,g),k(Rp,m),k(Pp,d),k(Up,b),k(zp,I),k(Op,N),k(Yh,S),k($h,T),k(Bp,L),Ie(G))if(G.length){const X=i.exposed||(i.exposed={});G.forEach(j=>{Object.defineProperty(X,j,{get:()=>t[j],set:q=>t[j]=q})})}else i.exposed||(i.exposed={});E&&i.render===Qt&&(i.render=E),O!=null&&(i.inheritAttrs=O),fe&&(i.components=fe),ce&&(i.directives=ce)}function Vp(i,e,t=Qt,n=!1){Ie(i)&&(i=Ga(i));for(const r in i){const s=i[r];let o;mt(s)?"default"in s?o=Vo(s.from||r,s.default,!0):o=Vo(s.from||r):o=Vo(s),Mt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function gc(i,e,t){Wt(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Zh(i,e,t,n){const r=n.includes(".")?qh(t,n):()=>t[n];if(pt(i)){const s=e[i];Oe(s)&&ko(r,s)}else if(Oe(i))ko(r,i.bind(t));else if(mt(i))if(Ie(i))i.forEach(s=>Zh(s,e,t,n));else{const s=Oe(i.handler)?i.handler.bind(t):e[i.handler];Oe(s)&&ko(r,s,i)}}function Kh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Qs(l,c,o,!0)),Qs(l,e,o)),s.set(e,l),l}function Qs(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Qs(i,s,t,!0),r&&r.forEach(o=>Qs(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=kp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const kp={data:_c,props:ai,emits:ai,methods:ai,computed:ai,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:ai,directives:ai,watch:Wp,provide:_c,inject:Gp};function _c(i,e){return e?i?function(){return wt(Oe(i)?i.call(this,this):i,Oe(e)?e.call(this,this):e)}:e:i}function Gp(i,e){return ai(Ga(i),Ga(e))}function Ga(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Tt(i,e){return i?[...new Set([].concat(i,e))]:e}function ai(i,e){return i?wt(wt(Object.create(null),i),e):e}function Wp(i,e){if(!i)return e;if(!e)return i;const t=wt(Object.create(null),i);for(const n in e)t[n]=Tt(i[n],e[n]);return t}function qp(i,e,t,n=!1){const r={},s={};Ys(s,vo,1),i.propsDefaults=Object.create(null),Qh(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:ip(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Xp(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Je(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(mo(i.emitsOptions,f))continue;const p=e[f];if(l)if(Ve(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=rr(f);r[g]=Wa(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Qh(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Ve(e,h)&&((u=fr(h))===h||!Ve(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Wa(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Ve(e,h)&&!0)&&(delete s[h],c=!0)}c&&Pn(i,"set","$attrs")}function Qh(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;r&&Ve(r,u=rr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:mo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Je(t),c=a||Ke;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Wa(r,l,h,c[h],i,!Ve(c,h))}}return o}function Wa(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ve(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Oe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(sr(r),n=c[t]=l.call(null,e),gi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===fr(t))&&(n=!0))}return n}function ef(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Oe(i)){const u=h=>{l=!0;const[f,p]=ef(h,e,!0);wt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Qi),Qi;if(Ie(s))for(let u=0;u<s.length;u++){const h=rr(s[u]);xc(h)&&(o[h]=Ke)}else if(s)for(const u in s){const h=rr(u);if(xc(h)){const f=s[u],p=o[h]=Ie(f)||Oe(f)?{type:f}:f;if(p){const g=bc(Boolean,p.type),m=bc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ve(p,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function xc(i){return i[0]!=="$"}function yc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function vc(i,e){return yc(i)===yc(e)}function bc(i,e){return Ie(e)?e.findIndex(t=>vc(t,i)):Oe(e)&&vc(e,i)?0:-1}const tf=i=>i[0]==="_"||i==="$stable",Cl=i=>Ie(i)?i.map(dn):[dn(i)],jp=(i,e,t)=>{const n=Ua((...r)=>Cl(e(...r)),t);return n._c=!1,n},nf=(i,e,t)=>{const n=i._ctx;for(const r in i){if(tf(r))continue;const s=i[r];if(Oe(s))e[r]=jp(r,s,n);else if(s!=null){const o=Cl(s);e[r]=()=>o}}},rf=(i,e)=>{const t=Cl(e);i.slots.default=()=>t},Jp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Je(e),Ys(e,"_",t)):nf(e,i.slots={})}else i.slots={},e&&rf(i,e);Ys(i.slots,vo,1)},Yp=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Ke;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,nf(e,r)),o=e}else e&&(rf(i,e),o={default:1});if(s)for(const a in r)!tf(a)&&!(a in o)&&delete r[a]};function ni(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(dr(),Wt(l,t,8,[i.el,a,i,e]),pr())}}function sf(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $p=0;function Zp(i,e){return function(n,r=null){Oe(n)||(n=Object.assign({},n)),r!=null&&!mt(r)&&(r=null);const s=sf(),o=new Set;let a=!1;const l=s.app={_uid:$p++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ym,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Nt(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Pl(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function qa(i,e,t,n,r=!1){if(Ie(i)){i.forEach((f,p)=>qa(f,e&&(Ie(e)?e[p]:e),t,n,r));return}if(Ks(n)&&!r)return;const s=n.shapeFlag&4?Pl(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,Ve(h,c)&&(h[c]=null)):Mt(c)&&(c.value=null)),Oe(l))Xn(l,a,12,[o,u]);else{const f=pt(l),p=Mt(l);if(f||p){const g=()=>{if(i.f){const m=f?u[l]:l.value;r?Ie(m)&&dl(m,s):Ie(m)?m.includes(s)||m.push(s):f?(u[l]=[s],Ve(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Ve(h,l)&&(h[l]=o)):Mt(l)&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,It(g,t)):g()}}}const It=Sp;function Kp(i){return Qp(i)}function Qp(i,e){const t=Ld();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Qt,cloneNode:g,insertStaticContent:m}=i,d=(v,w,D,F=null,V=null,J=null,$=!1,ne=null,re=!!w.dynamicChildren)=>{if(v===w)return;v&&!ci(v,w)&&(F=Ee(v),ae(v,V,J,!0),v=null),w.patchFlag===-2&&(re=!1,w.dynamicChildren=null);const{type:y,ref:x,shapeFlag:P}=w;switch(y){case Ll:_(v,w,D,F);break;case gn:S(v,w,D,F);break;case Wo:v==null&&C(w,D,F,$);break;case At:ce(v,w,D,F,V,J,$,ne,re);break;default:P&1?I(v,w,D,F,V,J,$,ne,re):P&6?B(v,w,D,F,V,J,$,ne,re):(P&64||P&128)&&y.process(v,w,D,F,V,J,$,ne,re,he)}x!=null&&V&&qa(x,v&&v.ref,J,w||v,!w)},_=(v,w,D,F)=>{if(v==null)n(w.el=a(w.children),D,F);else{const V=w.el=v.el;w.children!==v.children&&c(V,w.children)}},S=(v,w,D,F)=>{v==null?n(w.el=l(w.children||""),D,F):w.el=v.el},C=(v,w,D,F)=>{[v.el,v.anchor]=m(v.children,w,D,F,v.el,v.anchor)},T=({el:v,anchor:w},D,F)=>{let V;for(;v&&v!==w;)V=f(v),n(v,D,F),v=V;n(w,D,F)},E=({el:v,anchor:w})=>{let D;for(;v&&v!==w;)D=f(v),r(v),v=D;r(w)},I=(v,w,D,F,V,J,$,ne,re)=>{$=$||w.type==="svg",v==null?N(w,D,F,V,J,$,ne,re):G(v,w,V,J,$,ne,re)},N=(v,w,D,F,V,J,$,ne)=>{let re,y;const{type:x,props:P,shapeFlag:U,transition:Z,patchFlag:oe,dirs:_e}=v;if(v.el&&g!==void 0&&oe===-1)re=v.el=g(v.el);else{if(re=v.el=o(v.type,J,P&&P.is,P),U&8?u(re,v.children):U&16&&L(v.children,re,null,F,V,J&&x!=="foreignObject",$,ne),_e&&ni(v,null,F,"created"),P){for(const ye in P)ye!=="value"&&!Ws(ye)&&s(re,ye,null,P[ye],J,v.children,F,V,Fe);"value"in P&&s(re,"value",null,P.value),(y=P.onVnodeBeforeMount)&&cn(y,F,v)}b(re,v,v.scopeId,$,F)}_e&&ni(v,null,F,"beforeMount");const H=(!V||V&&!V.pendingBranch)&&Z&&!Z.persisted;H&&Z.beforeEnter(re),n(re,w,D),((y=P&&P.onVnodeMounted)||H||_e)&&It(()=>{y&&cn(y,F,v),H&&Z.enter(re),_e&&ni(v,null,F,"mounted")},V)},b=(v,w,D,F,V)=>{if(D&&p(v,D),F)for(let J=0;J<F.length;J++)p(v,F[J]);if(V){let J=V.subTree;if(w===J){const $=V.vnode;b(v,$,$.scopeId,$.slotScopeIds,V.parent)}}},L=(v,w,D,F,V,J,$,ne,re=0)=>{for(let y=re;y<v.length;y++){const x=v[y]=ne?Wn(v[y]):dn(v[y]);d(null,x,w,D,F,V,J,$,ne)}},G=(v,w,D,F,V,J,$)=>{const ne=w.el=v.el;let{patchFlag:re,dynamicChildren:y,dirs:x}=w;re|=v.patchFlag&16;const P=v.props||Ke,U=w.props||Ke;let Z;D&&ii(D,!1),(Z=U.onVnodeBeforeUpdate)&&cn(Z,D,w,v),x&&ni(w,v,D,"beforeUpdate"),D&&ii(D,!0);const oe=V&&w.type!=="foreignObject";if(y?O(v.dynamicChildren,y,ne,D,F,oe,J):$||q(v,w,ne,null,D,F,oe,J,!1),re>0){if(re&16)fe(ne,w,P,U,D,F,V);else if(re&2&&P.class!==U.class&&s(ne,"class",null,U.class,V),re&4&&s(ne,"style",P.style,U.style,V),re&8){const _e=w.dynamicProps;for(let H=0;H<_e.length;H++){const ye=_e[H],Te=P[ye],ve=U[ye];(ve!==Te||ye==="value")&&s(ne,ye,Te,ve,V,v.children,D,F,Fe)}}re&1&&v.children!==w.children&&u(ne,w.children)}else!$&&y==null&&fe(ne,w,P,U,D,F,V);((Z=U.onVnodeUpdated)||x)&&It(()=>{Z&&cn(Z,D,w,v),x&&ni(w,v,D,"updated")},F)},O=(v,w,D,F,V,J,$)=>{for(let ne=0;ne<w.length;ne++){const re=v[ne],y=w[ne],x=re.el&&(re.type===At||!ci(re,y)||re.shapeFlag&70)?h(re.el):D;d(re,y,x,null,F,V,J,$,!0)}},fe=(v,w,D,F,V,J,$)=>{if(D!==F){for(const ne in F){if(Ws(ne))continue;const re=F[ne],y=D[ne];re!==y&&ne!=="value"&&s(v,ne,y,re,$,w.children,V,J,Fe)}if(D!==Ke)for(const ne in D)!Ws(ne)&&!(ne in F)&&s(v,ne,D[ne],null,$,w.children,V,J,Fe);"value"in F&&s(v,"value",D.value,F.value)}},ce=(v,w,D,F,V,J,$,ne,re)=>{const y=w.el=v?v.el:a(""),x=w.anchor=v?v.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:Z}=w;Z&&(ne=ne?ne.concat(Z):Z),v==null?(n(y,D,F),n(x,D,F),L(w.children,D,x,V,J,$,ne,re)):P>0&&P&64&&U&&v.dynamicChildren?(O(v.dynamicChildren,U,D,V,J,$,ne),(w.key!=null||V&&w===V.subTree)&&of(v,w,!0)):q(v,w,D,x,V,J,$,ne,re)},B=(v,w,D,F,V,J,$,ne,re)=>{w.slotScopeIds=ne,v==null?w.shapeFlag&512?V.ctx.activate(w,D,F,$,re):Q(w,D,F,V,J,$,re):k(v,w,re)},Q=(v,w,D,F,V,J,$)=>{const ne=v.component=hm(v,F,V);if(xo(v)&&(ne.ctx.renderer=he),dm(ne),ne.asyncDep){if(V&&V.registerDep(ne,X),!v.el){const re=ne.subTree=Nt(gn);S(null,re,w,D)}return}X(ne,v,w,D,V,J,$)},k=(v,w,D)=>{const F=w.component=v.component;if(bp(v,w,D))if(F.asyncDep&&!F.asyncResolved){j(F,w,D);return}else F.next=w,dp(F.update),F.update();else w.component=v.component,w.el=v.el,F.vnode=w},X=(v,w,D,F,V,J,$)=>{const ne=()=>{if(v.isMounted){let{next:x,bu:P,u:U,parent:Z,vnode:oe}=v,_e=x,H;ii(v,!1),x?(x.el=oe.el,j(v,x,$)):x=oe,P&&Uo(P),(H=x.props&&x.props.onVnodeBeforeUpdate)&&cn(H,Z,x,oe),ii(v,!0);const ye=Ho(v),Te=v.subTree;v.subTree=ye,d(Te,ye,h(Te.el),Ee(Te),v,V,J),x.el=ye.el,_e===null&&Mp(v,ye.el),U&&It(U,V),(H=x.props&&x.props.onVnodeUpdated)&&It(()=>cn(H,Z,x,oe),V)}else{let x;const{el:P,props:U}=w,{bm:Z,m:oe,parent:_e}=v,H=Ks(w);if(ii(v,!1),Z&&Uo(Z),!H&&(x=U&&U.onVnodeBeforeMount)&&cn(x,_e,w),ii(v,!0),P&&te){const ye=()=>{v.subTree=Ho(v),te(P,v.subTree,v,V,null)};H?w.type.__asyncLoader().then(()=>!v.isUnmounted&&ye()):ye()}else{const ye=v.subTree=Ho(v);d(null,ye,D,F,v,V,J),w.el=ye.el}if(oe&&It(oe,V),!H&&(x=U&&U.onVnodeMounted)){const ye=w;It(()=>cn(x,_e,ye),V)}w.shapeFlag&256&&v.a&&It(v.a,V),v.isMounted=!0,w=D=F=null}},re=v.effect=new _l(ne,()=>zh(v.update),v.scope),y=v.update=re.run.bind(re);y.id=v.uid,ii(v,!0),y()},j=(v,w,D)=>{w.component=v;const F=v.vnode.props;v.vnode=w,v.next=null,Xp(v,w.props,F,D),Yp(v,w.children,D),dr(),Tl(void 0,v.update),pr()},q=(v,w,D,F,V,J,$,ne,re=!1)=>{const y=v&&v.children,x=v?v.shapeFlag:0,P=w.children,{patchFlag:U,shapeFlag:Z}=w;if(U>0){if(U&128){le(y,P,D,F,V,J,$,ne,re);return}else if(U&256){ee(y,P,D,F,V,J,$,ne,re);return}}Z&8?(x&16&&Fe(y,V,J),P!==y&&u(D,P)):x&16?Z&16?le(y,P,D,F,V,J,$,ne,re):Fe(y,V,J,!0):(x&8&&u(D,""),Z&16&&L(P,D,F,V,J,$,ne,re))},ee=(v,w,D,F,V,J,$,ne,re)=>{v=v||Qi,w=w||Qi;const y=v.length,x=w.length,P=Math.min(y,x);let U;for(U=0;U<P;U++){const Z=w[U]=re?Wn(w[U]):dn(w[U]);d(v[U],Z,D,null,V,J,$,ne,re)}y>x?Fe(v,V,J,!0,!1,P):L(w,D,F,V,J,$,ne,re,P)},le=(v,w,D,F,V,J,$,ne,re)=>{let y=0;const x=w.length;let P=v.length-1,U=x-1;for(;y<=P&&y<=U;){const Z=v[y],oe=w[y]=re?Wn(w[y]):dn(w[y]);if(ci(Z,oe))d(Z,oe,D,null,V,J,$,ne,re);else break;y++}for(;y<=P&&y<=U;){const Z=v[P],oe=w[U]=re?Wn(w[U]):dn(w[U]);if(ci(Z,oe))d(Z,oe,D,null,V,J,$,ne,re);else break;P--,U--}if(y>P){if(y<=U){const Z=U+1,oe=Z<x?w[Z].el:F;for(;y<=U;)d(null,w[y]=re?Wn(w[y]):dn(w[y]),D,oe,V,J,$,ne,re),y++}}else if(y>U)for(;y<=P;)ae(v[y],V,J,!0),y++;else{const Z=y,oe=y,_e=new Map;for(y=oe;y<=U;y++){const Me=w[y]=re?Wn(w[y]):dn(w[y]);Me.key!=null&&_e.set(Me.key,y)}let H,ye=0;const Te=U-oe+1;let ve=!1,R=0;const pe=new Array(Te);for(y=0;y<Te;y++)pe[y]=0;for(y=Z;y<=P;y++){const Me=v[y];if(ye>=Te){ae(Me,V,J,!0);continue}let xe;if(Me.key!=null)xe=_e.get(Me.key);else for(H=oe;H<=U;H++)if(pe[H-oe]===0&&ci(Me,w[H])){xe=H;break}xe===void 0?ae(Me,V,J,!0):(pe[xe-oe]=y+1,xe>=R?R=xe:ve=!0,d(Me,w[xe],D,null,V,J,$,ne,re),ye++)}const me=ve?em(pe):Qi;for(H=me.length-1,y=Te-1;y>=0;y--){const Me=oe+y,xe=w[Me],Ce=Me+1<x?w[Me+1].el:F;pe[y]===0?d(null,xe,D,Ce,V,J,$,ne,re):ve&&(H<0||y!==me[H]?se(xe,D,Ce,2):H--)}}},se=(v,w,D,F,V=null)=>{const{el:J,type:$,transition:ne,children:re,shapeFlag:y}=v;if(y&6){se(v.component.subTree,w,D,F);return}if(y&128){v.suspense.move(w,D,F);return}if(y&64){$.move(v,w,D,he);return}if($===At){n(J,w,D);for(let P=0;P<re.length;P++)se(re[P],w,D,F);n(v.anchor,w,D);return}if($===Wo){T(v,w,D);return}if(F!==2&&y&1&&ne)if(F===0)ne.beforeEnter(J),n(J,w,D),It(()=>ne.enter(J),V);else{const{leave:P,delayLeave:U,afterLeave:Z}=ne,oe=()=>n(J,w,D),_e=()=>{P(J,()=>{oe(),Z&&Z()})};U?U(J,oe,_e):_e()}else n(J,w,D)},ae=(v,w,D,F=!1,V=!1)=>{const{type:J,props:$,ref:ne,children:re,dynamicChildren:y,shapeFlag:x,patchFlag:P,dirs:U}=v;if(ne!=null&&qa(ne,null,D,v,!0),x&256){w.ctx.deactivate(v);return}const Z=x&1&&U,oe=!Ks(v);let _e;if(oe&&(_e=$&&$.onVnodeBeforeUnmount)&&cn(_e,w,v),x&6)K(v.component,D,F);else{if(x&128){v.suspense.unmount(D,F);return}Z&&ni(v,null,w,"beforeUnmount"),x&64?v.type.remove(v,w,D,V,he,F):y&&(J!==At||P>0&&P&64)?Fe(y,w,D,!1,!0):(J===At&&P&384||!V&&x&16)&&Fe(re,w,D),F&&be(v)}(oe&&(_e=$&&$.onVnodeUnmounted)||Z)&&It(()=>{_e&&cn(_e,w,v),Z&&ni(v,null,w,"unmounted")},D)},be=v=>{const{type:w,el:D,anchor:F,transition:V}=v;if(w===At){Se(D,F);return}if(w===Wo){E(v);return}const J=()=>{r(D),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:$,delayLeave:ne}=V,re=()=>$(D,J);ne?ne(v.el,J,re):re()}else J()},Se=(v,w)=>{let D;for(;v!==w;)D=f(v),r(v),v=D;r(w)},K=(v,w,D)=>{const{bum:F,scope:V,update:J,subTree:$,um:ne}=v;F&&Uo(F),V.stop(),J&&(J.active=!1,ae($,v,w,D)),ne&&It(ne,w),It(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Fe=(v,w,D,F=!1,V=!1,J=0)=>{for(let $=J;$<v.length;$++)ae(v[$],w,D,F,V)},Ee=v=>v.shapeFlag&6?Ee(v.component.subTree):v.shapeFlag&128?v.suspense.next():f(v.anchor||v.el),Pe=(v,w,D)=>{v==null?w._vnode&&ae(w._vnode,null,null,!0):d(w._vnode||null,v,w,null,null,null,D),Vh(),w._vnode=v},he={p:d,um:ae,m:se,r:be,mt:Q,mc:L,pc:q,pbc:O,n:Ee,o:i};let Ne,te;return e&&([Ne,te]=e(he)),{render:Pe,hydrate:Ne,createApp:Zp(Pe,Ne)}}function ii({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function of(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Wn(r[s]),a.el=o.el),t||of(o,a))}}function em(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const tm=i=>i.__isTeleport,nm=Symbol(),At=Symbol(void 0),Ll=Symbol(void 0),gn=Symbol(void 0),Wo=Symbol(void 0),Hr=[];let mi=null;function mn(i=!1){Hr.push(mi=i?null:[])}function im(){Hr.pop(),mi=Hr[Hr.length-1]||null}let eo=1;function Mc(i){eo+=i}function af(i){return i.dynamicChildren=eo>0?mi||Qi:null,im(),eo>0&&mi&&mi.push(i),i}function Ln(i,e,t,n,r,s){return af(lt(i,e,t,n,r,s,!0))}function rm(i,e,t,n,r){return af(Nt(i,e,t,n,r,!0))}function lf(i){return i?i.__v_isVNode===!0:!1}function ci(i,e){return i.type===e.type&&i.key===e.key}const vo="__vInternal",cf=({key:i})=>i!=null?i:null,qs=({ref:i,ref_key:e,ref_for:t})=>i!=null?pt(i)||Mt(i)||Oe(i)?{i:Ft,r:i,k:e,f:!!t}:i:null;function lt(i,e=null,t=null,n=0,r=null,s=i===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&cf(e),ref:e&&qs(e),scopeId:go,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Rl(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),eo>0&&!o&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const Nt=sm;function sm(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===nm)&&(i=gn),lf(i)){const a=yi(i,e,!0);return t&&Rl(a,t),a}if(_m(i)&&(i=i.__vccOpts),e){e=om(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=lo(a)),mt(l)&&(Fh(l)&&!Ie(l)&&(l=wt({},l)),e.style=hl(l))}const o=pt(i)?1:wp(i)?128:tm(i)?64:mt(i)?4:Oe(i)?2:0;return lt(i,e,t,n,r,o,s,!0)}function om(i){return i?Fh(i)||vo in i?wt({},i):i:null}function yi(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?am(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&cf(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(qs(e)):[r,qs(e)]:qs(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==At?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&yi(i.ssContent),ssFallback:i.ssFallback&&yi(i.ssFallback),el:i.el,anchor:i.anchor}}function bo(i=" ",e=0){return Nt(Ll,null,i,e)}function dn(i){return i==null||typeof i=="boolean"?Nt(gn):Ie(i)?Nt(At,null,i.slice()):typeof i=="object"?Wn(i):Nt(Ll,null,String(i))}function Wn(i){return i.el===null||i.memo?i:yi(i)}function Rl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Rl(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(vo in e)?e._ctx=Ft:r===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Ft},t=32):(e=String(e),n&64?(t=16,e=[bo(e)]):t=8);i.children=e,i.shapeFlag|=t}function am(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=lo([e.class,n.class]));else if(r==="style")e.style=hl([e.style,n.style]);else if(co(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function cn(i,e,t,n=null){Wt(i,e,7,[t,n])}function wc(i,e,t,n){let r;const s=t&&t[n];if(Ie(i)||pt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(mt(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}function Sc(i,e,t={},n,r){if(Ft.isCE||Ft.parent&&Ks(Ft.parent)&&Ft.parent.isCE)return Nt("slot",e==="default"?null:{name:e},n&&n());let s=i[e];s&&s._c&&(s._d=!1),mn();const o=s&&uf(s(t)),a=rm(At,{key:t.key||`_${e}`},o||(n?n():[]),o&&i._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function uf(i){return i.some(e=>lf(e)?!(e.type===gn||e.type===At&&!uf(e.children)):!0)?i:null}const Xa=i=>i?hf(i)?Pl(i)||i.proxy:Xa(i.parent):null,to=wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Xa(i.parent),$root:i=>Xa(i.root),$emit:i=>i.emit,$options:i=>Kh(i),$forceUpdate:i=>()=>zh(i.update),$nextTick:i=>hp.bind(i.proxy),$watch:i=>Tp.bind(i)}),lm={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Ke&&Ve(n,e))return o[e]=1,n[e];if(r!==Ke&&Ve(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ve(c,e))return o[e]=3,s[e];if(t!==Ke&&Ve(t,e))return o[e]=4,t[e];ka&&(o[e]=0)}}const u=to[e];let h,f;if(u)return e==="$attrs"&&Vt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ke&&Ve(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ve(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==Ke&&Ve(r,e)?(r[e]=t,!0):n!==Ke&&Ve(n,e)?(n[e]=t,!0):Ve(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Ke&&Ve(i,o)||e!==Ke&&Ve(e,o)||(a=s[0])&&Ve(a,o)||Ve(n,o)||Ve(to,o)||Ve(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ve(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}},cm=sf();let um=0;function hm(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||cm,s={uid:um++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ef(n,r),emitsOptions:Gh(n,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:n.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gp.bind(null,s),i.ce&&i.ce(s),s}let xt=null;const fm=()=>xt||Ft,sr=i=>{xt=i,i.scope.on()},gi=()=>{xt&&xt.scope.off(),xt=null};function hf(i){return i.vnode.shapeFlag&4}let qr=!1;function dm(i,e=!1){qr=e;const{props:t,children:n}=i.vnode,r=hf(i);qp(i,t,r,e),Jp(i,n);const s=r?pm(i,e):void 0;return qr=!1,s}function pm(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Nh(new Proxy(i.ctx,lm));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?gm(i):null;sr(i),dr();const s=Xn(n,i,0,[i.props,r]);if(pr(),gi(),xh(s)){if(s.then(gi,gi),e)return s.then(o=>{Ec(i,o,e)}).catch(o=>{po(o,i,0)});i.asyncDep=s}else Ec(i,s,e)}else ff(i,e)}function Ec(i,e,t){Oe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:mt(e)&&(i.setupState=Bh(e)),ff(i,t)}let Tc;function ff(i,e,t){const n=i.type;if(!i.render){if(!e&&Tc&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=wt(wt({isCustomElement:s,delimiters:a},o),l);n.render=Tc(r,c)}}i.render=n.render||Qt}sr(i),dr(),Hp(i),pr(),gi()}function mm(i){return new Proxy(i.attrs,{get(e,t){return Vt(i,"get","$attrs"),e[t]}})}function gm(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=mm(i))},slots:i.slots,emit:i.emit,expose:e}}function Pl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Bh(Nh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in to)return to[t](i)}}))}function _m(i){return Oe(i)&&"__vccOpts"in i}const xm=(i,e)=>cp(i,e,qr),ym="3.2.33",vm="http://www.w3.org/2000/svg",ui=typeof document!="undefined"?document:null,Ac=ui&&ui.createElement("template"),bm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?ui.createElementNS(vm,i):ui.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>ui.createTextNode(i),createComment:i=>ui.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ui.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ac.innerHTML=n?`<svg>${i}</svg>`:i;const a=Ac.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Mm(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function wm(i,e,t){const n=i.style,r=pt(t);if(t&&!r){for(const s in t)ja(n,s,t[s]);if(e&&!pt(e))for(const s in e)t[s]==null&&ja(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Cc=/\s*!important$/;function ja(i,e,t){if(Ie(t))t.forEach(n=>ja(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Sm(i,e);Cc.test(t)?i.setProperty(fr(n),t.replace(Cc,""),"important"):i[n]=t}}const Lc=["Webkit","Moz","ms"],qo={};function Sm(i,e){const t=qo[e];if(t)return t;let n=rr(e);if(n!=="filter"&&n in i)return qo[e]=n;n=bh(n);for(let r=0;r<Lc.length;r++){const s=Lc[r]+n;if(s in i)return qo[e]=s}return e}const Rc="http://www.w3.org/1999/xlink";function Em(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Rc,e.slice(6,e.length)):i.setAttributeNS(Rc,e,t);else{const s=xd(e);t==null||s&&!ph(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Tm(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=ph(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[df,Am]=(()=>{let i=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(i=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Ja=0;const Cm=Promise.resolve(),Lm=()=>{Ja=0},Rm=()=>Ja||(Cm.then(Lm),Ja=df());function Pm(i,e,t,n){i.addEventListener(e,t,n)}function Dm(i,e,t,n){i.removeEventListener(e,t,n)}function Im(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Fm(e);if(n){const c=s[e]=Nm(n,r);Pm(i,a,c,l)}else o&&(Dm(i,a,o,l),s[e]=void 0)}}const Pc=/(?:Once|Passive|Capture)$/;function Fm(i){let e;if(Pc.test(i)){e={};let t;for(;t=i.match(Pc);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[fr(i.slice(2)),e]}function Nm(i,e){const t=n=>{const r=n.timeStamp||df();(Am||r>=t.attached-1)&&Wt(Bm(n,t.value),e,5,[n])};return t.value=i,t.attached=Rm(),t}function Bm(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Dc=/^on[a-z]/,Om=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?Mm(i,n,r):e==="style"?wm(i,t,n):co(e)?fl(e)||Im(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zm(i,e,n,r))?Tm(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Em(i,e,n,r))};function zm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Dc.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Dc.test(e)&&pt(t)?!1:e in i}const Um={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lp.props;const Hm=wt({patchProp:Om},bm);let Ic;function Vm(){return Ic||(Ic=Kp(Hm))}const km=(...i)=>{const e=Vm().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Gm(n);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Gm(i){return pt(i)?document.querySelector(i):i}var Wm="/assets/photo.8cec8a7e.jpg";var Mo=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};const qm={class:"typed-container"},Xm={class:"typed-out"},jm=_o({props:{content:null},setup(i){return(e,t)=>(mn(),Ln("div",qm,[lt("div",Xm,mh(i.content),1)]))}});var Jm=Mo(jm,[["__scopeId","data-v-2e4f198c"]]);const Ym={},$m={class:"flip-card rounded-[15px]"},Zm={class:"flip-card-inner text-center"},Km={class:"flip-card-front grid items-center"},Qm={class:"flip-card-back grid items-center uppercase"};function eg(i,e){return mn(),Ln("div",$m,[lt("div",Zm,[lt("div",Km,[Sc(i.$slots,"card-front",{},void 0,!0)]),lt("div",Qm,[Sc(i.$slots,"card-back",{},void 0,!0)])])])}var tg=Mo(Ym,[["render",eg],["__scopeId","data-v-5c0c7ec8"]]);const ng={class:"columns-3"},ig={class:"inline-block"},rg=_o({setup(i){const e=[{icon:"bi bi-code-slash",labels:["Laravel","Symfony","vue.js"]},{icon:"bi bi-gear",labels:["Linux","gitlab ci/cd","Docker"]},{icon:"bi bi-nut",labels:["clean archi","ddd","cqrs","rest"]}];return(t,n)=>(mn(),Ln("div",ng,[(mn(),Ln(At,null,wc(e,r=>Nt(tg,{key:r},{"card-front":Ua(()=>[lt("h1",ig,[lt("i",{class:lo(r.icon),style:{"font-size":"2rem"}},null,2)])]),"card-back":Ua(()=>[(mn(!0),Ln(At,null,wc(r.labels,s=>(mn(),Ln("span",{key:s,class:"inline-block"},mh(s),1))),128))]),_:2},1024)),64))]))}});const sg={},Dl=i=>(_p("data-v-519d5454"),i=i(),xp(),i),og={class:"flex flex-row"},ag=Dl(()=>lt("a",{class:"basis-1/3",target:"_blank",href:"https://www.linkedin.com/in/sanctorum-thomas"},[lt("i",{class:"bi bi-linkedin",role:"img","aria-label":"Linkedin"}),bo(" Linkedin ")],-1)),lg=Dl(()=>lt("a",{class:"basis-1/3",target:"_blank",href:"https://medium.com/@thomas-sanctorum"},[lt("i",{class:"bi bi-medium",role:"img","aria-label":"Medium"}),bo(" Medium ")],-1)),cg=Dl(()=>lt("a",{class:"basis-1/3",target:"_blank",href:"https://github.com/ezamlinux"},[lt("i",{class:"bi bi-github",role:"img","aria-label":"GitHub"}),bo(" Github ")],-1)),ug=[ag,lg,cg];function hg(i,e){return mn(),Ln("footer",og,ug)}var fg=Mo(sg,[["render",hg],["__scopeId","data-v-519d5454"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="140",dg=0,Fc=1,pg=2,pf=1,mg=2,Nr=3,Xr=0,en=1,or=2,mf=1,jn=0,nr=1,Nc=2,Bc=3,Oc=4,gg=5,ji=100,_g=101,xg=102,zc=103,Uc=104,yg=200,vg=201,bg=202,Mg=203,gf=204,_f=205,wg=206,Sg=207,Eg=208,Tg=209,Ag=210,Cg=0,Lg=1,Rg=2,Ya=3,Pg=4,Dg=5,Ig=6,Fg=7,wo=0,Ng=1,Bg=2,Rn=0,Og=1,zg=2,Ug=3,Hg=4,Vg=5,xf=300,ar=301,lr=302,$a=303,Za=304,So=306,Ka=1e3,Zt=1001,Qa=1002,ft=1003,Hc=1004,Vc=1005,Ct=1006,kg=1007,Eo=1008,vi=1009,Gg=1010,Wg=1011,jr=1012,qg=1013,Xs=1014,fi=1015,Jr=1016,Xg=1017,jg=1018,ir=1020,Jg=1021,Yg=1022,Kt=1023,$g=1024,Zg=1025,_i=1026,cr=1027,Kg=1028,Qg=1029,e_=1030,t_=1031,n_=1033,Xo=33776,jo=33777,Jo=33778,Yo=33779,kc=35840,Gc=35841,Wc=35842,qc=35843,i_=36196,Xc=37492,jc=37496,Jc=37808,Yc=37809,$c=37810,Zc=37811,Kc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,lu=36492,r_=2200,s_=2201,o_=2202,no=2300,io=2301,$o=2302,Yi=2400,$i=2401,ro=2402,Fl=2500,yf=2501,a_=0,Zn=3e3,Qe=3001,l_=3200,c_=3201,mr=0,u_=1,Tn="srgb",di="srgb-linear",Zo=7680,h_=519,Yr=35044,so=35048,cu="300 es",el=1035;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _t=[];for(let i=0;i<256;i++)_t[i]=(i<16?"0":"")+i.toString(16);const Ko=Math.PI/180,tl=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function f_(i,e){return(i%e+e)%e}function Qo(i,e,t){return(1-t)*i+t*e}function uu(i){return(i&i-1)===0&&i!==0}function nl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class ue{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ue.prototype.isVector2=!0;class yt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=r[0],d=r[3],_=r[6],S=r[1],C=r[4],T=r[7],E=r[2],I=r[5],N=r[8];return s[0]=o*m+a*S+l*E,s[3]=o*d+a*C+l*I,s[6]=o*_+a*T+l*N,s[1]=c*m+u*S+h*E,s[4]=c*d+u*C+h*I,s[7]=c*_+u*T+h*N,s[2]=f*m+p*S+g*E,s[5]=f*d+p*C+g*I,s[8]=f*_+p*T+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}yt.prototype.isMatrix3=!0;function vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ea={[Tn]:{[di]:xi},[di]:{[Tn]:js}},Xt={legacyMode:!0,get workingColorSpace(){return di},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ea[e]&&ea[e][t]!==void 0){const n=ea[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},jt={h:0,s:0,l:0},fs={h:0,s:0,l:0};function ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ds(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class we{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=di){return this.r=e,this.g=t,this.b=n,Xt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=di){if(e=f_(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Xt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Xt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Xt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Tn){const n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Xt.fromWorkingColorSpace(ds(this,at),e),bt(at.r*255,0,255)<<16^bt(at.g*255,0,255)<<8^bt(at.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=di){Xt.fromWorkingColorSpace(ds(this,at),t);const n=at.r,r=at.g,s=at.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=di){return Xt.fromWorkingColorSpace(ds(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Tn){return Xt.fromWorkingColorSpace(ds(this,at),e),e!==Tn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(fs);const n=Qo(jt.h,fs.h,t),r=Qo(jt.s,fs.s,t),s=Qo(jt.l,fs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}we.NAMES=bf;we.prototype.isColor=!0;we.prototype.r=1;we.prototype.g=1;we.prototype.b=1;let Ai;class Mi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=$r("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nl{constructor(e=null){this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(na(r[o].image)):s.push(na(r[o]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Mi.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Nl.prototype.isSource=!0;let d_=0;class gt extends bi{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Zt,r=Zt,s=Ct,o=Eo,a=Kt,l=vi,c=1,u=Zn){super(),Object.defineProperty(this,"id",{value:d_++}),this.uuid=_n(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=xf;gt.prototype.isTexture=!0;class Ze{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,T=(p+1)/2,E=(_+1)/2,I=(u+f)/4,N=(h+m)/4,b=(g+d)/4;return C>T&&C>E?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=I/n,s=N/n):T>E?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=I/r,s=b/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=N/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-m)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ze.prototype.isVector4=!0;class Ht extends bi{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new gt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.prototype.isWebGLRenderTarget=!0;class To extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}To.prototype.isDataArrayTexture=!0;class p_ extends Ht{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new To(null,e,t,n),this.texture.isRenderTargetTexture=!0}}p_.prototype.isWebGLArrayRenderTarget=!0;class Bl extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Bl.prototype.isData3DTexture=!0;class m_ extends Ht{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Bl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}m_.prototype.isWebGL3DRenderTarget=!0;class g_ extends Ht{constructor(e,t,n,r={}){super(e,t,r);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}g_.prototype.isWebGLMultipleRenderTargets=!0;class Bt{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const _=l*f+c*p+u*g+h*m,S=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const E=Math.sqrt(C),I=Math.atan2(E,_*S);d=Math.sin(d*I)/E,a=Math.sin(a*I)/E}const T=a*S;if(l=l*d+f*T,c=c*d+p*T,u=u*d+g*T,h=h*d+m*T,d===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}Bt.prototype.isQuaternion=!0;class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}A.prototype.isVector3=!0;const ia=new A,hu=new Bt;class nn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ri.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox),ra.applyMatrix4(e.matrixWorld),this.union(ra);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),ps.subVectors(this.max,Er),Ci.subVectors(e.a,Er),Li.subVectors(e.b,Er),Ri.subVectors(e.c,Er),Nn.subVectors(Li,Ci),Bn.subVectors(Ri,Li),si.subVectors(Ci,Ri);let t=[0,-Nn.z,Nn.y,0,-Bn.z,Bn.y,0,-si.z,si.y,Nn.z,0,-Nn.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-Nn.y,Nn.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!sa(t,Ci,Li,Ri,ps)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ci,Li,Ri,ps))?!1:(ms.crossVectors(Nn,Bn),t=[ms.x,ms.y,ms.z],sa(t,Ci,Li,Ri,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}nn.prototype.isBox3=!0;const vn=[new A,new A,new A,new A,new A,new A,new A,new A],ri=new A,ra=new nn,Ci=new A,Li=new A,Ri=new A,Nn=new A,Bn=new A,si=new A,Er=new A,ps=new A,ms=new A,oi=new A;function sa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){oi.fromArray(i,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const __=new nn,fu=new A,gs=new A,oa=new A;class gr{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):__.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(oa.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?gs.set(0,0,1).multiplyScalar(e.radius):gs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(fu.copy(e.center).add(gs)),this.expandByPoint(fu.copy(e.center).sub(gs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new A,aa=new A,_s=new A,On=new A,la=new A,xs=new A,ca=new A;class _r{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.direction).multiplyScalar(t).add(this.origin),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){aa.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),On.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_s),a=On.dot(this.direction),l=-On.dot(_s),c=On.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(_s).multiplyScalar(f).add(aa),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),r=bn.dot(bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,r,s){la.subVectors(t,e),xs.subVectors(n,e),ca.crossVectors(la,xs);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(xs.crossVectors(On,xs));if(l<0)return null;const c=a*this.direction.dot(la.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(ca);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,y_)}lookAt(e,t,n){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),zn.crossVectors(n,Ot),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),zn.crossVectors(n,Ot)),zn.normalize(),ys.crossVectors(Ot,zn),r[0]=zn.x,r[4]=ys.x,r[8]=Ot.x,r[1]=zn.y,r[5]=ys.y,r[9]=Ot.y,r[2]=zn.z,r[6]=ys.z,r[10]=Ot.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],S=n[3],C=n[7],T=n[11],E=n[15],I=r[0],N=r[4],b=r[8],L=r[12],G=r[1],O=r[5],fe=r[9],ce=r[13],B=r[2],Q=r[6],k=r[10],X=r[14],j=r[3],q=r[7],ee=r[11],le=r[15];return s[0]=o*I+a*G+l*B+c*j,s[4]=o*N+a*O+l*Q+c*q,s[8]=o*b+a*fe+l*k+c*ee,s[12]=o*L+a*ce+l*X+c*le,s[1]=u*I+h*G+f*B+p*j,s[5]=u*N+h*O+f*Q+p*q,s[9]=u*b+h*fe+f*k+p*ee,s[13]=u*L+h*ce+f*X+p*le,s[2]=g*I+m*G+d*B+_*j,s[6]=g*N+m*O+d*Q+_*q,s[10]=g*b+m*fe+d*k+_*ee,s[14]=g*L+m*ce+d*X+_*le,s[3]=S*I+C*G+T*B+E*j,s[7]=S*N+C*O+T*Q+E*q,s[11]=S*b+C*fe+T*k+E*ee,s[15]=S*L+C*ce+T*X+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+m*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+d*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],S=h*d*c-m*f*c+m*l*p-a*d*p-h*l*_+a*f*_,C=g*f*c-u*d*c-g*l*p+o*d*p+u*l*_-o*f*_,T=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,E=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,I=t*S+n*C+r*T+s*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=S*N,e[1]=(m*f*s-h*d*s-m*r*p+n*d*p+h*r*_-n*f*_)*N,e[2]=(a*d*s-m*l*s+m*r*c-n*d*c-a*r*_+n*l*_)*N,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*N,e[4]=C*N,e[5]=(u*d*s-g*f*s+g*r*p-t*d*p-u*r*_+t*f*_)*N,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*N,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*N,e[8]=T*N,e[9]=(g*h*s-u*m*s-g*n*p+t*m*p+u*n*_-t*h*_)*N,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*_+t*a*_)*N,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*N,e[12]=E*N,e[13]=(u*m*r-g*h*r+g*n*f-t*m*f-u*n*d+t*h*d)*N,e[14]=(g*a*r-o*m*r-g*n*l+t*m*l+o*n*d-t*a*d)*N,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,m=o*u,d=o*h,_=a*h,S=l*c,C=l*u,T=l*h,E=n.x,I=n.y,N=n.z;return r[0]=(1-(m+_))*E,r[1]=(p+T)*E,r[2]=(g-C)*E,r[3]=0,r[4]=(p-T)*I,r[5]=(1-(f+_))*I,r[6]=(d+S)*I,r[7]=0,r[8]=(g+C)*N,r[9]=(d-S)*N,r[10]=(1-(f+m))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const o=Pi.set(r[4],r[5],r[6]).length(),a=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/o,h=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Ae.prototype.isMatrix4=!0;const Pi=new A,Jt=new Ae,x_=new A(0,0,0),y_=new A(1,1,1),zn=new A,ys=new A,Ot=new A,du=new Ae,pu=new Bt;class wi{constructor(e=0,t=0,n=0,r=wi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.prototype.isEuler=!0;wi.DefaultOrder="XYZ";wi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v_=0;const mu=new A,Di=new Bt,Mn=new Ae,vs=new A,Tr=new A,b_=new A,M_=new Bt,gu=new A(1,0,0),_u=new A(0,1,0),xu=new A(0,0,1),w_={type:"added"},yu={type:"removed"};class Ye extends bi{constructor(){super(),Object.defineProperty(this,"id",{value:v_++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const e=new A,t=new wi,n=new Bt,r=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new yt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Tr,vs,this.up):Mn.lookAt(vs,Tr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(Mn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,b_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ye.DefaultUp=new A(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.prototype.isObject3D=!0;const Yt=new A,wn=new A,ua=new A,Sn=new A,Ii=new A,Fi=new A,vu=new A,ha=new A,fa=new A,da=new A;class ot{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),wn.subVectors(n,t),ua.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(wn),l=Yt.dot(ua),c=wn.dot(wn),u=wn.dot(ua),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Sn),l.set(0,0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),wn.subVectors(e,t),Yt.cross(wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Yt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ot.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,n),Fi.subVectors(s,n),ha.subVectors(e,n);const l=Ii.dot(ha),c=Fi.dot(ha);if(l<=0&&c<=0)return t.copy(n);fa.subVectors(e,r);const u=Ii.dot(fa),h=Fi.dot(fa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);da.subVectors(e,s);const p=Ii.dot(da),g=Fi.dot(da);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fi,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return vu.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(vu,a);const _=1/(d+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(Ii,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let S_=0;class ut extends bi{constructor(){super(),Object.defineProperty(this,"id",{value:S_++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=nr,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gf,this.blendDst=_f,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===mf;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Xr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ut.prototype.isMaterial=!0;ut.fromType=function(){return null};class Ao extends ut{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Ao.prototype.isMeshBasicMaterial=!0;const st=new A,bs=new ue;class ct{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new we),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ue),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new A),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}ct.prototype.isBufferAttribute=!0;class wf extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sf extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class E_ extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}E_.prototype.isFloat16BufferAttribute=!0;class dt extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let T_=0;const Gt=new Ae,pa=new Ye,Ni=new A,zt=new nn,Ar=new nn,ht=new A;class tt extends bi{constructor(){super(),Object.defineProperty(this,"id",{value:T_++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Sf:wf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(zt.min,Ar.min),zt.expandByPoint(ht),ht.addVectors(zt.max,Ar.max),zt.expandByPoint(ht)):(zt.expandByPoint(Ar.min),zt.expandByPoint(Ar.max))}zt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),ht.add(Ni)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let G=0;G<a;G++)c[G]=new A,u[G]=new A;const h=new A,f=new A,p=new A,g=new ue,m=new ue,d=new ue,_=new A,S=new A;function C(G,O,fe){h.fromArray(r,G*3),f.fromArray(r,O*3),p.fromArray(r,fe*3),g.fromArray(o,G*2),m.fromArray(o,O*2),d.fromArray(o,fe*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const ce=1/(m.x*d.y-d.x*m.y);!isFinite(ce)||(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(ce),S.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(ce),c[G].add(_),c[O].add(_),c[fe].add(_),u[G].add(S),u[O].add(S),u[fe].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let G=0,O=T.length;G<O;++G){const fe=T[G],ce=fe.start,B=fe.count;for(let Q=ce,k=ce+B;Q<k;Q+=3)C(n[Q+0],n[Q+1],n[Q+2])}const E=new A,I=new A,N=new A,b=new A;function L(G){N.fromArray(s,G*3),b.copy(N);const O=c[G];E.copy(O),E.sub(N.multiplyScalar(N.dot(O))).normalize(),I.crossVectors(b,O);const ce=I.dot(u[G])<0?-1:1;l[G*4]=E.x,l[G*4+1]=E.y,l[G*4+2]=E.z,l[G*4+3]=ce}for(let G=0,O=T.length;G<O;++G){const fe=T[G],ce=fe.start,B=fe.count;for(let Q=ce,k=ce+B;Q<k;Q+=3)L(n[Q+0]),L(n[Q+1]),L(n[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new ct(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}tt.prototype.isBufferGeometry=!0;const bu=new Ae,Bi=new _r,ma=new gr,Un=new A,Hn=new A,Vn=new A,ga=new A,_a=new A,xa=new A,Ms=new A,ws=new A,Ss=new A,Es=new ue,Ts=new ue,As=new ue,ya=new A,Cs=new A;class Rt extends Ye{constructor(e=new tt,t=new Ao){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),e.ray.intersectsSphere(ma)===!1)||(bu.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(bu),n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],S=r[_.materialIndex],C=Math.max(_.start,g.start),T=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=C,I=T;E<I;E+=3){const N=a.getX(E),b=a.getX(E+1),L=a.getX(E+2);o=Ls(this,S,e,Bi,l,c,u,h,f,N,b,L),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,S=d;_<S;_+=3){const C=a.getX(_),T=a.getX(_+1),E=a.getX(_+2);o=Ls(this,r,e,Bi,l,c,u,h,f,C,T,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],S=r[_.materialIndex],C=Math.max(_.start,g.start),T=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=C,I=T;E<I;E+=3){const N=E,b=E+1,L=E+2;o=Ls(this,S,e,Bi,l,c,u,h,f,N,b,L),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,S=d;_<S;_+=3){const C=_,T=_+1,E=_+2;o=Ls(this,r,e,Bi,l,c,u,h,f,C,T,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Rt.prototype.isMesh=!0;function A_(i,e,t,n,r,s,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==or,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:i}}function Ls(i,e,t,n,r,s,o,a,l,c,u,h){Un.fromBufferAttribute(r,c),Hn.fromBufferAttribute(r,u),Vn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){Ms.set(0,0,0),ws.set(0,0,0),Ss.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=f[g],_=s[g];d!==0&&(ga.fromBufferAttribute(_,c),_a.fromBufferAttribute(_,u),xa.fromBufferAttribute(_,h),o?(Ms.addScaledVector(ga,d),ws.addScaledVector(_a,d),Ss.addScaledVector(xa,d)):(Ms.addScaledVector(ga.sub(Un),d),ws.addScaledVector(_a.sub(Hn),d),Ss.addScaledVector(xa.sub(Vn),d)))}Un.add(Ms),Hn.add(ws),Vn.add(Ss)}i.isSkinnedMesh&&(i.boneTransform(c,Un),i.boneTransform(u,Hn),i.boneTransform(h,Vn));const p=A_(i,e,t,n,Un,Hn,Vn,ya);if(p){a&&(Es.fromBufferAttribute(a,c),Ts.fromBufferAttribute(a,u),As.fromBufferAttribute(a,h),p.uv=ot.getUV(ya,Un,Hn,Vn,Es,Ts,As,new ue)),l&&(Es.fromBufferAttribute(l,c),Ts.fromBufferAttribute(l,u),As.fromBufferAttribute(l,h),p.uv2=ot.getUV(ya,Un,Hn,Vn,Es,Ts,As,new ue));const g={a:c,b:u,c:h,normal:new A,materialIndex:0};ot.getNormal(Un,Hn,Vn,g.normal),p.face=g}return p}class ts extends tt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(m,d,_,S,C,T,E,I,N,b,L){const G=T/N,O=E/b,fe=T/2,ce=E/2,B=I/2,Q=N+1,k=b+1;let X=0,j=0;const q=new A;for(let ee=0;ee<k;ee++){const le=ee*O-ce;for(let se=0;se<Q;se++){const ae=se*G-fe;q[m]=ae*S,q[d]=le*C,q[_]=B,c.push(q.x,q.y,q.z),q[m]=0,q[d]=0,q[_]=I>0?1:-1,u.push(q.x,q.y,q.z),h.push(se/N),h.push(1-ee/b),X+=1}}for(let ee=0;ee<b;ee++)for(let le=0;le<N;le++){const se=f+le+Q*ee,ae=f+le+Q*(ee+1),be=f+(le+1)+Q*(ee+1),Se=f+(le+1)+Q*ee;l.push(se,ae,Se),l.push(ae,be,Se),j+=6}a.addGroup(p,j,L),p+=j,f+=X}}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function vt(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const r in n)e[r]=n[r]}return e}const C_={clone:ur,merge:vt};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends ut{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=L_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}tn.prototype.isShaderMaterial=!0;class Ol extends Ye{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ol.prototype.isCamera=!0;class Lt extends Ol{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Lt.prototype.isPerspectiveCamera=!0;const Oi=90,zi=1;class zl extends Ye{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Lt(Oi,zi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(1,0,0)),this.add(r);const s=new Lt(Oi,zi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new A(-1,0,0)),this.add(s);const o=new Lt(Oi,zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);const a=new Lt(Oi,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);const l=new Lt(Oi,zi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new Lt(Oi,zi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Co extends gt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,r,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Co.prototype.isCubeTexture=!0;class Ef extends Ht{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Co(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ts(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:jn});s.uniforms.tEquirect.value=t;const o=new Rt(r,s),a=t.minFilter;return t.minFilter===Eo&&(t.minFilter=Ct),new zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}Ef.prototype.isWebGLCubeRenderTarget=!0;const va=new A,P_=new A,D_=new yt;class An{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=va.subVectors(n,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||D_.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}An.prototype.isPlane=!0;const Ui=new gr,Rs=new A;class Lo{constructor(e=new An,t=new An,n=new An,r=new An,s=new An,o=new An){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],S=n[14],C=n[15];return t[0].setComponents(a-r,h-l,m-f,C-d).normalize(),t[1].setComponents(a+r,h+l,m+f,C+d).normalize(),t[2].setComponents(a+s,h+c,m+p,C+_).normalize(),t[3].setComponents(a-s,h-c,m-p,C-_).normalize(),t[4].setComponents(a-o,h-u,m-g,C-S).normalize(),t[5].setComponents(a+o,h+u,m+g,C+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Rs.x=r.normal.x>0?e.max.x:e.min.x,Rs.y=r.normal.y>0?e.max.y:e.min.y,Rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function I_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ro extends tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const S=_*f-o;for(let C=0;C<c;C++){const T=C*h-s;g.push(T,-S,0),m.push(0,0,1),d.push(C/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const C=S+c*_,T=S+c*(_+1),E=S+1+c*(_+1),I=S+1+c*_;p.push(C,T,I),p.push(T,E,I)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(d,2))}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H_="vec3 transformed = vec3( position );",V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,G_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Q_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_x=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,vx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ax=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,M0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,w0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,S0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,E0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,T0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,A0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,N0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,U0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:F_,alphamap_pars_fragment:N_,alphatest_fragment:B_,alphatest_pars_fragment:O_,aomap_fragment:z_,aomap_pars_fragment:U_,begin_vertex:H_,beginnormal_vertex:V_,bsdfs:k_,bumpmap_pars_fragment:G_,clipping_planes_fragment:W_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:j_,color_fragment:J_,color_pars_fragment:Y_,color_pars_vertex:$_,color_vertex:Z_,common:K_,cube_uv_reflection_fragment:Q_,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,encodings_fragment:sx,encodings_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:bx,envmap_vertex:hx,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_fragment:_x,lightmap_pars_fragment:xx,lights_lambert_vertex:yx,lights_pars_begin:vx,lights_toon_fragment:Mx,lights_toon_pars_fragment:wx,lights_phong_fragment:Sx,lights_phong_pars_fragment:Ex,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Cx,lights_fragment_maps:Lx,lights_fragment_end:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Fx,map_fragment:Nx,map_pars_fragment:Bx,map_particle_fragment:Ox,map_particle_pars_fragment:zx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Hx,morphcolor_vertex:Vx,morphnormal_vertex:kx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:qx,normal_fragment_maps:Xx,normal_pars_fragment:jx,normal_pars_vertex:Jx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Qx,output_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:r0,dithering_pars_fragment:s0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:u0,shadowmask_pars_fragment:h0,skinbase_vertex:f0,skinning_pars_vertex:d0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:v0,transmission_pars_fragment:b0,uv_pars_fragment:M0,uv_pars_vertex:w0,uv_vertex:S0,uv2_pars_fragment:E0,uv2_pars_vertex:T0,uv2_vertex:A0,worldpos_vertex:C0,background_vert:L0,background_frag:R0,cube_vert:P0,cube_frag:D0,depth_vert:I0,depth_frag:F0,distanceRGBA_vert:N0,distanceRGBA_frag:B0,equirect_vert:O0,equirect_frag:z0,linedashed_vert:U0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:k0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:q0,meshmatcap_frag:X0,meshnormal_vert:j0,meshnormal_frag:J0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:Z0,meshphysical_frag:K0,meshtoon_vert:Q0,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:ry,sprite_vert:sy,sprite_frag:oy},ge={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},pn={basic:{uniforms:vt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:vt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:vt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:vt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:vt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:vt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:vt([ge.points,ge.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:vt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:vt([ge.common,ge.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:vt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:vt([ge.sprite,ge.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:vt([ge.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:vt([ge.common,ge.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:vt([ge.lights,ge.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};pn.physical={uniforms:vt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function ay(i,e,t,n,r,s){const o=new we(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function p(m,d){let _=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=e.get(S));const C=i.xr,T=C.getSession&&C.getSession();T&&T.environmentBlendMode==="additive"&&(S=null),S===null?g(o,a):S&&S.isColor&&(g(S,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===So)?(c===void 0&&(c=new Rt(new ts(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ur(pn.cube.uniforms),vertexShader:pn.cube.vertexShader,fragmentShader:pn.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Rt(new Ro(2,2),new tn({name:"BackgroundMaterial",uniforms:ur(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function ly(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(B,Q,k,X,j){let q=!1;if(o){const ee=m(X,k,Q);c!==ee&&(c=ee,p(c.object)),q=_(B,X,k,j),q&&S(B,X,k,j)}else{const ee=Q.wireframe===!0;(c.geometry!==X.id||c.program!==k.id||c.wireframe!==ee)&&(c.geometry=X.id,c.program=k.id,c.wireframe=ee,q=!0)}j!==null&&t.update(j,34963),(q||u)&&(u=!1,b(B,Q,k,X),j!==null&&i.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function m(B,Q,k){const X=k.wireframe===!0;let j=a[B.id];j===void 0&&(j={},a[B.id]=j);let q=j[Q.id];q===void 0&&(q={},j[Q.id]=q);let ee=q[X];return ee===void 0&&(ee=d(f()),q[X]=ee),ee}function d(B){const Q=[],k=[],X=[];for(let j=0;j<r;j++)Q[j]=0,k[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:k,attributeDivisors:X,object:B,attributes:{},index:null}}function _(B,Q,k,X){const j=c.attributes,q=Q.attributes;let ee=0;const le=k.getAttributes();for(const se in le)if(le[se].location>=0){const be=j[se];let Se=q[se];if(Se===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(Se=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(Se=B.instanceColor)),be===void 0||be.attribute!==Se||Se&&be.data!==Se.data)return!0;ee++}return c.attributesNum!==ee||c.index!==X}function S(B,Q,k,X){const j={},q=Q.attributes;let ee=0;const le=k.getAttributes();for(const se in le)if(le[se].location>=0){let be=q[se];be===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(be=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(be=B.instanceColor));const Se={};Se.attribute=be,be&&be.data&&(Se.data=be.data),j[se]=Se,ee++}c.attributes=j,c.attributesNum=ee,c.index=X}function C(){const B=c.newAttributes;for(let Q=0,k=B.length;Q<k;Q++)B[Q]=0}function T(B){E(B,0)}function E(B,Q){const k=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;k[B]=1,X[B]===0&&(i.enableVertexAttribArray(B),X[B]=1),j[B]!==Q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Q),j[B]=Q)}function I(){const B=c.newAttributes,Q=c.enabledAttributes;for(let k=0,X=Q.length;k<X;k++)Q[k]!==B[k]&&(i.disableVertexAttribArray(k),Q[k]=0)}function N(B,Q,k,X,j,q){n.isWebGL2===!0&&(k===5124||k===5125)?i.vertexAttribIPointer(B,Q,k,j,q):i.vertexAttribPointer(B,Q,k,X,j,q)}function b(B,Q,k,X){if(n.isWebGL2===!1&&(B.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const j=X.attributes,q=k.getAttributes(),ee=Q.defaultAttributeValues;for(const le in q){const se=q[le];if(se.location>=0){let ae=j[le];if(ae===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor)),ae!==void 0){const be=ae.normalized,Se=ae.itemSize,K=t.get(ae);if(K===void 0)continue;const Fe=K.buffer,Ee=K.type,Pe=K.bytesPerElement;if(ae.isInterleavedBufferAttribute){const he=ae.data,Ne=he.stride,te=ae.offset;if(he.isInstancedInterleavedBuffer){for(let v=0;v<se.locationSize;v++)E(se.location+v,he.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let v=0;v<se.locationSize;v++)T(se.location+v);i.bindBuffer(34962,Fe);for(let v=0;v<se.locationSize;v++)N(se.location+v,Se/se.locationSize,Ee,be,Ne*Pe,(te+Se/se.locationSize*v)*Pe)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<se.locationSize;he++)E(se.location+he,ae.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<se.locationSize;he++)T(se.location+he);i.bindBuffer(34962,Fe);for(let he=0;he<se.locationSize;he++)N(se.location+he,Se/se.locationSize,Ee,be,Se*Pe,Se/se.locationSize*he*Pe)}}else if(ee!==void 0){const be=ee[le];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(se.location,be);break;case 3:i.vertexAttrib3fv(se.location,be);break;case 4:i.vertexAttrib4fv(se.location,be);break;default:i.vertexAttrib1fv(se.location,be)}}}}I()}function L(){fe();for(const B in a){const Q=a[B];for(const k in Q){const X=Q[k];for(const j in X)g(X[j].object),delete X[j];delete Q[k]}delete a[B]}}function G(B){if(a[B.id]===void 0)return;const Q=a[B.id];for(const k in Q){const X=Q[k];for(const j in X)g(X[j].object),delete X[j];delete Q[k]}delete a[B.id]}function O(B){for(const Q in a){const k=a[Q];if(k[B.id]===void 0)continue;const X=k[B.id];for(const j in X)g(X[j].object),delete X[j];delete k[B.id]}}function fe(){ce(),u=!0,c!==l&&(c=l,p(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:fe,resetDefaultState:ce,dispose:L,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:T,disableUnusedAttributes:I}}function cy(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function uy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),S=i.getParameter(36349),C=f>0,T=o||e.has("OES_texture_float"),E=C&&T,I=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:C,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:I}}function hy(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new An,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const S=s?0:n,C=S*4;let T=_.clippingState||null;l.value=T,T=u(g,f,C,p);for(let E=0;E!==C;++E)T[E]=t[E];_.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<_)&&(d=new Float32Array(_));for(let C=0,T=p;C!==m;++C,T+=4)o.copy(h[C]).applyMatrix4(S,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function fy(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=ar:a===Za&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===$a||a===Za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ef(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ul extends Ol{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ul.prototype.isOrthographicCamera=!0;const Zi=4,Mu=[.125,.215,.35,.446,.526,.582],hi=20,ba=new Ul,wu=new we;let Ma=null;const li=(1+Math.sqrt(5))/2,Hi=1/li,Su=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,li,Hi),new A(0,li,-Hi),new A(Hi,0,li),new A(-Hi,0,li),new A(li,Hi,0),new A(-li,Hi,0)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ma=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Jr,format:Kt,encoding:Zn,depthBuffer:!1},r=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dy(s)),this._blurMaterial=py(s,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,r){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wu),u.toneMapping=Rn,u.autoClear=!1;const p=new Ao({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Rt(new ts,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(wu),m=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const C=this._cubeSize;Ps(r,S*C,_>2?C:0,C,C),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ar||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Su[(r-1)%Su.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):hi;d>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${hi}`);const _=[];let S=0;for(let N=0;N<hi;++N){const b=N/m,L=Math.exp(-b*b/2);_.push(L),N===0?S+=L:N<d&&(S+=2*L)}for(let N=0;N<_.length;N++)_[N]=_[N]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const T=this._sizeLods[r],E=3*T*(r>C-Zi?r-C+Zi:0),I=4*(this._cubeSize-T);Ps(t,E,I,3*T,2*T),l.setRenderTarget(t),l.render(h,ba)}}function dy(i){const e=[],t=[],n=[];let r=i;const s=i-Zi+1+Mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Zi?l=Mu[o-i+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,S=new Float32Array(m*g*p),C=new Float32Array(d*g*p),T=new Float32Array(_*g*p);for(let I=0;I<p;I++){const N=I%3*2/3-1,b=I>2?0:-1,L=[N,b,0,N+2/3,b,0,N+2/3,b+1,0,N,b,0,N+2/3,b+1,0,N,b+1,0];S.set(L,m*g*I),C.set(f,d*g*I);const G=[I,I,I,I,I,I];T.set(G,_*g*I)}const E=new tt;E.setAttribute("position",new ct(S,m)),E.setAttribute("uv",new ct(C,d)),E.setAttribute("faceIndex",new ct(T,_)),e.push(E),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tu(i,e,t){const n=new Ht(i,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function py(i,e,t){const n=new Float32Array(hi),r=new A(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Au(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Cu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function my(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===Za,u=l===ar||l===lr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Eu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Eu(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function _y(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const S=p.array;m=p.version;for(let C=0,T=S.length;C<T;C+=3){const E=S[C+0],I=S[C+1],N=S[C+2];f.push(E,I,I,N,N,E)}}else{const S=g.array;m=g.version;for(let C=0,T=S.length/3-1;C<T;C+=3){const E=C+0,I=C+1,N=C+2;f.push(E,I,I,N,N,E)}}const d=new(vf(f)?Sf:wf)(f,1);d.version=m;const _=s.get(h);_&&e.remove(_),s.set(h,d)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xy(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let m,d;if(r)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function yy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vy(i,e){return i[0]-e[0]}function by(i,e){return Math.abs(e[1])-Math.abs(i[1])}function wa(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function My(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let k=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var g=k;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let G=0;T===!0&&(G=1),E===!0&&(G=2),I===!0&&(G=3);let O=u.attributes.position.count*G,fe=1;O>e.maxTextureSize&&(fe=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ce=new Float32Array(O*fe*4*d),B=new To(ce,O,fe,d);B.type=fi,B.needsUpdate=!0;const Q=G*4;for(let X=0;X<d;X++){const j=N[X],q=b[X],ee=L[X],le=O*fe*4*X;for(let se=0;se<j.count;se++){const ae=se*Q;T===!0&&(o.fromBufferAttribute(j,se),j.normalized===!0&&wa(o,j),ce[le+ae+0]=o.x,ce[le+ae+1]=o.y,ce[le+ae+2]=o.z,ce[le+ae+3]=0),E===!0&&(o.fromBufferAttribute(q,se),q.normalized===!0&&wa(o,q),ce[le+ae+4]=o.x,ce[le+ae+5]=o.y,ce[le+ae+6]=o.z,ce[le+ae+7]=0),I===!0&&(o.fromBufferAttribute(ee,se),ee.normalized===!0&&wa(o,ee),ce[le+ae+8]=o.x,ce[le+ae+9]=o.y,ce[le+ae+10]=o.z,ce[le+ae+11]=ee.itemSize===4?o.w:1)}}_={count:d,texture:B,size:new ue(O,fe)},s.set(u,_),u.addEventListener("dispose",k)}let S=0;for(let T=0;T<p.length;T++)S+=p[T];const C=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let E=0;E<m;E++)d[E]=[E,0];n[u.id]=d}for(let E=0;E<m;E++){const I=d[E];I[0]=E,I[1]=p[E]}d.sort(by);for(let E=0;E<8;E++)E<m&&d[E][1]?(a[E][0]=d[E][0],a[E][1]=d[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(vy);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const I=a[E],N=I[0],b=I[1];N!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+E)!==_[N]&&u.setAttribute("morphTarget"+E,_[N]),S&&u.getAttribute("morphNormal"+E)!==S[N]&&u.setAttribute("morphNormal"+E,S[N]),r[E]=b,C+=b):(_&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),S&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const T=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function wy(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Af=new gt,Cf=new To,Lf=new Bl,Rf=new Co,Lu=[],Ru=[],Pu=new Float32Array(16),Du=new Float32Array(9),Iu=new Float32Array(4);function xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Lu[r];if(s===void 0&&(s=new Float32Array(r),Lu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Po(i,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Cy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),Dt(t,n)}}function Ly(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Du.set(n),i.uniformMatrix3fv(this.addr,!1,Du),Dt(t,n)}}function Ry(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),Dt(t,n)}}function Py(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dy(i,e){const t=this.cache;Pt(t,e)||(i.uniform2iv(this.addr,e),Dt(t,e))}function Iy(i,e){const t=this.cache;Pt(t,e)||(i.uniform3iv(this.addr,e),Dt(t,e))}function Fy(i,e){const t=this.cache;Pt(t,e)||(i.uniform4iv(this.addr,e),Dt(t,e))}function Ny(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function By(i,e){const t=this.cache;Pt(t,e)||(i.uniform2uiv(this.addr,e),Dt(t,e))}function Oy(i,e){const t=this.cache;Pt(t,e)||(i.uniform3uiv(this.addr,e),Dt(t,e))}function zy(i,e){const t=this.cache;Pt(t,e)||(i.uniform4uiv(this.addr,e),Dt(t,e))}function Uy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Af,r)}function Hy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lf,r)}function Vy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rf,r)}function ky(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cf,r)}function Gy(i){switch(i){case 5126:return Sy;case 35664:return Ey;case 35665:return Ty;case 35666:return Ay;case 35674:return Cy;case 35675:return Ly;case 35676:return Ry;case 5124:case 35670:return Py;case 35667:case 35671:return Dy;case 35668:case 35672:return Iy;case 35669:case 35673:return Fy;case 5125:return Ny;case 36294:return By;case 36295:return Oy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return ky}}function Wy(i,e){i.uniform1fv(this.addr,e)}function qy(i,e){const t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function Xy(i,e){const t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function jy(i,e){const t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Jy(i,e){const t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yy(i,e){const t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $y(i,e){const t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zy(i,e){i.uniform1iv(this.addr,e)}function Ky(i,e){i.uniform2iv(this.addr,e)}function Qy(i,e){i.uniform3iv(this.addr,e)}function ev(i,e){i.uniform4iv(this.addr,e)}function tv(i,e){i.uniform1uiv(this.addr,e)}function nv(i,e){i.uniform2uiv(this.addr,e)}function iv(i,e){i.uniform3uiv(this.addr,e)}function rv(i,e){i.uniform4uiv(this.addr,e)}function sv(i,e,t){const n=e.length,r=Po(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Af,r[s])}function ov(i,e,t){const n=e.length,r=Po(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Lf,r[s])}function av(i,e,t){const n=e.length,r=Po(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Rf,r[s])}function lv(i,e,t){const n=e.length,r=Po(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Cf,r[s])}function cv(i){switch(i){case 5126:return Wy;case 35664:return qy;case 35665:return Xy;case 35666:return jy;case 35674:return Jy;case 35675:return Yy;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Ky;case 35668:case 35672:return Qy;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=Gy(e.type)}function hv(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=cv(e.type)}function Pf(i){this.id=i,this.seq=[],this.map={}}Pf.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const Sa=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function fv(i,e,t){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),o=Sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fu(t,c===void 0?new uv(a,i,e):new hv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Pf(a),Fu(t,h)),t=h}}}function Jn(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);fv(r,s,this)}}Jn.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Jn.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};Jn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Jn.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function Nu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let dv=0;function pv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++)n.push(o+1+": "+t[o]);return n.join(`
`)}function mv(i){switch(i){case Zn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Bu(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[0]);return t.toUpperCase()+`

`+r+`

`+pv(i.getShaderSource(e),o)}else return r}function gv(i,e){const t=mv(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _v(i,e){let t;switch(e){case Og:t="Linear";break;case zg:t="Reinhard";break;case Ug:t="OptimizedCineon";break;case Hg:t="ACESFilmic";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xv(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Br).join(`
`)}function yv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vv(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Br(i){return i!==""}function Ou(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(bv,Mv)}function Mv(i,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return il(t)}const wv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(Sv,Df).replace(wv,Ev)}function Ev(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Df(i,e,t,n)}function Df(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function Av(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Lv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ng:e="ENVMAP_BLENDING_MIX";break;case Bg:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Tv(t),c=Av(t),u=Cv(t),h=Lv(t),f=Rv(t),p=t.isWebGL2?"":xv(t),g=yv(s),m=r.createProgram();let d,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Br).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Br).join(`
`),_.length>0&&(_+=`
`)):(d=[Hu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),_=[p,Hu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Rn?_v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,gv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=il(o),o=Ou(o,t),o=zu(o,t),a=il(a),a=Ou(a,t),a=zu(a,t),o=Uu(o),a=Uu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=S+d+o,T=S+_+a,E=Nu(r,35633,C),I=Nu(r,35632,T);if(r.attachShader(m,E),r.attachShader(m,I),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),G=r.getShaderInfoLog(E).trim(),O=r.getShaderInfoLog(I).trim();let fe=!0,ce=!0;if(r.getProgramParameter(m,35714)===!1){fe=!1;const B=Bu(r,E,"vertex"),Q=Bu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+B+`
`+Q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(G===""||O==="")&&(ce=!1);ce&&(this.diagnostics={runnable:fe,programLog:L,vertexShader:{log:G,prefix:d},fragmentShader:{log:O,prefix:_}})}r.deleteShader(E),r.deleteShader(I);let N;this.getUniforms=function(){return N===void 0&&(N=new Jn(r,m)),N};let b;return this.getAttributes=function(){return b===void 0&&(b=vv(r,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=I,this}let Dv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Fv(e);t.set(e,n)}return t.get(e)}}class Fv{constructor(e){this.id=Dv++,this.code=e,this.usedTimes=0}}function Nv(i,e,t,n,r,s,o){const a=new Mf,l=new Iv,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,L,G,O,fe){const ce=O.fog,B=fe.geometry,Q=b.isMeshStandardMaterial?O.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),X=!!k&&k.mapping===So?k.image.height:null,j=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=q!==void 0?q.length:0;let le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let se,ae,be,Se;if(j){const he=pn[j];se=he.vertexShader,ae=he.fragmentShader}else se=b.vertexShader,ae=b.fragmentShader,l.update(b),be=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const K=i.getRenderTarget(),Fe=b.alphaTest>0,Ee=b.clearcoat>0;return{isWebGL2:u,shaderID:j,shaderName:b.type,vertexShader:se,fragmentShader:ae,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:fe.isInstancedMesh===!0,instancingColor:fe.isInstancedMesh===!0&&fe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:K===null?i.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:Zn,map:!!b.map,matcap:!!b.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:X,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===u_,tangentSpaceNormalMap:b.normalMapType===mr,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Qe,clearcoat:Ee,clearcoatMap:Ee&&!!b.clearcoatMap,clearcoatRoughnessMap:Ee&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===nr,alphaMap:!!b.alphaMap,alphaTest:Fe,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!B.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!ce,useFog:b.fog===!0,fogExp2:ce&&ce.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:fe.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:le,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:Rn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===or,flipSided:b.side===en,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)L.push(G),L.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(_(L,b),S(L,b),L.push(i.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function _(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.combine),b.push(L.vertexUvs),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function S(b,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.displacementMap&&a.enable(18),L.specularMap&&a.enable(19),L.roughnessMap&&a.enable(20),L.metalnessMap&&a.enable(21),L.gradientMap&&a.enable(22),L.alphaMap&&a.enable(23),L.alphaTest&&a.enable(24),L.vertexColors&&a.enable(25),L.vertexAlphas&&a.enable(26),L.vertexUvs&&a.enable(27),L.vertexTangents&&a.enable(28),L.uvsVertexOnly&&a.enable(29),L.fog&&a.enable(30),b.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),b.push(a.mask)}function C(b){const L=g[b.type];let G;if(L){const O=pn[L];G=C_.clone(O.uniforms)}else G=b.uniforms;return G}function T(b,L){let G;for(let O=0,fe=c.length;O<fe;O++){const ce=c[O];if(ce.cacheKey===L){G=ce,++G.usedTimes;break}}return G===void 0&&(G=new Pv(i,L,b,s),c.push(G)),G}function E(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),b.destroy()}}function I(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:T,releaseProgram:E,releaseShaderCache:I,programs:c,dispose:N}}function Bv(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ov(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ku(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,m,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),e++,_}function a(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Ov),n.length>1&&n.sort(f||Vu),r.length>1&&r.sort(f||Vu)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function zv(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new ku,i.set(n,[s])):r>=i.get(n).length?(s=new ku,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new we};break;case"SpotLight":t={position:new A,direction:new A,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Hv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vv=0;function kv(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Gv(i,e){const t=new Uv,n=Hv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new A);const s=new A,o=new Ae,a=new Ae;function l(u,h){let f=0,p=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let m=0,d=0,_=0,S=0,C=0,T=0,E=0,I=0;u.sort(kv);const N=h!==!0?Math.PI:1;for(let L=0,G=u.length;L<G;L++){const O=u[L],fe=O.color,ce=O.intensity,B=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=fe.r*ce*N,p+=fe.g*ce*N,g+=fe.b*ce*N;else if(O.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(O.sh.coefficients[k],ce);else if(O.isDirectionalLight){const k=t.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*N),O.castShadow){const X=O.shadow,j=n.get(O);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=O.shadow.matrix,T++}r.directional[m]=k,m++}else if(O.isSpotLight){const k=t.get(O);if(k.position.setFromMatrixPosition(O.matrixWorld),k.color.copy(fe).multiplyScalar(ce*N),k.distance=B,k.coneCos=Math.cos(O.angle),k.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),k.decay=O.decay,O.castShadow){const X=O.shadow,j=n.get(O);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,r.spotShadow[_]=j,r.spotShadowMap[_]=Q,r.spotShadowMatrix[_]=O.shadow.matrix,I++}r.spot[_]=k,_++}else if(O.isRectAreaLight){const k=t.get(O);k.color.copy(fe).multiplyScalar(ce),k.halfWidth.set(O.width*.5,0,0),k.halfHeight.set(0,O.height*.5,0),r.rectArea[S]=k,S++}else if(O.isPointLight){const k=t.get(O);if(k.color.copy(O.color).multiplyScalar(O.intensity*N),k.distance=O.distance,k.decay=O.decay,O.castShadow){const X=O.shadow,j=n.get(O);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,r.pointShadow[d]=j,r.pointShadowMap[d]=Q,r.pointShadowMatrix[d]=O.shadow.matrix,E++}r.point[d]=k,d++}else if(O.isHemisphereLight){const k=t.get(O);k.skyColor.copy(O.color).multiplyScalar(ce*N),k.groundColor.copy(O.groundColor).multiplyScalar(ce*N),r.hemi[C]=k,C++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==m||b.pointLength!==d||b.spotLength!==_||b.rectAreaLength!==S||b.hemiLength!==C||b.numDirectionalShadows!==T||b.numPointShadows!==E||b.numSpotShadows!==I)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=S,r.point.length=d,r.hemi.length=C,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=I,b.directionalLength=m,b.pointLength=d,b.spotLength=_,b.rectAreaLength=S,b.hemiLength=C,b.numDirectionalShadows=T,b.numPointShadows=E,b.numSpotShadows=I,r.version=Vv++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let S=0,C=u.length;S<C;S++){const T=u[S];if(T.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),f++}else if(T.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const E=r.rectArea[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(T.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(_),p++}else if(T.isHemisphereLight){const E=r.hemi[d];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Gu(i,e){const t=new Gv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wv(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Gu(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new Gu(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vl extends ut{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Vl.prototype.isMeshDepthMaterial=!0;class kl extends ut{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}kl.prototype.isMeshDistanceMaterial=!0;const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function If(i,e,t){let n=new Lo;const r=new ue,s=new ue,o=new Ze,a=new Vl({depthPacking:c_}),l=new kl,c={},u=t.maxTextureSize,h={0:en,1:Xr,2:or},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:qv,fragmentShader:Xv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new tt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Rt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pf,this.render=function(T,E,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const N=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(jn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let O=0,fe=T.length;O<fe;O++){const ce=T[O],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Q=B.getFrameExtents();if(r.multiply(Q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null&&!B.isPointLightShadow&&this.type===Nr&&(B.map=new Ht(r.x,r.y),B.map.texture.name=ce.name+".shadowMap",B.mapPass=new Ht(r.x,r.y),B.camera.updateProjectionMatrix()),B.map===null){const X={minFilter:ft,magFilter:ft,format:Kt};B.map=new Ht(r.x,r.y,X),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const k=B.getViewportCount();for(let X=0;X<k;X++){const j=B.getViewport(X);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),G.viewport(o),B.updateMatrices(ce,X),n=B.getFrustum(),C(E,I,B.camera,ce,this.type)}!B.isPointLightShadow&&this.type===Nr&&_(B,I),B.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(N,b,L)};function _(T,E){const I=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,I,f,m,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,I,p,m,null)}function S(T,E,I,N,b,L){let G=null;const O=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0?G=O:G=I.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const fe=G.uuid,ce=E.uuid;let B=c[fe];B===void 0&&(B={},c[fe]=B);let Q=B[ce];Q===void 0&&(Q=G.clone(),B[ce]=Q),G=Q}return G.visible=E.visible,G.wireframe=E.wireframe,L===Nr?G.side=E.shadowSide!==null?E.shadowSide:E.side:G.side=E.shadowSide!==null?E.shadowSide:h[E.side],G.alphaMap=E.alphaMap,G.alphaTest=E.alphaTest,G.clipShadows=E.clipShadows,G.clippingPlanes=E.clippingPlanes,G.clipIntersection=E.clipIntersection,G.displacementMap=E.displacementMap,G.displacementScale=E.displacementScale,G.displacementBias=E.displacementBias,G.wireframeLinewidth=E.wireframeLinewidth,G.linewidth=E.linewidth,I.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(I.matrixWorld),G.nearDistance=N,G.farDistance=b),G}function C(T,E,I,N,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Nr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const O=e.update(T),fe=T.material;if(Array.isArray(fe)){const ce=O.groups;for(let B=0,Q=ce.length;B<Q;B++){const k=ce[B],X=fe[k.materialIndex];if(X&&X.visible){const j=S(T,X,N,I.near,I.far,b);i.renderBufferDirect(I,null,O,j,T,k)}}}else if(fe.visible){const ce=S(T,fe,N,I.near,I.far,b);i.renderBufferDirect(I,null,O,ce,T,null)}}const G=T.children;for(let O=0,fe=G.length;O<fe;O++)C(G[O],E,I,N,b)}}function jv(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const pe=new Ze;let me=null;const Me=new Ze(0,0,0,0);return{setMask:function(xe){me!==xe&&!R&&(i.colorMask(xe,xe,xe,xe),me=xe)},setLocked:function(xe){R=xe},setClear:function(xe,Ce,de,Le,qe){qe===!0&&(xe*=Le,Ce*=Le,de*=Le),pe.set(xe,Ce,de,Le),Me.equals(pe)===!1&&(i.clearColor(xe,Ce,de,Le),Me.copy(pe))},reset:function(){R=!1,me=null,Me.set(-1,0,0,0)}}}function s(){let R=!1,pe=null,me=null,Me=null;return{setTest:function(xe){xe?Se(2929):K(2929)},setMask:function(xe){pe!==xe&&!R&&(i.depthMask(xe),pe=xe)},setFunc:function(xe){if(me!==xe){if(xe)switch(xe){case Cg:i.depthFunc(512);break;case Lg:i.depthFunc(519);break;case Rg:i.depthFunc(513);break;case Ya:i.depthFunc(515);break;case Pg:i.depthFunc(514);break;case Dg:i.depthFunc(518);break;case Ig:i.depthFunc(516);break;case Fg:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);me=xe}},setLocked:function(xe){R=xe},setClear:function(xe){Me!==xe&&(i.clearDepth(xe),Me=xe)},reset:function(){R=!1,pe=null,me=null,Me=null}}}function o(){let R=!1,pe=null,me=null,Me=null,xe=null,Ce=null,de=null,Le=null,qe=null;return{setTest:function(He){R||(He?Se(2960):K(2960))},setMask:function(He){pe!==He&&!R&&(i.stencilMask(He),pe=He)},setFunc:function(He,rn,sn){(me!==He||Me!==rn||xe!==sn)&&(i.stencilFunc(He,rn,sn),me=He,Me=rn,xe=sn)},setOp:function(He,rn,sn){(Ce!==He||de!==rn||Le!==sn)&&(i.stencilOp(He,rn,sn),Ce=He,de=rn,Le=sn)},setLocked:function(He){R=He},setClear:function(He){qe!==He&&(i.clearStencil(He),qe=He)},reset:function(){R=!1,pe=null,me=null,Me=null,xe=null,Ce=null,de=null,Le=null,qe=null}}}const a=new r,l=new s,c=new o;let u={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,_=null,S=null,C=null,T=null,E=null,I=null,N=!1,b=null,L=null,G=null,O=null,fe=null;const ce=i.getParameter(35661);let B=!1,Q=0;const k=i.getParameter(7938);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=Q>=2);let X=null,j={};const q=i.getParameter(3088),ee=i.getParameter(2978),le=new Ze().fromArray(q),se=new Ze().fromArray(ee);function ae(R,pe,me){const Me=new Uint8Array(4),xe=i.createTexture();i.bindTexture(R,xe),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let Ce=0;Ce<me;Ce++)i.texImage2D(pe+Ce,0,6408,1,1,0,6408,5121,Me);return xe}const be={};be[3553]=ae(3553,3553,1),be[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(Ya),w(!1),D(Fc),Se(2884),te(jn);function Se(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function K(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function Fe(R,pe){return h[R]!==pe?(i.bindFramebuffer(R,pe),h[R]=pe,n&&(R===36009&&(h[36160]=pe),R===36160&&(h[36009]=pe)),!0):!1}function Ee(R,pe){let me=p,Me=!1;if(R)if(me=f.get(pe),me===void 0&&(me=[],f.set(pe,me)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(me.length!==xe.length||me[0]!==36064){for(let Ce=0,de=xe.length;Ce<de;Ce++)me[Ce]=36064+Ce;me.length=xe.length,Me=!0}}else me[0]!==36064&&(me[0]=36064,Me=!0);else me[0]!==1029&&(me[0]=1029,Me=!0);Me&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Pe(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const he={[ji]:32774,[_g]:32778,[xg]:32779};if(n)he[zc]=32775,he[Uc]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(he[zc]=R.MIN_EXT,he[Uc]=R.MAX_EXT)}const Ne={[yg]:0,[vg]:1,[bg]:768,[gf]:770,[Ag]:776,[Eg]:774,[wg]:772,[Mg]:769,[_f]:771,[Tg]:775,[Sg]:773};function te(R,pe,me,Me,xe,Ce,de,Le){if(R===jn){m===!0&&(K(3042),m=!1);return}if(m===!1&&(Se(3042),m=!0),R!==gg){if(R!==d||Le!==N){if((_!==ji||T!==ji)&&(i.blendEquation(32774),_=ji,T=ji),Le)switch(R){case nr:i.blendFuncSeparate(1,771,1,771);break;case Nc:i.blendFunc(1,1);break;case Bc:i.blendFuncSeparate(0,769,0,1);break;case Oc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case nr:i.blendFuncSeparate(770,771,1,771);break;case Nc:i.blendFunc(770,1);break;case Bc:i.blendFuncSeparate(0,769,0,1);break;case Oc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,C=null,E=null,I=null,d=R,N=Le}return}xe=xe||pe,Ce=Ce||me,de=de||Me,(pe!==_||xe!==T)&&(i.blendEquationSeparate(he[pe],he[xe]),_=pe,T=xe),(me!==S||Me!==C||Ce!==E||de!==I)&&(i.blendFuncSeparate(Ne[me],Ne[Me],Ne[Ce],Ne[de]),S=me,C=Me,E=Ce,I=de),d=R,N=null}function v(R,pe){R.side===or?K(2884):Se(2884);let me=R.side===en;pe&&(me=!me),w(me),R.blending===nr&&R.transparent===!1?te(jn):te(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Me=R.stencilWrite;c.setTest(Me),Me&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),V(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(32926):K(32926)}function w(R){b!==R&&(R?i.frontFace(2304):i.frontFace(2305),b=R)}function D(R){R!==dg?(Se(2884),R!==L&&(R===Fc?i.cullFace(1029):R===pg?i.cullFace(1028):i.cullFace(1032))):K(2884),L=R}function F(R){R!==G&&(B&&i.lineWidth(R),G=R)}function V(R,pe,me){R?(Se(32823),(O!==pe||fe!==me)&&(i.polygonOffset(pe,me),O=pe,fe=me)):K(32823)}function J(R){R?Se(3089):K(3089)}function $(R){R===void 0&&(R=33984+ce-1),X!==R&&(i.activeTexture(R),X=R)}function ne(R,pe){X===null&&$();let me=j[X];me===void 0&&(me={type:void 0,texture:void 0},j[X]=me),(me.type!==R||me.texture!==pe)&&(i.bindTexture(R,pe||be[R]),me.type=R,me.texture=pe)}function re(){const R=j[X];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(R){le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function Te(R){se.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),se.copy(R))}function ve(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,j={},h={},f=new WeakMap,p=[],g=null,m=!1,d=null,_=null,S=null,C=null,T=null,E=null,I=null,N=!1,b=null,L=null,G=null,O=null,fe=null,le.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:K,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Pe,setBlending:te,setMaterial:v,setFlipSided:w,setCullFace:D,setLineWidth:F,setPolygonOffset:V,setScissorTest:J,activeTexture:$,bindTexture:ne,unbindTexture:re,compressedTexImage2D:y,texImage2D:_e,texImage3D:H,texStorage2D:Z,texStorage3D:oe,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:U,scissor:ye,viewport:Te,reset:ve}}function Jv(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,x){return _?new OffscreenCanvas(y,x):$r("canvas")}function C(y,x,P,U){let Z=1;if((y.width>U||y.height>U)&&(Z=U/Math.max(y.width,y.height)),Z<1||x===!0)if(typeof HTMLImageElement!="undefined"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&y instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&y instanceof ImageBitmap){const oe=x?nl:Math.floor,_e=oe(Z*y.width),H=oe(Z*y.height);m===void 0&&(m=S(_e,H));const ye=P?S(_e,H):m;return ye.width=_e,ye.height=H,ye.getContext("2d").drawImage(y,0,0,_e,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+_e+"x"+H+")."),ye}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function T(y){return uu(y.width)&&uu(y.height)}function E(y){return a?!1:y.wrapS!==Zt||y.wrapT!==Zt||y.minFilter!==ft&&y.minFilter!==Ct}function I(y,x){return y.generateMipmaps&&x&&y.minFilter!==ft&&y.minFilter!==Ct}function N(y){i.generateMipmap(y)}function b(y,x,P,U,Z=!1){if(a===!1)return x;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let oe=x;return x===6403&&(P===5126&&(oe=33326),P===5131&&(oe=33325),P===5121&&(oe=33321)),x===33319&&(P===5126&&(oe=33328),P===5131&&(oe=33327),P===5121&&(oe=33323)),x===6408&&(P===5126&&(oe=34836),P===5131&&(oe=34842),P===5121&&(oe=U===Qe&&Z===!1?35907:32856),P===32819&&(oe=32854),P===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function L(y,x,P){return I(y,P)===!0||y.isFramebufferTexture&&y.minFilter!==ft&&y.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function G(y){return y===ft||y===Hc||y===Vc?9728:9729}function O(y){const x=y.target;x.removeEventListener("dispose",O),ce(x),x.isVideoTexture&&g.delete(x)}function fe(y){const x=y.target;x.removeEventListener("dispose",fe),Q(x)}function ce(y){const x=n.get(y);if(x.__webglInit===void 0)return;const P=y.source,U=d.get(P);if(U){const Z=U[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&B(y),Object.keys(U).length===0&&d.delete(P)}n.remove(y)}function B(y){const x=n.get(y);i.deleteTexture(x.__webglTexture);const P=y.source,U=d.get(P);delete U[x.__cacheKey],o.memory.textures--}function Q(y){const x=y.texture,P=n.get(y),U=n.get(x);if(U.__webglTexture!==void 0&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)i.deleteFramebuffer(P.__webglFramebuffer[Z]),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Z]);else i.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer&&i.deleteRenderbuffer(P.__webglColorRenderbuffer),P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer);if(y.isWebGLMultipleRenderTargets)for(let Z=0,oe=x.length;Z<oe;Z++){const _e=n.get(x[Z]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(y)}let k=0;function X(){k=0}function j(){const y=k;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),k+=1,y}function q(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.encoding),x.join()}function ee(y,x){const P=n.get(y);if(y.isVideoTexture&&ne(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){const U=y.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(P,y,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,P.__webglTexture)}function le(y,x){const P=n.get(y);if(y.version>0&&P.__version!==y.version){Ee(P,y,x);return}t.activeTexture(33984+x),t.bindTexture(35866,P.__webglTexture)}function se(y,x){const P=n.get(y);if(y.version>0&&P.__version!==y.version){Ee(P,y,x);return}t.activeTexture(33984+x),t.bindTexture(32879,P.__webglTexture)}function ae(y,x){const P=n.get(y);if(y.version>0&&P.__version!==y.version){Pe(P,y,x);return}t.activeTexture(33984+x),t.bindTexture(34067,P.__webglTexture)}const be={[Ka]:10497,[Zt]:33071,[Qa]:33648},Se={[ft]:9728,[Hc]:9984,[Vc]:9986,[Ct]:9729,[kg]:9985,[Eo]:9987};function K(y,x,P){if(P?(i.texParameteri(y,10242,be[x.wrapS]),i.texParameteri(y,10243,be[x.wrapT]),(y===32879||y===35866)&&i.texParameteri(y,32882,be[x.wrapR]),i.texParameteri(y,10240,Se[x.magFilter]),i.texParameteri(y,10241,Se[x.minFilter])):(i.texParameteri(y,10242,33071),i.texParameteri(y,10243,33071),(y===32879||y===35866)&&i.texParameteri(y,32882,33071),(x.wrapS!==Zt||x.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,10240,G(x.magFilter)),i.texParameteri(y,10241,G(x.minFilter)),x.minFilter!==ft&&x.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(x.type===fi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Jr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Fe(y,x){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",O));const U=x.source;let Z=d.get(U);Z===void 0&&(Z={},d.set(U,Z));const oe=q(x);if(oe!==y.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Z[oe].usedTimes++;const _e=Z[y.__cacheKey];_e!==void 0&&(Z[y.__cacheKey].usedTimes--,_e.usedTimes===0&&B(x)),y.__cacheKey=oe,y.__webglTexture=Z[oe].texture}return P}function Ee(y,x,P){let U=3553;x.isDataArrayTexture&&(U=35866),x.isData3DTexture&&(U=32879);const Z=Fe(y,x),oe=x.source;if(t.activeTexture(33984+P),t.bindTexture(U,y.__webglTexture),oe.version!==oe.__currentVersion||Z===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const _e=E(x)&&T(x.image)===!1;let H=C(x.image,_e,!1,u);H=re(x,H);const ye=T(H)||a,Te=s.convert(x.format,x.encoding);let ve=s.convert(x.type),R=b(x.internalFormat,Te,ve,x.encoding,x.isVideoTexture);K(U,x,ye);let pe;const me=x.mipmaps,Me=a&&x.isVideoTexture!==!0,xe=y.__version===void 0||Z===!0,Ce=L(x,H,ye);if(x.isDepthTexture)R=6402,a?x.type===fi?R=36012:x.type===Xs?R=33190:x.type===ir?R=35056:R=33189:x.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===_i&&R===6402&&x.type!==jr&&x.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=jr,ve=s.convert(x.type)),x.format===cr&&R===6402&&(R=34041,x.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ir,ve=s.convert(x.type))),xe&&(Me?t.texStorage2D(3553,1,R,H.width,H.height):t.texImage2D(3553,0,R,H.width,H.height,0,Te,ve,null));else if(x.isDataTexture)if(me.length>0&&ye){Me&&xe&&t.texStorage2D(3553,Ce,R,me[0].width,me[0].height);for(let de=0,Le=me.length;de<Le;de++)pe=me[de],Me?t.texSubImage2D(3553,de,0,0,pe.width,pe.height,Te,ve,pe.data):t.texImage2D(3553,de,R,pe.width,pe.height,0,Te,ve,pe.data);x.generateMipmaps=!1}else Me?(xe&&t.texStorage2D(3553,Ce,R,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,Te,ve,H.data)):t.texImage2D(3553,0,R,H.width,H.height,0,Te,ve,H.data);else if(x.isCompressedTexture){Me&&xe&&t.texStorage2D(3553,Ce,R,me[0].width,me[0].height);for(let de=0,Le=me.length;de<Le;de++)pe=me[de],x.format!==Kt?Te!==null?Me?t.compressedTexSubImage2D(3553,de,0,0,pe.width,pe.height,Te,pe.data):t.compressedTexImage2D(3553,de,R,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(3553,de,0,0,pe.width,pe.height,Te,ve,pe.data):t.texImage2D(3553,de,R,pe.width,pe.height,0,Te,ve,pe.data)}else if(x.isDataArrayTexture)Me?(xe&&t.texStorage3D(35866,Ce,R,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,Te,ve,H.data)):t.texImage3D(35866,0,R,H.width,H.height,H.depth,0,Te,ve,H.data);else if(x.isData3DTexture)Me?(xe&&t.texStorage3D(32879,Ce,R,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,Te,ve,H.data)):t.texImage3D(32879,0,R,H.width,H.height,H.depth,0,Te,ve,H.data);else if(x.isFramebufferTexture){if(xe)if(Me)t.texStorage2D(3553,Ce,R,H.width,H.height);else{let de=H.width,Le=H.height;for(let qe=0;qe<Ce;qe++)t.texImage2D(3553,qe,R,de,Le,0,Te,ve,null),de>>=1,Le>>=1}}else if(me.length>0&&ye){Me&&xe&&t.texStorage2D(3553,Ce,R,me[0].width,me[0].height);for(let de=0,Le=me.length;de<Le;de++)pe=me[de],Me?t.texSubImage2D(3553,de,0,0,Te,ve,pe):t.texImage2D(3553,de,R,Te,ve,pe);x.generateMipmaps=!1}else Me?(xe&&t.texStorage2D(3553,Ce,R,H.width,H.height),t.texSubImage2D(3553,0,0,0,Te,ve,H)):t.texImage2D(3553,0,R,Te,ve,H);I(x,ye)&&N(U),oe.__currentVersion=oe.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Pe(y,x,P){if(x.image.length!==6)return;const U=Fe(y,x),Z=x.source;if(t.activeTexture(33984+P),t.bindTexture(34067,y.__webglTexture),Z.version!==Z.__currentVersion||U===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,H=[];for(let de=0;de<6;de++)!oe&&!_e?H[de]=C(x.image[de],!1,!0,c):H[de]=_e?x.image[de].image:x.image[de],H[de]=re(x,H[de]);const ye=H[0],Te=T(ye)||a,ve=s.convert(x.format,x.encoding),R=s.convert(x.type),pe=b(x.internalFormat,ve,R,x.encoding),me=a&&x.isVideoTexture!==!0,Me=y.__version===void 0;let xe=L(x,ye,Te);K(34067,x,Te);let Ce;if(oe){me&&Me&&t.texStorage2D(34067,xe,pe,ye.width,ye.height);for(let de=0;de<6;de++){Ce=H[de].mipmaps;for(let Le=0;Le<Ce.length;Le++){const qe=Ce[Le];x.format!==Kt?ve!==null?me?t.compressedTexSubImage2D(34069+de,Le,0,0,qe.width,qe.height,ve,qe.data):t.compressedTexImage2D(34069+de,Le,pe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(34069+de,Le,0,0,qe.width,qe.height,ve,R,qe.data):t.texImage2D(34069+de,Le,pe,qe.width,qe.height,0,ve,R,qe.data)}}}else{Ce=x.mipmaps,me&&Me&&(Ce.length>0&&xe++,t.texStorage2D(34067,xe,pe,H[0].width,H[0].height));for(let de=0;de<6;de++)if(_e){me?t.texSubImage2D(34069+de,0,0,0,H[de].width,H[de].height,ve,R,H[de].data):t.texImage2D(34069+de,0,pe,H[de].width,H[de].height,0,ve,R,H[de].data);for(let Le=0;Le<Ce.length;Le++){const He=Ce[Le].image[de].image;me?t.texSubImage2D(34069+de,Le+1,0,0,He.width,He.height,ve,R,He.data):t.texImage2D(34069+de,Le+1,pe,He.width,He.height,0,ve,R,He.data)}}else{me?t.texSubImage2D(34069+de,0,0,0,ve,R,H[de]):t.texImage2D(34069+de,0,pe,ve,R,H[de]);for(let Le=0;Le<Ce.length;Le++){const qe=Ce[Le];me?t.texSubImage2D(34069+de,Le+1,0,0,ve,R,qe.image[de]):t.texImage2D(34069+de,Le+1,pe,ve,R,qe.image[de])}}}I(x,Te)&&N(34067),Z.__currentVersion=Z.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function he(y,x,P,U,Z){const oe=s.convert(P.format,P.encoding),_e=s.convert(P.type),H=b(P.internalFormat,oe,_e,P.encoding);n.get(x).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,H,x.width,x.height,x.depth,0,oe,_e,null):t.texImage2D(Z,0,H,x.width,x.height,0,oe,_e,null)),t.bindFramebuffer(36160,y),$(x)?f.framebufferTexture2DMultisampleEXT(36160,U,Z,n.get(P).__webglTexture,0,J(x)):i.framebufferTexture2D(36160,U,Z,n.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(y,x,P){if(i.bindRenderbuffer(36161,y),x.depthBuffer&&!x.stencilBuffer){let U=33189;if(P||$(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===fi?U=36012:Z.type===Xs&&(U=33190));const oe=J(x);$(x)?f.renderbufferStorageMultisampleEXT(36161,oe,U,x.width,x.height):i.renderbufferStorageMultisample(36161,oe,U,x.width,x.height)}else i.renderbufferStorage(36161,U,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,y)}else if(x.depthBuffer&&x.stencilBuffer){const U=J(x);P&&$(x)===!1?i.renderbufferStorageMultisample(36161,U,35056,x.width,x.height):$(x)?f.renderbufferStorageMultisampleEXT(36161,U,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,y)}else{const U=x.isWebGLMultipleRenderTargets===!0?x.texture[0]:x.texture,Z=s.convert(U.format,U.encoding),oe=s.convert(U.type),_e=b(U.internalFormat,Z,oe,U.encoding),H=J(x);P&&$(x)===!1?i.renderbufferStorageMultisample(36161,H,_e,x.width,x.height):$(x)?f.renderbufferStorageMultisampleEXT(36161,H,_e,x.width,x.height):i.renderbufferStorage(36161,_e,x.width,x.height)}i.bindRenderbuffer(36161,null)}function te(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const U=n.get(x.depthTexture).__webglTexture,Z=J(x);if(x.depthTexture.format===_i)$(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,U,0,Z):i.framebufferTexture2D(36160,36096,3553,U,0);else if(x.depthTexture.format===cr)$(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,U,0,Z):i.framebufferTexture2D(36160,33306,3553,U,0);else throw new Error("Unknown depthTexture format")}function v(y){const x=n.get(y),P=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");te(x.__webglFramebuffer,y)}else if(P){x.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(36160,x.__webglFramebuffer[U]),x.__webglDepthbuffer[U]=i.createRenderbuffer(),Ne(x.__webglDepthbuffer[U],y,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ne(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function w(y,x,P){const U=n.get(y);x!==void 0&&he(U.__webglFramebuffer,y,y.texture,36064,3553),P!==void 0&&v(y)}function D(y){const x=y.texture,P=n.get(y),U=n.get(x);y.addEventListener("dispose",fe),y.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=x.version,o.memory.textures++);const Z=y.isWebGLCubeRenderTarget===!0,oe=y.isWebGLMultipleRenderTargets===!0,_e=T(y)||a;if(Z){P.__webglFramebuffer=[];for(let H=0;H<6;H++)P.__webglFramebuffer[H]=i.createFramebuffer()}else if(P.__webglFramebuffer=i.createFramebuffer(),oe)if(r.drawBuffers){const H=y.texture;for(let ye=0,Te=H.length;ye<Te;ye++){const ve=n.get(H[ye]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&y.samples>0&&$(y)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,P.__webglColorRenderbuffer);const H=s.convert(x.format,x.encoding),ye=s.convert(x.type),Te=b(x.internalFormat,H,ye,x.encoding),ve=J(y);i.renderbufferStorageMultisample(36161,ve,Te,y.width,y.height),t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,P.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(P.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}if(Z){t.bindTexture(34067,U.__webglTexture),K(34067,x,_e);for(let H=0;H<6;H++)he(P.__webglFramebuffer[H],y,x,36064,34069+H);I(x,_e)&&N(34067),t.unbindTexture()}else if(oe){const H=y.texture;for(let ye=0,Te=H.length;ye<Te;ye++){const ve=H[ye],R=n.get(ve);t.bindTexture(3553,R.__webglTexture),K(3553,ve,_e),he(P.__webglFramebuffer,y,ve,36064+ye,3553),I(ve,_e)&&N(3553)}t.unbindTexture()}else{let H=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?H=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,U.__webglTexture),K(H,x,_e),he(P.__webglFramebuffer,y,x,36064,H),I(x,_e)&&N(H),t.unbindTexture()}y.depthBuffer&&v(y)}function F(y){const x=T(y)||a,P=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let U=0,Z=P.length;U<Z;U++){const oe=P[U];if(I(oe,x)){const _e=y.isWebGLCubeRenderTarget?34067:3553,H=n.get(oe).__webglTexture;t.bindTexture(_e,H),N(_e),t.unbindTexture()}}}function V(y){if(a&&y.samples>0&&$(y)===!1){const x=y.width,P=y.height;let U=16384;const Z=[36064],oe=y.stencilBuffer?33306:36096;y.depthBuffer&&Z.push(oe);const _e=n.get(y),H=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;H===!1&&(y.depthBuffer&&(U|=256),y.stencilBuffer&&(U|=1024)),t.bindFramebuffer(36008,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,_e.__webglFramebuffer),H===!0&&(i.invalidateFramebuffer(36008,[oe]),i.invalidateFramebuffer(36009,[oe])),i.blitFramebuffer(0,0,x,P,0,0,x,P,U,9728),p&&i.invalidateFramebuffer(36008,Z),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,_e.__webglMultisampledFramebuffer)}}function J(y){return Math.min(h,y.samples)}function $(y){const x=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(y){const x=o.render.frame;g.get(y)!==x&&(g.set(y,x),y.update())}function re(y,x){const P=y.encoding,U=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===el||P!==Zn&&(P===Qe?a===!1?e.has("EXT_sRGB")===!0&&U===Kt?(y.format=el,y.minFilter=Ct,y.generateMipmaps=!1):x=Mi.sRGBToLinear(x):(U!==Kt||Z!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),x}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=ae,this.rebindTextures=w,this.setupRenderTarget=D,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=v,this.setupFrameBufferTexture=he,this.useMultisampledRTT=$}function Yv(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===vi)return 5121;if(s===Xg)return 32819;if(s===jg)return 32820;if(s===Gg)return 5120;if(s===Wg)return 5122;if(s===jr)return 5123;if(s===qg)return 5124;if(s===Xs)return 5125;if(s===fi)return 5126;if(s===Jr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Jg)return 6406;if(s===Kt)return 6408;if(s===$g)return 6409;if(s===Zg)return 6410;if(s===_i)return 6402;if(s===cr)return 34041;if(s===Kg)return 6403;if(s===Yg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===el)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qg)return 36244;if(s===e_)return 33319;if(s===t_)return 33320;if(s===n_)return 36249;if(s===Xo||s===jo||s===Jo||s===Yo)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kc||s===Gc||s===Wc||s===qc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===i_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xc||s===jc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xc)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jc||s===Yc||s===$c||s===Zc||s===Kc||s===Qc||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$c)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qc)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===iu)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ru)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===su)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ou)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===au)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lu)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ir?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ff extends Lt{constructor(e=[]){super(),this.cameras=e}}Ff.prototype.isArrayCamera=!0;class Or extends Ye{constructor(){super(),this.type="Group"}}Or.prototype.isGroup=!0;const $v={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($v))),c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const S=new Or;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[m.jointName]=S,c.add(S)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Nf extends gt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:_i,u!==_i&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_i&&(n=jr),n===void 0&&u===cr&&(n=ir),super(null,r,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1}}Nf.prototype.isDepthTexture=!0;class Zv extends bi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],S=new Map,C=new Lt;C.layers.enable(1),C.viewport=new Ze;const T=new Lt;T.layers.enable(2),T.viewport=new Ze;const E=[C,T],I=new Ff;I.layers.enable(1),I.layers.enable(2);let N=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=_[q];return ee===void 0&&(ee=new Ea,_[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=_[q];return ee===void 0&&(ee=new Ea,_[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=_[q];return ee===void 0&&(ee=new Ea,_[q]=ee),ee.getHandSpace()};function L(q){const ee=S.get(q.inputSource);ee&&ee.dispatchEvent({type:q.type,data:q.inputSource})}function G(){S.forEach(function(q,ee){q.disconnect(ee)}),S.clear(),N=null,b=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,d=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",G),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:f}),d=new Ht(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:vi,encoding:e.outputEncoding})}else{let ee=null,le=null,se=null;g.depth&&(se=g.stencil?35056:33190,ee=g.stencil?cr:_i,le=g.stencil?ir:jr);const ae={colorFormat:e.outputEncoding===Qe?35907:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),d=new Ht(h.textureWidth,h.textureHeight,{format:Kt,type:vi,depthTexture:new Nf(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const be=e.properties.get(d);be.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(q){const ee=r.inputSources;for(let le=0;le<ee.length;le++){const se=ee[le].handedness==="right"?1:0;S.set(ee[le],_[se])}for(let le=0;le<q.removed.length;le++){const se=q.removed[le],ae=S.get(se);ae&&(ae.dispatchEvent({type:"disconnected",data:se}),S.delete(se))}for(let le=0;le<q.added.length;le++){const se=q.added[le],ae=S.get(se);ae&&ae.dispatchEvent({type:"connected",data:se})}}const fe=new A,ce=new A;function B(q,ee,le){fe.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(le.matrixWorld);const se=fe.distanceTo(ce),ae=ee.projectionMatrix.elements,be=le.projectionMatrix.elements,Se=ae[14]/(ae[10]-1),K=ae[14]/(ae[10]+1),Fe=(ae[9]+1)/ae[5],Ee=(ae[9]-1)/ae[5],Pe=(ae[8]-1)/ae[0],he=(be[8]+1)/be[0],Ne=Se*Pe,te=Se*he,v=se/(-Pe+he),w=v*-Pe;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(w),q.translateZ(v),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const D=Se+v,F=K+v,V=Ne-w,J=te+(se-w),$=Fe*K/F*D,ne=Ee*K/F*D;q.projectionMatrix.makePerspective(V,J,$,ne,D,F)}function Q(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;I.near=T.near=C.near=q.near,I.far=T.far=C.far=q.far,(N!==I.near||b!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,b=I.far);const ee=q.parent,le=I.cameras;Q(I,ee);for(let ae=0;ae<le.length;ae++)Q(le[ae],ee);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),q.position.copy(I.position),q.quaternion.copy(I.quaternion),q.scale.copy(I.scale),q.matrix.copy(I.matrix),q.matrixWorld.copy(I.matrixWorld);const se=q.children;for(let ae=0,be=se.length;ae<be;ae++)se[ae].updateMatrixWorld(!0);le.length===2?B(I,C,T):I.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(q){h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let k=null;function X(q,ee){if(c=ee.getViewerPose(l||o),p=ee,c!==null){const se=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ae=!1;se.length!==I.cameras.length&&(I.cameras.length=0,ae=!0);for(let be=0;be<se.length;be++){const Se=se[be];let K=null;if(f!==null)K=f.getViewport(Se);else{const Ee=u.getViewSubImage(h,Se);K=Ee.viewport,be===0&&(e.setRenderTargetTextures(d,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(d))}const Fe=E[be];Fe.matrix.fromArray(Se.transform.matrix),Fe.projectionMatrix.fromArray(Se.projectionMatrix),Fe.viewport.set(K.x,K.y,K.width,K.height),be===0&&I.matrix.copy(Fe.matrix),ae===!0&&I.cameras.push(Fe)}}const le=r.inputSources;for(let se=0;se<_.length;se++){const ae=le[se],be=S.get(ae);be!==void 0&&be.update(ae,ee,l||o)}k&&k(q,ee),p=null}const j=new Tf;j.setAnimationLoop(X),this.setAnimationLoop=function(q){k=q},this.dispose=function(){}}}function Kv(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,S,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,C)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let C;d.aoMap?C=d.aoMap:d.lightMap&&(C=d.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uv2Transform.value.copy(C.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=S*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let C;d.map?C=d.map:d.alphaMap&&(C=d.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===en&&m.clearcoatNormalScale.value.negate())),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Qv(){const i=$r("canvas");return i.style.display="block",i}function $e(i={}){const e=i.canvas!==void 0?i.canvas:Qv(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zn,this.physicallyCorrectLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const m=this;let d=!1,_=0,S=0,C=null,T=-1,E=null;const I=new Ze,N=new Ze;let b=null,L=e.width,G=e.height,O=1,fe=null,ce=null;const B=new Ze(0,0,L,G),Q=new Ze(0,0,L,G);let k=!1;const X=new Lo;let j=!1,q=!1,ee=null;const le=new Ae,se=new ue,ae=new A,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return C===null?O:1}let K=t;function Fe(M,z){for(let Y=0;Y<M.length;Y++){const W=M[Y],ie=e.getContext(W,z);if(ie!==null)return ie}return null}try{const M={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",pe,!1),K===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),K=Fe(z,M),K===null)throw Fe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,Pe,he,Ne,te,v,w,D,F,V,J,$,ne,re,y,x,P,U,Z,oe,_e,H,ye;function Te(){Ee=new gy(K),Pe=new uy(K,Ee,i),Ee.init(Pe),H=new Yv(K,Ee,Pe),he=new jv(K,Ee,Pe),Ne=new yy(K),te=new Bv,v=new Jv(K,Ee,he,te,Pe,H,Ne),w=new fy(m),D=new my(m),F=new I_(K,Pe),ye=new ly(K,Ee,F,Pe),V=new _y(K,F,Ne,ye),J=new wy(K,V,F,Ne),Z=new My(K,Pe,v),x=new hy(te),$=new Nv(m,w,D,Ee,Pe,ye,x),ne=new Kv(m,te),re=new zv,y=new Wv(Ee,Pe),U=new ay(m,w,he,J,u,o),P=new If(m,J,Pe),oe=new cy(K,Ee,Ne,Pe),_e=new xy(K,Ee,Ne,Pe),Ne.programs=$.programs,m.capabilities=Pe,m.extensions=Ee,m.properties=te,m.renderLists=re,m.shadowMap=P,m.state=he,m.info=Ne}Te();const ve=new Zv(m,K);this.xr=ve,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(M){M!==void 0&&(O=M,this.setSize(L,G,!1))},this.getSize=function(M){return M.set(L,G)},this.setSize=function(M,z,Y){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,G=z,e.width=Math.floor(M*O),e.height=Math.floor(z*O),Y!==!1&&(e.style.width=M+"px",e.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(L*O,G*O).floor()},this.setDrawingBufferSize=function(M,z,Y){L=M,G=z,O=Y,e.width=Math.floor(M*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(B)},this.setViewport=function(M,z,Y,W){M.isVector4?B.set(M.x,M.y,M.z,M.w):B.set(M,z,Y,W),he.viewport(I.copy(B).multiplyScalar(O).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,z,Y,W){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,z,Y,W),he.scissor(N.copy(Q).multiplyScalar(O).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){he.setScissorTest(k=M)},this.setOpaqueSort=function(M){fe=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor.apply(U,arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha.apply(U,arguments)},this.clear=function(M=!0,z=!0,Y=!0){let W=0;M&&(W|=16384),z&&(W|=256),Y&&(W|=1024),K.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",pe,!1),re.dispose(),y.dispose(),te.dispose(),w.dispose(),D.dispose(),J.dispose(),ye.dispose(),$.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Le),ve.removeEventListener("sessionend",qe),ee&&(ee.dispose(),ee=null),He.stop()};function R(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const M=Ne.autoReset,z=P.enabled,Y=P.autoUpdate,W=P.needsUpdate,ie=P.type;Te(),Ne.autoReset=M,P.enabled=z,P.autoUpdate=Y,P.needsUpdate=W,P.type=ie}function me(M){const z=M.target;z.removeEventListener("dispose",me),Me(z)}function Me(M){xe(M),te.remove(M)}function xe(M){const z=te.get(M).programs;z!==void 0&&(z.forEach(function(Y){$.releaseProgram(Y)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,Y,W,ie,Re){z===null&&(z=be);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=dd(M,z,Y,W,ie);he.setMaterial(W,De);let Be=Y.index;const Xe=Y.attributes.position;if(Be===null){if(Xe===void 0||Xe.count===0)return}else if(Be.count===0)return;let ke=1;W.wireframe===!0&&(Be=V.getWireframeAttribute(Y),ke=2),ye.setup(ie,W,ze,Y,Be);let Ge,it=oe;Be!==null&&(Ge=F.get(Be),it=_e,it.setIndex(Ge));const ti=Be!==null?Be.count:Xe.count,Si=Y.drawRange.start*ke,Ei=Y.drawRange.count*ke,on=Re!==null?Re.start*ke:0,We=Re!==null?Re.count*ke:1/0,Ti=Math.max(Si,on),rt=Math.min(ti,Si+Ei,on+We)-1,an=Math.max(0,rt-Ti+1);if(an!==0){if(ie.isMesh)W.wireframe===!0?(he.setLineWidth(W.wireframeLinewidth*Se()),it.setMode(1)):it.setMode(4);else if(ie.isLine){let In=W.linewidth;In===void 0&&(In=1),he.setLineWidth(In*Se()),ie.isLineSegments?it.setMode(1):ie.isLineLoop?it.setMode(2):it.setMode(3)}else ie.isPoints?it.setMode(0):ie.isSprite&&it.setMode(4);if(ie.isInstancedMesh)it.renderInstances(Ti,an,ie.count);else if(Y.isInstancedBufferGeometry){const In=Math.min(Y.instanceCount,Y._maxInstanceCount);it.renderInstances(Ti,an,In)}else it.render(Ti,an)}},this.compile=function(M,z){f=y.get(M),f.init(),g.push(f),M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(m.physicallyCorrectLights),M.traverse(function(Y){const W=Y.material;if(W)if(Array.isArray(W))for(let ie=0;ie<W.length;ie++){const Re=W[ie];No(Re,M,Y)}else No(W,M,Y)}),g.pop(),f=null};let Ce=null;function de(M){Ce&&Ce(M)}function Le(){He.stop()}function qe(){He.start()}const He=new Tf;He.setAnimationLoop(de),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(M){Ce=M,ve.setAnimationLoop(M),M===null?He.stop():He.start()},ve.addEventListener("sessionstart",Le),ve.addEventListener("sessionend",qe),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,z,C),f=y.get(M,g.length),f.init(),g.push(f),le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(le),q=this.localClippingEnabled,j=x.init(this.clippingPlanes,q,z),h=re.get(M,p.length),h.init(),p.push(h),rn(M,z,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(fe,ce),j===!0&&x.beginShadows();const Y=f.state.shadowsArray;if(P.render(Y,M,z),j===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),U.render(h,M),f.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const W=z.cameras;for(let ie=0,Re=W.length;ie<Re;ie++){const De=W[ie];sn(h,M,De,De.viewport)}}else sn(h,M,z);C!==null&&(v.updateMultisampleRenderTarget(C),v.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(m,M,z),ye.resetDefaultState(),T=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function rn(M,z,Y,W){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){W&&ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const De=J.update(M),ze=M.material;ze.visible&&h.push(M,De,ze,Y,ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ne.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ne.render.frame),!M.frustumCulled||X.intersectsObject(M))){W&&ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const De=J.update(M),ze=M.material;if(Array.isArray(ze)){const Be=De.groups;for(let Xe=0,ke=Be.length;Xe<ke;Xe++){const Ge=Be[Xe],it=ze[Ge.materialIndex];it&&it.visible&&h.push(M,De,it,Y,ae.z,Ge)}}else ze.visible&&h.push(M,De,ze,Y,ae.z,null)}}const Re=M.children;for(let De=0,ze=Re.length;De<ze;De++)rn(Re[De],z,Y,W)}function sn(M,z,Y,W){const ie=M.opaque,Re=M.transmissive,De=M.transparent;f.setupLightsView(Y),Re.length>0&&hd(ie,z,Y),W&&he.viewport(I.copy(W)),ie.length>0&&os(ie,z,Y),Re.length>0&&os(Re,z,Y),De.length>0&&os(De,z,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function hd(M,z,Y){const W=Pe.isWebGL2;ee===null&&(ee=new Ht(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Jr:vi,minFilter:Eo,samples:W&&s===!0?4:0})),m.getDrawingBufferSize(se),W?ee.setSize(se.x,se.y):ee.setSize(nl(se.x),nl(se.y));const ie=m.getRenderTarget();m.setRenderTarget(ee),m.clear();const Re=m.toneMapping;m.toneMapping=Rn,os(M,z,Y),m.toneMapping=Re,v.updateMultisampleRenderTarget(ee),v.updateRenderTargetMipmap(ee),m.setRenderTarget(ie)}function os(M,z,Y){const W=z.isScene===!0?z.overrideMaterial:null;for(let ie=0,Re=M.length;ie<Re;ie++){const De=M[ie],ze=De.object,Be=De.geometry,Xe=W===null?De.material:W,ke=De.group;ze.layers.test(Y.layers)&&fd(ze,z,Y,Be,Xe,ke)}}function fd(M,z,Y,W,ie,Re){M.onBeforeRender(m,z,Y,W,ie,Re),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),ie.onBeforeRender(m,z,Y,W,M,Re),ie.transparent===!0&&ie.side===or?(ie.side=en,ie.needsUpdate=!0,m.renderBufferDirect(Y,z,W,ie,M,Re),ie.side=Xr,ie.needsUpdate=!0,m.renderBufferDirect(Y,z,W,ie,M,Re),ie.side=or):m.renderBufferDirect(Y,z,W,ie,M,Re),M.onAfterRender(m,z,Y,W,ie,Re)}function No(M,z,Y){z.isScene!==!0&&(z=be);const W=te.get(M),ie=f.state.lights,Re=f.state.shadowsArray,De=ie.state.version,ze=$.getParameters(M,ie.state,Re,z,Y),Be=$.getProgramCacheKey(ze);let Xe=W.programs;W.environment=M.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(M.isMeshStandardMaterial?D:w).get(M.envMap||W.environment),Xe===void 0&&(M.addEventListener("dispose",me),Xe=new Map,W.programs=Xe);let ke=Xe.get(Be);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===De)return sc(M,ze),ke}else ze.uniforms=$.getUniforms(M),M.onBuild(Y,ze,m),M.onBeforeCompile(ze,m),ke=$.acquireProgram(ze,Be),Xe.set(Be,ke),W.uniforms=ze.uniforms;const Ge=W.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=x.uniform),sc(M,ze),W.needsLights=md(M),W.lightsStateVersion=De,W.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.directionalShadowMap.value=ie.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotShadowMap.value=ie.state.spotShadowMap,Ge.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ge.pointShadowMap.value=ie.state.pointShadowMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix);const it=ke.getUniforms(),ti=Jn.seqWithValue(it.seq,Ge);return W.currentProgram=ke,W.uniformsList=ti,ke}function sc(M,z){const Y=te.get(M);Y.outputEncoding=z.outputEncoding,Y.instancing=z.instancing,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function dd(M,z,Y,W,ie){z.isScene!==!0&&(z=be),v.resetTextureUnits();const Re=z.fog,De=W.isMeshStandardMaterial?z.environment:null,ze=C===null?m.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Zn,Be=(W.isMeshStandardMaterial?D:w).get(W.envMap||De),Xe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!W.normalMap&&!!Y.attributes.tangent,Ge=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,ti=!!Y.morphAttributes.color,Si=W.toneMapped?m.toneMapping:Rn,Ei=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,on=Ei!==void 0?Ei.length:0,We=te.get(W),Ti=f.state.lights;if(j===!0&&(q===!0||M!==E)){const ln=M===E&&W.id===T;x.setState(W,M,ln)}let rt=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ti.state.version||We.outputEncoding!==ze||ie.isInstancedMesh&&We.instancing===!1||!ie.isInstancedMesh&&We.instancing===!0||ie.isSkinnedMesh&&We.skinning===!1||!ie.isSkinnedMesh&&We.skinning===!0||We.envMap!==Be||W.fog===!0&&We.fog!==Re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==x.numPlanes||We.numIntersection!==x.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==ke||We.morphTargets!==Ge||We.morphNormals!==it||We.morphColors!==ti||We.toneMapping!==Si||Pe.isWebGL2===!0&&We.morphTargetsCount!==on)&&(rt=!0):(rt=!0,We.__version=W.version);let an=We.currentProgram;rt===!0&&(an=No(W,z,ie));let In=!1,wr=!1,Bo=!1;const St=an.getUniforms(),Sr=We.uniforms;if(he.useProgram(an.program)&&(In=!0,wr=!0,Bo=!0),W.id!==T&&(T=W.id,wr=!0),In||E!==M){if(St.setValue(K,"projectionMatrix",M.projectionMatrix),Pe.logarithmicDepthBuffer&&St.setValue(K,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,wr=!0,Bo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ln=St.map.cameraPosition;ln!==void 0&&ln.setValue(K,ae.setFromMatrixPosition(M.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(K,"isOrthographic",M.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ie.isSkinnedMesh)&&St.setValue(K,"viewMatrix",M.matrixWorldInverse)}if(ie.isSkinnedMesh){St.setOptional(K,ie,"bindMatrix"),St.setOptional(K,ie,"bindMatrixInverse");const ln=ie.skeleton;ln&&(Pe.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),St.setValue(K,"boneTexture",ln.boneTexture,v),St.setValue(K,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oo=Y.morphAttributes;return(Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&Pe.isWebGL2===!0)&&Z.update(ie,Y,W,an),(wr||We.receiveShadow!==ie.receiveShadow)&&(We.receiveShadow=ie.receiveShadow,St.setValue(K,"receiveShadow",ie.receiveShadow)),wr&&(St.setValue(K,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&pd(Sr,Bo),Re&&W.fog===!0&&ne.refreshFogUniforms(Sr,Re),ne.refreshMaterialUniforms(Sr,W,O,G,ee),Jn.upload(K,We.uniformsList,Sr,v)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Jn.upload(K,We.uniformsList,Sr,v),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(K,"center",ie.center),St.setValue(K,"modelViewMatrix",ie.modelViewMatrix),St.setValue(K,"normalMatrix",ie.normalMatrix),St.setValue(K,"modelMatrix",ie.matrixWorld),an}function pd(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function md(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,z,Y){te.get(M.texture).__webglTexture=z,te.get(M.depthTexture).__webglTexture=Y;const W=te.get(M);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,z){const Y=te.get(M);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,Y=0){C=M,_=z,S=Y;let W=!0;if(M){const Be=te.get(M);Be.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),W=!1):Be.__webglFramebuffer===void 0?v.setupRenderTarget(M):Be.__hasExternalTextures&&v.rebindTextures(M,te.get(M.texture).__webglTexture,te.get(M.depthTexture).__webglTexture)}let ie=null,Re=!1,De=!1;if(M){const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(De=!0);const Xe=te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(ie=Xe[z],Re=!0):Pe.isWebGL2&&M.samples>0&&v.useMultisampledRTT(M)===!1?ie=te.get(M).__webglMultisampledFramebuffer:ie=Xe,I.copy(M.viewport),N.copy(M.scissor),b=M.scissorTest}else I.copy(B).multiplyScalar(O).floor(),N.copy(Q).multiplyScalar(O).floor(),b=k;if(he.bindFramebuffer(36160,ie)&&Pe.drawBuffers&&W&&he.drawBuffers(M,ie),he.viewport(I),he.scissor(N),he.setScissorTest(b),Re){const Be=te.get(M.texture);K.framebufferTexture2D(36160,36064,34069+z,Be.__webglTexture,Y)}else if(De){const Be=te.get(M.texture),Xe=z||0;K.framebufferTextureLayer(36160,36064,Be.__webglTexture,Y||0,Xe)}T=-1},this.readRenderTargetPixels=function(M,z,Y,W,ie,Re,De){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){he.bindFramebuffer(36160,ze);try{const Be=M.texture,Xe=Be.format,ke=Be.type;if(Xe!==Kt&&H.convert(Xe)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===Jr&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(ke!==vi&&H.convert(ke)!==K.getParameter(35738)&&!(ke===fi&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-W&&Y>=0&&Y<=M.height-ie&&K.readPixels(z,Y,W,ie,H.convert(Xe),H.convert(ke),Re)}finally{const Be=C!==null?te.get(C).__webglFramebuffer:null;he.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(M,z,Y=0){if(z.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const W=Math.pow(2,-Y),ie=Math.floor(z.image.width*W),Re=Math.floor(z.image.height*W);v.setTexture2D(z,0),K.copyTexSubImage2D(3553,Y,0,0,M.x,M.y,ie,Re),he.unbindTexture()},this.copyTextureToTexture=function(M,z,Y,W=0){const ie=z.image.width,Re=z.image.height,De=H.convert(Y.format),ze=H.convert(Y.type);v.setTexture2D(Y,0),K.pixelStorei(37440,Y.flipY),K.pixelStorei(37441,Y.premultiplyAlpha),K.pixelStorei(3317,Y.unpackAlignment),z.isDataTexture?K.texSubImage2D(3553,W,M.x,M.y,ie,Re,De,ze,z.image.data):z.isCompressedTexture?K.compressedTexSubImage2D(3553,W,M.x,M.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):K.texSubImage2D(3553,W,M.x,M.y,De,ze,z.image),W===0&&Y.generateMipmaps&&K.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(M,z,Y,W,ie=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=M.max.x-M.min.x+1,De=M.max.y-M.min.y+1,ze=M.max.z-M.min.z+1,Be=H.convert(W.format),Xe=H.convert(W.type);let ke;if(W.isData3DTexture)v.setTexture3D(W,0),ke=32879;else if(W.isDataArrayTexture)v.setTexture2DArray(W,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,W.flipY),K.pixelStorei(37441,W.premultiplyAlpha),K.pixelStorei(3317,W.unpackAlignment);const Ge=K.getParameter(3314),it=K.getParameter(32878),ti=K.getParameter(3316),Si=K.getParameter(3315),Ei=K.getParameter(32877),on=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;K.pixelStorei(3314,on.width),K.pixelStorei(32878,on.height),K.pixelStorei(3316,M.min.x),K.pixelStorei(3315,M.min.y),K.pixelStorei(32877,M.min.z),Y.isDataTexture||Y.isData3DTexture?K.texSubImage3D(ke,ie,z.x,z.y,z.z,Re,De,ze,Be,Xe,on.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(ke,ie,z.x,z.y,z.z,Re,De,ze,Be,on.data)):K.texSubImage3D(ke,ie,z.x,z.y,z.z,Re,De,ze,Be,Xe,on),K.pixelStorei(3314,Ge),K.pixelStorei(32878,it),K.pixelStorei(3316,ti),K.pixelStorei(3315,Si),K.pixelStorei(32877,Ei),ie===0&&W.generateMipmaps&&K.generateMipmap(ke),he.unbindTexture()},this.initTexture=function(M){v.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){_=0,S=0,C=null,he.reset(),ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}$e.prototype.isWebGLRenderer=!0;class eb extends $e{}eb.prototype.isWebGL1Renderer=!0;class Gl extends Ye{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Gl.prototype.isScene=!0;class ns{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ns.prototype.isInterleavedBuffer=!0;const Et=new A;class Zr{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Zr.prototype.isInterleavedBufferAttribute=!0;class Wl extends ut{constructor(e){super(),this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Wl.prototype.isSpriteMaterial=!0;let Vi;const Cr=new A,ki=new A,Gi=new A,Wi=new ue,Lr=new ue,Bf=new Ae,Ds=new A,Rr=new A,Is=new A,Wu=new ue,Ta=new ue,qu=new ue;class tb extends Ye{constructor(e){if(super(),this.type="Sprite",Vi===void 0){Vi=new tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ns(t,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Zr(n,3,0,!1)),Vi.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Vi,this.material=e!==void 0?e:new Wl,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Gi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Fs(Ds.set(-.5,-.5,0),Gi,o,ki,r,s),Fs(Rr.set(.5,-.5,0),Gi,o,ki,r,s),Fs(Is.set(.5,.5,0),Gi,o,ki,r,s),Wu.set(0,0),Ta.set(1,0),qu.set(1,1);let a=e.ray.intersectTriangle(Ds,Rr,Is,!1,Cr);if(a===null&&(Fs(Rr.set(-.5,.5,0),Gi,o,ki,r,s),Ta.set(0,1),a=e.ray.intersectTriangle(Ds,Is,Rr,!1,Cr),a===null))return;const l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:ot.getUV(Cr,Ds,Rr,Is,Wu,Ta,qu,new ue),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}tb.prototype.isSprite=!0;function Fs(i,e,t,n,r,s){Wi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Lr.x=s*Wi.x-r*Wi.y,Lr.y=r*Wi.x+s*Wi.y):Lr.copy(Wi),i.copy(e),i.x+=Lr.x,i.y+=Lr.y,i.applyMatrix4(Bf)}const Xu=new A,ju=new Ze,Ju=new Ze,nb=new A,Yu=new Ae;class Of extends Rt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;ju.fromBufferAttribute(r.attributes.skinIndex,e),Ju.fromBufferAttribute(r.attributes.skinWeight,e),Xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ju.getComponent(s);if(o!==0){const a=ju.getComponent(s);Yu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(nb.copy(Xu).applyMatrix4(Yu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Of.prototype.isSkinnedMesh=!0;class ib extends Ye{constructor(){super(),this.type="Bone"}}ib.prototype.isBone=!0;class rb extends gt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=ft,u=ft,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}rb.prototype.isDataTexture=!0;class rl extends ct{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}rl.prototype.isInstancedBufferAttribute=!0;const $u=new Ae,Zu=new Ae,Ns=[],Pr=new Rt;class sb extends Rt{constructor(e,t,n){super(e,t),this.instanceMatrix=new rl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,$u),Zu.multiplyMatrices(n,$u),Pr.matrixWorld=Zu,Pr.raycast(e,Ns);for(let o=0,a=Ns.length;o<a;o++){const l=Ns[o];l.instanceId=s,l.object=this,t.push(l)}Ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}sb.prototype.isInstancedMesh=!0;class yr extends ut{constructor(e){super(),this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}yr.prototype.isLineBasicMaterial=!0;const Ku=new A,Qu=new A,eh=new Ae,Aa=new _r,Bs=new gr;class ql extends Ye{constructor(e=new tt,t=new yr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ku.fromBufferAttribute(t,r-1),Qu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ku.distanceTo(Qu);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;eh.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(eh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,u=new A,h=new A,f=new A,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let C=_,T=S-1;C<T;C+=p){const E=g.getX(C),I=g.getX(C+1);if(c.fromBufferAttribute(d,E),u.fromBufferAttribute(d,I),Aa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let C=_,T=S-1;C<T;C+=p){if(c.fromBufferAttribute(d,C),u.fromBufferAttribute(d,C+1),Aa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ql.prototype.isLine=!0;const th=new A,nh=new A;class Xl extends ql{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)th.fromBufferAttribute(t,r),nh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+th.distanceTo(nh);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Xl.prototype.isLineSegments=!0;class ob extends ql{constructor(e,t){super(e,t),this.type="LineLoop"}}ob.prototype.isLineLoop=!0;class jl extends ut{constructor(e){super(),this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}jl.prototype.isPointsMaterial=!0;const ih=new Ae,sl=new _r,Os=new gr,zs=new A;class ab extends Ye{constructor(e=new tt,t=new jl){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;ih.copy(r).invert(),sl.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);zs.fromBufferAttribute(h,d),rh(zs,d,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)zs.fromBufferAttribute(h,g),rh(zs,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ab.prototype.isPoints=!0;function rh(i,e,t,n,r,s,o){const a=sl.distanceSqToPoint(i);if(a<t){const l=new A;sl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class lb extends gt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.minFilter=o!==void 0?o:Ct,this.magFilter=s!==void 0?s:Ct,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}lb.prototype.isVideoTexture=!0;class cb extends gt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=ft,this.minFilter=ft,this.generateMipmaps=!1,this.needsUpdate=!0}}cb.prototype.isFramebufferTexture=!0;class ub extends gt{constructor(e,t,n,r,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}ub.prototype.isCompressedTexture=!0;class hb extends gt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.needsUpdate=!0}}hb.prototype.isCanvasTexture=!0;class qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,r=[],s=[],o=[],a=new A,l=new Ae;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Do extends qt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Do.prototype.isEllipseCurve=!0;class zf extends Do{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.type="ArcCurve"}}zf.prototype.isArcCurve=!0;function Jl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Us=new A,Ca=new Jl,La=new Jl,Ra=new Jl;class Uf extends qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Us.subVectors(r[0],r[1]).add(r[0]),c=Us);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Us.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),Ca.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),La.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),Ra.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),La.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ra.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ca.calc(l),La.calc(l),Ra.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Uf.prototype.isCatmullRomCurve3=!0;function sh(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function fb(i,e){const t=1-i;return t*t*e}function db(i,e){return 2*(1-i)*i*e}function pb(i,e){return i*i*e}function Vr(i,e,t,n){return fb(i,e)+db(i,t)+pb(i,n)}function mb(i,e){const t=1-i;return t*t*t*e}function gb(i,e){const t=1-i;return 3*t*t*i*e}function _b(i,e){return 3*(1-i)*i*i*e}function xb(i,e){return i*i*i*e}function kr(i,e,t,n,r){return mb(i,e)+gb(i,t)+_b(i,n)+xb(i,r)}class Yl extends qt{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,r.x,s.x,o.x,a.x),kr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Yl.prototype.isCubicBezierCurve=!0;class Hf extends qt{constructor(e=new A,t=new A,n=new A,r=new A){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,r.x,s.x,o.x,a.x),kr(e,r.y,s.y,o.y,a.y),kr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Hf.prototype.isCubicBezierCurve3=!0;class Io extends qt{constructor(e=new ue,t=new ue){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ue;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Io.prototype.isLineCurve=!0;class yb extends qt{constructor(e=new A,t=new A){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $l extends qt{constructor(e=new ue,t=new ue,n=new ue){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,r.x,s.x,o.x),Vr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}$l.prototype.isQuadraticBezierCurve=!0;class Vf extends qt{constructor(e=new A,t=new A,n=new A){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,r.x,s.x,o.x),Vr(e,r.y,s.y,o.y),Vr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Vf.prototype.isQuadraticBezierCurve3=!0;class Zl extends qt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(sh(a,l.x,c.x,u.x,h.x),sh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}Zl.prototype.isSplineCurve=!0;var kf=Object.freeze({__proto__:null,ArcCurve:zf,CatmullRomCurve3:Uf,CubicBezierCurve:Yl,CubicBezierCurve3:Hf,EllipseCurve:Do,LineCurve:Io,LineCurve3:yb,QuadraticBezierCurve:$l,QuadraticBezierCurve3:Vf,SplineCurve:Zl});class vb extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Io(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new kf[r.type]().fromJSON(r))}return this}}class ol extends vb{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Io(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new $l(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Yl(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Do(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}new A;new A;new A;new ot;class is extends ol{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ol().fromJSON(r))}return this}}const bb={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Gf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(n&&(s=Tb(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?1/p:0}return Kr(s,o,t,a,l,p),o}};function Gf(i,e,t,n,r){let s,o;if(r===Ob(i,e,t,n)>0)for(s=e;s<t;s+=n)o=oh(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=oh(s,i[s],i[s+1],o);return o&&Fo(o,o.next)&&(es(o),o=o.next),o}function Kn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fo(t,t.next)||nt(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Pb(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?wb(i,n,r,s):Mb(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),es(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sb(Kn(i),e,t),Kr(i,e,t,n,r,s,2)):o===2&&Eb(i,e,t,n,r,s):Kr(Kn(i),e,t,n,r,s,1);break}}}function Mb(i){const e=i.prev,t=i,n=i.next;if(nt(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Ki(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&nt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function wb(i,e,t,n){const r=i.prev,s=i,o=i.next;if(nt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=al(a,l,e,t,n),f=al(c,u,e,t,n);let p=i.prevZ,g=i.nextZ;for(;p&&p.z>=h&&g&&g.z<=f;){if(p!==i.prev&&p!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&nt(p.prev,p,p.next)>=0||(p=p.prevZ,g!==i.prev&&g!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&nt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==i.prev&&p!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&nt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Sb(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Fo(r,s)&&Wf(r,n,n.next,s)&&Qr(r,s)&&Qr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),es(n),es(n.next),n=i=s),n=n.next}while(n!==i);return Kn(n)}function Eb(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fb(o,a)){let l=qf(o,a);o=Kn(o,o.next),l=Kn(l,l.next),Kr(o,e,t,n,r,s),Kr(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function Tb(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Gf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Ib(c));for(r.sort(Ab),s=0;s<r.length;s++)Cb(r[s],t),t=Kn(t,t.next);return t}function Ab(i,e){return i.x-e.x}function Cb(i,e){if(e=Lb(i,e),e){const t=qf(e,i);Kn(e,e.next),Kn(t,t.next)}}function Lb(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ki(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),Qr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Rb(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Rb(i,e){return nt(i.prev,i,e.prev)<0&&nt(e.next,i,i.next)<0}function Pb(i,e,t,n){let r=i;do r.z===null&&(r.z=al(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Db(r)}function Db(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function al(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ib(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ki(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function Fb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nb(i,e)&&(Qr(i,e)&&Qr(e,i)&&Bb(i,e)&&(nt(i.prev,i,e.prev)||nt(i,e.prev,e))||Fo(i,e)&&nt(i.prev,i,i.next)>0&&nt(e.prev,e,e.next)>0)}function nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fo(i,e){return i.x===e.x&&i.y===e.y}function Wf(i,e,t,n){const r=Vs(nt(i,e,t)),s=Vs(nt(i,e,n)),o=Vs(nt(t,n,i)),a=Vs(nt(t,n,e));return!!(r!==s&&o!==a||r===0&&Hs(i,t,e)||s===0&&Hs(i,n,e)||o===0&&Hs(t,i,n)||a===0&&Hs(t,e,n))}function Hs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vs(i){return i>0?1:i<0?-1:0}function Nb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return nt(i.prev,i,i.next)<0?nt(i,e,i.next)>=0&&nt(i,i.prev,e)>=0:nt(i,e,i.prev)<0||nt(i,i.next,e)<0}function Bb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qf(i,e){const t=new ll(i.i,i.x,i.y),n=new ll(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function oh(i,e,t,n){const r=new ll(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ll(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ob(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Yn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Yn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ah(e),lh(n,e);let o=e.length;t.forEach(ah);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,lh(n,t[l]);const a=bb.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ah(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class vr extends tt{constructor(e=new is([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:zb;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let C,T=!1,E,I,N,b;_&&(C=_.getSpacedPoints(u),T=!0,f=!1,E=_.computeFrenetFrames(u,!1),I=new A,N=new A,b=new A),f||(d=0,p=0,g=0,m=0);const L=a.extractPoints(c);let G=L.shape;const O=L.holes;if(!Yn.isClockWise(G)){G=G.reverse();for(let te=0,v=O.length;te<v;te++){const w=O[te];Yn.isClockWise(w)&&(O[te]=w.reverse())}}const ce=Yn.triangulateShape(G,O),B=G;for(let te=0,v=O.length;te<v;te++){const w=O[te];G=G.concat(w)}function Q(te,v,w){return v||console.error("THREE.ExtrudeGeometry: vec does not exist"),v.clone().multiplyScalar(w).add(te)}const k=G.length,X=ce.length;function j(te,v,w){let D,F,V;const J=te.x-v.x,$=te.y-v.y,ne=w.x-te.x,re=w.y-te.y,y=J*J+$*$,x=J*re-$*ne;if(Math.abs(x)>Number.EPSILON){const P=Math.sqrt(y),U=Math.sqrt(ne*ne+re*re),Z=v.x-$/P,oe=v.y+J/P,_e=w.x-re/U,H=w.y+ne/U,ye=((_e-Z)*re-(H-oe)*ne)/(J*re-$*ne);D=Z+J*ye-te.x,F=oe+$*ye-te.y;const Te=D*D+F*F;if(Te<=2)return new ue(D,F);V=Math.sqrt(Te/2)}else{let P=!1;J>Number.EPSILON?ne>Number.EPSILON&&(P=!0):J<-Number.EPSILON?ne<-Number.EPSILON&&(P=!0):Math.sign($)===Math.sign(re)&&(P=!0),P?(D=-$,F=J,V=Math.sqrt(y)):(D=J,F=$,V=Math.sqrt(y/2))}return new ue(D/V,F/V)}const q=[];for(let te=0,v=B.length,w=v-1,D=te+1;te<v;te++,w++,D++)w===v&&(w=0),D===v&&(D=0),q[te]=j(B[te],B[w],B[D]);const ee=[];let le,se=q.concat();for(let te=0,v=O.length;te<v;te++){const w=O[te];le=[];for(let D=0,F=w.length,V=F-1,J=D+1;D<F;D++,V++,J++)V===F&&(V=0),J===F&&(J=0),le[D]=j(w[D],w[V],w[J]);ee.push(le),se=se.concat(le)}for(let te=0;te<d;te++){const v=te/d,w=p*Math.cos(v*Math.PI/2),D=g*Math.sin(v*Math.PI/2)+m;for(let F=0,V=B.length;F<V;F++){const J=Q(B[F],q[F],D);Fe(J.x,J.y,-w)}for(let F=0,V=O.length;F<V;F++){const J=O[F];le=ee[F];for(let $=0,ne=J.length;$<ne;$++){const re=Q(J[$],le[$],D);Fe(re.x,re.y,-w)}}}const ae=g+m;for(let te=0;te<k;te++){const v=f?Q(G[te],se[te],ae):G[te];T?(N.copy(E.normals[0]).multiplyScalar(v.x),I.copy(E.binormals[0]).multiplyScalar(v.y),b.copy(C[0]).add(N).add(I),Fe(b.x,b.y,b.z)):Fe(v.x,v.y,0)}for(let te=1;te<=u;te++)for(let v=0;v<k;v++){const w=f?Q(G[v],se[v],ae):G[v];T?(N.copy(E.normals[te]).multiplyScalar(w.x),I.copy(E.binormals[te]).multiplyScalar(w.y),b.copy(C[te]).add(N).add(I),Fe(b.x,b.y,b.z)):Fe(w.x,w.y,h/u*te)}for(let te=d-1;te>=0;te--){const v=te/d,w=p*Math.cos(v*Math.PI/2),D=g*Math.sin(v*Math.PI/2)+m;for(let F=0,V=B.length;F<V;F++){const J=Q(B[F],q[F],D);Fe(J.x,J.y,h+w)}for(let F=0,V=O.length;F<V;F++){const J=O[F];le=ee[F];for(let $=0,ne=J.length;$<ne;$++){const re=Q(J[$],le[$],D);T?Fe(re.x,re.y+C[u-1].y,C[u-1].x+w):Fe(re.x,re.y,h+w)}}}be(),Se();function be(){const te=r.length/3;if(f){let v=0,w=k*v;for(let D=0;D<X;D++){const F=ce[D];Ee(F[2]+w,F[1]+w,F[0]+w)}v=u+d*2,w=k*v;for(let D=0;D<X;D++){const F=ce[D];Ee(F[0]+w,F[1]+w,F[2]+w)}}else{for(let v=0;v<X;v++){const w=ce[v];Ee(w[2],w[1],w[0])}for(let v=0;v<X;v++){const w=ce[v];Ee(w[0]+k*u,w[1]+k*u,w[2]+k*u)}}n.addGroup(te,r.length/3-te,0)}function Se(){const te=r.length/3;let v=0;K(B,v),v+=B.length;for(let w=0,D=O.length;w<D;w++){const F=O[w];K(F,v),v+=F.length}n.addGroup(te,r.length/3-te,1)}function K(te,v){let w=te.length;for(;--w>=0;){const D=w;let F=w-1;F<0&&(F=te.length-1);for(let V=0,J=u+d*2;V<J;V++){const $=k*V,ne=k*(V+1),re=v+D+$,y=v+F+$,x=v+F+ne,P=v+D+ne;Pe(re,y,x,P)}}}function Fe(te,v,w){l.push(te),l.push(v),l.push(w)}function Ee(te,v,w){he(te),he(v),he(w);const D=r.length/3,F=S.generateTopUV(n,r,D-3,D-2,D-1);Ne(F[0]),Ne(F[1]),Ne(F[2])}function Pe(te,v,w,D){he(te),he(v),he(D),he(v),he(w),he(D);const F=r.length/3,V=S.generateSideWallUV(n,r,F-6,F-3,F-2,F-1);Ne(V[0]),Ne(V[1]),Ne(V[3]),Ne(V[1]),Ne(V[2]),Ne(V[3])}function he(te){r.push(l[te*3+0]),r.push(l[te*3+1]),r.push(l[te*3+2])}function Ne(te){s.push(te.x),s.push(te.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ub(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new kf[r.type]().fromJSON(r)),new vr(n,e.options)}}const zb={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],m=e[s*3],d=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(f,1-g),new ue(m,1-_)]:[new ue(a,1-l),new ue(u,1-h),new ue(p,1-g),new ue(d,1-_)]}};function Ub(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kl extends tt{constructor(e=new is([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Yn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,_=g.length;d<_;d++){const S=g[d];Yn.isClockWise(S)===!0&&(g[d]=S.reverse())}const m=Yn.triangulateShape(p,g);for(let d=0,_=g.length;d<_;d++){const S=g[d];p=p.concat(S)}for(let d=0,_=p.length;d<_;d++){const S=p[d];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let d=0,_=m.length;d<_;d++){const S=m[d],C=S[0]+h,T=S[1]+h,E=S[2]+h;n.push(C,T,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Hb(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Kl(n,e.curveSegments)}}function Hb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Xf extends ut{constructor(e){super(),this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}Xf.prototype.isShadowMaterial=!0;class jf extends tn{constructor(e){super(e),this.type="RawShaderMaterial"}}jf.prototype.isRawShaderMaterial=!0;class Ql extends ut{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}Ql.prototype.isMeshStandardMaterial=!0;class Jf extends Ql{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Jf.prototype.isMeshPhysicalMaterial=!0;class Yf extends ut{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}Yf.prototype.isMeshPhongMaterial=!0;class $f extends ut{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}$f.prototype.isMeshToonMaterial=!0;class Zf extends ut{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Zf.prototype.isMeshNormalMaterial=!0;class ec extends ut{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}ec.prototype.isMeshLambertMaterial=!0;class Kf extends ut{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new we(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}Kf.prototype.isMeshMatcapMaterial=!0;class Qf extends yr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Qf.prototype.isLineDashedMaterial=!0;const Vb={ShadowMaterial:Xf,SpriteMaterial:Wl,RawShaderMaterial:jf,ShaderMaterial:tn,PointsMaterial:jl,MeshPhysicalMaterial:Jf,MeshStandardMaterial:Ql,MeshPhongMaterial:Yf,MeshToonMaterial:$f,MeshNormalMaterial:Zf,MeshLambertMaterial:ec,MeshDepthMaterial:Vl,MeshDistanceMaterial:kl,MeshBasicMaterial:Ao,MeshMatcapMaterial:Kf,LineDashedMaterial:Qf,LineBasicMaterial:yr,Material:ut};ut.fromType=function(i){return new Vb[i]};const et={arraySlice:function(i,e,t){return et.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*r;if(!(g<t||g>=n)){h.push(c.times[p]);for(let m=0;m<u;++m)f.push(c.values[p*u+m])}}h.length!==0&&(c.times=et.convertArray(h,c.times.constructor),c.values=et.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const _=u,S=h-u;m=et.arraySlice(a.values,_,S)}else if(s>=a.times[g]){const _=g*h+u,S=_+h-u;m=et.arraySlice(a.values,_,S)}else{const _=a.createInterpolant(),S=u,C=h-u;_.evaluate(s),m=et.arraySlice(_.resultBuffer,S,C)}l==="quaternion"&&new Bt().fromArray(m).normalize().conjugate().toArray(m);const d=c.times.length;for(let _=0;_<d;++_){const S=_*p+f;if(l==="quaternion")Bt.multiplyQuaternionsFlat(c.values,S,m,0,c.values,S);else{const C=p-f*2;for(let T=0;T<C;++T)c.values[S+T]-=m[T]}}}return i.blendMode=yf,i}};class Qn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Qn.prototype.beforeStart_=Qn.prototype.copySampleValue_;Qn.prototype.afterEnd_=Qn.prototype.copySampleValue_;class kb extends Qn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yi,endingEnd:Yi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $i:s=e,a=2*t-n;break;case ro:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $i:o=e,l=2*n-t;break;case ro:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),m=g*g,d=m*g,_=-f*d+2*f*m-f*g,S=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,C=(-1-p)*d+(1.5+p)*m+.5*g,T=p*d-p*m;for(let E=0;E!==a;++E)s[E]=_*o[u+E]+S*o[c+E]+C*o[l+E]+T*o[h+E];return s}}class ed extends Qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Gb extends Qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=et.convertArray(t,this.TimeBufferType),this.values=et.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:et.convertArray(e.times,Array),values:et.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ed(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case no:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=et.arraySlice(n,s,o),this.values=et.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&et.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=et.arraySlice(this.times),t=et.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===$o,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=et.arraySlice(e,0,o),this.values=et.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=et.arraySlice(this.times,0),t=et.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=io;class br extends yn{}br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=no;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class td extends yn{}td.prototype.ValueTypeName="color";class oo extends yn{}oo.prototype.ValueTypeName="number";class Wb extends Qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Bt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class rs extends yn{InterpolantFactoryMethodLinear(e){return new Wb(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=io;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends yn{}Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=no;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends yn{}ao.prototype.ValueTypeName="vector";class ch{constructor(e,t=-1,n,r=Fl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(yn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=et.getKeyframeOrder(l);l=et.sortedArray(l,1,u),c=et.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new oo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,m){if(p.length!==0){const d=[],_=[];et.flattenJSON(p,d,_,g),d.length!==0&&m.push(new h(f,d,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let S=0;S!==f[g].morphTargets.length;++S){const C=f[g];d.push(C.time),_.push(C.morphTarget===m?1:0)}r.push(new oo(".morphTargetInfluence["+m+"]",d,_))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(ao,p+".position",f,"pos",r),n(rs,p+".quaternion",f,"rot",r),n(ao,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oo;case"vector":case"vector2":case"vector3":case"vector4":return ao;case"color":return td;case"quaternion":return rs;case"bool":case"boolean":return br;case"string":return Mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Xb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qb(i.type);if(i.times===void 0){const t=[],n=[];et.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const hr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Jb=new jb;class ei{constructor(e){this.manager=e!==void 0?e:Jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const En={};class Yb extends ei{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:r});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=En[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){S();function S(){h.read().then(({done:C,value:T})=>{if(C)_.close();else{m+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let I=0,N=u.length;I<N;I++){const b=u[I];b.onProgress&&b.onProgress(E)}_.enqueue(T),S()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{hr.add(e,c);const u=En[e];delete En[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=En[e];if(u===void 0)throw this.manager.itemError(e),c;delete En[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nd extends ei{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=$r("img");function l(){u(),hr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $b extends ei{constructor(e){super(e)}load(e,t,n,r){const s=new Co,o=new nd(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class id extends ei{constructor(e){super(e)}load(e,t,n,r){const s=new gt,o=new nd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class xn extends Ye{constructor(e,t=1){super(),this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}xn.prototype.isLight=!0;class Zb extends xn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.groundColor=new we(t)}copy(e){return xn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Zb.prototype.isHemisphereLight=!0;const uh=new Ae,hh=new A,fh=new A;class tc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rd extends tc{constructor(){super(new Lt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=tl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}rd.prototype.isSpotLightShadow=!0;class Kb extends xn{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new rd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Kb.prototype.isSpotLight=!0;const dh=new Ae,Dr=new A,Pa=new A;class sd extends tc{constructor(){super(new Lt(90,1,.5,500)),this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),Pa.copy(n.position),Pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pa),n.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}sd.prototype.isPointLightShadow=!0;class Qb extends xn{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new sd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Qb.prototype.isPointLight=!0;class od extends tc{constructor(){super(new Ul(-5,5,5,-5,.5,500))}}od.prototype.isDirectionalLightShadow=!0;class cl extends xn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new od}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}cl.prototype.isDirectionalLight=!0;class ad extends xn{constructor(e,t){super(e,t),this.type="AmbientLight"}}ad.prototype.isAmbientLight=!0;class eM extends xn{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}eM.prototype.isRectAreaLight=!0;class ld{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}ld.prototype.isSphericalHarmonics3=!0;class nc extends xn{constructor(e=new ld,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}nc.prototype.isLightProbe=!0;class tM{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nM extends tt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}nM.prototype.isInstancedBufferGeometry=!0;class iM extends ei{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){hr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}iM.prototype.isImageBitmapLoader=!0;let ks;const rM={getContext:function(){return ks===void 0&&(ks=new(window.AudioContext||window.webkitAudioContext)),ks},setContext:function(i){ks=i}};class sM extends ei{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Yb(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);rM.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class oM extends nc{constructor(e,t,n=1){super(void 0,n);const r=new we().set(e),s=new we().set(t),o=new A(r.r,r.g,r.b),a=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}oM.prototype.isHemisphereLightProbe=!0;class aM extends nc{constructor(e,t=1){super(void 0,t);const n=new we().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}aM.prototype.isAmbientLightProbe=!0;class lM extends Ye{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class cM{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Bt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;Bt.multiplyQuaternionsFlat(e,o,e,t,e,n),Bt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const ic="\\[\\]\\.:\\/",uM=new RegExp("["+ic+"]","g"),rc="[^"+ic+"]",hM="[^"+ic.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",rc),dM=/(WCOD+)?/.source.replace("WCOD",hM),pM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),mM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),gM=new RegExp("^"+fM+dM+pM+mM+"$"),_M=["material","materials","bones"];class xM{constructor(e,t,n){const r=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(e){const t=gM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);_M.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=xM;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yM{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Yi,endingEnd:Yi};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=s_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yf:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Fl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===o_;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===r_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=$i,r.endingEnd=$i):(e?r.endingStart=this.zeroSlopeAtStart?$i:Yi:r.endingStart=ro,t?r.endingEnd=this.zeroSlopeAtEnd?$i:Yi:r.endingEnd=ro)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class vM extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],p=f.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new cM(je.create(n,p,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ed(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?ch.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fl),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new yM(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?ch.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}vM.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class bM extends ns{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}bM.prototype.isInstancedInterleavedBuffer=!0;const kn=new A,Gs=new Ae,Da=new Ae;class MM extends Xl{constructor(e){const t=cd(e),n=new tt,r=[],s=[],o=new we(0,0,1),a=new we(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new dt(r,3)),n.setAttribute("color",new dt(s,3));const l=new yr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Da.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Gs.multiplyMatrices(Da,a.matrixWorld),kn.setFromMatrixPosition(Gs),r.setXYZ(o,kn.x,kn.y,kn.z),Gs.multiplyMatrices(Da,a.parent.matrixWorld),kn.setFromMatrixPosition(Gs),r.setXYZ(o+1,kn.x,kn.y,kn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function cd(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,cd(i.children[t]));return e}class wM extends Xl{constructor(e=10,t=10,n=4473924,r=8947848){n=new we(n),r=new we(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=f===s?n:r;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}const u=new tt;u.setAttribute("position",new dt(l,3)),u.setAttribute("color",new dt(c,3));const h=new yr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const un=new Uint32Array(512),hn=new Uint32Array(512);for(let i=0;i<256;++i){const e=i-127;e<-27?(un[i]=0,un[i|256]=32768,hn[i]=24,hn[i|256]=24):e<-14?(un[i]=1024>>-e-14,un[i|256]=1024>>-e-14|32768,hn[i]=-e-1,hn[i|256]=-e-1):e<=15?(un[i]=e+15<<10,un[i|256]=e+15<<10|32768,hn[i]=13,hn[i|256]=13):e<128?(un[i]=31744,un[i|256]=64512,hn[i]=24,hn[i|256]=24):(un[i]=31744,un[i|256]=64512,hn[i]=13,hn[i|256]=13)}const ud=new Uint32Array(2048),ss=new Uint32Array(64),SM=new Uint32Array(64);for(let i=1;i<1024;++i){let e=i<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,ud[i]=e|t}for(let i=1024;i<2048;++i)ud[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)ss[i]=i<<23;ss[31]=1199570944;ss[32]=2147483648;for(let i=33;i<63;++i)ss[i]=2147483648+(i-32<<23);ss[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(SM[i]=1024);qt.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(qt.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};ol.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};wM.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};MM.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ei.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),tM.extractUrlBase(i)};ei.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};nn.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};nn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};nn.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};nn.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};nn.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};wi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};gr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Lo.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};yt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};yt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};yt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};yt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Ae.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Ae.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Ae.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};Ae.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Ae.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ae.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ae.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Ae.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ae.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ae.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ae.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ae.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ae.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ae.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Ae.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};An.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};Bt.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};Bt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};_r.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};_r.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};_r.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};ot.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ot.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};ot.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};ot.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};ot.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};ot.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(i,e,t,n,r)};ot.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(i,e,t,n)};is.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};is.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new vr(this,i)};is.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Kl(this,i)};ue.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};ue.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};A.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};A.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};A.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};A.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};A.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ye.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Ye.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ye.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};Ye.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ye.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ye.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Rt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Rt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),a_},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Of.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Lt.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(xn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(ct.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===so},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(so)}}});ct.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?so:Yr),this};ct.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ct.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};tt.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};tt.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new ct(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};tt.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};tt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};tt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};tt.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};tt.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(tt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ns.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?so:Yr),this};ns.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};vr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};vr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};vr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Gl.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new we}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===mf}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(tn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});$e.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};$e.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};$e.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};$e.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};$e.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};$e.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};$e.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};$e.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};$e.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};$e.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};$e.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};$e.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};$e.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};$e.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};$e.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};$e.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};$e.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};$e.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};$e.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};$e.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};$e.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};$e.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};$e.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};$e.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};$e.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties($e.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Qe:Zn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(If.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ht.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});lM.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new sM().load(i,function(n){e.setBuffer(n)}),this};zl.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};zl.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Mi.crossOrigin=void 0;Mi.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new id;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Mi.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new $b;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Mi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Mi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);var EM="/assets/clouds.8808299a.png";const TM={id:"background_three"},AM=_o({setup(i){let e,t,n,r;const s=new id,o=0,a=16777215,l=11240335;let c=120;const u=.002;Al(()=>h());function h(){t=new Gl,t.background=new we(o),n=new $e({antialias:!0,canvas:document.getElementById("background_three")}),n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),p(),f(),g(),window.addEventListener("resize",m),d()}function f(){t.add(new ad(o));let S=new cl(a,.85);S.position.set(-1,0,1),t.add(S);let C=new cl(l,.15);C.position.set(1,0,1),t.add(C)}function p(){e=new Lt(60,window.innerWidth/window.innerHeight,1,1e4),e.position.z=1e3,t.add(e)}function g(){r=[],s.load(EM,S=>{const C=new ec({color:a,map:S,transparent:!0});C.map.minFilter=Ct;const T=new Ro(300,300);for(;c--;){let E=new Rt(T,C);E.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1e3-100),E.rotation.z=Math.random()*360,r.push(E),t.add(E)}})}function m(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function d(){requestAnimationFrame(d),r.forEach(S=>{S.rotation.z+=u}),_()}function _(){n.render(t,e)}return(S,C)=>(mn(),Ln("canvas",TM))}});var CM=Mo(AM,[["__scopeId","data-v-2c71cca8"]]);const LM={class:"container flex items-center space-x-48"},RM=lt("img",{src:Wm,class:"profile-picture shadow-lg rounded-[15px]",alt:"Photo de Thomas SANCTORUM"},null,-1),PM={class:"w-full justify-items-center"},DM=_o({setup(i){return(e,t)=>(mn(),Ln(At,null,[Nt(CM),lt("figure",LM,[RM,lt("div",null,[lt("header",PM,[Nt(Jm,{content:"Thomas SANCTORUM"})]),Nt(rg),lt("figcaption",null,[Nt(fg)])])])],64))}});km(DM).mount("#app");
