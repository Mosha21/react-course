import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID fTe_IrmUzglDDkKqgabJSO4_N65eWGDEfjNsI5RPBM4`,
  },
});
