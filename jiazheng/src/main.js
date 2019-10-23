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
  if (config.data.code == -1) {
    router.replace("/login");
    return;
  }
  return config;
});
Vue.prototype.$axios = axios;
import elements from "./common/element";
import coms from "./components/index";
for (var i in coms) {
  Vue.component(i, coms[i]);
}
import filters from "./filter";
for (var i in filters) {
  Vue.filter(i, filters[i]);
}
import store from "./store";
import filter from "./filter";

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
    return;
  }
  if (to.path.includes("manage")) {
    if (sessionStorage.getItem("isAdmin") == 0) {
      next();
    } else {
      next("/login");
    }
    return;
  }
  if (
    to.path.includes("teacher") ||
    to.path.includes("banner") ||
    to.path.includes("water") ||
    to.path.includes("repair") ||
    to.path.includes("changepass") ||
    to.path.includes("housework")
  ) {
    if (sessionStorage.getItem("isAdmin") == 1) {
      next();
    } else {
      next("/login");
    }
    return;
  }
  next();
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
