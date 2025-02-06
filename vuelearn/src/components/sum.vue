<template>
  <div class="sum">
    <h2>水温:{{temp}}</h2>
    <h2>水位:{{height}}</h2>
    <button @click="changeTemp">temp</button>
    <button @click="changeHeight">height</button>
  </div>
</template>

<script lang="ts" setup name="Sum">
import useSum from "@/hooks/useSum.ts";

const {temp,height,changeHeight,changeTemp} = useSum()
</script>

<style scoped>
.sum{
  background:blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>