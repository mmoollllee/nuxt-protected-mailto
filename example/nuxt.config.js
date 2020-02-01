const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  mode: 'universal',
  render: {
    resourceHints: false
  },
  modules: [
    '@@'
  ],
  generate: {
    dir: '../dist'
  },
  build: {
    html: {
      minify: {
        decodeEntities: false
      }
    }
  }
}
