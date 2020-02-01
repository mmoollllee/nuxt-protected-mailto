<template lang="html">
  <a
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
