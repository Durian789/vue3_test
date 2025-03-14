<template>
  <div class="persion">
    <h2>{{person.name}}</h2>
    <h2>{{a}}</h2>
    <h3 v-for="(x) in list" :key="x.index">{{x}}</h3>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { type PersonInter, type persons } from '../types/index'
import {  reactive, withDefaults, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import { log } from 'console'


let person:PersonInter = {name: '张三', age: 18, sex: '男'}

// let list:Array<PersonInter> = [
//   {name: '张三', age: 18, sex: '男'},
//   {name: '张三', age: 18, sex: '男'},
//   {name: '张三', age: 18, sex: '男'}
// ]
// let list:persons = [
//   {name: '张三', age: 18, sex: '男'},
//   {name: '张三', age: 18, sex: '男'},
//   {name: '张三', age: 18, sex: '男'}
// ]

// prop

// let list = reactive<persons>([
//   {name: '张三', age: 18, sex: '男'},
//   {name: '张三', age: 18, sex: '男'},
//   {name: '张三', age: 18, sex: '男',x:99}
// ])

// let temp = defineProps(['a','list'])
//只接受list + 限制类型
// defineProps<{list:persons}>()

//限制必要性
// defineProps<{list?:persons}>()

//withDefaults  默认值
withDefaults(defineProps<{list?:persons}>(),{
  list:() => {
    return [
      {name: '张三1', age: 18, sex: '男'},
      {name: '张三2', age: 18, sex: '男'},
      {name: '张三3', age: 18, sex: '男',x:99}
    ]
  }
})

// defineProps 宏函数，不用引入

// 生命周期

console.log('创建')

onBeforeMount(() => {
  console.log('挂载前');
} )
onMounted(() => {
  console.log('挂载后');
  
} )
onBeforeUpdate(() => {
  console.log('更新前');
} )
onUpdated(() => {
  console.log('更新后');
} )
onBeforeUnmount(() => {
  console.log('卸载前');
  
} )
onUnmounted(() => {
  console.log('卸载后');
  
} )
console.log('创建2')



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
