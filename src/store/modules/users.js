import axios from "axios";
import router from "../../router";
const users = {
  namespaced: true,

  state: {
    token: localStorage.getItem("token") || "",
    users: [],
    user: {},
    status: "",
    error: null
  },

  mutations: {
    SET_USERS: (state, user) => {
      state.users = user;
    },
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
    GET_USERS: async ({ commit }) => {
      let response = await axios.get("http://localhost:3000/users");
      commit("SET_USERS", response.data);
    },
    LOGIN: async ({ commit }, user) => {
      commit("AUTH_REQUEST");
      try {
        let res = await axios.post("http://localhost:3000/users/login", user);
        if (res.data.success) {
          const token = res.data.token;
          const user = res.data.user;
          localStorage.setItem("token", token);
          process.env.API_URL.defaults.headers.common["Authorization"] = token;
          commit("AUTH_SUCCESS", token, user);
        }
        return res;
      } catch (err) {
        commit("AUTH_ERROR", err);
      }
    },
    REGISTER: async ({ commit }, userData) => {
      try {
        commit("REGISTER_REQUEST");
        let res = await axios.post(
          "http://localhost:3000/users/register",
          userData
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
      commit("REGISTER_REQUEST");
      let res = await axios.get("http://localhost:3000/users/profile");
      commit("USER_PROFILE", res.data.user);
      return res;
    },
    LOGOUT: async ({ commit }) => {
      await localStorage.removeItem("token");
      commit("LOGOUT");
      delete axios.defaults.headers.common["Authorization"];
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
