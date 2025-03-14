// 第一步 引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//第二部  引入组件
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import About from "../views/About.vue";

// 创建路由器
const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/news",
      name: "News",
      component: News,
      children: [
        {
          path: "detail",
          name: "NewsDetail",
          component: () => import("../views/NewsDetail.vue"),
        },
      ]
    },
    {
      path: "/about",
      name: "About",
      component: About,
   },
  ]
})

//第三步 暴露出去
export default routes;