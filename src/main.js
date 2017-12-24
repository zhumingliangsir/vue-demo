import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App.vue'
import routerConfig from './router.config.js'
Vue.use(VueRouter);
Vue.use(vueResource)
const router=new VueRouter(routerConfig);

new Vue({
  router:router,
  el: '#app',
  render: h => h(App)
})
