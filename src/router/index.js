import {createRouter,createWebHistory} from "vue-router"
const routes=[{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: () => import('../pages/Home.vue')
},
{
  path: '/compostion',
  component: () => import('../pages/compostion/Home.vue')
},
{
  path: '/detail/:id',
  component: () => import('../pages/Detail.vue')
}]
const router =createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
export default router