<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <slot name="content">
      <!-- 默认内容 -->
    </slot>
  </div>
</template>

<script setup lang="ts" name="Category">
defineProps(["title"])
</script>

<style scoped>
.category{
  background-color:skyblue;
  border-radius:10px;
  box-shadow:0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}
</style>