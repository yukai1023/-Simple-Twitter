import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import TextareaAutosize from 'vue-textarea-autosize'

Vue.config.productionTip = false
Vue.use(TextareaAutosize)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
