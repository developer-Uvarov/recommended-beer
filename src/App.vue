<template>
  <div class="app">
    <custom-header />
    <custom-loader v-if="isLoading" />
    <main v-else>
      <custom-card class="app__user-card">
        <template #title>
          <div class="app__user-avatar">
            <img
                alt="Аватар"
                v-lazy="{ src: user.avatar, error: errorAvatar }"
            />
          </div>
        </template>
        <template #body>
          <custom-list :list="userList"/>
        </template>
      </custom-card>
      <custom-card class="app__beer-card">
        <template #title>
          <h1 class="app__beer-title">Рекомендованное пиво</h1>
        </template>
        <template #body>
          <custom-list :list="beerList"/>
        </template>
        <template #footer>
          <custom-button @click="fetchBeer">Re-roll</custom-button>
        </template>
      </custom-card>
    </main>
  </div>
</template>

<script>
import axios from "axios"
import CustomCard from "@/components/CustomCard";
import CustomList from "@/components/CustomList";
import CustomLoader from "@/components/CustomLoader";
import CustomHeader from "@/components/CustomHeader";
import CustomButton from "@/components/CustomButton";

export default {
  components: {CustomButton, CustomHeader, CustomLoader, CustomList, CustomCard},
  data() {
    return {
      isLoading: true,
      user: {},
      beer: {},
    }
  },
  computed: {
    userList() {
      return [
        { title: 'Имя', value: this.fullName },
        { title: 'Возраст', value: this.currentAge },
        { title: 'Должность', value: this.user.employment.title },
      ]
    },
    beerList() {
      return [
        { title: 'Бренд', value: this.beer.brand },
        { title: 'Название', value: this.beer.name },
        { title: 'Тип', value: this.beer.style },
        { title: 'Крепость', value: this.beer.alcohol },
      ]
    },
    fullName() {
        return `${this.user.first_name} ${this.user.last_name}`
    },
    currentAge() {
      if (this.user.date_of_birth) {
        return Math.floor((new Date().getTime() - new Date(this.user.date_of_birth)) / (24 * 3600 * 365.25 * 1000))
      }
      return null
    },
    errorAvatar() {
      return require('@/assets/images/avatar.png')
    },
  },
  methods: {
    async fetchUser () {
      const response = await axios.get('https://random-data-api.com/api/users/random_user')
      this.user = response.data
    },
    async fetchBeer () {
      const response = await axios.get('https://random-data-api.com/api/beer/random_beer')
      this.beer = response.data
    }
  },
  async created() {
    await this.fetchUser()
    await this.fetchBeer()
    this.isLoading = false
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

* {
  box-sizing: border-box;
  font-family: "Roboto Light",sans-serif;
}

.app {
  background-color: $color_4;
  min-height: 100vh;
  height: 100%;

  &__user-card {
    border: 3px solid $color_1;
    margin-bottom: 10px;
  }

  &__user-avatar {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-bottom: 10px;
  }

  &__beer-card {
    border: 3px solid $color_5;
  }

  &__beer-title {
    margin-top: 0;
    margin-bottom: 5px;
  }
}
</style>
