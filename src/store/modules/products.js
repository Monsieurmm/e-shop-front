import axios from "axios";
const products = {
  namespaced: true,

  state: {
    products: []
  },

  mutations: {
    SET_PRODUCTS: (state, product) => {
      state.products = product;
    }
  },

  actions: {
    GET_PRODUCTS: async ({ commit }) => {
      let response = await axios
          .get("http://localhost:3000/products")
      commit("SET_PRODUCTS", response.data)
    }
  },

  getters: {
    GET_PRODUCTS_BY_ID: (state) => (id) => {
      state.products.find(p => p.id === id)
    }
  }
};

export default products;
