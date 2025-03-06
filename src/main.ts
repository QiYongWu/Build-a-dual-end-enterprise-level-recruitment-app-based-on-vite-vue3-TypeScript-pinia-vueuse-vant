import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  store  from './store/index.ts'
import {router} from './router/index.ts'
const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#root')
