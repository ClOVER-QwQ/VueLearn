<template>
  <!--html!-->
  <Game v-slot="{games}">
    <ol v-for="game in games">
      <li>{{game.name}}</li>
    </ol>
  </Game>
</template>

<script lang="ts" name="App" setup>
import Game from "@/components/game.vue";
</script>

<style>
/*样式*/
</style>