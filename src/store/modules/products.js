import axios from "axios";
const products = {
  namespaced: true,

  state: {
    products: []
  },

  mutations: {
    SET_PRODUCTS: (state, product) => {
      state.products = product;
    },
    ADD_PRODUCT: (state, product) => {
      state.products.push(product);
    },
    EDIT_PRODUCT: (state, editedProduct) => {
      state.products.editedProduct = editedProduct;
    },
    REMOVE_PRODUCT: (state, id) => {
      const index = state.products.indexOf(product => product.id == id);
      state.products.splice(index, 1);
    }
  },

  actions: {
    GET_PRODUCTS: async ({ commit }) => {
      let response = await axios.get("http://localhost:3000/products");
      commit("SET_PRODUCTS", response.data);
    },
    CREATE_PRODUCT: async ({ commit }, product) => {
      let response = await axios.post(
        "http://localhost:3000/products",
        product
      );
      commit("ADD_PRODUCT", response.data);
    },
    UPDATE_PRODUCT: async ({ commit }, editedProduct) => {
      commit("EDIT_PRODUCT", editedProduct);
      await axios.put(
        `http://localhost:3000/products/${editedProduct.id}`,
        editedProduct
      );
    },
    DELETE_PRODUCT: async ({ commit }, id) => {
      let response = await axios.delete(`http://localhost:3000/products/${id}`);
      commit("REMOVE_PRODUCT", response.data);
    }
  },

  getters: {
    GET_PRODUCTS_BY_ID: state => id => {
      state.products.find(p => p.id === id);
    },
    GET_BEST_PRODUCTS: state => {
      if (state.products.rating >= 4) {
        return state.products;
      }
    }
  }
};

export default products;
