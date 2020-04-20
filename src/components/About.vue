<template>
<div class="about">
  <h1 class="title">
    我是About
  </h1>
  <p>{{test}}</p>
  <button @click="test++">+</button>
</div>
  
</template>

<script>
// 导出组件
export default {
  name:"About",
  data () {
    return {
      test:10
    }
  },
  // 如果路由后嵌套有路由，则生命周期函数不会被执行，/about/lisi,不会执行/about的生命周期函数

  // 生命周期函数，回调函数,
  //组件被创建之前调用，beforeCreate() 调用时组件中的data和methods都还没有初始化。
  beforeCreate () {
    console.log("about组件即将被创建，");
  },
  // 组件被创建时调用，暂存在内存中，还没挂载到页面上。
  created () {
    console.log("about组件被创建！");  
  },
  // 组件挂载到页面之前调用。
  beforeMount(){
    console.log("about组建已准备就绪，准备挂载到页面。");
  },
  // 此时组件正式被挂载到页面上，调用。mounted 是 实例创建期间的最后一个生命周期函数
  mounted(){
    console.log("about组件正式被挂载到页面上");
  },
  // 组件内数据被更新时调用，但是页面还没有被刷新。
  beforeUpdate(){
    console.log("about组件数据即将被更新！");
  },
  // 此时组件内的数据和页面显示的数据已经同步了，页面已经被更新。
  updated(){
    console.log("about组件数据已经被更新！"); 
  },
  // 组件销毁之前执行，当beforeDestroy函数执行时，，组件实例身上所有的方法与数据都处于可用状态
  beforeDestroy(){
    console.log("about组件即将被销毁！");
    
  },
    // 组件被销毁时调用，此时组件实例上的数据和方法都不可用。
  destroyed () {
    console.log("about组件已被销毁！");
  },
  /*activated()页面出现的时候执行 activated生命周期函数，跟 监听 watch 有类似的作用。
activated生命周期函数，是配合 keep-alive 进行使用。
进入页面时，mounted 与 activated 生命周期函数都会执行，当前 keep-alive 时，进行了缓存，
这时返回上一页 ，mounted生命周期函数不会执行，而 activated 会执行。
*/
  activated () {
    console.log("about组件处于活跃状态");
  },
  // 失去活跃状态时调用，需要配合keep-alive使用，
  deactivated () {
    console.log("about失去活跃状态");
  }
}
</script>

<style>
.about .title{
    color: orange;
}
</style>