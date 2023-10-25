import { createApp } from "vue";
// import "primeflex/primeflex.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Carousel from "primevue/carousel";
import Avatar from "primevue/avatar";
import Tailwind from "primevue/passthrough/tailwind";
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import "./style.css";
import App from "./App.vue";
import router from "./routes/router";

const app = createApp(App);
app.use(router);
app.component("Panel", Panel);
app.component("Button", Button);
app.component("Carousel", Carousel);
app.component("Avatar ", Avatar);
app.component("Divider ", Divider);
app.component("InputText ", InputText);
app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.mount("#app");
