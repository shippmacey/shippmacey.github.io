<script>
import { defineComponent } from "vue";
import { GoogleMap, InfoWindow } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, InfoWindow },
  setup() {
    const center = { lat: 52.180527, lng: 1.430846 };
    return { center };
  },
});
</script>

<template>
  <GoogleMap api-key="AIzaSyB3fxEHwOgrEGTttHpLnFmvPntU6LzfPnI" style="width: 100%; height: 500px" :center="center" :zoom="12">
    <InfoWindow :options="{ position: center }">
      <div id="content">
        <div id="siteNotice"></div>
        <h1 id="firstHeading" class="firstHeading">Glemham Hall</h1>
        <div id="bodyContent">
          <p>Glemham Hall, Little Glemham<br/>
          Woodbridge, Suffolk, IP13 0BT<br/>
          Tel. 07920 855041</p>
        </div>
      </div>
    </InfoWindow>
  </GoogleMap>
</template>