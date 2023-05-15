<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 52.180527, lng: 1.430846 };
    const markerOptions = { position: center, title: "Glemham Hall" };

    return { center, markerOptions };
  },
});
</script>

<template>
  <!-- <GoogleMap api-key="AIzaSyB3fxEHwOgrEGTttHpLnFmvPntU6LzfPnI" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap> -->
  <GoogleMap api-key="AIzaSyB3fxEHwOgrEGTttHpLnFmvPntU6LzfPnI" style="width: 100%; height: 500px" :center="center" :zoom="12">
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>