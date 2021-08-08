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
      default: undefined
    },
    body: {
      type: String,
      default: undefined
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

      function queryParameters(subject, body) {
        const params = []
        subject = subject !== undefined ? `subject=${encodeURIComponent(subject)}` : null
        body = body !== undefined ? `body=${encodeURIComponent(body)}` : null

        if (subject) params.push(subject)
        if (body) params.push(body)

        if (params.length > 0) {
          return `?${params.join('&')}`
        }
        else {
          return ''
        }
      }

      let href = ['mailto:', this.mail, queryParameters(this.subject, this.body)]
      window.location.href = href.join('')
    }
  }
}
</script>
