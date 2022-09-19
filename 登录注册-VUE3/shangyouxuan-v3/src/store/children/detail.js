import { reqIpmData } from "@/api/MockAPI.js";
let detail = {
  state: {
    PathDataList: [{}],
    ImagessrcList: [{}],
    GoodsDetailList: [{}],
  },
  getters: {},
  mutations: {
    GETPATH(state, data) {
      state.PathDataList = data.path;
      state.ImagessrcList = data.imagessrc;
      state.GoodsDetailList = data.goodsDetail;
    },
  },
  actions: {
    //路径
    async GetAll({ commit }) {
      const result = await reqIpmData();
      result["code"] === 200
        ? commit("GETPATH", result.data)
        : Promise.reject(new Error(`错误总数据获取失败`));
      console.log(result);
    },
  },
};
export default detail;
