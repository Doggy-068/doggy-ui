var r=Object.defineProperty,p=Object.defineProperties;var i=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(o,e,t)=>e in o?r(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,l=(o,e)=>{for(var t in e||(e={}))c.call(e,t)&&n(o,t,e[t]);if(a)for(var t of a(e))f.call(e,t)&&n(o,t,e[t]);return o},d=(o,e)=>p(o,i(e));import{d as _,o as b,c as m,a as y,r as $,n as B}from"../app.583f3ecb.js";const k={name:"DUButton"},g=_(d(l({},k),{props:{type:{default:"primary"},size:{default:"default"},round:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(o,{emit:e}){const t=o,u=()=>t.disabled?null:e("click");return(s,v)=>(b(),m("button",{onClick:u,class:B(["du-button",[`du-button-${s.$props.type}`,`du-button-${s.$props.size}`,s.$props.round?"du-button-round":"",s.$props.disabled?"du-button-disabled":""]])},[y("span",null,[$(s.$slots,"default")])],2))}}));export{g as _};
