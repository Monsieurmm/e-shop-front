import axios from "axios";
import store from "../store";

export default () => {
  return axios.create({
    baseURL: "https://test-afpa-deploy.ew.r.appspot.com",
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  });
};
