import{a,ar as t,ce as o}from"../../index-QYI4dmfl.js";const n=a(),m=(r={})=>t.get({url:"/manage/getFormList",params:r}),F=(r={})=>t.get({url:"/manage/getFormInfo",params:r}),d=r=>t.post({url:"/manage/addForm",data:r}),l=r=>t.post({url:"/manage/editForm",data:r}),u=r=>t.post({url:"/manage/delForm",data:r}),g=(r={})=>t.get({url:"/manage/getFormFieldList",params:r}),i=r=>{let e=r.id?"/manage/editFormField":"/manage/addFormField";return t.post({url:e,data:r})},p=r=>t.post({url:"/manage/delFormField",data:r}),c=r=>t.post({url:"/manage/updateFormRequired",data:r}),y=(r={})=>t.get({url:"/manage/getFormEntryList",params:r}),E=r=>t.post({url:"/manage/delFormEntry",data:r}),L=r=>t.post({url:"/manage/emptyFormEntry",data:r}),f=r=>{let e=r.id?"/manage/editFormEntry":"/manage/addFormEntry";return t.post({url:e,data:r})},S=(r={})=>{window.open(`/manage/exportFormEntry?${o(r)}&token=`+n.getToken)},b=(r={})=>t.get({url:"/manage/getFormFilterList",params:r}),q=(r={})=>t.get({url:"/manage/getFormFilterInfo",params:r}),I=r=>t.post({url:"/manage/addFormFilter",data:r}),k=r=>t.post({url:"/manage/editFormFilter",data:r}),x=r=>t.post({url:"/manage/delFormFilter",data:r}),j=r=>t.post({url:"/manage/updateFormFilterEnabled",data:r}),w=r=>t.post({url:"/manage/updateFormFilterSort",data:r});export{d as a,F as b,i as c,u as d,l as e,g as f,m as g,p as h,f as i,S as j,q as k,I as l,k as m,w as n,j as o,x as p,b as q,y as r,E as s,L as t,c as u};
