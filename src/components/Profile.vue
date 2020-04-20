<template>
  <div class="profile">
      <h1>我是profile</h1>
      <!-- this.$route.query中带有参数，可以直接取出 -->
      <!-- this.$route代表活跃路由，即为当前路由，query是跳转到活跃路由时携带的参数 -->
      <p>{{this.$route.query}}</p>
      <div v-for="(item,key) of this.$route.query" :key="key">
        <div>{{key}}:{{item}}</div>
        <div v-for="inneritem of item" :key="inneritem.age">{{inneritem.name}} --{{inneritem.age}} --{{inneritem.gender}}</div>
      </div>
      
  </div>
</template>

<script>
export default {
  name:"Profile"
}
</script>

<style>
</style>