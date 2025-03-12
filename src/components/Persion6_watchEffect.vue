<template>
  <div class="persion">
    <h2>温度： {{ temp }}C</h2>
    <h2>水位： {{ height }}cm</h2>
    <button @click="changeTemp">改变温度</button>
    <button @click="changeHeight">改变水位</button>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { log } from "console";
import { ref, watch, watchEffect } from "vue";

let temp = ref(10);
let height = ref(10);
function changeTemp() {
  temp.value = temp.value + 10;
}
function changeHeight() {
  height.value = height.value + 10;
}

// watch([temp, height],(newVal,oldValue) => {
//   console.log(newVal,oldValue, '监听到变化');
  
// })
watchEffect(() => {
  // console.log(temp.value, height.value, '监听到变化');
  if (temp.value > 50 ) {
    console.log('给服务器发送温度消息');
    
  }
  if (height.value > 50) {
    console.log('给服务器发送水位消息');
    
  }
})

</script>
<style>
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
