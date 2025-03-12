<template>
   <h2>你好</h2>
   <button @click="showLog">打印</button>
   <Persion ref="per" />
</template>
<script lang="ts" setup name="App">
import { ref } from "vue";
import Persion from "./components/Persion.vue"; 

let per = ref()
function showLog() {
   console.log("打印",per.value);
}
</script>