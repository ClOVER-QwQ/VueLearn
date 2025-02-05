<template>
  <!--html!-->
  <div class="person">
    <h2>{{person.name}}</h2>
    <h2>{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import {ref, watch} from "vue";

let person =ref({name:"张三",age:30})

function changeName(){
  person.value.name = person.value.name + "~"
}

function changeAge(){
  person.value.age++
}

function changePerson(){
  person.value = {name:"李四",age:32}
}

watch(person,(newValue, oldValue)=>{
  console.log("person变化了",newValue,oldValue)
},{deep:true})
</script>

<style>
/*样式*/
.person{
  background:blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>