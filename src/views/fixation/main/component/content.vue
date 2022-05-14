<template>
  <div class="content">
    <div class="content-top">
      <div class="top-left"></div>
      <div class="top-right">
        <div class="top-right-icon">
          <Icon class="btn-icon">
            <ArrowsAltOutlined />
          </Icon>
          <Icon class="btn-icon" @click="win">
            <BellTwotone />
          </Icon>
        </div>
        <div class="top-right-user">
          <img class="top-right-user-head" src="@/assets/head.jpg" alt="" />
          <div class="top-right-user-name">
            <span>DL-NEST</span>
            <br />
            管理员
          </div>
        </div>
      </div>
    </div>
    <div class="content-router">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@vicons/utils";
import { ArrowsAltOutlined, BellTwotone } from "@vicons/antd";

export default defineComponent({
  components: {
    Icon,
    ArrowsAltOutlined,
    BellTwotone,
  },
  setup() {},
  methods: {
    win() {
      window.$loadingBar?.start();
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  flex-grow: 1;
  height: 100%;
  // 布局
  display: flex;
  flex-direction: column;
  .content-top {
    position: relative;
    width: 100%;
    height: var(--top-high);
    background-color: var(--app-main-main-color);
    padding-left: 32px;
    padding-right: 32px;
    user-select: none;
    // 布局
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .top-left {
      height: 100%;
      background-color: aquamarine;
    }
    .top-right {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .top-right-user {
        display: flex;
        justify-content: center;
        align-items: center;
        .top-right-user-head {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          margin-right: 16px;
        }
        .top-right-user-name {
          color: var(--menu-group-font-color);
          span {
            font-size: 1.8rem;
            font-weight: bold;
          }
          font-size: 1.4rem;
          text-align: left;
        }
      }
      .top-right-icon {
        height: 100%;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
        .btn-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: var(--menu-group-font-color);
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 2.6rem;
          cursor: pointer;
          &:hover {
            background-color: var(--menu-node-btn-color);
            color: var(--menu-node-on-color);
          }
        }
      }
    }
  }
  .content-router {
    height: 100%;
    flex: 1;
    background-color: var(--app-main-background);
  }
}
</style>
