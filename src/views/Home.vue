<template>
  <div class="persion">
    <!-- <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <h2>tel: {{ tel }}</h2>
        <button @click="NameChange">名字改变</button>
        <button @click="ageChange">age++</button> -->
    <h2>一辆{{ car.brand }}车,价值{{ car.price }}万元</h2>
    <button @click="carChange">修改车的价格</button>
    <hr/>
    <h2>
        游戏列表：
        <div v-for="x in games" :key="x.id">{{x.name}}</div>
    </h2>
    <button @click="firstGameChange">修改第一个游戏名字</button>
  </div>
</template>
<!-- <script lang="ts">
export default {
    name: "Persion",
    //    data() {
    //     return {
    //         age: 11
    //     }
    //    },
    //    methods:{
    //     ageChange() {
    //         this.age++
    //     }
    //    }
    // setup的执行时机比vue2中的beforeUpdate还早
    // setup() {
    //     //数据
    //     let name ='张三'
    //     let age = 18
    //     let tel = '183888888888'
    //     //方法
    //     function ageChange() {
    //         return age += 1
    //     }

    //     return { name, age, tel, ageChange}

    //     // return () => {
    //     //     age += 1
    //     //     return { name, age, tel}
    //     // }
    // }
};
</script> -->
<script lang="ts" setup name="Persion">
import { ref } from "vue";
//     //数据
//     let name = ref("张三");
//     let age = ref(18);
//     let tel = "183888888888";
//     console.log(name);

//     //方法
//     function NameChange() {
//         return (name.value = 'lisi');
//     }
//     function ageChange() {
//         return (age.value += 1);
//     }
import { reactive } from "vue";
let car = reactive({ brand: "大奔", price: 200 });
let games = ref([
    {id: 1, name: '吃鸡'},
    {id: 2, name: 'cf'},
    {id: 3, name: 'cs'},
])
function carChange() {
  return (car.price += 10);
}
function firstGameChange() {
  return games.value[0].name = '王者';
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