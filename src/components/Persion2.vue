<template>
  <div class="persion">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>年龄2：{{age2}}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { reactive, toRefs, toRef } from "vue";
let person = reactive({
  name: '张三',
  age: 18
})
let {name, age} = toRefs(person)
let age2 = toRef(person,'age')
function changeName(){
  // person.name += '~'
  name.value += '~'
}
function changeAge(){
  // person.age += 1
  age.value += 1
}
</script>
<style>
.persion {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>