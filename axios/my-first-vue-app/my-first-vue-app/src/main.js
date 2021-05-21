import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import vueAxios from 'vue-axios'

createApp(App).use(vueAxios,axios).mount('#app')
