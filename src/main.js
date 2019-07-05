import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./modules/store";
import BootstrapVue from "bootstrap-vue";

import "./assets/styles/init.scss";
import "@fortawesome/fontawesome-free/css/all.css";

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
