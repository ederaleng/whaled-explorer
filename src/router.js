import Vue from "vue";
import Router from "vue-router";

// components
import Home from "./views/components/home";
import Perfil from "./views/components/perfil";
import Transactions from "./views/components/transactions";
import Page404 from "./views/components/page404";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/:id",
      name: "perfil",
      component: Perfil
    },
    {
      path: "/trx/:id",
      name: "transactions",
      component: Transactions
    },
    {
      path: "*",
      name: "page-404",
      component: Page404
    }
  ]
});
