<template>
    <Card
      style="width: 20em; padding: 1em"
      class="animate__animated animate__fadeIn"
    >
      <template #header>
        <div class="setts-header">
          <span><b>Settings</b></span>
          <i
            class="pi pi-times"
            @click="toggleCloseSetts"
            style="
              font-size: 1.5em;
              position: absolute;
              right: 0;
              cursor: pointer;
            "
          ></i>
        </div>
      </template>
      <template #content>
        <div class="pick-box-wrapper">
          <div
            v-for="(item, index) in placesArr"
            :key="index"
            class="pick-box"
            draggable="true"
            @dragstart="handleDragStart(index, $event)"
            @dragover="handleDragOver($event)"
            @drop="handleDrop(index, $event)"
          >
            <i class="pi pi-bars" style="font-size: 1.2em; cursor: grab"></i>
            <p>{{ item[0].toUpperCase() + item.slice(1) }}</p>
            <i
              class="pi pi-trash"
              style="font-size: 1.2em; cursor: pointer"
              @click="removePlace(index)"
            ></i>
          </div>
        </div>
      </template>
      <template #footer>
        <span class="p-float-label p-input-icon-right">
          <InputText
            id="location"
            v-model="usertCity"
            @focus="updateLabel(true)"
            @blur="updateLabel(false)"
            @keyup.enter="handleEnterPressed"
          />
          <i v-if="showSpinner" class="pi pi-spin pi-spinner" />

          <label :for="inputId">{{ labelValue }}</label>
        </span>
      </template>
    </Card>
</template>

<script setup lang="ts">
import { Store } from "@/pinia/index";
import { onMounted, ref } from "vue";


const store = Store();
const emit = defineEmits();
const usertCity = ref<string>("");
const placesArr = ref(store.$state.placesArr);
const labelValue = ref<string>("Add your location:");
const inputId: string = "location";
const showSpinner = ref<boolean>(false);

const updateLabel = (isFocused: boolean) => {
  labelValue.value = isFocused ? "Press ENTER to add..." : "Add your location:";
};

const handleEnterPressed = async () => {
  const userCityValue = usertCity.value.trim();

  if (userCityValue === "") {
    labelValue.value = "Invalid input";
    document.getElementById("location")?.classList.add("p-invalid");
    return;
  }

  if (/\d/.test(userCityValue)) {
    labelValue.value = "Invalid input";
    document.getElementById("location")?.classList.add("p-invalid");
    return;
  }

  try {
    showSpinner.value = true;

    const apiUrl = `${store.$state.req}${userCityValue}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    });

    const data = await response.json();

    if (data.error) {
      labelValue.value = "no such place";
      document.getElementById("location")?.classList.add("p-invalid");
      return;
    }

    if (store.$state.placesArr.includes(userCityValue)) {
      labelValue.value = "already exists";
      document.getElementById("location")?.classList.add("p-invalid");
      return;
    }

    store.$state.placesArr.push(userCityValue);
    localStorage.setItem("places", store.$state.placesArr);
    usertCity.value = "";
  } catch {
    labelValue.value = "something went wrong =(";
    document.getElementById("location")?.classList.add("p-invalid");
  } finally {
    showSpinner.value = false;
  }
};

const toggleCloseSetts = () => {
  emit("toggleClose");
};

const removePlace = (index: number) => {
  store.$state.placesArr.splice(index, 1);
  localStorage.setItem("places", store.$state.placesArr.join(","));
};

const handleDragStart = (index: number, event: DragEvent) => {
  event.dataTransfer?.setData("text/plain", index.toString());
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const handleDrop = (index: number, event: DragEvent) => {
  const sourceIndex = event.dataTransfer?.getData("text/plain");
  if (sourceIndex !== undefined) {
    const idx = parseInt(sourceIndex);
    const sourcePlace = store.$state.placesArr[idx];
    store.$state.placesArr.splice(idx, 1);
    store.$state.placesArr.splice(index, 0, sourcePlace);
    emit("chanchePlace", store.$state.placesArr[0]);
  }
};
onMounted(() => {
  // localStorage.clear();
  let savedPlaces = localStorage.getItem("places");
  let savedPlacesArray = savedPlaces ? savedPlaces.split(",") : [];
  const newPlacesArr = [...new Set([...store.placesArr, ...savedPlacesArray])];
  store.$state.placesArr.splice(
    0,
    store.$state.placesArr.length,
    ...newPlacesArr
  );
});
</script>

<style scoped>

.setts-header {
  position: relative;
}
.pick-box-wrapper {
  display: grid;
  gap: 0.6em;
}
.pick-box {
  display: flex;
  height: 2.4em;
  width: 100%;
  gap: 0.3em;
  background-color: antiquewhite;
  padding: 0.5em;
  margin-bottom: 0.6em;
  align-items: center;
}
.pick-box .pi-trash {
  margin-left: auto;
}
</style>
