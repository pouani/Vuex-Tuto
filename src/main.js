import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import "@/assets/styles/tailwind.css";
import "@/assets/styles/tailwind.output.css";

createApp(App).use(router).use(store).mount('#app')
