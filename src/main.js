
// Components
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from './plugins/'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'


import { loadFonts } from './plugins/webfontloader'



loadFonts()

const app = createApp(App)
registerPlugins(app)

app
  .use(vuetify)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
  .mount('#app')
