var x=Object.defineProperty,V=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var d=(n,t,a)=>t in n?x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,m=(n,t)=>{for(var a in t||(t={}))w.call(t,a)&&d(n,a,t[a]);if(r)for(var a of r(t))I.call(t,a)&&d(n,a,t[a]);return n},k=(n,t)=>V(n,q(t));import{h as i,i as N,d as C,o as g,c as f,a as s,n as T,u as $,b as o,f as b,g as v}from"./app.f8e8c55c.js";import"./chunks/Index.vue_vue_type_style_index_0_lang.e2a32d3f3.js";const D=n=>{const t=i(!1);return N(()=>{n.value&&(n.value.onfocus=()=>t.value=!0,n.value.onblur=()=>t.value=!1)}),{isFocus:t}},z=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},[s("line",{x1:"35",y1:"50",x2:"65",y2:"50",stroke:"currentColor","stroke-width":"3"})],-1),U=[z],S=["value","disabled"],A=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},[s("line",{x1:"35",y1:"50",x2:"65",y2:"50",stroke:"currentColor","stroke-width":"3"}),s("line",{x1:"50",y1:"35",x2:"50",y2:"65",stroke:"currentColor","stroke-width":"3"})],-1),B=[A],E={name:"DUInputNumber"},u=C(k(m({},E),{props:{modelValue:null,size:{default:"default"},disabled:{type:Boolean,default:!1},min:{default:-1/0},max:{default:1/0}},emits:["update:modelValue"],setup(n,{emit:t}){const a=n,e=i(),{isFocus:p}=D(e),_=()=>{a.modelValue-1>=a.min&&t("update:modelValue",a.modelValue-1)},h=()=>{a.modelValue+1<=a.max&&t("update:modelValue",a.modelValue+1)},y=l=>{const c=Number(l.target.value.trim());isNaN(c)||t("update:modelValue",c)};return(l,c)=>(g(),f("div",{class:T(["du-input-number",[$(p)?"du-input-number-focus":"",`du-input-number-${l.$props.size}`,l.$props.disabled?"du-input-number-disabled":""]])},[s("span",{onClick:_,class:"du-input-number-control"},U),s("input",{value:l.$props.modelValue,onChange:y,ref_key:"inputEl",ref:e,disabled:l.$props.disabled,type:"text"},null,40,S),s("span",{onClick:h,class:"du-input-number-control"},B)],2))}})),P=s("h1",{id:"input-number-\u6570\u5B57\u8F93\u5165\u6846",tabindex:"-1"},[b("Input Number \u6570\u5B57\u8F93\u5165\u6846 "),s("a",{class:"header-anchor",href:"#input-number-\u6570\u5B57\u8F93\u5165\u6846","aria-hidden":"true"},"#")],-1),F=s("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[b("\u5C3A\u5BF8 "),s("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),R=s("br",null,null,-1),j={style:{display:"flex","flex-wrap":"wrap"}},M=v("",3),O=v("",4),L='{"title":"Input Number \u6570\u5B57\u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"Input Number \u5C5E\u6027","slug":"input-number-\u5C5E\u6027"}],"relativePath":"component/input-number.md"}',G={},Q=Object.assign(G,{setup(n){const t=i(0);return(a,e)=>(g(),f("div",null,[P,F,R,s("div",j,[o(u,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=p=>t.value=p),size:"small",style:{"margin-right":"1rem"}},null,8,["modelValue"]),o(u,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=p=>t.value=p),style:{"margin-right":"1rem"}},null,8,["modelValue"]),o(u,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=p=>t.value=p),size:"large"},null,8,["modelValue"])]),M,o(u,{modelValue:0,disabled:""}),O]))}});export{L as __pageData,Q as default};
