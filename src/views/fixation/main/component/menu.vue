<template>
  <div class="app-menu" :class="btnIcon ? 'full' : 'menu'">
    <div class="menu-pull" style="position: absolute" @click="pull">
      <Icon>
        <component :is="btnIcon ? RightOutlined : LeftOutlined"></component>
      </Icon>
    </div>
    <div class="menu-logo">
      <svg
        width="36px"
        height="24px"
        viewBox="0 0 36 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <path
          d="M8.98885921,23.8523026 C8.8942483,23.9435442 8.76801031,24 8.62933774,24 L2.03198365,24 C1.73814918,24 1.5,23.7482301 1.5,23.4380086 C1.5,23.2831829 1.55946972,23.1428989 1.65570253,23.0416777 L13.2166154,12.4291351 C13.3325814,12.3262031 13.4061076,12.1719477 13.4061076,11.999444 C13.4061076,11.8363496 13.3401502,11.6897927 13.2352673,11.587431 L1.68841087,0.990000249 C1.57298556,0.88706828 1.5,0.733668282 1.5,0.561734827 C1.5,0.251798399 1.73814918,2.85130108e-05 2.03198365,2.85130108e-05 L8.62933774,2.85130108e-05 C8.76855094,2.85130108e-05 8.89532956,0.0561991444 8.98994048,0.148296169 L21.4358709,11.5757407 C21.548593,11.6783875 21.6196864,11.8297916 21.6196864,11.999444 C21.6196864,12.1693815 21.5483227,12.3219261 21.4350599,12.4251432 L8.98885921,23.8523026 Z M26.5774333,23.8384453 L20.1765996,17.9616286 C20.060093,17.8578413 19.9865669,17.703871 19.9865669,17.5310822 C19.9865669,17.3859509 20.0390083,17.2536506 20.1246988,17.153855 L23.4190508,14.1291948 C23.5163648,14.0165684 23.6569296,13.945571 23.8131728,13.945571 C23.9602252,13.945571 24.0929508,14.0082997 24.1894539,14.1092357 L33.861933,22.9913237 C33.9892522,23.0939706 34.0714286,23.2559245 34.0714286,23.4381226 C34.0714286,23.748059 33.8332794,23.9998289 33.5394449,23.9998289 L26.9504707,23.9998289 C26.8053105,23.9998289 26.6733958,23.9382408 26.5774333,23.8384453 Z M26.5774333,0.161098511 C26.6733958,0.0615881034 26.8053105,0 26.9504707,0 L33.5394449,0 C33.8332794,0 34.0714286,0.251769886 34.0714286,0.561706314 C34.0714286,0.743904453 33.9892522,0.905573224 33.861933,1.00822006 L24.1894539,9.89030807 C24.0929508,9.99152926 23.9602252,10.0542579 23.8131728,10.0542579 C23.6569296,10.0542579 23.5163648,9.98354562 23.4190508,9.87063409 L20.1246988,6.8459739 C20.0390083,6.74617837 19.9865669,6.613878 19.9865669,6.46874677 C19.9865669,6.29624305 20.060093,6.14198767 20.1765996,6.03848544 L26.5774333,0.161098511 Z"
        ></path>
      </svg>
      <p v-if="!btnIcon" style="font-size: 4rem; color: white">linkTree</p>
    </div>
    <div class="menu-list">
      <div v-for="(group, index) in renderMenu" :key="index" class="menu-group">
        <div class="menu-group-name">{{ group.name }}</div>
        <div
          v-for="node in group.node"
          :key="node.name"
          class="menu-node"
          :class="node.pick ? 'active' : ''"
          @click="clickNode($event, node.path)"
        >
          <Icon class="menu-node-icon">
            <component :is="node.icon"></component>
          </Icon>
          <div class="menu-node-name">
            {{ node.name }}
          </div>
        </div>
        <hr class="menu-group-foot" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Icon } from "@vicons/utils";
import {
  DashboardTwotone,
  HddTwotone,
  LeftOutlined,
  RightOutlined,
} from "@vicons/antd/";
import { DarkModeOutlined, WbSunnyOutlined } from "@vicons/material";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    renderMenu: {
      default: [
        {
          name: "Home",
          node: [
            {
              name: "Gauge",
              path: "/gauge",
              icon: DashboardTwotone,
            },
            {
              name: "Service",
              path: "/service",
              icon: HddTwotone,
            },
          ],
        },
      ],
    },
  },
  setup() {
    const btnIcon = ref<boolean>();
    return {
      LeftOutlined,
      RightOutlined,
      DarkModeOutlined,
      WbSunnyOutlined,
      btnIcon,
    };
  },
  methods: {
    pull() {
      this.btnIcon = !this.btnIcon;
    },
    clickNode(ever: any, path: string) {
      (document.querySelectorAll(".menu-node") as any).forEach(
        (node: HTMLElement) => {
          node.classList.remove("active");
        }
      );
      ever.currentTarget.classList.add("active");
      this.$router.push(path);
    },
  },
});
</script>

<style lang="scss" scoped>
.menu-pull {
  cursor: pointer;
}
.active {
  background-color: var(--menu-node-btn-color) !important;
  color: var(--menu-node-on-color) !important;
  box-shadow: 1px 1px 4px rgba(255, 255, 255, 0.3);
}
.app-menu {
  flex-shrink: 0;
  position: relative;
  user-select: none;
  height: 100%;
  background-color: var(--app-main-main-color);
  transition: width 0.8s;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
  z-index: 40;
  .menu-pull {
    z-index: 100;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: absolute;
    width: 3rem;
    height: 3rem;
    background-color: var(--menu-node-btn-color);
    margin-top: calc(77px / 2) - 15px;
    // 样式
    border-radius: 50%;
    box-shadow: 1px 1px 4px rgba(255, 255, 255, 0.3);
  }
  .menu-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: var(--top-high);
    margin-bottom: 1.6rem;
    border-bottom: 2px solid var(--menu-group-foot-color);
    svg {
      fill: var(--menu-node-btn-color);
    }
  }
  .menu-list {
    width: 100%;
    .menu-group {
      width: 100%;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      .menu-group-name {
        font-family: "Segoe UI Historic";
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 4.4rem;
        margin-bottom: 8px;
        font-size: 1.6rem;
        color: var(--menu-group-font-color);
      }
      .menu-group-foot {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90%;
        //border-color: var(--menu-group-foot-color);
        border-style: solid;
        height: 0;
        border-top: 2px solid var(--menu-group-foot-color);
        margin: 4px 0 8px 5%;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
      }
      .menu-node {
        width: 100%;
        height: 4.4rem;
        border-radius: 0.4rem;
        padding-top: 8px;
        padding-bottom: 8px;
        cursor: pointer;
        user-select: none;
        // 布局
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--menu-node-off-color);
        &:hover {
          background-color: rgba(110, 109, 109, 0.48);
          color: var(--menu-node-on-color);
          box-shadow: none;
        }
        &.hit {
          background-color: var(--menu-node-btn-color);
          color: var(--menu-node-on-color);
        }
        .menu-node-icon {
          font-size: 24px;
          width: 24px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .menu-node-name {
          line-height: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1.6rem;
          opacity: 1;
          transition: opacity 1s;
        }
      }
    }
  }
}
.menu {
  width: var(--menu-on-wide);
  .menu-pull {
    margin-left: calc(var(--menu-on-wide) - calc(30px / 2));
    transition: margin-left 0.8s;
  }
  .menu-logo {
    svg {
      margin-right: 1rem;
    }
  }
  .menu-list {
    width: 100%;
    .menu-group {
      width: 100%;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      .menu-group-name {
        justify-content: flex-start;
        padding-left: 2rem;
      }
      .menu-node {
        padding-left: 24px;
        // 布局
        flex-direction: row;
        .menu-node-icon {
          margin-right: 16px;
        }
        .menu-node-name {
          line-height: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 1.6rem;
          opacity: 1;
          transition: opacity 1s;
        }
      }
    }
  }
}
.full {
  width: var(--menu-off-wide);
  .menu-pull {
    margin-left: calc(var(--menu-off-wide) - calc(30px / 2));
    transition: margin-left 0.8s;
  }
  .menu-list {
    width: 100%;
    .menu-group {
      width: 100%;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      .menu-group-name {
        justify-content: center;
      }
      .menu-node {
        // 布局
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .menu-node-name {
          opacity: 0;
          display: none;
        }
      }
    }
  }
}
</style>
