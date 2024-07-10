import{a7 as P,a1 as u,X as H,S as A,b2 as I,bk as pe}from"../../index-CkphMBlH.js";import{R as te}from"./index-CJpLNZG1.js";import{f as Y,p as Oe,b as f,d as we,e as Se,D as be,k as d,s as C,w as he}from"./vue-chunks-C4JOcZXM.js";const ne=Symbol("OverflowContextProviderKey"),Q=Y({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup(e,o){let{slots:r}=o;return Oe(ne,f(()=>e.value)),()=>{var t;return(t=r.default)===null||t===void 0?void 0:t.call(r)}}}),Ce=()=>we(ne,f(()=>null));var Ie=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const _=void 0,X=Y({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:P.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:P.any,invalidate:Boolean},setup(e,o){let{slots:r,expose:t}=o;const n=f(()=>e.responsive&&!e.display),m=Se();t({itemNodeRef:m});function O(l){e.registerSize(e.itemKey,l)}return be(()=>{O(null)}),()=>{var l;const{prefixCls:S,invalidate:x,item:y,renderItem:g,responsive:v,registerSize:D,itemKey:R,display:k,order:N,component:z="div"}=e,b=Ie(e,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"]),W=(l=r.default)===null||l===void 0?void 0:l.call(r),L=g&&y!==_?g(y):W;let w;x||(w={opacity:n.value?0:1,height:n.value?0:_,overflowY:n.value?"hidden":_,order:v?N:_,pointerEvents:n.value?"none":_,position:n.value?"absolute":_});const K={};return n.value&&(K["aria-hidden"]=!0),d(te,{disabled:!v,onResize:E=>{let{offsetWidth:U}=E;O(U)}},{default:()=>d(z,u(u(u({class:H(!x&&S),style:w},K),b),{},{ref:m}),{default:()=>[L]})})}}});var G=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const xe=Y({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:P.any,title:P.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function},role:String,tabindex:Number},setup(e,o){let{slots:r,attrs:t}=o;const n=Ce();return()=>{var m;if(!n.value){const{component:g="div"}=e,v=G(e,["component"]);return d(g,u(u({},v),t),{default:()=>[(m=r.default)===null||m===void 0?void 0:m.call(r)]})}const O=n.value,{className:l}=O,S=G(O,["className"]),{class:x}=t,y=G(t,["class"]);return d(Q,{value:null},{default:()=>[d(X,u(u(u({class:H(l,x)},S),y),e),r)]})}}});var Re=function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const ae="responsive",re="invalidate";function Ne(e){return`+ ${e.length} ...`}const Ke=()=>({id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:P.any,component:String,itemComponent:P.any,onVisibleChange:Function,ssr:String,onMousedown:Function}),T=Y({name:"Overflow",inheritAttrs:!1,props:Ke(),emits:["visibleChange"],setup(e,o){let{attrs:r,emit:t,slots:n}=o;const m=f(()=>e.ssr==="full"),O=C(null),l=f(()=>O.value||0),S=C(new Map),x=C(0),y=C(0),g=C(0),v=C(null),D=C(null),R=f(()=>D.value===null&&m.value?Number.MAX_SAFE_INTEGER:D.value||0),k=C(!1),N=f(()=>`${e.prefixCls}-item`),z=f(()=>Math.max(x.value,y.value)),b=f(()=>!!(e.data.length&&e.maxCount===ae)),W=f(()=>e.maxCount===re),L=f(()=>b.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount),w=f(()=>{let a=e.data;return b.value?O.value===null&&m.value?a=e.data:a=e.data.slice(0,Math.min(e.data.length,l.value/e.itemWidth)):typeof e.maxCount=="number"&&(a=e.data.slice(0,e.maxCount)),a}),K=f(()=>b.value?e.data.slice(R.value+1):e.data.slice(w.value.length)),E=(a,i)=>{var s;return typeof e.itemKey=="function"?e.itemKey(a):(s=e.itemKey&&(a==null?void 0:a[e.itemKey]))!==null&&s!==void 0?s:i},U=f(()=>e.renderItem||(a=>a)),$=(a,i)=>{D.value=a,i||(k.value=a<e.data.length-1,t("visibleChange",a))},oe=(a,i)=>{O.value=i.clientWidth},q=(a,i)=>{const s=new Map(S.value);i===null?s.delete(a):s.set(a,i),S.value=s},ie=(a,i)=>{x.value=y.value,y.value=i},le=(a,i)=>{g.value=i},V=a=>S.value.get(E(w.value[a],a));return he([l,S,y,g,()=>e.itemKey,w],()=>{if(l.value&&z.value&&w.value){let a=g.value;const i=w.value.length,s=i-1;if(!i){$(0),v.value=null;return}for(let p=0;p<i;p+=1){const F=V(p);if(F===void 0){$(p-1,!0);break}if(a+=F,s===0&&a<=l.value||p===s-1&&a+V(s)<=l.value){$(s),v.value=null;break}else if(a+z.value>l.value){$(p-1),v.value=a-F-g.value+y.value;break}}e.suffix&&V(0)+g.value>l.value&&(v.value=null)}}),()=>{const a=k.value&&!!K.value.length,{itemComponent:i,renderRawItem:s,renderRawRest:p,renderRest:F,prefixCls:se="rc-overflow",suffix:J,component:ue="div",id:ce,onMousedown:fe}=e,{class:de,style:me}=r,ve=Re(r,["class","style"]);let Z={};v.value!==null&&b.value&&(Z={position:"absolute",left:`${v.value}px`,top:0});const M={prefixCls:N.value,responsive:b.value,component:i,invalidate:W.value},ye=s?(c,h)=>{const j=E(c,h);return d(Q,{key:j,value:A(A({},M),{order:h,item:c,itemKey:j,registerSize:q,display:h<=R.value})},{default:()=>[s(c,h)]})}:(c,h)=>{const j=E(c,h);return d(X,u(u({},M),{},{order:h,key:j,item:c,renderItem:U.value,itemKey:j,registerSize:q,display:h<=R.value}),null)};let B=()=>null;const ee={order:a?R.value:Number.MAX_SAFE_INTEGER,className:`${N.value} ${N.value}-rest`,registerSize:ie,display:a};if(p)p&&(B=()=>d(Q,{value:A(A({},M),ee)},{default:()=>[p(K.value)]}));else{const c=F||Ne;B=()=>d(X,u(u({},M),ee),{default:()=>typeof c=="function"?c(K.value):c})}const ge=()=>{var c;return d(ue,u({id:ce,class:H(!W.value&&se,de),style:me,onMousedown:fe},ve),{default:()=>[w.value.map(ye),L.value?B():null,J&&d(X,u(u({},M),{},{order:R.value,class:`${N.value}-suffix`,registerSize:le,display:!0,style:Z}),{default:()=>J}),(c=n.default)===null||c===void 0?void 0:c.call(n)]})};return d(te,{disabled:!b.value,onResize:oe},{default:ge})}}});T.Item=xe;T.RESPONSIVE=ae;T.INVALIDATE=re;const Ye=T,_e=new I("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),Pe=new I("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),Ee=new I("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),Fe=new I("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),Me=new I("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),je=new I("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),De=new I("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),ze=new I("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),We={"slide-up":{inKeyframes:_e,outKeyframes:Pe},"slide-down":{inKeyframes:Ee,outKeyframes:Fe},"slide-left":{inKeyframes:Me,outKeyframes:je},"slide-right":{inKeyframes:De,outKeyframes:ze}},Te=(e,o)=>{const{antCls:r}=e,t=`${r}-${o}`,{inKeyframes:n,outKeyframes:m}=We[o];return[pe(t,n,m,e.motionDurationMid),{[`
      ${t}-enter,
      ${t}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint},[`${t}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};export{Ye as O,Ee as a,Pe as b,Fe as c,Te as i,_e as s};
