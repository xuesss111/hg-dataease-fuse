// import CacpUI from "@cacp/ui"; // 111.9k (gzipped: 34.7k)
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn"; // 3.3k (gzipped: 1.7k)
import { createApp } from "vue"; // 572.4k (gzipped: 184.2k)

// import "@cacp/ui/dist/index.css"; // 后引入@cacp/ui样式
import "element-plus/dist/index.css"; // 先引入element plus样式
import "normalize.css/normalize.css";
// import "./assets/main.less";

import App from "./App.vue";
// import directives from "./directives";
// import plugins from "./plugins";
import router from "./router";
// import { pinia } from "./stores";
// import { addEventListener } from "./utils/frame";

const app = createApp(App);

app.use(router);
// app.use(plugins);
// app.use(directives);
// app.use(pinia);
// // 绑定message监听
// addEventListener();

app.use(ElementPlus, {
  locale: zhCn,
});
// app.use(CacpUI);

app.mount("#app");
