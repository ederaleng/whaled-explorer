import Vue from "vue";
import Router from "vue-router";

// components
import Home from "./components/home"
import Perfil from "./components/perfil"
import Transactions from "./components/transactions"
import Page404 from "./components/page404"

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
