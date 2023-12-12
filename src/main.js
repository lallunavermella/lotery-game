import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useNumbersStore } from './stores/userNumbers'
import { useLoteryNumbersStore } from './stores/loteryNumbers'
import { useResultGameStore } from './stores/resultGame'
import { useVisibleResultStore } from './stores/visibleResult'

const app = createApp(App)

app.use(createPinia())
export const numbersStore = useNumbersStore()
export const loteryNumbersStore = useLoteryNumbersStore()
export const resultsGameStore = useResultGameStore()
export const visibleResultStore = useVisibleResultStore()

app.mount('#app')
