<template>
  <div class="persion">
    <h2>姓名： {{ person.name }}</h2>
    <h2>年龄： {{ person.age }}</h2>
    <h2>车： {{ person.cars.c1.name }} 、 {{ person.cars.c2.name }}</h2>
    <button @click="changeName">改变姓名</button>
    <button @click="changeAge">改变年龄</button>
    <button @click="changeC1">改变C1</button>
    <button @click="changeC2">改变C2</button>
    <button @click="changeCar">改变车</button>
  </div>
</template>
<script lang="ts" setup name="Persion">
import { reactive, ref, watch } from "vue";

let person = reactive({
  name: "张三",
  age: 18,
  cars: {
    c1: {
      name: "保时捷1",
      price: 100000,
    },
    c2: {
      name: "保时捷2",
      price: 100000,
    },
  },
});

function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changeC1() {
  person.cars.c1.name = "林肯";
}
function changeC2() {
  person.cars.c2.name = "林肯2";
}
function changeCar() {
  person.cars = {
    c1: {
      name: "玛莎拉蒂1",
      price: 100000,
    },
    c2: {
      name: "玛莎拉蒂2",
      price: 100000,
    },
  };
}

// 监视响应式对象中的某个基本类型的属性，需要写成函数式
watch(() => person.name, (newValue, oldValue) => {
  console.log("person.name值变化了", newValue, oldValue);
});
// 监视响应式对象中的某个对象类型的属性，最好写成函数式  但对象中的属性 需要开启deep:true
// watch(person.cars, (newValue, oldValue) => {
//   console.log("person.cars值变化了", newValue, oldValue);
// });
watch(() => person.cars, (newValue, oldValue) => {
  console.log("person.cars值变化了", newValue, oldValue);
},{deep: true});

watch([() => person.name,() => person.cars.c1.name], (newValue, oldValue) => {
  console.log("person.cars值变化了", newValue, oldValue);
},{deep: true});
</script>
<style>
.persion {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
