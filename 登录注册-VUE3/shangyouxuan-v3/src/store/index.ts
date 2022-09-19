import { createStore } from "vuex";
import detail from "./children/detail.js";
export default createStore({
  state: {
    BannerData: [{}],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { detail },
});
