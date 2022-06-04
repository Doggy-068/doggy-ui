var h=Object.defineProperty,v=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(s,a,t)=>a in s?h(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,i=(s,a)=>{for(var t in a||(a={}))y.call(a,t)&&c(s,t,a[t]);if(u)for(var t of u(a))b.call(a,t)&&c(s,t,a[t]);return s},r=(s,a)=>v(s,_(a));import{d as q,o as k,c as m,a as l,n as d,j as x,h as w,b as p,f as g,g as f}from"./app.583f3ecb.js";const V={name:"DUSwitch"},o=q(r(i({},V),{props:{modelValue:{type:Boolean},size:{default:"default"},disabled:{type:Boolean,default:!1},onColor:{default:"var(--du-primary-color)"},offColor:{default:"var(--du-fill-color-dark-2)"}},emits:["update:modelValue"],setup(s,{emit:a}){const t=s,e=()=>{t.disabled||a("update:modelValue",!t.modelValue)};return(n,U)=>(k(),m("div",{onClick:e,class:d(["du-switch",[`du-switch-${n.$props.size}`,n.$props.disabled?"du-switch-disabled":""]]),style:x({background:n.$props.modelValue?n.$props.onColor:n.$props.offColor})},[l("div",{class:d(["du-switch-circle",[n.$props.modelValue?"du-switch-circle-on":""]])},null,2)],6))}})),S=l("h1",{id:"switch-\u5F00\u5173",tabindex:"-1"},[g("Switch \u5F00\u5173 "),l("a",{class:"header-anchor",href:"#switch-\u5F00\u5173","aria-hidden":"true"},"#")],-1),C=l("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[g("\u5C3A\u5BF8 "),l("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),T=l("br",null,null,-1),z={style:{display:"flex","flex-wrap":"wrap"}},A=f("",3),$=f("",4),E='{"title":"Switch \u5F00\u5173","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"Switch \u5C5E\u6027","slug":"switch-\u5C5E\u6027"}],"relativePath":"component/switch.md"}',D={},I=Object.assign(D,{setup(s){const a=w(!1);return(t,e)=>(k(),m("div",null,[S,C,T,l("div",z,[p(o,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),size:"small",style:{"margin-right":"1rem"}},null,8,["modelValue"]),p(o,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=n=>a.value=n),"on-color":"#67C23A",style:{"margin-right":"1rem"}},null,8,["modelValue"]),p(o,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=n=>a.value=n),"on-color":"#E6A23C",size:"large"},null,8,["modelValue"])]),A,p(o,{modelValue:!1,size:"small",disabled:""}),$]))}});export{E as __pageData,I as default};
