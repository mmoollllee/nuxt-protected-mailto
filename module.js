// module.js
const { resolve, join } = require('path')
const { readdirSync } = require('fs')

const defaults = {
  title: ''
}

export default function(moduleOptions) {

  // get all options for the module
  const options = {
    ...defaults,
    ...moduleOptions,
    ...this.options.mailto
  }

  // expose the namespace / set a default
  if (!options.namespace) options.namespace = 'mailto'
  const { namespace } = options

  // add all of the initial plugins
  const pluginsToSync = [
    'components/index.js'
  ]
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }
  
  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['components/lib']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options
      })
    }
  }
}
module.exports.meta = require('./package.json')
