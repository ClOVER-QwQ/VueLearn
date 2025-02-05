<template>
  <div class="ref">
    <h2>北京</h2>
    <h2 ref="title2">上海</h2>
    <h2>天津</h2>
    <button @click="show2">输出</button>
  </div>
</template>

<script lang="ts" name="Ref" setup>
import {ref} from "vue";

let title2 = ref();

function show2(){
  console.log(title2.value)
}
</script>

<style scoped>
.ref{
  background:blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>