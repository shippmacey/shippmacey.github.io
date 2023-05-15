<script setup>
import Navigation from './components/Navigation.vue'
import Content from './components/Content.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <header>
    <Hero msg="Danielle & Paul"/>
  </header>

  <Navigation />

  <main>

    <Content />

  </main>

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-top: 20px;
}

@media (min-width: 1024px) {

}
</style>
