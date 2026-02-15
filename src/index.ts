import type { App, Plugin } from 'vue';
import CookieBanner from './components/CookieBanner.vue';

const plugin: Plugin = {
  install(app: App) {
    app.component('CookieBanner', CookieBanner);
  },
};

export { CookieBanner };
export default plugin;
