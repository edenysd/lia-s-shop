import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/lara-light-teal/theme.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createMetaManager())
app.use(PrimeVue)
app.use(ToastService)
app.directive('tooltip', Tooltip)

app.mount('#app')
