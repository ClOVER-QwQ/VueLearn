# 注意
1.导航区、展示区
2.请来路由器
3.制定路由的具体规则(什么路径，对应着什么组件)
4.形成一个一个的 (???.vue) class.vue Subject.vue

# 步骤
## 写路由
````
import {createRouter,createWebHistory} from "vue-router";

import Creator from "@/components/creator.vue";

const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[
        {
            path:'/creator',
            component:Creator
        },
 ]
})

export default router
````
## 挂载
````
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

const app = createApp(App);

app.use(router); // 先注册路由
app.mount('#app'); // 再挂载应用
````
## 找放组件的位置
## 链接
````
import {RouterView,RouterLink} from "vue-router";

<RouterLink to="/creator" class="linker">开发者</RouterLink>

 <div class="main-content">
      <RouterView></RouterView>
 </div>
````

# 【两个注意点】
### 路由组件通常存放在 pages 或 views 文件夹，一般组件通常存放在 components 文件夹
### 通过点击导航，视觉效果上“消失”了的路由组件，默认是被销毁掉的，需要的时候再去挂载
# 【to的两种写法】
### <!--第一种:to的字符串写法-->
````
<router-link active-class="active" to="/home">主页</router-link>
````
### <!--第二种:to的对象写法-->
````
<router-link active-class="active" :to="{path:'/home'}">Home</router-link>
````

# 工作模式
## history 模式
### 优点: URL 更加美观，不带有#，更接近传统的网站URL
### 缺点:后期项目上线，需要服务端配合处理路径问题，否则刷新会有 404 错误。
### const router=createRouter(
### history:createWebHistory()，//history模式
## hash 模式
### 优点:兼容性更好，因为不需要服务器端处理路径
### 缺点:URL 带有 #不太美观
### 且在 SE0 优化方面相对较差,
### const router =createRouter({
### history:createWebHashHistory()，//hash榄式

# 【to的两种写法】
## <!--第一种:to的字符串写法-->
````
<router-link active-class="active" to="/home">主灯</router-link>
````
## <!--第二种:to的对象写法-->
````
<router-link active-class="active" :to="{path:'/home'}">Home</router-link>
````

# to的命名方式跳转
## 1.编写路由
````
    routes:[
        {
            name:"creator",
            path:'/creator',
            component:Creator
        }
    ]
````
## 2.编写to
````
:to="{name:'product'}"
````