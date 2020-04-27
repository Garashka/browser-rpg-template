/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Index"),
    children: [
      {
        name: "Login",
        path: "login",
        component: () => import("@/views/user/Login")
      },
      {
        name: "Profile",
        path: "profile",
        component: () => import("@/views/user/Profile")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const publicRoutes = ["/", "/login", "/register"];
  const doesNeedAuth = !publicRoutes.includes(to.path);

  const isLoggedIn = store.state.authentication.status.loggedIn;

  if (doesNeedAuth && !isLoggedIn) {
    console.log(`Invalid request for ${to.path} - redirect to login page`);
    next("/login");
  } else {
    next();
  }
});

export default router;
