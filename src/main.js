import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./modules/store";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// eslint-disable-next-line
// import $ from "jquery";
// import "bootstrap";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
