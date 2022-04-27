<template>
  <div class="custom-loader">
    <div class="custom-loader__spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'CustomLoader'
}
</script>

<style lang="scss" scoped>
.custom-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;

  &__spinner {
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: custom-loader 1.2s linear infinite;
    }

    @keyframes custom-loader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}

</style>
