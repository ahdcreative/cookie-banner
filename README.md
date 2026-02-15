# @ahdcreative/cookie-banner

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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `String` | "This website uses cookies..." | The text to display. |
| `buttonText` | `String` | "Got it!" | Text for the accept button. |
| `theme` | `String` | "base" | Theme name (`base`, `dark`, `lime`, `dark-lime`). |
| `storageName` | `String` | "cookie:accepted" | LocalStorage key to save consent. |

## Themes

- **base**: White background, black button.
- **dark**: Dark gray background, white button.
- **lime**: Lime-tinted background, lime button.
- **dark-lime**: Dark background, lime button (AHD Brand).

## License

MIT
