import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import './assets/styles/global.css';
import i18n from './i18n/i18n';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

const pinia = createPinia();

createApp(App).use(i18n).use(router).use(pinia).mount('#app')
