<template>
<ul class="custom-list">
  <li
      v-for="item in list"
      :key="item.title"
      class="custom-list__item"
  >
    <div class="custom-list__title">
      {{ item.title }}:
    </div>
    <div class="custom-list__value">
      {{ item.value }}
    </div>
  </li>
</ul>
</template>

<script>
export default {
  name: 'CustomList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-list {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding-left: 0;
  margin: 0;

  &__item {
    display: flex;
    align-items: flex-start;
  }

  &__title {
    margin-right: 5px;
  }
}
</style>
