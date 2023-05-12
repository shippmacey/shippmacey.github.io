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
      <small>© {{ currentDate() }} Shipp-Macey Wedding. All Rights Reserved.</small>
    </footer>
</template>