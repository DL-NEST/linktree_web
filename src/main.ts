import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import setupRouter from "@/router";
// 自定义样式
import "./style/index.scss";

// 创建实列
const app = createApp(App);

(function setupApp() {
  // 装载全局store/pinia
  app.use(createPinia());
  // 装载路由
  setupRouter(app).then();
  // 挂载实列
  app.mount("#app");
})();
