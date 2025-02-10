//引用createApp用于创建应用
import {createApp} from "vue";
//引用App根组件
import App from './App.vue';
//引入pinia
import {createPinia} from 'pinia'

const app = createApp(App)
const pinia = createPinia()
//绑定pinia
app.use(pinia)
//将组件绑定到id=app的div上
app.mount("#app")