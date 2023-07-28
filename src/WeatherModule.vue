<template>
  <div v-if="loader || trowError" style="width: 20em; padding: 1em">
    <ProgressSpinner
      style="display: grid; align-items: center; justify-items: center"
    />
  </div>
  <div class="major-box" v-else v-if="!showSettings">
    <Card
      style="width: 20em; padding: 1em"
      class="animate__animated animate__fadeIn"
    >
      <template #header>
        <div class="title-header">
          <span
            ><b>{{ title }}</b>
          </span>
          <i
            class="pi pi-cog"
            @click="toggleOpenSetts()"
            style="
              font-size: 1.5em;
              position: absolute;
              right: 0;
              cursor: pointer;
            "
          ></i>
        </div>

        <section class="currentT_box">
          <img
            style="height: 8em; width: 8em"
            :src="currentCondition?.currentIMG"
            alt="weatherIMG"
          />
          <span
            ><b>{{ currentCondition?.currentTempC }} °C</b></span
          >
        </section>
      </template>
      <template #subtitle>
        <p>
          <b>Today is {{ moment_today }}</b>
        </p>
        <p>
          Feels like
          {{
            `${currentCondition?.feelsLikeC ?? "N/A"} °C. ${
              currentCondition?.conditionText ?? "N/A"
            }`
          }}
        </p>
      </template>
      <template #content>
        <section class="currentWind_box">
          <div class="dir">
            <i
              style="font-size: 1em; color: rgb(173, 173, 173)"
              class="pi pi-compass"
            ></i>
            <span>
              {{
                `${currentCondition?.currentWind} m/s ${currentCondition?.currentWind_dir}`
              }}
            </span>
          </div>
          <div class="ph">
            <i
              style="font-size: 1em; color: rgb(173, 173, 173)"
              class="pi pi-exclamation-circle"
            ></i>
            <span>{{ `${currentCondition?.current_hPa} hPa` }}</span>
          </div>
        </section>
        <section class="rest_currentInfo">
          <span
            ><b>Humidity: </b
            >{{ `${currentCondition?.current_humidity ?? "N/A"}%` }}</span
          >
          <span
            ><b>Visibility: </b
            >{{ `${currentCondition?.current_vis ?? "N/A"} km` }}</span
          >
        </section>
      </template>
    </Card>
  </div>
  <div class="setts-box">
    <SettingsModule
      @chanchePlace="fetchWeatherData(0, 0, $event)"
      @toggleClose="toggleOpenSetts()"
      v-if="showSettings"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import moment from "moment";
import { Store } from "@/pinia/index";

const store = Store();

const title = ref<string>("London, UK");
const showSettings = ref<boolean>(false);
const trowError = ref<boolean>(false);
const moment_today = ref<string | null>(null);
const loader = ref<boolean>(true);

interface condition {
  currentIMG: string | undefined;
  currentTempC: number | undefined;
  currentWind: any;
  currentWind_dir: string | undefined;
  current_hPa: any;
  current_humidity: number | undefined;
  current_vis: number | undefined;
  feelsLikeC: number | undefined;
  conditionText: string | undefined;
}
const currentCondition = ref<condition>();

const fetchWeatherData = async (
  latitude: number,
  longitude: number,
  place: string | null
) => {
  try {
    let savedPlaces = localStorage.getItem("places");
    let savedPlacesArray = savedPlaces ? savedPlaces.split(",") : [];
    let params = place
      ? place
      : savedPlacesArray[0]
      ? savedPlacesArray[0]
      : latitude + "," + longitude;
    const response = await fetch(`${store.$state.req}${params}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    });
    const data = await response.json();

    if (data.error) {
      trowError.value = true;
    } else {
      title.value = `${data.location.name}, ${data.location.country}`;
      if (!place && !store.$state.placesArr.includes(data.location.name)) {
        store.$state.placesArr.push(data.location.name);
      }
      const currentWindKph = data.current.wind_kph;
      currentCondition.value = {
        currentIMG: data.current.condition.icon,
        currentTempC: data.current.temp_c,
        feelsLikeC: data.current.feelslike_c,
        conditionText: data.current.condition.text,
        currentWind:
          currentWindKph !== undefined
            ? Math.round((currentWindKph * 1000) / 3600)
            : "N/A",
        currentWind_dir: data.current.wind_dir,
        current_hPa: data.current.pressure_in
          ? Math.round(data.current.pressure_in * 33.8639)
          : "N/A",
        current_humidity: data.current.humidity,
        current_vis: data.current.vis_km,
      };
      trowError.value = false;
      if (data) {
        setTimeout(() => {
          loader.value = false;
        }, 1000);
      }
    }
  } catch (error) {
    trowError.value = true;
  }
};

const successCallback = async (position: any) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  await fetchWeatherData(latitude, longitude, null);
};

const errorCallback = async () => {
  await fetchWeatherData(51.5072, 0.1276, null);
};

const toggleOpenSetts = () => {
  showSettings.value = !showSettings.value;
};

onMounted(() => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  moment_today.value = moment().format("dddd");
});
</script>

<style scoped>
.currentT_box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.currentT_box > span {
  font-size: 2.5em;
}
.currentWind_box {
  display: flex;
  align-items: center;
  gap: 1.5em;
}
.title-header {
  position: relative;
}
.dir,
.ph {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.rest_currentInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1.5em;
}
</style>
