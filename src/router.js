import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import NewTransaction from "./views/NewTransaction.vue";
import Account from "./views/Account.vue";
import NewAccount from "./views/NewAccount.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";

import auth from "./auth.js";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/transaction",
      component: NewTransaction,
      name: "transaction",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/account/:AcId",
      component: Account,
      name: "account",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/account/new",
      component: NewAccount,
      name: "new-account",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    },
    {
      path: "/signup",
      component: Signup,
      name: "signup"
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (auth.user.authenticated) {
      next();
    } else {
      to = { name: "login" };
      next(to);
    }
  } else {
    next();
  }
});
export default router;
