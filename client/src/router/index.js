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
      },
      {
        name: "Register",
        path: "register",
        component: () => import("@/views/user/Login"),
        props: { defaultRegister: true }
      },
      {
        name: "Game",
        path: "/game",
        component: () => import("@/views/Game")
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

  const isAuthenticated = store.getters["auth/isAuthenticated"];

  if (doesNeedAuth && !isAuthenticated) {
    console.log(`Unauthorised request for ${to.path} - redirect to login page`);
    next("/login");
  } else if (!doesNeedAuth && isAuthenticated) {
    console.log(
      `Attempt to access public path from authenticated user - redirect to game home page`
    );
    next("/game");
  } else {
    next();
  }
});

export default router;
