import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'


// const token = localStorage.getItem("token")

// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

library.add(fas, fab)
loadFonts()

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app')
