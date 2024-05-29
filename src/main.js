import './bootstrap.js';
import "./assets/scss/app.scss";

// import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
