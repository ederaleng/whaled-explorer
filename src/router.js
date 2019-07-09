import Vue from "vue";
import Router from "vue-router";

// components
import Home from "./views/components/home";
import Perfil from "./views/components/perfil";
import Transactions from "./views/components/transactions";
import Page404 from "./views/components/page404";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/witnesses",
      name: "Witnesses",
      component: Home
    },
    {
      path: "/:id",
      name: "Perfil",
      component: Perfil
    },
    {
      path: "/trx/:id",
      name: "Transactions",
      component: Transactions
    },
    {
      path: "*",
      name: "Page-404",
      component: Page404
    }
  ]
});
