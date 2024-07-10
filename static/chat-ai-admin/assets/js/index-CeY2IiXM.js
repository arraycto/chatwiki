import{a1 as V,b as m,e as P,w as A,a6 as B,M as o,N as n,W as s,F as S,a2 as j,a3 as E,k as t,S as c,Y as I,Z as h,Q as g,u as y,a7 as Q,a8 as W,a9 as M,B as T,V as D,aa as X,X as N}from"./vue-chunks-C4JOcZXM.js";import{L as Y,a as Z}from"./locale-dropdown-d7fba88v.js";import{_ as b,b as G,a as L,c as H,r as J,d as K,M as ee}from"../../index-CkphMBlH.js";import{_ as te,B as oe}from"./index-BJotM-vH.js";import{_ as se,M as ae}from"./index-D647WIsX.js";import"./index-BSMGZ0T1.js";import{D as re}from"./dropdown-5MEiynCI.js";import{v as ne}from"./validate-CYzfr11z.js";import{F as U,a as ce,_ as le}from"./Password-C4pJDvMr.js";import{_ as _e}from"./index-0pVpa2L4.js";import"./index-DV57irlB.js";import"./dayjs-CNAygh1a.js";import"./axios-Cm0UX6qg.js";import"./qs-DjRPs0Fx.js";import"./crypto-js-WfkAukZn.js";import"./DownOutlined-BkU0R-vk.js";import"./index-CsVB5NkB.js";import"./collapseMotion-B9mQKKQo.js";import"./slide-CwAboZ-L.js";import"./index-CJpLNZG1.js";import"./Dropdown-1l4fbfYC.js";import"./RightOutlined-CJF3r5hL.js";import"./move-DIzqx5YV.js";import"./inputProps-Be_GFm9h.js";import"./FormItemContext-XVXjhsgH.js";import"./TextArea-dHwX4eR4.js";const ie={class:"navbar-wrapper"},ue={class:"navbar"},de={__name:"layout-navbar",setup(f){const e=V(),l=m(()=>e.meta.activeMenu||""),d=m(()=>e.path.split("/")[1]),u=P([{key:"robot",label:"robot",title:"机器人管理",path:"/robot/list"},{key:"library",label:"library",title:"知识库管理",path:"/library/list"},{key:"user",label:"user",title:"系统管理",path:"/user/model"}]);return A(()=>e.path,()=>{},{immediate:!0}),(p,a)=>{const r=B("router-link");return o(),n("div",ie,[s("div",ue,[(o(!0),n(S,null,j(u.value,_=>(o(),n("div",{class:E(["nav-menu",{active:_.key===d.value||_.key===l.value}]),key:_.key},[t(r,{to:_.path,class:"nav-menu-name"},{default:c(()=>[I(h(_.title),1)]),_:2},1032,["to"])],2))),128))])])}}},pe=b(de,[["__scopeId","data-v-f4acc127"]]),me={class:"layout-breadcrumb"},ve={key:1,class:"page-title"},fe={__name:"layout-breadcrumb",props:{title:{type:[String,Boolean],default:""},items:{type:[Array,Boolean],default:()=>[]}},setup(f){const e=f;return(l,d)=>{const u=B("router-link"),p=te,a=oe;return o(),n("div",me,[e.items.length>0?(o(),g(a,{key:0},{default:c(()=>[(o(!0),n(S,null,j(e.items,(r,_)=>(o(),n(S,{key:r.title},[_!==e.items.length-1?(o(),g(p,{key:0},{default:c(()=>[t(u,{to:r.path},{default:c(()=>[I(h(r.title),1)]),_:2},1032,["to"])]),_:2},1024)):(o(),g(p,{key:1},{default:c(()=>[I(h(r.title),1)]),_:2},1024))],64))),128))]),_:1})):(o(),n("div",ve,h(e.title),1))])}}},he=b(fe,[["__scopeId","data-v-c69a461d"]]),ye={class:"layout-footer"},be={class:"copyright-text"},we={__name:"layout-footer",setup(f){const{t:e}=G();return(l,d)=>(o(),n("div",ye,[s("div",be,h(y(e)("common.copyright")),1)]))}},ke=b(we,[["__scopeId","data-v-4e01262c"]]),ge={key:0,class:"user-dropdown"},xe=["src"],$e={class:"user-name"},Ce={__name:"user-dropdown",setup(f){const e=L(),{userInfo:l,avatar:d,user_name:u}=Q(e),p=()=>{e.logoutConfirm(!0)};return(a,r)=>{const _=H,w=se,v=ae,x=re;return y(l)?(o(),n("div",ge,[t(x,null,{overlay:c(()=>[t(v,null,{default:c(()=>[t(w,null,{default:c(()=>[s("a",{href:"javascript:;",onClick:p},"退出登录")]),_:1})]),_:1})]),default:c(()=>[s("div",{class:"user-dropdown-link",onClick:r[0]||(r[0]=W(()=>{},["prevent"]))},[s("img",{class:"user-avatar",src:y(d),alt:""},null,8,xe),s("span",$e,h(y(u)),1),t(_,{name:"arrow-down",style:{"font-size":"16px",color:"#8c8c8c"}})])]),_:1})])):M("",!0)}}},Pe=b(Ce,[["__scopeId","data-v-a80b4e62"]]),Se={class:"form-box"},Ie={__name:"reset-password",setup(f,{expose:e}){const l=L(),d=U.useForm,u=P(!0),p=P("重置登录密码"),a=T({password:"",check_password:"",id:l.userInfo.user_id}),r=T({password:[{message:"请输入登录密码",required:!0},{validator:async(C,i)=>!ne(i)&&i?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(C,i)=>i!=a.password&&i?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:_,validate:w,validateInfos:v}=d(a,r),x=()=>{w().then(()=>{J({...X(a)}).then(C=>{K.success("修改成功"),u.value=!1,l.reset(!0)})})},$=()=>{l.setResetPassModal()};return e({open}),(C,i)=>{const z=_e,F=ce,R=le,q=U,O=ee;return o(),n("div",null,[t(O,{open:u.value,"onUpdate:open":i[2]||(i[2]=k=>u.value=k),title:p.value,onOk:x,width:"520px",onCancel:$},{default:c(()=>[t(z,{class:"alert-box",message:"您还未修改初始密码，为了保障您的数据安全，请您尽快重置密码。",type:"info","show-icon":""}),s("div",Se,[t(q,{layout:"vertical"},{default:c(()=>[t(R,D({label:"登录密码"},y(v).password),{default:c(()=>[t(F,{value:a.password,"onUpdate:value":i[0]||(i[0]=k=>a.password=k),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16),t(R,D({label:"确认密码"},y(v).check_password),{default:c(()=>[t(F,{value:a.check_password,"onUpdate:value":i[1]||(i[1]=k=>a.check_password=k),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16)]),_:1})])]),_:1},8,["open","title"])])}}},Me=b(Ie,[["__scopeId","data-v-40aed5c2"]]),Be={class:"admin-layout"},Le={class:"layout-header-wrapper"},Fe={class:"layout-header"},Re={class:"header-left"},Te={class:"header-body"},De={class:"header-right"},Ne={class:"item-box"},Ue={class:"item-box"},Ve={class:"layout-body"},je={key:0,class:"layout-breadcrumb-wrapper"},ze={class:"layout-footer-wrapper"},qe={__name:"index",setup(f){const e=V(),l=L(),d=m(()=>e.meta.isCustomPage||!1),u=m(()=>e.meta.pageStyle||{}),p=m(()=>e.meta.bgColor||"#ffffff"),a=m(()=>e.meta.breadcrumb||[]),r=m(()=>e.meta.hideTitle||!1),_=m(()=>e.meta.title||!1),w=m(()=>{var v;return((v=l.userInfo)==null?void 0:v.d_pass)==1&&l.isShowResetPassModal});return(v,x)=>{const $=B("router-view");return o(),n("div",Be,[s("div",Le,[s("div",Fe,[s("div",Re,[t(Y)]),s("div",Te,[t(pe)]),s("div",De,[s("div",Ne,[t(Z)]),s("div",Ue,[t(Pe)])])])]),s("div",Ve,[d.value?(o(),g($,{key:0})):(o(),n("div",{key:1,class:"page-wrapper",style:N({"background-color":p.value})},[r.value?M("",!0):(o(),n("div",je,[t(he,{items:a.value,title:_.value},null,8,["items","title"])])),s("div",{class:"page-container",style:N({...u.value})},[t($)],4)],4))]),s("div",ze,[t(ke)]),w.value?(o(),g(Me,{key:0})):M("",!0)])}}},mt=b(qe,[["__scopeId","data-v-1c78c62b"]]);export{mt as default};
