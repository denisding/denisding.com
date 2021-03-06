import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css/normalize.css";
import "@/assets/css/base.scss";

createApp(App).use(router).mount("#app");
