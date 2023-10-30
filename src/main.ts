import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Carousel from "primevue/carousel";
import Avatar from "primevue/avatar";
import Tailwind from "primevue/passthrough/tailwind";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import "primeicons/primeicons.css";
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
app.component("Dialog ", Dialog);

app.use(PrimeVue, {
  ripple: true,
  unstyled: true,
  pt: Tailwind,
 
});
app.mount("#app");
