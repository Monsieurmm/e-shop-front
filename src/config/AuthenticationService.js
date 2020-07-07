import api from "../config/api";

export default {
  register(credentials) {
    return api().post("users/register", credentials);
  },
  login(credentials) {
    return api().post("users/login", credentials);
  }
};
