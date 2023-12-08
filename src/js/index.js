import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "../components/app.vue";
import routes from "./routes.js";
import "../styles/main.scss";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

const app = createApp(App);
app.use(router);
app.mount("#app-container");
