import{_ as n,o as s,c as a,d as t}from"./app.13029fd0.js";const e={},p=t(`<h2 id="\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h2><p>yp-ui\u83DC\u5355\u57FA\u4E8Eelement-plus\u83DC\u5355\uFF0C \u589E\u52A0\u4E86\u7EDF\u4E00\u7684\u83DC\u5355 \u6837\u5F0F</p><p>\u901A\u8FC7\u7C7B\u540D<code>yp-aside-dark</code>\u548C<code>yp-aside-white</code>\u53EF\u4EE5\u5B9E\u73B0\u83DC\u5355\u7684\u989C\u8272\u6A21\u5F0F\u6539\u53D8</p><p>\u7EDF\u4E00\u83DC\u5355\u989C\u8272</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>$<span class="token property">menu-bg-color</span><span class="token punctuation">:</span> #505050<span class="token punctuation">;</span> // \u83DC\u5355\u80CC\u666F\u8272
$<span class="token property">menu-text-color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span> // \u83DC\u5355\u6587\u5B57\u989C\u8272
$<span class="token property">menu-hover-color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span> // hover/active\u9AD8\u4EAE\u989C\u8272
$<span class="token property">subMenu-bg-color</span><span class="token punctuation">:</span>#333333<span class="token punctuation">;</span>// \u5B50\u83DC\u5355\u80CC\u666F\u8272
$<span class="token property">subMenu-bg-hover-color</span><span class="token punctuation">:</span>#0B0B0C<span class="token punctuation">;</span> // \u5B50\u83DC\u5355hover/\u6FC0\u6D3B\u80CC\u666F\u8272
$<span class="token property">menu-bg-color-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> // \u83DC\u5355\u80CC\u666F\u8272
$<span class="token property">menu-text-color-white</span><span class="token punctuation">:</span>#333<span class="token punctuation">;</span> // \u83DC\u5355\u6587\u5B57\u989C\u8272
$<span class="token property">menu-hover-color-white</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span> // hover/active\u9AD8\u4EAE\u989C\u8272
$<span class="token property">subMenu-bg-color-white</span><span class="token punctuation">:</span>#2E59A7<span class="token punctuation">;</span>// \u5B50\u83DC\u5355\u80CC\u666F\u8272
$<span class="token property">subMenu-bg-hover-color-white</span><span class="token punctuation">:</span>#D5DEED<span class="token punctuation">;</span> // \u5B50\u83DC\u5355hover/\u6FC0\u6D3B\u80CC\u666F\u8272

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yp-aside-dark<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">router</span>
    <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mode<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:default-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultActivePath<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:collapse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCollapsed<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub-menu-com</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(menu, i) in permissionRoutes<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(u,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","menu.html.vue"]]);export{r as default};
