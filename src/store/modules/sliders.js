import api from "../../config/api";
const sliders = {
  namespaced: true,

  state: {
    sliders: []
  },

  mutations: {
    SET_SLIDERS: (state, slider) => {
      state.sliders = slider;
    }
  },

  actions: {
    GET_SLIDERS: async ({ commit }) => {
      let response = await api().get("/slides");
      commit("SET_SLIDERS", response.data);
    }
  }
};

export default sliders;
