//引用createApp用于创建应用
import {createApp} from "vue";
//引用App根组件
import App from './App.vue';

//将组件绑定到id=app的div上
createApp(App).mount('#app')