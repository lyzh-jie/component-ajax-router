import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
// 声明使用vue插件
Vue.use(VueResource);
//内部给vm或者所有的组件对象添加了一个能发送ajax请求的属性：$http.get()/post()
new Vue({
  render: h => h(App),
}).$mount('#app')
