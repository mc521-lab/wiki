import "./assets/main.css";
import "./assets/default.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./modules/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

