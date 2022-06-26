var m=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(s,a,t)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,i=(s,a)=>{for(var t in a||(a={}))g.call(a,t)&&c(s,t,a[t]);if(u)for(var t of u(a))f.call(a,t)&&c(s,t,a[t]);return s},d=(s,a)=>b(s,x(a));import"./chunks/Index.vue_vue_type_style_index_0_lang.e2a32d3f2.js";import{d as v,o as r,c as k,a as e,t as _,n as q,h as y,b as o,f as h,g as V}from"./app.f8e8c55c.js";const C=e("span",{class:"du-checkbox-box"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},[e("polyline",{points:"20 50, 50 80, 80 20",stroke:"currentColor","stroke-width":"8",fill:"transparent"})])],-1),z={name:"DUCheckbox"},p=v(d(i({},z),{props:{modelValue:{type:Boolean},size:{default:"default"},label:{default:""}},emits:["update:modelValue"],setup(s,{emit:a}){const t=s,l=()=>a("update:modelValue",!t.modelValue);return(n,B)=>(r(),k("div",{onClick:l,class:q(["du-checkbox",[`du-checkbox-${n.$props.size}`,n.$props.modelValue?"du-checkbox-checked":""]])},[C,e("span",null,_(n.$props.label),1)],2))}})),w=e("h1",{id:"checkbox-\u591A\u9009\u6846",tabindex:"-1"},[h("Checkbox \u591A\u9009\u6846 "),e("a",{class:"header-anchor",href:"#checkbox-\u591A\u9009\u6846","aria-hidden":"true"},"#")],-1),D=e("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[h("\u5C3A\u5BF8 "),e("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),T=e("br",null,null,-1),U=V(`<div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DUCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u9879\u4E00<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DUCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u9879\u4E8C<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DUCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u9879\u4E09<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="checkbox-\u5C5E\u6027" tabindex="-1">Checkbox \u5C5E\u6027 <a class="header-anchor" href="#checkbox-\u5C5E\u6027" aria-hidden="true">#</a></h3><br><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">modelValue / v-model</td><td style="text-align:left;">\u7ED1\u5B9A\u503C</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u5C3A\u5BF8</td><td style="text-align:left;">&#39;small&#39; | &#39;default&#39; | &#39;large&#39; |</td><td style="text-align:left;">&#39;default&#39;</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">\u6587\u672C</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;&#39;</td></tr></tbody></table>`,4),P='{"title":"Checkbox \u591A\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"Checkbox \u5C5E\u6027","slug":"checkbox-\u5C5E\u6027"}],"relativePath":"component/checkbox.md"}',$={},E=Object.assign($,{setup(s){const a=y(!1);return(t,l)=>(r(),k("div",null,[w,D,T,o(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),label:"\u9009\u9879\u4E00",size:"small"},null,8,["modelValue"]),o(p,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value=n),label:"\u9009\u9879\u4E8C"},null,8,["modelValue"]),o(p,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value=n),label:"\u9009\u9879\u4E09",size:"large"},null,8,["modelValue"]),U]))}});export{P as __pageData,E as default};
