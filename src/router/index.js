import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../components/Products.vue")
  },
  {
    path: "/products/:id",
    name: "product",
    props: true,
    component: () => import("../components/Product.vue")
  },
  {
    path: "/categories/:category",
    name: "category",
    props: true,
    component: () => import("../components/Category.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/Checkout.vue")
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: () => import("../components/Thankyou.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginForm.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/RegisterForm.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../components/Dashboard.vue")
  }
  /*,
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/About.vue")
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
