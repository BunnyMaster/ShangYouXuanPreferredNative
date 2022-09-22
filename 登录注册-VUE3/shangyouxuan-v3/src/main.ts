import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store).use(router);
//混合less和默认样式
import "./styles/reset.css";
import "./assets/mixins/clear.less";
//MOCKJS
import "@/MockJS/MockJSServe.js";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);
app.mount("#app");
