<template>
  <div class="gauge">
    <div class="board-list">
      <div class="board">
        <div id="board-chile"></div>
      </div>
      <div class="board"></div>
      <div class="board"></div>
      <div class="board"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {},
});
</script>

<style lang="scss" scoped>
.gauge {
  width: 100%;
  height: 100%;
  padding: 5rem;
  .board-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 11.7rem;
    //background-color: #0f573f;
    .board {
      color: white;
      height: 100%;
      width: 23rem;
      background-color: var(--app-main-main-color);
      .board-round {
        width: 80px;
        font-size: 20px;
      }
    }
    //background-color: var(--app-main-main-color);
  }
  .test {
    width: 300px;
    height: 300px;
    background-color: white;
  }
}
</style>
