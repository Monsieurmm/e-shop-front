import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../components/Products.vue")
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    props: true,
    component: () => import("../components/ProductDetails.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart.vue")
  },
  {
    path: "/login",
    name: "LoginForm",
    component: () => import("../components/LoginForm.vue")
  },
  {
    path: "/register",
    name: "RegisterForm",
    component: () => import("../components/RegisterForm.vue")
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
