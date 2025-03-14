<template>
   <h2>你好</h2>
   <button @click="showLog">打印</button>
   <Persion ref="per" a="哈哈" :list="personList" />

   <hr>
   <!-- 字符串跳转 -->
   <router-link to="/home" active-class="active">首页</router-link>
   <router-link to="/news" active-class="active">新闻</router-link>
   <!-- <router-link to="/about" active-class="active">关于</router-link> -->

   <!-- 对象跳转==> 名字跳转 -->
   <router-link :to="{name: 'About'}" active-class="active">关于</router-link>  
   <!-- 对象跳转==>  路径跳转 -->
   <router-link :to="{path: '/about'}" active-class="active">关于</router-link>  
   <router-view></router-view>
</template>
<script lang="ts" setup name="App">
import { type PersonInter, type persons } from '../types/index'
import { ref, reactive } from "vue";
import Persion from "./components/Persion.vue"; 
import { RouterView } from 'vue-router';

let per = ref()

let personList = reactive<persons>([
  {name: '张三', age: 18, sex: '男'},
  {name: '张三', age: 18, sex: '男'},
  {name: '张三', age: 18, sex: '男',x:99}
])
function showLog() {
   console.log("打印",per.value);
}
</script>
<style scoped>
.active{
  color: red;
}
</style>