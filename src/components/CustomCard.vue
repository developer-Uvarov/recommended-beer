<template>
  <div class="custom-card">
    <slot name="title"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CustomCard',
}
</script>

<style lang="scss" scoped>
.custom-card {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>
