import store from './store'
import router from "./router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Vue from 'vue';
import Element from 'element-ui';
import axios from "axios";
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
