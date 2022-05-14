import { RouteRecordRaw } from "vue-router";

export const activityRouter: RouteRecordRaw[] = [
  {
    path: "/main",
    name: "main",
    component: () => import("views/fixation/main/index.vue"),
    children: [
      {
        path: "/main",
        redirect: "/gauge",
      },
      {
        path: "/gauge",
        name: "gauge",
        component: () => import("views/activity/Gauge/index.vue"),
      },
      {
        path: "/service",
        name: "service",
        component: () => import("views/activity/Service/index.vue"),
      },
      {
        path: "/device",
        name: "device",
        component: () => import("views/activity/Device/index.vue"),
      },
    ],
  },
];
