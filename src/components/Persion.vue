<template>
    <div class="persion">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <h2>tel: {{ tel }}</h2>
        <button @click="ageChange">age++</button>
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
<script lang="ts" setup name="Persion234">
    //数据
    let name = "张三";
    let age = 18;
    let tel = "183888888888";
    //方法
    function ageChange() {
        return (age += 1);
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