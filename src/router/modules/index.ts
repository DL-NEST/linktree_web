/** 模块路由 */
import type { RouteRecordRaw } from 'vue-router';
/**
 * 模块化可添加的路由
 * @description !
 */
const modulesRoutes: RouteRecordRaw[] = [
  {
    path: '/main',
    redirect: "/console",
  },
  {
    path: '/console',
    name: 'console',
    component: () => import('views/main_page/console/index.vue'),
  }
];

export {modulesRoutes};
