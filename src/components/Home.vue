<template>
<div class="home">
  <h1 class="title">
    我是home
  </h1>
  
  <router-link class="homechd" to="/home/news">新闻</router-link>
  <router-link class="homechd" to="/home/message">消息</router-link>
  <keep-alive><router-view/></keep-alive>
</div>
</template>

<script>

// 导出组件
export default {
  name:"Home",
  data () {
    return {
      // 记录组件路径
      path:"/home/news"
    }
  },
  // activated()页面出现的时候执行
  activated () {
    console.log("home 处于活跃");
    // 首次创建先重定向到/home/news，重新回到该页面还能记录并回到上次浏览的页面。
    if (this.path=="/home") {
      this.$router.push(this.path)
    }else if(this.path==this.$route.path){
      return
    }else{
      this.$router.push(this.path)
    }
  },
  // 页面失去活跃的时候执行
  deactivated () {
    console.log("home 失去活跃");
  },
  // 导航离开该组件的对应路由时调用
  beforeRouteLeave (to, from, next) { 
    // 可以访问组件实例 `this`
    // 离开之前先记录此次离开时的路径并赋值给path，
    this.path=this.$route.path
    // 调用next后才会执行下一步操作。
    next()
  },
  // 在home页面中，消息和新闻之间切换时会调用。
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.path=this.$route.path
    console.log("home 组件的路径被修改。");
    next()
  },
  // 监测路由，watch函数可检测数据的变化。
  watch: {
    "$route"(to,from){
      // console.log("to=",to.path)
      // console.log("from=",from.path);
      // 如果要跳到/home,则回到上次记录的位置。
      if(to.path=="/home"){
        this.$router.push(this.path)
      }
    }
  }
}
</script>


<style>

.home .title{
    color: red;
}
.home .homechd{
  margin: 10px;
}

</style>