//引入createApp用于创建应用
import { createApp } from "vue";
//引入App跟组件
import App from './app.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')