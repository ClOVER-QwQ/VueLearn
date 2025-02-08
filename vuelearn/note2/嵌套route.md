# 方法
1. 在路由规则中写入嵌套
````
    routes:[
        {
            name:"Creators",
            path:'/Creators',
            component:Creators,
            children:[{
                name:"Creator",
                path:'creator',
                component:Creator
            }]
        },
````
2.编写连接
````
<p class="name"><RouterLink :to="{name:'Creator',query:{about:creator.about}}">{{creator.name}}</RouterLink></p>
````
3.编写接收参数
````
import {useRoute} from "vue-router";
import {toRefs} from "vue";

const creatorRoute = useRoute()
let {query} = toRefs(creatorRoute)
````
````
  <div class="container">
  {{query.about}}
  </div>
````

# param接收
传递参数
````
<!-- 跳转并携带params参数(to的字符串写法)-->
<RouterLink :to="/news/detail/001/新闻881/内容881`">{{news.title}}</RouterLink>
<!-- 跳转并携带params参数(to的对象写法)-->
<RouterLink
:to="{
name:'xiang'，//用name跳转
params :{
id:news .id,
title:news.title,
content:news.title
{fnews.title}}
</RouterLink>
````
接收参数
````
import {useRoute}from 'vue-router
const route =useRoute()
// 打印params参数
console.log(route.params)
````
备注1:传递 params 参数时，若使用 to 的对象写法，必须使用 name 配置项，不能用 path。
备注2:传递 params 参数时，需要提前在规则中占位

# route的props属性
作用:让路由组件更方便的收到参数(可以将路由参数作为props传给组件)
````
name:'xiang ,
path:'detail/:id/:title/:content'，
component:Detail.
// props的对象写法，作用:把对象中的每一组key-value作为props传给Detail组件
// props:{a:1,b:2,c:3},
// props的布尔值写法，作用:把收到了每一组params参数，作为props传给Detail组件
// props:true
// props的函数写法，作用:把返回的对象中每一组key-value作为props传给Detai1组件
props(route){
return route.query
}
````