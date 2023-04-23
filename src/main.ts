import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
const pinia = createPinia();
pinia.use(createPersistedState());
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount("#app");
