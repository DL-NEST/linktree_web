/** 装填路由 */
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";
import type { App } from "vue";
import { createRouterGuide } from "@/router/guard";
// 加载路由
import { activityRouter, constantRoutes } from "@/router/router";

const routes: RouteRecordRaw[] = [...constantRoutes, ...activityRouter];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default async function setupRouter(app: App) {
  // 装载路由
  app.use(router);
  // 装载路由守卫
  createRouterGuide(router);
  // 等待装载结束
  await router.isReady();
}
