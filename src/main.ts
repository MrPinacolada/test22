import "./registerServiceWorker";

import { createApp } from "vue";
import { createPinia } from "pinia";
import WeatherModule from "./WeatherModule.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import ProgressSpinner from "primevue/progressspinner";
import InputText from "primevue/inputtext";
import SettingsModule from "@/components/SettingsModule.vue";
import WeatherModuleVue from "./WeatherModule.vue";

import "animate.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(WeatherModule);

app.use(PrimeVue, {
  ripple: true,
  inputStyle: "filled",
  zIndex: {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100,
  },
});
app.use(createPinia());

app.component("Button", Button);
app.component("Card", Card);
app.component("ProgressSpinner", ProgressSpinner);
app.component("InputText", InputText);
app.component("SettingsModule", SettingsModule);
app.component("WeatherModuleVue", WeatherModuleVue);

app.mount("#weathertest22");
export default app;
