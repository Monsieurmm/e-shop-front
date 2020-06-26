import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import sliders from "./modules/sliders";
import snackbar from "./modules/snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },

  mutations: {
    addToCart(state, payload) {
      state.cart.push(Number(payload));
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity--;
    }
  },

  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
      commit("decrementProductInventory", payload);
    }
  },

  getters: {
    cartItems: state => {
      return state.cart.map(productId =>
        state.products.find(product => product.id === productId)
      );
    }
  },

  modules: {
    products,
    sliders,
    snackbar
  }
});
