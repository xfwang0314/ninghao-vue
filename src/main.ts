import {createApp} from 'vue'
import appRouter from './app/app.router'
import App from './app/app.vue'
const app =  createApp(App);
app.use(appRouter)
app.mount("#app");