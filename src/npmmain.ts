import { createApp } from "vue";
import { createPinia } from "pinia";
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

export const mountWeatherModule = async (elementId: string) => {
  const targetDiv = document.getElementById(elementId);
  if (targetDiv) {
    await mountComponent(elementId);
  } else {
    await new Promise<void>((resolve) => {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            const addedNodes = Array.from(mutation.addedNodes);
            const isTargetDivAdded = addedNodes.some(
              (node) =>
                node.nodeType === Node.ELEMENT_NODE &&
                (node as HTMLElement).id === elementId
            );
            if (isTargetDivAdded) {
              observer.disconnect();
              resolve();
              break;
            }
          }
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });

    await mountComponent(elementId);
  }
};

const mountComponent = async (elementId: string) => {
  const app = createApp(WeatherModuleVue);
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

  await app.mount(`#${elementId}`);
};
