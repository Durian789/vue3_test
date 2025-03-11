<template>
  <div class="persion">
    <h1>情况一、监视 ref 定义的 基本数据 类型 </h1>
    <h2>当前求和为： {{sum}}</h2>
    <button @click="chnageSum">点我sum加一</button>


    <!-- <h1>情况二、监视 ref 定义的 对象数据 类型 </h1>
    <h2>姓名： {{person.name}}</h2>
    <h2>年龄： {{person.age}}</h2>
    <button @click="changeName">改变姓名</button>    
    <button @click="changeAge">改变年龄</button>    
    <button @click="changePerson">改变整个人</button> -->

    <h1>情况三、监视 reactive 定义的 对象数据 类型 </h1>
    <h2>姓名： {{person.name}}</h2>
    <h2>年龄： {{person.age}}</h2>
    <button @click="changeName">改变姓名</button>    
    <button @click="changeAge">改变年龄</button>    
    <button @click="changePerson">改变整个人</button>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { reactive, ref, watch } from 'vue'

// 数据
let sum = ref(0)
// 方法
function chnageSum() {
  sum.value++
}

const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum值变化了', sum.value, newValue, oldValue)
  if (sum.value > 10) {
    stopWatch()
  }
})

//数据
// let person = ref({
//   name: '张三',
//   age: 18
// })  

// function changeName() {
//   person.value.name += '~'
// }
// function changeAge() {
//   person.value.age += 1
// }
// function changePerson() {
//   person.value = {
//     name: '李四',
//     age: 20
//   }
// }

// watch(person, (newValue, oldValue) => {
//   console.log('person值变化了', newValue, oldValue);
// },{
//   deep: true,
//   immediate: true
// })


//三、监视 reactive 定义的 对象数据 类型  默认开启深度监听（隐式创建了深度监听）  并没法关闭 新旧值都是同一个
let person = reactive({
  name: '张三',
  age: 18
})  

function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changePerson() {
  Object.assign(person, {name: '王五',age: 20})
}

watch(person, (newValue, oldValue) => {
  console.log('person值变化了', newValue, oldValue);
})

</script>
<style>
.persion {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>