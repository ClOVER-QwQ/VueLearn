<template>
  <div class="sum">
    <h2>水温:{{temp}}</h2>
    <h2>水位:{{height}}</h2>
    <button @click="changeTemp">temp</button>
    <button @click="changeHeight">height</button>
  </div>
</template>

<script lang="ts" setup name="Sum">
import {ref, watchEffect} from "vue";

let temp = ref(10)
let height = ref(0)

function changeTemp(){
  temp.value = temp.value + 10
}

function changeHeight(){
  height.value++
}

watchEffect(()=>{
  if (temp.value >= 60||height.value >= 60){
    console.log("给服务器发请求")
  }
})
</script>

<style scoped>
.sum{
  background:blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>