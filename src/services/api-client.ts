import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5734c2e39a714d1d8c18a0da2f097466",
  },
});
