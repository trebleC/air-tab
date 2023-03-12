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
          target: 'http://127.0.0.1:4523/m1/2424270-0-default',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/dev": "",
          },
        },
      }
    }
})
