import axios from "axios";
const users = {
  namespaced: true,

  state: {
    users: []
  },

  mutations: {
    SET_USERS: (state, user) => {
      state.users = user;
    }
  },

  actions: {
    GET_USERS: async ({ commit }) => {
      let response = await axios.get("http://localhost:3000/users");
      commit("SET_USERS", response.data);
    }
  }
};

export default users;
