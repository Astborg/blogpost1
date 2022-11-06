import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import navBar from './components/navbar/navBar.vue';

const app = createApp(App)



app.component('app-navbar', navBar);
app.mount('#app');
app.use(router);





