import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://afpa-shop-api.nw.r.appspot.com"
  });
};
