import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeflex/primeflex.css';
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
const app = createApp(App)
app.use(PrimeVue);
app.use(router)

app.component('Button', Button);

app.mount('#app')
