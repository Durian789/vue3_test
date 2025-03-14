<template>
  <div class="persion">
    <h2>中国</h2>
    <h3 ref="title2">北京</h3>
    <h4>尚硅谷</h4>
    <button @click="inputChange">点我打印</button>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { ref, defineExpose } from 'vue'

let title2 =  ref()

let a = ref(1)
let b = ref(2)
let c = ref(3)

function inputChange() {
  console.log(title2.value)
}

defineExpose({a,b,c})

</script>
<style scoped>
.persion {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin-right: 20px;
}
</style>
