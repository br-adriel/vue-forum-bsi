import { createApp } from 'vue';
import App from './App.vue';
import controller from './controller';
import router from './routes';

createApp(App).use(router).use(controller).mount('#app');
