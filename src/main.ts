import { createApp } from 'vue';
import appStore from './app/app.store';
import App from './app/app.vue';
const app = createApp(App);
app.use(appStore);
app.mount('#app');
