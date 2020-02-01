import Vue from 'vue'
import components from './lib'

for (const name in components) {
  Vue.component(name, {
    extends: components[name]
  })
}
