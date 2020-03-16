import Vue from 'vue'
import App from './App.vue'
import router from './router';
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //配置路由器
}).$mount('#app')
