## 说明
vite + vue3 + vue-router4 初体验demo

## 体验点

### vite的简单配置

### vue3中Compostion API的使用

Vue 2.x中，是通过option选项的方式进行组件的组装，因为选项分离的这种设计，就会导致数据流的走向很不明确，在data,method,watch等方法中反复横跳，会使得逻辑分散在各处，这在大型组件中尤其明显。

Compostion API 类似react中的hooks，旨在将与同一个逻辑关注点相关的代码配置在一起，t同时提取、复用逻辑时，也会非常的灵活，例如这个例子:[Vue 3.0 我馋了, Composition-Api 真香](https://zhuanlan.zhihu.com/p/143758627)

setup函数作为Compostion API的入口，是在组件的beforeCreate hook和created hook之间被调用的。更多内容可参考官方文档[Vue3中文文档-什么是组合式-api](https://vue3js.cn/docs/zh/guide/composition-api-introduction.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E5%90%88%E5%BC%8F-api)

`src/pages/compostion`下为使用新的api重构，用法不一定妥当，但基本思路就是将相关的逻辑进行归类

### vite 启动与打包

因为直接使用ES6的模块化，所以打包速度非常快，打包后的代码也都是ES6的模块化标准，

html文件为

      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>Vite App</title>
        <script type="module" crossorigin src="/assets/index.67875660.js"></script>
        <link rel="modulepreload" href="/assets/vendor.17089b82.js">
        <link rel="stylesheet" href="/assets/index.02c84ff5.css">
      </head>
        <body>
          <div id="app"></div>
          
        </body>
      </html>

然后会根据路由，懒加载创建对应的js与css
       
       <!-- 在head标签内自动创建 -->
      <link rel="modulepreload" as="script" crossorigin="" href="/assets/Home.31a685fb.js">
      <link rel="stylesheet" href="/assets/Home.672b7237.css">

打包后的js文件对比webpack也没有其他乱七八糟的内容（用的rollup做的打包）：

      import {o as t, c as a} from "./vendor.17089b82.js";
      const n = {
          data: ()=>({
              html: ""
          }),
          methods: {
              async getData(t) {
                  const a = await this.$http.get(`/i${t}/info/`, {
                      params: {
                          _signature: "HLIIRxARQk77xfBBg2LRhxyyCF",
                          i: t
                      }
                  });
                  this.html = a.data.content
              }
          },
          created() {
              this.getData(this.$route.params.id)
          }
      };
      n.render = function(n, e, i, r, s, o) {
          return t(),
          a("div", {
              class: "content",
              innerHTML: s.html
          }, null, 8, ["innerHTML"])
      }
      ;
      export default n;

不过vue3.0 很多高级API还处在不稳定的阶段，后续会继续关注

## 参考

- [博客：花果山 / Vue3生态技术内幕](https://www.yuque.com/hugsun/vue3/intro)