import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useNumbersStore } from './stores/userNumbers'
import { useLoteryNumbersStore } from './stores/loteryNumbers'
import { useResultGameStore } from './stores/resultGame'

const app = createApp(App)

app.use(createPinia())
export const numbersStore = useNumbersStore()
export const loteryNumbersStore = useLoteryNumbersStore()
export const resultsGameStore = useResultGameStore()

app.mount('#app')
