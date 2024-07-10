import{bm as ut,bn as vt,aJ as ye,ad as U,X as oe,S as T,a_ as L,a7 as Ie,ab as F,a$ as $e,a1 as Q,a9 as xe,$ as bt,Q as pt,R as ft,b5 as mt,T as Qe,aq as et,ae as tt,ar as ht,ac as gt,aG as Ce,aT as $t,aA as yt,Z as xt,aM as _t,aa as St,ag as De,W as Ct,Y as Tt}from"../../index-CkphMBlH.js";import{s as W,o as Ne,f as ie,e as Z,b as H,k as f,j as Pe,x as Re,w as se,p as wt,d as Pt}from"./vue-chunks-C4JOcZXM.js";import{u as Rt,E as It,M as Et,_ as Bt}from"./index-D647WIsX.js";import{D as Lt}from"./Dropdown-1l4fbfYC.js";import{R as Ke}from"./index-CJpLNZG1.js";import{u as At}from"./useRefs-q3q6mNJg.js";import{c as kt,h as Dt,f as Mt}from"./Password-C4pJDvMr.js";import{i as Nt}from"./isMobile-D_4OiXLP.js";import{u as Xe}from"./CheckOutlined-CxB3LAny.js";import{P as Ot}from"./PlusOutlined-y-V1v04t.js";import{i as je}from"./slide-CwAboZ-L.js";function Wt(e,t,a){for(var o=-1,i=t.length,l={};++o<i;){var n=t[o],b=kt(e,n);a(b,n)&&ut(l,vt(n,e),b)}return l}function Ht(e,t){return Wt(e,t,function(a,o){return Dt(e,o)})}var at=Mt(function(e,t){return e==null?{}:Ht(e,t)});function zt(e){const t=W(),a=W(!1);function o(){for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];a.value||(ye.cancel(t.value),t.value=ye(()=>{e(...l)}))}return Ne(()=>{a.value=!0,ye.cancel(t.value)}),o}function Gt(e){const t=W([]),a=W(typeof e=="function"?e():e),o=zt(()=>{let l=a.value;t.value.forEach(n=>{l=n(l)}),t.value=[],a.value=l});function i(l){t.value.push(l),o()}return[a,i]}const Kt=ie({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup(e,t){let{expose:a,attrs:o}=t;const i=Z();function l(m){var u;!((u=e.tab)===null||u===void 0)&&u.disabled||e.onClick(m)}a({domRef:i});function n(m){var u;m.preventDefault(),m.stopPropagation(),e.editable.onEdit("remove",{key:(u=e.tab)===null||u===void 0?void 0:u.key,event:m})}const b=H(()=>{var m;return e.editable&&e.closable!==!1&&!(!((m=e.tab)===null||m===void 0)&&m.disabled)});return()=>{var m;const{prefixCls:u,id:v,active:_,tab:{key:p,tab:s,disabled:y,closeIcon:x},renderWrapper:w,removeAriaLabel:S,editable:k,onFocus:G}=e,D=`${u}-tab`,r=f("div",{key:p,ref:i,class:oe(D,{[`${D}-with-remove`]:b.value,[`${D}-active`]:_,[`${D}-disabled`]:y}),style:o.style,onClick:l},[f("div",{role:"tab","aria-selected":_,id:v&&`${v}-tab-${p}`,class:`${D}-btn`,"aria-controls":v&&`${v}-panel-${p}`,"aria-disabled":y,tabindex:y?null:0,onClick:g=>{g.stopPropagation(),l(g)},onKeydown:g=>{[U.SPACE,U.ENTER].includes(g.which)&&(g.preventDefault(),l(g))},onFocus:G},[typeof s=="function"?s():s]),b.value&&f("button",{type:"button","aria-label":S||"remove",tabindex:0,class:`${D}-remove`,onClick:g=>{g.stopPropagation(),n(g)}},[(x==null?void 0:x())||((m=k.removeIcon)===null||m===void 0?void 0:m.call(k))||"×"])]);return w?w(r):r}}}),Fe={width:0,height:0,left:0,top:0};function Xt(e,t){const a=Z(new Map);return Pe(()=>{var o,i;const l=new Map,n=e.value,b=t.value.get((o=n[0])===null||o===void 0?void 0:o.key)||Fe,m=b.left+b.width;for(let u=0;u<n.length;u+=1){const{key:v}=n[u];let _=t.value.get(v);_||(_=t.value.get((i=n[u-1])===null||i===void 0?void 0:i.key)||Fe);const p=l.get(v)||T({},_);p.right=m-p.left-p.width,l.set(v,p)}a.value=new Map(l)}),a}const nt=ie({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup(e,t){let{expose:a,attrs:o}=t;const i=Z();return a({domRef:i}),()=>{const{prefixCls:l,editable:n,locale:b}=e;return!n||n.showAdd===!1?null:f("button",{ref:i,type:"button",class:`${l}-nav-add`,style:o.style,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:m=>{n.onEdit("add",{event:m})}},[n.addIcon?n.addIcon():"+"])}}}),jt={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ie.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function},popupClassName:String,getPopupContainer:F()},Ft=ie({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:jt,emits:["tabClick"],slots:Object,setup(e,t){let{attrs:a,slots:o}=t;const[i,l]=L(!1),[n,b]=L(null),m=s=>{const y=e.tabs.filter(S=>!S.disabled);let x=y.findIndex(S=>S.key===n.value)||0;const w=y.length;for(let S=0;S<w;S+=1){x=(x+s+w)%w;const k=y[x];if(!k.disabled){b(k.key);return}}},u=s=>{const{which:y}=s;if(!i.value){[U.DOWN,U.SPACE,U.ENTER].includes(y)&&(l(!0),s.preventDefault());return}switch(y){case U.UP:m(-1),s.preventDefault();break;case U.DOWN:m(1),s.preventDefault();break;case U.ESC:l(!1);break;case U.SPACE:case U.ENTER:n.value!==null&&e.onTabClick(n.value,s);break}},v=H(()=>`${e.id}-more-popup`),_=H(()=>n.value!==null?`${v.value}-${n.value}`:null),p=(s,y)=>{s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:y,event:s})};return Re(()=>{se(n,()=>{const s=document.getElementById(_.value);s&&s.scrollIntoView&&s.scrollIntoView(!1)},{flush:"post",immediate:!0})}),se(i,()=>{i.value||b(null)}),Rt({}),()=>{var s;const{prefixCls:y,id:x,tabs:w,locale:S,mobile:k,moreIcon:G=((s=o.moreIcon)===null||s===void 0?void 0:s.call(o))||f(It,null,null),moreTransitionName:D,editable:r,tabBarGutter:g,rtl:c,onTabClick:$,popupClassName:E}=e;if(!w.length)return null;const P=`${y}-dropdown`,K=S==null?void 0:S.dropdownAriaLabel,le={[c?"marginRight":"marginLeft"]:g};w.length||(le.visibility="hidden",le.order=1);const ce=oe({[`${P}-rtl`]:c,[`${E}`]:!0}),be=k?null:f(Lt,{prefixCls:P,trigger:["hover"],visible:i.value,transitionName:D,onVisibleChange:l,overlayClassName:ce,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:e.getPopupContainer},{overlay:()=>f(Et,{onClick:R=>{let{key:q,domEvent:M}=R;$(q,M),l(!1)},id:v.value,tabindex:-1,role:"listbox","aria-activedescendant":_.value,selectedKeys:[n.value],"aria-label":K!==void 0?K:"expanded dropdown"},{default:()=>[w.map(R=>{var q,M;const V=r&&R.closable!==!1&&!R.disabled;return f(Bt,{key:R.key,id:`${v.value}-${R.key}`,role:"option","aria-controls":x&&`${x}-panel-${R.key}`,disabled:R.disabled},{default:()=>[f("span",null,[typeof R.tab=="function"?R.tab():R.tab]),V&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:`${P}-menu-item-remove`,onClick:Y=>{Y.stopPropagation(),p(Y,R.key)}},[((q=R.closeIcon)===null||q===void 0?void 0:q.call(R))||((M=r.removeIcon)===null||M===void 0?void 0:M.call(r))||"×"])]})})]}),default:()=>f("button",{type:"button",class:`${y}-nav-more`,style:le,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":v.value,id:`${x}-more`,"aria-expanded":i.value,onKeydown:u},[G])});return f("div",{class:oe(`${y}-nav-operations`,a.class),style:a.style},[be,f(nt,{prefixCls:y,locale:S,editable:r},null)])}}}),ot=Symbol("tabsContextKey"),Vt=e=>{wt(ot,e)},it=()=>Pt(ot,{tabs:Z([]),prefixCls:Z()}),Yt=.1,Ve=.01,Te=20,Ye=Math.pow(.995,Te);function Ut(e,t){const[a,o]=L(),[i,l]=L(0),[n,b]=L(0),[m,u]=L(),v=Z();function _(r){const{screenX:g,screenY:c}=r.touches[0];o({x:g,y:c}),clearInterval(v.value)}function p(r){if(!a.value)return;r.preventDefault();const{screenX:g,screenY:c}=r.touches[0],$=g-a.value.x,E=c-a.value.y;t($,E),o({x:g,y:c});const P=Date.now();b(P-i.value),l(P),u({x:$,y:E})}function s(){if(!a.value)return;const r=m.value;if(o(null),u(null),r){const g=r.x/n.value,c=r.y/n.value,$=Math.abs(g),E=Math.abs(c);if(Math.max($,E)<Yt)return;let P=g,K=c;v.value=setInterval(()=>{if(Math.abs(P)<Ve&&Math.abs(K)<Ve){clearInterval(v.value);return}P*=Ye,K*=Ye,t(P*Te,K*Te)},Te)}}const y=Z();function x(r){const{deltaX:g,deltaY:c}=r;let $=0;const E=Math.abs(g),P=Math.abs(c);E===P?$=y.value==="x"?g:c:E>P?($=g,y.value="x"):($=c,y.value="y"),t(-$,-$)&&r.preventDefault()}const w=Z({onTouchStart:_,onTouchMove:p,onTouchEnd:s,onWheel:x});function S(r){w.value.onTouchStart(r)}function k(r){w.value.onTouchMove(r)}function G(r){w.value.onTouchEnd(r)}function D(r){w.value.onWheel(r)}Re(()=>{var r,g;document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",G,{passive:!1}),(r=e.value)===null||r===void 0||r.addEventListener("touchstart",S,{passive:!1}),(g=e.value)===null||g===void 0||g.addEventListener("wheel",D,{passive:!1})}),Ne(()=>{document.removeEventListener("touchmove",k),document.removeEventListener("touchend",G)})}function Ue(e,t){const a=Z(e);function o(i){const l=typeof i=="function"?i(a.value):i;l!==a.value&&t(l,a.value),a.value=l}return[a,o]}const Ze={width:0,height:0,left:0,top:0,right:0},Zt=()=>({id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:xe(),editable:xe(),moreIcon:Ie.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:xe(),popupClassName:String,getPopupContainer:F(),onTabClick:{type:Function},onTabScroll:{type:Function}}),qe=ie({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:Zt(),slots:Object,emits:["tabClick","tabScroll"],setup(e,t){let{attrs:a,slots:o}=t;const{tabs:i,prefixCls:l}=it(),n=W(),b=W(),m=W(),u=W(),[v,_]=At(),p=H(()=>e.tabPosition==="top"||e.tabPosition==="bottom"),[s,y]=Ue(0,(h,d)=>{p.value&&e.onTabScroll&&e.onTabScroll({direction:h>d?"left":"right"})}),[x,w]=Ue(0,(h,d)=>{!p.value&&e.onTabScroll&&e.onTabScroll({direction:h>d?"top":"bottom"})}),[S,k]=L(0),[G,D]=L(0),[r,g]=L(null),[c,$]=L(null),[E,P]=L(0),[K,le]=L(0),[ce,be]=Gt(new Map),R=Xt(i,ce),q=H(()=>`${l.value}-nav-operations-hidden`),M=W(0),V=W(0);Pe(()=>{p.value?e.rtl?(M.value=0,V.value=Math.max(0,S.value-r.value)):(M.value=Math.min(0,r.value-S.value),V.value=0):(M.value=Math.min(0,c.value-G.value),V.value=0)});const Y=h=>h<M.value?M.value:h>V.value?V.value:h,pe=W(),[z,fe]=L(),me=()=>{fe(Date.now())},he=()=>{clearTimeout(pe.value)},_e=(h,d)=>{h(C=>Y(C+d))};Ut(n,(h,d)=>{if(p.value){if(r.value>=S.value)return!1;_e(y,h)}else{if(c.value>=G.value)return!1;_e(w,d)}return he(),me(),!0}),se(z,()=>{he(),z.value&&(pe.value=setTimeout(()=>{fe(0)},100))});const de=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey;const d=R.value.get(h)||{width:0,height:0,left:0,right:0,top:0};if(p.value){let C=s.value;e.rtl?d.right<s.value?C=d.right:d.right+d.width>s.value+r.value&&(C=d.right+d.width-r.value):d.left<-s.value?C=-d.left:d.left+d.width>-s.value+r.value&&(C=-(d.left+d.width-r.value)),w(0),y(Y(C))}else{let C=x.value;d.top<-x.value?C=-d.top:d.top+d.height>-x.value+c.value&&(C=-(d.top+d.height-c.value)),y(0),w(Y(C))}},Ee=W(0),Be=W(0);Pe(()=>{let h,d,C,I,N,O;const re=R.value;["top","bottom"].includes(e.tabPosition)?(h="width",I=r.value,N=S.value,O=E.value,d=e.rtl?"right":"left",C=Math.abs(s.value)):(h="height",I=c.value,N=S.value,O=K.value,d="top",C=-x.value);let X=I;N+O>I&&N<I&&(X=I-O);const J=i.value;if(!J.length)return[Ee.value,Be.value]=[0,0];const te=J.length;let ue=te;for(let A=0;A<te;A+=1){const j=re.get(J[A].key)||Ze;if(j[d]+j[h]>C+X){ue=A-1;break}}let B=0;for(let A=te-1;A>=0;A-=1)if((re.get(J[A].key)||Ze)[d]<C){B=A+1;break}return[Ee.value,Be.value]=[B,ue]});const Le=()=>{var h,d,C,I,N;const O=((h=n.value)===null||h===void 0?void 0:h.offsetWidth)||0,re=((d=n.value)===null||d===void 0?void 0:d.offsetHeight)||0,X=((C=u.value)===null||C===void 0?void 0:C.$el)||{},J=X.offsetWidth||0,te=X.offsetHeight||0;g(O),$(re),P(J),le(te);const ue=(((I=b.value)===null||I===void 0?void 0:I.offsetWidth)||0)-J,B=(((N=b.value)===null||N===void 0?void 0:N.offsetHeight)||0)-te;k(ue),D(B),be(()=>{const A=new Map;return i.value.forEach(j=>{let{key:ve}=j;const ae=_.value.get(ve),ne=(ae==null?void 0:ae.$el)||ae;ne&&A.set(ve,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),A})},Oe=H(()=>[...i.value.slice(0,Ee.value),...i.value.slice(Be.value+1)]),[rt,st]=L(),ee=H(()=>R.value.get(e.activeKey)),We=W(),He=()=>{ye.cancel(We.value)};se([ee,p,()=>e.rtl],()=>{const h={};ee.value&&(p.value?(e.rtl?h.right=$e(ee.value.right):h.left=$e(ee.value.left),h.width=$e(ee.value.width)):(h.top=$e(ee.value.top),h.height=$e(ee.value.height))),He(),We.value=ye(()=>{st(h)})}),se([()=>e.activeKey,ee,R,p],()=>{de()},{flush:"post"}),se([()=>e.rtl,()=>e.tabBarGutter,()=>e.activeKey,()=>i.value],()=>{Le()},{flush:"post"});const Ae=h=>{let{position:d,prefixCls:C,extra:I}=h;if(!I)return null;const N=I==null?void 0:I({position:d});return N?f("div",{class:`${C}-extra-content`},[N]):null};return Ne(()=>{he(),He()}),()=>{const{id:h,animated:d,activeKey:C,rtl:I,editable:N,locale:O,tabPosition:re,tabBarGutter:X,onTabClick:J}=e,{class:te,style:ue}=a,B=l.value,A=!!Oe.value.length,j=`${B}-nav-wrap`;let ve,ae,ne,ze;p.value?I?(ae=s.value>0,ve=s.value+r.value<S.value):(ve=s.value<0,ae=-s.value+r.value<S.value):(ne=x.value<0,ze=-x.value+c.value<G.value);const Se={};re==="top"||re==="bottom"?Se[I?"marginRight":"marginLeft"]=typeof X=="number"?`${X}px`:X:Se.marginTop=typeof X=="number"?`${X}px`:X;const Ge=i.value.map((ke,ct)=>{const{key:ge}=ke;return f(Kt,{id:h,prefixCls:B,key:ge,tab:ke,style:ct===0?void 0:Se,closable:ke.closable,editable:N,active:ge===C,removeAriaLabel:O==null?void 0:O.removeAriaLabel,ref:v(ge),onClick:dt=>{J(ge,dt)},onFocus:()=>{de(ge),me(),n.value&&(I||(n.value.scrollLeft=0),n.value.scrollTop=0)}},o)});return f("div",{role:"tablist",class:oe(`${B}-nav`,te),style:ue,onKeydown:()=>{me()}},[f(Ae,{position:"left",prefixCls:B,extra:o.leftExtra},null),f(Ke,{onResize:Le},{default:()=>[f("div",{class:oe(j,{[`${j}-ping-left`]:ve,[`${j}-ping-right`]:ae,[`${j}-ping-top`]:ne,[`${j}-ping-bottom`]:ze}),ref:n},[f(Ke,{onResize:Le},{default:()=>[f("div",{ref:b,class:`${B}-nav-list`,style:{transform:`translate(${s.value}px, ${x.value}px)`,transition:z.value?"none":void 0}},[Ge,f(nt,{ref:u,prefixCls:B,locale:O,editable:N,style:T(T({},Ge.length===0?void 0:Se),{visibility:A?"hidden":null})},null),f("div",{class:oe(`${B}-ink-bar`,{[`${B}-ink-bar-animated`]:d.inkBar}),style:rt.value},null)])]})])]}),f(Ft,Q(Q({},e),{},{removeAriaLabel:O==null?void 0:O.removeAriaLabel,ref:m,prefixCls:B,tabs:Oe.value,class:!A&&q.value}),at(o,["moreIcon"])),f(Ae,{position:"right",prefixCls:B,extra:o.rightExtra},null),f(Ae,{position:"right",prefixCls:B,extra:o.tabBarExtraContent},null)])}}}),qt=ie({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup(e){const{tabs:t,prefixCls:a}=it();return()=>{const{id:o,activeKey:i,animated:l,tabPosition:n,rtl:b,destroyInactiveTabPane:m}=e,u=l.tabPane,v=a.value,_=t.value.findIndex(p=>p.key===i);return f("div",{class:`${v}-content-holder`},[f("div",{class:[`${v}-content`,`${v}-content-${n}`,{[`${v}-content-animated`]:u}],style:_&&u?{[b?"marginRight":"marginLeft"]:`-${_}00%`}:null},[t.value.map(p=>bt(p.node,{key:p.key,prefixCls:v,tabKey:p.key,id:o,animated:u,active:p.key===i,destroyInactiveTabPane:m}))])])}}}),Jt=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[je(e,"slide-up"),je(e,"slide-down")]]},Qt=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:o,tabsCardGutter:i,colorSplit:l}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:o,border:`${e.lineWidth}px ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${i}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${i}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},ea=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:o}=e;return{[`${t}-dropdown`]:T(T({},Qe(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${o}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":T(T({},mt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},ta=e=>{const{componentCls:t,margin:a,colorSplit:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${o}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},aa=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},na=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:o,iconCls:i,tabsHorizontalGutter:l}=e,n=`${t}-tab`;return{[n]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":T({"&:focus:not(:focus-visible), &:active":{color:a}},et(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:o},[`&${n}-active ${n}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${n}-disabled ${n}-btn, &${n}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${n}-remove ${i}`]:{margin:0},[i]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${n} + ${n}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${l}px`}}}},oa=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:o,tabsCardGutter:i}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[o]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[o]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${i}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},ia=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:o,tabsCardGutter:i,tabsHoverColor:l,tabsActiveColor:n,colorSplit:b}=e;return{[t]:T(T(T(T({},Qe(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:T({minWidth:`${o}px`,marginLeft:{_skip_check_:!0,value:`${i}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${b}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:n}},et(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),na(e)),{[`${t}-content`]:{position:"relative",display:"flex",width:"100%","&-animated":{transition:"margin 0.3s"}},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none",flex:"none",width:"100%"}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},la=pt("Tabs",e=>{const t=e.controlHeightLG,a=ft(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[aa(a),oa(a),ta(a),ea(a),Qt(a),ia(a),Jt(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));let Je=0;const lt=()=>({prefixCls:{type:String},id:{type:String},popupClassName:String,getPopupContainer:F(),activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:Ce(),animated:$t([Boolean,Object]),renderTabBar:F(),tabBarGutter:{type:Number},tabBarStyle:xe(),tabPosition:Ce(),destroyInactiveTabPane:yt(),hideAdd:Boolean,type:Ce(),size:Ce(),centered:Boolean,onEdit:F(),onChange:F(),onTabClick:F(),onTabScroll:F(),"onUpdate:activeKey":F(),locale:xe(),onPrevClick:F(),onNextClick:F(),tabBarExtraContent:Ie.any});function ra(e){return e.map(t=>{if(xt(t)){const a=T({},t.props||{});for(const[p,s]of Object.entries(a))delete a[p],a[_t(p)]=s;const o=t.children||{},i=t.key!==void 0?t.key:void 0,{tab:l=o.tab,disabled:n,forceRender:b,closable:m,animated:u,active:v,destroyInactiveTabPane:_}=a;return T(T({key:i},a),{node:t,closeIcon:o.closeIcon,tab:l,disabled:n===""||n,forceRender:b===""||b,closable:m===""||m,animated:u===""||u,active:v===""||v,destroyInactiveTabPane:_===""||_})}return null}).filter(t=>t)}const sa=ie({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:T(T({},tt(lt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:St()}),slots:Object,setup(e,t){let{attrs:a,slots:o}=t;De(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),De(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),De(o.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");const{prefixCls:i,direction:l,size:n,rootPrefixCls:b,getPopupContainer:m}=Ct("tabs",e),[u,v]=la(i),_=H(()=>l.value==="rtl"),p=H(()=>{const{animated:c,tabPosition:$}=e;return c===!1||["left","right"].includes($)?{inkBar:!1,tabPane:!1}:c===!0?{inkBar:!0,tabPane:!0}:T({inkBar:!0,tabPane:!1},typeof c=="object"?c:{})}),[s,y]=L(!1);Re(()=>{y(Nt())});const[x,w]=Xe(()=>{var c;return(c=e.tabs[0])===null||c===void 0?void 0:c.key},{value:H(()=>e.activeKey),defaultValue:e.defaultActiveKey}),[S,k]=L(()=>e.tabs.findIndex(c=>c.key===x.value));Pe(()=>{var c;let $=e.tabs.findIndex(E=>E.key===x.value);$===-1&&($=Math.max(0,Math.min(S.value,e.tabs.length-1)),w((c=e.tabs[$])===null||c===void 0?void 0:c.key)),k($)});const[G,D]=Xe(null,{value:H(()=>e.id)}),r=H(()=>s.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition);Re(()=>{e.id||(D(`rc-tabs-${Je}`),Je+=1)});const g=(c,$)=>{var E,P;(E=e.onTabClick)===null||E===void 0||E.call(e,c,$);const K=c!==x.value;w(c),K&&((P=e.onChange)===null||P===void 0||P.call(e,c))};return Vt({tabs:H(()=>e.tabs),prefixCls:i}),()=>{const{id:c,type:$,tabBarGutter:E,tabBarStyle:P,locale:K,destroyInactiveTabPane:le,renderTabBar:ce=o.renderTabBar,onTabScroll:be,hideAdd:R,centered:q}=e,M={id:G.value,activeKey:x.value,animated:p.value,tabPosition:r.value,rtl:_.value,mobile:s.value};let V;$==="editable-card"&&(V={onEdit:(fe,me)=>{let{key:he,event:_e}=me;var de;(de=e.onEdit)===null||de===void 0||de.call(e,fe==="add"?_e:he,fe)},removeIcon:()=>f(Tt,null,null),addIcon:o.addIcon?o.addIcon:()=>f(Ot,null,null),showAdd:R!==!0});let Y;const pe=T(T({},M),{moreTransitionName:`${b.value}-slide-up`,editable:V,locale:K,tabBarGutter:E,onTabClick:g,onTabScroll:be,style:P,getPopupContainer:m.value,popupClassName:oe(e.popupClassName,v.value)});ce?Y=ce(T(T({},pe),{DefaultTabBar:qe})):Y=f(qe,pe,at(o,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));const z=i.value;return u(f("div",Q(Q({},a),{},{id:c,class:oe(z,`${z}-${r.value}`,{[v.value]:!0,[`${z}-${n.value}`]:n.value,[`${z}-card`]:["card","editable-card"].includes($),[`${z}-editable-card`]:$==="editable-card",[`${z}-centered`]:q,[`${z}-mobile`]:s.value,[`${z}-editable`]:$==="editable-card",[`${z}-rtl`]:_.value},a.class)}),[Y,f(qt,Q(Q({destroyInactiveTabPane:le},M),{},{animated:p.value}),null)]))}}}),we=ie({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:tt(lt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:Object,setup(e,t){let{attrs:a,slots:o,emit:i}=t;const l=n=>{i("update:activeKey",n),i("change",n)};return()=>{var n;const b=ra(ht((n=o.default)===null||n===void 0?void 0:n.call(o)));return f(sa,Q(Q(Q({},gt(e,["onUpdate:activeKey"])),a),{},{onChange:l,tabs:b}),o)}}}),ca=()=>({tab:Ie.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}),Me=ie({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:ca(),slots:Object,setup(e,t){let{attrs:a,slots:o}=t;const i=Z(e.forceRender);se([()=>e.active,()=>e.destroyInactiveTabPane],()=>{e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});const l=H(()=>e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"});return()=>{var n;const{prefixCls:b,forceRender:m,id:u,active:v,tabKey:_}=e;return f("div",{id:u&&`${u}-panel-${_}`,role:"tabpanel",tabindex:v?0:-1,"aria-labelledby":u&&`${u}-tab-${_}`,"aria-hidden":!v,style:[l.value,a.style],class:[`${b}-tabpane`,v&&`${b}-tabpane-active`,a.class]},[(v||i.value||m)&&((n=o.default)===null||n===void 0?void 0:n.call(o))])}}});we.TabPane=Me;we.install=function(e){return e.component(we.name,we),e.component(Me.name,Me),e};export{we as T,Me as _};
