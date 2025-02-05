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
import {reactive,watch} from "vue";
import type {personInf} from "@/types";

let person =reactive<personInf>({
  name:"张三",
  age:30,
  tel:18726255555
})

function changeName(){
  person.name = person.name + "~"
}

function changeAge(){
  person.age++
}

function changePerson(){
  Object.assign(person,{name:"李四",
    age:55,
    car:{
      car1:"奔驰",
      car2:"宝马"
    }})
}

watch([()=>person.name],(newValue, oldValue)=>{
  console.log("person.name变化了",newValue,oldValue)
},{deep:true})
</script>

<style scoped>
/*样式*/
.person{
  background:blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  padding: 20px;
}
</style>