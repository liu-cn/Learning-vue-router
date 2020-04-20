<template>
  <div class="User">
      <div>
        我是{{getuser()}}
      </div>
  </div>
</template>

<script>
export default {
  name:"User",
  methods: {
    getuser(){
      // 获取绑定的动态路由路径
      return this.$route.params.user
    },
  }
}
</script>

<style>

</style>