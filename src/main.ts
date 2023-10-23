import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Tailwind from "primevue/passthrough/tailwind";
import "./style.css";
import App from "./App.vue";
import router from "./routes/router";

const app = createApp(App);
app.component("Panel", Panel);
app.component("Button", Button);
app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(router);
app.mount("#app");
