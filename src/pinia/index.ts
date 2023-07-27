import { defineStore } from "pinia";

export const Store = defineStore("pinia", {
  state: () => ({
    placesArr:[] as any,
    req:'http://api.weatherapi.com/v1/forecast.json?key=37d63f8db6f547a8a92100230231402&q=' 
  }),
  actions: {},
});
