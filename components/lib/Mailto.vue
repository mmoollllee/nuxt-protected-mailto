<template lang="html">
  <a
    @click="mailtoHandler"
    href="#"
  >
    <slot><span v-html="encoded"></span></slot>
  </a>
</template>

<script>
import isEmail from 'is-email'

function formatMail(mail, asArray = false, pretty = true) {
  if (typeof mail === 'string') {
    if (mail.endsWith(',')) mail = mail.substring(0, mail.length - 1)
    mail = mail.split(',')
  }
  mail = mail.map(email => {
    return email.trim()
  })
  if(asArray) return mail
  else return pretty ? mail.join(', ') : mail.join(',')
}

export default {
  props: {
    mail: {
      type: [String, Array],
      required: true,
      validator: (value) => {
        let isValid = true
        value = formatMail(value, true, false)
        value.forEach(email => {
          if (!isEmail(email)) isValid = false
        })
        return isValid
      }
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
      const mail = formatMail(this.mail)

      const buf = []
      for (let i = mail.length - 1; i >= 0; i--) {
        buf.unshift(['&#', mail.charCodeAt(i), ';'].join(''))
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

      let href = ['mailto:', formatMail(this.mail), queryParameters(this.subject, this.body)]
      window.location.href = href.join('')
    }
  }
}
</script>
