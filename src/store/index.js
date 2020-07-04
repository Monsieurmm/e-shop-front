import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import sliders from "./modules/sliders";
import snackbar from "./modules/snackbar";
import users from "./modules/users";
import cart from "./modules/cart";
import window from "./modules/windowWidth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    sliders,
    snackbar,
    users,
    cart,
    window
  }
});
