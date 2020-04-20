// 导入vue
import Vue from 'vue'
// 导入App组件
import App from './App.vue'
// 导入路由
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  // 添加路由
  router,

  // 此函数最终会找到index.html文件中的id为app的div用App组件对此进行替换
  render: h => h(App)
}).$mount('#app')


