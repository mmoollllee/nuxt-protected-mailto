<template lang="html">
  <a
    :title="title"
    @click="mailtoHandler"
    href="#"
  >
    <slot><span v-html="encoded"></span></slot>
  </a>
</template>

<script>

export default {
  props: {
    mail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'this.pluginOptions.title'
    },
    subject: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
  },
  computed: {
    pluginOptions() {
      // _customMailtoOptions will be added as a prop on component registration.
      // it will be the plugin's options object
      return this._customMailtoOptions || {}
    },
    // helper to get the name of our injected plugin using the namespace option
    injectedPluginName() {
      const { pluginOptions } = this
      return pluginOptions.namespace ? '$' + pluginOptions.namespace : undefined
    },
    encoded() {
      const buf = []
      for (let i = this.mail.length - 1; i >= 0; i--) {
        buf.unshift(['&#', this.mail.charCodeAt(i), ';'].join(''))
      }
      return buf.join('')
    }
  },
  methods: {
    mailtoHandler(e) {
      e.preventDefault()
      window.location.href =
        'mailto:' +
        this.mail +
        '?subject=' +
        encodeURIComponent(this.subject) +
        '&body=' +
        encodeURIComponent(this.body)
    }
  }
}
</script>
