import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import 'normalize.css'
import '@/assets/css/index.scss'

Vue.prototype.$echarts = ECharts
Vue.component('v-echarts', VueECharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
