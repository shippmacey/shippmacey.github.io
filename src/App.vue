<script setup>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import Map from './components/Map.vue'
</script>

<template>



  <header>
    <Hero msg="Danielle & Paul"/>
  </header>

  <Navigation />

  <main>
    <Map />
  </main>



  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
