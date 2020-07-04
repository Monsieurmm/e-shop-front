import api from "../../config/api";
import axios from "axios";
import router from "../../router";
const users = {
  namespaced: true,

  state: {
    token: localStorage.getItem("token") || "",
    user: {},
    status: "",
    error: null
  },

  mutations: {
    USER_PROFILE(state, user) {
      state.user = user;
    },
    REGISTER_REQUEST(state) {
      state.error = null;
      state.status = "loading";
    },
    REGISTER_SUCCESS(state) {
      state.error = null;
      state.status = "success";
    },
    REGISTER_ERROR(state, err) {
      state.error = err.response.data.msg;
    },
    AUTH_REQUEST(state) {
      state.error = null;
      state.status = "loading";
    },
    AUTH_SUCCESS(state, token, user) {
      state.token = token;
      state.user = user;
      state.status = "success";
      state.error = null;
    },
    AUTH_ERROR(state, err) {
      state.error = err.response.data.msg;
    },
    LOGOUT(state) {
      state.error = null;
      state.status = "";
      state.token = "";
      state.user = "";
    },
    PROFILE_REQUEST(state) {
      state.status = "loading";
    }
  },

  actions: {
    LOGIN: async ({ commit }, user) => {
      commit("AUTH_REQUEST");
        await api()
            .post("/users/login", user)
            .then(response => {
              if (response.data.success) {
                const token = response.data.token;
                const user = response.data.user;
                localStorage.setItem("token", token);
                axios.defaults.headers.common["Authorization"] = token;
                commit("AUTH_SUCCESS", token, user);
              }
            }).catch ((err) => {
        commit("AUTH_ERROR", err);
      })
    },
    REGISTER: async ({ commit }, user) => {
      try {
        commit("REGISTER_REQUEST");
        let res = await api().post(
          `/users/register`,
            user
        );
        if (res.data.success !== undefined) {
          commit("REGISTER_SUCCESS");
        }
        return res;
      } catch (err) {
        commit("REGISTER_ERROR", err);
      }
    },
    GET_PROFILE: async ({ commit }) => {
      commit("PROFILE_REQUEST");
      let res = await axios.get(`http://localhost:3000/users/profile`);
      commit("USER_PROFILE", res.data.user);
      return res;
    },
    LOGOUT: async ({ commit }) => {
      await localStorage.removeItem("token");
      commit("LOGOUT");
      delete api.defaults.headers.common["Authorization"];
      router.push("/login");
      return;
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
  }
};

export default users;
