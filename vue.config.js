const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/_variables.scss";'
      }
    }
  }
})
