import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions' 
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import MeterGroup from 'primevue/metergroup';
import Toolbar from 'primevue/toolbar';
import Avatar from 'primevue/avatar';

const app = createApp(App)
app.use(PrimeVue);
app.use(router)

app.component('Button', Button);
app.component('Card', Card);
app.component('DataView', DataView);
app.component('Tag', Tag);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Panel', Panel);
app.component('Toolbar', Toolbar);
app.component('Toast', Toast);
app.component('Avatar', Avatar);
app.component('MeterGroup', MeterGroup);

app.use(ToastService);
app.mount('#app')
