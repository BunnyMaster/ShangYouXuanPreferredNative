import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/LayOut.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 1.加载进度条：
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
// 2.页面加载完成关闭进度条：
router.afterEach((to, from) => {
  NProgress.done();
});
export default router;
