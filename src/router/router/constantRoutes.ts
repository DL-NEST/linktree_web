import type { RouteRecordRaw } from "vue-router";
/**
 * 固定不变的路由
 * @description !最后一项重定向未找到的路由须放置路由的最后一项
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/fixation/login/index.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("views/fixation/main/index.vue"),
  },
  // 路由不匹配跳转
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("views/states/404.vue"),
  },
];
