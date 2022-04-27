<template>
  <button class="custom-button" :="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton'
}
</script>

<style lang="scss" scoped>
.custom-button {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: $color_2;
  color: #2B9475;
  border: 2px solid $color_1;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: $color_1;
    color: $color_2;
    border: 2px solid $color_2;
    transition: 0.2s ease;
  }
}
</style>
