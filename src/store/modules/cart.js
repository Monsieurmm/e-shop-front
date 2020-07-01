const cart = {
  namespaced: true,

  state: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    charge: {}
  },

  mutations: {
    SET_CART: (state, payload) => {
      state.cart.push(payload);
    },
    SET_QUANTITY: (state, payload) => {
      let item = state.cart.find(product => {
        return product.id === payload.id;
      });
      item.qty = payload.qty;
    },
    SET_PRICE: (state, payload) => {
      let item = state.cart.find(product => {
        return product.id === payload.id;
      });
      item.subtotal = payload.subtotal;
    },
    SET_CHARGE: (state, payload) => {
      state.charge = payload;
    }
  },

  getters: {
    GET_CART: state => state.cart,
    GET_CHARGE: state => state.charge
  }
};

export default cart;
