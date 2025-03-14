<template>
  <div class="persion">
    <h1>News</h1>

    <h2>
      <router-link to="/news/detail">详情</router-link>
    </h2>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";

</script>
<style>
.persion {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>