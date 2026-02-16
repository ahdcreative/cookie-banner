# AHD Creative Cookie Banner

Simple, lightweight, and modern Cookie Consent banner for Vue 3.
Built with TypeScript, Vite, and love. 🍪

## Features

- **Vue 3 & TypeScript**: Native support.
- **Lightweight**: < 2KB (gzipped).
- **Themable**: Includes `base`, `dark`, `lime`, and `dark-lime` themes.
- **Accessible**: Keyboard friendly.

## Installation

```bash
npm install @ahdcreative/cookie-banner
```

## Usage

### Global Registration

In your `main.ts`:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import CookieBanner from '@ahdcreative/cookie-banner'
import '@ahdcreative/cookie-banner/dist/style.css' // Import styles

const app = createApp(App)
app.use(CookieBanner)
app.mount('#app')
```

Then use it anywhere:

```vue
<template>
  <CookieBanner />
</template>
```

### Local Registration

In your component (e.g., `App.vue` or `Footer.vue`):

```vue
<script setup lang="ts">
import { CookieBanner } from '@ahdcreative/cookie-banner'
import '@ahdcreative/cookie-banner/dist/style.css'
</script>

<template>
  <footer>
    <!-- ... -->
    <CookieBanner theme="dark-lime" />
  </footer>
</template>
```

## Internationalization (i18n)

The component supports `en` and `it` out of the box. You can pass a `locale` prop to switch language:

```vue
<CookieBanner locale="it" />
```

Or provide custom translations:

```vue
<CookieBanner 
  locale="es"
  :translations="{
    es: {
      message: 'Este sitio web utiliza cookies.',
      buttonText: '¡Entendido!'
    }
  }"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | `String` | `'en'` | Current locale ('en', 'it'). |
| `translations` | `Object` | `{ en: {...}, it: {...} }` | Translation object with `message` and `buttonText` keys. |
| `message` | `String` | `null` | **Overrides** the translation message. |
| `buttonText` | `String` | `null` | **Overrides** the translation button text. |
| `theme` | `String` | `"base"` | Theme name (`base`, `dark`, `lime`, `dark-lime`). |
| `storageName` | `String` | `"cookie:accepted"` | LocalStorage key to save consent. |

## Themes

- **base**: White background, black button.
- **dark**: Dark gray background, white button.
- **lime**: Lime-tinted background, lime button.
- **dark-lime**: Dark background, lime button (AHD Brand).

## License

MIT
