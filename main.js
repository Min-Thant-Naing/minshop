import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faCaretDown)
library.add( faCaretUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import jQuery from '../node_modules/jquery/dist/jquery.min'
// window.$ = window.jQuery = jQuery;
import router from "./router"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
