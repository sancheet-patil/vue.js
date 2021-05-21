import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-vue/dist/bootstrap-vue.css"
//import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

createApp(App).mount('#app')

/*
vue2
new Vue({

})
vue2 always use options API data(){},methods:
*/
/*
Vue.createApp({})
Vue3 supports options API as well as composition API
setup(){define data/state, define the functions}
lifecycle methods in options API are different and  composition API
they are different.
*/