import{_ as k,c as m,d as i,e as s,b as t,w as l,a as d,r as a,o as g}from"./app-B41Pl2ve.js";const u={};function b(y,e){const p=a("RouteLink"),o=a("VPIcon"),h=a("CodeTabs"),n=a("VideoBilibili");return g(),m("div",null,[e[5]||(e[5]=i("h2",{id:"概述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述"},[i("span",null,"概述")])],-1)),e[6]||(e[6]=i("p",null,"主题提供了 嵌入 Bilibili 视频 的功能。",-1)),i("p",null,[e[1]||(e[1]=s("该功能由 ")),t(p,{to:"/notes/theme/config/plugins/markdownPower.html"},{default:l(()=>e[0]||(e[0]=[s("vuepress-plugin-md-power")])),_:1}),e[2]||(e[2]=s(" 提供支持。"))]),e[7]||(e[7]=i("h2",{id:"配置",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#配置"},[i("span",null,"配置")])],-1)),e[8]||(e[8]=i("p",null,"该功能默认不启用。你需要在主题配置中开启。",-1)),t(h,{id:"15",data:[{id:".vuepress/config.ts"}]},{title0:l(({value:r,isActive:c})=>[t(o,{name:"vscode-icons:file-type-typescript"}),e[3]||(e[3]=i("span",null,".vuepress/config.ts",-1))]),tab0:l(({value:r,isActive:c})=>e[4]||(e[4]=[i("div",{class:"language-ts","data-ext":"ts","data-title":"ts"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineUserConfig"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  theme"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"plumeTheme"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    plugins"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      markdownPower"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"        bilibili"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"true"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])],-1)])),_:1}),e[9]||(e[9]=d('<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>简单的语法：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bilibili</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">bvid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>带 分P 的视频，在 <code>bilibili</code> 后跟随 <code>p1</code>、<code>p2</code>、<code>p3</code> 等选项</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@[bilibili p1](aid cid)</span></span></code></pre></div><p>更多选项：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@[bilibili p1 autoplay time=&quot;0&quot; width=&quot;100%&quot; height=&quot;400px&quot; ratio=&quot;16:9&quot;](bvid aid cid)</span></span></code></pre></div><p><strong>选项说明：</strong></p><ul><li>bvid: 视频 BV ID</li><li>aid: 视频 AID</li><li>cid: 视频 CID</li><li>autoplay: 是否自动播放</li><li>time: 视频开始播放时间点，单位为秒， 也可以使用 <code>mm:ss</code> 或 <code>hh:mm:ss</code> 格式</li><li>width: 视频宽度</li><li>height: 视频高度</li><li>ratio: 视频比例，默认 <code>16:9</code></li></ul><p>对于分P的视频，可以省略传入 <code>bvid</code>，但需要传入 <code>aid</code> 和 <code>cid</code></p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="宽频视频" tabindex="-1"><a class="header-anchor" href="#宽频视频"><span>宽频视频</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bilibili</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">BV1EZ42187Hg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',15)),t(n,{src:"https://player.bilibili.com/player.html?bvid=BV1EZ42187Hg&autoplay=0",width:"100%",height:"",ratio:"",title:"undefined"}),e[10]||(e[10]=d('<h3 id="竖屏视频" tabindex="-1"><a class="header-anchor" href="#竖屏视频"><span>竖屏视频</span></a></h3><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bilibili width=&quot;320px&quot; ratio=&quot;9:16&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">BV1zr42187eg</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',4)),t(n,{src:"https://player.bilibili.com/player.html?bvid=BV1zr42187eg&autoplay=0",width:"320px",height:"",ratio:"9:16",title:"undefined"})])}const f=k(u,[["render",b],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/guide/embed/video/bilibili/","title":"Bilibili 视频","lang":"zh-CN","frontmatter":{"title":"Bilibili 视频","icon":"ri:bilibili-fill","createTime":"2024/03/28 12:26:47","permalink":"/guide/embed/video/bilibili/","description":"概述 主题提供了 嵌入 Bilibili 视频 的功能。 该功能由 提供支持。 配置 该功能默认不启用。你需要在主题配置中开启。 语法 简单的语法： 带 分P 的视频，在 bilibili 后跟随 p1、p2、p3 等选项 更多选项： 选项说明： bvid: 视频 BV ID aid: 视频 AID cid: 视频 CID autoplay: 是否自动...","head":[["meta",{"property":"og:url","content":"https://theme-plume.vuejs.press/guide/embed/video/bilibili/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"Bilibili 视频"}],["meta",{"property":"og:description","content":"概述 主题提供了 嵌入 Bilibili 视频 的功能。 该功能由 提供支持。 配置 该功能默认不启用。你需要在主题配置中开启。 语法 简单的语法： 带 分P 的视频，在 bilibili 后跟随 p1、p2、p3 等选项 更多选项： 选项说明： bvid: 视频 BV ID aid: 视频 AID cid: 视频 CID autoplay: 是否自动..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T16:28:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T16:28:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bilibili 视频\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-21T16:28:01.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.89,"words":267},"git":{"updatedTime":1734798481000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"9a441c094166d8a5e6a2906dbf45134e7c8f5bb0","date":1711730908000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/9a441c094166d8a5e6a2906dbf45134e7c8f5bb0"},{"hash":"bd4c3506dc23d42e8e5b5cbf2a7fc9128d2e43fe","date":1734798481000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat(plugin-md-power): add <code v-pre>artplayer</code> support (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/393\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#393</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/bd4c3506dc23d42e8e5b5cbf2a7fc9128d2e43fe"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/嵌入/bilibili.md","bulletin":false}');export{f as comp,D as data};
