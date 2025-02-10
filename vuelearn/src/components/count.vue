<template>
  <div class="count">
  <h2>sum:{{sum}}</h2>
  <h2>sum*10:{{bigSum}}</h2>
  <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">sum+</button>
  </div>
</template>

<script lang="ts" name="Count" setup>
import {ref} from "vue";
import useCountStore from "@/store/count.ts";
import {storeToRefs} from "pinia";

const countStore = useCountStore();
const {sum,bigSum} = storeToRefs(countStore);
let n = ref(1)

countStore.$subscribe(()=>{
  localStorage.setItem('sum',countStore.sum)
})

function add() {
  countStore.add(n.value);
}
</script>

<style scoped>
.count{
  background:blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>