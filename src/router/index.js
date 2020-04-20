// 导入vue
import Vue from "vue"
// 导入路由
import VueRouter from "vue-router"

// 导入Home组件，非懒加载模式
// import Home from "../components/Home.vue"

// 导入About组件
// import About from "../components/About.vue"

// 导入User组件
// import User from "../components/User.vue"

// 路由的懒加载方式,用到组件时再加载组件，懒加载模式打包后的js文件更小，加载的更快。
const Home =()=> import("../components/Home.vue")
const About =()=> import("../components/About.vue")
const User =()=> import("../components/User.vue")
const HomeNews =()=> import("../components/HomeNews.vue")
const HomeMessage =()=> import("../components/HomeMessage.vue")
const Profile =()=> import("../components/Profile.vue")
// 安装路由插件(只要是插件多必须要安装)
Vue.use(VueRouter)

// 创建路由映射表
const routes=[
  {
    // 路由重定向，
     path: '', redirect: "/home"
  },
  { 
    path: '/home', component: Home,
    // 添加元数据
    meta: {title:"首页" },
    // home路由后的子路由，嵌套路由
    children:[
      // 子组件也可以重定向，不过这个被生命周期函数给抢饭碗了。
      // {
      //   path:"/", redirect: "news"
      // },
      {
        path: 'news', component: HomeNews
      },
      {
         path: 'message', component: HomeMessage
      }
    ]
  },
  {
     path: '/about', component: About,
     meta: {title:"关于" },

     //  私有导航守卫,独享守卫，只有到跳转到这个页面才执行此函数。
     beforeEnter:(to,from,next)=>{
       console.log("欢迎来到关于页面,独享守卫")
       next()
     }
  },
  // home后边绑定一个动态路径，
  {
     path: '/home/:user', component: User
  },
  {
     path: '/about/:user', component: User 
  },
  {
     path: '/user/:user', component: User,
     meta: {title:"用户" },
  },
  {
   path: '/profile', component: Profile,
   meta: {title:"我的"},
  }
]

// 创建路由对象
const router=new VueRouter({

  // 把路由映射表添加到路由对象
  routes,

  // 路由切换模式为history
  mode:"history"
})

// 全局导航守卫(前置钩子)，监听路由跳转。to跳转到哪里，from来自哪里，
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  //to和from是Route对象，必须调用next（）来解析hook
  
  //   // 必须调用next方法。
    next()
    // matched[0]为路由嵌套最前边的路由http://localhost:8080/home/news 即home路由。
    document.title=to.matched[0].meta.title
    console.log("from=",from.path);
    console.log("to=",to.path);
})

// 导出路由对象
export default router