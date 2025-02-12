<template>
  <div class="game-container">
    <h1>游戏列表</h1>
    <slot :games="games"></slot>
  </div>
</template>

<script lang="ts" name="Game" setup>
import {reactive} from "vue";

let games = reactive([{
  id: 1,
  name: "Game 1",
  content: "Lorem Ipsum",
},{
  id: 2,
  name: "Game 2",
  content: "Lorem Ipsum",
}])
</script>

<style scoped>
.game-container {
  width:200px;
  height: 300px;
  background-color:skyblue;
  border-radius:10px;
  box-shadow:0 0 10px;
}
</style>