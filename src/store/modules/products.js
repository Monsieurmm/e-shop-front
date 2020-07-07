import api from "../../config/api";
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
    EDIT_PRODUCT: (state, item) => {
      state.products.item = item;
    },
    REMOVE_PRODUCT: (state, id) => {
      const index = state.products.map(products => products._id).indexOf(id);
      state.products.splice(index, 1);
    }
  },

  actions: {
    GET_ALL_PRODUCTS: async ({ commit }) => {
      await api()
        .get(`/products/all`)
        .then(response => {
          const agencies = response.data;
          commit("SET_PRODUCTS", agencies);
        })
        .catch(error => {
          throw error;
        });
    },
    CREATE_PRODUCT: async ({ commit }, product) => {
      let response = await api().post("/products", product);
      commit("ADD_PRODUCT", response.data);
    },
    UPDATE_PRODUCT: async ({ commit }, item) => {
      const response = await api().put(`/products/${item._id}`, item);
      commit("EDIT_PRODUCT", response.data);
    },
    DELETE_PRODUCT: async ({ commit }, id) => {
      let response = await api().delete(`/products/${id}`);
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
