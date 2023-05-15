<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="grey">{{ msg }}</h1>
    <span class="grey tagline">9th August 2023 - 2:30pm</span>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  text-align: center;
}

span {
  margin: 0 auto;
  text-align: center;
  display: block;
  position: relative;
  top: -50px;
  font-size: 2em;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: center;
    font-size: 12vw;
  }

  .greetings h1:hover {
    color: var(--vt-c-pink);
  }
}

@media (max-width: 1024px) {
  .greetings h1 {
    font-size: 11vw;
  }
}

@media (max-width: 1800px) and (min-width: 1024px) {
  .greetings h1 {
    font-size: 8vw;
  }
}

@media (min-width: 1800px) {
  .greetings h1 {
    font-size: 12rem;
  }
}

</style>
