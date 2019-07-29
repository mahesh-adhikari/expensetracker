import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./views/signup.vue")
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/daily",
      name: "daily",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/daily.vue")
    },
    {
      path: "/newdaily",
      name: "newdaily",
      component: () => import("./views/newdaily.vue")
    },
    {
      path: "/monthly",
      name: "monthly",
      component: () => import("./views/monthly.vue")
    },
    {
      path: "/yearly",
      name: "yearly",
      component: () => import("./views/yearly.vue")
    },
    {
      path: "/stats",
      name: "stats",
      component: () => import("./views/stats.vue")
    }
  ]
});
