import axios from "axios";
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
      let response = await axios.get("http://localhost:3000/slides");
      commit("SET_SLIDERS", response.data);
    }
  }
};

export default sliders;
