import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

createApp(App)
.mount('#app')
.use(router)
