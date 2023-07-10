const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title = '轻应用'
        return args
    })},

    devServer: {
      proxy: {
        '/dev': {
          target: 'http://localhost:4000',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/dev": "",
          },
        },
        '/song': {
          target: 'http://localhost:4000',
          ws: true,
          changeOrigin: true,
        },
      },
    }
})
