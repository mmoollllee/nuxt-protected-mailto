# Nuxt Protected Mailto

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> This module tries to protect email-addresses in your Nuxt SSG / SSR project from spam bots without sacrificing usability. The HTML output of the mail gets encoded to HTML Unicode Entities. Mailto: Links will be handled by javascript instead of a `href="mailto:test@example.com"`.

[**Demo**](https://mmoollllee.github.io/nuxt-protected-mailto/)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-protected-mailto?file=playground%2Fapp.vue) -->

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-protected-mailto
# or with npm and manually adding the module to your nuxt.config.ts
npm install nuxt-protected-mailto
```

Use the global `Mailto` [Component](./src/runtime/components/Mailto.vue):

__With the Email as output.__
```html 
<Mailto mail="test@example.com" subject="Optional Example Subject" body="Optional Placeholder Body" title="Write me a email" />
```

__With Caption__
```html 
<Mailto mail="test@example.com" subject="Optional Example Subject" body="Optional Placeholder Body" title="Write me a email">
  Button Caption
</Mailto>
```

__For multiple recipients__
```html
<Mailto mail="test@example.com, test2@example.com" subject="Optional Example Subject" body="Optional Placeholder Body" title="Write me a email" />

<!-- OR -->

<Mailto :mail="['test@example.com', 'test2@example.com']" subject="Optional Example Subject" body="Optional Placeholder Body" title="Write me a email" />
```

That's it! ✨

## What it does

It encodes the email address by hiding it behind a click event when the `Mailto` component is used. When the link is clicked, a `mailto:` url is generated, sending the user to their preferred email application with some prefilled data.

## Props & slots

| Prop      | Value              | Required |
|-----------|--------------------|----------|
| `mail`    | String \| String[] | Yes      |
| `subject` | String             | No       |
| `body`    | String             | No       |
| `cc`      | String \| String[] | No       |
| `bcc`     | String \| String[] | No       |
| `target`  | String \| String[] | No       |

| Slot      | Description                              |
|-----------|------------------------------------------|
| Default   | Valid HTML to display inside the element |

---

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

### Help wanted

This is the Nuxt3 update of [my very first NUXT Module](https://github.com/mmoollllee/nuxt-protected-mailto). Please reach out to me if there is something I could do better.



<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-protected-mailto/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-protected-mailto

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-protected-mailto.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-protected-mailto

[license-src]: https://img.shields.io/npm/l/nuxt-protected-mailto.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-protected-mailto

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
