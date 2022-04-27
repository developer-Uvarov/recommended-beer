<template>
  <header class="header">
    <h1 class="header__title">Beerfinder</h1>
  </header>
</template>

<script>
export default {
  name: "CustomHeader"
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  background-color: $color_5;
  margin-bottom: 25px;

  &__title {
    letter-spacing: 1px;
  }
}
</style>
