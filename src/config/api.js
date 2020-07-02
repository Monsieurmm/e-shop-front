import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://test-afpa-deploy.ew.r.appspot.com"
  });
};
