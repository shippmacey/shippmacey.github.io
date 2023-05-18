<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      return current.getFullYear();
    }
  }
}
</script>

<template>
    <footer>
      <small>Made with <i class="em em-heart" aria-role="presentation" aria-label="HEART"></i> - © {{ currentDate() }} Shipp-Macey Wedding. All Rights Reserved.</small>
    </footer>
</template>

<style>
    footer {
        border-top: solid 1px var(--vt-c-grey-half);
        padding-top: 20px;
        text-transform: uppercase;
        font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 0.7rem;
        text-align: center;
        margin: 20px;
    }
</style>