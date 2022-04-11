<template>
  <div class="home-main">
    <div class="navigation" :class="navigation ? 'on' : 'off'">
      <div class="menu-logo"></div>
      <div class="menu-list">
        <div
          v-for="{ name, icon } in menuList"
          :key="name"
          class="menu-list-node"
        >
          <div class="menu-node-icon">
            <img :src="icon" alt="" />
          </div>
          <div class="menu-node-name">{{ name }}</div>
        </div>
      </div>
      <div class="menu-group-foot"></div>
    </div>
    <div
      class="right"
      style="display: flex; justify-content: center; align-items: center"
    >
      <n-button @click="nav">展开/收起</n-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NButton } from "naive-ui";
import icon from "../assets/listIcon/home.svg";

const menuList = [
  {
    name: "home",
    icon,
  },
];

export default defineComponent({
  name: "Home",
  components: { NButton },
  setup() {
    const navigation = ref(false);
    return {
      menuList,
      navigation,
    };
  },
  methods: {
    nav() {
      this.navigation = !this.navigation;
    },
  },
});
</script>

<style lang="scss">
.home-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.right {
  height: 100%;
  flex-grow: 1;
  background-color: aqua;
}

.navigation {
  position: fixed;
  height: 100%;
  background-color: aquamarine;
  padding: 2.5rem;
  .menu-logo {
    width: 100%;
    height: 6rem;
    background-color: white;
    margin-bottom: 2.5rem;
  }
  .menu-list {
    height: auto;
    width: 100%;
  }
  .menu-group-foot {
    position: relative;
    bottom: 0;
    background-color: white;
    width: 100%;
    height: 100px;
  }
}

.on {
  width: 30rem;
  .menu-list {
    .menu-list-node {
      justify-content: flex-start;
      .menu-node-name {
        display: none;
      }
    }
  }
}

.off {
  width: 11rem;
  .menu-list {
    .menu-list-node {
      justify-content: center;
      .menu-node-name {
        display: none;
      }
    }
  }
}

.menu-list {
  .menu-list-node {
    width: 100%;
    height: 5rem;
    margin-bottom: 10px;
    background-color: antiquewhite;
    display: flex;
    flex-direction: row;
    align-items: center;

    .menu-node-icon {
      height: 5rem;
      width: 5rem;
      background-color: burlywood;
      padding: 0.8rem;
      img {
        height: 100%;
        width: 100%;
        background-color: green;
      }
    }
    .menu-node-name {
      font-size: 1.6em;
    }
  }
  .menu-list-node:hover {
    background-color: #0f9367;
  }
}
</style>
