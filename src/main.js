import Vue from 'vue';
import App from './App.vue';
import dotenv from 'dotenv'
import './plugins/vuetify';

import './plugins/axios';

import router from './router';
import store from './store/store';

dotenv.config();

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return `R$ ${value.toLocaleString()}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
