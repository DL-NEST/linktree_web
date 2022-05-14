<template>
  <div class="admin">
    <Menu :logo="logo" :render-menu="renderMenu" />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  DashboardTwotone,
  HddTwotone,
  NodeIndexOutlined,
  SettingTwotone,
  FileExclamationTwotone,
  GoldTwotone,
} from "@vicons/antd";

import Content from "views/fixation/main/component/content.vue";
import Menu from "./component/menu.vue";
import logo from "../../../assets/Logo.svg";

const renderMenu = [
  {
    name: "Home",
    node: [
      {
        name: "Gauge",
        path: "/gauge",
        icon: DashboardTwotone,
        pick: true,
      },
      {
        name: "Service",
        path: "/service",
        icon: HddTwotone,
      },
      {
        name: "Device",
        path: "/device",
        icon: GoldTwotone,
      },
    ],
  },
  {
    name: "Control",
    node: [
      {
        name: "Link",
        path: "/link",
        icon: NodeIndexOutlined,
      },
      {
        name: "Logs",
        path: "/logs",
        icon: FileExclamationTwotone,
      },
    ],
  },
  {
    name: "Setup",
    node: [
      {
        name: "Settings",
        path: "/settings",
        icon: SettingTwotone,
      },
    ],
  },
];

export default defineComponent({
  components: { Content, Menu },
  setup() {
    return {
      logo,
      renderMenu,
    };
  },
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.admin {
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
