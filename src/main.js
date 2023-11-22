import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useNumbersStore } from './stores/numbers'

const app = createApp(App)

app.use(createPinia())
export const numbersStore = useNumbersStore()

app.mount('#app')
