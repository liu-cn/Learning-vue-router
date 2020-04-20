<template>
  <div>
    <p>我是app</p>
    
    <!-- 原生跳转路由方式,replace为不能后退模式,active-class为活跃路由添加的class -->
    <router-link replace class="btn1" tag="button" to='/home' active-class="active">home</router-link>
    <router-link replace class="btn1" tag="button" to='/about'>about</router-link>
    <router-link replace class="btn1" tag="button" :to='/user/+userid'>user</router-link>
    <!-- path后边query跟的是查询字符串， -->
    <!-- <router-link class="btn1" tag="button" :to='{path:"/profile",query:{name:"liu",age:18,gender:"男"}}'>profile</router-link> -->
    <router-link replace class="btn1" tag="button" :to='{path:"/profile",query:querylist}'>profile</router-link>

    <!-- 这个来显示组件内容，keep-alive保证组件不会被频繁销毁。 -->
    <keep-alive ><router-view/></keep-alive>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name:"App",
  data () {
    return {
      userid:"zhangsan",
      querylist:[
        {
        name:"刘先生",
        age:18,
        gender:"男"
      },{
        name:"李先生",
        age:19,
        gender:"男"
      }
      ]
    }
  },
  methods: {
    
    // 跳转到home，可以自己创建按钮或链接来跳转路由。
    BtnToHome(){
      this.$router.replace("/home")
    },
    // 跳转到about
    BtnToAbout(){
      this.$router.replace("/about")
    },
    BtnToLisi(){
      let nowpath=this.$route.path
      // substring(开始位置，结束位置)字符串截取函数
      if(nowpath.substring(nowpath.length-4,nowpath.length)!="lisi")
      this.$router.replace(this.$route.path+"/lisi")
    }
  }
}
</script>

<style>
.btn1{
  color: red;
  margin: 10px;
}
</style>