// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
import "./assets/css/reset.css";

Vue.config.productionTip = false;
import axios from "axios";

axios.interceptors.response.use(config => {
  console.log("----config----");
  console.log(config.data);
  return config;
});
Vue.prototype.$axios = axios;
import elements from './common/element'
import coms from './components/index'
for (var i in coms){
  Vue.component(i,coms[i])
}

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
